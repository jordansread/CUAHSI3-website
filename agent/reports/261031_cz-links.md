# Paper-to-dataset links from DataCite (epic ticket T6c)

Date: 31 October 2026. Ticket: CUAHSI/CUAHSI3-website#87. Branch `task/cz-datacite-links`. Script: `scripts/cz-links.mjs`. Output: `agent/reports/261031_cz-links-proposal.json` and a readable table of the candidates, `agent/reports/261031_cz-links-candidates.md`. **A proposal. Nothing in `content/` was changed.** The `related` field it would fill was added in #185. Every figure below is in the proposal file's `counts` (the script computes them), except where a sentence says otherwise.

## What was asked, and what is stored

For each of the 1,276 papers with a DOI in `content/critical-zone/products.json` the script asked DataCite for records that name that DOI in their `relatedIdentifiers` (1,236 requests, 40 answered from cache, 0 failed, 1 second apart; the final counts were produced by running the script again on the cached answers after each change of rule). It reads the supporting relations on Dataset and Software records, said from the dataset's side, and **stores only the ones Jordan ruled on 31 October 2026 should be included**: `supports` (the dataset is data for the paper) and, by my reading of his ruling, `described-by` (the paper describes the dataset). **`cited-by` is read, counted and not stored** (the choice is the script's `--keep` option, default `supports,described-by`).

| DataCite relation on the dataset's record | `related` relation | Stored |
|---|---|---|
| IsSupplementTo, IsSupplementedBy | `supports` | yes |
| IsDescribedBy | `described-by` | yes (my reading, to confirm) |
| IsCitedBy, IsReferencedBy | `cited-by` | **no** (172 seen) |

IsSupplementedBy is stored as `supports` by Jordan's ruling of 31 October 2026, though on the dataset's record it says the paper supplements the dataset (the reverse of IsSupplementTo). 3 such relations were seen, on three Zenodo versions of one software tool (SMRF), all for one paper. A dataset record that itself Cites or References the paper is counted and not kept (decision 1): 219 relation instances. Where one dataset and paper have two kept relations the strongest is stored; none such was seen.

| Count | Of |
|---|---|
| Papers asked: 1,276 | 1,276 papers with a DOI in the list (494 papers have no DOI and cannot be asked) |
| Papers named by at least one DataCite record: 162 | 1,276 |
| Papers with at least one stored link: **13** | 1,276 (1.0 percent) |
| Stored links: 44 (pairs of dataset and paper) | supports 34, described-by 10 |
| Datasets and software with a stored link: 38 | already in the list 0, not in the list 38 |
| `cited-by` relations read and not stored: 172 | |

Before the ruling the script stored `cited-by` too: 87 papers (6.8 percent, close to the 7 of 100 of the T6c test of 29 October, described in the ticket text and not kept in the repository), 216 links, 170 datasets (40 in the list, 130 not). Rerun with `--keep supports,described-by,cited-by` to get that set back; the cached answers make it a minute.

**Consequence of the ruling: none of the 40 datasets already in the list gets a `related` entry**, because every link to them was `cited-by`. All 38 stored links lead to datasets and software not in the list.

Every relation seen between any DataCite record and a paper is in the file's counts (References 624, IsCitedBy 104, IsReferencedBy 68, IsSupplementTo 50, and a few others). Those are relation instances; the 44 links are pairs, so the two sets of numbers are not directly comparable. Kept relations on records that are not datasets or software were skipped: Text 4, Collection 8, JournalArticle 7.

## The 38 datasets and software items not in the list

35 datasets and 3 software items (the three SMRF versions, probably one product with three version DOIs); 13 distinct papers in the list name them, and 4 candidates are linked to more than one paper. By repository: figshare 24, Ag Data Commons 4, Zenodo 3, Virginia Tech 3, and one each from Wyoming Data Repository, PANGAEA, Mendeley Data and GFZ Data Services. Published: 30 in 2015 to 2019, 6 in 2025, 1 in 2010 to 2014 and 1 in 2020 to 2024. 24 of them come through one paper (a figshare deposit set). The table to read them in is `agent/reports/261031_cz-links-candidates.md`; the machine-readable form is the key `candidate_products_not_in_the_list` of the proposal file. They are candidate products for Jordan's review (decision 2: a dataset linked to a Critical Zone paper counts, whatever repository holds it); nothing is added.

The 13 papers: 12 with era czo and 1 with none; by first site Reynolds Creek 5, Luquillo 3, Boulder Creek 1, Intensively Managed Landscapes 1, Catalina-Jemez 1, Southern Sierra 1, and 1 with no site.

## Sample check (rule 12)

Read from DataCite directly (not from the script's cache) before the ruling, three links and three papers without a link:
- IEDA 10.26022/IEDA/111733 to 10.1002/2016WR019072: DataCite relation IsReferencedBy, a Dataset: read as `cited-by` (not stored now). Matches.
- IEDA 10.1594/IEDA/111155 to 10.2136/sssaj2012.0061: IsReferencedBy, a Dataset (cited-by). Matches.
- EDI 10.6073/pasta/49756c3243ea15535fb8 to 10.1029/2022gb007678: IsCitedBy, a Dataset (cited-by). Matches.
- Papers 10.1002/2014WR015635, 10.1002/2012WR013038 and 10.1016/j.proeps.2014.08.003: DataCite names none of them (0 records), consistent with "no link".

These three were all `cited-by`, which is now not stored; the 44 stored links (supports, described-by) were **not** sampled by hand. DataCite's related-identifier search returned the same count for a DOI in lower case and in upper case on the two DOIs I tried (a trial, not a proof for all).

## Confirmed links (a person's list)

The script reads a CSV with the columns `paper_doi`, `dataset_doi` and optionally `relation` (default `supports`) and merges it with the DataCite links; a confirmed link overrides a programmatic one for the same pair and counts as `manual`. A `https://doi.org/` prefix is dropped; a quoted comma is not handled (a DOI has none). Tried on a two-row sample in a scratch run: one override, and one dataset with no DataCite record, which is kept with only its DOI and marked `no_datacite_record: true`. No confirmed file exists yet (0 rows read in the real run).

## What was not checked

- The 44 stored links by hand (none sampled), whether each candidate is Critical Zone data, and whether any of the 38 duplicates a list entry under another DOI (matching is by DOI, and by `10.4211/hs.<id>` for HydroShare resources without one; an entry known only by URL would not match).
- Scholexplorer links (no relation type, out of scope by decision 3) and any other route; papers with no DOI.
- Pagination was never needed: every answer fitted one page, so the paging code is untested on real data.
- The candidate entries against the product schema: they are proposals (a `related` list and the DataCite fields), not yet product records; a content PR would build the records, with `source: datacite`.

## Next

A content PR on a `content/` branch, after Jordan reads the 38 candidates: add the ones he approves as products, each with its `related` links. No existing product gains a link.
