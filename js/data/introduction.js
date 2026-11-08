/* Short summary of the introduction only. Not a transcript and not a module summary. */
(function (root, factory) {
  const api = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (typeof window !== 'undefined') window.INTRODUCTION = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  return {
    id: 'intro',
    title: 'Introduction and orientation',
    provenance: 'Introduction recording reviewed 8 Nov 2026',
    status: 'introduction-reviewed',
    reviewedOnly: true,
    summary: [
      'The introduction presents the training as active learning. Clinical understanding develops through reflection, practice and evaluation of evidence, rather than through passive watching. Its broad goals concern diagnostic guidance, assessment instruments and interviews, differential diagnosis, developmental information, and the quality of assessment reports.',
      'The orientation emphasises professional boundaries. Finishing this course does not by itself establish competence or authorisation to diagnose ADHD. Relevant professional preparation, experience with mental health and neurodevelopmental presentations, and appropriate supervision remain important. Examples of professional backgrounds in the orientation are examples. They are not universal legal qualification rules.',
      'The seven-module journey moves from understanding ADHD and explanatory models to assessment approaches, interviews, developmental history, differential diagnosis and report writing. It closes by asking the learner to reflect on existing assumptions and to set specific learning goals.'
    ],
    boundary: 'This is a short summary of the introduction only. It is not a transcript, not a substitute for the course, and not a review of the seven modules. Personal career history, slides, audio and pictures from the recording are not published here.',
    reflection: [
      { id: 'assume', prompt: 'What do I currently assume an ADHD assessment can establish?' },
      { id: 'scope', prompt: 'Which assessment reasoning skills do I need to improve, and what lies outside my present scope?' },
      { id: 'goal', prompt: 'Set a specific learning goal and decide what evidence would show progress.' }
    ],
    supplement: {
      label: 'Independent guideline supplement',
      text: 'Separate from this orientation: NICE NG87 recommendation 1.3.1 requires ADHD to be diagnosed by a specialist psychiatrist, paediatrician, or other appropriately qualified healthcare professional with training and expertise in the diagnosis of ADHD, using a full clinical and psychosocial assessment. That is a guideline requirement. It is not a rule supplied by the course introduction, and the presenter’s background examples do not amend it. UKAAN AQAS is an adult-assessment consensus, also separate from this orientation. Reviewing the introduction does not verify the later teaching on diagnosis.'
    }
  };
});
