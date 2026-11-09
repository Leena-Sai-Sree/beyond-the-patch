# Full repository consistency audit — November 9, 2026
Published baseline: 4c6f935e5fec10719883532a7dc5a0c44a085c6b  
Scope: All 31 files present in the published baseline

## Findings and corrections
| Finding | Correction |
|---|---|
| Questionnaire codes and selections stood in for methodological reasoning | Replaced narrative decision/checklist content with evidence-based rationale and source locators. The record-level decision trail remains in the data files. |
| Current wording still described accepted decisions as pending | Synchronized current summaries and separated dated historical status from later review. |
| The roadmap still requested choices already adopted | Recorded the accepted scenario and E7 scope, leaving genuine capacity, temporal-policy and submission planning items open. |
| Source collection dates could be read as a single cutoff | Labeled October 28 boundaries and retrieval coverage historically; November 3 and November 9 series remain distinct. |
| A current retention claim exceeded available evidence | The eight listed historical PAN-OS captures are now described as historical references absent from the repository, not presently authenticated files. |
| The candidate narrative lagged behind Outlook progress | Identified Outlook's three-source increment and the two remaining uncoded cases consistently. |
| The accepted MOVEit revision could be confused with original E7 0/0 | Preserved original rows, retained current E7-T 2/3 in the score overlay, and made current-versus-historical interpretation explicit. |
| A shorter MOVEit alert appeared to use a different E7 standard | Compared the NHS text with Progress; NHS delegates verification detail and does not inherit the vendor's score. |
| The original validator checked some counts but not every grid, supporting-source list or mirrored field | Extended validation from 15 to 27 checks, covering all 175 coding records and seven-category summaries. |
| Historical package instructions read like current next steps | Replaced obsolete installation/permission prose with a dated research-change account and current continuation links. |

No historical PAN-OS or MOVEit numerical record was overwritten. No new scoring change is introduced by this audit. Source-review coverage follows the recorded confirmations; it is not an independent second-coder dataset. Original assistance provenance remains intact.

## Completed validation
The expanded validator checks 70 PAN-OS, 84 MOVEit and 21 Outlook records; complete category grids; score ranges; source references; every summary maximum and supporting-source set; Outlook table/CSV agreement; revision integrity; selected-CVE dates; snapshot identity; local links; and root-level duplication. The [generated report](2026-11-09-validation-report.md) and [machine-readable results](2026-11-09-validation-results.json) contain the current outcomes.

Four controlled fault injections checked that validation detects substantive errors:

| Injected fault | Expected detector | Result |
|---|---|---|
| Reject out-of-range Outlook evidence score | Outlook fields and ranges | PASS |
| Detect wrong source attribution with unchanged maxima | PAN-OS summary maxima and attribution | PASS |
| Detect broken local file link | Relative Markdown file links | PASS |
| Reject score revision assigned to the wrong source | Score-revision integrity | PASS |

Each injected change was temporary and restored before final validation and packaging. These are tests of repository validation, not exploit, detection-effectiveness or remediation experiments.

## Source and literature cross-checks
[Source checks](../research-notes/2026-11-09-source-checks.md) document targeted primary-source comparisons and three bibliography metadata checks. They support the stated interpretations and distinguish direct assessment detail from references to other documents. They are not a new exhaustive source search or full-text literature appraisal.

## File-by-file coverage
| Published file | Audit treatment |
|---|---|
| .gitattributes | Snapshot line-ending preservation rule |
| README.md | Document content and cross-document status |
| analysis/2026-11-09-test-record.md | Document content and cross-document status |
| analysis/2026-11-09-validation-report.md | Document content and cross-document status |
| analysis/2026-11-09-validation-results.json | Parsed metadata/results and referenced records |
| analysis/data-quality-report.md | Document content and cross-document status |
| analysis/validate-repository.mjs | Validator inspected, extended and tested with four fault injections |
| data/kev-snapshot-2026-10-28.json | All entries parsed; bytes, membership and date checks |
| data/moveit-pilot-supplement-2026-11-03.md | Document content and cross-document status |
| data/outlook-coding-2026-11-09.csv | Parsed records, identifiers and cross-file agreement |
| data/outlook-pilot-2026-11-09.md | Document content and cross-document status |
| data/outlook-sources-2026-11-09.json | Parsed metadata/results and referenced records |
| data/pilot-candidate-selection-log.md | Document content and cross-document status |
| data/pilot-coding-worksheet.md | Document content and cross-document status |
| data/researcher-review-2026-11-09.csv | Parsed records, identifiers and cross-file agreement |
| data/score-revisions-2026-11-09.csv | Parsed records, identifiers and cross-file agreement |
| data/source.md | Document content and cross-document status |
| deliverables/2026-11-03-change-summary.md | Document content and cross-document status |
| deliverables/research-roadmap-2026-11-03.md | Document content and cross-document status |
| methodology/2026-10-13-methodology-refinement.md | Document content and cross-document status |
| methodology/coding-guide-v0.2.md | Document content and cross-document status |
| methodology/pilot-rules-v0.3-draft.md | Document content and cross-document status |
| methodology/pilot-selection-plan.md | Document content and cross-document status |
| methodology/research-protocol-v0.2.md | Document content and cross-document status |
| research-notes/2026-11-03-pan-os-review.md | Document content and cross-document status |
| research-notes/2026-11-09-researcher-decisions.md | Document content and cross-document status |
| research-notes/2026-11-09-review-checklist.md | Document content and cross-document status |
| research-notes/related-work-initial-review.md | Document content and cross-document status |
| weekly-progress/2026-10-12-weekly-progress.md | Document content and cross-document status |
| weekly-progress/2026-11-03-weekly-progress.md | Document content and cross-document status |
| weekly-progress/2026-11-09-weekly-progress.md | Document content and cross-document status |

The audit adds this report and the source-check note. Validation reports are regenerated rather than manually asserted. Unchanged historical records remain traceable through Git and the data overlays.

## Remaining research limitations
A consistency audit cannot establish that no semantic error exists. The historical HTML renderings cannot be reconstructed from missing captures. Outlook's eligible linked-source retrieval, Print Spooler and Log4j coding, full-text literature appraisal, the common final observation policy and the frozen main-study method remain unfinished. These are research work and evidence limits rather than file-layout defects.

## Editorial follow-through
The later November 9 editorial pass shortened the overview and weekly update, replaced questionnaire-style narrative with source-based reasoning and added one [provenance statement](../methodology/research-provenance.md) covering AI assistance, data preparation and researcher review. Historical assistance labels remain in the original records. CSV and JSON files retain their data formats.
