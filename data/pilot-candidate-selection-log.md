# Pilot Candidate Selection Log

**Project:** Beyond the Patch  
**Date:** October 22, 2026  
**Status:** Candidate screening not started; no pilot CVEs selected  
**Methodological basis:** [Pilot Selection Plan](../methodology/pilot-selection-plan.md) and [Research Protocol v0.2](../methodology/research-protocol-v0.2.md)

## Purpose

Document screening decisions and selection reasons for the five-CVE pilot. The pilot tests source retrieval, applicability judgments, operational actionability, evidence specificity, and coding feasibility. It does not estimate the prevalence of guidance gaps across the KEV Catalog.

## Sampling Frame

| Item | Recorded value |
|---|---|
| Official KEV snapshot URL | Not yet recorded |
| Snapshot retrieval date | Not yet recorded |
| Retained snapshot reference | Not yet recorded |
| Pilot source cutoff | Not yet established |
| Candidate-pool construction and boundaries | Not yet documented |
| Target pilot size | Five CVEs |
| Product-category diversity target | At least three categories, where available |
| Selection method | Purposive selection under the existing pilot-selection plan |

## Eligibility Criteria

Candidates must be present in the retained KEV snapshot, have an identifiable affected vendor and product, and provide sufficient product context to assess at least some evidence categories. Official vendor or government/CSIRT sources are screened for availability. Unavailable sources are recorded explicitly; an access failure does not establish an absence of guidance.

Screening decisions distinguish eligibility from final selection. An eligible candidate may remain unselected because another case better contributes to product-category or vulnerability-mechanism diversity. Presumed strength or weakness of guidance is not a selection criterion.

## Candidate Screening Register

| CVE ID | KEV snapshot date | KEV date added | Vendor | Affected product | Product category | Vulnerability mechanism | Vendor source URL | Government or CSIRT source URL | Source access limitations | Product context sufficient | Screening result | Screening reason | Selected for pilot | Selection or nonselection rationale | Screening date |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|

## Selection Conventions

Screening results are Eligible, Ineligible, or Pending. Pilot selection is recorded as Yes, No, or Pending. Pending decisions remain unresolved and do not count as selected cases. Dates use YYYY-MM-DD. A missing discovered URL is recorded as “Not identified during screening”; an identified but inaccessible URL is retained with its access limitation.

Product categories follow the existing plan: network appliance, enterprise server/software, endpoint/client, cloud/service, and identity/access. Each candidate receives one primary category for diversity counting, with overlapping characteristics recorded in its rationale. Additional categories or changes to category definitions are documented before use.

Vulnerability mechanisms and response implications are supported by official source references. Selection rationales describe the contribution of each case to pilot diversity rather than anticipating its eventual scores.

## Selected Pilot Roster

| CVE ID | Product | Primary product category | Vulnerability mechanism | Response implications | Official supporting references | Reason for selection |
|---|---|---|---|---|---|---|

## Selection Review

| Review item | Status |
|---|---|
| Dated KEV snapshot retained | Pending |
| Candidate-pool construction documented | Pending |
| Eligibility and rejection reasons recorded | Pending |
| Five eligible cases selected | Pending |
| At least three product categories represented, or limitation explained | Pending |
| Variation in mechanisms and response implications documented | Pending |
| Selection independent of presumed guidance quality | Pending |
| Source cutoff recorded consistently with the source register | Pending |

## Selection Changes

| Date | CVE affected | Previous decision | Revised decision | Reason | Effect on pilot diversity |
|---|---|---|---|---|---|

## Transition to Pilot Coding

After selection, eligible documents are registered in the [Pilot Source Register](source.md). Coding follows the separate applicability classifications and independent actionability and evidence-specificity scales in the coding guide. Retrieval and coding time, ambiguous cases, and proposed methodological revisions are retained for the pilot evaluation. Pilot findings are not combined with main-study records unless recoded under the frozen protocol.
