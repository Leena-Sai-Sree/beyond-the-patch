# Related work — initial scoped review
Date: 2026-11-03  
Status: Seed review and search record; not a completed systematic literature review

## Search performed
Used public web searches for “vulnerability advisory quality actionability incident response guidance empirical study” and followed primary research/publication pages. Read NIST patch-management publication metadata/abstract and the incident-recovery section of SP 800-61r3; screened three research-paper abstracts and bibliographic records. The research papers below have not yet received full-text methodological appraisal. No paywalled or secondary summaries are treated as evidence of study results.

This search is a starting point with no exhaustive screening count. No claim of novelty or absence of prior research follows from it. Standards are background references, not additional CVE-scored guidance unless eligible under the source protocol.

## Evidence matrix
| ID | Primary publication | Material inspected | Relevance and limits |
|---|---|---|---|
| L01 | Souppaya & Scarfone (2022), [NIST SP 800-40r4](https://csrc.nist.gov/pubs/sp/800/40/r4/final), DOI 10.6028/NIST.SP.800-40r4 | Publication metadata and abstract | Frames patch management around identifying, prioritizing, acquiring, installing and verifying patches. Provides the remediation side of the conceptual distinction; this abstract does not establish case-specific compromise closure requirements. |
| L02 | Nelson, Rekhi, Souppaya & Scarfone (2025), [NIST SP 800-61r3](https://doi.org/10.6028/NIST.SP.800-61r3), printed pp. 34–35, RC.RP/RC.CO | Incident-recovery recommendations | Connects integrity checks, recovery completion criteria, incident documentation and communications. Supports distinguishing operational recovery from documented disposition. It is general guidance, not evidence that each vendor advisory must repeat every item. |
| L03 | Allodi, Banescu, Femmer & Beckers (2018), [Identifying Relevant Information Cues for Vulnerability Assessment Using CVSS](https://arxiv.org/abs/1803.07648), CODASPY, DOI 10.1145/3176258.3176340 | Abstract and bibliographic record | Experiments with information supporting severity assessment. Relevant to whether vulnerability communication supplies decision-relevant context. Its outcome is assessment accuracy, not post-exploitation closure; transfer to this project needs full-text review. |
| L04 | Imtiaz, Khanom & Williams (2021 preprint), [Open or Sneaky? Fast or Slow? Light or Heavy?: Investigating Security Releases of Open Source Packages](https://arxiv.org/abs/2112.06804) | Abstract and bibliographic record | Examines security-release timing and documentation across package ecosystems. Relevant to communication and timing; it does not directly evaluate closure evidence. Verify final publication status before final bibliography. |
| L05 | Grispos, Glisson & Storer (2019), [How Good is Your Data? Investigating the Quality of Data Generated During Security Incident Response Investigations](https://arxiv.org/abs/1901.03723), HICSS-52 | Abstract and bibliographic record | A case study of incident-response data-quality challenges. Relevant to evidence provenance and documentation. A single-organization study cannot validate this project's seven-category scoring model. |

All sources accessed 2026-11-03. Publication years follow the bibliographic records reviewed.

## Preliminary synthesis
The reviewed material suggests three adjacent lines of work: managing and verifying patches; conducting and documenting incident recovery; and communicating vulnerability information or preserving useful incident data. Beyond the Patch can examine how selected official CVE-specific source sets connect these activities.

A defensible working contribution statement is: “This study applies a transparent document-analysis framework to characterize response instructions and decision-supporting evidence in official guidance for a purposive sample of known-exploited vulnerabilities.”

Do not yet claim “the first study,” that current guidance is generally inadequate, or that patch-management research ignores compromise response. Those claims need a broader full-text review and completed data analysis.

## Next search and appraisal procedure
Search ACM Digital Library, IEEE Xplore, USENIX, Google Scholar and institutional access where available using:
- (“security advisory” OR “vulnerability disclosure”) AND (quality OR actionable OR remediation)
- (“known exploited vulnerabilities” OR KEV) AND (“incident response” OR recovery)
- (“vulnerability management” AND (“closure” OR “residual risk” OR evidence))
- (“incident response” AND (“data quality” OR “documentation” OR “decision criteria”))

Record database, exact query, date, screened titles/abstracts, exclusion reason and full-text decision. Follow references and citing papers from L03–L05. Separate empirical studies, standards/frameworks and practitioner guidance. For included full texts extract research question, sample, unit of analysis, method, results, limitations and specific overlap with this study. Keep the background-literature cutoff separate from CVE-guidance cutoffs. Record screening totals as the review progresses.

## Paper outline supported by this review
1. Problem: patch verification and possible prior exploitation create different evidence needs.
2. Related work: patch management; incident recovery; information/documentation quality.
3. Method: sample, scenarios, source boundaries, version policy, two scoring dimensions.
4. Results: applicable-category distributions and qualitative memos with provenance.
5. Discussion: observed guidance boundaries, practical implications and uncertainty.
6. Limitations: purposive sample, source versions, coding and review procedures and no asset-level validation.

