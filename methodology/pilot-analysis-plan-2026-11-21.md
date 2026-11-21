# Analysis plan for the five case pilot

Date: November 21, 2026. Status: plan used for this review package; researcher acceptance of the new coding remains open.

The study examines how official guidance supports response decisions when exploitation may have preceded remediation. The five selected CVEs remain the sample. The researcher confirmed on November 21 that there is no additional minimum case count or required submission format. The appointment deadline remains December 18.

## Scope of this analysis

This package synthesizes the existing dated pilot series and adds coding for four previously retained sources. It is a bounded review of the available research record. It does not turn the unfinished discovery process into a completed search or establish a new common observation date.

The October 28 KEV snapshot remains the selection frame. Source observations span October 28 to November 14. November 21 is the synthesis and coding-review date. Missing versions stay missing; later content is not substituted for them. The original v0.2 records and v0.3 working rules remain historical documents. This plan does not declare the main-study protocol frozen.

## Cases and assumptions

| Case | CVE | Analytical scenario | Important limits |
|---|---|---|---|
| PAN-OS | CVE-2024-3400 | Internet-facing, locally managed VM-Series firewall on an affected 11.1 release; interactive root access assumed | No HA, Panorama or hardware-appliance branch |
| MOVEit | CVE-2023-34362 | Self-managed Windows MOVEit Transfer 2023.0; successful exploitation assumed | No assumed host root access or data extortion beyond the recorded primary scenario |
| Outlook | CVE-2023-23397 | Affected Outlook for Windows with on-premises Exchange; unauthorized mailbox access assumed after credential exposure | No assumed workstation administrator access; deployment prerequisites remain explicit |
| Print Spooler | CVE-2021-34527 | Windows Server 2019 member print server; authenticated exploitation with SYSTEM execution assumed | Not a domain controller; credential theft and domain compromise are unknown |
| Log4j | CVE-2021-44228 | Internet-facing Linux application using Java 8 and log4j-core 2.14.1; execution as its service account assumed | No assumed root access, VMware Horizon, OT/ICS or extortion |

The scenarios are analytical constructions. They are not incident observations. The different attacker capabilities affect applicability and limit direct comparisons. E1–E7 remain relevant to these response scenarios, so the primary coding uses A1. A source's silence does not change applicability.

## Coding rules

The unit is one document version, one CVE and one category. Each included unit has seven records. Keep an instruction in its own source; do not inherit the procedure or score of a linked page.

| Score | Actionability | Evidence specificity |
|---|---|---|
| 0 | No relevant action | No relevant evidence requirement |
| 1 | General instruction | General evidence or verification reference |
| 2 | Specific steps or technique | Named artifact, observation or result |
| 3 | Reproducible procedure with relevant sequence or parameters | Evidence explicitly connected to verification or a decision |

Score the two dimensions separately. A build target can support evidence score 2 without supplying an installed-build check. A general referral to incident response receives no E5 recovery credit unless the document supplies a compatible recovery action. Keep investigation, evidence preservation and recovery distinct.

E3 includes preventive restrictions and containment, with their differences explained. E4 separates protection of stored secrets, replacement of credentials, revocation of keys or tokens, and session invalidation. E5 covers eradication, rebuild, restoration and integrity. E6 identifies whether a check confirms a patch, mitigation or other configuration.

E7 uses three facets: technical response disposition, uncertainty or residual-risk treatment, and administrative authorization. Technical credit requires an explicit post-response assessment connected to ending or transitioning compromise response. A patch-compliance report, directive retirement or service reopening alone does not meet that threshold. Report the narrower administrative-only interpretation separately.

For any later conditional coding, use A3 with a named trigger and its status. An unresolved trigger has NA scores in unconditional analysis. Use A2 for justified nonapplicability and A4 for an unresolved applicability decision. Inaccessible material receives no numeric score.

## Synthesis and review

Retain original scores alongside the values used in this analysis. Apply recorded researcher decisions through a decision log. Label new proposed corrections and new coding separately from previously accepted decisions.

Calculate the maximum on each scale for each case and category and list every source attaining it. Show covered facets alongside those maxima. Do not average scores, calculate a completeness total, rank vendors or estimate prevalence in the KEV Catalog. A large source set has more opportunities to contain detailed guidance, so its maximum is not a fair measure of publisher performance.

Use three sensitivity checks: administrative-only E7, exclusion of PAN-OS S010 because its original raw capture is missing, and the separate MOVEit extortion scenario. Keep each changed assumption visible. Do not merge the extortion records into the primary case.

Structural checks cover identifiers, counts, score ranges, category grids, decision application, source references, calculations and captured-byte hashes. They do not replace source interpretation. The recorded earlier researcher review is not independent coding agreement. No second human coding dataset or agreement statistic is available.

## Completion criteria

The current package can support a reviewed pilot report once the researcher accepts or revises the new rows and proposed E5 correction. A publication claim that retrieval is complete additionally requires decisions for the outstanding direct links, documented in the [source decisions](../research-notes/pilot-source-decisions-2026-11-21.md). Any expanded study would require a separately fixed selection procedure, consistent observation policy and appropriate recoding. Expansion is outside this package.
