# Critical Zone legacy sites: inventory (epic ticket T1)

Date: 28 October 2026. Branch `task/cz-legacy-inventory`. Read-only crawl; no site code or content changed.
Tool: `scripts/legacy-crawl.mjs` (waits 3 seconds before every request; on 28 October I fetched both sites' robots.txt and each says only `Crawl-delay: 3`, no Disallow; the script does not read robots.txt itself). Raw output is in `.agent/crawl/` (gitignored);
the per-URL inventory is `agent/reports/261028_cz-legacy-inventory.csv` (9,514 rows: the 11,088 URLs found minus the 1,574 image/document rows, filtered from `.agent/crawl/pages.csv` by a one-off command, not by the script).

## Headline

The crawl **did not finish**. It stopped at its cap of 2,500 fetched pages with 3,910 URLs still queued. It found
**11,088 distinct URLs** (10,926 on the archive site, 162 on CZNet). Counts below are therefore of what was found, not a
complete census, and the unfetched part is named under "Limits".

## Counts

| | URLs found | Fetched | Not fetched |
|---|---|---|---|
| Archive site, all | 10,926 | 2,468 | 8,458 |
| CZNet site, all | 162 | 32 | 130 |
| All | 11,088 | 2,500 | 8,588 |

Of the 2,500 fetched: 2,461 returned 200, 39 returned 404 (denominator 2,500). The 404s are in-site links to pages that do not exist,
for example `/national/infrastructure/sensors-field-instruments-1national/` and `/boulder/research/research-foci-boulder/`.

By kind of URL (all 11,088 found; the detail and dataset rows are archive-site only, the rest include CZNet's 162):

| Kind | Found | Fetched | Note |
|---|---|---|---|
| Publication pages (`/<czo>/publications/pub/<id>`) | 3,285 | 4 sampled | the count is links found on listing pages, not pages visited |
| News stories | 1,398 | 4 sampled | same |
| Event pages | 769 | 4 sampled | same |
| People pages | 916 | 4 sampled | same |
| Blog posts | 38 | 4 sampled | same |
| Dataset pages (`/<czo>/data/dataset/<id>`) | 919 | 798 | **fetched in full by mistake** (the script had no rule for them; logged as a defect on this branch); 435 on `/national/` plus per-observatory copies |
| Other listing and section pages (indexes by year and tag, partners, resources; includes CZNet's) | 2,150 | 1,678 | 472 not fetched |
| Image and document files | 1,574 | 0 | not fetched; 1,305 are `/images/made/` resized copies of photos |
| CZNet news and event pages | 39 | 4 sampled | |

Publication pages per observatory (links found; a publication shared by two observatories is counted in each):
Shale Hills 558, Calhoun 522, Sierra 421, Catalina-Jemez 384, Luquillo 348, Boulder 287, Reynolds 203, IML 201, Christina 164,
National 100, Eel 96. Total 3,285 including one under the stray path `/jemez-catalina/`. These are **not** distinct publications:
they are per-observatory pages and overlap. A distinct-publication count needs the pages themselves (ticket T6).

### Archive: URL patterns (11 sub-sites, one per observatory plus `national`)

`/<czo>/` where `<czo>` is one of: `national`, `boulder`, `calhoun`, `catalina-jemez`, `christina`, `eel`, `iml`, `luquillo`,
`reynolds`, `shale-hills`, `sierra`. Under each: `/about/`, `/research/`, `/data/`, `/publications/`, `/people/`, `/news/`, `/events/`,
`/infrastructure/`, `/education-outreach/`. Detail patterns: `publications/pub/<id>/`, `data/dataset/<id>/`, `news/story/<id>/`,
`events/event/<id>/`, `people/person/<id>/`. Listing patterns: `publications/year/<yyyy>/`, `events/year/<yyyy>/`,
`research/discipline-tags/<tag>/`, `about/partner/<id>/`. The crawler adds a trailing slash to every archive path; whether the site also answers without one was not checked.

### CZNet site: what the crawl saw

Only 162 URLs were found, 32 fetched. The site is plain server-rendered HTML (the page text is in the file; every page's
`<title>` is just "CZNet"; on the archive, 2,462 of 2,468 fetched pages have an empty `title` in the CSV because my pattern found no `<title>`, so the title column is useless on both sites). Structure found: home; `/news-events`, `/about`, `/contact`,
`/opportunities`, `/data`, `/publications`, `/education_outreach`, `/people`; the coordinating hub (`/hub`); nine cluster sites
`/bedrock`, `/bigdata`, `/cinet`, `/coastal`, `/drylands`, `/dust2`, `/dynamic_water`, `/geomicrobiology`, `/urban`; and 39 news/event
pages at `/news-events/<slug>`. The cluster pages linked only to each other and to the home navigation. The pages I opened
(`/publications`) say "Featured publications ... will be highlighted here" and link to each cluster's publications page; I did not find
the cluster publication lists, so **CZNet's publication and dataset content is not inventoried**. Two paths 404: `/nsfczo` and a
mis-formed `/bit.ly/46OLxy5`.

## Discover (discover.criticalzone.org)

Discover is a JavaScript app over a public JSON API, `https://contribute.criticalzone.org/api/discovery`
(`/search?pageSize=100&pageNumber=N`, `/typeahead`, `/clusters`). Records are schema.org `Dataset`. All **761 records** were harvested
(pages 0 to 8, saved in `.agent/discover/`), which matches the footprint analysis. The harvest was run by hand, not by a script on this branch, with no recorded delay, so it cannot be reproduced from the branch; the only completeness check is that 761 equals the footprint analysis's count. `contribute.criticalzone.org/robots.txt` returns the app's HTML page, not a robots file.

## Outbound links (all 354 hosts in the fetched pages; top by link count, counting repeats across pages)

twitter.com 4,528; youtube.com 3,446; nsf.gov 2,518; czen.org 2,454; Mailchimp archive 2,448; facebook.com 2,442; eepurl.com 2,428;
instagram.com 1,752; datacite.org 1,672; **hydroshare.org 1,635**; ars.usda.gov 291; data.imlczo.org 283; sas.upenn.edu 270;
czo.arizona.edu 219; serc.carleton.edu 218; czo.psu.edu 187; info.reynoldscreekczo.org 145; sndl.ucmerced.edu 114;
cuahsi.org 31; dx.doi.org 30; viz.criticalzone.org 15; search.criticalzone.org 7 (font hosts such as fonts.googleapis.com, 116, left out). Most of the top counts are the site-wide header and
footer repeated on each page, not distinct targets. Several observatory sites also appear as outside hosts (`czo.psu.edu`, `czo.arizona.edu`,
`data.imlczo.org`, `info.reynoldscreekczo.org`, `czo.colorado.edu`); whether those are live, redirected or gone was **not checked**
(a retirement-planning question for T16).

## Findings that matter to the next tickets

1. **Dataset pages are the bridge to HydroShare.** 797 of the 2,463 saved HTML files contain `hydroshare.org/resource` (grep count); that fits the 798 fetched dataset pages, but I did not check it is the same pages or one resource each. The two I read (`/national/data/dataset/2514/`,
   `/boulder/data/dataset/2821/`) each carry a `hydroshare.org/resource/<id>` link. 435 national dataset pages were fetched in full, so T6 can
   parse them without another crawl. Of 798 fetched dataset pages, 21 contain something that looks like a DOI (11 of 435 on `/national/`); this is a
   pattern match on the HTML, not a check that the DOI resolves.
2. **Publication detail pages are mostly unfetched**: 3,285 found, 4 fetched. T6 needs a second, targeted crawl (or a different route) to
   get distinct publications with their DOIs.
3. **CZNet is small and flat** (home, hub, 9 clusters, 39 news/event pages found). Its publication and data pages point into the clusters and need a
   second look.
4. The archive has stale links: 39 404s among the fetched pages.

## Limits (what this report does not establish)

- The crawl stopped at its cap: 3,910 URLs queued and never visited, including 593 listing-type pages (85 under `/shale-hills/data/`,
  37 under `/sierra/data/`, 36 under `/sierra/publications/` and others) and 121 dataset pages. Sierra and Shale Hills are the least covered.
- Detail pages (publications, news, events, people, posts) were sampled at 4 per type on purpose, so their counts are links found, not pages seen.
- No sitemap exists on the archive site, so a page nothing links to is missed.
- Page content was not parsed beyond: status, size, a title pattern that mostly came back empty, and a "looks like a DOI" pattern. No usage counts were collected (that is T2).
- File and image URLs were recorded, not fetched or checked.
- The crawler follows links only on the two seeded hosts. The archive site's `viz.criticalzone.org` and `search.criticalzone.org` are separate hosts and were not crawled.

## Sample check (rule 12)

I opened these by reading the saved HTML, not the full pages: affected (dataset pages): `/national/data/dataset/2514/`,
`/boulder/data/dataset/2821/`, `/shale-hills/publications/` (a listing page, only loosely affected); unaffected: CZNet `/`, CZNet `/publications`, CZNet
`/news-events/critical-zone-science-and-the-path-ahead`. For each I checked size, title and links, and (for CZNet) the visible text. I did not read every line.

A plain grep for `/data/dataset/` over the raw file gives 920 lines; 919 are `/data/dataset/<id>/` pages and one is another path.

## Script fix

`scripts/legacy-crawl.mjs` now classifies `/data/dataset/<id>/` as a detail type (`archive-dataset`, sampled) and takes `--all-types archive-dataset` to fetch a type in full. **Not tested by a crawl**: I checked the syntax and the path test on one sample path. The T6 re-run should use it.
