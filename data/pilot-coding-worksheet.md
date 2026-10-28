# Pilot Coding Worksheet

**Project:** Beyond the Patch  
**Date:** October 28, 2026  
**Status:** Coding instrument prepared; no pilot coding completed  
**Methodological basis:** [Research Protocol v0.2](../methodology/research-protocol-v0.2.md) and [Coding Guide v0.2](../methodology/coding-guide-v0.2.md)

## Purpose

Record document-level applicability judgments, operational actionability, and evidence specificity for the five-CVE pilot. Preserve supporting source locations and coding rationales before producing CVE-level summaries.

## Associated Records

- [Pilot Source Register](source.md)
- [Pilot Candidate Selection Log](pilot-candidate-selection-log.md)
- [Pilot Selection Plan](../methodology/pilot-selection-plan.md)

## Evidence Categories

| Code | Category |
|---|---|
| E1 | Exposure |
| E2 | Exploitation |
| E3 | Containment |
| E4 | Credentials and sessions |
| E5 | Recovery |
| E6 | Remediation verification |
| E7 | Closure |

## Applicability

| Code | Classification | Numerical scoring |
|---|---|---|
| A1 | Applicable | Assign both scores independently |
| A2 | Not applicable, with documented justification | NA |
| A3 | Conditional | Record the trigger and its status; unresolved conditions receive NA |
| A4 | Undetermined | NA; record the missing information |

Applicability concerns the defined CVE scenario and is assessed independently of whether a document discusses the category. Source silence alone does not establish nonapplicability.

For A3 records with an established trigger, document the evidence establishing the trigger and score only the guidance relevant to that condition. Conditional findings remain identifiable in synthesis.

## Independent Scoring Scales

| Score | Operational actionability | Evidence specificity |
|---|---|---|
| 0 | No relevant action identified | No relevant evidence requirement identified |
| 1 | General action or concept | General reference to evidence or verification |
| 2 | Specific steps or procedures | Identifies artifacts, observations, or evidence sources |
| 3 | Detailed reproducible procedure with relevant parameters or sequence | Identifies evidence and explains its use in verification or decision-making |

The two scores measure separate dimensions. Evidence specificity of 3 does not establish that the evidence proves absence of compromise.

## Document-Level Coding

One record represents one document version × CVE × evidence category. Source IDs refer to included documents in the source register.

| Record ID | CVE | Source ID | Category | Applicability | Applicability rationale | Conditional trigger and status | Actionability | Evidence specificity | Supporting section or page | Brief evidence paraphrase | Score rationale | Limitations | Coder | Coding date | Protocol version |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|

A score of 0 records an assessed absence within an eligible reviewed document. An empty cell means coding is incomplete. NA means numerical scoring is not applicable under the stated applicability rule. These values are not interchangeable.

Inaccessible content and unresolved source eligibility do not receive scores. Such limitations remain in the source register.

## CVE-Level Synthesis

One synthesis record represents one CVE × evidence category.

| CVE | Category | Applicability summary | Highest actionability | Supporting source IDs | Highest evidence specificity | Supporting source IDs | Conditions and limitations | Ambiguities or potential conflicts | Synthesis rationale |
|---|---|---|---|---|---|---|---|---|---|

The two maxima are calculated separately from eligible scored records. They may originate from different documents and do not constitute an integrated response procedure. Ordinal scores are not averaged.

Unresolved conditional and undetermined records remain separate from unconditional findings. Counts identify their denominators and exclude nonapplicable categories from applicable-category denominators.

## Analytical Memos

| Memo ID | CVE | Category | Type | Source IDs | Observed guidance | Context checked | Interpretation | Limitations |
|---|---|---|---|---|---|---|---|---|

Memo types are coverage gap, ambiguity, or potential inconsistency. Potential inconsistencies require examination of product version, publication timing, response scenario, and other relevant differences before a substantive conflict is concluded.

## Pilot Feasibility Records

| CVE | Retrieval minutes | Coding minutes | Synthesis minutes | Category-boundary issues | Conditional-scoring issues | Proposed revision |
|---|---|---|---|---|---|---|

Time entries reflect actual recorded work. Missing time records remain missing rather than being reconstructed as precise measurements.

## Coding Review and Revisions

| Date | Record IDs | Review type | Issue identified | Decision | Recode required | Completion status |
|---|---|---|---|---|---|---|

Independent coding and delayed self-recoding are recorded distinctly. Methodological revisions retain their rationale and affected records. Pilot cases must be recoded under the frozen protocol before inclusion with main-study results.
