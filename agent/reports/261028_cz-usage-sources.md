# Critical Zone usage data: where the numbers come from (epic ticket T2)

Date: 28 October 2026. Read-only research; one resource and one DOI were looked at, nothing is harvested yet.
Question (T2): can "key" datasets and papers be ranked by usage per year since publication, from public sources, without server logs?

## Answer in short

| Item | Source | What it gives | Year-by-year history? |
|---|---|---|---|
| HydroShare resource: views, downloads | The resource's landing page, `https://www.hydroshare.org/resource/<id>/`, in the HTML itself (two table rows, "Views:" and "Downloads:") | One total each | **No**, totals only |
| HydroShare resource: dates | The same landing page: its embedded JSON-LD has `dateCreated` and `dateModified`, and the page shows "Last updated" | Dates | n/a |
| Paper: citations | OpenAlex `GET https://api.openalex.org/works/doi:<doi>` (`cited_by_count`, `counts_by_year`) | Total and per-year | **Yes** |
| Paper: citations (second source) | Crossref `GET https://api.crossref.org/works/<doi>` (`is-referenced-by-count`) | Total only | No |

So the user's expectation is right for views and downloads: they are public, on the page, and need no logs. But they are **totals since
the resource was created**, not a history. "Usage per year since publication" can only be computed as total divided by years elapsed,
which is the rate the epic defined as "key" (usage relative to time since publication). It cannot show a trend.

## HydroShare's robots.txt, and a mistake of mine

I read `https://www.hydroshare.org/robots.txt` after the probes below. It says: `Crawl-delay: 5`; `Disallow: /hsapi`, `/django_irods/download/`, `/o/`, `/accounts/login/`, `/sign-up/`, `/tracking/applaunch/`; and allows `/search/`. Resource landing pages (`/resource/<id>/`) are not disallowed. **My probes of `/hsapi/resource/<id>/sysmeta/` (2 requests) and `/hsapi/resource/?full_text_search=...` (1 request) went to a disallowed path**, and my landing-page fetches had no 5-second spacing (3 requests over about a minute, then a browser visit). Logged as a defect on this branch. A harvest must therefore use only landing pages, wait at least 5 seconds, and not call `/hsapi`. The landing page carries everything needed (views, downloads, created date, DOI), so nothing is lost.

## What I checked

One HydroShare resource, `9db9d7aa0a194667b0e9ca5e996d5c96` (a Chester County stream chemistry dataset from the Christina River Basin
observatory, linked from archive dataset page `/national/data/dataset/2514/`):

- Fetched its landing page with curl (an ordinary GET with a User-Agent naming the project and `help@cuahsi.org`). The HTML contains
  `<th>Views: </th><td>5124</td>` and `<th>Downloads: </th><td>134</td>`. Opening the same page in a browser a little later showed
  Views 5125 and Downloads 134. **So reading a page may add one to its view count** (the page counted either my curl fetch or the
  browser visit before showing the number; I did not isolate which). A harvest of about 750 resources would add up to about 750 views in
  total, across resources. That is small but not zero, and T2's harvest note should say so.
- Asked the API (a disallowed path, see above) for the same resource: `/hsapi/resource/<id>/sysmeta/` returns title, authors, `doi` (null
  here), `published` (false), `date_created` (2019-11-18), `date_last_updated`, and `bag_last_downloaded`, and **no view or download count**.
  The list endpoint (`/hsapi/resource/?full_text_search=...`) returns the same fields per resource and also none. The landing page has the
  dates too (JSON-LD `dateCreated`), so the API is not needed.
- Asked OpenAlex and Crossref for one DOI (`10.1029/2004EO280001`): OpenAlex returned `cited_by_count` 94 and a `counts_by_year` list
  (2026: 1, 2025: 4, 2024: 5, ...); Crossref returned 80 for the same paper. The two sources disagree, as expected.

## Consequences for the design

1. **Datasets: rate, not trend.** Views and downloads are totals. Rank by (views + downloads) per year since `date_created`, and say so on
   the page. Two cautions: (a) `date_created` is when the HydroShare resource was made, which for CZO data is often years after the data
   were collected (this resource: data 2007 to 2015, resource created 2019), so the rate is "since it went on HydroShare"; (b) views
   include bots and crawlers, which HydroShare may or may not filter (not checked).
2. **Papers: real history is available** from OpenAlex for any paper with a DOI. 1,334 of 3,286 archive publication pages contain a
   DOI-like string (T1), so about 40 percent can be ranked on citations by this route; the others need a DOI found by title match (OpenAlex
   can search by title) or stay unranked. I did not test title matching.
3. **Publication date for datasets** is not on the landing page either; only the created date. The footprint analysis had the "published" dates for some;
   not re-checked here.
4. **Harvest cost:** one request per dataset landing page, at least 5 seconds apart (HydroShare's `Crawl-delay`), for up to about 1,200
   resources (761 Discover records plus the 919 archive dataset pages, which overlap; the distinct HydroShare resources are not yet counted),
   so up to about 100 minutes. OpenAlex lets you batch DOIs (up to 50 in one filter), so the citations side is a few dozen requests.
5. **Dated data file:** record the harvest date with every count, since all of these change.

## Not checked

- HydroShare's terms of use (only robots.txt was read).
- Whether view counts exclude bots.
- Whether any HydroShare endpoint gives per-year views (I found none in the API responses I read; the HydroShare source code was not read).
- Title-based DOI matching, and OpenAlex coverage for the CZ papers beyond one DOI.
- Usage for resources outside HydroShare (IEDA, EDI, NCEI and other repositories named on archive pages).

## Next

Harvest views, downloads and `date_created` for the HydroShare resources named on the 919 archive dataset pages and the 761 Discover
records (T6 builds the list; this report is the method). Decide with Jordan: is "rate since the resource was created" an acceptable
meaning of "key" for datasets, given there is no history?
