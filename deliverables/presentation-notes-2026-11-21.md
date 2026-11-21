# Presentation notes for the five case pilot

Prepared for a short research presentation. Working results remain subject to the review limits in the paper.

## 1 Research question

What evidence does official guidance provide for closing a vulnerability case when exploitation may have occurred before remediation?

Explain why the software remediation decision and the compromise-response decision need separate consideration. Do not imply that every affected system was exploited.

## 2 Five cases

Introduce PAN-OS, MOVEit, Outlook, Print Spooler and Log4j. Explain that the scenarios assume different levels of access so that response guidance can be examined. They are constructed cases, not incident reports.

## 3 Method

Show E1–E7 and the two separate 0–3 scales. One record is a document version, CVE and category. The analysis contains 259 records from 37 case and document-version units. Seven conditional MOVEit records stay separate. Explain the dated source series and the unfinished discovery work before showing comparisons.

## 4 Reading the comparison

Use the table in the [comparison appendix](../analysis/pilot-comparison-2026-11-21.md). Explain one cell before discussing the patterns: a 3/3 maximum can come from narrow functions or different documents. It is not a measure of overall response completeness.

## 5 Three examples

PAN-OS encryption verification does not establish that all exposed secrets were replaced. Outlook mailbox-item cleanup does not establish complete recovery of an environment. Print Spooler configuration checks do not answer whether earlier SYSTEM access was investigated.

## 6 Closure sensitivity

Show that technical disposition and administrative closure produce different findings. Explain the corrected MOVEit sensitivity: its accepted primary E7 is already 2/3. The conditional guide adds an administrative role at 2/1 while leaving the combined maximum unchanged. Also show that removing PAN-OS S010 removes the recorded E7 maximum because the exact original raw page is unavailable.

## 7 Practical output

Introduce the [closure review record](closure-checklist-2026-11-21.md). Its purpose is to keep each decision beside its evidence and remaining uncertainty. The added evidence fields are research recommendations, not a validated universal standard.

## 8 Limits and discussion

The sample is small and purposive. Sources differ in size and observation date; some relevant links and exact versions are unavailable. There is no independent coding agreement result or asset-level effectiveness test. Invite feedback on the proposed evidence fields and on the boundary between technical and administrative closure.
