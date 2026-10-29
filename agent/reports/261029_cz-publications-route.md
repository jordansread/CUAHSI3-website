# Archive publications and PAR exports in the harvest (epic ticket T6b)

Date: 29 October 2026. Ticket: CUAHSI/CUAHSI3-website#86. Output: `agent/reports/261029_cz-harvest-proposal.json` (regenerated; still a proposal, nothing in `content/`).
Code: two new routes in `scripts/cz-harvest.mjs`; one value (`par`) added to the `source` list in `scripts/content-schemas.mjs`.

## Decisions applied (Jordan, on jordansread/CUAHSI3-website#147, 29 October 2026)

- Every product type counts. The archive's own type is kept in each record's provenance (`resource_type`), not dropped.
- An archive link may stand in where there is no DOI, if it does not 404.

## What the archive route read

No request to the archive for publications (the full run's 2 requests were the 2 dataset pages that return 404, which are not cached); the 7 publisher addresses below were requested once each. The 3,286 detail pages (`/<site>/publications/pub/<slug>/`) were already saved by T1.

| | Count |
|---|---|
| Detail pages in the T1 inventory | 3,286 |
| Parsed | 3,283 |
| Gone (404 when crawled) | 3 |
| Not parseable | 0 |
| Parsed pages with a DOI | 1,334 (T2 counted 1,334 pages with a DOI-like string; the two agree) |
| Distinct publications after merging | 2,837 (1,116 with a DOI) |
| Publications listed under more than one page | 203 (102 merged on a DOI, 101 on title + year + section alone; the title-only merges are the riskier ones and were not read one by one) |

The 3,283 pages by the archive's section: paper/book 1,555; talk/poster 1,324; report/proposal 219; dissertation/thesis 144; undergraduate thesis 36; no section link 5.
Distinct publications by section: paper/book 1,316; talk/poster 1,202; dissertation/thesis 141; report/proposal 138; undergraduate thesis 35; no section 5. A publication filed under different sections at different observatories is counted under the first page's section; a talk and a paper with one title are kept as two works.
Distinct publications by observatory (a shared one counts under each): Shale Hills 559, Calhoun 520, Sierra 419, Catalina-Jemez 381, Luquillo 343, Boulder 283, Reynolds 197, IML 197, Christina 163, National 100, Eel 96.

How merging works: same DOI is one publication; with no DOI, the same normalised title, year and section. A page with no DOI joins a DOI group on title, year and section. Every site and every page address is kept (`sites`, one provenance entry per page).

## Addresses

| Product address | Publications |
|---|---|
| DOI (`https://doi.org/...`) | 1,116 |
| Publisher's page from the archive's "See Full Text" link (no DOI), answered 2xx or 3xx | 2 |
| Archive page (no DOI, no working publisher link) | 1,719 |

(1,116 + 2 + 1,719 = 2,837.) The archive pages answered 200 when crawled in T1; I did not request them again. **They will stop answering when the archive retires (August 2027).** 1,719 records whose only address is an archive page need a replacement or a redirect target before then; that is for T15/T3, not this ticket.

The rule is "does not 404": an address passes on any answer except 404, 410, 400 (a malformed address) or no answer. Five "See Full Text" links without a DOI failed it and the archive page stands in: `http://dx.doi.org/j.envsoft.2020.104804` (400), `.../ISBN:978-0-12-812222-8` (400), `.../0.1890/ES14-00296.1` (400), `.../101111/j.1365-2427.2007.01941x` (404), `.../4488-507` (400). These look like mistyped DOIs. I did not repair them (C3); someone who can check them at the publisher could.

## Merge with the earlier routes

The 231 award-search papers from T6 stayed: all 231 are still in the output. 46 of them were also listed by the archive and are now one record with both sources. 231 + 2,837 − 46 = 3,022 papers; 3,022 is what the output holds. No archive publication carries a HydroShare id, so the datasets are untouched: the 839 dataset/software records that have a HydroShare id or DOI are byte-identical to the previous proposal (compared by key; the other 14 non-paper records lack both keys and were not compared). The output has 3,875 records in all. Every record passes `criticalZoneProduct` (throwaway check, not committed): 0 failing, 0 duplicate DOIs, 0 duplicate HydroShare ids.

Papers with a site tag: 2,837 of 3,022 (the 185 without are the award-search papers the archive did not list).

## PAR reader (`--par-dir <folder>`)

Reads `.csv` and `.xml` files exported from par.nsf.gov by a person; the script does not fetch PAR. **It has not been run on a real export**: the only export I ever received was PAR's bot-check page. Columns are found by name from a list of guesses (title, DOI, address, date, type, journal, award), and a file with no title column is reported, not guessed at. A synthetic test (a 4-row CSV, a 1-row XML, a file with no usable columns, written by me) gave the expected records and the right skips. That shows the reader runs, not that it matches PAR's real layout. Assumption: every row is attributed to the 7-digit award number in the file name (an 8-digit date in a name is ignored), so export one file per award and name it for the award (`par-2012893.csv`). Rows without a DOI or an address are skipped and counted. A row with a DOI gets `https://doi.org/<doi>` as its address (the PAR page stays in `source_url`). With no type column the record is a `paper` and no `resource_type` is recorded. The column-name guesses include generic names (`name`, `date`, `type`, `source`) that could match the wrong column in a real file; check the first output by eye. XML handling covers namespaced tags and CDATA (tested with one synthetic file).

**What I need to finish this:** one real PAR export (CSV or XML) for any one award, made in a browser.

## Not done

- **CZNet cluster publication pages** (free-text citation lists fetched in T1): not parsed and not read in this change. They are a separate parsing job.
- No DOI search for the 1,719 archive-only publications (OpenAlex title matching is untested).
- DOIs on the archive pages were not checked against Crossref; a DOI is the one the page gives.
- The product schema has only `paper`, `dataset`, `software`, `model`. Talks, posters, theses and reports all appear as `paper` here, with the archive's own type only in provenance. **1,202 of the 2,837 are talks or posters**; whether they belong in the visible list, and whether the schema needs a type for them, is a decision for T11 (a schema change is a code PR).

## Sample check (rule 12)

Read in the output: the Shale Hills atmospheric-deposition paper (DOI, one page), the Christina "Delivery of dissolved organic carbon" talk (no DOI, archive page), and the Southern Sierra CZO paper (no DOI, archive page), each matching its saved page's title and section. Unaffected records: all 839 keyed dataset/software records compared with the previous proposal by script (identical); I did not open three of them by hand.
