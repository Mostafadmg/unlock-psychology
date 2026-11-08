/* Module 1 has a non-exhaustive study summary. Modules 2 to 7 stay empty. */
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
      status: 'study-summary',
      provenance: 'Full playback automatically transcribed; text reviewed; recognition errors possible',
      manualListening: false,
      verifiedTranscript: false,
      scope: 'Non-exhaustive study summary of the module on how ADHD is described, recognised, and lived. Not a transcript.',
      boundary: 'This is an original, non-exhaustive study summary, not a transcript and not a replacement lesson. The full playback was automatically transcribed and the resulting text was reviewed. Recognition errors are possible. It is not a manual listen and not a fully verified transcript. No recording, slides or teacher cases are published here.',
      summary: [
        'The module introduces adult ADHD through attention difficulties, hyperactivity and impulsivity, and it emphasises that people can present differently. It connects these features with persistence, occurrence across contexts, and meaningful difficulties in everyday life. Isolated familiar behaviours are not treated as sufficient evidence.',
        'Recognition is another theme. Referral patterns, stereotypes and less obvious difficulties may influence who reaches assessment. The teaching discusses gender without making every person’s presentation identical. Symptoms and functional impact can change across development. Increasing independence, or less support, can make difficulties more noticeable.',
        'The discussion goes beyond symptoms to work, education, relationships, physical and mental health, and obstacles to obtaining help. Coexisting conditions and alternative explanations receive particular attention, including anxiety, mood problems, substance use and autism. The practical message is to examine the person’s history and context instead of assuming that similar-looking difficulties have the same explanation.',
        'The module also considers genetic research, brain research and environmental associations, while emphasising uncertainty about causes. It ends with fictional case material used to encourage clinical enquiry. Those cases and any exercises from the lesson are not reproduced here. Numerical estimates and detailed causal claims are omitted from this summary.'
      ],
      diagram: 'lifespan-ribbon',
      reflection: [
        { id: 'hesitate', prompt: 'What missing information would make you hesitate before interpreting an everyday difficulty as ADHD?' },
        { id: 'support', prompt: 'How could you ask about someone’s support system without assuming that good performance means no impairment?' }
      ],
      lessons: [{ id: 'c1-summary', title: 'Course lesson summary', status: 'study-summary', summary: 'Non-exhaustive study summary on the module page.', body: '' }],
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
