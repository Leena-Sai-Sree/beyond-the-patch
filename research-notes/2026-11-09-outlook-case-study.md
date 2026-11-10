# Outlook: evidence needed after the fix

November 9, 2026 · CVE-2023-23397

Source and coding check: November 10, 2026.

## Question and scope

After installing the fix, what evidence does the reviewed guidance provide for deciding whether possible prior compromise has been addressed?

This is the third pilot case. The initial analysis covers three official documents and 21 document-category records. It follows the existing [coding guide](../methodology/coding-guide-v0.2.md) and [November 3 pilot rules](../methodology/pilot-rules-v0.3-draft.md). The [source register](../data/outlook-source-register-2026-11-09.md) provides dates, links and section references.

Scenario O23397-C uses an affected Outlook for Windows client, on-premises Exchange and successful unauthorized mailbox access following credential exposure. Successful access is stipulated for the C comparison state; it was not observed during this study. The scenario does not extend to administrator control of a host. Workstation build, domain configuration, exposure duration and actual telemetry are unspecified.

All seven response categories are relevant to that scenario and receive A1 across the documents. Source silence is scored as missing coverage within a document rather than an irrelevant category. Procedure-specific prerequisites still require separate checks before operational use.

## Findings

Microsoft describes mailbox-permission changes that preserve access after a password reset. Its investigation discussion also identifies scan blind spots, including local mail stores and deleted messages. Those examples separate three questions: whether the flaw was fixed, whether exploitation occurred and whether its consequences were addressed. [Microsoft, investigation guidance](https://www.microsoft.com/en-us/security/blog/2023/03/24/guidance-for-investigating-attacks-using-cve-2023-23397/).

The practical question is what each check allows the responder to conclude. An update record supports a remediation decision. Closing the compromise response also needs evidence about access, affected accounts and any changes left behind.

CERT-EU recommends auditing Exchange items and reviewing the output. It warns that immediate cleanup can destroy forensic evidence or cause data loss. This earns investigation credit, including evidence interpretation, but does not establish completed recovery. [CERT-EU, Impact Assessment](https://cert.europa.eu/publications/security-advisories/2023-018/).

This changes how the two categories are interpreted. Preserving an item can support investigation without completing recovery. The order of those activities matters; a warning against immediate cleanup is not evidence that cleanup is unnecessary.

The Canadian alert recommends patching, outbound SMB blocking, NTLM restrictions, Protected Users and periodic scanning. Its linked procedures need separate assessment before their detail can affect its scores. [Canadian Cyber Centre, Recommended actions](https://www.cyber.gc.ca/en/alerts-advisories/microsoft-outlook-zero-day-vulnerability-allowing-ntlm-credential-theft).

## Coding summary

A means actionability; E means evidence specificity. Both are independent ordinal scales from 0 to 3. These are separate maxima within the initial three-document set, not an overall completeness score. Source IDs below use the prefix N23397-.

| Category | Highest A | Source | Highest E | Source |
|---|---:|---|---:|---|
| E1 Exposure | 1 | S001, S002 | 2 | S001, S002 |
| E2 Investigation | 3 | S001 | 3 | S001, S002 |
| E3 Containment | 2 | S001, S002, S003 | 0 | All three |
| E4 Credentials and sessions | 2 | S001, S002, S003 | 0 | All three |
| E5 Recovery | 2 | S001 | 0 | All three |
| E6 Remediation verification | 1 | S001, S002, S003 | 0 | All three |
| E7 Closure | 0 | All three | 0 | All three |

The [21-row CSV](../data/outlook-coding-2026-11-09.csv) contains each document's scores, facets, section references and rationale.

E3 credit concerns access restriction, not demonstrated isolation of a compromised environment. E4 covers the stated protection and password actions; it does not establish session invalidation. E5 credit concerns malicious-item removal. E6 distinguishes update advice from a supplied installation-verification procedure. E7 requires an explicit connection between evidence and response disposition. A zero applies to reviewed text, not the publisher's full documentation.

## Coding check: November 10

O23397-016, the Canadian alert’s investigation row, now has actionability 1 and evidence specificity 1. Its periodic detection instruction warrants general evidence credit. It does not specify an output field, suspicious-value test or result interpretation in the alert itself. The earlier package assigned evidence 0; that omitted the general detection instruction. The other 20 score pairs and all seven summary maxima are unchanged.

The main distinction in E7 is between an investigative next step and response disposition. Advice to investigate, report suspicious activity or preserve evidence does not by itself meet the pilot rule for closing or transitioning the response.

## Implication and next step

The next stage should establish whether linked official procedures supply further verification and disposition detail. Higher category scores will still need a clear facet and scope.

For the eventual closure checklist, this case motivates separate fields for remediation evidence, investigation coverage, credential actions, persistence disposition and the decision to end the response. These are study recommendations derived from the comparison, not a checklist issued by the publishers.
