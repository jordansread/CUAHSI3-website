# Critical Zone product harvest: method and first result (epic ticket T6)

Date: 29 October 2026. Script: `scripts/cz-harvest.mjs`. Output (a proposal, not content): `agent/reports/261029_cz-harvest-proposal.json`
(1,084 records, each with a `provenance` list). Nothing under `content/` is written or changed. Feeds T8 (page structure) and T11 (loading products).

## What the script does

Three routes from the 20 October footprint analysis, merged on the HydroShare resource id (or the DOI when there is none, or the URL as a last resort):

| Route | What it reads | Result on 29 Oct 2026 |
|---|---|---|
| CZO archive | the 919 dataset pages in the T1 inventory (917 parsed from the T1 saved copies; 2 now return 404) | 435 distinct HydroShare resources |
| Discover | `contribute.criticalzone.org/api/discovery/search`, 8 pages of 100 | 761 records, 659 of them HydroShare |
| Award search | DataCite and Crossref, for each of the 69 NSF awards in `content/awards/awards.json` whose sentence names a critical zone, a CZO or a Network Cluster/Hub | DataCite 213 records, Crossref 319 records (these overlap each other and Discover) |

Re-running: every response is cached by URL under `.agent/harvest/cache`, so a second run makes no requests (except the two 404 archive pages, which are not cached). `--refresh` re-fetches. The archive pages are read from the T1 crawl folders if present, else fetched live at 3 s apart (about 46 minutes for 919).

Politeness: 3 s before every request by default (both legacy robots.txt files say `Crawl-delay: 3`); I ran the DataCite and Crossref pass at 1 s because they are public APIs, Crossref with a mailto. About 150 requests in all. HydroShare itself is never contacted: views and downloads (T2) are a later step and need landing pages at 5 s or more.

## Does it reproduce the analysis?

| Figure in the 20 Oct analysis | Here | Verdict |
|---|---|---|
| 435 archive datasets | 435 distinct HydroShare resources across the 917 archive dataset pages (many pages point to the same resource) | Equal to the analysis's figure |
| 684 HydroShare resources (79 with a DOI) | 659 in Discover; 410 of them also in the archive; union with the archive = **684** (the two overlap on 410, stored as `hydroshare_resources_in_archive_and_discover`) | Equal to the analysis's figure (the DOI count is not checked here) |
| 876 datasets | **843** datasets (702 in HydroShare, 141 elsewhere) | **33 fewer (3.8 percent).** Not explained. |
| 83 percent in HydroShare | 702 of 843 datasets = **83.3 percent** (`share_of_datasets_in_hydroshare`; over all 1,084 records it is 64.8 percent, `share_of_all_records_in_hydroshare`) | **The percentage agrees, but not like for like:** both numerator and denominator differ from the analysis (843 against 876 datasets; 702 HydroShare datasets, which include 18 found only by award search, against its 684 HydroShare resources). 83 percent of 876 would be about 727. |
| 21 Dryad, 11 EarthChem/IEDA, 3 PANGAEA and 7 Zenodo datasets found by award search | Award search alone adds 57 datasets not in the archive or Discover: 18 are HydroShare, 24 Zenodo, 11 IEDA, 3 Dryad, 1 other | IEDA (as DataCite names the publisher) is 11, equal; **Dryad is 3 here against 21, and PANGAEA is absent**; Zenodo is 24 against 7. The searches differ. |

Possible reasons for the gaps, none tested: the analysis counted its 876 differently (for example by HydroShare resource plus other-repository datasets, with its own name search for Boulder Creek, which I did not run); it searched awards by name as well as number; DataCite and Crossref have changed since 20 October. The analysis file lists no per-dataset records, so I cannot line them up one by one.

## What is in the proposal file

- 1,084 records: 843 datasets, 231 "papers", 10 software items. "Paper" is the bucket for every DataCite or Crossref type that is not a dataset, software or model: here 205 Crossref journal articles, 22 Crossref preprints (`posted-content`), 2 DataCite preprints and 2 DataCite dissertations. The 10 software items are all DataCite (Zenodo). They acknowledge a CZ award; they are **not curated**, and I have not judged which are "key" or relevant (T11 and T12). Each source entry in `provenance` keeps the repository's own `resource_type`.
- Per record: the fields of the `criticalZoneProduct` schema (title, type, doi, url, hydroshare_id, repository, awards, sites, era, year, source, source_url, date_added), plus `provenance` (every source that named it, with URL and date retrieved) and, where a record cites an NSF number not in the registry, `award_numbers_not_in_registry`. `provenance` and `award_numbers_not_in_registry` are not schema fields: remove them when loading into `content/`.
- `awards` is filled only from the registry, so a record that cites an award the registry lacks (37 numbers; for example 1931283, which I did not look up: it appears on 20 records, the ones I read being Urban cluster datasets) gets no `awards` for it. 507 of the 761 Discover records name no award in the registry. For Discover records every 7-digit number in the funding field is matched to the registry **without a funder check** (unlike routes 3a and 3b), so an `awards` entry on a Discover-only record is a number match; nsf-2012340 is on 39 Discover records.
- `access` and `highlight` and `usage` are not filled (T2 and T11).
- `era`: set only when a record's sites are all CZO sites or all CZNet; 399 records have neither, or both.

## Checks made, and how the script was corrected

- Sample read (rule 12), three of each kind: archive only (a Luquillo El Verde soil record), archive and Discover (a Calhoun soil gas record), Discover only (a hydraulic conductivity record with award nsf-2012340); DataCite only (an Illilouette Creek soil moisture dataset with HydroShare DOI), Crossref only (an isotope-method paper under nsf-1331841), DataCite and Discover (an IEDA root-data record under two awards). All six had a title, an identifier and the expected source.
- Found by reading the first Crossref output: a math paper attributed to a CZ award, because the funder was the "Binational Science Foundation" (it contains the words "national science foundation"). Fixed: a funder now counts as NSF only when its name starts with NSF or "National Science Foundation" (optionally preceded by "United States" or "U.S.", and not followed by "of"), is an NSF division by name, has an NSF funder DOI, or is a CZO name or the bare "EAR"; and the award string must contain the number as a whole number. This is an allowlist, tested on twelve funder names including the Binational, Swiss, Sri Lankan and Chinese ones. 15 Crossref records dropped.
- Found by counting: 15 Discover records had no HydroShare id or DOI and were skipped; they now key on their URL, so all 761 appear.
- Schema: all 1,084 records pass `criticalZoneProduct` from `scripts/content-schemas.mjs` once `provenance` and `award_numbers_not_in_registry` are removed (a throwaway script, not committed); no DOI or HydroShare id appears twice (the uniqueness rule the validator applies to `products.json`). This does not check that the title, year or award on a record is right.
- Merge and fetch hardening after review: a record first seen under one key and later under the other (HydroShare id, DOI) is now found either way; a 404 from DataCite or Crossref no longer crashes the run; 429 and 5xx are retried up to three times. Where a DOI and a HydroShare id point to two different existing records they are still not merged (none seen in this output: no duplicate DOI or HydroShare id).
- Not found by any check: false positives where a funder name looks like NSF but the number belongs to another grant (Crossref funder names are free text). 6 sampled Crossref papers and 3 sampled DataCite records were read; no further false positive seen. Not a guarantee.

## Known blind spot

Data outside the three routes is missed: for example about 80 Boulder Creek datasets in eight repositories that carry no award number and are not in the archive or Discover (from the analysis). A dataset whose funding metadata omits the award number does not appear in route 3. Papers appear only if a publisher recorded the award in Crossref, which many do not. Equally, a paper that cites a CZ award in passing appears here, though it may not be CZ science.

## Not checked

- The analysis's DOI count (79 of 684). The `doi` field is filled only when a source gave it; no HydroShare page was read.
- Whether the 2 archive pages that now return 404 (`iml/data/dataset/6103`, `reynolds/data/dataset/6108`) were removed or never existed.
- Records with HydroShare ids that HydroShare has since deleted (landing pages not fetched).
- DataCite funderName coverage: a record naming NSF only in free text elsewhere is missed.
