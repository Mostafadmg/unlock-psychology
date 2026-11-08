const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const Logic = require(path.join(root, 'js/logic.js'));
const STATUS = require(path.join(root, 'js/data/status.js'));
const SOURCES = require(path.join(root, 'js/data/sources.js'));
const COURSE = require(path.join(root, 'js/data/course.js'));
const INTRO = require(path.join(root, 'js/data/introduction.js'));
const ADDITIONS = require(path.join(root, 'js/data/additions.js')).concat(require(path.join(root, 'js/data/additions-b.js')));
const GLOSSARY = require(path.join(root, 'js/data/glossary.js'));
const DIAGRAMS = require(path.join(root, 'js/diagrams.js'));
const ILLUSTRATIONS = require(path.join(root, 'js/data/illustrations.js'));
const PRACTICE = require(path.join(root, 'js/data/practice.js'));

let passed = 0;
function test(name, fn) {
  fn();
  passed += 1;
  console.log('ok', name);
}

test('status stays honest about the course', function () {
  assert.equal(STATUS.courseTeachingReviewed, false);
  assert.equal(STATUS.introductionReviewed, true);
  assert.equal(STATUS.introductionProvenance, 'Introduction recording reviewed 8 Nov 2026');
  assert.equal(STATUS.recordingsListened, false);
  assert.equal(STATUS.validatedProgramme, false);
  assert.equal(STATUS.draft, true);
  assert.match(STATUS.affiliation, /not affiliated with Unlock Psychology/i);
  assert.match(STATUS.recordingsNote, /Introduction recording reviewed 8 Nov 2026/);
  assert.match(STATUS.recordingsNote, /seven module recordings have not been reviewed/i);
  assert.equal(STATUS.base, '/unlock-psychology/');
  assert.equal(STATUS.reviewDate, '8 November 2026');
});

test('course summaries are empty and pending', function () {
  const check = Logic.courseIsPending(COURSE);
  assert.deepEqual(check.problems, []);
  assert.equal(COURSE.length, 7);
  assert.equal(COURSE[6].title, 'Report writing');
  COURSE.forEach(function (mod) {
    assert.equal(mod.provenance, 'overview-only');
    mod.lessons.forEach(function (lesson) {
      assert.equal(lesson.status, 'course-pending');
      assert.equal(lesson.summary, '');
      assert.equal(lesson.body, '');
    });
  });
});

test('additions are substantive drafts with citations', function () {
  assert.ok(ADDITIONS.length >= 12);
  const ids = new Set();
  ADDITIONS.forEach(function (lesson) {
    assert.equal(ids.has(lesson.id), false);
    ids.add(lesson.id);
    assert.equal(lesson.provenance, 'independent-supplement');
    assert.ok(lesson.blocks.length >= 4, lesson.id);
    assert.ok(lesson.quiz.length >= 3, lesson.id);
    assert.ok(lesson.cards.length >= 3, lesson.id);
    assert.ok(lesson.evidence.length >= 2, lesson.id);
    lesson.blocks.forEach(function (block) {
      if (block.type === 'cards') {
        assert.ok(block.items.length >= 2);
        block.items.forEach(function (item) {
          assert.ok(item.title && item.text && item.text.length > 40, lesson.id + ' ' + item.title);
        });
      }
      if (block.type === 'diagram') assert.ok(DIAGRAMS[block.id], block.id);
      if (block.type === 'vignette') assert.match(block.title + block.text, /fiction/i);
    });
    lesson.evidence.forEach(function (item) {
      assert.ok(SOURCES.byId[item.source], item.source);
      assert.ok(item.claim.length > 40);
      assert.ok(item.limit.length > 20);
    });
  });
});

test('quizzes score, explain, and navigate', function () {
  const ids = Logic.additionIds(ADDITIONS);
  assert.equal(Logic.nextId(ids, ids[0]), ids[1]);
  assert.equal(Logic.prevId(ids, ids[0]), null);
  assert.equal(Logic.nextId(ids, ids[ids.length - 1]), null);
  assert.equal(Logic.prevId(ids, ids[1]), ids[0]);
  const seen = new Set();
  ADDITIONS.forEach(function (lesson) {
    lesson.quiz.forEach(function (question) {
      assert.equal(seen.has(question.id), false);
      seen.add(question.id);
      assert.ok(question.why && question.why.length > 40, question.id);
      assert.ok(question.options.length >= 3);
      assert.ok(question.options.some(function (option) { return option.id === question.answer; }));
      question.options.forEach(function (option) {
        if (option.id !== question.answer) {
          assert.ok(question.whyNot && question.whyNot[option.id], question.id + ' missing whyNot ' + option.id);
        }
      });
      question.sources.forEach(function (sourceId) { assert.ok(SOURCES.byId[sourceId], sourceId); });
    });
    const correct = {};
    lesson.quiz.forEach(function (question) { correct[question.id] = question.answer; });
    const full = Logic.scoreQuiz(lesson.quiz, correct);
    assert.equal(full.correct, lesson.quiz.length);
    assert.equal(full.percent, 100);
    const none = Logic.scoreQuiz(lesson.quiz, {});
    assert.equal(none.correct, 0);
    assert.equal(none.items[0].why, lesson.quiz[0].why);
  });
});

test('the introduction is the only reviewed course page', function () {
  assert.equal(INTRO.provenance, 'Introduction recording reviewed 8 Nov 2026');
  assert.equal(INTRO.status, 'introduction-reviewed');
  assert.equal(INTRO.reviewedOnly, true);
  assert.equal(INTRO.reflection.length, 3);
  assert.match(INTRO.reflection[0].prompt, /assume an ADHD assessment can establish/);
  assert.match(INTRO.reflection[2].prompt, /what evidence would show progress/);
  const summary = INTRO.summary.join(' ');
  assert.match(summary, /does not by itself establish competence or authorisation to diagnose/);
  assert.match(summary, /not universal legal qualification rules/);
  assert.equal(summary.includes('1.3.1'), false);
  assert.match(INTRO.supplement.label, /Independent/);
  assert.match(INTRO.supplement.text, /1\.3\.1/);
  assert.match(INTRO.supplement.text, /not a rule supplied by the course introduction/);
  assert.match(INTRO.boundary, /not a transcript/);
  const raw = fs.readFileSync(path.join(root, 'js/data/introduction.js'), 'utf8');
  ['14:03', '2×', '2x playback', 'transcript of'].forEach(function (banned) {
    assert.equal(raw.includes(banned), false, banned);
  });
  COURSE.forEach(function (mod) {
    assert.equal(JSON.stringify(mod).includes(INTRO.provenance), false);
  });
});

test('search finds supplements and keeps course hits labelled', function () {
  const corpus = Logic.buildCorpus({ course: COURSE, additions: ADDITIONS, glossary: GLOSSARY, introduction: INTRO });
  const qb = Logic.search('QbTest', corpus);
  assert.ok(qb.some(function (hit) { return hit.id === 'a-tools' && hit.provenance === 'independent-supplement'; }));
  const report = Logic.search('report writing', corpus);
  assert.ok(report.some(function (hit) { return hit.id === 'c7' && hit.status === 'overview-only'; }));
  assert.ok(report.some(function (hit) { return hit.id === 'a-report'; }));
  const intro = Logic.search('orientation', corpus);
  assert.ok(intro.some(function (hit) { return hit.id === 'intro' && hit.status === 'introduction-reviewed'; }));
  const glossary = Logic.search('diversion', corpus);
  assert.ok(glossary.some(function (hit) { return hit.kind === 'glossary'; }));
  assert.deepEqual(Logic.search('a', corpus), []);
  qb.concat(report).forEach(function (hit) { assert.ok(hit.provenance); });
});

test('progress reset clears read marks and quiz scores', function () {
  const store = Logic.memoryStore();
  store.markRead('a-report', '2026-11-08T00:00:00.000Z');
  store.saveQuiz('a-report', { percent: 80 }, '2026-11-08T00:00:00.000Z');
  assert.equal(store.get().read['a-report'], '2026-11-08T00:00:00.000Z');
  assert.equal(store.get().quizzes['a-report'].best, 80);
  store.saveQuiz('a-report', { percent: 40 }, '2026-11-08T01:00:00.000Z');
  assert.equal(store.get().quizzes['a-report'].best, 80);
  assert.equal(store.get().quizzes['a-report'].last, 40);
  store.saveInteraction('ix-map', { matched: true }, '2026-11-08T02:00:00.000Z');
  assert.equal(store.get().read['a-report'], '2026-11-08T00:00:00.000Z');
  assert.equal(store.get().interactions['ix-map'].matched, true);
  store.saveReflection('intro', { goal: 'Write one defensible formulation.' }, '2026-11-08T03:00:00.000Z');
  assert.equal(store.get().read['a-report'], '2026-11-08T00:00:00.000Z');
  assert.equal(store.get().reflections.intro.answers.goal, 'Write one defensible formulation.');
  const cleared = Logic.resetProgress(store);
  assert.deepEqual(cleared.read, {});
  assert.deepEqual(cleared.quizzes, {});
  assert.deepEqual(cleared.interactions, {});
  assert.deepEqual(cleared.reflections, {});
});

test('public pages use the project base and do not leak course files', function () {
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const app = fs.readFileSync(path.join(root, 'js/app.js'), 'utf8');
  assert.ok(html.includes('/unlock-psychology/css/styles.css'));
  assert.ok(html.includes('/unlock-psychology/js/app.js'));
  assert.ok(html.includes('content="/unlock-psychology/"'));
  const blob = JSON.stringify({ COURSE: COURSE, ADDITIONS: ADDITIONS, app: app, html: html });
  ['ACEPLUS2', 'Report Template.docx', 'Wender-informant', 'WEISS FUNCTION', 'ADHD Informant Questionnaire'].forEach(function (banned) {
    assert.equal(blob.includes(banned), false, banned);
  });
  assert.equal(/listened to the (recording|lecture|video)/i.test(blob), false);
  assert.match(blob, /not affiliated with Unlock Psychology/i);
  assert.match(blob, /do not diagnose/i);
});

test('related links and diagrams resolve', function () {
  const known = new Set(ADDITIONS.map(function (lesson) { return lesson.id; }));
  COURSE.forEach(function (mod) {
    mod.related.forEach(function (id) { assert.ok(known.has(id), id); });
  });
  Object.keys(DIAGRAMS).forEach(function (id) {
    assert.ok(DIAGRAMS[id].alt.length > 20);
    assert.match(DIAGRAMS[id].svg, /<svg/);
    assert.match(DIAGRAMS[id].svg, /<title/);
  });
});

test('audit corrections stay attached to the right source', function () {
  const joined = JSON.stringify({ SOURCES: SOURCES, ADDITIONS: ADDITIONS, DIAGRAMS: DIAGRAMS });
  assert.match(SOURCES.byId['ng87-recs'].note, /1\.3\.3 refers to DSM-5 or ICD-11/);
  assert.match(SOURCES.byId['ng87-diag'].note, /not in 1\.3\.1/i);
  assert.match(joined, /supporting, conflicting and missing/);
  assert.match(joined, /could include/);
  assert.match(joined, /training and expertise in managing ADHD/);
  assert.match(joined, /not a claim that every later test/i);
  assert.equal(joined.includes('evidence against alternative explanations'), false);
  assert.equal(joined.includes('specialist medication review at least annually'), false);
  assert.equal(/updated July 2026/i.test(joined), false);
});

test('illustrations keep manifest text and are not cropped by CSS', function () {
  const expected = {
    hero: 'Three adults sit around a table in a welcoming, collaborative conversation.',
    developmental: 'Three connected scenes show a child with a caregiver, teenagers studying together, and two adults in conversation.',
    assessment: 'Two adults discuss cards depicting conversation, home, work, sleep, health and relationships.'
  };
  Object.keys(expected).forEach(function (id) {
    const art = ILLUSTRATIONS[id];
    assert.equal(art.alt, expected[id]);
    assert.equal(art.disclosure, 'AI-generated conceptual illustration; not clinical evidence.');
    assert.equal(art.width, 1280);
    assert.equal(art.height, 720);
    assert.ok(art.labels.length >= 3);
    art.labels.forEach(function (label) {
      assert.ok(label.title && label.text.length > 20);
    });
    const file = path.join(root, 'media', art.file);
    const bytes = fs.readFileSync(file);
    assert.ok(bytes.length > 1000);
    assert.equal(bytes[0], 0xff);
    assert.equal(bytes[1], 0xd8);
  });
  const css = fs.readFileSync(path.join(root, 'css/styles.css'), 'utf8');
  assert.match(css, /\.illustration img\{[^}]*object-fit:contain/);
  assert.equal(/\.illustration img\{[^}]*object-fit:\s*cover/.test(css), false);
  const app = fs.readFileSync(path.join(root, 'js/app.js'), 'utf8');
  assert.match(app, /not clinical evidence/);
  assert.match(app, /not verified lesson teaching/i);
});

test('practice exercises explain without diagnosing', function () {
  const kinds = {};
  PRACTICE.forEach(function (item) {
    kinds[item.kind] = true;
    assert.ok(ADDITIONS.some(function (lesson) { return lesson.id === item.lesson; }), item.id);
    assert.match(item.note, /not a diagnosis|does not diagnose|not a NICE stopwatch/i);
    const blob = JSON.stringify(item);
    assert.equal(/you have adhd/i.test(blob), false, item.id);
  });
  ['decide', 'sequence', 'compare', 'map'].forEach(function (kind) { assert.equal(kinds[kind], true, kind); });
  const order = ['tools', 'plan', 'safety'];
  const moved = Logic.moveItem(order, 'safety', -1);
  assert.deepEqual(moved, ['tools', 'safety', 'plan']);
  const sequence = PRACTICE.filter(function (item) { return item.kind === 'sequence'; })[0];
  const wrong = Logic.sequenceCheck(sequence.initial, sequence.expected);
  const right = Logic.sequenceCheck(sequence.expected, sequence.expected);
  assert.equal(wrong.allInPlace, false);
  assert.equal(wrong.diagnoses, false);
  assert.equal(right.allInPlace, true);
  assert.equal(right.diagnoses, false);
  const decision = Logic.decisionResult(PRACTICE.filter(function (item) { return item.kind === 'decide'; })[0].choices[1]);
  assert.equal(decision.diagnoses, false);
  const map = PRACTICE.filter(function (item) { return item.kind === 'map'; })[0];
  const over = Logic.evidenceMapCheck({}, map.pieces, map.conclusions[0]);
  assert.equal(over.diagnoses, false);
  assert.equal(over.matched, false);
  assert.equal(over.overclaims, true);
  const assignments = {};
  map.pieces.forEach(function (piece) { assignments[piece.id] = piece.lane; });
  const open = map.conclusions.filter(function (item) { return item.overclaims === false; })[0];
  const fit = Logic.evidenceMapCheck(assignments, map.pieces, open);
  assert.equal(fit.matched, true);
  assert.equal(fit.diagnoses, false);
});

console.log(passed + ' tests passed');
