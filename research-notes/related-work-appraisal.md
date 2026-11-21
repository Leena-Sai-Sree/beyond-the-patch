# Related work appraisal

Date: November 21, 2026. This is a targeted appraisal of the five references in the existing seed review. It is not an exhaustive literature search.

The three research papers were checked beyond their abstracts, using their methods, results and limitations sections. The two NIST publications provide background guidance. They do not supply additional scored CVE observations or validate the pilot taxonomy.

| Reference and material inspected | Method and relevant result | Use and limits for this study |
|---|---|---|
| Souppaya and Scarfone, 2022, [NIST SP 800-40r4](https://csrc.nist.gov/pubs/sp/800/40/r4/final). Publication record and abstract. | Patch management includes identifying, prioritizing, acquiring, installing and verifying updates. | Background for remediation verification. This appraisal does not claim a full-text review of the publication. |
| Nelson and colleagues, 2025, [NIST SP 800-61r3](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r3.pdf). Printed pp. 34–35, RC.RP and RC.CO. | General incident-recovery recommendations connect restoration checks, completion criteria, documentation and communication. | Supports keeping recovery and disposition distinct. A general framework does not require every CVE advisory to reproduce the entire response process. |
| Allodi, Banescu, Femmer and Beckers, 2018, [Identifying Relevant Information Cues for Vulnerability Assessment Using CVSS](https://arxiv.org/html/1803.07648). Sections 3–6. | A block experiment with 67 students and 16 vulnerabilities examines CVSS scoring errors. Information effects vary by category and metric; extra context can also mislead. | Motivates examining the decision an instruction supports. Student participants and a severity-scoring task limit transfer to professional incident closure. The findings do not validate E1–E7. |
| Imtiaz, Khanom and Williams, 2021, [Open or Sneaky? Fast or Slow? Light or Heavy?](https://arxiv.org/html/2112.06804). Sections IV, VI and XI. | The documentation analysis covers 499 advisory-release pairs from 350 advisories. Two authors independently locate and code release information, then resolve disagreements. Documentation of security fixes varies. | Useful precedent for explicit retrieval routes, document coding and treatment of duplicate locations. Package release notes and Snyk-based selection differ from official compromise-response guidance. The reviewed version is arXiv v1; no claim of later publication status is made. |
| Grispos, Glisson and Storer, 2019, [How Good is Your Data?](https://arxiv.org/pdf/1901.03723). Sections 3–4 and study scope. | A single-organization case study combines documents, 188 investigation records and 15 interviews. Ambiguous fields, inconsistent dates and incomplete conclusions complicate reuse of response data. | Supports explicit meanings for evidence fields and decision records. One UK financial organization and access restrictions limit generalization; completeness of every form field is not a universal closure standard. |

## Contribution supported by these references

The pilot examines the relationship between response instructions and the evidence used to support a decision. Its practical contribution is a traceable comparison of selected official guidance and a proposed record for documenting closure. It does not establish that this is the first study of the problem, that advisories generally fail responders, or that the proposed checklist improves incident outcomes.

## Retrieval record

The existing seed list supplied five candidates. This pass retained all five: three for targeted full-text appraisal and two as standards background. The three arXiv bibliographic pages and available full-text renderings were checked on November 21. No new database search, citation-chain search or screening count is claimed.

The literature stage remains a scoped review. A submission requiring a systematic review would need a separately documented search across the selected databases, screening decisions and broader appraisal. The paper draft describes the narrower work actually done here.
