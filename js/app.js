(function () {
  const L = window.Logic;
  const STATUS = window.STATUS;
  const SOURCES = window.SOURCES;
  const COURSE = window.COURSE;
  const ADDITIONS = window.ADDITIONS.concat(window.ADDITIONS_B);
  const GLOSSARY = window.GLOSSARY;
  const DIAGRAMS = window.DIAGRAMS;
  const corpus = L.buildCorpus({ course: COURSE, additions: ADDITIONS, glossary: GLOSSARY });
  const additionIds = L.additionIds(ADDITIONS);
  const byAddition = {};
  ADDITIONS.forEach(function (lesson) { byAddition[lesson.id] = lesson; });
  const byCourse = {};
  COURSE.forEach(function (mod) { byCourse[mod.id] = mod; });

  const main = document.getElementById('main');
  const nav = document.getElementById('nav');
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('q');
  const menuBtn = document.getElementById('menu');
  const progressEl = document.getElementById('progress');
  const live = document.getElementById('live');

  const store = L.memoryStore(readStore());
  let quizState = null;

  function readStore() {
    try { return JSON.parse(localStorage.getItem(L.STORAGE_KEY) || 'null'); }
    catch (err) { return null; }
  }
  function persist() {
    try { localStorage.setItem(L.STORAGE_KEY, JSON.stringify(store.get())); }
    catch (err) { /* private mode */ }
    paintProgress();
  }
  function paintProgress() {
    const read = Object.keys(store.get().read).length;
    const total = ADDITIONS.length;
    progressEl.innerHTML = '<span class="full">' + read + ' of ' + total + ' additions read</span><span class="compact">' + read + '/' + total + ' read</span>';
  }

  function esc(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
  function rich(value) {
    return esc(value).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  }
  function source(id) {
    return SOURCES.byId[id] || { id: id, short: id, href: '#/sources', grade: 'T', title: id, note: '', locator: '' };
  }
  function gradeName(grade) {
    return { G: 'Guideline', D: 'Diagnostic standard', C: 'Consensus', P: 'Public information', T: 'Teaching synthesis' }[grade] || grade;
  }

  function parseRoute() {
    const raw = (location.hash || '#/').replace(/^#/, '');
    const bits = raw.split('?');
    const path = bits[0].replace(/\/+$/, '') || '/';
    const params = new URLSearchParams(bits[1] || '');
    const parts = path.split('/').filter(Boolean);
    return { path: path, parts: parts, params: params };
  }

  function go(hash) {
    if (location.hash === hash) render();
    else location.hash = hash;
  }

  menuBtn.addEventListener('click', function () {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.getElementById('backdrop').hidden = !open;
  });
  document.getElementById('backdrop').addEventListener('click', closeNav);
  function closeNav() {
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.getElementById('backdrop').hidden = true;
  }

  searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    go('#/search?q=' + encodeURIComponent(searchInput.value.trim()));
  });

  document.addEventListener('keydown', function (event) {
    const tag = document.activeElement && document.activeElement.tagName;
    const typing = tag === 'INPUT' || tag === 'TEXTAREA' || (document.activeElement && document.activeElement.isContentEditable);
    if (event.key === '/' && !typing) {
      event.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
    if (event.key === 'Escape') {
      closeNav();
      const dialog = document.getElementById('confirm');
      if (dialog && dialog.open) dialog.close();
    }
  });

  window.addEventListener('hashchange', render);

  function paintNav(route) {
    const current = route.path;
    nav.innerHTML =
      '<a class="side-link" href="#/" data-path="/"><span class="num">H</span><span>Home</span></a>' +
      '<p class="navhead">Course topics · summaries pending</p>' +
      COURSE.map(function (mod) {
        return '<a class="side-link" href="#/course/' + mod.id + '" data-path="/course/' + mod.id + '"><span class="num">' + mod.num + '</span><span>' + esc(mod.title) + '<small>Overview only</small></span></a>';
      }).join('') +
      '<p class="navhead">Evidence-based additions · draft</p>' +
      ADDITIONS.map(function (lesson, index) {
        return '<a class="side-link" href="#/additions/' + lesson.id + '" data-path="/additions/' + lesson.id + '"><span class="num">' + (index + 1) + '</span><span>' + esc(lesson.title) + '<small>Independent supplement</small></span></a>';
      }).join('') +
      '<p class="navhead">Study tools</p>' +
      '<a class="side-link" href="#/glossary" data-path="/glossary"><span class="num">G</span><span>Glossary and flashcards</span></a>' +
      '<a class="side-link" href="#/practice" data-path="/practice"><span class="num">Q</span><span>Practice quizzes</span></a>' +
      '<a class="side-link" href="#/sources" data-path="/sources"><span class="num">S</span><span>Sources and status</span></a>' +
      '<a class="side-link" href="#/progress" data-path="/progress"><span class="num">P</span><span>Progress</span></a>';
    Array.prototype.forEach.call(nav.querySelectorAll('a'), function (link) {
      if (link.getAttribute('data-path') === current) link.setAttribute('aria-current', 'page');
    });
  }

  function render() {
    const route = parseRoute();
    closeNav();
    quizState = null;
    paintNav(route);
    const page = route.parts[0] || 'home';
    if (page !== 'search') searchInput.value = '';
    let html = '';
    let title = STATUS.title;
    if (page === 'home') {
      html = viewHome();
      title = STATUS.title;
    } else if (page === 'course' && byCourse[route.parts[1]]) {
      html = viewCourse(byCourse[route.parts[1]]);
      title = byCourse[route.parts[1]].title;
    } else if (page === 'additions' && byAddition[route.parts[1]]) {
      html = viewAddition(byAddition[route.parts[1]]);
      title = byAddition[route.parts[1]].title;
    } else if (page === 'glossary') {
      html = viewGlossary(route.params.get('term'));
      title = 'Glossary';
    } else if (page === 'practice') {
      html = viewPractice();
      title = 'Practice';
    } else if (page === 'sources') {
      html = viewSources();
      title = 'Sources';
    } else if (page === 'progress') {
      html = viewProgress();
      title = 'Progress';
    } else if (page === 'search') {
      html = viewSearch(route.params.get('q') || '');
      title = 'Search';
    } else {
      html = '<h1>Page not in this draft</h1><p><a href="#/">Return home</a></p>';
    }
    main.innerHTML = html;
    document.title = title + ' · ' + STATUS.title;
    bind(main);
    const heading = main.querySelector('h1');
    if (heading) heading.setAttribute('tabindex', '-1');
    if (heading && document.activeElement !== searchInput) heading.focus();
    live.textContent = title;
    paintProgress();
  }

  function viewHome() {
    return '<p class="kicker">Educational draft · reviewed against public sources on ' + esc(STATUS.reviewDate) + '</p>' +
      '<section class="hero"><div><p class="draft-flag">Draft scaffold · not a validated programme</p><h1>' + esc(STATUS.title) + '</h1>' +
      '<p>A study companion for ADHD assessment and diagnosis. The seven course topics are in place. Their lesson summaries are empty until the teaching itself has been reviewed. The pages after them are separate, source-linked explanations.</p></div>' +
      '<div><p><strong>What this is not</strong></p><p>' + esc(STATUS.affiliation) + '</p><p>' + esc(STATUS.recordingsNote) + '</p></div></section>' +
      '<div class="banner"><strong>Education, not personal medical advice.</strong> ' + esc(STATUS.adviceNote) + ' Completing these pages does not qualify anyone to assess or prescribe.</div>' +
      '<h2>How to read the labels</h2><div class="legend">' +
      '<span class="pill warn">Overview only</span><span class="pill coral">Course summary pending</span><span class="pill">Independent supplement</span><span class="pill navy">Educational draft</span></div>' +
      '<p>Overview only means the topic is known from the course outline, not from the lesson. An independent supplement is written from public guidance and is not a summary of a teacher’s recording.</p>' +
      '<div class="grid-2"><section><h2>Seven course topics</h2>' +
      COURSE.map(function (mod) {
        return '<a class="mcard" href="#/course/' + mod.id + '"><span class="pill warn">Overview only</span><h3>' + mod.num + '. ' + esc(mod.title) + '</h3><p>' + esc(mod.scope) + '</p></a>';
      }).join('') +
      '</section><section><h2>Evidence-based additions</h2><p>Draft explanations for study. They do not fill the empty course summaries.</p>' +
      ADDITIONS.map(function (lesson) {
        return '<a class="mcard" href="#/additions/' + lesson.id + '"><span class="pill">Independent supplement</span><h3>' + esc(lesson.title) + '</h3><p>Editorial estimate ' + lesson.minutes + ' minutes · ' + lesson.quiz.length + ' questions with reasons</p></a>';
      }).join('') +
      '</section></div>' + foot();
  }

  function viewCourse(mod) {
    const related = mod.related.map(function (id) {
      const lesson = byAddition[id];
      return lesson ? '<a class="mcard" href="#/additions/' + id + '"><span class="pill">Independent supplement</span><h3>' + esc(lesson.title) + '</h3><p>Draft. Not the course lesson.</p></a>' : '';
    }).join('');
    return '<p class="kicker">Course topic ' + mod.num + ' of 7</p><h1>' + esc(mod.title) + '</h1>' +
      '<p><span class="pill warn">Overview only</span> <span class="pill coral">Course summary pending</span></p>' +
      '<div class="banner"><strong>The lesson teaching has not been reviewed.</strong> No recording, caption or download was used. The summary is empty on purpose. Do not read this page as the teacher’s content.</div>' +
      '<p>' + esc(mod.scope) + '</p>' +
      mod.lessons.map(function (lesson) {
        return '<section class="empty" data-provenance="course-pending"><h2>' + esc(lesson.title) + '</h2><p>Status: pending. Nothing is written here. A summary will be added only after a verified review of the lesson.</p></section>';
      }).join('') +
      '<h2>Related evidence-based additions</h2><p>These are separate draft pages. They are not substitutes for the missing course summary.</p><div class="cards">' + related + '</div>' + foot();
  }

  function viewAddition(lesson) {
    const index = additionIds.indexOf(lesson.id);
    const prev = L.prevId(additionIds, lesson.id);
    const next = L.nextId(additionIds, lesson.id);
    const read = store.get().read[lesson.id];
    return '<p class="kicker">Evidence-based addition ' + (index + 1) + ' of ' + ADDITIONS.length + ' · editorial estimate ' + lesson.minutes + ' min</p>' +
      '<h1>' + esc(lesson.title) + '</h1>' +
      '<p><span class="pill">Independent supplement</span> <span class="pill navy">Educational draft</span> <span class="pill warn">Not a course summary</span></p>' +
      '<div class="banner"><strong>This page is not the course teaching.</strong> It was written from public sources for study. It is not validated, it needs specialist review before anyone treats it as a training programme, and it must not be read as a lesson-by-lesson account of a paid course. Sources checked ' + esc(STATUS.reviewDate) + '.</div>' +
      '<div class="objectives"><strong>By the end of this draft page you can</strong><ul>' +
      lesson.objectives.map(function (item) { return '<li>' + esc(item) + '</li>'; }).join('') + '</ul></div>' +
      lesson.blocks.map(renderBlock).join('') +
      renderEvidence(lesson) +
      renderCards(lesson) +
      renderQuiz(lesson) +
      '<div class="pager">' +
      (prev ? '<a class="btn secondary" href="#/additions/' + prev + '">Previous addition</a>' : '<span></span>') +
      '<button class="btn" type="button" data-read="' + lesson.id + '">' + (read ? 'Read locally' : 'Mark addition as read') + '</button>' +
      (next ? '<a class="btn secondary" href="#/additions/' + next + '">Next addition</a>' : '<a class="btn secondary" href="#/practice">All quizzes</a>') +
      '</div>' +
      '<p class="src">Local only. Marking this read does not complete a course lesson. Course summaries are still pending.</p>' + foot();
  }

  function renderBlock(block) {
    if (block.type === 'p') return '<p>' + rich(block.text) + '</p>';
    if (block.type === 'h') return '<h2>' + esc(block.text) + '</h2>';
    if (block.type === 'callout') {
      return '<div class="callout ' + esc(block.kind) + '"><strong>' + esc(block.title) + '.</strong> ' + rich(block.text) + '</div>';
    }
    if (block.type === 'cards') {
      return '<div class="cards">' + block.items.map(function (item) {
        return '<article><p class="tag">' + esc(item.tag || 'Note') + '</p><h3>' + esc(item.title) + '</h3><p>' + esc(item.text) + '</p></article>';
      }).join('') + '</div>';
    }
    if (block.type === 'diagram') return renderDiagram(block.id);
    if (block.type === 'vignette') {
      return '<article class="vignette"><header><p class="tag" style="color:#f2a541">Fictional vignette</p><p><strong>' + esc(block.title) + '</strong></p></header><div class="body"><p>' + esc(block.text) + '</p></div></article>';
    }
    if (block.type === 'table') {
      return '<div class="table-wrap"><table><caption>' + esc(block.caption) + '</caption><thead><tr>' +
        block.headers.map(function (cell) { return '<th scope="col">' + esc(cell) + '</th>'; }).join('') +
        '</tr></thead><tbody>' + block.rows.map(function (row) {
          return '<tr>' + row.map(function (cell) { return '<td>' + esc(cell) + '</td>'; }).join('') + '</tr>';
        }).join('') + '</tbody></table></div>';
    }
    if (block.type === 'recap') {
      return '<section class="recap"><h2>About a minute of recap</h2><ul>' + block.items.map(function (item) {
        return '<li>' + esc(item) + '</li>';
      }).join('') + '</ul></section>';
    }
    return '';
  }

  function renderDiagram(id) {
    const diagram = DIAGRAMS[id];
    if (!diagram) return '';
    return '<figure class="diagram"><div>' + diagram.svg + '</div><figcaption>' + esc(diagram.alt) + '</figcaption></figure>';
  }

  function renderEvidence(lesson) {
    return '<section class="evidence"><h2>Evidence drawer</h2><p>Each claim names its authority. “Teaching synthesis” is an explanation, not a recommendation.</p>' +
      lesson.evidence.map(function (item) {
        const src = source(item.source);
        return '<article><p><span class="pill">' + esc(item.grade) + ' · ' + esc(gradeName(item.grade)) + '</span></p><p>' + esc(item.claim) + '</p><p class="src"><a href="' + esc(src.href) + '">' + esc(src.short) + '</a> · ' + esc(item.locator) + ' · accessed ' + esc(src.accessed) + '</p><p class="src">Limit: ' + esc(item.limit) + '</p></article>';
      }).join('') + '</section>';
  }

  function renderCards(lesson) {
    return '<section class="flip-box" data-deck="' + lesson.id + '"><h2>Flashcards</h2><p>One card. Flip it, then move on. These are study prompts, not clinical findings.</p>' +
      '<p id="card-face" class="flip" tabindex="0" role="button" aria-pressed="false"></p>' +
      '<div class="pager"><button class="btn secondary" type="button" data-card="prev">Previous card</button><button class="btn" type="button" data-card="flip">Flip</button><button class="btn secondary" type="button" data-card="next">Next card</button></div>' +
      '<p class="src" id="card-count"></p></section>';
  }

  function renderQuiz(lesson) {
    return '<section class="quiz panel" data-quiz="' + lesson.id + '"><h2>Retrieval quiz</h2><p>One question at a time. The reason is shown after you answer. A score stays in this browser only. It does not say whether anyone has ADHD.</p>' +
      '<div class="dots" id="dots"></div><div id="quiz-body"></div></section>';
  }

  function viewGlossary(term) {
    const cards = GLOSSARY.map(function (entry) {
      const open = term === entry.id;
      return '<article class="panel" id="' + esc(entry.id) + '"><h2>' + esc(entry.term) + '</h2><p>' + esc(entry.plain) + '</p><p>' + esc(entry.detail) + '</p>' +
        (open ? '<p class="pill">Matched from search</p>' : '') + '</article>';
    }).join('');
    return '<p class="kicker">Independent supplement</p><h1>Glossary</h1><p>Short definitions for this draft. They are not copied diagnostic criteria.</p>' +
      '<div class="flip-box" data-deck="glossary"><h2>Glossary flashcards</h2><p id="card-face" class="flip" tabindex="0" role="button"></p><div class="pager"><button class="btn secondary" type="button" data-card="prev">Previous</button><button class="btn" type="button" data-card="flip">Flip</button><button class="btn secondary" type="button" data-card="next">Next</button></div><p class="src" id="card-count"></p></div>' +
      cards + foot();
  }

  function viewPractice() {
    const saved = store.get().quizzes;
    return '<p class="kicker">Practice on the draft additions only</p><h1>Quizzes</h1><p>Course lessons have no quiz, because their teaching has not been reviewed. These questions belong to the independent supplements.</p>' +
      '<div class="cards">' + ADDITIONS.map(function (lesson) {
        const score = saved[lesson.id];
        return '<a class="mcard" href="#/additions/' + lesson.id + '"><h3>' + esc(lesson.title) + '</h3><p>' + lesson.quiz.length + ' questions</p><p>' +
          (score ? 'Best ' + score.best + '% · last ' + score.last + '%' : 'Not tried yet') + '</p></a>';
      }).join('') + '</div>' + foot();
  }

  function viewSources() {
    return '<p class="kicker">Checked ' + esc(STATUS.reviewDate) + '</p><h1>Sources and status</h1>' +
      '<div class="banner"><strong>Currency.</strong> The NG87 overview was last reviewed on 23 July 2026, with a decision not to update the recommendations on adapted trauma-focused treatment. The recommendations chapter still shows a last update of 13 September 2019. Recommendation 1.3.1 also contains a 2024 QbTest sentence. HTG729 was published on 21 October 2024. Do not describe every recommendation as 2026 evidence. Licensing notes inside NG87 are historical.</div>' +
      '<div class="banner"><strong>Status of this site.</strong> ' + esc(STATUS.recordingsNote) + ' ' + esc(STATUS.affiliation) + ' Specialist review is still required. This is not accredited training.</div>' +
      '<p>NICE pathways are not identical in every UK nation. Right to Choose wording on the NHS page is about England. Shared care, medicine availability and product licences were not re-audited as a formulary.</p>' +
      SOURCES.list.map(function (item) {
        return '<article class="panel"><p><span class="pill">' + esc(item.grade) + ' · ' + esc(gradeName(item.grade)) + '</span></p><h2>' + esc(item.short) + '</h2><p>' + esc(item.title) + '</p><p><a href="' + esc(item.href) + '">' + esc(item.href) + '</a></p><p>' + esc(item.locator) + '</p><p>' + esc(item.note) + '</p><p class="src">Accessed ' + esc(item.accessed) + '</p></article>';
      }).join('') +
      '<h2>Still out of scope</h2><ul><li>Hormone-specific treatment rules.</li><li>Current stock shortages and marketing authorisations.</li><li>Northern Ireland driving rules.</li><li>A full legal consent or safeguarding manual.</li><li>Any claim to have covered a paid course lesson by lesson.</li></ul>' + foot();
  }

  function viewProgress() {
    const data = store.get();
    const rows = ADDITIONS.map(function (lesson) {
      const read = data.read[lesson.id];
      const quiz = data.quizzes[lesson.id];
      return '<tr><td>' + esc(lesson.title) + '</td><td>' + (read ? 'Read' : 'Not marked') + '</td><td>' + (quiz ? quiz.best + '%' : '—') + '</td></tr>';
    }).join('');
    return '<h1>Progress on this browser</h1><p>Stored locally under a draft key. Nothing is sent to a server. Course lessons cannot be marked complete, because they have no reviewed summary.</p>' +
      '<div class="table-wrap"><table><caption>Addition progress</caption><thead><tr><th scope="col">Addition</th><th scope="col">Read</th><th scope="col">Best quiz</th></tr></thead><tbody>' +
      rows + '</tbody></table></div><button class="btn danger" type="button" id="reset">Reset local progress</button>' + foot();
  }

  function viewSearch(query) {
    searchInput.value = query;
    const hits = L.search(query, corpus);
    const body = query.trim().length < 2
      ? '<p>Type at least two characters. Try “QbTest”, “informant”, or “report”.</p>'
      : (hits.length ? '<p>' + hits.length + ' matches. Course hits are topic labels only.</p>' + hits.map(function (hit) {
          return '<a class="mcard" href="' + esc(hit.href) + '"><span class="pill ' + (hit.kind === 'course' ? 'warn' : '') + '">' + esc(hit.kind) + ' · ' + esc(hit.status) + '</span><h3>' + esc(hit.title) + '</h3><p>' + esc(snippet(hit.text, query)) + '</p></a>';
        }).join('') : '<p>No matches in this draft.</p>');
    return '<h1>Search</h1><form id="search-again" role="search"><label class="sr" for="q2">Search again</label><input id="q2" name="q" value="' + esc(query) + '" minlength="2"><button class="btn" type="submit">Search</button></form>' + body + foot();
  }

  function snippet(text, query) {
    const hay = text.replace(/\s+/g, ' ');
    const at = hay.toLowerCase().indexOf(query.trim().toLowerCase().split(/\s+/)[0]);
    const start = Math.max(0, at - 80);
    return (start ? '…' : '') + hay.slice(start, start + 220) + (hay.length > start + 220 ? '…' : '');
  }

  function foot() {
    return '<footer class="note"><p>' + esc(STATUS.affiliation) + ' ' + esc(STATUS.adviceNote) + ' Keyboard: / focuses search, Escape closes the menu, Tab moves through the page, arrow keys move inside a quiz group.</p></footer>';
  }

  function bind(root) {
    const readBtn = root.querySelector('[data-read]');
    if (readBtn) {
      readBtn.addEventListener('click', function () {
        store.markRead(readBtn.getAttribute('data-read'));
        persist();
        readBtn.textContent = 'Read locally';
      });
    }
    bindDeck(root);
    bindQuiz(root);
    const reset = root.querySelector('#reset');
    if (reset) {
      reset.addEventListener('click', function () {
        const dialog = document.getElementById('confirm');
        dialog.showModal();
      });
    }
    const again = root.querySelector('#search-again');
    if (again) {
      again.addEventListener('submit', function (event) {
        event.preventDefault();
        go('#/search?q=' + encodeURIComponent(again.q.value.trim()));
      });
    }
  }

  function deckFor(id) {
    if (id === 'glossary') {
      return GLOSSARY.map(function (entry) { return { front: entry.term, back: entry.plain + ' ' + entry.detail }; });
    }
    const lesson = byAddition[id];
    return lesson ? lesson.cards : [];
  }

  function bindDeck(root) {
    const box = root.querySelector('[data-deck]');
    if (!box) return;
    const cards = deckFor(box.getAttribute('data-deck'));
    let index = 0;
    let flipped = false;
    const face = box.querySelector('#card-face');
    const count = box.querySelector('#card-count');
    function paint() {
      const card = cards[index];
      face.classList.toggle('back', flipped);
      face.innerHTML = '<strong>' + (flipped ? 'Back' : 'Front') + '</strong><br>' + esc(flipped ? card.back : card.front);
      count.textContent = 'Card ' + (index + 1) + ' of ' + cards.length;
    }
    function flip() { flipped = !flipped; paint(); }
    face.addEventListener('click', flip);
    face.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); flip(); }
      if (event.key === 'ArrowRight') step(1);
      if (event.key === 'ArrowLeft') step(-1);
    });
    box.querySelector('[data-card="flip"]').addEventListener('click', flip);
    box.querySelector('[data-card="next"]').addEventListener('click', function () { step(1); });
    box.querySelector('[data-card="prev"]').addEventListener('click', function () { step(-1); });
    function step(delta) {
      index = (index + delta + cards.length) % cards.length;
      flipped = false;
      paint();
    }
    paint();
  }

  function bindQuiz(root) {
    const box = root.querySelector('[data-quiz]');
    if (!box) return;
    const lesson = byAddition[box.getAttribute('data-quiz')];
    quizState = { lesson: lesson, index: 0, picked: null, locked: false, answers: {} };
    paintQuiz();
  }

  function paintQuiz() {
    const state = quizState;
    const lesson = state.lesson;
    const question = lesson.quiz[state.index];
    const dots = document.getElementById('dots');
    const body = document.getElementById('quiz-body');
    if (!dots || !body) return;
    dots.innerHTML = lesson.quiz.map(function (_, index) {
      return '<span class="' + (index === state.index ? 'on' : '') + '"></span>';
    }).join('');
    if (state.index >= lesson.quiz.length) {
      const result = L.scoreQuiz(lesson.quiz, state.answers);
      store.saveQuiz(lesson.id, result);
      persist();
      body.innerHTML = '<p class="stem">Score: ' + result.correct + ' of ' + result.total + ' (' + result.percent + '%).</p>' +
        '<p>This score is practice on a draft page. It is not a clinical result.</p>' +
        result.items.map(function (item, index) {
          const qn = lesson.quiz[index];
          return '<article class="expl"><p><strong>' + (item.correct ? 'Matched' : 'Review') + '.</strong> ' + esc(qn.stem) + '</p><p>' + esc(item.why) + '</p></article>';
        }).join('') +
        '<button class="btn" type="button" id="quiz-retry">Try again</button>';
      document.getElementById('quiz-retry').addEventListener('click', function () {
        quizState = { lesson: lesson, index: 0, picked: null, locked: false, answers: {} };
        paintQuiz();
      });
      return;
    }
    body.innerHTML = '<p class="stem">Question ' + (state.index + 1) + ' of ' + lesson.quiz.length + '. ' + esc(question.stem) + '</p>' +
      '<div class="opts" role="radiogroup" aria-label="Answers">' + question.options.map(function (option) {
        return '<button class="opt" type="button" role="radio" aria-checked="' + (state.picked === option.id ? 'true' : 'false') + '" data-option="' + option.id + '">' + esc(option.text) + '</button>';
      }).join('') + '</div>' +
      '<button class="btn" type="button" id="quiz-check"' + (state.picked ? '' : ' disabled') + '>Check answer</button>' +
      '<div id="quiz-expl" aria-live="polite"></div>';
    Array.prototype.forEach.call(body.querySelectorAll('[data-option]'), function (button) {
      button.addEventListener('click', function () {
        if (state.locked) return;
        state.picked = button.getAttribute('data-option');
        paintQuiz();
      });
    });
    const group = body.querySelector('.opts');
    group.addEventListener('keydown', function (event) {
      const buttons = Array.prototype.slice.call(group.querySelectorAll('[data-option]'));
      const current = buttons.findIndex(function (button) { return button.getAttribute('aria-checked') === 'true'; });
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        event.preventDefault();
        const next = buttons[Math.min(buttons.length - 1, current + 1)] || buttons[0];
        state.picked = next.getAttribute('data-option');
        paintQuiz();
        const fresh = document.querySelector('[data-option="' + state.picked + '"]');
        if (fresh) fresh.focus();
      }
      if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        event.preventDefault();
        const next = buttons[Math.max(0, current - 1)] || buttons[0];
        state.picked = next.getAttribute('data-option');
        paintQuiz();
        const fresh = document.querySelector('[data-option="' + state.picked + '"]');
        if (fresh) fresh.focus();
      }
    });
    document.getElementById('quiz-check').addEventListener('click', function () {
      if (!state.picked) return;
      state.locked = true;
      state.answers[question.id] = state.picked;
      const correct = state.picked === question.answer;
      Array.prototype.forEach.call(body.querySelectorAll('[data-option]'), function (button) {
        const id = button.getAttribute('data-option');
        if (id === question.answer) button.classList.add('correct');
        else if (id === state.picked) button.classList.add('wrong');
        button.disabled = true;
      });
      const whyNot = question.whyNot || {};
      const extra = Object.keys(whyNot).filter(function (id) { return id !== question.answer; }).map(function (id) {
        const label = question.options.filter(function (option) { return option.id === id; })[0];
        return '<p><strong>Why this other answer does not fit.</strong> ' + esc(label ? label.text : id) + ' — ' + esc(whyNot[id]) + '</p>';
      }).join('');
      document.getElementById('quiz-expl').innerHTML = '<div class="expl"><p><strong>' + (correct ? 'That matches the source used here.' : 'Not this one.') + '</strong> ' + esc(question.why) + '</p>' + extra +
        '<p class="src">' + question.sources.map(function (id) { const src = source(id); return '<a href="' + esc(src.href) + '">' + esc(src.short) + '</a>'; }).join(' · ') + '</p>' +
        '<button class="btn" type="button" id="quiz-next">' + (state.index === lesson.quiz.length - 1 ? 'See score' : 'Next question') + '</button></div>';
      document.getElementById('quiz-check').disabled = true;
      document.getElementById('quiz-next').addEventListener('click', function () {
        state.index += 1;
        state.picked = null;
        state.locked = false;
        paintQuiz();
      });
    });
  }

  document.getElementById('reset-yes').addEventListener('click', function () {
    L.resetProgress(store);
    persist();
    document.getElementById('confirm').close();
    if ((location.hash || '').indexOf('#/progress') === 0) render();
    else paintProgress();
    live.textContent = 'Local progress reset';
  });

  render();
})();
