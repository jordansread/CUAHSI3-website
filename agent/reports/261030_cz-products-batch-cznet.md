# Products batch 11: the CZNet clusters, the national program and records with no site (proposal for epic T11)

Date: 30 October 2026. Ticket: CUAHSI/CUAHSI3-website#76 (T11). Branch `task/cz-products-cznet-proposal`. **Proposal step of "Propose, then apply". Nothing in `content/` has been changed.** Source: `agent/reports/261029_cz-harvest-proposal.json`, every record whose `sites` includes none of the ten observatories: the CZNet Hub and clusters, the cross-CZO `national` tag, and records with no site at all. Already-loaded set: `content/critical-zone/products.json` as it will be once #164 (Shale Hills, 2,050 records) merges; I read it from that branch.

Rules carried over (Jordan): talks and posters held out; proposals not in the list; award numbers found only in text stay unset and flagged; addresses that do not answer are left out; unrelated items held back; `provenance` not in the file; one file for the whole list.

None of the 564 records here is a talk or poster. The 1,202 talks and posters of the archive (all tagged to an observatory) are still held for a type decision, a separate question.

## Counts

| | Count |
|---|---|
| Records outside the ten observatories | 564 |
| Already in the list (same DOI, HydroShare id or address, or same title and type) | 6 |
| Held out by me: a proposal and a test resource (item 1) | 2 |
| Left out as duplicates: versions, copies and preprints of a work that is proposed (items 2 and 3) | 33 |
| **Proposed for this batch** | **524** (312 datasets, 206 papers, 6 software) |
| By source: Discover 270, Crossref (award search) 171, DataCite 47, CZO archive 36 | |
| `era`: cznet 188, czo 36, not set 300 | |
| Tagged with a CZNet cluster or the Hub | 188 (urban 43, dynamic-water 32, drylands 27, cinet 24, coastal 24, dust2 16, bedrock 8, bigdata 8, geomicrobiology 5, hub 1) |
| Tagged `national` only | 36 |
| With no site | 300 |
| Records with an `awards` value from the harvest's funder data | 468 |
| Datasets: DOI / HydroShare address with no DOI | 201 / 100 |
| Papers: with a DOI / archive page only | 177 / 29 |
| Records with no year | 100 |

## Link check (before proposing)

Every DOI was looked up at doi.org (handle lookup) and every HydroShare address requested once. Of 384 DOIs and 100 HydroShare addresses, **no problem was found**. One request failed with a TLS handshake error (a Manitou Experimental Forest dataset DOI); I repeated it and it answers. The 29 archive-page addresses were not opened. A resolving DOI is not proof it is the right item.

## Things I changed or left out (mine; your call on each)

1. **A proposal and a test resource, held out:** a HydroShare resource titled just "Test" (no description, no award) is plainly not a product. The proposal is "Integrated Data Management System for Critical Zone Observatories (EAR-1332257)" (venue "Awarded Proposal to NSF", 2011). Its two project reports (years 1 and 2) and the 2015 "Progress and Timeline for Deliverables" interim report are proposed as reports.
2. **Zenodo, Figshare and IEDA versions collapsed to one record per work (24 left out).** The harvest read each Zenodo dataset once as its concept DOI and again as each version DOI, and the Discover catalog's own Zenodo address as a further copy. For each work I propose the concept DOI (the record DataCite marks `HasVersion`) and leave out the version DOIs and the Discover copy. One Figshare dissertation appears as `10.25394/pgs.15062379` and `...v1`; I keep the first. For "Jemez River Basin Soil Solution Chemistry 2011" two IEDA DOIs appear, and DataCite marks `10.1594/IEDA/111156` as the new version of `10.1594/ieda/100639`; I keep the newer. Everything left out is in the last table.
3. **Preprints with a published version in this batch (9 left out):** EGUsphere, ESurfD, AMTD and Zenodo preprint DOIs of papers whose final version is proposed (for example `10.5194/esurf-2022-9` and `esurf-11-51-2023`). **11 preprints remain** with no final version found in this set. They are the open question on #155, #158 and #163; kept and flagged. They show as "posted-content" or "Preprint" in the Type column's archive kind and are Copernicus discussion papers and Wiley ESSOAr preprints.
4. **Bare site names as titles, kept and flagged:** five Discover datasets in the Bedrock cluster are titled only "Boulder Creek", "Panola", "San Gabriel", "San Jacinto" and "Southern Sierra" (HydroShare resources under award 2012353 or 2012408), and "OSL ages_Loess" has no site or award. The titles do not describe the data; I kept them because they are HydroShare resources linked to CZNet awards and did not open them.
4b. **Same title, different records, both kept (4 pairs):** "Forest and Ground Cover classification, DEM, and Beryllium-10 data for the Luquillo Experimental Forest" and "Kansas River Flow Event Characteristics and Nitrate C-Q Responses" (two HydroShare resources each, different ids), "Report of the Steering Committee" (2010 and 2011) and "Susquehanna Shale Hills Critical Zone Observatory - Shaver's Creek Watershed Stream Chemistry 2016" (IEDA `10.1594/ieda/100677` and Discover `10.26022/IEDA/111537`, which look like two versions; I did not decide which is current).
5. **Software: 6 records, and no page shows them.** The lists from T9a show only datasets and papers, so software and models would appear on neither page. I suggest a small code change so the datasets page also lists software and models; say yes and I will make it, with its own PR.
6. **Reports and documents typed `paper`:** 22 items from the archive and the CZO national office: the CZO National Office annual reports 2015 to 2019, steering committee reports (2010 to 2015), a strategy meeting report (2016), an EarthCube white paper, "Discoveries in the Critical Zone", "Sustaining Earth's Critical Zone", a 2006 workshop report, and technical items ("CZO Display File Specification", "Observations and Measurements - XML Implementation", "AGI LiDAR Handout"). None is a proposal to a funder.
7. **One venue-text award:** the "CZO National Office Annual Report 2019" cites "NSF Award #1360760" (the registry has `nsf-1360760`); `awards` stays unset and it joins the list for you to revisit (53 in all).
8. **`era` is unset on 300 records** (the Discover, Crossref and DataCite records with no site tag and no era). On the lists they appear under "Era not recorded", grouped by award where they have one. I did not guess an era (C3). Say if you want a rule (for example, anything on a 2020-or-later CZNet award is `cznet`).
9. **Scope.** The Crossref records (171) were found by an NSF award number in their funder data, so they carry a CZO or CZNet award; the Discover and DataCite records are datasets linked to CZ awards or papers (your 29 October rule: any repository counts). I read the titles of all 206 papers and the dataset titles for items plainly unrelated and found none I would hold back, but this batch is the most varied, so say which to drop.
10. The 29 papers with no DOI are the archive's national-program documents; they were not read against their pages. Datasets have no year when the source gave none (C3).

## Proposed items

### Datasets (312)

| Title | Type | Year | Address | Source | Sites |
|---|---|---|---|---|---|
| Air temperature data for Dead Run watershed, Baltimore County, MD, USA | dataset |  | HydroShare (no DOI) | discover | urban |
| Alabama Weather Station Data (2010) | dataset | 2014 | DOI | discover | (none) |
| Alabama Weather Station Data (2011) | dataset | 2014 | DOI | discover | (none) |
| Alabama Weather Station Data (2012) | dataset | 2014 | DOI | discover | (none) |
| Alabama Weather Station Data (2013) | dataset | 2014 | DOI | discover | (none) |
| Alkalinity, organic carbon, nitrogen, and major anions for Dead Run, Baltimore County, MD USA | dataset |  | HydroShare (no DOI) | discover | urban |
| Alkalinity, organic carbon, nitrogen, and major anions for Northwest Branch Anacostia River,... | dataset |  | HydroShare (no DOI) | discover | urban |
| Alkalinity, organic carbon, nitrogen, and major anions for Pennypack Creek, Philadelphia, PA... | dataset |  | HydroShare (no DOI) | discover | urban |
| Allerton Floodplain Cores - Core 1 Series | dataset |  | HydroShare (no DOI) | discover | cinet |
| Allerton Floodplain Cores - Core 10 Series | dataset |  | HydroShare (no DOI) | discover | cinet |
| Allerton Floodplain Cores - Core 11 Series | dataset |  | HydroShare (no DOI) | discover | cinet |
| Allerton Floodplain Cores - Core 2 Series | dataset |  | HydroShare (no DOI) | discover | cinet |
| Allerton Floodplain Cores - Core 3 Series | dataset |  | HydroShare (no DOI) | discover | cinet |
| Allerton Floodplain Cores - Core 4 Series | dataset |  | HydroShare (no DOI) | discover | cinet |
| Allerton Floodplain Cores - Core 5 Series | dataset |  | HydroShare (no DOI) | discover | cinet |
| Allerton Floodplain Cores - Core 6 Series | dataset |  | HydroShare (no DOI) | discover | cinet |
| Allerton Floodplain Cores - Core 7 Series | dataset |  | HydroShare (no DOI) | discover | cinet |
| Allerton Floodplain Cores - Core 8 Series | dataset |  | HydroShare (no DOI) | discover | cinet |
| Allerton Floodplain Cores - Core 9 Series | dataset |  | HydroShare (no DOI) | discover | cinet |
| Allerton Trust Farm Environmental Data - Jan2021 - ongoing | dataset |  | HydroShare (no DOI) | discover | cinet |
| Ameriflux US-Jo1: Jornada Experimental Range Bajada Site | dataset | 2023 | archive page | discover | drylands |
| Ameriflux US-PeA: 5R Pecan Farm Above Canopy | dataset | 2025 | archive page | discover | (none) |
| Bajada Summer 2015 Soil Nutrients | dataset | 2022 | DOI | discover | drylands |
| Barometric pressure data for Dead Run watershed, Baltimore County, MD, USA | dataset |  | HydroShare (no DOI) | discover | urban |
| BioRT_HBV_SagehenFiles_20251030 | dataset | 2025 | DOI | datacite | (none) |
| BioRT_HBV_SagehenFiles_20260226 | dataset | 2026 | DOI | datacite | (none) |
| Boulder Creek | dataset |  | HydroShare (no DOI) | discover | bedrock |
| Brownsville - Tree Sap Flux - Jan 2021 - ongoing | dataset |  | HydroShare (no DOI) | discover | coastal |
| Camels-Chem (collection of stream water chemistry data 1980-2018) | dataset | 2025 | DOI | discover | bigdata |
| Carbon exchange responses of rehydrated and incubated biological soil crust samples from Whi... | dataset | 2023 | archive page | discover | drylands |
| Carbon fluxes, meteorological, soil variables from GC Flux Tower, IMLCZO/CINet | dataset | 2024 | DOI | discover | cinet |
| Characterizing Dust from National Wind Erosion Research Network Sites Using Strontium Isotop... | dataset | 2024 | DOI | discover | dust2 |
| Chemical availability of metals associated with Great Salt Lake dust from Farmington Bay | dataset | 2026 | DOI | datacite | (none) |
| Chihuahuan Desert Biocrust Bacteria and Archaea | dataset | 2021 | archive page | discover | drylands |
| Christina River Basin - Stream Suspended Sediment (1993-2012) | dataset | 2018 | DOI | datacite | (none) |
| Classifying wetland playas of the Chihuahuan Desert using NDVI time series, plant communitie... | dataset |  | HydroShare (no DOI) | discover | drylands |
| CO02_GLV_DustNutrients | dataset | 2024 | DOI | datacite | (none) |
| CO2 sensor data for Dead Run, Baltimore County, Maryland, USA | dataset |  | HydroShare (no DOI) | discover | urban |
| Coal Creek -CO - Significant stream chemistry response to temperature variations in a high-e... | dataset |  | HydroShare (no DOI) | discover | (none) |
| Code and Data for CAMELS-Chem Concentration-Discharge Analysis | dataset | 2024 | DOI | discover | bigdata |
| Collection of Great Salt Lake Data | dataset |  | HydroShare (no DOI) | discover | (none) |
| Compiled geochemistry and PLFA data on fracture waters, biofilms and service waters from Kid... | dataset | 2024 | DOI | discover | (none) |
| Conductivity, temperature, and specific conductance data for Northwest Branch Anacostia Rive... | dataset |  | HydroShare (no DOI) | discover | urban |
| Conductivity, temperature, and specific conductance data for Swift Creek near Apex, NC, USA | dataset |  | HydroShare (no DOI) | discover | urban |
| CRBasic program for recording S-can Spectrolyser v3 and YSI EXO data on a CR1000X data logger | dataset |  | HydroShare (no DOI) | discover | urban |
| Crisfield Farm - DTW, Water Temperature, Specific conductance - May 2021-Jul 2024 | dataset | 2025 | DOI | discover | coastal |
| Crisfield Farm - Redox Potential - Mar 2022-Jul 2024 | dataset | 2026 | DOI | discover | coastal |
| Crisfield Farm - Soil water content, Soil temperature, Electrical conductivity - Jul 2021-Ju... | dataset | 2025 | DOI | discover | coastal |
| CZCN Geomicro-Depth profiles of soil temperature, moisture, and concentrations of CO2 and O2 | dataset |  | HydroShare (no DOI) | discover | geomicrobiology |
| CZNCoastal_SoilCoreData | dataset | 2023 | archive page | discover | coastal |
| Data and imagery associated with "Mapping scytonemin pigment content and biocrust functional... | dataset | 2026 | DOI | datacite | (none) |
| Data and R scripts for: Nutrient export and elemental stoichiometry in an urban tropical river | dataset | 2018 | DOI | datacite | (none) |
| Data from Dumont et al. (2026), Self- and Electrodic-Potential Response to Hydrological and ... | dataset | 2026 | DOI | discover | (none) |
| Data from Gambill et al. (2025): Exploring the influence of channel intermittency and discha... | dataset | 2026 | DOI | discover | dynamic-water |
| Data from Harmon et al. (2021), Exploring environmental factors that drive diel variations i... | dataset | 2021 | DOI | discover | bedrock |
| Data from the DUST^2 Project, Collectors DUST-1 through DUST-17, winter 2020-21 and summer 2021 | dataset | 2022 | DOI | discover | dust2 |
| Data from the DUST^2 Project, collectors DUST-1 through DUST-18, Fall 2022 to Fall 2023 | dataset | 2026 | DOI | datacite | (none) |
| Data from the DUST^2 Project, Collectors DUST-1 through DUST-18, winter 2021-22 and summer 2022 | dataset | 2024 | DOI | discover | dust2 |
| Data from the DUST^2 Project, collectors DUST-1 through DUST-19, Fall 2023 to Fall 2024, and... | dataset | 2026 | DOI | datacite | (none) |
| Data from the DUST^2 Project, Soil and Rock from Collectors DUST-11 through DUST-16 | dataset | 2024 | DOI | discover | dust2 |
| Data from Tucker et al. (2026). Bridging single-tree processes and regional-scale patterns t... | dataset |  | HydroShare (no DOI) | discover | bedrock |
| Data from: Do precipitation extremes drive growth and migration timing of a Pacific salmonid... | dataset | 2019 | DOI | datacite | (none) |
| Data from: Role of tectonic rock damage in erosional processes: A global analysis | dataset | 2026 | DOI | datacite | (none) |
| Data: Unraveling phenological and stomatal responses to flash drought and implication for th... | dataset | 2023 | DOI | discover | dynamic-water |
| Dataset for Stable Isotopes of Precipitation, Surface Water, Spring Water, and Subsurface Wa... | dataset | 2022 | DOI | crossref | (none) |
| Dataset from "Dust storms increase the tolerance of phytoplankton to thermal and pH changes" | dataset | 2023 | DOI | datacite | (none) |
| Dataset from the article "Diverse dust sources and warming trigger cyanobacteria abundance i... | dataset | 2025 | DOI | datacite | (none) |
| Depth distribution of root abundance in locations across the continental United States and P... | dataset | 2026 | DOI | discover | geomicrobiology |
| Depth distribution of soil extractable organic carbon concentrations in locations across the... | dataset | 2026 | DOI | discover | geomicrobiology |
| Dissolved Metal and Metalloid Concentrations for Dead Run, Baltimore County, MD, USA | dataset |  | HydroShare (no DOI) | discover | urban |
| Dissolved Metal and Metalloid Concentrations for Northwest Branch Anacostia River, Prince Ge... | dataset |  | HydroShare (no DOI) | discover | urban |
| Dissolved Metal and Metalloid Concentrations for Pennypack Creek, Philadelphia, PA, USA | dataset |  | HydroShare (no DOI) | discover | urban |
| Dover Farm - DTW, Water Temperature, Specific conductance - May 2021-Jul 2024 | dataset | 2025 | DOI | discover | coastal |
| Dover Farm - Redox Potential - Mar 2022-Jul 2024 | dataset | 2025 | DOI | discover | coastal |
| Dover Farm - Soil water content, Soil temperature, Electrical conductivity - Jul 2021-Jul 2024 | dataset | 2025 | DOI | discover | coastal |
| Dryland critical zone project: Soil gas (CO2) data in an irrigated pecan orchard of western ... | dataset | 2026 | DOI | datacite | (none) |
| Dryland Critical Zone: Jornada Piedmont Seismic Imaging | dataset | 2021 | DOI | discover | drylands |
| Drylands critical zone project: Soil sensor data in an irrigated pecan orchard of western Te... | dataset | 2026 | DOI | discover | drylands |
| Dust Deposition in the Uinta Mountains, 2011-2021 | dataset | 2023 | DOI | discover | dust2 |
| DWCZ - CO - B1 - Meteorologic Tower -- 2020-2024 (DWCZ-B1-Met) | dataset | 2026 | DOI | discover | dynamic-water |
| DWCZ - CO - Betasso, Groundwater Levels -(DWCZ-BT-GW-1) - (2020-2024) | dataset | 2026 | DOI | discover | dynamic-water |
| DWCZ - CO - Coal Creek - Soil Collection ICP - (DWCZ-MEF-CC-SoilSample-Transect-AWinkler) - ... | dataset | 2026 | DOI | discover | dynamic-water |
| DWCZ - CO - Estes Park - West Creek - Tree Rings, d18O, Basal Area Measurements - 2021 - Sad... | dataset | 2026 | DOI | discover | dynamic-water |
| DWCZ - CO - Gordon Gulch - Water Chemistry - GG1- SW0, GG2-GW 1- 6 and SW0 - (2021-2024) | dataset | 2026 | DOI | discover | dynamic-water |
| DWCZ - CO - Gordon Gulch 1 & 2 - Streamflow, Discharge, Conductivity - (DWCZ-GG1_SW_0, GG2_S... | dataset | 2026 | DOI | discover | dynamic-water |
| DWCZ - CO - Gordon Gulch 1 & 2 - SWE Along Snow Pole Transects - (GG1-GG2-SWE) - (2023–2024) | dataset |  | HydroShare (no DOI) | discover | dynamic-water |
| DWCZ - CO - Gordon Gulch 1 & 2, Snow Depth - Snow Pole Transects, (DWCZ-GG-Tran-SP) | dataset | 2026 | DOI | discover | dynamic-water |
| DWCZ - CO - Gordon Gulch 1, Soil Temperature, Soil Moisture, (DWCZ-GG1-Tran-SMST) -- (2020-2... | dataset | 2026 | DOI | discover | dynamic-water |
| DWCZ - CO - Gordon Gulch 1, South & North Facing Meteorological Towers -- 2020-2026 (DWCZ-GG... | dataset | 2026 | DOI | discover | dynamic-water |
| DWCZ - CO - Gordon Gulch 2 - Soil Temperature, Soil Moisture (DWCZ-GG2-SMST-4) -- Sept 2020-... | dataset | 2026 | DOI | discover | dynamic-water |
| DWCZ - CO - Gordon Gulch, Groundwater Levels -(DWCZ-GG2-GW-1-2-6) - (2020-2024) | dataset | 2026 | DOI | discover | dynamic-water |
| DWCZ - CO - Gordon Gulch-Como Creek -- CPOM, Storage Accumulation & Reach -- ( CC-GG-CPOM-Fl... | dataset | 2025 | DOI | discover | dynamic-water |
| DWCZ - CO - Gordon Gulch-Ecohydrologic Dynamics-EBurns | dataset | 2023 | DOI | discover | dynamic-water |
| DWCZ - CO - Manitou Experimental Forest, Hotel Gulch - Electrical Conductivity & Temperature... | dataset | 2025 | DOI | discover | dynamic-water |
| DWCZ - CO - Manitou Experimental Forest, Hotel Gulch - Ground Water Levels - (DWCZ-MEF-HG-GW... | dataset | 2025 | DOI | discover | dynamic-water |
| DWCZ - CO - Manitou Experimental Forest, Hotel Gulch - Precipitation - (MEF-HG-Precip-SBush)... | dataset | 2025 | DOI | discover | dynamic-water |
| DWCZ - CO - Manitou Experimental Forest, Hotel Gulch - Soil Extraction (Anions/Cations) - (M... | dataset | 2025 | DOI | discover | dynamic-water |
| DWCZ - CO - Manitou Experimental Forest, Hotel Gulch - Soil Temperature and Soil Moisture (D... | dataset | 2025 | DOI | discover | dynamic-water |
| DWCZ - CO - Manitou Experimental Forest, Hotel Gulch - Soil Temperature, Soil Moisture, (DWC... | dataset | 2026 | DOI | discover | dynamic-water |
| DWCZ - CO - Manitou Experimental Forest, Hotel Gulch - Stage Q, Streamflow/Discharge - (MEF-... | dataset | 2025 | DOI | discover | dynamic-water |
| DWCZ - CO - Manitou Experimental Forest, Hotel Gulch - Streamflow/Discharge/Conductivity - (... | dataset | 2026 | DOI | discover | dynamic-water |
| DWCZ - CO - Manitou Experimental Forest, Hotel Gulch - Water Chemistry - (DWCZ-MEF-HG-GW-SW-... | dataset | 2025 | DOI | discover | dynamic-water |
| DWCZ - CO- MEF-HG-ECDTW - Ground Water Levels and Electrical Conductivity - (MEF-HG-WY2023-E... | dataset | 2026 | DOI | discover | dynamic-water |
| DWCZ - GIS - Resources-Various Frame Work kmls - Links - Lidar | dataset |  | HydroShare (no DOI) | discover | dynamic-water |
| DWCZ -CA- Sagehen Experimental Forest - Soil Moisture Soil Temperature (SH-SMST-Array &SD) &... | dataset |  | HydroShare (no DOI) | discover | dynamic-water |
| DWCZ – CO – Betasso Meteorological Tower — 2020–Ongoing (DWCZ-BT-Met) | dataset |  | HydroShare (no DOI) | discover | dynamic-water |
| DWCZ – CO – Trout Creek & Coal Creek – Beaver Pond Survey, Storage & Isotope Data – (TC-CC-P... | dataset | 2025 | DOI | discover | dynamic-water |
| DWCZ- CO - Coal-Creek - Radon -(DWCZ-CC-RadonArray-KJohnson) - (2021) | dataset |  | HydroShare (no DOI) | discover | dynamic-water |
| DWCZ- CO - Coal-Creek, Soil sensors, SoilAuger, Soil Pits, (DWCZ-CC_Soil_LBixby)-(2020-2022) | dataset | 2026 | DOI | discover | dynamic-water |
| EcoTram below-canopy shortwave radiation observations and Lidar-to-Radiation (CanRad L2R) mo... | dataset | 2026 | DOI | datacite | (none) |
| EMMALAB v. 1.0: Software for improved endmember mixing analysis | dataset | 2024 | DOI | discover | dust2 |
| EMMALAB v. 1.1: Software for improved endmember mixing analysis | dataset |  | HydroShare (no DOI) | discover | dust2 |
| EMMALAB v. 1.2: Software for improved endmember mixing analysis | dataset | 2026 | DOI | discover | dust2 |
| estherlee0000/MLCan2.0: Data for AZ | dataset | 2020 | DOI | datacite | (none) |
| EXO2 Control Level 1 Water Quality Data at Provo River near Soapstone Basic Aquatic (PR_ST_B... | dataset | 2023 | DOI | discover | dust2 |
| EXO2 Control Level 1 Water Quality Data at Provo River near Woodland 2021-2023 | dataset | 2024 | DOI | discover | dust2 |
| Exploratory Tree Survey (2016 - Eel River Critical Zone Observatory - Sagehorn - Central Bel... | dataset | 2017 | DOI | datacite | (none) |
| Forest and Ground Cover classification, DEM, and Beryllium-10 data for the Luquillo Experime... | dataset | 2023 | DOI | datacite | (none) |
| Forest and Ground Cover classification, DEM, and Beryllium-10 data for the Luquillo Experime... | dataset | 2023 | DOI | datacite | (none) |
| Fowler Farm Environmental Data - Feb2021 - ongoing | dataset |  | HydroShare (no DOI) | discover | cinet |
| Geochemical composition of cabbage tissues exposed to Great Salt Lake dust in a greenhouse e... | dataset | 2026 | DOI | datacite | (none) |
| Geochemistry of dust from MWAC samples in Utah | dataset | 2026 | DOI | datacite | (none) |
| Geomicrobial and biogeochemical properties of soils over the continental United States | dataset | 2026 | DOI | discover | geomicrobiology |
| Getting Started with ParFlow: Dead Run Watershed, Baltimore County, Maryland Example (Revised) | dataset |  | HydroShare (no DOI) | discover | urban |
| Gibson Jack 2022 ecohydrology data | dataset | 2023 | DOI | datacite | (none) |
| Goose Creek Eddy Covariance Flux Tower - Data Sample | dataset |  | HydroShare (no DOI) | discover | cinet |
| Goose Creek Eddy Covariance Flux Tower Sensor Data - Sep 2020-ongoing | dataset |  | HydroShare (no DOI) | discover | cinet |
| GPR data collected near the Chepeta Weather Station and the DUST-1 sampler, Uinta Mountains,... | dataset | 2023 | archive page | discover | dust2 |
| Groundwater levels in Dead Run watershed, Maryland, USA | dataset |  | HydroShare (no DOI) | discover | urban |
| Groundwater, soil moisture, light and weather data in Brownsville forest, Nassawadox, VA, 20... | dataset | 2022 | DOI | discover | coastal |
| Groundwater, soil moisture, light and weather data in Brownsville forest, Nassawadox, VA, 20... | dataset | 2023 | DOI | discover | coastal |
| Harmar Pond Sediment Core Metals | dataset | 2022 | DOI | datacite | (none) |
| Heavy and light fraction organic matter across landscapes and soil profiles | dataset | 2026 | DOI | discover | geomicrobiology |
| High-frequency water quality data for Dead Run, Baltimore County, MD, USA | dataset |  | HydroShare (no DOI) | discover | urban |
| High-frequency water quality data for Gwynns Falls, Baisman Run, and Pond Branch, Baltimore ... | dataset |  | HydroShare (no DOI) | discover | urban |
| How do contrasting tree size and irrigation dynamics influence the soil microbial biomass in... | dataset | 2026 | DOI | discover | drylands |
| Hydraulic conductivity and porosity of soil/saprolite cores in Dead Run watershed, Baltimore... | dataset |  | HydroShare (no DOI) | discover | urban |
| Illilouette Creek Basin Distributed Air Temperature and Relative Humidity 2015-2021 | dataset | 2025 | DOI | discover | bigdata |
| Illilouette Creek Basin Distributed Shallow Soil Moisture 2014-2020 | dataset | 2026 | DOI | datacite | (none) |
| Illilouette Creek Basin Weather Stations | dataset | 2025 | DOI | datacite | (none) |
| Images of Drill Core from 5R Pecan Farm in Tornillo, TX | dataset |  | HydroShare (no DOI) | discover | drylands |
| Images of Drill Core from Red Lake Playa at Jornada, NM | dataset |  | HydroShare (no DOI) | discover | drylands |
| Investigating the Effect of Phosphorus Limitation on Growth and Exopolysaccharides Productio... | dataset | 2026 | DOI | discover | drylands |
| Ivey 14C, SIC, and OSL Data | dataset |  | HydroShare (no DOI) | discover | drylands |
| Ivey Pecan Orchard Soil Monitoring Sensor Data | dataset |  | HydroShare (no DOI) | discover | drylands |
| Ivey Shallow Groundwater Chemistry | dataset |  | HydroShare (no DOI) | discover | drylands |
| Jackson Lake, Wyoming Water Isotopes | dataset |  | HydroShare (no DOI) | discover | (none) |
| Jemez River Basin Soil Solution Chemistry 2011 (New Mexico, USA) | dataset | 2018 | DOI | discover | (none) |
| Jemez River Basin Soil Solution Chemistry 2012 (New Mexico, USA) | dataset | 2018 | DOI | discover | (none) |
| Jemez River Basin Soil Solution Chemistry 2013 (New Mexico, USA) | dataset | 2018 | DOI | discover | (none) |
| Jemez River Basin Soil Solution Chemistry 2014 (New Mexico, USA) | dataset | 2018 | DOI | discover | (none) |
| Jemez River Basin Soil Solution Chemistry 2015 (New Mexico, USA) | dataset | 2019 | DOI | discover | (none) |
| Jemez River Basin Soil Solution Chemistry 2016 (New Mexico, USA) | dataset | 2020 | DOI | discover | (none) |
| Jemez River Basin Soil Solution Chemistry 2017 (New Mexico, USA) | dataset | 2020 | DOI | discover | (none) |
| Jemez River Basin Soil Solution Chemistry 2018 (New Mexico, USA) | dataset | 2021 | DOI | datacite | (none) |
| Jemez River Basin Soil Solution Chemistry 2019 (New Mexico, USA) | dataset | 2021 | DOI | discover | (none) |
| Jemez River Basin Soil Solution Chemistry 2019 (New Mexico, USA) version 2 | dataset | 2021 | DOI | discover | (none) |
| Jornada Electrical Resistivity Data | dataset |  | HydroShare (no DOI) | discover | drylands |
| Jornada Long Term Experimental Range Geophysical Data (Red Lake Playa & Piedmont Bajada) | dataset | 2024 | DOI | discover | drylands |
| Jornada LTER Phosphorus Shifts Along a Desert Soil Chronosequence | dataset |  | HydroShare (no DOI) | discover | drylands |
| Jornada Piedmont site Eddy Covariance Data | dataset |  | HydroShare (no DOI) | discover | drylands |
| Kansas River Flow Event Characteristics and Nitrate C-Q Responses | dataset | 2025 | DOI | discover | bigdata |
| Kansas River Flow Event Characteristics and Nitrate C-Q Responses | dataset | 2026 | DOI | datacite | (none) |
| King County Project Phase 3 - Puyallup DHSVM model | dataset |  | HydroShare (no DOI) | discover | (none) |
| Land cover and climate informed vapor pressure deficit datasets derived from Daymet | dataset | 2025 | DOI | discover | (none) |
| LCZO-Stream Water Chemistry, Streamflow / Discharge, Hysteretic response of solutes and turb... | dataset | 2019 | DOI | datacite | (none) |
| Leachate from core experiments on soils from Sleeper River Research Watershed and Hubbard Br... | dataset | 2025 | DOI | discover | bigdata |
| Leachate from core experiments on soils from Sleeper River Research Watershed and Susquehann... | dataset | 2025 | DOI | discover | bigdata |
| Leachate from core experiments on soils over different bedrocks in the Northeast, flushed wi... | dataset | 2025 | DOI | discover | bigdata |
| Mameyes River RFID cobble tracers | dataset | 2022 | DOI | datacite | (none) |
| Measurements of Soil Moisture, Infiltration, and Hydrophobicity in Yosemite National Park Ac... | dataset | 2025 | DOI | datacite | (none) |
| Metompkin Farm - DTW, Water Temperature, Specific conductance - Jul 2022-Jul 2024 | dataset | 2025 | DOI | discover | coastal |
| Metompkin Farm - Redox Potential - Jul 2022-Jul 2024 | dataset | 2026 | DOI | discover | coastal |
| Metompkin Farm - Soil water content, Soil temperature, Electrical conductivity - Jul 2022-Ju... | dataset | 2025 | DOI | discover | coastal |
| Milford Neck - DTW, Water Temperature, Specific conductance - Nov 2021-Jul 2024 | dataset | 2025 | DOI | discover | coastal |
| Milford Neck - Redox Potential - Mar 2022-Jul 2024 | dataset | 2025 | DOI | discover | coastal |
| Milford Neck - Soil water content, Soil temperature, Electrical conductivity - Dec 2021-Jul ... | dataset | 2025 | DOI | discover | coastal |
| Milford Neck - Tree Sap Flux - Nov 2021 - ongoing | dataset |  | HydroShare (no DOI) | discover | coastal |
| Minnesota Pollution Control Agency Wild Rice Sulfate Standard Field Study | dataset | 2017 | DOI | discover | (none) |
| MIRZ ILAG 2022 Aggregate Sensor Data | dataset |  | HydroShare (no DOI) | discover | cinet |
| MIRZ ILPR 2022 Aggregate Sensor Data | dataset |  | HydroShare (no DOI) | discover | cinet |
| MIRZ NEAG 2022 Aggregate Sensor Data | dataset |  | HydroShare (no DOI) | discover | cinet |
| MIRZ NEPR 2022 Aggregate Sensor Data | dataset |  | HydroShare (no DOI) | discover | cinet |
| Mixed Conifer Zero Order Basin Deep Cores Clay Geochemistry Data (New Mexico, USA) | dataset | 2021 | DOI | discover | (none) |
| Mixed Conifer Zero Order Basin Deep Cores Geochemistry Data (New Mexico, USA) | dataset | 2020 | DOI | discover | (none) |
| Mixed Conifer Zero Order Basin Morphologic Horizon Geochemistry Data (New Mexico, USA) | dataset | 2017 | DOI | discover | (none) |
| Modifications to the single point velocity measurement method for estimating river discharge... | dataset | 2023 | DOI | discover | (none) |
| Monie Bay - DTW, Water Temperature, Specific conductance - Mar 2021-Jul 2024 | dataset | 2025 | DOI | discover | coastal |
| Monie Bay - Redox Potential - Mar 2022-Jul 2024 | dataset | 2026 | DOI | discover | coastal |
| Monie Bay - Soil water content, Soil temperature, Electrical conductivity - Aug 2021-Jul 2024 | dataset | 2025 | DOI | discover | coastal |
| Monie Bay - Tree Sap Flux - May 2021 - ongoing | dataset |  | HydroShare (no DOI) | discover | coastal |
| New York Weather Station Data (2010) | dataset | 2014 | DOI | discover | (none) |
| New York Weather Station Data (2011) | dataset | 2014 | DOI | discover | (none) |
| New York Weather Station Data (2012) | dataset | 2014 | DOI | discover | (none) |
| New York Weather Station Data (2013) | dataset | 2014 | DOI | discover | (none) |
| Non-road, Non-dripline Soil Metal Concentrations for Pittsburgh, Pennsylvania, United States... | dataset | 2022 | DOI | datacite | (none) |
| NWERN Dust Microbial Community Results | dataset | 2023 | DOI | discover | (none) |
| Organic geochemical compositions of storm POC in Clear Creek, IA | dataset |  | HydroShare (no DOI) | discover | cinet |
| OSL ages_Loess | dataset |  | HydroShare (no DOI) | discover | (none) |
| Oxygen and nitrogen stable isotopic composition of dissolved nitrate for Dead Run, Baltimore... | dataset |  | HydroShare (no DOI) | discover | urban |
| Oxygen and nitrogen stable isotopic composition of dissolved nitrate for Northwest Branch An... | dataset |  | HydroShare (no DOI) | discover | urban |
| Oxygen and nitrogen stable isotopic composition of dissolved nitrate for Pennypack Creek, Ph... | dataset |  | HydroShare (no DOI) | discover | urban |
| P availability data for samples across parent material, landform, and vegetation collected a... | dataset | 2025 | DOI | discover | drylands |
| Panola | dataset |  | HydroShare (no DOI) | discover | bedrock |
| Panola Mountain critical zone development data | dataset | 2025 | DOI | datacite | (none) |
| ParFlow.CLM and EcoSLIM input files for Dead Run watershed, Baltimore County, MD, USA | dataset |  | HydroShare (no DOI) | discover | urban |
| Pecan Spatial Heterogeneity Mapping | dataset |  | HydroShare (no DOI) | discover | drylands |
| Phenocam NAU czdryredlake | dataset | 2022 | archive page | discover | drylands |
| Phenocam Network NAU czdrylandpecan | dataset | 2022 | archive page | discover | drylands |
| Photosynthetically Active Radiation (PAR) data for Dead Run watershed, Baltimore County, MD,... | dataset |  | HydroShare (no DOI) | discover | urban |
| Physical soil characteristics, microbial community composition, extracellular enzymatic acti... | dataset | 2024 | DOI | discover | drylands |
| Pilot Study on Tracing Fugitive Dust from the Parleys Canyon Kilgore Quarry, Utah. | dataset | 2024 | DOI | discover | dust2 |
| Pond Branch Data Collection | dataset |  | HydroShare (no DOI) | discover | urban |
| Project HOTSPOT: Kimberly Well Borehole Geophysics Database | dataset | 2014 | archive page | discover | (none) |
| Puerto Rico Weather Station Data (2011) | dataset | 2014 | DOI | discover | (none) |
| Puerto Rico Weather Station Data (2012) | dataset | 2014 | DOI | discover | (none) |
| Puerto Rico Weather Station Data (2013) | dataset | 2014 | DOI | discover | (none) |
| Radar rainfall data for Baltimore, MD, USA | dataset |  | HydroShare (no DOI) | discover | urban |
| Radiocarbon ages_soil carbon | dataset |  | HydroShare (no DOI) | discover | (none) |
| River Bend Environmental Data - Jan2020 - ongoing | dataset |  | HydroShare (no DOI) | discover | cinet |
| RiverLab - Data Sample | dataset |  | HydroShare (no DOI) | discover | cinet |
| Root data for cross-biome root presence analyses and associated R scripts | dataset | 2025 | DOI | datacite | (none) |
| San Gabriel | dataset |  | HydroShare (no DOI) | discover | bedrock |
| San Jacinto | dataset |  | HydroShare (no DOI) | discover | bedrock |
| Santa Catalina Mountains - Marshall Gulch Soil Solution Chemistry 2009-2010 (Arizona, USA) | dataset | 2017 | DOI | discover | (none) |
| Santa Catalina Mountains Soil Solution Chemistry 2011 (Arizona, USA) | dataset | 2017 | DOI | discover | (none) |
| Santa Catalina Mountains Soil Solution Chemistry 2012 (Arizona, USA) | dataset | 2017 | DOI | discover | (none) |
| Santa Catalina Mountains Soil Solution Chemistry 2013 (Arizona, USA) | dataset | 2017 | DOI | discover | (none) |
| Santa Catalina Mountains Soil Solution Chemistry 2014 (Arizona, USA) | dataset | 2018 | DOI | discover | (none) |
| Santa Catalina Mountains Soil Solution Chemistry 2015 (Arizona, USA) | dataset | 2019 | DOI | discover | (none) |
| Santa Catalina Mountains Soil Solution Chemistry 2016 (Arizona, USA) | dataset | 2020 | DOI | discover | (none) |
| Santa Catalina Mountains Soil Solution Chemistry 2017 (Arizona, USA) | dataset | 2020 | DOI | discover | (none) |
| Santa Catalina Mountains Soil Solution Chemistry 2018 (Arizona, USA) | dataset | 2021 | DOI | discover | (none) |
| Santa Catalina Mountains Soil Solution Chemistry 2019 (Arizona, USA) | dataset | 2021 | DOI | discover | (none) |
| sarawarix/Code for climatic and anthropogenic perturbations impact stream geochemistry | dataset | 2025 | archive page | discover | (none) |
| Seismic refraction data for Dead Run watershed, Maryland, USA | dataset |  | HydroShare (no DOI) | discover | urban |
| Seismic refraction data for Northwest Branch Anacostia River watershed, Maryland, USA | dataset |  | HydroShare (no DOI) | discover | urban |
| Seismic refraction data for Pennypack Creek watershed, Philadelphia, PA, USA | dataset |  | HydroShare (no DOI) | discover | urban |
| SkyTEM Survey:Reynolds Creek | dataset |  | HydroShare (no DOI) | discover | (none) |
| Soil CO2 and O2 exchange at a bajada shrubland site on the Jornada Experimental Range, 2021-... | dataset | 2026 | DOI | datacite | (none) |
| Soil leachate from core experiments flushed with solutions of different composition to simul... | dataset | 2023 | DOI | discover | bigdata |
| Soil moisture, conductivity, and oxygen data for Dead Run watershed, Baltimore County, MD, USA | dataset |  | HydroShare (no DOI) | discover | urban |
| Soil Water Retention Curves - Ivey Pecan Orchard (Tornillo, TX) | dataset | 2026 | DOI | discover | drylands |
| South Carolina Piedmont | dataset |  | HydroShare (no DOI) | discover | bedrock |
| Southern Sierra | dataset |  | HydroShare (no DOI) | discover | bedrock |
| Southern Sierra Critical Zone Observatory (SSCZO), Providence Creek meteorological data, soi... | dataset | 2022 | DOI | datacite | (none) |
| Stream temperature data for Dead Run, Baltimore County, MD, USA | dataset |  | HydroShare (no DOI) | discover | urban |
| Supporting Dataset for “Methylmercury in Lake Bed Soils During Re-flooding of an Appalachian... | dataset |  | HydroShare (no DOI) | discover | hub |
| Susquehanna Shale Hills Critical Zone Observatory (CZO) - Soil Surface N2O & CO2 Gas Flux Da... | dataset | 2018 | DOI | discover | (none) |
| Susquehanna Shale Hills Critical Zone Observatory - 2015 high-frequency water chemistry of t... | dataset | 2019 | DOI | discover | (none) |
| Susquehanna Shale Hills Critical Zone Observatory - 2016 high-frequency water chemistry of t... | dataset | 2019 | DOI | discover | (none) |
| Susquehanna Shale Hills Critical Zone Observatory - 2017 high-frequency water chemistry of t... | dataset | 2019 | DOI | discover | (none) |
| Susquehanna Shale Hills Critical Zone Observatory - Cole Farm Geochemistry | dataset | 2020 | DOI | discover | (none) |
| Susquehanna Shale Hills Critical Zone Observatory - Cole Farm groundwater surface water chem... | dataset | 2021 | DOI | discover | (none) |
| Susquehanna Shale Hills Critical Zone Observatory - Sequential filtration of stream and grou... | dataset | 2019 | DOI | discover | (none) |
| Susquehanna Shale Hills Critical Zone Observatory - Shaver's Creek Watershed Stream Chemistr... | dataset | 2018 | DOI | discover | (none) |
| Susquehanna Shale Hills Critical Zone Observatory - Shaver's Creek Watershed Stream Chemistr... | dataset | 2018 | DOI | discover | (none) |
| Susquehanna Shale Hills Critical Zone Observatory - Shaver's Creek Watershed Stream Chemistr... | dataset | 2018 | DOI | datacite | (none) |
| Susquehanna Shale Hills Critical Zone Observatory - Shaver's Creek Watershed Stream Chemistr... | dataset | 2020 | DOI | discover | (none) |
| Susquehanna Shale Hills Critical Zone Observatory Porewater Chemistry (2006) | dataset | 2013 | DOI | discover | (none) |
| Susquehanna Shale Hills Critical Zone Observatory Porewater Chemistry (2007) | dataset | 2013 | DOI | discover | (none) |
| Susquehanna Shale Hills Critical Zone Observatory Porewater Chemistry (2008) | dataset | 2013 | DOI | discover | (none) |
| Susquehanna Shale Hills Critical Zone Observatory Porewater Chemistry (2009) | dataset | 2013 | DOI | discover | (none) |
| Susquehanna Shale Hills Critical Zone Observatory Porewater Chemistry (2010) | dataset | 2013 | DOI | discover | (none) |
| Susquehanna Shale Hills Critical Zone Observatory Porewater Chemistry (2011) | dataset | 2014 | DOI | discover | (none) |
| Susquehanna Shale Hills Critical Zone Observatory Stream Water Chemistry (2006) | dataset | 2013 | DOI | discover | (none) |
| Susquehanna Shale Hills Critical Zone Observatory Stream Water Chemistry (2007) | dataset | 2013 | DOI | discover | (none) |
| Susquehanna Shale Hills Critical Zone Observatory Stream Water Chemistry (2008) | dataset | 2013 | DOI | discover | (none) |
| Susquehanna Shale Hills Critical Zone Observatory Stream Water Chemistry (2009) | dataset | 2013 | DOI | discover | (none) |
| Susquehanna Shale Hills Critical Zone Observatory Stream Water Chemistry (2010) | dataset | 2013 | DOI | discover | (none) |
| Susquehanna Shale Hills Critical Zone Observatory Tree Survey | dataset | 2019 | DOI | discover | (none) |
| Susquehanna Shale Hills Critical Zone Observatory Tree Survey (2008) | dataset | 2013 | DOI | discover | (none) |
| Susquehanna Shale Hills Critical Zone Observatory Tree Survey (2012 updates) | dataset | 2015 | DOI | discover | (none) |
| Susquehanna Shale Hills Litter and Dendroband Data | dataset | 2016 | DOI | discover | (none) |
| Tennessee Weather Station Data (2010) | dataset | 2014 | DOI | datacite | (none) |
| Tennessee Weather Station Data (2011) | dataset | 2014 | DOI | discover | (none) |
| Tennessee Weather Station Data (2012) | dataset | 2014 | DOI | datacite | (none) |
| Tennessee Weather Station Data (2013) | dataset | 2014 | DOI | discover | (none) |
| The Long-term Development of Wetland Plant Communities with Water Deliveries in a Created We... | dataset | 2026 | DOI | discover | drylands |
| Third-order White Clay Creek and Boulton Run - Climate, Stable Isotopes, Stream Water Chemis... | dataset | 2018 | DOI | crossref | (none) |
| Time series data for major dissolved ions and discharge of Sangamon River from the RiverLab | dataset | 2023 | DOI | discover | cinet |
| Tornillo pecan orchard soil CO2 efflux spatial variation | dataset | 2026 | DOI | discover | drylands |
| Total suspended solids data for Pennypack Creek, Philadelphia, PA, USA | dataset |  | HydroShare (no DOI) | discover | urban |
| Trace element chemistry and strontium isotope ratios of particulate matter collected in the ... | dataset | 2024 | DOI | discover | dust2 |
| Trace gas data for Dead Run, Baltimore County, MD, USA | dataset |  | HydroShare (no DOI) | discover | urban |
| Turbidity and suspended sediment data for Gwynns Falls, Baisman Run, and Pond Branch, Baltim... | dataset |  | HydroShare (no DOI) | discover | urban |
| US-Jo1: Jornada Experimental Range Bajada Site | dataset | 2022 | DOI | discover | (none) |
| US-Jo3: Jornada Experimental Range Red Lake Playa | dataset | 2021 | archive page | discover | drylands |
| US-Rws: Reynolds Creek Wyoming big sagebrush | dataset | 2021 | DOI | discover | (none) |
| Using LiDAR to improve classification of forested geomorphic landforms in the Ridge and Vall... | dataset | 2014 | DOI | datacite | (none) |
| Virginia Forest - DTW, Water Temperature, Specific conductance - Jun 2021-Jul 2024 | dataset | 2025 | DOI | discover | coastal |
| Virginia Forest - Soil water content, Soil temperature, Electrical conductivity - Jun 2021-J... | dataset | 2025 | DOI | discover | coastal |
| Virginia Forest- Redox Potential - Jun 2022-Jan 2024 | dataset | 2026 | DOI | discover | coastal |
| Virginia Weather Station Data (2010) | dataset | 2014 | DOI | discover | (none) |
| Virginia Weather Station Data (2011) | dataset | 2014 | DOI | discover | (none) |
| Virginia Weather Station Data (2012) | dataset | 2014 | DOI | discover | (none) |
| Virginia Weather Station Data (2013) | dataset | 2014 | DOI | discover | (none) |
| Water chemistry from Southcentral Alaska glacial watersheds | dataset | 2025 | DOI | discover | dust2 |
| Water chemistry from the upper Provo River watershed, 2012-2022 | dataset | 2024 | DOI | discover | dust2 |
| Water chemistry from the upper Provo River watershed, water year 2023 | dataset | 2024 | DOI | discover | dust2 |
| Water isotope data for Dead Run, Baltimore County, MD, USA | dataset |  | HydroShare (no DOI) | discover | urban |
| Water isotope data for Northwest Branch Anacostia River, MD, USA | dataset |  | HydroShare (no DOI) | discover | urban |
| Water isotope data for Pennypack Creek, Philadelphia, PA, USA | dataset |  | HydroShare (no DOI) | discover | urban |
| Water isotope data for Swift Creek, Wake County, NC, USA | dataset |  | HydroShare (no DOI) | discover | urban |
| Water quality synoptic data for Dead Run, Baltimore County, MD USA | dataset |  | HydroShare (no DOI) | discover | urban |
| Watershed boundaries, hydrography, stream gage locations, and impervious surface area shapef... | dataset |  | HydroShare (no DOI) | discover | urban |
| Watershed boundaries, hydrography, stream gage locations, and impervious surface area shapef... | dataset |  | HydroShare (no DOI) | discover | urban |
| Watershed boundaries, hydrography, stream gage locations, and impervious surface area shapef... | dataset |  | HydroShare (no DOI) | discover | urban |
| Watershed boundaries, hydrography, stream gage locations, and impervious surface area shapef... | dataset |  | HydroShare (no DOI) | discover | urban |
| Watershed boundaries, hydrography, stream gage locations, and impervious surface area shapef... | dataset |  | HydroShare (no DOI) | discover | urban |
| Watersheds and stream networks in the Luquillo Experimental Forest, Puerto Rico. | dataset | 2021 | DOI | datacite | (none) |
| Workflow for stream temperature data animation | dataset |  | HydroShare (no DOI) | discover | urban |

### Software (6)

| Title | Type | Year | Address | Source | Sites |
|---|---|---|---|---|---|
| BrynStewart/BioRT-HBV_W9_20162017: BioRTHBV_W9_Files | software | 2024 | DOI | datacite | (none) |
| EnviroDIY Mayfly Logger: v0.5 | software | 2019 | DOI | datacite | (none) |
| EnviroDIY Mayfly Logger: v0.5b | software | 2019 | DOI | datacite | (none) |
| EnviroDIY/ModularSensors: v0.19.6: Modem Improvements & ADS1X15 Generalization | software | 2019 | DOI | datacite | (none) |
| EnviroDIY/ModularSensors: v0.21.0: Support for all Atlas Scientific I2C sensors, compiler-sa... | software | 2019 | DOI | datacite | (none) |
| Exudate-Extractable Phosphorus Dataset and R Code (RProj_ExudatePhos) | software | 2026 | DOI | datacite | (none) |

### Papers (206)

| Title | Type | Year | Address | Source | Sites |
|---|---|---|---|---|---|
| A grazing crab drives saltmarsh carbon storage and recovery | paper | 2024 | DOI | crossref | (none) |
| A Machine Learning‐Based High‐Resolution Inventory of Soil Inorganic Carbon Across the Conti... | paper | 2026 | DOI | crossref | (none) |
| A novel approach to increase accuracy in remotely sensed evapotranspiration through basin wa... | paper | 2025 | DOI | crossref | (none) |
| A Relational Model for Environmental and Water Resources Data | paper | 2008 | archive page | czo-archive | national |
| A Second Order Accurate, Positivity Preserving Numerical Method for the Poisson–Nernst–Planc... | paper | 2023 | DOI | crossref | (none) |
| A simple geomorphic‐based analytical model for predicting the spatial distribution of soil t... | paper | 2013 | DOI | crossref | (none) |
| A Strategy for Advancing Critical Zone Science - February 2016 | paper | 2016 | archive page | czo-archive | national |
| AGI LiDAR Handout | paper | 2013 | archive page | czo-archive | national |
| Airborne lidar intensity correction for mapping snow cover extent and effective grain size i... | paper | 2024 | DOI | crossref | (none) |
| An Ecosystem Services-Centric Land Use and Land Cover Classification for a Subbasin of the T... | paper | 2022 | DOI | crossref | (none) |
| An optical method for carbon dioxide isotopes and mole fractions in small gas samples: Traci... | paper | 2017 | DOI | crossref | (none) |
| Anatomy of a deep Piedmont critical zone: Evaluating hypotheses on regolith depth controls t... | paper | 2024 | DOI | crossref | (none) |
| Assessing urban rainfall‐runoff response to stormwater management extent | paper | 2021 | DOI | crossref | (none) |
| Bedrock erosion and changes in bed sediment lithology in response to an extreme flood event:... | paper | 2019 | DOI | crossref | (none) |
| Bedrock Vadose Zone Storage Dynamics Under Extreme Drought: Consequences for Plant Water Ava... | paper | 2022 | DOI | crossref | (none) |
| Can We Use the Water Budget to Infer Upland Catchment Behavior? The Role of Data Set Error E... | paper | 2022 | DOI | crossref | (none) |
| Canopy and Terrain Interactions Affecting Snowpack Spatial Patterns in the Sierra Nevada of ... | paper | 2019 | DOI | crossref | (none) |
| Carbon Exports from Terrestrial Ecosystems: A Critical-Zone Framework | paper | 2019 | DOI | czo-archive | national |
| Causal Drivers of Land‐Atmosphere Carbon Fluxes From Machine Learning Models and Data | paper | 2024 | DOI | crossref | (none) |
| Challenges and Future Directions in Quantifying Terrestrial Evapotranspiration | paper | 2024 | DOI | crossref | (none) |
| Climate-driven decoupling of wetland and upland biomass trends on the mid-Atlantic coast | paper | 2022 | DOI | crossref | (none) |
| Combining Submicron Spectroscopy Techniques (AFM-IR and O-PTIR) To Detect and Quantify Micro... | paper | 2025 | DOI | crossref | (none) |
| Compensatory Mechanisms Absorb Regional Carbon Losses Within a Rapidly Shifting Coastal Mosaic | paper | 2023 | DOI | crossref | (none) |
| Concentration–discharge relationships describe solute and sediment mobilization, reaction, a... | paper | 2018 | DOI | crossref | (none) |
| Confronting the water potential information gap | paper | 2022 | DOI | crossref | (none) |
| Consistent microbial and nutrient resource island patterns during monsoon rain in a Chihuahu... | paper | 2023 | DOI | crossref | (none) |
| Contrasting Depth Dependencies of Plant Root Presence and Mass Across Biomes Underscore Prol... | paper | 2025 | DOI | crossref | (none) |
| Convergence analysis of structure‐preserving numerical methods for nonlinear Fokker–Planck e... | paper | 2021 | DOI | crossref | (none) |
| Correction of PM 2.5 underestimation in low-cost sensors under elevated dust loading using o... | paper | 2026 | DOI | crossref | (none) |
| Creating a Critical Zone: Feedbacks Between Bedrock Geology, Water Retention, and Vegetation... | paper | 2026 | DOI | crossref | (none) |
| Critical Zone Measurements: Development of Novel Experimental Deployments to Further Our Und... | paper | 2020 | DOI | crossref | (none) |
| Critical Zone Observatory Steering Committee Report, June, 25 2012 | paper | 2012 | archive page | czo-archive | national |
| Critical Zone Oxford Bibliography | paper | 2016 | DOI | czo-archive | national |
| Critical Zone Science and Observatories and Related Education and Outreach Activities and Re... | paper | 2016 | archive page | czo-archive | national |
| Critical Zone Science, Interdisciplinarity and the NGSS | paper | 2016 | archive page | czo-archive | national |
| CUAHSI WaterML | paper | 2007 | archive page | czo-archive | national |
| Cyberinfrastructure for Environmental Observation Networks (CEON) Workshop Report | paper | 2008 | archive page | czo-archive | national |
| CZO Display File Specification | paper | 2011 | archive page | czo-archive | national |
| CZO National Office Annual Report 2015 | paper | 2015 | archive page | czo-archive | national |
| CZO National Office Annual Report 2016 | paper | 2016 | archive page | czo-archive | national |
| CZO National Office Annual Report 2017 | paper | 2017 | archive page | czo-archive | national |
| CZO National Office Annual Report 2018 | paper | 2018 | archive page | czo-archive | national |
| CZO National Office Annual Report 2019 | paper | 2019 | archive page | czo-archive | national |
| Darkened Snow Triggers Different Snowmelt Responses Over Contrasting Water Years in Great Sa... | paper | 2026 | DOI | crossref | (none) |
| Data Infrastructure for the Critical Zone Observatories CZOData: an EarthCube Design Prototype | paper | 2012 | archive page | czo-archive | national |
| Data‐Model Integration to Unravel Critical Zone Dynamics: Challenges, Successes, and Future ... | paper | 2025 | DOI | crossref | (none) |
| Decadal Shifts Towards Higher Riverine Silicon Relative to Nitrogen and Phosphorus Across Hi... | paper | 2026 | DOI | crossref | (none) |
| Deep critical zone controls on shallow landslides | paper | 2026 | DOI | crossref | (none) |
| Deep subsurface water can sustain giant sequoias | paper | 2026 | DOI | crossref | (none) |
| Developing and evaluating a theory for the lateral erosion of bedrock channels for use in la... | paper | 2017 | DOI | crossref | (none) |
| Development of a Community Hydrologic Information System | paper | 2009 | archive page | czo-archive | national |
| Differential snow depth in warm edges versus cold edges of forest gaps, and its potential im... | paper | 2025 | DOI | crossref | (none) |
| Discoveries in the Critical Zone: Where Life meets Rock | paper | 2013 | archive page | czo-archive | national |
| Diverging Sensitivity of Soil Water Stress To Changing Snowmelt Timing in the Western U.S. | paper | 2016 | DOI | czo-archive | national |
| Diverse dust sources and warming trigger cyanobacteria abundance in freshwater ecosystems in... | paper | 2025 | DOI | crossref | (none) |
| Dominant source areas shift seasonally from longitudinal to lateral contributions in a monta... | paper | 2023 | DOI | crossref | (none) |
| Drivers and patterns of iron redox cycling from surface to bedrock in a deep tropical forest... | paper | 2016 | DOI | crossref | (none) |
| Drivers of Elevation Change in a Retreating Coastal Forest | paper | 2025 | DOI | crossref | (none) |
| Drivers of Spatial Change in Seagrass Carbon Stock Amid Shifting Species Dominance | paper | 2026 | DOI | crossref | (none) |
| Drought Response in Three Conifer Species Detected by Sap Flow and Proximal Thermal Remote S... | paper | 2025 | DOI | crossref | (none) |
| Drought stress and hurricane defoliation influence mountain clouds and moisture recycling in... | paper | 2021 | DOI | crossref | (none) |
| Duration of O 2 Exposure Determines Dominance of Fe II vs CH 4 Production in Tropical Forest... | paper | 2025 | DOI | crossref | (none) |
| Dust emission predictions in a semi-arid region with improved characterization of vegetation... | paper | 2026 | DOI | crossref | (none) |
| Dust storms increase the tolerance of phytoplankton to thermal and pH changes | paper | 2023 | DOI | crossref | (none) |
| Dynamics and mechanics of bed-load tracer particles | paper | 2014 | DOI | crossref | (none) |
| Dynamics of Surface‐Water Connectivity in a Low‐Gradient Meandering River Floodplain | paper | 2019 | DOI | crossref | (none) |
| Early Career Perspectives to Broaden the Scope of Critical Zone Science | paper | 2025 | DOI | crossref | (none) |
| Ecohydrologic Dynamics of Rock Moisture in a Montane Catchment of the Colorado Front Range | paper | 2023 | DOI | crossref | (none) |
| Elevated Nitrogen Deposition to Fire‐Prone Forests Adjacent to Urban and Agricultural Areas,... | paper | 2022 | DOI | crossref | (none) |
| Enrichment of Lignin-Derived Carbon in Mineral-Associated Soil Organic Matter | paper | 2019 | DOI | crossref | (none) |
| Ensemble-based data assimilation improves hyperresolution snowpack simulations in forests | paper | 2026 | DOI | crossref | (none) |
| Erosion and Mobilization Controls on Soil Organic Geochemistry, Form, and Flux within Intens... | paper | 2021 | DOI | datacite | (none) |
| Establishing fluvial silicon regimes and their stability across the Northern Hemisphere | paper | 2024 | DOI | crossref | (none) |
| Estimating stream chemistry during the snowmelt pulse using a spatially distributed, coupled... | paper | 2008 | DOI | czo-archive | national |
| Evapotranspiration Everywhere, All the Time: Towards a Unified View From Earth Observation | paper | 2026 | DOI | crossref | (none) |
| Examining spatial variation in soil solutes and flowpaths in a semi-arid, montane catchment | paper | 2022 | DOI | crossref | (none) |
| Experimental evidence of dust‐driven shifts in production, chlorophyll a , and community com... | paper | 2025 | DOI | crossref | (none) |
| Exploring the connection between critical zone structure and tree distribution in a semiarid... | paper | 2025 | DOI | crossref | (none) |
| Factors controlling spatiotemporal variability of soil carbon accumulation and stock estimat... | paper | 2024 | DOI | crossref | (none) |
| Field trials to detect drainage pipe networks using thermal and RGB data from unmanned aircraft | paper | 2020 | DOI | crossref | (none) |
| Fire return intervals explain different vegetation cover responses to wildfire restoration i... | paper | 2022 | DOI | crossref | (none) |
| Flowpath Partitioning Controls Chemical Weathering Fluxes in the Tropics | paper | 2025 | DOI | crossref | (none) |
| Frontiers in Exploration of the Critical Zone: Report of a workshop sponsored by the Nationa... | paper | 2006 | archive page | czo-archive | national |
| Future land cover and climate may drive decreases in snow wind‐scour and transpiration, incr... | paper | 2021 | DOI | crossref | (none) |
| Geologic, Climate and Anthropogenic Influences on Long‐Term and Seasonal Nitrate Dynamics in... | paper | 2026 | DOI | crossref | (none) |
| Geospatial Variability of Fluorescent Dissolved Organic Matter in Urban Watersheds: Relation... | paper | 2024 | DOI | crossref | (none) |
| Geostatistical Rock Physics Inversion for Predicting the Spatial Distribution of Porosity an... | paper | 2022 | DOI | crossref | (none) |
| Global-scale shifts in Anthropocene rooting depths pose unexamined consequences in critical ... | paper | 2021 | DOI | crossref | (none) |
| Global‐Scale Shifts in Rooting Depths Due To Anthropocene Land Cover Changes Pose Unexamined... | paper | 2022 | DOI | crossref | (none) |
| Greenhouse gas dynamics in tropical montane streams of Puerto Rico and the role of watershed... | paper | 2022 | DOI | crossref | (none) |
| Groundwater, soil moisture, light and weather data collected in a coastal forest bordering a... | paper | 2022 | DOI | crossref | (none) |
| Harmful dust from drying lakes: Preserving Great Salt Lake (USA) water levels decreases ambi... | paper | 2024 | DOI | crossref | (none) |
| Hidden vulnerability of US Atlantic coast to sea-level rise due to vertical land motion | paper | 2023 | DOI | crossref | (none) |
| High carbon losses from oxygen‐limited soils challenge biogeochemical theory and model assum... | paper | 2021 | DOI | crossref | (none) |
| Hydraulic redistribution buffers climate variability and regulates grass‐tree interactions i... | paper | 2021 | DOI | crossref | (none) |
| Hydrologic connectivity at the hillslope scale through intra‐snowpack flow paths during snow... | paper | 2020 | DOI | crossref | (none) |
| Hyperspectral Reflectance for Measuring Canopy‐Level Nutrients and Photosynthesis in a Salt ... | paper | 2022 | DOI | crossref | (none) |
| Hyporheic Reaction Potential: A Framework for Predicting Reach Scale Solute Fate and Transport | paper | 2024 | DOI | crossref | (none) |
| Identification of Dust-Dominated Periods and a PM 2.5 Correction Based Solely on Plantower P... | paper | 2025 | DOI | crossref | (none) |
| Identifying and addressing long-term Alphasense OPC-N3 sensor degradation | paper | 2026 | DOI | crossref | (none) |
| Identifying early-stage biogeochemical changes with IRIS films in coastal ecosystems impacte... | paper | 2026 | DOI | crossref | (none) |
| Impacts of climate and disturbance on nutrient fluxes and stoichiometry in mixed-conifer for... | paper | 2022 | DOI | crossref | (none) |
| Implications of waterfowl impoundments as a response to sea-level driven saltwater intrusion | paper | 2025 | DOI | crossref | (none) |
| Improved endmember mixing analysis (EMMA): Application to a snowmelt-dominated stream in nor... | paper | 2025 | DOI | crossref | (none) |
| Improving model calibrations in a changing world: controlling for nonstationarity after mega... | paper | 2025 | DOI | crossref | (none) |
| Influence of Climate and Coastal Flooding on Eastern Red Cedar Growth along a Marsh-Forest E... | paper | 2022 | DOI | crossref | (none) |
| Influence of Snowpack Cold Content on Seasonally Frozen Ground and Its Hydrologic Consequenc... | paper | 2022 | DOI | crossref | (none) |
| Initial soil moisture and soil texture control the impact of storm surges in coastal forests | paper | 2024 | DOI | crossref | (none) |
| Integrated Interdisciplinary Science of the Critical Zone as a Foundational Curriculum for A... | paper | 2017 | DOI | czo-archive | national |
| International Cooperation in Critical Zone (CZ) Science and Education | paper | 2016 | archive page | czo-archive | national |
| Laboratory evaluation of the Alphasense OPC-N3, and the Plantower PMS5003 and PMS6003 sensors | paper | 2023 | DOI | crossref | (none) |
| Land use influences dissolved organic matter composition in the U.S. Coastal Critical Zone N... | paper | 2026 | DOI | crossref | (none) |
| Landscape and Storm Characteristics Influence DOC and Nitrate Mobility and Riverine Export M... | paper | 2026 | DOI | crossref | (none) |
| Leveraging Groundwater Dynamics to Improve Predictions of Summer Low‐Flow Discharges | paper | 2023 | DOI | crossref | (none) |
| Limited impacts of storms on mid-Atlantic coastal forests | paper | 2026 | DOI | crossref | (none) |
| Linked nitrogen and carbon dynamics reveal distinct pools and patterns in a deep, weathered ... | paper | 2025 | DOI | crossref | (none) |
| Local Government Perspectives on Collaborative Governance: A Comparative Analysis of Iowa's ... | paper | 2020 | DOI | crossref | (none) |
| Local Topography and Streambed Hydraulic Conductivity Influence Riparian Groundwater Age and... | paper | 2023 | DOI | crossref | (none) |
| Long‐Term Changes in Concentration and Yield of Riverine Dissolved Silicon From the Poles to... | paper | 2023 | DOI | crossref | (none) |
| Luquillo Experimental Forest: Catchment science in the montane tropics | paper | 2021 | DOI | crossref | (none) |
| Marsh Migration Into Forests and Farms: Effects on Soil Biogeochemistry Along the Salinity G... | paper | 2026 | DOI | crossref | (none) |
| Measurement Report: An Exploratory Study of Fluorescence and CCN Activity of Urban Aerosols ... | paper | 2022 | DOI | crossref | (none) |
| Measurement report: An exploratory study of fluorescence and cloud condensation nuclei activ... | paper | 2022 | DOI | crossref | (none) |
| Meeting the Needs of Interdisciplinary Critical Zone Scientists by Leveraging and Linking Ex... | paper | 2021 | DOI | crossref | (none) |
| Metagenomic Characterization of Soil Microbial Communities in the Luquillo Experimental Fore... | paper | 2021 | DOI | crossref | (none) |
| Metal mobility and bioaccessibility in Great Salt Lake dust and exposure risks for humans an... | paper | 2026 | DOI | crossref | (none) |
| Microfluidic-electrochemical sensor utilizing statistical modeling for enhanced nitrate dete... | paper | 2025 | DOI | crossref | (none) |
| Microtopographic Variation as a Potential Early Indicator of Ecosystem State Change and Vuln... | paper | 2024 | DOI | crossref | (none) |
| Mineral surface area in deep weathering profiles reveals the interrelationship of iron oxida... | paper | 2023 | DOI | crossref | (none) |
| Modeling Aspect‐Controlled Evolution of Ground Thermal Regimes on Montane Hillslopes | paper | 2021 | DOI | crossref | (none) |
| Modeling streamflow sensitivity to climate warming and surface water inputs in a montane cat... | paper | 2022 | DOI | crossref | (none) |
| Modeling the mechanisms of coastal vegetation dynamics and ecosystem responses to changing w... | paper | 2025 | DOI | crossref | (none) |
| Modeling the mechanisms of conifer mortality under seawater exposure | paper | 2023 | DOI | crossref | (none) |
| Modelling nonlinear dynamics of Crassulacean acid metabolism productivity and water use for ... | paper | 2020 | DOI | crossref | (none) |
| Multi-scale influences on the fertile island effect: Landscape-scale and patch-level process... | paper | 2025 | DOI | crossref | (none) |
| Nonlinear storage–discharge dynamics of forested headwater catchment: A hysteresis index app... | paper | 2024 | DOI | crossref | (none) |
| Oak Transpiration Drawn From the Weathered Bedrock Vadose Zone in the Summer Dry Season | paper | 2020 | DOI | crossref | (none) |
| Observations and Measurements - XML Implementation | paper | 2011 | archive page | czo-archive | national |
| Oil and gas wastewater as road treatment: radioactive material exposure implications at the ... | paper | 2021 | DOI | crossref | (none) |
| On the role of inherited rock fabric in critical zone porosity development: Insights from se... | paper | 2025 | DOI | crossref | (none) |
| Organic acid concentration thresholds to mobilize phosphorus (P) in dryland soils | paper | 2025 | DOI | crossref | (none) |
| Orographic and vegetation effects on snow accumulation in the southern Sierra Nevada: a stat... | paper | 2015 | DOI | crossref | (none) |
| Patterns of hydrologic connectivity in the McMurdo Dry Valleys, Antarctica: A synthesis of 2... | paper | 2016 | DOI | czo-archive | national |
| Performance evaluation of Plantower’s PMSX003N: Laboratory and field analysis | paper | 2026 | DOI | crossref | (none) |
| Performance evaluation of the Alphasense OPC-N3 and Plantower PMS5003 sensor in measuring du... | paper | 2023 | DOI | crossref | (none) |
| Physical and Geochemical Characterization of Mineral Dust Samples Collected by the DUST^2 Pr... | paper | 2026 | DOI | crossref | (none) |
| Physiochemical Controls on the Horizontal Exchange of Blue Carbon Across the Salt Marsh‐Tida... | paper | 2023 | DOI | crossref | (none) |
| Place as context, place as inquiry: A phenomenographic study of teachers’ conceptions of pla... | paper | 2025 | DOI | crossref | (none) |
| Plant competition dominates grass species interactions in a migrating marsh-forest ecotone | paper | 2025 | DOI | crossref | (none) |
| Pond Sediments Reveal the Increasing Importance of Road Runoff as a Source of Metal Contamin... | paper | 2023 | DOI | crossref | (none) |
| Pre-storm hydrology buffers saltwater intrusion in coastal forests | paper | 2026 | DOI | crossref | (none) |
| Progress and Timeline for Deliverables Report for the Integrated Data Management System for ... | paper | 2015 | archive page | czo-archive | national |
| Projections of Permafrost and Seasonally Frozen Ground Along an Elevation Gradient at Niwot ... | paper | 2025 | DOI | crossref | (none) |
| Promoting critical zone science literacy through education and outreach | paper | 2026 | DOI | crossref | (none) |
| Quantification of uncertainties in conifer sap flow measured with the thermal dissipation me... | paper | 2018 | DOI | crossref | (none) |
| Quantifying and Managing Soil Functions in Earth's Critical Zone Combining Experimentation a... | paper | 2017 | archive page | czo-archive | national |
| Quantifying Depth‐Dependent Seismic Anisotropy in the Critical Zone Enhanced by Weathering o... | paper | 2021 | DOI | crossref | (none) |
| Quantifying Potential Nutrient Liberation Following Plant Investment in Root Exudates: Varia... | paper | 2026 | DOI | crossref | (none) |
| Quantifying weathering on variable rocks, an extension of geochemical mass balance: Critical... | paper | 2017 | DOI | crossref | (none) |
| Report of the Critical Zone Observatory (CZO) Network Science Steering Committee (SSC) of In... | paper | 2015 | archive page | czo-archive | national |
| Report of the Steering Committee | paper | 2011 | archive page | czo-archive | national |
| Report of the Steering Committee | paper | 2010 | archive page | czo-archive | national |
| RETRACTED: Temperature optimum for marsh resilience and carbon accumulation revealed in a wh... | paper | 2022 | DOI | crossref | (none) |
| Runoff composition is insensitive to summer rain contributions in a montane headwater stream | paper | 2025 | DOI | crossref | (none) |
| Salinity increases with water table elevation at the boundary between salt marsh and forest | paper | 2022 | DOI | crossref | (none) |
| Seasonal dynamics of the soil microbial community structure within the proximal area of tree... | paper | 2016 | DOI | crossref | (none) |
| Sediment Exchange Across Coastal Barrier Landscapes Alters Ecosystem Extents | paper | 2023 | DOI | crossref | (none) |
| Seeing the Disturbed Forest for the Trees: Remote Sensing Is Underutilized to Quantify Criti... | paper | 2023 | DOI | crossref | (none) |
| Sensitivity of Soil Water Availability to Changing Snowmelt Timing in the Western U.S. | paper | 2015 | DOI | czo-archive | national |
| Shifting groundwater fluxes in bedrock fractures: Evidence from stream water radon and water... | paper | 2024 | DOI | crossref | (none) |
| Signatures of Hydrologic Function Across the Critical Zone Observatory Network | paper | 2021 | DOI | crossref | (none) |
| Snow Sublimation Significantly Decreases Following Stand‐Replacing Fire With Minor Water Bal... | paper | 2025 | DOI | crossref | (none) |
| Soil Carbon Dioxide Flux Partitioning in a Calcareous Watershed With Agricultural Impacts | paper | 2021 | DOI | crossref | (none) |
| Soil carbon redistribution and organo-mineral associations after lateral soil movement and m... | paper | 2018 | DOI | crossref | (none) |
| Soil CO 2 Controls Short‐Term Variation but Climate Regulates Long‐Term Mean of Riverine Ino... | paper | 2022 | DOI | crossref | (none) |
| Soil organic carbon is not just for soil scientists: measurement recommendations for diverse... | paper | 2021 | DOI | crossref | (none) |
| Soil signals of key mechanisms driving greater protection of organic carbon under aspen comp... | paper | 2025 | DOI | crossref | (none) |
| Soils signal key mechanisms driving greater protection of organic carbon under aspen compare... | paper | 2025 | DOI | crossref | (none) |
| Spatial snow water equivalent estimation for mountainous areas using wireless-sensor network... | paper | 2018 | DOI | crossref | (none) |
| Spring water discharge and metal enrichment in urban soils | paper | 2024 | DOI | crossref | (none) |
| Steering Committee Report on the All-Hands meeting at the Southern Sierra Critical Zone Obse... | paper | 2014 | archive page | czo-archive | national |
| Sustainable wood microfluidics for versatile electrochemical studies with proof-of-concept a... | paper | 2025 | DOI | crossref | (none) |
| Sustaining Earth's Critical Zone | paper | 2012 | archive page | czo-archive | national |
| Temporal patterns of fine‐root dynamics have little influence on seasonal soil CO 2 efflux i... | paper | 2023 | DOI | crossref | (none) |
| Terrestrial Groundwater Drives Coastal Ecosystem Shifts | paper | 2025 | DOI | crossref | (none) |
| The Counteracting Effects of Snowmelt Rate and Timing on Runoff | paper | 2020 | DOI | crossref | (none) |
| The Ecohydrology of Coastal Ghost Forests | paper | 2025 | DOI | crossref | (none) |
| The prediction of uneven snowpack response to forest thinning informs forest restoration in ... | paper | 2023 | DOI | crossref | (none) |
| The shrinking Great Salt Lake contributes to record high dust-on-snow deposition in the Wasa... | paper | 2023 | DOI | crossref | (none) |
| Thinking Outside the Rocks: Subsurface Water Storage, Topography, and Land Cover Are Key Mod... | paper | 2026 | DOI | crossref | (none) |
| Time‐Variable Transit Time Distributions in the Hyporheic Zone of a Headwater Mountain Stream | paper | 2018 | DOI | crossref | (none) |
| Tradeoffs Between Vertical and Lateral Resilience in a Salt Marsh Restoration Model | paper | 2025 | DOI | crossref | (none) |
| Trends in regolith thickness in a headwater catchment, Sierra Nevada, California | paper | 2023 | DOI | crossref | (none) |
| Triple Oxygen and Hydrogen Isotopes of Soil Water Across Climates, Seasons, and Depths | paper | 2026 | DOI | crossref | (none) |
| Two Decades of Dust Radiative Forcing on Snow Cover Across the Great Salt Lake Basin | paper | 2025 | DOI | crossref | (none) |
| Upland forest retreat lags behind sea‐level rise in the mid‐Atlantic coast | paper | 2023 | DOI | crossref | (none) |
| Urban soil metal contamination and geochemical phase distributions in Pittsburgh: a cross-ci... | paper | 2026 | DOI | crossref | (none) |
| Urban soils in a historically industrial city: patterns of trace metals in Pittsburgh, Penns... | paper | 2022 | DOI | crossref | (none) |
| Using Seismic Refraction Data to Estimate a Relationship Between Landscape Curvature and Dee... | paper | 2025 | DOI | crossref | (none) |
| Visualising High‐Frequency Stream Temperature Data Using an Automated Mapping Workflow | paper | 2025 | DOI | crossref | (none) |
| What do relationships between extractable metals and soil organic carbon concentrations mean? | paper | 2022 | DOI | crossref | (none) |
| What do we need to predict groundwater nitrate recovery trajectories? | paper | 2021 | DOI | crossref | (none) |
| Wildfire smoke impacts lake ecosystems | paper | 2024 | DOI | crossref | (none) |
| Wind and topography underlie correlation between seasonal snowpack, mountain glaciers, and l... | paper | 2025 | DOI | crossref | (none) |
| Year 1 Project Report for EAR-1332257: Integrated Data Management System for Critical Zone O... | paper | 2013 | archive page | czo-archive | national |
| Year 2 Project Report for EAR-1332257: Integrated Data Management System for Critical Zone O... | paper | 2014 | archive page | czo-archive | national |

## Left out (items 1 to 3)

| Title | Address | Reason |
|---|---|---|
| Integrated Data Management System for Critical Zone Observatories (EAR-... | -2011-integrated-data-management-system-for-critical-zone-o/ | proposal |
| BioRT_HBV_SagehenFiles_20260226 | 10.5281/zenodo.18793871 | zenodo version or copy of 10.5281/zenodo.17485933 |
| BrynStewart/BioRT-HBV_W9_20162017: BioRTHBV_W9_Files | 10.5281/zenodo.10583216 | zenodo version or copy of 10.5281/zenodo.10583215 |
| CO02_GLV_DustNutrients | https://zenodo.org/records/14553407 | zenodo version or copy of 10.5281/zenodo.14553406 |
| CO02_GLV_DustNutrients | 10.5281/zenodo.14553407 | zenodo version or copy of 10.5281/zenodo.14553406 |
| Data and imagery associated with "Mapping scytonemin pigment content and... | 10.5281/zenodo.19698294 | zenodo version or copy of 10.5281/zenodo.19698293 |
| Dataset from "Dust storms increase the tolerance of phytoplankton to the... | https://zenodo.org/records/10116443 | zenodo version or copy of 10.5281/zenodo.10081891 |
| Dataset from "Dust storms increase the tolerance of phytoplankton to the... | 10.5281/zenodo.10081892 | zenodo version or copy of 10.5281/zenodo.10081891 |
| Dataset from "Dust storms increase the tolerance of phytoplankton to the... | 10.5281/zenodo.10116443 | zenodo version or copy of 10.5281/zenodo.10081891 |
| Dataset from the article "Diverse dust sources and warming trigger cyano... | https://zenodo.org/records/14795962 | zenodo version or copy of 10.5281/zenodo.14795961 |
| Dataset from the article "Diverse dust sources and warming trigger cyano... | 10.5281/zenodo.14795962 | zenodo version or copy of 10.5281/zenodo.14795961 |
| Dust storms increase the tolerance of phytoplankton to thermal and pH ch... | 10.5281/zenodo.13647042 | preprint of 10.1111/gcb.17055 |
| Dust storms increase the tolerance of phytoplankton to thermal and pH ch... | 10.5281/zenodo.13647043 | preprint of 10.1111/gcb.17055 |
| EcoTram below-canopy shortwave radiation observations and Lidar-to-Radia... | 10.5281/zenodo.18645739 | zenodo version or copy of 10.5281/zenodo.18645738 |
| EcoTram below-canopy shortwave radiation observations and Lidar-to-Radia... | 10.5281/zenodo.21363519 | zenodo version or copy of 10.5281/zenodo.18645738 |
| Ensemble-based data assimilation improves hyperresolution snowpack simul... | 10.5194/egusphere-2025-2347 | preprint of 10.5194/tc-20-209-2026 |
| EnviroDIY Mayfly Logger: v0.5b | 10.5281/zenodo.2572006 | zenodo version or copy of 10.5281/zenodo.2567248 |
| Erosion and Mobilization Controls on Soil Organic Geochemistry, Form, an... | 10.25394/pgs.15062379.v1 | figshare version of the same dissertation |
| estherlee0000/MLCan2.0: Data for AZ | 10.5281/zenodo.3885826 | zenodo version or copy of 10.5281/zenodo.3885825 |
| estherlee0000/MLCan2.0: Data for AZ | 10.5281/zenodo.3887188 | zenodo version or copy of 10.5281/zenodo.3885825 |
| Exudate-Extractable Phosphorus Dataset and R Code (RProj_ExudatePhos) | 10.5281/zenodo.17860455 | zenodo version or copy of 10.5281/zenodo.17860454 |
| Exudate-Extractable Phosphorus Dataset and R Code (RProj_ExudatePhos) | 10.5281/zenodo.18339480 | zenodo version or copy of 10.5281/zenodo.17860454 |
| Factors controlling spatiotemporal variability of soil carbon accumulati... | 10.5194/egusphere-2023-2627 | preprint of 10.5194/bg-21-2367-2024 |
| Improving Model Calibrations in a Changing World: Controlling for Nonsta... | 10.5194/egusphere-2025-1877 | preprint of 10.5194/hess-29-6333-2025 |
| Jemez River Basin Soil Solution Chemistry 2011 (New Mexico, USA) | 10.1594/ieda/100639 | older version; 10.1594/IEDA/111156 is its new version |
| Mineral surface area in deep weathering profiles reveals the interrelati... | 10.5194/esurf-2022-9 | preprint of 10.5194/esurf-11-51-2023 |
| Modeling the mechanisms of coastal vegetation dynamics and ecosystem res... | 10.5194/egusphere-2025-1544 | preprint of 10.5194/bg-22-6963-2025 |
| Panola Mountain critical zone development data | 10.5281/zenodo.16945015 | zenodo version or copy of 10.5281/zenodo.16945014 |
| Performance evaluation of the Alphasense OPC-N3 and Plantower PMS5003 se... | 10.5194/amt-2022-292 | preprint of 10.5194/amt-16-2455-2023 |
| Root data for cross-biome root presence analyses and associated R scripts | 10.5281/zenodo.16995490 | zenodo version or copy of 10.5281/zenodo.16995489 |
| Root data for cross-biome root presence analyses and associated R scripts | 10.5281/zenodo.17582099 | zenodo version or copy of 10.5281/zenodo.16995489 |
| Root data for cross-biome root presence analyses and associated R scripts | 10.5281/zenodo.17663627 | zenodo version or copy of 10.5281/zenodo.16995489 |
| Wind and Topography Underlie Correlation Between Seasonal Snowpack, Moun... | 10.5194/egusphere-2024-3862 | preprint of 10.5194/tc-19-3193-2025 |
| BrynStewart/BioRT-HBV_W9_20162017: BioRTHBV_W9_Files | https://zenodo.org/records/10583216 | zenodo copy of 10.5281/zenodo.10583215 |
| Test | ww.hydroshare.org/resource/0dd02c98669d4b9ca99865e5fc502d72/ | test resource |

## Sample check (rule 12)

Read in the harvest file, each matched to its row above:

papers with a DOI: Differential snow depth in warm edges versus (2025); Field trials to detect drainage pipe networks (2020); An Ecosystem Services-Centric Land Use and La (2022)

archive-page papers: Observations and Measurements - XML Implement (2011); Data Infrastructure for the Critical Zone Obs (2012); Critical Zone Science, Interdisciplinarity an (2016)

datasets: Data from: Do precipitation extremes drive gr (2019); Milford Neck - Soil water content, Soil tempe (2025); Collection of Great Salt Lake Data

software: EnviroDIY Mayfly Logger: v0.5 (2019); EnviroDIY Mayfly Logger: v0.5b (2019); BrynStewart/BioRT-HBV_W9_20162017: BioRTHBV_W (2024)

Also read: the left-out versions against DataCite (`HasVersion` marks the concept record, `IsVersionOf` a version) for each Zenodo group, the Crossref pairs against their final versions, and the five bare-title Bedrock-cluster datasets and "Test" in the harvest file. Not opened by hand: any page, beyond the doi.org handle and HydroShare answers of the link check.

## Near-duplicate scan of the whole list (2,050 records, as it will stand after #164)

I compared every pair of same-type records by title similarity (word overlap of 0.8 or more and a text ratio of 0.88 or more, excluding titles that differ only in numbers) and read the 37 pairs it found. None is a duplicate to remove:
- 24 are datasets whose titles differ in the measured variable or site (for example "Soil Moisture" against "Soil Temperature", "Lower Site" against "Upper Site"; different HydroShare resources).
- 7 are the annual-report series (First to Fourth annual report for NSF EAR-0724958).
- 6 are a thesis and the paper made from it, or two editions of one document: the Christina dissertation "Controls & dynamics of canopy-derived dissolved organic matter" (Ph.D.) and the monograph "Controls and dynamics ..." (Publications in Climatology 64); the 2012 and 2015 editions of the CZO infrastructure guide; "Drainage from the critical zone" (a 2016 Berkeley thesis) and its 2018 paper; the Polymictic pool thesis (2013) and article (2016); a "Record of coupled hillslope and channel response" thesis (2017) and paper (2018); a snow-cover-duration thesis (2011) and paper (2014).
- The Addendum and its parent paper, and the reply and the comment's subject, are pairs already flagged.
