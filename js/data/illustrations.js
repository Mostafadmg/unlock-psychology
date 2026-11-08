/* Original conceptual art. Not course assets, not clinical evidence, not a biological diagram. */
(function (root, factory) {
  const api = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (typeof window !== 'undefined') window.ILLUSTRATIONS = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  const disclosure = 'AI-generated conceptual illustration; not clinical evidence.';
  return {
    hero: {
      file: 'adhd-collaborative-learning-hero.jpg',
      width: 1280,
      height: 720,
      alt: 'Three adults sit around a table in a welcoming, collaborative conversation.',
      disclosure: disclosure,
      claim: 'Fictional people. This is not a likeness of a patient, clinician or teacher, and it does not show verified lesson teaching or a biological mechanism.',
      labels: [
        { title: 'Three adults', text: 'A collaborative conversation around one table. Not a clinical consultation, and not named people.' },
        { title: 'Open space on the left', text: 'The page heading sits in HTML beside or above the picture. No words are written inside the image.' },
        { title: 'Cups, a notebook and a plant', text: 'Scene setting only. They are not assessment tools and they do not imply a result.' }
      ]
    },
    developmental: {
      file: 'adhd-developmental-contexts.jpg',
      width: 1280,
      height: 720,
      alt: 'Three connected scenes show a child with a caregiver, teenagers studying together, and two adults in conversation.',
      disclosure: disclosure,
      claim: 'Separate life-stage scenes, not one identifiable person ageing, and not a diagnostic progression. Childhood difficulty in a picture does not establish adult ADHD.',
      labels: [
        { title: 'Childhood', text: 'A child and a caregiver at a table with books. One context. It does not show symptoms or impairment.' },
        { title: 'Teenage years', text: 'Three young people studying together. A different scene, not the same child grown up.' },
        { title: 'Adulthood', text: 'Two adults in conversation. Another context. It does not mean childhood difficulty becomes adult ADHD.' }
      ]
    },
    assessment: {
      file: 'adhd-integrated-assessment.jpg',
      width: 1280,
      height: 720,
      alt: 'Two adults discuss cards depicting conversation, home, work, sleep, health and relationships.',
      disclosure: disclosure,
      claim: 'The cards are a few areas of enquiry. They are not a checklist, a decision rule, a diagnostic tool or an evidence hierarchy. No card means ADHD. The heart is a general wellbeing motif, not a cardiac finding. Recommendations stay in the sourced text, not in the picture.',
      labels: [
        { title: 'Conversation', text: 'How the problem is described. A picture of speech is not an interview and not a score.' },
        { title: 'Home', text: 'Life outside work or school. One setting to ask about, not a finding.' },
        { title: 'Work or study', text: 'Demands and time. The laptop and clock do not measure impairment.' },
        { title: 'Sleep', text: 'A possible contributor to explore. The sleeping figure is not a sleep diagnosis.' },
        { title: 'Wellbeing', text: 'The heart is a general motif. It is not a cardiac test and not a biological mechanism of ADHD.' },
        { title: 'Relationships', text: 'Other people may see a different picture. The card does not replace an informant or consent.' }
      ]
    }
  };
});
