# Repository verification and next research actions

**Project:** Beyond the Patch  
**Audit date:** November 13, 2026  
**Reviewed commit:** `b8c9dc50d94f3cf0751a50bc48c6610ac5b861e6`  
**Scope:** All 24 tracked files; all 175 coding records checked structurally; targeted interpretation checks against retained and current official sources  
**Status:** Pilot in progress; no final five-case or main-study findings established

## Assessment

The repository has a coherent research design and internally consistent coding data. The record counts, category grids, reported maxima, supporting-source lists, snapshot identity and local Markdown links passed the checks performed in this audit. These checks do not certify every score interpretation or establish that all source searches are complete.

The next milestone remains a reviewed five-case pilot. An additional source-access finding requires a dated MOVEit review before its current closure-related interpretation is treated as settled. Outlook source retrieval remains incomplete; Print Spooler and Log4j remain uncoded.

No existing GitHub files or scores were changed during this audit. Historical records must not be overwritten with later observations.

## Verified current inventory

| Material | Review performed |
|---|---|
| `.gitattributes` | Read the snapshot line-ending rule and checked the committed snapshot bytes. |
| `README.md` | Read current design, status, counts, limitations and next actions at the reviewed commit. |
| `analysis/data-quality-report.md` | Read the older audit and distinguished its baseline/date from the current repository. |
| `data/kev-snapshot-2026-10-28.json` | Parsed all entries; checked hash, declared/actual counts, unique identifiers, entry dates and selected-case membership. Individual descriptions for all 1,760 entries were not fact-checked. |
| `data/pilot-candidate-selection-log.md` | Read seven candidate decisions, five selections, diversity rationale and limitations; checked selected membership in the snapshot. |
| `data/pilot-coding-worksheet.md` | Read scenario, category rules, 70 original records, summaries, memos and review status; recalculated maxima and source provenance. |
| `data/source.md` | Read historical inventory, source relationships, retrieval limitations, hashes and November 3 series. |
| `data/moveit-pilot-supplement-2026-11-03.md` | Read scenario, 12 document units, all 84 records, summaries, retrieval decisions and interpretation memos. |
| `data/outlook-coding-2026-11-09.csv` | Parsed all 21 rows; checked IDs, fields, source/category completeness, ranges and agreement with the case summary. |
| `data/outlook-source-register-2026-11-09.md` | Read source metadata, observation limits and outstanding retrievals. |
| `data/outlook-sources-2026-11-09.json` | Parsed all three source records and matched them to CSV source IDs. |
| `deliverables/2026-11-03-change-summary.md` | Read as a dated work-package history, not a current all-repository status statement. |
| `deliverables/research-roadmap-2026-11-03.md` | Checked milestones against current completion and the December 18 appointment end. |
| `methodology/2026-10-13-methodology-refinement.md` | Read and treated as historical provisional decisions. |
| `methodology/research-protocol-v0.2.md` | Read all sections and its later-revision pointer. |
| `methodology/coding-guide-v0.2.md` | Read applicability, independent scales, examples and quality rules. |
| `methodology/pilot-rules-v0.3-draft.md` | Read scenario, facet, source-version, retrieval and adoption rules. |
| `methodology/pilot-selection-plan.md` | Read eligibility, diversity, workflow and dated progress updates. |
| `research-notes/2026-11-03-pan-os-review.md` | Read targeted checks and record-specific verification queue. |
| `research-notes/2026-11-09-outlook-case-study.md` | Read scenario, findings, category summary and November 10 correction; matched summary to CSV. |
| `research-notes/related-work-initial-review.md` | Read all five seed references and scope limits; checked bibliographic/source context. Full-text appraisal of the three research papers was not completed by this audit. |
| `weekly-progress/2026-10-12-weekly-progress.md` | Read as historical planning progress. |
| `weekly-progress/2026-11-03-weekly-progress.md` | Read as dated work and limitations, without invented hours. |
| `weekly-progress/2026-11-09-outlook-progress.md` | Read new records, correction, total and outstanding work; checked reported counts. |

## Independently recalculated data checks

| Case | Coded document/version units | Records | Unique record IDs | Seven-category grid |
|---|---:|---:|---:|---|
| PAN-OS | 10 | 70 | 70 | Complete |
| MOVEit | 12 | 84 | 84 | Complete |
| Outlook initial set | 3 | 21 | 21 | Complete |
| Print Spooler | 0 | 0 | 0 | Not started |
| Log4j | 0 | 0 | 0 | Not started |
| Total | 25 | 175 | 175 | Complete for the existing coded units only |

Document/version units are not necessarily independent advisories. In particular, the two AA23-158A renderings are one document family, as the MOVEit supplement already explains.

All recorded numerical scores are within 0–3. Recalculated category maxima and their source lists agree with the published PAN-OS, MOVEit and Outlook summaries. The Outlook metadata and CSV source-ID sets match. No broken relative Markdown file targets or checked heading fragments were found.

| Category | PAN-OS A/E | MOVEit A/E | Outlook A/E |
|---|---|---|---|
| E1 | 3/3 | 2/2 | 1/2 |
| E2 | 3/3 | 3/3 | 3/3 |
| E3 | 3/3 | 2/0 | 2/0 |
| E4 | 3/3 | 3/3 | 2/0 |
| E5 | 2/3 | 3/3 | 2/0 |
| E6 | 3/3 | 2/2 | 1/0 |
| E7 | 2/3 | 0/0 | 0/0 |

This table verifies the arithmetic of the stored records. It is not a validated cross-case result: scenarios, source breadth, rules and observation dates differ, and Outlook's source set is incomplete. Scores are separate ordinal dimensions and are not averaged or added.

The KEV snapshot has 1,760 entries and 1,760 unique CVE IDs; its declared count agrees. Checked entry dates are valid and no later than the October 28 selection date. All five selected cases are present. The snapshot SHA-256 is:

`2d9931c086e42d05425c2da924299c8d9b7ff836de373f981668b7ef5f6f0fd7`

The frozen snapshot was not replaced by the current live catalog.

## Finding 1: a previously unavailable MOVEit-linked guide is accessible

The MOVEit retrieval log records timeouts for the [FBI-hosted StopRansomware Guide](https://www.ic3.gov/CSA/2023/231019.pdf). It was accessible during this audit. Its change record identifies the October 2023 edition, distinct from the May edition also mentioned in the earlier search.

The guide covers ransomware and data extortion. Printed page 26, response-checklist step 18, identifies a designated authority and established criteria for declaring an incident over. This is directly relevant to screening closure-related guidance; it is not merely patch advice. [Official guide, pp. 3 and 26](https://www.ic3.gov/CSA/2023/231019.pdf).

**Required next action:** Create a November 13 supplemental screening decision for this edition. Record its relationship to the originally linked guide, retained evidence, and which passages are compatible with M34362-C. The scenario does not assume ransomware encryption or a confirmed extortion demand; do not silently add either assumption. Inclusion, conditional use or exclusion needs an explicit rationale. If included for scoring, assign a new source-version ID, create its seven category records and recalculate a separately dated MOVEit summary.

Do not alter the original November 3 zero records or imply that the guide was accessible then. Do not continue to characterize the current closure source search as settled without addressing this access change. This audit does not assign a new E7 score automatically.

## Finding 2: eight historical PAN-OS captures were recovered locally

The repository correctly reports that historical captures are not included in its checkout. However, eight original HTML files were found in the shared task workspace under `pan-os-review/data/source-captures/CVE-2024-3400/`.

Each of S001, S006, S007, S008, S009, S011, S012 and S013 matches its SHA-256 in `data/source.md`. The associated capture manifest is also present. This allows the earlier content to be reviewed without substituting later live pages. Matching a recorded hash establishes file identity, not independent validation of every interpretation.

**Required next action:** Retain these files with the research evidence and record their private archive location. Use the recovered S009 rendering to resolve the historical-version queue for P3400-029–035. Record a dated outcome for each reviewed row. The October 29 live revision remains a different observation and should not overwrite the October 28 source. S010 still has no complete original raw capture.

## Finding 3: remaining scoring calibration is methodological, not arithmetic

The existing rules correctly separate source silence from applicability and distinguish E4 secret protection, E6 verification and E7 technical versus administrative disposition. Several choices still require consistent application before comparison or protocol freeze.

- **E1 anchor calibration:** P3400-043 is 0/2 for a product/version list without a check procedure; O23397-008 is 1/2 for affected-product guidance without a local build check; M34362-001 is 2/2 with a rationale also stating local inspection steps are absent. These are not automatically erroneous because the surrounding instructions may differ. Record the text-based distinction that justifies each actionability level, or recode under one anchor. Do not treat product-list presence alone inconsistently.
- **E7 threshold:** P3400-042 retains provisional technical-disposition credit, while M34362-007 does not treat an ordered recovery/reopening sequence as closure. Apply the explicit evidence-to-disposition test to both and to the newly accessible guide. Preserve the administrative-only sensitivity alternative described in the pilot rules.
- **E4 breadth:** PAN-OS encryption-setting verification and MOVEit service-account replacement measure different facets. A category maximum of 3/3 does not establish complete password, token, certificate and session coverage.
- **Applicability testing:** The 175 stored records all use A1 in their defined scenarios. The pilot has not yet demonstrated how its data handling behaves with A2, unresolved A3 or A4. Add the planned X/S sensitivity notes or a small clearly labeled applicability exercise; do not invent incident observations.

Current official Outlook and CERT-EU guidance supports the distinction between investigation, evidence preservation and cleanup, but procedural prerequisites and conditional branches still need to be retained in the linked-source review. [Microsoft investigation guidance](https://www.microsoft.com/en-us/security/blog/2023/03/24/guidance-for-investigating-attacks-using-cve-2023-23397/), [CERT-EU 2023-018](https://cert.europa.eu/publications/security-advisories/2023-018/).

## Finding 4: current source checks do not authenticate every historical rendering

All 46 unique external Markdown-link URLs in the reviewed repository were attempted. The automated retrieval produced 36 substantial text responses, five short application shells, and five errors. Browser retrieval supplied article text for four Progress pages, NHS England, MyCERT and the GlobalProtect implementation article. A successful HTTP status or an accessible current page was not treated as proof of historical equivalence.

The Progress best-practices page did not provide substantive text in the automated check; the upgrade/migration URL returned 404; the NSA guide URL returned 403. These outcomes do not demonstrate missing guidance. The accessible FBI guide is a separate official delivery location with its own edition information.

Targeted checks covered the main coding-sensitive passages: PAN-OS exposure/mitigation/recovery and E7 FAQ; MOVEit cleanup/session and service-account instructions, account-validation query, patch-chain and version limits; Outlook investigation, preservation, mitigation and cleanup; and the new guide's closure-related criterion. They are not an independent second-coder assessment of all 175 score pairs.

## Finding 5: reproducibility and status documentation need completion

- The current repository contains no executable validation script. Its quality report records checks, but a reader cannot rerun them from a committed validator. The structural calculations were rerun locally for this audit. A portable validator and machine-readable results are needed for the reproducible research package.
- The November 3 quality report covers a ten-file baseline and predates Outlook. Preserve it as historical evidence; add this dated audit rather than relabeling the old report as verification of all 24 current files.
- The candidate log and November 3 progress notes contain date-qualified statements that three cases were uncoded. Those statements describe their date and should not be silently rewritten. Add current cross-links if they are used as a live dashboard.
- The README's current-progress section correctly identifies the 70/84/21 records and two uncoded cases. Its top-level status phrase that the MOVEit supplement has merely started could be aligned with the detailed first-pass status when next updated.
- Researcher verification, independent coding agreement, actual work durations and a full-text related-work appraisal remain unfinished or unrecorded. The five seed references are an initial review, not proof of novelty or a completed literature review.

## Ordered next steps

1. **Resolve the new MOVEit guide screening decision and archive the recovered PAN-OS evidence.** Preserve all original dated records; add current observations separately.
2. **Finish Outlook's source set.** Complete the retained KEV, primary vendor advisory, named government/CSIRT routes and eligible direct procedures. The script guide, Protected Users, NTLM policy and SMB restriction guidance are already named retrieval targets. Record include/exclude/inaccessible decisions and add eligible document-category units.
3. **Complete Print Spooler and Log4j.** Use explicit compatible scenarios, the same source-search boundary, version policy, facets and anchors. Record prospective retrieval/coding/review time.
4. **Finish pilot review and the revision memo.** Resolve E1/E7 calibration, applicability sensitivity, source-date comparability and record-specific review decisions. Preserve originals and identify which records need recoding.
5. **Set a feasible remaining scope and freeze the method.** The November 3 roadmap targeted full pilot completion by November 13; that target has not been met. Reserve analysis, literature, writing and review time through December 18 before choosing additional cases. Up to 20 additional CVEs remains a ceiling, not a requirement.

The immediate deliverable is a dated source-screening/review update, followed by a completed Outlook case. A larger main sample, vendor ranking or final closure checklist is premature at this stage.
