# Products batch 7: Calhoun (proposal for epic T11)

Date: 30 October 2026. Ticket: CUAHSI/CUAHSI3-website#76 (T11). Branch `task/cz-products-calhoun-proposal`. **Proposal step of "Propose, then apply". Nothing in `content/` has been changed.** Source: `agent/reports/261029_cz-harvest-proposal.json`, every record whose `sites` includes `calhoun`, minus what `content/critical-zone/products.json` already holds (batches 1 to 6, 1,110 records).

Rules carried over (Jordan): talks and posters held out; proposals not in the list; award numbers found only in venue text stay unset and flagged; HydroShare addresses that do not answer are left out; items unrelated to the critical zone held back for you; `provenance` not in the file; one file for the whole list.

## Counts

| | Count |
|---|---|
| Records tagged `calhoun` | 577 (57 datasets, 520 papers) |
| Already in the list (same DOI, HydroShare id or address) | 31 |
| Held out: talks and posters | 315 |
| Held out: HydroShare addresses that did not answer (item 2) | 2 |
| **Proposed for this batch** | **229** (49 datasets, 180 papers) |
| Of the papers: paper/book 153, dissertation/thesis 20, report/proposal 5, journal-article 2 | |
| Papers with a DOI / archive page only | 134 / 46 |
| Datasets with a DOI / HydroShare address with no DOI | 0 / 49 |
| Records with an `awards` value from the harvest's funder data | 2 |
| Records with no year | 49 (all datasets) |
| Records tagged with more than two sites | 1 |

## Link check (before proposing)

Every DOI was looked up at doi.org (handle lookup) and every HydroShare address requested once. Of 134 DOIs and 51 HydroShare addresses, 3 problems: one DOI and 2 HydroShare addresses. The 46 archive-page addresses were not opened (they stop working in August 2027). A resolving DOI is not proof it is the right paper.

## Things I changed or left out (mine; your call on each)

1. **One DOI lost its hyphens (404).** "Changes in stable isotope signatures of soil nitrogen and carbon during 40 years of forest development" (Oecologia, 2006) holds `10.1007/s0044200603667`. Crossref gives `10.1007/s00442-006-0366-7` (title "...stable isotopic signatures...", 8 February 2006), and it answers at doi.org. Proposed with the repaired DOI and address.
2. **2 HydroShare addresses do not answer** (both 404; the other 49 answered 200): "Calhoun Critical Zone Observatory - Soil Moisture - Saturated..." and "Calhoun CZO - Precipitation (2014-2017)". Left out, as for the other batches; listed in the last table. Say "include with the archive page" or "leave out".
3. **Five annual reports cite an award number only in their venue text**: Annual Reports 2015, 2016, 2017 (titled "Human and Natural Forcings of Critical Zone Dynamics and Evolution") and the Calhoun CZO Annual Reports 2018 and 2019, all "NSF Award #1331846". `awards` is left unset on all five, as you decided; the registry has `nsf-1331846`, so mapping them is possible. They join the list of venue-text award numbers for you to revisit (18 after this batch, if the Boulder and IML ones count: 7 + 4 + 2 + 5).
4. **315 talks and posters held out**, per your rule.
5. **20 theses and 5 reports are typed `paper`** (no schema type for them). None of the reports is a proposal to a funder. Two papers have "proposal" in their title and are not proposals: "Human-soil relations are changing rapidly: Proposals from SSSA's cross-divisional...", a journal article, and "Ordering interfluves: A simple proposal for understanding critical zone evolution", a conference paper.
6. **15 papers are dated before 2007**, the start of the CZO program (1958 to 2006; the Calhoun Experimental Forest has a long record). As for Luquillo, I propose **leaving `era` unset on those 15** instead of `czo`. The table marks them.
7. **Three arXiv preprints** are in the batch ("Radiative effects of daily cloud cycle...", "Reinforcement of climate hiatus by decadal modulation of daily cloud cycle", "State dependent jump processes: Ito-Stratonovich interpretations..."). They are preprints, which is the open question on #155 and #158; I propose them loaded and flagged.
8. **Items that look far from a Piedmont critical zone** (kept, flagged, under your rule that archive work is assumed CZ-affiliated; say which to drop): "Development of Martian regolith and bedrock simulants" (Icarus 2020), "Nonlinear dynamics of the CAM circadian rhythm in response to environmental forcing" (2015), "Unified representation of the C3, C4, and CAM photosynthetic pathways..." (2018), "Diurnal cloud cycle biases in climate models" (2017), "Similarities in the evolution of plants and cars" (PLoS ONE 2018, carries `nsf-1331846`), and "Fundamentals of Soil Ecology, 3rd Edition" (a textbook). I read all 180 paper titles; I found no medical item like the two held back from IML.
9. **Two papers carry an `awards` value** from the harvest's funder data (both `nsf-1331846`). One record is tagged with more than two sites (a cross-CZO review).
10. The papers with no DOI (46) were merged by the harvest on title, year and section; not read against their pages. Datasets have no year when the source gave none (C3).

## Proposed items

### Datasets (49)

| Title | Kind | Year | Address | Sites |
|---|---|---|---|---|
| CCZO -- Flux Tower -- Young Pine Forest -- Calhoun CZO Research Area 1 -- (2016-Ongoing) | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- Geomorphology -- Gully Boundaries -- Calhoun CZO -- (2015-2015) | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- GIS/Map Data -- Land Grants, 1749-1851 -- Enoree District, Sumter National Forest --... | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- GIS/Map Data -- Research Areas -- Calhoun Critical Zone Observatory -- (2014-2018) | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- GIS/Map Data -- USFS survey and land use maps for purchase tracts -- Enoree District... | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- GIS/Map Data, LiDAR -- Canopy Height -- Calhoun CZO -- (2014-2014) | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- GIS/Map Data, Photographic Imagery -- 1933 aerial imagery composite -- Calhoun Exper... | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- Groundwater Depth -- 5 minute resolution -- Research area 3 -- (2014-2015) | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- Groundwater Depth -- 70-m deep well -- (2014-2017) | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- Groundwater Depth, Electrical Conductivity -- Calhoun 70-m deep well -- (2014-2017) | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- Hydropedologic Properties -- KSat -- Research Areas 2 and 3 -- (2017-2017) | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- Land Use History -- Agriculture Census -- Union County, SC -- (1850-1850) | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- Land Use History, Photographic Imagery -- Calhoun Experimental Forest, SC -- (1932-1... | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- LiDAR -- Hyperspectral and LiDAR Survey -- Calhoun CZO -- (2014-2014) | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- LiDAR -- LiDAR features for the Calhoun CZO forest plots -- Calhoun CZO -- (2015-2015) | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- LiDAR -- LiDAR Leaf-Off Survey -- Calhoun CZO -- (2016-2016) | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- Meteorology -- Research Area 3 -- (2018-2020) | dataset |  | HydroShare (no DOI) | calhoun |
| CCZO -- Photographic Imagery, Soil Survey -- Soil Pit Profiles -- Calhoun CZO -- (2016-2016) | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- Precipitation -- Calhoun CZO -- (2014-2017) | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- Soil Biogeochemistry -- Calhoun CZO -- (2015-2016) | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- Soil Biogeochemistry -- Carbon isotopes -- R1 -- (2016-2016) | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- Soil Electrical Resistivity -- Calhoun Experimental Watershed 4 -- (2015-2015) | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- Soil Gas -- Calhoun Long Term Soil Experiment -- (1992-1996) | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- Soil Gas -- Research areas 1, 4, 7 -- (2015-2017) | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- Soil Gas, Soil Moisture, Soil Temperature -- Research area 1 -- (2016-2019) | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- Soil Geochemistry -- 70-m deep borehole -- Calhoun Long-Term Soil Experiment -- (201... | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- Soil Geochemistry -- Calhoun 70m deep well -- (2010-2010) | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- Soil Geochemistry -- Calhoun CZO -- (2016-2016) | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- Soil Geochemistry -- Mössbauer spectroscopy -- Calhoun CZO -- (2015-2015) | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- Soil Geochemistry -- Soil organic matter transformations -- Calhoun CZO -- (2015-2015) | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- Soil Mineralogy -- Calhoun CZO -- (2014-2015) | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- Soil Mineralogy, Soil Geochemistry, Photographic Imagery -- Calhoun 70-m deep well -... | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- Soil Moisture -- Calhoun Long-Term Soil Experiment -- (1991-1995) | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- Soil Moisture -- Hydroprobe -- Calhoun Critical Zone Observatory -- (2016-Ongoing) | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- Soil Moisture, Soil Redox Potential -- Calhoun Experimental Watersheds 2, 3, 4 -- (2... | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- Soil Porosity, Soil Invertebrates -- Calhoun CZO -- (2015-2017) | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- Soil Survey -- Hydraulic Conductivity -- Calhoun Long-Term Soil Experiment -- (2011-... | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- Soil Survey -- Soil Texture -- Calhoun CZO -- (2014-2015) | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- Soil Texture -- Argillic Horizon -- Calhoun CZO -- (2016-2017) | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- Soil Texture -- Calhoun CZO -- (2015-2016) | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- Soil Water Chemistry -- Calhoun Long-Term Soil Experiment -- (1991-1994) | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- Stream Water Chemistry -- Calhoun CZO -- (2014-2018) | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- Streamflow / Discharge -- Calhoun CZO -- (2014-2017) | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- Streamflow / Discharge -- Research Area 3, weir 4 -- (2014-2017) | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- Streamflow / Discharge, Electrical Conductivity -- Calhoun Experimental Watershed 4 ... | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- Streamflow / Discharge, Precipitation -- Calhoun Experimental Forest, SC -- (1949-1962) | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- Vegetation -- Leaf Area Index -- Calhoun CZO -- (2014-2014) | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- Vegetation -- Litterfall -- Calhoun CZO -- (2014-2019) | dataset |  | HydroShare (no DOI) | calhoun, national |
| CCZO -- Vegetation -- Tree Survey -- Calhoun CZO -- (2014-2021) | dataset |  | HydroShare (no DOI) | calhoun, national |

### Papers (180)

Papers dated before 2007 are marked "(pre-2007)" in the Year column.

| Title | Kind | Year | Address | Sites |
|---|---|---|---|---|
| 'One Physical System': Tansley's ecosystem as Earth's critical zone | paper/book | 2015 | DOI | calhoun |
| A class of exact solutions of the Boussinesq equation for horizontal and sloping aquifers | paper/book | 2018 | DOI | calhoun |
| A correlative bimodal surface imaging method to assess hyphae-rock interactions | paper/book | 2019 | archive page | calhoun, catalina-jemez |
| A coupled force-restore model of surface temperature and soil moisture using the maximum ent... | paper/book | 2016 | DOI | calhoun |
| A coupled microscopy approach to assess the nano-landscape of weathering | paper/book | 2019 | DOI | calhoun, catalina-jemez |
| A dynamical system approach to soil salinity and sodicity | paper/book | 2015 | DOI | calhoun |
| A dynamical systems framework for crop models: Toward optimal fertilization and irrigation s... | paper/book | 2017 | DOI | calhoun |
| A HYDRUS 2D evaluation of altered depths to the argillic horizon due to erosion: What impact... | paper/book | 2017 | archive page | calhoun |
| A Mean Field Approach to Watershed Hydrology | dissertation/thesis | 2016 | archive page | calhoun |
| A modeling study of land surface processes and surface energy budgets using the maximum entr... | dissertation/thesis | 2017 | archive page | calhoun |
| A pedology and pedostratigraphy for the Anthropocene | paper/book | 2019 | DOI | calhoun |
| A simple method for estimating the influence of eroding soil profiles on atmospheric CO2 | paper/book | 2010 | DOI | calhoun |
| Accumulation and decay of woody detritus in a humid subtropical secondary pine forest | paper/book | 2013 | DOI | calhoun |
| Aging exo-enzymes can create temporally shifting, temperature-dependent resource landscapes ... | paper/book | 2016 | DOI | calhoun |
| An Ecosystem Approach to Dead Plant Carbon over 50 years of Old-Field Forest Development | dissertation/thesis | 2011 | archive page | calhoun |
| An Observational and Modeling Study of the Energy, Water, and Carbon Cycle at Calhoun Critic... | dissertation/thesis | 2018 | archive page | calhoun |
| Analysis and Modeling of Landscape Topography: Statistical Description and Evolution Under N... | dissertation/thesis | 2018 | archive page | calhoun |
| Annual Report 2015: Human and Natural Forcings of Critical Zone Dynamics and Evolution at th... | report/proposal | 2015 | archive page | calhoun |
| Annual Report 2016: Human and Natural Forcings of Critical Zone Dynamics and Evolution at th... | report/proposal | 2016 | archive page | calhoun |
| Annual Report 2017: Human and Natural Forcings of Critical Zone Dynamics and Evolution at th... | report/proposal | 2017 | archive page | calhoun |
| Ansichten der Calzone: Views of the Calhoun Critical Zone Observatory | paper/book | 2020 | archive page | calhoun |
| Application of the maximum entropy production model of evapotranspiration over partially veg... | paper/book | 2018 | DOI | calhoun |
| Approximate analytical solution to diurnal atmospheric boundary-layer growth under well-wate... | paper/book | 2015 | DOI | calhoun |
| Assessment of Pedogenic Gibbsite as a Paleo-PCO2 Proxy Using a Modern Ultisol | paper/book | 2014 | DOI | calhoun |
| Beyond the SCS-CN method: Theoretical framework for spatially-lumped rainfall-runoff response | paper/book | 2016 | DOI | calhoun |
| Bioavailability of slowly cycling soil phosphorus: major restructuring of soil P fractions o... | paper/book | 2006 (pre-2007) | DOI | calhoun |
| Bistable plant-soil dynamics and biogenic controls on the soil production function | paper/book | 2016 | DOI | calhoun |
| Boom and bust carbon-nitrogen dynamics during reforestation | paper/book | 2017 | DOI | calhoun |
| Calhoun CZO Annual Report 2018 | report/proposal | 2018 | archive page | calhoun |
| Calhoun CZO Annual Report 2019 | report/proposal | 2019 | archive page | calhoun |
| Carbon and oxygen isotope composition in soil carbon dioxide within deep Ultisols at the Cal... | paper/book | 2018 | DOI | calhoun |
| Carbon availability modifies temperature responses of heterotrophic microbial respiration, c... | paper/book | 2016 | DOI | calhoun |
| Changes in stable isotope signatures of soil nitrogen and carbon during 40 years of forest d... | paper/book | 2006 (pre-2007) | DOI | calhoun |
| Channelization cascade in landscape evolution | paper/book | 2020 | DOI | calhoun |
| Chapter 19. Long-term forest soils research: lessons learned from the US experience. | paper/book | 2019 | archive page | calhoun |
| Chapter 4. History of forest soils knowledge and research | paper/book | 2019 | archive page | calhoun |
| Clays in the Critical Zone | paper/book | 2018 | DOI | calhoun, national |
| Clays in the Critical Zone: An Introduction | paper/book | 2016 | DOI | calhoun |
| Colonization of the Americas, ‘Little Ice Age’ climate, and bomb-produced carbon: Their role... | paper/book | 2015 | DOI | calhoun |
| Comment on “Storage selection functions: A coherent framework for quantifying how catchments... | paper/book | 2016 | DOI | calhoun |
| Coupling between biota and earth materials in the critical zone | paper/book | 2007 | DOI | calhoun |
| Coupling meteoric 10 Be with pedogenic losses of 9 Be to improve soil residence time estimat... | paper/book | 2012 | DOI | calhoun |
| Creating deep soil core monoliths: Beyond the solum | paper/book | 2015 | archive page | calhoun |
| Cultivating a sense of place in the southern Piedmont using Esri Story Maps | paper/book | 2017 | archive page | calhoun |
| Depth to the Argillic Horizon on Historically Farmed Soil in the Southeastern USA Piedmont: ... | dissertation/thesis | 2017 | archive page | calhoun |
| Development and deployment of a field-portable soil O2 and CO2 gas analyzer and sampler | paper/book | 2019 | DOI | calhoun |
| Development of Martian regolith and bedrock simulants: Potential and limitations of Martian ... | paper/book | 2020 | DOI | calhoun |
| Diachronous beginnings of the Anthropocene: The lower bounding surface of anthropogenic depo... | paper/book | 2015 | DOI | calhoun |
| Disputed start dates for Anthropocene | paper/book | 2015 | DOI | calhoun |
| Distinct contributions of eroding and depositional profiles to land-atmosphere CO2 exchange ... | paper/book | 2019 | DOI | calhoun |
| Distribution and diversity of semiaquatic Sparganophilidae earthworms in the Southern Appala... | dissertation/thesis | 2018 | archive page | calhoun |
| Diurnal cloud cycle biases in climate models | paper/book | 2017 | DOI | calhoun |
| Drivers and Variability of Iron Reduction in Upland Soils | dissertation/thesis | 2017 | archive page | calhoun |
| Dynamic evolution of the soil pore size distribution and its connection to soil management a... | paper/book | 2019 | DOI | calhoun |
| Ecohydrological flow networks in the subsurface | paper/book | 2014 | DOI | calhoun |
| Ecohydrological model for the quantification of ecosystem services provided by urban street ... | paper/book | 2018 | DOI | calhoun |
| Ecohydrological modeling in agroecosystems: Examples and challenges | paper/book | 2015 | DOI | calhoun |
| Effects of Land-Use History on Soil Macro- and Trace Elements in the Southern Piedmont of No... | dissertation/thesis | 2009 | archive page | calhoun |
| Effects of land-use history on soil spatial heterogeneity of macro- and trace elements in th... | paper/book | 2010 | DOI | calhoun |
| Effects of two-century land use changes on soil iron crystallinity and accumulation in South... | paper/book | 2012 | archive page | calhoun |
| Elemental translocation and loss from three highly weathered soil–bedrock profiles in the so... | paper/book | 2005 (pre-2007) | DOI | calhoun |
| Eroded Landscapes: Agricultural and Environmental Change in the United States Piedmont, 1790... | dissertation/thesis | 2018 | archive page | calhoun |
| Evaluating the effect of nutrient redistribution by animals on the phosphorus cycle of lowla... | paper/book | 2018 | DOI | calhoun |
| Evolution of Soil, Ecosystem, and Critical Zone Research at the USDA FS Calhoun Experimental... | paper/book | 2014 | DOI | calhoun |
| Exploring the role of domain partitioning on efficiency of parallel distributed hydrologic m... | paper/book | 2015 | DOI | calhoun, shale-hills |
| Ferrous iron oxidation under varying pO2 levels: The effect of Fe(III)/Al(III) oxide mineral... | paper/book | 2018 | DOI | calhoun |
| Forest soil carbon and nitrogen cycles under biomass harvest: Stability, transient response,... | paper/book | 2016 | DOI | calhoun |
| Four-decade responses of soil trace elements to an aggrading old-field forest: B, Mn, Zn, Cu... | paper/book | 2008 | DOI | calhoun |
| Framework for event-based semidistributed modeling that unifies the SCS-CN method, VIC, PDM,... | paper/book | 2016 | DOI | calhoun |
| From turbulence to landscapes: Logarithmic mean profiles in bounded complex systems | paper/book | 2020 | DOI | calhoun |
| Fundamentals of Soil Ecology, 3rd Edition | paper/book | 2017 | archive page | calhoun |
| Game changer in soil science. The Anthropocene in soil science and pedology | paper/book | 2020 | DOI | calhoun |
| Geology of the Calhoun Critical Zone Observatory | dissertation/thesis | 2020 | archive page | calhoun |
| Geostatistical analysis of historical contingency and land use footprints in the prehistoric... | paper/book | 2019 | DOI | calhoun |
| Global nitrogen budgets in cereals: A 50-year assessment for maize, rice, and wheat producti... | paper/book | 2016 | DOI | calhoun |
| Gradient‐based inverse estimation for a rainfall‐runoff model | paper/book | 2019 | DOI | calhoun |
| Historical land use dynamics in the highly degraded landscape of the Calhoun Critical Zone O... | paper/book | 2017 | DOI | calhoun |
| How to estimate statistically detectable trends in a time series: A study of soil carbon and... | paper/book | 2019 | DOI | calhoun |
| Human-soil relations are changing rapidly: Proposals from SSSA's cross-divisional soil chang... | paper/book | 2011 | DOI | calhoun |
| Humanity's transformation of Earth's soil: Pedology's new frontier | paper/book | 2007 | DOI | calhoun |
| Hydro-geomorphic perturbations on the soil-atmosphere CO2 exchange: How (un)certain are our ... | paper/book | 2017 | DOI | calhoun |
| Hydrologic Functioning of Low-Relief, Deep Soil Watersheds and Hydrologic Legacies of Intens... | dissertation/thesis | 2020 | archive page | calhoun |
| Hydrologic transport of dissolved inorganic carbon and its control on chemical weathering | paper/book | 2017 | DOI | calhoun |
| Hydrological spaces of long-term catchment water balance | paper/book | 2019 | DOI | calhoun |
| Impact of gully incision on hillslope hydrology | paper/book | 2020 | DOI | calhoun |
| Impacts of Climate Variation and Change on Hydrologic and Vegetation Dynamics | dissertation/thesis | 2019 | archive page | calhoun |
| Increasing atmospheric humidity and CO 2 concentration alleviate forest mortality risk | paper/book | 2017 | DOI | calhoun |
| Influences of Native American land use on the Colonial Euro-American settlement of the South... | paper/book | 2018 | DOI | calhoun |
| Integration of fuzzy logic and image analysis for the detection of gullies in the Calhoun Cr... | paper/book | 2017 | DOI | calhoun |
| Intercomparing varied erosion, deposition and transport process representations for simulati... | paper/book | 2019 | DOI | calhoun |
| Interdisciplinary Sciences in a Global Network of Critical Zone Observatories. | paper/book | 2011 | DOI | calhoun, shale-hills, sierra |
| Investigating microbial transformations of soil organic matter: synthesizing knowledge from ... | paper/book | 2015 | DOI | calhoun |
| Jump processes with deterministic and stochastic controls | paper/book | 2019 | DOI | calhoun |
| Land and atmospheric controls on initiation and intensity of moist convection: CAPE dynamics... | paper/book | 2015 | DOI | calhoun |
| Land-use legacy dynamics in decades- and centuries-old soils | dissertation/thesis | 2020 | archive page | calhoun |
| Learning from the "deep changes in the land": The Critical Zone perspective in environmental... | paper/book | 2016 | archive page | calhoun, national |
| Legacies of agriculture and forest regrowth in the nitrogen of old-field soils | paper/book | 2000 (pre-2007) | DOI | calhoun |
| Limited carbon contents of centuries old soils forming in legacy sediment | paper/book | 2020 | DOI | calhoun |
| Linear layout of multiple flow-direction networks for landscape-evolution simulations | paper/book | 2020 | archive page | calhoun |
| Linking parametric and water-balance models of the Budyko and Turc spaces | paper/book | 2019 | DOI | calhoun |
| Links between physical and chemical weathering inferred from a 65-m-deep borehole through Ea... | paper/book | 2019 | DOI | calhoun |
| Long-term land-use effects on soil invertebrate communities in Southern Piedmont soils, USA | paper/book | 2006 (pre-2007) | DOI | calhoun |
| Long-term soil experiments: Keys to managing Earth's rapidly changing ecosystems | paper/book | 2007 | DOI | calhoun |
| Long-term soil potassium availability from a Kanhapludult to an aggrading loblolly pine ecos... | paper/book | 2000 (pre-2007) | archive page | calhoun |
| Looking up or looking down? Hydrologic and atmospheric perspectives on precipitation and eva... | paper/book | 2019 | DOI | calhoun |
| Loss of deep roots limits biogenic agents of soil development that are only partially restor... | paper/book | 2018 | DOI | calhoun |
| Macro to Micro Legacies of Landuse at the Calhoun Critical Zone Observatory | dissertation/thesis | 2018 | archive page | calhoun |
| Making the case for a formal Anthropocene Epoch: an analysis of ongoing critiques | paper/book | 2017 | DOI | calhoun |
| Mapping depth to the argillic horizon on historically farmed soil currently under forests | paper/book | 2020 | DOI | calhoun |
| Micro-topographic roughness analysis (MTRA) highlights minimally eroded terrain in a landsca... | paper/book | 2019 | DOI | calhoun |
| Model-based analysis of the influence of catchment properties on hydrologic partitioning acr... | paper/book | 2015 | DOI | calhoun |
| Modeling regional crop yield and irrigation demand using SMAP type of soil moisture data | paper/book | 2015 | DOI | calhoun |
| Modifications of 2:1 clay minerals in a kaolinite dominated Ultisol under changing land-use ... | paper/book | 2018 | DOI | calhoun |
| Monitoring Earth's Critical Zone | paper/book | 2009 | DOI | calhoun |
| Multiple outflows, spatial components, and nonlinearities in age theory | paper/book | 2017 | DOI | calhoun |
| Natural, incidental, and engineered nanomaterials and their impacts on the Earth system | journal-article | 2019 | DOI | calhoun |
| Nonlinear dynamics of the CAM circadian rhythm in response to environmental forcing | paper/book | 2015 | DOI | calhoun |
| On the dynamic smoothing of mountains | paper/book | 2017 | DOI | calhoun |
| On the probabilistic structure of water age | paper/book | 2015 | DOI | calhoun |
| On the role of spatial resolution on snow estimates using a process‐based snow model across ... | paper/book | 2019 | DOI | calhoun |
| On the theory of drainage area for regular and non-regular points | paper/book | 2018 | DOI | calhoun |
| Optimal control solutions to sodic soil reclamation | paper/book | 2016 | DOI | calhoun |
| Ordering interfluves: A simple proposal for understanding critical zone evolution | paper/book | 2014 | DOI | calhoun |
| Pedogenesis and Anthropedogenesis on the Southern Piedmont | dissertation/thesis | 2014 | archive page | calhoun |
| Persistent anthropogenic legacies structure depth dependence of regenerating rooting systems... | paper/book | 2020 | DOI | calhoun |
| Projected changes of rainfall seasonality and dry spells in a high greenhouse gas emissions ... | paper/book | 2016 | DOI | calhoun |
| Quantification of Mixed-Layer Clays in Multiple Saturation States Using NEWMOD2: Implication... | paper/book | 2020 | DOI | calhoun |
| Radiative effects of daily cloud cycle: general methodology and application to cloud fraction | paper/book | 2018 | archive page | calhoun |
| Radiocarbon Age of Soil Organic Matter Fractions Buried by Tephra in Alaska | paper/book | 2017 | DOI | calhoun |
| Rainfall intensification increases the contribution of rewetting pulses to soil heterotrophi... | paper/book | 2020 | DOI | calhoun |
| Rapid accumulation and turnover of soil carbon in a re-establishing forest | paper/book | 1999 (pre-2007) | DOI | calhoun |
| Rare earth | paper/book | 2014 | DOI | calhoun |
| Redoximorphic Bt horizons of the Calhoun CZO soils exhibit depth-dependent iron-oxide crysta... | paper/book | 2019 | DOI | calhoun |
| Reduced resilience as an early warning signal of forest mortality | paper/book | 2019 | DOI | calhoun |
| Reinforcement of climate hiatus by decadal modulation of daily cloud cycle | paper/book | 2018 | archive page | calhoun |
| Revisiting the global surface energy budgets with maximum-entropy-production model of surfac... | paper/book | 2017 | DOI | calhoun |
| Rhizogenic Fe–C redox cycling: a hypothetical biogeochemical mechanism that drives crustal w... | paper/book | 2008 | DOI | calhoun |
| Role of meteorological controls on interannual variations in wet‐period characteristics of w... | paper/book | 2016 | DOI | calhoun |
| Seasonal and spatial variation in the potential for iron reduction in soils of the Southeast... | paper/book | 2019 | DOI | calhoun |
| Similarities in the evolution of plants and cars | journal-article | 2018 | DOI | calhoun |
| Simulating the spatio-temporal dynamics of soil erosion, deposition, and yield using a coupl... | paper/book | 2016 | DOI | calhoun |
| Simultaneously quantifying ferrihydrite and goethite in natural sediments using the method o... | paper/book | 2018 | DOI | calhoun |
| Soil acidification induced by elevated atmospheric CO 2 | paper/book | 2004 (pre-2007) | DOI | calhoun |
| Soil acidification, soil potassium availability, and biogeochemistry of aluminum and silicon... | dissertation/thesis | 1996 (pre-2007) | archive page | calhoun |
| Soil carbon turnover in a recovering temperate forest | paper/book | 1995 (pre-2007) | archive page | calhoun |
| Soil chemical change during three decades in an old-field Loblolly Pine (Pinus taeda L.) eco... | paper/book | 1994 (pre-2007) | DOI | calhoun |
| Soil fauna and their potential responses to warmer soil | paper/book | 2019 | archive page | calhoun |
| Soil fauna responses to natural disturbances, invasive species, and global climate change: C... | paper/book | 2017 | DOI | calhoun |
| Soil in the Anthropocene | paper/book | 2015 | DOI | calhoun |
| Soil production and the soil geomorphology legacy of Grove Karl Gilbert | paper/book | 2020 | DOI | calhoun |
| State dependent jump processes: Ito–Stratonovich interpretations, potential, and transient s... | paper/book | 2018 | archive page | calhoun |
| Stochastic rainfall-runoff model with explicit soil moisture dynamics | paper/book | 2015 | DOI | calhoun |
| Stochastic soil water balance under seasonal climates | paper/book | 2015 | DOI | calhoun |
| Stratigraphic and Earth system approaches to defining the Anthropocene | paper/book | 2016 | DOI | calhoun |
| Substrate quality influences organic matter accumulation in the soil silt and clay fraction | paper/book | 2016 | DOI | calhoun |
| Surficial gains and subsoil losses of soil carbon and nitrogen during secondary forest devel... | paper/book | 2015 | DOI | calhoun |
| Temperature responses of microbial soil organic matter decomposition and associated respirat... | dissertation/thesis | 2017 | archive page | calhoun |
| Temperature-mediated changes in microbial carbon use efficiency and 13C discrimination | paper/book | 2016 | DOI | calhoun |
| The Anthropocene is functionally and stratigraphically distinct from the Holocene | paper/book | 2016 | DOI | calhoun |
| The Calhoun Experimental Forest | paper/book | 1958 (pre-2007) | archive page | calhoun |
| The Doomsday Equation and 50 years beyond: new perspectives on the human‐water system | paper/book | 2015 | DOI | calhoun |
| The effect of accelerated soil erosion on hillslope morphology | paper/book | 2019 | DOI | calhoun |
| The energy side of Budyko: Surface‐energy partitioning from hydrological observations | paper/book | 2019 | DOI | calhoun |
| The formation of clay‐enriched horizons by lessivage | paper/book | 2018 | DOI | calhoun |
| The Multiscale Signature of Ecohydrological Fluctuations on Soil Biogeochemical Cycles | dissertation/thesis | 2019 | archive page | calhoun |
| The role of vegetation on gully erosion stabilization at a severely degraded landscape: A ca... | paper/book | 2018 | DOI | calhoun |
| Three decades of observed soil acidification at the Calhoun Experimental Forest: Has acid ra... | paper/book | 1998 (pre-2007) | archive page | calhoun |
| Topographic variability and the influence of soil erosion on the carbon cycle | paper/book | 2016 | DOI | calhoun |
| Trophic dynamics in a simple experimental ecosystem: Interactions among centipedes, Collembo... | paper/book | 2017 | DOI | calhoun |
| Understanding Soil Change: Soil Sustainability over Millennia, Centuries, and Decades | paper/book | 2001 (pre-2007) | archive page | calhoun |
| Understanding the Role of Model Structure and Watershed Properties on Streamflow Response | dissertation/thesis | 2017 | archive page | calhoun |
| Unified representation of the C3, C4, and CAM photosynthetic pathways with the Photo3 model | paper/book | 2018 | DOI | calhoun |
| Using nested discretization for a detailed yet computationally efficient simulation of local... | paper/book | 2018 | DOI | calhoun |
| Variational analysis of landscape elevation and drainage networks | paper/book | 2020 | DOI | calhoun |
| Variations in streamflow response to large hurricane-season storms in a southeastern U.S. wa... | paper/book | 2015 | DOI | calhoun |
| Wetness controls on global chemical weathering | paper/book | 2020 | DOI | calhoun |
| What regulates soil CO 2 concentrations? A modeling approach to CO 2 diffusion in deep soil ... | paper/book | 2005 (pre-2007) | DOI | calhoun |
| When did the Anthropocene begin? A mid-twentieth century boundary level is stratigraphically... | paper/book | 2015 | DOI | calhoun |
| Working across scales to project soil biogeochemical responses to climate | paper/book | 2020 | archive page | calhoun |
| “The Changing Model of Soil” Revisited | paper/book | 2012 | DOI | calhoun |

## Left out for the HydroShare reason (item 2)

| Title | HydroShare address | Answer |
|---|---|---|
| Calhoun Critical Zone Observatory - Soil Moisture - Saturated Hydra... | https://www.hydroshare.org/resource/8fa362a534d2494e923c231aa0cc10a5/ | 404 |
| Calhoun CZO - Precipitation (2014-2017) | https://www.hydroshare.org/resource/48543185f7bd414b9f883209dc7edef6/ | 404 |

## Sample check (rule 12)

Read in the harvest file, each matched to its row above:

papers with a DOI: Investigating microbial transformations of so (2015); Ordering interfluves: A simple proposal for u (2014); A pedology and pedostratigraphy for the Anthr (2019)

archive-page papers: Linear layout of multiple flow-direction netw (2020); Creating deep soil core monoliths: Beyond the (2015); The Multiscale Signature of Ecohydrological F (2019)

datasets: CCZO -- GIS/Map Data -- Research Areas -- Cal; CCZO -- Hydropedologic Properties -- KSat --; CCZO -- Groundwater Depth -- 5 minute resolut

Also read: the repaired Oecologia record (DOI and address `10.1007/s00442-006-0366-7`), and one pre-2007 paper (The Calhoun Experimental Forest, 1958) with no `era`. Not opened by hand: the repaired DOI's page, beyond the Crossref lookup and the doi.org handle answer.
