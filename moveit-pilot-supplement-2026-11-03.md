# MOVEit pilot — November 3 supplement
CVE: CVE-2023-34362  
Date/access date: 2026-11-03  
Status: Draft coding for three documents; linked-source review in progress  
Rules: [v0.2 protocol](../methodology/research-protocol-v0.2.md) with explicit [v0.3 draft clarifications](../methodology/pilot-rules-v0.3-draft.md)

## Relationship to existing records
The pilot roster is unchanged. The original S002 CERT-EU record was accessed October 28; N34362-S002 below is the November 3 rendering, not a replacement historical version. New records belong to a separate observation series. The retained October 28 KEV snapshot confirms selection-frame membership; it does not date these live documents.

Do not combine this supplement with the historical PAN-OS series as if they shared an observation date. Final comparative coding requires a common temporal policy and recoding as necessary.

## Analytical scenario M34362-C
Assume an affected, self-managed, internet-facing MOVEit Transfer 2023.0.0 server, with credible successful exploitation, unauthorized web-server/database changes and potential file disclosure before response. This is a C-state analytical assumption, not an observed incident. Administrative authorization and retained response records are relevant to case closure. No MOVEit Cloud deployment, Azure Blob integration, confirmed domain-wide compromise or separate ransomware encryption is assumed.

All E1–E7 categories are A1 in this scenario: exposure and investigation, access restriction, account/session response, integrity recovery, software remediation and response disposition are relevant. Azure-key advice is conditional and excluded from the scenario's unconditional scores. Do not infer root access from the SQL injection or assume the scope of exfiltration is established.

## Source register
| Version ID | Official source / publisher / type | Publication and update metadata | Eligible sections and version limitations |
|---|---|---|---|
| N34362-S001 | [MOVEit Transfer Critical Vulnerability (May 2023)](https://community.progress.com/s/article/MOVEit-Transfer-Critical-Vulnerability-31May2023), Progress, vendor advisory | Original posting 2023-05-31 in history; displayed 2023-06-16; last modified 2023-06-21 | Affects; Recommended Remediation; verification; IoCs. Target-CVE content only; later-CVE patch references retain their dates. |
| N34362-S002 | [CERT-EU 2023-033](https://cert.europa.eu/publications/security-advisories/2023-033/), CSIRT advisory | Initial 2023-06-02; v1.1 2023-06-19 | Detection, affected products, recommendations. Multi-CVE context is annotated; no linked-source score inheritance. |
| N34362-S003 | [AA23-158A official CISA bulletin](https://content.govdelivery.com/accounts/USDHSCISA/bulletins/35ecb08), CISA/FBI, government advisory distribution | Sent 2023-06-07; no later full revision history established in this rendering | MOVEit technical details/detection and relevant general mitigations; distinguish actor-wide context. Canonical CISA page returned 403. This official distribution is not presumed identical to a later canonical revision. |

All three versions were reviewed through web-rendered text, not retained full raw captures. Source URLs and section locators are retained here. Historical October 28 equivalence is unestablished. No supplied detection code was executed or validated.

## Document-category records
Shared fields for every row: CVE-2023-34362; M34362-C; A1; exploitation condition assumed in scenario; review status: draft, awaiting researcher verification; coding date 2026-11-03; protocol v0.2 plus v0.3 draft. A/E = actionability/evidence specificity. Each rationale describes only the named document and compatible scenario.

| Record ID | Source version | Category / facet | A | E | Section | Observation and score rationale |
|---|---|---|---|---|---|---|
| M34362-001 | N34362-S001 | E1 | 2 | 2 | Affects; patch table | Product/build boundaries identify exposure; local inspection steps absent. |
| M34362-002 | N34362-S001 | E2 | 2 | 3 | Recommended Remediation 2a | File/log targets and suspicious download patterns inform investigation. |
| M34362-003 | N34362-S001 | E3 access restriction | 2 | 0 | Recommended Remediation 1 | Deny specified web ports; no explicit verification artifact. |
| M34362-004 | N34362-S001 | E4 replace; sessions | 3 | 2 | 2a(6); 2b; 4 | Session-removal sequence; account recheck and repeat credential response. |
| M34362-005 | N34362-S001 | E5 eradication | 3 | 3 | 2a; 4 | Removal steps and repeated checks support cleanup verification. |
| M34362-006 | N34362-S001 | E6 patch target | 2 | 2 | 3; fixed-version table | Named builds and upgrade links; no local installed-build check. |
| M34362-007 | N34362-S001 | E7 | 0 | 0 | Remediation 4–8; full advisory | Ordered verification/reopening steps lack explicit case-disposition criteria. |
| M34362-008 | N34362-S002 | E1 | 2 | 2 | Affected Products; Recommendations | Version boundaries support exposure/remediation assessment; no local inspection procedure. |
| M34362-009 | N34362-S002 | E2 | 2 | 3 | Detection | Named database/log fields link observations to potential exploitation. |
| M34362-010 | N34362-S002 | E3 access restriction | 2 | 0 | Recommendations | Deny specified web ports before patching; no containment check. |
| M34362-011 | N34362-S002 | E4 | 0 | 0 | Recommendations; full document | Unauthorized-account cleanup alone is not credential/session invalidation guidance. |
| M34362-012 | N34362-S002 | E5 eradication | 2 | 0 | Recommendations | Remove unauthorized files/accounts; no explicit cleanup verification evidence. |
| M34362-013 | N34362-S002 | E6 patch target | 2 | 2 | Recommendations | Fixed builds named; installed-state verification not supplied. |
| M34362-014 | N34362-S002 | E7 | 0 | 0 | Full document | No explicit response-disposition or case-closure criterion identified. |
| M34362-015 | N34362-S003 | E1 | 2 | 2 | Summary; MOVEit section | Affected product/build list identifies exposure; local inspection procedure absent. |
| M34362-016 | N34362-S003 | E2 | 3 | 3 | Detection Methods; IoCs | Complete first YARA rule identifies malicious artifacts; malformed query separately excluded. |
| M34362-017 | N34362-S003 | E3 general prevention | 2 | 0 | Mitigations | Restrict remote access/segment networks; no asset isolation-verification evidence. |
| M34362-018 | N34362-S003 | E4 general protection | 2 | 1 | Mitigations | Credential-protection measures; no incident-specific complete revocation procedure. |
| M34362-019 | N34362-S003 | E5 general recovery | 2 | 1 | Mitigations | Backup/recovery planning; no demonstrated incident-specific eradication. |
| M34362-020 | N34362-S003 | E6 | 1 | 0 | Mitigations; Validate Security Controls | General patching; ATT&CK control testing is not installed-fix verification. |
| M34362-021 | N34362-S003 | E7 | 0 | 0 | Full bulletin | No explicit case-closure criteria identified in this rendering. |

E4 evidence 2 in the vendor source refers to account/session-related inspection and named account targets, not an auditable certificate that all credentials/sessions were replaced. Recheck this boundary during researcher review. Credential rotation and account deletion are recorded separately; unauthorized-account removal primarily supports E5.

## Provisional synthesis of these three documents only
| Category | Highest A / source | Highest E / source | Interpretation limit |
|---|---|---|---|
| E1 | 2 / all three | 2 / all three | Exposure/target details, not a measured exposure window |
| E2 | 3 / N34362-S003 | 3 / all three | Indicators support investigation, not proof of no compromise |
| E3 | 2 / all three | 0 / all three | No verification evidence identified in these rows; full case retrieval incomplete |
| E4 | 3 / N34362-S001 | 2 / N34362-S001 | Replacement/session actions differ from general protection |
| E5 | 3 / N34362-S001 | 3 / N34362-S001 | Cleanup checks are narrower than whole-system integrity assurance |
| E6 | 2 / N34362-S001,S002 | 2 / N34362-S001,S002 | Patch targets, not a supplied local build-verification procedure |
| E7 | 0 / all three | 0 / all three | Document-level observation only; not a final CVE-level gap |

Do not interpret maxima as a complete combined procedure. Three documents are not a fixed quota and have not satisfied the full retrieval stopping rule.

## Retrieval log and pending direct links
| Item | Outcome / next action |
|---|---|
| Vendor primary | Accessible substantive article despite page CSS warning; coded above |
| CERT-EU primary | Accessible; target-CVE relevant portions coded |
| Canonical CISA AA23-158A | HTTP 403; official June 7 distribution inspected instead |
| Canadian Cyber Centre search | Pending; required for common retrieval route |
| Vendor linked Users and Logs documentation | Pending eligibility/content review |
| Vendor linked service-account reset KB 000115941 | Pending; do not inherit procedural details into current scores |
| Vendor linked 2023 upgrade instructions | Pending; in-scenario 2023 branch only; no executable downloads needed |
| Vendor linked Security Center, best practices, remote-access and MFA instructions | Pending scope decisions; distinguish generic prevention from response-specific detail |
| Vendor IoC CSV attachment | Pending access/version check; accessible article text only is coded now |
| CERT-EU June 9 advisory | Pending target-CVE relationship screen; separate vulnerability not automatically a new target |
| CISA linked joint ransomware guide | Pending relevance/scope screen; broad actor-wide material cannot replace CVE-specific recovery instructions |
| Other vendor third-party analyses and social posts | Excluded from independent scoring under official-source rules; discovery leads only |
| Patch binaries, portals, navigation and product pages | Excluded as independent guidance documents |

Source-discovery queries used: Progress MOVEit CVE-2023-34362 mitigation May 2023; vendor primary link from the existing CERT-EU source; canonical CISA advisory and its official distribution. Named government search routes and eligible links remain unfinished.

## Method memos and next action
- Temporal comparability: this series was observed November 3, not October 28.
- Rendering quality: the CISA bulletin includes truncated/malformed query text; do not silently repair it or award credit based on an imagined command. Its first complete YARA rule independently supports the provisional E2 score; supplied code has not been executed or validated here.
- Version boundary: CERT-EU's affected-products wording around 2023.0.0 differs from the vendor/build list. Retain that wording and flag the comparison; do not silently correct it or infer that the source set agrees on every version boundary.
- CVE boundary: later vulnerability patches and exploit-chain discussion require attribution rather than an apparent contradiction label.
- E7 boundary: reopening service after cleanup is not automatically explicit case closure. Apply the same technical-disposition threshold used for PAN-OS; document any recoding.
- Next action: resolve every pending row above, add eligible sources with new IDs and traceable records, then update synthesis before declaring MOVEit retrieval complete.

Researcher hours were not supplied. No precise retrieval/coding duration or independent agreement is claimed.

