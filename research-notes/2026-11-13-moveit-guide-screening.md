# MOVEit: newly accessible linked guide

**Project:** Beyond the Patch  
**Observation date:** November 13, 2026  
**Case:** CVE-2023-34362  
**Status:** Access and relevant passage verified; scenario/edition eligibility decision pending; no scores assigned

## Relationship to the existing source search

The [November 3 MOVEit supplement](../data/moveit-pilot-supplement-2026-11-03.md) records that an FBI-hosted alternate of the linked joint ransomware guide timed out twice. That historical access result is preserved.

The same [FBI-hosted URL](https://www.ic3.gov/CSA/2023/231019.pdf) was accessible during the November 13 audit. The guide identifies itself as the October 2023 edition, version 3.0 in its change record. It is not assumed identical to the May 2023 guide referenced elsewhere in the original source search.

## Observation record

| Field | Recorded value |
|---|---|
| Official delivery location | https://www.ic3.gov/CSA/2023/231019.pdf |
| Document title | StopRansomware Guide |
| Edition | October 2023 |
| Observed access result | HTTP 200; substantive PDF text available |
| Retrieval timestamp, UTC | 2026-11-13T20:02:40.319988+00:00 |
| Downloaded response SHA-256 | 9ab2b1c6a0e2356d4fe9687d743362a58df76799c6bf0908c181f16d4da2f62d |
| Retention | Extracted text retained in local audit workspace; complete raw PDF not retained by this check |
| Initial source relationship | Later-edition alternate in the guide family already recorded in the MOVEit retrieval log |
| Eligibility for a new scored series | Pending explicit scenario and edition assessment |

## Passage requiring assessment

The introduction addresses ransomware and data extortion, including extortion without encryption. Printed page 26, Part 2, step 18, provides a criterion for a designated IT/security authority to declare an incident over. This warrants a closure-related screening decision. [Official guide](https://www.ic3.gov/CSA/2023/231019.pdf).

The observation is not a new score or a finding that the guide applies unconditionally. M34362-C assumes successful exploitation and potential file disclosure, but not ransomware encryption or a confirmed extortion demand. The compatible scope of general response advice must be stated before it affects the data.

## Next decision

1. Retain the reviewed PDF and record its version, access timestamp and hash.
2. Establish whether the later edition is eligible in the November observation series and document its link relationship.
3. Identify passages compatible with M34362-C, distinguishing general context from scenario-specific instructions.
4. Record Include, Conditional or Exclude with the corresponding rationale. If scored, allocate a new source-version ID and retain relevant conditions.
5. Add seven document-category records if eligible, and produce a separately dated synthesis. Preserve the original 84 records and November 3 summary.

No original record or score was changed. The guide's current accessibility does not establish that it was accessible during the earlier observation.
