# Researcher decisions — November 9, 2026
Researcher: Leena Sai Sree Maridi  
Decision receipt date: 2026-11-09  
Instrument: 18-item research scope, coding and review questionnaire

## Decision register
Numbering follows the submitted questionnaire beginning with research scope and ending with the next milestone. It does not follow a later, differently numbered question list. Lowercase selections are normalized to uppercase. The record distinguishes accepted methods, source-review confirmations and unresolved scoring choices.

| Question | Selection | Topic | Recorded decision |
|---|---|---|---|
| 1 | A | Research scope | Published guidance remains the study object; no asset-level compromise determination. |
| 2 | A | Research objective | Retain coverage, operational detail, evidence requirements, gaps, ambiguities and contextual differences. |
| 3 | A | Pilot selection | Retain PAN-OS, MOVEit, Outlook, Print Spooler and Log4j. |
| 4 | A, qualified | Sampling limitation | Accept purposive-sample limits. Perform feasible validation and describe actual tests; testing does not make this sample representative. |
| 5 | A | Coding unit | Retain document version × CVE × evidence category with source-attributed synthesis. |
| 6 | A | Scoring | Retain separate 0–3 actionability and evidence-specificity scales; no aggregate vendor score. |
| 7 | A | Applicability | Retain applicable, not applicable, conditional and undetermined classifications separately. |
| 8 | A | Scenario policy | Retain explicit compromise-response scenarios as analytical constructions, not observed incidents. |
| 9 | A | PAN-OS E7 / R1 | Retain P3400-042 at 2/3 for technical disposition only; no administrative-closure inference. |
| 10 | A | PAN-OS verification / R2 | Retain P3400-003/006/041 at 3/3 with mitigation versus installed-build facets. |
| 11 | A | PAN-OS master key / R3 | Compatible narrow-function guidance accepted for P3400-053 at 3/2 and P3400-060 at 3/3. |
| 12 | B | PAN-OS historical capture / R4 | Original October 28 recovery capture is unavailable; preserve historical limitation and distinguish later versions. |
| 13 | B | MOVEit consistency / R5 | Reconsider technical-disposition credit for M34362-007 under the same E7 rule as PAN-OS; no replacement numerical score selected. |
| 14 | A | Outlook investigation and credentials / R6 | Retain O23397-002 at 3/3 and O23397-004 at 2/0. |
| 15 | U | Outlook preservation / R7 | Unresolved: O23397-009 at 2/3 and O23397-012 at 0/0 remain first-pass values, not accepted decisions. |
| 16 | A | Outlook alert / R8 | Retain O23397-016 at 1/0, O23397-017/018 at 2/0 and O23397-020 at 1/0. |
| 17 | A | Review coverage | Researcher reports checking all 70 PAN-OS and 84 MOVEit records against sources. Specific exceptions above remain open. |
| 18 | A | Next milestone | Finish Outlook linked-source retrieval, then Print Spooler and Log4j before sample expansion. |

## Coverage and evidential limits
Question 17 reports source review of the 154 existing PAN-OS and MOVEit rows. This is the researcher's review of the first-pass dataset, not an independently coded second dataset or a measured agreement result. The date above records receipt of the decisions; exact source-inspection dates, review durations and individual row comments were not supplied. No personal hours or agreement coefficient are inferred.

Question 12 establishes that the older recovery capture is unavailable. Review of a later live page cannot authenticate the October 28 wording underlying P3400-029–035. These rows retain their historical scores and the missing-version limitation.

Question 13 initially requested reconsideration and question 15 was initially unresolved. Follow-up decisions 19=A and 20=A resolve both: M34362-007 is currently E7-T 2/3; O23397-009 remains E2 2/3 and O23397-012 remains E5 0/0. The original MOVEit 0/0 is preserved as historical coding, not the current accepted score.

## Application to records
The [review overlay](../data/researcher-review-2026-11-09.csv) records coverage and exceptions separately from historical coding. The original PAN-OS and MOVEit rows and assistance provenance remain intact. New Outlook metadata identifies accepted highlighted scores separately from unresolved and unreviewed records. No rule change is silently applied to unexamined categories.

## Validation policy
The scope qualification attached to question 4 authorizes feasible validation. Structural checks cover links, identifiers, record grids, score ranges, summary calculations and snapshot identity. These checks are documented in the [test record](../analysis/2026-11-09-test-record.md). They do not establish detection accuracy, remediation effectiveness, non-compromise or statistical representativeness. Technical testing requires an identified artifact, a suitable environment, expected outcomes and an actual result before it is reported as completed. Material limits remain part of the interpretation.

## Follow-up decisions
| Question | Selection | Decision |
|---|---|---|
| 19 | A | M34362-007: E7-T actionability 2, evidence specificity 3, limited to the stated cleanup checks supporting transition to the next response stage. Administrative closure is not established. |
| 20 | A | Retain O23397-009 at investigation 2/3 and O23397-012 at recovery 0/0; preservation advice alone is not a recovery procedure. |

The [current score revisions](../data/score-revisions-2026-11-09.csv) separate accepted values from unchanged historical records. These decisions are received November 9; actual source-inspection dates are not supplied.

## Remaining work
Complete Outlook source retrieval, apply the accepted technical-disposition criterion to comparable records, and finish the other two selected pilot cases.
