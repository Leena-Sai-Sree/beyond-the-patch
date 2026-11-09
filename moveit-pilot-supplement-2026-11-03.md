# MOVEit pilot — November 3 supplement
CVE: CVE-2023-34362  
Date/access date: 2026-11-03  
Historical status (November 3): Bounded screening and first-pass coding complete; researcher verification was pending.
Current status (November 9): Researcher reports source review of all 84 records; accepted E7-T revision appears below and in the score-revisions file. Access/version limitations remain.  
Rules: [v0.2 protocol](../methodology/research-protocol-v0.2.md) with explicit [v0.3 draft clarifications](../methodology/pilot-rules-v0.3-draft.md)

## Relationship to existing records
The pilot roster is unchanged. The original S002 CERT-EU record was accessed October 28; N34362-S002 below is the November 3 rendering, not a replacement historical version. New records belong to a separate observation series. The retained October 28 KEV snapshot confirms selection-frame membership; it does not date these live documents.

Do not combine this supplement with the historical PAN-OS series as if they shared an observation date. Final comparative coding requires a common temporal policy and recoding as necessary.

## Analytical scenario M34362-C
Assume an affected, self-managed, internet-facing Windows server running MOVEit Transfer 2023.0.0 with a local Windows service account, credible successful exploitation, unauthorized web-server/database changes and potential file disclosure before response. These are C-state analytical assumptions, not observed incident facts. Administrative authorization and retained response records are relevant to case closure. No MOVEit Cloud deployment, Azure Blob integration, confirmed domain-wide compromise or separate ransomware encryption is assumed.

All E1–E7 categories are A1 in this scenario: exposure and investigation, access restriction, account/session response, integrity recovery, software remediation and response disposition are relevant. Azure-key advice is conditional and excluded from the scenario's unconditional scores. Do not infer root access from the SQL injection or assume the scope of exfiltration is established.

## Source register
| Version ID | Official source / publisher / type | Publication and update metadata | Eligible sections and version limitations |
|---|---|---|---|
| N34362-S001 | [MOVEit Transfer Critical Vulnerability (May 2023)](https://community.progress.com/s/article/MOVEit-Transfer-Critical-Vulnerability-31May2023), Progress, vendor advisory | Original posting 2023-05-31 in history; displayed 2023-06-16; last modified 2023-06-21 | Affects; Recommended Remediation; verification; IoCs. Target-CVE content only; later-CVE patch references retain their dates. |
| N34362-S002 | [CERT-EU 2023-033](https://cert.europa.eu/publications/security-advisories/2023-033/), CSIRT advisory | Initial 2023-06-02; v1.1 2023-06-19 | Detection, affected products, recommendations. Multi-CVE context is annotated; no linked-source score inheritance. |
| N34362-S003 | [AA23-158A official CISA bulletin](https://content.govdelivery.com/accounts/USDHSCISA/bulletins/35ecb08), CISA/FBI, government advisory distribution | Sent 2023-06-07; no later full revision history established in this rendering | MOVEit technical details/detection and relevant general mitigations; distinguish actor-wide context. Canonical CISA page returned 403. This official distribution is not presumed identical to a later canonical revision. |
| N34362-S004 | [AA23-158A, FBI-hosted PDF](https://www.ic3.gov/CSA/2023/230607.pdf), CISA/FBI | Published 2023-06-07; updated 2023-06-16 | Official alternate copy; pp. 4–8 detection/account audit and pp. 17–22 mitigations/reporting. Related to S003, not an independent corroborating advisory. |
| N34362-S005 | [Change Windows Service Account Password](https://community.progress.com/s/article/Transfer-Automation-Change-Windows-Service-Account-Password), Progress | Displayed 2024-10-11; modified 2026-02-02 | Primary advisory link; KB 000115941 includes a Transfer 15.0+ service branch. Windows Transfer procedures only; other products, web farms and Gateway branches excluded. |
| N34362-S006 | [Singapore CSA alert AL-2023-073](https://www.csa.gov.sg/alerts-and-advisories/alerts/al-2023-073/), government advisory | Dated 2023-06-02; article-specific revision date unavailable | Exposure, web-access restrictions, 30-day investigation advice, IoCs and reporting. Site footer date is not an article revision date. |
| N34362-S007 | [NHS England CC-4326](https://digital.nhs.uk/cyber-alerts/2023/cc-4326), government/health-sector alert | Published 2023-06-01; edited 2023-06-05 | Threat details, remediation steps and CVE description. Linked procedures receive no inherited credit. |
| N34362-S008 | [Canadian Cyber Centre TA505/CL0P profile](https://www.cyber.gc.ca/en/guidance/profile-ta505-cl0p-ransomware), government guidance | Published 2023-07-11; modified 2023-08-28 | MOVEit-specific campaign context and references. General threat forecasts are not defender response instructions. |
| N34362-S009 | [MyCERT MA-944.062023](https://www.mycert.org.my/portal/advisory?id=MA-944.062023), national CERT advisory | Published 2023-06-15; separate revision date unavailable | Sections 1–5; restrict IoCs to MOVEit and label general prevention/recovery advice. |
| N34362-S010 | [Progress June 9 advisory](https://community.progress.com/s/article/MOVEit-Transfer-Critical-Vulnerability-CVE-2023-35036-June-9-2023), vendor advisory | Published 2023-06-09; modified 2023-06-23 | Included only for explicit cumulative May-CVE patch guidance. The scenario requires the full-installer branch; DLL replacement requires a later starting build. |
| N34362-S011 | [Progress June 15 advisory](https://community.progress.com/s/article/MOVEit-Transfer-Critical-Vulnerability-15June2023), vendor advisory | Published 2023-06-15; modified 2023-06-27 | Only target-CVE prerequisite/cumulative-fix guidance; June-only response instructions excluded from target-CVE scoring. |
| N34362-S012 | [Retained CISA KEV entry](kev-snapshot-2026-10-28.json), government catalog | Catalog 2026.10.27; target entry added 2023-06-02 | Existing snapshot, target entry only; requiredAction and notes. This is not a newly retrieved catalog version. |

The source set contains 12 scored document units, including two versions of AA23-158A and one retained KEV entry. The eleven live documents were reviewed through rendered web/PDF text on November 3; full raw captures were not retained. Historical October 28 equivalence is unestablished. No supplied detection code or remediation procedure was executed. Version pairs are not independent corroboration.

## November 9 accepted score revision
Follow-up 19=A accepts M34362-007 at current E7-T 2/3, limited to the explicit cleanup verification outcome and subsequent response-stage transition. Thus current E7 maxima are 2/3, both supported by N34362-S001. Administrative closure is not established. The original table and historical synthesis below retain November 3 scores; apply the [score revision](score-revisions-2026-11-09.csv) for current analysis. This is a revision to one existing record, not an additional observation.

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
| M34362-022 | N34362-S004 | E1 Exposure | 2 | 2 | PDF p. 4 | Affected-build list supports exposure assessment. |
| M34362-023 | N34362-S004 | E2 Investigation | 3 | 3 | PDF pp. 5–8 | Supplied rules and account query support investigation; scope remains bounded. |
| M34362-024 | N34362-S004 | E3 General prevention | 2 | 0 | PDF pp. 18–20 | Access restrictions; no containment verification artifact. |
| M34362-025 | N34362-S004 | E4 General protection | 2 | 1 | PDF pp. 19–20 | Credential protection, not complete incident-specific revocation. |
| M34362-026 | N34362-S004 | E5 Database account validation | 3 | 3 | PDF p. 8 | Account query checks intended accounts after rebuilding; database scope only. |
| M34362-027 | N34362-S004 | E6 Patching | 1 | 0 | PDF p. 20 | General patching; no installed-fix verification procedure. |
| M34362-028 | N34362-S004 | E7 Closure | 0 | 0 | PDF pp. 21–22 | Reporting does not establish a case-closure criterion. |
| M34362-029 | N34362-S005 | E1 Exposure | 0 | 0 | Whole in-scope article | No vulnerable-version assessment. |
| M34362-030 | N34362-S005 | E2 Investigation | 0 | 0 | Whole in-scope article | No exploitation investigation procedure. |
| M34362-031 | N34362-S005 | E3 Containment | 0 | 0 | Whole in-scope article | Credential maintenance is not asset isolation. |
| M34362-032 | N34362-S005 | E4 Credential replacement | 3 | 3 | Resolution steps 1–6 | Password-reset steps, success indication and dependent-service updates. |
| M34362-033 | N34362-S005 | E5 Recovery | 0 | 0 | Resolution | Service-account maintenance only; no compromise integrity check. |
| M34362-034 | N34362-S005 | E6 Remediation verification | 0 | 0 | Whole in-scope article | No vulnerability-fix check. |
| M34362-035 | N34362-S005 | E7 Closure | 0 | 0 | Whole in-scope article | No response-disposition criterion. |
| M34362-036 | N34362-S006 | E1 Exposure | 2 | 2 | Affected versions | Build list identifies exposure; no local inspection sequence. |
| M34362-037 | N34362-S006 | E2 Investigation | 2 | 3 | 30-day review; IoCs | Named files/log patterns support suspicious-activity assessment. |
| M34362-038 | N34362-S006 | E3 Access restriction | 2 | 0 | Workaround | Specified web ports restricted; no verification artifact. |
| M34362-039 | N34362-S006 | E4 Credentials/sessions | 0 | 0 | Whole authored alert | No replacement/revocation instruction. |
| M34362-040 | N34362-S006 | E5 Recovery | 0 | 0 | Whole authored alert | Backup scanning supports investigation, not restoration. |
| M34362-041 | N34362-S006 | E6 Patching | 1 | 0 | Update recommendation | Update advice without local fixed-build verification. |
| M34362-042 | N34362-S006 | E7 Closure | 0 | 0 | Final recommendations | Support/reporting instructions are not closure criteria. |
| M34362-043 | N34362-S007 | E1 Exposure | 1 | 2 | Affected platforms; CVE description | Review advice and affected-build boundaries. |
| M34362-044 | N34362-S007 | E2 Investigation | 1 | 1 | Threat details | Check potential IoCs; artifact details delegated. |
| M34362-045 | N34362-S007 | E3 Access restriction | 2 | 0 | Remediation step 1 | Disable web protocols; no containment verification. |
| M34362-046 | N34362-S007 | E4 Credential replacement | 1 | 0 | Remediation step 2 | General reset instruction; procedure delegated. |
| M34362-047 | N34362-S007 | E5 Eradication | 2 | 0 | Remediation step 2 | Unauthorized-file/account cleanup without verification evidence. |
| M34362-048 | N34362-S007 | E6 Patch target | 1 | 2 | Step 3; CVE description | Apply fixed update; version thresholds identified, local check absent. |
| M34362-049 | N34362-S007 | E7 Closure | 0 | 0 | Remediation steps 4–6 | Verification/reopening sequence lacks explicit disposition criterion. |
| M34362-050 | N34362-S008 | E1 Exposure | 0 | 1 | MOVEit discussion | Product identified; no asset-assessment instruction. |
| M34362-051 | N34362-S008 | E2 Investigation | 0 | 2 | MOVEit discussion | Web-shell artifact identified; no investigation steps. |
| M34362-052 | N34362-S008 | E3 Containment | 0 | 0 | Whole profile | No compatible containment instruction. |
| M34362-053 | N34362-S008 | E4 Credentials/sessions | 0 | 0 | Whole profile | No credential/session response instruction. |
| M34362-054 | N34362-S008 | E5 Recovery | 0 | 0 | Whole profile | No compromise-recovery instruction. |
| M34362-055 | N34362-S008 | E6 Remediation verification | 0 | 0 | Patch references | References describe releases, not a local verification action. |
| M34362-056 | N34362-S008 | E7 Closure | 0 | 0 | Conclusion | Threat forecast is not case closure. |
| M34362-057 | N34362-S009 | E1 Exposure | 2 | 2 | Section 3 | Affected-build list identifies exposure. |
| M34362-058 | N34362-S009 | E2 Investigation | 2 | 2 | Sections 4–5 | Artifacts and monitoring recommendations; detailed investigation delegated. |
| M34362-059 | N34362-S009 | E3 General prevention | 2 | 0 | Section 5 | Access restriction and segmentation; no containment check. |
| M34362-060 | N34362-S009 | E4 General protection | 2 | 1 | Section 5 | Access protections; complete revocation procedure absent. |
| M34362-061 | N34362-S009 | E5 General recovery | 1 | 1 | Section 5 | Recovery planning and backups mentioned generally. |
| M34362-062 | N34362-S009 | E6 Patching | 1 | 0 | Section 5 | General update advice; no local verification procedure. |
| M34362-063 | N34362-S009 | E7 Closure | 0 | 0 | Sections 5–6 | No explicit case-disposition criterion. |
| M34362-064 | N34362-S010 | E1 Exposure | 0 | 0 | Target-CVE material | Other-CVE affected builds excluded. |
| M34362-065 | N34362-S010 | E2 Investigation | 0 | 0 | Target-CVE material | No target-CVE investigation instruction. |
| M34362-066 | N34362-S010 | E3 Containment | 0 | 0 | Target-CVE material | Installer service stops are patch prerequisites. |
| M34362-067 | N34362-S010 | E4 Credentials/sessions | 0 | 0 | Target-CVE material | No target-CVE credential/session instruction. |
| M34362-068 | N34362-S010 | E5 Recovery | 0 | 0 | Target-CVE material | Patch-DLL replacement is not compromise eradication. |
| M34362-069 | N34362-S010 | E6 Cumulative patch target | 2 | 2 | Remediation; full-installer table | Explicit May-CVE inclusion and compatible full-installer target. |
| M34362-070 | N34362-S010 | E7 Closure | 0 | 0 | Target-CVE material | No case-disposition criterion. |
| M34362-071 | N34362-S011 | E1 Exposure | 0 | 0 | May-CVE branch | June-CVE exposure criteria excluded. |
| M34362-072 | N34362-S011 | E2 Investigation | 0 | 0 | May-CVE branch | Investigation delegated to May advisory. |
| M34362-073 | N34362-S011 | E3 Containment | 0 | 0 | May-CVE branch | June-only workaround not inherited by target coding. |
| M34362-074 | N34362-S011 | E4 Credentials/sessions | 0 | 0 | May-CVE branch | No target-CVE credential/session steps. |
| M34362-075 | N34362-S011 | E5 Recovery | 0 | 0 | May-CVE branch | May remediation delegated. |
| M34362-076 | N34362-S011 | E6 Cumulative patch target | 2 | 2 | Prerequisite branches; installer table | Names May-CVE prerequisite and cumulative target; no local validation. |
| M34362-077 | N34362-S011 | E7 Closure | 0 | 0 | May-CVE branch | No explicit case-closure criterion. |
| M34362-078 | N34362-S012 | E1 Exposure | 0 | 1 | shortDescription | Affected product context; no exposure-check procedure. |
| M34362-079 | N34362-S012 | E2 Investigation | 0 | 0 | notes | IoC reference only; no inherited advisory score. |
| M34362-080 | N34362-S012 | E3 Containment | 0 | 0 | Target entry | No containment instruction. |
| M34362-081 | N34362-S012 | E4 Credentials/sessions | 0 | 0 | Target entry | No credential/session instruction. |
| M34362-082 | N34362-S012 | E5 Recovery | 0 | 0 | Target entry | No recovery instruction. |
| M34362-083 | N34362-S012 | E6 Patching | 1 | 0 | requiredAction | Apply vendor updates; no verification artifact. |
| M34362-084 | N34362-S012 | E7 Closure | 0 | 0 | Target entry | Due date is not compromise-response closure. |

E4 evidence 2 in the vendor source refers to account/session-related inspection and named account targets, not an auditable certificate that all credentials/sessions were replaced. Recheck this boundary during researcher review. Credential rotation and account deletion are recorded separately; unauthorized-account removal primarily supports E5.

## Historical November 3 synthesis — accessible reviewed source set
| Category | Highest A / source | Highest E / source | Interpretation limit |
|---|---|---|---|
| E1 | 2 / N34362-S001, N34362-S002, N34362-S003, N34362-S004, N34362-S006, N34362-S009 | 2 / N34362-S001, N34362-S002, N34362-S003, N34362-S004, N34362-S006, N34362-S007, N34362-S009 | Exposure criteria vary in detail and version wording. |
| E2 | 3 / N34362-S003, N34362-S004 | 3 / N34362-S001, N34362-S002, N34362-S003, N34362-S004, N34362-S006 | Rules, logs and account audits address different evidence surfaces. |
| E3 | 2 / N34362-S001, N34362-S002, N34362-S003, N34362-S004, N34362-S006, N34362-S007, N34362-S009 | 0 / N34362-S001, N34362-S002, N34362-S003, N34362-S004, N34362-S005, N34362-S006, N34362-S007, N34362-S008, N34362-S009, N34362-S010, N34362-S011, N34362-S012 | Access restriction is described; verification remains limited in the reviewed set. |
| E4 | 3 / N34362-S001, N34362-S005 | 3 / N34362-S005 | Specificity concerns service-account replacement; complete session/token coverage is not established. |
| E5 | 3 / N34362-S001, N34362-S004 | 3 / N34362-S001, N34362-S004 | Cleanup and database-account checks do not prove complete system integrity. |
| E6 | 2 / N34362-S001, N34362-S002, N34362-S010, N34362-S011 | 2 / N34362-S001, N34362-S002, N34362-S007, N34362-S010, N34362-S011 | Cumulative patch targets are identified; a local installed-build check was not supplied in eligible reviewed text. |
| E7 | 0 / N34362-S001, N34362-S002, N34362-S003, N34362-S004, N34362-S005, N34362-S006, N34362-S007, N34362-S008, N34362-S009, N34362-S010, N34362-S011, N34362-S012 | 0 / N34362-S001, N34362-S002, N34362-S003, N34362-S004, N34362-S005, N34362-S006, N34362-S007, N34362-S008, N34362-S009, N34362-S010, N34362-S011, N34362-S012 | No explicit disposition criterion identified in accessible sources; inaccessible linked guidance prevents an overall absence claim. |

The 84 records cover 12 scored document units and all seven categories. Maxima describe the accessible source set only. AA23-158A versions remain linked as one document family; repeating them does not strengthen independent corroboration. Scores remain provisional pending researcher verification.

## Retrieval completion log
All decisions below were recorded on 2026-11-03. Screening is complete for the stated boundary; inaccessible material remains a limitation.

| Route or linked item | Decision and reason |
|---|---|
| Retained KEV, vendor May advisory, CERT-EU 2023-033 | Included as S012, S001 and S002; target entry/sections only |
| Canonical CISA AA23-158A and its linked PDF | Inaccessible: HTTP 403; official bulletin S003 retained; FBI-hosted revised PDF S004 included separately |
| Canadian Cyber Centre search | Included S008; campaign/profile content distinguished from operational instructions |
| Additional official sources encountered | Singapore S006, NHS England S007 and MyCERT S009 included; their direct response links screened |
| Service-account reset KB 000115941 | Included S005, Windows Transfer branch; contemporary revision and certificate-management issue retained |
| Users documentation | [2022 guide](https://docs.progress.com/bundle/moveit-transfer-web-admin-help-2022/page/Users.html) accessible; excluded from 2023.0 scenario scoring because edition compatibility is unestablished |
| Logs documentation | [2022 guide](https://docs.progress.com/bundle/moveit-transfer-web-admin-help-2022/page/Logs.html) accessible; same edition limitation; article identifies exportable activity logs but no assumed 2023 compatibility |
| Remote-access help linked for localhost | [2023 link](https://docs.progress.com/bundle/moveit-transfer-web-admin-help-2023/page/Security-Policies-Remote-Access_2.html) renders a 2023.1 manual; excluded from the 2023.0 branch because compatibility is unestablished |
| System and organization remote-access policies | [System](https://docs.progress.com/bundle/moveit-transfer-web-admin-help-2022/page/System-Remote-Access.html) and [organization](https://docs.progress.com/bundle/moveit-transfer-web-admin-help-2022/page/Security-Policies-Remote-Access.html) pages accessible; 2022 editions excluded from scenario scores |
| MFA help | [2022 guide](https://docs.progress.com/bundle/moveit-transfer-web-admin-help-2022/page/Multi-Factor-Authentication.html) accessible; version compatibility unestablished; primary advisory's own MFA wording remains eligible |
| 2023 upgrade link | Resolves to [documentation category](https://docs.progress.com/category/moveit-transfer-2023); navigation only, not a scored upgrade procedure; no recursive manual traversal |
| Upgrade/migration KB | [Linked page](https://community.progress.com/s/article/Upgrade-and-or-Migration-Guide-for-MOVEit-Automation-and-MOVEit-Transfer) returned 404; no score |
| Best-practices KB | [Linked page](https://community.progress.com/s/article/MOVEit-Security-Best-Practices-Guide) rendered only loading/CSS text; no substantive content to score |
| Security Center | Redirects to [Progress Trust Center](https://trust.progress.com/); general trust/navigation portal, excluded |
| June 9 and June 15 vendor advisories | Included S010/S011 solely for explicit target-CVE cumulative-patch/prerequisite passages; no second-hop links followed |
| Vendor IoC CSV | Article mentions cve-2023-34362-iocs, but the rendered page exposes no retrievable attachment link; targeted search did not yield a verifiable official file; recorded unavailable, not absent |
| Linked joint ransomware guide | CISA HTML/PDF and [NSA-hosted download](https://media.defense.gov/2023/May/23/2003227891/-1/-1/0/CSI-StopRansomware-Guide.PDF) unavailable; [FBI alternate](https://www.ic3.gov/CSA/2023/231019.pdf) timed out twice. No content inferred from search snippets |
| MyCERT-linked CISA revised PDF | HTTP 403; S004 is an official alternate, not presumed byte-identical to that inaccessible file |
| DIVD case file | Screened [DIVD-2023-00023](https://csirt.divd.nl/cases/DIVD-2023-00023/); independent research/notification CSIRT outside this pilot's verified national/government/sector publisher set; contextual only, no scores. Its own “closed” status is not asset closure |
| Vulnerability databases and registers | NVD/CVE links used for identity/version context; not additional scored response advisories; KEV target entry retained separately as specified by the protocol |
| Other official campaign links | TrueBot-only, other-CVE, advisory-directory and general framework links screened as context/navigation; no CVE-specific or explicitly applicable procedural document included on that basis |
| Third-party analyses/social posts | Discovery/context only; excluded under official-source rules |
| Patch binaries, support/reporting portals, licensing/lifecycle and product pages | Not independent response-guidance documents; no asset interaction or patch download |

The named search routes were vendor, CISA, CERT-EU and Canadian Cyber Centre, with additional national/sector advisories encountered during discovery. Search terms included “Progress MOVEit CVE-2023-34362 mitigation May 2023,” “site:cyber.gc.ca MOVEit 34362 advisory,” and the exact titles/identifiers of linked articles. Supplemental searches for the guide and CSV were limited to locating official versions. Direct links were screened one hop from primary advisories; links inside those linked procedures were not recursively followed.

Excluding an edition-mismatched manual does not establish that its advice is unusable on another release. It makes the compatibility assumption visible and limits the conclusion. No eligible link remains marked pending; access failures remain unresolved evidence limitations.

## Method memos and next action
- Temporal comparability: this series was observed November 3, not October 28.
- Rendering quality: the CISA bulletin includes truncated/malformed query text; do not silently repair it or award credit based on an imagined command. Its first complete YARA rule independently supports the provisional E2 score; supplied code has not been executed or validated here.
- Version boundary: CERT-EU's affected-products wording around 2023.0.0 differs from the vendor/build list. Retain that wording and flag the comparison; do not silently correct it or infer that the source set agrees on every version boundary.
- CVE boundary: later vulnerability patches and exploit-chain discussion require attribution rather than an apparent contradiction label.
- E7 boundary: reopening service after cleanup is not automatically explicit case closure. Apply the same technical-disposition threshold used for PAN-OS; document any recoding.
- Account-audit scope: the revised official PDF preserves a query using Permission=30. It supports a particular account check, not an audit of every possible administrator role or proof that all persistence was removed.
- Version compatibility: five linked manuals are from 2022 and another renders as 2023.1. Their exclusion is a scope limitation, not a zero score or a finding that no procedure exists.
- Service-account changes: the current vendor KB records a certificate-management issue and workaround; password-reset evidence alone does not validate dependent services or all exposed secrets.
- Retrieval outcome: the bounded first-pass review is complete with recorded access limitations. Researcher verification and a common temporal policy remain prerequisites to final cross-case analysis.
- Next case: Outlook CVE-2023-23397.

Actual research hours have not been entered. Independent coding agreement has not been measured.


## November 9 researcher decisions
See the [researcher decision register](../research-notes/2026-11-09-researcher-decisions.md) and [record-level review overlay](researcher-review-2026-11-09.csv). The researcher reports source review of the historical rows. Original scores and first-pass provenance are retained as historical records; the separate overlay distinguishes accepted decisions, unresolved interpretations and missing historical versions. No independent agreement statistic is claimed.
