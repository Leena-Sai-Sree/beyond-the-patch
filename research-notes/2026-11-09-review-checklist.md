# Combined researcher review — November 9, 2026
Scope: Priority earlier PAN-OS decisions, MOVEit consistency checks and the new Outlook increment.  
Status: R1–R8 decisions recorded; follow-up answers 19=A and 20=A resolve R5 and R7.

See the [authoritative 18-item decision register](2026-11-09-researcher-decisions.md). The R1–R8 prompts below correspond to questionnaire items 9–16.

This checklist identifies the passages and analytical choices requiring researcher judgment. It is not a claim that a full dataset review has occurred. Read the linked section before choosing; a recommendation is a starting interpretation, not a substitute for inspection. No command execution is required.

For each item record: selection; a brief reason or section locator; actual review date; and any correction. Use C whenever content cannot be checked. No selection is inferred from silence.

## R1 — PAN-OS technical disposition versus administrative closure
Records: P3400-042 and the E7 summary. Current scores: actionability 2, evidence specificity 3.

[Vendor implementation article](https://live.paloaltonetworks.com/t5/globalprotect-articles/applying-vulnerability-protection-to-globalprotect-interfaces/ta-p/340184). Find the final hotfix/cleanliness FAQ in the authored article, before reader comments.

Check whether the post-response assessment warrants technical-disposition credit under the [E7 rule](../methodology/pilot-rules-v0.3-draft.md), and distinguish this from administrative approval.

- A: Retain 2/3 as E7-T only; uncertainty treatment and administrative authorization remain unestablished. Recommended under the current broad rule.
- B: Restrict E7 to explicit administrative closure; recode this record 0/0 and apply the revised rule to every case.
- C: Cannot verify the passage or interpretation; explain what is missing.

Decision: A — Retain technical-disposition 2/3 only (question 9). Recorded November 9, 2026; source-inspection date not supplied.

## R2 — PAN-OS mitigation and installed-build verification
Records: P3400-003/006 and P3400-041, currently 3/3 each.

[Vendor advisory](https://security.paloaltonetworks.com/CVE-2024-3400): find the FAQ about checking Threat Prevention signatures. [Implementation article](https://live.paloaltonetworks.com/t5/globalprotect-articles/applying-vulnerability-protection-to-globalprotect-interfaces/ta-p/340184): find the hotfix FAQ and software-version check.

- A: Retain scores with distinct mitigation/installed-build facets; neither establishes eradication. Recommended.
- B: Change a score or category; identify the record, new score and supporting passage.
- C: Cannot verify one or both passages.

Decision: A — Retain separate verification facets and 3/3 values (question 10). Recorded November 9, 2026; source-inspection date not supplied.

## R3 — PAN-OS master-key scope and version compatibility
Records: P3400-053 (3/2) and P3400-060 (3/3).

[Master-key procedure](https://docs.paloaltonetworks.com/ngfw/administration/certificate-management/master-key-encryption/configure-master-key): inspect the local PAN-OS branch, excluding cloud, HA-only and 12.2.2-only requirements. [Encryption-level procedure](https://docs.paloaltonetworks.com/ngfw/administration/certificate-management/master-key-encryption/configure-master-key-encryption-level): inspect the algorithm-change procedure, verification output and PAN-OS 11.1 constraints.

- A: Retain the narrow master-key protection facets and scores for a compatible branch. This does not establish replacement of every credential or invalidation of sessions. Recommended only if branch compatibility is checkable.
- B: Current version compatibility is unestablished; keep historical rows and exclude affected current-source comparisons until a compatible version is available.
- C: Propose different scores with passage and version justification, or report access failure.

Decision: A — Accept compatible narrow-function 3/2 and 3/3 values (question 11). Recorded November 9, 2026; source-inspection date not supplied.

## R4 — PAN-OS recovery-source version
Records: P3400-029–035.

[Recovery KB](https://knowledgebase.paloaltonetworks.com/KCSArticleDetail?id=kA14u000000CrO6CAK): inspect the displayed modification date, Virtual Appliances and restoration sections. The observed page shows October 29, 2026, later than the October 28 coding date.

- A: Original October 28 capture is available; identify the actual file, timestamp and hash for comparison before changing historical scores.
- B: Original capture is unavailable; preserve historical rows, record the limitation and code the current page as a distinct dated source version. Recommended when no capture is available.
- C: Displayed metadata differs or source is inaccessible; report what you see.

Opening today's page cannot authenticate its earlier contents.

Decision: B — Original capture unavailable; preserve the historical-source limitation (question 12). Recorded November 9, 2026; source-inspection date not supplied.

## R5 — MOVEit closure and cleanup verification
Records: M34362-005 (E5 3/3) and M34362-007 (E7 0/0).

[Progress May advisory](https://community.progress.com/s/article/MOVEit-Transfer-Critical-Vulnerability-31May2023): inspect Recommended Remediation, especially verification and subsequent service reopening. Compare with R1 using the same E7 rule.

- A: Keep cleanup-verification credit under E5 and E7 at 0/0; the sequence does not explicitly establish a case-disposition criterion. Recommended under the current rule.
- B: The passage meets the same technical-disposition threshold as R1; specify the criterion and proposed E7 score, then apply the interpretation consistently.
- C: Cannot verify, or source text differs.

Decision: B initially; follow-up 19=A accepts current E7-T 2/3 (historical 0/0 retained). Recorded November 9, 2026; source-inspection date not supplied.

## R6 — Outlook investigation and credential response
New records: O23397-002 (E2 3/3) and O23397-004 (E4 2/0).

[Microsoft investigation article](https://www.microsoft.com/en-us/security/blog/2023/03/24/guidance-for-investigating-attacks-using-cve-2023-23397/): inspect Artifacts on endpoints and Recommendations.

- A: Retain scores: detailed investigation guidance and password-reset instructions are present, while reset-completion artifacts are not specified. Recommended.
- B: Change a score; identify the exact instruction or evidence requirement supporting it.
- C: Cannot verify the relevant sections.

Do not interpret a failed outbound connection as proof of credential disclosure or successful account access.

Decision: A — Retain investigation 3/3 and credential response 2/0 (question 14). Recorded November 9, 2026; source-inspection date not supplied.

## R7 — Outlook audit-before-cleanup boundary
New records: O23397-009 (E2 2/3) and O23397-012 (E5 0/0).

[CERT-EU 2023-018](https://cert.europa.eu/publications/security-advisories/2023-018/): read Impact Assessment.

- A: Retain the split: output interpretation/evidence preservation supports E2; the caution against immediate cleanup does not establish a recovery procedure. Recommended.
- B: Identify additional recovery content and propose revised E5 scores with a rationale.
- C: Cannot verify.

Decision: U initially; follow-up 20=A retains investigation 2/3 and recovery 0/0. Recorded November 9, 2026; source-inspection date not supplied.

## R8 — Outlook primary-alert actionability
New records: O23397-016 (E2 1/0), O23397-017/018 (E3/E4 2/0), O23397-020 (E6 1/0).

[Canadian AL23-002](https://www.cyber.gc.ca/en/alerts-advisories/microsoft-outlook-zero-day-vulnerability-allowing-ntlm-credential-theft): read Recommended actions.

- A: Retain scores for the alert's own wording; linked documentation is scored separately. Recommended.
- B: Change a score, identifying evidence in this alert rather than borrowing details from its links.
- C: Cannot verify.

Decision: A — Retain the alert-specific proposed values (question 16). Recorded November 9, 2026; source-inspection date not supplied.

## What this review covers
R1–R4 cover priority earlier PAN-OS issues, R5 tests the same closure rule in MOVEit, and R6–R8 cover this week's Outlook increment. Question 17 additionally reports source review of all 154 historical PAN-OS and MOVEit rows. This does not authenticate the missing historical recovery version, resolve the explicit exceptions, or confirm all 21 Outlook rows. Any rule change triggers review of all affected records, not only the highlighted examples. Historical source versions and current observations remain separate.

## Review return record
Provide R1 through R8 selections with short reasons, and the actual date you inspected the sources. For R4-A give the capture's location and provenance rather than treating a live URL as a historical file. Blank entries remain uncompleted. Actual research hours are recorded only from personal time records.
