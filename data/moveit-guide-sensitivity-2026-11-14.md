# MOVEit: conditional guide coding and sensitivity result

**Date:** November 14, 2026  
**Case:** CVE-2023-34362  
**Source:** N34362-S013  
**Scenario:** M34362-C-EXT  
**Status:** First-pass sensitivity coding; researcher verification pending

## What this adds

The [source decision](moveit-guide-source-review-2026-11-14.md) explains why the guide is assessed under an explicit data-extortion assumption. The original M34362-C scenario, its 84 records and November 3 summary remain unchanged. These seven records are separate sensitivity observations, not seven additional primary-case records.

The document unit is the guide's relevant material within M34362-C-EXT. All categories are A1 in that scenario. The extortion trigger is assumed for analysis, not confirmed on an asset. The [v0.3 pilot rules](../methodology/pilot-rules-v0.3-draft.md) govern the two independent 0-3 scales, facet distinctions and version treatment.

## Document-category records

Shared fields: CVE-2023-34362; source N34362-S013; scenario M34362-C-EXT; coding date 2026-11-14; source observation 2026-11-14; protocol v0.2 with v0.3 pilot clarifications. A means actionability; E means evidence specificity. Page references use printed PDF page numbers.

| Record ID | Category | Facet | Applicability | A | E | Location | Observation | Rationale |
|---|---|---|---|---|---|---|---|---|
| M34362-EXT-001 | E1 | general exposure assessment | A1 | 2 | 1 | p. 7; Internet-facing vulnerabilities | Scan exposed assets for vulnerabilities. | Specific technique; target-CVE checks absent. |
| M34362-EXT-002 | E2 | investigation | A1 | 2 | 3 | p. 22-23, 26; Steps 4, 6 and 15 | Use logs and anomalies to investigate persistence. | Named observations inform investigation; no complete tool procedure. |
| M34362-EXT-003 | E3 | isolation | A1 | 3 | 0 | p. 21; Steps 1-2 | Disconnect affected systems; use the stated fallback. | Ordered actions and conditions; no isolation-confirmation artifact. |
| M34362-EXT-004 | E4 | credential replacement | A1 | 2 | 0 | p. 26; Step 17 | Reset affected credentials after cleanup. | Sequence specified; completion evidence absent. |
| M34362-EXT-005 | E5 | rebuild and restoration | A1 | 2 | 1 | p. 26-27; Steps 16 and 19 | Rebuild and restore without reinfecting systems. | Named actions; cleanliness verification remains general. |
| M34362-EXT-006 | E6 | patching | A1 | 1 | 0 | p. 7, 26; Patching; step 17 | Update software and address vulnerabilities. | General advice; no target installed-build check. |
| M34362-EXT-007 | E7 | A: administrative disposition | A1 | 2 | 1 | p. 26; Step 18 | A designated authority ends the incident using criteria. | Decision role and criterion stated; evidence requirements general. |

E1 retains general exposure context from Part 1; it is not a MOVEit build-assessment procedure. E3 receives detailed-action credit because the isolation steps provide an ordered physical action and fallback condition; no confirmation evidence is specified. E7 receives A-facet credit for the decision role, not proof that all closure facets are addressed. Its evidence score remains 1 because the criteria are general. The earlier response steps do not supply an explicit, complete evidence acceptance test for that declaration.

## Sensitivity comparison

For this calculation only, carry forward the 84 earlier score pairs and add the seven guide pairs under M34362-C-EXT. The added assumption does not remove any condition of the original scenario. This is a provisional carry-forward calculation, not a claim that the 84 sources were re-retrieved or fully recoded on November 14. It cannot serve as a common-date main-study dataset.

Each A and E maximum is calculated separately. Source lists identify all units attaining that maximum. The comparison has 91 analytical record positions, but only seven new records have been authored; the original 84 are referenced rather than duplicated.

| Category | Original A/E | Extended-scenario A/E | Sources for extended A maximum | Sources for extended E maximum |
|---|---|---|---|---|
| E1 | 2/2 | 2/2 | N34362-S001, N34362-S002, N34362-S003, N34362-S004, N34362-S006, N34362-S009, N34362-S013 | N34362-S001, N34362-S002, N34362-S003, N34362-S004, N34362-S006, N34362-S007, N34362-S009 |
| E2 | 3/3 | 3/3 | N34362-S003, N34362-S004 | N34362-S001, N34362-S002, N34362-S003, N34362-S004, N34362-S006, N34362-S013 |
| E3 | 2/0 | 3/0 | N34362-S013 | N34362-S001, N34362-S002, N34362-S003, N34362-S004, N34362-S005, N34362-S006, N34362-S007, N34362-S008, N34362-S009, N34362-S010, N34362-S011, N34362-S012, N34362-S013 |
| E4 | 3/3 | 3/3 | N34362-S001, N34362-S005 | N34362-S005 |
| E5 | 3/3 | 3/3 | N34362-S001, N34362-S004 | N34362-S001, N34362-S004 |
| E6 | 2/2 | 2/2 | N34362-S001, N34362-S002, N34362-S010, N34362-S011 | N34362-S001, N34362-S002, N34362-S007, N34362-S010, N34362-S011 |
| E7 | 0/0 | 2/1 | N34362-S013 | N34362-S013 |

## Reading the difference

The conditional calculation raises E3 actionability and adds E7 coverage. Other maxima remain unchanged. This shows sensitivity to the incident assumption and eligible source scope; it is not evidence that the original documents changed.

The original E7 result remains 0/0 within its November 3 accessible source set. Under the explicitly extended scenario, E7 is 2/1. The two results should be shown together rather than replacing one with the other. An administrative authority and general criteria are described; specific evidence sufficiency and residual-risk acceptance remain limited.

Part 1's wider relevance to M34362-C is not resolved by this targeted comparison. A later common-policy recoding may assess it as general context, with that choice applied across the pilot. This supplement does not declare the wider source set complete or convert the sensitivity records into primary evidence.

## Checks completed

- The original table contains 84 unique records across 12 source units.
- The supplement contains seven unique sensitivity IDs and one E1-E7 grid.
- All new scores are integers from 0 to 3.
- Both maxima and their source lists were recalculated from the original table and the seven new score pairs.
- No original score was edited. No procedure was executed against a system, and no independent coding agreement is claimed.
