# CUAHSI's role in Critical Zone work: candidate claims and their sources (epic ticket T4)

Date: 28 October 2026. Branch `task/cz-role-claims`. Nothing here is published, and nothing on the site changes.
Purpose: a list of statements we might make on `/critical-zone-science` about CUAHSI's part in the CZO and CZNet work, each with the
source it rests on, so Jordan can confirm or strike each one (the ticket's "done when"). Rule C3: no claim without a source. Where I found
no evidence I say so.

Sources used, and how far I read them:

- **Repo** (`R1` to `R5` below): files in this repository, read in full for the lines quoted.
- **Legacy sites** (`L1` to `L8`): saved HTML from the T1 crawl (`.agent/crawl*/html/`). I searched the text of 1,255 saved pages that
  contain the word CUAHSI (1,229 archive, 26 CZNet) and read the lines quoted. I did not read every one of the 1,255. The archive hits are
  mostly one repeated block (a link or dataset-listing line), see claim 10.
- **Footprint analysis** (`F1`): `261020_CZO Data Footprint.html`, an earlier analysis by an agent at Jordan's direction. It is a secondary source I
  did not re-derive.
- **Jordan** (`J1`): statements made in chat on 28 October 2026. Rule C2 allows this source if the PR says who and when.

## Candidate claims

"Strength": **Direct** = a source says exactly this. **Partial** = a source says part of it or says it about a neighbouring thing.
**None** = nothing found in the search described under Limits.

| # | Claim | Evidence (quoted or paraphrased) | Source | Strength |
|---|---|---|---|---|
| 1 | CUAHSI is the Coordinating Hub for the Critical Zone Collaborative Network (CZNet). | "CUAHSI is the Coordinating Hub for the Critical Zone Collaborative Network (CZNet), the next phase of NSF Critical Zone research." | R1: `pages/community/index.vue` lines 294 to 295 | Direct |
| 2 | The Hub is led by a team from CUAHSI, EarthChem, the Powell Center, Utah State University, Penn State University and Lamont (not by CUAHSI alone). **Changed after Jordan's comment on PR 141, 29 Oct 2026:** RENCI dropped; Lamont added (confirmed by Jordan); Penn State kept. | "The CZNet Coordinating Hub is led by a team from the Consortium of Universities for the Advancement of Hydrologic Science, Inc. (CUAHSI), EarthChem, the John Wesley Powell Center for Synthesis and Analysis, Utah State University, Penn State University, and RENCI". The Hub contact page says the team is "a collaborative team from ... CUAHSI, EarthChem, and Utah State University". The two lists differ. | L1: `https://criticalzone.org/hub/` and `/hub/contact` | Direct for the legacy list; the two pages disagree, and Jordan has now settled the membership (comment on PR 141): RENCI is not on the team, Penn State is, and Utah State and Lamont are confirmed. Wording above is the agent's reading of that comment and needs Jordan's confirmation. |
| 3 | The Hub is supported by NSF award 2012893, "Collaborative Research: Network Hub: Enabling, Supporting, and Communicating Critical Zone Research", September 2020 to August 2027, awarded to CUAHSI. **Add (Jordan, PR 141 comment):** Utah State University and Lamont are on the Hub team but under their own prime awards, not under 2012893 (the NSF award search lists Hub awards 2012748, Utah State University, and 2012593, Columbia University; that Lamont is the 2012593 team is my inference, not checked). | The award registry entry `nsf-2012893`. | R2: `content/awards/awards.json` | Direct for the repo's wording. I did **not** open the NSF award page `nsf.gov/awardsearch/show-award/?AWD_ID=2012893` to check title, dates or awardee. |
| 4 | The Hub's four objectives include providing cyberinfrastructure for FAIR data from the Thematic Clusters "by integrating existing data services operated by CUAHSI and EarthChem". | Quoted from the Hub's about page. | L2: `https://criticalzone.org/hub/about` | Direct (about the plan, not about what was delivered) |
| 5 | The Hub is housed at CUAHSI and funds synthesis projects convened at the Powell Center. | "...the CZNet Hub, which is housed at CUAHSI and convenes teams of scientists at the John Wesley Powell Center..." | R3: `content/research/2026-cznet-preferential-flow.md` line 22 (source: the August 2026 e-newsletter) | Direct, secondary (a CUAHSI newsletter) |
| 6 | A CUAHSI person is listed among the Hub's people, and a CUAHSI staff bio mentions CZ data work. | The Hub people page lists Jordan Read with the affiliation "CUAHSI" (the page I read is the full list; it has no role label, and I did not read its principal-investigator page). A staff bio in the repo says the person supports "interdisciplinary research teams in the Critical Zone Network with data management and curation". The repo's Jordan Read page lists a preprint, "Lessons learned from developing and operating the Critical Zone Collaborative Network (CZNet) data cyberinfrastructure" (Horsburgh et al., 2024); no source I read says who wrote it beyond that citation, so it is **not** evidence that CUAHSI staff wrote it. | L3: `https://criticalzone.org/hub/people`; R4: `content/team/full-team.json` line 114, `content/team/jordan-read.md` line 54 | Partial: listed, role not stated; the preprint line says nothing about CUAHSI's role |
| 7 | The CZNet website criticalzone.org is operated from CUAHSI. | The Hub contact page gives the email `cznet@cuahsi.org` and a street address, 1167 Massachusetts Avenue, Arlington, MA 02476; the page does not say whose office that is. Jordan said CUAHSI controls the legacy domains and hosts the archive site. No page I read says "CUAHSI operates criticalzone.org". | L4: `https://criticalzone.org/hub/contact`; J1 | **Partial.** Contact address is evidence of who answers, not of who runs the server. Needs Jordan's confirmation. |
| 8 | CUAHSI hosts the CZO archive site (czo-archive.criticalzone.org). | Jordan stated it on 28 October 2026. Nothing on the saved pages states it. | J1 | **None written**; Jordan's word only (rule C2: the PR must say who and when) |
| 9 | In 2019 the CZOs moved their data catalog from criticalzone.org into CUAHSI's HydroShare; CZO and CUAHSI were partners in that migration. | "CZO is partnering with CUAHSI to migrate our data catalog from CriticalZone.org to CUAHSI's HydroShare.org repository in 2019." Also "CZO and CUAHSI are collaborating with the Clowder team (led by NCSA)..." | L5: `https://czo-archive.criticalzone.org/national/data/` | Direct (a statement made in 2018 or 2019, looking ahead). It does not itself show the migration finished; the footprint analysis says it did (claim 12). |
| 10 | CZO data dataset pages describe CUAHSI HIS as "any central data system" for time-series values, with HIS-ingested data kept separate from locally maintained data. | "...data values will not be accessible by the public or ingested into any central data system (i.e. CUAHSI HIS), metadata will be fully discoverable..." This line is on the dataset pages and `/data/datasets/` pages (973 saved archive pages under `/data/` mention CUAHSI, mostly repeats of this block). | L6: e.g. `https://czo-archive.criticalzone.org/national/data/dataset/2514/`, `https://czo-archive.criticalzone.org/iml/data/datasets/` | Direct, as a description of policy |
| 11 | For some national datasets the CZOs used CUAHSI Water Data Center web services. | "National - Climate, Flux Tower, Streamflow / Discharge - CUAHSI WDC web services (1968-2015)", "7 components" in six named watersheds. | L7: e.g. `https://czo-archive.criticalzone.org/calhoun/data/datasets/` | Direct for the listing; the meaning of "WDC web services" is not explained on the page |
| 12 | About 133 million time-series values from 7 CZ observatories sit in CUAHSI HIS (1,602 series, 1968 to 2015), and the legacy CZO archive moved to HydroShare in 2019 and is "almost entirely open but unpublished". | Stated in the footprint analysis. I did not re-derive either number. | F1 | **Secondary only.** Needs checking against HIS and HydroShare (the data stewardship epic, T19) before it is stated. |
| 13 | CUAHSI ran a cyberseminar series that featured the CZOs (2011 onward). | Legacy news and event pages: "CUAHSI to feature Earth Observatories in this year's cyberseminar series" (11 Oct 2011); "CUAHSI Cyberseminar - Chris Duffy on Shale Hills CZO" (11 Nov 2011); "CUAHSI Cyberseminar - Noah Molotch on western CZOs" (6 Apr 2012). | L8: `https://czo-archive.criticalzone.org/shale-hills/news/year/2011/`, `.../shale-hills/events/cat/education-outreach/`, `.../boulder/events/cat/presentation-talk/` | Direct that these events existed. **Whether they are in the CUAHSI cyberseminar archive in this repo's `content/cyberseminars/` was not checked.** |
| 14 | CZO researchers presented at CUAHSI's Biennial Colloquium (2016), and joint USGS-CUAHSI sensor workshops were held. | "CZO REUs and RETs presented their research at the CUAHSI Biennial Colloquium, July 24 to 27, 2016"; a 2011 Christina CZO citation lists "Joint USGS-CUAHSI Workshop on Optical Water Quality Sensor Networks". | L8: `.../christina/news/year/2016/`, `.../christina/publications/year/2011/` | Direct, minor |
| 15 | CUAHSI is listed as a partner organization of the CZO network. | "NSF-CZO Partners AGI APL-UW CSDMS **CUAHSI** EarthCube LDEO NEON ..." | L8: `https://czo-archive.criticalzone.org/national/about/partner-organizations-1national/` | Direct |
| 16 | CUAHSI's own award text acknowledges NSF 2012893 for a CZNet synthesis paper (2026). | `awards: [nsf-2012893]` on the impact story, with the funding line "NSF 2012893 (CZNet Hub)". | R3 | Direct |
| 17 | **CUAHSI's role during the CZO era (2007 to 2020) as a funded partner, hub or data manager.** | **Not found in a keyword search of the saved pages for the word CUAHSI** (a funded role described without that word would be missed). What the legacy sites show is CUAHSI as a *service provider and partner* (claims 9 to 15), not as a funded part of any CZO. I did not find a statement about CUAHSI's role in the CZOs' governance, funding or leadership. | none | **None** |
| 18 | CUAHSI hosts the CZO data in HydroShare (the current location of the 2019-migrated data). | The legacy dataset pages link to `hydroshare.org/resource/<id>` (797 of 2,463 pass-1 pages, T1). HydroShare is a CUAHSI service (the site itself says "CUAHSI HydroShare" in the page title I fetched in T2). | L5, T1 report, T2 report | Direct that the data are on HydroShare; "CUAHSI hosts" rests on HydroShare being a CUAHSI service, which I did not re-verify on a CUAHSI page |

## Things I looked for and did not find

1. A page saying who legally runs criticalzone.org or czo-archive.criticalzone.org (domain registrant, hosting). Jordan can say; I did not look up
   WHOIS and would not, since that is not a claim a page can make to visitors.
2. Any source for CUAHSI having been a member of the CZO leadership, a funded subaward holder, or a data manager *within* a particular CZO.
   Claim 17 is therefore empty on purpose. Possible places to look next (not searched): NSF award pages for the CZO awards; CUAHSI annual
   reports; the CZO national office pages. I searched only the saved legacy pages and this repo.
3. Dates for when CUAHSI's work for CZNet began other than the award dates (September 2020 to August 2027) in the registry.

## What Jordan is asked to do

For each numbered claim, say **keep**, **strike**, or **change** (and the new wording). The claims I would suggest keeping as drafted are those
marked Direct with a written source: 1, 3 (after the award page is checked), 4, 9, 15; 5 and 16 rest on CUAHSI's own newsletter and registry, not an outside source. Claims 2, 6, 7, 8, 12, 18 need either
Jordan's word or a second source. Claim 17 stays blank unless someone supplies evidence.

## Limits

- The Hub's team is described differently on `/hub/` (with Penn State and RENCI) and `/hub/contact` (CUAHSI, EarthChem, Utah State). Both were saved in the same crawl. Jordan's comment on PR 141 (29 Oct 2026) settles it for claim 2: RENCI dropped, Penn State kept, Utah State and Lamont confirmed on their own prime awards. Not checked: whether Penn State has its own Hub award (the award search listing in the T10 proposal shows Hub awards to Utah State, CUAHSI and Columbia only).
- Files opened and read around the quoted lines (rule 12 sample): the Hub home, about, contact and people pages; `/national/data/`; `/national/about/partner-organizations-1national/`; the 2011 Shale Hills news page; `/iml/data/datasets/`; dataset page `/national/data/dataset/2514/`; and the repo files named in R1 to R4. Not opened beyond a match count: the pages behind claims 11, 14 and 15's exact wording, which I took from the search output.

- I read 1,255 saved pages by pattern search, not by reading. A CUAHSI statement phrased without the word CUAHSI (for example only "the Hub") is missed.
- Both legacy sites were saved in October 2026; I did not look at the Wayback Machine or older copies.
- The award-registry text (claim 3) has not been checked against the NSF page in this ticket (C3 requires that check before publishing).
- No external source was fetched for this ticket; everything came from the repo, the T1 crawl and the footprint analysis.
