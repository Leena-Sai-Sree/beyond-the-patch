# Research progress — November 14, 2026

**Project:** Beyond the Patch  
**Stage:** Five-case pilot; source review and draft coding

## Work completed

### MOVEit guide review

Retained the October 2023 official guide as a complete PDF with its retrieval timestamp, file size and SHA-256. The captured bytes match the November 13 download hash.

Reviewed the response checklist against the existing MOVEit scenario. Its data-extortion conditions are not established in the original case, so seven draft category records were prepared under a separate sensitivity scenario. The original 84 MOVEit records remain unchanged.

The source review documents the guide’s edition, conditional inclusion and limits on broader use.

### Outlook follow-up

Recovered an archived official Outlook script guide through Microsoft’s repository history. Reviewed its on-premises Exchange audit and cleanup instructions and added seven draft category records.

The guide adds procedural detail for identifying and removing malicious message properties. It does not establish that all mailbox persistence has been removed or that the current script is compatible with a particular deployment. The original 21 Outlook records remain unchanged.

### Print Spooler first pass

Prepared 28 draft records across four official documents: Microsoft’s clarification, KB5005010, the Canadian Cyber Centre alert and CERT/CC’s vulnerability note.

The review distinguishes checking updates and Point and Print settings from investigating an earlier compromise. Registry checks can support a configuration decision without establishing that attacker access or persistence has been resolved.

### Log4j first pass

Prepared 21 draft records across Apache’s security page, the Canadian Cyber Centre alert and joint advisory AA21-356A.

The review distinguishes affected-version identification, mitigation verification and compromise investigation. Historical patch targets and superseded workarounds are retained in their source context rather than presented as current operational recommendations.

## Outputs

| Output | File |
|---|---|
| MOVEit source review | [Guide eligibility and version review](../data/moveit-guide-source-review-2026-11-14.md) |
| MOVEit sensitivity coding | [Conditional coding and comparison](../data/moveit-guide-sensitivity-2026-11-14.md) |
| Outlook follow-up | [Archived script documentation review](../data/outlook-follow-up-2026-11-14.md) |
| Print Spooler first pass | [Source details and 28 draft records](../data/print-spooler-pilot-2026-11-14.md) |
| Log4j first pass | [Source details and 21 draft records](../data/log4j-pilot-2026-11-14.md) |
| Source screening | [Retrieval decisions and pending sources](../research-notes/2026-11-14-source-screening.md) |
| Coding review | [Pilot expansion review and disputed boundaries](../analysis/2026-11-14-pilot-expansion-review.md) |

## Coding position

| Series | Records | Position |
|---|---:|---|
| PAN-OS original first pass | 70 | Preserved; verification remains |
| MOVEit original first pass | 84 | Preserved; researcher review remains |
| Outlook initial set | 21 | Preserved; linked-source review continues |
| Existing records subtotal | 175 | Retained as previously documented |
| Outlook November 14 supplement | 7 | New draft records |
| Print Spooler November 14 first pass | 28 | New draft records |
| Log4j November 14 first pass | 21 | New draft records |
| November 14 expansion subtotal | 56 | Separate dated working series |
| MOVEit extortion sensitivity | 7 | Separate analytical scenario |

The existing 175 records and the 56 expansion records sum to 231, but they do not yet form a harmonized five-case dataset. The seven MOVEit sensitivity records remain outside that comparison because they use an additional scenario condition.

No ordinal scores have been averaged. Category maxima remain source-attributed and limited to their stated document sets.

## What the review clarified

Specific evidence for a security setting does not necessarily support closing a compromise investigation. Print Spooler illustrates this through its registry checks. Log4j adds the need to investigate an asset’s history even when it has subsequently been patched.

The Outlook script guide provides a reproducible malicious-item cleanup procedure, but its scope is narrower than complete mailbox recovery. The MOVEit guide adds administrative-disposition language under a conditional incident scope; that condition must remain visible in the analysis.

These distinctions support keeping remediation verification, compromise response and closure separate in the coding.

## Quality checks and limitations

The 56 expansion record IDs are unique, with seven category records for each of the eight coded documents. Score ranges, source references, captured-byte hashes and source-attributed summary calculations were checked.

These checks establish structural consistency. They do not constitute independent coding agreement, demonstrate that a response procedure works or establish that the source searches are complete. No exploit or operational response procedure was executed.

The case scenarios contain explicitly stated analytical assumptions. Successful exploitation, credential exposure and data-extortion conditions must not be reported as incidents observed during this study.

Actual researcher hours have not been recorded. This entry documents work prepared on November 14; it does not represent two weeks of observations.

## Next steps

1. Resolve the pending official sources and relevant linked-document decisions for Outlook, Print Spooler and Log4j.
2. Review deployment prerequisites, archived procedures, superseded advice and duplicate source editions.
3. Recheck disputed coding boundaries, particularly general incident-response referrals, recovery and evidence-linked closure.
4. Complete the remaining PAN-OS and MOVEit verification work.
5. Establish a consistent source-version policy before combining the five cases.
6. Prepare the comparative findings table and pilot revision memo after the source and coding checks are complete.
