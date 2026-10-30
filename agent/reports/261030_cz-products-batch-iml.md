# Products batch 4: Intensively Managed Landscapes (proposal for epic T11)

Date: 30 October 2026. Ticket: CUAHSI/CUAHSI3-website#76 (T11). Branch `task/cz-products-iml-proposal`. **Proposal step of "Propose, then apply". Nothing in `content/` has been changed.** Source: `agent/reports/261029_cz-harvest-proposal.json`, every record whose `sites` includes `iml`, minus what `content/critical-zone/products.json` already holds (batches 1 to 3, 377 records).

Rules carried over (Jordan): talks and posters held out; award numbers found only in venue text stay unlinked and flagged; proposals do not belong in the list; `provenance` not in the file; one file for the whole list.

## Counts

| | Count |
|---|---|
| Records tagged `iml` | 238 (41 datasets, 197 papers) |
| Already in the list (same DOI, HydroShare id or address) | 14 |
| Held out: talks and posters | 11 |
| Held out: HydroShare addresses that did not answer | 0 |
| **Proposed for this batch** | **213** (39 datasets, 174 papers) |
| Of the papers: paper/book 163, report/proposal 7, journal-article 4 | |
| Papers with a DOI / archive page only | 151 / 23 |
| Datasets with a DOI / HydroShare address with no DOI | 0 / 39 |
| Records with no year | 39 (all datasets) |
| Records tagged with more than two sites | 0 |
| Datasets tagged `national` as well as `iml` | 39 |

## Link check (before proposing)

Every DOI was looked up at doi.org (handle lookup) and every HydroShare address requested once. Of 151 DOIs and 39 HydroShare addresses, 3 problems, all DOIs; each is handled below. No HydroShare address failed. The 23 archive-page addresses were not opened (they stop working in August 2027). A resolving DOI is not proof it is the right paper.

## Things I changed or left out (mine; your call on each)

1. **Three ASCE DOIs damaged in the archive text (all 404).** Crossref gives the repair for each and the repaired DOI answers at doi.org; I proposed each with the repaired DOI.
   - "High-frequency diel dissolved Oxygen stream data modeled for variable temperature and scale" (2009): archive `10.1061/ASCEEE.1943-7870.0000102`; Crossref `10.1061/(ASCE)EE.1943-7870.0000102`, same title, December 2009.
   - "Uncertainty of weekly nitrate forecasts using artificial neural networks" (2003): archive `...129:3(267` (closing bracket missing); Crossref `10.1061/(ASCE)0733-9372(2003)129:3(267)`, title "Uncertainty of Weekly Nitrate-Nitrogen Forecasts Using Artificial Neural Networks", March 2003. The titles differ by one word; the volume and pages in the archive text (129(3):267-274) match.
   - "Upland erosion modeling in a semi-humid environment via the Water Erosion Prediction Project model" (2008): archive `...134:6(796` (closing bracket missing); Crossref `10.1061/(ASCE)0733-9437(2008)134:6(796)`, title "...Semihumid Environment...", December 2008.
2. **11 talks and posters held out**, per your rule.
3. **Four annual reports cite award 1331906 only in their venue text** ("NSF Award #1331906": the 2015, 2017, 2018 and 2019 annual reports). `awards` is left unset on all four, as you decided (the registry does hold 1331906, so mapping them is possible whenever you want it); they are in your list to revisit with the seven already flagged in the Noticed list.
4. **Seven archive-typed report/proposal records** are typed `paper` (the schema has no report type). Four are the IML annual reports above; the others are state or contract reports (Iowa DNR 2006, Illinois State Water Survey 2010 and 2011, Minnesota Department of Agriculture 2012). None is a proposal to a funder. The Lake Decatur report's venue text reads "Contract Report in Review 2010"; I read that as a report type, not a manuscript status.
5. **Papers with no DOI** (23) were merged by the harvest on title, year and section; not read against their pages.
6. **The 39 datasets have no year** (C3) and are all tagged `national` as well; they come from the cross-CZO data listing.
7. **One record is already loaded:** "Threshold Dynamics in Soil Carbon Storage for Bioenergy Crops" was loaded in batch 3 with sites iml and reynolds. It is among the 14 already in the list.

## Proposed items

### Datasets (39)

| Title | Kind | Year | Address | Sites |
|---|---|---|---|---|
| IMLCZO -- Flux Tower -- Ameriflux -- Bondville, Illinois -- (1996-2009) | dataset |  | HydroShare (no DOI) | iml, national |
| IMLCZO -- Flux Tower -- Ameriflux -- Bondville, Illinois -- (2007-2013) | dataset |  | HydroShare (no DOI) | iml, national |
| IMLCZO -- Flux Tower -- Flux Tower -- Mansfield, Illinois -- (2016-2019) | dataset |  | HydroShare (no DOI) | iml, national |
| IMLCZO -- GIS/Map Data -- Spatial and GIS Data -- Illinois -- (2017-2017) | dataset |  | HydroShare (no DOI) | iml, national |
| IMLCZO -- GIS/Map Data -- Spatial and GIS Data -- Iowa -- (2017-2017) | dataset |  | HydroShare (no DOI) | iml, national |
| IMLCZO -- GIS/Map Data -- Spatial and GIS Data -- Upper Sangamon River Basin, Illinois -- (2... | dataset |  | HydroShare (no DOI) | iml, national |
| IMLCZO -- GIS/Map Data -- Spatial and GIS Data -- Upper Sangamon River Basin, Illinois, and ... | dataset |  | HydroShare (no DOI) | iml, national |
| IMLCZO -- GIS/Map Data, LiDAR -- Spatial and GIS Data -- Clear Creek, Iowa -- (2017-2017) | dataset |  | HydroShare (no DOI) | iml, national |
| IMLCZO -- GIS/Map Data, LiDAR -- Spatial and GIS Data -- Illinois -- (2017-2017) | dataset |  | HydroShare (no DOI) | iml, national |
| IMLCZO -- GIS/Map Data, LiDAR -- Spatial and GIS Data -- Sangamon, Illinois -- (2017-2017) | dataset |  | HydroShare (no DOI) | iml, national |
| IMLCZO -- GIS/Map Data, LiDAR -- Spatial and GIS Data -- Upper Sangamon River Basin, Illinoi... | dataset |  | HydroShare (no DOI) | iml, national |
| IMLCZO -- GIS/Map Data, LiDAR -- UAS4TileDrain Materials -- Illinois -- (2018-2018) | dataset |  | HydroShare (no DOI) | iml, national |
| IMLCZO -- Groundwater Chemistry, Well Water Levels -- Groundwater and Barometric Pressure Da... | dataset |  | HydroShare (no DOI) | iml, national |
| IMLCZO -- Hydropedologic Properties, Stage -- Tiles -- Allerton Trust Farm, Illinois -- (201... | dataset |  | HydroShare (no DOI) | iml, national |
| IMLCZO -- Lysimeter Water Samples Chemistry, Meteorology, Soil Electrical Resistivity, Soil ... | dataset |  | HydroShare (no DOI) | iml, national |
| IMLCZO -- Meteorology -- Atmospheric -- Allerton Trust Farm, Illinois -- (2016-2019) | dataset |  | HydroShare (no DOI) | iml, national |
| IMLCZO -- Meteorology -- Atmospheric -- Fowler Farm, Illinois -- (2017-2017) | dataset |  | HydroShare (no DOI) | iml, national |
| IMLCZO -- Meteorology -- Precipitation Station -- Clinton, Decatur, Gibson, Monticello, Rant... | dataset |  | HydroShare (no DOI) | iml, national |
| IMLCZO -- Meteorology -- SRFP -- Sangamon River Forest Preserve, Illinois -- (2014-2015) | dataset |  | HydroShare (no DOI) | iml, national |
| IMLCZO -- Meteorology, Soil Electrical Resistivity, Soil Geochemistry, Soil Moisture, Soil T... | dataset |  | HydroShare (no DOI) | iml, national |
| IMLCZO -- Meteorology, Soil Electrical Resistivity, Soil Geochemistry, Soil Moisture, Soil T... | dataset |  | HydroShare (no DOI) | iml, national |
| IMLCZO -- Meteorology, Stage, Surface Water Chemistry -- Surface Water -- Big Ditch, Camp Cr... | dataset |  | HydroShare (no DOI) | iml, national |
| IMLCZO -- Soil Electrical Resistivity, Soil Geochemistry, Soil Moisture, Soil Temperature, S... | dataset |  | HydroShare (no DOI) | iml, national |
| IMLCZO -- Soil Electrical Resistivity, Soil Geochemistry, Soil Moisture, Soil Temperature, S... | dataset |  | HydroShare (no DOI) | iml, national |
| IMLCZO -- Soil Electrical Resistivity, Soil Geochemistry, Soil Moisture, Soil Temperature, S... | dataset |  | HydroShare (no DOI) | iml, national |
| IMLCZO -- Soil Electrical Resistivity, Soil Geochemistry, Soil Moisture, Soil Temperature, S... | dataset |  | HydroShare (no DOI) | iml, national |
| IMLCZO -- Soil Electrical Resistivity, Soil Geochemistry, Soil Moisture, Soil Temperature, S... | dataset |  | HydroShare (no DOI) | iml, national |
| IMLCZO -- Soil Electrical Resistivity, Soil Geochemistry, Soil Moisture, Soil Temperature, S... | dataset |  | HydroShare (no DOI) | iml, national |
| IMLCZO -- Soil Electrical Resistivity, Soil Geochemistry, Soil Moisture, Soil Temperature, S... | dataset |  | HydroShare (no DOI) | iml, national |
| IMLCZO -- Soil Electrical Resistivity, Soil Geochemistry, Soil Moisture, Soil Temperature, S... | dataset |  | HydroShare (no DOI) | iml, national |
| IMLCZO -- Soil Electrical Resistivity, Soil Geochemistry, Soil Moisture, Soil Temperature, S... | dataset |  | HydroShare (no DOI) | iml, national |
| IMLCZO -- Soil Electrical Resistivity, Soil Geochemistry, Soil Moisture, Soil Temperature, S... | dataset |  | HydroShare (no DOI) | iml, national |
| IMLCZO -- Soil Electrical Resistivity, Soil Geochemistry, Soil Moisture, Soil Temperature, S... | dataset |  | HydroShare (no DOI) | iml, national |
| IMLCZO -- Soil Electrical Resistivity, Soil Geochemistry, Soil Moisture, Soil Temperature, S... | dataset |  | HydroShare (no DOI) | iml, national |
| IMLCZO -- Soil Electrical Resistivity, Soil Geochemistry, Soil Moisture, Soil Temperature, S... | dataset |  | HydroShare (no DOI) | iml, national |
| IMLCZO -- Soil Electrical Resistivity, Soil Geochemistry, Soil Moisture, Soil Temperature, S... | dataset |  | HydroShare (no DOI) | iml, national |
| IMLCZO -- Stream Suspended Sediment -- Surface Water -- Monticello, Illinois -- (2015-2017) | dataset |  | HydroShare (no DOI) | iml, national |
| IMLCZO -- Surface Water Chemistry -- Surface Water -- Monticello, Illinois -- (2017-2018) | dataset |  | HydroShare (no DOI) | iml, national |
| IMLCZO -- Surface Water Chemistry, Chlorophyll -- Surface Water -- Church, Illinois -- (2014... | dataset |  | HydroShare (no DOI) | iml, national |

### Papers (174)

| Title | Kind | Year | Address | Sites |
|---|---|---|---|---|
| 6R-tetrahydrobiopterin treated PKU patients below 4years of age: Physical outcomes, nutritio... | paper/book | 2015 | DOI | iml |
| A 1-D Morphodynamic Model for Rill Erosion | paper/book | 2010 | DOI | iml |
| A Changing Climatology of Precipitation Persistence across the United States Using Informati... | paper/book | 2019 | DOI | iml |
| A computationally efficient approach for watershed scale spatial optimization | paper/book | 2015 | DOI | iml |
| A Framework for Global Characterization of Soil Properties Using Repeat Hyperspectral Satell... | paper/book | 2018 | DOI | iml |
| A graphical user interface for numerical modeling of acclimation responses of vegetation to ... | paper/book | 2012 | DOI | iml |
| A Model for Knickpoint Migration in First- and Second-order Streams | paper/book | 2014 | DOI | iml |
| A new dynamic wetness index (DWI) predicts soil moisture persistence and correlates with key... | paper/book | 2020 | DOI | iml |
| A sediment composite fingerprinting tool: A field-based quantification method of the sedimen... | report/proposal | 2006 | archive page | iml |
| A service-oriented architecture for coupling web service models using the Basic Model Interf... | paper/book | 2017 | DOI | iml |
| A stability analysis of semi-cohesive streambanks with CONCEPTS: Couple field and laboratory... | paper/book | 2014 | DOI | iml |
| A Web Tool for STORET/WQX Water Quality Data Retrieval and Best Management Practice Scenario... | paper/book | 2015 | DOI | iml |
| Adaptive targeting: Engaging farmers to improve targeting and adoption of agricultural conse... | paper/book | 2015 | DOI | iml |
| Amino acid geochronology of gastropod-bearing Pleistocene units in Illinois, central USA | paper/book | 2015 | DOI | iml |
| An analysis of conservation practice adoption studies in agricultural human-natural systems | paper/book | 2019 | DOI | iml |
| An enhanced Bayesian fingerprinting framework for studying sediment source dynamics in inten... | paper/book | 2016 | DOI | iml |
| Analyzing high resolution topography for advancing the understanding of mass and energy tran... | paper/book | 2015 | DOI | iml |
| Antecedent Moisture Controls on Stream Nitrate Flux in an Agricultural Watershed | paper/book | 2014 | DOI | iml |
| Belowground competition among invading detritivores | paper/book | 2016 | DOI | iml |
| Bi-national research and education cooperation in the US-China EcoPartnership for Environmen... | paper/book | 2015 | DOI | iml |
| Bundled Causal History Interaction | paper/book | 2020 | DOI | iml |
| Ca isotope stratigraphy across the Cenomanian-Turonian OAE 2: links between volcanism, seawa... | paper/book | 2015 | DOI | iml |
| Carbon isotopic composition of lignin biomarkers: Evidence of grassland over the Gangetic pl... | paper/book | 2015 | DOI | iml |
| Carbonate mineral identification and quantification in sediment matrices using diffuse refle... | paper/book | 2020 | DOI | iml |
| Chapter 65: Channel Erosion and Sediment Transport. | paper/book | 2017 | archive page | iml |
| Chapter 9: The Role of Management and Landscape on Aggregate Characteristics with the Soil A... | paper/book | 2019 | archive page | iml |
| Characterizing Relative Degrees of Clumping Structure in Vegetation Canopy using Waveform LiDAR | paper/book | 2019 | DOI | iml |
| Characterizing Vegetation Canopy Structure Using Airborne Remote Sensing Data | paper/book | 2016 | DOI | iml |
| Climatic and biotic controls on silt production and accumulation of loess | paper/book | 2012 | archive page | iml |
| Comment on ‘‘Climate and agricultural land use change impacts on streamflow in the upper mid... | paper/book | 2016 | DOI | iml |
| Control of tillage disturbance on the chemistry and proportion of raindrop-liberated particl... | paper/book | 2018 | DOI | iml |
| Coupled reversion and stream-hyporheic exchange processes increase environmental persistence... | paper/book | 2015 | DOI | iml |
| Coupling flow with nutrient dynamics via BioChemFOAM in the Mississippi River | paper/book | 2017 | DOI | iml |
| Coupling freshwater mussel ecology and river dynamics using a simplified dynamic interaction... | paper/book | 2016 | DOI | iml |
| Critical Agents of Change at Earth’s Surface | paper/book | 2020 | DOI | iml |
| Critical Transition in Critical Zone of Intensively Managed Landscapes | paper/book | 2018 | DOI | iml |
| Critical Zone Observatory for Intensively Managed Landscapes (IML-CZO) Annual Report 2015 | paper/book | 2015 | archive page | iml |
| Critical Zone services as environmental assessment criteria in intensively managed landscapes | paper/book | 2017 | DOI | iml |
| Debates—Does Information Theory Provide a New Paradigm for Earth Science? | paper/book | 2020 | DOI | iml |
| Debates—Does Information Theory Provide a New Paradigm for Earth Science? Causality, Interac... | paper/book | 2020 | DOI | iml |
| Decreasing, not increasing, leaf area will raise crop yields under global atmospheric change | paper/book | 2016 | DOI | iml |
| Defining Soil and Water Assessment Tool (SWAT) hydrologic response units (HRUs) by field bou... | paper/book | 2015 | DOI | iml |
| Deglacial hydroclimate of midcontinental North America | paper/book | 2015 | DOI | iml |
| Discerning the thermodynamic feasibility of the spontaneous coexistence of multiple function... | paper/book | 2020 | DOI | iml |
| Dynamic Assessment of Current Management in an Intensively Managed Agroecosystem | paper/book | 2016 | archive page | iml |
| Ecohydrological responses of dense canopies to environmental variability: 1. Interplay betwe... | paper/book | 2010 | DOI | iml |
| Ecohydrological responses of dense canopies to environmental variability: 2. Role of acclima... | paper/book | 2010 | DOI | iml |
| Ecosystem services in Indiana agriculture: farmer and conservation perceptions | paper/book | 2015 | DOI | iml |
| Edaphic controls on soil organic carbon stocks in restored grasslands | paper/book | 2015 | DOI | iml |
| Effect of conservation practice implementation by USDA programs at field and watershed scales | paper/book | 2015 | archive page | iml |
| Effects of Land Cover on Streamflow Variability in a Small Iowa Watershed: Assessing Future ... | paper/book | 2015 | DOI | iml |
| Emergent and divergent resilience behavior in catastrophic shift systems | paper/book | 2014 | DOI | iml |
| Enhanced Vadose Zone Nitrogen Removal by Poplar During Dormancy | paper/book | 2015 | DOI | iml |
| Equilibrium Cross Section of River Channels With Cohesive Erodible Banks | paper/book | 2020 | DOI | iml |
| Estimation of the runoff curve number via direct rainfall simulator measurements in the stat... | paper/book | 2009 | DOI | iml |
| Evaluating the effects of grassed waterways in southeastern Iowa | paper/book | 2010 | DOI | iml |
| Floodplains as a Source of Fine Sediment in Grazed Landscapes: Tracing the Source of Suspend... | paper/book | 2018 | DOI | iml |
| Flow Resistance Interactions on Hillslopes With Heterogeneous Attributes: Effects on Runoff ... | paper/book | 2018 | DOI | iml |
| From soilscapes to landscapes: A landscape-oriented approach to simulate soil organic carbon... | paper/book | 2015 | DOI | iml |
| Functional Topology of Evolving Urban Drainage Networks | paper/book | 2017 | DOI | iml |
| GPU-based high-performance computing for integrated surface–sub-surface flow modeling | paper/book | 2015 | DOI | iml |
| Groundwater Monitoring at the Watershed Scale: An Evaluation of Recharge and Nonpoint Source... | paper/book | 2018 | DOI | iml |
| Harnessing emerging technologies to reduce Gulf hypoxia | paper/book | 2019 | archive page | iml |
| High-frequency diel dissolved Oxygen stream data modeled for variable temperature and scale | paper/book | 2009 | DOI | iml |
| Historical Changes in Channel Network Extent and Channel Planform in an Intensively Managed ... | paper/book | 2018 | DOI | iml |
| How does reach‐scale stream‐hyporheic transport vary with discharge? Insights from rSAS anal... | journal-article | 2016 | DOI | iml |
| Hydrocomplexity: Addressing Water Security and Emergent Environmental Risks | paper/book | 2015 | DOI | iml |
| Hydrogeomorphic controls on hyporheic and riparian transport in two headwater mountain strea... | paper/book | 2016 | DOI | iml |
| Hydrogeomorphological differentiation between floodplains and terraces | paper/book | 2017 | DOI | iml |
| Hydrologic and nutrient monitoring of the Lake Decatur Watershed: Final Report 1993–2008 | report/proposal | 2010 | archive page | iml |
| Hydrologic/water quality impacts and biomass production potential on marginal lands | paper/book | 2015 | DOI | iml |
| Hyporheic exchange controlled by dynamic hydrologic boundary conditions | paper/book | 2016 | DOI | iml |
| Identification and characterization of information-networks in long-tail data collections | paper/book | 2017 | DOI | iml |
| Impact of Euro-American Settlement on a Riparian Landscape in Midwestern USA: An Integrated ... | paper/book | 1993 | DOI | iml |
| Impact of Hydraulic Redistribution on Multispecies Vegetation Water Use in a Semiarid Savann... | paper/book | 2018 | DOI | catalina-jemez, iml |
| Impact of sample preparation methods for characterizing the geochemistry of soils and sedime... | paper/book | 2019 | DOI | iml |
| Impact of the numbers of observations and calibration parameters on equifinality, model perf... | paper/book | 2015 | DOI | iml |
| Impacts of Hydraulic Redistribution on Grass-tree Competition vs. Facilitation in a Semi-ari... | paper/book | 2017 | DOI | catalina-jemez, iml |
| Impacts of Quaternary History on Critical Zone Structure and Processes: Examples and a Conce... | journal-article | 2018 | DOI | iml |
| Impacts of Subsurface Tile Drainage on Age–Concentration Dynamics of Inorganic Nitrogen in Soil | paper/book | 2019 | DOI | iml |
| Implications for the hydrologic cycle under climate change due to the expansion of bioenergy... | paper/book | 2011 | DOI | iml |
| In situ sensing to understand diel turbidity cycles, suspended solids, and nutrient transpor... | paper/book | 2009 | DOI | iml |
| Incipient changes of lignin and substituted fatty acids under N addition in a Chinese forest... | paper/book | 2015 | DOI | iml |
| Information Theoretic Measures to Infer Feedback Dynamics in Coupled Logistic Networks | paper/book | 2015 | DOI | iml |
| Information transfer from causal history in complex system dynamics | paper/book | 2019 | DOI | iml |
| Integrating Hydrodynamic Models and Satellite Images to Implement Erosion Control Measures a... | paper/book | 2019 | DOI | iml |
| Integrating Unmanned Aerial Systems and LSPIV for Rapids, Cost-Effective Stream Gauging | paper/book | 2018 | DOI | iml |
| Intensively Managed Landscapes CZO Annual Report 2017 | report/proposal | 2017 | archive page | iml |
| Intensively Managed Landscapes CZO Annual Report 2018 | report/proposal | 2018 | archive page | iml |
| Intensively Managed Landscapes CZO Annual Report 2019 | report/proposal | 2019 | archive page | iml |
| Interaction Between Ecohydrologic Dynamics and Microtopographic Variability Under Climate Ch... | paper/book | 2017 | DOI | iml |
| Interactions of information transfer along separable causal paths | paper/book | 2018 | DOI | iml |
| Landscape change in an agricultural watershed in the U.S. Midwest | paper/book | 2009 | DOI | iml |
| Landscape-scale geomorphic change detection: Quantifying spatially variable uncertainty and ... | paper/book | 2015 | DOI | iml |
| Long-term effects of management practices on water-driven soil erosion in an intense agricul... | paper/book | 2009 | DOI | iml |
| Mapping Subsurface Tile Drainage Systems with Thermal Images | paper/book | 2019 | DOI | iml |
| Mean Age Distribution of Inorganic Soil-nitrogen | paper/book | 2016 | DOI | iml |
| Microbial diversity in an intensively managed landscape is structured by landscape connectivity | paper/book | 2017 | DOI | iml |
| Modeled Postglacial Landscape Evolution at the Southern Margin of the Laurentide Ice Sheet: ... | journal-article | 2018 | DOI | iml |
| Modeling the Role of Root Exudation in Critical Zone Nutrient Dynamics | paper/book | 2020 | DOI | iml |
| Monitoring of Unsteady Open Channel Flows Using Continuous Slope-area Method | paper/book | 2017 | DOI | iml |
| Nitrogen mass balance of a tile-drained agricultural watershed in east-central Illinois | paper/book | 2009 | DOI | iml |
| Observations of soils at the hillslope scale in the Clear Creek watershed in Iowa, USA | paper/book | 2008 | archive page | iml |
| On the Feasibility of Characterizing Soil Properties From AVIRIS Data | paper/book | 2015 | DOI | iml |
| Optimization of a 48Ca–43Ca double-spike MC-TIMS method for measuring Ca isotope ratios (δ44... | paper/book | 2015 | DOI | iml |
| Optimizing Sampling Strategies for Riverine Nitrate Using High-frequency Data in Agricultura... | paper/book | 2016 | DOI | iml |
| Passive regulation of soil biogeochemical cycling by root water transport | paper/book | 2013 | DOI | iml |
| Patterns of change in high frequency precipitation variability over North America | paper/book | 2017 | DOI | iml |
| Patterns of woody plant-derived soil carbon losses and persistence after brush management in... | paper/book | 2016 | DOI | iml |
| Power law scaling of topographic depressions and their hydrologic connectivity | paper/book | 2014 | DOI | iml |
| Prediction of Saturated Hydraulic Conductivity Dynamics in an Iowan Agriculture Watershed | paper/book | 2014 | archive page | iml |
| Predictions in ungauged basins: an approach for regionalization of hydrological models consi... | paper/book | 2015 | DOI | iml |
| Quantifying and partitioning fine sediment loads in an intensively agricultural headwater sy... | paper/book | 2012 | DOI | iml |
| Quantifying the changes of soil surface microroughness due to rainfall impact on a smooth su... | paper/book | 2017 | DOI | iml |
| Quantifying the signature of sediment composition on the topologic and dynamic complexity of... | paper/book | 2016 | DOI | iml |
| Quaternary landscapes in Iowa | paper/book | 1969 | archive page | iml |
| Radiocarbon and Stable Carbon Isotopes of Labile and Inert Organic Carbon in the Critical Zo... | paper/book | 2018 | DOI | iml |
| Radiocarbon dating loess deposits in the Mississippi Valley using terrestrial gastropod shel... | paper/book | 2015 | DOI | iml |
| Radiogenic and stable Sr isotope ratios (87Sr/86Sr, δ88/86Sr) as tracers of chemical weather... | paper/book | 2016 | DOI | iml |
| Response of the hyporheic zone to transient groundwater fluctuations on the annual and storm... | paper/book | 2016 | DOI | iml |
| Responses of enzymatic activities within soil aggregates to 9-year nitrogen and water additi... | paper/book | 2015 | DOI | iml |
| Role of Micro-Topographic Variability on the Distribution of Inorganic Soil-Nitrogen Age in ... | paper/book | 2017 | DOI | iml |
| Seasonally varying contributions to urban CO2 in the Chicago, IL, USA region: Insights from ... | paper/book | 2015 | DOI | iml |
| Simple parallel computing methods using ‘spmd’ and ‘parfar’ for improving efficiency of opti... | paper/book | 2015 | DOI | iml |
| Simultaneous improvement in productivity, water use, and albedo through crop structural modi... | paper/book | 2014 | DOI | iml |
| Size and variability of crop productivity both impacted by CO2 enrichment and warming—A case... | paper/book | 2016 | DOI | iml |
| Small rivers could have big impact on Arctic Ocean | paper/book | 2015 | DOI | iml |
| Smart Sensor Technology and Infrastructure Safety | paper/book | 2019 | archive page | iml |
| Soil microbial response to photo-degraded C 60 fullerenes | paper/book | 2016 | DOI | iml |
| Soil quality in Clear Creek, IA: SOM loss and soil quality in the Clear Creek, IA, Experimen... | paper/book | 2009 | archive page | iml |
| Soil Signals Tell of Landscape Disturbances | paper/book | 2020 | DOI | iml |
| Solute Fluxes Through Restored Prairie and Intensively Managed Critical Zones in Nebraska an... | paper/book | 2019 | DOI | iml |
| SOM dynamics and erosion in an agricultural test field of the Clear Creek, Iowa, watershed | paper/book | 2009 | archive page | iml |
| Source-to-sink sedimentary systems and global carbon burial: A river runs through it | paper/book | 2017 | DOI | iml |
| Spatial optimization of six conservation practices using SWAT in tile drained agricultural w... | paper/book | 2015 | DOI | iml |
| Spatial variability of saturated hydraulic conductivity at the hillslope scale: Understandin... | paper/book | 2015 | archive page | iml |
| Spatio-temporally variable controls confound transport process interpretation of stream solu... | paper/book | 2016 | DOI | iml |
| Steering Operational Synergies in Terrestrial Observation Networks: Opportunity for Advancin... | paper/book | 2018 | DOI | iml |
| Stochastic Lattice-Based Modelling of Malaria Dynamics | paper/book | 2018 | DOI | iml |
| Storm-induced Dynamics of Particulate Organic Carbon in Clear Creek, Iowa: An Intensively Ma... | paper/book | 2020 | DOI | iml |
| Streambed Restoration to Remove Fine Sediment Alters Reach-Scale Transient Storage in a Low-... | paper/book | 2018 | DOI | iml |
| Suspended sediment supply dominated by bank erosion in a low-gradient agricultural watershed... | paper/book | 2015 | DOI | iml |
| Sustainability of soil organic carbon in consolidated gully land in China’s Loess Plateau | paper/book | 2020 | DOI | iml |
| Temporal Information Partitioning Networks (TIPNets): A Process Network Approach to Infer Ec... | paper/book | 2017 | DOI | iml |
| Temporal Information Partitioning: Characterizing Synergy, Uniqueness, and Redundancy in Int... | paper/book | 2017 | DOI | iml |
| The Agricultural BMP Handbook for Minnesota | report/proposal | 2012 | archive page | iml |
| The C-biogeochemistry of a Midwestern USA agricultural impoundment in context: Lake Decatur ... | paper/book | 2018 | DOI | iml |
| The evolution and state of interdisciplinary hyporheic research | paper/book | 2015 | DOI | iml |
| The impact of tillage row orientation on physical and chemical sediment enrichment | paper/book | 2020 | DOI | iml |
| The Intensively Managed Landscape Critical Zone Observatory: A Scientific Testbed for Unders... | paper/book | 2018 | DOI | iml |
| The major ion, 87Sr/86Sr, and δ11B geochemistry of groundwater in the Wyodak-Anderson Coal B... | paper/book | 2015 | DOI | iml |
| The Migration Diary of a Knickpoint in a Channelized Stream with a Cohesive Bed | paper/book | 2019 | DOI | iml |
| The Power of Environmental Observatories for Advancing Multidisciplinary Research, Outreach,... | paper/book | 2019 | DOI | iml |
| The Role of Hydraulic Connectivity and Management on Soil Aggregate Size and Stability in th... | paper/book | 2018 | DOI | iml |
| The Wabash sampling blitz: A case study on the effectiveness of citizen science | paper/book | 2016 | archive page | iml |
| Three‐Dimensional Modeling of the Coevolution of Landscape and Soil Organic Carbon | paper/book | 2018 | DOI | iml |
| Threshold effects in HRU definition of Soil and Water Assessment Tool | paper/book | 2015 | DOI | iml |
| Typology of hydrologic predictability | paper/book | 2011 | DOI | iml |
| Uncertainty of nitrate-N load computation for agricultural watersheds | paper/book | 2002 | DOI | iml |
| Uncertainty of weekly nitrate forecasts using artificial neural networks | paper/book | 2003 | DOI | iml |
| Understanding mass fluvial erosion along a bank profile: Using PEEP technology for Quantifyi... | paper/book | 2017 | DOI | iml |
| Understanding saturated hydraulic conductivity under seasonal changes in climate and land use | paper/book | 2018 | DOI | iml |
| Upland erosion modeling in a semi-humid environment via the Water Erosion Prediction Project... | paper/book | 2008 | DOI | iml |
| Upper Sangamon River watershed monitoring data for the USEPA targeted watershed study: 2005–... | report/proposal | 2011 | archive page | iml |
| Use of Multispectral Satellite Remote Sensing to Assess Mixing of Suspended Sediment Downstr... | paper/book | 2018 | DOI | iml |
| Using field and remotely sensed hyperspectral data to quantify water quality parameters in t... | paper/book | 2015 | DOI | iml |
| Using Information Flow for Whole System Understanding From Component Dynamics | paper/book | 2019 | DOI | iml |
| Using Magnetic Fly Ash to Identify Post-Settlement Alluvium and its Record of Atmospheric Po... | paper/book | 2017 | DOI | iml |
| Water quality estimation of river plumes in Southern Lake Michigan using Hyperion | paper/book | 2016 | DOI | iml |
| Watershed scale impacts of bioenergy crops on hydrology and water quality using improved SWA... | paper/book | 2016 | DOI | iml |
| Wavelet-compressed representation of landscapes for hydrologic and geomorphologic applications | paper/book | 2016 | DOI | iml |
| Weather whiplash in agricultural regions drives deterioration of water quality | journal-article | 2017 | DOI | iml |
| Weathering of pyrogenic organic matter induces fungal oxidative enzyme response in single cu... | paper/book | 2016 | DOI | iml |
| Wepp: Model use, calibration, validation | paper/book | 2012 | archive page | iml |

## Sample check (rule 12)

Read in the harvest file, each matched to its row above: papers with a DOI (floodplains and terraces, 10.1002/esp.4234; UAS and LSPIV rapids; tillage disturbance chemistry), archive-page-only papers (hillslope soils at Clear Creek; Smart Sensor Technology and Infrastructure Safety; the IML-CZO 2015 annual report), datasets (Upper Sangamon GIS, Iowa GIS 2017, Bondville flux tower). Not opened by hand: the three repaired DOIs' pages, beyond the Crossref lookup and the doi.org handle answer.
