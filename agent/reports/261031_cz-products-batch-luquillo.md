# Products batch 6: Luquillo (proposal for epic T11)

Date: 31 October 2026. Ticket: CUAHSI/CUAHSI3-website#76 (T11). Branch `task/cz-products-luquillo-proposal`. **Proposal step of "Propose, then apply". Nothing in `content/` has been changed.** Source: `agent/reports/261029_cz-harvest-proposal.json`, every record whose `sites` includes `luquillo`, minus what `content/critical-zone/products.json` already holds (batches 1 to 5, 850 records).

Rules carried over (Jordan): talks and posters held out; proposals not in the list (none found here); award numbers found only in venue text stay unlinked (none found here); HydroShare addresses that do not answer are left out; unrelated items are held back for you to decide; `provenance` not in the file; one file for the whole list.

## Counts

| | Count |
|---|---|
| Records tagged `luquillo` | 423 (80 datasets, 343 papers) |
| Already in the list (same DOI, HydroShare id or address) | 34 |
| Held out: talks and posters | 120 |
| Held out: HydroShare addresses that did not answer (item 2) | 9 |
| **Proposed for this batch** | **260** (65 datasets, 195 papers) |
| Of the papers: paper/book 162, report/proposal 14, dissertation/thesis 11, journal-article 6, posted-content 1, no archive type 1 | |
| Papers with a DOI / archive page only | 124 / 71 |
| Datasets with a DOI / HydroShare address with no DOI | 0 / 65 |
| Records with an `awards` value from the harvest's funder data | 7 |
| Records with no year | 65 (all datasets) |
| Records tagged with more than two sites | 7 |

## Link check (before proposing)

Every DOI was looked up at doi.org (handle lookup) and every HydroShare address requested once. Of 124 DOIs and 74 HydroShare addresses, 9 problems, all HydroShare addresses; no DOI failed. The 71 archive-page addresses were not opened (they stop working in August 2027). A resolving DOI is not proof it is the right paper.

## Things I changed or left out (mine; your call on each)

1. **No DOI needed repair** in this batch (Boulder had three, IML three, Reynolds two).
2. **9 HydroShare addresses do not answer** (all 403; the other 65 answered 200). Left out, as for Reynolds and Boulder; a 403 may mean the resource is private, not gone. Listed in the last table. Say "include with the archive page" or "leave out".
3. **20 papers are dated before 2007**, when the CZO program began (1964 to 2006; the Luquillo Experimental Forest and its LTER have a longer record). The archive lists them as Luquillo publications, so under your rule they are in. I propose **leaving `era` unset on those 20** instead of `czo` (C3: they were not made in the CZO era). The table marks them.
4. **Two records have a damaged `repository` text** and I propose leaving it out: "Extreme storms drive riverine particulate organic matter export from tropical mountain streams" holds "..." and "Linking geomorphology, weathering and cation availability in the Luquillo Mountains" holds its own DOI text. The journal name is not given in the source and I did not look it up.
5. **Two datasets share one title and have different HydroShare resources:** "LCZO -- Precipitation -- Throughfall -- Bisley -- (1988-2015)" (ids `c635d748...` and `f24d9ee4...`, both answer 200). The validator does not compare titles; I propose both, since they are distinct resources, and note that I did not open them to see how they differ.
6. **120 talks and posters held out**, per your rule.
7. **14 reports and 11 theses are typed `paper`** (no schema type for them). Among the reports: 10 Luquillo CZO annual or interim reports (2010 to 2019), and four from others (a USGS bibliography, a USDA Forest Service plan and history, and a steering-committee report for a Reynolds Creek site visit, which the archive tags Luquillo). None is a proposal to a funder; none cites an award number in its venue text.
8. **Items that look far from the Luquillo critical zone** (kept, flagged for you, under your rule that archive work is assumed CZ-affiliated; say which to drop): "Reconstructing the transport history of pebbles on Mars" (Nature Communications 2015, DOI); "Vegetation-Hydrology Dynamics in Complex Terrain of Semiarid Areas: II" (Water Resources Research 2008, archive page only); "Steering Committee report for Reynolds Creek CZO site visit and PI meeting" (2016). I read all 195 paper titles for this; I found no medical or other plainly unrelated item like the two held back in the IML batch.
9. **7 records are tagged with more than two sites** (cross-CZO items); each is kept once with all its sites.
10. The papers with no DOI (71) were merged by the harvest on title, year and section; not read against their pages. Datasets have no year when the source gave none (C3). One record, "Carbon istope biogeochemistry of tropical small mountainous river, estuarine, and coastal...", has no archive type; one is typed `posted-content` (a preprint).

## Proposed items

### Datasets (65)

| Title | Kind | Year | Address | Sites |
|---|---|---|---|---|
| Cross-CZO -- Soil Gas -- CO2 and O2 -- National -- (2014-2017) | dataset |  | HydroShare (no DOI) | calhoun, catalina-jemez, luquillo, national, shale-hills |
| LCZO - Nutrient Fluxes - Magnesium concentrations and isotopic signatures - Bisley (2009-2011) | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Digital Elevation Model (DEM), LiDAR -- 2016 USACE NCMP Topobathy Lidar -- Puerto Ri... | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Geomorphology -- Stream channel geomorphology -- Puerto Rico -- (2009-2012) | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Geophysics, Ground Penetrating Radar (GPR) -- Luquillo Mountains -- (2012-2015) | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- GIS/Map Data -- GIS web map and Datasets -- Northeastern Puerto Rico -- (1998-Ongoing) | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- GIS/Map Data -- land use -- Puerto Rico -- (2000-2016) | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- GIS/Map Data -- Northeastern Puerto Rico and the Luquillo Mountain -- (2011-2016) | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- GIS/Map Data -- Puerto Rico -- (1998-1998) | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- GIS/Map Data -- Puerto Rico -- (1998-2012) | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- GIS/Map Data -- San Juan ULTRA Mapping Data -- Puerto Rico -- (1936-2016) | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- GIS/Map Data, LiDAR -- Northeastern Puerto Rico -- (2010-2011) | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Groundwater Chemistry, Groundwater Depth -- Icacos/Blanco watersheds -- (2014-2016) | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Groundwater Chemistry, Groundwater Depth, Stream Water Chemistry, Streamflow / Disch... | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Groundwater Depth, Groundwater Temperatures -- EP1 and LGW2B wells -- East Peak -- (... | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Meteorology -- Bisley -- (1993-2019) | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Meteorology -- ceilometer and meteorological data -- Sabana, Bisley -- (2000-2016) | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Meteorology -- Daily -- Sabana Field Station -- (2001-2010) | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Meteorology -- East Peak -- (2002-2016) | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Meteorology -- Hourly -- Sabana Field Station -- (2001-2009) | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Meteorology -- Monthly Averages -- Bisley -- (1993-2010) | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Meteorology -- Sabana Field Station -- (2009-2016) | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Meteorology, Air Temperature -- Daily -- Luquillo Mountains -- (2002-2009) | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Meteorology, Ozone -- Bisley -- (2008-2013) | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Overland Water Chemistry, Nutrient Fluxes, Rainfall Chemistry, Throughfall Chemistry... | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Overland Water Chemistry, Nutrient Fluxes, Throughfall Chemistry, Rainfall Chemistry... | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Phosphorus fractionation responds to dynamic redox conditions in a humid tropical fo... | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Photographic Imagery, Meteorology -- Cloud cover imagery -- Luquillo Mountains -- (2... | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Precipitation -- NOAA NWS Precipitation Estimates -- Puerto Rico -- (2003-2016) | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Precipitation -- Throughfall -- Bisley -- (1988-2015) | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Precipitation -- Throughfall -- Bisley -- (1988-2015) | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Precipitation, GIS/Map Data -- Luquillo Mountains, Puerto Rico -- (2014-2014) | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Precipitation, Reservoir Height, Streamflow / Discharge -- Schoolyard Data Jam -- Pu... | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Sediment Transport -- Grain size and shape analysis -- Mameyes and Bisley -- (2013-2... | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Sediment Transport -- Mameyes Watershed -- (2010-2012) | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Soil Biogeochemistry -- Iron and carbon cycling -- El Verde Instrumented hillslope -... | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Soil Biogeochemistry -- landscape-scale soil biogeochemistry and enzymes -- Bisley -... | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Soil Biogeochemistry -- landscape-scale soil biogeochemistry and enzymes -- Northeas... | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Soil Biogeochemistry -- Order from disorder: do soil organic matter composition and ... | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Soil Biogeochemistry -- trace metal mobilization, redox -- Bisley and Guaba Ridge --... | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Soil Gas -- Soil Chemistry and Greenhouse Gas Emissions -- Northeastern Puerto Rico ... | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Soil Geochemistry -- Phosphorus -- Luquillo Mountains -- (2010-2010) | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Soil Geochemistry -- X-ray Florescence -- Luquillo Mountains -- (2010-2010) | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Soil Microbes, Soil Biogeochemistry -- Iron redox, Soil Microbiome -- Bisley -- (201... | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Soil Microbes, Soil Geochemistry -- Enzyme activity and microbial community structur... | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Soil Mineralogy -- Mineral content of soils 0-20 cm XRD -- Northeastern Puerto Rico ... | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Soil Moisture -- Soil Respiration, Oxygen and Water Content -- El Verde -- (2014-2016) | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Soil Redox Potential - R code for Mössbauer spectral subtraction -- Bisley -- 2018 | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Soil Redox Potential, Soil Biogeochemistry -- Fe speciation, redox -- Luquillo Mount... | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Soil Survey -- acid phosphatase kinetic parameters -- Luquillo Mountains -- (2012-2012) | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Soil Survey -- Northeastern Puerto Rico and the Luquillo Mountain -- (2011-2012) | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Stable Isotopes -- Stable Isotope (δ18O and δ2H) Data -- Puerto Rico -- (1994-2013) | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Stream Ecology, Vegetation -- Luquillo LTER -- Northeastern Puerto Rico -- (1975-2018) | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Stream Suspended Sediment, Streamflow / Discharge, Precipitation -- riverine particu... | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Stream Water Chemistry -- Bisley, Mameyes -- (1986-2012) | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Stream Water Chemistry, Meteorology -- Environmental Monitoring -- Luquillo Mountain... | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Stream Water Chemistry, Stream Ecology -- Data and R scripts -- Eastern Puerto Rico ... | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Stream Water Chemistry, Streamflow / Discharge, Air Temperature, Stream Water Temper... | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Streamflow / Discharge -- Bisley -- (1987-2013) | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Topographic Carbon Storage, Tree Growth & Physiology -- Leaf litter collected over c... | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Tropical river suspended sediment and solute dynamics in storms during an extreme dr... | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Tropical river suspended sediment and solute dynamics in storms during an extreme dr... | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO -- Vegetation, Soil Gas, Soil Moisture -- Canopy Trimming Experiment -- Quebrada Prieta... | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO- Geology, Regolith Survey, Lithological influences on contemporary and long-term regoli... | dataset |  | HydroShare (no DOI) | luquillo, national |
| LCZO- Geology, Regolith Survey, trace and rare earth elements- Bisley and Icacos (2017) | dataset |  | HydroShare (no DOI) | luquillo, national |

### Papers (195)

Papers dated before 2007 are marked "(pre-2007)" in the Year column.

| Title | Kind | Year | Address | Sites |
|---|---|---|---|---|
| 2010 Annual Report CZO: Luquillo Critical Zone Observatory | report/proposal | 2010 | archive page | luquillo |
| 2011 Interim Report CZO: Luquillo Critical Zone Observatory | report/proposal | 2011 | archive page | luquillo |
| 2012 Annual Report CZO: Luquillo Critical Zone Observatory | report/proposal | 2012 | archive page | luquillo |
| A Caribbean Forestry Tapestry | paper/book | 2012 | archive page | luquillo |
| A Comparison of Connectivity Metrics on Watersheds and Implications for Water Management. | paper/book | 2013 | DOI | luquillo |
| A method for quantifying cloud immersion in a tropical mountain forest using time-lapse phot... | paper/book | 2017 | DOI | luquillo |
| A nitrogen budget for late-successional hill slope tabonuco forest, Puerto Rico | paper/book | 1999 (pre-2007) | archive page | luquillo |
| A spheroidal weathering model coupling porewater chemistry to soil thicknesses during steady... | paper/book | 2006 (pre-2007) | DOI | luquillo |
| A Tropical Rain Forest: A Study Of Irradiation and Ecology at El Verde, Puerto Rico | paper/book | 1970 (pre-2007) | archive page | luquillo |
| Abrupt change in forest height along a tropical elevation gradient detected using airborne L... | paper/book | 2016 | DOI | luquillo |
| Accounting for Soils Parameter Uncertainty in a Physically-Based and Distributed Approach fo... | paper/book | 2016 | DOI | luquillo |
| African dust deposition in Puerto Rico; analysis of a 20 year rainfall chemistry record and ... | paper/book | 2019 | archive page | luquillo |
| Analyzing cloud base at local and regional scales to understand tropical montane cloud fores... | paper/book | 2016 | archive page | luquillo |
| Annual Report 2013. How Critical Zone Processes differ in Landscapes with Contrasting Lithol... | report/proposal | 2013 | archive page | luquillo |
| Annual Report 2014. Luquillo CZO: The role of hot spots and hot moments in tropical landscap... | report/proposal | 2014 | archive page | luquillo |
| Annual Report 2015. Luquillo CZO: The role of hot spots and hot moments in tropical landscap... | report/proposal | 2015 | archive page | luquillo |
| Annual Report 2016. Luquillo CZO: The role of hot spots and hot moments in tropical landscap... | report/proposal | 2016 | archive page | luquillo |
| Annual Report 2017 Luquillo CZO: The role of hot spots and hot moments in tropical landscape... | report/proposal | 2017 | archive page | luquillo |
| Approaches to stream solute load estimation for solutes with varying dynamics from five dive... | paper/book | 2016 | DOI | luquillo |
| Architecture of the deep critical zone in the Río Icacos watershed (Luquillo Critical Zone O... | journal-article | 2016 | DOI | luquillo |
| Atypical soil carbon distribution across a tropical steepland forest catena. | paper/book | 2011 | DOI | luquillo |
| Bacterial Associations with Weathering Minerals at the Regolith-Bedrock Interface, Luquillo ... | paper/book | 2012 | DOI | luquillo |
| Belowground Response to Drought in a Tropical Forest Soil. I. Changes in Microbial Functiona... | paper/book | 2016 | DOI | luquillo |
| Beryllium Desorption from Minerals and Organic Ligands Over Time | paper/book | 2016 | DOI | luquillo |
| Biogeochemical cycling of iron and carbon in humid (sub)tropical forest soils under fluctuat... | dissertation/thesis | 2018 | archive page | calhoun, luquillo |
| Biomass and Nutrient Content of the Bisley Experimental Watersheds, Luquillo Experimental Fo... | paper/book | 1993 (pre-2007) | archive page | luquillo |
| Breaking the enzymatic latch: Impacts of reducing conditions on hydrolytic enzyme activity i... | paper/book | 2014 | DOI | luquillo |
| Building a Collaborative Network to Understand Regional Forest Dynamics and Advance Forestry... | paper/book | 2016 | archive page | luquillo |
| Carbon istope biogeochemistry of tropical small mountainous river, estuarine, and coastal sy... | untyped | 2012 | DOI | luquillo |
| Carbon, nitrogen, and water stable isotopes in plant tissue and soils across a moisture grad... | paper/book | 2016 | archive page | luquillo |
| Caribbean Water Science Center Bibliographic Reference | report/proposal | 2012 | archive page | luquillo |
| Changes in extracellular enzyme activity and microbial community structure with soil depth a... | paper/book | 2014 | DOI | luquillo |
| Changes in microbial dynamics during long-term decomposition in tropical forests | paper/book | 2013 | DOI | luquillo |
| Changes in phosphatase kinetics with soil depth across a variable tropical landscape. | paper/book | 2014 | DOI | luquillo |
| Chapter 6 – Soil Geochemistry in the Critical Zone: Influence on Atmosphere, Surface- and Gr... | paper/book | 2015 | DOI | calhoun, catalina-jemez, luquillo |
| Characteristics of fog and fogwater fluxes in a Puerto Rican elfin cloud forest. | paper/book | 2006 (pre-2007) | archive page | luquillo |
| Chemical constituents in clouds and rainwater in the Puerto Rican rainforest: potential sour... | paper/book | 2013 | DOI | luquillo |
| Chemical weathering in a tropical watershed, Luquillo Mountains, Puerto Rico III: Quartz dis... | paper/book | 1999 (pre-2007) | archive page | luquillo |
| Common trees of Puerto Rico and the Virgin Islands | paper/book | 1964 (pre-2007) | archive page | luquillo |
| Comparison of total mercury and methylmercury cycling at five sites using the small watershe... | paper/book | 2008 | archive page | luquillo |
| Concentration-Discharge Relations in the Critical Zone: Implications for Resolving Critical ... | paper/book | 2017 | DOI | catalina-jemez, luquillo, national |
| Contrasting Fe speciation in two humid forest soils: Insight into organomineral associations... | paper/book | 2018 | DOI | luquillo |
| Controls on deep critical zone architecture: a historical review and four testable hypotheses | journal-article | 2016 | DOI | luquillo, national, shale-hills, sierra |
| Controls on Soil Carbon Stocks in El Yunque National Forest, Puerto Rico | journal-article | 2014 | DOI | luquillo |
| Controls on the Mg cycle in the tropics: insights from a case study at the Luquillo Critical... | paper/book | 2014 | DOI | luquillo |
| Critical zone structure controls concentration-discharge relationships and solute generation... | paper/book | 2017 | DOI | luquillo, national |
| Decoupling of sulfur and nitrogen cycling due to biotic processes in a tropical rainforest | paper/book | 2014 | DOI | luquillo |
| Differential effects of canopy trimming and litter deposition on litterfall and nutrient dyn... | paper/book | 2014 | archive page | luquillo |
| Disturbance and long-term patterns of rainfall and throughfall nutrient fluxes in a subtropi... | paper/book | 2007 | DOI | luquillo |
| Drought in the Critical Zone: Engaging Students in Authentic Inquiry Through Data Jam | paper/book | 2016 | archive page | luquillo, national |
| Dynamics and mechanics of tracer particles | posted-content | 2014 | DOI | luquillo |
| Dynamics of Redox Reactions Structure Decomposition and Greenhouse Gas Fluxes in Humid Tropi... | dissertation/thesis | 2013 | archive page | luquillo |
| Ecological Gradient Analyses in a Tropical Landscape: Ecological Bulletins 54 | paper/book | 2013 | archive page | luquillo |
| Effects of a tectonically-triggered wave of incision on riverine exports and soil mineralogy... | paper/book | 2015 | DOI | luquillo |
| Effects of chronic nitrogen additions on above- and belowground carbon dynamics in two tropi... | paper/book | 2011 | DOI | luquillo |
| Effects of hurricane disturbance on stream water concentrations and fluxes in eight tropical... | paper/book | 2000 (pre-2007) | archive page | luquillo |
| Effects of Hurricane-Felled Tree Trunks on Soil Carbon, Nitrogen, Microbial Biomass, and Roo... | paper/book | 2016 | archive page | luquillo |
| Erosional and climatic effects on long-term chemical weathering rates in granitic landscapes... | paper/book | 2004 (pre-2007) | DOI | luquillo |
| Extreme storms drive riverine particulate organic matter export from tropical mountians of e... | paper/book | 2017 | archive page | luquillo |
| Factors influencing storm-generated suspended-sediment concentrations and loads in four basi... | paper/book | 2012 | DOI | luquillo |
| Faster redox fluctuations can lead to higher iron reduction rates in humid forest soils | journal-article | 2018 | DOI | calhoun, luquillo |
| Fe II aq–Fe III oxide electron transfer and Fe exchange: effect of organic carbon | paper/book | 2014 | DOI | luquillo |
| Fe2+ catalyzed iron atom exchange and re-crystallization in a tropical soil | paper/book | 2015 | DOI | luquillo |
| Fog interception in a Puerto Rican elfin cloud forest: a wet-canopy water budget approach. | paper/book | 2010 | DOI | luquillo |
| Forest Assessment Plan El Yunque National Forest | report/proposal | 2014 | archive page | luquillo |
| Fractionation of yttrium and holmium during basaltic soil weathering | paper/book | 2013 | DOI | catalina-jemez, luquillo |
| Frederick N. Scatena: A tropical geomorphologist | paper/book | 2014 | DOI | luquillo |
| Generalized sorting profile for alluvial fans | paper/book | 2014 | archive page | luquillo |
| Geochemical Model of Redox Reactions in a Tropical Rain Forest Stream Riparian Zone: DOC Oxi... | dissertation/thesis | 2011 | archive page | luquillo |
| Geographic, environmental and biotic sources of variation in the nutrient relations of tropi... | paper/book | 2015 | DOI | luquillo |
| Geomorphology, disturbance, and the soil and vegetation of two subtropical wet steepland wat... | paper/book | 1995 (pre-2007) | archive page | luquillo |
| GIS prediction of rainfall and runoff volumes in eastern Puerto Rico | paper/book | 1996 (pre-2007) | archive page | luquillo |
| Halloysite Nanotubes and Bacteria at the Saprolite–Bedrock Interface, Rio Icacos Watershed, ... | paper/book | 2010 | archive page | luquillo |
| High mercury wet deposition at a “clean air” site in Puerto Rico | paper/book | 2015 | DOI | luquillo |
| Hot Spots and Hot Moments of Soil Moisture Explain Fluctuations in Iron and Carbon Cycling i... | paper/book | 2018 | DOI | luquillo |
| Hurricane Maria in the U.S. Caribbean: Disturbance Forces, Variation of Effects, and Implica... | paper/book | 2018 | DOI | luquillo |
| Hydrometeorology of tropical montane cloud forests: emerging patterns. | paper/book | 2010 | DOI | luquillo |
| Hysteretic response of solutes and turbidity at the event scale across forested tropical mon... | paper/book | 2019 | DOI | luquillo |
| Impact of ecohydrological fluctuations on iron-redox cycling | paper/book | 2019 | DOI | calhoun, luquillo |
| Impact of hydrologically driven hillslope erosion and landslide occurrence on soil organic c... | paper/book | 2016 | DOI | calhoun, luquillo |
| Impact of long-range transported African dust on cloud water chemistry at a tropical montane... | paper/book | 2016 | DOI | luquillo |
| Improving automated phosphorus measurements in freshwater: an analytical approach to elimina... | paper/book | 2014 | DOI | luquillo |
| Impulse framework for unsteady flows reveals super-diffusive bed load transport | paper/book | 2013 | DOI | luquillo |
| Incorporating urban infrastructure into biogeochemical assessment of urban tropical streams ... | paper/book | 2013 | DOI | luquillo |
| Influence of Linked Hydrologic and Geomorphic Processes on the Terrestrial Carbon Cycle | dissertation/thesis | 2017 | archive page | calhoun, luquillo |
| Influence of pO2 on iron redox cycling and anaerobic organic carbon mineralization in a humi... | paper/book | 2018 | DOI | calhoun, luquillo |
| Insights into plant water uptake from xylem-water isotope measurements in two tropical catch... | paper/book | 2016 | DOI | luquillo |
| Interactions between lithology and biology drive the long-term response of stream chemistry ... | paper/book | 2013 | DOI | luquillo |
| Interdisciplinary Teaching about Earth and the Environment for a Sustainable Future. Book Ch... | paper/book | 2018 | archive page | catalina-jemez, luquillo, national, shale-hills, sierra |
| Introduction: Caribbean Forest Dynamics and Regional Forestry Initiatives | paper/book | 2016 | archive page | luquillo |
| Investigating the complex interface where bedrock transforms to regolith. | paper/book | 2011 | DOI | luquillo, shale-hills |
| Iron addition to soil specifically stabilized lignin | paper/book | 2016 | DOI | luquillo |
| Iron oxidation stimulates organic matter decomposition in humid tropical forest soils | paper/book | 2013 | DOI | luquillo |
| Iron-Carbon Complexation at the Critical Zone: Impacts of Metal Speciation and Ligand Structure | dissertation/thesis | 2017 | archive page | luquillo |
| Large fluxes and rapid turnover of mineral-associated carbon across topographic gradients in... | paper/book | 2015 | DOI | luquillo |
| Lignin decomposition is sustained under fluctuating redox conditions in humid tropical fores... | paper/book | 2015 | DOI | luquillo |
| Limited uptake of nutrient input from sewage effluent in a tropical landscape | paper/book | 2016 | DOI | luquillo |
| Linking geomorphology, weathering and cation availability in the Luquillo Mountains of Puert... | paper/book | 2015 | DOI | luquillo |
| Lithological and fluvial controls on the geomorphology of tropical montane stream channels i... | paper/book | 2010 | DOI | luquillo |
| Lithological Influences on Contemporary and Long-Term Regolith Weathering at the Luquillo Cr... | paper/book | 2017 | DOI | luquillo |
| Litterfall Production Prior to and during Hurricanes Irma and Maria in Four Puerto Rican For... | paper/book | 2018 | DOI | luquillo |
| Long-term dynamics of organic matter and elements exported as coarse particulates from two C... | paper/book | 2012 | DOI | luquillo |
| Long-term patterns and short-term dynamics of stream solutes and suspended sediment in a rap... | paper/book | 2011 | DOI | luquillo |
| Luquillo Critical Zone Observatory Annual Report 2018 | report/proposal | 2018 | archive page | luquillo |
| Luquillo Critical Zone Observatory Annual Report 2019 | report/proposal | 2019 | archive page | luquillo |
| Luquillo Experimental Forest: Research History and Opportunities | report/proposal | 2012 | archive page | luquillo |
| Luquillo Experimental Forest: Research History and Opportunities. Experimental Forests and R... | paper/book | 2012 | archive page | luquillo |
| Macrosystems ecology: understanding ecological patterns and processes at continental scales | paper/book | 2014 | DOI | luquillo |
| Methodological Considerations in the Study of Earthworms in Forest Ecosystems | paper/book | 2017 | DOI | luquillo |
| Mineral-specific chemical weathering rates over millennial timescales: Measurements at Rio I... | paper/book | 2010 | DOI | luquillo, sierra |
| Mineralogy of Soils Overlying the Two Main Geologic Provinces of the El Yunque National Fore... | dissertation/thesis | 2011 | archive page | luquillo |
| Mixing as a driver of temporal variations in river hydrochemistry: 1. Insights from conserva... | paper/book | 2017 | DOI | luquillo |
| Modeling rainfall interception by a lowland tropical rain forest in northeastern Puerto Rico | paper/book | 1999 (pre-2007) | archive page | luquillo |
| Molybdenum isotope fractionation in soils: Influence of redox conditions, organic matter, an... | paper/book | 2015 | DOI | luquillo |
| Monarchs and the Critical Zone: A new spin on the study of butterflies | paper/book | 2016 | archive page | luquillo, national |
| Natural Weathering Rates of Silicate Minerals.. In Drever, J.I., ed. Surface and Ground Wate... | paper/book | 2014 | DOI | luquillo |
| NEON and STREON: opportunities and challenges for the aquatic sciences. | paper/book | 2014 | archive page | luquillo |
| New high precision approach for measuring 15N–N2 gas fluxes from terrestrial ecosystems | paper/book | 2014 | DOI | luquillo |
| Nitrogen Availability and Loss from Managed and Unmanaged Ecosystems. | dissertation/thesis | 2016 | archive page | luquillo |
| Nutrient export and elemental stoichiometry in an urban tropical river | paper/book | 2019 | DOI | luquillo |
| Occurrence of halloysite nanotubes and bacteria at the interface between saprolite and quart... | paper/book | 2011 | archive page | luquillo |
| Optimized high-throughput methods for quantifying iron biogeochemical dynamics in soil | paper/book | 2017 | DOI | luquillo |
| Order from disorder: do soil organic matter composition and turnover co-vary with iron phase... | journal-article | 2018 | DOI | luquillo |
| Parameter Uncertainty in Shallow Rainfall-Triggered Landslide Modeling at Basin Scale: a Pro... | paper/book | 2014 | DOI | luquillo |
| Parent material and topography determine soil phosphorus status in the Luquillo Mountains of... | paper/book | 2013 | DOI | luquillo |
| Parent material and vegetation influence bacterial community structure and nitrogen function... | paper/book | 2015 | DOI | luquillo |
| phosphorus cycling in deep saprolite, Luquillo Mountains, Puerto Rico | paper/book | 2010 | DOI | luquillo |
| Physical, Chemical, and Biological Properties of Soil under Decaying Wood in a Tropical Wet ... | paper/book | 2016 | archive page | luquillo |
| Physically based modeling of rainfall-triggered landslides: a case study in the Luquillo for... | paper/book | 2013 | DOI | luquillo |
| Plant and nutrient controls on microbial functional characteristics in a tropical Oxisol | paper/book | 2013 | DOI | luquillo |
| Porescale Geochemical Processes, Chapter 10: How porosity increases during incipient weather... | paper/book | 2015 | archive page | luquillo |
| Porosity and surface area evolution during weathering of igneous rocks | paper/book | 2013 | DOI | luquillo |
| Potential for iron reduction increases with rainfall in montane basaltic soils of Hawaii | paper/book | 2018 | DOI | calhoun, luquillo |
| Pre-exposure to short-term drought increases the resistance of subtropical forest soil bacte... | paper/book | 2013 | DOI | luquillo |
| Precipitation isotopes link regional climate patterns to water supply in a tropical mountain... | paper/book | 2014 | DOI | luquillo |
| Prediction of Master Recession Curves and Baseflow Recessions in the Luquillo Mountains of P... | paper/book | 2002 (pre-2007) | archive page | luquillo |
| Probing the deep critical zone beneath the Luquillo Experimental Forest, Puerto Rico | paper/book | 2013 | DOI | luquillo |
| Quantifying effects of deep and near-surface chemical erosion on cosmogenic nuclide buildup ... | paper/book | 2013 | DOI | luquillo, sierra |
| Quantifying the significance of abrasion and selective transport for downstream fluvial grai... | paper/book | 2014 | DOI | luquillo |
| Rainfall-induced landslide susceptibility zonation of Puerto Rico | paper/book | 2011 | DOI | luquillo |
| Rapid iron reduction rates are stimulated by high-amplitude redox fluctuations in a tropical... | paper/book | 2017 | DOI | luquillo |
| Rapid regolith formation over volcanic bedrock and implications for landscape evolution | paper/book | 2012 | DOI | luquillo |
| Reassessing rainfall in the Luquillo Mountains, Puerto Rico: Local and global ecohydrologica... | paper/book | 2017 | DOI | luquillo |
| Reassessing the dissolved molybdenum isotopic composition of ocean inputs: The effect of che... | paper/book | 2018 | DOI | catalina-jemez, luquillo, national |
| Recognizing the importance of tropical forests in limiting rainfall-induced debris flows | paper/book | 2011 | DOI | luquillo |
| Reconstructing the transport history of pebbles on Mars | paper/book | 2015 | DOI | luquillo |
| Redox fluctuations in a humid tropical forest soil impact N-cycling rates by framing the com... | paper/book | 2006 (pre-2007) | archive page | luquillo |
| Reduced channel morphological response to urbanization in a flood-dominated humid tropical e... | paper/book | 2012 | DOI | luquillo |
| Reducing bias and quantifying uncertainty in watershed flux estimates: The R package loadflex | paper/book | 2015 | DOI | luquillo |
| Reducing conditions, reactive metals, and their interactions can explain spatial patterns of... | paper/book | 2015 | DOI | luquillo |
| Reduction of Bedrock blocks as corestones in the weathering Profile: Observations and Model. | paper/book | 2010 | DOI | luquillo |
| Regolith formation rate from U-series nuclides: Implications from the study of a spheroidal ... | paper/book | 2013 | DOI | luquillo |
| Relating microbial community structure and geochemistry in deep regolith developed on volcan... | paper/book | 2015 | DOI | luquillo |
| Relating the biological stability of soil organic matter to energy availability in deep trop... | paper/book | 2015 | DOI | luquillo |
| Relict landscape resistance to dissection by upstream migrating knickpoints | paper/book | 2016 | DOI | luquillo |
| Reviews and syntheses: measuring ecosystem nitrogen status – a comparison of proxies | paper/book | 2016 | DOI | luquillo |
| Riparian indicators of flow frequency in a tropical montane stream network | paper/book | 2010 | archive page | luquillo |
| Self-organization of river channels as a critical filter on climate signals | paper/book | 2016 | DOI | luquillo |
| Sensitivity of Soil Respiration to Variability in Soil Moisture and Temperature in a Humid T... | paper/book | 2013 | DOI | luquillo |
| Separate effects of flooding and anaerobiosis on soil greenhouse gas emissions and redox sen... | paper/book | 2014 | DOI | luquillo |
| Short-Term Precipitation and Temperature Trends along an Elevation Gradient in Northeastern ... | paper/book | 2014 | DOI | luquillo |
| Soil Biology Research across Latitude, Elevation and Disturbance Gradients: A Review of Fore... | paper/book | 2017 | DOI | luquillo |
| Soil microbial communities and soil organic matter: composition and ecological functions in ... | dissertation/thesis | 2014 | archive page | luquillo |
| Soil oxygen availability and biogeochemistry along rainfall and topographic gradients in upl... | paper/book | 1999 (pre-2007) | archive page | luquillo |
| Soil phosphorus fractionation during forest development on landslide scars in the Luquillo M... | paper/book | 2002 (pre-2007) | archive page | luquillo |
| Spatial patterns in oxygen and redox sensitive biogeochemistry in tropical forest soils | paper/book | 2015 | DOI | luquillo |
| Spatial variability of African dust in soils in a montane tropical landscape in Puerto Rico | paper/book | 2015 | DOI | luquillo |
| Special issue of The Earth Scientist about the Critical Zone and the US NSF Critical Zone Ob... | paper/book | 2016 | archive page | calhoun, luquillo, national, sierra |
| Stable-isotope and solute-chemistry approaches to flow characterization in a forested tropic... | paper/book | 2015 | DOI | luquillo |
| Steering Committee report for Reynolds Creek CZO site visit and PI meeting | report/proposal | 2016 | archive page | luquillo, national |
| Stormflow generation in a small rain-forest catchment in the Luquillo Experimental Forest, P... | paper/book | 2004 (pre-2007) | archive page | luquillo |
| Streams of the Montane Humid Tropics | paper/book | 2011 | archive page | luquillo |
| The anatomy of weathering profiles on different lithologies in the tropical forest of northe... | dissertation/thesis | 2014 | archive page | luquillo |
| The Causes and Consequences of Particle Size Change in Fluvial Systems | dissertation/thesis | 2014 | archive page | luquillo |
| The Control of Grain-Scale Mechanincs on Channel Form Landscape Dynamics, and Climatic Pertu... | dissertation/thesis | 2014 | archive page | luquillo |
| The effects of lithology on trace element and REE behavior during tropical weathering | paper/book | 2018 | DOI | luquillo |
| The Food Web of a Tropical Rain Forest | paper/book | 1996 (pre-2007) | archive page | luquillo |
| The influence of critical zone processes on the Mg isotope budget in a tropical, highly weat... | paper/book | 2017 | DOI | luquillo |
| The null hypothesis: steady rates of erosion, weathering and sediment accumulation during La... | paper/book | 2016 | DOI | luquillo |
| The role of pH, organic matter composition and mineralogy on the sorption behavior of beryll... | paper/book | 2016 | DOI | luquillo |
| Tracking evolution of urban biogeochemical cycles: past,present, and future | paper/book | 2014 | archive page | luquillo |
| Transient O2 pulses direct Fe crystallinity and Fe(III)-reducer gene expression within a soi... | journal-article | 2018 | DOI | luquillo |
| Tropical Forests: Management and Ecology | paper/book | 1995 (pre-2007) | archive page | luquillo |
| Tropical Montane Cloud Forests: Science for Conservation and Management. | paper/book | 2010 | DOI | luquillo |
| Tropical river suspended sediment and solute dynamics in storms during an extreme drought | paper/book | 2017 | DOI | luquillo |
| Underlying lithology controls trace metal mobilization during redox fluctuations | paper/book | 2019 | DOI | luquillo |
| Understanding fracture distribution and its relation to knickpoint evolution in the Rio Icac... | paper/book | 2018 | DOI | luquillo |
| Urban Evolution: The Role of Water | paper/book | 2015 | DOI | luquillo |
| Variation in below ground carbon storage and soil CO2 flux rates along a wet tropical climat... | paper/book | 2000 (pre-2007) | archive page | luquillo |
| Vegetation-Hydrology Dynamics in Complex Terrain of Semiarid Areas: II. Energy-Water Control... | paper/book | 2008 | archive page | luquillo |
| Water quality and landscape processes of four watersheds in eastern Puerto Rico | paper/book | 2012 | archive page | luquillo |
| Weathering and erosion of fractured bedrock systems | paper/book | 2017 | DOI | luquillo |
| Weathering of the Rio Blanco quartz diorite, Luquillo mountains, Puerto Rico: Coupling oxida... | paper/book | 2008 | archive page | luquillo |
| Wet canopy evaporation from a Puerto Rican lower montane rain forest: the importance of real... | paper/book | 2012 | DOI | luquillo |
| When Wet Gets Wetter: Decoupling of Moisture, Redox Biogeochemistry, and Greenhouse Gas Flux... | paper/book | 2013 | DOI | luquillo |

## Left out for the HydroShare reason (item 2)

| Title | HydroShare address | Answer |
|---|---|---|
| Bisley - Nutrient Fluxes, Stable Isotopes - Mg concentrations and i... | https://www.hydroshare.org/resource/715ffe3828d349d5ae134374ed84dcc3/ | 403 |
| Bisley - Soil Redox Potential - Redox cycling (2018) | https://www.hydroshare.org/resource/d8b725b81bba4bfb8386e30c834e4254/ | 403 |
| Bisley and Icacos - Geology, Regolith Survey - Regolith weathering ... | https://www.hydroshare.org/resource/5cec195d9d5c40ac92be2319ba4cd6ce/ | 403 |
| Bisley and Icacos - Geology, Regolith Survey - trace and rare earth... | https://www.hydroshare.org/resource/c801344fcb464624abd0a4ba3fc75d10/ | 403 |
| El Verde Field Station - Soil Biogeochemistry - Phosphorus fraction... | https://www.hydroshare.org/resource/240d315436414dc192c316f434cab5de/ | 403 |
| Icacos and Quebrada Sonadora - Streamflow / Discharge, Stream Suspe... | https://www.hydroshare.org/resource/c0adedc79a954bcd81e62a063ae2cbbf/ | 403 |
| Luquillo Mountains - Geophysics, Ground Penetrating Radar (GPR) (20... | https://www.hydroshare.org/resource/6bacd957168747f4af8537006205684d/ | 403 |
| Northeastern Puerto Rico - Soil Biogeochemistry - soil organic matt... | https://www.hydroshare.org/resource/b3e1dcd0559a43b19e5d36a84a1f55a2/ | 403 |
| Rio Mameyes and Rio Icacos - Stream Suspended Sediment, Streamflow ... | https://www.hydroshare.org/resource/818ecb27e5fb4469bb72283d15b52800/ | 403 |

## Sample check (rule 12)

Read in the harvest file, each matched to its row above:

papers with a DOI: Limited uptake of nutrient input from sewage (2016); Stable-isotope and solute-chemistry approache (2015); Nutrient export and elemental stoichiometry i (2019)

archive-page papers: Stormflow generation in a small rain-forest c (2004); Special issue of The Earth Scientist about th (2016); Tracking evolution of urban biogeochemical cy (2014)

datasets: LCZO -- Overland Water Chemistry, Nutrient Fl; LCZO -- Meteorology, Ozone -- Bisley -- (2008; LCZO -- Tropical river suspended sediment and

Also read: one pre-2007 paper (nitrogen budget, tabonuco forest, 1999) has no `era`; the two records with a damaged `repository` have none. Not opened by hand: the two same-titled Throughfall datasets' pages, beyond the HydroShare answer of 200 for each.
