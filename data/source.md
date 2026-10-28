# Pilot Source Register

**Project:** Beyond the Patch  
**Updated:** 2026-10-28  
**Status:** Five official starting documents inspected; full source retrieval incomplete; coding not started

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

The documents were accessible through the browsing interface. Standalone source-page captures have not been retained in this package. These records support initial registration and eligibility screening; version preservation remains outstanding before coding. No long source quotations are reproduced.

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
| CVE-2024-3400 | Yes | S001 | Not yet | No | In progress |
| CVE-2023-34362 | Yes | Not yet | S002 | No | In progress |
| CVE-2023-23397 | Yes | S003 | Not yet | No | In progress |
| CVE-2021-34527 | Yes | S004 | Not yet | No | In progress |
| CVE-2021-44228 | Yes | S005 | Not yet | No | In progress |

## Recording Rules

Source IDs identify document versions and remain stable across associated CVEs. Later retained or updated versions receive distinct identifiers with their relationship recorded. Missing dates are not replaced by access dates.

Source eligibility and applicability are separate decisions. Source silence does not establish nonapplicability. Scores, supporting paraphrases, conditional triggers, and decision rationales belong in the [Pilot Coding Worksheet](pilot-coding-worksheet.md).

The source set is incomplete. No coverage gaps, score comparisons, or closure conclusions are established by this register.

