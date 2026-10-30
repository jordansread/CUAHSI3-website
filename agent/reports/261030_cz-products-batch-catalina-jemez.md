# Products batch 8: Catalina-Jemez (proposal for epic T11)

Date: 30 October 2026. Ticket: CUAHSI/CUAHSI3-website#76 (T11). Branch `task/cz-products-catalina-jemez-proposal`. **Proposal step of "Propose, then apply". Nothing in `content/` has been changed.** Source: `agent/reports/261029_cz-harvest-proposal.json`, every record whose `sites` includes `catalina-jemez`, minus what `content/critical-zone/products.json` already holds (batches 1 to 7, 1,339 records).

Rules carried over (Jordan): talks and posters held out; proposals not in the list; award numbers found only in text stay unset and flagged; HydroShare addresses that do not answer are left out; items unrelated to the critical zone held back for you; `provenance` not in the file; one file for the whole list.

## Counts

| | Count |
|---|---|
| Records tagged `catalina-jemez` | 448 (67 datasets, 381 papers) |
| Already in the list (same DOI, HydroShare id or address) | 70 |
| Held out: talks and posters | 148 |
| Held out: addresses that did not answer | 0 |
| Held out: a conference abstract (item 3) | 1 |
| **Proposed for this batch** | **229** (56 datasets, 173 papers) |
| Of the papers: paper/book 131, dissertation/thesis 21, report/proposal 12, journal-article 9 | |
| Papers with a DOI / archive page only | 139 / 34 |
| Datasets with a DOI / HydroShare address with no DOI | 0 / 56 |
| Records with an `awards` value from the harvest's funder data | 9 |
| Records with no year | 56 (all datasets) |
| Records tagged with more than two sites | 3 |

## Link check (before proposing)

Every DOI was looked up at doi.org (handle lookup) and every HydroShare address requested once. Of 139 DOIs and 56 HydroShare addresses, **no problem was found**: none needed repair and none is left out for a dead address. The 34 archive-page addresses were not opened (they stop working in August 2027). A resolving DOI is not proof it is the right paper.

## Things I changed or left out (mine; your call on each)

1. **7 annual reports name their award in their own title**, not in venue text: "First" to "Fourth Annual Report for NSF EAR-0724958 entitled ..." (2010 to 2013) and the 2014, 2015 and 2016 reports "for NSF EAR-1331408 entitled ...". Under your decision on venue-text awards I leave `awards` unset on all 7; the registry has `nsf-0724958` and `nsf-1331408`, both already used by papers in this batch. They join the list for you to revisit (25 in all: 18, plus these 7).
2. **A correction notice:** "Addendum: Multi-scale predictions of massive conifer mortality due to chronic temperature rise" (Nature Climate Change 2016). The paper it corrects is also in the batch. Same question as the Boulder corrigendum on #155: keep or drop? Proposed in.
3. **A conference abstract typed as a paper:** "Does the composition of streamwater colloidal and particulate matter c..." (venue "Abstract EP43A-0866", an AGU meeting abstract). It is closer to a poster or talk, which your rule holds out of the list until a type is decided. I propose **holding it out** and listing it here; say "include" to add it.
4. **148 talks and posters held out**, per your rule.
5. **21 theses and 12 reports are typed `paper`** (no schema type for them): the 7 annual reports above, three more Catalina-Jemez annual reports (2017 to 2019), an NSF workshop report ("Towards a Unifying Theory of Critical Zone Structure..."), and a drilling report to the Critical Zone community. None is a proposal to a funder. No title says "proposal" or "submitted"; no repository text says in review or in prep.
6. **No paper is dated before 2007**, so no `era` is dropped; all 229 records carry `era: czo`.
7. **Items that look far from a critical zone:** I read all 173 paper titles and found none plainly unrelated (the least obvious are "Modeling aeolian transport of soil-bound plutonium", "The effects of a catastrophic forest fire on the biomass of submerged aquatic macrophytes" and "Neoichnology of Semiarid Environments"; all are Jemez or Santa Catalina Mountains work).
8. **9 papers carry an `awards` value** from the harvest's funder data (`nsf-1331408` or `nsf-0724958`). 3 records are tagged with more than two sites, all with `national` and `sierra` as well; each is kept once.
9. The papers with no DOI (34) were merged by the harvest on title, year and section; not read against their pages. Datasets have no year when the source gave none (C3). Two papers share a title stem ("An integrated modelling framework of catchment-scale ecohydrological processes", Ecohydrology 7(2), parts 1 and 2); they have different DOIs (`10.1002/eco.1362`, `10.1002/eco.1405`).

## Proposed items

### Datasets (56)

| Title | Kind | Year | Address | Sites |
|---|---|---|---|---|
| CJCZO -- Flux Tower -- Mixed Conifer -- Jemez River Basin -- (2007-2012) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Flux Tower -- Ponderosa Pine -- Jemez River Basin -- (2007-2012) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- GIS/Map Data -- Catalina-Jemez -- (2010-2014) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- GIS/Map Data -- EEMT -- Jemez River Basin -- (2010-2010) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- GIS/Map Data -- EEMT -- Santa Catalina Mountains -- (2010-2010) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- GIS/Map Data -- EEMT-topo -- Jemez River Basin -- (2010-2011) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- GIS/Map Data -- Raster Datasets -- Jemez River Basin -- (2010-2014) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Groundwater Chemistry -- Jemez 2013 Burned ZOB -- (2016-2020) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Groundwater Depth -- Jemez 2013 Burned ZOB -- (2016-2021) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Groundwater Depth, Piezometer -- Jemez 2011 Burned ZOB -- (2011-2020) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Groundwater Depth, Piezometer -- Jemez 2013 Burned ZOB -- (2010-2019) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- LiDAR -- Post-Fire -- Jemez River Basin -- (2012-2012) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- LiDAR -- Snow-off -- Jemez River Basin -- (2010-2010) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- LiDAR -- Snow-on -- Jemez River Basin -- (2010-2010) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- LiDAR -- Terrestrial Laser Scan -- Jemez River Basin -- (2011-2013) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Meteorology -- Air pressure and Temperature -- Marshall Gulch -- (2007-2011) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Meteorology -- B2 Desert Site -- (2009-2021) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Meteorology -- Lower Site -- Jemez 2011 Burned ZOB -- (2011-2021) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Meteorology -- Marshall Gulch -- (2011-2019) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Meteorology -- Oracle Ridge -- (2010-2019) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Meteorology -- South-East Site -- Jemez 2013 Burned ZOB -- (2010-2021) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Meteorology -- South-West Site -- Jemez 2013 Burned ZOB -- (2011-2021) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Meteorology -- Upper Site -- Jemez 2011 Burned ZOB -- (2011-2021) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Piezometer, Groundwater Depth -- Marshall Gulch -- (2007-2019) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Precipitation -- B2 Desert Site -- (2009-2020) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Precipitation -- Marshall Gulch -- (2007-2019) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Precipitation -- Oracle Ridge -- (2010-2020) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Precipitation Chemistry -- Jemez River Basin -- (2011-2019) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Precipitation Chemistry -- Santa Catalina Mountains -- (2006-2019) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Sap Flow -- Granite -- Marshall Gulch -- (2011-2015) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Sap Flow -- Schist -- Marshall Gulch -- (2011-2015) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Sap Flow -- South-East -- Jemez 2013 Burned ZOB -- (2011-2012) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Sap Flow -- South-West -- Jemez 2013 Burned ZOB -- (2011-2012) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Snow Depth -- Jemez 2013 Burned ZOB -- (2010-2017) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Snow Depth -- Marshall Gulch -- (2011-2020) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Soil Gas -- CO2 and O2 -- Bigelow Site -- (2014-2020) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Soil Gas -- CO2 and O2 -- Jemez 2013 Burned ZOB -- (2013-2021) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Soil Gas -- CO2 and O2 -- Jemez Unburned Site -- (2015-2021) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Soil Geochemistry -- Jemez 2013 Burned ZOB -- (2010-2010) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Soil Moisture -- Marshall Gulch -- (2007-2020) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Soil Moisture, Soil Temperature -- B2 Desert Site -- (2010-2020) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Soil Moisture, Soil Temperature -- Oracle Ridge -- (2010-2020) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Soil Moisture, Soil Temperature, Electrical Conductivity, Water Potential -- Bigelo... | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Soil Moisture, Soil Temperature, Electrical Conductivity, Water Potential -- Jemez ... | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Soil Moisture, Soil Temperature, Electrical Conductivity, Water Potential -- Jemez ... | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Soil Moisture, Soil Temperature, Electrical Conductivity, Water Potential -- Jemez ... | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Soil Redox Potential -- Bigelow Site -- (2015-2020) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Soil Redox Potential -- Jemez 2013 Burned ZOB -- (2014-2021) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Soil Water Chemistry -- Jemez River Basin -- (2011-2019) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Soil Water Chemistry -- Santa Catalina Mountains -- (2006-2019) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Stream Water Chemistry -- Jemez River Basin -- (2005-2020) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Stream Water Chemistry -- Santa Catalina Mountains -- (2006-2019) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Streamflow / Discharge -- Bigelow Site -- (2015-2020) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Streamflow / Discharge -- Jemez River Basin -- (2007-2021) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Streamflow / Discharge -- Marshall Gulch -- (2006-2020) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |
| CJCZO -- Streamflow / Discharge -- Oracle Ridge -- (2011-2018) | dataset |  | HydroShare (no DOI) | catalina-jemez, national |

### Papers (173)

| Title | Kind | Year | Address | Sites |
|---|---|---|---|---|
| 2014 Catalina-Jemez CZO Annual Report for NSF EAR-1331408 entitled "Transformative Behavior ... | report/proposal | 2014 | archive page | catalina-jemez |
| 2015 Catalina-Jemez CZO Annual Report for NSF EAR-1331408 entitled "Transformative Behavior ... | report/proposal | 2015 | archive page | catalina-jemez |
| 2016 Catalina-Jemez CZO Annual Report for NSF EAR-1331408 entitled "Transformative Behavior ... | report/proposal | 2016 | archive page | catalina-jemez |
| A Climate-Induced Threshold in Hydrologic Response in a Semiarid Ponderosa Pine Hillslope. | paper/book | 2011 | DOI | catalina-jemez |
| A considerable fraction of soil-respired CO2 is not emitted directly to the atmosphere | journal-article | 2018 | DOI | catalina-jemez |
| A Cross-scale Study of Feldspar Transformation in the Santa Catalina Mountain Critical Zone ... | paper/book | 2014 | DOI | catalina-jemez |
| A multi-species synthesis of physiological mechanisms in drought-induced tree mortality | paper/book | 2017 | DOI | catalina-jemez |
| A robust, two‐parameter method for the extraction of drainage networks from high‐resolution ... | journal-article | 2013 | DOI | catalina-jemez |
| Addendum: Multi-scale predictions of massive conifer mortality due to chronic temperature rise | paper/book | 2016 | DOI | catalina-jemez |
| Allometric relationships between primary size measures and sapwood area for six common tree ... | paper/book | 2019 | DOI | catalina-jemez |
| Allometric relationships for Quercus gambelii and Robinia neomexicana for biomass estimation... | paper/book | 2019 | DOI | catalina-jemez |
| An integrated modelling framework of catchment-scale ecohydrological processes: 1. Model des... | paper/book | 2014 | DOI | catalina-jemez |
| An integrated modelling framework of catchment-scale ecohydrological processes: 2. The role ... | paper/book | 2014 | DOI | catalina-jemez |
| An open system framework for integrating critical zone structure and function. | paper/book | 2011 | DOI | catalina-jemez |
| Analytic solution for the morphology of a soil-mantled valley undergoing steady headward gro... | paper/book | 2012 | DOI | catalina-jemez |
| Application of Metabolic Scaling Theory to reduce error in local maxima tree segmentation fr... | paper/book | 2014 | DOI | catalina-jemez |
| Aqueous phase tracers of chemical weathering in a semi-arid critical zone. | dissertation/thesis | 2011 | archive page | catalina-jemez |
| Assessing five evolving microbial enzyme models against field measurements from a semiarid s... | paper/book | 2014 | DOI | catalina-jemez |
| Asymmetry of weathering‐limited hillslopes: the importance of diurnal covariation in solar i... | journal-article | 2017 | DOI | catalina-jemez |
| Bioclimatic Envelopes for Individual Demographic Events Driven by Extremes: Plant Mortality ... | paper/book | 2019 | DOI | catalina-jemez |
| Breakdown of hydrologic patterns upon model coarsening at hillslope scales and implications ... | paper/book | 2011 | DOI | catalina-jemez |
| Calibration and testing of upland hillslope evolution models in a dated landscape: Banco Bon... | paper/book | 2011 | DOI | catalina-jemez |
| Carbon and Nitrogen Cycling in Snow-Covered Environments. | paper/book | 2011 | DOI | catalina-jemez |
| Carbon and Nitrogen Export from Semiarid Uplands to Perennial Rivers: Connections and Missin... | paper/book | 2012 | DOI | catalina-jemez |
| Cascading impacts of bark beetle-caused tree mortality on coupled biogeophysical and biogeoc... | paper/book | 2012 | DOI | catalina-jemez |
| Catalina-Jemez CZO Annual Report 2017 | report/proposal | 2017 | archive page | catalina-jemez |
| Catalina-Jemez CZO Annual Report 2018 | report/proposal | 2018 | archive page | catalina-jemez |
| Catalina-Jemez CZO Annual Report 2019 | report/proposal | 2019 | archive page | catalina-jemez |
| Changes in snowpack accumulation and ablation in the intermountain west. | paper/book | 2012 | DOI | catalina-jemez |
| Chapter 8 – Ecohydrology and the Critical Zone: Processes and Patterns Across Scales | paper/book | 2015 | DOI | catalina-jemez |
| Characterizing U-series Isotope Signatures in Soils and Headwater Streams in a Complex Volca... | dissertation/thesis | 2013 | archive page | catalina-jemez |
| Climate, topography, and dust influences on the mineral and geochemical evolution of graniti... | paper/book | 2018 | DOI | catalina-jemez |
| Climate-vegetation-soil interactions and long-term hydrologic partitioning: signatures of ca... | paper/book | 2013 | DOI | catalina-jemez |
| Climatic and landscape controls on water transit times and silicate mineral weathering in th... | paper/book | 2015 | DOI | catalina-jemez |
| Coevolution of nonlinear trends in vegetation, soils, and topography with elevation and slop... | journal-article | 2013 | DOI | catalina-jemez |
| Coevolution of soil and topography across a semiarid cinder cone chronosequence | paper/book | 2017 | DOI | catalina-jemez |
| Colloids and Organic Matter Complexation Control Trace Metal Concentration-Discharge Relatio... | paper/book | 2016 | DOI | catalina-jemez |
| Consequences of mixing assumptions for time-variable travel time distributions | paper/book | 2015 | DOI | catalina-jemez |
| Constraining frequency–magnitude–area relationships for rainfall and flood discharges using ... | paper/book | 2016 | DOI | catalina-jemez |
| Controlled Experiments of Hillslope Coevolution at the Biosphere 2 Landscape Evolution Obser... | paper/book | 2018 | DOI | catalina-jemez |
| Controls on Soil Organic Carbon Partitioning and Stabilization in the California Sierra Nevada | paper/book | 2018 | DOI | catalina-jemez, sierra |
| Cordilleran Forest Scaling Dynamics And Disturbance Regimes Quantified By Aerial LiDAR | dissertation/thesis | 2013 | archive page | catalina-jemez |
| Coupled Transport, Fractionation and Stabilization of Dissolved Organic Matter and Rare Eart... | dissertation/thesis | 2013 | archive page | catalina-jemez |
| Critical Zone Biogeochemistry | paper/book | 2020 | DOI | catalina-jemez |
| Critical Zone Science in the Anthropocene: Opportunities for biogeographic and ecological th... | journal-article | 2019 | DOI | catalina-jemez |
| Critical Zone Services: Expanding Context, Constraints, and Currency beyond Ecosystem Services | paper/book | 2015 | DOI | catalina-jemez |
| Dependence of Aspen Stands on a Subsurface Water Subsidy: Implications for Climate Change Im... | paper/book | 2019 | DOI | catalina-jemez |
| Depth and topographic controls on microbial activity in a recently burned sub-alpine catchment | paper/book | 2020 | DOI | catalina-jemez |
| Development of topographic asymmetry: Insights from dated cinder cones in the western United... | paper/book | 2014 | DOI | catalina-jemez |
| Discriminating disturbance from natural variation with LiDAR in semi-arid forests in the sou... | paper/book | 2015 | DOI | catalina-jemez |
| Distinct stores and the routing of water in the deep critical zone of a snow-dominated volca... | paper/book | 2019 | DOI | catalina-jemez |
| Disturbance Alters the Relative Importance of Topographic and Biogeochemical Controls on Mic... | paper/book | 2018 | DOI | catalina-jemez |
| Drought supersedes warming in determining volatile and tissue defenses of piñon pine (Pinus ... | paper/book | 2019 | DOI | catalina-jemez |
| Drought-induced forest decline: causes, scope and implications | paper/book | 2012 | DOI | catalina-jemez |
| Ecohydrologic connections and complexities in drylands: new perspectives for understanding t... | paper/book | 2012 | DOI | catalina-jemez |
| Ecohydrological consequences of drought- and infestation- triggered tree die-off: insights a... | paper/book | 2012 | DOI | catalina-jemez |
| Ecosystem carbon and water cycling from a sky island montane forest | paper/book | 2020 | DOI | catalina-jemez |
| Ecosystem Composition Controls the Fate of Rare Earth Elements during Incipient Soil Genesis | paper/book | 2017 | DOI | catalina-jemez |
| Ecosystem dynamics and management after forest die-off: a global synthesis with conceptual s... | paper/book | 2017 | DOI | catalina-jemez |
| Ecosystem-bedrock interaction changes nutrient compartmentalization during early oxidative w... | paper/book | 2019 | DOI | catalina-jemez |
| Employing lidar to detail vegetation canopy architecture for prediction of aeolian transport | paper/book | 2013 | DOI | catalina-jemez |
| Estimating individual tree mid- and understory rank-size distributions from airborne laser s... | paper/book | 2014 | DOI | catalina-jemez |
| Evaluation of passive capillary wick samplers for measuring deep infiltration in the jemez r... | dissertation/thesis | 2017 | archive page | catalina-jemez |
| Evapotranspiration partitioning in a semiarid woodland: ecohydrological heterogeneity and co... | paper/book | 2010 | DOI | catalina-jemez |
| Examining the Impacts of Wildfire on Throughfall and Stemflow Chemistry and Flux at Plot and... | dissertation/thesis | 2015 | archive page | catalina-jemez |
| Experimental Assessment of Passive Capillary Wick Sampler Suitability for Inorganic Soil Sol... | paper/book | 2014 | DOI | catalina-jemez |
| Factoring in canopy cover heterogeneity on evapotranspiration partitioning: Beyond big-leaf ... | paper/book | 2014 | DOI | catalina-jemez |
| First Annual Report for NSF EAR‐0724958 entitled “Transformative Behavior of Water, Energy a... | report/proposal | 2010 | archive page | catalina-jemez |
| Forest ecohydrological response to bimodal precipitation during contrasting winter to summer... | paper/book | 2014 | DOI | catalina-jemez |
| Fourth Annual Report for NSF EAR-0724958 entitled “Transformative Behavior of Water, Energy ... | report/proposal | 2013 | archive page | catalina-jemez |
| Fractionation of Dissolved Organic Matter by (Oxy)Hydroxide-Coated Sands: Competitive Sorbat... | paper/book | 2014 | DOI | catalina-jemez |
| Geomorphically based predictive mapping of soil thickness in upland watersheds | paper/book | 2009 | DOI | catalina-jemez |
| Global change-type drought-induced tree mortality: vapor pressure deficit is more important ... | paper/book | 2013 | DOI | catalina-jemez |
| Hillslope Scale Hydrologic Spatial Patterns in a Patchy Ponderosa Pine Landscape: Insights f... | dissertation/thesis | 2012 | archive page | catalina-jemez |
| How do sediment yields from post‐wildfire debris‐laden flows depend on terrain slope, soil b... | journal-article | 2014 | DOI | catalina-jemez |
| How Water, Carbon, and Energy Drive Critical Zone Evolution: The Jemez-Santa Catalina Critic... | paper/book | 2011 | DOI | catalina-jemez |
| Hydrologic functioning of the deep critical zone and contributions to streamflow in a high‐e... | paper/book | 2019 | DOI | catalina-jemez |
| Hydrology and Biogeochemistry Linkages | paper/book | 2011 | DOI | catalina-jemez |
| Impact of organic carbon on weathering and chemical denudation of granular basalt | paper/book | 2014 | DOI | catalina-jemez |
| Impact of Soil Physicochemical and Biological Reactions on Transport of Nutrients and Pollut... | paper/book | 2011 | archive page | catalina-jemez |
| Implementing dynamic root optimization in Noah‐MP for simulating phreatophytic root water up... | paper/book | 2018 | DOI | catalina-jemez |
| Implicit assumptions of conceptual diagrams in environmental science and best practices for ... | paper/book | 2018 | DOI | catalina-jemez |
| Improving Distributed Hydrologic Modeling and Global Land Cover Data | dissertation/thesis | 2013 | archive page | catalina-jemez |
| Improving the accuracy of the gradient method for determining soil carbon dioxide efflux | paper/book | 2017 | DOI | catalina-jemez |
| Influence of climate variability on water partitioning and effective energy and mass transfe... | paper/book | 2016 | DOI | catalina-jemez |
| Influence of snow cover duration on soil evaporation and respiration efflux in mixed-conifer... | paper/book | 2014 | DOI | catalina-jemez |
| Influence of terrain aspect on water partitioning, vegetation structure, and vegetation gree... | paper/book | 2016 | DOI | catalina-jemez, national, sierra |
| Interactions between biogeochemistry and hydrologic systems. | paper/book | 2009 | DOI | catalina-jemez |
| Interactions of Wildfire, Landscape Position, and Soil Depth in Structuring Post-Fire Soil M... | dissertation/thesis | 2016 | archive page | catalina-jemez |
| Key Edaphic Properties Largely Explain Temporal and Geographic Variation in Soil Microbial C... | paper/book | 2015 | DOI | catalina-jemez |
| Key landscape ecology metrics for assessing climate change adaptation options: rate of chang... | paper/book | 2013 | DOI | catalina-jemez |
| Linking soil element-mass-transfer to microscale mineral weathering across a semiarid enviro... | paper/book | 2014 | DOI | catalina-jemez |
| Long-Term (1986–2015) Crop Water Use Characterization over the Upper Rio Grande Basin of Uni... | paper/book | 2019 | DOI | catalina-jemez |
| Mechanisms of a coniferous woodland persistence under drought and heat | paper/book | 2019 | DOI | catalina-jemez |
| Mineral nutrient mobilization by plants from rock: influence of rock type and arbuscular myc... | paper/book | 2015 | DOI | catalina-jemez |
| Modeling aeolian transport in response to succession, disturbance and future climate: Dynami... | paper/book | 2012 | DOI | catalina-jemez |
| Modeling aeolian transport of soil-bound plutonium: considering infrequent but normal enviro... | paper/book | 2013 | DOI | catalina-jemez |
| Modeling moisture fluxes using artificial neural networks: can information extraction overco... | paper/book | 2011 | DOI | catalina-jemez |
| Montane forest productivity across a semiarid climatic gradient | paper/book | 2020 | DOI | catalina-jemez |
| Mountain‐Block Recharge: A Review of Current Understanding | paper/book | 2019 | DOI | catalina-jemez |
| Multi-scale predictions of massive conifer mortality due to chronic temperature rise | paper/book | 2016 | DOI | catalina-jemez |
| Neoichnology of Semiarid Environments: Soils and Burrowing Animals of the Sonoran Desert, Ar... | paper/book | 2017 | DOI | catalina-jemez |
| Nonstructural leaf carbohydrate dynamics of Pinus edulis during drought-induced tree mortali... | paper/book | 2013 | DOI | catalina-jemez |
| NSF Workshop Report: Towards a Unifying Theory of Critical Zone Structure, Function and Evol... | report/proposal | 2012 | archive page | catalina-jemez, national |
| On the role of aspect to quantify water transit times in small mountainous catchments. | paper/book | 2009 | DOI | catalina-jemez |
| On the Variability of Hydrologic Catchment Response: Inherent and External Controls | dissertation/thesis | 2013 | archive page | catalina-jemez |
| On underestimation of global vulnerability to tree mortality and forest die-off from hotter ... | paper/book | 2015 | DOI | catalina-jemez |
| Patterns of Primary Productivity in a Semiarid Montane Forest | dissertation/thesis | 2018 | archive page | catalina-jemez |
| Photosynthetic phenological variation may promote coexistence among co-dominant tree species... | paper/book | 2017 | DOI | catalina-jemez |
| Pore water chemistry reveals gradients in mineral transformation across a model basaltic hil... | paper/book | 2016 | DOI | catalina-jemez |
| Precipitation thresholds and drought-induced tree die-off: insights from patterns of Pinus e... | paper/book | 2013 | DOI | catalina-jemez |
| Prevalence and magnitude of groundwater use by vegetation: a global stable isotope meta-anal... | paper/book | 2017 | DOI | catalina-jemez, national, sierra |
| Progress on relationships between horizontal and vertical dust flux: Mathematical, empirical... | paper/book | 2014 | DOI | catalina-jemez |
| Quantifying biomass from point clouds by connecting representations of ecosystem structure | dissertation/thesis | 2017 | archive page | catalina-jemez |
| Quantifying catchment scale soil variability in Marshall Gulch, Santa Catalina Mountains Cri... | dissertation/thesis | 2013 | archive page | catalina-jemez |
| Quantifying Catchment-Scale Particulate Organic Matter (POM) Loss Following Fire, Relative t... | dissertation/thesis | 2013 | archive page | catalina-jemez |
| Quantifying mountain block recharge by means of catchment-scale storage-discharge relationsh... | paper/book | 2011 | DOI | catalina-jemez |
| Quantifying regional-scale ecosystem response to changes in precipitation: Not all rain is c... | paper/book | 2011 | DOI | catalina-jemez |
| Quantifying soil and critical zone variability in a forested catchment through digital soil ... | paper/book | 2015 | DOI | catalina-jemez |
| Quantifying the climatic and tectonic controls on hillslope steepness and erosion rates. | paper/book | 2009 | DOI | catalina-jemez |
| Quantifying the influence of deep soil moisture on ecosystem albedo: The role of vegetation | paper/book | 2014 | DOI | catalina-jemez |
| Quantifying the role of hydrologic variability in soil carbon flux | dissertation/thesis | 2012 | archive page | catalina-jemez |
| Quantifying the time scale of elevated geomorphic response following wildfires using multi-t... | paper/book | 2015 | DOI | catalina-jemez |
| Quantifying Topographic and Vegetation Effects on the Transfer of Energy and Mass to the Cri... | paper/book | 2015 | DOI | catalina-jemez |
| Rare earth elements (REY) sorption on soils of contrasting mineralogy and texture | paper/book | 2019 | DOI | catalina-jemez |
| Redistribution of runoff among vegetation patch types: on ecohydrological optimality of herb... | paper/book | 2010 | DOI | catalina-jemez |
| Report on Drilling, Sampling, and Imaging the Depths of the Critical Zone, an NSF Workshop | report/proposal | 2014 | archive page | catalina-jemez, national, sierra |
| Research frontiers for improving our understanding of drought‐induced tree and forest mortality | paper/book | 2018 | DOI | catalina-jemez |
| Second Annual Report for NSF EAR-0724958 entitled “Transformative Behavior of Water, Energy ... | report/proposal | 2011 | archive page | catalina-jemez |
| Sediment capture by vegetation patches: Implications for desertification and increased resou... | paper/book | 2012 | DOI | catalina-jemez |
| Sensitivity of regional evapotranspiration partitioning to variation in woody plant cover: i... | paper/book | 2015 | DOI | catalina-jemez |
| Separating physical and meteorological controls of variable transit times in zero-order catc... | paper/book | 2013 | DOI | catalina-jemez |
| Signatures of Obliquity and Eccentricity in Soil Chronosequences | paper/book | 2018 | DOI | catalina-jemez |
| Soil C and N patterns in a semiarid pinon-juniper woodland: Topography of slope and ephemera... | paper/book | 2012 | DOI | catalina-jemez |
| Soil Fluid Biogeochemical Response to Climatic Events | paper/book | 2019 | DOI | catalina-jemez |
| Soil organic carbon partitioning and Δ 14 C variation in desert and conifer ecosystems of so... | paper/book | 2017 | DOI | catalina-jemez |
| Solid-phase redistribution of rare earth elements in hillslope pedons subjected to different... | paper/book | 2016 | DOI | catalina-jemez |
| Solute inputs to soil and stream waters in a seasonally snow-covered mountain catchment dete... | dissertation/thesis | 2012 | archive page | catalina-jemez |
| Sorptive fractionation of organic matter and formation of organo-hydroxy-alu‐minum complexes... | paper/book | 2013 | DOI | catalina-jemez |
| Study of the Spatiotemporal Characteristics of Meltwater Contribution to the Total Runoff in... | paper/book | 2017 | DOI | catalina-jemez |
| Subsurface Pore Water Contributions to Stream Concentration-Discharge Relations Across a Sno... | paper/book | 2018 | DOI | catalina-jemez |
| Sunlight and soil-litter mixing: drivers of litter decomposition in drylands | paper/book | 2015 | DOI | catalina-jemez |
| Targeting Extreme Events: Complementing Near-Term Ecological Forecasting With Rapid Experime... | paper/book | 2019 | DOI | catalina-jemez |
| Technical Note: A comparison of model and empirical measures of catchment-scale effective en... | paper/book | 2013 | DOI | catalina-jemez |
| Tectonic and structural control of fluvial channel morphology in metamorphic core complexes:... | paper/book | 2009 | DOI | catalina-jemez |
| The effects of a catastrophic forest fire on the biomass of submerged stream macrophytes | paper/book | 2019 | DOI | catalina-jemez |
| The effects of catastrophic wildfire on water quality along a river continuum | paper/book | 2015 | DOI | catalina-jemez |
| The effects of climate and landscape position on chemical denudation and mineral transformat... | paper/book | 2011 | DOI | catalina-jemez |
| The Effects of Climate and Landscape Position on Mineral Weathering and Soil Carbon Storage ... | dissertation/thesis | 2014 | archive page | catalina-jemez |
| The frequency and magnitude of flood discharges and post-wildfire erosion in the southwester... | dissertation/thesis | 2014 | archive page | catalina-jemez |
| The Influence of Climate and Landscape on Hydrological Processes, Vegetation Dynamics, Bioge... | dissertation/thesis | 2015 | archive page | catalina-jemez |
| The influence of Holocene vegetation changes on topography and erosion rates: a case study a... | journal-article | 2016 | DOI | catalina-jemez |
| The influence of snow cover duration on evaporation and soil respiration in mixed-conifer ec... | dissertation/thesis | 2011 | archive page | catalina-jemez |
| The interdependence of mechanisms underlying climate-driven vegetation mortality. | paper/book | 2011 | DOI | catalina-jemez |
| The master transit time distribution of variable flow systems. | paper/book | 2012 | DOI | catalina-jemez |
| The predominance of post-wildfire erosion in the long-term denudation of the Valles Caldera,... | paper/book | 2016 | DOI | catalina-jemez |
| The temperature response surface for mortality risk of tree species with future drought | paper/book | 2017 | DOI | catalina-jemez |
| Thermodynamic constraints on effective energy and mass transfer and catchment function. | paper/book | 2012 | DOI | catalina-jemez |
| Third Annual Report for NSF EAR-0724958 entitled “Transformative Behavior of Water, Energy a... | report/proposal | 2012 | archive page | catalina-jemez |
| Topographic correlations with soil and regolith thickness from shallow-seismic refraction co... | paper/book | 2016 | DOI | catalina-jemez |
| Topography influences species-specific patterns of seasonal primary productivity in a semiar... | journal-article | 2020 | DOI | catalina-jemez |
| Trace element mobilization during incipient bioweathering of four rock types | paper/book | 2018 | DOI | catalina-jemez |
| Tree Morphologic Plasticity Explains Deviation from Metabolic Scaling Theory in Semi-Arid Co... | journal-article | 2016 | DOI | catalina-jemez |
| U-series isotopic signatures of soils and headwater streams in a semi-arid complex volcanic ... | paper/book | 2016 | DOI | catalina-jemez |
| Ubiquitous Fractal Scaling and Filtering Behavior of Hydrologic Fluxes and Storages from A M... | paper/book | 2020 | DOI | catalina-jemez |
| Understanding Critical Zone Evolution through Predicting the Three-Dimensional Soil Chemical... | paper/book | 2018 | DOI | catalina-jemez |
| Understanding ecosystem services from a geosciences perspective | paper/book | 2016 | DOI | catalina-jemez |
| Understanding Quaternary Soil Formation Using a Synthesis of Soil Chronosequences | dissertation/thesis | 2018 | archive page | catalina-jemez |
| Unraveling the mysteries of the large watershed black box: Implications for the streamflow r... | paper/book | 2012 | DOI | catalina-jemez |
| Vegetation source water identification using isotopic and hydrometric observations from a su... | paper/book | 2020 | DOI | catalina-jemez |
| Wet–dry cycles impact DOM retention in subsurface soils | paper/book | 2018 | DOI | catalina-jemez |
| Where is the bottom of a watershed? | paper/book | 2020 | DOI | catalina-jemez |
| Why Do Large‐Scale Land Surface Models Produce a Low Ratio of Transpiration to Evapotranspir... | paper/book | 2018 | DOI | catalina-jemez |

## Sample check (rule 12)

Read in the harvest file, each matched to its row above:

papers with a DOI: How Water, Carbon, and Energy Drive Critical (2011); Critical Zone Biogeochemistry (2020); Quantifying soil and critical zone variabilit (2015)

archive-page papers: The Influence of Climate and Landscape on Hyd (2015); Catalina-Jemez CZO Annual Report 2017 (2017); 2014 Catalina-Jemez CZO Annual Report for NSF (2014)

datasets: CJCZO -- Streamflow / Discharge -- Jemez Rive; CJCZO -- Sap Flow -- Schist -- Marshall Gulch; CJCZO -- Meteorology -- B2 Desert Site -- (20

Also read: the Addendum record and the held-out conference abstract (venue "Abstract EP43A-0866"), and the three annual reports for EAR-1331408 whose titles name the award. Not opened by hand: any page, beyond the doi.org handle answers and HydroShare answers of the link check.
