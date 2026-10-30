# Products batch 2: Christina River Basin (proposal for epic T11)

Date: 30 October 2026. Ticket: CUAHSI/CUAHSI3-website#76 (T11). Branch `task/cz-products-christina-proposal`. **Proposal step of "Propose, then apply". Nothing in `content/` has been changed.** Source: `agent/reports/261029_cz-harvest-proposal.json`, every record whose `sites` includes `christina`, minus what `content/critical-zone/products.json` (batch 1, PR 150) already holds.

Rules carried from batch 1 (Jordan, 29 October): talks and posters held out; no award assigned unless a source names one; `provenance` is not in the file (schema); one file for the whole list.

## Why Christina

My choice, not asked: the next smallest observatory with a real publication list (20 datasets, 163 papers) after Eel. Reynolds (40 / 197), Luquillo, Boulder and the others follow in size order; say if you want another order.

## Counts

| | Count |
|---|---|
| Records tagged `christina` | 183 (20 datasets, 163 papers) |
| Already in the list from batch 1 (same DOI, HydroShare id or address) | 9 |
| Held out: talks and posters | 49 |
| **Proposed for this batch** | **125** (19 datasets, 106 papers) |
| Of the papers: paper/book 85, report/proposal 11, dissertation/thesis 10 | |
| Papers with a DOI / archive page only | 57 / 49 |
| Datasets with a DOI / HydroShare address with no DOI | 0 / 19 |
| Records that name an award | 0 of 125 |
| Records with no year | 19 (all datasets) |
| Records tagged with more than two sites | 9 |
| Duplicates inside the batch (normalised title, same type) | 0 |
| Same title as a loaded record under a different address | 0 |

## Link check (done for this proposal, unlike batch 1's first draft)

All 57 DOIs were looked up at doi.org (handle lookup) and all 19 HydroShare addresses requested once. One problem: the DOI of "Effects of current velocity on the nascent architecture of stream microbial biofilms" is written with an en dash in the source (`10.1128/AEM.69.9.5443–5452.2003`); my script could not send it, so I looked it up by hand with a hyphen (`10.1128/AEM.69.9.5443-5452.2003`) in Crossref, which gives the same title, authors Battin, Kaplan, Newbold, and 2003. **I propose loading that paper with the hyphen** (a typographic repair, same paper). The other 56 DOIs resolved and the 19 HydroShare addresses answered 200. A resolving DOI does not prove it is the right paper; I did not compare each with its title. The 49 archive-page addresses were not opened.

## Judgment calls and unverified (mine; change any)

1. The 49 talks and posters are held out, per your rule. They stay in the proposal file.
2. 21 reports, proposals and theses are typed `paper` (the schema has no other type). Say if you want them held out.
3. 19 datasets are HydroShare catalog entries with no year; I left `year` out (C3).
4. No record names an award; I did not assign Christina's awards (C3).
5. 9 records are tagged with more than two sites (network-wide items); they show on the Christina page because they are tagged `christina`.
6. The 49 papers with no DOI were merged by the harvest on title, year and section where the archive listed them on more than one page; I did not read them against their pages. Their archive-page addresses stop working in August 2027.
7. The 9 records already loaded are not repeated. Their `sites` list in the file is unchanged by this batch, so a shared record keeps the sites it had. If the proposal file now gives a shared record more sites than the loaded copy has, the loaded copy stays as it is; say if you want those site lists brought up to date.

8. Outside this batch: a similar malformed DOI exists on an IML paper (`10.1021/es5023762|Environ.Sci.Technol.XXXX,XXX,XXX−XXX`, title "Threshold Dynamics in Soil Carbon Storage for Bioenergy Crops"). The part before `|` resolves in Crossref to that title (2014). It will be proposed, repaired the same way, in the IML batch.

9. **Correction (found by the reviewer after you approved):** "0 of 125 name an award" meant the `awards` field. The archive's venue text names an NSF award in 4 of the 125 (the 2010, 2011 and 2012 CRB-CZO annual reports, "NSF Award #0724971", and the EarthCube workshop proposal, "NSF Award #1252238 Cross-CZO"). Loaded as given in `repository`; `awards` is still unset because the registry link is your call (C7).
10. Two of the 106 "papers" are proposals (the EarthCube workshop proposal and the BiG CZ software SI2-SSI proposal), typed `paper` like the other reports.

## Proposed items

### Datasets (19)

| Title | Kind | Year | Address | Sites |
|---|---|---|---|---|
| CRBCZO -- Air Temperature, Precipitation -- NOAA NCDC -- Christina River Basin -- (1920-2015) | dataset |  | HydroShare (no DOI) | christina, national |
| CRBCZO -- Chlorophyll -- Pheophytin -- White Clay Creek -- (2001-2012) | dataset |  | HydroShare (no DOI) | christina, national |
| CRBCZO -- Climate, Air Temperature, Meteorology, Precipitation -- DEOS -- Delaware and SE Pe... | dataset |  | HydroShare (no DOI) | christina, national |
| CRBCZO -- Climate, Air Temperature, Meteorology, Precipitation -- NOAA CRN -- PA Avondale 2N... | dataset |  | HydroShare (no DOI) | christina, national |
| CRBCZO -- Climate, Electrical Conductivity, Lysimeter Water Samples Chemistry, Soil Porewate... | dataset |  | HydroShare (no DOI) | christina, national |
| CRBCZO -- Climate, Rainfall Chemistry, Stable Isotopes, Precipitation -- Upper watershed at ... | dataset |  | HydroShare (no DOI) | christina, national |
| CRBCZO -- Climate, Stable Isotopes, Stream Water Chemistry -- Third-order White Clay Creek a... | dataset |  | HydroShare (no DOI) | christina, national |
| CRBCZO -- Climate, Stable Isotopes, Well Water Levels -- White Clay Creek Transect A floodpl... | dataset |  | HydroShare (no DOI) | christina, national |
| CRBCZO -- Groundwater Depth -- USGS -- Chester County, PA -- (1951-2015) | dataset |  | HydroShare (no DOI) | christina, national |
| CRBCZO -- Precipitation, Meteorology -- Stroud Water Research Center -- (1996-2010) | dataset |  | HydroShare (no DOI) | christina, national |
| CRBCZO -- Soil Moisture, Soil Temperature -- NOAA CRN -- PA Avondale 2N -- (2011-2015) | dataset |  | HydroShare (no DOI) | christina, national |
| CRBCZO -- Stage, Streamflow / Discharge -- White Clay Creek -- (1968-2014) | dataset |  | HydroShare (no DOI) | christina, national |
| CRBCZO -- Stream Suspended Sediment -- Christina River Basin -- (1993-2012) | dataset |  | HydroShare (no DOI) | christina, national |
| CRBCZO -- Stream Water Chemistry -- Christina River Basin -- (1977-2017) | dataset |  | HydroShare (no DOI) | christina, national |
| CRBCZO -- Stream Water Chemistry, Stream Ecology -- USGS -- Chester County, PA -- (1998-2013) | dataset |  | HydroShare (no DOI) | christina, national |
| CRBCZO -- Stream Water Chemistry, Stream Suspended Sediment, Stream Water Temperatures, Grou... | dataset |  | HydroShare (no DOI) | christina, national |
| CRBCZO -- Stream Water Chemistry, Streamflow / Discharge, Climate, Stage, Stream Water Tempe... | dataset |  | HydroShare (no DOI) | christina, national |
| CRBCZO -- Stream Water Temperatures -- Christina River Basin -- (2007-2014) | dataset |  | HydroShare (no DOI) | christina, national |
| CRBCZO -- Well Water Levels -- White Clay Creek -- (1988-2012) | dataset |  | HydroShare (no DOI) | christina, national |

### Papers (106)

| Title | Kind | Year | Address | Sites |
|---|---|---|---|---|
| 2010 CRB-CZO Annual Report to National Science Foundation | report/proposal | 2010 | archive page | christina |
| 2011 CRB-CZO Annual Report to National Science Foundation | report/proposal | 2011 | archive page | christina |
| 2012 CRB-CZO Annual Report to National Science Foundation | report/proposal | 2012 | archive page | christina |
| 210Pb geochronology of flood events in large tropical river systems | paper/book | 2012 | DOI | christina |
| A coupled geochemical and biogeochemical approach to characterize the bioreactivity of disso... | paper/book | 2014 | DOI | christina |
| A mixing model analysis of stream solute dynamics and the contribution of a hyporheic zone t... | paper/book | 2003 | archive page | christina |
| A variable source area for groundwater evapotranspiration: impacts on modeling stream flow | paper/book | 2013 | DOI | christina |
| Atmospheric deposition and corresponding variability of stemflow chemistry across temporal s... | paper/book | 2011 | DOI | christina |
| Beryllium-7 wet deposition variation with storm height, synoptic classification, and tree ca... | paper/book | 2015 | archive page | christina |
| Biodegradable dissolved organic matter in a temperate and a tropical stream determined from ... | paper/book | 2006 | archive page | christina |
| Biological lability of dissolved organic carbon in stream water and contributing terrestrial... | paper/book | 2013 | DOI | christina |
| Biological lability of streamwater fluorescent dissolved organic matter | paper/book | 2012 | archive page | christina |
| Biome-level biogeography of streambed microbiota | paper/book | 2008 | DOI | christina |
| Biophysical controls on organic carbon fluxes in fluvial networks | paper/book | 2008 | DOI | christina |
| Changes in dissolved organic matter (DOM) amount and composition along nested headwater stre... | paper/book | 2014 | DOI | christina |
| Characteristic Length Scales and Time-Averaged Transport Velocities of Suspended Sediment In... | paper/book | 2014 | DOI | christina |
| Characterization and Source Determination of Stream Suspended Particulate Material in White ... | paper/book | 2011 | DOI | christina |
| Common Critical Zone Observatory Infrastructure and Measurements | report/proposal | 2012 | archive page | boulder, catalina-jemez, christina, luquillo, national, shale-hills, sierra |
| Comparison of Two PARAFAC Models of Dissolved Organic Matter Fluorescence for a Mid-Atlantic... | paper/book | 2013 | DOI | christina |
| Continuous resistivity profiling and seismic-reflection data collected in April 2010 from In... | report/proposal | 2014 | DOI | christina |
| Contribution of dissolved organic carbon to stream metabolism estimated with 13C-enriched tr... | paper/book | 2005 | archive page | christina |
| Contributions of microbial biofilms to ecosystem processes in stream mesocosms | paper/book | 2003 | DOI | christina |
| Controls & dynamics of canopy-derived dissolved organic matter from co-dominant broadleaved ... | dissertation/thesis | 2012 | archive page | christina |
| Controls and dynamics of canopy-derived dissolved organic matter from co-dominant broadleave... | paper/book | 2012 | archive page | christina |
| Developing a web application for the integration of real-world, scientific, problem-solving ... | paper/book | 2013 | archive page | christina |
| Dissolved organic matter (DOM) concentration and quality in a forested mid-Atlantic watershe... | paper/book | 2011 | DOI | christina |
| Dissolved organic matter sorption to soil minerals: Role of DOM composition, microorganisms,... | dissertation/thesis | 2015 | archive page | christina |
| Dynamic response of surface water-groundwater exchange to currents, tides, and waves in a sh... | paper/book | 2013 | DOI | christina |
| Ecosystem metabolism in Piedmont streams: reach geomorphology modulates the influence of rip... | paper/book | 2006 | archive page | christina |
| Effects of current velocity on the nascent architecture of stream microbial biofilms | paper/book | 2003 | DOI | christina |
| Effects of streamside vegetation on macroinvertebrate communities of White Clay Creek in Eas... | paper/book | 1993 | archive page | christina |
| Effects of wind-driven rainfall on stemflow generation between two codominant tree species w... | paper/book | 2011 | DOI | christina |
| Estimation of dissolved organic carbon contribution from hillslope soils to a headwater stream | paper/book | 2012 | DOI | christina |
| Evaluation of an instrumental method to reduce error in canopy water storage estimates via m... | paper/book | 2013 | DOI | christina |
| Extreme storms and changes in particulate and dissolved organic carbon in runoff: Entering u... | paper/book | 2013 | DOI | christina |
| Fluorescence characteristics and sources of dissolved organic matter for stream water during... | paper/book | 2011 | DOI | christina |
| Future Directions for Critical Zone Observatory (CZO) Science | report/proposal | 2010 | archive page | boulder, catalina-jemez, christina, luquillo, national, shale-hills, sierra |
| Geologic effects on groundwater salinity and discharge into an estuary | paper/book | 2013 | DOI | christina |
| Geophysical imaging reveals topographic stress control of bedrock weathering | paper/book | 2015 | DOI | boulder, calhoun, christina, national |
| Graduate Research Group White Paper: Cross-CZO Research Potential | report/proposal | 2013 | archive page | boulder, catalina-jemez, christina, luquillo, national, shale-hills, sierra |
| How planting method, weed abatement, and herbivory affect afforestation success | paper/book | 2007 | archive page | christina |
| Hydrologic dynamics and geochemical responses within a floodplain aquifer and hyporheic zone... | paper/book | 2014 | DOI | christina |
| Hydrological Regulation on Dissolved Organic Carbon Transport from Agricultural and Forest S... | dissertation/thesis | 2013 | archive page | christina |
| Improving biogeochemical knowledge through technological innovation. | paper/book | 2011 | DOI | christina |
| Investigating Organic Matter-Mineral Interactions at the Molecular Scale: An Integrated Fiel... | dissertation/thesis | 2013 | archive page | christina |
| Landscape-Scale Variation in Soil Microbial Communities Across a Forested Watershed. | dissertation/thesis | 2011 | archive page | boulder, christina |
| Laser vision: lidar as a transformative tool to advance critical zone science | paper/book | 2015 | DOI | boulder, catalina-jemez, christina, national, reynolds, shale-hills, sierra |
| Long term storage and transport length scale of fine sediment: Analysis of a mercury release... | paper/book | 2014 | DOI | christina |
| Measurement of streamwater biodegradable dissolved organic carbon with a plug-flow bioreactor | paper/book | 1995 | archive page | christina |
| Measuring heterotrophic respiration rates of suspended particulate organic carbon from strea... | paper/book | 2013 | DOI | christina |
| Mitigation of agricultural nonpoint pollution by a reforested riparian buffer in the Mid-Atl... | paper/book | 2009 | archive page | christina |
| Model My Watershed: Connecting Students’ Conceptual Understanding of Watersheds to Real-Worl... | paper/book | 2014 | DOI | christina |
| Multi-elemental scanning transmission X-ray microscopy–near edge X-ray absorption fine struc... | paper/book | 2015 | archive page | christina |
| NSF Proposal: EarthCube Domain End-User Workshop: Engaging the Critical Zone community to br... | report/proposal | 2012 | archive page | christina, national |
| Nutrient spiraling and transport in streams -- The importance of instream biological process... | paper/book | 2015 | archive page | christina |
| Organic matter dynamics in White Clay Creek, Pennsylvania, U.S.A. | paper/book | 1997 | archive page | christina |
| Paired comparisons of effects of type of riparian vegetation on stream fishes: implications ... | paper/book | 2000 | archive page | christina |
| Predicting the accumulation of mercury-contaminated sediment on riverbanks—An analytical app... | paper/book | 2012 | DOI | christina |
| Primary productivity and community respiration | paper/book | 2006 | archive page | christina |
| Properties of Fe-organic matter associations via coprecipitation versus adsorption | paper/book | 2014 | DOI | christina |
| Protecting Headwaters: The scientific basis for safeguarding stream and river ecosystems | report/proposal | 2008 | archive page | christina |
| Rates of soil mixing and associated carbon fluxes in a forest vs. tilled agricultural field:... | paper/book | 2011 | DOI | christina |
| Reconstructing suspended sediment mercury contamination of a steep, gravel-bed river using r... | paper/book | 2014 | DOI | christina |
| Recurring seasonal dynamics of microbial communities in stream habitats | paper/book | 2006 | DOI | christina |
| Riparian Deforestation, Stream Narrowing, and Loss of Stream Ecosystem Services | paper/book | 2004 | archive page | christina |
| Riparian forest restoration: Increasing success by reducing plant competition and herbivory | paper/book | 2002 | archive page | christina |
| Riverine coupling of biogeochemical cycles between land, oceans, and atmosphere. | paper/book | 2011 | DOI | christina |
| Run-of-river impoundments pass bed material and establish equilibrium bed morphology while r... | paper/book | 2015 | archive page | christina |
| Scaling the gas transfer velocity and hydraulic geometry in streams and small rivers | paper/book | 2012 | DOI | christina |
| Seasonal pattern of dissolved organic matter (DOM) in watershed sources: Influence of hydrol... | paper/book | 2014 | DOI | christina |
| Seawater circulation in sediments driven by interactions between seabed topography and fluid... | paper/book | 2013 | DOI | christina |
| SI2-SSI: The community-driven BiG CZ software system for integration and analysis of bio- an... | report/proposal | 2013 | archive page | christina, national |
| Soft X-ray Spectromicroscopy Study of Mineral-Organic Matter Associations in Pasture Soil Cl... | paper/book | 2014 | DOI | christina |
| Soil moisture response to snowmelt timing in mixed-conifer subalpine forests | paper/book | 2015 | DOI | boulder, catalina-jemez, christina, sierra |
| Soil organic matter stability in organo-mineral complexes as a function of increasing carbon... | paper/book | 2014 | DOI | christina |
| Solute-specific scaling of inorganic nitrogen and phosphorus uptake in streams | paper/book | 2013 | DOI | christina, luquillo |
| Sources and biogeochemistry of terrestrial dissolved organic carbon entering streams | paper/book | 1993 | archive page | christina |
| Spatial and temporal variation in streambed bacterial community composition and correlation ... | dissertation/thesis | 2008 | archive page | christina |
| Spatial patterns of vegetation, soils and microtopography from terrestrial laser scanning on... | paper/book | 2014 | DOI | catalina-jemez, christina, reynolds |
| Stemflow and dissolved organic carbon cycling: temporal variability in concentration, flux, ... | paper/book | 2012 | DOI | christina |
| Storm event patterns of particulate organic carbon (POC) for large storms and differences wi... | paper/book | 2014 | DOI | christina |
| Stratigraphic controls on surface water-groundwater exchange and geochemical fluxes across t... | paper/book | 2014 | DOI | christina |
| Streamside Forest Buffer Width Needed to Protect Stream Water Quality, Habitat, and Organism... | paper/book | 2014 | DOI | christina |
| Streamside forests and the physical, chemical, and trophic characteristics of piedmont strea... | paper/book | 1992 | archive page | christina |
| Surface and subsurface dissolved organic carbon | paper/book | 2000 | archive page | christina |
| Sustaining Earth's Critical Zone - Basic Science and Interdisciplinary Solutions for Global ... | report/proposal | 2013 | archive page | boulder, catalina-jemez, christina, luquillo, national, shale-hills, sierra |
| Technical note: Instrumental method for reducing error in compression-derived measurements o... | paper/book | 2011 | DOI | christina |
| Temporal dynamics of seston: A recurring nighttime peak and seasonal shifts in composition i... | paper/book | 2009 | archive page | christina |
| Temporal variability of stemflow volume in a beech-yellow poplar forest in relation to tree ... | paper/book | 2010 | DOI | christina |
| Temporal variation in end-member chemistry and its influence on runoff mixing patterns in a ... | paper/book | 2013 | DOI | christina |
| Testing the Soil Carbon Saturation Theory: Maximal Carbon Stabilization at Soil Organic Matt... | dissertation/thesis | 2012 | archive page | christina |
| The boundless carbon cycle | paper/book | 2009 | DOI | christina |
| The delivery of dissolved organic carbon from a forest hillslope to a headwater stream | paper/book | 2014 | DOI | christina |
| The Effect Of Particle Storage On Time-Averaged Suspended Sediment Transport Velocities Alon... | dissertation/thesis | 2013 | archive page | christina |
| The effects of phenoseason and storm characteristics on throughfall solute washoff and leach... | paper/book | 2012 | DOI | christina |
| The Geochemical Transformation of Soils by Agriculture and Its Dependence on Soil Erosion: a... | paper/book | 2015 | archive page | christina |
| The Impact of Terrestrial Dissolved Organic Carbon on Stream Ecosystems Through an Investiga... | dissertation/thesis | 2012 | archive page | christina |
| The Initial Design of Data Sharing Infrastructure for the Critical Zone Observatory | paper/book | 2011 | archive page | christina, national |
| The role of monomers in stream ecosystem metabolism | paper/book | 2003 | archive page | christina |
| Transport, sources, and quality of seston in a piedmont headwater stream | dissertation/thesis | 2008 | archive page | christina |
| Turbulent particle transport in streams: Can exponential settling be reconciled with fluid m... | paper/book | 2012 | DOI | christina |
| Untangling the complex issue of dissolved organic carbon uptake: a stable isotope approach | paper/book | 2008 | archive page | christina |
| Variation of organic matter quantity and quality in streams at Critical Zone Observatory wat... | paper/book | 2016 | DOI | boulder, christina, luquillo, shale-hills, sierra |
| Water quality functions of a 15-year-old riparian forest buffer system | paper/book | 2010 | DOI | christina |
| What makes Darwinian hydrology "Darwinian"? Asking a different kind of question about landsc... | paper/book | 2014 | DOI | catalina-jemez, christina |
| Where rivers are born: The scientific imperative for defending small streams and wetlands | paper/book | 2003 | archive page | christina |
