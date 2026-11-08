/* Independent supplements. Educational draft, not course teaching and not a validated programme. */
(function (root, factory) {
  const api = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (typeof window !== 'undefined') window.ADDITIONS = api;
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
      id: 'a-meaning',
      title: 'What ADHD means, and what it does not',
      minutes: 8,
      diagram: 'three-lenses',
      objectives: [
        'Separate an everyday lapse from a developmental pattern',
        'Hold symptoms, history and impact together',
        'Avoid treating a strength, or a stereotype, as a diagnostic sign'
      ],
      blocks: [
        { type: 'p', text: 'People lose keys, fidget in long meetings and miss a detail on a tired day. That is ordinary. ADHD is the name for a persistent pattern of inattention and/or hyperactivity-impulsivity that is outside what is expected for the person’s age and intellectual development, and that gets in the way of learning, work or relationships.' },
        { type: 'p', text: 'The clinician does not count familiar anecdotes. The pattern has to be looked at with its developmental history, the settings it appears in, the impact, and the other explanations that could fit. Late help-seeking does not, by itself, mean the pattern started in adulthood. Adults often arrive when the demands outgrow the ways they have been coping.' },
        { type: 'diagram', id: 'three-lenses' },
        { type: 'cards', items: [
          { tag: 'Not the diagnosis', title: 'A hard week', text: 'Lost keys during exams, with a previously steady pattern and a clear stress or sleep context, is a reason to ask more. It is not an ADHD assessment.' },
          { tag: 'Part of the picture', title: 'A long pattern', text: 'The same kinds of difficulty show up across years and in more than one part of life, even when the person is trying.' },
          { tag: 'Also required', title: 'A real cost', text: 'The pattern affects psychological, social, educational or occupational life at least moderately. Difference without that cost is not the diagnosis.' }
        ] },
        { type: 'h', text: 'In the room' },
        { type: 'p', text: 'WHO’s clinical description allows the balance of inattention and hyperactivity-impulsivity to vary between people and to change with age. Inattention may be less obvious when a task is highly stimulating or frequently rewarding. Symptoms can also look different when a setting is tightly structured. That is a reason to ask about dull, effortful tasks. It is not permission to infer ADHD from any attention problem, and it is not a finding you can see on a scan.' },
        { type: 'callout', kind: 'note', title: 'Strengths are individual', text: 'Creativity, performing well in a crisis, or intense engagement are not universal gifts and they are not diagnostic criteria. A respectful explanation can name strengths without turning them into a test.' },
        { type: 'vignette', title: 'Fictional vignette: the examination week', text: 'Sam, a student, loses their keys twice during examination week and wonders aloud about ADHD. Before that term, Sam kept placements, a part-time job and friendships without this kind of disruption. Sleep has been short and the worry is new. What is missing is a developmental trajectory, evidence from other settings, sustained impairment, and a look at stress and sleep. The kind reply is to take the distress seriously and not to close the question from two lost keys.' },
        { type: 'callout', kind: 'limit', title: 'Limit', text: 'Contextual variation explains why a symptom can come and go. It does not let a clinician diagnose from a single setting, a single week, or a preferred label.' },
        { type: 'recap', items: [
          'Occasional lapses are not a disorder.',
          'Diagnosis needs a developmental, cross-setting, impairing pattern.',
          'Good focus on a rewarding task does not rule the question in or out.',
          'Strengths are not criteria.'
        ] }
      ],
      evidence: [
        { claim: 'ADHD is a persistent pattern of inattention and/or hyperactivity-impulsivity, outside expected variation for age and intellectual functioning, with impact on academic, occupational or social functioning, evident across settings, and not better explained by another disorder or by a substance or medication.', grade: 'D', source: 'who-cddr', locator: '6A05 essential features', limit: 'This is a paraphrase of the clinical description. The manual’s wording is not reproduced in full, and it is not a symptom checklist to score.' },
        { claim: 'Inattention may be less evident when the activity is intensely stimulating or frequently rewarding, and manifestations vary with the structure and demands of the setting.', grade: 'D', source: 'who-cddr', locator: '6A05', limit: 'Context changes expression. It does not confirm the diagnosis.' },
        { claim: 'Public information describes ADHD as a neurodevelopmental condition, discusses many small genetic differences rather than one gene, and notes that people may first come to attention later.', grade: 'P', source: 'rcpsych', locator: 'What kind of condition; when it starts; strengths', limit: 'RCPsych is an accessible explanation. It is not the source for medication sequencing.' }
      ],
      quiz: [
        q('a-meaning-1', 'A person concentrates for hours on a hobby they love. What does that do to an ADHD question?',
          opts(['It rules ADHD out, because attention is intact.', 'It does not rule ADHD out. Inattention can be less obvious when a task is highly rewarding, and the rest of the pattern still has to be assessed.', 'It confirms ADHD, because intense focus is a criterion.']),
          'b',
          'WHO notes that inattention may be less evident with intense stimulation and frequent rewards. The broader developmental pattern, settings, impact and alternatives still have to be assessed. Intense focus is not itself a diagnostic criterion.',
          { a: 'A preserved skill in one rewarding activity does not describe the person’s life. The diagnosis is about a pattern, not a single performance.', c: 'Calling intense focus a criterion invents a rule. It can be asked about. It does not establish ADHD.' },
          ['who-cddr']),
        q('a-meaning-2', 'Sam loses their keys twice in examination week and has otherwise been coping. What is the soundest next teaching point?',
          opts(['Those two events meet the threshold, so the label can be given.', 'The events are a starting point. Trajectory, other settings, sustained impact, and sleep or stress still have to be understood.', 'Key-losing is specific to ADHD, so alternatives can be skipped.']),
          'b',
          'A symptom is not a diagnosis. A new, short-lived problem in one stressed week lacks the developmental and cross-setting picture the description requires.',
          { a: 'Two recent events do not show persistence, development or moderate impairment across settings.', c: 'Losing keys is common. Other explanations are part of the assessment, not an optional extra.' },
          ['who-cddr', 'teaching']),
        q('a-meaning-3', 'An adult asks for help for the first time at 34. Which statement is fair?',
          opts(['First presentation in adulthood proves the ADHD began in adulthood.', 'Late recognition is possible when demands outgrow coping. It does not, by itself, prove or disprove a childhood pattern.', 'Adults cannot be assessed if nobody diagnosed them as children.']),
          'b',
          'People may first come to clinical attention later, often when compensation is no longer enough. Childhood diagnosis is not required. A late request is not automatic evidence of adult onset, and it is not a bar to assessment.',
          { a: 'The date of the appointment is not the date the pattern began.', c: 'Neither ICD-11’s clinical description nor NICE makes a childhood diagnosis a requirement for considering adult ADHD. The history still has to be investigated.' },
          ['who-cddr', 'ng87-diag']),
        q('a-meaning-4', 'Which use of “strengths” stays inside the evidence?',
          opts(['Crisis performance is a diagnostic sign and should be scored.', 'Strengths vary. They can be named in a respectful explanation. They are not criteria.', 'If no creative strength is reported, ADHD is unlikely.']),
          'b',
          'Public information discusses strengths as individual, not as a test. Treating them as criteria, or their absence as evidence against ADHD, goes beyond that.',
          { a: 'No reviewed source makes crisis performance a required or scored feature.', c: 'The absence of a admired trait is not a negative biomarker.' },
          ['rcpsych', 'teaching'])
      ],
      cards: [
        { front: 'What is the difference between a symptom and ADHD?', back: 'A symptom is one feature, such as losing track of a task. ADHD is a developmental pattern of such features, across settings, with impact, after other explanations are weighed.' },
        { front: 'Does enjoying a hobby with deep concentration rule ADHD out?', back: 'No. Inattention may be less obvious when a task is highly stimulating or rewarding. The rest of the history still matters.' },
        { front: 'Does asking for help as an adult mean the pattern started in adulthood?', back: 'No. Recognition can be late because coping strategies held until demands grew. The childhood history still has to be examined.' },
        { front: 'Are creativity or “hyperfocus” diagnostic criteria?', back: 'No. They are experiences some people report. They are not required features and they are not a test.' }
      ]
    },
    {
      id: 'a-models',
      title: 'Models, heterogeneity and scientific humility',
      minutes: 8,
      diagram: 'model-windows',
      objectives: [
        'Separate a description, a model, a group association and a test',
        'Use executive-function words as vocabulary, not as mandatory deficits',
        'Refuse a single-chemical story of ADHD'
      ],
      blocks: [
        { type: 'p', text: 'A model is a way of thinking about a pattern. It can suggest good questions. It is not the pattern itself, and it is not a result you can read off one person. This draft does not crown one neurobiological model as the winner.' },
        { type: 'diagram', id: 'model-windows' },
        { type: 'h', text: 'What can be said about causes' },
        { type: 'p', text: 'Authoritative public information describes both genetic and environmental contributions. RCPsych describes many small genetic differences rather than a single ADHD gene. An association in a group is not the cause you can point to in the person sitting in front of you.' },
        { type: 'callout', kind: 'warn', title: 'Not a dopamine deficiency', text: 'Do not teach that every person’s ADHD is a demonstrated “dopamine deficiency”. The fact that some medicines act on catecholamine signalling does not prove that low dopamine caused the disorder. A benefit from a stimulant does not diagnose ADHD, and a lack of benefit does not erase a careful assessment.' },
        { type: 'cards', items: [
          { tag: 'Vocabulary', title: 'Working memory', text: 'Keeping information available while you act. A useful description of some experiences. Not a deficit you must find in every person.' },
          { tag: 'Vocabulary', title: 'Inhibition', text: 'Pausing a response long enough to choose. A lens for questions, not a pass-fail laboratory sign.' },
          { tag: 'Vocabulary', title: 'Reward and context', text: '“When does this go better?” is a good clinical question. It does not replace diagnostic requirements.' }
        ] },
        { type: 'p', text: 'For adults, AQAS states that there are no biomarkers, cognitive tests or neuroimaging tests with sufficient sensitivity and specificity to diagnose ADHD. That sentence is limited to the tests considered for the 2024 consensus. It is not a claim that every emerging test was reviewed, and it does not say that an adjunct is never useful. A normal performance on a task does not settle the clinical question. The illustrations on this site are not biological mechanisms.' },
        { type: 'callout', kind: 'limit', title: 'Limit', text: 'The “stimulant response does not diagnose” point is a teaching inference from NICE’s specified assessment. It is not a sentence quoted from NG87. NICE places diagnosis on the full clinical assessment, not on a treatment trial.' },
        { type: 'recap', items: [
          'Models generate questions. They do not diagnose.',
          'Many small genetic differences are not “an ADHD gene”.',
          'There is no scan or cognitive test that settles an adult diagnosis.',
          'Medicine response is not a diagnostic test.'
        ] }
      ],
      evidence: [
        { claim: 'Public information describes many small genetic differences rather than one ADHD gene, alongside environmental contributions.', grade: 'P', source: 'rcpsych', locator: 'What causes ADHD', limit: 'Association is not an individual cause. Medication action is not a cause.' },
        { claim: 'AQAS states there are no biomarkers, cognitive tests or neuroimaging tests with sufficient sensitivity and specificity to diagnose adult ADHD.', grade: 'C', source: 'aqas', locator: 'Section 3.1, consensus published 2 August 2024', limit: 'Source- and time-limited. Not a claim that every later test was reviewed, and not a claim that non-diagnostic adjuncts are useless.' },
        { claim: 'Diagnosis rests on a specialist assessment of history, symptoms across everyday life, development, observers and mental state, not on a rating scale or a treatment response.', grade: 'G', source: 'ng87-diag', locator: '1.3.1–1.3.3', limit: 'The treatment-response sentence is a teaching inference, marked as such, not a quoted NICE line.' }
      ],
      quiz: [
        q('a-models-1', 'A person feels much more able to concentrate after a stimulant. What does that show?',
          opts(['It proves they have ADHD.', 'It does not prove ADHD. Diagnosis rests on the assessment NICE specifies, not on a treatment response.', 'It proves they do not have ADHD, because the medicine worked too well.']),
          'b',
          'NICE locates diagnosis in a full specialist assessment. Benefit from a medicine is not one of those requirements. This item is a teaching inference from those requirements, not a quotation.',
          { a: 'Response to treatment is not a diagnostic criterion in the recommendations used here.', c: 'A good response is not evidence against the diagnosis either. It is a treatment observation.' },
          ['ng87-diag', 'teaching']),
        q('a-models-2', 'Which sentence is safe to say about dopamine?',
          opts(['ADHD is a dopamine deficiency, and the level can be read off in clinic.', 'Catecholamine signalling is relevant to how some medicines work. That does not establish a simple deficiency as the cause in each person.', 'A normal life without stimulant treatment rules out any catecholamine involvement.']),
          'b',
          'The draft refuses a single-chemical story. Medicine mechanism and cause of the disorder are different claims. No clinic test in this source set measures a personal dopamine deficiency.',
          { a: 'That slogan is not supported by the sources used here and should not be drawn as a gauge.', c: 'Not taking a medicine says nothing so tidy about a neurotransmitter.' },
          ['rcpsych', 'teaching']),
        q('a-models-3', 'An adult completes a computerised attention task in the normal range. What follows?',
          opts(['ADHD is excluded.', 'The task does not settle the question. AQAS says current cognitive and imaging tests are not specific and sensitive enough to diagnose adult ADHD.', 'The normal score should be entered as a negative diagnostic criterion.']),
          'b',
          'A research or clinic task can be interesting. It is not a truth machine. A normal result does not replace history, impairment and differential diagnosis.',
          { a: 'Exclusion would treat an insufficient test as a gold standard.', c: 'Inventing a negative criterion from a normal score overstates the test.' },
          ['aqas']),
        q('a-models-4', 'A colleague says “poor inhibition” as if it had been measured in this patient. What is the careful translation?',
          opts(['Inhibition is a required deficit, so the diagnosis follows.', 'Inhibition is a vocabulary for some experiences. It is not a finding you must demonstrate in every person.', 'The word should be deleted from all teaching because the idea is meaningless.']),
          'b',
          'Executive-function words can help a person recognise an experience. They are lenses. This pack does not establish them as mandatory deficits or as superior to other models.',
          { a: 'No source here makes a laboratory inhibition failure a diagnostic requirement.', c: 'The vocabulary is still useful if it is labelled as a lens.' },
          ['teaching', 'aqas'])
      ],
      cards: [
        { front: 'What is a model for, in clinic?', back: 'It suggests questions. It does not diagnose, and it is not a personal test result.' },
        { front: 'Does a stimulant response prove ADHD?', back: 'No. Diagnosis follows the assessment NICE specifies. Medicine response is a teaching inference, not a quoted diagnostic test.' },
        { front: 'Is there an ADHD gene?', back: 'RCPsych describes many small genetic differences, not one gene. A group association is not an individual’s cause.' },
        { front: 'Can a brain scan diagnose adult ADHD?', back: 'AQAS says no biomarker, cognitive test or scan it considered has sufficient sensitivity and specificity for that job. That is not a review of every future test.' }
      ]
    },
    {
      id: 'a-recognition',
      title: 'Recognition, referral and preparation',
      minutes: 9,
      diagram: 'pathway',
      objectives: [
        'Apply NICE’s different referral routes for children and adults',
        'Keep watchful waiting away from severe impairment and risk',
        'Prepare an assessment without promising a diagnosis'
      ],
      blocks: [
        { type: 'p', text: 'Noticing a difficulty is not the same as diagnosing it. NICE separates groups who may need a closer look, the decision to refer, and the specialist assessment that follows. Primary care is not asked to make the initial diagnosis or to start medication in children and young people with suspected ADHD.' },
        { type: 'diagram', id: 'pathway' },
        { type: 'h', text: 'Children and young people' },
        { type: 'p', text: 'Universal screening in nursery, primary and secondary schools should not be done. When problems suggestive of ADHD are having an adverse effect on development or family life, NICE says consider up to 10 weeks of watchful waiting, and consider offering parents or carers a referral to group-based ADHD-focused support. That support should not wait for a formal diagnosis. If moderate impairment persists, refer to secondary care. If impairment is severe, refer directly. Do not stretch the watchful-waiting sentence so that it delays action when impairment is severe or when there is a risk that needs a response now.' },
        { type: 'h', text: 'Adults' },
        { type: 'p', text: 'An adult without a childhood diagnosis should be referred to a mental health specialist trained in ADHD when there is evidence of typical hyperactivity, impulsivity and/or inattention that began in childhood and persisted, is not explained by other psychiatric diagnoses (which may still coexist), and is associated with moderate or severe impairment. Someone who was treated in childhood and still has symptoms with at least moderate impairment should be referred to general adult psychiatric services. Local pathways in England, Wales, Scotland and Northern Ireland are not identical. Right to Choose information on the NHS page is about England.' },
        { type: 'cards', items: [
          { tag: 'Do not', title: 'Screen every classroom', text: 'NG87 1.2.3 advises against universal school screening. Concern about a particular child is a different situation from testing everyone.' },
          { tag: 'Consider', title: 'Watchful waiting', text: 'Up to 10 weeks, and only in the milder primary-care situation NG87 1.2.7 describes. Severe impairment takes the direct-referral route.' },
          { tag: 'Offer support', title: 'Parents need not wait', text: 'ADHD-focused group support for parents or carers can be offered while the difficulties are still being evaluated.' }
        ] },
        { type: 'callout', kind: 'note', title: 'Preparation is a teaching practice, not a NICE script', text: 'Send a plain-language plan. Ask about language, reading, sensory and communication needs. Offer breaks. Explain that the outcome may be ADHD, a different explanation, more than one condition, or not enough evidence. Consent to contact another person should be specific, and it should be refused if contact would be unsafe. AQAS, a consensus standard, expects a direct consultation. Video is allowed. Forms completed alone are not the assessment.' },
        { type: 'recap', items: [
          'Do not universally screen schools.',
          'Severe impairment in a child is a direct referral, not a 10-week wait.',
          'Parent support need not wait for a confirmed diagnosis.',
          'Primary care does not make the initial child diagnosis or start ADHD medication.',
          'Adult referral still needs a childhood-onset, persisting, impairing picture that other diagnoses do not fully explain.'
        ] }
      ],
      evidence: [
        { claim: 'Universal screening should not be undertaken in nursery, primary and secondary schools.', grade: 'G', source: 'ng87-refer', locator: '1.2.3', limit: 'This is not a ban on assessing a child who is already causing concern.' },
        { claim: 'Where problems adversely affect development or family life, consider watchful waiting of up to 10 weeks and offering parents ADHD-focused group support without waiting for a diagnosis. Persistent moderate impairment leads to secondary care. Severe impairment is referred directly. Primary care should not make the initial diagnosis or start medication.', grade: 'G', source: 'ng87-refer', locator: '1.2.7–1.2.9', limit: '“Consider” is not “offer” and is not “do not”. Do not generalise watchful waiting to severe impairment.' },
        { claim: 'Adults without a childhood diagnosis are referred to a trained mental health specialist when manifestations began in childhood, persisted, are not explained by other psychiatric diagnoses (which may coexist), and are associated with moderate or severe impairment.', grade: 'G', source: 'ng87-refer', locator: '1.2.10', limit: '1.2.11 is a different route for people previously treated in childhood.' },
        { claim: 'A direct consultation is required. Video-conferencing is permitted. Self-completed forms alone are not the assessment.', grade: 'C', source: 'aqas', locator: '3.1.1.2–3', limit: 'Consensus, not a NICE rule about the technology used for the appointment.' }
      ],
      quiz: [
        q('a-recognition-1', 'Parents ask for help while their child’s assessment is still underway. Must ADHD-focused parent support wait for a confirmed diagnosis?',
          opts(['Yes. Support before diagnosis would prejudge the outcome.', 'No. NG87 1.2.7 says the offer of group-based ADHD-focused support should not wait for a formal diagnosis.', 'Yes, unless the school has already screened the whole class.']),
          'b',
          'NICE separates support from the diagnostic verdict. The recommendation uses “offering” in that bullet, and it says the support should not wait for a formal diagnosis.',
          { a: 'Waiting for the label delays help NICE has already said need not wait.', c: 'Universal screening is advised against. It is not a gate for parent support.' },
          ['ng87-refer']),
        q('a-recognition-2', 'A child has attention and behaviour problems with severe impairment. Which referral stance matches NG87?',
          opts(['Watchful waiting for 10 weeks, because that is always first.', 'Direct referral to secondary care for assessment.', 'The GP should diagnose and start medication to save time.']),
          'b',
          'Recommendation 1.2.8 sends severe impairment straight to secondary care. Watchful waiting belongs to the “consider” recommendation about adverse but not severe impact. Primary care should not make the initial diagnosis or start medication.',
          { a: 'Using 1.2.7 for a severe presentation drops the severity distinction.', c: '1.2.9 says primary care should not do either of those things.' },
          ['ng87-refer']),
        q('a-recognition-3', 'Which adult should be referred under NG87 1.2.10?',
          opts(['Any adult who would like a stimulant, even without a childhood pattern.', 'An adult whose hyperactivity, impulsivity and/or inattention began in childhood, persisted, is not explained by another psychiatric diagnosis, and causes moderate or severe impairment.', 'Only adults who already have a childhood diagnosis on file.']),
          'b',
          '1.2.10 is specifically for adults who do not already have a childhood diagnosis, and it lists those three conditions. People who were treated as children are covered by 1.2.11 instead.',
          { a: 'A wish for medication is not the referral standard.', c: 'That group is the neighbouring recommendation, 1.2.11, and still needs at least moderate impairment.' },
          ['ng87-refer']),
        q('a-recognition-4', 'A school wants to screen every pupil with a rating scale. What does NG87 say?',
          opts(['Do it yearly. It is the same as a specialist assessment.', 'Do not undertake universal screening in nursery, primary or secondary schools.', 'Screen only the girls, because they are under-recognised.']),
          'b',
          '1.2.3 is a “should not”. Under-recognition of girls and women, in 1.2.2, is a reason for awareness when concerns arise. It is not a universal screening programme.',
          { a: 'A scale is not a specialist assessment, and universal screening is not recommended.', c: 'Awareness is not the same action as screening a whole group.' },
          ['ng87-refer'])
      ],
      cards: [
        { front: 'Should schools screen every child for ADHD?', back: 'No. NG87 1.2.3 says universal screening should not be undertaken in nursery, primary and secondary schools.' },
        { front: 'When is watchful waiting the wrong lesson to apply?', back: 'When impairment is severe. NG87 1.2.8 is direct referral. Watchful waiting is a “consider” option in 1.2.7, for up to 10 weeks.' },
        { front: 'Can parent support start before a child diagnosis?', back: 'Yes. NG87 1.2.7 says ADHD-focused group support should not wait for a formal diagnosis.' },
        { front: 'Who should not make the initial diagnosis in a child?', back: 'Primary care practitioners should not make the initial diagnosis or start medication. NG87 1.2.9.' }
      ]
    },
    {
      id: 'a-evidence',
      title: 'Diagnostic assessment is an evidence argument',
      minutes: 9,
      diagram: 'matrix',
      objectives: [
        'Name who NICE says may diagnose ADHD',
        'List the parts of the assessment that a scale cannot replace',
        'Keep uncertain onset from becoming either an automatic exclusion or invented certainty'
      ],
      blocks: [
        { type: 'illustration', id: 'assessment' },
        { type: 'p', text: 'A diagnosis is an argument a trained clinician can show to another trained clinician. NICE says ADHD should only be diagnosed by a specialist psychiatrist, paediatrician, or other appropriately qualified professional with training and expertise in diagnosing ADHD. The basis is a full clinical and psychosocial assessment across everyday settings, a full developmental and psychiatric history, and observer reports together with an assessment of the person’s mental state. The picture above is a prompt for areas of enquiry. The argument is in the text and the diagram, not in the cards.' },
        { type: 'callout', kind: 'warn', title: 'Scales do not diagnose', text: 'A diagnosis should not be made solely on rating-scale or observational data. Scales such as the Conners’ scales and the Strengths and Difficulties Questionnaire are helpful added tools. Observations, for example at school, are useful when there is doubt. They are not the decision.' },
        { type: 'p', text: 'For a diagnosis, symptoms of hyperactivity, impulsivity or inattention should meet the diagnostic criteria NICE names in DSM-5 or ICD-11, cause at least moderate impairment based on interview or observation in multiple settings, and be happening often in two or more important settings. NICE says exclusion based on a pervasive developmental disorder, or on an uncertain time of onset, is not recommended. That sentence does not remove the need to look for a childhood history. An exact remembered birthday is different from good evidence that the difficulties are genuinely new in adult life. Missing school records are a gap to document, not an automatic “no”, and not a gap to fill with false certainty.' },
        { type: 'diagram', id: 'matrix' },
        { type: 'p', text: 'The same process includes needs, coexisting conditions, social, family, educational or occupational circumstances, and physical health. For children and young people, also assess parents’ or carers’ mental health, and take the child’s view into account when judging how much the symptoms matter.' },
        { type: 'p', text: 'WHO’s description used alongside this asks for a persistent pattern, for example over at least six months, evidence of significant symptoms before age 12, manifestations in more than one setting, functional impact, and a check on other mental disorders, substances, medicines and nervous-system disease. A childhood diagnosis on file is not required. Do not mix this description with an adult DSM numerical symptom count. Those are different systems. This site does not print either manual’s symptom list.' },
        { type: 'callout', kind: 'note', title: 'Interview style is specified by consensus, not by a NICE timer', text: 'AQAS asks for a semi-structured, exploratory interview: open questions, probes, and real-life examples rather than yes-or-no ticks. It suggests two hours or more for many adult assessments, including feedback and initial explanation, with room for more than one session. That is a consensus standard. It is not a rigid NICE rule that the appointment must stop or start at two hours.' },
        { type: 'recap', items: [
          'Diagnosis is a specialist judgement, not a score.',
          'History, observers, mental state, impairment and alternatives belong in the argument.',
          'Uncertain onset is not an automatic exclusion and not a reason to invent childhood symptoms.',
          'DSM counts and ICD-11’s clinical description are not interchangeable.'
        ] }
      ],
      evidence: [
        { claim: 'Only a specialist psychiatrist, paediatrician or other appropriately qualified professional with training and expertise should diagnose ADHD, using a full clinical and psychosocial assessment, developmental and psychiatric history, observer reports and a mental-state assessment.', grade: 'G', source: 'ng87-diag', locator: '1.3.1', limit: 'The 2024 QbTest option sits inside this recommendation and is limited to ages 6 to 17. It is taught in the tools lesson.' },
        { claim: 'Do not diagnose solely from rating scales or observational data.', grade: 'G', source: 'ng87-diag', locator: '1.3.2', limit: 'Scales remain useful adjuncts. “Not solely” does not mean “do not use”.' },
        { claim: 'Symptoms should meet DSM-5 or ICD-11 criteria, cause at least moderate impairment, and occur often in two or more settings. Exclusion solely for a pervasive developmental disorder or an uncertain time of onset is not recommended.', grade: 'G', source: 'ng87-diag', locator: '1.3.3, dated 2008 and amended 2018', limit: 'The onset caveat does not cancel the need to investigate childhood history.' },
        { claim: 'ICD-11’s clinical description expects significant symptoms before age 12, while allowing first clinical attention to be later. It uses a clinical description rather than the adult DSM numerical threshold.', grade: 'D', source: 'who-cddr', locator: '6A05', limit: 'Do not import a “five symptoms” adult rule from DSM discussion into ICD-11.' }
      ],
      quiz: [
        q('a-evidence-1', 'An adult endorses every item on a rating scale. Is the diagnosis complete?',
          opts(['Yes. The scale is the full assessment.', 'No. The rest of the specialist assessment, including development, impairment, observers, mental state and alternatives, is still required.', 'Yes, if the score is above a cut-off published on social media.']),
          'b',
          'NG87 1.3.2 forbids diagnosis solely on rating-scale data. 1.3.1 still requires the full clinical assessment. This site does not teach a cut-off.',
          { a: 'A scale can add information. It is not the assessment.', c: 'Unsupported cut-offs are exactly what this draft refuses to invent.' },
          ['ng87-diag']),
        q('a-evidence-2', 'School reports have not survived, and the person cannot date the onset to a birthday. What is a defensible reading of NG87 1.3.3?',
          opts(['ADHD must be excluded because onset is uncertain.', 'Do not exclude solely because onset timing is uncertain. Investigate the childhood history, record what is missing, and do not invent certainty.', 'Treat the missing file as positive proof of childhood symptoms.']),
          'b',
          'NICE advises against exclusion based on an uncertain time of onset. AQAS still expects the clinician to explore and document missing evidence. The two statements work together: do not auto-exclude, and do not pretend the gap is filled.',
          { a: 'That reading deletes the caveat in 1.3.3.', c: 'Absence of a document is not presence of a symptom.' },
          ['ng87-diag', 'aqas']),
        q('a-evidence-3', 'Which pairing is accurate?',
          opts(['ICD-11 and the adult DSM symptom count are the same numerical rule.', 'NICE points to DSM-5 or ICD-11 criteria. ICD-11, as used here, is a clinical description. An adult DSM count is a different system and is not taught on this site.', 'Either manual can be replaced by a clinician’s preferred theory.']),
          'b',
          'Mixing the systems produces false precision. This site links to the standards and does not print a copied criteria table.',
          { a: 'AQAS discusses an adult DSM threshold. WHO’s description does not use that number. They must not be blended.', c: 'A model is not a diagnostic standard.' },
          ['ng87-diag', 'who-cddr']),
        q('a-evidence-4', 'AQAS suggests two hours or more for many adult assessments, including feedback. How should that be taught?',
          opts(['As a NICE rule that makes a shorter appointment invalid.', 'As a consensus suggestion, with flexibility for complexity and more than one session. It is not a NICE stopwatch.', 'As a maximum that must not be exceeded.']),
          'b',
          'The paper is explicit that this is about adequacy, including the post-diagnostic conversation, and that complexity varies. NICE does not set that clock.',
          { a: 'Labelling consensus as a NICE requirement upgrades the evidence.', c: 'A maximum would punish a complex assessment. The standard points the other way.' },
          ['aqas'])
      ],
      cards: [
        { front: 'Who may diagnose ADHD, according to NG87 1.3.1?', back: 'A specialist psychiatrist, paediatrician, or other appropriately qualified professional with training and expertise in diagnosing ADHD.' },
        { front: 'Can rating scales alone make the diagnosis?', back: 'No. NG87 1.3.2. They can be helpful added tools.' },
        { front: 'Does uncertain age of onset automatically exclude ADHD?', back: 'No. NG87 1.3.3 says that exclusion is not recommended. The childhood history still has to be investigated and gaps recorded.' },
        { front: 'What else sits inside the diagnostic process?', back: 'Needs, coexisting conditions, social and family circumstances, education or work, and physical health. For children and young people, also parents’ or carers’ mental health. NG87 1.3.4.' }
      ]
    },
    {
      id: 'a-worked',
      title: 'Worked example: from a complaint to a defensible assessment',
      minutes: 18,
      diagram: 'matrix',
      objectives: [
        'Turn “I cannot concentrate” into a time-linked account',
        'Keep a screening score in its place',
        'State what is known, what conflicts, and what is missing'
      ],
      blocks: [
        { type: 'p', text: 'This is a longer practice lesson. The people are invented. The questions are original teaching questions, not items from a licensed interview. Nothing here produces a diagnosis or a prescription.' },
        { type: 'h', text: 'Start with the problem, not the label' },
        { type: 'p', text: '“I cannot concentrate, and I think I have ADHD” is a starting point. Concentration is an experience, not yet an explanation. Ask what is difficult, when it began, why help is wanted now, and what a good outcome would change. Someone may want to keep a job, stop missing appointments, or understand years of friction at home. Those goals keep the assessment attached to a life.' },
        { type: 'p', text: 'An original opening is: “Could you talk me through a recent day when this caused a problem?” The job is not to confirm a preferred diagnosis or to disprove it. NICE still requires the specialist assessment in recommendation 1.3.1.' },
        { type: 'h', text: 'Separate the event from the explanation' },
        { type: 'p', text: '“I am always late” needs a story. It might be losing track of time, trouble organising the journey, an unrealistic plan, sleep, caring responsibilities, or transport. More than one can be true. A useful original sequence is: what happened on a specific occasion; how often and for how long; where it happens and when it goes better; what the consequence was; what reminders or help were needed; what else could explain it. AQAS supports open questions, probes and written examples rather than a checkbox alone.' },
        { type: 'vignette', title: 'Fictional worked example: Nina', text: 'Nina, 29, says she misses deadlines. She describes three late invoices in two months after repeatedly misplacing the documents she needed. Her partner now sits with her once a week to organise bills. There are specific adult examples, consequences and support. There is not yet a full symptom pattern, a childhood course, a clear account of other settings, or a review of other explanations. Do not turn this paragraph into a diagnosis.' },
        { type: 'h', text: 'Build the timeline without filling gaps' },
        { type: 'p', text: 'WHO requires evidence of significant symptoms before age 12, and also notes that people may first be seen later, often when demands exceed compensation. Ask about primary school, secondary school, and what independence changed. Ask who packed the bag, checked the homework, or sat beside the child. Ask about home and friendships, not only marks and whether the child was disruptive.' },
        { type: 'p', text: 'With consent, look for someone who knew the childhood and someone who knows current life. Records are snapshots. A report written about exams may be silent on home life. An informant can misremember or may never have seen the relevant behaviour. If all the difficulties are convincingly new after a later illness or injury, that needs careful evaluation rather than a childhood story fitted on afterwards.' },
        { type: 'h', text: 'Settings and impairment are different questions' },
        { type: 'p', text: 'A setting is where life happens: home, work, school, a friend’s house. A domain is an area of functioning: learning, work, relationships, daily tasks. NICE’s terms use those meanings. Diagnosis and a decision to offer medication are related, and they are not the same decision.' },
        { type: 'callout', kind: 'note', title: 'Guideline and consensus are different sentences', text: 'Guideline (NG87 1.3.3): at least moderate impairment based on interview or direct observation in multiple settings, and symptoms often in two or more important settings. Consensus (AQAS section 3.3): adult impairment in at least two domains or settings. Do not label the consensus sentence as a NICE recommendation, and do not invent a third universal number. Medication recommendation 1.5.15 is a further, different sentence: significant impairment in at least one domain after environmental modifications have been implemented and reviewed.' },
        { type: 'table', caption: 'Fictional evidence matrix for Nina. It does not calculate a diagnosis.', headers: ['Question', 'Described so far', 'Still needed'], rows: [
          ['Adult pattern', 'Repeated organisation problems, with recent examples', 'A systematic account of the pattern and how long it has lasted'],
          ['Childhood', 'She remembers often losing school equipment', 'A fuller chronology, and another source where that is possible and safe'],
          ['Settings', 'Bills at home, and some difficulty at work', 'Frequency, context, and whether the pattern is cross-setting'],
          ['Impact', 'Late-payment fees, arguments, long evenings of work', 'How severe, what else contributes, what protects her'],
          ['Alternatives', 'Poor sleep after a rota change', 'Psychiatric, medical, and substance or medication review'],
          ['Safety', 'Not yet asked', 'A proportionate safety check, and action if it is needed']
        ] },
        { type: 'h', text: 'Conflicting observations' },
        { type: 'p', text: 'Nina can concentrate for hours on a hobby. Her manager says the work is excellent when the task is urgent and clearly structured. WHO allows inattention to be less evident with intense reward, and symptoms to vary with structure. Those observations therefore do not automatically contradict ADHD. They also do not prove it. High achievement does not exclude ADHD, and it is not hidden proof of ADHD. AQAS says achievement can sit beside considerable impairment elsewhere. Ask about the cost.' },
        { type: 'h', text: 'Competing explanations and safety' },
        { type: 'p', text: 'Ask whether the difficulties are lifelong, episodic, new, situation-specific, or a mixture. An original reasoning sentence is: “The recent sleep disruption may explain some of the worsening, but we still need to know whether a similar impairing pattern was there long before it.” That is a hypothesis, not a conclusion. If safety is acute, follow the safety pathway now. A diagnostic debate does not outrank immediate care.' },
        { type: 'h', text: 'Say the outcome in plain language' },
        { type: 'p', text: 'Educational categories for teaching are “criteria supported”, “not supported”, and “not enough evidence yet”. They are not new diagnostic codes. For Nina, the assessment is unfinished. A fitting original sentence is: “We have useful examples of current problems, but not enough to decide. The sleep change may explain part of the recent worsening. We will clarify the earlier pattern, review other contributors, and agree what support is useful while that happens.”' },
        { type: 'callout', kind: 'limit', title: 'Reading this lesson does not qualify anyone', text: 'Specialist expertise, qualification, training and supervised practice are separate requirements. NG87 1.3.1 and the AQAS competency discussion both point that way. This page is practice in reasoning.' },
        { type: 'recap', items: [
          'A positive screen flags an assessment. It is not the assessment.',
          'Examples, development, settings, impact and alternatives are all still in play.',
          'Disagreement between informants is explored, not awarded to one person.',
          'Support can start while the conclusion is still open.'
        ] }
      ],
      evidence: [
        { claim: 'The assessment that can lead to diagnosis is the specialist assessment in NG87 1.3.1, and it is not a rating scale alone.', grade: 'G', source: 'ng87-diag', locator: '1.3.1–1.3.2', limit: 'QbTest may be added only within the age limit taught in the tools lesson.' },
        { claim: 'Open questions, probes and documented real-life examples are the interview standard in AQAS, which also expects discrepancy and missing data to be interpreted.', grade: 'C', source: 'aqas', locator: '3.1.1.3–5 and 3.2', limit: 'Consensus for adults. Not a licence to reproduce a proprietary interview.' },
        { claim: 'Significant symptoms before age 12 are part of the ICD-11 clinical description, with first clinical attention often later.', grade: 'D', source: 'who-cddr', locator: '6A05', limit: 'Do not retrofit a childhood story onto a clearly new neurological illness.' },
        { claim: 'After a diagnosis, have a structured discussion of meaning, strengths, stigma, modifications, education and work, relationships, coexisting conditions, substances and driving. People who fall short of diagnosis may still benefit from information.', grade: 'G', source: 'ng87-info', locator: '1.4.3–1.4.4', limit: 'The Nina feedback above is for an unfinished assessment, so the full post-diagnostic discussion is not yet the step.' }
      ],
      quiz: [
        q('a-worked-1', 'Nina’s screener is strongly positive. What is the best next step?',
          opts(['Diagnose ADHD.', 'Continue a structured clinical assessment.', 'Prescribe a stimulant trial as a test.']),
          'b',
          'NICE excludes a rating-scale-only diagnosis. A medicine trial is not a substitute for the assessment in 1.3.1 and 1.3.2.',
          { a: 'The screen has not supplied development, impairment or alternatives.', c: 'Response to medication is not the diagnostic method NICE specifies.' },
          ['ng87-diag']),
        q('a-worked-2', 'No school reports survive. Must ADHD be excluded?',
          opts(['Yes. Without the original documents the diagnosis is unlawful.', 'No. There is no automatic exclusion. Explore the developmental account, record the gap, and say what that does to confidence.', 'No. Missing records should be written up as if they confirmed the history.']),
          'b',
          'NG87 1.3.3 advises against exclusion merely for uncertain onset. AQAS expects missing and contradictory evidence to be discussed. Together they forbid both a rubber-stamp exclusion and a filled-in gap.',
          { a: 'That rule is not in the sources. It would also ignore other kinds of developmental evidence.', c: 'Inventing the content of a missing record is not documentation.' },
          ['ng87-diag', 'aqas']),
        q('a-worked-3', 'She concentrates well on hobbies. Does this rule ADHD out?',
          opts(['Yes. Attention is therefore normal.', 'No. WHO recognises that expression depends on context. The full pattern decides.', 'Yes, unless the hobby is also disorganised.']),
          'b',
          'Inattention may be less evident when stimulation and rewards are high. That neither excludes nor confirms. Ask what happens with routine demands.',
          { a: 'One preserved context is not the whole week.', c: 'Adding a new rule about hobbies is not in the clinical description.' },
          ['who-cddr']),
        q('a-worked-4', 'Her partner and a parent disagree. Who wins?',
          opts(['The parent, because childhood outranks the present.', 'The partner, because they see the current impairment.', 'Neither automatically. Compare what each person could see, the dates, and how specific the examples are, then record the effect on the conclusion.']),
          'c',
          'AQAS asks clinicians to explore contradictory information rather than pick a favourite witness. Each person has a different vantage point.',
          { a: 'Childhood evidence matters, and a parent can still be wrong, partial, or describing a different problem.', b: 'Current impact matters, and a partner can miss the developmental question or overstate it.' },
          ['aqas']),
        q('a-worked-5', 'The adult symptoms seem to have begun only after a recent head injury. What is the safest response?',
          opts(['Diagnose ADHD because the current symptoms fit.', 'Investigate the timing and the neurological and other explanations. Do not assume a neurodevelopmental diagnosis from today’s symptoms.', 'Reassure her that head injury cannot affect attention.']),
          'b',
          'WHO requires a developmental pattern, and symptoms should not be due to a nervous-system disease. AQAS includes relevant physical and neurological review. A new injury is a competing explanation that has to be examined.',
          { a: 'Present-day symptoms without the developmental pattern do not complete the description.', c: 'Head injury is a recognised reason to think carefully, not a reason to dismiss the person.' },
          ['who-cddr', 'aqas']),
        q('a-worked-6', 'An adult’s QbTest is abnormal. Does NICE endorse diagnosing from that result?',
          opts(['Yes. An abnormal test is diagnostic at any age.', 'No. HTG729 places QbTest for adults in the research-needed group, and standard clinical assessment remains necessary.', 'Yes, if the clinic is private.']),
          'b',
          'The option in HTG729 1.1 is for ages 6 to 17, and only with standard clinical assessment. Recommendation 1.2 says more research is needed on QbTest in people aged 18 and over. Setting does not change that.',
          { a: 'Age and the requirement to use it with clinical assessment are both in the guidance.', c: 'The research recommendation is about the population, not about who is paying.' },
          ['htg729']),
        q('a-worked-7', 'A clinician has studied this lesson carefully. Are they now qualified to diagnose independently?',
          opts(['Yes. Completing the lesson is the competency.', 'No. Qualification, specialist expertise and supervised practice are separate. This is education.', 'Yes, for adults, but not for children.']),
          'b',
          'NG87 1.3.1 limits diagnosis to appropriately qualified professionals with training and expertise. AQAS describes competencies and is explicit that the standard complements training rather than replacing it. This website does not confer either.',
          { a: 'Reading is not a qualification.', c: 'The same boundary applies across ages. Age changes the assessment. It does not turn a lesson into a credential.' },
          ['ng87-diag', 'aqas'])
      ],
      cards: [
        { front: 'What does a positive screen add?', back: 'A reason to evaluate further. Not a developmental history, not an exclusion of alternatives, and not a diagnosis.' },
        { front: 'Name the original six-part enquiry.', back: 'Event, pattern, context, impact, support, alternatives. It is a teaching sequence, not a validated scale.' },
        { front: 'What is the difference between a setting and a domain?', back: 'A setting is a place, such as home or work. A domain is an area of function, such as relationships or daily tasks. NICE defines both in its terms.' },
        { front: 'What are the three teaching outcomes?', back: 'Criteria supported, not supported, or not enough evidence yet. They are communication categories, not new diagnostic codes.' }
      ]
    },
    {
      id: 'a-tools',
      title: 'Tools: useful servants, poor masters',
      minutes: 9,
      diagram: 'toolboxes',
      objectives: [
        'Give each kind of tool a job and a limit',
        'Keep QbTest inside the age and use NICE actually states',
        'Respect licences without reproducing items'
      ],
      blocks: [
        { type: 'p', text: 'A tool is built for a job. Screening asks whether a fuller look is warranted. An interview helps the clinician cover the ground and still probe. A function scale describes impact. A monitoring scale looks at change later. Clinical synthesis is the judgement that uses those pieces. None of them is a stamp.' },
        { type: 'diagram', id: 'toolboxes' },
        { type: 'callout', kind: 'warn', title: 'No cut-offs are taught here', text: 'A positive screen is a reason to evaluate, not a confirmation. A negative score does not erase a compelling history. Predictive value depends on who is tested and what else can cause similar answers. This draft does not state sensitivity, specificity or a universal cut-off, because those figures were not established for teaching here.' },
        { type: 'p', text: 'Keep the two sources apart. NICE 1.3.2 calls rating scales helpful additions, names examples such as the Conners’ scales and the Strengths and Difficulties Questionnaire, and says not to diagnose solely from scales or observational data. AQAS section 3.1.1.1 is more restrictive about self-completed symptom scales as evidence in an adult diagnostic assessment, and it puts the weight on clinical exploration rather than on a form completed alone. Do not merge those positions into one screening workflow.' },
        { type: 'h', text: 'Digital tests' },
        { type: 'p', text: 'NICE HTG729, published 21 October 2024, says QbTest may be used as an option to help diagnose ADHD in people aged 6 to 17, and only with standard clinical assessment. The same guidance says more research is needed on QbTest in people aged 18 and over, on the other listed diagnostic technologies, and on using the listed technologies to judge response to treatment. NG87 1.3.1 points to that option for ages 6 to 17. It does not turn a computer result into a diagnosis, and it does not extend the option to adults.' },
        { type: 'h', text: 'Names, not copies' },
        { type: 'table', caption: 'What this site will and will not do with named instruments.', headers: ['Instrument', 'Teaching point', 'Boundary'], rows: [
          ['ASRS v1.1, six questions', 'An adult screener. Not a diagnosis. Not the same thing as the 18-item scale or ASRS-5.', 'Link to the NYU terms. Do not rewrite items. Do not assume the six-question permission covers other versions.'],
          ['DIVA-5', 'An example of a clinician-led diagnostic interview.', 'No form, examples, scoring or paraphrase. The Foundation has rejected chatbot or automated conversion. Personal-use permission is not permission to publish it.'],
          ['Conners scales, Wender scales, WFIRS and similar', 'They have jobs: breadth, childhood retrospect, or impairment. Versions differ.', 'Licensed. This site does not reproduce items, scores or forms.']
        ] },
        { type: 'callout', kind: 'limit', title: 'Licences and digital guidance change', text: 'Recheck the owner’s terms and the live NICE page before any future embedding. An original classroom exercise about a fictional history is allowed. Calling that exercise a “friendly DIVA” is not.' },
        { type: 'recap', items: [
          'Screening is not diagnosis.',
          'QbTest is an option only for ages 6 to 17, with a full clinical assessment.',
          'Adults are in the research-needed group for that test.',
          'Named commercial interviews are not copied, scored, or turned into a chatbot.'
        ] }
      ],
      evidence: [
        { claim: 'Rating scales are helpful added tools and must not be the sole basis of diagnosis.', grade: 'G', source: 'ng87-diag', locator: '1.3.2', limit: 'NICE names Conners’ scales and the Strengths and Difficulties Questionnaire as examples, not as a complete catalogue.' },
        { claim: 'Use QbTest as an option to help diagnose ADHD in people aged 6 to 17, only with standard clinical assessment. More research is needed for QbTest at 18 and over, for other listed diagnostic technologies, and for using these technologies to evaluate treatment response.', grade: 'G', source: 'htg729', locator: '1.1–1.3', limit: 'Do not teach the research-only uses as if they were recommendations to adopt.' },
        { claim: 'ASRS version permissions are not interchangeable. DIVA material is not cleared for reproduction or for conversion into an automated interview.', grade: 'P', source: 'diva-faq', locator: 'DIVA FAQ and copyright; NYU and Harvard ASRS pages', limit: 'Terms were read for this draft on 8 November 2026 and can change. No item was copied in order to check them.' }
      ],
      quiz: [
        q('a-tools-1', 'A colleague wants an AI to rewrite DIVA questions in friendlier words for the clinic website. What is the right response?',
          opts(['Do it, if the meaning stays the same.', 'Do not. Use original generic teaching questions. Do not publish a DIVA adaptation or an automated interview.', 'Do it if each question is shortened.']),
          'b',
          'The Foundation’s terms, as reviewed, restrict reproduction and reject chatbot or automated conversion. A paraphrase published as a clinical tool is still their interview. Original questions about a fictional day are a different thing, and they must be labelled as teaching.',
          { a: 'Keeping the meaning is what makes it an adaptation.', c: 'Length does not create a new copyright position.' },
          ['diva-faq', 'diva-copyright']),
        q('a-tools-2', 'For which group does NICE give an option to use QbTest to help diagnosis?',
          opts(['Adults over 18, instead of an interview.', 'People aged 6 to 17, together with standard clinical assessment.', 'Any age, if the result is abnormal.']),
          'b',
          'HTG729 1.1 and the 2024 sentence in NG87 1.3.1 match on ages 6 to 17 and on use with clinical assessment. Adults are listed under more research.',
          { a: 'Adult diagnostic use is specifically in the research recommendation.', c: 'An abnormal result is not a recommendation, and age still matters.' },
          ['htg729', 'ng87-diag']),
        q('a-tools-3', 'The six-question ASRS and the 18-question ASRS are…',
          opts(['Two names for one scale, with the same permission.', 'Different instruments. Permission for one does not automatically cover the other.', 'Both diagnostic interviews.']),
          'b',
          'The Harvard hub directs separate permission requests for the longer scales. Neither version diagnoses. This site does not embed either.',
          { a: 'The permissions pages distinguish them.', c: 'They are self-report scales, not clinician diagnostic interviews, and they are not diagnoses.' },
          ['asrs-harvard', 'asrs-licence']),
        q('a-tools-4', 'A screen is negative and the history is strongly suggestive. What is the careful conclusion?',
          opts(['The negative screen vetoes the history.', 'The screen has not erased the history. Predictive value depends on the person and on overlapping conditions. Continue the assessment.', 'Repeat the screen until it is positive.']),
          'b',
          'A screen is a flag. False negatives exist in principle, and this draft refuses to invent a rate. The history still needs a proper assessment. Repeating a screen to force a result is not assessment.',
          { a: '1.3.2 would also forbid the opposite error, diagnosing from the scale alone.', c: 'That manufactures a number. It does not gather evidence.' },
          ['ng87-diag', 'teaching'])
      ],
      cards: [
        { front: 'What is a screening result allowed to do?', back: 'Prompt a fuller assessment. It must not confirm or alone exclude ADHD.' },
        { front: 'QbTest: which ages, and with what else?', back: 'An option for ages 6 to 17, only with standard clinical assessment. Not a standalone diagnosis. Adults: more research is needed.' },
        { front: 'Why not print DIVA questions here?', back: 'The interview is copyrighted. Reproduction, scoring and chatbot conversion are outside the terms reviewed. Teach with original questions instead.' },
        { front: 'Why are no sensitivity figures given?', back: 'This draft will not invent performance statistics. They depend on the version, the setting and the person.' }
      ]
    }
  ].map(stamp);
});
