# Weekly research progress — November 9–15, 2026
Project: Beyond the Patch  
Entry date: November 9, 2026  
Reporting period: In progress; completed work below is dated November 9.

## Completed work
- Consolidated November 3 uploads into the intended methodology, data, research-notes, analysis, deliverables and weekly-progress directories. Reconciled older directory copies with the later records while retaining original PAN-OS assistance labels and numerical scores.
- Removed the redundant root-level KEV snapshot; the authoritative data snapshot retains the exact committed bytes and existing hash.
- Corrected the context of the historical change summary and quality report, whose package-era statements did not describe the published layout.
- Started Outlook CVE-2023-23397 document coding: 21 category records across three accessible official primary documents, with source metadata, section locators, rationales and a machine-readable CSV.
- Recorded a failed script-documentation link, a JavaScript-only advisory rendering, a CISA access failure and unscreened direct official procedures rather than treating them as absent guidance.
- Prepared one researcher checklist covering prior PAN-OS decisions, a MOVEit consistency check and the new Outlook records.
- Recorded the 18-item researcher questionnaire: method and roster retained; source review reported for 154 historical records; specific accepted scores, missing-source limitations and unresolved decisions recorded separately.
- Rechecked targeted PAN-OS source passages and the recovery KB's displayed October 29 revision date. These current observations do not authenticate missing October 28 captures.

## Outputs
- [Outlook analysis and retrieval log](../data/outlook-pilot-2026-11-09.md)
- [Outlook coding CSV](../data/outlook-coding-2026-11-09.csv)
- [Outlook source metadata](../data/outlook-sources-2026-11-09.json)
- [Combined researcher review](../research-notes/2026-11-09-review-checklist.md)
- [Researcher decision register](../research-notes/2026-11-09-researcher-decisions.md)
- [Record-level review overlay](../data/researcher-review-2026-11-09.csv)
- [Completed validation checks](../analysis/2026-11-09-test-record.md)
- [Reproducible validation report](../analysis/2026-11-09-validation-report.md)

## Current dataset
| Case | Document-category records | Status |
|---|---|---|
| PAN-OS CVE-2024-3400 | 70 | Researcher reports source review; older recovery version remains unavailable |
| MOVEit CVE-2023-34362 | 84 | Researcher reports source review; current E7-T 2/3 accepted in separate revision |
| Outlook CVE-2023-23397 | 21 | Three primary documents coded; eligible linked-source retrieval incomplete |
| Print Spooler CVE-2021-34527 | 0 | Starting source only |
| Log4j CVE-2021-44228 | 0 | Starting source only |
| Total | 175 | Category records, not independent incidents or validated findings |

## Interpretation and review status
New Outlook coding is AI-assisted first-pass analysis. Researcher decisions are recorded in the 18-item register. Source review of all 70 PAN-OS and 84 MOVEit records is reported by the researcher; exact inspection dates and row-by-row comments were not supplied. Follow-up 19=A accepts MOVEit E7-T 2/3, and 20=A confirms Outlook investigation 2/3 and recovery 0/0 for the preservation question. Original historical values remain separately identifiable. Structural validation checks record organization and arithmetic; it does not establish source interpretation accuracy or independent agreement. The five-CVE pilot is incomplete. No scans, exploit tests or changes to production systems were performed.

## Time record
Personal research hours are not entered. No historical hours or future work are claimed as completed.

## Next work
1. Apply the accepted E7-T interpretation consistently across comparable passages, keeping dated original records distinct.
2. Complete Outlook's eligible linked-document screening and register source versions before final synthesis.
3. Code Print Spooler and Log4j using consistent scenario, source-date and E7 rules.
4. Complete the pilot revision memo, full-text literature appraisal and an effort-based main-study scope decision.
