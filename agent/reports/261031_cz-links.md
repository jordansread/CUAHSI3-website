# Paper-to-dataset links from DataCite (epic ticket T6c)

Date: 31 October 2026. Ticket: CUAHSI/CUAHSI3-website#87. Branch `task/cz-datacite-links`. Script: `scripts/cz-links.mjs`. Output: `agent/reports/261031_cz-links-proposal.json`. **A proposal. Nothing in `content/` was changed.** The `related` field it would fill was added in #185. Every figure below is in the proposal file's `counts` (the script computes them), except where a sentence says otherwise.

## What was asked, and what was kept

For each of the 1,276 papers with a DOI in `content/critical-zone/products.json` the script asked DataCite for records that name that DOI in their `relatedIdentifiers` (1,236 requests, 40 answered from cache, 0 failed, 1 second apart; the final counts below were produced by running the script again on the cached answers after the review fixes). It kept only supporting relations on Dataset and Software records, said from the dataset's side:

| DataCite relation on the dataset's record | `related` relation |
|---|---|
| IsSupplementTo, IsSupplementedBy | `supports` |
| IsCitedBy, IsReferencedBy | `cited-by` |
| IsDescribedBy | `described-by` |

**IsSupplementedBy is stored as `supports`** (Jordan's ruling of 31 October 2026). On the dataset's record it says the paper supplements the dataset, the reverse of IsSupplementTo, but the two are kept together as supporting links. 3 such relations were seen, on three Zenodo records that are three versions of one software tool, the Spatial Modeling for Resources Framework (SMRF), all for one paper. A dataset record that itself Cites or References the paper is counted and not kept (decision 1). Where one dataset and paper have two kept relations, the strongest is stored (supports, then described-by, then cited-by); none such was seen (0 pairs).

| Count | Of |
|---|---|
| Papers asked: 1,276 | 1,276 papers with a DOI in the list (494 papers have no DOI and cannot be asked) |
| Papers named by at least one DataCite record: 162 | 1,276 |
| Papers with at least one supporting link: **87** | 1,276 (6.8 percent) |
| Supporting links: 216 (pairs of dataset and paper) | cited-by 172, supports 34, described-by 10 |
| Datasets and software found: 170 | already in the list 40, not in the list 130 |
| Dataset or software records that cite the paper (relations seen, not kept): 219 | |

6.8 percent is close to the T6c test of 29 October 2026 (described in the ticket text, not kept in the repository), which found a supporting DataCite link for 7 of 100 random papers; 100 papers is too few to call that a confirmation. The 75 papers named by a record but with no supporting link are named only by records that cite them, or by records that are not datasets.

Every relation seen between any DataCite record and a paper is in the file's counts (References 624, IsCitedBy 104, IsReferencedBy 68, IsSupplementTo 50, and a few others). Those are relation instances; the 216 links are pairs, so the two sets of numbers are not directly comparable. Kept relations on records that are not datasets or software were skipped: Text 4, Collection 8, JournalArticle 7.

## The 130 datasets and software items not in the list

127 are datasets and 3 are software (the three SMRF versions above, which are probably one product with three version DOIs); 67 distinct papers in the list name them; 11 are linked to more than one paper. By repository: Environmental Data Initiative 69, figshare 24, Dryad 13, Ag Data Commons 4, Zenodo 3, Purdue University Research Repository 3, USGS 3, Virginia Tech 3, and one each from eight others (the file has the list). Published: 64 in 2015 to 2019, 54 in 2020 to 2024, 7 in 2025, 5 in 2010 to 2014. The table to read them in is `agent/reports/261031_cz-links-candidates.md` (title, repository, year, link, the paper that names it, the relation); the machine-readable form is the key `candidate_products_not_in_the_list` of the proposal file. They are candidate products for Jordan's review (decision 2: a dataset linked to a Critical Zone paper counts, whatever repository holds it); nothing is added.

A link says a Critical Zone paper cites or describes the dataset, not that the dataset is Critical Zone data: a dataset from a broader programme can be cited by a Critical Zone paper. Jordan's rule is that it counts; I would still like him to see the titles before they are loaded.

## The 40 datasets already in the list

Each would gain a `related` entry (the file lists them with the entries). 39 are typed dataset in the list; one is typed `paper` ("Chemistry of water, stream sediment, wildfire ash, soil, dust, and mine waste for Fourmile Creek Watershed, Colorado, 2010-2019", a USGS data release, DOI 10.5066/P941BIYS) though DataCite calls it a dataset. Its type in the list may be wrong; that is a content question.

The 87 papers: 70 have era czo and 17 no era; by first site Luquillo 13, Boulder Creek 12, Catalina-Jemez 10, Shale Hills 10, Southern Sierra 8, Eel River 5, Reynolds Creek 5, Intensively Managed Landscapes 5, Calhoun 2, and 17 with no site.

## Sample check (rule 12)

Read from DataCite directly (not from the script's cache), three links and three papers without a link:
- IEDA 10.26022/IEDA/111733 to 10.1002/2016WR019072: DataCite relation IsReferencedBy, a Dataset: stored as `cited-by`. Matches.
- IEDA 10.1594/IEDA/111155 to 10.2136/sssaj2012.0061: IsReferencedBy, a Dataset. Matches.
- EDI 10.6073/pasta/49756c3243ea15535fb8 (El Verde meteorological data) to 10.1029/2022gb007678: IsCitedBy, a Dataset. Matches.
- Papers 10.1002/2014WR015635, 10.1002/2012WR013038 and 10.1016/j.proeps.2014.08.003: DataCite names none of them (0 records), consistent with "no link".

DataCite's related-identifier search returned the same count for a DOI in lower case and in upper case on the two DOIs I tried (a trial, not a proof for all).

## Confirmed links (a person's list)

The script reads a CSV with the columns `paper_doi`, `dataset_doi` and optionally `relation` (default `supports`) and merges it with the DataCite links; a confirmed link overrides a programmatic one for the same pair and counts as `manual`. A `https://doi.org/` prefix is dropped; a quoted comma is not handled (a DOI has none). Tried on a two-row sample in a scratch run: one override, and one dataset with no DataCite record, which is kept with only its DOI and marked `no_datacite_record: true`. No confirmed file exists yet (0 rows read in the real run).

## What was not checked

- Whether each candidate is Critical Zone data (above), and whether any of the 130 duplicates a list entry under another DOI (matching is by DOI, and by `10.4211/hs.<id>` for HydroShare resources without one; an entry known only by URL would not match).
- Scholexplorer links (no relation type, out of scope by decision 3) and any other route; papers with no DOI.
- Each of the 216 links by hand (3 read directly, above).
- Pagination was never needed: every answer fitted one page (1,236 requests plus 40 cached made the 1,276 papers), so the paging code is untested on real data.
- The proposal file's candidate entries against the product schema: they are proposals (a `related` list and the DataCite fields), not yet product records; a content PR would build the records, with `source: datacite`.

## Next

A content PR on a `content/` branch, after Jordan reads the 130 candidates: set `related` on the 40 products, and add the candidates he approves as products. About 7 percent of papers gain a link.
