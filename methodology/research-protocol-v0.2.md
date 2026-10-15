# Beyond the Patch — Research Protocol v0.2

**Date:** 2026-10-15  
**Status:** Working protocol  
**Researcher:** Leena Sai Sree Maridi, Saint Louis University

## 1. Objective and questions
Identify and characterize recurring **gaps**, **ambiguities**, and **inconsistencies** in publicly accessible official guidance concerning possible prior exploitation and evidence-supported closure of selected CISA Known Exploited Vulnerabilities (KEV).

1. Which applicable response and closure evidence categories are covered by eligible guidance?
2. How operationally actionable and evidence-specific are the instructions?
3. What documented gaps, ambiguities, and potentially meaningful differences occur within and across CVEs?
4. What provisional closure-decision checklist can be derived without asserting that patching proves absence of compromise?

## 2. Design and scope
Structured qualitative document analysis, supplemented by descriptive counts. The **sampling frame** is a dated snapshot of CISA's KEV Catalog; record the download URL, snapshot date, and source cutoff. Target **5 pilot CVEs + up to 20 additional CVEs**, subject to feasibility. This is a purposive, nonrepresentative sample: do not generalize prevalence estimates to all KEV entries.

Only publicly accessible official sources are eligible: affected-product vendor advisories and vendor technical/forensic guidance, government cybersecurity agencies, and recognized national or sector CSIRTs. Official guidance linked from an eligible source is included only if it contains relevant CVE-specific or explicitly referenced incident-response instructions. Record links and source boundaries; do not follow unlimited link chains.

Exclude commercial summaries, media coverage, personal blogs, unsupported claims, and documents published after the frozen source cutoff. Third-party material may be used as discovery leads but not scored. Record unavailable documents; do not interpret absence of access as absence of guidance.

## 3. Units of analysis
**Primary coding unit:** one *document × CVE × evidence category (E1–E7)* record. If a document covers multiple CVEs, create separate records for each relevant CVE. Capture exact section/location and a short paraphrase, not long copyrighted passages. A document may contain several passages supporting one record.

**Secondary synthesis unit:** *CVE × evidence category*. Aggregate eligible documents for the same CVE, preserving which source provided which instruction. Do not infer that an individual advisory must cover all seven categories.

## 4. Sampling procedure (working)
1. Freeze and save a dated KEV Catalog snapshot.
2. Restrict to entries added on or before the snapshot date and with an identifiable affected vendor/product and CVE.
3. Create a candidate register with product category, vulnerability class, KEV date, official vendor link, and government/CSIRT source availability.
4. Purposefully select five pilot cases spanning at least three product categories and a mix of likely post-exploitation implications. Do not select based on presumed documentation gaps.
5. After timing the pilot, select up to 20 additional cases with a documented diversity matrix and reasons for inclusion/exclusion.
6. Maintain a selection log including candidates rejected and why.

The sampling period, product-category definitions, and precise diversity quotas will be frozen after the pilot; do not present these as final.

## 5. Source retrieval and provenance
For every document capture: source_id, CVE, publisher, document title, canonical URL, document type, original publication date, last update date if shown, access date, source-cutoff eligibility, relevant section/heading, and archived/saved reference where permitted. Record whether the source is a vendor, government, or CSIRT document. A vendor advisory's linked generic guidance is not automatically CVE-specific; annotate its relationship.

If a page is updated after the cutoff, document the uncertainty about historical content; do not silently treat the current page as the historical version.

## 6. Evidence taxonomy
- **E1 Exposure:** affected configurations, asset reachability, exposure period.
- **E2 Exploitation:** logs, indicators, detection/investigation procedures.
- **E3 Containment:** isolation, access restrictions, verification of containment.
- **E4 Credentials/sessions:** credential rotation, token/session invalidation, related checks.
- **E5 Recovery:** rebuilding, restoration, persistence removal, integrity assessment.
- **E6 Remediation verification:** patch/mitigation confirmation and vulnerability validation.
- **E7 Closure:** documentation, unresolved uncertainty, residual-risk disposition, approval or closure criteria.

## 7. Applicability and scoring
Applicability is assessed **independently** of source coverage: A1 Applicable; A2 Not applicable; A3 Conditional (record trigger and whether established); A4 Undetermined (record why). Do not treat A2 as a zero or include it in applicable-category denominators. A3 without a confirmed trigger and A4 are analyzed separately, not automatically counted as gaps.

For A1 categories, record two separate ordinal scores for each document-category record:

| Score | Operational actionability | Evidence specificity |
|---|---|---|
| 0 | No relevant action identified | No relevant evidence requirement identified |
| 1 | General action/concept | General evidence or verification mention |
| 2 | Specific steps or procedures | Identifies artifacts, observations, or evidence sources |
| 3 | Detailed reproducible procedure with relevant parameters or sequence | Identifies artifacts and explains their use in verification/decision-making |

Score 0 means **not identified in the eligible reviewed source**, not that no guidance exists elsewhere. A 3 in evidence specificity does not prove the evidence is sufficient to establish non-compromise. Quote/locate the supporting passage and record rationale. For A2, A3-unresolved, and A4 use `NA` for numerical scores unless explicit conditional guidance is separately annotated; do not force a 0.

## 8. Synthesis and comparisons
At CVE level, preserve source-level scores and report the highest observed coverage **with source attribution**, rather than summing ordinal scores. Flag where a relevant category has no identified guidance in the *defined reviewed source set*, with applicability and search limitations attached. Distinguish:
- **Coverage gap:** applicable category with no relevant identified instruction/evidence within the defined source set.
- **Ambiguity:** instruction exists but scope, trigger, execution, or evidence expectations are unclear.
- **Potential inconsistency:** apparently conflicting or materially different recommendations for a comparable scenario; investigate differences in product version, time, threat model, and publication date before labeling a substantive inconsistency.

Report counts using explicit denominators, e.g., applicable CVE-category pairs, and do not calculate inferential confidence intervals for a purposive sample. Preserve both document-level and CVE-level comparisons.

## 9. Pilot and quality control
Use five CVEs to test retrieval time, category boundaries, conditional cases, score anchoring, and source attribution. Record coding memos and all revisions in a change log. Recode pilot cases under the frozen protocol before combining with main-study records. If a second coder is available, independently code a subset and report agreement appropriate to the final design; otherwise disclose single-coder limitations and perform a delayed self-recode of a small subset without calling it independent agreement.

## 10. Ethics, limits, and closure
Use only public documentation; do not exploit vulnerabilities or inspect production assets. This study evaluates *published guidance*, not actual vendor competence or asset compromise. Closure is analyzed as (1) remediation verified, (2) compromise-response disposition documented, and (3) administrative closure authorized. Uncertainty and residual-risk acceptance can be documented without claiming proof of no compromise.

## 11. Open protocol items
Freeze the KEV snapshot date and document cutoff, final product-category strata, treatment of generic linked guidance, precise conditional scoring examples, aggregation summaries, and full sampling roster **before main coding**. Supervisor review is desirable, but empirical completion is not claimed.

## 12. Deliverables and sequencing
1. Source register and candidate selection log.
2. Coding guide v0.2 and five-CVE pilot roster.
3. Five-CVE pilot records and revision memo.
4. Frozen protocol and up-to-20-CVE main analysis.
5. Descriptive findings, evidence-oriented checklist, paper draft, and poster.
