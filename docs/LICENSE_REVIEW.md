# License and rights review (working notes — not legal advice)

Prepared 24 Nov 2026 for counsel. Each item is tagged **Verified** or **Assumption**.

## 1. Third-party content

| Material | Finding | Current handling | Question for counsel |
|---|---|---|---|
| Choi, *Encyclopedia of Taekwon-Do* | Published, rights-reserved work. **Verified**: copyright notices in the scan. Who controls the rights since Gen. Choi's death (2002) and the ITF split is unclear. | Facts (names, counts, sequences, measurements) restated in original wording, with volume/page citations; original diagrams | Is fact-level paraphrase plus original illustration defensible for a commercial app? Who would license the text and plates? |
| Choi, *Taekwon-Do* (1965) | “Copyright 1965 by Choi Hong Hi, All rights reserved.” **Verified** | Historical facts only | Same as above |
| Basic Taekwondo Techniques and Terminology | No author or publisher stated; photos may come from Kukkiwon materials. **Verified**: no attribution in the file | Cross-check only | Can it be used at all? |
| Kukkiwon poomsae sequences | Not in any supplied file | Names and levels only | License route with Kukkiwon |
| WT rules | Public documents | Paraphrased summary with source | Linking and attribution terms |
| Pattern meanings (Korean historical figures) | Historical facts | Paraphrased | — |
| Juche pattern interpretation | Politically sensitive. **Verified**: the text ties it to Baekdu Mountain and the Juche idea | Neutral paraphrase, labelled lineage-sensitive | Any export-control or reputational issue in distribution? |

## 2. Fonts and code

- Fonts: Noto Serif KR and Inter, loaded from Google Fonts under the SIL Open Font License. **Assumption**: confirm before bundling them offline.
- No third-party JavaScript libraries are used.
- Device speech synthesis (Web Speech API) is used for pronunciation. Recorded native-speaker audio would need a recording release.

## 3. Names and marks

- “Dojang” is a common Korean noun (도장, “training hall”; 道場, “place of the Way”). **Assumption**: it may be hard to register as a trademark on its own. A trademark search is needed for the offering name and the Taekwon-Do module name.
- ITF, WT, Kukkiwon and USA Taekwondo names are used only to identify sources. Do not imply endorsement.

## 4. Data protection

- The prototype collects no personal data; progress stays in the browser's localStorage.
- Before any account, health or child features: the FTC Health Breach Notification Rule (amended; effective 29 July 2024; covers health and fitness apps outside HIPAA) and the amended COPPA Rule (compliance deadline 22 April 2026).

## 5. Repository license

- Current: proprietary, all rights reserved (see `LICENSE`). Founder to decide whether code and/or original content should be openly licensed later.
