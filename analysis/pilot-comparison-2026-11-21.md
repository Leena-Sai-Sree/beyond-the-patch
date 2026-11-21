# Five case pilot comparison

Prepared November 21, 2026. Status: exploratory synthesis for researcher review.

The table combines 259 analytical records from 37 case and document-version units. It retains the actual source observation dates rather than presenting a common-date dataset. Of the 259 records, 231 come from earlier coding and 28 were added from retained November 14 sources. Seven MOVEit sensitivity records remain separate. Earlier coding has not all been independently recoded.

Each cell shows the highest actionability score followed by the highest evidence-specificity score. The two maxima can come from different sources or different facets; a cell is not a complete procedure or a closure decision.

| Case | E1 | E2 | E3 | E4 | E5 | E6 | E7 |
|---|---|---|---|---|---|---|---|
| P3400 | 3/3 | 3/3 | 3/3 | 3/3 | 2/3 | 3/3 | 2/3 |
| M34362 | 2/2 | 3/3 | 2/0 | 3/3 | 3/3 | 2/2 | 2/3 |
| O23397 | 1/2 | 3/3 | 2/0 | 2/0 | 3/3 | 1/0 | 0/0 |
| P34527 | 3/3 | 0/0 | 3/3 | 0/0 | 0/0 | 3/3 | 0/0 |
| L44228 | 2/3 | 2/3 | 3/2 | 0/0 | 0/0 | 2/3 | 0/0 |

E1 exposure; E2 investigation; E3 containment and access restrictions; E4 credentials and sessions; E5 recovery; E6 remediation verification; E7 closure and technical response disposition.

## What the comparison supports

PAN-OS has detailed exposure, investigation and mitigation instructions in the recorded set. Its E4 maximum concerns encryption of stored secrets; credential replacement and session invalidation must be examined separately. The E7 maximum is technical disposition from S010, whose original raw page is unavailable.

MOVEit includes explicit cleanup, credential and session actions. The accepted November 9 decision gives its primary E7 record 2/3 for a technical transition after cleanup checks. The original 0/0 remains historical coding.

Outlook includes detailed investigation and an archived mailbox-item cleanup procedure. The cleanup score is limited to the selected mailbox items. It does not establish that credentials, sessions or every form of persistence were addressed.

The recorded Print Spooler set is concentrated on updates, configuration and access restrictions. Registry verification can score highly without answering whether earlier SYSTEM-level access was investigated. The directive completion report concerns federal vulnerability compliance, not disposition of a compromised host.

Log4j includes inventory, hunting, isolation and mitigation verification. General referrals to incident response do not supply recovery procedures within the referring document. The proposed L04 E5 correction therefore changes 1/0 to 0/0. The two results are shown in the revision memo.

These are observations about the included documents. Outstanding links and unavailable source versions prevent broader claims that a publisher provides no relevant guidance.

## Source attribution for every maximum

| Case | Category | A max | A sources | E max | E sources |
|---|---|---:|---|---:|---|
| P3400 | E1 | 3 | S001; S006; S010 | 3 | S001; S006; S010 |
| P3400 | E2 | 3 | S001; S006; S007 | 3 | S001; S006; S007; S008; S010 |
| P3400 | E3 | 3 | S001; S010 | 3 | S001 |
| P3400 | E4 | 3 | S012; S013 | 3 | S013 |
| P3400 | E5 | 2 | S001; S006; S009 | 3 | S009 |
| P3400 | E6 | 3 | S001; S010 | 3 | S001; S010 |
| P3400 | E7 | 2 | S010 | 3 | S010 |
| M34362 | E1 | 2 | N34362-S001; N34362-S002; N34362-S003; N34362-S004; N34362-S006; N34362-S009 | 2 | N34362-S001; N34362-S002; N34362-S003; N34362-S004; N34362-S006; N34362-S007; N34362-S009 |
| M34362 | E2 | 3 | N34362-S003; N34362-S004 | 3 | N34362-S001; N34362-S002; N34362-S003; N34362-S004; N34362-S006 |
| M34362 | E3 | 2 | N34362-S001; N34362-S002; N34362-S003; N34362-S004; N34362-S006; N34362-S007; N34362-S009 | 0 | N34362-S001; N34362-S002; N34362-S003; N34362-S004; N34362-S005; N34362-S006; N34362-S007; N34362-S008; N34362-S009; N34362-S010; N34362-S011; N34362-S012 |
| M34362 | E4 | 3 | N34362-S001; N34362-S005 | 3 | N34362-S005 |
| M34362 | E5 | 3 | N34362-S001; N34362-S004 | 3 | N34362-S001; N34362-S004 |
| M34362 | E6 | 2 | N34362-S001; N34362-S002; N34362-S010; N34362-S011 | 2 | N34362-S001; N34362-S002; N34362-S007; N34362-S010; N34362-S011 |
| M34362 | E7 | 2 | N34362-S001 | 3 | N34362-S001 |
| O23397 | E1 | 1 | N23397-S001; N23397-S002 | 2 | N23397-S001; N23397-S002 |
| O23397 | E2 | 3 | N23397-S001; O12 | 3 | N23397-S001; N23397-S002; O12 |
| O23397 | E3 | 2 | N23397-S001; N23397-S002; N23397-S003 | 0 | N23397-S001; N23397-S002; N23397-S003; O12 |
| O23397 | E4 | 2 | N23397-S001; N23397-S002; N23397-S003 | 0 | N23397-S001; N23397-S002; N23397-S003; O12 |
| O23397 | E5 | 3 | O12 | 3 | O12 |
| O23397 | E6 | 1 | N23397-S001; N23397-S002; N23397-S003 | 0 | N23397-S001; N23397-S002; N23397-S003; O12 |
| O23397 | E7 | 0 | N23397-S001; N23397-S002; N23397-S003; O12 | 0 | N23397-S001; N23397-S002; N23397-S003; O12 |
| P34527 | E1 | 3 | P05 | 3 | P01; P04; P05 |
| P34527 | E2 | 0 | P01; P02; P03; P04; P05; P06 | 0 | P01; P02; P03; P04; P05; P06 |
| P34527 | E3 | 3 | P04; P05; P06 | 3 | P05 |
| P34527 | E4 | 0 | P01; P02; P03; P04; P05; P06 | 0 | P01; P02; P03; P04; P05; P06 |
| P34527 | E5 | 0 | P01; P02; P03; P04; P05; P06 | 0 | P01; P02; P03; P04; P05; P06 |
| P34527 | E6 | 3 | P01; P05 | 3 | P01; P02; P04; P05; P06 |
| P34527 | E7 | 0 | P01; P02; P03; P04; P05; P06 | 0 | P01; P02; P03; P04; P05; P06 |
| L44228 | E1 | 2 | L02; L04 | 3 | L04 |
| L44228 | E2 | 2 | L02; L03; L04 | 3 | L02; L03; L04 |
| L44228 | E3 | 3 | L02; L03 | 2 | L02; L03 |
| L44228 | E4 | 0 | L01; L02; L03; L04; L07 | 0 | L01; L02; L03; L04; L07 |
| L44228 | E5 | 0 | L01; L02; L03; L04; L07 | 0 | L01; L02; L03; L04; L07 |
| L44228 | E6 | 2 | L04 | 3 | L04 |
| L44228 | E7 | 0 | L01; L02; L03; L04; L07 | 0 | L01; L02; L03; L04; L07 |

## Review limits

The source register marks 22 case and document-version units with an exact retained capture or KEV snapshot and 15 without the exact original raw version. A hash establishes which bytes were retained; it does not validate interpretation. A later capture at the same URL does not authenticate an earlier version.

Different case assumptions, source-set sizes and observation dates limit comparisons. Duplicate editions and shared KEV material are not independent corroboration. No score average, vendor ranking, prevalence estimate or detection-effectiveness claim is supported. See the [revision memo](pilot-revision-memo-2026-11-21.md), [source decisions](../research-notes/pilot-source-decisions-2026-11-21.md) and [record dataset](../data/pilot-records-2026-11-21.csv).
