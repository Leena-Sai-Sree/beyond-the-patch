# Remaining pilot sources: screening and retrieval log

Date: 2026-11-14  
Repository baseline: `7983cef1600716d36dd102b9d24c29f0fdd6dc28`

## Scope and stopping rule

This pass covers the remaining Outlook links and the first Print Spooler and Log4j documents. Retrieval starts with the frozen KEV entry, vendor, CISA, CERT-EU and Canadian Cyber Centre routes, then relevant official links one hop away. Endpoint retrieval is not a completed literature search. Relevant routes remain pending, so no case is declared source-complete here.

The table distinguishes included, excluded, inaccessible and pending sources. A retrieved document is not necessarily reviewed for all seven categories. Official implementation sources are separate documents; their detail is not inherited by the referring advisory. Other products, other CVEs and conditional deployment branches require an explicit compatibility decision.

## Endpoint decisions

### L01

- URL: [https://logging.apache.org/security.html](https://logging.apache.org/security.html)
- Decision: Included target-CVE section of Apache page; seven draft records.
- Access timestamp: 2026-11-14T18:23:49.333059+00:00
- Capture SHA-256: `3435f43c8ebfccca1afbcf8465590d63d17d29ee7d2b0f9c6686443f2c534063`

### L02

- URL: [https://cert.europa.eu/publications/security-advisories/2021-067/](https://cert.europa.eu/publications/security-advisories/2021-067/)
- Decision: Retrieved CERT-EU 2021-067. Multi-CVE passage review/coding pending.
- Access timestamp: 2026-11-14T18:23:49.376056+00:00
- Capture SHA-256: `cc362deb4fedb41d70210ca20f024010e8cbe0de3ea6df29f8fa5331ebd49357`

### L03

- URL: [https://www.cyber.gc.ca/en/alerts-advisories/active-exploitation-apache-log4j-vulnerability](https://www.cyber.gc.ca/en/alerts-advisories/active-exploitation-apache-log4j-vulnerability)
- Decision: Included Canadian update 7; seven draft records, superseded branches distinguished.
- Access timestamp: 2026-11-14T18:23:49.385059+00:00
- Capture SHA-256: `8277d2fb873dd9971f37c80def865b871b8e61fa56c607c766527e02e0a0db80`

### L04

- URL: [https://www.cisa.gov/sites/default/files/publications/AA21-356A_Joint_CSA_Mitigating_Log4Shell_and_Other_Log4j-Related_Vulnerabilities.pdf](https://www.cisa.gov/sites/default/files/publications/AA21-356A_Joint_CSA_Mitigating_Log4Shell_and_Other_Log4j-Related_Vulnerabilities.pdf)
- Decision: Included joint advisory PDF AA21-356A; seven draft records for compatible IT/cloud material.
- Access timestamp: 2026-11-14T18:23:49.611635+00:00
- Capture SHA-256: `c6fef5f63789898ddb7014f4e97f66de4ae289bed3a77781f49bba3f73644410`

### L05

- URL: [https://www.cisa.gov/news-events/cybersecurity-advisories/aa21-356a](https://www.cisa.gov/news-events/cybersecurity-advisories/aa21-356a)
- Decision: Retrieved HTML edition of AA21-356A. Same-family candidate; edition equivalence unresolved. No additional records or independent corroboration claim.
- Access timestamp: 2026-11-14T18:23:49.746009+00:00
- Capture SHA-256: `a062421cb66bdda376021397d3cd42097d585e6dfab4c6b5bcdabe2e6132987c`

### L06

- URL: [https://www.cisa.gov/news-events/directives/ed-22-02-mitigate-apache-log4j-vulnerability](https://www.cisa.gov/news-events/directives/ed-22-02-mitigate-apache-log4j-vulnerability)
- Decision: Selected ED22-02 route returned HTTP 404. Alternate official route/archive recovery pending; no zero scores.
- Access timestamp: 2026-11-14T18:23:49.747536+00:00
- Retrieval result: HTTP Error 404: Not Found

### L07

- URL: [https://github.com/cisagov/log4j-affected-db](https://github.com/cisagov/log4j-affected-db)
- Decision: Retrieved CISA affected-products repository page. Target relevance, retained revision and coding decision pending.
- Access timestamp: 2026-11-14T18:23:50.058362+00:00
- Capture SHA-256: `c96ba6f2a1a05e183646b9c984d3352f3d68f77b0729c1f282403c440a8e537b`

### L08

- URL: [https://www.cisa.gov/sites/default/files/publications/AA22-174A_Joint_CSA_Malicious_Cyber_Actors_Exploiting_Log4Shell_in_Unpatched_VMware_Horizon_Systems_FINAL.pdf](https://www.cisa.gov/sites/default/files/publications/AA22-174A_Joint_CSA_Malicious_Cyber_Actors_Exploiting_Log4Shell_in_Unpatched_VMware_Horizon_Systems_FINAL.pdf)
- Decision: VMware Horizon campaign advisory: excluded from this non-VMware scenario. No zero scores.
- Access timestamp: 2026-11-14T18:23:50.171597+00:00
- Capture SHA-256: `368d090969cd89d72e772bd878691623a9ca7914dbf91a549d9ef77f155373bf`

### O01

- URL: [https://www.microsoft.com/en-us/security/blog/2023/03/24/guidance-for-investigating-attacks-using-cve-2023-23397/](https://www.microsoft.com/en-us/security/blog/2023/03/24/guidance-for-investigating-attacks-using-cve-2023-23397/)
- Decision: Existing baseline source; current capture retained. No replacement of November 9 records.
- Access timestamp: 2026-11-14T18:23:47.329437+00:00
- Capture SHA-256: `1f5fcb99cc40d5cb1fa9fb5b8b7608f3e31557963daa268f0a029d6815749ec5`

### O02

- URL: [https://cert.europa.eu/publications/security-advisories/2023-018/](https://cert.europa.eu/publications/security-advisories/2023-018/)
- Decision: Existing baseline source; current capture retained. No new scores.
- Access timestamp: 2026-11-14T18:23:47.333947+00:00
- Capture SHA-256: `df8d95e294ca532a700d8c19d477ced74482b39f412037314227165760b95d98`

### O03

- URL: [https://www.cyber.gc.ca/en/alerts-advisories/microsoft-outlook-zero-day-vulnerability-allowing-ntlm-credential-theft](https://www.cyber.gc.ca/en/alerts-advisories/microsoft-outlook-zero-day-vulnerability-allowing-ntlm-credential-theft)
- Decision: Existing baseline source; current capture retained. No new scores.
- Access timestamp: 2026-11-14T18:23:47.335947+00:00
- Capture SHA-256: `ebff2ac4c665c42f3b4e7c5f28e028253a51c8a80291ac3ac01addf1b7d2d311`

### O04

- URL: [https://learn.microsoft.com/en-us/windows-server/security/credentials-protection-and-management/protected-users-security-group](https://learn.microsoft.com/en-us/windows-server/security/credentials-protection-and-management/protected-users-security-group)
- Decision: Conditional implementation source: Protected Users. Prerequisites and account eligibility unresolved; no numeric credit.
- Access timestamp: 2026-11-14T18:23:47.339970+00:00
- Capture SHA-256: `611490c20fd0828a63e42b04365a2d21452a78ac2a872ab4b8258ccbc92a5067`

### O05

- URL: [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-r2-and-2012/jj852241(v=ws.11)](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-r2-and-2012/jj852241(v=ws.11))
- Decision: Conditional implementation source: NTLM policy. Legacy platform coverage and deployment compatibility unresolved; no numeric credit.
- Access timestamp: 2026-11-14T18:23:47.343482+00:00
- Capture SHA-256: `184c0f8119982e6827e9714ec9eac77a369491f1395a7c32d363373c67c53b1e`

### O06

- URL: [https://support.microsoft.com/en-us/servicing/os/windows-server/2020/03/preventing-smb-traffic-from-lateral-connections-and-entering-or-leaving-the-network](https://support.microsoft.com/en-us/servicing/os/windows-server/2020/03/preventing-smb-traffic-from-lateral-connections-and-entering-or-leaving-the-network)
- Decision: Retrieved; linked SMB guidance. Category coding and compatibility review pending.
- Access timestamp: 2026-11-14T18:23:47.397785+00:00
- Capture SHA-256: `ad1cf08d89e155cf777a9d7f6a40ad7e701d0ac81ac4d5170fd668abf8255ad9`

### O07

- URL: [https://microsoft.github.io/CSS-Exchange/Diagnostics/ExchangeLogCollector/](https://microsoft.github.io/CSS-Exchange/Diagnostics/ExchangeLogCollector/)
- Decision: Retrieved; linked Exchange log collector. Category coding and prerequisite review pending.
- Access timestamp: 2026-11-14T18:23:47.834077+00:00
- Capture SHA-256: `c4ca152d6aebe916a36e2a60ece1b7248729558110cf7ee4b1dcfa6bbb9142c6`

### O08

- URL: [https://microsoft.github.io/CSS-Exchange/Security/CVE-2023-23397/](https://microsoft.github.io/CSS-Exchange/Security/CVE-2023-23397/)
- Decision: Legacy script-document URL returned HTTP 404. Recovery led to archived O12; no seven-zero record.
- Access timestamp: 2026-11-14T18:23:48.010917+00:00
- Retrieval result: HTTP Error 404: Not Found

### O09

- URL: [https://msrc.microsoft.com/update-guide/vulnerability/CVE-2023-23397](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2023-23397)
- Decision: Retrieved JavaScript shell without substantive advisory text. Unavailable for coding; no zero scores.
- Access timestamp: 2026-11-14T18:23:48.077004+00:00
- Capture SHA-256: `42343a24ec1d9c34c3c5aed0c71bb3958356c51d796379d5a8c7a17469b64656`

### O10

- URL: [https://msrc.microsoft.com/blog/2023/03/microsoft-mitigates-outlook-elevation-of-privilege-vulnerability/](https://msrc.microsoft.com/blog/2023/03/microsoft-mitigates-outlook-elevation-of-privilege-vulnerability/)
- Decision: Legacy article route redirected to a generic MSRC page. Article content unavailable; no zero scores.
- Access timestamp: 2026-11-14T18:23:48.236190+00:00
- Capture SHA-256: `bdb5d94a90b9440cf930d4597f9a6c672c086904490b000a95b548eb3d09b49d`

### O11

- URL: [https://www.cisa.gov/news-events/alerts/2023/03/14/microsoft-releases-march-2023-security-updates](https://www.cisa.gov/news-events/alerts/2023/03/14/microsoft-releases-march-2023-security-updates)
- Decision: Retrieved CISA patch alert. Screening/coding pending; no credit imported into other documents.
- Access timestamp: 2026-11-14T18:23:48.251016+00:00
- Capture SHA-256: `7b7fd3e2eb7123bcb0f14ee36d20227d8e2101b7b6704227b8196e825161585d`

### O12

- URL: [https://raw.githubusercontent.com/microsoft/CSS-Exchange/b1b0980085f44fdb398dc8a1478047f2dfdf4850/docs/Security/CVE-2023-23397/index.md](https://raw.githubusercontent.com/microsoft/CSS-Exchange/b1b0980085f44fdb398dc8a1478047f2dfdf4850/docs/Security/CVE-2023-23397/index.md)
- Decision: Included archived official script procedure; seven draft records, on-premises branch only.
- Access timestamp: 2026-11-14T18:24:54.490253+00:00
- Capture SHA-256: `052bc8ff8f68f12c5ffe674973fe0f278c43bb8a3865f4a8d3e7139848c5f1d1`

### P01

- URL: [https://www.microsoft.com/en-us/msrc/blog/2021/07/clarified-guidance-for-cve-2021-34527-windows-print-spooler-vulnerability](https://www.microsoft.com/en-us/msrc/blog/2021/07/clarified-guidance-for-cve-2021-34527-windows-print-spooler-vulnerability)
- Decision: Included Microsoft clarification; seven draft records.
- Access timestamp: 2026-11-14T18:23:48.253023+00:00
- Capture SHA-256: `45140edf4f9f55af68b8165ed34dfb9c6fb5565a1d82e3f6678aac6adaf25026`

### P02

- URL: [https://cert.europa.eu/publications/security-advisories/2021-033/](https://cert.europa.eu/publications/security-advisories/2021-033/)
- Decision: Retrieved CERT-EU multi-CVE advisory. Target-CVE passage review and coding pending.
- Access timestamp: 2026-11-14T18:23:48.533619+00:00
- Capture SHA-256: `e6807ee22c3f20b692ca472cb595410518f1d6f0162d423b4d1e853e7e22411e`

### P03

- URL: [https://www.cyber.gc.ca/en/alerts-advisories/windows-print-spooler-vulnerability-remains-unpatched](https://www.cyber.gc.ca/en/alerts-advisories/windows-print-spooler-vulnerability-remains-unpatched)
- Decision: Included Canadian update 3; seven draft records.
- Access timestamp: 2026-11-14T18:23:48.615322+00:00
- Capture SHA-256: `8ece06ecd462eb0664e1903a1dcf9ebf182e456fec5a6ee466830b9fe8cd4046`

### P04

- URL: [https://www.kb.cert.org/vuls/id/383432/](https://www.kb.cert.org/vuls/id/383432/)
- Decision: Included CERT/CC revision 32; seven draft records. Gzip response decoded for reading.
- Access timestamp: 2026-11-14T18:23:48.757503+00:00
- Capture SHA-256: `46870f7bd0267e15f25a7e905844f1c972eb22f092a1d2d25cbfa98d8d6db054`

### P05

- URL: [https://support.microsoft.com/en-gb/servicing/os/windows/2021/07/kb5005010-restricting-installation-of-new-printer-drivers-after-applying-the-july-6-2021-updates](https://support.microsoft.com/en-gb/servicing/os/windows/2021/07/kb5005010-restricting-installation-of-new-printer-drivers-after-applying-the-july-6-2021-updates)
- Decision: Included Microsoft KB5005010; seven draft records. Other-CVE and later-default material bounded.
- Access timestamp: 2026-11-14T18:23:48.812152+00:00
- Capture SHA-256: `214f461560159bafc2268cd668ad21d6009121afff8eb884058dcd9067c9ad60`

### P06

- URL: [https://www.cisa.gov/news-events/directives/ed-21-04-mitigate-windows-print-spooler-service-vulnerability](https://www.cisa.gov/news-events/directives/ed-21-04-mitigate-windows-print-spooler-service-vulnerability)
- Decision: Retrieved archived ED21-04, including its January 8, 2026 closure notice. Technical versus federal administrative scope review pending.
- Access timestamp: 2026-11-14T18:23:48.815153+00:00
- Capture SHA-256: `5a8dc8d2b49f31e967c6165b4fff7f443a0cdbdec2b4bc3d9d76cb3171b26fb0`

### P07

- URL: [https://content.govdelivery.com/accounts/USDHSCISA/bulletins/2e804a2](https://content.govdelivery.com/accounts/USDHSCISA/bulletins/2e804a2)
- Decision: Retrieved directive announcement; potential same-family duplication with P06. Not scored.
- Access timestamp: 2026-11-14T18:23:48.959753+00:00
- Capture SHA-256: `f98bc82f003ba013dcc7da5c4d21fc500d17020be474f22338e1f12ed8a53404`

### P08

- URL: [https://learn.microsoft.com/en-us/windows-server/security/windows-services/security-guidelines-for-disabling-system-services-in-windows-server](https://learn.microsoft.com/en-us/windows-server/security/windows-services/security-guidelines-for-disabling-system-services-in-windows-server)
- Decision: Retrieved Windows Server services guidance. Print Spooler section review/coding pending.
- Access timestamp: 2026-11-14T18:23:49.225442+00:00
- Capture SHA-256: `30ff8d85fdcd7d0266b4a7910c8a57b34b0f46d4c306748f51cff1ad235ca2f6`

### P09

- URL: [https://learn.microsoft.com/en-us/defender-for-identity/security-assessment-print-spooler](https://learn.microsoft.com/en-us/defender-for-identity/security-assessment-print-spooler)
- Decision: Domain-controller-only assessment: excluded from member-print-server scenario. No zero scores.
- Access timestamp: 2026-11-14T18:23:49.330060+00:00
- Capture SHA-256: `c55bd7200ff331f5c100e7915c24bba5f06ae1ab1b82f835d4b49b76ba0439f6`

## Open work before the source set can close

1. Resolve substantive MSRC advisory retrieval for Outlook and the Print Spooler starting route; a shell is not advisory content.
2. Finish Outlook SMB, log collector, CISA alert and conditional identity-policy decisions. Establish current script-document provenance separately from the archived O12 procedure.
3. Finish Print Spooler CERT-EU, service guidance and ED21-04 scope review. Distinguish directive compliance/closure from closure of a compromised host investigation.
4. Finish Log4j CERT-EU and CISA repository review, recover the directive, and compare the PDF/HTML editions without double counting.
5. Screen relevant direct official links in the retained captures. Log4j’s linked incident-response material, CERT-NZ and NCSC-NL routes need decisions. General IR material needs an explicit general-context facet and compatible scenario; do not substitute it silently for CVE-specific guidance.
6. Record an include/exclude/inaccessible decision for every eligible route, including remaining official links. The capture archive retains the extracted link lists for this task; this document is not a claim that every link has been adjudicated.

## Capture handling

The companion evidence archive contains captured responses, derived reading text and JSON metadata. HTTP success does not prove the substantive document was retrieved. O09 and O10 illustrate that distinction. P04’s captured response is gzip compressed; its stored-byte hash is retained and the reading text was regenerated after decompression. O12 is pinned to an official repository commit. No publisher’s historical date is used as proof that a current capture was available at that time.
