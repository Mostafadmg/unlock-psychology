/* Non-diagnostic practice. Opening an explanation is the point. Nothing here returns a diagnosis. */
(function (root, factory) {
  const api = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (typeof window !== 'undefined') window.PRACTICE = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  return [
    {
      id: 'ix-refer',
      lesson: 'a-recognition',
      kind: 'decide',
      title: 'Decision point: severe impairment',
      prompt: 'A child has severe impairment at home and at school, and the difficulties suggest ADHD. A meeting suggests using the “up to 10 weeks of watchful waiting” sentence for every child. What keeps the NICE distinction?',
      note: 'This choice explains a referral distinction. It does not diagnose the child.',
      choices: [
        { id: 'wait', fit: 'overclaim', label: 'Start the 10-week wait for every child, including this one.', explain: 'Watchful waiting is a “consider” step when problems are having an adverse effect, not a delay when impairment is already severe. NG87 sends severe impairment to referral.' },
        { id: 'refer', fit: 'open', label: 'Refer when impairment is severe. Do not use watchful waiting to postpone that referral.', explain: 'The severe-impairment route and the watchful-waiting sentence are different. This exercise only sorts those sentences. It does not say this child has ADHD.' },
        { id: 'meds', fit: 'overclaim', label: 'Start medication in primary care so nobody has to wait.', explain: 'NG87 does not ask primary care to make the initial diagnosis or to start ADHD medication for children and young people. Shortening a wait is not a prescription.' }
      ]
    },
    {
      id: 'ix-order',
      lesson: 'a-evidence',
      kind: 'sequence',
      title: 'Sequence the assessment moves',
      prompt: 'Put these teaching moves in an order that keeps safety and the person’s account ahead of tools. This is not a NICE stopwatch.',
      note: 'A finished order is still not a diagnosis. Scales stay late because they do not replace the history.',
      initial: ['tools', 'plan', 'safety', 'problem', 'examples', 'informants', 'alternatives'],
      expected: ['safety', 'problem', 'examples', 'informants', 'alternatives', 'tools', 'plan'],
      steps: [
        { id: 'safety', label: 'Respond first if risk is urgent.' },
        { id: 'problem', label: 'Hear the problem and why help is wanted now.' },
        { id: 'examples', label: 'Collect examples, time course, settings and impairment.' },
        { id: 'informants', label: 'Seek informants and records, and write down gaps.' },
        { id: 'alternatives', label: 'Weigh other and coexisting explanations, for and against.' },
        { id: 'tools', label: 'Use scales or tests only as additions, inside their limits.' },
        { id: 'plan', label: 'Say what is and is not established, and agree a next step.' }
      ]
    },
    {
      id: 'ix-screen',
      lesson: 'a-tools',
      kind: 'decide',
      title: 'Decision point: a positive screen',
      prompt: 'An adult’s self-completed symptom scale is high. Which next step respects the difference between NICE and the AQAS consensus?',
      note: 'NICE 1.3.2 calls scales helpful additions and forbids diagnosis from scales alone. AQAS is more restrictive about self-completed scales as adult diagnostic evidence. Do not merge them into one workflow. This does not diagnose anyone.',
      choices: [
        { id: 'confirm', fit: 'overclaim', label: 'Treat the high score as confirmation of ADHD.', explain: 'A positive screen does not confirm ADHD. NICE 1.3.2 forbids diagnosis solely from a scale. AQAS does not loosen that into a self-report diagnosis.' },
        { id: 'exclude', fit: 'overclaim', label: 'If a later scale is low, ADHD is excluded.', explain: 'A negative screen does not exclude ADHD. The history, impairment and alternatives still have to be assessed. Predictive value depends on who is tested.' },
        { id: 'open', fit: 'open', label: 'Keep the scale as an addition. Continue the specialist assessment, and do not treat NICE and AQAS as the same rule.', explain: 'NICE allows helpful adjunct scales and still requires the full assessment. AQAS places stronger limits on self-completed symptom scales in adult diagnostic assessment. State the source you are using. Neither position confirms or excludes from the score.' }
      ]
    },
    {
      id: 'ix-compare',
      lesson: 'a-differential',
      kind: 'compare',
      title: 'Compare readings of one complaint',
      prompt: 'Concentration has worsened, and low mood is new. Open each reading. They can all be considered. None of them is a diagnosis.',
      note: 'The comparison holds more than one timeline. It does not diagnose anyone.',
      panes: [
        { id: 'episode', label: 'A recent episode', text: 'The new change may belong with the mood episode. Ask when concentration was last reliable, and what else arrived with the low mood. This reading does not erase a longer history if one is actually there.' },
        { id: 'longer', label: 'A longer pattern', text: 'A lifespan pattern can sit underneath a new episode. School, home and work examples from before the mood change are the test of that idea. A long pattern is not established by preferring it.' },
        { id: 'both', label: 'Both can be true', text: 'Depression and ADHD can coexist. “Better explained by” is not the same sentence as “cannot coexist”. Each still needs its own evidence, including what to treat or support first.' },
        { id: 'thin', label: 'Not enough yet', text: 'If onset, impairment and the mood timeline are still thin, the honest reading is that the question is open. Missing detail is not a vote for either label.' }
      ]
    },
    {
      id: 'ix-map',
      lesson: 'a-report',
      kind: 'map',
      title: 'Map an unfinished fictional account',
      prompt: 'Sam is fictional. Sort each fragment, then choose the statement that does not overclaim. Missing information is not a negative criterion.',
      note: 'The map is a reasoning exercise. It does not diagnose anyone, and it does not complete an assessment.',
      lanes: [
        { id: 'current', label: 'Shows a current cross-setting problem' },
        { id: 'thin', label: 'Too thin to settle development' },
        { id: 'missing', label: 'Missing information' },
        { id: 'competing', label: 'A competing contributor still to test' },
        { id: 'safety', label: 'Not a clearance of risk' }
      ],
      pieces: [
        { id: 'bills', text: 'Late-payment charges, work reminders, and a partner who has taken over household scheduling.', lane: 'current' },
        { id: 'kit', text: 'Sam recalls losing equipment at primary school, with little detail about how often or what it cost.', lane: 'thin' },
        { id: 'file', text: 'Childhood records were requested and have not arrived.', lane: 'missing' },
        { id: 'sleep', text: 'Recent insomnia and worry may be adding to poor concentration. No anxiety diagnosis is made.', lane: 'competing' },
        { id: 'harm', text: 'Sam reports no current self-harm thoughts in the enquiry so far. Past harm, substances and safeguarding are not yet reviewed.', lane: 'safety' }
      ],
      conclusions: [
        { id: 'establish', overclaims: true, label: 'These fragments already establish ADHD.', explain: 'Current problems are not a developmental diagnosis. The childhood account is thin and the records are absent. Saying the diagnosis is established skips the criteria that were not evaluated.' },
        { id: 'exclude', overclaims: true, label: 'Because the school file is missing, ADHD is excluded.', explain: 'A missing record is a limitation, not a demonstrated negative criterion. NICE 1.3.3 also advises against excluding solely because onset timing is uncertain. The file still needs to be chased or its absence explained.' },
        { id: 'open', overclaims: false, label: 'Current problems are described, development is not settled, sleep and worry remain in play, and risk is not cleared. ADHD is not established.', explain: 'That statement names what each fragment can and cannot do. It keeps support possible without turning the excerpt into a completed diagnosis.' }
      ]
    },
    {
      id: 'ix-feedback',
      lesson: 'a-report',
      kind: 'decide',
      title: 'Decision point: feedback topics',
      prompt: 'Two people have just been diagnosed. One drives and is worried about work. The other does not drive and is worried about stigma at home. What does NG87 1.4.3 ask for?',
      note: '1.4.4 and 1.4.5, about information and how it is adapted, are a separate recommendation. This choice does not diagnose anyone.',
      choices: [
        { id: 'script', fit: 'overclaim', label: 'Read the same full topic list aloud to both people, in the same words.', explain: '1.4.3 says the discussion could include those matters. It is a structured discussion tailored to the person, not a mandatory identical script.' },
        { id: 'tailor', fit: 'open', label: 'Hold a structured discussion and use the topics that matter for each person, including driving only when it is relevant.', explain: 'Possible topics include understanding, strengths, stigma, environmental modifications, education and work, relationships, coexisting conditions, substance misuse and driving. Relevance shapes the conversation. Signposting in 1.4.4 and 1.4.5 is still separate.' },
        { id: 'skip', fit: 'overclaim', label: 'Skip feedback unless the person asks for medication.', explain: 'The discussion follows diagnosis and informs the shared plan. It is not reserved for a medication decision, and 1.4.4 still matters when diagnosis is not made.' }
      ]
    }
  ];
});
