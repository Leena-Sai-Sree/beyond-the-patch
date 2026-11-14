# Print Spooler: first pilot coding pass

Date: 2026-11-14  
CVE: CVE-2021-34527  
Series: November 14; 28 draft records across four documents

This dated draft follows [coding guide v0.2](../methodology/coding-guide-v0.2.md) and [pilot rules v0.3](../methodology/pilot-rules-v0.3-draft.md). It records a document review, not an incident investigation or a test of the recommended procedures. Independent coding review has not been completed.

Actionability and evidence specificity use separate 0–3 scales. All seven categories are relevant to the stipulated successful-exploitation scenario and receive A1. Source-specific conditions limit which passages receive credit. A score of zero describes the reviewed document, not everything its publisher has written. Scores must not be averaged.

## Scenario P34527-C

Source-supported context: the affected Windows Print Spooler can permit authenticated remote code execution with SYSTEM privileges. The frozen October 28 KEV snapshot includes this CVE, with dateAdded 2021-11-03.

Analytical assumptions: an enterprise Windows Server 2019 member print server has the vulnerable service enabled, is reachable by an authenticated attacker, and has suffered successful SYSTEM-level execution. It is not a domain controller. The study assumes the server is affected before remediation; it does not describe an observed machine. Service interruption and loss of printing are possible response costs.

Unknowns: installed updates, Point and Print configuration, attacker persistence, credential access, affected data, exposure duration and available telemetry. SYSTEM capability makes investigation, identity response and recovery relevant; it does not establish that credentials were stolen or the domain was compromised. Domain-controller-only advice receives no credit for this scenario.

## Source selection

P01 is Microsoft’s July 8, 2021 clarification. P03 is Canadian alert AL21-011 update 3, updated July 7, with page-modified date July 8, 2021. P04 is CERT/CC VU#383432, revision 32, last updated August 3, 2021. P05 is Microsoft KB5005010 as retrieved, including its discussion of later driver-installation defaults. These versions have different histories and are not simultaneous observations from July 2021.

The four-document set is a first pass. Other starting sources and linked documents remain in the screening log. Documents about CVE-2021-1675, CVE-2021-34481 or other Spooler flaws do not automatically provide evidence about this CVE.

## Retained source versions

The observation date is November 14, 2026. Displayed publication dates do not establish that the retrieved text matches an earlier version. Raw captures and retrieval metadata are retained in the accompanying local evidence archive; they are not existing repository files. SHA-256 identifies captured bytes, not source completeness.

### P01

- Source: [https://www.microsoft.com/en-us/msrc/blog/2021/07/clarified-guidance-for-cve-2021-34527-windows-print-spooler-vulnerability](https://www.microsoft.com/en-us/msrc/blog/2021/07/clarified-guidance-for-cve-2021-34527-windows-print-spooler-vulnerability)
- Retrieved: 2026-11-14T18:23:48.253023+00:00
- SHA-256: `45140edf4f9f55af68b8165ed34dfb9c6fb5565a1d82e3f6678aac6adaf25026`

### P03

- Source: [https://www.cyber.gc.ca/en/alerts-advisories/windows-print-spooler-vulnerability-remains-unpatched](https://www.cyber.gc.ca/en/alerts-advisories/windows-print-spooler-vulnerability-remains-unpatched)
- Retrieved: 2026-11-14T18:23:48.615322+00:00
- SHA-256: `8ece06ecd462eb0664e1903a1dcf9ebf182e456fec5a6ee466830b9fe8cd4046`

### P04

- Source: [https://www.kb.cert.org/vuls/id/383432/](https://www.kb.cert.org/vuls/id/383432/)
- Retrieved: 2026-11-14T18:23:48.757503+00:00
- SHA-256: `46870f7bd0267e15f25a7e905844f1c972eb22f092a1d2d25cbfa98d8d6db054`
- Capture format: gzip-compressed response retained as `P04.html`; text was extracted after decompression. The hash above identifies the compressed capture.

### P05

- Source: [https://support.microsoft.com/en-gb/servicing/os/windows/2021/07/kb5005010-restricting-installation-of-new-printer-drivers-after-applying-the-july-6-2021-updates](https://support.microsoft.com/en-gb/servicing/os/windows/2021/07/kb5005010-restricting-installation-of-new-printer-drivers-after-applying-the-july-6-2021-updates)
- Retrieved: 2026-11-14T18:23:48.812152+00:00
- SHA-256: `214f461560159bafc2268cd668ad21d6009121afff8eb884058dcd9067c9ad60`

### P01: document-category records

| Record | Category | Applicability | Actionability | Evidence | Facet | Passage and coding reason |
|---|---|---|---:|---:|---|---|
| P34527-N14-P01-01 | E1 Exposure | A1 | 2 | 3 | Configuration-dependent exposure | Immediate steps: review the named PointAndPrint registry values after applying the update; zero or absent values support the stated secure-configuration decision. |
| P34527-N14-P01-02 | E2 Investigation | A1 | 0 | 0 | No compatible instruction | Reviewed substantive text: no post-exploitation investigation instruction or evidence requirement for this scenario. Silence is not inapplicability. |
| P34527-N14-P01-03 | E3 Containment | A1 | 2 | 2 | Preventive hardening | Immediate steps: use the two named registry settings to avoid an insecure Point and Print configuration. This is prevention of further exploitation, not isolation or eviction. |
| P34527-N14-P01-04 | E4 Credentials and sessions | A1 | 0 | 0 | No compatible instruction | Reviewed substantive text: no credential replacement or session invalidation instruction or evidence requirement for this scenario. Silence is not inapplicability. |
| P34527-N14-P01-05 | E5 Recovery | A1 | 0 | 0 | No compatible instruction | Reviewed substantive text: no eradication, rebuild or restoration instruction or evidence requirement for this scenario. Silence is not inapplicability. |
| P34527-N14-P01-06 | E6 Remediation verification | A1 | 3 | 3 | Mitigation/configuration verification | Immediate steps: apply the update, inspect the specified registry path, and check both values against zero/absence conditions. Credit concerns configuration verification; no installed-build query is supplied. |
| P34527-N14-P01-07 | E7 Closure | A1 | 0 | 0 | No compatible instruction | Reviewed substantive text: no evidence-linked incident closure instruction or evidence requirement for this scenario. Silence is not inapplicability. |

### P03: document-category records

| Record | Category | Applicability | Actionability | Evidence | Facet | Passage and coding reason |
|---|---|---|---:|---:|---|---|
| P34527-N14-P03-01 | E1 Exposure | A1 | 0 | 2 | Affected-product context | Details: names potentially affected Windows products but supplies no asset-inspection procedure. The early product assessment is tentative. |
| P34527-N14-P03-02 | E2 Investigation | A1 | 0 | 0 | No compatible instruction | Reviewed substantive text: no post-exploitation investigation instruction or evidence requirement for this scenario. Silence is not inapplicability. |
| P34527-N14-P03-03 | E3 Containment | A1 | 2 | 0 | Preventive service restriction | Mitigation and Update 1: disable Spooler or inbound remote printing. No result-verification artifact is specified in this alert; linked instructions are separate sources. |
| P34527-N14-P03-04 | E4 Credentials and sessions | A1 | 0 | 0 | No compatible instruction | Reviewed substantive text: no credential replacement or session invalidation instruction or evidence requirement for this scenario. Silence is not inapplicability. |
| P34527-N14-P03-05 | E5 Recovery | A1 | 0 | 0 | No compatible instruction | Reviewed substantive text: no eradication, rebuild or restoration instruction or evidence requirement for this scenario. Silence is not inapplicability. |
| P34527-N14-P03-06 | E6 Remediation verification | A1 | 1 | 0 | Update advice | Update 3: install the applicable updates and follow hardening guidance. The alert does not supply an installed-update or effective-policy verification procedure. |
| P34527-N14-P03-07 | E7 Closure | A1 | 0 | 0 | No compatible instruction | Reviewed substantive text: no evidence-linked incident closure instruction or evidence requirement for this scenario. Silence is not inapplicability. |

### P04: document-category records

| Record | Category | Applicability | Actionability | Evidence | Facet | Passage and coding reason |
|---|---|---|---:|---:|---|---|
| P34527-N14-P04-01 | E1 Exposure | A1 | 2 | 3 | Configuration-dependent exposure | Solution / Apply an update and Enable security prompts: names the Point and Print values and connects insecure nonzero settings to residual exploitability. |
| P34527-N14-P04-02 | E2 Investigation | A1 | 0 | 0 | No compatible instruction | Reviewed substantive text: no post-exploitation investigation instruction or evidence requirement for this scenario. Silence is not inapplicability. |
| P34527-N14-P04-03 | E3 Containment | A1 | 3 | 2 | Preventive service/network restriction | Apply a workaround: supplies stop/disable commands, a restart condition for the inbound-printing policy, named ports, and registry settings. Configuration artifacts are named; compromised-host isolation is not established. |
| P34527-N14-P04-04 | E4 Credentials and sessions | A1 | 0 | 0 | No compatible instruction | Reviewed substantive text: no credential replacement or session invalidation instruction or evidence requirement for this scenario. Silence is not inapplicability. |
| P34527-N14-P04-05 | E5 Recovery | A1 | 0 | 0 | No compatible instruction | Reviewed substantive text: no eradication, rebuild or restoration instruction or evidence requirement for this scenario. Silence is not inapplicability. |
| P34527-N14-P04-06 | E6 Remediation verification | A1 | 2 | 3 | Mitigation/configuration verification | Solution: names required registry values and relates insecure settings to continued exploitability after the update. No fixed-build inspection command is supplied. |
| P34527-N14-P04-07 | E7 Closure | A1 | 0 | 0 | No compatible instruction | Reviewed substantive text: no evidence-linked incident closure instruction or evidence requirement for this scenario. Silence is not inapplicability. |

### P05: document-category records

| Record | Category | Applicability | Actionability | Evidence | Facet | Passage and coding reason |
|---|---|---|---:|---:|---|---|
| P34527-N14-P05-01 | E1 Exposure | A1 | 3 | 3 | Configuration-dependent exposure | Resolution: supplies registry and Group Policy conditions for judging remaining exposure, with a branch to corrective steps. |
| P34527-N14-P05-02 | E2 Investigation | A1 | 0 | 0 | No compatible instruction | Reviewed substantive text: no post-exploitation investigation instruction or evidence requirement for this scenario. Silence is not inapplicability. |
| P34527-N14-P05-03 | E3 Containment | A1 | 3 | 3 | Preventive hardening | Resolution steps: specifies editor path, policy choices and registry confirmation of the applied policy. Driver-installation privilege restriction is access hardening, not credential rotation. |
| P34527-N14-P05-04 | E4 Credentials and sessions | A1 | 0 | 0 | No compatible instruction | Reviewed substantive text: no credential replacement or session invalidation instruction or evidence requirement for this scenario. Silence is not inapplicability. |
| P34527-N14-P05-05 | E5 Recovery | A1 | 0 | 0 | No compatible instruction | Reviewed substantive text: no eradication, rebuild or restoration instruction or evidence requirement for this scenario. Silence is not inapplicability. |
| P34527-N14-P05-06 | E6 Remediation verification | A1 | 3 | 3 | Mitigation/configuration verification | Resolution: inspect the named registry values after policy configuration to confirm application. This verifies configuration, not installed build or removal of an attacker. |
| P34527-N14-P05-07 | E7 Closure | A1 | 0 | 0 | No compatible instruction | Reviewed substantive text: no evidence-linked incident closure instruction or evidence requirement for this scenario. Silence is not inapplicability. |

## Interpretation and disputed boundaries

The strongest procedures in this first pass concern preventing further exploitation and checking configuration. The same registry observation can inform E1 exposure assessment and E6 mitigation verification, but the two rows answer different questions; they are not independent corroborating sources.

The guidance does not make a secure configuration a test for whether earlier SYSTEM-level compromise has been resolved. E2, E4, E5 and E7 are zero only within these four reviewed documents. Pending sources prevent a CVE-wide absence claim.

Three issues need review before synthesis. First, disabling inbound printing affects the print-server role and does not remove the local attack vector. Second, later driver-installation defaults concern a changing vulnerability context; they must not be attributed entirely to CVE-2021-34527. Third, language saying no further action is necessary for a vulnerability configuration is not incident closure under the C scenario. The E7 zeros retain that distinction.
