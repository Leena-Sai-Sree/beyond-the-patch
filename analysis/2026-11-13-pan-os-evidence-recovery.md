# Recovery of historical PAN-OS source evidence

**Project:** Beyond the Patch  
**Verification date:** November 13, 2026  
**Case:** CVE-2024-3400  
**Status:** Eight historical captures located and hash-verified; record-level interpretation review remains pending

## Finding

The November 3 review recorded that original PAN-OS captures were absent from its checkout. A November 13 search of the shared research workspace located eight substantive HTML captures and their original capture manifest. This supplements the older report; it does not change what was available to that earlier review.

The local evidence directory is `pan-os-review/data/source-captures/CVE-2024-3400/`, relative to the shared task workspace. It is not a directory published in the GitHub repository. The capture manifest records UTC collection timestamps; verification was performed on November 13.

## Verification results

Each recovered file was hashed and compared with the corresponding value in the existing [source register](../data/source.md). All eight matched.

| Source ID | Evidence file | Capture timestamp, UTC | SHA-256 | Comparison |
|---|---|---|---|---|
| S001 | S001.html | 2026-10-28T14:48:30.5382412Z | d5d77b8d560efa8aafe8e691dce64d214f4ed5d57fb0153ccc3d8161288ee0c8 | Match |
| S006 | S006.html | 2026-10-28T14:48:31.5075949Z | fe2dfb98cd45036c26e9317d5db6c3e2aca4dc04194146bb4660e79e827971d3 | Match |
| S007 | S007.html | 2026-10-28T14:48:33.4750439Z | 635c38a4c85bd65a92bd080b3083a492bdcb1ce3c6d5e3014e5c080d9e9117eb | Match |
| S008 | S008.html | 2026-10-28T14:48:34.0285592Z | d30f4d370984d46b2dc87046fe2092833ddf694f6990b4a53f0eb61632608340 | Match |
| S009 | S009.html | 2026-10-28T14:48:36.2306110Z | 81593b1aeed62c44bf78b8d035dac6c18cfe6b2e23660193335368c914575564 | Match |
| S011 | S011.html | 2026-10-28T14:48:39.0937044Z | b9b37d5028498537ab1eb3549be4b788c9f09abf3520c7aff406bda9cb2bf89f | Match |
| S012 | S012.html | 2026-10-28T14:48:40.0752111Z | ef9a4844d7f1aaf740922e5c926ddd6aa7a09c76271b6621bbc32945cdfbdd33 | Match |
| S013 | S013.html | 2026-10-28T14:48:41.0055203Z | 5593d62f9ed2a83194ad51de0346154707380a876791ea09f71a8de4dad62243 | Match |

The preserved manifest is `capture-manifest.json` in the same local directory. S010 has no complete original HTML capture. S014 is a login/empty-response capture, not a usable article, and remains excluded from coding. S015 is the separately retained KEV entry.

## Implication for review

The recovered S009 rendering permits historical review of P3400-029–035 without substituting the later October 29 recovery-article revision. The other seven files permit checks of their corresponding original document-category records. The [targeted review queue](2026-11-03-pan-os-review.md) remains the record-level starting point.

A hash match establishes agreement with the recorded bytes. It does not validate the coding interpretation, demonstrate source-search completeness, or constitute independent second-coder agreement.

## Outstanding work

Preserve a durable private copy with its manifest, record that archive location, and document each record-level review decision. Those actions remain outstanding; this note does not claim that the scoring review or archival transfer has been completed. No original scores, dates, source identifiers or summary maxima were changed.
