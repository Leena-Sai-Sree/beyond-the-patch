# Research decisions and their rationale

November 9, 2026

Leena Sai Sree Maridi

## What the study examines
A patch check and a compromise investigation answer different questions. The first establishes whether the vulnerable software or configuration has been addressed. The second examines what an attacker may have done before that point and what response is needed.

The study compares how official guidance connects these tasks. It records the actions described, the detail needed to carry them out, and the evidence used to assess the result. The analysis concerns the guidance, rather than the compromise state of a particular production system.

A missing instruction is recorded as a gap in the reviewed source set. An instruction that leaves its trigger, scope or expected result unclear is recorded as an ambiguity. Before describing two recommendations as inconsistent, the comparison considers their dates, product versions, deployments and response scenarios.

## Why these five cases
PAN-OS, MOVEit, Outlook, Print Spooler and Log4j give the pilot different problems to work through: an appliance, file-transfer software, a client application, an operating-system service and a software dependency. A framework that works for one of these may need adjustment for another. The [selection log](../data/pilot-candidate-selection-log.md) records the individual reasons and the two screened alternatives.

This is a purposive sample. Its purpose is to test the framework and compare response requirements, not estimate the frequency of guidance problems across the KEV Catalog. Additional testing does not change how the cases were selected.

## Why coding stays at document level
Each record identifies one document version, CVE and evidence category. This keeps the source of an instruction visible. If a short alert links to a detailed manual, the manual is assessed separately; its detail is not credited to the alert. Later page revisions also remain separate from earlier observations.

The CVE summary brings the documents together while retaining their references. Its maximum scores show the strongest guidance found for each category. They do not establish that separate instructions form one complete or compatible response procedure.

## Why there are two scores
An instruction can be specific about what to do without explaining how to verify the result. Password-reset advice illustrates the distinction: naming the accounts to reset supplies an action, but it may leave the completion evidence unstated. A document can also identify a useful log without describing how to collect it.

Actionability and evidence specificity are therefore scored separately. Combining them would hide the difference between carrying out a task and assessing its outcome. They are not averaged into a vendor-quality score.

## How applicability is handled
Applicability depends on the case scenario, not on whether a document mentions a category. Credential response may be relevant to a compromised device even when a particular advisory is silent about it.

The coding keeps applicable, inapplicable, conditional and undetermined cases separate. Otherwise, a zero could mean several different things: the instruction is absent, the activity is irrelevant, or the available context is insufficient.

Each scenario states the relevant product, deployment and exploitation capability. Those conditions frame the document analysis; they are not observations from an actual incident.

## Decisions retained in the dataset
| Issue | Current interpretation | Reason |
|---|---|---|
| PAN-OS response disposition | P3400-042: E7-T 2/3 | A post-response assessment supports a limited technical conclusion, without establishing administrative closure. |
| PAN-OS verification | P3400-003/006/041: 3/3 with separate facets | Testing protection behavior and checking the installed build verify different properties. |
| PAN-OS master-key guidance | P3400-053: 3/2; P3400-060: 3/3 | The procedures concern key protection and encryption properties; they do not cover every credential or session task. |
| PAN-OS recovery-source history | Original scores retained with a version limitation | The current page cannot establish the contents of the missing October 28 rendering. |
| MOVEit response disposition | M34362-007: current E7-T 2/3 | Cleanup verification supports a limited transition to the next response stage. |
| Outlook investigation and credentials | O23397-002: 3/3; O23397-004: 2/0 | Detailed investigation guidance does not supply evidence that credential replacement is complete. |
| Outlook preservation and recovery | O23397-009: E2 2/3; O23397-012: E5 0/0 | Preserving investigation evidence is different from providing a recovery procedure. |
| Outlook primary alert | O23397-016: 1/0; 017/018: 2/0; 020: 1/0 | The alert receives credit for its own instructions, with linked procedures assessed separately. |

The [coding notes](2026-11-09-review-checklist.md) explain these decisions against the source passages. The [revision file](../data/score-revisions-2026-11-09.csv) records accepted scores alongside their original values. MOVEit's earlier E7 0/0 remains part of the history; current analysis uses 2/3.

## Review and source history
Source review covered 70 PAN-OS and 84 MOVEit records. The [review log](../data/researcher-review-2026-11-09.csv) records that coverage and the highlighted Outlook decisions. This was review of the existing coding, not a second independently coded dataset, so an agreement coefficient cannot be calculated from it.

The original register lists eight historical PAN-OS HTML captures that are absent from the repository. The listed hashes cannot restore those files. Live pages can support a current interpretation but cannot authenticate an earlier rendering, particularly where a later revision is visible. The November 9 date on these notes records the decisions, rather than the date of every source inspection.

Preparation and assistance are described in the [provenance statement](../methodology/research-provenance.md). The [test record](../analysis/2026-11-09-test-record.md) covers the automated checks and their limits.

## What follows
The immediate work is to finish Outlook's eligible linked-source review, then complete Print Spooler and Log4j. The completed pilot will show whether the category rules are consistent enough to freeze and how much main-study work fits within the remaining time.
