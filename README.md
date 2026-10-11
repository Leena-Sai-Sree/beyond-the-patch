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
| Research status | Initial planning and conceptual analysis |
| Repository visibility | Private |

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
- Consider a main sample of 30–50 CVEs, subject to pilot findings,
  source availability, and feasibility within the appointment period.
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

Source inclusion and linked-document boundaries will be defined in the
research protocol.

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

## Proposed Actionability Scale

| Score | Label | Working definition |
|---|---|---|
| 0 | Not identified | Relevant guidance was not identified within the defined source set |
| 1 | Mentioned | The action or concept is referenced without sufficient operational detail |
| 2 | Actionable | Operational instructions are provided without explicit supporting evidence or verification requirements |
| 3 | Actionable and evidence-oriented | Operational instructions identify artifacts or observations supporting verification |

A score of 0 will describe the reviewed source set, rather than establish
that relevant guidance does not exist elsewhere.

The coding unit, treatment of conditional or inapplicable guidance,
source aggregation rules, and scoring examples will be specified before
the main analysis.

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

Initial work has included:

- A supervisor meeting and approval of the research direction
- Initial conceptual analysis of patch verification, possible prior
  exploitation, and closure evidence
- Preparation of a draft research blueprint
- Creation of this private repository

The draft blueprint proposes research questions, seven evidence
categories, an actionability scale, and a pilot-to-main-study workflow.

These activities establish the starting research plan. Empirical
findings, a completed pilot, and a validated evaluation framework are
not claimed at this stage.

## Next Steps

1. Refine the scope and operational definitions.
2. Document sampling and source-selection criteria.
3. Prepare the source register and coding worksheet.
4. Select five pilot CVEs using the documented criteria.
5. Conduct the pilot and revise the protocol.
6. Review feasibility and confirm the main-study scope.

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

Folders will be created as their contents are developed.

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

## Sharing

This repository remains private during research development.
External sharing and public release will follow applicable supervisor
and institutional requirements.
