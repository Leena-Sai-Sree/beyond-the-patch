# Beyond the Patch 

## Evaluating Evidence Requirements for Closing Known-Exploited Vulnerabilities

**Working research title**
 
| Project detail | Information |
|---|---|
| Researcher | Leena Sai Sree Maridi |
| Role | Graduate Researcher |
| Institution | Saint Louis University |
| School | School for Professional Studies |
| Supervisor | Maria Weber, Program Director of Cybersecurity |
| Appointment period | October 5–December 18, 2026 |
| Research status | Five-case pilot analysis and paper draft prepared; source and coding review ongoing |

## Project Overview

This project examines the relationship between vulnerability patching and
compromise response for known-exploited vulnerabilities.

The research focuses on how official vendor and government guidance helps
defenders address possible exploitation that occurred before remediation.
It will evaluate whether that guidance provides actionable instructions
and supporting evidence requirements for investigation, containment,
credential and session response, recovery, verification, and closure.

The research direction has been approved by the supervisor. The formal
title, research questions, sampling plan, and evaluation framework remain
working proposals subject to refinement.

## Research Problem

Installing a patch does not, by itself, establish whether a system was
compromised before remediation or whether the effects of a compromise
have been addressed.

This study will examine how published guidance supports decisions about
closing a vulnerability case when prior exploitation is possible. It
will distinguish verification that a vulnerability has been remediated
from evidence supporting the resolution of potential compromise.

Known exploitation in the wild does not establish that every affected
asset has been compromised. Response and closure decisions must account
for the circumstances and available evidence for the individual case.

## Purpose

To evaluate the coverage, actionability, and evidence requirements of
official guidance for selected known-exploited vulnerabilities and derive
practical recommendations for defensible closure decisions.

The intended audiences include vulnerability-management teams, Security
Operations Centers (SOC), incident responders, and Governance, Risk, and
Compliance (GRC) practitioners.

## Proposed Research Questions

1. To what extent does official guidance for selected known-exploited
   vulnerabilities provide actionable evidence requirements for
   determining whether remediation can transition to closure after
   possible prior exploitation?
2. What post-exploitation actions are recommended, including
   investigation, containment, credential and session response,
   recovery, and verification?
3. How consistently are these actions and their associated evidence
   requirements communicated across vendors and official cybersecurity
   organizations?
4. What evidence-oriented closure criteria can be derived from the
   reviewed guidance to support vulnerability-management, SOC, and
   GRC workflows?

## Research Design

The pilot uses structured document analysis of official guidance
associated with a defined sample of vulnerabilities from the CISA Known
Exploited Vulnerabilities Catalog.

### Sampling

The current study covers five CVEs selected from the retained October 28, 2026
CISA KEV snapshot: PAN-OS CVE-2024-3400, MOVEit CVE-2023-34362, Outlook
CVE-2023-23397, Print Spooler CVE-2021-34527 and Log4j CVE-2021-44228.

The five-case scope was confirmed on November 21. The earlier proposal to add
up to 20 cases remains a possible extension, rather than a requirement for the
current report. The purposive sample supports comparison of these cases; it
does not represent the full KEV Catalog.

Source observations retain their actual dates from October 28 to November 14.
November 21 is the synthesis date, not a new common source-observation date.

### Sources

Planned source types include:

- Official vendor security advisories
- Government and CSIRT advisories or alerts
- Vendor technical knowledge-base articles and forensic guidance
- Relevant incident-response guidance linked from the official sources

For each source, the study will record its URL, publisher, publication
and update dates where available, access date, and relevant document
sections.

Working source inclusion and linked-document boundaries are documented in
the research protocol and refined during the pilot.

## Proposed Evidence Taxonomy

The following categories form an initial framework for coding guidance.
Definitions and category boundaries will be tested during the pilot.

| Code | Category | Proposed focus |
|---|---|---|
| E1 | Exposure evidence | Affected configuration, asset exposure, and exposure window |
| E2 | Exploitation evidence | Logs, indicators of compromise, and detection methods |
| E3 | Containment evidence | Isolation, access restrictions, and containment verification |
| E4 | Credential and session evidence | Credential rotation, token revocation, and session invalidation |
| E5 | Recovery evidence | Rebuilding, restoration, and system integrity |
| E6 | Verification evidence | Patch confirmation, vulnerability validation, and remediation checks |
| E7 | Closure evidence | Retained records, residual-risk decisions, and closure criteria |

## Coding framework

The working design uses two independent 0–3 ordinal scales, not the
original combined actionability scale.

| Score | Operational actionability | Evidence specificity |
|---|---|---|
| 0 | No relevant action identified | No relevant evidence requirement identified |
| 1 | General recommendation | General evidence/verification reference |
| 2 | Specific operational steps | Named artifacts or observations |
| 3 | Detailed reproducible procedure | Evidence linked to verification or a decision |

Applicability is recorded separately as A1 applicable, A2 not applicable,
A3 conditional, or A4 undetermined. Inapplicable and unresolved cases
are not automatically zero. Scores describe the reviewed source set;
they do not prove the absence of compromise. Do not average these scales.

The [v0.2 protocol](methodology/research-protocol-v0.2.md) defines document-level
coding and source-attributed CVE summaries. The
[v0.3 pilot-rule draft](methodology/pilot-rules-v0.3-draft.md) clarifies
scenario assumptions, source versions and the distinction between technical
response disposition, residual-risk treatment and administrative closure.
It remains a pilot revision pending empirical testing, not a frozen protocol.


The [November 21 analysis plan](methodology/pilot-analysis-plan-2026-11-21.md)
explains the present five-case synthesis and its review limits. It does not
replace the historical protocol or declare the main-study method frozen.

## Planned Quality Checks

- Pilot the taxonomy and scoring scale on five CVEs.
- Retain source references supporting coding decisions.
- Document ambiguous cases and revisions to the codebook.
- Freeze a version of the protocol before the main coding phase.
- Seek independent coding of a subset if a second reviewer is available.
- Select an appropriate agreement measure after the coding design is fixed.
- Report limitations affecting reproducibility and interpretation.

Independent review has not yet been arranged.

## Planned Deliverables

- Research protocol and coding guide
- Literature review and source register
- Five-CVE pilot analysis
- Documented dataset and comparative analysis
- Evidence-oriented closure checklist
- Research paper draft
- Poster or presentation materials

Publication and conference submission will depend on the completed
research, supervisor review, and suitable venue requirements.

## Current Progress

Status updated November 21, 2026:

- The [combined pilot dataset](data/pilot-records-2026-11-21.csv) contains
  259 records: 231 earlier records and 28 new records from four retained sources.
  Original scores and dated series remain identifiable.
- The [five-case comparison](analysis/pilot-comparison-2026-11-21.md) reports
  actionability and evidence specificity separately, with sources for each maximum.
- The [source register](data/pilot-source-register-2026-11-21.md) covers
  37 case and document-version units. Exact raw versions or the KEV snapshot
  are retained for 22 units; 15 lack the exact original raw version.
- The [revision memo](analysis/pilot-revision-memo-2026-11-21.md) applies
  the accepted MOVEit technical-disposition decision, fixes its later sensitivity
  comparison and records a proposed Log4j recovery correction. Seven MOVEit
  extortion-scenario records remain separate from the primary dataset.
- Eight historical PAN-OS captures have been recovered and checked against
  their recorded hashes. The original S010 raw capture remains unavailable.
- A [paper draft](deliverables/research-paper-draft-2026-11-21.md),
  [closure review checklist](deliverables/closure-checklist-2026-11-21.md)
  and [presentation notes](deliverables/presentation-notes-2026-11-21.md)
  are prepared for review.
- The [related-work appraisal](research-notes/related-work-appraisal-2026-11-21.md)
  extends the seed review through targeted reading of three research papers.
  It remains a scoped review, not an exhaustive literature search.
- [Validation checks](analysis/pilot-validation-2026-11-21.json) passed for
  counts, identifiers, score ranges, category grids, calculations and captured-byte
  hashes. These checks do not establish independent coding agreement.

The 28 new rows and proposed Log4j correction still need researcher review.
Outstanding source decisions limit claims that guidance is absent. The
comparison is an exploratory synthesis of dated source sets; the project is
not yet a completed or independently validated study.

See the [November 21 review guide](START-HERE-2026-11-21.md) for the new files
and the [source decisions](research-notes/pilot-source-decisions-2026-11-21.md)
for remaining retrieval and compatibility questions.

## Next Steps

1. Review the 28 new coding records and accept or revise the proposed Log4j
   recovery correction.
2. Resolve outstanding source decisions and apply the category and version
   rules consistently across the earlier records. Record any limits that remain.
3. Finalize the method and findings after the coding review. Independent coding,
   if available, must be reported separately from researcher review.
4. Obtain supervisor feedback on the paper and closure checklist, then revise
   the findings and practical recommendations.
5. Prepare the final presentation, check references and counts, and complete
   submission and institutional evidence retention by December 18.

The [November 21 progress record](weekly-progress/2026-11-21-pilot-review.md)
sets out proposed review periods. Earlier dated records remain the history of
the work completed at those stages.

## Repository Structure

| Location | Purpose |
|---|---|
| README.md | Project overview, status, and proposed research design |
| weekly-progress/ | Dated summaries of completed work, results, obstacles, and next steps |
| research-notes/ | Literature notes, source reviews, and research decisions |
| methodology/ | Protocol, sampling criteria, codebook, and scoring rules |
| data/ | Source register and coding records |
| analysis/ | Comparative analysis and supporting scripts where needed |
| deliverables/ | Research reports, checklist, and presentation materials |

## Research Documentation

GitHub is used to document research progress in line with the supervisor's
acceptance of GitHub or other documentation methods.

Weekly documentation will record completed work, actual hours, results,
obstacles, next steps, and links to verifiable deliverables. Hours and
activities will be recorded contemporaneously, and planned tasks will
be distinguished from completed work.

Records and work products will be retained in accordance with the
Initiative's designated-system requirements.

## Interpretation and Limitations

This study evaluates published guidance within a defined source set.
It does not assess actual compromise on production systems or establish
the effectiveness of a vendor's overall incident response.

Missing guidance in a reviewed document will not automatically be
treated as a vendor failure. Applicability, linked sources, publication
timing, and limitations of the review will be considered.

Any resulting checklist will support documented decision-making rather
than guarantee that an asset is free from compromise.
