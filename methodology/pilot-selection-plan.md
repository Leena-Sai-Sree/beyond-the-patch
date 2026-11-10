# Five-CVE Pilot Selection Plan
**Status:** Five pilot CVEs selected on 2026-10-28; pilot analysis in progress

## Purpose
Test the coding framework rather than prove the research hypothesis. Use the official CISA KEV Catalog as the candidate frame and retain its retrieval date.

## Eligibility
- CVE is present in the dated KEV snapshot.
- Affected product and vendor can be identified.
- At least one publicly accessible official vendor or government/CSIRT source is discoverable, or its unavailability is explicitly recorded for a screened candidate.
- Sufficient product context exists to assess at least some applicability categories.

## Diversity targets
Select five cases spanning at least three product categories (e.g., network appliance, enterprise server/software, endpoint/client, cloud/service, identity/access) where available; vary vulnerability mechanisms and response implications. Do not deliberately choose cases because their advisories appear weak or strong.

## Candidate log columns
`cve_id,kev_snapshot_date,product_category,vulnerability_mechanism,vendor_source_url,government_source_url,screening_result,reason,selected_pilot`

## Selection workflow
1. Download or record the official KEV catalog snapshot and date.
2. Screen a manageable candidate pool against eligibility.
3. Select five cases for diversity, with written reasons.
4. Register all official documents, then time retrieval and coding.
5. Record problems and revise rules before selecting up to 20 additional CVEs.

**Current status (2026-11-03):** The [candidate log](../data/pilot-candidate-selection-log.md) records five selected cases. PAN-OS has an original first-pass worksheet; MOVEit has a dated supplement; the remaining three cases are uncoded. Selection is complete, but the five-case pilot is not.
**Progress update (2026-11-10):** Outlook now has an initial analysis of three official documents and 21 coding records. Its linked-source review continues. Print Spooler and Log4j remain uncoded.
