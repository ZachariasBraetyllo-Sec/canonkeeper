# IBM Bob Usage Log

## Entry 1: Initial homepage customization

**Date:** 2026-06-08

**Task:** Replace the default Next.js starter page with an initial CanonKeeper landing page.

**Prompt summary:** Asked IBM Bob to create a beginner-friendly Next.js + TypeScript + Tailwind landing page for CanonKeeper with the app name, tagline, description, and a short explanation of the product concept.

**How Bob helped:** Bob generated the initial homepage structure and Tailwind styling for `app/page.tsx`.

**Manual changes:** Reviewed Bob's proposed changes, saved the update, and tested the result locally at `http://localhost:3000`.

**Result:** CanonKeeper now displays a custom landing page instead of the default Next.js starter page.

## Entry 2: Sample lore and conflict test data

**Date:** 2026-06-08

**Task:** Create sample test data for CanonKeeper's future continuity review workflow.

**Prompt summary:** Asked IBM Bob to create a `sample-data` folder with two markdown files: one containing fictional supernatural world lore and one containing a sample character submission with intentional continuity issues.

**How Bob helped:** Bob created the folder structure and filled `sample-data/world-lore.md` and `sample-data/character-submission.md` with original testing content.

**Manual changes:** Reviewed the generated files to confirm that the world lore and character submission can be used to test continuity checking.

**Result:** CanonKeeper now has sample lore and a conflict-heavy character submission that can be used for future AI review features.

## Entry 3: Prototype review interface

**Date:** 2026-06-08

**Task:** Add the first CanonKeeper review interface to the homepage.

**Prompt summary:** Asked IBM Bob to update `app/page.tsx` with a prototype UI containing a World Lore textarea, New Submission textarea, Review for Continuity button, and placeholder Review Results card.

**How Bob helped:** Bob generated the React/TypeScript and Tailwind CSS needed to add the review interface while keeping the visual style consistent with the existing landing page.

**Manual changes:** Reviewed Bob's proposed update, saved the file, restarted or refreshed the local dev server, and tested the interface at `http://localhost:3000`.

**Result:** CanonKeeper now has a visible prototype interface for entering lore and new creative content.

## Entry 4: Mock continuity review flow

**Date:** 2026-06-08

**Task:** Add interactive prototype behavior to the CanonKeeper review interface.

**Prompt summary:** Asked IBM Bob to update `app/page.tsx` so the Review for Continuity button validates the textareas and displays a structured mock review result.

**How Bob helped:** Bob generated the React/TypeScript state handling, input validation, button behavior, and mock review result display.

**Manual changes:** Tested the interface locally by clicking the review button with empty fields, one filled field, and both fields filled.

**Result:** CanonKeeper now has an interactive prototype flow that only displays review results when both World Lore and New Submission contain text.

## Entry 5: Demo sample loading controls

**Date:** 2026-06-08

**Task:** Add demo helper controls for loading sample lore and sample submission text.

**Prompt summary:** Asked IBM Bob to update `app/page.tsx` with Load Sample Lore, Load Sample Submission, and Clear Fields buttons using local sample string constants.

**How Bob helped:** Bob generated the React/TypeScript state updates and Tailwind CSS needed to load sample data into the textareas and reset the prototype form.

**Manual changes:** Tested the buttons locally to confirm that both samples load correctly without copy/paste and that Clear Fields resets the form.

**Result:** CanonKeeper now has a smoother demo workflow with one-click sample loading.