/* Original SVG teaching figures. Not traced from any course or guideline figure. */
(function (root, factory) {
  const api = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (typeof window !== 'undefined') window.DIAGRAMS = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  function frame(title, desc, body) {
    return '<svg viewBox="0 0 720 420" role="img" aria-labelledby="' + title.id + ' ' + desc.id + '">' +
      '<title id="' + title.id + '">' + title.text + '</title>' +
      '<desc id="' + desc.id + '">' + desc.text + '</desc>' +
      '<rect width="720" height="420" rx="18" fill="#f6f8fa"/>' + body + '</svg>';
  }
  function node(x, y, w, h, fill, stroke, label, sub) {
    return '<g><rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="14" fill="' + fill + '" stroke="' + stroke + '" stroke-width="2"/>' +
      '<text x="' + (x + w / 2) + '" y="' + (y + (sub ? 28 : 36)) + '" text-anchor="middle" fill="#16324f" font-family="Fredoka, sans-serif" font-size="15" font-weight="600">' + label + '</text>' +
      (sub ? '<text x="' + (x + w / 2) + '" y="' + (y + 50) + '" text-anchor="middle" fill="#55626f" font-family="Fredoka, sans-serif" font-size="12">' + sub + '</text>' : '') +
      '</g>';
  }

  return {
    'three-lenses': {
      alt: 'Symptoms, development and impact sit together, with context around all three. No one card is a diagnosis.',
      svg: frame(
        { id: 'd-lenses-t', text: 'Three questions, one judgement' },
        { id: 'd-lenses-d', text: 'Symptoms, development and impact are considered together inside the person’s context. None of them alone establishes ADHD.' },
        '<rect x="70" y="36" width="580" height="348" rx="28" fill="#e3f4f3" stroke="#0b6664" stroke-dasharray="6 6"/>' +
        '<text x="360" y="64" text-anchor="middle" fill="#0b6664" font-family="Fredoka, sans-serif" font-size="14" font-weight="600">Context: demands, support, culture, health</text>' +
        node(96, 110, 160, 86, '#ffffff', '#0b6664', 'Symptoms', 'What is the pattern?') +
        node(280, 168, 160, 86, '#ffffff', '#16324f', 'Development', 'When did it start?') +
        node(464, 110, 160, 86, '#ffffff', '#a8432e', 'Impact', 'What does it cost?') +
        '<text x="360" y="330" text-anchor="middle" fill="#16324f" font-family="Fredoka, sans-serif" font-size="16" font-weight="600">Clinical judgement holds the three together</text>' +
        '<text x="360" y="354" text-anchor="middle" fill="#55626f" font-family="Fredoka, sans-serif" font-size="13">A familiar anecdote is not a diagnosis</text>'
      )
    },
    'model-windows': {
      alt: 'Four separate windows: lived experience, diagnostic requirements, possible models, and research measures. Dotted lines mean they are related ideas, not a causal chain and not a test.',
      svg: frame(
        { id: 'd-win-t', text: 'Four windows, not one cause' },
        { id: 'd-win-d', text: 'Lived experience, diagnostic requirements, explanatory models and research measures are different kinds of knowledge. Dotted connectors are not arrows of proof.' },
        node(36, 70, 150, 110, '#ffffff', '#0b6664', 'Experience', 'What it is like') +
        node(202, 70, 150, 110, '#fff4dc', '#9a6200', 'Requirements', 'What must be shown') +
        node(368, 70, 150, 110, '#fbe9e4', '#a8432e', 'Models', 'Possible lenses') +
        node(534, 70, 150, 110, '#e3f4f3', '#0b6664', 'Research', 'Group findings') +
        '<path d="M186 125 H202 M352 125 H368 M518 125 H534" stroke="#55626f" stroke-width="2" stroke-dasharray="4 4" fill="none"/>' +
        '<text x="360" y="250" text-anchor="middle" fill="#16324f" font-family="Fredoka, sans-serif" font-size="16" font-weight="600">A model is not a diagnosis</text>' +
        '<text x="360" y="278" text-anchor="middle" fill="#55626f" font-family="Fredoka, sans-serif" font-size="13">No scan, score or medicine response closes the question by itself</text>' +
        '<text x="360" y="340" text-anchor="middle" fill="#a8432e" font-family="Fredoka, sans-serif" font-size="14">Do not draw a “dopamine level” gauge</text>'
      )
    },
    pathway: {
      alt: 'A pathway from recognition to referral, preparation, specialist assessment and feedback, with a safety review available at every stage.',
      svg: frame(
        { id: 'd-path-t', text: 'Recognition through to feedback' },
        { id: 'd-path-d', text: 'Safety review sits beside every stage. The pathway does not promise a diagnosis.' },
        node(24, 150, 120, 70, '#ffffff', '#16324f', 'Recognise', '') +
        node(164, 150, 120, 70, '#ffffff', '#16324f', 'Refer', '') +
        node(304, 150, 120, 70, '#e3f4f3', '#0b6664', 'Prepare', '') +
        node(444, 150, 130, 70, '#fff4dc', '#9a6200', 'Assess', '') +
        node(590, 150, 106, 70, '#fbe9e4', '#a8432e', 'Feedback', '') +
        '<path d="M144 185 H164 M284 185 H304 M424 185 H444 M574 185 H590" stroke="#a8432e" stroke-width="3" fill="none"/>' +
        '<rect x="24" y="270" width="672" height="70" rx="14" fill="#16324f"/>' +
        '<text x="360" y="312" text-anchor="middle" fill="#ffffff" font-family="Fredoka, sans-serif" font-size="15">Safety review can interrupt any stage. Do not wait for a label.</text>'
      )
    },
    matrix: {
      alt: 'An evidence matrix. Rows are the questions that must be answered. Columns are self-report, informant, records, the clinician’s synthesis, and gaps. Cells are supportive, conflicting or missing. There is no score.',
      svg: frame(
        { id: 'd-mx-t', text: 'Evidence matrix, not a score' },
        { id: 'd-mx-d', text: 'Pattern, development, settings, impact and alternatives are checked against self-report, informants, records and clinical synthesis. Gaps stay visible. Nothing is added up into a diagnosis.' },
        '<text x="36" y="48" fill="#16324f" font-family="Fredoka, sans-serif" font-size="14" font-weight="600">Question</text>' +
        '<text x="210" y="48" fill="#55626f" font-family="Fredoka, sans-serif" font-size="12">Person</text>' +
        '<text x="310" y="48" fill="#55626f" font-family="Fredoka, sans-serif" font-size="12">Informant</text>' +
        '<text x="420" y="48" fill="#55626f" font-family="Fredoka, sans-serif" font-size="12">Records</text>' +
        '<text x="520" y="48" fill="#55626f" font-family="Fredoka, sans-serif" font-size="12">Synthesis</text>' +
        '<text x="630" y="48" fill="#55626f" font-family="Fredoka, sans-serif" font-size="12">Gaps</text>' +
        ['Pattern', 'Development', 'Settings', 'Impact', 'Alternatives'].map(function (label, i) {
          const y = 70 + i * 58;
          return '<rect x="24" y="' + y + '" width="672" height="48" rx="10" fill="' + (i % 2 ? '#ffffff' : '#e3f4f3') + '"/>' +
            '<text x="36" y="' + (y + 30) + '" fill="#16324f" font-family="Fredoka, sans-serif" font-size="14" font-weight="600">' + label + '</text>' +
            '<text x="250" y="' + (y + 30) + '" fill="#1d7a3e" font-size="12" font-family="Fredoka, sans-serif">support</text>' +
            '<text x="350" y="' + (y + 30) + '" fill="#9a6200" font-size="12" font-family="Fredoka, sans-serif">conflict</text>' +
            '<text x="460" y="' + (y + 30) + '" fill="#55626f" font-size="12" font-family="Fredoka, sans-serif">missing</text>';
        }).join('')
      )
    },
    toolboxes: {
      alt: 'Five tool jobs: screening, interview, function, monitoring and clinical synthesis. None of the boxes stamps a diagnosis.',
      svg: frame(
        { id: 'd-tool-t', text: 'Tools have different jobs' },
        { id: 'd-tool-d', text: 'Screening, interviewing, describing function, monitoring and clinical synthesis answer different questions. No box produces a diagnostic stamp.' },
        node(28, 80, 120, 150, '#ffffff', '#9a6200', 'Screen', 'Flag only') +
        node(164, 80, 120, 150, '#ffffff', '#0b6664', 'Interview', 'Examples') +
        node(300, 80, 120, 150, '#ffffff', '#16324f', 'Function', 'Impact') +
        node(436, 80, 120, 150, '#ffffff', '#a8432e', 'Monitor', 'Later change') +
        node(572, 80, 120, 150, '#16324f', '#16324f', '', '') +
        '<text x="632" y="145" text-anchor="middle" fill="#ffffff" font-family="Fredoka, sans-serif" font-size="15" font-weight="600">Synthesis</text>' +
        '<text x="632" y="168" text-anchor="middle" fill="#e3f4f3" font-family="Fredoka, sans-serif" font-size="12">Judgement</text>' +
        '<text x="360" y="300" text-anchor="middle" fill="#16324f" font-family="Fredoka, sans-serif" font-size="15" font-weight="600">A tool can inform the assessment. It cannot replace it.</text>' +
        '<text x="360" y="340" text-anchor="middle" fill="#55626f" font-family="Fredoka, sans-serif" font-size="13">Licensed forms are named, not copied</text>'
      )
    },
    timeline: {
      alt: 'A lifespan timeline with separate rails for demands, support, impairment and how sure the evidence is. Changing demands can make longstanding difficulties newly visible.',
      svg: frame(
        { id: 'd-time-t', text: 'Demands, support and visibility' },
        { id: 'd-time-d', text: 'From childhood to adult independence, demands, support, impairment and evidence confidence are separate tracks. Success does not delete impairment, and a missing record is a gap, not a verdict.' },
        '<text x="40" y="70" fill="#55626f" font-family="Fredoka, sans-serif" font-size="13">Childhood</text>' +
        '<text x="300" y="70" fill="#55626f" font-family="Fredoka, sans-serif" font-size="13">School demands</text>' +
        '<text x="540" y="70" fill="#55626f" font-family="Fredoka, sans-serif" font-size="13">Independence</text>' +
        '<line x1="40" y1="88" x2="680" y2="88" stroke="#16324f" stroke-width="3"/>' +
        ['Demands', 'Support', 'Impairment', 'Evidence'].map(function (label, i) {
          const y = 130 + i * 62;
          const colours = ['#a8432e', '#0b6664', '#9a6200', '#16324f'];
          return '<text x="36" y="' + (y + 8) + '" fill="#16324f" font-family="Fredoka, sans-serif" font-size="13" font-weight="600">' + label + '</text>' +
            '<line x1="140" y1="' + y + '" x2="680" y2="' + y + '" stroke="' + colours[i] + '" stroke-width="8" stroke-linecap="round" opacity="0.85"/>';
        }).join('') +
        '<text x="360" y="390" text-anchor="middle" fill="#55626f" font-family="Fredoka, sans-serif" font-size="13">Invented teaching sketch. Not a patient timeline and not a measurement.</text>'
      )
    },
    overlay: {
      alt: 'A long horizontal band for an enduring pattern, with a shorter band laid over it for a recent episode. The two can coexist. A fourth state is insufficient evidence.',
      svg: frame(
        { id: 'd-over-t', text: 'Enduring pattern and a new episode' },
        { id: 'd-over-d', text: 'A longstanding pattern and a recent worsening can both be present. The figure also allows for neither being clear enough yet.' },
        '<rect x="40" y="90" width="640" height="54" rx="12" fill="#0b6664"/>' +
        '<text x="60" y="123" fill="#ffffff" font-family="Fredoka, sans-serif" font-size="15">Enduring pattern across years</text>' +
        '<rect x="420" y="160" width="260" height="54" rx="12" fill="#a8432e"/>' +
        '<text x="440" y="193" fill="#ffffff" font-family="Fredoka, sans-serif" font-size="15">Recent episode</text>' +
        node(40, 250, 200, 80, '#ffffff', '#16324f', 'Both', 'Explain each') +
        node(260, 250, 200, 80, '#fff4dc', '#9a6200', 'One of them', 'Test the fit') +
        node(480, 250, 200, 80, '#f6f8fa', '#55626f', 'Not enough yet', 'Say so')
      )
    },
    masking: {
      alt: 'A line of visible performance, with effort and supports drawn underneath. The picture is a metaphor, not a measurement or a test for masking.',
      svg: frame(
        { id: 'd-mask-t', text: 'Visible performance and hidden effort' },
        { id: 'd-mask-d', text: 'What others see can sit above the effort, reminders and help that keep it going. This is a metaphor for questions to ask, not a scale and not a sign that is specific to women.' },
        '<text x="60" y="80" fill="#1d7a3e" font-family="Fredoka, sans-serif" font-size="14" font-weight="600">What other people see</text>' +
        '<rect x="60" y="100" width="600" height="70" rx="14" fill="#e4f5ea" stroke="#1d7a3e"/>' +
        '<text x="80" y="142" fill="#16324f" font-family="Fredoka, sans-serif" font-size="16">Calm, capable, on time</text>' +
        '<text x="60" y="210" fill="#a8432e" font-family="Fredoka, sans-serif" font-size="14" font-weight="600">What it may be costing</text>' +
        '<rect x="60" y="226" width="600" height="100" rx="14" fill="#fbe9e4" stroke="#a8432e"/>' +
        '<text x="80" y="268" fill="#16324f" font-family="Fredoka, sans-serif" font-size="15">Extra hours, checking, another person organising, recovery afterwards</text>' +
        '<text x="80" y="294" fill="#55626f" font-family="Fredoka, sans-serif" font-size="13">Metaphor only. Not a criterion. Not assumed for every person.</text>'
      )
    },
    safety: {
      alt: 'A safety lane running beside the assessment from start to finish. There is no green stamp that says low risk.',
      svg: frame(
        { id: 'd-safe-t', text: 'Safety runs beside the assessment' },
        { id: 'd-safe-d', text: 'Risk questions continue alongside history, diagnosis and feedback. The figure has no low-risk stamp, because risk can change.' },
        '<rect x="40" y="70" width="200" height="280" rx="16" fill="#16324f"/>' +
        '<text x="140" y="160" text-anchor="middle" fill="#ffffff" font-family="Fredoka, sans-serif" font-size="18" font-weight="600">Safety</text>' +
        '<text x="140" y="190" text-anchor="middle" fill="#e3f4f3" font-family="Fredoka, sans-serif" font-size="14">Ask, act, record</text>' +
        '<text x="140" y="230" text-anchor="middle" fill="#f2a541" font-family="Fredoka, sans-serif" font-size="13">No “low risk” stamp</text>' +
        node(280, 80, 400, 60, '#ffffff', '#0b6664', 'History and symptoms', '') +
        node(280, 170, 400, 60, '#ffffff', '#9a6200', 'Other explanations', '') +
        node(280, 260, 400, 60, '#ffffff', '#a8432e', 'Feedback and plan', '')
      )
    },
    'report-chain': {
      alt: 'A chain from the claim, to supporting evidence, to a competing explanation, to the conclusion and its limits, then to the plan. An uncertainty branch loops back to gather more information.',
      svg: frame(
        { id: 'd-rep-t', text: 'From claim to plan' },
        { id: 'd-rep-d', text: 'A report shows the claim, the evidence for it, the competing explanation, the conclusion with its limits, and the plan. If the evidence is not enough, the path loops back to collect more, and support can still be offered.' },
        node(24, 48, 120, 64, '#ffffff', '#16324f', 'Claim', '') +
        node(164, 48, 120, 64, '#e3f4f3', '#0b6664', 'Evidence', '') +
        node(304, 48, 140, 64, '#fff4dc', '#9a6200', 'Alternative', '') +
        node(464, 48, 110, 64, '#fbe9e4', '#a8432e', 'Limits', '') +
        node(590, 48, 106, 64, '#16324f', '#16324f', '', '') +
        '<text x="643" y="86" text-anchor="middle" fill="#ffffff" font-family="Fredoka, sans-serif" font-size="14" font-weight="600">Plan</text>' +
        '<path d="M144 80 H164 M284 80 H304 M444 80 H464 M574 80 H590" stroke="#a8432e" stroke-width="3"/>' +
        '<rect x="160" y="180" width="400" height="70" rx="14" fill="#ffffff" stroke="#55626f" stroke-dasharray="5 4"/>' +
        '<text x="360" y="222" text-anchor="middle" fill="#16324f" font-family="Fredoka, sans-serif" font-size="15">Not enough yet → gather more, and still offer support</text>' +
        '<text x="360" y="320" text-anchor="middle" fill="#55626f" font-family="Fredoka, sans-serif" font-size="13">Contradictory evidence stays in the chain. It is explained, not deleted.</text>'
      )
    },
    'age-map': {
      alt: 'Three age bands for support: under 5, age 5 and over including young people, and adults. The map is not an automatic ladder towards medication.',
      svg: frame(
        { id: 'd-age-t', text: 'Age changes the support question' },
        { id: 'd-age-d', text: 'Under 5, ages 5 and over, and adults have different NICE starting points. The figure is not a ladder that ends in medication for everyone.' },
        node(36, 80, 200, 180, '#e3f4f3', '#0b6664', 'Under 5', 'Group parent training first') +
        node(260, 80, 200, 180, '#fff4dc', '#9a6200', '5 and over', 'Information, then review') +
        node(484, 80, 200, 180, '#fbe9e4', '#a8432e', 'Adults', 'Modify the environment,') +
        '<text x="136" y="210" text-anchor="middle" fill="#55626f" font-family="Fredoka, sans-serif" font-size="13">No medicine without</text>' +
        '<text x="136" y="230" text-anchor="middle" fill="#55626f" font-family="Fredoka, sans-serif" font-size="13">a second specialist</text>' +
        '<text x="360" y="210" text-anchor="middle" fill="#55626f" font-family="Fredoka, sans-serif" font-size="13">Medicine only if</text>' +
        '<text x="360" y="230" text-anchor="middle" fill="#55626f" font-family="Fredoka, sans-serif" font-size="13">impairment persists</text>' +
        '<text x="584" y="188" text-anchor="middle" fill="#55626f" font-family="Fredoka, sans-serif" font-size="13">then consider medicine</text>' +
        '<text x="360" y="320" text-anchor="middle" fill="#16324f" font-family="Fredoka, sans-serif" font-size="15" font-weight="600">Not an escalator. Read the recommendation for that age.</text>'
      )
    },
    'support-wheel': {
      alt: 'A person at the centre, with environment, psychological support, education or work, family, physical health, and medication where it is indicated. Equal space does not mean equal effect.',
      svg: frame(
        { id: 'd-wheel-t', text: 'Care is wider than a prescription' },
        { id: 'd-wheel-d', text: 'Environment, psychological support, education or work, family and peers, physical health, and medication where indicated all sit around the person. Drawing them at a similar size does not mean they have the same effect.' },
        '<circle cx="360" cy="210" r="54" fill="#16324f"/>' +
        '<text x="360" y="215" text-anchor="middle" fill="#ffffff" font-family="Fredoka, sans-serif" font-size="14" font-weight="600">Person</text>' +
        node(40, 40, 150, 58, '#ffffff', '#0b6664', 'Environment', '') +
        node(530, 40, 150, 58, '#ffffff', '#0b6664', 'Psychological', '') +
        node(40, 300, 170, 58, '#ffffff', '#9a6200', 'Education / work', '') +
        node(250, 320, 150, 58, '#ffffff', '#16324f', 'Family', '') +
        node(430, 300, 250, 58, '#ffffff', '#a8432e', 'Health, medicine if indicated', '')
      )
    },
    monitor: {
      alt: 'Three different clocks: pulse and blood pressure every six months, an annual review by someone with ADHD expertise, and growth checks that depend on age. Simplifying the picture does not replace the age-specific NICE table.',
      svg: frame(
        { id: 'd-mon-t', text: 'Monitoring answers different questions' },
        { id: 'd-mon-d', text: 'Pulse and blood pressure are checked before and after dose changes and every six months. A specialist reviews medication at least yearly. Height and weight follow the age rules in NG87. One check does not replace another.' },
        node(30, 90, 200, 160, '#e3f4f3', '#0b6664', 'Pulse and BP', 'Each change + 6 months') +
        node(260, 90, 200, 160, '#fff4dc', '#9a6200', 'Annual review', 'Continue, change, or stop') +
        node(490, 90, 200, 160, '#fbe9e4', '#a8432e', 'Growth', 'Follow the age rule') +
        '<text x="360" y="320" text-anchor="middle" fill="#16324f" font-family="Fredoka, sans-serif" font-size="15" font-weight="600">The yearly review does not replace the six-monthly checks</text>' +
        '<text x="360" y="350" text-anchor="middle" fill="#55626f" font-family="Fredoka, sans-serif" font-size="13">NG87 1.8 and 1.10. Exceptions and clinical concern still apply.</text>'
      )
    }
  };
});
