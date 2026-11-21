# Pilot data dictionary

The main CSV contains 259 document-category records. A row is an analytical observation about guidance, not a system, incident, participant or independent trial. The 37 case and document-version units include shared KEV material and related editions; they are not 37 independent publishers.

| Field | Meaning |
|---|---|
| record_id | Stable identifier within its original or new series |
| cve and case_id | Vulnerability and short case label |
| scenario | Defined analytical response scenario |
| source_id | Case-specific source identifier; join with case_id to the source register |
| category | E1 exposure, E2 investigation, E3 containment, E4 identities, E5 recovery, E6 verification or E7 disposition |
| applicability | A1 in these stipulated primary scenarios; source silence does not make a category inapplicable |
| actionability | Independent ordinal score from 0 to 3 |
| evidence_specificity | Independent ordinal score from 0 to 3 |
| facet | Narrow function where recorded; a generic category label does not establish full facet coverage |
| section | Original location where supplied; some earlier records retain the location in their rationale |
| rationale | Source-specific interpretation and limits |
| series | Original observation/coding series, or the new coding date with retained-capture date |
| original_actionability and original_evidence_specificity | Earlier values before any decision applied in this derived table |
| decision_ids | Join to the decision log; blank means no separately recorded numerical decision was applied |
| record_origin | Historical record or new retained-text coding |
| input_file | Location in the original workspace and private input archive; not a claim that the path exists on GitHub |
| review_status | What was checked and whether researcher acceptance is still required |

The source register separates observation dates from the November 21 synthesis date. Its exact_raw_capture field concerns the version originally scored. A later page at the same URL does not qualify as that original version. A retained hash identifies bytes; it does not establish that the page was complete or the coding was correct.

The category-summary CSV calculates actionability and evidence maxima separately and lists all sources attaining each. Sources attaining a zero maximum are included for traceability; their presence is not corroboration of a broader absence claim.

The sensitivity files contain seven separate MOVEit records and a recalculation with the accepted primary scores. Do not append those seven rows to the primary dataset without changing the scenario definition and identifying the resulting analysis.
