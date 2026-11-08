/* Independent source check for module 1. Not the study summary and not a recording review. */
(function (root, factory) {
  const api = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (typeof window !== 'undefined') window.MODULE1_CHECK = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  return {
    id: 'c1-check',
    appliesTo: 'c1',
    title: 'Recognition and developmental course: independent evidence check',
    checked: '8 November 2026',
    provenance: 'independent-supplement',
    limit: 'Educational draft. Sources were checked on 8 November 2026. This section is not the module summary, not a transcript, and not a claim that the recording was listened to. Comparative figures and causal claims that were not securely sourced are left out.',
    sections: [
      {
        id: 'recognition',
        title: 'Recognition in girls and women',
        paragraphs: [
          'NICE says ADHD is thought to be under-recognised in girls and women. They are less likely to be referred, may remain undiagnosed, and may receive an incorrect alternative diagnosis. That is recommendation 1.2.2, a guideline statement.',
          'The 2020 expert consensus by Young and colleagues describes referral and gender biases, less overt presentations, compensatory strategies, and internalising problems that may obscure recognition. The paper acknowledges mixed findings and differences between clinical and community samples. It is consensus, not a NICE recommendation.',
          'Do not require disruptive hyperactivity before considering assessment. Anxiety or depression may coexist with ADHD or may be a competing explanation. Neither automatically establishes ADHD nor excludes it. Do not imply that all women are inattentive, that all men are disruptive, or that sex or gender determines an individual’s presentation. Internalising difficulties are not synonymous with ADHD and do not replace its criteria.'
        ],
        links: [
          { label: 'NICE NG87 1.2.2', href: 'https://www.nice.org.uk/guidance/ng87/chapter/recommendations#recognition-identification-and-referral', source: 'ng87-refer' },
          { label: 'Young and colleagues, 2020 consensus', href: 'https://bmcpsychiatry.biomedcentral.com/articles/10.1186/s12888-020-02707-9', source: 'young-2020' }
        ]
      },
      {
        id: 'persistence',
        title: 'Persistence, changing demands and recognition',
        paragraphs: [
          'ADHD can persist into adulthood. Symptom expression, impairment and diagnostic status can change. The same consensus distinguishes persistence of the full diagnostic criteria from continuing symptoms that still impair. It also describes increasing demands and reduced scaffolding making previously less apparent difficulties visible during transitions. That is not evidence that every adult who faces greater demands has ADHD.',
          'NICE recommends reassessment around school-leaving age to establish what treatment is still needed, rather than assuming needs stay identical. A neurodevelopmental history does not mean a person continuously meets the full symptom and impairment threshold. No universal persistence figure is used here.'
        ],
        links: [
          { label: 'Young and colleagues, background and referral', href: 'https://bmcpsychiatry.biomedcentral.com/articles/10.1186/s12888-020-02707-9', source: 'young-2020' },
          { label: 'NICE NG87 1.1.4', href: 'https://www.nice.org.uk/guidance/ng87/chapter/recommendations#service-organisation-and-training', source: 'ng87-service' }
        ]
      },
      {
        id: 'onset',
        title: 'Three onset statements, kept apart',
        paragraphs: [
          'DSM-5, as used in this check: several inattentive or hyperactive-impulsive symptoms were present before age 12. That is not the same as a diagnosis, or the full diagnostic threshold, having been met before 12. The public link is the APA overview that was opened. A direct download of APA’s explanatory PDF returned HTML rather than a readable PDF, so that PDF is not treated as independently read. No causal story about the criterion is inferred from delayed recognition in women.',
          'ICD-11, from the WHO 2024 clinical descriptions: evidence of significant inattention and/or hyperactivity-impulsivity symptoms before age 12, while first clinical attention may come later, often when demands exceed compensation. Do not substitute a DSM numerical symptom count.',
          'NICE recommendation 1.3.3 refers to DSM-5 or ICD-11, requires impairment and symptoms often in more than one setting, and advises against exclusion solely because the time of onset is uncertain. That caveat does not authorise assuming childhood symptoms that were not investigated.'
        ],
        links: [
          { label: 'APA clinical overview', href: 'https://www.psychiatry.org/patients-families/adhd/what-is-adhd', source: 'apa-overview' },
          { label: 'WHO ICD-11 CDDR, 6A05', href: 'https://iris.who.int/server/api/core/bitstreams/dcf73611-9e0f-4d5c-85f6-85a58b0da6de/content', source: 'who-cddr' },
          { label: 'NICE NG87 diagnosis, 1.3.3', href: 'https://www.nice.org.uk/guidance/ng87/chapter/recommendations#diagnosis', source: 'ng87-diag' }
        ]
      }
    ]
  };
});
