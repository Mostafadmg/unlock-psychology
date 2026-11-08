/* Seven course-topic slots. Summaries stay empty until lesson teaching is reviewed. */
(function (root, factory) {
  const api = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (typeof window !== 'undefined') window.COURSE = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  function pending(id, title) {
    return { id: id, title: title, status: 'course-pending', summary: '', body: '' };
  }

  return [
    {
      id: 'c1',
      num: 1,
      title: 'Conceptualising ADHD',
      provenance: 'overview-only',
      scope: 'Topic area only: how ADHD is defined, how it is thought to arise, how common it is, and the difference it makes in people’s lives. This is not a lesson summary.',
      lessons: [pending('c1-summary', 'Course lesson summary')],
      related: ['a-meaning', 'a-models']
    },
    {
      id: 'c2',
      num: 2,
      title: 'Models of ADHD',
      provenance: 'overview-only',
      scope: 'Topic area only: theoretical and cognitive ways of understanding ADHD. This is not a lesson summary.',
      lessons: [pending('c2-summary', 'Course lesson summary')],
      related: ['a-models']
    },
    {
      id: 'c3',
      num: 3,
      title: 'Assessment tools and approaches',
      provenance: 'overview-only',
      scope: 'Topic area only: assessment tools and the clinical guidelines that limit how those tools are used. This is not a lesson summary. Licensed question sets are not reproduced.',
      lessons: [pending('c3-summary', 'Course lesson summary')],
      related: ['a-tools', 'a-recognition']
    },
    {
      id: 'c4',
      num: 4,
      title: 'Diagnostic interviews',
      provenance: 'overview-only',
      scope: 'Topic area only: the place of the diagnostic interview in assessment. This is not a lesson summary. No licensed interview is copied or adapted.',
      lessons: [pending('c4-summary', 'Course lesson summary')],
      related: ['a-evidence', 'a-worked']
    },
    {
      id: 'c5',
      num: 5,
      title: 'Developmental history and informants',
      provenance: 'overview-only',
      scope: 'Topic area only: developmental history, with attention to neurodevelopmental concerns, and information from other people. This is not a lesson summary.',
      lessons: [pending('c5-summary', 'Course lesson summary')],
      related: ['a-development']
    },
    {
      id: 'c6',
      num: 6,
      title: 'Differential diagnosis',
      provenance: 'overview-only',
      scope: 'Topic area only: weighing other explanations and conditions that can coexist with ADHD. This is not a lesson summary.',
      lessons: [pending('c6-summary', 'Course lesson summary')],
      related: ['a-differential', 'a-context', 'a-risk']
    },
    {
      id: 'c7',
      num: 7,
      title: 'Report writing',
      provenance: 'overview-only',
      scope: 'Topic area only: writing a defensible report that can be followed back to the evidence and to clinical guidelines. This is not a lesson summary. No provider report template is used.',
      lessons: [pending('c7-summary', 'Course lesson summary')],
      related: ['a-report']
    }
  ];
});
