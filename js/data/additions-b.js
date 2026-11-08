/* Further independent supplements: development, differential, context, risk, reports, children, support. */
(function (root, factory) {
  const api = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (typeof window !== 'undefined') window.ADDITIONS_B = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  function q(id, stem, options, answer, why, whyNot, sources) {
    return { id: id, stem: stem, options: options, answer: answer, why: why, whyNot: whyNot, sources: sources };
  }
  function opts(items) {
    return items.map(function (text, index) {
      return { id: 'abcd'[index], text: text };
    });
  }

  function stamp(lesson) {
    lesson.provenance = 'independent-supplement';
    lesson.draft = true;
    lesson.status = 'educational-draft';
    return lesson;
  }
  return [
    {
      id: 'a-development',
      title: 'Development, informants and changing demands',
      minutes: 9,
      diagram: 'timeline',
      objectives: [
        'Build a timeline with separate tracks for symptoms, demands and support',
        'Use informants without treating them as infallible',
        'Keep “two settings” for diagnosis apart from “one domain” for a medication offer'
      ],
      blocks: [
        { type: 'illustration', id: 'developmental' },
        { type: 'p', text: 'ADHD is a developmental diagnosis, so the history is a timeline rather than a snapshot of the worst month. The picture shows three contexts side by side. It is not one life, and it is not evidence. AQAS recommends seeking informants where possible: ideally someone who knew the person in childhood and someone who knows current functioning, plus available school and health records. It also asks the clinician to explore missing or contradictory evidence and to write down what that does to the conclusion. The timeline diagram below is the study aid. The picture is only a way in.' },
        { type: 'diagram', id: 'timeline' },
        { type: 'p', text: 'Ask what the person could do alone and what another person organised. A school report that says “no disruption” does not prove there was no inattention. A supportive informant is not infallible either. Check what they saw, what the expectations were, and how memory works across decades. Never contact an unsafe relative in order to complete a form. If collateral cannot be obtained, use other lawful sources, document the limit, and take supervision if the uncertainty is material.' },
        { type: 'callout', kind: 'note', title: 'Achievement is not a verdict', text: 'High academic or occupational success should not by itself exclude ADHD. Impairment can sit in another part of life, and compensation can have a cost. Success is also not hidden proof of ADHD. The cost and the impairment have to be asked about directly. AQAS makes the first of those points. The second is the matching caution: do not fill a successful record with a diagnosis the evidence does not hold.' },
        { type: 'h', text: 'Two different NICE sentences' },
        { type: 'p', text: 'Diagnosis: symptoms happening often in two or more important settings, and at least moderate impairment based on interview or observation in multiple settings (NG87 1.3.3). NICE’s glossary says a setting is a physical location, such as home or school, and a domain is an area of function, such as relationships, education or work. Medication for adults is a later question: offer medication if symptoms are still causing significant impairment in at least one domain after environmental modifications have been implemented and reviewed (NG87 1.5.15). Using the treatment sentence as if it were the diagnostic rule, or the diagnostic rule as if it were a promise of medication, mixes two decisions.' },
        { type: 'vignette', title: 'Fictional vignette: the solicitor', text: 'Leila, 41, is a solicitor with strong academic results. She now misses household bills and stays up to finish routine papers that colleagues complete in the afternoon. Good grades do not settle the diagnosis in either direction. The assessment still needs childhood examples, more than one setting, the cost of the long nights, and a proper look at other explanations. The grades are evidence about one domain. They are not the whole formulation.' },
        { type: 'recap', items: [
          'Look for childhood and current informants when it is safe to do so.',
          'A missing informant is a limit, not an automatic stop and not an automatic diagnosis.',
          'High achievement neither excludes nor proves ADHD.',
          'Two settings for diagnosis is not the same sentence as one domain for a medication offer.'
        ] }
      ],
      evidence: [
        { claim: 'Seek informants where possible, review available records, explore contradictory or missing evidence, and do not treat high achievement alone as an exclusion.', grade: 'C', source: 'aqas', locator: '3.1.1.5, 3.1.1.9, 3.2, 3.3', limit: 'Adult consensus. It does not require contacting someone when contact would be unsafe. That safety limit is a teaching practice alongside the standard.' },
        { claim: 'Symptoms should occur often in two or more important settings and cause at least moderate impairment in multiple settings. Settings and domains are defined separately in the guideline’s terms.', grade: 'G', source: 'ng87-diag', locator: '1.3.3 and terms', limit: 'Do not collapse this into the medication criterion.' },
        { claim: 'For adults, offer medication only if significant impairment remains in at least one domain after environmental modifications have been implemented and reviewed.', grade: 'G', source: 'ng87-manage', locator: '1.5.15', limit: 'This is a treatment recommendation, not the diagnostic threshold, and it is not a dose.' }
      ],
      quiz: [
        q('a-development-1', 'No parent is alive and no school file can be found. Is assessment impossible?',
          opts(['Yes. Without a parent the diagnosis cannot be considered.', 'No automatic rule of that kind is established here. Look for other sources, document the limit, and judge the remaining uncertainty.', 'No. The absence of a parent confirms a childhood history.']),
          'b',
          'AQAS wants informants where possible and wants gaps documented. It does not create a rule that a surviving parent is mandatory. Absence of records is not positive evidence.',
          { a: 'That would turn a practical difficulty into an exclusion the standard does not state.', c: 'A gap is a gap. It must not be rewritten as confirmation.' },
          ['aqas', 'teaching']),
        q('a-development-2', 'Leila’s degrees are excellent. Which conclusion is fair?',
          opts(['Excellent grades exclude ADHD.', 'Excellent grades prove masked ADHD.', 'Grades are one piece of evidence. They do not settle the diagnosis either way. Ask about other settings and the cost of coping.']),
          'c',
          'AQAS warns that achievement can coexist with impairment elsewhere. The matching caution is that achievement is not itself a positive diagnostic sign. Both errors skip the rest of the history.',
          { a: 'High achievement is not an exclusion criterion.', b: 'Inferring ADHD from success invents a sign.' },
          ['aqas']),
        q('a-development-3', 'Which statement keeps diagnosis and medication apart?',
          opts(['Both decisions use the same “one domain” rule.', 'Diagnosis looks for symptoms often in two or more settings and at least moderate impairment across settings. An adult medication offer asks whether significant impairment remains in at least one domain after environmental changes.', 'Medication can be offered from a screening score even if diagnosis is uncertain.']),
          'b',
          'NG87 1.3.3 and 1.5.15 answer different questions. The second also assumes a diagnosis and a reviewed attempt to change the environment. A screen is not either decision.',
          { a: 'The numbers and the words “moderate” and “significant” are not interchangeable.', c: '1.3.2 and 1.5.15 both refuse that shortcut.' },
          ['ng87-diag', 'ng87-manage']),
        q('a-development-4', 'An informant says “they were fine at school”. What is the useful follow-up?',
          opts(['End the assessment. A single negative report is decisive.', 'Ask what the informant saw, what “fine” referred to, and who was organising things in the background.', 'Discount every informant who is not worried.']),
          'b',
          'A report of no disruption does not establish the absence of inattention. The informant’s opportunity to observe, and the scaffolding around the child, are part of weighing the sentence.',
          { a: 'One report can be important and still be incomplete.', c: 'Dismissing disagreement is the opposite of the AQAS instruction to explore it.' },
          ['aqas', 'teaching'])
      ],
      cards: [
        { front: 'Who does AQAS suggest as informants?', back: 'Where possible, someone who knew the childhood and someone who knows current functioning, plus available school and health records.' },
        { front: 'What if the only relative would be unsafe to contact?', back: 'Do not contact them to complete a form. Document the limit and use other lawful sources. Seek supervision if uncertainty remains material.' },
        { front: 'Setting or domain: which is a place?', back: 'Setting. NICE’s examples include home, nursery, and friends’ or family homes. Domain means an area of function.' },
        { front: 'Does “two settings” decide medication?', back: 'No. That language is in the diagnostic recommendation. Adult medication uses a different recommendation about impairment in at least one domain after environmental modifications.' }
      ]
    },
    {
      id: 'a-differential',
      title: 'Differential diagnosis and conditions that coexist',
      minutes: 9,
      diagram: 'overlay',
      objectives: [
        'Compare timelines instead of forcing an either-or choice',
        'Recognise common mimics without using them as shortcuts',
        'Keep autism, trauma, mood and substances inside the assessment'
      ],
      blocks: [
        { type: 'p', text: 'A differential is not a consolation prize and it is not a list to recite. AQAS places a full psychiatric and neurodevelopmental review at the centre of an adult assessment. ADHD should not be diagnosed when another condition better explains the symptoms. Co-occurrence is also common, so “better explained by” is not the same sentence as “cannot coexist”.' },
        { type: 'diagram', id: 'overlay' },
        { type: 'p', text: 'The questions below are original prompts. No row makes a diagnosis. Investigations follow the clinical picture. There is no routine “ADHD blood panel” or neuroimaging bundle in this source set.' },
        { type: 'table', caption: 'Prompts for comparison. They organise the history. They are not criteria.', headers: ['What you hear', 'Questions to explore', 'Trap to avoid'], rows: [
          ['New concentration trouble with low mood', 'Did it start with the episode? What was life like before it?', 'Deciding that all attention problems are ADHD, or that depression rules ADHD out'],
          ['Episodes of elevated or irritable mood and less need for sleep', 'Is this a change from baseline, with activation and consequences?', 'Calling all lifelong impulsivity bipolar, or all episodic energy ADHD'],
          ['Worry, or trauma-linked hyperarousal', 'Are the lapses tied to threat, intrusive thoughts or reminders? What is the developmental sequence?', 'Forcing trauma and ADHD into an exclusive choice'],
          ['Insomnia, possible sleep-disordered breathing, shift work', 'What is the sleep pattern, the daytime sleepiness, and the medical review?', 'Diagnosing from sleep-deprived behaviour alone'],
          ['Alcohol, other drugs, or medicines', 'What is the timing, including intoxication and withdrawal, and the earlier functioning?', 'Moralising substance use, or letting it explain an entire lifespan without looking'],
          ['Autism, learning or language differences', 'What is the social-communication, sensory and learning history, and the function?', 'Treating autism as an automatic ADHD exclusion'],
          ['Head injury, seizures, or another medical concern', 'What is the time link, and which targeted assessment is indicated?', 'Ordering a universal scan or blood-test panel']
        ] },
        { type: 'p', text: 'NICE also lists groups in whom ADHD may be more prevalent, including people with other neurodevelopmental conditions, mood disorders, substance misuse, epilepsy, acquired brain injury, and people known to criminal justice services. Higher prevalence is a reason to remember ADHD. It is not a reason to skip the differential.' },
        { type: 'callout', kind: 'limit', title: 'Limit', text: 'Emotional dysregulation, rejection sensitivity, “hyperfocus” and executive dysfunction can be experiences to ask about. They are not standalone mandatory diagnostic criteria in the sources used here.' },
        { type: 'recap', items: [
          'Another condition can explain the problem, coexist with ADHD, or do neither.',
          'The timeline does a lot of the work.',
          'Autism is not an exclusion.',
          'Order tests for a reason, not as a ritual.'
        ] }
      ],
      evidence: [
        { claim: 'A full psychiatric and neurodevelopmental review is central. Do not diagnose ADHD when another condition better explains the symptoms. Co-occurrence is common. Mood, anxiety, trauma, substances, personality-related difficulties, autism, learning conditions and relevant physical health belong in that review.', grade: 'C', source: 'aqas', locator: '3.1 and section 5', limit: 'Adult consensus. The comparison table on this page is an original teaching aid, not part of the paper.' },
        { claim: 'NICE includes coexisting conditions, circumstances and physical health in the diagnostic process, and says not to exclude ADHD solely because of a pervasive developmental disorder.', grade: 'G', source: 'ng87-diag', locator: '1.3.3–1.3.4', limit: '“Do not exclude solely” still requires the clinician to understand the other condition.' },
        { claim: 'Symptoms are not better accounted for by another disorder and are not due to a substance, medication, or a disease of the nervous system.', grade: 'D', source: 'who-cddr', locator: '6A05', limit: 'This is an exclusion of a better explanation, not a ban on comorbidity.' }
      ],
      quiz: [
        q('a-differential-1', 'Anxiety has already been diagnosed. Should the ADHD assessment stop?',
          opts(['Yes. One mental-health diagnosis fills the slot.', 'No. Assess whether anxiety explains all, some, or none of the developmental pattern.', 'Yes, until the anxiety has been cured.']),
          'b',
          'Coexistence is expected often enough that an existing diagnosis is the start of a timeline question, not a stop sign. Stopping would also miss the NICE instruction not to exclude solely because another developmental condition is present, and the parallel point about psychiatric comorbidity.',
          { a: 'Either-or reasoning is the error this lesson is built to resist.', c: 'People should receive care for anxiety. That care does not require the ADHD question to be abandoned.' },
          ['aqas', 'ng87-diag']),
        q('a-differential-2', 'Difficulties began in primary school and a depressive episode started last winter, when concentration got worse. Which picture fits the prompts?',
          opts(['Depression must be the only explanation, because mood affects attention.', 'An enduring pattern and a recent episode may both be present. Each needs its own account.', 'The winter episode proves the school history was depression too.']),
          'b',
          'The overlay is the teaching point. A new episode can worsen a long pattern. It can also be the whole story. The history decides, not a preference for one label.',
          { a: 'That trap is listed in the table: assuming depression rules ADHD out.', c: 'Backdating a new episode across childhood is an assumption, not evidence.' },
          ['teaching', 'aqas']),
        q('a-differential-3', 'Which investigation plan matches this draft?',
          opts(['Every referral gets the same blood panel and brain scan.', 'Test what the history and examination indicate. There is no universal ADHD laboratory panel in these sources.', 'Never investigate physical health, because ADHD is neurodevelopmental.']),
          'b',
          'Physical health is part of NG87 1.3.4 and of the AQAS review. The tests follow an indication, such as a neurological red flag. A ritual panel is not a recommendation found here.',
          { a: 'That would invent a pathway.', c: 'Ignoring physical health contradicts both the guideline and the consensus standard.' },
          ['ng87-diag', 'aqas']),
        q('a-differential-4', 'A person is autistic and inattentive. What does NG87 1.3.3 say about exclusion?',
          opts(['Autism excludes ADHD.', 'Exclusion based on a pervasive developmental disorder is not recommended. The ADHD pattern still has to be shown in its own right.', 'Autism and ADHD are the same condition in ICD-11.']),
          'b',
          'The recommendation says not to exclude on that basis alone. It does not say the ADHD description can be skipped, and it does not merge the two conditions.',
          { a: 'That is the exclusion NICE advises against.', c: 'They are different descriptions. Co-occurrence is possible.' },
          ['ng87-diag'])
      ],
      cards: [
        { front: 'Does another diagnosis end an ADHD assessment?', back: 'Not by itself. Ask whether it explains all, some, or none of the developmental pattern.' },
        { front: 'Is autism an exclusion?', back: 'NG87 1.3.3 says exclusion based on a pervasive developmental disorder is not recommended. The ADHD pattern still has to be demonstrated.' },
        { front: 'What is the trap with a new depressive episode?', back: 'Assuming every attention problem is ADHD, or assuming depression rules a long ADHD pattern out. Date both.' },
        { front: 'Are rejection sensitivity and hyperfocus required criteria?', back: 'No. They can be experiences to explore. They are not mandatory diagnostic criteria in this source set.' }
      ]
    },
    {
      id: 'a-context',
      title: 'Women, masking, culture and accessible assessment',
      minutes: 8,
      diagram: 'masking',
      objectives: [
        'Use NICE’s statement on under-recognition without inventing a female subtype',
        'Ask about effort and hidden support without creating a new criterion',
        'Adapt the method without dropping the requirements'
      ],
      blocks: [
        { type: 'p', text: 'NICE says to be aware that ADHD is thought to be under-recognised in girls and women: they are less likely to be referred, may be more likely to have undiagnosed ADHD, and may be more likely to receive an incorrect diagnosis of another condition. That is an awareness recommendation. It does not create a separate disorder, and it does not say that inattentive presentations belong to women or that men do not mask.' },
        { type: 'diagram', id: 'masking' },
        { type: 'p', text: 'RCPsych notes that people may hide symptoms and that doing so can be exhausting. A useful teaching practice is to ask about preparation time, reminders, repeated checking, reliance on another person, and the recovery afterwards. That explores compensation. It is not a scale, and it is not a criterion. Do not assume every woman masks, that only women mask, or that a calm consultation rules the diagnosis out. The appointment is a small sample of a life.' },
        { type: 'h', text: 'Make the method fit the person' },
        { type: 'p', text: 'NICE says information should take account of developmental level, cognitive style, learning disability, sight or hearing, language and social communication, coexisting conditions, and circumstances including age, gender, educational level and life stage. In practice, ask which language and format works. Use a professional interpreter when one is needed, and explain confidentiality. Do not treat a second language, or a thin educational opportunity, as if it were inattention. Ask how culture shapes what “coping” looks like, rather than assuming one household norm. Migration, racism, poverty, digital exclusion, literacy, sensory needs and intellectual disability change how evidence is gathered. They do not delete the diagnostic requirements, and they do not justify an invented ethnic correction factor or an unvalidated translation.' },
        { type: 'callout', kind: 'limit', title: 'What this source set does not support', text: 'It does not validate a masking questionnaire, a culturally universal norm, or a hormone-specific medication rule. Menstrual, perinatal and menopausal experiences can be discussed respectfully. A treatment algorithm driven by hormones is not established here and would need a separate, current evidence review.' },
        { type: 'recap', items: [
          'Under-recognition of girls and women is in NG87 1.2.2. It is not a stereotype.',
          'Ask about the cost of coping. Do not score “masking”.',
          'Accessibility changes the method, not the need for a developmental impairing pattern.',
          'No ethnic adjustment factor and no hormone protocol are taught here.'
        ] }
      ],
      evidence: [
        { claim: 'ADHD is thought to be under-recognised in girls and women, who may be less often referred, more often undiagnosed, or given another diagnosis incorrectly.', grade: 'G', source: 'ng87-refer', locator: '1.2.2', limit: '“Thought to be” is NICE’s own caution. Do not turn it into “therefore this woman has ADHD”.' },
        { claim: 'Information should be matched to developmental level, communication, coexisting conditions, age, gender, education and life stage.', grade: 'G', source: 'ng87-info', locator: '1.4.5', limit: 'Tailored information is not a lower diagnostic threshold.' },
        { claim: 'People may hide symptoms, and the effort can be exhausting.', grade: 'P', source: 'rcpsych', locator: 'How can I tell if I have ADHD', limit: 'Public information. Not a masking scale, and not specific to one gender in the way this lesson refuses to assume.' }
      ],
      quiz: [
        q('a-context-1', 'A woman gives a calm, articulate account in clinic. What follows?',
          opts(['She cannot have ADHD, because ADHD is visible restlessness.', 'Consultation behaviour is only a small part of a lifespan assessment. A calm hour does not decide.', 'The calm account confirms masking and therefore confirms ADHD.']),
          'b',
          'Under-recognition is real enough for NICE to warn about it. The opposite error is to treat polished behaviour, or the idea of masking, as a positive test. Ask about the life outside the hour.',
          { a: 'That stereotype is part of why inattentive and compensated patterns are missed. It is not a rule.', c: 'Masking is a question, not a diagnosis.' },
          ['ng87-refer', 'teaching']),
        q('a-context-2', 'Which question explores compensation without inventing a criterion?',
          opts(['“How many masking points do you score?”', '“What reminders, extra time, or another person’s help does this task need, and what does it cost you afterwards?”', '“Do you identify as someone who masks? If yes, the criterion is met.”']),
          'b',
          'The question gathers function and effort. It does not pretend there is a validated masking score or a self-identification criterion.',
          { a: 'No such points exist in this source set.', c: 'Identity language is not a diagnostic requirement.' },
          ['teaching', 'rcpsych']),
        q('a-context-3', 'An interpreter is needed. What else has to be said?',
          opts(['Confidentiality does not apply if a family member interprets.', 'Use a professional interpreter when indicated, explain confidentiality, and do not treat second-language difficulty as inattention.', 'Translation into any questionnaire is fine if the clinician types it quickly.']),
          'b',
          'The practice point is about access and about not misreading language. An ad-hoc translation of a licensed scale is an unvalidated instrument and may also breach the scale’s terms.',
          { a: 'Using a relative as interpreter can silence the person and muddle confidentiality. It is not the default this lesson teaches.', c: 'Unvalidated translation is explicitly out of scope.' },
          ['ng87-info', 'teaching']),
        q('a-context-4', 'A learner asks for a perimenopause medication protocol for ADHD. What can this draft say?',
          opts(['It can set doses by cycle stage.', 'It can say the experience may be discussed, and that no hormone-driven treatment algorithm is supported by this source set.', 'It can say hormones are irrelevant to anyone’s ADHD.']),
          'b',
          'Respectful discussion is not a protocol. The pack and this site both stop before a hormone rule. Current specialist evidence would be required before any such lesson.',
          { a: 'Doses are outside this site entirely, and a cycle algorithm was not sourced.', c: '“Irrelevant” is a stronger negative claim than the evidence here supports.' },
          ['teaching'])
      ],
      cards: [
        { front: 'What does NG87 1.2.2 actually say about girls and women?', back: 'Be aware of under-recognition: less referral, more undiagnosed ADHD, and more incorrect other diagnoses. It does not define a female subtype.' },
        { front: 'Is masking a diagnostic criterion?', back: 'No. Asking about effort and hidden support is good history. Scoring it is not supported here.' },
        { front: 'Does a tailored appointment lower the criteria?', back: 'No. NG87 1.4.5 is about how information is given. The diagnostic requirements remain.' },
        { front: 'Is there an ethnic correction factor?', back: 'No. Do not invent one, and do not use an unvalidated translation of a scale.' }
      ]
    },
    {
      id: 'a-risk',
      title: 'Risk, safeguarding and clinical responsibility',
      minutes: 8,
      diagram: 'safety',
      objectives: [
        'Separate immediate safety from the diagnostic debate',
        'Ask proportionately and record protective factors',
        'State driving and suicide information without over-generalising'
      ],
      blocks: [
        { type: 'p', text: 'Safety is not a paragraph at the end. It runs beside the assessment. An urgent risk does not wait for diagnostic certainty. This page is not safeguarding training and it is not crisis care. If someone is in immediate danger, the local emergency response comes first.' },
        { type: 'callout', kind: 'danger', title: 'Immediate danger', text: 'In the UK, call 999 if someone is in immediate danger. NHS 111 can help when the situation is urgent but not an emergency. Samaritans are on 116 123 at any time. Local crisis services differ. This site cannot assess a person’s risk and must not be used as one.' },
        { type: 'diagram', id: 'safety' },
        { type: 'p', text: 'The NHS public page says adults with ADHD are at higher risk of suicide. That is a statement about a group. It does not tell you the risk of the person in front of you, and it does not follow from the diagnosis alone. Ask directly, in private when that is safe, about current self-harm and suicidal thoughts, intent and plans. Explain the limits of confidentiality.' },
        { type: 'cards', items: [
          { tag: 'Ask', title: 'Harm and coercion', text: 'Self-harm, suicidal thoughts, exploitation, abuse, and the safety of children or dependants. Follow local safeguarding procedures.' },
          { tag: 'Ask', title: 'Substances and diversion', text: 'AQAS includes substance misuse and the safety of medicines. NG87 1.7.4 includes a diversion and misuse review before medication, and 1.7.23–1.7.24 and 1.8.19 return to it. This is not a moral score.' },
          { tag: 'Ask', title: 'Impulsive harm', text: 'Spending, gambling, driving and occupational risk. Also ask what protects the person: relationships, routines, reasons for living, and help already in place.' }
        ] },
        { type: 'p', text: 'These are enquiry prompts, not an actuarial tool. A blank checklist does not mean the subject is closed. Circumstances change. Driving has its own recommendation: NG87 1.4.3 says people must tell the DVLA if their ADHD symptoms or medication affect safe driving. It does not say that every diagnosis must be notified. Do not copy that DVLA sentence onto Northern Ireland without checking DVA guidance. Do not give personal legal advice from this page.' },
        { type: 'recap', items: [
          'Act on urgent risk before you finish the diagnostic argument.',
          'Group-level suicide risk is not an individual’s risk.',
          'A negative checklist is not a permanent clearance.',
          'DVLA notification in NG87 is about symptoms or medication affecting safe driving.'
        ] }
      ],
      evidence: [
        { claim: 'Assess safety, substance misuse and diversion as part of a competent adult assessment and before medication.', grade: 'C', source: 'aqas', locator: '3.1.1.8', limit: 'Read with NG87 1.7.4, 1.7.23–1.7.24 and 1.8.19. The enquiry list on this page is a teaching prompt, not a validated risk score.' },
        { claim: 'The NHS says adults with ADHD are at higher risk of suicide and tells people who feel they want to end their life to tell someone.', grade: 'P', source: 'nhs-adults', locator: 'ADHD and mental health', limit: 'Population statement. Do not infer an individual’s risk from the diagnosis alone.' },
        { claim: 'People with ADHD must declare the diagnosis to the DVLA if symptoms or medication affect their ability to drive safely.', grade: 'G', source: 'ng87-info', locator: '1.4.3', limit: 'Not “every diagnosis”. Do not generalise the DVLA wording to Northern Ireland without DVA guidance. This is not personal legal advice.' }
      ],
      quiz: [
        q('a-risk-1', 'A risk checklist is entirely negative at the first visit. What is true?',
          opts(['No further enquiry will ever be needed.', 'Context can change. A negative list is not a standing discharge from safety questions.', 'The negative list confirms ADHD, because risk and ADHD are the same thing.']),
          'b',
          'Risk is reviewed because circumstances, substances, relationships and medication can change. The checklist is a prompt, not a clearance certificate, and it is not a diagnostic criterion.',
          { a: 'That would freeze a first answer.', c: 'Risk and diagnosis are related clinical tasks and they are not the same finding.' },
          ['teaching', 'ng87-meds']),
        q('a-risk-2', 'When does NG87 1.4.3 say a person must tell the DVLA?',
          opts(['Whenever ADHD is diagnosed, regardless of driving.', 'If ADHD symptoms or medication affect safe driving.', 'Only if the person is taking a stimulant above a dose this site will not specify.']),
          'b',
          'The recommendation is conditional on an effect on safe driving. It is not triggered by the label alone, and this site does not teach doses.',
          { a: 'Adding “every diagnosis” changes the recommendation.', c: 'A dose rule is not what 1.4.3 says.' },
          ['ng87-info']),
        q('a-risk-3', 'The NHS says adults with ADHD are at higher risk of suicide. How should that be used?',
          opts(['As the person’s risk level, without asking them.', 'As a reason to ask, and not as a number you can transfer to an individual from the diagnosis alone.', 'As proof that ADHD medication is unsafe.']),
          'b',
          'The page is public health information about a group. Individual risk comes from asking and from the clinical picture. The sentence is not a statement about medication safety.',
          { a: 'Skipping the question is how group statistics get misused.', c: 'That conclusion is not in the NHS sentence.' },
          ['nhs-adults']),
        q('a-risk-4', 'Suicidal intent is clear and the ADHD interview is only half done. What takes priority?',
          opts(['Finish the symptom list so the report is complete.', 'The immediate safety response. Diagnostic certainty can wait.', 'Score a rating scale to see if the crisis is ADHD.']),
          'b',
          'An urgent risk pathway does not wait for a label. A scale cannot make that decision. This website is not the pathway.',
          { a: 'A complete symptom count is not more urgent than safety.', c: 'That repeats the error of letting a tool outrank clinical danger.' },
          ['teaching', 'aqas'])
      ],
      cards: [
        { front: 'Does a diagnosis of ADHD tell you a person’s suicide risk?', back: 'No. The NHS describes a higher risk in adults with ADHD as a group. Individual risk has to be asked about.' },
        { front: 'Must every person with ADHD tell the DVLA?', back: 'NG87 1.4.3 requires notification if symptoms or medication affect safe driving, not simply because of the diagnosis. Check Northern Ireland separately.' },
        { front: 'What is diversion?', back: 'Medication being used by someone else, or misused, including for cognitive enhancement or appetite suppression. NICE says to be cautious and to monitor it.' },
        { front: 'Where does urgent risk sit relative to the diagnosis?', back: 'Beside it, and ahead of it when the danger is immediate. Do not wait for diagnostic certainty.' }
      ]
    },
    {
      id: 'a-report',
      title: 'Formulation, the report and feedback',
      minutes: 28,
      diagram: 'report-chain',
      objectives: [
        'Map each conclusion to supporting, conflicting and missing evidence',
        'Say whether a criterion was evaluated and not met, or could not be evaluated',
        'Tailor feedback topics instead of reading out one universal script',
        'Read an unfinished fictional excerpt without treating it as a template'
      ],
      blocks: [
        { type: 'p', text: 'The course topic “report writing” has not been reviewed. This page is an independent supplement. It does not use a provider template. A report should let another clinician see real-life examples, a mapping onto the criteria used, what informants and records added, comorbidity, a formulation and an outcome. Weigh evidence for and against alternative explanations, including supporting, conflicting and missing evidence, and say how each contributes to impairment. Coexisting conditions can be real. Contradictory or missing information should not be hidden, and missing information is not a negative criterion. Length and a pile of generic appendices are not quality.' },
        { type: 'diagram', id: 'report-chain' },
        { type: 'h', text: 'Write the reasoning, not just the result' },
        { type: 'p', text: 'The chain diagram is the study aid. It is a teaching synthesis, labelled T, not an evidence hierarchy and not a diagnostic stamp. Six questions keep a paragraph honest: what supports this part; what conflicts with it; what is missing; which criterion that affects; what was done about safety; what the person will actually be offered next.' },
        { type: 'table', caption: 'Teaching map for a report paragraph. It is not a score and not a code.', headers: ['Question', 'What to write', 'Label'], rows: [
          ['What supports this?', 'Examples, from whom, in which setting, with what impairment.', 'T, using C for the expectation that examples are shown'],
          ['What conflicts?', 'Evidence for another explanation, or a source that disagrees. Do not delete it.', 'C'],
          ['What is missing?', 'Name the gap. Do not convert it into “criterion not met”.', 'T'],
          ['Which criterion does that affect?', 'Say whether it was evaluated and not met, or could not be evaluated.', 'T. Not a diagnostic code'],
          ['What about safety?', 'Context, history, protection, uncertainty and the action. Not “no risk”.', 'T, alongside the safety assessment AQAS expects'],
          ['What happens next?', 'A shared plan matched to the needs you actually found.', 'G for feedback topics that could be included; T for the wording']
        ] },
        { type: 'h', text: 'Feedback is tailored' },
        { type: 'p', text: 'After a diagnosis, NG87 1.4.3 asks for a structured discussion tailored to the person. Topics the discussion could include are understanding, strengths, stigma and labelling, environmental modifications, education and employment, relationships, coexisting conditions, substance misuse and self-medication, and driving. That list is not a mandatory identical script. Use the topics that inform this person’s plan. Information and how it is adapted, in 1.4.4 and 1.4.5, are separate. People whose symptoms and impairment fall short of diagnosis may still benefit from similar information.' },
        { type: 'callout', kind: 'note', title: 'Words that keep the relationship', text: '“Your difficulties are real. The task is to explain them accurately, not to judge effort. Here is what supports the conclusion, what is uncertain, and what we can do next.” If the result is inconclusive: “We do not yet have enough evidence to decide safely. Here is what is missing, and here is a proportionate next step.” Never say a positive screen proves the diagnosis, or that a non-diagnosis means there is no need for support.' },
        { type: 'h', text: 'Fictional report, for study only' },
        { type: 'callout', kind: 'warn', title: 'Do not copy this into a record', text: 'Jordan Hale is invented. The report shows a reasoning chain. It is not a patient, not a form, and not the course’s report template. Copying the sentences into real notes would fake a history.' },
        { type: 'p', text: 'Jordan Hale, age 34, fictional. Referred by a GP in England because of missed deadlines and strain at home. Seen for a direct assessment, with consent to speak to a partner who has known Jordan for six years. No school reports survive. A younger sibling, contacted with consent, remembers primary-school lost homework and a parent who packed the school bag every morning. Jordan describes current examples at work and at home: unfinished routine reports unless a colleague sets a same-day deadline, unpaid bills despite enough income, and a partner who now runs the household calendar. Hobbies that are fast and rewarding can hold attention for hours. Sleep is adequate. There is no regular substance use. Mood is frustrated, not pervasively low, and there is no episode of reduced need for sleep with elevated energy. There is no history suggestive of seizures or a new neurological illness. Thoughts of self-harm are absent today. Driving is not currently described as unsafe.' },
        { type: 'p', text: 'Teaching conclusion, not a real diagnosis and not a code: in this exercise the developmental pattern was evaluated from two accounts and judged to fit the clinical description used here. The partner cannot speak to childhood. The missing school file is a limit on certainty. It is not a contradiction of the sibling’s examples, not proof of them, and not a negative criterion. Depression, a substance explanation and a new neurological illness were considered and, on this fictional account, do not better explain the lifespan; that is evidence weighed for and against alternatives, not a hunt only for evidence against. “Criteria supported” is a teaching label for a pattern that was evaluated. It is not a diagnostic code. A different reader might still ask for one more childhood source. Write that disagreement down.' },
        { type: 'p', text: 'Teaching recommendations, not a prescription: explain the conclusion in the words of 1.4.3, including strengths and stigma. Consider environmental changes at work, such as written instructions and shorter blocks of focus, recognising these as examples from NICE’s definition of environmental modifications, not a workplace law lesson. A specialist with expertise in ADHD can discuss the adult treatment recommendations in NG87, including when medication is offered. No drug and no dose are chosen here. Agree follow-up and what to do if risk changes.' },
        { type: 'p', text: 'Patient-facing note, fictional: “The problems at work and at home are real, and they are not a verdict on your effort. The history from you and your sibling supports a longstanding attention pattern that still has a cost. We do not have the school file, so that part is less certain. We can talk about changes at work, and about treatment options, without pretending a questionnaire made the decision.”' },
        { type: 'h', text: 'Fictional unfinished excerpt: Sam' },
        { type: 'callout', kind: 'warn', title: 'Not a completed diagnosis and not a template', text: 'Sam is invented. The excerpt stops on purpose. Copying it into a record would invent a history. It is not the course’s report and it is not a form to finish by changing the name.' },
        { type: 'vignette', title: 'Fictional unfinished excerpt', text: 'Sam, a fictional adult, wants help with missed routine deadlines and conflict over household responsibilities. This interim account uses a direct consultation and, with permission, a partner’s account of current life. Sam agreed those sources could inform feedback. Sharing a report more widely has not been agreed. Childhood records were requested and have not arrived. The intended framework is ICD-11. The developmental requirements cannot yet be evaluated adequately. Sam describes unfinished administrative tasks over several years, late-payment charges and repeated work reminders. The partner has taken over household scheduling. Structured shifts go better. That does not confirm or refute ADHD. Sam recalls losing equipment at primary school but gives little detail. Recent insomnia and worry may be contributing. No anxiety diagnosis is made here, and the psychiatric, developmental and physical review is incomplete. Sam reports no current self-harm thoughts. That is not a conclusion of no risk. Past self-harm, substances and safeguarding are still to be asked about. No medication-readiness conclusion is possible. The available evidence is not enough for an ADHD diagnosis. Support for the current problems can still be discussed, including written task instructions, without treating those ideas as proof.' },
        { type: 'recap', items: [
          'Weigh evidence for and against alternatives, and record what is missing.',
          'Say whether a criterion was evaluated and not met, or could not be evaluated.',
          'Feedback topics could include the NICE list. Tailor them. Do not recite one script.',
          '“No current suicidal thoughts” is not “no risk”.',
          'A fictional excerpt is a lesson, not a template.'
        ] }
      ],
      evidence: [
        { claim: 'A good adult report shows examples, reasoned consideration of alternative and coexisting explanations, criterion mapping, what informants and records contributed, comorbidity, formulation and outcome. Supporting, conflicting and missing evidence stay visible. Length is not quality.', grade: 'C', source: 'aqas', locator: '3.2', limit: 'Adult consensus. Jordan Hale and Sam are original fiction, not AQAS samples. Outcome labels on this page are teaching categories, not codes.' },
        { claim: 'After diagnosis, hold a structured discussion tailored to the person. Topics could include understanding, strengths, stigma, environmental modifications, education and work, relationships, coexisting conditions, substances and driving. Offer information if the assessment falls short, and adapt how it is given.', grade: 'G', source: 'ng87-info', locator: '1.4.3–1.4.5', limit: '“Could include” is not an identical script. 1.4.4 and 1.4.5 are separate from the topic list. Education-setting consent in NG87 is not a full consent law.' },
        { claim: 'The six-question report map and the chain diagram are a teaching synthesis.', grade: 'T', source: 'teaching', locator: 'Not a validated tool', limit: 'They do not prove a mechanism, they are not a diagnostic stamp, and they must not be scored.' }
      ],
      quiz: [
        q('a-report-1', 'School records contradict the person’s account. Can the report omit them?',
          opts(['Yes, if the clinician believes the person.', 'No. Interpret the discrepancy and say what it does to the conclusion.', 'Yes, if an appendix is already long.']),
          'b',
          'AQAS treats contradictory data as part of quality, not as clutter. Omitting it makes the reasoning impossible to audit. Length is not the measure of a good report.',
          { a: 'Belief may be the conclusion, but the reader must see the conflict.', c: 'A long appendix is not a reason to hide a material fact, and it is not quality by itself.' },
          ['aqas']),
        q('a-report-2', 'The assessment does not support ADHD. What can still be true?',
          opts(['No support of any kind is appropriate, because the criteria were not met.', 'Information and help with the actual problems may still be useful. NG87 1.4.4 says people who fall short may benefit from similar information.', 'The screen should be repeated until the criteria are met.']),
          'b',
          'Falling short of diagnosis is not a finding of “no needs”. The recommendation is about information. It does not require the clinician to invent a diagnosis.',
          { a: 'That punishes the person for an accurate negative or uncertain result.', c: 'Repeating a screen to force a label is not feedback.' },
          ['ng87-info']),
        q('a-report-3', 'Which sentence is fit to say to Nina while her assessment is unfinished?',
          opts(['“The screener is high, so you have ADHD.”', '“We have useful examples, not enough to decide, and a sleep change that may explain part of the worsening. We will keep looking and agree support meanwhile.”', '“A negative decision means you do not need any help.”']),
          'b',
          'The middle sentence states evidence, a competing explanation, the limit, and continued support. The first overclaims a screen. The third overclaims a non-diagnosis.',
          { a: 'NG87 1.3.2 forbids that leap.', c: '1.4.4 points the other way even when criteria are not met, and here they are not yet decided.' },
          ['ng87-diag', 'ng87-info']),
        q('a-report-4', 'Why is the Jordan Hale report not a template?',
          opts(['Because fictional sentences can be pasted into real notes if the name is changed.', 'Because it demonstrates a reasoning chain. Using it as a form would invent a history the real person did not give.', 'Because reports should avoid formulations.']),
          'b',
          'The example is original fiction for study. A real report has to contain that person’s examples, gaps and outcome. AQAS is about the elements of quality, not about cloning a paragraph.',
          { a: 'Changing the name would still copy a life that did not happen.', c: 'The formulation is part of what AQAS expects. The ban is on copying the fiction, not on formulating.' },
          ['aqas', 'teaching']),
        q('a-report-5', 'School records were requested and have not arrived. Can the report say ADHD is excluded for that reason?',
          opts(['Yes. No records means the developmental criterion is negative.', 'No. Missing records are a limitation. Say the criterion could not be evaluated adequately, unless other evidence actually settles it.', 'Yes, if the person also has a high rating scale.']),
          'b',
          'Missing information is not a negative criterion. NICE 1.3.3 also advises against excluding solely because the time of onset is uncertain. A scale cannot fill the file.',
          { a: '“Not assessed” and “assessed and not met” are different sentences.', c: 'NG87 1.3.2 forbids diagnosis from a scale, and it does not allow a scale to create an exclusion either.' },
          ['ng87-diag', 'aqas']),
        q('a-report-6', 'The person reports no current suicidal intent. Is “no risk” an adequate line?',
          opts(['Yes. The denial closes the safety section.', 'No. Record the context, history still needed, protective factors, uncertainty, and what you will do. Absence of intent today is not a clearance.', 'Yes, if ADHD is also diagnosed, because the diagnosis contains the risk assessment.']),
          'b',
          'A safety note names what was asked, what is unknown, and the action. It is not a predictive formula, and an ADHD conclusion does not replace it.',
          { a: 'One denial does not review past harm, substances or safeguarding.', c: 'Diagnosis and risk are different assessments. A label does not answer the safety questions.' },
          ['aqas', 'teaching']),
        q('a-report-7', 'Must every diagnosed person hear the same feedback script?',
          opts(['Yes. NG87 1.4.3 is a mandatory wording to read aloud in full.', 'No. Hold a structured discussion and use the topics that could be included when they matter for that person.', 'No feedback is needed if the person already read a leaflet.']),
          'b',
          'The recommendation lists topics the discussion could include. Tailoring is the point. A leaflet does not replace the discussion, and 1.4.4 and 1.4.5 still cover information and how it is adapted.',
          { a: '“Could include” is not an identical script.', c: 'Information still has to be discussed and adapted. A leaflet is not the whole recommendation.' },
          ['ng87-info'])
      ],
      cards: [
        { front: 'What should a reader be able to do with the report?', back: 'See why the conclusion was reached, including supporting, conflicting and missing evidence, and which criterion each piece affects.' },
        { front: 'What does a report weigh about alternatives?', back: 'Evidence for and against them, including comorbidity. Not only a paragraph of evidence against.' },
        { front: 'What if criteria are not met?', back: 'Say so clearly, and still consider information and support. A non-diagnosis is not “no problem”.' },
        { front: 'What is the Jordan Hale piece for?', back: 'To practise following an evidence chain. Not for copying into a clinical record. Not a provider template.' }
      ]
    },
    {
      id: 'a-children',
      title: 'Children, young people and transition',
      minutes: 9,
      diagram: 'age-map',
      objectives: [
        'Keep the under-5, school-age and adult recommendations apart',
        'Include the child’s view and the parents’ needs without blaming parents',
        'Describe transition without pretending local services are identical'
      ],
      blocks: [
        { type: 'p', text: 'Children are not small adults, and the NICE recommendations do not pretend they are. Consider ADHD in every age group, with symptom criteria adjusted for age. Take the child’s view into account when judging impairment. Include an assessment of parents’ or carers’ mental health. A teacher’s concern, or a school scale, can be useful and is not a diagnosis.' },
        { type: 'diagram', id: 'age-map' },
        { type: 'h', text: 'Under 5' },
        { type: 'p', text: 'Offer an ADHD-focused group parent-training programme as first-line treatment. If significant impairment continues across settings after that programme, and after environmental modifications have been implemented and reviewed, obtain advice from a specialist ADHD service with expertise in young children, ideally a tertiary service. Do not offer medication to any child under 5 without a second specialist opinion from such a service.' },
        { type: 'h', text: 'Age 5 and over, and young people' },
        { type: 'p', text: 'Give information and offer additional ADHD-focused support to parents and carers. It can be group-based and as short as one or two sessions. If there are also symptoms of oppositional defiant disorder or conduct disorder, offer a parent-training programme as well. Offer medication only if symptoms are still causing persistent significant impairment in at least one domain after environmental modifications have been implemented and reviewed, a discussion of information has happened, and a baseline assessment has been done. These are not recommendations to medicate every child who is diagnosed. CBT is a “consider” for young people who have benefited from medication but still have significant impairment in at least one domain, focused on skills NICE lists. “Consider” is weaker than “offer”.' },
        { type: 'callout', kind: 'note', title: 'Parent training is not a verdict on parenting', text: 'NG87 1.4.11 says to explain that a recommendation of parent-training or education does not imply bad parenting. The aim is to build skills for the above-average needs of the child.' },
        { type: 'h', text: 'Leaving children’s services' },
        { type: 'p', text: 'Reassess around school-leaving age. If treatment needs to continue, arrange a smooth transition, usually completed by age 18, with local timing allowed. During transition, consider a formal meeting between child and adult services, involve the young person, and use the care programme approach as an aid from age 16. After transfer, adult clinicians do a broad assessment of functioning and of coexisting conditions, including drug misuse, personality disorders, emotional problems and learning difficulties. Consent, assent and competence should follow current local professional guidance. This page does not contain a full legal framework.' },
        { type: 'vignette', title: 'Fictional vignette: age 7', text: 'Idris is 7. He is markedly restless at home and at school, his language is hard for others to follow, and his sleep is poor. A teacher’s complaint is a reason to look, not a diagnosis. The assessment has to compare him with children of a similar age, take his view in whatever way he can give it, ask about language, sleep and development, and hear from home and school. Parent support can be discussed without blaming anyone. Medication is not the first sentence.' },
        { type: 'recap', items: [
          'Under 5: group parent training first. No medication without a second specialist opinion.',
          'From 5: medication is offered only if significant impairment persists after environmental changes, discussion and baseline assessment.',
          'Parent training does not mean bad parenting.',
          'Transition is a reassessment, usually by 18, not an automatic copy of the childhood plan.'
        ] }
      ],
      evidence: [
        { claim: 'Consider ADHD in all age groups with age-adjusted criteria. Include parents’ or carers’ mental health. Take the child’s view into account.', grade: 'G', source: 'ng87-diag', locator: '1.3.4–1.3.6', limit: 'Age-adjusted does not mean a lower standard of evidence.' },
        { claim: 'Under 5, offer ADHD-focused group parent training first. Do not offer medication without a second specialist opinion from a service expert in young children. From 5, medication is offered only if persistent significant impairment remains after environmental modifications, discussion and baseline assessment.', grade: 'G', source: 'ng87-manage', locator: '1.5.7–1.5.14', limit: 'Keep offer, consider and do not in the words NICE used. A March 2018 licensing note in the chapter is historical, not a current product check.' },
        { claim: 'Explain that parent-training does not imply bad parenting.', grade: 'G', source: 'ng87-info', locator: '1.4.11', limit: 'The explanation is part of care, not a softener that removes the offer of training.' },
        { claim: 'Reassess at school-leaving age, complete transition usually by 18, and reassess adult functioning and coexisting conditions after transfer.', grade: 'G', source: 'ng87-service', locator: '1.1.4–1.1.6', limit: 'Local timing can vary. Nations differ in how services are organised. This is not a shared-care promise.' }
      ],
      quiz: [
        q('a-children-1', 'A recommendation of parent training is made. What must also be explained?',
          opts(['That the parents have caused the ADHD.', 'That the recommendation does not imply bad parenting. The aim is to build skills for above-average needs.', 'That training replaces any need to assess the child.']),
          'b',
          'NG87 1.4.11 is explicit. The training is an offer of skill, not a finding of blame, and it is not a substitute for assessment.',
          { a: 'That is the misreading NICE tells clinicians to correct.', c: 'Support can begin before diagnosis. It does not cancel assessment.' },
          ['ng87-info']),
        q('a-children-2', 'A child is under 5 and has ADHD. What is first-line in NG87 1.5.7?',
          opts(['A stimulant, because early treatment is always pharmacological.', 'An ADHD-focused group parent-training programme.', 'Watchful waiting for a year with no other support.']),
          'b',
          'The recommendation says offer group parent training as first-line treatment. Medication has a separate “do not offer” unless a second specialist opinion is obtained. Watchful waiting is a recognition recommendation, not this treatment recommendation.',
          { a: '1.5.9 forbids offering medication without that second opinion.', c: 'That invents a delay and drops the offer of training.' },
          ['ng87-manage']),
        q('a-children-3', 'For a 10-year-old, when does NG87 say to offer medication?',
          opts(['As soon as the diagnosis is made.', 'Only if symptoms still cause persistent significant impairment in at least one domain after environmental modifications are implemented and reviewed, information has been discussed, and a baseline assessment has been done.', 'Whenever a teacher requests it.']),
          'b',
          '1.5.13 sets those conditions. Diagnosis alone is not the offer. A teacher’s request can be important information and is not the criterion.',
          { a: 'That skips environmental modifications, discussion and baseline assessment.', c: 'School information is not the prescribing decision.' },
          ['ng87-manage']),
        q('a-children-4', 'A young person is leaving school and still needs treatment. What does NG87 expect?',
          opts(['An automatic stop at 18.', 'Reassessment, a planned transition usually completed by 18, and a broad adult reassessment after transfer.', 'The childhood prescription copied forward with no new history.']),
          'b',
          '1.1.4 to 1.1.6 describe reassessment, transition and a fresh look at adult functioning and coexisting conditions. There is no recommendation simply to stop, and no recommendation to copy a plan without review.',
          { a: 'Transition exists because need may continue. It is a reassessment, not a cliff-edge stop.', c: '1.1.6 is a comprehensive assessment, not a photocopy.' },
          ['ng87-service'])
      ],
      cards: [
        { front: 'Under 5: what is offered first?', back: 'An ADHD-focused group parent-training programme. NG87 1.5.7.' },
        { front: 'Under 5: what about medication?', back: 'Do not offer it without a second specialist opinion from a service with expertise in young children. NG87 1.5.9.' },
        { front: 'Does parent training mean the parents caused ADHD?', back: 'No. NG87 1.4.11 says to explain that it does not imply bad parenting.' },
        { front: 'When should transition usually be completed?', back: 'By the time the young person is 18, with local variation allowed. Needs are reassessed, not assumed. NG87 1.1.4.' }
      ]
    },
    {
      id: 'a-support',
      title: 'Support, treatment overview and monitoring',
      minutes: 10,
      diagram: 'support-wheel',
      objectives: [
        'Describe a shared plan that is wider than medication',
        'State adult and child medication recommendations without doses',
        'Separate six-monthly physical checks from the annual review'
      ],
      blocks: [
        { type: 'p', text: 'This is an overview for learning. It is not a prescribing lesson. There are no doses, no switching tables, no places to buy medication, and no advice to stop a medicine unsupervised. Initiation of ADHD medication is for a professional with training and expertise. Historical licensing notes inside NG87, including notes dated March 2018, are not a check of today’s marketing authorisation. Use the current BNF or BNFC and the product information for that decision.' },
        { type: 'diagram', id: 'support-wheel' },
        { type: 'p', text: 'NICE asks for a holistic shared plan covering psychological, behavioural and educational or occupational needs, goals, and coexisting conditions. Environmental modifications are individual. The guideline’s examples include changes to noise and seating, fewer distractions, shorter periods of focus with breaks, and backing up spoken requests with written instructions. People can revisit decisions.' },
        { type: 'h', text: 'Adults, in the words NICE uses' },
        { type: 'p', text: 'Offer medication if symptoms are still causing significant impairment in at least one domain after environmental modifications have been implemented and reviewed. Consider non-pharmacological treatment if the person makes an informed choice not to take medication, has trouble adhering, or finds medication ineffective or intolerable. Also consider it alongside medication when impairment remains despite benefit. When non-pharmacological treatment is indicated, offer at least a structured ADHD-focused supportive psychological intervention and regular follow-up. Treatment may include elements of CBT or a full course. RCPsych notes that coaching is self-regulated and variable. Do not teach coaching, mindfulness and structured CBT as if they had the same evidence or were interchangeable.' },
        { type: 'h', text: 'Medication names only' },
        { type: 'p', text: 'For children aged 5 and over and young people, NICE says offer methylphenidate first line. For adults, offer lisdexamfetamine or methylphenidate first line. Later choices depend on response, tolerance and the specific recommendation. Guanfacine for adults should not be offered without tertiary ADHD advice. The same medication choices are offered to people who also have anxiety, tics or autism. An acute psychotic or manic episode means stopping the ADHD medication and only reconsidering it afterwards. None of those sentences is a dose, and several carry historical off-label notes that must be checked against current authorisations.' },
        { type: 'diagram', id: 'monitor' },
        { type: 'table', caption: 'Monitoring points linked to NG87. This table is a study aid. Clinical concern can mean doing more, sooner.', headers: ['Question', 'What NICE says', 'Where'], rows: [
          ['Before starting', 'Confirm the criteria and the need. Review mental health, social circumstances, misuse and diversion, medical history, current medicines, height, weight, pulse, blood pressure and cardiovascular status.', '1.7.4'],
          ['ECG', 'Not needed routinely before stimulants, atomoxetine or guanfacine unless specified cardiac features or a relevant co-prescribed cardiac risk are present. Refer if those features apply.', '1.7.4–1.7.6'],
          ['Pulse and blood pressure', 'Before and after each dose change, and every six months, compared with the normal range for age.', '1.8.9'],
          ['Height and weight', 'Height every six months in children and young people. Weight every three months at age 10 and under. Over 10, and in young people: at three and six months, then every six months, or more often if there is concern. Adults: weight every six months. Plot children’s growth.', '1.8.5'],
          ['Other follow-up', 'Effectiveness, unwanted effects, sleep, behaviour and diversion. Follow up whether or not medication is used. No routine bloods or ECG without a clinical indication.', '1.8.1–1.8.4, 1.8.10, 1.8.17–1.8.19'],
          ['Annual review', 'A healthcare professional with training and expertise in managing ADHD reviews medication at least yearly: preferences, benefits, harms, the day, missed doses, and support needs. That professional is not necessarily a consultant psychiatrist. The review does not remove escalation or shared care. There is no automatic annual stop.', '1.10.1–1.10.3'],
          ['Shared care', 'After titration and dose stabilisation, prescribing and monitoring should be carried out under shared-care protocol arrangements with primary care. The arrangement has to exist. It is not a promise the clinic can make alone.', '1.7.29']
        ] },
        { type: 'p', text: 'On diet, stress a balanced diet, good nutrition and regular exercise. Do not advise cutting out artificial colouring and additives as a general treatment for children and young people. Do not advise or offer fatty-acid supplements to treat ADHD in children and young people. If a food seems to change behaviour, use a diary and, where the diary supports a link, a dietitian together with the specialist. Do not say that a diet cures ADHD or that exercise removes core symptoms in everyone.' },
        { type: 'callout', kind: 'limit', title: 'Nations, products and shortages', text: 'This overview does not establish current medicine availability, shared-care forms, or legal pathways in each UK nation. Those change and were not re-audited as a formulary on 8 November 2026.' },
        { type: 'recap', items: [
          'Change the environment and plan care with the person before talking as if medication were automatic.',
          'Adult medication is offered when significant impairment remains in at least one domain after those changes.',
          'Names of first-line medicines are not doses.',
          'Six-monthly pulse and blood pressure checks and the annual review do different jobs.'
        ] }
      ],
      evidence: [
        { claim: 'Make a holistic shared plan. Environmental modifications are individual; written instructions, fewer distractions and shorter focus periods are examples, not a complete list.', grade: 'G', source: 'ng87-manage', locator: '1.5.1–1.5.6 and terms', limit: 'Examples are not reasonable-adjustment law by themselves. Reasonable adjustments are defined separately in the guideline.' },
        { claim: 'Offer medication to adults if significant impairment remains in at least one domain after environmental modifications. Consider non-pharmacological treatment in the situations 1.5.16 and 1.5.17 describe. When it is indicated, offer ADHD-focused supportive psychological intervention and follow-up, which may include CBT.', grade: 'G', source: 'ng87-manage', locator: '1.5.15–1.5.18', limit: 'Offer and consider are different. Coaching is not given the same sentence. RCPsych’s coaching remark is public information, not this recommendation.' },
        { claim: 'Methylphenidate is first line from age 5. Lisdexamfetamine or methylphenidate is first line for adults. Guanfacine for adults needs tertiary advice. Initiation is by a professional with expertise.', grade: 'G', source: 'ng87-meds', locator: '1.7.2, 1.7.7, 1.7.11, 1.7.17', limit: 'No doses. March 2018 licensing notes are historical. Check current product information.' },
        { claim: 'Pulse and blood pressure every six months and at dose changes; growth on the age-specific schedule; at least annual medication review by a healthcare professional with training and expertise in managing ADHD; shared care after stabilisation.', grade: 'G', source: 'ng87-monitor', locator: '1.8.5, 1.8.9, 1.10.1, and 1.7.29 for shared care', limit: '1.10.1 does not require a consultant psychiatrist for every review. It does not remove escalation or shared care. The diagram simplifies the clocks.' }
      ],
      quiz: [
        q('a-support-1', 'Does the annual medication review replace six-monthly pulse and blood pressure checks?',
          opts(['Yes. One yearly visit covers physical safety.', 'No. Pulse and blood pressure are checked at dose changes and every six months. The annual review is a broader decision about whether medication should continue.', 'Yes, if the person feels well.']),
          'b',
          'NG87 1.8.9 and 1.10.1 schedule different jobs. The annual reviewer is a healthcare professional with training and expertise in managing ADHD, not necessarily a consultant psychiatrist. Feeling well does not retire the cardiovascular check, and the review does not remove escalation or shared care.',
          { a: 'That would delete the six-monthly recommendation.', c: 'Symptoms and signs used for safety are not the same as a global feeling of being well.' },
          ['ng87-monitor']),
        q('a-support-2', 'An adult still has significant impairment after environmental changes have been tried and reviewed. What does NG87 1.5.15 say?',
          opts(['Consider a herbal treatment first.', 'Offer medication.', 'Medication is prohibited once environmental changes have been discussed.']),
          'b',
          'The word is offer, and the condition is significant impairment in at least one domain after the environmental work. It is not a dose and not an instruction to skip the conversation about harms and preferences in 1.5.4.',
          { a: 'No herbal recommendation of that kind is in this section.', c: 'The environmental work is the condition for the offer, not a ban.' },
          ['ng87-manage']),
        q('a-support-3', 'Which diet statement matches NG87?',
          opts(['Advise all children to cut out additives, and offer fatty-acid supplements as treatment.', 'Encourage a balanced diet, good nutrition and exercise. Do not advise additive elimination as a general treatment. Do not offer fatty-acid supplements for ADHD in children and young people.', 'A few-food diet is recommended long term for every child.']),
          'b',
          '1.6.1, 1.6.2 and 1.6.4 say exactly that structure. 1.6.5 says there is no evidence on long-term effectiveness or harms of a few-food diet, and only limited short-term evidence. It is not a general recommendation.',
          { a: 'Those are the actions NICE says not to take as general treatment.', c: 'That overstates 1.6.5.' },
          ['ng87-diet']),
        q('a-support-4', 'Shared care is mentioned at the first diagnostic visit. What is accurate?',
          opts(['The GP must prescribe tomorrow, because NICE mentioned shared care.', 'NG87 1.7.29 places shared-care prescribing and monitoring after titration and dose stabilisation, and the protocol has to be arranged. It cannot be promised as if it already exists.', 'Shared care means the person manages doses alone.']),
          'b',
          'The recommendation has a timing, “after titration and dose stabilisation”, and a mechanism, a shared-care protocol. A sentence in a report does not create the local agreement.',
          { a: 'That ignores both the timing and the need for an actual protocol.', c: 'Shared care is between services. It is not unsupervised dose changes. This site does not teach dose changes at all.' },
          ['ng87-meds'])
      ],
      cards: [
        { front: 'What is an environmental modification?', back: 'A change in the setting to reduce the impact of ADHD, matched to the person. NICE examples include written instructions, fewer distractions, and shorter focus periods with breaks.' },
        { front: 'When does NICE say to offer medication to adults?', back: 'If symptoms still cause significant impairment in at least one domain after environmental modifications have been implemented and reviewed. NG87 1.5.15. Not a dose.' },
        { front: 'First-line names, without doses?', back: 'Methylphenidate from age 5. Lisdexamfetamine or methylphenidate for adults. Check current licensing. Guanfacine for adults needs tertiary advice.' },
        { front: 'How often are pulse and blood pressure checked?', back: 'Before and after each dose change and every six months. NG87 1.8.9. The annual review does not replace this.' }
      ]
    }
  ].map(stamp);
});
