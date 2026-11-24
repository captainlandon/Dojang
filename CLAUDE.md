# Working in the Dojang repository

Dojang is the Tao Institute for Actualization's whole-person offering. This repo holds its web prototype; Taekwon-Do is module 1. Read README.md and CONTRIBUTING.md before changing anything.

## Rules

- Branch and open a pull request. Never commit or force-push to `main`.
- Edit `src/` only, then run `python3 build.py`; never hand-edit `dist/index.html`.
- Run `node --test tests/*.test.mjs` and `python3 tests/smoke_test.py` before every commit.
- Every content item needs a `src` citation and a lineage label (ITF / Kukkiwon-WT / historical).
- Paraphrase copyrighted sources (Gen. Choi's Encyclopedia, the 1965 book); never reproduce their text or plates. Never commit source PDFs.
- Benefit claims must match the evidence registry in `src/shell.js`. No diagnosis, therapeutic guarantees, far-transfer claims or rank certification.
- Hash routes and `dj_*` localStorage keys are frozen; changing them wipes learners' progress or breaks links.
- Record scope, rights, data or philosophy changes in `docs/DECISION_LOG.md`.
- Tao Institute philosophy is canonical: reference it, don't rewrite it. Axioms and agency-cycle annotations are *proposed* until the founder approves them.
