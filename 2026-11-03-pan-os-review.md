# PAN-OS targeted coding review
Date: 2026-11-03  
Case: CVE-2024-3400  
Status: AI-assisted targeted source review; original 70 records preserved; human verification pending

## Scope and evidence limitation
Reviewed the repository's protocol, all 70 table records and seven synthesis rows structurally, plus targeted passages in the nine accessible live source pages listed below. Rechecked the target KEV entry in the retained JSON. This is not a fresh independent 70-record human recode. Original HTML captures referenced in source.md are absent from this checkout; their historical contents could not be inspected or authenticated against the live pages. No claim is made that current pages reproduce October 28 content.

The key recommendation is to adopt [pilot rules v0.3](../methodology/pilot-rules-v0.3-draft.md) as a draft and complete researcher review before main coding.

## Source and record review
All links below were accessed on 2026-11-03. Current renderings use N3400 identifiers to distinguish them from historical source versions.

| New version ID / original | Source and reviewed location | Assessment / action |
|---|---|---|
| N3400-S001 / S001 | [Vendor advisory](https://security.paloaltonetworks.com/CVE-2024-3400), exposure, solution, mitigation and FAQ | Exposure checks and investigation instructions support the existing interpretations. The mitigation-test FAQ supports E3/E6 verification credit; it does not verify software installation. Retain this distinction for P3400-003/006. |
| N3400-S006 / S006 | [CERT-EU 2024-037](https://www.cert.europa.eu/publications/security-advisories/2024-037/), affected products, exploitation levels, detection | Key-creation advice belongs to lower exploitation levels; isolation/reset belongs to higher levels. P3400-011's zero is compatible with its level-3 scenario, not absence of all E4 advice. Generic linked key documents must retain branch context. |
| N3400-S007 / S007 | [Unit 42 brief](https://unit42.paloaltonetworks.com/cve-2024-3400/), summary and managed hunting | Investigation procedures and indicators are available. A fixed-build list supports an upgrade target, not a local verification test. Third-party analyses are not independently scored sources under the current rules. |
| N3400-S008 / S008 | [PSIRT explanation](https://www.paloaltonetworks.com/blog/2024/04/more-on-the-pan-os-cve/), diagnosis and fixes | Diagnostic support-file interpretation supports E2. Vendor testing of a fix does not establish that a defender installed it. No proposed score change from targeted review. |
| N3400-S009 / S009 | [Recovery KB](https://knowledgebase.paloaltonetworks.com/KCSArticleDetail?id=kA14u000000CrO6CAK), visible metadata; VM/restoration branches | Current displayed modification date is 2026-10-29, versus 2025-08-11 recorded originally. Keep it supplemental; do not overwrite October 28 scores. Current text supports VM replacement and secret/certificate response, but cannot independently establish historical wording. |
| N3400-S010 / S010 | [GlobalProtect implementation article](https://live.paloaltonetworks.com/t5/globalprotect-articles/applying-vulnerability-protection-to-globalprotect-interfaces/ta-p/340184), authored steps and post-hotfix FAQ; exclude comments | P3400-041 fixed-version check is supported. P3400-042's 2/3 can describe technical response disposition only. Add E7-T; U/A remain unestablished in that passage. A stricter E7 definition changes this row to 0/0. |
| N3400-S011 / S011 | [Canadian advisory](https://www.cyber.gc.ca/en/alerts-advisories/palo-alto-networks-security-advisory-av24-198), product list and recommendation | The truncated PAN-OS 11.0 boundary remains visible. Preserve the original wording and identify the vendor comparison; do not silently repair the source. |
| N3400-S012 / S012 | [Master-key procedure](https://docs.paloaltonetworks.com/ngfw/administration/certificate-management/master-key-encryption/configure-master-key), local PAN-OS branch | Operational key-configuration detail exists. Cloud/HA and later-version branches are distinct. P3400-053 should remain E4-protect/master-key-specific, not evidence of every compromised secret being replaced. Current page is not a historical capture. |
| N3400-S013 / S013 | [Encryption-level procedure](https://docs.paloaltonetworks.com/ngfw/administration/certificate-management/master-key-encryption/configure-master-key-encryption-level), compatibility and verification | P3400-060's 3/3 describes an encryption-setting procedure and observable result. Add E4-protect; the observation does not establish revocation, password rotation or session invalidation. |
| Retained S015 | [Saved KEV snapshot](../data/kev-snapshot-2026-10-28.json), target entry | Membership/requiredAction is context. Do not infer compromise of a particular asset or closure from KEV status. |

These are researcher-review recommendations, not a score-validation certificate. No exploit, mitigation test or vendor command was executed against an asset.

## Priority decisions
1. Preserve original numeric coding until historical-source and rule review is complete. The present audit identifies interpretation/version risks rather than substantiating a wholesale replacement dataset.
2. Retain E7-T 2/3 as the working interpretation; publish a sensitivity note showing 0/0 under an administrative-only E7 definition.
3. Show E4 facets beside the 3/3 maximum. Encryption specificity is not credential-response completeness.
4. Keep prevention-based E3 and mitigation-based E6 overlap visible; do not add them into a total.
5. Compare C scenarios explicitly and report capability/deployment differences. Merely exposed devices cannot inherit P3400-A applicability.

## Researcher verification queue
| Priority | Records | Verification needed |
|---|---|---|
| First | P3400-042; E7 synthesis | Adopt E7 scope and check the authored FAQ |
| First | P3400-029–035 | Locate original S009 capture; resolve version history |
| First | P3400-053/060; E4 synthesis | Verify version compatibility, eligible link route and narrow facet |
| Next | P3400-003/006/041 | Separate mitigation, installed-build and recovery checks |
| Next | Remaining records | Record which rows a researcher rechecked; maintain a decision log |

## Structural checks
See [data quality report](../analysis/data-quality-report.md) for independently calculated record counts, score ranges, source references, maxima and KEV snapshot identity. Structural checks do not determine semantic correctness.

