# Dojang

*For all that you may become.*

Dojang is an applied offering of the **Tao Institute for Actualization**: a research-informed environment for cultivating the whole person. It treats intellectual, physical, creative and psychological development as one interacting system rather than separate pursuits. The Institute owns the philosophical and research foundations; Dojang turns them into learning, training and practice.

道場 (*dojang*) means “place of the Way”. Its 道 is the Tao of the Tao Institute.

This repository holds the Dojang web prototype. **Taekwon-Do is module 1** and is live. The other tracks are planned, research-only, or waiting on source material.

---

## Contents

- [The idea](#the-idea)
- [What's in the prototype](#whats-in-the-prototype)
- [Status by track](#status-by-track)
- [Run it](#run-it)
- [Repository layout](#repository-layout)
- [How content works](#how-content-works)
- [Tests and checks](#tests-and-checks)
- [Contributing](#contributing)
- [Roadmap](#roadmap)
- [Sources, rights and safety](#sources-rights-and-safety)
- [License](#license)

---

## The idea

**One system, many practices.** Every track runs on the same parts: a cited content graph, a practice log, feedback, reflection and an evidence registry. A Taekwon-Do pattern, a Tai Chi form and a breathing practice are all sequences of steps, each with sources, a lineage and a safety envelope.

**The agency cycle is the spine.** The founder's model of human agency runs:

> reality & body → sense → perceive → model → value / imagine → decide → act → feedback → learn ↻

Dojang aims to strengthen the whole cycle rather than optimize one skill. Martial arts make a strong first module because a single practice session touches nearly every stage.

**Six provisional axioms** (awaiting founder review): embodiment, interdependence, developmental synergy, practice, accessibility and individuality, and empirical accountability. Empirical accountability governs the rest: every claim carries an evidence label, from *supported* to *not supported*.

## What's in the prototype

**Dojang shell**
- **Hub:** motto, offering summary, the live module, the track cards and the axioms
- **Tracks:** scope, guardrail and status for each track
- **Agency cycle:** the nine stages, each linked to where module 1 already exercises it
- **Evidence registry:** population, finding, how Dojang uses it, and the source, with a label

**Module 1: Taekwon-Do** (built on Gen. Choi Hong Hi's *Encyclopedia of Taekwon-Do*, with lineage-labelled sources)
- **Today:** rank-based focus, streak, tenet of the day, next grading
- **Patterns:** all 24 Chang-Hon tul, with meanings, movement counts and ranks. Chon-Ji and Dan-Gun have animated step players with a floor diagram and Korean counting. Also the 17 Kukkiwon poomsae (names, levels, trigrams) and historical forms.
- **Terms:** 134 terms with ITF and Kukkiwon romanisation, spoken Korean (device voice) and mastery tracking
- **Technique:** stances with footprint diagrams to the Encyclopedia's measurements, and the theory of power
- **Philosophy:** the Charter, the tenets explained, the three ideals, the twelve technical principles and the training secrets (Vol. I)
- **Belt path:** gup and dan progression, belt-colour meanings and the rank system
- **Train:** round timer with Korean technique call-outs; a daily session built from your rank
- **Watch:** video library for ITF patterns, Kukkiwon poomsae, stretching and technique. Every link is labelled *confirmed* or *not yet checked*.
- **Quiz:** multiple choice and flashcards (terms, movement counts, meanings)
- **Rules:** WT Kyorugi changes (Tashkent, 2026), plus the Encyclopedia's historical competition rules
- **History:** timeline from Gen. Choi's own account in Vol. I, and the source registry

Everything works offline once loaded. Progress stays in the learner's own browser; there are no accounts and no personal data.

## Status by track

Phase 0 (preserve and establish) opened 24 Nov 2026.

| Track | Facet / type | Status |
|---|---|---|
| Taekwon-Do | Martial arts | **Live** (prototype) |
| Whole-Body Health | Constituent facet | Planned: education only; no identifiable health data before counsel review |
| Life Curriculum (23 modules) | Constituent facet | **Blocked**: the canonical module list must come from the founder's files |
| Shaolin Kung Fu | Martial arts | Planned: needs a lineage, a partner instructor and content rights |
| Mind–body wellness (Tai Chi, meditation) | Practice track | Planned: screening and opt-outs required |
| Sound & auditory inquiry | Research topic | Research only (binaural beats); solfeggio as cultural context only (proposed) |
| Cognitive & creative development | Cross-cutting | Planned: designed for near transfer |

## Run it

The prototype is one self-contained HTML file. Open it directly:

```bash
open dist/index.html          # macOS · or double-click the file
```

It needs no server or build tools to view. Fonts load from Google Fonts when online, with system fonts as the fallback.

## Repository layout

```
archive/                 original prototype, unchanged (Taekwon-Do only, 19 Nov 2026; SHA-256 in the decision log)
src/
  app.html               page shell, styles, views and router (content is injected at build time)
  data.js                Taekwon-Do module content: patterns, steps, terms, stances, philosophy, rules, videos
  shell.js               Dojang shell content: tracks, axioms, agency cycle, evidence registry
build.py                 injects src/data.js + src/shell.js into src/app.html → dist/index.html
dist/index.html          built single-file page (this is what gets published)
docs/
  SOURCE_INVENTORY.md    every source, what it is used for, and how it may be used
  DECISION_LOG.md        numbered decisions with status (Established / Proposed / Implemented-provisional / Open)
  LICENSE_REVIEW.md      working notes on rights, names and data protection (not legal advice)
tests/
  data.test.mjs          content-integrity tests (node)
  smoke_test.py          browser test: every route renders; saved progress survives
.github/                 pull-request template and CI workflow
```

## How content works

- **Edit content in `src/data.js` or `src/shell.js`, then run `python3 build.py`.** Never edit `dist/index.html` by hand; CI fails if it is out of date.
- **Every item carries a source** (`src`), cited down to volume and page where possible, e.g. `ENC Vol. II, p. 12`.
- **Every item carries a lineage**: ITF (Chang-Hon), Kukkiwon/WT, or historical. Lineages are never blended silently.
- **Copyrighted sources are paraphrased, never reproduced.** The prototype restates facts (names, counts, sequences, measurements) in original wording, with original diagrams.
- **Pattern steps** use a fixed shape (`m` movement, `s` stance, `t` technique, `f` facing A–F, `x,y` floor position). The step count must equal the pattern's movement count; a test enforces this.
- **Routes and storage keys are a contract.** Hash routes (`#home`, `#patterns`, `#pattern-<id>`, …) and `dj_*` localStorage keys must not be renamed. Bookmarks and learners' saved progress depend on them.

## Tests and checks

```bash
node --test tests/*.test.mjs                               # content integrity (no install needed)
pip install playwright && python -m playwright install chromium
python3 tests/smoke_test.py                                # renders all 18 routes in a real browser
```

The content tests check that:
- there are 24 tul, each step sequence matches its movement count, and the belt path follows syllabus order
- glossary rows are well-formed and unique
- every tenet, stance and Charter item has a source
- every evidence-registry entry is complete and labelled
- track statuses are valid
- video links are well-formed and unique

The smoke test opens every route and checks that it shows its own heading, so a page that falls back to the hub fails. It also seeds the legacy `dj_*` keys and confirms that rank and repetition counts survive.

The **CI workflow** runs on every pull request. It runs both test suites and confirms that `dist/index.html` matches a fresh build.

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md). In short:

1. **Branch from `main`.** Never commit straight to it.
2. **Cite, label and paraphrase.** Every new content item needs a source and a lineage, and nothing copyrighted is reproduced.
3. **No efficacy claims beyond the evidence registry.** No diagnosis, therapeutic guarantees or automatic rank certification.
4. **Run the build and both test suites**, then open a pull request using the template.
5. **Get a review before merging.** Nothing is merged or shared externally without authorization.

The Tao Institute's philosophy is canonical: Dojang references it and does not create competing doctrine.

## Roadmap

| Phase | Scope |
|---|---|
| **0 · Preserve & establish** | Done: archive, documentation, tests, Dojang shell, GitHub. Open: recover the Life Curriculum list; counsel review |
| **1 · Modular foundation** | Extract the shared services (content graph, practice log, assessment, timer, export/import) and an accessibility pass. Finish module 1: all 24 step players, recorded native-speaker audio, instructor sign-off |
| **2 · Extend carefully** | Small reviewed pilots: Tai Chi for balance, movement breaks, Whole-Body Health literacy, Life Curriculum mapping, meditation with screening, Shaolin once a partner is secured |
| **3 · Evaluate & refine** | Consented studies with comparison groups; findings published to the evidence registry, including null results |

Open founder decisions are tracked in [docs/DECISION_LOG.md](docs/DECISION_LOG.md).

## Sources, rights and safety

- **Primary source:** Choi Hong Hi, *Encyclopedia of Taekwon-Do* (15 vols.). Also the 1965 *Taekwon-Do: The Art of Self Defence*, a Kukkiwon-style terminology guide, and the 2026 WT rule changes. See [docs/SOURCE_INVENTORY.md](docs/SOURCE_INVENTORY.md).
- **The source scans are copyrighted and are never committed.** `.gitignore` excludes PDFs and archives.
- **Video** is linked, never embedded or copied.
- **Data:** the prototype collects no personal data. Before any accounts, health or child features: counsel review against the FTC Health Breach Notification Rule and the amended COPPA Rule (see [docs/LICENSE_REVIEW.md](docs/LICENSE_REVIEW.md)).
- **Safety:** Dojang is a study and practice companion. It is not a substitute for a qualified instructor or for medical care.

## License

Proprietary. Copyright © 2026 Innovatio Et Cetera Corp. / Tao Institute for Actualization. All rights reserved (see [LICENSE](LICENSE)). Choosing an open license for some or all of this repository is an open founder decision.
