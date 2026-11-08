/* Public status. The introduction was reviewed. Module 1 is a limited study summary. Modules 2 to 7 are pending. */
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
    recordingsNote: 'Introduction recording reviewed 8 Nov 2026. Module 1 study summary: Full playback automatically transcribed; text reviewed; recognition errors possible. That is not a manual listen and not a fully verified transcript. Modules 2 to 7 have not been reviewed.',
    adviceNote: 'Education only. This is not personal medical advice, a diagnosis, a prescription, or proof of competence to assess ADHD.'
  };
});
