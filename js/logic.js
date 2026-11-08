/* Pure helpers for search, quizzes, progress and provenance checks. No DOM. */
(function (root, factory) {
  const api = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (typeof window !== 'undefined') window.Logic = api;
  else if (typeof globalThis !== 'undefined') globalThis.Logic = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  const STORAGE_KEY = 'adhd-clinical-learning-draft-v1';

  function emptyProgress() {
    return { read: {}, quizzes: {}, interactions: {}, updated: null };
  }

  function memoryStore(initial) {
    let data = normalise(initial || emptyProgress());
    return {
      get: function () { return data; },
      markRead: function (id, at) {
        const when = at || new Date().toISOString();
        data = {
          read: Object.assign({}, data.read, { [id]: when }),
          quizzes: data.quizzes,
          interactions: data.interactions,
          updated: when
        };
      },
      saveQuiz: function (id, result, at) {
        const prev = data.quizzes[id] || { best: 0 };
        const when = at || new Date().toISOString();
        data = {
          read: data.read,
          quizzes: Object.assign({}, data.quizzes, {
            [id]: { best: Math.max(prev.best || 0, result.percent), last: result.percent, at: when }
          }),
          interactions: data.interactions,
          updated: when
        };
      },
      saveInteraction: function (id, record, at) {
        const when = at || new Date().toISOString();
        data = {
          read: data.read,
          quizzes: data.quizzes,
          interactions: Object.assign({}, data.interactions, {
            [id]: { done: true, matched: !!(record && record.matched), at: when }
          }),
          updated: when
        };
      },
      reset: function () { data = emptyProgress(); }
    };
  }

  function normalise(raw) {
    const base = emptyProgress();
    if (!raw || typeof raw !== 'object') return base;
    base.read = raw.read && typeof raw.read === 'object' ? raw.read : {};
    base.quizzes = raw.quizzes && typeof raw.quizzes === 'object' ? raw.quizzes : {};
    base.interactions = raw.interactions && typeof raw.interactions === 'object' ? raw.interactions : {};
    base.updated = raw.updated || null;
    return base;
  }

  function resetProgress(store) {
    store.reset();
    return store.get();
  }

  function textOf(value) {
    if (value == null) return '';
    if (typeof value === 'string') return value;
    if (Array.isArray(value)) return value.map(textOf).join(' ');
    if (typeof value === 'object') {
      return Object.keys(value).map(function (key) { return textOf(value[key]); }).join(' ');
    }
    return String(value);
  }

  function buildCorpus(input) {
    const course = input.course || [];
    const additions = input.additions || [];
    const glossary = input.glossary || [];
    const items = [];
    course.forEach(function (mod) {
      items.push({
        id: mod.id,
        kind: 'course',
        title: 'Module ' + mod.num + '. ' + mod.title,
        text: [mod.scope, 'Course lesson summary pending. Lesson teaching has not been reviewed.'].join(' '),
        href: '#/course/' + mod.id,
        provenance: mod.provenance,
        status: 'overview-only'
      });
    });
    additions.forEach(function (lesson) {
      items.push({
        id: lesson.id,
        kind: 'addition',
        title: lesson.title,
        text: textOf(lesson.blocks) + ' ' + textOf(lesson.objectives) + ' ' + textOf(lesson.quiz),
        href: '#/additions/' + lesson.id,
        provenance: lesson.provenance,
        status: 'educational-draft'
      });
    });
    glossary.forEach(function (entry) {
      items.push({
        id: 'g-' + entry.id,
        kind: 'glossary',
        title: entry.term,
        text: entry.plain + ' ' + (entry.detail || ''),
        href: '#/glossary?term=' + encodeURIComponent(entry.id),
        provenance: 'independent-supplement',
        status: 'glossary'
      });
    });
    return items;
  }

  function search(query, corpus) {
    const q = String(query || '').trim().toLowerCase();
    if (q.length < 2) return [];
    const terms = q.split(/\s+/).filter(Boolean);
    return corpus.map(function (item) {
      const hay = (item.title + ' ' + item.text).toLowerCase();
      if (!terms.every(function (term) { return hay.indexOf(term) !== -1; })) return null;
      let score = item.title.toLowerCase().indexOf(q) !== -1 ? 8 : 0;
      terms.forEach(function (term) {
        score += hay.split(term).length - 1;
      });
      if (item.kind === 'addition') score += 1;
      return Object.assign({}, item, { score: score });
    }).filter(Boolean).sort(function (a, b) {
      return b.score - a.score || a.title.localeCompare(b.title);
    });
  }

  function nextId(ids, id) {
    const index = ids.indexOf(id);
    if (index < 0 || index === ids.length - 1) return null;
    return ids[index + 1];
  }

  function prevId(ids, id) {
    const index = ids.indexOf(id);
    if (index <= 0) return null;
    return ids[index - 1];
  }

  function scoreQuiz(quiz, answers) {
    const picked = answers || {};
    const items = (quiz || []).map(function (question) {
      const choice = Object.prototype.hasOwnProperty.call(picked, question.id) ? picked[question.id] : null;
      return {
        id: question.id,
        picked: choice,
        correct: choice === question.answer,
        answer: question.answer,
        why: question.why,
        whyNot: question.whyNot || {}
      };
    });
    const correct = items.filter(function (item) { return item.correct; }).length;
    const total = items.length;
    return {
      correct: correct,
      total: total,
      percent: total ? Math.round((100 * correct) / total) : 0,
      items: items
    };
  }

  function courseIsPending(course) {
    const problems = [];
    (course || []).forEach(function (mod) {
      if (mod.provenance !== 'overview-only') {
        problems.push(mod.id + ' provenance is ' + mod.provenance);
      }
      if (!mod.lessons || !mod.lessons.length) {
        problems.push(mod.id + ' has no pending lesson slot');
      }
      (mod.lessons || []).forEach(function (lesson) {
        if (lesson.status !== 'course-pending') problems.push(lesson.id + ' is not course-pending');
        const summary = lesson.summary == null ? '' : String(lesson.summary).trim();
        const body = lesson.body == null ? '' : String(lesson.body).trim();
        if (summary || body) problems.push(lesson.id + ' has fabricated summary text');
      });
    });
    return { ok: problems.length === 0, problems: problems };
  }

  function additionIds(additions) {
    return (additions || []).map(function (lesson) { return lesson.id; });
  }

  function moveItem(order, id, delta) {
    const next = order.slice();
    const index = next.indexOf(id);
    const target = index + delta;
    if (index < 0 || target < 0 || target >= next.length) return next;
    const held = next[index];
    next[index] = next[target];
    next[target] = held;
    return next;
  }

  function sequenceCheck(order, expectedIds) {
    const items = order.map(function (id, index) {
      return { id: id, index: index, expected: expectedIds.indexOf(id), inPlace: expectedIds[index] === id };
    });
    return {
      allInPlace: items.length > 0 && items.every(function (item) { return item.inPlace; }),
      items: items,
      diagnoses: false
    };
  }

  function decisionResult(choice) {
    return {
      id: choice.id,
      fit: choice.fit,
      explain: choice.explain,
      matched: choice.fit === 'open',
      diagnoses: false
    };
  }

  function evidenceMapCheck(assignments, pieces, conclusion) {
    const rows = pieces.map(function (piece) {
      const assigned = assignments ? assignments[piece.id] : null;
      return { id: piece.id, assigned: assigned || null, expected: piece.lane, matched: assigned === piece.lane };
    });
    return {
      pieces: rows,
      piecesMatched: rows.filter(function (row) { return row.matched; }).length,
      conclusionId: conclusion ? conclusion.id : null,
      overclaims: conclusion ? conclusion.overclaims === true : null,
      matched: !!(conclusion && conclusion.overclaims === false && rows.every(function (row) { return row.matched; })),
      diagnoses: false
    };
  }

  return {
    STORAGE_KEY: STORAGE_KEY,
    emptyProgress: emptyProgress,
    memoryStore: memoryStore,
    resetProgress: resetProgress,
    buildCorpus: buildCorpus,
    search: search,
    nextId: nextId,
    prevId: prevId,
    scoreQuiz: scoreQuiz,
    courseIsPending: courseIsPending,
    additionIds: additionIds,
    moveItem: moveItem,
    sequenceCheck: sequenceCheck,
    decisionResult: decisionResult,
    evidenceMapCheck: evidenceMapCheck
  };
});
