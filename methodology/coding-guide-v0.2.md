# Beyond the Patch — Coding Guide v0.2
**Date:** 2026-10-15 
**Status:** Working draft;

## Coding sequence
1. Verify CVE is in the frozen KEV snapshot.
2. Register each eligible official document with URL, dates, and section references.
3. For each document and E1–E7 category, determine applicability from the CVE scenario (not merely whether the document mentions it).
4. For A1, assign independent 0–3 actionability and evidence-specificity scores; provide passage location and rationale.
5. For A3, record the condition and whether established; use NA for unconditional scoring when the condition is unresolved.
6. For A2 or A4, use NA scores and explain.
7. Compare documents within a CVE; distinguish apparent conflicts from differences caused by version, timing, or context.
8. Synthesize at CVE-category level, retaining document provenance.

## Applicability decisions
- A1 Applicable: the category is relevant to the defined affected system/exploitation scenario.
- A2 Not applicable: a documented reason establishes irrelevance; do not use just because a source is silent.
- A3 Conditional: relevance depends on a stated or reasonably documented trigger; record the trigger, source, and status.
- A4 Undetermined: insufficient facts to classify; record missing facts.

## Score anchors (independent)
| Score | Actionability | Evidence specificity |
|---|---|---|
| 0 | No action in eligible reviewed document | No artifact/evidence requirement in document |
| 1 | Broad instruction such as 'investigate' | Generic 'check logs' or 'verify' |
| 2 | Named action steps or technique | Names a log, artifact, result, or observation |
| 3 | Reproducible procedure (steps, conditions, relevant parameters) | Names evidence and connects it to a verification or disposition decision |

### Hypothetical examples — NOT study findings
- 'Apply the update': E6 actionability 1, evidence specificity 0, assuming no other detail in the document.
- 'Run the vendor's version-check command and retain its output to confirm the fixed build': E6 actionability 3 if the command is actually supplied; evidence specificity 3 if output and its decision meaning are specified.
- 'If exploitation is suspected, revoke all affected tokens': E4 may be A3, with trigger 'suspected exploitation'; record the condition separately.

## Gap, ambiguity, inconsistency memo fields
`type | CVE | category | source_ids | observed wording (brief paraphrase) | comparability factors checked | conclusion | limitations`

## Data quality rules
Never infer absence from a broken URL; log inaccessible source. Never score a non-official source. Never assign 0 to inapplicable categories. Do not average ordinal scores. Use consistent `YYYY-MM-DD` dates. Preserve original links and section locations. Flag updated web pages whose historical versions are unavailable.
