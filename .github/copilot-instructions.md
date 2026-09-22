# Copilot Instructions

## Project overview

This is a dependency-free, static Japanese quiz application for the Systems Architect Examination (午前II). The current implementation contains the 2025 Spring (令和7年度) set; the intended expansion is to support every available 午前II set from 2009 (平成21年度) onward. It runs directly in a browser; there is no bundler, framework, package manifest, backend, or database.

The current authoritative question source is the IPA PDF linked in `README.md` and stored locally as `2025r07h_sa_am2_qs.pdf`. The answer key is stored as `2025r07h_sa_am2_ans.pdf`. For the planned multi-year expansion, keep each year's question wording, conditions, equations, line breaks, option order, answer key, and explanations tied to that year's official IPA source files.

## Build, run, and validation

There is no build step and no configured test or lint suite.

Start the app from the repository root with:

```sh
python -m http.server 8000
```

Open <http://localhost:8000/>. Serving over HTTP is preferred because the embedded PDF is more reliable than when opening `index.html` with `file://`.

Run the available JavaScript syntax check after editing `app.js`:

```sh
node --check app.js
```

For a focused smoke check, serve the repository and verify that `/`, `/app.js`, `/styles.css`, and the relevant PDF/image assets return successfully. There are no single-test commands because the repository has no automated test framework.

## Architecture

- `index.html` is the single page shell. It defines the header/score area, the quiz panel, navigation controls, and the source-PDF sidebar.
- The year selector is populated from `examSets` in `app.js`. Only sets whose metadata has `ready: true` use the quiz renderer; other downloaded years intentionally show a preparation message while switching the source PDF.
- `app.js` contains all current quiz content and client-side behavior. `questions` and the year-specific arrays (currently 2025 through 2021 and 2019 through 2011) contain 25 entries with the prompt, four options, the official answer letter, and the main explanation. The corresponding explanation arrays contain per-option explanations. A multi-year implementation should move these arrays behind a year/exam-set data model rather than duplicating rendering logic.
- The UI is rendered imperatively by `render()`. It displays one question at a time, stores submitted selections in the in-memory `answers` array, updates score/progress, and renders feedback only after submission. `renderDots()` owns the question navigation indicators and score calculation.
- `styles.css` provides the complete presentation and responsive layout. The app uses a two-column desktop layout with the quiz on the left and the embedded original PDF on the right, collapsing to one column on narrower screens.
- `exam-pages/diagram-q08.jpg` is the cropped control-flow graph shown with question 8. The other files under `exam-pages/` are source-page/question crops kept for reference; do not use a full page crop as the displayed question text.
- The local PDFs are static reference assets. Do not change or regenerate them unless the source exam is intentionally being replaced.

## Codebase-specific conventions

- Keep the question index aligned across `questions`, `incorrectExplanations`, and any question-specific display logic. There must be exactly 25 entries in each question data structure.
- When adding 2009 onward sets, keep each year's 25-question arrays and assets isolated by exam year, add an explicit year selector, and never mix answer keys or explanations between years.
- Answer letters use the Japanese keys `ア`, `イ`, `ウ`, and `エ`; `keyToIndex` maps them to zero-based option indexes. Preserve this convention when changing answer data.
- Question text intentionally uses `\n\n` for source-like paragraph breaks and full-width indentation where appropriate. The `.text-question .question-text` rule uses `white-space: pre-wrap`; preserve those newlines and indentation instead of flattening text.
- Question 8 is the only question-specific diagram currently rendered in the text question card (`current === 7`). If adding another diagram, use a narrowly cropped diagram asset and an explicit, readable mapping rather than embedding a whole PDF page.
- The displayed option text comes from `questions`; explanations come from `incorrectExplanations`. Update both together whenever an option changes.
- Submitted answers are intentionally session-only in memory. Do not add persistence or reset behavior without an explicit product requirement.
- Keep the original IPA URL in `README.md` when changing source material, and update the local PDF/assets consistently with that source.
- Use plain browser APIs and static assets. Avoid introducing a framework or dependency for a localized UI change.
