# Closure review for a known exploited vulnerability

Draft for practitioner and supervisor review. This checklist is a proposed record informed by the pilot findings. It has not been validated in incident response operations.

A patch result answers whether a specified software change is present. Closing a case involving possible earlier exploitation also requires a reasoned account of the investigation and response. Use the record below for that decision. The evidence needed depends on the affected system, the attacker's possible access and the telemetry available.

## Case details

Record the case identifier, CVE, affected assets, system owner, response lead and review date. State whether the case concerns exposure alone, suspicious activity or credible successful exploitation. Distinguish observed facts from assumptions and unknowns. Identify the advisory versions and response plan used.

## Review questions

| Item | Question for the reviewer | Evidence to retain | Pilot basis |
|---|---|---|---|
| 1 Exposure | Which assets and identities were exposed, and during what period? | Affected-version and configuration observations, inventory, timeline and known gaps | PAN-OS P3400-001; Log4j L44228-N14-L04-01 |
| 2 Investigation | What was searched, what was found and what could not be examined? | Relevant logs or preserved artifacts, query/version details, time range, results and interpretation | PAN-OS P3400-002; Outlook O23397-002 and O23397-N14-O12-02 |
| 3 Containment | What access was restricted, and what confirms that the restriction took effect? | Selected controls, observed state or test result, exceptions and operational impact | PAN-OS P3400-003; Print Spooler P34527-N21-P06-03 and -06 |
| 4 Identities | Which potentially exposed credentials, keys, certificates, tokens and sessions required action? | Scope decision, completed changes and checks, remaining exceptions | PAN-OS P3400-032, -053 and -060; MOVEit M34362-004 and -032 |
| 5 Recovery | What was removed, rebuilt or restored, and why was the recovered state accepted? | Cleanup or rebuild record, integrity assessment, restoration source and validation results | PAN-OS P3400-033; MOVEit M34362-005; Outlook O23397-N14-O12-05 |
| 6 Remediation | Does the evidence confirm a fixed build, a mitigation or another setting? | Exact check, expected and observed result, asset and timestamp, remaining limitations | PAN-OS P3400-006 and -041; Log4j L44228-N14-L04-06 |
| 7 Technical disposition | Which findings support ending or changing the response stage? | Reasoned technical decision and the specific results it relies on | PAN-OS P3400-042; accepted MOVEit M34362-007 |
| 8 Uncertainty and authorization | What remains uncertain, who accepts the remaining risk and who authorizes the case status? | Named decision owner, rationale, follow-up work, review date and retained approval | Research recommendation addressing the limits visible in E7; separate MOVEit extortion record M34362-EXT-007 informs the authority field |

Each item needs a status: addressed, not applicable with a reason, unresolved, or assigned for follow-up. An unchecked or unresolved item must not be interpreted as evidence that the risk is absent.

The evidence fields are research recommendations. The cited records explain their basis; they do not mean every source requires every listed artifact. General recovery background is available in [NIST SP 800-61r3](https://doi.org/10.6028/NIST.SP.800-61r3).

## Decision record

Write a short disposition stating the case status, the evidence that supports it, the remaining uncertainty and the person responsible for each open action. Distinguish a technical response decision from authorization to close the administrative record. If the organization permits closure while accepting residual risk, retain that decision and its rationale explicitly.

Record the approver, approval date, location of retained evidence and conditions that would reopen the case. Suitable reopening conditions may include new relevant indicators, later findings on an affected identity, an invalidated mitigation or evidence that changes the assumed scope. Select conditions for the actual case rather than treating this list as exhaustive.

For an exposure-only case, do not assume successful exploitation simply because the CVE appears in KEV. Equally, a clean scan cannot settle an investigation when relevant telemetry is missing. A documented decision should explain what the available evidence can support.
