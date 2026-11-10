# Pilot rules v0.3 — draft revision
Date: 2026-11-03  
Status: Pilot working revision; researcher verification pending; not a frozen main-study protocol  
Supersedes for new draft coding: the operational details below, not historical v0.2 records.

## Purpose and retained design
Retain structured document analysis, purposive KEV sampling, E1–E7, independent ordinal actionability/evidence scores, document × CVE × category records, and source-attributed CVE summaries. Five pilot cases and up to 20 additional cases remain a feasibility ceiling, not a quota. This revision resolves choices exposed by the first PAN-OS case; it is not independent validation.

## Scenario policy
Before scoring a CVE, write a scenario with product/version, deployment, exposure, observed-or-assumed exploitation stage, affected identities/data, and exclusions. Label every fact as source-supported context, analytical assumption, or unknown. Analytical assumptions never become observations.

Use the same three response states as a comparison framework:
- X: affected/exposed; asset exploitation not established.
- S: credible suspicious activity; exploitation extent unresolved.
- C: credible successful exploitation assumed for analysis, with capability specified.

For the pilot, PAN-OS P3400-A and MOVEit M34362-C are C scenarios. This is a deliberate scope restriction to response after credible exploitation; it cannot establish guidance coverage for every merely exposed asset. Capabilities still differ across CVEs: do not assume root access or credential theft in a SQL-injection case without stating why. Report scenario differences alongside comparisons. Do not create three full datasets unless feasibility supports it; use X/S sensitivity notes where applicability changes.

Applicability belongs to the case-category scenario and normally remains consistent across its documents. Source silence is a coverage observation, not A2. If a source addresses a different branch, retain the case applicability but score only compatible material and explain the branch mismatch. Incompatible or temporally ineligible documents are excluded, not assigned seven zeros.

A3 requires a named trigger and a separate established/absent/unresolved status. An assumed trigger must say “assumed in analytical scenario,” never “confirmed on an asset.” A3-established can be scored with that flag; unresolved/absent conditions receive NA for the unconditional analysis. A2/A4 receive NA. Zero requires an accessible, eligible, reviewed document.

## Category boundaries and breadth
Retain the two 0–3 scales in v0.2. Add descriptive facet tags; do not calculate new totals.

| Category | Required distinction |
|---|---|
| E3 | Prevention/access restriction versus isolation of an already compromised asset |
| E4 | Protect secrets at rest; replace/reset credentials; revoke/reissue keys/certificates/tokens; invalidate sessions |
| E5 | Eradication/rebuild, restoration, integrity checks, disposal of an old asset |
| E6 | Fixed-build/patch verification versus mitigation verification |
| E7 | T technical response disposition; U uncertainty/residual-risk treatment; A administrative authorization and retained closure record |

Encryption verification can score highly within E4-protect without demonstrating credential replacement or session invalidation. Keep its score and its narrow facet visible. A mitigation test can score E6 without proving that a fixed software build is installed. Technical recovery alone does not earn E7 credit.

For E7, credit a technical-disposition passage only when it explicitly connects post-response evidence/assessment to a conclusion about response status or a criterion for ending or transitioning the response. An investigative next step or an ordered list ending with service reopening is not sufficient on its own. Merely saying investigate, patch, restore, or monitor is insufficient. Tag any credit T, U, or A. Do not require all facets for any credit; do not imply that T coverage satisfies U/A.

PAN-OS S010's post-remediation FAQ can provisionally retain 2/3 under E7-T. The stricter alternative is 0/0 if the study later restricts E7 to explicit case-closure governance. Preserve that sensitivity result; decide before main coding. Do not choose the definition because it produces more gaps.

## Source boundaries and versions
Keep the October 28 KEV snapshot as the pilot selection frame. Its membership date is distinct from the guidance observation date.

Preserve the October 28 coding unchanged. Put November 3 reviews/new sources in a dated supplemental series. Do not silently move the historical cutoff. For a later main study, select one consistent observation window/cutoff and re-retrieve or establish retained versions for all included cases under it.

Assign a new source-version ID to a newly observed rendering (for example N3400-S009), related to but not overwriting S009. A page's displayed revision date is metadata, not proof its current text equals a past version. October 29-updated guidance cannot replace October 28 evidence. Missing older captures remain a limitation.

Retrieval starts with retained KEV entry, vendor advisory, CISA, CERT-EU and Canadian Cyber Centre searches, followed by one hop of explicitly relevant official links from these primary sources. Record additional national/sector CSIRTs encountered. Use the same queries and boundaries across cases, recording deviations. Stop after all named starting sources and eligible direct links have an included/excluded/inaccessible/pending decision; do not claim completion while a relevant link is pending. Avoid unlimited recursion. General threat-actor prevention advice gets a general-context tag and does not substitute for CVE-specific post-exploitation instructions.

A retained local capture needs file path, access timestamp and SHA-256, but hashes alone do not prove completeness. Where only web retrieval is available, record “web-rendered review; raw capture unavailable” and section locators. Do not claim a full raw capture from a search snippet.

## Synthesis and quality review
Report separate actionability and evidence maxima with source IDs, scenario, temporal series and covered facets. No averages, aggregate completeness score or vendor league table. An incomplete source search supports provisional document observations, not a final CVE-level absence claim. Category maxima can mask missing facets and incompatible instructions.

An independent coding review has not yet been completed. Researcher verification should cover disputed records, version-sensitive sources and a documented sample of unchanged records. Record the reviewer and the scope of each check. If a second coder is unavailable, use delayed self-recoding and report it separately from independent agreement.

## Change log and adoption gate
| Decision | Reason | Affected material |
|---|---|---|
| Scenario states and assumption labels | Prevent exploitation severity from silently changing applicability | All pilot case descriptions |
| Facet tags for E4/E6/E7 | Separate specificity from breadth | PAN-OS summaries; new MOVEit records |
| Preserve dated series | Avoid attributing later guidance to October 28 | Source register and supplemental notes |
| E7-T with stricter sensitivity result | Make closure interpretation reproducible | P3400-042 and E7 summary |
| Named retrieval routes and stopping rule | Make source-set comparisons inspectable | Remaining pilot retrieval |

Before freezing: finish all five cases, resolve pending links, confirm the common temporal policy and E7 scope, verify affected records, measure actual coding effort, and record researcher decisions and any supervisor feedback.

