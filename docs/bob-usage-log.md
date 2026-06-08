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