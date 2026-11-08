/* Public status of this draft. Only the introduction recording has been reviewed. */
(function (root, factory) {
  const api = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (typeof window !== 'undefined') window.STATUS = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  return {
    title: 'ADHD Clinical Learning',
    reviewDate: '8 November 2026',
    base: '/unlock-psychology/',
    draft: true,
    validatedProgramme: false,
    courseTeachingReviewed: false,
    introductionReviewed: true,
    introductionProvenance: 'Introduction recording reviewed 8 Nov 2026',
    recordingsListened: false,
    affiliation: 'Independent study companion. Not affiliated with Unlock Psychology, NICE, the NHS, RCPsych, UKAAN, WHO, or any course provider.',
    recordingsNote: 'Introduction recording reviewed 8 Nov 2026. Only that orientation was reviewed. The seven module recordings have not been reviewed, and their summaries stay empty.',
    adviceNote: 'Education only. This is not personal medical advice, a diagnosis, a prescription, or proof of competence to assess ADHD.'
  };
});
