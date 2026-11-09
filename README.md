# Beyond the Patch

## Evaluating evidence requirements for closing known-exploited vulnerabilities

Working research title. Updated November 9, 2026.

| Project | Details |
|---|---|
| Researcher | Leena Sai Sree Maridi |
| Institution | Saint Louis University, School for Professional Studies |
| Supervisor | Maria Weber, Program Director of Cybersecurity |
| Appointment | October 5–December 18, 2026 |
| Stage | Five-case pilot in progress |

## Research question
Installing a patch addresses a vulnerability, but it does not explain what happened before the patch was installed. If an attacker had already gained access, investigation and recovery may require different evidence from a software-version check.

This project examines how official vendor and government guidance addresses that problem. It asks what response actions are described, how clearly they can be carried out, and what evidence supports a decision to close the case. The research direction has supervisor approval; the final study design will follow the completed pilot.

The study addresses four questions:

1. Which response and closure activities are covered by the reviewed guidance?
2. How much operational detail and verification evidence do the instructions provide?
3. Where do sources leave questions unanswered, use ambiguous wording or give different advice for comparable circumstances?
4. What practical closure criteria can be drawn from the documented findings?

## Method
The study uses structured document analysis. Cases are selected from a dated copy of the CISA Known Exploited Vulnerabilities Catalog. Each eligible document is assessed against a stated product and response scenario, with its version, relevant sections and coding rationale recorded.

The five pilot cases are PAN-OS, MOVEit, Outlook, Print Spooler and Log4j. They cover different deployment types and response needs. The shortlist is purposive, so the findings cannot establish how common guidance problems are across the full KEV Catalog or rank vendors. Up to 20 additional cases may follow, depending on the time required to complete and review the pilot.

Official vendor, government and recognized CSIRT documents form the scored source set. Linked procedures are assessed separately when they meet the inclusion rules. Access failures, later revisions and edition differences are recorded because they affect what can be concluded from the available text.

The [protocol](methodology/research-protocol-v0.2.md), [coding guide](methodology/coding-guide-v0.2.md) and [pilot rules](methodology/pilot-rules-v0.3-draft.md) describe the method. The pilot remains open while the remaining cases and source searches are completed.

## What is coded
| Code | Category | Main concern |
|---|---|---|
| E1 | Exposure | Affected configuration and exposure window |
| E2 | Exploitation | Investigation methods, logs and indicators |
| E3 | Containment | Isolation and access restrictions |
| E4 | Credentials and sessions | Secret protection, replacement, revocation and session invalidation |
| E5 | Recovery | Cleanup, rebuilding, restoration and integrity |
| E6 | Remediation verification | Checking a fix or mitigation |
| E7 | Closure | Technical disposition, residual risk and authorization |

Each document-category record receives two separate scores:

| Score | Operational actionability | Evidence specificity |
|---|---|---|
| 0 | No relevant action identified | No relevant evidence identified |
| 1 | General recommendation | General reference to evidence or verification |
| 2 | Specific steps | Named artifacts or observations |
| 3 | Detailed procedure | Evidence connected to verification or a decision |

Applicability is assessed separately. An irrelevant category or an unresolved condition is not treated as a missing instruction. The scores describe the guidance reviewed, rather than proving that a system is free from compromise. Separate maxima retain their source references; the scales are not averaged into a vendor score.

## Progress
| Pilot case | Document-category records | Current position |
|---|---|---|
| PAN-OS CVE-2024-3400 | 70 | Source review completed; historical HTML renderings remain unavailable |
| MOVEit CVE-2023-34362 | 84 | Source review completed; current technical-disposition score is recorded in the revision file |
| Outlook CVE-2023-23397 | 21 | Three primary documents coded; linked-source collection continues |
| Print Spooler CVE-2021-34527 | 0 | Starting source registered |
| Log4j CVE-2021-44228 | 0 | Starting source registered |
| Total | 175 | The five-case pilot is not yet complete |

The [coding rationale](research-notes/2026-11-09-review-checklist.md) explains the main interpretations. The [decision record](research-notes/2026-11-09-researcher-decisions.md) explains the design choices and review coverage. The [weekly update](weekly-progress/2026-11-09-weekly-progress.md) links the new outputs.

The [repository audit](analysis/2026-11-09-full-audit.md) records corrections to inconsistent wording and older status statements. Automated checks cover the data grids, source references, summaries, revisions, snapshot identity and local links. They check internal consistency; source interpretation and technical effectiveness require different evidence.

## Next work
1. Finish Outlook's eligible linked-source review.
2. Complete Print Spooler and Log4j coding using the same scenario, source-date and category rules.
3. Complete the pilot revision memo and full-text literature review.
4. Set the main-study scope from available capacity and measured effort, then freeze the method.
5. Produce the comparative findings, closure checklist, paper and agreed presentation materials.

The [roadmap](deliverables/research-roadmap-2026-11-03.md) sets out the proposed sequence through December 18.

## Repository guide
| Folder | Contents |
|---|---|
| methodology/ | Protocol, selection plan and scoring rules |
| data/ | Source registers, coding records and score revisions |
| research-notes/ | Source comparisons, literature notes and reasoning |
| analysis/ | Validation script, results and audit reports |
| weekly-progress/ | Dated work records and next steps |
| deliverables/ | Change summary, roadmap and later research outputs |

## Preparation, review and limits
AI assistance and subsequent researcher review are described in the [research provenance statement](methodology/research-provenance.md). Original coding and later decisions remain separately traceable. Independent second-coder results are not available.

Historical PAN-OS HTML captures are absent from the repository, so current pages cannot authenticate their earlier contents. Outlook retrieval and the remaining pilot cases are unfinished. Findings will be limited to the reviewed documents and stated scenarios; a closure checklist will support decisions rather than guarantee that an asset is uncompromised.
