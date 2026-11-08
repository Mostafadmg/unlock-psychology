const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const Logic = require(path.join(root, 'js/logic.js'));
const STATUS = require(path.join(root, 'js/data/status.js'));
const SOURCES = require(path.join(root, 'js/data/sources.js'));
const COURSE = require(path.join(root, 'js/data/course.js'));
const ADDITIONS = require(path.join(root, 'js/data/additions.js')).concat(require(path.join(root, 'js/data/additions-b.js')));
const GLOSSARY = require(path.join(root, 'js/data/glossary.js'));
const DIAGRAMS = require(path.join(root, 'js/diagrams.js'));

let passed = 0;
function test(name, fn) {
  fn();
  passed += 1;
  console.log('ok', name);
}

test('status stays honest about the course', function () {
  assert.equal(STATUS.courseTeachingReviewed, false);
  assert.equal(STATUS.recordingsListened, false);
  assert.equal(STATUS.validatedProgramme, false);
  assert.equal(STATUS.draft, true);
  assert.match(STATUS.affiliation, /not affiliated with Unlock Psychology/i);
  assert.match(STATUS.recordingsNote, /not|no course recording/i);
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

test('search finds supplements and keeps course hits labelled', function () {
  const corpus = Logic.buildCorpus({ course: COURSE, additions: ADDITIONS, glossary: GLOSSARY });
  const qb = Logic.search('QbTest', corpus);
  assert.ok(qb.some(function (hit) { return hit.id === 'a-tools' && hit.provenance === 'independent-supplement'; }));
  const report = Logic.search('report writing', corpus);
  assert.ok(report.some(function (hit) { return hit.id === 'c7' && hit.status === 'overview-only'; }));
  assert.ok(report.some(function (hit) { return hit.id === 'a-report'; }));
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
  const cleared = Logic.resetProgress(store);
  assert.deepEqual(cleared.read, {});
  assert.deepEqual(cleared.quizzes, {});
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

console.log(passed + ' tests passed');
