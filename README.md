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
| Research status | Five-case pilot in progress; PAN-OS, MOVEit and Outlook first-pass records available |

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

## Proposed Research Design

The study will use structured document analysis of official guidance
associated with a defined sample of vulnerabilities from the CISA Known
Exploited Vulnerabilities Catalog.

### Sampling

The initial plan is to:

- Conduct a five-CVE pilot to test the evaluation framework.
- Target five pilot CVEs plus up to 20 additional CVEs, subject to pilot
  timing, source availability and feasibility within the appointment period.
- Include multiple product categories using documented selection criteria.
- Define the sampling period, source cutoff date, and inclusion and
  exclusion criteria before the main analysis.

The final sample size and selection procedure have not yet been fixed.

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

Status updated 2026-11-09:

- Five pilot cases remain selected from the dated KEV snapshot.
- PAN-OS has 70 historical first-pass records; MOVEit has 84 first-pass records.
- [Outlook](data/outlook-pilot-2026-11-09.md) now has 21 records across three primary documents. Linked-source retrieval remains incomplete.
- Print Spooler and Log4j retain starting sources and are not yet coded.
- The repository now uses one authoritative location for each current document. Original PAN-OS provenance and scores are preserved.
- The [researcher decision register](research-notes/2026-11-09-researcher-decisions.md) records reported source review of 154 historical records and accepted highlighted scores. Follow-up decisions accept MOVEit E7-T 2/3 and the Outlook preservation/recovery split. The historical recovery-source version remains unavailable.
- The [combined review checklist](research-notes/2026-11-09-review-checklist.md) links the passages behind those decisions.
- The [initial literature matrix](research-notes/related-work-initial-review.md) remains a seed review, not a completed full-text appraisal.

The five-case pilot and main analysis remain unfinished. Dataset counts describe document-category records, not independent incidents. Reported source review is distinct from independent second-coder agreement and historical source authentication.

## Next Steps

1. Apply the accepted E7-T interpretation consistently to comparable records; preserve dated original scores.
2. Complete Outlook's eligible source and direct-link retrieval.
3. Code Print Spooler and Log4j; record actual personal work time.
4. Complete the pilot revision memo and freeze a coherent method before the main analysis.
5. Set the main sample size from available capacity and measured effort; complete related-work appraisal.
6. Produce source-traceable findings, closure checklist and agreed final deliverables.

See [this week's progress](weekly-progress/2026-11-09-weekly-progress.md), the [current validation report](analysis/2026-11-09-validation-report.md), and the [delivery roadmap](deliverables/research-roadmap-2026-11-03.md).

## Planned Repository Structure

| Location | Purpose |
|---|---|
| README.md | Project overview, status, and proposed research design |
| weekly-progress/ | Dated summaries of completed work, results, obstacles, and next steps |
| research-notes/ | Literature notes, source reviews, and research decisions |
| methodology/ | Protocol, sampling criteria, codebook, and scoring rules |
| data/ | Source register and coding records |
| analysis/ | Comparative analysis and supporting scripts where needed |
| deliverables/ | Research reports, checklist, and presentation materials |

Current documents are stored in the directories above; historical revisions are retained in Git.

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
