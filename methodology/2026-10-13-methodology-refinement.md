# Research Methodology Refinement and Decision Log

**Project:** Beyond the Patch: Evaluating Evidence Requirements for Closing Known-Exploited Vulnerabilities  
**Date:** October 13, 2026  
**Researcher:** Leena Sai Sree Maridi  
**Institution:** Saint Louis University, School for Professional Studies  
**Supervisor:** Maria Weber, Program Director of Cybersecurity  
**Phase:** Initial planning and conceptual analysis  
**Status:** Working decisions; subject to supervisor review and pilot validation

## Purpose and work discussed

Reviewed the initial research blueprint and refined the proposed research contribution, coding framework, applicability treatment, sample size, and interpretation of closure. The aim was to improve methodological clarity and feasibility before pilot CVE selection and empirical analysis.

## Methodological decisions

### 1. Primary research contribution

The preferred direction is to **identify and characterize recurring gaps, ambiguities, and inconsistencies** in official vendor and government guidance relevant to evidence-supported closure after possible prior exploitation. The literature review must establish whether this constitutes a distinct contribution.

Working distinctions:
- **Gap:** Relevant action or evidence guidance is not identified within the defined reviewed source set.
- **Ambiguity:** Guidance exists, but the required action, applicability, or evidence is insufficiently clear.
- **Inconsistency:** Documented differences between comparable guidance sources or cases. Differences justified by vulnerability characteristics are not automatically deficiencies.

### 2. Separate coding dimensions

Agreed to test two independent 0–3 scales rather than combining operational actionability and evidence specificity into one score.

| Score | Operational actionability | Evidence specificity |
|---|---|---|
| 0 | No relevant action identified | No relevant evidence requirement identified |
| 1 | General recommendation | General reference to evidence or verification |
| 2 | Specific operational instructions | Relevant evidence sources or artifacts identified |
| 3 | Detailed executable or reproducible procedure | Artifacts identified and linked to verification or a decision |

These anchors are provisional and will be tested for coding consistency during the pilot.

### 3. Applicability categories

Four provisional applicability statuses will be coded separately from actionability and evidence specificity.

| Code | Status | Working interpretation |
|---|---|---|
| A1 | Applicable | Relevant to the defined vulnerability and response scenario |
| A2 | Not applicable | Not relevant under documented criteria |
| A3 | Conditional | Relevance depends on stated circumstances |
| A4 | Undetermined | Insufficient information to determine applicability |

Example: If credential/session response is applicable but the reviewed guidance does not address it, applicability can be coded A1 while the relevant actionability and evidence scores are 0. Rationales should be recorded for applicability judgments.

### 4. Sample size

Revised the **proposed** scope from 30–50 CVEs to **25 CVEs total**, consisting of **five pilot CVEs and 20 main-study CVEs**, subject to feasibility and supervisor review. Pilot cases should remain analytically separate unless recoded under the frozen main-study protocol. Selection criteria, source boundaries, and cutoff dates must be defined before the main analysis. The study will not claim statistical representativeness without a suitable sampling design.

### 5. Closure definitions

Agreed to distinguish:
1. **Technical remediation verification:** Evidence that the vulnerability has been addressed or appropriately mitigated.
2. **Compromise-response disposition:** Documentation of investigation, relevant response actions, evidence limitations, and unresolved uncertainty.
3. **Administrative case closure:** Documented disposition, residual-risk treatment, and required authorization.

These are analytical distinctions, not a claim that every organization uses separate tickets or workflows. Closure under uncertainty may be defensible when limitations, risk, and authorization are documented.

## Updated working design

| Component | Working position |
|---|---|
| Objective | Identify recurring gaps, ambiguities, and inconsistencies in official closure-related guidance |
| Method | Structured document analysis |
| Sampling frame | CISA Known Exploited Vulnerabilities Catalog |
| Sample target | 25 CVEs (5 pilot + 20 main), provisional |
| Evidence taxonomy | E1–E7 retained for pilot testing |
| Coding | Two independent 0–3 dimensions and four applicability statuses |
| Closure model | Remediation verification; compromise-response disposition; administrative closure |
| Intended outputs | Comparative findings and evidence-oriented closure checklist |

## Open methodological questions

- Whether the coding unit should be an individual guidance document or an aggregated CVE-level guidance set.
- Source aggregation, linked-document boundaries, publication/update cutoff, and conditional guidance rules.
- Detailed coding examples and treatment of missing, inapplicable, and undetermined guidance.
- Pilot CVE selection criteria and product/vulnerability coverage.
- Literature review to establish the research gap.
- Feasibility of independent coding of a subset.

## Next steps

1. Draft research protocol version 0.2 reflecting the working decisions.
2. Define the coding unit and source-register fields.
3. Establish inclusion/exclusion and sampling criteria, then propose five pilot CVEs.
4. Begin a focused related-work review.
5. Review refinements with the supervisor before freezing the main-study protocol.

## Documentation integrity

This entry records methodological discussion and provisional decisions made on **October 13, 2026**. It does **not** claim that the literature review, CVE selection, pilot, empirical analysis, validation, or supervisor approval of these specific refinements was completed today. Record actual time spent separately using contemporaneous time records.
