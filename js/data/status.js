/* Public status of this draft. Course teaching has not been reviewed. */
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
    recordingsListened: false,
    affiliation: 'Independent study companion. Not affiliated with Unlock Psychology, NICE, the NHS, RCPsych, UKAAN, WHO, or any course provider.',
    recordingsNote: 'No course recording, caption or download was listened to or reviewed. Course lesson summaries are empty on purpose until a verified lesson review is supplied.',
    adviceNote: 'Education only. This is not personal medical advice, a diagnosis, a prescription, or proof of competence to assess ADHD.'
  };
});
