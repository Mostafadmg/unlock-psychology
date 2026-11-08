# ADHD Clinical Learning

Independent draft study companion for ADHD assessment and diagnosis.

This repository is **not** a course from Unlock Psychology, and it is **not affiliated** with Unlock Psychology, NICE, the NHS, the Royal College of Psychiatrists, UKAAN or the World Health Organization. No provider logo is used. No course recording, caption or download was listened to or reviewed.

The public title is **ADHD Clinical Learning**. The repository name was requested separately and does not mean the site speaks for that name.

## What is ready, and what is not

- **Seven course topics** are in the navigation: conceptualising ADHD, models, assessment tools, diagnostic interviews, developmental history and informants, differential diagnosis, and report writing.
- Each course summary is **empty on purpose**. Status: overview only, lesson teaching not reviewed.
- **Evidence-based additions** are separate draft pages written from public sources (NICE NG87, NICE HTG729, WHO ICD-11 CDDR, UKAAN AQAS, NHS and RCPsych public pages). They are educational drafts. They are not a validated training programme and they are not a lesson-by-lesson account of any paid course.
- Review date for the sources used here: **8 November 2026**.
- This is education, not personal medical advice, a diagnosis, or a prescription.
- Three original illustrations in `media/` are conceptual art. Each caption says **AI-generated conceptual illustration; not clinical evidence.** They are not course assets, not verified lesson teaching, and not biological diagrams. HTML lists name what is visible. Diagrams and practice exercises carry the teaching. The image files are the originals at 1280×720 and are shown in full, without cropping.

Do not treat a GitHub Pages deployment of this draft as a finished course. Publishing a course-grounded site waits until verified lesson summaries exist.

## Use it

Pages are static. Asset paths are rooted at `/unlock-psychology/` so they match GitHub project Pages.

From a parent directory:

```bash
mkdir -p /tmp/adhd-preview
ln -s "$(pwd)" /tmp/adhd-preview/unlock-psychology
python3 -m http.server 8765 --directory /tmp/adhd-preview
```

Open `http://127.0.0.1:8765/unlock-psychology/#/`.

Progress and quiz scores stay in the browser under the key `adhd-clinical-learning-draft-v1`. Reset them from the Progress page.

## Checks

```bash
node tests/run.js
```

The tests cover search, addition navigation, quiz scoring and rationales, progress reset, empty course summaries, and the `/unlock-psychology/` asset paths.

## Sources

Linked from the Sources page. NICE NG87’s overview was last reviewed on 23 July 2026. The recommendations chapter header was last updated on 13 September 2019. Recommendation 1.3.1 includes a QbTest statement marked [2024]. Recommendation 1.3.3 refers to DSM-5 or ICD-11. Those dates and those recommendation numbers are not the same thing. Licensed interviews and rating scales are named and linked, not reproduced.
