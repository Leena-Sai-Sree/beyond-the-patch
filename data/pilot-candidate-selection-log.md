# Pilot Candidate Selection Log

**Project:** Beyond the Patch  
**Updated:** 2026-10-28  
**Status:** Seven candidates screened; five selected for the pilot; source retrieval incomplete; coding not started

## Method and Sampling Frame

This pilot follows [Research Protocol v0.2](../methodology/research-protocol-v0.2.md) and the [Pilot Selection Plan](../methodology/pilot-selection-plan.md).

The official CISA KEV dataset was downloaded from the [cisagov/kev-data repository](https://raw.githubusercontent.com/cisagov/kev-data/main/known_exploited_vulnerabilities.json) on 2026-10-28.

| Snapshot property | Value |
|---|---|
| Retained file | [kev-snapshot-2026-10-28.json](kev-snapshot-2026-10-28.json) |
| Catalog version | 2026.10.27 |
| Catalog release timestamp | 2026-10-27T19:00:02.2307Z |
| Catalog entry count | 1760 |
| SHA-256 | 2d9931c086e42d05425c2da924299c8d9b7ff836de373f981668b7ef5f6f0fd7 |
| Pilot source cutoff | 2026-10-28; sources published or updated after this date are excluded |
| Historical scope | Guidance available at collection, not a reconstruction of guidance available when each vulnerability was disclosed |

The candidate pool is a purposive convenience shortlist of seven established KEV cases from 2021–2024. It is not an exhaustive screen of that period or the full catalog. Every candidate was checked against the retained snapshot and at least one accessible official source. Source content was inspected for product identity, vulnerability mechanism, and relevance; no actionability or evidence scores were assigned during selection.

The pool was assembled to test three deployment categories and several vulnerability mechanisms. Familiarity and discoverability influenced the shortlist. Selection was not based on a measured documentation score, but familiarity can favor prominent, well-documented incidents; this limits interpretation.

## Candidate Screening

All screening occurred on 2026-10-28. Each candidate has sufficient official product context for pilot eligibility. Source references are listed below.

| CVE | KEV date added | Vendor / product | Primary category | Mechanism | Eligibility | Selected | Reason |
|---|---|---|---|---|---|---|---|
| CVE-2024-3400 | 2024-04-12 | Palo Alto Networks PAN-OS / GlobalProtect | Network appliance | Command injection associated with arbitrary file creation | Eligible | Yes | Represents a security appliance and configuration-dependent exposure; adds a distinct vendor and mechanism. |
| CVE-2023-34362 | 2023-06-02 | Progress MOVEit Transfer | Enterprise server/software | SQL injection | Eligible | Yes | Represents managed file-transfer server software and database access implications. |
| CVE-2023-23397 | 2023-03-14 | Microsoft Outlook | Endpoint/client | NTLM authentication abuse / privilege escalation | Eligible | Yes | Represents a client application with authentication effects that may extend to server services. |
| CVE-2021-34527 | 2021-11-03 | Microsoft Windows Print Spooler | Endpoint/client | Privileged file-operation abuse leading to remote code execution | Eligible | Yes | Represents an operating-system service and configuration-dependent remediation. Windows server deployments overlap this category. |
| CVE-2021-44228 | 2021-12-10 | Apache Log4j2 | Enterprise server/software | JNDI lookup abuse leading to remote code execution | Eligible | Yes | Represents an embedded software dependency rather than a standalone server product. Client deployments are also possible. |
| CVE-2023-3519 | 2023-07-19 | Citrix NetScaler ADC / Gateway | Network appliance | Code injection leading to unauthenticated remote code execution | Eligible | No | Retained as an alternative; another appliance RCE case would reduce the selected roster's deployment and mechanism diversity. |
| CVE-2023-4966 | 2023-10-18 | Citrix NetScaler ADC / Gateway | Network appliance | Memory disclosure with session-hijacking implications | Eligible | No | Retained as an alternative; the selected roster already includes an appliance and an authentication-related case. Not excluded for guidance quality. |

## Official Screening References

| Reference | CVE | Official source inspected |
|---|---|---|
| P1 | CVE-2024-3400 | [Palo Alto Networks security advisory](https://security.paloaltonetworks.com/CVE-2024-3400) |
| P2 | CVE-2023-34362 | [CERT-EU Security Advisory 2023-033](https://cert.europa.eu/publications/security-advisories/2023-033/) |
| P3 | CVE-2023-23397 | [Microsoft investigation guidance](https://www.microsoft.com/en-us/security/blog/2023/03/24/guidance-for-investigating-attacks-using-cve-2023-23397/) |
| P4 | CVE-2021-34527 | [Microsoft clarified guidance](https://www.microsoft.com/en-us/msrc/blog/2021/07/clarified-guidance-for-cve-2021-34527-windows-print-spooler-vulnerability) |
| P5 | CVE-2021-44228 | [Apache Logging Services security page, CVE-2021-44228 section](https://logging.apache.org/security.html) |
| P6 | CVE-2023-3519 | [CERT-EU Security Advisory 2023-050](https://cert.europa.eu/publications/security-advisories/2023-050/) |
| P7 | CVE-2023-4966 | [NetScaler vendor response guidance](https://www.netscaler.com/blogs/2023-10/cve-2023-4966-critical-security-update-now-available-for-netscaler-adc-and-netscaler-gateway) |

These references establish screening eligibility, not completion of the protocol's full source search.

## Selected Roster and Diversity

The selected pilot consists of CVE-2024-3400, CVE-2023-34362, CVE-2023-23397, CVE-2021-34527, and CVE-2021-44228.

| Dimension | Selected coverage |
|---|---|
| Network appliance | 1 |
| Enterprise server/software | 2 |
| Endpoint/client | 2 |
| Vendors/projects | Palo Alto Networks, Progress, Microsoft, Apache |
| Cloud/service as primary category | Not represented |
| Identity/access as primary category | Not represented |
| Selection years | 2021, 2023, 2024 |

Categories are analytical deployment labels, not claims that a product can only operate in one environment. The sample is nonrepresentative, includes two Microsoft cases, and does not support population-level or vendor-ranking conclusions.

## Retrieval Limitations and Remaining Work

The [source register](source.md) contains one inspected official starting document per selected CVE. Vendor, government/CSIRT, and eligible direct-link retrieval remains incomplete for every case.

Direct CISA advisory access returned HTTP 403 in the browsing interface. This is an access limitation, not evidence of absent guidance. The official KEV dataset was accessible through CISA's GitHub repository.

The Apache legacy security URL redirected to the consolidated security page. Current page content is the reviewed version; no historical disclosure-date reconstruction is claimed.

Before scoring, retain accessible document versions where permitted, screen the remaining source categories and eligible direct links consistently, and record the resulting source boundaries. Pilot scoring, findings, supervisor approval of this roster, and independent validation are not claimed.

## Decision History

| Date | Decision | Basis |
|---|---|---|
| 2026-10-28 | Screen seven candidates and select five for pilot retrieval | KEV membership, accessible official context, and deployment/mechanism diversity |

