# Repository and data quality review
Date: 2026-11-03  
Baseline commit: a1f5996e6af52ce7870dac5581021b68743ba328  
Scope: Historical November 3 work-package checks; targeted external-source review, independent coding review outstanding.

## November 9 publication-layout correction
The PASS results below describe the earlier work-package layout, not a verified state of the subsequent GitHub upload. Inspection of commit 3fb0fb1 found 30 unresolved relative file-link occurrences, including seven in README.md. Root-level uploads and older directory copies created conflicting current records. The November 9 consolidation corrects the layout; see the [current validation report](2026-11-09-validation-report.md).

## Every baseline file accounted for
| File | Review and disposition |
|---|---|
| README.md | Read in full; updated stale phase, sampling, scoring, visibility and sequencing. |
| methodology/research-protocol-v0.2.md | Read all 12 sections; retained design and added current-revision pointer. |
| methodology/coding-guide-v0.2.md | Read in full; retained anchors/examples and added revision pointer. |
| methodology/pilot-selection-plan.md | Read in full; corrected outdated unselected-case statement. |
| methodology/2026-10-13-methodology-refinement.md | Read in full; preserved historical decision record unchanged. |
| data/pilot-candidate-selection-log.md | Read all seven screened candidates and selection rationales; updated current status without changing roster. |
| data/source.md | Read starting register, retrieval tables, PAN-OS source appendix, limitations and hashes; appended new dated series. |
| data/pilot-coding-worksheet.md | Inspected all 70 rows, scenario, seven summaries, memos and review records; original numerical records preserved. |
| data/kev-snapshot-2026-10-28.json | Parsed entire 1,760-entry file; checked count, unique identifiers, dates, target membership and byte identity. No assertion that every vulnerability description was semantically validated. |
| weekly-progress/2026-10-12-weekly-progress.md | Read in full; preserved historical progress unchanged; added a separate November 3 entry. |

## Reproducible data checks
| Check | Result | Evidence |
|---|---|---|
| Original PAN-OS analytical fields preserved | PASS | All analytical fields in the 70 records match the baseline; review-status metadata was standardized. |
| PAN-OS record count | PASS | 70 |
| PAN-OS unique IDs | PASS | 70 distinct record IDs |
| PAN-OS document/category grid | PASS | 10 scored source units × E1–E7 |
| PAN-OS score and provenance fields | PASS | 16 columns; 0–3 scores; section, observation, rationale and protocol supplied |
| PAN-OS E1 synthesis | PASS | Recalculated maxima 3/3 and supporting source lists |
| PAN-OS E2 synthesis | PASS | Recalculated maxima 3/3 and supporting source lists |
| PAN-OS E3 synthesis | PASS | Recalculated maxima 3/3 and supporting source lists |
| PAN-OS E4 synthesis | PASS | Recalculated maxima 3/3 and supporting source lists |
| PAN-OS E5 synthesis | PASS | Recalculated maxima 2/3 and supporting source lists |
| PAN-OS E6 synthesis | PASS | Recalculated maxima 3/3 and supporting source lists |
| PAN-OS E7 synthesis | PASS | Recalculated maxima 2/3 and supporting source lists |
| KEV snapshot byte identity | PASS | SHA-256 2d9931c086e42d05425c2da924299c8d9b7ff836de373f981668b7ef5f6f0fd7 |
| KEV declared/actual entry count | PASS | 1760 entries; catalog 2026.10.27 |
| KEV unique CVEs | PASS | No duplicate CVE identifiers |
| KEV entry dates | PASS | All dateAdded values are formatted and on/before the retained selection date |
| Five selected cases present | PASS | CVE-2024-3400, CVE-2023-34362, CVE-2023-23397, CVE-2021-34527, CVE-2021-44228 |
| PAN-OS KEV target contents reviewed | PASS | Target product, dateAdded, shortDescription and requiredAction inspected; no asset compromise inference |
| MOVEit supplemental records | PASS | 84 distinct records |
| MOVEit source/category grid | PASS | 12 scored document units × E1–E7 |
| MOVEit numerical ranges | PASS | Independent 0–3 scales |
| MOVEit provisional synthesis | PASS | All seven separate maxima and supporting source lists recalculated from the 84 rows |
| Local Markdown links | PASS | All relative file targets exist; external live-page availability is not guaranteed. |
| Baseline file inventory covered | PASS | 10 baseline files matched to review inventory |

## Recalculated original PAN-OS maxima
| Category | Actionability | Evidence specificity |
|---|---|---|
| E1 | 3 | 3 |
| E2 | 3 | 3 |
| E3 | 3 | 3 |
| E4 | 3 | 3 |
| E5 | 2 | 3 |
| E6 | 3 | 3 |
| E7 | 2 | 3 |

## Snapshot preservation finding
The initial Windows checkout had SHA-256 4780e2d7fbbbd58761f8ad3450246905260db071fa08af400b07b01e9f7ecc5e because Git converted line endings to CRLF. The committed blob and LF-normalized content both matched the documented snapshot hash. The delivered snapshot restores the exact committed bytes; a narrow .gitattributes rule disables future text conversion for KEV snapshot JSON. No catalog entry was edited.

## Limits
Passing structural checks does not validate passage interpretations or prove that a source set is complete. PAN-OS historical HTML captures are not in this repository. The November 3 audit re-read selected live passages and recorded version risks; a full independent recoding of the 70 records remains outstanding. MOVEit has 84 first-pass records across 12 document units; bounded source screening is complete with access/version limitations and researcher verification outstanding. Its remaining three pilot peers are uncoded. Full-text literature appraisal and the main study remain unfinished.
