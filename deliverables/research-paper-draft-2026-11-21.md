# Beyond the Patch

## Evidence for closing known exploited vulnerability cases

Leena Sai Sree Maridi, Saint Louis University

Working paper, November 21, 2026. Researcher and supervisor review pending.

## Abstract

Installing a security update does not establish whether a system was exploited before the update or whether the effects of that exploitation have been addressed. This pilot examines how selected official guidance supports those separate decisions. It uses structured document analysis of five known-exploited vulnerabilities: PAN-OS CVE-2024-3400, MOVEit CVE-2023-34362, Outlook CVE-2023-23397, Print Spooler CVE-2021-34527 and Log4j CVE-2021-44228. Seven response categories are assessed through separate ordinal scales for actionability and evidence specificity. An exploratory synthesis brings together 259 records from 37 case and document-version units while preserving their observation dates and review histories. The recorded sets contain detailed instructions for particular response tasks, but high category scores can conceal narrower coverage. Technical response disposition, administrative closure and acceptance of uncertainty also produce different results when treated as separate facets. These observations support a proposed closure review record that keeps remediation, investigation, recovery and authorization visible. Unequal source sets, unavailable historical versions, open linked-source decisions and incomplete independent coding limit the findings.

## Introduction

Vulnerability management and incident response meet when a vulnerability is known to have been exploited. A defender needs to remediate the affected software while also considering whether earlier activity changed the system, exposed identities or left persistence. The decision to close the vulnerability record may therefore depend on evidence that a patch check cannot provide.

Known exploitation is population-level context. It does not mean that every affected asset was compromised. The appropriate response depends on exposure, available observations and the consequences of the attacker's possible access. This study keeps that distinction explicit through analytical scenarios rather than assuming an incident has occurred on a real system.

The pilot asks what instructions and evidence requirements are present in selected official guidance; how these differ across response tasks; and what they can support when a team considers closure. The intended contribution is a documented comparison and a practical review record. It is not a measurement of vendor response quality across the market.

## Related work

Patch-management guidance provides the remediation side of the problem. [NIST SP 800-40r4](https://doi.org/10.6028/NIST.SP.800-40r4) includes verification within the patch-management process. General incident-recovery guidance separately addresses restoration, completion and documentation. [NIST SP 800-61r3](https://doi.org/10.6028/NIST.SP.800-61r3) provides relevant background for those decisions.

Research on vulnerability communication shows why information should be evaluated against its intended task. [Allodi and colleagues](https://doi.org/10.1145/3176258.3176340) study the relationship between information cues and CVSS assessment accuracy. [Imtiaz and colleagues](https://arxiv.org/abs/2112.06804) examine security-release documentation. Neither study measures compromise-response closure, but both offer relevant approaches to inspecting the content supplied to a reader.

Incident records also require clear meanings. [Grispos and colleagues](https://arxiv.org/abs/1901.03723) investigate data-quality problems in one organization's response process. Their setting differs from public advisories, but the distinction between recording an action and recording a usable conclusion is relevant here. The accompanying [appraisal](../research-notes/related-work-appraisal-2026-11-21.md) documents the material inspected and limits of transfer. This is a scoped literature review rather than a systematic search.

## Method

### Case selection and scenarios

The five cases come from the existing purposive pilot selected using the retained October 28, 2026 KEV snapshot. They cover a network security appliance, managed file transfer, a mail client and server environment, a Windows service and an application library. The small, purposive sample does not support prevalence estimates for KEV or comparisons of vendors as populations.

Each case has a defined successful-exploitation scenario. PAN-OS assumes interactive root access to a locally managed virtual firewall. MOVEit assumes successful exploitation of self-managed Transfer with unauthorized changes and possible file disclosure. Outlook assumes unauthorized mailbox access following credential exposure. Print Spooler assumes SYSTEM execution on a member print server. Log4j assumes code execution as a Linux application's service account. These different capabilities matter to the response tasks under review. They are assumptions used to inspect guidance, not observations from incidents.

### Sources and version policy

Eligible material includes vendor advisories and implementation documents, government or CSIRT guidance and compatible official documents reached through the recorded source routes. Source boundaries and decisions are retained at document level. A linked procedure is not treated as if it appeared in the referring advisory.

The analysis preserves the source observations made between October 28 and November 14. November 21 is the synthesis date. It is not a replacement source cutoff. This review combines the available dated series for exploratory comparison; it does not present them as a common-date survey of all guidance.

The resulting primary dataset has 259 category records from 37 case and document-version units. Of these, 231 are inherited pilot rows and 28 are new records from four retained November 14 sources. Seven extortion-scenario MOVEit rows remain separate. Exact raw versions or the retained KEV snapshot are available for 22 scored units; 15 lack the exact original raw source. Related editions and a KEV entry used in more than one case are not independent corroboration.

### Coding and synthesis

One record represents a document version, CVE and response category. E1 concerns exposure; E2 investigation; E3 containment and access restriction; E4 credentials and sessions; E5 recovery; E6 remediation verification; and E7 response disposition and closure. All seven categories are relevant to the stipulated primary scenarios. A document's silence is therefore a coverage observation, not a reason to declare the category inapplicable.

Actionability and evidence specificity use separate 0–3 scales. The first describes the operational detail of an instruction. The second describes the evidence named and whether the text connects it to verification or a decision. The analysis reports separate maxima with their sources. It does not average or sum the scales.

Facet distinctions preserve meaning within a category. Encryption of stored secrets differs from replacement of exposed credentials. A mitigation check differs from an installed-build check. E7 distinguishes a technical response conclusion, treatment of uncertainty and administrative authorization.

Earlier researcher decisions are applied through a separate log. The accepted MOVEit E7 revision changes its historical 0/0 to technical-disposition 2/3. A proposed Log4j E5 correction removes credit for a general incident-response referral that supplies no recovery action in the document itself. Original values remain available. New coding and that correction await researcher acceptance.

## Results

Each table entry gives actionability and evidence maxima in that order. The two values may come from different documents or facets. The table describes the included sets and is not a response-completeness score.

| Case | E1 | E2 | E3 | E4 | E5 | E6 | E7 |
|---|---|---|---|---|---|---|---|
| PAN-OS | 3/3 | 3/3 | 3/3 | 3/3 | 2/3 | 3/3 | 2/3 |
| MOVEit | 2/2 | 3/3 | 2/0 | 3/3 | 3/3 | 2/2 | 2/3 |
| Outlook | 1/2 | 3/3 | 2/0 | 2/0 | 3/3 | 1/0 | 0/0 |
| Print Spooler | 3/3 | 0/0 | 3/3 | 0/0 | 0/0 | 3/3 | 0/0 |
| Log4j | 2/3 | 2/3 | 3/2 | 0/0 | 0/0 | 2/3 | 0/0 |

The [comparison appendix](../analysis/pilot-comparison-2026-11-21.md) identifies every source attaining a maximum. The [source register](../data/pilot-source-register-2026-11-21.csv) links those identifiers to URLs and retained versions.

### Specificity does not establish breadth

PAN-OS illustrates the problem with reading a maximum as complete category coverage. Its E4 evidence maximum is supported by an encryption-setting check. That observation can support a decision about encryption while saying little about whether every exposed password, private key or session has been addressed. The recovery document separately discusses secret and certificate replacement. Both functions matter, but they are not interchangeable.

Outlook provides a similar example in recovery. The archived official script procedure supports audit and cleanup of selected mailbox items. Its detailed score is confined to those items. It does not establish that the entire mailbox environment is free of persistence or that affected authentication material has been invalidated.

### Verification depends on what is checked

The recorded sets contain affected-version lists, fixed targets, configuration checks and mitigation tests. These observations support different decisions. PAN-OS has both mitigation and installed-build facets in the historical coding. Print Spooler includes detailed registry checks. Log4j includes instructions to verify mitigation through more than one method. A high verification score must therefore be accompanied by the property being verified.

The Print Spooler set is concentrated on software updates and restrictive settings. Its zero investigation and recovery maxima describe those included documents. They do not establish that Microsoft or government organizations publish no investigation guidance elsewhere.

### Closure findings depend on scope

The primary interpretation credits PAN-OS and MOVEit passages that connect a post-response assessment to a technical transition. Both receive E7 maxima of 2/3. A narrower interpretation requiring administrative closure changes both to 0/0; the other cases remain 0/0 within the included set.

The separate MOVEit extortion guide adds an administrative role at 2/1. With the accepted primary scores applied, the combined maxima remain 2/3. The unchanged number conceals a broader set of facets, which is why the source and meaning must accompany the score.

Source availability also matters. Excluding PAN-OS S010 because the original raw capture is missing changes its E7 maximum to 0/0. Its E6 maximum remains 3/3 through a mitigation check, but the installed-build facet supplied by S010 is no longer supported in that restricted set. These results are detailed in the [revision memo](../analysis/pilot-revision-memo-2026-11-21.md).

## Discussion

The pilot's main practical observation is that a documented response decision needs more than a category score. It needs the specific task, the evidence considered and the conclusion that evidence supports. Keeping those elements together prevents a detailed instruction for one function from being mistaken for complete incident response.

The proposed [closure review record](closure-checklist-2026-11-21.md) follows this approach. It asks the reviewer to distinguish exposure assessment, investigation, containment, identity response, recovery and remediation verification before recording technical disposition and authorization. The additional evidence fields are research recommendations derived from the observed boundaries. They are not presented as requirements stated uniformly by the reviewed sources.

The checklist should also preserve uncertainty. Missing telemetry may prevent a strong conclusion even when the patch is verified. Whether a case can close under those circumstances depends on the organization's decision process and the recorded acceptance of remaining risk. The pilot does not establish a universal minimum evidence threshold for declaring an asset uncompromised.

## Limitations

The five scenarios differ in deployment and assumed attacker capability. Their source sets differ in size, date and retrieval coverage. The comparison therefore cannot isolate whether a difference comes from publisher practice, document purpose, scenario choice or source discovery.

Some relevant direct links remain unreviewed or inaccessible. This particularly limits negative findings for recovery and closure. Exact original raw versions are unavailable for 15 scored units, including the PAN-OS source supporting its technical closure maximum. The package shows that dependency rather than hiding it behind an aggregate result.

The researcher previously reported reviewing the PAN-OS and MOVEit rows, but no independently coded second dataset or measured agreement result is available. This pass adds structural validation and targeted source analysis; it is not independent semantic recoding of every row. New rows and the proposed recovery correction still need researcher review.

No response procedure was executed against a production or laboratory asset for this synthesis. Detection accuracy, operational effectiveness, user understanding and improved closure decisions were not measured. The checklist therefore remains a proposal for later evaluation.

## Conclusion

The recorded guidance supplies detailed support for particular response tasks, while leaving other decisions to linked sources or an organization's response process. The important distinctions are between a specific task and complete category coverage, between mitigation verification and patch verification, and between technical disposition and administrative closure. A useful closure record should preserve those distinctions and state what remains uncertain. The next review should concentrate on the new coding, the source-dependent closure findings and whether the proposed record fits the intended research submission.

## References and supporting records

Souppaya, M., and Scarfone, K. (2022). [Guide to Enterprise Patch Management Planning: Preventive Maintenance for Technology](https://doi.org/10.6028/NIST.SP.800-40r4). NIST SP 800-40r4.

Nelson, A., Rekhi, S., Souppaya, M., and Scarfone, K. (2025). [Incident Response Recommendations and Considerations for Cybersecurity Risk Management: A CSF 2.0 Community Profile](https://doi.org/10.6028/NIST.SP.800-61r3). NIST SP 800-61r3.

Allodi, L., Banescu, S., Femmer, H., and Beckers, K. (2018). [Identifying Relevant Information Cues for Vulnerability Assessment Using CVSS](https://doi.org/10.1145/3176258.3176340). CODASPY.

Imtiaz, N., Khanom, A., and Williams, L. (2021). [Open or Sneaky? Fast or Slow? Light or Heavy?: Investigating Security Releases of Open Source Packages](https://arxiv.org/abs/2112.06804). arXiv:2112.06804v1, preprint version reviewed.

Grispos, G., Glisson, W. B., and Storer, T. (2019). [How Good is Your Data? Investigating the Quality of Data Generated During Security Incident Response Investigations](https://arxiv.org/abs/1901.03723). HICSS-52; author version reviewed.

CVE-source references are retained in the [37-unit source register](../data/pilot-source-register-2026-11-21.csv). Record-level reasons, original scores and review status are in the [primary dataset](../data/pilot-records-2026-11-21.csv). The [analysis plan](../methodology/pilot-analysis-plan-2026-11-21.md) explains the present scope without replacing the historical protocol.
