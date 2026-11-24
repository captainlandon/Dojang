# Dojang

*For all that you may become.*

Dojang is an applied offering of the **Tao Institute for Actualization**: a research-informed environment for cultivating the whole person. The Institute owns the philosophical and research foundations; Dojang turns them into learning, training and practice.

This repository holds the Dojang web prototype. **Taekwon-Do is module 1** and is live. Every other track is planned, research-only, or waiting on source material. See `docs/DECISION_LOG.md`.

## Status

Phase 0 (preserve and establish), opened 24 Nov 2026.

| Track | Status |
|---|---|
| Taekwon-Do | Live (prototype) |
| Whole-Body Health | Planned |
| Life Curriculum (23 modules) | Blocked: the canonical module list must come from the founder's files |
| Shaolin Kung Fu | Planned: needs a lineage, a partner instructor and content rights |
| Mind–body wellness (Tai Chi, meditation) | Planned |
| Sound & auditory inquiry | Research only |
| Cognitive & creative development | Planned |

## Layout

```
archive/   original prototype, unchanged (Taekwon-Do only, 19 Nov 2026)
src/       app.html (shell + views), data.js (Taekwon-Do content), shell.js (Dojang tracks, cycle, evidence)
dist/      built single-file page (published artifact)
docs/      source inventory, decision log, license review
tests/     content-integrity tests (node) and browser smoke test (playwright)
```

## Build and test

```bash
python3 build.py                       # writes dist/index.html
node --test tests/*.test.mjs           # content integrity
python3 tests/smoke_test.py            # renders every route; checks saved progress survives
```

The prototype is a single self-contained HTML page with no dependencies apart from Google Fonts. Progress is stored in the browser under `dj_*` localStorage keys. These keys are frozen: changing them would wipe learners' saved progress (see the decision log).

## Rules for contributors

- **Cite everything.** Every content item carries a `src`. Copyrighted sources are paraphrased, never reproduced (`docs/LICENSE_REVIEW.md`).
- **Label lineage.** ITF, Kukkiwon/WT and historical material are never blended silently.
- **No efficacy claims beyond the evidence registry.** No diagnosis, therapeutic guarantees or automatic rank certification.
- **Institute philosophy is canonical.** Dojang references it and does not create competing doctrine.
- **Reviewed pull requests only.** Nothing is merged or shared externally without authorization.

## Not in this repository

The source scans (Gen. Choi's Encyclopedia, the 1965 book, the terminology guide) are copyrighted and are deliberately excluded (`.gitignore`). The foundational dossier and the product spec are kept with the founder's documents.
