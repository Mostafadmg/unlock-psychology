/* Public sources checked for this draft. Access date is 8 November 2026 unless noted. */
(function (root, factory) {
  const api = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (typeof window !== 'undefined') window.SOURCES = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  const accessed = '8 November 2026';
  function src(entry) {
    entry.accessed = entry.accessed || accessed;
    return entry;
  }
  const list = [
    src({
      id: 'ng87',
      grade: 'G',
      short: 'NICE NG87 overview',
      title: 'Attention deficit hyperactivity disorder: diagnosis and management',
      href: 'https://www.nice.org.uk/guidance/ng87',
      locator: 'Guideline overview',
      note: 'Four dates, kept apart. Overview review date: 23 July 2026, with a decision not to update the recommendations on adapted trauma-focused treatment. Recommendations-page header date: last updated 13 September 2019. Individual recommendation annotations differ, including a [2024] QbTest sentence in 1.3.1 only. Accessed 8 November 2026. Do not call the whole guideline updated in July 2026, and do not infer a new trauma recommendation from that review.'
    }),
    src({
      id: 'ng87-recs',
      grade: 'G',
      short: 'NICE NG87 recommendations',
      title: 'NG87 recommendations chapter',
      href: 'https://www.nice.org.uk/guidance/ng87/chapter/recommendations',
      locator: 'Full recommendations chapter',
      note: 'Header date: last updated 13 September 2019. Recommendation 1.3.1 includes a QbTest statement marked [2024]. Recommendation 1.3.3 refers to DSM-5 or ICD-11 and is annotated 2008, amended 2018. Do not infer that the ICD-11 wording was newly amended in 2024 from the QbTest annotation. Historical licensing notes are not a medicine’s current marketing authorisation.'
    }),
    src({
      id: 'ng87-refer',
      grade: 'G',
      short: 'NG87 recognition and referral',
      title: 'NG87 recommendations 1.2.2 to 1.2.11',
      href: 'https://www.nice.org.uk/guidance/ng87/chapter/recommendations#recognition-identification-and-referral',
      locator: '1.2.2–1.2.11',
      note: 'Keep offer, consider and do not apart. Watchful waiting is not the route for severe impairment.'
    }),
    src({
      id: 'ng87-diag',
      grade: 'G',
      short: 'NG87 diagnosis',
      title: 'NG87 recommendations 1.3.1 to 1.3.6',
      href: 'https://www.nice.org.uk/guidance/ng87/chapter/recommendations#diagnosis',
      locator: '1.3.1–1.3.6',
      note: '1.3.1 is who may diagnose, the breadth of the assessment, and the [2024] QbTest option for ages 6 to 17 alongside that assessment. 1.3.2 is the rating-scale limit. 1.3.3 is where DSM-5 or ICD-11, impairment, settings, and the onset caveat are stated. The ICD-11 reference is not in 1.3.1.'
    }),
    src({
      id: 'ng87-info',
      grade: 'G',
      short: 'NG87 information and support',
      title: 'NG87 recommendations 1.4.3 to 1.4.12',
      href: 'https://www.nice.org.uk/guidance/ng87/chapter/recommendations#information-and-support',
      locator: '1.4.3–1.4.5, 1.4.11',
      note: '1.4.3 asks for a structured discussion after diagnosis. Its list is topics the discussion could include, tailored to the person, not an identical script. 1.4.4 and 1.4.5 cover information and how it is adapted. Driving advice is about symptoms or medication affecting safe driving, not every diagnosis. Do not generalise DVLA wording to Northern Ireland without checking DVA guidance.'
    }),
    src({
      id: 'ng87-manage',
      grade: 'G',
      short: 'NG87 managing ADHD',
      title: 'NG87 recommendations 1.5.1 to 1.5.18',
      href: 'https://www.nice.org.uk/guidance/ng87/chapter/recommendations#managing-adhd',
      locator: '1.5.1–1.5.18',
      note: 'Age bands differ. Medication is not offered to every person who receives a diagnosis. No doses are taught here.'
    }),
    src({
      id: 'ng87-diet',
      grade: 'G',
      short: 'NG87 dietary advice',
      title: 'NG87 recommendations 1.6.1 to 1.6.5',
      href: 'https://www.nice.org.uk/guidance/ng87/chapter/recommendations#dietary-advice',
      locator: '1.6.1–1.6.5',
      note: 'Balanced diet and exercise are encouraged. Elimination of additives is not a general treatment. Fatty-acid supplements are not advised for children and young people.'
    }),
    src({
      id: 'ng87-meds',
      grade: 'G',
      short: 'NG87 medication',
      title: 'NG87 recommendations 1.7.2 to 1.7.29',
      href: 'https://www.nice.org.uk/guidance/ng87/chapter/recommendations#medication',
      locator: '1.7.2, 1.7.4–1.7.7, 1.7.11, 1.7.17, 1.7.23–1.7.24, 1.7.29',
      note: 'Overview only. March 2018 licensing notes in NG87 are historical. Check the current BNF, BNFC and product information before any prescribing decision. Shared care has to be arranged; it is not automatic.'
    }),
    src({
      id: 'ng87-monitor',
      grade: 'G',
      short: 'NG87 monitoring and review',
      title: 'NG87 recommendations 1.8 and 1.10',
      href: 'https://www.nice.org.uk/guidance/ng87/chapter/recommendations#maintenance-and-monitoring',
      locator: '1.8.1–1.8.5, 1.8.9–1.8.10, 1.8.17–1.8.19, 1.10.1–1.10.3',
      note: 'Six-monthly pulse and blood pressure checks and the annual medication review answer different questions. Recommendation 1.10.1 names a healthcare professional with training and expertise in managing ADHD, not necessarily a consultant psychiatrist. That does not remove escalation or shared care. There is no routine annual stop.'
    }),
    src({
      id: 'ng87-service',
      grade: 'G',
      short: 'NG87 service organisation',
      title: 'NG87 recommendations 1.1.4 to 1.1.6',
      href: 'https://www.nice.org.uk/guidance/ng87/chapter/recommendations#service-organisation-and-training',
      locator: '1.1.4–1.1.6',
      note: 'Transition arrangements are usually completed by age 18, with local timing allowed. After transfer, adult services reassess functioning and coexisting conditions.'
    }),
    src({
      id: 'htg729',
      grade: 'G',
      short: 'NICE HTG729',
      title: 'Digital technologies for assessing ADHD',
      href: 'https://www.nice.org.uk/guidance/htg729/chapter/1-Recommendations',
      locator: '1.1–1.5',
      note: 'Published 21 October 2024. QbTest is an option with standard clinical assessment for ages 6 to 17. QbTest in adults, the other listed diagnostic technologies, and the listed technologies for judging treatment response are in the “more research is needed” group.'
    }),
    src({
      id: 'who-cddr',
      grade: 'D',
      short: 'WHO ICD-11 CDDR',
      title: 'Clinical descriptions and diagnostic requirements for ICD-11 mental, behavioural and neurodevelopmental disorders (2024), 6A05',
      href: 'https://iris.who.int/server/api/core/bitstreams/dcf73611-9e0f-4d5c-85f6-85a58b0da6de/content',
      locator: '6A05 essential features, pp. 142–144 of the CDDR PDF',
      note: 'Diagnostic standard used here for the clinical description. WHO describes several symptoms and a developmental pattern. That is not the same as an adult DSM symptom count. The full manual is not reproduced.'
    }),
    src({
      id: 'aqas',
      grade: 'C',
      short: 'UKAAN AQAS',
      title: 'Adamou and colleagues, The adult ADHD assessment quality assurance standard',
      href: 'https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2024.1380410/full',
      locator: 'Frontiers in Psychiatry, 2024; 15:1380410. Published 2 August 2024. The article also labels the framework AQAS 2023.',
      note: 'Expert consensus for adult assessment and reports. Not a NICE recommendation and not a trial. Author conflicts are disclosed in the paper. It does not replace a child assessment standard. Two hours is a consensus suggestion, not a NICE stopwatch rule.'
    }),
    src({
      id: 'nhs-adults',
      grade: 'P',
      short: 'NHS ADHD in adults',
      title: 'ADHD in adults',
      href: 'https://www.nhs.uk/conditions/adhd-adults/',
      locator: 'Public page, last reviewed 19 March 2025; next review due 19 March 2028',
      note: 'Public information, not a prescribing guideline. The higher suicide-risk statement is about adults with ADHD as a group. Right to Choose wording on the page is about England.'
    }),
    src({
      id: 'rcpsych',
      grade: 'P',
      short: 'RCPsych ADHD in adults',
      title: 'ADHD in adults',
      href: 'https://www.rcpsych.ac.uk/mental-health/mental-illnesses-and-mental-health-problems/adhd-in-adults',
      locator: 'Public information page, published June 2023',
      note: 'Accessible explanation, including causes, strengths, hiding symptoms, and coaching. Use NG87, not this page, for medication sequencing. Lived-experience quotations from the page are not reused.'
    }),
    src({
      id: 'asrs-licence',
      grade: 'P',
      short: 'ASRS v1.1 6-question terms',
      title: 'NYU Langone ASRS v1.1 6-question screener terms',
      href: 'https://license.tov.med.nyu.edu/product/asrs6Qscreener',
      locator: 'Official product terms',
      note: 'Permission is version-specific. This site links out and does not embed or rewrite items. The 6-question screener, the 18-question scale and ASRS-5 are different instruments.'
    }),
    src({
      id: 'asrs-harvard',
      grade: 'P',
      short: 'ASRS permissions hub',
      title: 'Harvard ASRS permissions information',
      href: 'https://rckessler.scholars.harvard.edu/adult-adhd-self-report-scales-asrs',
      locator: 'Permissions hub',
      note: 'Directs separate permission requests for longer ASRS versions. Do not assume the 6-question terms cover them.'
    }),
    src({
      id: 'diva-copyright',
      grade: 'P',
      short: 'DIVA copyright',
      title: 'DIVA Foundation copyright notice',
      href: 'https://www.divacenter.eu/more-information/copyright/',
      locator: 'Copyright page',
      note: 'The interview is not reproduced, scored, or paraphrased here.'
    }),
    src({
      id: 'diva-faq',
      grade: 'P',
      short: 'DIVA FAQ',
      title: 'DIVA Foundation FAQ',
      href: 'https://www.divacenter.eu/faq/',
      locator: 'FAQ',
      note: 'The Foundation has rejected conversion of DIVA into an automated or chatbot interview. Terms can change and should be rechecked before any digital use.'
    }),
    src({
      id: 'young-2020',
      grade: 'C',
      short: 'Young and colleagues 2020',
      title: 'Females with ADHD: an expert consensus statement taking a lifespan approach',
      href: 'https://bmcpsychiatry.biomedcentral.com/articles/10.1186/s12888-020-02707-9',
      locator: 'BMC Psychiatry, 2020. Sections on symptoms, comorbidity, background and triggers for referral.',
      note: 'Expert consensus on identification across the lifespan in girls and women. Not a NICE recommendation. The paper describes mixed findings and sample differences. No gender ratio or persistence percentage from the paper is used on this site.'
    }),
    src({
      id: 'apa-overview',
      grade: 'P',
      short: 'APA ADHD overview',
      title: 'What is ADHD? American Psychiatric Association public overview',
      href: 'https://www.psychiatry.org/patients-families/adhd/what-is-adhd',
      locator: 'Public overview page, opened for this draft',
      note: 'This is the APA page linked from the module 1 evidence check. A direct download of the APA explanatory PDF returned HTML rather than a readable PDF, so that PDF is not treated as independently read.'
    }),
    src({
      id: 'teaching',
      grade: 'T',
      short: 'Teaching synthesis',
      title: 'Original teaching note for this draft',
      href: '#/sources',
      locator: 'Not a guideline, trial, or validated test',
      note: 'An explanatory device or fictional example. It cannot diagnose anyone.'
    })
  ];
  const byId = {};
  list.forEach(function (item) { byId[item.id] = item; });
  return { list: list, byId: byId, accessed: accessed };
});
