# Products batch 5: Boulder Creek (proposal for epic T11)

Date: 30 October 2026. Ticket: CUAHSI/CUAHSI3-website#76 (T11). Branch `task/cz-products-boulder-proposal`. **Proposal step of "Propose, then apply". Nothing in `content/` has been changed.** Source: `agent/reports/261029_cz-harvest-proposal.json`, every record whose `sites` includes `boulder`, minus what `content/critical-zone/products.json` already holds (batches 1 to 4, 588 records).

Rules carried over (Jordan): talks and posters held out; proposals not in the list; award numbers found only in venue text stay unlinked and flagged; HydroShare addresses that do not answer are left out; `provenance` not in the file; one file for the whole list.

## Counts

| | Count |
|---|---|
| Records tagged `boulder` | 360 (77 datasets, 283 papers) |
| Already in the list (same DOI, HydroShare id or address) | 34 |
| Held out: talks and posters | 55 |
| Held out: HydroShare addresses that did not answer (item 2) | 8 |
| Left out: a proposal (item 3) | 1 |
| **Proposed for this batch** | **262** (64 datasets, 198 papers) |
| Of the papers: paper/book 155, dissertation/thesis 17, undergraduate thesis 9, report/proposal 10, journal-article 6, no archive type 1 | |
| Papers with a DOI / archive page only | 130 / 68 |
| Datasets with a DOI / HydroShare address with no DOI | 2 / 62 |
| Records with an `awards` value from the harvest's funder data | 6 |
| Records with no year | 62 (62 datasets) |
| Records tagged with more than two sites | 14 |

## Link check (before proposing)

Every DOI was looked up at doi.org (handle lookup) and every HydroShare address requested once. Of 135 DOIs and 72 HydroShare addresses, 11 problems: 3 DOIs and 8 HydroShare addresses; each is handled below. The 68 archive-page addresses were not opened (they stop working in August 2027). A resolving DOI is not proof it is the right paper.

## Things I changed or left out (mine; your call on each)

1. **Three Geological Society of America chapter DOIs lost their closing bracket (all 404).** Crossref gives the repair and the repaired DOI answers at doi.org; proposed with the repaired DOI and address.
   - "Critical zone evolution: Climate and exhumation in the Colorado Front Range" (2013): `10.1130/2013.0033(01` to `10.1130/2013.0033(01)`. Crossref's title carries stray markup (`<subtitle>`) but is the same text.
   - "Facing reality: Late Cenozoic evolution of smooth peaks, glacially ornamented valleys, and deep river gorges of Colorado's Front Range" (2006): `10.1130/2006.2398(25` to `10.1130/2006.2398(25)`.
   - "The 2016 Kirk Bryan field trip: Quaternary landslides, fluvial terraces, and recent geomorphic events along the Colorado Front Range" (2016): `10.1130/2016.0044(12` to `10.1130/2016.0044(12)`. Crossref's title is shortened to "The 2016 Kirk Bryan field trip".
2. **Eight HydroShare addresses that do not answer** (six 403, two 404; the other 64 answered 200). Left out, as for Reynolds; the archive's dataset page would stand in if you want them (it works until August 2027). A 403 may mean the resource is private, not gone; I did not find out. They are listed in the last table. Say "include with the archive page" or "leave out".
3. **A proposal left out.** "Boulder Creek CZO II: Evolution, Form, Function, and Future of the Critical Zone" (2013) is marked "Submitted to NSF Solicitation NSF 12-575". Under your rule it is not loaded.
4. **55 talks and posters held out**, per your rule.
5. **26 theses and 10 reports are typed `paper`** (the schema has no type for them). The reports are Boulder Creek CZO annual reports (2008 to 2019); none is a proposal. The theses include 9 undergraduate and honors theses.
6. **Award numbers.** 6 papers carry an `awards` value from the harvest's funder data (not venue text), for example `nsf-0724960`; the validator checks the ids. Two annual reports cite an award number only in their venue text ("NSF Award #724960" on the 2009 report, "NSF Award #1331828" on the 2019 report); `awards` is left unset on both and they join your list to revisit.
7. **Kinds that may not belong:** "Corrigendum: The role of precipitation type, intensity, and spatial distribution..." is a correction notice for the paper that follows it in the list (both are proposed); "Force of nature: A monumental flood gives CU-Boulder researchers..." is a university magazine piece; one record, "Bedrock incision and gravel deposition along the rivers in the...", is a senior thesis the archive gave no type. I read the titles of all 198 papers for topics unrelated to the critical zone and found none that I would hold back (the microbial and lichen papers are soil and rock-surface ecology at the observatory).
8. **14 records are tagged with more than two sites** (the cross-CZO items, for example flux-tower and network datasets); each is kept once with all its sites.
9. The papers with no DOI (68) were merged by the harvest on title, year and section; not read against their pages. Datasets have no year when the source gave none (C3).

## Proposed items

### Datasets (64)

| Title | Kind | Year | Address | Sites |
|---|---|---|---|---|
| BCCZO -- Air Temperature -- B1 Air Temp & Relative Humidity (B1_TempRH) -- B1 -- (2012-2015) | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Air Temperature, Meteorology -- North-Facing Meteorological Tower (GGL_NF_Met) -- G... | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Air Temperature, Meteorology -- South-Facing Meteorological Tower (GGL_SF_Met) -- G... | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Air Temperature, Solar Radiation -- B1 Historical AirT Site (B1_Hist_AirT) -- B1 Hi... | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Climate, Air Temperature, Electrical Conductivity, Snow Depth -- B1 Meteorological ... | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Climate, Meteorology -- B1 Historical Meteorological Site (B1_Hist_Met) -- B1 Histo... | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Diatoms -- Didymosphenia Geminata -- Boulder Creek -- (2008-2010) | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Dissolved Organic Matter (DOM), Lysimeter Water Samples Chemistry, Groundwater Chem... | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Electrical Conductivity -- GGL_SW_Conductivity, GGU_SW_Conductivity -- Gordon Gulch... | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Electrical Conductivity, Soil Moisture, Soil Temperature -- North-Facing Middle Pit... | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Electrical Conductivity, Soil Moisture, Soil Temperature -- South-Facing Middle Pit... | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Geology, Geomorphology -- Boulder Creek catchment and vicinity -- (2006-2006) | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Geophysics -- Electrical Resistivity -- Betasso, Garden Gulch, Green Lakes Valley -... | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Groundwater Chemistry -- (BT_GW_1) -- Betasso -- (2013-2017) | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Groundwater Chemistry -- (GGU_GW_1-6_Array) -- Gordon Gulch: Upper -- (2011-2020) | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Land Cover -- Betasso -- (2008-2008) | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Land Cover -- Gordon Gulch -- (2008-2008) | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Land Cover -- Green Lakes Valley -- (2008-2008) | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- LiDAR -- Derived DEM from LIDAR -- Boulder Creek -- (2010-2010) | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- LiDAR -- Point Cloud Data at OpenTopography.com (Snow off) -- Boulder Creek -- (201... | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Meteorology, Air Temperature -- (BT_Met) -- Betasso -- (2009-2020) | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Photographic Imagery -- (BT_Camera_Array) -- Betasso -- (2014-2020) | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Photographic Imagery -- (GG_Camera_Array) -- Gordon Gulch -- (2009-2020) | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Photographic Imagery -- Betasso, Gordon Gulch, Green Lakes Valley -- All Time lapse... | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Precipitation -- B1 Historical Precipitation Site (B1_Hist_Precip) -- B1 Historical... | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Precipitation -- Water Chemistry (BT-GGU_P_Canopy-Open) -- Betasso & Gordon Gulch -... | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Snow Depth -- Snow Pole Transects (manual) (GGL_SP_1-10_Tran) -- Gordon Gulch: Lowe... | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Snow Depth -- Snow Pole Transects (manual) (GGU_SP_1-10_Tran) -- Gordon Gulch: Uppe... | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Snow Depth, Air Temperature -- Judd Sensors (GGL_NF_SP3-4SF_SP10_SD_Array) -- Gordo... | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Snow Depth, Air Temperature -- Judd Snow Sensors (BT_Gully_SD_1-5_Array) -- Betasso... | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Snow Pits -- Snow Pit Density & Stratigraphy (BT_SN) -- Betasso -- (2011-2014) | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Snow Pits -- Snow Pit Stratigraphy, Density - SWE (GG_SN_Array) -- Gordon Gulch -- ... | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Snow Survey -- Gordon Gulch -- (2008-2009) | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Soil Geochemistry -- XRD and XRF analysis from shallow subsurface -- Gordon Gulch: ... | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Soil Microbes -- Gordon Gulch -- (2011-2011) | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Soil Moisture, Water Potential -- BT_Borrow_SLmstwrptn -- Betasso -- (2010-2020) | dataset | 2021 | DOI | boulder, national |
| BCCZO -- Soil Moisture, Water Potential -- Gully Site, Soil Pit (BT_Gully_SLmstWRPtn) -- Bet... | dataset | 2021 | DOI | boulder, national |
| BCCZO -- Soil Respiration -- (BT-GG_Flux_Array) -- Betasso & Gordon Gulch -- (2012-2013) | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Soil Temperature -- (GGU_Hobo_Array) -- Gordon Gulch: Upper -- (2008-2020) | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Soil Temperature, Soil Moisture -- (GLV_Catena_1-5_Array) -- Green Lakes Valley -- ... | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Soil Temperature, Soil Moisture -- at various depths (GGU_NF_SP4_SLTmpSLMist_Array)... | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Soil Temperature, Soil Moisture -- Soil Sensors (GGL_SPTran_SLTmpSLMist_Array) -- G... | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Soil Water Chemistry -- (GGL_LW_Array) -- Gordon Gulch: Lower -- (2011-2011) | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Stream Water Chemistry, Surface Water Chemistry -- (Isaac Bukoski Thesis) -- Boulde... | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Streamflow / Discharge -- (GGL_SW_0_Dis) -- Gordon Gulch: Lower -- (2011-2019) | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Streamflow / Discharge -- (GGU_SW_0_Dis) -- Gordon Gulch: Upper -- (2009-2014) | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Streamflow / Discharge -- Colorado Division of Water Resources Stream Gauges -- Bou... | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Streamflow / Discharge -- Manual (BT_SW_0_ManDis) -- Betasso -- (2013-2019) | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Streamflow / Discharge -- Manual (GGL_SW_0_ManDis) -- Gordon Gulch: Lower -- (2013-... | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Streamflow / Discharge -- Manual (GGU_SW_0_ManDis) -- Gordon Gulch: Upper -- (2013-... | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Surface Water Chemistry -- (BC_SW_Array) -- Boulder Creek CZO -- (2008-2020) | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Surface Water Chemistry -- (BT_SW_0) -- Betasso -- (2008-2019) | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Surface Water Chemistry -- (GG_IS_Array) -- Gordon Gulch -- (2010-2018) | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Surface Water Chemistry -- (GG_SW_Array) -- Gordon Gulch -- (2008-2020) | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Tree Growth & Physiology -- Gordon Gulch -- (2011-2012) | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Well Water Levels -- (BT_GW_1_Pducer) -- Betasso -- (2013-2020) | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Well Water Levels -- (GGU_GW_1,2,6_Pducer_Tran) -- Gordon Gulch: Upper -- (2011-2020) | dataset |  | HydroShare (no DOI) | boulder, national |
| BCCZO -- Well Water Levels -- GGU_Slug_Test -- Gordon Gulch Upper -- (2016-2016) | dataset |  | HydroShare (no DOI) | boulder, national |
| Cross-CZO -- Air Temperature, Flux Tower, Meteorology -- NADP and NOAA or other weather stat... | dataset |  | HydroShare (no DOI) | boulder, calhoun, catalina-jemez, luquillo, national, shale-hills |
| Cross-CZO -- Flux Tower, Meteorology -- Flux Tower Transect, Short Hair Creek -- (2009-2018) | dataset |  | HydroShare (no DOI) | boulder, national, sierra |
| Cross-CZO -- Soil Geochemistry -- Shale Hills, Boulder, Luquillo, JRB-SCM, Calhoun -- (2001-... | dataset |  | HydroShare (no DOI) | boulder, calhoun, catalina-jemez, luquillo, national, shale-hills |
| Cross-CZO -- Topographic Carbon Storage, GIS/Map Data, LiDAR, Land Cover -- Betasso -- (2010... | dataset |  | HydroShare (no DOI) | boulder, catalina-jemez, national |
| Cross-CZO -- Topographic Carbon Storage, GIS/Map Data, LiDAR, Land Cover -- Como Creek -- (2... | dataset |  | HydroShare (no DOI) | boulder, catalina-jemez, national |
| Cross-CZO -- Topographic Carbon Storage, GIS/Map Data, LiDAR, Land Cover -- Gordon Gulch -- ... | dataset |  | HydroShare (no DOI) | boulder, catalina-jemez, national |

### Papers (198)

| Title | Kind | Year | Address | Sites |
|---|---|---|---|---|
| A conceptual model for the blooming behavior and persistence of the benthic mat-forming diat... | paper/book | 2012 | DOI | boulder |
| A global atlas of the dominant bacteria found in soil. | paper/book | 2018 | archive page | boulder |
| A method for simultaneous measurement of soil bacterial abundances and community composition... | paper/book | 2016 | DOI | boulder |
| A model for post-orogenic development of a mountain range and its foreland | paper/book | 2013 | DOI | boulder |
| A model of degradation and production of three pools of dissolved organic matter in an alpin... | paper/book | 2009 | DOI | boulder |
| A model of three-dimensional topographic stresses with implications for bedrock fractures, s... | paper/book | 2017 | DOI | boulder, calhoun |
| A preliminary survey of lichen associated eukaryotes using pyrosequencing | paper/book | 2012 | DOI | boulder |
| A similarity solution for reaction front propagation in a fracture-matrix system. | paper/book | 2016 | DOI | boulder |
| A spectroscopic investigation of the chemistry of organic matter during biogeochemical cycli... | dissertation/thesis | 2013 | archive page | boulder |
| Advances in reactive transport modeling of geochemical systems: Applications to acid rock dr... | dissertation/thesis | 2015 | archive page | boulder |
| Alpine catena response to nitrogen deposition and its effect on the aquatic system | paper/book | 2018 | archive page | boulder |
| Analysis and modeling of gully headcut dynamics, North American high plains | paper/book | 2014 | DOI | boulder |
| Anthropocene Landscape Change and the Legacy of Nineteenth- and Twentieth-Century Mining in ... | paper/book | 2018 | DOI | boulder |
| Applied geophysical characterization of the shallow subsurface: Towards quantifying recent l... | dissertation/thesis | 2010 | archive page | boulder |
| Aspect control of water movement on hillslopes near the rain-snow transition of the Colorado... | paper/book | 2014 | DOI | boulder |
| Aspect-dependent soil saturation and insight into debris-flow initiation during extreme rain... | paper/book | 2015 | DOI | boulder |
| Assessing eolian contributions to soils in the Boulder Creek Catchment, Colorado, | undergraduate thesis | 2011 | archive page | boulder, catalina-jemez |
| Assessing the effect of a major storm on 10Be concentrations and inferred basin-averaged den... | paper/book | 2016 | archive page | boulder |
| Atmospheric dust deposition varies by season and elevation in the Colorado Front Range, USA | paper/book | 2020 | archive page | boulder |
| Bacterial communities associated with the lichen symbiosis | paper/book | 2011 | DOI | boulder |
| Bedrock incision and gravel deposition along the rivers in the High Plains. | untyped | 2015 | archive page | boulder |
| Biogeochemistry of beetle-killed forests: Explaining a weak nitrate response. | paper/book | 2013 | DOI | boulder |
| Boulder Creek Critical Zone Observatory (BcCZO-II) Annual report 2014 | report/proposal | 2014 | archive page | boulder |
| Boulder Creek Critical Zone Observatory (BcCZO-II) Annual report 2015 | report/proposal | 2015 | archive page | boulder |
| Boulder Creek Critical Zone Observatory (BcCZO-II) Annual report 2016 | report/proposal | 2016 | archive page | boulder |
| Boulder Creek Critical Zone Observatory Annual Report 2008 | report/proposal | 2008 | archive page | boulder |
| Boulder Creek Critical Zone Observatory Annual Report 2009 | report/proposal | 2009 | archive page | boulder |
| Boulder Creek Critical Zone Observatory Annual Report 2011 | report/proposal | 2011 | archive page | boulder |
| Boulder Creek Critical Zone Observatory Annual report 2012 | report/proposal | 2012 | archive page | boulder |
| Boulder Creek Critical Zone Observatory Annual report 2017 | report/proposal | 2017 | archive page | boulder |
| Boulder Creek Critical Zone Observatory Annual report 2018 | report/proposal | 2018 | archive page | boulder |
| Boulder Creek Critical Zone Observatory Annual report 2019 | report/proposal | 2019 | archive page | boulder |
| Boulder Creek Critical Zone Observatory Data Management Plan | paper/book | 2016 | DOI | boulder |
| Changes in snow accumulation and ablation following the Las Conchas Forest Fire, New Mexico,... | paper/book | 2014 | DOI | boulder, catalina-jemez |
| Changing mountain permafrost from the 1970s to today - comparing two examples from Niwot Rid... | paper/book | 2013 | DOI | boulder |
| Characteristics of a palaeosol and its implications for the Critical Zone development, Rocky... | paper/book | 2011 | DOI | boulder |
| Characterization of water chemistry and Didymosphenia geminata growth in Boulder Creek. | dissertation/thesis | 2009 | archive page | boulder |
| Characterizing hyporheic exchange processes using high-frequency electrical conductivity-dis... | paper/book | 2017 | DOI | boulder, national |
| Chemistry of water, stream sediment, wildfire ash, soil, dust, and mine waste for Fourmile C... | paper/book | 2020 | DOI | boulder |
| Climate driven coevolution of weathering profiles and hillslope topography generates dramati... | paper/book | 2018 | DOI | boulder |
| Climatological and elevational controls on organic and inorganic nutrients in stream waters,... | dissertation/thesis | 2010 | archive page | boulder |
| Colloid mobilization and seasonal variability in a semi-arid, headwater streamMills, TJ, And... | paper/book | 2017 | DOI | boulder |
| Colloidal transport in the Gordon Gulch catchment of the Boulder Creek CZO and its effect on... | paper/book | 2017 | DOI | boulder, national |
| Combining sediment analysis and seismic refraction to describe the structure, thickness and ... | paper/book | 2008 | DOI | boulder |
| Comparison of seasonal changes in fluorescent dissolved organic matter among aquatic lake an... | paper/book | 2010 | DOI | boulder |
| Complex terrain alters temperature and moisture limitations of forest soil respiration acros... | paper/book | 2015 | DOI | boulder |
| Concentration-discharge relationships during an extreme event: Contrasting behavior of solut... | paper/book | 2017 | DOI | boulder |
| Corrigendum: The role of precipitation type, intensity, and spatial distribution in source w... | journal-article | 2016 | DOI | boulder |
| Critical zone evolution: Climate and exhumation in the Colorado Front Range. | paper/book | 2013 | DOI | boulder |
| Critical Zone Observatories: Building a network to advance interdisciplinary study of Earth ... | paper/book | 2008 | DOI | boulder, national, shale-hills, sierra |
| Critical zone properties control the fate of nitrogen during experimental rainfall in montan... | paper/book | 2017 | archive page | boulder |
| Dating of river terraces along Lefthand Creek | paper/book | 2017 | DOI | boulder |
| Developing and exploring a theory for the lateral erosion of bedrock channels for use in lan... | journal-article | 2018 | DOI | boulder |
| Diel flow pulses drive particulate organic matter transport from microbial mats in a glacial... | paper/book | 2014 | DOI | boulder |
| Digging deeper to find unique microbial communities: The strong effect of depth on the struc... | paper/book | 2012 | DOI | boulder |
| Dissolved organic matter transport reflects hillslope to stream connectivity during snowmelt... | paper/book | 2016 | DOI | boulder |
| Does climate change create distinctive patterns of landscape incision? | paper/book | 2010 | DOI | boulder |
| Ecohydrological controls on snowmelt partitioning in mixed-conifer sub-alpine forests. | paper/book | 2009 | DOI | boulder, catalina-jemez, sierra |
| Effects of flow regimes on stream turbidity and suspended solids after wildfire, Colorado Fr... | paper/book | 2012 | archive page | boulder |
| Effects of wildfire on source-water quality and aquatic ecosystems, Colorado Front Range. In... | paper/book | 2012 | archive page | boulder |
| Erosion and channel changes due to extreme flooding in the Fourmile Creek catchment, Colorado. | paper/book | 2018 | archive page | boulder |
| Estimating snow sublimation using natural chemical and isotopic tracers across a gradient of... | paper/book | 2010 | DOI | boulder, catalina-jemez |
| Evaluating the effects of wildfire on stream processes in a Colorado front range watershed, ... | paper/book | 2011 | DOI | boulder |
| Evidence for climatic and hillslope‐aspect controls on vadose zone hydrology and implication... | journal-article | 2015 | DOI | boulder |
| Evolution of lumpy glacial landscapes | paper/book | 2014 | DOI | boulder |
| Examining diel patterns of soil and xylem moisture using electrical resistivity imaging | paper/book | 2016 | DOI | boulder |
| Examining knickpoints in the Middle Boulder Creek Catchment, Colorado | undergraduate thesis | 2011 | archive page | boulder |
| Examining the global distribution of dominant archaeal populations in soil. | paper/book | 2010 | DOI | boulder |
| Exhumation by debris flows in the 2013 Colorado Front Range storm | paper/book | 2015 | DOI | boulder |
| Exploring Links between Vadose Zone Hydrology and Chemical Weathering in the Boulder Creek C... | paper/book | 2011 | DOI | boulder |
| Exploring weathering and regolith transport controls on critical zone development with model... | paper/book | 2011 | DOI | boulder |
| Facing reality: Late Cenozoic evolution of smooth peaks, glacially ornamented valleys, and d... | paper/book | 2006 | DOI | boulder |
| Factors controlling streambed coverage of Didymosphenia germinata in two regulated streams i... | paper/book | 2009 | DOI | boulder |
| Far-flung moraines: Exploring the feedback of glacial erosion on the evolution of glacier le... | paper/book | 2012 | DOI | boulder |
| Filling in the gaps: Inferring spatially distributed precipitation from gauge observations o... | paper/book | 2014 | DOI | boulder |
| Fluorescence Indices and their Interpretation. | paper/book | 2014 | archive page | boulder |
| Force of nature: A monumental flood gives CU-Boulder researchers a rare opportunity to study... | paper/book | 2015 | archive page | boulder |
| From the litter layer to the saprolite: Chemical changes in water-soluble soil organic matte... | paper/book | 2014 | DOI | boulder |
| Geochemistry and source waters of rock glacier outflow, Colorado Front Range. | paper/book | 2006 | DOI | boulder |
| Geomorphic inferences from regolith thickness, chemical denudation and CRN erosion rates nea... | paper/book | 2006 | DOI | boulder |
| Geomorphology: The Mechanics and Chemistry of Landscapes. | paper/book | 2010 | archive page | boulder |
| Getting water into the ground and to the channel, Gordon Gulch, Colorado. | undergraduate thesis | 2009 | archive page | boulder |
| Gophers as geomorphic agents in the Colorado Front Range. | paper/book | 2016 | archive page | boulder |
| Groundwater noble gas, age, and temperature signatures in an Alpine watershed: Valuable tool... | paper/book | 2007 | DOI | boulder |
| Hillslope Dissolved Organic Matter Transport and Transformation in a Semi-Arid Headwater Cat... | dissertation/thesis | 2014 | archive page | boulder |
| Hillslope-derived blocks retard river incision | paper/book | 2016 | DOI | boulder |
| How deep and how steady is the Earth’s surface? | paper/book | 2012 | DOI | boulder |
| Humidity determines snowpack ablation under a warming climate | paper/book | 2018 | DOI | boulder, catalina-jemez |
| Hydrodynamic control of benthic mats of Didymosphenia geminata at the reach scale | paper/book | 2015 | DOI | boulder |
| Hydrologic Control of the Nuisance Diatom, Didymosphenia germinata. | paper/book | 2010 | archive page | boulder |
| Hypothesis testing in hydrology: A view from the field: The value of hydrologic hypotheses i... | paper/book | 2017 | archive page | boulder |
| Impacts of increasing aridity and wildfires on aerosol loading in the intermountain western ... | paper/book | 2017 | archive page | boulder |
| Impacts of Sampling Dissolved Organic Matter with Passive Capillary Wicks Versus Aqueous Soi... | paper/book | 2012 | DOI | boulder, catalina-jemez |
| Increased evaporation following widespread tree mortality limits streamflow response | paper/book | 2014 | DOI | boulder, catalina-jemez |
| Increasing plant water stress and decreasing summer streamflow in response to a warmer and w... | paper/book | 2020 | DOI | boulder, catalina-jemez |
| Influence of Leaching Solution and Catchment Location on the Fluorescence of Water-Soluble O... | paper/book | 2015 | DOI | boulder |
| Inorganic nitrogen wet deposition gradients in the Denver-Boulder metropolitan area and Colo... | paper/book | 2019 | archive page | boulder |
| Interannual variability of snowmelt in the Sierra Nevada and Rocky Mountains, USA: Examples ... | paper/book | 2012 | DOI | boulder, sierra |
| Internal Structure of the Green Lake 5 Rock Glacier, Colorado Front Range, USA: | paper/book | 2011 | DOI | boulder |
| Interpreting climate-modulated processes of terrace development along Colorado Front Range u... | paper/book | 2015 | DOI | boulder |
| Investigating the growth of didymosphenia geminata and the impact on benthic macroinvertebra... | dissertation/thesis | 2009 | archive page | boulder |
| Landscape scale linkages in critical zone evolution | paper/book | 2012 | archive page | boulder |
| Large near-term projected snowpack loss over the western United States. | paper/book | 2017 | DOI | boulder |
| LiDAR measurement of seasonal snow accumulation along an elevation gradient in the southern ... | paper/book | 2014 | DOI | boulder, sierra |
| LiDAR-derived snowpack data sets from mixed conifer forests across the Western United States | paper/book | 2014 | DOI | boulder, catalina-jemez, sierra |
| Linkages between denitrification and dissolved organic matter quality, Boulder Creek watersh... | journal-article | 2012 | DOI | boulder |
| Linking topography, hydrology, climate and ecoloty in semi-arid forests: Within catchment an... | dissertation/thesis | 2014 | archive page | boulder |
| Meteoric 10Be in Gordon Gulch, Colorado soils: Implications for hillslope processes and deve... | undergraduate thesis | 2011 | archive page | boulder |
| Meteoric 10Be, clay, and extractable iron depth profiles in the Colorado Front Range: Implic... | paper/book | 2015 | DOI | boulder |
| Mineralogic and Geochemical Changes from Alteration of Granitic Rocks, Boulder Creek Catchme... | paper/book | 2011 | DOI | boulder |
| Modeling the influence of preferential flow on the spatial variability and time-dependence o... | paper/book | 2016 | DOI | boulder |
| Mountain Permafrost - a valid archive to study climate change? Examples from the Rocky Mount... | paper/book | 2010 | archive page | boulder |
| Multi-scale Observations of Snow Accumulation and Peak Snowpack Following Widespread, Insect... | paper/book | 2014 | DOI | boulder, catalina-jemez |
| Nitrogen retention and transport differ by hillslope aspect at the rain-snow transition of t... | paper/book | 2014 | DOI | boulder |
| Numerical modeling of cosmogenic deglaciation records, Front Range and San Juan mountains, C... | paper/book | 2009 | DOI | boulder |
| On the use of a snow aridity index to predict remotely sensed forest productivity in the pre... | paper/book | 2018 | DOI | boulder |
| Optimizing available network resources to address questions in environmental biogeochemistry. | paper/book | 2016 | DOI | boulder |
| Orographic controls on sub-daily rainfall statistics and flood frequency in the Colorado Fro... | paper/book | 2020 | DOI | boulder |
| Particle trajectories on hillslopes: Implications for particle age and 10Be structure | paper/book | 2015 | DOI | boulder |
| Physical and Chemical Controls on the Critical Zone | paper/book | 2007 | archive page | boulder |
| Pinched topography initiates the critical zone: Geophysical imaging provides a clearer pictu... | paper/book | 2015 | DOI | boulder |
| Production of microbially-derived fulvic acid from photolysis of quinone-containing extracel... | paper/book | 2009 | DOI | boulder |
| Proposed initiative would study Earth's weathering engine | paper/book | 2004 | DOI | boulder, calhoun, catalina-jemez, national, shale-hills |
| Punctuated incision of streams bounding the Colorado Front Range from measurements of meteor... | paper/book | 2012 | archive page | boulder |
| Quantifying the effects of forest canopy cover on net snow accumulation at a continental, mi... | paper/book | 2009 | DOI | boulder, catalina-jemez |
| Quantifying the effects of vegetation structure on snow accumulation and ablation in mixed-c... | paper/book | 2015 | DOI | boulder, catalina-jemez, sierra |
| Quantifying the effects of wildfire on changes in soil properties by surface burning of soil... | paper/book | 2017 | DOI | boulder |
| Quasi-steady evolution of hillslopes in layered landscapes: An analytic approach. | paper/book | 2018 | DOI | boulder |
| Rare Earth Elements as Reactive Tracers of Biogeochemical Weathering in Forested Rhyolitic T... | paper/book | 2015 | DOI | boulder, catalina-jemez |
| Recent hydrologic change in a Colorado alpine basin: an indicator of permafrost thaw? | paper/book | 2010 | DOI | boulder |
| Recent tree die-off has little effect on streamflow in contrast to expected increases from h... | paper/book | 2015 | DOI | boulder, catalina-jemez |
| Reconstructing Pinedale (latest Pleistocene) ice in the Green Lakes Valley and adjacent area... | undergraduate thesis | 2011 | archive page | boulder |
| Reconstructing the Glacial History of Green Lakes Valley, North Boulder Creek, Colorado Fron... | paper/book | 2011 | DOI | boulder |
| Reevaluating growing season length controls on net ecosystem production in evergreen conifer... | paper/book | 2018 | DOI | boulder, catalina-jemez, sierra |
| Regolith stirring by biological processes, Gordon Gulch, Colorado. | undergraduate thesis | 2011 | archive page | boulder |
| Relationships between stream nitrate concentration and spatially distributed snowmelt in hig... | paper/book | 2014 | DOI | boulder |
| Relic DNA is abundant in soil and obscures estimates of soil microbial diversity. | paper/book | 2016 | DOI | boulder |
| Removal of benthic algae in swift-flowing streams: the significance of spatial and temporal ... | dissertation/thesis | 2011 | archive page | boulder |
| Rock damage and regolith transport by frost: an example of climate modulation of the geomorp... | paper/book | 2013 | DOI | boulder |
| Rock snot and Dry Valleys: Interactions between river hydraulics and stream ecosystems. | paper/book | 2012 | archive page | boulder |
| Runoff generation in Betasso catchment: Investigation of Hortonian overland flow. | dissertation/thesis | 2017 | archive page | boulder |
| Searching for unifying principles in soil ecology. | paper/book | 2009 | DOI | boulder |
| Seismic constraints on critical zone architecture, Boulder Creek Watershed, Colorado | paper/book | 2011 | DOI | boulder |
| Shear removal function for the nuisance stalk forming diatom Didymosphenia geminate | paper/book | 2013 | DOI | boulder |
| Shear resistance of the nuisance diatom Didymosphenia geminate | paper/book | 2011 | archive page | boulder |
| Shifts in bacterial community structure associated with inputs of low molecular weight carbo... | paper/book | 2010 | DOI | boulder |
| Short-Term Wildfire Impacts in a Rocky Mountain Catchment: Searching for Evidence of Riverin... | dissertation/thesis | 2017 | archive page | boulder |
| Significance of slope sediments layering on physical characteristics and interflow within th... | paper/book | 2011 | DOI | boulder |
| Snow cover depletion curves and snow water equivalent reconstruction: six decades of hydrolo... | paper/book | 2014 | DOI | boulder |
| Snow measurement by GPS interferometric reflectometry: an evaluation at Niwot Ridge, Colorado | paper/book | 2011 | archive page | boulder |
| Snow temperature changes within a seasonal snowpack and their relationship to turbulent flux... | paper/book | 2014 | archive page | boulder |
| Snowmelt Rate Dictates Streamflow. | paper/book | 2016 | archive page | boulder |
| Snowmelt‐Driven Trade‐Offs Between Early and Late Season Productivity Negatively Impact Fore... | journal-article | 2018 | DOI | boulder, catalina-jemez |
| Snowpack regimes of the Western United States | paper/book | 2014 | DOI | boulder |
| Soils and geomorphology in mountains-- an example from the Front Range of Colorado. soils an... | paper/book | 2003 | DOI | boulder |
| Solifluction Lobes on Niwot Ridge: Using Drones, Time-lapse Cameras, and Weather Data to Stu... | dissertation/thesis | 2018 | archive page | boulder |
| Solving a conundrum of a steady-state hillslope with variable soil depths and production rat... | paper/book | 2011 | DOI | boulder |
| Source waters and flowpaths in a seasonally snow-covered catchment. | paper/book | 2004 | DOI | boulder |
| Sources of streamflow along a headwater catchment elevational gradient | paper/book | 2017 | archive page | boulder |
| Spatial and temporal variations in meteoric 10Be inventories and long-term deposition rates,... | paper/book | 2015 | archive page | boulder |
| Spring of Gordon Gulch: A groundwater analysis. | undergraduate thesis | 2012 | archive page | boulder |
| State of the Watershed: Water Quality of Boulder Creek, Colorado | paper/book | 2006 | archive page | boulder |
| Stream water carbon controls in seasonally snow-covered mountain catchments: impact of inter... | paper/book | 2014 | DOI | boulder, catalina-jemez |
| Stream water chemistry along an elevation gradient from the Continental Divide to the Foothi... | paper/book | 2011 | DOI | boulder |
| Strong climate and tectonic control on plagioclase weathering in granitic terrain. | paper/book | 2011 | DOI | boulder, catalina-jemez, luquillo |
| Subsurface architecture of the Boulder Creek Critical Zone Observatory from electrical resis... | paper/book | 2013 | DOI | boulder |
| Subsurface Evolution: Characterizing the physical and geochemical changes in weathered bedro... | dissertation/thesis | 2012 | archive page | boulder |
| Tales from the tomb: the microbial ecology of exposed rock surfaces. | paper/book | 2018 | DOI | boulder |
| Temporal variability in the diversity and composition of stream bacterioplankton communities | paper/book | 2012 | DOI | boulder |
| The 2016 Kirk Bryan ﬁeld trip: Quaternary landslides, ﬂuvial terraces, and recent geomorphic... | paper/book | 2016 | DOI | boulder |
| The Distribution of Tors in Gordon Gulch, Front Range, Colorado. | undergraduate thesis | 2010 | archive page | boulder |
| The effects of interannual climate variability on the moraine record | paper/book | 2014 | DOI | boulder |
| The Geochemical Impact of Wildfire and Mining on the Fourmile Creek Watershed, Colorado | undergraduate thesis | 2012 | archive page | boulder |
| The Hydrology of Headwater Catchments from the Plains to the Continental Divide, Boulder Cre... | dissertation/thesis | 2010 | archive page | boulder |
| The influence of soil properties on the structure of bacterial and fungal communities across... | paper/book | 2008 | DOI | boulder |
| The relative contributions of alpine and subalpine ecosystems to the water balance of a moun... | paper/book | 2015 | DOI | boulder |
| The response of streamflow and evapotranspiration to changes in snowmelt across the western ... | dissertation/thesis | 2018 | archive page | boulder |
| The river as a chemostat: Fresh perspectives on dissolved organic matter flowing down the ri... | paper/book | 2015 | DOI | boulder |
| The role of precipitation type, intensity, and spatial distribution in source water quality ... | journal-article | 2015 | DOI | boulder |
| The torrential and the mundane: Climate controls on hillslope weathering, channel bed materi... | dissertation/thesis | 2014 | archive page | boulder |
| The under-recognized dominance of Verrucomicrobia in soil bacterial communities. | paper/book | 2011 | DOI | boulder |
| Topoclimate effects on growing season length and montane conifer growth in complex terrain. | paper/book | 2017 | DOI | boulder |
| Topographically driven differences in energy and water constrain climatic control on forest ... | paper/book | 2017 | DOI | boulder, catalina-jemez |
| Topography alters tree growth–climate relationships in a semi-arid forested catchment | paper/book | 2014 | archive page | boulder |
| Training a "New Scientist" to Meet the Challenges of a Changing Environment. | paper/book | 2011 | DOI | boulder |
| Tree root mounds and their role in transporting soil on forested landscapes | paper/book | 2013 | DOI | boulder |
| Twelve testable hypotheses on the geobiology of weathering | paper/book | 2011 | DOI | boulder, luquillo, national, shale-hills, sierra |
| Twentieth-century changes in the thickness and extent of Arapahoe Glacier, Front Range, Colo... | paper/book | 2010 | DOI | boulder |
| Understanding the geomorphic imprint of the Northern Pocket Gopher on the subalpine zone of ... | dissertation/thesis | 2017 | archive page | boulder |
| Unsteady late Pleistocene incision of streams bounding the Colorado Front Range from measure... | paper/book | 2012 | DOI | boulder |
| Using 10Be to deduce rates of landscape evolution and mobile-regolith residence times in Gor... | paper/book | 2015 | DOI | boulder |
| Using geophysical methods to study the shallow subsurface of a sensitive alpine environment,... | paper/book | 2008 | DOI | boulder |
| Using the accumulation of CBD-extractable iron and clay content to estimate soil age on stab... | paper/book | 2012 | DOI | boulder |
| Variation in critical zone processes and architecture across slope aspects, | paper/book | 2014 | DOI | boulder |
| Water chemistry of surface waters affected by the Fourmile Canyon wildfire, Colorado, 2010–2011 | paper/book | 2012 | archive page | boulder |
| Which way do you lean? Using slope aspect variations to understand Critical Zone processes a... | paper/book | 2018 | DOI | boulder, catalina-jemez |
| Wildfire Effects on Source-Water Quality—Lessons from Fourmile Canyon Fire, Colorado, and Im... | paper/book | 2012 | archive page | boulder |
| Wildfire-driven changes in hydrology mobilize arsenic and metals from legacy mine waste | paper/book | 2020 | DOI | boulder |

## Left out for the HydroShare reason (item 2)

| Title | HydroShare address | Answer |
|---|---|---|
| Betasso - Air Temperature, Climate, Meteorology - LIVE Betasso Mete... | https://www.hydroshare.org/resource/5a31cca938d34692a0f3c2af0f2cb9ad/ | 403 |
| Betasso - Geophysics - Shallow Seismic Refraction, Electrical Resis... | https://www.hydroshare.org/resource/beed81d0100c4e448cbe61d46957ec9f/ | 403 |
| Boulder Creek - GIS/Map Data - ArcGIS API BCCZO GIS (2010-2018) | https://www.hydroshare.org/resource/a9c461b38ec647a7ad3c54a956ea7f89/ | 403 |
| Boulder Creek - Streamflow / Discharge - (USGS Gauges) (2007-2013) | https://www.hydroshare.org/resource/b7b9550581bb4a0399d4ddb04d467a76/ | 403 |
| Gordon Gulch - Geophysics - Shallow Seismic Refraction, Electrical ... | https://www.hydroshare.org/resource/bf2e9a10f1584f4a91ab7628dd35ddfc/ | 403 |
| Green Lakes Valley - Climate, Meteorology (1986-2006) | https://www.hydroshare.org/resource/973e4b7bfe4d486684890051347c86d8/ | 404 |
| Green Lakes Valley - Photographic Imagery - (GLV_Camera) (2008-2016) | https://www.hydroshare.org/resource/9a04a43fa959474d8fe26a5780a757ff/ | 404 |
| Green Lakes Valley - Stream Water Chemistry - (data from Niwot Ridg... | https://www.hydroshare.org/resource/31043d38a97641059306a8fc7008409a/ | 403 |

## Sample check (rule 12)

Read in the harvest file, each matched to its row above:

papers with a DOI: Quantifying the effects of vegetation structu (2015); Evidence for climatic and hillslope‐aspect co (2015); Soils and geomorphology in mountains-- an exa (2003)

archive-page papers: Assessing the effect of a major storm on 10Be (2016); Boulder Creek Critical Zone Observatory (BcCZ (2014); Boulder Creek Critical Zone Observatory Annua (2008)

datasets: BCCZO -- Streamflow / Discharge -- Colorado D; BCCZO -- Dissolved Organic Matter (DOM), Lysi; BCCZO -- Snow Depth -- Snow Pole Transects (m

Not opened by hand: the three repaired DOIs' pages, beyond the Crossref lookup and the doi.org handle answer.
