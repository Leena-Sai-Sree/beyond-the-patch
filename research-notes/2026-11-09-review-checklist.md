# Coding notes: why the scores were retained

November 9, 2026

These notes explain the main decisions for PAN-OS, MOVEit and Outlook. Scores are shown as actionability/evidence specificity. They describe the published instructions within the stated scenario; they are not results from tests on production assets.

## Assessing PAN-OS after remediation
P3400-042 retains E7-T 2/3. The relevant passage is the final hotfix/cleanliness FAQ in the [GlobalProtect implementation article](https://live.paloaltonetworks.com/t5/globalprotect-articles/applying-vulnerability-protection-to-globalprotect-interfaces/ta-p/340184), above the reader comments.

The support-file assessment provides a basis for a limited conclusion about the device after response. That connection between evidence and an assessment supports evidence specificity 3. Actionability is 2 because the public text relies on a support-led assessment rather than setting out the complete analysis procedure. This is technical-disposition credit. It does not establish who authorizes case closure or accepts residual risk.

## Checking protection and checking the installed build
P3400-003/006 and P3400-041 remain 3/3, with different verification labels. The [security advisory](https://security.paloaltonetworks.com/CVE-2024-3400) describes how to check the Threat Prevention signatures. The hotfix FAQ in the [implementation article](https://live.paloaltonetworks.com/t5/globalprotect-articles/applying-vulnerability-protection-to-globalprotect-interfaces/ta-p/340184) describes checking the installed software version.

Both supply a procedure and a result that can be interpreted. Their targets differ: one concerns protection behavior, the other software state. Keeping those labels avoids treating a successful mitigation check as proof that a fixed build is installed. Neither check resolves what an attacker may already have done.

## Keeping master-key evidence within its scope
P3400-053 retains 3/2 and P3400-060 retains 3/3. The sources are [Configure a Master Key](https://docs.paloaltonetworks.com/ngfw/administration/certificate-management/master-key-encryption/configure-master-key), using the local PAN-OS branch, and [Configure Master Key Encryption Level](https://docs.paloaltonetworks.com/ngfw/administration/certificate-management/master-key-encryption/configure-master-key-encryption-level), including the compatibility conditions and verification output.

The instructions are detailed enough for actionability 3. Evidence specificity differs. The first identifies the key and its protected record, while the second links reported properties to a configuration check. That supports 2 and 3 respectively. Only the branch compatible with the stated PAN-OS scenario is included; cloud, HA-only and later-version-only requirements are excluded.

These scores concern key protection and encryption. They should not be read as evidence that every exposed credential has been replaced or every session invalidated.

## Retaining the recovery-source version limitation
P3400-029–035 keep their historical scores. The [recovery article](https://knowledgebase.paloaltonetworks.com/KCSArticleDetail?id=kA14u000000CrO6CAK) displays an October 29 revision, after the October 28 coding date. Its metadata, Virtual Appliances and restoration sections are the relevant locations.

The earlier capture is unavailable. Replacing its observations with today's page would make a later version appear to be the original evidence. The older rows therefore remain identifiable, and later observations receive their own date and version reference. This concerns the ability to reproduce historical coding; it is not a finding that the current article is incorrect.

## MOVEit cleanup and the next response stage
M34362-005 remains E5 3/3. M34362-007 now receives E7-T 2/3 under the same technical-disposition rule used for PAN-OS. The source is the [Progress May advisory](https://community.progress.com/s/article/MOVEit-Transfer-Critical-Vulnerability-31May2023), particularly Verification and the later reopening steps.

The cleanup check verifies the specified actions and supports a limited decision about moving forward. It is the assessment outcome that earns E7 credit; reopening service alone would not. Evidence specificity is 3 because the observations are tied to that assessment. Actionability is 2 because the passage does not provide an end-to-end case-disposition procedure. Administrative closure and complete eradication remain outside that credit. The [revision file](../data/score-revisions-2026-11-09.csv) retains the earlier 0/0 alongside the current score.

The shorter [NHS England alert](https://digital.nhs.uk/cyber-alerts/2023/cc-4326), under Remediation steps, names verification and reopening but directs readers to Progress for the detail. M34362-049 stays at E7 0/0 because the NHS text does not itself describe the observations or their interpretation. Linked-source detail is not inherited.

## Outlook investigation and credential response
O23397-002 retains E2 3/3 and O23397-004 retains E4 2/0. The relevant sections of [Microsoft's investigation guidance](https://www.microsoft.com/en-us/security/blog/2023/03/24/guidance-for-investigating-attacks-using-cve-2023-23397/) are Artifacts on endpoints, Exchange Server logs and Recommendations.

The investigation material combines detailed steps with artifact interpretation. The credential advice identifies specific reset actions, but it does not identify equivalent evidence that replacement is complete. Those differences support the two score pairs. Attempted triggering, credential leakage and later unauthorized access also need to remain distinct: evidence of a failed outbound connection does not establish the latter two.

## Preserving evidence before cleanup
O23397-009 retains E2 2/3 and O23397-012 retains E5 0/0. In [CERT-EU 2023-018](https://cert.europa.eu/publications/security-advisories/2023-018/), Impact Assessment links audit output to risk assessment and warns about destructive cleanup.

The link between output and interpretation supports evidence specificity 3. The execution detail sits in linked tooling, which limits actionability to 2 within the advisory itself. Protecting evidence is valuable to the investigation, but the warning does not supply restoration, integrity-recovery or verified-eradication steps. It therefore earns no E5 score in this document.

## Scoring the Canadian alert on its own wording
O23397-016 retains E2 1/0, O23397-017/018 retain E3/E4 2/0, and O23397-020 retains E6 1/0. These scores concern Recommended actions in [Canadian alert AL23-002](https://www.cyber.gc.ca/en/alerts-advisories/microsoft-outlook-zero-day-vulnerability-allowing-ntlm-credential-theft).

Scanning and patching are recommended without detailed procedures or verification artifacts. Named access and authentication restrictions are more specific actions, so they receive actionability 2. Completion evidence is not specified. The linked manuals are assessed separately, making clear which document actually supplies each procedure.

## Using these notes
The [methodological record](2026-11-09-researcher-decisions.md) explains the design and review coverage. The [review log](../data/researcher-review-2026-11-09.csv) and [score revisions](../data/score-revisions-2026-11-09.csv) provide the record-level trail. Outlook's linked-source collection and the five-case pilot are still in progress.
