# MOVEit linked guide: scope and source decision

**Date:** November 14, 2026  
**Case:** CVE-2023-34362  
**Baseline:** Repository commit 2a68037d7f43f84df853fd6f6c869c7e4454814e  
**Decision:** Include the response checklist for a separate data-extortion sensitivity analysis. Do not add its response scores to the unchanged M34362-C dataset.

## Why the scope matters

The [November 13 note](../research-notes/2026-11-13-moveit-guide-screening.md) identified a previously inaccessible guide and left its eligibility unresolved. The guide is an official source, but its response checklist addresses ransomware and data extortion. M34362-C establishes successful exploitation and possible file disclosure for analysis; it does not establish an extortion demand. Treating the checklist as unconditionally applicable would add an incident condition that the case does not contain.

The decision is therefore conditional inclusion, with a separate scenario. This resolves the checklist's use in this follow-up without changing the original scenario or scores. It does not establish that the entire guide is irrelevant to the original case. Its general preventive material remains background here; a wider recoding of that material is outside this targeted response-checklist update.

## Source register addendum

| Field | Recorded value |
|---|---|
| Source-version ID | N34362-S013 |
| Title | StopRansomware Guide |
| Official delivery | [FBI-hosted PDF](https://www.ic3.gov/CSA/2023/231019.pdf) |
| Publisher group | CISA, MS-ISAC, NSA and FBI |
| Edition | October 2023; version 3.0 in the change record |
| Observation date | 2026-11-14 |
| Retrieval timestamp, UTC | 2026-11-14T18:08:51.174621+00:00 |
| File size | 971,648 bytes |
| PDF length | 31 pages |
| SHA-256 | 9ab2b1c6a0e2356d4fe9687d743362a58df76799c6bf0908c181f16d4da2f62d |
| Retention | Complete PDF, extracted text and manifest retained in the local task evidence directory |
| Evidence location | moveit-update-2026-11-14/private-evidence/ relative to the shared workspace; not a public repository path |
| Relevant locations | Introduction, p. 3; exposure context, p. 7; response checklist, pp. 21-27 |
| Scoring status | Seven sensitivity records; researcher verification pending |

The new PDF hash matches the November 13 download hash. This establishes agreement between the two downloaded files, not equivalence with the earlier May 2023 edition.

## Link and date boundaries

The Resources section of the [official AA23-158A bulletin](https://content.govdelivery.com/accounts/USDHSCISA/bulletins/35ecb08) links to the joint ransomware guide family. The FBI PDF is an official alternate delivery of a later edition. This is a documented family/version substitution for the follow-up; it is not a claim that the June 2023 bulletin originally linked to the October edition.

The November 3 timeout remains part of the historical record. The November 14 review is a new observation series, separate from the October 28 selection frame and earlier coding. No new KEV snapshot was substituted.

## Sensitivity scenario M34362-C-EXT

Retain the affected Windows MOVEit Transfer 2023.0.0 deployment and successful exploitation assumptions of M34362-C. Add one analytical condition: the response concerns a data-extortion incident after the unauthorized disclosure. No file encryption, MOVEit Cloud integration or domain-wide compromise is assumed. This is a hypothetical extension, not an observed incident or a revision of the baseline.

The guide's introduction includes extortion without encryption. Its checklist is assessed within that stated scope. Encryption-specific procedures, decryptor advice, cloud-only steps and assumed domain-wide compromise are excluded. The extortion condition is established by assumption only in M34362-C-EXT; it remains unresolved in the baseline.

All E1-E7 categories are A1 within the extended scenario. Source eligibility is conditional on that scenario; it is not a reason to assign seven zeros in the original case or to change category applicability merely because a source is silent.

## Interpretation

Step 18 on page 26 explicitly concerns an authority ending an incident. That differs from instructions that only order cleanup and service reopening. The new coding credits administrative disposition, while retaining the limited specificity of its evidence requirement. It does not infer a fully specified residual-risk decision or a guarantee of non-compromise.

The [coding supplement](moveit-guide-sensitivity-2026-11-14.md) retains both the baseline and the sensitivity result. It does not pool their assumptions or observation dates. Final inclusion of broader generic material in the main comparison still needs a consistent policy across cases.
