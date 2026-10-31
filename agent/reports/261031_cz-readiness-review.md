# Critical Zone section: readiness review before go-live (T18 input)

Date: 31 October 2026. Epic CUAHSI/CUAHSI3-website#62. Built from `main` at `3a944da` (after #188), `npm run build:search`.
Read-only: this report changes no site code. Target go-live 31 January 2027.

## What I checked, and the result

| Check | Result | How |
|---|---|---|
| Pages built | 15 of 15 (front page, about, datasets, papers, network, 10 observatories) | listed `.output/public/critical-zone-science` |
| One `<h1>`, a `<title>`, a description, `lang` | 15 of 15 | script over the built HTML |
| Titles distinct | 15 of 15 distinct | same |
| Image `alt` | 0 `<img>` without `alt` in the 15 | same |
| Descriptions | 100 to 174 characters; the papers page is shortest (100) | same |
| Internal links | 8,091 references, 599 targets, 0 unresolved | `verify.sh --build` |
| Redirect rules | 321 rules, all targets exist | `verify.sh --build` |
| Member emails, API keys | none in 1,009 built files | `verify.sh --build` |
| External links on the front page, about page and network page | 309 distinct; 288 answered 200, 1 answered 202, 17 answered 403, 3 answered 404 | `curl` with a browser user agent, following redirects |
| Reached from elsewhere | footer (every page) and Data & Computing; not the header | grepped the built front page, footer and `pages/data-platforms` |

The 17 answers of 403 are 16 publisher DOIs (Wiley, AGU, Science, PNAS, ESA, GSA) and one Zenodo record: publishers refuse non-browser requests. I did not open them in a browser, so I cannot say they resolve. The 202 is a figshare page that answers asynchronously. Of the 3 answers of 404, two are `fonts.googleapis.com` and `fonts.gstatic.com` bare origins (preconnect hints, not pages) and one is `https://www.cuahsi.org/matlab`, in the site footer and on Data & Computing: a dead link outside this section (see Noticed).

I did not check the 2,591 product links one by one; the list's links come from the sources named on the about page.

## What stops indexing today (not fixed here)

1. Every CZ page carries `robots: noindex, nofollow`, and `robots.txt` says `Disallow: /`. That is the site-wide setting (Jordan, 28 October: the final site will be indexed; lifting it is a site-wide decision, `netlify.toml`/config, rule 8).
2. `sitemap.xml` lists 0 URLs for the whole site (0 `<loc>` entries), so none of the 15 CZ pages is in it. I did not find the cause: I have not changed the config and tested. It may be the same noindex setting, or the missing site address. This must be understood before go-live.
3. No page has a canonical link (0 of 15). A canonical link needs the final site address (rule 8).
4. Structured data (datasets, papers) is not done; skipped in T7b for lack of a clear gain.

## Decisions still open (Jordan's)

- Where `criticalzone.org`, `czo-archive.criticalzone.org` and `discover.criticalzone.org` run today, and who does DNS (redirect decision 5, T15).
- Whether claim 12 on the about page gets back "almost entirely open but unpublished".
- The "August 2027" retirement date appears on 4 public pages (front page twice, observatory pages, network page); is it public-ready?
- Which of the 20 datasets added in #187 to leave out (the supplements).
- Whether the Big Data paper stands for the Big Data cluster (taken as written).
- Observatory narrative text (needs descriptions or sources).

## Human review list for go-live (draft; phone 390px and desktop 1280px)

1. `/critical-zone-science`: the numbers band, the highlights, and the three archive cards all open.
2. `/critical-zone-science/datasets` and `/papers`: type "Shale Hills" in the search, sort by Published twice, pick an observatory; the URL should keep the choice after reload and Back.
3. One observatory page (for example `/critical-zone-science/observatories/eel`): its table is filtered to that observatory.
4. `/critical-zone-science/about`: the awards table scrolls sideways on the phone without moving the page.
5. Click 5 paper DOIs and 5 dataset links from different observatories; each should open its record.

## Not checked

Legacy-host redirects (not built; T15). Real search-engine behaviour. Screen-reader use. The publisher DOIs behind 403.
