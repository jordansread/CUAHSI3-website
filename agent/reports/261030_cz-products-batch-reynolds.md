# Products batch 3: Reynolds Creek (proposal for epic T11)

Date: 30 October 2026. Ticket: CUAHSI/CUAHSI3-website#76 (T11). Branch `task/cz-products-reynolds-proposal`. **Proposal step of "Propose, then apply". Nothing in `content/` has been changed.** Source: `agent/reports/261029_cz-harvest-proposal.json`, every record whose `sites` includes `reynolds`, minus what `content/critical-zone/products.json` already holds (batches 1 and 2, 228 records).

Rules carried over (Jordan): talks and posters held out; no award assigned unless you decide (the two open questions on PR 152, whether to map the four award numbers found in venue text and whether to keep proposals, are still unanswered, so I apply the same defaults: nothing mapped, proposals kept and flagged); `provenance` not in the file; one file for the whole list.

## Counts

| | Count |
|---|---|
| Records tagged `reynolds` | 237 (40 datasets, 197 papers) |
| Already in the list (same DOI, HydroShare id or address) | 18 |
| Held out: talks and posters | 59 |
| Left after those | 160 |
| Held out: HydroShare addresses that did not answer (item 4) | 6 |
| Left out: duplicate of a paper already in the batch (below) | 1 |
| **Proposed for this batch** | **153** (32 datasets, 121 papers) |
| Of the papers: paper/book 100, report/proposal 4, dissertation/thesis 10 | |
| Papers with a DOI / archive page only | 88 / 33 |
| Datasets with a DOI / HydroShare address with no DOI | 0 / 32 |
| Records that name an award in their own text | 0 |
| Records with no year | 32 |
| Records tagged with more than two sites | 9 |

## Link check (before proposing)

Every DOI was looked up at doi.org (handle lookup) and every HydroShare address requested once. Of 88 DOIs and 38 HydroShare addresses, 8 problems (two DOIs, six HydroShare addresses); each is handled below. The 33 archive-page addresses were not opened (they stop working in August 2027). A resolving DOI is not proof it is the right paper.

## Things I changed or left out (mine; your call on each)

1. **A DOI with a stray suffix.** "Comparison of methods for estimating evapotranspiration in a small rangeland catchment" carries `10.2136/vzj2013.08.0152.11` (404). Crossref gives `10.2136/vzj2013.08.0152` with the same title and April 2014. Proposed with the repaired DOI.
2. **A malformed DOI that is also an IML paper.** "Threshold Dynamics in Soil Carbon Storage for Bioenergy Crops" is listed by both Reynolds and IML. The IML record has the clean DOI `10.1021/es5023762`; the Reynolds one has `10.1021/es5023762|Environ.Sci.Technol.XXXX,XXX,XXX−XXX` (404). Crossref confirms the clean DOI is this paper (2014). Proposed as **one record with the clean DOI and `sites` of iml and reynolds**, so the IML batch will find it already loaded. (This is a record I would otherwise have loaded under IML's batch with one site; merging now is my choice.)
3. **A duplicate inside the batch.** The Niemeyer paper on soil and saprolite moisture appears twice: once with its DOI (2017), once as an archive page with no DOI, a trailing full stop and year 2016. I propose only the DOI record. The year differs (2016 on the archive page, 2017 for the DOI); I kept the DOI record's.
4. **Six HydroShare addresses that do not answer** (five 404, one 403; the other 31 HydroShare addresses answered 200). They are datasets the archive listed that HydroShare no longer serves publicly, or never did; I did not find out which. They are **left out** of this batch, listed in the last table, with the archive's dataset page as the alternative address if you want them in (it works until August 2027). Say "include with the archive page" or "leave out".
5. 59 talks and posters held out, per your rule.
6. 21 reports, proposals and theses are typed `paper`; "Reynolds Creek Carbon Critical Zone Observatory." is a proposal-like entry.
7. The 33 papers with no DOI were merged by the harvest on title, year and section; not read against their pages (the Niemeyer duplicate in item 3 shows this merge can miss).
8. Datasets have no year when the source gave none (C3).

## Proposed items

### Datasets (32)

| Title | Kind | Year | Address | Sites |
|---|---|---|---|---|
| Cross-CZO -- Flux Tower -- AmeriFlux Network data -- National -- (2007-2018) | dataset |  | HydroShare (no DOI) | boulder, catalina-jemez, national, reynolds, shale-hills, sierra |
| RCCZO -- Air Temperature, Climate, Meteorology, Precipitation, Snow Depth, Soil Moisture, St... | dataset |  | HydroShare (no DOI) | national, reynolds |
| RCCZO -- Climate, GIS/Map Data -- 31 yrs of Temperature, Humidity, & Precipitation -- Reynol... | dataset |  | HydroShare (no DOI) | national, reynolds |
| RCCZO -- Digital Elevation Model (DEM), GIS/Map Data, LiDAR -- Reynolds Creek Experimental W... | dataset |  | HydroShare (no DOI) | national, reynolds |
| RCCZO -- Digital Elevation Model (DEM), Land Cover, LiDAR -- Reynolds Creek Experimental Wat... | dataset |  | HydroShare (no DOI) | national, reynolds |
| RCCZO -- Flux Tower, Meteorology, Ecosystem model, Nutrient Fluxes -- Data for Partitioned C... | dataset |  | HydroShare (no DOI) | national, reynolds |
| RCCZO -- Flux Tower, Nutrient Fluxes -- AmeriFlux US-Rls RCEW Low Sagebrush -- Reynolds Cree... | dataset |  | HydroShare (no DOI) | national, reynolds |
| RCCZO -- Flux Tower, Nutrient Fluxes -- AmeriFlux US-Rms RCEW Mountain Big Sagebrush -- Reyn... | dataset |  | HydroShare (no DOI) | national, reynolds |
| RCCZO -- Flux Tower, Nutrient Fluxes -- AmeriFlux US-Rws Reynolds Creek Wyoming big sage -- ... | dataset |  | HydroShare (no DOI) | national, reynolds |
| RCCZO -- Geology, Soil Biogeochemistry, Soil Texture -- Lithology, Coarse Fraction, Bulk Den... | dataset |  | HydroShare (no DOI) | national, reynolds |
| RCCZO -- Geomorphology, GIS / Map Data, Soil Biogeochemistry, Topographic Carbon Storage -- ... | dataset |  | HydroShare (no DOI) | national, reynolds |
| RCCZO -- Geomorphology, Soil Biogeochemistry -- Character of Aeolian Material in Reynolds Cr... | dataset |  | HydroShare (no DOI) | national, reynolds |
| RCCZO -- GIS / Map Data, LiDAR, Land Cover, Topographic Carbon Storage, Soil Biogeochemistry... | dataset |  | HydroShare (no DOI) | national, reynolds |
| RCCZO -- GIS / Map Data, LiDAR, Land Cover, Vegetation -- Data for Vegetation Maps for RCEW ... | dataset |  | HydroShare (no DOI) | national, reynolds |
| RCCZO -- GIS / Map Data, Regolith Survey, Geomorphology -- Predicting Soil Thickness -- Reyn... | dataset |  | HydroShare (no DOI) | national, reynolds |
| RCCZO -- Hydropedologic Properties, Soil Water, Soil Survey -- Reynolds Creek Experimental W... | dataset |  | HydroShare (no DOI) | national, reynolds |
| RCCZO -- Land Cover, LiDAR, Vegetation -- Biomass Estimate of Sagebrush -- Reynolds Creek Ex... | dataset |  | HydroShare (no DOI) | national, reynolds |
| RCCZO -- LiDAR, Digital Elevation Model (DEM) -- DEM -- Reynolds Creek Experimental Watershe... | dataset |  | HydroShare (no DOI) | national, reynolds |
| RCCZO -- LiDAR, Snow Depth -- Snow-Depth -- Reynolds Creek -- (2009-2009) | dataset |  | HydroShare (no DOI) | national, reynolds |
| RCCZO -- Meteorology -- Humidity, Radiation, Temp, Wind, Vapor Pressure -- Reynolds Creek Ex... | dataset |  | HydroShare (no DOI) | national, reynolds |
| RCCZO -- Precipitation -- Reynolds Creek Experimental Watershed -- (1962-Ongoing) | dataset |  | HydroShare (no DOI) | national, reynolds |
| RCCZO -- Sap Flow, Vegetation -- Sap flux among sagebrush communities -- Reynolds Creek Expe... | dataset |  | HydroShare (no DOI) | national, reynolds |
| RCCZO -- Soil Biogeochemistry -- Soil Properties of Reynolds Mountain East -- Reynolds Creek... | dataset |  | HydroShare (no DOI) | national, reynolds |
| RCCZO -- Soil Biogeochemistry, Vegetation, Precipitation -- Carbon Storage in Cold Desert Ec... | dataset |  | HydroShare (no DOI) | national, reynolds |
| RCCZO -- Soil Geochemistry -- Sequestration of SIC and Potential Sources -- Salmon Challis N... | dataset |  | HydroShare (no DOI) | national, reynolds |
| RCCZO -- Soil Geochemistry, Soil Texture -- Soil Properties of Johnston Draw -- Reynolds Cre... | dataset |  | HydroShare (no DOI) | national, reynolds |
| RCCZO -- Soil Moisture -- Reynolds Creek Experimental Watershed -- (1977-Ongoing) | dataset |  | HydroShare (no DOI) | national, reynolds |
| RCCZO -- Soil Survey -- Predicting Soil Thickness -- Reynolds Creek Experimental Watershed -... | dataset |  | HydroShare (no DOI) | national, reynolds |
| RCCZO -- Soil Temperature -- Reynolds Creek Experimental Watershed -- (1977-Ongoing) | dataset |  | HydroShare (no DOI) | national, reynolds |
| RCCZO -- Soil Texture, Soil Biogeochemistry -- Soil Properties at the Reynolds Creek Experim... | dataset |  | HydroShare (no DOI) | national, reynolds |
| RCCZO -- Streamflow / Discharge -- Reynolds Creek Experimental Watershed -- (1963-Ongoing) | dataset |  | HydroShare (no DOI) | national, reynolds |
| RCCZO -- Vegetation, Climate, Ecosystem model, Nutrient Fluxes -- Net ecosystem exchange and... | dataset |  | HydroShare (no DOI) | national, reynolds |

### Papers (121)

| Title | Kind | Year | Address | Sites |
|---|---|---|---|---|
| A field comparison of multiple techniques to quantify groundwater–surface-water interactions | paper/book | 2015 | DOI | luquillo, reynolds |
| A net ecosystem carbon budget for snow dominated forested headwater catchments: linking wate... | journal-article | 2018 | DOI | boulder, catalina-jemez, luquillo, reynolds, shale-hills |
| A simple framework for assessing the sensitivity of mountain watersheds to snowpack loss. | paper/book | 2015 | DOI | reynolds |
| A unified approach to hydrologic modeling: Part 2. Comparison of alternative process represe... | paper/book | 2015 | DOI | reynolds |
| Aboveground Biomass Estimates of Sagebrush Using Terrestrial and Airborne LiDAR Data in a Dr... | paper/book | 2015 | archive page | reynolds |
| Aboveground total and green biomass of dryland shrub derived from terrestrial laser scanning | paper/book | 2014 | DOI | reynolds |
| Airborne LiDAR and terrestrial laser scanning derived vegetation obstruction factors for vis... | paper/book | 2013 | DOI | reynolds |
| Anomalous trend in soil evaporation in semi-arid, snow-dominated watersheds | paper/book | 2013 | DOI | reynolds |
| Assessing the sensitivities of distributed snow models to forcing data resolution | paper/book | 2014 | DOI | reynolds |
| Assessment of the timing of daily peak streamflow in a snow dominated watershed | paper/book | 2016 | DOI | calhoun, reynolds |
| Bacterial composition of soils in ponderosa pine and mixed conifer forests exposed to differ... | paper/book | 2014 | DOI | catalina-jemez, reynolds |
| Bedrock infiltration estimates from a catchment in the mountain rain-snow transition zone. | paper/book | 2015 | DOI | reynolds |
| Block-controlled hillslope form and persistence of topography in rocky landscapes | paper/book | 2017 | DOI | boulder, luquillo, reynolds |
| Characterizing western juniper expansion via a fusion of Landsat 5 Thematic Mapper and lidar... | paper/book | 2010 | DOI | reynolds |
| Climate and landscape as drivers of carbon storage in forested headwater catchments: Insight... | paper/book | 2015 | archive page | reynolds |
| Climate moderates potential shifts in streamflow from changes in pinyon-juniper woodland cov... | paper/book | 2017 | DOI | reynolds |
| Climatic and Grazing Controls on Nitrogen Fixation by Biological Soil Crusts Utilizing a Cli... | dissertation/thesis | 2016 | archive page | reynolds |
| Climatic and landscape influences on soil moisture are primary determinants of soil carbon f... | paper/book | 2015 | DOI | boulder, catalina-jemez, reynolds |
| Combining airborne LiDAR and hyperspectral data across local sites for upscaling shrubland s... | paper/book | 2015 | DOI | reynolds |
| Comparison of methods for estimating evapotranspiration in a small rangeland catchment. | paper/book | 2014 | DOI **DOI repaired (see 1)** | reynolds |
| Constraining plant functional types in a semi-arid ecosystem with waveform lidar | paper/book | 2018 | DOI | reynolds |
| Controls on ecohydrologic properties in desert ecosystems: Differences in soil age and volca... | paper/book | 2016 | DOI | reynolds |
| Controls on gross production in an aspen-sagebrush vegetation mosaic | paper/book | 2019 | DOI | reynolds |
| Controls on the Presence, Concentration, Storage, and Variability of Soil Inorganic Carbon i... | dissertation/thesis | 2016 | archive page | reynolds |
| Coupling of the simultaneous heat and water model with a distributed hydrological model and ... | paper/book | 2013 | archive page | reynolds |
| Critical zone science informs landscape management through quantification of slow and often ... | paper/book | 2018 | archive page | national, reynolds |
| Data paper: 31 Years of Spatially Distributed Air Temperature, Humidity, Precipitation Amoun... | paper/book | 2018 | DOI | reynolds |
| Developing and optimizing shrub parameters representing sagebrush (Artemisia spp.) ecosystem... | paper/book | 2019 | DOI | reynolds |
| Dynamic process connectivity explains ecohydrologic responses to rainfall pulses and drought | paper/book | 2018 | DOI | iml, reynolds |
| Ecohydrologic Dynamics and Social Impacts of Western Juniper in Snow-Dominated Sagebrush Steppe | dissertation/thesis | 2015 | archive page | reynolds |
| Ecohydrologic response and recovery of a semi-arid shrubland over a five year period followi... | paper/book | 2016 | DOI | reynolds |
| Effectiveness of prescribed fire to re-establish sagebrush steppe vegetation and ecohydrolog... | paper/book | 2018 | DOI | reynolds |
| Effects of long-term experimental manipulations of precipitation and vegetation on carbon an... | dissertation/thesis | 2017 | archive page | reynolds |
| Eleven years of mountain weather, snow, soil moisture and streamflow data from the rain–snow... | paper/book | 2018 | DOI | reynolds |
| Empirical methods for remote sensing of nitrogen in drylands may lead to unreliable interpre... | paper/book | 2019 | DOI | reynolds |
| Errors in LiDAR-derived shrub height and crown area on sloped terrain | paper/book | 2011 | DOI | reynolds |
| Evaluation of a two source snow-vegetation energy balance model for estimating surface energ... | paper/book | 2014 | DOI | reynolds |
| Evaluation of SMAP freeze/thaw retrieval accuracy at core validation sites in the contiguous... | paper/book | 2018 | DOI | reynolds |
| Examining Interactions Between and Among Predictors of Net Ecosystem Exchange: A Machine Lea... | paper/book | 2019 | DOI | reynolds |
| Experimental Geomicrobiology: From Field to Laboratory. | paper/book | 2016 | archive page | reynolds |
| Factors affecting efficacy of prescribed fire for western juniper control | paper/book | 2018 | DOI | reynolds |
| Fire, flood, and drought—Extreme climate events alter flow paths and stream chemistry | paper/book | 2018 | archive page | luquillo, reynolds, shale-hills |
| Form and function relationships revealed by long-term research in a semiarid mountain catchment | paper/book | 2017 | DOI | reynolds |
| Freezing and Thawing Processes. | paper/book | 2013 | archive page | reynolds |
| Geochemical evolution of the Critical Zone across variable time scales informs concentration... | paper/book | 2017 | DOI | boulder, catalina-jemez, luquillo, national, reynolds |
| Geomorphic influences on the distribution and accumulation of pyrogenic carbon (PyC) followi... | paper/book | 2018 | DOI | national, reynolds |
| Hydrologic response and recovery to prescribed fire and vegetation removal in a small rangel... | paper/book | 2016 | DOI | reynolds |
| Hydrological partitioning in the critical zone: Recent advances and opportunities for develo... | journal-article | 2015 | DOI | catalina-jemez, reynolds, sierra |
| Ideas and perspectives: Strengthening the biogeosciences in environmental research networks | paper/book | 2018 | DOI | boulder, calhoun, luquillo, national, reynolds, shale-hills, sierra |
| Improved visibility calculations with tree trunk obstruction modeling from aerial LiDAR | paper/book | 2013 | DOI | reynolds |
| Independent evaluation of the SNODAS snow depth product using regional-scale lidar-derived m... | paper/book | 2016 | DOI | reynolds |
| Influences of Climate Change on Water Availability in Complex Terrain: Understanding Earth P... | dissertation/thesis | 2016 | archive page | reynolds |
| Interaction of wind and cold‐season hydrologic processes on erosion from complex topography ... | paper/book | 2019 | DOI | reynolds |
| Juniper encroachment impacts on catchment scale water availability in snow dominated sagebru... | paper/book | 2016 | DOI | reynolds |
| Landsat-5 TM and LiDAR fusion for sub-pixel Juniper tree cover estimates in a western rangeland | paper/book | 2011 | archive page | reynolds |
| Leveraging environmental research and observation networks to advance soil carbon science | paper/book | 2019 | DOI | reynolds |
| Lidar aboveground vegetation biomass estimates in shrublands: Prediction, uncertainties and ... | paper/book | 2017 | DOI | reynolds |
| LiDAR-Based Classification of Sagebrush Community Types | paper/book | 2011 | DOI | reynolds |
| Lidar-derived estimate and uncertainty of carbon sink in successional phases of woody encroa... | paper/book | 2013 | DOI | reynolds |
| Lithology and coarse fraction adjusted bulk density estimates for determining total organic ... | journal-article | 2019 | DOI | reynolds |
| Long-term snow distribution observations in a mountain catchment: assessing variability, sel... | paper/book | 2014 | DOI | reynolds |
| Mapping and understanding dry-season soil water drawdown by California montane vegetation | paper/book | 2016 | DOI | reynolds, sierra |
| Meteorological, snow, streamflow, topographic, and vegetation height data from four western ... | paper/book | 2017 | DOI | reynolds |
| Modeling evapotranspiration and energy balance in a wheat-maize cropping system using the re... | paper/book | 2014 | archive page | reynolds |
| Modeling phenological controls on carbon dynamics in dryland sagebrush ecosystems | paper/book | 2019 | archive page | reynolds |
| Modeling Temperature and Humidity Profiles withing Forest Canopies. | paper/book | 2015 | archive page | reynolds |
| Nitrogenase Activity by Biological Soil Crusts in Cold Sagebrush Steppe Ecosystems | paper/book | 2017 | DOI | reynolds |
| On the rocks: Quantifying storage of inorganic soil carbon on gravels and determining pedon-... | journal-article | 2017 | DOI | reynolds |
| Postfire grazing management effects on mesic sagebrush-steppe vegetation: spring grazing. | paper/book | 2016 | archive page | reynolds |
| Predicting soil thickness on soil mantled hillslopes | journal-article | 2018 | DOI | reynolds |
| Process-Based Modeling of Temperature and Water Profiles in the Seedling Recruitment Zone: P... | paper/book | 2014 | DOI | reynolds |
| Quantitative understating of daily streamflow peak timing and its seasonal variations in a s... | paper/book | 2014 | archive page | reynolds |
| Rapid recovery of mesic mountain big sagebrush gross production and respiration following pr... | paper/book | 2018 | DOI | reynolds |
| Regional scale dryland vegetation classification with an integrated lidar-hyperspectral appr... | paper/book | 2019 | DOI | reynolds |
| Regional sensitivities of seasonal snowpack to elevation, aspect, and vegetation cover in we... | journal-article | 2017 | DOI | boulder, catalina-jemez, national, reynolds, sierra |
| Relative Abundance of Nitrogen-Fixing Bacteria in Biological Soil Crusts in Sagebrush Steppe... | paper/book | 2018 | archive page | reynolds |
| Response of three soil water sensors to variable solution electrical conductivity in differe... | paper/book | 2014 | DOI | reynolds |
| Reynolds Creek Carbon Critical Zone Observatory. | report/proposal | 2013 | archive page | reynolds |
| Reynolds Creek Critical Zone Observatory Annual Report 2015 | paper/book | 2015 | archive page | reynolds |
| Reynolds Creek Critical Zone Observatory Annual Report 2016 | report/proposal | 2016 | archive page | reynolds |
| Reynolds Creek Critical Zone Observatory Annual Report 2017 | report/proposal | 2017 | archive page | reynolds |
| Reynolds Creek Critical Zone Observatory Annual Report 2018 | report/proposal | 2018 | archive page | reynolds |
| Reynolds Creek Experimental Watershed and Critical Zone Observatory | paper/book | 2018 | DOI | reynolds |
| Riparian Vegetation of Ephermeral Streams. | paper/book | 2017 | archive page | reynolds |
| Sagebrush Steppe Shrub Height and Canopy Cover Estimation Using LiDAR and Landsat 5 TM Data | dissertation/thesis | 2011 | archive page | reynolds |
| Saprolite genesis in complex terrain: hydrologic, lithologic, biologic, and microclimatic co... | paper/book | 2016 | archive page | reynolds |
| Seasonal wetness, soil organic carbon, and fire influence soil hydrological properties and w... | paper/book | 2018 | DOI | reynolds |
| Sensible Heat Balance Estimates of Transient Soil Ice Contents. | paper/book | 2016 | DOI | reynolds |
| Sensitivity of model parameterizations for simulating latent heat flux over snow | paper/book | 2014 | DOI | reynolds |
| Simulated water budget in a forested watershed within Priest River Experimental Forest, nort... | paper/book | 2016 | DOI | reynolds |
| Simulating maize production, water and surface energy balance, and canopy temperature under ... | paper/book | 2016 | archive page | reynolds |
| Simulating the dependence of aspen (Populus tremuloides) on redistributed snow in a semi-ari... | paper/book | 2018 | DOI | reynolds |
| Simulation of long-term soil water dynamics at Reynolds Creek, Idaho: Implications for range... | paper/book | 2016 | DOI | reynolds |
| Snowpack sensitivity to perturbed climate changes in alpine catchments. | paper/book | 2015 | DOI | reynolds |
| Soil Temperature Variability in Complex Terrain MeasuredUsing Fiber-Optic Distributed Temper... | paper/book | 2016 | DOI | reynolds |
| Soil, snow, sub-surface storage data set from a mountain catchment in the rain–snow transiti... | paper/book | 2014 | DOI | reynolds |
| Spatial modeling for resources framework (SMRF): A modular framework for developing spatial ... | paper/book | 2017 | DOI | reynolds |
| Spatiotemporal heterogeneity of water flowpaths controls dissolved organic carbon sourcing i... | paper/book | 2019 | DOI | reynolds |
| Spatiotemporal soil and saprolite moisture dynamics across a semi-arid woody plant gradient | paper/book | 2017 | DOI | reynolds |
| Summer-time carbon and water fluxes in sagebrush ecosystems spanning rain-to-snow dominated ... | paper/book | 2019 | DOI | reynolds |
| Surface water input from snowmelt and rain throughfall in western juniper: potential impacts... | paper/book | 2016 | DOI | reynolds |
| Temperature impacts on soil organic carbon decomposition across and environmental gradient i... | dissertation/thesis | 2016 | archive page | reynolds |
| Temporal Variability in Microclimatic Conditions for Grass Germination and Emergence in the ... | paper/book | 2016 | DOI | reynolds |
| The Airborne Snow Observatory: fusion of scanning lidar, imaging spectrometer, and physicall... | paper/book | 2016 | DOI | reynolds |
| The cold rain-on-snow event of June 2013 in the Canadian Rockies -characteristics and diagno... | paper/book | 2016 | DOI | reynolds |
| The Sensitivity of Mountain Snowpack to Warming. | dissertation/thesis | 2015 | archive page | reynolds |
| The use of similarity concepts to represent sub-grid variability in hydrologic and land-surf... | paper/book | 2014 | DOI | reynolds |
| Threshold Dynamics in Soil Carbon Storage for Bioenergy Crops | paper/book | 2014 | DOI **DOI repaired, sites merged (see 2)** | reynolds |
| Topographic controls of soil organic carbon on soil-mantled landscapes | journal-article | 2019 | DOI | reynolds |
| Topographic Controls on Total Mobile Regolith and Total Soil Organic Carbon in Complex Terrain. | dissertation/thesis | 2016 | archive page | reynolds |
| Trends and sensitivities of low streamflow extremes to discharge timing and magnitude in Pac... | paper/book | 2016 | DOI | reynolds |
| Understanding the effect of fire on vegetation composition and gross primary production in a... | paper/book | 2020 | DOI | reynolds |
| Understanding the rain-to-snow transition zone: modeling snowmelt and the spatial distributi... | dissertation/thesis | 2016 | archive page | reynolds |
| Variable Groundwater Contributions Influence Nutrient Cycling in Montane Headwater Catchments | paper/book | 2015 | archive page | reynolds |
| Variation in Biological Soil Crust Bacterial Abundance and Diversity as a Function of Climat... | paper/book | 2017 | DOI | reynolds |
| Vegetation and precipitation shifts interact to alter organic and inorganic carbon storage i... | paper/book | 2019 | DOI | reynolds |
| Vegetation and slope effects on accuracy of a LiDAR-derived DEM in the sagebrush steppe | paper/book | 2011 | DOI | reynolds |
| Water and carbon fluxes along an elevational gradient in a sagebrush ecosystem | paper/book | 2019 | DOI | reynolds |
| Water flow modeling with dry bulk density optimization to determine hydraulic properties in ... | paper/book | 2018 | DOI | reynolds |
| Water resources: Research network to track alpine water. | paper/book | 2015 | DOI | reynolds |
| Winter CO2 efflux from sagebrush shrublands distributed across the rain‐to‐snow transition zone | paper/book | 2020 | DOI | reynolds |

## Left out for the HydroShare reason (item 4)

| Title | HydroShare address | Answer |
|---|---|---|
| Johnston Draw - Climate, Meteorology, Hydropedologic Properties (2003-2014) | https://www.hydroshare.org/resource/6cbb07fc45af48db934a64d5c365c7f2/ | 404 |
| Johnston Draw - Soil Biogeochemistry, Soil Survey, Topographic Carbon Storage - soil organic ca | https://www.hydroshare.org/resource/c476a86a17e043888cd42ae5337e7d6e/ | 404 |
| Reynolds Creek - Geology, Soil Survey, Vegetation, GIS/Map Data (1960-1970) | https://www.hydroshare.org/resource/ee12709dc19f4bd081b7b194a1b78f8b/ | 403 |
| Reynolds Creek - GIS/Map Data (2014) | https://www.hydroshare.org/resource/89709ac4ef444ede82b6c4931bb26975/ | 404 |
| Reynolds Creek - Nutrient Fluxes, Climate, Flux Tower - Eddy Covariance (2014-2018) | https://www.hydroshare.org/resource/8b700e86effd4c189c3a88379825df18/ | 404 |
| Reynolds Creek - Soil Biogeochemistry - Soil Organic Carbon (2014-2017) | https://www.hydroshare.org/resource/f98e6de110a24227945624ab9ca91c5b/ | 404 |
