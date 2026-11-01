# Products batch 9: Southern Sierra (proposal for epic T11)

Date: 30 October 2026. Ticket: CUAHSI/CUAHSI3-website#76 (T11). Branch `task/cz-products-sierra-proposal`. **Proposal step of "Propose, then apply". Nothing in `content/` has been changed.** Source: `agent/reports/261029_cz-harvest-proposal.json`, every record whose `sites` includes `sierra`, minus what `content/critical-zone/products.json` already holds (batches 1 to 8, 1,568 records).

Rules carried over (Jordan): talks and posters held out; proposals not in the list; award numbers found only in text stay unset and flagged; addresses that do not answer are left out; items unrelated to the critical zone held back for you; `provenance` not in the file; one file for the whole list.

## Counts

| | Count |
|---|---|
| Records tagged `sierra` | 453 (34 datasets, 419 papers) |
| Already in the list (same DOI, HydroShare id or address) | 50 |
| Held out: talks and posters | 241 |
| Held out: addresses that did not answer | 0 |
| Held out by me (items 1 to 4 below) | 4 |
| **Proposed for this batch** | **158** (28 datasets, 130 papers) |
| Of the papers: paper/book 96, dissertation/thesis 13, report/proposal 13, journal-article 8 | |
| Papers with a DOI / archive page only | 94 / 36 |
| Datasets with a DOI / HydroShare address with no DOI | 0 / 28 |
| Records with an `awards` value from the harvest's funder data | 8 |
| Records with no year | 28 (all datasets) |
| Records tagged with more than two sites | 0 |

## Link check (before proposing)

Every DOI was looked up at doi.org (handle lookup) and every HydroShare address requested once. Of 94 DOIs and 28 HydroShare addresses, **no problem was found**: none needed repair. The 36 archive-page addresses were not opened (they stop working in August 2027). A resolving DOI is not proof it is the right paper.

## Things I changed or left out (mine; your call on each)

1. **A proposal, held out:** "Proposal Summary- 2013 Renewal" (the SSCZO's 2013 proposal summary, typed report). Under your rule it is not in the list.
2. **A computer-science dissertation, held back:** "Deterministic Networking for the Industrial IoT: PhD Dissertation" (Pierre and Marie Curie University, Paris, 2019), tagged `sierra` by the archive (the observatory's wireless sensor network was built by that group). It is not critical zone science, so I hold it back, as with the two IML papers; say "include" to add it.
3. **An unpublished manuscript that is probably a duplicate, held out:** "Making soil" (Dixon and Riebe, 2014; venue text "Elements, in review"). The list already holds the published paper by the same authors, same year and journal, "Tracing and pacing soil across slopes" (Elements 10(5), `10.2113/gselements.10.5.363`), and I read the first as the working title of the second. I did not confirm that from a source beyond the authors, year and journal matching; say "include" to add it.
4. **A duplicate inside the batch, dropped:** the 2016 Hydrological Processes article on polymictic pools appears twice, once as an archive page ("...Sierra Nevada, CA.", venue "Hydologic Processes") and once with DOI `10.1002/hyp.10834` ("...behaviour..."). I propose only the DOI record. The 2013 UC Merced M.Sc. thesis with the same title is a different work and stays.
5. **Thirteen reports cite an award number only in their venue text** (the Southern Sierra CZO annual reports 2007-2008 through 2018-2019 and the 2007-2013 final report: "NSF Award 0725097", "1239521" or "1331939"). Under your decision `awards` stays unset; all three awards are in the registry. They join the list for you to revisit (38 in all: the 25, plus these 13). The 2012-2013 annual report is typed "dissertation/thesis" by the archive, which is a mistyping; it is a report and is proposed as a paper like the others.
6. **241 talks and posters held out**, per your rule.
7. **13 theses and 13 reports are typed `paper`** (no schema type for them). Among the reports: the Southern Sierra CZO annual and final reports, an "Outcomes Report" (2013), and no other proposal.
8. **No paper is dated before 2007**, so every record keeps `era: czo`. I read all 130 paper titles for items unrelated to the critical zone and found none besides item 2.
9. **8 papers carry an `awards` value** from the harvest's funder data (`nsf-0725097`, `nsf-1239521` or `nsf-1331939`). No record is tagged with more than two sites.
10. The papers with no DOI (36) were merged by the harvest on title, year and section; not read against their pages. Datasets have no year when the source gave none (C3).

## Proposed items

### Datasets (28)

| Title | Kind | Year | Address | Sites |
|---|---|---|---|---|
| SSCZO -- Flux Tower, Meteorology -- Flux Tower Transect, P301 -- (2007-2018) | dataset |  | HydroShare (no DOI) | national, sierra |
| SSCZO -- Flux Tower, Meteorology -- Flux Tower Transect, SJER -- (2009-2018) | dataset |  | HydroShare (no DOI) | national, sierra |
| SSCZO -- Flux Tower, Meteorology -- Flux Tower Transect, Soaproot Saddle -- (2009-2018) | dataset |  | HydroShare (no DOI) | national, sierra |
| SSCZO -- GIS/Map Data -- Spatial Data -- (2003-2011) | dataset |  | HydroShare (no DOI) | national, sierra |
| SSCZO -- GIS/Map Data -- Spatial Data -- (2013-2018) | dataset |  | HydroShare (no DOI) | national, sierra |
| SSCZO -- LiDAR, Digital Elevation Model (DEM), Snow Survey -- Snow-on, Snow-off Flyover -- S... | dataset |  | HydroShare (no DOI) | national, sierra |
| SSCZO -- Matric Potential -- Critical Zone Tree 1 -- (2008-2013) | dataset |  | HydroShare (no DOI) | national, sierra |
| SSCZO -- Meteorology -- Met Stations, KREW, Bull Creek, Lower -- (2003-2011) | dataset |  | HydroShare (no DOI) | national, sierra |
| SSCZO -- Meteorology -- Met Stations, KREW, Bull Creek, Upper -- (2003-2011) | dataset |  | HydroShare (no DOI) | national, sierra |
| SSCZO -- Meteorology -- Met Stations, Providence, Lower -- (2002-2011) | dataset |  | HydroShare (no DOI) | national, sierra |
| SSCZO -- Meteorology -- Met Stations, Providence, Upper -- (2002-2011) | dataset |  | HydroShare (no DOI) | national, sierra |
| SSCZO -- Meteorology -- Met Stations, SEKI Panther -- (2006-2017) | dataset |  | HydroShare (no DOI) | national, sierra |
| SSCZO -- Meteorology -- Met Stations, Wolverton -- (2006-2017) | dataset |  | HydroShare (no DOI) | national, sierra |
| SSCZO -- Rainfall Chemistry, Meteorology -- NADP -- Providence, Upper Met -- (2008-2010) | dataset |  | HydroShare (no DOI) | national, sierra |
| SSCZO -- Sap Flow -- Critical Zone Tree 1 -- (2008-2012) | dataset |  | HydroShare (no DOI) | national, sierra |
| SSCZO -- Sap Flow -- Wolverton -- (2007-2015) | dataset |  | HydroShare (no DOI) | national, sierra |
| SSCZO -- Snow Depth -- Wolverton -- (2007-2011) | dataset |  | HydroShare (no DOI) | national, sierra |
| SSCZO -- Soil Moisture, Soil Temperature, Electrical Conductivity -- Critical Zone Tree 1 --... | dataset |  | HydroShare (no DOI) | national, sierra |
| SSCZO -- Soil Moisture, Soil Temperature, Electrical Conductivity, Matric Potential, Sap Flo... | dataset |  | HydroShare (no DOI) | national, sierra |
| SSCZO -- Soil Moisture, Soil Temperature, Matric Potential, Solar Radiation -- Wolverton -- ... | dataset |  | HydroShare (no DOI) | national, sierra |
| SSCZO -- Soil Moisture, Soil Temperature, Snow Depth -- P301 Water Balance Transect -- (2011... | dataset |  | HydroShare (no DOI) | national, sierra |
| SSCZO -- Soil Moisture, Soil Temperature, Snow Depth, Air Temperature -- Providence, Lower M... | dataset |  | HydroShare (no DOI) | national, sierra |
| SSCZO -- Soil Moisture, Soil Temperature, Snow Depth, Air Temperature -- Providence, Lower M... | dataset |  | HydroShare (no DOI) | national, sierra |
| SSCZO -- Soil Moisture, Soil Temperature, Snow Depth, Air Temperature -- Providence, Upper M... | dataset |  | HydroShare (no DOI) | national, sierra |
| SSCZO -- Soil Moisture, Soil Temperature, Snow Depth, Air Temperature -- Providence, Upper M... | dataset |  | HydroShare (no DOI) | national, sierra |
| SSCZO -- Soil Moisture, Soil Temperature, Snow Depth, Air Temperature -- Providence, Upper M... | dataset |  | HydroShare (no DOI) | national, sierra |
| SSCZO -- Streamflow / Discharge -- KREW, Bull Creek -- (2003-2010) | dataset |  | HydroShare (no DOI) | national, sierra |
| SSCZO -- Streamflow / Discharge -- Providence -- (2003-2010) | dataset |  | HydroShare (no DOI) | national, sierra |

### Papers (130)

| Title | Kind | Year | Address | Sites |
|---|---|---|---|---|
| A cyber-infrastructure for the measurement and estimation of large-scale hydrologic processes | dissertation/thesis | 2012 | archive page | sierra |
| A montane Mediterranean climate supports year-round photosynthesis and high forest biomass | journal-article | 2016 | DOI | sierra |
| A New Method for Segmenting Individual Trees from the Lidar Point Cloud. | paper/book | 2012 | archive page | sierra |
| A Three-dimensional View of Nutrient Hotspots in a Sierra Nevada Forest Soil. | paper/book | 2014 | DOI | sierra |
| Aeolian dust deposition and the perturbation of phosphorus transformations during long-term ... | paper/book | 2019 | DOI | sierra |
| Assessing climate change impacts on alpine stream-flow and vegetation water use: mining the ... | paper/book | 2009 | DOI | sierra |
| Bayesian inference of hydraulic properties in and around a white fir using a process-based e... | paper/book | 2019 | DOI | sierra |
| Bedrock composition regulates ecosystems and landscape evolution in the sierra Nevada Bathol... | dissertation/thesis | 2013 | archive page | sierra |
| Bedrock composition regulates mountain ecosystems and landscape evolution | paper/book | 2014 | DOI | sierra |
| Biogeochemical Cycling in Forest Soils of the Eastern Sierra Nevada Mountains | paper/book | 2009 | DOI | sierra |
| California forest die-off linked to multi-year deep soil drying in 2012–2015 drought | paper/book | 2019 | DOI | sierra |
| Canopy Effects on Snow Accumulation: Observations from Lidar, Canonical-View Photos, and Con... | paper/book | 2018 | DOI | sierra |
| Carbon and Nutrient Contents in Soils from the Kings River Experimental Watershed, Sierra Ne... | paper/book | 2010 | DOI | sierra |
| Catchment power and the joint distribution of elevation and travel distance to the outlet | journal-article | 2016 | DOI | sierra |
| Characterizing Runoff and Water Yield for Headwater Catchments in the Southern Sierra Nevada | paper/book | 2016 | DOI | sierra |
| Climate and topography control the size and flux of sediment produced on steep mountain slopes | paper/book | 2015 | DOI | sierra |
| Climate controls on ecosystem production, biomass, and water cycling | dissertation/thesis | 2014 | archive page | sierra |
| Climate, snow, and soil moisture data set for the Tuolumne and Merced river watersheds, Cali... | paper/book | 2019 | DOI | sierra |
| Comparison of Canopy Cover Estimation from Airborne LiDAR | paper/book | 2016 | DOI | sierra |
| Comparison of in-stream sediment sources and assessment of a bank migration model for headwa... | dissertation/thesis | 2009 | archive page | sierra |
| Composition and stabilization mechanisms of organic matter in soils and sediments eroded fro... | dissertation/thesis | 2012 | archive page | sierra |
| Concentration-discharge relationships in headwater streams of the Sierra Nevada, California | paper/book | 2017 | archive page | sierra |
| Consequences of manipulated snow on soil gaseous emission and N retention in the growing sea... | paper/book | 2012 | DOI | sierra |
| Controls of streamflow generation in small catchments across the snow-rain transition in the... | paper/book | 2012 | DOI | sierra |
| Cosmogenic Isotopes Unravel the Hydrochronology and Water Storage Dynamics of the Southern S... | paper/book | 2019 | DOI | sierra |
| Cosmogenic Nuclides in Weathering and Erosion | paper/book | 2014 | DOI | sierra |
| Critical Zone Observatory: Snowline Processes in the Southern Sierra Nevada | paper/book | 2012 | archive page | sierra |
| Design and Performance of a Wireless Sensor Network for Catchment-scale Snow and Soil Moistu... | paper/book | 2012 | DOI | sierra |
| Drought resistance across California ecosystems: evaluating changes in carbon dynamics using... | paper/book | 2016 | DOI | sierra |
| Dust outpaces bedrock in nutrient supply to montane forest ecosystems | paper/book | 2017 | DOI | sierra |
| Ecohydrology and Climate Change in the Mountains of the Western USA – A Review of Research a... | paper/book | 2010 | DOI | sierra |
| Effect of Tree-to-Shrub Type Conversion in Lower Montane Forests of the Sierra Nevada (USA) ... | paper/book | 2016 | DOI | sierra |
| Effects of Model Spatial Resolution on Ecohydrologic Predictions and Their Sensitivity to In... | paper/book | 2016 | DOI | sierra |
| Elevation-dependent influence of snow accumulation on forest greening | paper/book | 2012 | DOI | sierra |
| Emulation of environmental models using polynomial chaos expansion | paper/book | 2019 | DOI | sierra |
| Estimated Loss of Snowpack Storage in the Eastern Sierra Nevada with Climate Warming | paper/book | 2014 | DOI | sierra |
| Estimating the spatial and temporal distribution of snow in mountainous terrain | dissertation/thesis | 2012 | archive page | sierra |
| Estimation of high-resolution land surface net shortwave radiation from AVIRIS data: Algorit... | journal-article | 2015 | DOI | sierra |
| Evaluation of MPS-1 soil water potential sensor. | paper/book | 2011 | DOI | sierra |
| Evaporation and groundwater patterns in montane meadows of the Sierra Nevada, CA. | dissertation/thesis | 2016 | archive page | sierra |
| Evapotranspiration along an elevation gradient in the Sierra Nevada. | paper/book | 2012 | DOI | sierra |
| Fight or Flight? Tradeoffs Between Drought Defense and Reproduction in Conifers | paper/book | 2019 | DOI | sierra |
| Frequency, electrical conductivity and temperature analysis of low-cost moisture sensor. | paper/book | 2008 | DOI | sierra |
| Geophysical constraints on deep weathering and water storage potential in the Southern Sierr... | paper/book | 2014 | DOI | sierra |
| Global patterns of dust and bedrock nutrient supply to montane ecosystems | paper/book | 2017 | DOI | sierra |
| Grain size bias in cosmogenic nuclide studies of stream sediment in steep terrain. | paper/book | 2016 | DOI | sierra |
| Groundwater and surface water flow to the Merced River, Yosemite Valley, California: 36C and... | paper/book | 2014 | DOI | sierra |
| Groundwater and Surface Water Interactions in Relation to Natural and Anthropogenic Environm... | paper/book | 2016 | DOI | sierra |
| Groundwater dynamics mediate low-flow response to global warming in snow-dominated alpine re... | paper/book | 2009 | DOI | sierra |
| Hydrogeologic influence on changes in snowmelt runoff with climate warming: Numerical experi... | paper/book | 2016 | archive page | sierra |
| Hydrologic responses to climate warming for a snow‐dominated watershed and a transient snow ... | paper/book | 2018 | DOI | sierra |
| Imaging spectrometry-derived estimates of regional ecosystem composition for the Sierra Neva... | paper/book | 2019 | DOI | sierra |
| Improved snowmelt simulations with a canopy model forced with photo-derived direct beam cano... | paper/book | 2012 | DOI | sierra |
| Influence of canopy structure and direct beam solar irradiance on snowmelt rates in a mixed ... | paper/book | 2012 | DOI | sierra |
| Insights into hydrologic and hydrochemical processes based on concentration‐discharge and en... | paper/book | 2017 | DOI | sierra |
| Landscape response to tipping points in granite weathering: The case of stepped topography i... | paper/book | 2011 | archive page | sierra |
| LiDAR-derived topography and forest structure predict fine-scale variation in daily surface ... | paper/book | 2019 | DOI | sierra |
| Lithologic, Climatic and Depth Controls on Critical Zone Transformations | paper/book | 2019 | DOI | sierra |
| Managing forests in an era of drought. | paper/book | 2016 | archive page | sierra |
| Mechanisms controlling the impact of multi-year drought on mountain hydrology | paper/book | 2018 | DOI | sierra |
| Meta-analysis reveals ammonia-oxidizing bacteria respond more strongly to nitrogen addition ... | journal-article | 2016 | DOI | sierra |
| Microbial community structure of subalpine snow in the Sierra Nevada, California. | paper/book | 2016 | DOI | sierra |
| More than climate? Predictors of tree canopy height vary with scale in complex terrain, Sier... | paper/book | 2019 | DOI | sierra |
| Mountain runoff vulnerability to increased evapotranspiration with vegetation expansion | paper/book | 2014 | DOI | sierra |
| Nutrient Hot Spots in a Sierra Nevada Forest Soil: Temporal Characteristics and Relations to... | paper/book | 2013 | DOI | sierra |
| Nutrient Hot Spots in a Sierra Nevada Soil: Physical Assessments and Contributing Factors | dissertation/thesis | 2012 | archive page | sierra |
| Nutrient hot spots in some Sierra Nevada forest soils. | paper/book | 2010 | DOI | sierra |
| Optimizing embedded sensor network design for catchment scale snowdepth estimation using LiD... | paper/book | 2016 | DOI | sierra |
| Origin of eroded soil organic matter in low-order catchments of the southern Sierra Nevada | dissertation/thesis | 2014 | archive page | sierra |
| Outcomes Report for Southern Sierra Critical Zone Observatory 2007-2013 | report/proposal | 2013 | archive page | sierra |
| Plant Accessible Water Storage Capacity and Tree-Scale Root Interactions Determine How Fores... | paper/book | 2019 | DOI | sierra |
| Polymictic pool behavior in a montane meadow, Sierra Nevada, CA | dissertation/thesis | 2013 | archive page | sierra |
| Polymictic pool behaviour in a montane meadow, Sierra Nevada, CA | paper/book | 2016 | DOI | sierra |
| pSIN: a scalable, Parallel algorithm for Seismic INterferometry of large-N ambient-noise data | paper/book | 2016 | DOI | sierra |
| Quantifying nutrient uptake as driver of rock weathering in forest ecosystems by magnesium s... | paper/book | 2017 | DOI | sierra |
| Quantifying the legacy of snowmelt timing on soil greenhouse gas emissions in a seasonally d... | journal-article | 2018 | DOI | sierra |
| Response to Comment on Soil moisture response to snowmelt and rainfall in a Sierra Nevada mi... | paper/book | 2012 | DOI | sierra |
| Sampling Strategies in forest hydrology and biogeochemistry. | paper/book | 2008 | DOI | sierra |
| Sediment loads and erosion in forest headwater streams of the Sierra Nevada, California | paper/book | 2012 | archive page | sierra |
| Sensor placement strategies for SWE estimation in the American River basin | paper/book | 2013 | DOI | sierra |
| Simplified Multistep Outflow Method to Estimate Unsaturated Hydraulic Functions for Coarse-t... | paper/book | 2011 | DOI | sierra |
| Simulations of energy balance components at snow-dominated montane watershed by land surface... | paper/book | 2017 | DOI | sierra |
| SMAP soil moisture improves global evapotranspiration | paper/book | 2018 | DOI | sierra |
| Snow distribution over an elevation gradient and forest snow hydrology of the Southern Sierr... | dissertation/thesis | 2013 | archive page | sierra |
| Snowmelt controls on concentration‐discharge relationships and the balance of oxidative and ... | paper/book | 2017 | DOI | national, sierra |
| Snowmelt Runoff and Water Yield Along Elevation and Temperature Gradients in Californias So... | paper/book | 2012 | DOI | sierra |
| Snowmelt timing alters shallow but not deep soil moisture in the Sierra Nevada. | paper/book | 2014 | DOI | sierra |
| Soil carbon and nitrogen erosion in forested catchments: implications for erosion-induced te... | paper/book | 2015 | DOI | sierra |
| Soil Moisture Response to Snowmelt and Rainfall in a Sierra Nevada Mixed-Conifer Forest. | paper/book | 2011 | DOI | sierra |
| Southern Sierra Critical Zone Observatory and Kings River Experimental Watersheds: A Synthes... | paper/book | 2018 | DOI | sierra |
| Southern Sierra Critical Zone Observatory: 2007-2008 Annual Report to National Science Found... | report/proposal | 2008 | archive page | sierra |
| Southern Sierra Critical Zone Observatory: 2007-2013 Final Report to National Science Founda... | report/proposal | 2013 | archive page | sierra |
| Southern Sierra Critical Zone Observatory: 2008-2009 Annual Report to National Science Found... | report/proposal | 2009 | archive page | sierra |
| Southern Sierra Critical Zone Observatory: 2009-2010 Annual Report to National Science Found... | report/proposal | 2010 | archive page | sierra |
| Southern Sierra Critical Zone Observatory: 2010-2011 Annual Report to National Science Found... | report/proposal | 2011 | archive page | sierra |
| Southern Sierra Critical Zone Observatory: 2011-2012 Annual Report to National Science Found... | report/proposal | 2012 | archive page | sierra |
| Southern Sierra Critical Zone Observatory: 2012-2013 Annual Report to National Science Found... | dissertation/thesis | 2013 | archive page | sierra |
| Southern Sierra Critical Zone Observatory: 2013-2014 Annual Report to National Science Found... | report/proposal | 2014 | archive page | sierra |
| Southern Sierra Critical Zone Observatory: 2014-2015 Annual Report to National Science Found... | report/proposal | 2015 | archive page | sierra |
| Southern Sierra Critical Zone Observatory: 2015-2016 Annual Report to National Science Found... | report/proposal | 2016 | archive page | sierra |
| Southern Sierra Critical Zone Observatory: 2016-2017 Annual Report to National Science Found... | report/proposal | 2017 | archive page | sierra |
| Southern Sierra Critical Zone Observatory: 2017-2018 Annual Report to National Science Found... | report/proposal | 2018 | archive page | sierra |
| Southern Sierra Critical Zone Observatory: 2018-2019 Annual Report to National Science Found... | report/proposal | 2019 | archive page | sierra |
| Spatial modeling of coupled hydrologic-biogeochemical processes for the Southern Sierra Crit... | paper/book | 2007 | archive page | sierra |
| Spatially distributed water-balance and meteorological data from the Wolverton catchment, Se... | paper/book | 2018 | DOI | sierra |
| Stabilization Mechanisms and Decomposition Potential of Eroded Soil Organic Matter Pools in ... | journal-article | 2019 | DOI | sierra |
| Subsurface plant-accessible water in mountain ecosystems with a Mediterranean climate | paper/book | 2018 | DOI | sierra |
| Subsurface storage capacity influences climate–evapotranspiration interactions in three west... | paper/book | 2015 | DOI | sierra |
| Technical report: The design and evaluation of a basin-scale wireless sensor network for mou... | paper/book | 2017 | DOI | sierra |
| Testing for supply limited and kinetic limited chemical erosion in field measurements of reg... | paper/book | 2016 | DOI | sierra |
| The changing water cycle: The eco-hydrologic impacts of forest density reduction in Mediterr... | paper/book | 2019 | DOI | sierra |
| The deep Critical Zone as a source of mineral nutrients to montane, temperate forest ecosyst... | dissertation/thesis | 2018 | archive page | sierra |
| The impact of wildfire on baseflow recession rates in California | paper/book | 2017 | DOI | sierra |
| The Nature and Potential Causes of Nutrient Hot Spots in a Sierra Nevada Forest Soil. | paper/book | 2011 | DOI | sierra |
| The problem of predicting the particle size distribution of sediment supplied by hillslopes ... | paper/book | 2017 | DOI | sierra |
| The role of soil physical properties for determining biogeochemical responses to soil warming | paper/book | 2018 | archive page | sierra |
| The sensitivity of forest water use to the timing of precipitation and snowmelt recharge in ... | paper/book | 2013 | DOI | sierra |
| Topographic and geologic controls on soil variability in California's Sierra Nevada Foothill... | paper/book | 2016 | DOI | sierra |
| Topographic and vegetation effects on snow accumulation in the southern Sierra Nevada: a sta... | journal-article | 2016 | DOI | sierra |
| Topographic controls on the extension and retraction of flowing streams | paper/book | 2019 | DOI | sierra |
| Toward Better Understanding of Terrestrial Processes through Long-Term Hydrological Observat... | paper/book | 2019 | DOI | sierra |
| Tracing and pacing soil across slopes | paper/book | 2014 | DOI | sierra |
| Tracing the source of soil organic matter eroded from temperate forest catchments using carb... | journal-article | 2016 | DOI | sierra |
| Uncertainty in carbon allocation strategy and ecophysiological parameterization influences o... | paper/book | 2016 | DOI | sierra |
| Using research networks to create the comprehensive datasets needed to assess nutrient avail... | paper/book | 2018 | DOI | national, sierra |
| Using Scientist-Teacher Partnerships to Create Student-Driven Environmental Field Research E... | paper/book | 2016 | archive page | national, sierra |
| Water residence time (age) and flow path exert synchronous effects on annual characteristics... | paper/book | 2019 | DOI | sierra |
| Watershed model calibration to the base flow recession curve with and without evapotranspira... | paper/book | 2016 | DOI | sierra |
| Watersheds dynamics following wildfires: Nonlinear feedbacks and implications on hydrologic ... | paper/book | 2019 | DOI | sierra |
| Wetting and Drying Variability of the Shallow Subsurface Beneath a Snowpack in California’s ... | paper/book | 2015 | DOI | sierra |

## Sample check (rule 12)

Read in the harvest file, each matched to its row above:

papers with a DOI: Response to Comment on Soil moisture response (2012); The impact of wildfire on baseflow recession (2017); Meta-analysis reveals ammonia-oxidizing bacte (2016)

archive-page papers: Sediment loads and erosion in forest headwate (2012); Estimating the spatial and temporal distribut (2012); Landscape response to tipping points in grani (2011)

datasets: SSCZO -- Streamflow / Discharge -- Providence; SSCZO -- Soil Moisture, Soil Temperature, Sno; SSCZO -- Flux Tower, Meteorology -- Flux Towe

Also read: the four held-out records (proposal summary, IoT dissertation, "Making soil", the archive-page polymictic duplicate) against the published "Tracing and pacing soil across slopes" (Crossref: authors Dixon and Riebe, 1 October 2014) and the DOI polymictic record. Not opened by hand: any page, beyond the doi.org handle and HydroShare answers of the link check.
