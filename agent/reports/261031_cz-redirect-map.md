# Critical Zone legacy sites: section-level redirect map, a draft (epic ticket T15)

Date: 31 October 2026. Ticket: CUAHSI/CUAHSI3-website#81. Branch `task/cz-redirect-map`. **A proposal. Nothing is redirected, no configuration or domain is changed, and `public/_redirects` is untouched.** The ticket's other two parts, the host-based mechanism and the DNS work, need Jordan's approval (rule 8) and are set out under "What needs a decision" below.

Source of the URL counts: the T1 inventory (`agent/reports/261028_cz-legacy-inventory.csv`, 10,671 URLs; counts below are rows of that file by the first path segment, so they are pages found by the crawl, not all pages that exist; 3,215 archive detail pages (news, events, people, posts) were counted from listing links and are not in it).

## The map

The rule from the ticket: every URL on a legacy site goes to a place in the section; anything not named goes to the section's front page. Targets are pages that exist on `main` today.

### Archive: czo-archive.criticalzone.org

| Legacy path | URLs in the inventory | Target | Note |
|---|---|---|---|
| `/shale-hills/*` | 1,368 | `/critical-zone-science/observatories/shale-hills` | |
| `/sierra/*` | 1,035 | `/critical-zone-science/observatories/sierra` | |
| `/calhoun/*` | 1,023 | `/critical-zone-science/observatories/calhoun` | |
| `/luquillo/*` | 919 | `/critical-zone-science/observatories/luquillo` | |
| `/catalina-jemez/*` | 908 | `/critical-zone-science/observatories/catalina-jemez` | |
| `/jemez-catalina/*` | 8 | `/critical-zone-science/observatories/catalina-jemez` | a stray path for the same observatory |
| `/boulder/*` | 850 | `/critical-zone-science/observatories/boulder` | |
| `/christina/*` | 574 | `/critical-zone-science/observatories/christina` | |
| `/iml/*` | 568 | `/critical-zone-science/observatories/iml` | |
| `/reynolds/*` | 555 | `/critical-zone-science/observatories/reynolds` | |
| `/eel/*` | 437 | `/critical-zone-science/observatories/eel` | |
| `/national/*` | 1,295 | `/critical-zone-science` | **Decision 1** |
| `/` (home), `/images/*`, `/416.shtml`, `/2017-white-booklet` | 7 | `/critical-zone-science` | the default for what is not named |

A page-level choice for later (T17): `/<czo>/publications/pub/<name>` to the product's DOI, and `/<czo>/data/dataset/<id>` to its HydroShare page. Not part of this map.

### CZNet: criticalzone.org

| Legacy path | URLs in the inventory | Target | Note |
|---|---|---|---|
| `/hub/*` | 34 | `/critical-zone-science/network#cluster-hub` | |
| `/bedrock/*` | 57 | `/critical-zone-science/network#cluster-bedrock` | |
| `/dust2/*` | 34 | `/critical-zone-science/network#cluster-dust2` | |
| `/bigdata/*` | 24 | `/critical-zone-science/network#cluster-bigdata` | |
| `/dynamic_water/*` | 23 | `/critical-zone-science/network#cluster-dynamic-water` | the legacy path has an underscore |
| `/cinet/*` | 21 | `/critical-zone-science/network#cluster-cinet` | |
| `/drylands/*` | 21 | `/critical-zone-science/network#cluster-drylands` | |
| `/coastal/*` | 20 | `/critical-zone-science/network#cluster-coastal` | |
| `/urban/*` | 20 | `/critical-zone-science/network#cluster-urban` | |
| `/geomicrobiology/*` | 19 | `/critical-zone-science/network#cluster-geomicrobiology` | |
| `/publications`, `/other-publications` | 4 | `/critical-zone-science/papers` | |
| `/data` | 2 | `/critical-zone-science/datasets` | |
| `/about` | 2 | `/critical-zone-science/about` | |
| `/people/*`, `/people-roles/*` | 577 | `/critical-zone-science/network` | **Decision 2** |
| `/news-events/*` | 228 | `/critical-zone-science` | **Decision 3** |
| `/nsfczo/*` | 24 | `/critical-zone-science` | the page `/nsfczo` itself answers 404 (T1); its 24 URLs are links found |
| `/opportunities`, `/education_outreach`, `/contact`, `/terms-and-conditions`, home, `site.webmanifest.html`, `bit.ly` | 14 | `/critical-zone-science` | |

The fragment (`#cluster-...`) is kept by a browser through a redirect, but whether Netlify passes a fragment in the target is something to test, not assume.

### Discover: discover.criticalzone.org

| Legacy path | Target | Note |
|---|---|---|
| everything | `/critical-zone-science/datasets` | **Decision 4.** Its 761 records are datasets; the API at contribute.criticalzone.org is a separate host and is not covered by this ticket. |

Total covered: all 11 archive path groups (10 observatories plus `national`, and the stray `jemez-catalina`), the 10 CZNet cluster and hub paths, every other top-level path of the inventory, and Discover. Check by count (I added up the tables): the archive table's counts sum to 9,547, the inventory's rows for that site, and the CZNet table's to 1,124, the inventory's rows for that site; 10,671 in all.

## What needs a decision

1. **`national` (archive, 1,295 URLs):** to the front page, or to the datasets page (it is mostly cross-observatory data)? I suggest the front page.
2. **CZNet `/people` and `/people-roles` (577 URLs):** the legacy sites hold personal pages (names, roles). I suggest the network page, which names the Hub and clusters but lists no people. Say if you want a different place.
3. **`/news-events` (228):** the section does not carry CZNet news. I suggest the front page. A page for the news would be a new task.
4. **Discover to the datasets page:** is that the right place?
5. **The mechanism (rule 8).** Netlify answers a request by host only for a host attached to the site. Two ways: (a) add `criticalzone.org`, `czo-archive.criticalzone.org` and `discover.criticalzone.org` as domain aliases of this site and write host-based rules in `public/_redirects` (the generator `scripts/parity/redirects.mjs` and the checker `scripts/check-redirects.mjs` would learn about hosts); or (b) leave the legacy hosts where they are and put the redirects there. The ticket says CUAHSI controls and hosts both legacy sites; I did not find where either is hosted (not in this repository). **Who on staff does the DNS work, and where the sites are hosted, is open on the ticket and is yours to answer.**
6. **Timing:** the ticket says after go-live, and to finish by July 2027. The map above can sit until then.

## What I did not check

- That any target above answers 200 on the deployed site (they exist as pages in the build of `main`; I did not request them).
- Whether the legacy hosts answer without a trailing slash, and how they treat query strings.
- The pages behind the 3,215 uncounted archive detail links.
- The generator and checker in `scripts/parity/` and `scripts/check-redirects.mjs`: I did not read them for this note.
