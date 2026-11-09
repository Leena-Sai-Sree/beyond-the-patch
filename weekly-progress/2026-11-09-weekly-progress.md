# Weekly progress — November 9–15, 2026

Project: Beyond the Patch\
Entry date: November 9, 2026

This entry records work completed on November 9. The reporting week is still in progress.

## Work completed
The repository files were organized into their intended folders, and duplicate root copies were removed. Older status statements were checked against the current dataset and review decisions.

Outlook became the third pilot case with coding records. Three official primary documents produced 21 document-category records, with source metadata, section references, score rationales and a CSV. The retrieval log records inaccessible pages and linked procedures that still need to be screened.

Review decisions for the existing 70 PAN-OS and 84 MOVEit records were documented with their reasoning. The current MOVEit E7-T score is 2/3 for a limited technical disposition. For the Outlook preservation passage, investigation remains 2/3 and recovery 0/0 because protecting evidence does not itself describe recovery.

The repository audit corrected inconsistent current and historical statements and expanded the validator to 27 checks. Four temporary fault injections confirmed that it detects an invalid score, an incorrect summary source, a missing local file and a revision assigned to the wrong source. The injected changes were restored before the final validation run.

## Outputs
- [Outlook analysis and retrieval log](../data/outlook-pilot-2026-11-09.md), [coding CSV](../data/outlook-coding-2026-11-09.csv) and [source metadata](../data/outlook-sources-2026-11-09.json)
- [Methodological decisions](../research-notes/2026-11-09-researcher-decisions.md), [coding rationale](../research-notes/2026-11-09-review-checklist.md) and [record-level review log](../data/researcher-review-2026-11-09.csv)
- [Validation results](../analysis/2026-11-09-validation-report.md), [test record](../analysis/2026-11-09-test-record.md) and [full audit](../analysis/2026-11-09-full-audit.md)
- [Source cross-checks](../research-notes/2026-11-09-source-checks.md)

## Dataset at the end of this entry
| Case | Records | Status |
|---|---|---|
| PAN-OS | 70 | Source review completed; older HTML captures unavailable |
| MOVEit | 84 | Source review completed; accepted E7-T revision recorded separately |
| Outlook | 21 | Primary-document coding started; linked-source search incomplete |
| Print Spooler | 0 | Starting source registered |
| Log4j | 0 | Starting source registered |
| Total | 175 | Document-category records across three cases |

## Interpretation and review
The [provenance statement](../methodology/research-provenance.md) explains preparation and review. The review log separates original records from later decisions. The missing historical captures limit source-version verification, and independent second-coder agreement has not been measured.

The automated checks support the dataset's internal consistency. They do not establish the effectiveness of detection or remediation procedures. The five-case pilot, literature appraisal and main study remain unfinished.

## Time and next steps
Personal research hours are not entered in this record. The next work is to finish Outlook's linked-source collection, code Print Spooler and Log4j, and use the completed pilot to finalize the method and main-study scope.
