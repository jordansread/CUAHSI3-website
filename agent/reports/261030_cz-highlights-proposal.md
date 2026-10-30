# Highlights: a ranking proposal from usage (epic ticket T12)

Date: 30 October 2026. Ticket: CUAHSI/CUAHSI3-website#77 (T12). Branch `task/cz-highlights-proposal`. **A proposal. Nothing in `content/` has been changed and no product is marked `highlight` yet.** The ranking is the agent's choice (C7); the ticket asks Jordan and the reviewers to approve it, and to supply the "why it matters" line for each entry (below I give only what the numbers show).

Data: `agent/reports/261030_cz-usage-harvest.json`, harvested 30 October 2026 for the 2050 products on the list as it will stand after #164 merges. Citations come from OpenAlex (total and by year; 1097 of 1,099 DOIs matched; Crossref counts differ, as the T2 report found). HydroShare views and downloads come from each resource's landing page (read once each, 5 seconds apart, as that site's robots.txt asks); 485 of 486 resources answered with counts. All of these change; each count is dated in the file.

## What the numbers can and cannot say

1. **Papers: reliable enough to rank.** Citations per year since the paper's year (total citations divided by the years from the publication year to 2026 inclusive; 2026 is a partial year, which lowers the rate of recent papers and is also counted in "Since 2022"). OpenAlex has the year-by-year history, so I also show citations in the last five years (2022 to 2026), to separate lasting use from an old spike. Only journal articles and reviews are ranked (1058 of the 1564 papers); theses, reports, chapters and the records without a DOI are not.
2. **Datasets: views carry almost no information.** The HydroShare resources have between 3,576 and 15,267 views (one outlier, 15,267, is the Shale Hills precipitation dataset; the next highest is 6,148) and the middle 80 percent lie between 4,084 and 5,188; 410 of the 485 resources were created in November 2019 and have a median of 4,656 views. A spread that narrow looks like automated traffic or a count that includes page loads by crawlers, not people. **Downloads vary widely** (the middle 80 percent lie between 54 and 328, the largest is 1,826) and are the better signal, so I rank datasets by **downloads per year since the resource was created on HydroShare**. Caution: "created" is when the resource was made on HydroShare, not when the data were collected; 410 of the 485 were created in November 2019 (I assume that was the archive's move to HydroShare, but nothing in the data says so), so the rate is "since it went on HydroShare". **This ranking is unvalidated:** I have not checked whether HydroShare filters bot downloads, so downloads could be as automated as views; the top dataset (1,826 downloads, 228 a year) is well clear of the second (126 a year), which is a reason to look at it before relying on it.
3. **Only the 485 HydroShare datasets can be ranked.** The datasets with other DOIs (Zenodo, EDI, IEDA and so on) have no usage figure here.
4. **Papers are tagged to observatories by the archive, not by topic.** Several of the most cited are broad papers (Anthropocene, tree mortality) tagged to an observatory by the archive. My impression is that their tie is a CZO researcher among the authors, but the data does not show authors and I did not check. Whether they belong among the highlights of a *Critical Zone* finding aid is your and the reviewers' judgment.

## Proposed papers: top 15 by citations per year

| # | Title | Year | Citations | Since 2022 | Per year | DOI | Observatory |
|---|---|---|---|---|---|---|---|
| 1 | On underestimation of global vulnerability to tree mortality and forest die-o... | 2015 | 2651 | 1294 | 220.9 | [`10.1890/ES15-00203.1`](https://doi.org/10.1890/ES15-00203.1) | Catalina-Jemez |
| 2 | The Anthropocene is functionally and stratigraphically distinct from the Holo... | 2016 | 2375 | 832 | 215.9 | [`10.1126/science.aad2622`](https://doi.org/10.1126/science.aad2622) | Calhoun |
| 3 | A multi-species synthesis of physiological mechanisms in drought-induced tree... | 2017 | 1149 | 656 | 114.9 | [`10.1038/s41559-017-0248-x`](https://doi.org/10.1038/s41559-017-0248-x) | Catalina-Jemez |
| 4 | Natural, incidental, and engineered nanomaterials and their impacts on the Ea... | 2019 | 841 | 609 | 105.1 | [`10.1126/science.aau8299`](https://doi.org/10.1126/science.aau8299) | Calhoun |
| 5 | The influence of soil properties on the structure of bacterial and fungal com... | 2008 | 1837 | 649 | 96.7 | [`10.1016/j.soilbio.2008.05.021`](https://doi.org/10.1016/j.soilbio.2008.05.021) | Boulder Creek |
| 6 | The boundless carbon cycle | 2009 | 1651 | 603 | 91.7 | [`10.1038/ngeo618`](https://doi.org/10.1038/ngeo618) | Christina River Basin |
| 7 | Beyond clay: towards an improved set of variables for predicting soil organic... | 2018 | 778 | 531 | 86.4 | [`10.1007/s10533-018-0424-3`](https://doi.org/10.1007/s10533-018-0424-3) | Catalina-Jemez, Christina River Basin, Eel River, Luquillo, Southern Sierra |
| 8 | Hillslope hydrology in global change research and Earth system modeling | 2019 | 643 | 442 | 80.4 | [`10.1029/2018WR023903`](https://doi.org/10.1029/2018WR023903) | Boulder Creek, Catalina-Jemez, Eel River, Luquillo, Reynolds Creek, Shale Hills, Southern Sierra |
| 9 | Examining the global distribution of dominant archaeal populations in soil. | 2010 | 1324 | 376 | 77.9 | [`10.1038/ismej.2010.171`](https://doi.org/10.1038/ismej.2010.171) | Boulder Creek |
| 10 | Riverine coupling of biogeochemical cycles between land, oceans, and atmosphere. | 2011 | 1223 | 423 | 76.4 | [`10.1890/100014`](https://doi.org/10.1890/100014) | Christina River Basin |
| 11 | Biophysical controls on organic carbon fluxes in fluvial networks | 2008 | 1407 | 379 | 74.1 | [`10.1038/ngeo101`](https://doi.org/10.1038/ngeo101) | Christina River Basin |
| 12 | Clades of huge phages from across Earth’s ecosystems | 2020 | 507 | 342 | 72.4 | [`10.1038/s41586-020-2007-4`](https://doi.org/10.1038/s41586-020-2007-4) | Eel River |
| 13 | When did the Anthropocene begin? A mid-twentieth century boundary level is st... | 2015 | 784 | 274 | 65.3 | [`10.1016/j.quaint.2014.11.045`](https://doi.org/10.1016/j.quaint.2014.11.045) | Calhoun |
| 14 | The interdependence of mechanisms underlying climate-driven vegetation mortal... | 2011 | 1022 | 299 | 63.9 | [`10.1016/j.tree.2011.06.003`](https://doi.org/10.1016/j.tree.2011.06.003) | Catalina-Jemez |
| 15 | Digging deeper to find unique microbial communities: The strong effect of dep... | 2012 | 895 | 429 | 59.7 | [`10.1016/j.soilbio.2012.03.011`](https://doi.org/10.1016/j.soilbio.2012.03.011) | Boulder Creek |

## Proposed datasets: top 15 by downloads per year

| # | Title | Created | Downloads | Views | Downloads per year | Link | Observatory |
|---|---|---|---|---|---|---|---|
| 1 | SSCZO -- Streamflow / Discharge -- KREW, Bull Creek -- (2003-2010) | 2019 | 1826 | 4988 | 228 | [HydroShare](https://www.hydroshare.org/resource/d6d8b2a6e5604629b1192233646dfea1/) | Southern Sierra |
| 2 | CJCZO -- Streamflow / Discharge -- Jemez River Basin -- (2007-2021) | 2019 | 1010 | 5531 | 126 | [HydroShare](https://www.hydroshare.org/resource/c0e5094d1de54547a304d4dec3a7b3ff/) | Catalina-Jemez |
| 3 | CJCZO -- Precipitation -- Marshall Gulch -- (2007-2019) | 2019 | 853 | 4633 | 107 | [HydroShare](https://www.hydroshare.org/resource/f7df7b07ea19477ab7ea701c34bc356b/) | Catalina-Jemez |
| 4 | CJCZO -- Soil Moisture, Soil Temperature, Electrical Conductivity, Water Pote... | 2019 | 838 | 4391 | 105 | [HydroShare](https://www.hydroshare.org/resource/0348b65d71eb46d38bba7db4cb2826db/) | Catalina-Jemez |
| 5 | CRBCZO -- Chlorophyll -- Pheophytin -- White Clay Creek -- (2001-2012) | 2019 | 834 | 4826 | 104 | [HydroShare](https://www.hydroshare.org/resource/d841f99381424ebc850842a1dbb5630b/) | Christina River Basin |
| 6 | SSCZO -- Soil Moisture, Soil Temperature, Electrical Conductivity -- Critical... | 2019 | 787 | 4811 | 98 | [HydroShare](https://www.hydroshare.org/resource/29555085fc1341b39fda2fd991b77967/) | Southern Sierra |
| 7 | CJCZO -- Streamflow / Discharge -- Marshall Gulch -- (2006-2020) | 2019 | 714 | 4928 | 89 | [HydroShare](https://www.hydroshare.org/resource/3c1fd54381764e5b8865609cb4127d63/) | Catalina-Jemez |
| 8 | SSHCZO -- Meteorology, Air Temperature, Precipitation, Soil Moisture, Solar R... | 2019 | 682 | 4967 | 85 | [HydroShare](https://www.hydroshare.org/resource/28b106cc56ec4271abf8ccc29b4e501e/) | Shale Hills |
| 9 | CJCZO -- Soil Moisture, Soil Temperature, Electrical Conductivity, Water Pote... | 2019 | 656 | 4691 | 82 | [HydroShare](https://www.hydroshare.org/resource/3c88818b8f014e09afcffdc4089b0ffb/) | Catalina-Jemez |
| 10 | SSCZO -- Meteorology -- Met Stations, Providence, Lower -- (2002-2011) | 2019 | 608 | 4783 | 76 | [HydroShare](https://www.hydroshare.org/resource/0918a6975c864a398766d579e3687004/) | Southern Sierra |
| 11 | SSCZO -- Soil Moisture, Soil Temperature, Electrical Conductivity, Matric Pot... | 2019 | 607 | 4348 | 76 | [HydroShare](https://www.hydroshare.org/resource/63bd9676c3bf4a9996bd62b7a120c2be/) | Southern Sierra |
| 12 | CJCZO -- Soil Moisture, Soil Temperature -- B2 Desert Site -- (2010-2020) | 2019 | 605 | 4322 | 76 | [HydroShare](https://www.hydroshare.org/resource/6175c21450234f75952b2a87dd99777b/) | Catalina-Jemez |
| 13 | CJCZO -- Streamflow / Discharge -- Oracle Ridge -- (2011-2018) | 2019 | 595 | 4872 | 74 | [HydroShare](https://www.hydroshare.org/resource/9d7dd6ca40984607ad74a00ab0b5121b/) | Catalina-Jemez |
| 14 | SSCZO -- Meteorology -- Met Stations, KREW, Bull Creek, Upper -- (2003-2011) | 2019 | 591 | 4430 | 74 | [HydroShare](https://www.hydroshare.org/resource/a2c9c3b5655446db9da9ada6da4ef247/) | Southern Sierra |
| 15 | CJCZO -- Precipitation -- B2 Desert Site -- (2009-2020) | 2019 | 536 | 4711 | 67 | [HydroShare](https://www.hydroshare.org/resource/f5ae15fbdcc9425e847060f89da61557/) | Catalina-Jemez |

## Alternative: the top two of each observatory

If the aim is that every observatory has highlights, this ranks within each observatory (by its first listed observatory tag). It is a weak option for some: for example the top datasets of Reynolds Creek have 9 and 8 downloads in all, so they are in effect unused.

| Observatory | Top papers (ranked by citations per year; total citations shown) |
|---|---|
| Boulder Creek | The influence of soil properties on the structure of bact... (2008, 1837 citations) ; Hillslope hydrology in global change research and Earth s... (2019, 643 citations) |
| Calhoun | The Anthropocene is functionally and stratigraphically di... (2016, 2375 citations) ; Natural, incidental, and engineered nanomaterials and the... (2019, 841 citations) |
| Catalina-Jemez | On underestimation of global vulnerability to tree mortal... (2015, 2651 citations) ; A multi-species synthesis of physiological mechanisms in ... (2017, 1149 citations) |
| Christina River Basin | The boundless carbon cycle (2009, 1651 citations) ; Riverine coupling of biogeochemical cycles between land, ... (2011, 1223 citations) |
| Eel River | Clades of huge phages from across Earth’s ecosystems (2020, 507 citations) ; Novel soil bacteria possess diverse genes for secondary m... (2018, 438 citations) |
| Intensively Managed Landscapes | Analyzing high resolution topography for advancing the un... (2015, 342 citations) ; Weather whiplash in agricultural regions drives deteriora... (2017, 193 citations) |
| Luquillo | Controls on deep critical zone architecture: a historical... (2016, 349 citations) ; Changes in extracellular enzyme activity and microbial co... (2014, 403 citations) |
| Reynolds Creek | The Airborne Snow Observatory: fusion of scanning lidar, ... (2016, 633 citations) ; A unified approach to hydrologic modeling: Part 2. Compar... (2015, 586 citations) |
| Shale Hills | Crossing disciplines and scales to understand the Critica... (2007, 701 citations) ; Earth's Critical Zone and hydropedology: Concepts, charac... (2010, 356 citations) |
| Southern Sierra | California forest die-off linked to multi-year deep soil ... (2019, 366 citations) ; SMAP soil moisture improves global evapotranspiration (2018, 240 citations) |

| Observatory | Top datasets (ranked by downloads per year; total downloads shown) |
|---|---|
| Boulder Creek | BCCZO -- Surface Water Chemistry -- (GG_IS_Array) -- Gord... (415 downloads, 8 y) ; BCCZO -- Diatoms -- Didymosphenia Geminata -- Boulder Cre... (394 downloads, 8 y) |
| Calhoun | CCZO -- Precipitation -- Calhoun CZO -- (2014-2017) (289 downloads, 10 y) ; CCZO -- Streamflow / Discharge -- Research Area 3, weir 4... (256 downloads, 9 y) |
| Catalina-Jemez | CJCZO -- Streamflow / Discharge -- Jemez River Basin -- (... (1010 downloads, 8 y) ; CJCZO -- Precipitation -- Marshall Gulch -- (2007-2019) (853 downloads, 8 y) |
| Christina River Basin | CRBCZO -- Chlorophyll -- Pheophytin -- White Clay Creek -... (834 downloads, 8 y) ; CRBCZO -- Stage, Streamflow / Discharge -- White Clay Cre... (327 downloads, 8 y) |
| Eel River | The relationship between topography, bedrock weathering, ... (351 downloads, 7 y) ; Carbon Dioxide Production In Bedrock (211 downloads, 7 y) |
| Intensively Managed Landscapes | IMLCZO -- Soil Electrical Resistivity, Soil Geochemistry,... (144 downloads, 7 y) ; IMLCZO -- GIS/Map Data, LiDAR -- Spatial and GIS Data -- ... (126 downloads, 7 y) |
| Luquillo | LCZO -- Meteorology -- Bisley -- (1993-2019) (195 downloads, 8 y) ; LCZO -- Meteorology -- Hourly -- Sabana Field Station -- ... (177 downloads, 8 y) |
| Reynolds Creek | RCCZO -- LiDAR, Digital Elevation Model (DEM) -- DEM -- R... (9 downloads, 8 y) ; RCCZO -- Precipitation -- Reynolds Creek Experimental Wat... (8 downloads, 8 y) |
| Shale Hills | SSHCZO -- Meteorology, Air Temperature, Precipitation, So... (682 downloads, 8 y) ; SSHCZO -- Digital Elevation Model (DEM), GIS/Map Data, La... (432 downloads, 8 y) |
| Southern Sierra | SSCZO -- Streamflow / Discharge -- KREW, Bull Creek -- (2... (1826 downloads, 8 y) ; SSCZO -- Soil Moisture, Soil Temperature, Electrical Cond... (787 downloads, 8 y) |

## What I need from you

1. **Which ranking:** the overall top 15 in each list, the top two per observatory, or a mix?
2. **Datasets:** are you content to rank by downloads (views are not usable), and with the "since created on HydroShare" caveat on the page?
3. **Papers:** keep the broad, widely cited papers whose CZO tie is a co-author, or limit to papers whose own subject is a Critical Zone site or process?
4. **The "why it matters" lines** and the reviewers' sign-off are yours: I have not written any, because every sentence would be a claim about the science that I cannot source. When you have chosen, the highlights are set by adding `"highlight": true` to the chosen records, a content change in its own PR.

## How this was made (so it can be repeated)

- OpenAlex: `GET /works?filter=doi:<up to 50 DOIs>&select=doi,cited_by_count,counts_by_year,publication_year,type&mailto=help@cuahsi.org`, 22 requests; 1097 of 1,099 matched.
- HydroShare: one `GET /resource/<id>/` per resource, 5.2 seconds apart, a user agent naming the project and help@cuahsi.org; the Views and Downloads rows and the JSON-LD `dateCreated`. 486 requests, one failed with a timeout and is not in the counts. Page reads may themselves count as views (T2 noted a view count rising by one); this harvest read each resource once.
- The scripts are scratch files (`.agent/usage-openalex.py`, `.agent/usage-hs.py`), not committed; they would become a `scripts/` file if the ranking is to be repeated (a code PR).
