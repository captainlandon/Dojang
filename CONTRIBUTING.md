# Contributing to Dojang

Dojang's credibility is its product. These rules keep it that way.

## Workflow

1. **Branch from `main`**, using a short descriptive name, e.g. `tul/do-san-steps` or `track/tai-chi-pilot`.
2. Make your change in `src/` (or `docs/`, `tests/`).
3. **Rebuild:** `python3 build.py`. Commit the updated `dist/index.html` with your change.
4. **Test:** `node --test tests/*.test.mjs`, then `python3 tests/smoke_test.py`.
5. **Open a pull request** and fill in the template. CI must pass.
6. **Get a review before merging.** Content changes need a qualified reviewer for their domain (below).

Never commit straight to `main`, force-push to `main`, or share work outside the team without authorization.

## Content rules

| Rule | What it means in practice |
|---|---|
| **Cite** | Every item has a `src`, down to volume and page where possible (`ENC Vol. VIII, Pattern Do-San`). Unsourced content is not merged. |
| **Label lineage** | Mark every item ITF (Chang-Hon), Kukkiwon/WT or historical. Where federations differ (e.g. Juche vs Ko-Dang), show the variants neutrally. |
| **Paraphrase** | Restate facts in original wording, with original diagrams. Never paste text or reproduce plates from copyrighted books. Quotations stay short, rare and attributed. |
| **Evidence labels** | A claim about benefits must match its entry in the evidence registry (`src/shell.js`). If there is no entry, add one with population, finding, use and source, or drop the claim. |
| **Safety envelope** | Physical practices state prerequisites, contraindication prompts and alternatives. Kicks, conditioning and partner drills say that they need supervision. |
| **No overclaims** | No diagnosis or therapeutic guarantees, no claims of far transfer, no automatic rank certification, no human-worth scores. |
| **Canonical philosophy** | Tao Institute philosophy is referenced, not rewritten. Proposed changes to axioms or the agency cycle go to the founder as a decision-log entry. |

## Reviewers by domain

| Change | Reviewer |
|---|---|
| Pattern steps, techniques, terminology (ITF) | Certified ITF instructor (4th Dan or above) |
| Korean terms and romanisation | Korean-language reviewer |
| Kukkiwon/WT content | Kukkiwon-certified instructor (and a license, for poomsae sequences) |
| Health, mind–body, evidence registry | Subject specialist |
| Rights, data, children | Counsel |
| Axioms, agency cycle, track scope | Founder |

Until reviewers are appointed, content changes are merged as *provisional* and listed in the decision log.

## Technical contract

- **Do not rename hash routes** (`#home`, `#patterns`, `#pattern-<id>`, `#dojang`, …). Bookmarks depend on them.
- **Do not rename `dj_*` localStorage keys.** Learners' saved progress depends on them. If storage must change, write a migration and extend the smoke test to cover it.
- **Pattern step counts must equal the pattern's movement count** (a test enforces this).
- **No third-party scripts and no tracking.** The page stays self-contained and works offline.
- **Never commit source scans** (PDF/ZIP). `.gitignore` blocks them; don't override it.

## Decisions

Anything that changes scope, rights, data handling or philosophy gets a numbered entry in `docs/DECISION_LOG.md` with its status: *Established*, *Proposed*, *Implemented-provisional* or *Open*.
