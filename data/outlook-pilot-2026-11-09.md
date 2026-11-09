# Outlook pilot — November 9 source and coding increment
CVE: CVE-2023-23397  
Observation date: 2026-11-09  
Status: Three accessible primary documents coded; linked-document retrieval continues

## Study context
This is the third selected pilot case. Selection-frame membership was checked in the retained [October 28 KEV snapshot](kev-snapshot-2026-10-28.json). The snapshot entry is context rather than a fourth scored document in this increment. These observations do not replace the historical S003 source registration or establish October 28 page contents.

## Analytical scenario O23397-C
The document analysis uses an affected Windows Outlook client with an on-premises Exchange deployment and credible account compromise following malicious reminder activity. This is a constructed C-state scenario, not an observed incident. Root access, ransomware execution and domain-wide compromise are outside its scope. All E1–E7 categories are applicable to the scenario; source silence is scored as a coverage observation rather than nonapplicability. E3 includes access restriction and E5 includes malicious-item cleanup, with those narrow facets retained.

## Source register
| Version ID | Source | Publisher | Publication / update metadata | Discovery route |
|---|---|---|---|---|
| N23397-S001 | [Guidance for investigating attacks using CVE-2023-23397](https://www.microsoft.com/en-us/security/blog/2023/03/24/guidance-for-investigating-attacks-using-cve-2023-23397/) | Microsoft Incident Response | 2023-03-24; Visible update notes through 2024-02-15; comprehensive revision history unavailable | Existing S003 starting source, re-observed November 9 |
| N23397-S002 | [Security Advisory 2023-018: Microsoft Outlook Elevation of Privilege Vulnerability](https://cert.europa.eu/publications/security-advisories/2023-018/) | CERT-EU | 2023-03-15; v1.0 dated 2023-03-15 | Named CERT-EU search route |
| N23397-S003 | [AL23-002: Microsoft Outlook zero-day vulnerability allowing NTLM credential theft](https://www.cyber.gc.ca/en/alerts-advisories/microsoft-outlook-zero-day-vulnerability-allowing-ntlm-credential-theft) | Canadian Centre for Cyber Security | 2023-03-15; Displayed modified date 2023-03-15 | Named Canadian Cyber Centre search route |

Access date for all three documents: November 9, 2026. Coding uses rendered main-document text, excluding navigation and related posts. Complete raw captures were not retained. [Machine-readable source register](outlook-sources-2026-11-09.json).

## Document-category coding
A = operational actionability; E = evidence specificity. Both are ordinal 0–3 dimensions. All rows use O23397-C and applicability A1. The [CSV](outlook-coding-2026-11-09.csv) carries the shared metadata. These are AI-assisted first-pass records. The [researcher decision register](../research-notes/2026-11-09-researcher-decisions.md) accepts the highlighted Microsoft and Canadian-alert scores; follow-up 20=A also accepts the CERT-EU preservation/recovery split. Other records are not covered by those specific confirmations. Independent second-coder results are not available.

| Record | Source | Category / facet | A | E | Section | Observation and rationale |
|---|---|---|---|---|---|---|
| O23397-001 | N23397-S001 | E1 / exposure | 1 | 2 | Understanding the CVE-2023-23397 vulnerability | Windows client scope identified; local build inspection absent. |
| O23397-002 | N23397-S001 | E2 / investigation | 3 | 3 | Hunting strategically; Artifacts on endpoints; Exchange Server logs | Queries and log fields support investigation; failed connections do not establish leakage. |
| O23397-003 | N23397-S001 | E3 / access restriction | 2 | 0 | Recommendations | Block network paths and restrict services; no containment-confirmation artifact specified. |
| O23397-004 | N23397-S001 | E4 / password replacement; authentication protection | 2 | 0 | Recommendations | Reset specified accounts and restrict authentication; reset-completion evidence unspecified. |
| O23397-005 | N23397-S001 | E5 / malicious message removal | 2 | 0 | Recommendations | Remove malicious messages or properties using linked tooling; removal verification delegated. |
| O23397-006 | N23397-S001 | E6 / patching | 1 | 0 | Recommendations; Understanding mitigations | Install updates; no local fixed-build verification procedure identified. |
| O23397-007 | N23397-S001 | E7 / closure | 0 | 0 | Full in-scope article | No explicit response-disposition or administrative closure criterion identified. |
| O23397-008 | N23397-S002 | E1 / exposure | 1 | 2 | Affected Products; Recommendations | Affected product list supports exposure identification; no local build check. |
| O23397-009 | N23397-S002 | E2 / investigation; evidence preservation | 2 | 3 | Impact Assessment | Audit message properties and interpret output; cleanup can destroy evidence. |
| O23397-010 | N23397-S002 | E3 / access restriction | 2 | 0 | Mitigations | Block outbound SMB at perimeter, endpoint and VPN; no verification artifact. |
| O23397-011 | N23397-S002 | E4 / authentication protection | 2 | 0 | Mitigations | Protected Users restricts authentication; credential-reset completion not addressed. |
| O23397-012 | N23397-S002 | E5 / recovery | 0 | 0 | Impact Assessment; whole advisory | Avoiding destructive cleanup supports evidence preservation, not completed recovery. |
| O23397-013 | N23397-S002 | E6 / patching | 1 | 0 | Recommendations | Update advice without local installed-build verification. |
| O23397-014 | N23397-S002 | E7 / closure | 0 | 0 | Whole advisory | No explicit response-disposition or administrative closure criterion identified. |
| O23397-015 | N23397-S003 | E1 / exposure | 0 | 1 | Details | Product context supplied; local exposure-assessment steps absent. |
| O23397-016 | N23397-S003 | E2 / investigation | 1 | 0 | Recommended actions | Periodic scanning recommended; outputs and interpretation delegated. |
| O23397-017 | N23397-S003 | E3 / access restriction | 2 | 0 | Recommended actions | Restrict outbound SMB and NTLM; no verification artifact. |
| O23397-018 | N23397-S003 | E4 / authentication protection | 2 | 0 | Recommended actions | Protected Users and NTLM restrictions; no credential-replacement evidence. |
| O23397-019 | N23397-S003 | E5 / recovery | 0 | 0 | Whole authored alert | No compromise-recovery procedure identified. |
| O23397-020 | N23397-S003 | E6 / patching | 1 | 0 | Recommended actions | Patch immediately; local fixed-build verification absent. |
| O23397-021 | N23397-S003 | E7 / closure | 0 | 0 | Recommended actions; whole alert | Reporting suspicious activity does not establish case closure. |

## Descriptive synthesis of these three documents
| Category | Highest A | Supporting sources | Highest E | Supporting sources |
|---|---|---|---|---|
| E1 | 1 | N23397-S001, N23397-S002 | 2 | N23397-S001, N23397-S002 |
| E2 | 3 | N23397-S001 | 3 | N23397-S001, N23397-S002 |
| E3 | 2 | N23397-S001, N23397-S002, N23397-S003 | 0 | N23397-S001, N23397-S002, N23397-S003 |
| E4 | 2 | N23397-S001, N23397-S002, N23397-S003 | 0 | N23397-S001, N23397-S002, N23397-S003 |
| E5 | 2 | N23397-S001 | 0 | N23397-S001, N23397-S002, N23397-S003 |
| E6 | 1 | N23397-S001, N23397-S002, N23397-S003 | 0 | N23397-S001, N23397-S002, N23397-S003 |
| E7 | 0 | N23397-S001, N23397-S002, N23397-S003 | 0 | N23397-S001, N23397-S002, N23397-S003 |

These maxima describe the current three-document subset, not the complete CVE guidance set. Different facets can produce the same score. No final CVE-level absence claim follows while relevant linked procedures remain unscreened. Numerical scores measure guidance detail, not efficacy or proof of non-compromise.

## Retrieval and exclusion log
| Route / item | Observed outcome | Treatment |
|---|---|---|
| Microsoft investigation article | Main text accessible | Included S001 |
| CERT-EU 2023-018 | Main text accessible | Included S002 |
| Canadian AL23-002 | Main text accessible | Included S003 |
| MSRC CVE update-guide URL | JavaScript-required shell; substantive advisory not exposed by text retrieval | Inaccessible in this interface; no score or absence inference |
| Microsoft CSS-Exchange CVE-2023-23397 documentation | Linked URL returned 404 | Unavailable at observed URL; seek an official retained/moved version before final synthesis |
| Microsoft ExchangeLogCollector documentation | Accessible documentation identified | Detailed eligibility/coding outstanding; not silently included through S001 |
| Protected Users documentation | Direct official link identified in primary sources | Pending eligibility and version-compatible coding |
| Restrict NTLM documentation | Direct official link identified in Canadian alert | Pending eligibility and coding |
| SMB-blocking support article and Exchange update guidance | Direct official links identified in S001 | Pending relevant-branch screening |
| Transport/message-tracking documentation | Direct official links identified in S001 | Pending screening within one-hop boundary |
| Canadian March monthly rollup | Search located AV23-146 | Full-text screening outstanding |
| CISA March 14 security-update alert | Direct retrieval returned HTTP 403 | Access limitation; no score |
| CISA later top-exploited-vulnerabilities PDF | Search returned AA24-317A | Discovery lead only; no score from snippet |
| CERT-EU 2023-017 | Opened candidate proved to concern Jenkins | Excluded as wrong CVE; correct advisory is 2023-018 |

Queries included site:cert.europa.eu CVE-2023-23397 advisory; site:cyber.gc.ca CVE-2023-23397 March 2023; and site:cisa.gov CVE-2023-23397 Microsoft Outlook March 2023. Retrieval is incomplete. No commands, queries, scans or remediation procedures were executed against assets.

## Decisions carried into review
1. Keep attempted triggering, credential leakage and successful subsequent access distinct when interpreting E2.
2. Resolve how audit-before-cleanup sequencing is captured without turning preservation advice into recovery completion.
3. Retain prevention/authentication-protection facets separately from credential replacement and session invalidation.
4. Apply the same E7 threshold used for PAN-OS and MOVEit; the current primary documents receive no explicit-disposition credit.

See the [combined review checklist](../research-notes/2026-11-09-review-checklist.md). Actual personal research hours are not recorded for this increment. Remaining work is linked-source retrieval, consistent application of the accepted category boundaries and recoding where decisions change the rules.
