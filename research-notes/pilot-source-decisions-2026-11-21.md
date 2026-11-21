# Pilot source decisions

Date: November 21, 2026. These decisions concern the retained evidence. Source collection dates remain unchanged.

Four retained November 14 documents now have seven new records each: CERT-EU's Log4j advisory L02, the captured CISA Log4j repository README L07, CERT-EU's Print Spooler advisory P02 and CISA ED 21-04 P06. This adds 28 records. The [source register](../data/pilot-source-register-2026-11-21.csv) records all 37 scored case and document-version units, their URLs and the availability of exact captured versions.

## Decisions on the remaining retrieved documents

| Source | Decision for this package | Reason and consequence |
|---|---|---|
| L02 | Include | Target-CVE sections, inventory, investigation and compatible mitigation instructions reviewed. Other Log4j CVEs stay outside the score. |
| L05 | Exclude as an additional unit | The PDF L04 is the selected AA21-356A edition. The HTML remains a related edition; full equivalence is not asserted. It supplies no independent corroboration. |
| L06 | Inaccessible | November 14 route returned 404; November 21 web retrieval returned 403. Directive content receives no inferred score. |
| L07 | Include captured README | Its own guidance is available in the retained capture. No score is inherited from the linked affected-products database. Captured bytes identify the reviewed version; a Git commit was not established. |
| L08 | Exclude from primary scenario | VMware Horizon campaign guidance does not match the stipulated non-VMware deployment. |
| P02 | Include | Only CVE-2021-34527 material and compatible configuration checks. Later Spooler vulnerabilities remain distinct. |
| P06 | Include compatible technical branch | Non-domain-controller policy and registry controls match a member host. Federal deadlines, CIO attestation and directive retirement remain jurisdiction-specific context and receive no incident-closure credit. |
| P07 | Exclude as an additional unit | Announcement of P06; score the directive itself. No independent corroboration is inferred. |
| P08 | Context only | General service guidance recommends disabling Spooler when the machine is not a print server or domain controller. This case is a print server. It does not override the target-CVE emergency advice. |
| P09 | Exclude | Domain-controller assessment does not match the member-print-server scenario. |
| O04 | Conditional context | Protected Users has account and domain prerequisites that the scenario does not establish. No new implementation score is imported into the baseline advisory. |
| O05 | Conditional context | Legacy NTLM-policy guidance needs a compatible Windows/domain branch. Compatibility remains unresolved. |
| O06 | Conditional context | SMB guidance contains substantive rules, but endpoint version and applicable firewall/deployment branch remain unspecified. This package does not assume those prerequisites or award a new score. |
| O07 | Conditional context | The collector requires a supported Exchange environment, permissions, remoting and capacity. The scenario does not fix the server version. No new collection-procedure score is imported. |
| O08 | Unavailable legacy route | The 404 is not seven zero scores. The archived O12 is a separately identified source. |
| O09 | Unavailable substantive content | The retained response is a JavaScript shell rather than the advisory. |
| O10 | Unavailable article | The retained redirect does not contain the named article. |
| O11 | Exclude from scored set | General March 2023 patch notice does not identify the target CVE or supply a compatible target-specific procedure in its own text. |
| O12 | Retain existing seven records | Version-pinned official procedure for mailbox-item audit and cleanup. Its current operational suitability is not established. |

Conditional context is not A2 and does not receive zero scores. These items remain relevant to the limits of the review even when they are outside the scored corpus.

## PAN-OS evidence recovery

The eight substantive October 28 HTML captures S001, S006, S007, S008, S009, S011, S012 and S013 are present in the workspace. Their bytes match the original capture manifest. S009 contains the virtual-appliance replacement branch and the secret and certificate response steps. It can therefore support historical passage checking without substituting the October 29 revision discussed in the older review.

S010 still has no complete original raw capture. S014 is a non-substantive response and stays excluded. The private archive now includes a copy of the recovered captures and their manifest. Durable retention in the institution's designated system is a separate transfer; this local copy does not establish that transfer occurred.

The recovered S012 and S013 pages identify PAN-OS 11.1 material but also contain later-version content. Only the compatible local-management branch supports the historical scenario. Their detailed encryption instructions do not establish replacement of every exposed credential or invalidation of sessions.

## Historical MOVEit and Outlook versions

The MOVEit November 3 live-source observations were recorded through rendered text without full raw captures. The retained KEV entry is available. Those source versions remain a limitation of the inherited coding.

The three initial Outlook records sets were observed November 9. O01–O03 captures from November 14 are later observations of the same URLs. They are not proof of byte identity with November 9. The primary register therefore marks the exact original raw versions unavailable.

## Discovery still open

The existing one-hop discovery rule has not been completed for every case. In particular, the Log4j links to general incident-response procedures, the federal playbooks, NCSC-NL material and CERT-NZ material need separate source and compatibility decisions. The Print Spooler MSRC starting advisory and substantive Outlook MSRC advisory remain unavailable in the inspected evidence. A broader search may change observed coverage, especially recovery and closure.

This package closes the decisions listed in the table for its bounded retained corpus. It does not declare the original source search complete. Outstanding material is not assigned zero, and no case-level claim of overall absence follows from an empty category in the included set.

## Access record for this review

The public repository overview was accessible through web retrieval. Several linked GitHub files did not load. Direct repository/API retrieval failed in this environment. The evidence review therefore uses the identified local files, the dated November 14 captures and the older research records. The package has not been checked against a newly downloaded GitHub HEAD, and no remote files were changed.
