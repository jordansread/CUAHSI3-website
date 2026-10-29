# Critical Zone section: page structure (epic ticket T8)

Date: 29 October 2026. A decision note for Jordan to approve. It changes no site code and no content. It gates T9 (narrative), T9a (list components) and T11 (loading products), and feeds T15 (redirects).

## Recommendation in one paragraph

Build **15 pages** under `/critical-zone-science/`: a front page, an "about and attribution" page, a full **datasets** list, a **papers** list, **one page per CZO observatory (10)**, and **one CZNet page** with the hub and nine clusters as sections. Do not build one page per CZNet cluster. Do not make one very long page. Every page is generated from the products file and a short narrative file, so the cost of a page is small; the reasons to have the observatory pages are the redirects and what searchers type, not the amount of content.

## What the data says

From the T1 inventory (10,671 rows) and the T6 proposal (1,084 records). Archive publication counts are saved detail pages. News, events and people counts are links found on the archive's listing pages, of which only a few were fetched (T1); they are unique URLs, not unique items. "Datasets" are proposal records tagged with the site.

| Site | Datasets in proposal | Archive publication pages | News | Events | People |
|---|---|---|---|---|---|
| shale-hills | 122 | 559 | 214 | 156 | 113 |
| calhoun | 57 | 522 | 112 | 35 | 116 |
| sierra | 34 | 421 | 170 | 90 | 135 |
| catalina-jemez | 67 | 384 | 97 | 130 | 57 |
| luquillo | 80 | 348 | 140 | 82 | 88 |
| boulder | 77 | 287 | 115 | 39 | 138 |
| reynolds | 40 | 203 | 80 | 32 | 56 |
| iml | 41 | 201 | 101 | 29 | 59 |
| christina | 20 | 164 | 75 | 36 | 83 |
| eel | 20 | 96 | 75 | 29 | 53 |
| national (the program) | 508 (the tag on 508 of the 511 CZO-era records) | 100 | 301 | 137 | 32 |

CZNet (criticalzone.org): the hub and nine clusters have 19 to 57 URLs each in the inventory (`bedrock` 57, `hub` 34, `dust2` 34, `bigdata` 24, `dynamic_water` 23, `cinet` 21, `drylands` 21, `coastal` 20, `urban` 20, `geomicrobiology` 19; all inventory rows whose address starts with that cluster, fetched or not). Datasets in the proposal per cluster are small: urban 43, dynamic-water 32, drylands 27, cinet 24, coastal 24, dust2 19, bigdata 9, bedrock 8, geomicrobiology 5, hub 1. The CZNet people pages (526 under `/people`, 51 under `/people-roles`) are shared across the network, not per cluster.

Four facts drive the decision:

1. **The proposal's datasets are manageable per site (20 to 122), but the archive's own publication lists are much bigger.** 3,285 of the 3,286 archive publication pages sit under a site (up to 559 for one observatory; 100 of them under `national`, which has no page of its own). Because a publication shared by observatories is counted under each, there are at most 2,864 distinct publication names (T1). Per T2 only 1,334 of the 3,286 contain a DOI-like string. The T6 proposal has only 231 papers (Jordan has said they and the 10 software items belong in the products list), found by award number, and neither they nor the software carry a site tag. If the section is meant to link to each observatory's key papers, the papers list is **not yet covering the archive's publications**.
2. **The proposal has 1,084 records.** Datasets alone are 843. Grouping the whole list on one page with anchors is possible (T9a is designed for 900+ rows) but the list would be one of the longest pages on the site.
3. **About half of the records name no award** (532 of 1,084), and 140 datasets, all 231 papers and all 10 software items have no site. "Grouped by award, observatory otherwise" will leave an "ungrouped" block of that size unless T11 tags sites.
4. **The legacy sub-sites map one to one onto observatory pages**, which T15 needs: ten archive sub-sites (plus `national`) and ten CZNet addresses each need somewhere to land.

## Options considered

| Option | Pages | For | Against |
|---|---|---|---|
| A. One long page | 1 | simplest build; one place to search | 1,084 rows plus narrative; no landing page for "Shale Hills" or "Reynolds Creek" searches; redirects from ten sub-sites all land on one page |
| B. Lists only (datasets, papers, front, about) | 4 | small; fits "mostly links out" | same redirect and search problems as A; observatory identity lost |
| **C. Lists plus a page per observatory, CZNet on one page** (recommended) | 15 | each archive sub-site has a home; searchers land on the right place; generated from data so cheap | ten short narratives to write and have reviewed (placeholder reviewers); one more thing to keep current |
| D. A page for every observatory and every cluster | 24 | symmetry with the legacy sites | cluster pages would be thin (1 to 43 datasets, no narrative to write now); most CZNet awards run to 2026 or 2027 (NSF award dates), so the clusters are still current and the live information stays at criticalzone.org until it retires (August 2027 at the latest) |

## Proposed pages and URLs

All under `/critical-zone-science/`. None in the header or section tabs (epic decision 6).

| URL | What it is | Source |
|---|---|---|
| `/critical-zone-science` | front page: what the CZ program was, a timeline (CZO 2007 to 2020, CZNet 2020 on), highlights, links to the pages below | page file + highlights |
| `/critical-zone-science/about` | CUAHSI's role (only claims Jordan confirmed in T4), the awards, how to suggest an addition (help@cuahsi.org, T14) | page file + awards registry |
| `/critical-zone-science/datasets` | the full datasets list, grouped by era then award, then site, with anchors and an "as of" date | `products.json` |
| `/critical-zone-science/papers` | the full papers list, same grouping | `products.json` |
| `/critical-zone-science/observatories/<site>` (10) | one per observatory: boulder, calhoun, catalina-jemez, christina, eel, iml, luquillo, reynolds, shale-hills, sierra. A short narrative, its awards, its datasets and (once papers carry a site, see below) its papers | page file + `products.json` filtered by `sites` |
| `/critical-zone-science/network` | the CZNet hub and nine clusters as sections with anchors (`#bedrock`, `#bigdata`, `#cinet`, `#coastal`, `#drylands`, `#dust2`, `#dynamic-water`, `#geomicrobiology`, `#urban`, `#hub`), each with its awards and products | page file + `products.json` |

`national` is not a page: it is the program. Its legacy pages (`czo-archive.../national/...`) map to the front page, The 508-record `national` tag selects almost all of the CZO era for the datasets page (3 CZO-era datasets have `era` `czo` but no `national` tag, so the page should select on `era`).

The `critical-zone` collection from T5 already fits this: a page file per narrative (`front`, `about`, `network`, and one per observatory, with `slug` set to the site) and one `products.json`. `crawlLinks` is already on in `nuxt.config.ts`, so pages linked from a generated page should be built without a config change, provided the front page links to every other page in its server-rendered HTML. **This is unproven**: nothing links to the section yet, so the front page itself needs an inbound link (a footer link, T7/T13a) or a config entry (rule 8, needs approval). T7 must prove it with a build.

## What follows for the other tickets

- **T9 (narrative):** 13 narratives: front, about, network, and ten observatory pages. Each observatory page needs a short narrative and a reviewer (placeholder for now; names by mid-December).
- **T9a (list components):** one list component serves the two list pages, the ten observatory pages and the network page.
- **T11 (load products):** batches by observatory and by award fit the page structure. Tag `sites` on records that have none (140 datasets, the 231 papers and the 10 software items) or they will sit in an "ungrouped" block, **and the observatory pages will show no papers at all**: option C gives every sub-site a home but only datasets until papers carry a site, which depends on decision 3 below.
- **T15 (redirects):** one target per legacy sub-site (ten archive sub-sites to their observatory page; `national` to the front page; cluster addresses to `/network#<cluster>`; the hub to `/network#hub`; Discover to the datasets page). Redirects that keep a `#anchor` target are an assumption I have not tested on Netlify.
- **New follow-up for Jordan to decide: papers.** If the papers list should cover the observatories' own publications, T6 needs a fourth route that reads the archive's 3,286 publication pages (and the CZNet cluster publication pages, fetched in T1 but not parsed). Without it the papers page lists 231 papers that acknowledge a CZ award, which is a small and uneven sample of the program's output.

## Decisions for Jordan

1. **Approve option C** (15 pages as listed)? Or A, B or D?
2. **CZNet clusters on one page** (recommended) or one page each (D)?
3. **Papers: answered by Jordan on 29 Oct 2026 — include the archive's publications.** His reasoning: the archive work was done purposefully, so its listed publications are assumed CZ-affiliated even when no award names them. That needs a fourth route in the harvest (a new ticket, before T11) that parses the archive's 3,286 publication pages (and the CZNet cluster publication pages fetched in T1 but not parsed). Jordan also said the 231 award-search papers and 10 software items belong in the products list. A possible fifth source for CZNet-era papers is NSF's Public Access Repository (PAR); see the PAR note below.
4. **Datasets page grouping:** era, then award, then site (recommended), or site first? The epic text (decision 3) says "grouped by award where metadata allows, by observatory otherwise"; the era level is a departure I am proposing, not something already settled.

## Not checked

- The T7c mock-up: I do not know what pages it assumed, so this structure may differ from it.
- Whether `crawlLinks` generates all 15 pages from front-page links; that is for T7 to prove with a build.
- Redirect behaviour for anchored targets on Netlify, and for redirects from other hosts (T15).
- The site tags on records come from the sources (archive sub-site, Discover cluster); I did not check them against the awards.
- News, events and people counts are unique URLs found on listing pages, mostly not fetched, and not unique items.
- Whether every one of the 703 site-tagged records is a dataset (it follows from 843 minus 140 and from no paper or software item having a site).

## NSF PAR as a source of products per award (Jordan's question, 29 Oct 2026)

What I found by reading PAR (`par.nsf.gov`), with a handful of requests:

- Its `robots.txt` has rules only for named bots (Googlebot is told not to crawl `/search`; several SEO bots are blocked). There is no rule for other agents.
- **Searching by award works as a plain address:** `https://par.nsf.gov/search/award_ids:2012340` returned a results page (HTTP 200) for the Urban cluster award: 5 resources, all journal articles, each with title, DOI, authors, date and journal. The page has a resource-type filter that includes dataset, software, model and dissertation, so PAR can hold more than papers.
- **Export exists but did not work for me.** The page offers CSV and XML (limit 5,000) and Excel (limit 2,000); its script builds `https://par.nsf.gov/export/format:csv/award_ids:2012340`. Fetched with a script, that address returned a bot-check page instead of a CSV. I have not tried it in a browser session. I found no documented API.
- **How complete is it?** Award 2012340 has 5 PAR resources; Discover has 39 records naming it. PAR lists what awardees reported to NSF (mostly journal articles and conference papers, and datasets only when reported), so it is a paper source rather than a data source. It is unlikely to cover the CZO-era awards well, as Jordan suspected; I have not tested any.
- **Not tested:** other award numbers, whether one query can take several award ids, how many results a page holds, and whether PAR's terms of use allow bulk collection. A scrape of 69 award searches would be about 70 requests at 3 s apart, but the search address is the one Google is told to leave alone, so a person exporting the CSVs in a browser is the safer first step.
