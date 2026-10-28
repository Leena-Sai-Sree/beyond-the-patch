# Pilot Source Register

**Project:** Beyond the Patch  
**Updated:** 2026-10-28  
**Status:** PAN-OS first-pass source review and coding documented below; remaining four CVEs retain initial source records

## Collection Boundaries

| Item | Value |
|---|---|
| KEV snapshot | [kev-snapshot-2026-10-28.json](kev-snapshot-2026-10-28.json), retrieved 2026-10-28 |
| Catalog version | 2026.10.27 |
| Source cutoff | 2026-10-28 |
| Historical scope | Current guidance available at collection; not disclosure-date guidance |
| Selection record | [Pilot Candidate Selection Log](pilot-candidate-selection-log.md) |
| Method | [Research Protocol v0.2](../methodology/research-protocol-v0.2.md) |

## Registered Starting Documents

All access dates are 2026-10-28. Include means an official, relevant starting document is eligible under the pilot cutoff; it does not mean source retrieval for that CVE is complete. Publication and revision details refer to visible document metadata. Where no comprehensive update history is available, historical completeness is uncertain.

| Source ID | CVE | Publisher | Type | Document / canonical URL | Publication date | Update information | Relevant sections | Relationship | Eligibility |
|---|---|---|---|---|---|---|---|---|---|
| S001 | CVE-2024-3400 | Palo Alto Networks | Vendor security advisory | [PAN-OS / GlobalProtect advisory](https://security.paloaltonetworks.com/CVE-2024-3400) | 2024-04-12 | Updated 2024-05-03 shown | Description; Required Configuration for Exposure; Exploitation Status; Solution | CVE-specific | Include |
| S002 | CVE-2023-34362 | CERT-EU | CSIRT security advisory | [Critical Vulnerability in MOVEit Transfer, 2023-033](https://cert.europa.eu/publications/security-advisories/2023-033/) | 2023-06-02, initial publication in history | v1.1 dated 2023-06-19 | Summary; Technical Details / Detection; Affected Products; Recommendations | Multiple CVEs discussed; coding restricted to relevant target-CVE material | Include |
| S003 | CVE-2023-23397 | Microsoft | Vendor technical / investigation guidance | [Guidance for investigating attacks using CVE-2023-23397](https://www.microsoft.com/en-us/security/blog/2023/03/24/guidance-for-investigating-attacks-using-cve-2023-23397/) | 2023-03-24 | Visible update notes include 2024-02-15; comprehensive last-modified date not verified | Hunting strategically; Scan for messages with malicious properties; Artifacts on endpoints | CVE-specific | Include |
| S004 | CVE-2021-34527 | Microsoft MSRC | Vendor technical guidance | [Clarified Guidance for Windows Print Spooler Vulnerability](https://www.microsoft.com/en-us/msrc/blog/2021/07/clarified-guidance-for-cve-2021-34527-windows-print-spooler-vulnerability) | 2021-07-08 | Separate update date not stated | Main advisory text; patch and Point and Print configuration guidance | CVE-specific | Include |
| S005 | CVE-2021-44228 | Apache Software Foundation / Logging Services | Vendor/project security advisory | [Security](https://logging.apache.org/security.html) | CVE-section publication date not stated | Consolidated live page; section update date not stated | CVE-2021-44228: Description; Mitigation; References | Multi-CVE document; only target-CVE material and clearly relevant context eligible | Include |

The starting documents were accessible through the browsing interface. The PAN-OS case appendix records its retained versions and additional reviewed sources. Source preservation and retrieval for the other four CVEs remain incomplete. No long source quotations are reproduced.

## Retrieval Activity

| Retrieval ID | CVE | Date | Location checked | Outcome | Source IDs | Limitation / outstanding action |
|---|---|---|---|---|---|---|
| R001 | All selected CVEs | 2026-10-28 | Official cisagov/kev-data JSON | Downloaded and parsed; membership and dateAdded verified | KEV snapshot | Retained JSON and SHA-256 documented in selection log |
| R002 | CVE-2024-3400 | 2026-10-28 | Vendor advisory | Accessible; initial eligibility established | S001 | Government/CSIRT sources and eligible direct links remain to be screened |
| R003 | CVE-2023-34362 | 2026-10-28 | CERT-EU advisory | Accessible; initial eligibility established | S002 | Vendor source, eligible direct links, and CISA access alternatives remain to be screened |
| R004 | CVE-2023-23397 | 2026-10-28 | Microsoft investigation guidance | Accessible; initial eligibility established | S003 | Primary advisory, government/CSIRT sources, and eligible direct links remain to be screened |
| R005 | CVE-2021-34527 | 2026-10-28 | Microsoft clarified guidance | Accessible; initial eligibility established | S004 | Primary advisory, government sources, and eligible direct links remain to be screened |
| R006 | CVE-2021-44228 | 2026-10-28 | Apache legacy security URL | Redirected to consolidated security page; target section accessible | S005 | Government/CSIRT sources and eligible direct links remain to be screened |

## Retrieval Coverage

| CVE | KEV membership checked | Vendor document inspected | Government/CSIRT document inspected | Direct-link screen complete | Status |
|---|---|---|---|---|---|
| CVE-2024-3400 | Yes | S001 | S006, S011 | One-hop review documented below | First-pass review complete with access limitations |
| CVE-2023-34362 | Yes | Not yet | S002 | No | In progress |
| CVE-2023-23397 | Yes | S003 | Not yet | No | In progress |
| CVE-2021-34527 | Yes | S004 | Not yet | No | In progress |
| CVE-2021-44228 | Yes | S005 | Not yet | No | In progress |

## Recording Rules

Source IDs identify document versions and remain stable across associated CVEs. Later retained or updated versions receive distinct identifiers with their relationship recorded. Missing dates are not replaced by access dates.

Source eligibility and applicability are separate decisions. Source silence does not establish nonapplicability. Scores, supporting paraphrases, conditional triggers, and decision rationales belong in the [Pilot Coding Worksheet](pilot-coding-worksheet.md).

The source set for the full five-CVE pilot remains incomplete. The worksheet records provisional PAN-OS coding within the case boundaries below; no full-pilot findings or actual asset-closure conclusions are established.

## PAN-OS Case Source Review

**Case:** CVE-2024-3400  
**Review date:** 2026-10-28  
**Status:** Bounded first-pass retrieval and coding completed with access/version limitations; human review pending  
**Coding:** [Pilot Coding Worksheet](pilot-coding-worksheet.md#first-pilot-case-cve-2024-3400)

### Retrieval Boundary

Primary documents are the KEV entry, affected-vendor advisory, and English-language official advisories discovered through CISA, CERT-EU, and Canadian Cyber Centre searches. An encountered Nigerian national CERT advisory was also attempted. Additional official documents directly linked by the vendor advisory or selected government/CSIRT advisories are screened when they contain relevant response instructions.

The link boundary is one hop from those primary advisories. Navigation, marketing, product home pages, support login portals, external analyses, reader comments, and further link chains are excluded. This is a documented pilot boundary, not a claim of exhaustive international guidance retrieval. Technical identifiers and reference links within scored documents support their own passages; linked documents do not inherit scores.

Sources S001 and S006–S013 plus the target KEV entry S015 form ten scored document units. S014 is an inaccessible reset reference and receives no scores. The original S002–S005 records for the other CVEs are unchanged.

### Included Documents

All access dates are 2026-10-28. Each included document is official and relevant to the scenario defined in the worksheet. Generic linked procedures are included only within their expressly referenced response purpose and compatible deployment branch.

| Source ID | Document and canonical URL | Publisher / type | Visible publication or revision information | Inclusion route and limits |
|---|---|---|---|---|
| S001 | [PAN-OS / GlobalProtect security advisory](https://security.paloaltonetworks.com/CVE-2024-3400) | Vendor advisory | Published 2024-04-12; updated 2024-05-03 | Primary vendor source |
| S006 | [CERT-EU Security Advisory 2024-037](https://www.cert.europa.eu/publications/security-advisories/2024-037/) | CSIRT advisory | Published 2024-04-12; v1.3 2024-04-29 | Official CSIRT source |
| S007 | [Unit 42 Operation MidnightEclipse threat brief](https://unit42.paloaltonetworks.com/cve-2024-3400/) | Affected-vendor technical guidance | Published 2024-04-12 in retained page; update log through 2024-05-20 | Direct vendor-advisory link |
| S008 | [More on the PAN-OS CVE-2024-3400](https://www.paloaltonetworks.com/blog/2024/04/more-on-the-pan-os-cve/) | Vendor PSIRT explanation | Published 2024-04-19; separate update date not stated | Direct vendor-advisory link |
| S009 | [How to Perform Remediation of Compromised NGFW and Panorama Devices](https://knowledgebase.paloaltonetworks.com/KCSArticleDetail?id=kA14u000000CrO6CAK) | Vendor recovery knowledge base | Created 2024-04-23; modified 2025-08-11 | Generic recovery article explicitly linked by primary advisory; only VM and restoration branches scored |
| S010 | [Applying Vulnerability Protection to GlobalProtect Interfaces](https://live.paloaltonetworks.com/t5/globalprotect-articles/applying-vulnerability-protection-to-globalprotect-interfaces/ta-p/340184) | Vendor implementation guidance; main authored article only | Article contains April 2024 update notes; complete revision metadata not verified | Direct vendor-advisory link; public comments excluded; read via web interface; raw capture blocked |
| S011 | [Canadian Centre for Cyber Security AV24-198](https://www.cyber.gc.ca/en/alerts-advisories/palo-alto-networks-security-advisory-av24-198) | Government advisory | Published/modified 2024-04-12 | Official government search result |
| S012 | [Configure a Master Key](https://docs.paloaltonetworks.com/ngfw/administration/certificate-management/master-key-encryption/configure-master-key) | Vendor implementation documentation | Retained capture updated 2026-10-25; older web cache shows 2026-05-22 | Direct CERT-EU link; general PAN-OS procedure only; later-version-only and cloud-management branches excluded |
| S013 | [Configure Master Key Encryption Level](https://docs.paloaltonetworks.com/ngfw/administration/certificate-management/master-key-encryption/configure-master-key-encryption-level) | Vendor implementation documentation | Retained capture updated 2026-10-25; older web cache shows 2026-04-08 | Direct CERT-EU link; applies to selected PAN-OS 11.1 analytical scenario |
| S015 | [CISA KEV entry for CVE-2024-3400](https://raw.githubusercontent.com/cisagov/kev-data/main/known_exploited_vulnerabilities.json) | Government catalog entry | Catalog 2026.10.27; entry added 2024-04-12 | Retained repository snapshot; code target entry only |

### Access and Version Limitations

| Item | Outcome | Treatment |
|---|---|---|
| CISA alert URL: https://www.cisa.gov/news-events/alerts/2024/04/12/palo-alto-networks-releases-security-updates-pan-os | Browsing request returned HTTP 403 | Not coded; no absence inference. The retained KEV entry is coded separately. |
| https://cert.gov.ng/advisories/os-command-injection-vulnerability-in-globalprotect | Browsing request returned HTTP 403 | Not coded from search snippets. |
| S010 raw-page collection | HTTP 403 in local download; full main article accessible through web retrieval | Scored from the accessible authored article; reproducibility limitation: no complete local page capture. Public comments excluded. |
| S014: https://knowledgebase.paloaltonetworks.com/KCSArticleDetail?id=kA14u0000008XrDCAU | Local HTTP 200 contained no substantive article; web retrieval redirected to login | Excluded from scoring. Successful HTTP status alone is not evidence of content access. |
| S012 and S013 legacy PAN-OS URLs | Redirected to consolidated documentation | Current retained content used, not assumed to be the original 10.2 text. Version-incompatible branches excluded. |
| S012 and S013 displayed dates | Local captures show 2026-10-25; web cache showed older 2026 dates | Local captures are the coding baseline; no historical reconstruction claimed. |
| S009 recovery article | Revised 2025-08-11; primary advisory retains earlier date | Updated linked content is eligible under the 2026 cutoff, but cannot be attributed to original 2024 guidance. |
| Third-party analyses linked by official sources | Not affected-product vendor or government/recognized CSIRT guidance | Not scored as independent documents. |
| Threat-signature database entries, product landing pages and general security-guidance directories | Screened as references/navigation without separate in-scope response procedures | Not independent scored units. |
| Reset and key procedures beyond the direct-link boundary | Not recursively retrieved | No completion or quality claim about their contents. |

### Retained Evidence

Eight substantive HTML captures are retained locally in the task evidence directory. They are not bundled for republication on GitHub. The following SHA-256 values identify those captures; complete pages may include navigation and unrelated current content. Coding is restricted to the relevant main document sections.

| Source ID | Local evidence file | SHA-256 |
|---|---|---|
| S001 | source-captures/CVE-2024-3400/S001.html | d5d77b8d560efa8aafe8e691dce64d214f4ed5d57fb0153ccc3d8161288ee0c8 |
| S006 | source-captures/CVE-2024-3400/S006.html | fe2dfb98cd45036c26e9317d5db6c3e2aca4dc04194146bb4660e79e827971d3 |
| S007 | source-captures/CVE-2024-3400/S007.html | 635c38a4c85bd65a92bd080b3083a492bdcb1ce3c6d5e3014e5c080d9e9117eb |
| S008 | source-captures/CVE-2024-3400/S008.html | d30f4d370984d46b2dc87046fe2092833ddf694f6990b4a53f0eb61632608340 |
| S009 | source-captures/CVE-2024-3400/S009.html | 81593b1aeed62c44bf78b8d035dac6c18cfe6b2e23660193335368c914575564 |
| S011 | source-captures/CVE-2024-3400/S011.html | b9b37d5028498537ab1eb3549be4b788c9f09abf3520c7aff406bda9cb2bf89f |
| S012 | source-captures/CVE-2024-3400/S012.html | ef9a4844d7f1aaf740922e5c926ddd6aa7a09c76271b6621bbc32945cdfbdd33 |
| S013 | source-captures/CVE-2024-3400/S013.html | 5593d62f9ed2a83194ad51de0346154707380a876791ea09f71a8de4dad62243 |

S010 has an accessible canonical source and recorded section locators and paraphrases, but no full HTML capture. S015 uses the existing [retained KEV snapshot](kev-snapshot-2026-10-28.json), SHA-256 2d9931c086e42d05425c2da924299c8d9b7ff836de373f981668b7ef5f6f0fd7. Its Git blob was checked against the downloaded official snapshot and matched.

The capture directory is a local evidence location, not an assertion that raw pages are available in the public repository. Hashes establish file identity, not completeness, authenticity of every page element, or correctness of coding.

### Retrieval Completion Record

| CVE | KEV checked | Vendor source | Government/CSIRT sources | Eligible direct links | Status |
|---|---|---|---|---|---|
| CVE-2024-3400 | S015 | S001 | S006 and S011; CISA and ngCERT access failures recorded | Reviewed to the stated one-hop boundary; S014 inaccessible | First-pass review complete within recorded boundaries; access limitations remain |


