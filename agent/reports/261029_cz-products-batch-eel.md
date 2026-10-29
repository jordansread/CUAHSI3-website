# Products batch 1: Eel River (proposal for epic T11)

Date: 29 October 2026. Ticket: CUAHSI/CUAHSI3-website#76 (T11). Branch `task/cz-products-proposal`. **This is the proposal step of "Propose, then apply". Nothing in `content/` has been changed.** Source: `agent/reports/261029_cz-harvest-proposal.json` (3,875 records), selecting every record whose `sites` includes `eel`.

## Decisions applied (Jordan, 29 October 2026)

- Talks and posters are held out of every batch until a type for them is decided (T11 question).
- Award numbers cited but absent from the registry stay cited and unlinked.
- The products list may be split by observatory; that needs a schema and loader change, which is a code PR (see "Needs your decision").

## Counts

| | Count |
|---|---|
| Records tagged `eel` | 116 (20 datasets, 96 papers) |
| Held out: talks and posters | 13 |
| **Proposed for this batch** | **103** (20 datasets, 83 papers) |
| Of the papers: paper/book 63, report/proposal 13, dissertation/thesis 7 | |
| Papers with a DOI / archive page only | 56 / 27 |
| Datasets with a DOI / HydroShare address with no DOI | 2 / 18 |
| Records that name an award | 0 of 103 |
| Records with no year | 18 (all datasets) |
| Records tagged with more than two sites | 21 |
| Duplicate titles within the batch (normalised, same type) | 0 |
| Duplicates against `content/critical-zone/` | none to compare: the folder does not exist yet |

## Judgment calls and unverified (mine; change any)

1. **Held talks and posters (13) are not in the table.** Per your answer. They stay in the proposal file.
2. **Reports, proposals and theses (20) are typed `paper`**, as the schema has no other type; the archive's own type stays in provenance. Say if you want them held out too.
3. **18 of the 20 datasets are the archive's data-catalog entries, which point to HydroShare resources with no DOI and no year.** Titles read like "ERCZO -- Air Temperature -- ... -- (2010-2016)", the Discover wording. I left `year` out (C3); the range in the title is the period the data cover, not a publication date.
4. **No record names an award.** I did not assign Eel's awards (for example 1331940) to records: the sources do not say which award funded which dataset (C3). They would be listed by site only.
5. **21 records carry more than two sites** (for example "Cross-CZO" catalog entries and review papers from the whole network). They appear on the Eel page because they are tagged `eel`; whether a network-wide paper belongs on one observatory's page is a display question for T9a.
6. **Title-only merges:** the archive pages were merged on title, year and section where no DOI existed (101 across the whole list, not read one by one). I did not read these 27 DOI-less Eel papers against their pages.
7. **Archive-page-only addresses (27 papers)** will stop working in August 2027 (T6b report). They are loaded as is; replacement is later work.
8. Nothing else was checked against the sources: I did not open the individual HydroShare or DOI addresses for this batch (the harvest requested them; I did not re-read them).

## Needs your decision

- **Approve or edit the table below** (103 items). I will apply exactly the approved list.
- **Splitting the list by observatory.** A file per observatory (for example `content/critical-zone/products/eel.json`) makes a batch a small, readable diff. It needs: the schema and validator to read several files with uniqueness checked across all of them; the page code to read them (T9a); and a rule for a record in many sites. My proposal: **a record lives in the file of its first site alphabetically among the observatories; records with only `national`, hub or cluster sites go to `national.json`, `network.json`.** Pages filter by the `sites` field, not by file, so where a record is stored does not change where it shows. That change is a code PR (`task/`), and it must merge before the first content batch. Approve this design, or give another.

## Proposed items

### Datasets (20)

| Title | Kind | Year | Address | Sites |
|---|---|---|---|---|
| Carbon Dioxide Production In Bedrock | dataset | 2021 | DOI | eel |
| Cross-CZO -- Climate, Flux Tower, Streamflow / Discharge -- CUAHSI WDC web services -- Natio... | dataset |  | HydroShare (no DOI) | boulder, calhoun, catalina-jemez, christina, eel, iml, luquillo, national, reynolds, shale-hills, sierra |
| Cross-CZO -- LiDAR, Land Cover, GIS/Map Data -- OpenTopography -- National -- (2010-2017) | dataset |  | HydroShare (no DOI) | boulder, calhoun, catalina-jemez, eel, luquillo, national, reynolds, shale-hills, sierra |
| Cross-CZO -- Stream Water Chemistry -- Cations, Anions, Metals -- National -- (1982-2015) | dataset |  | HydroShare (no DOI) | boulder, catalina-jemez, eel, luquillo, national, shale-hills, sierra |
| Cross-CZO -- Streamflow / Discharge -- USGS and USDA Data Resources -- National -- (1985-2017) | dataset |  | HydroShare (no DOI) | boulder, calhoun, catalina-jemez, eel, iml, luquillo, national, shale-hills, sierra |
| ERCZO -- Air Temperature -- Air temperature and relative humidity measurements -- Rivendell ... | dataset |  | HydroShare (no DOI) | eel, national |
| ERCZO -- GIS/Map Data -- Research and Watershed GIS Boundaries -- Eel River to Rivendell -- ... | dataset |  | HydroShare (no DOI) | eel, national |
| ERCZO -- Groundwater Depth -- Well water levels (12 wells) -- Rivendell -- (2008-2015) | dataset |  | HydroShare (no DOI) | eel, national |
| ERCZO -- LiDAR, Digital Elevation Model (DEM) -- Bare-earth elevation model and hillshade --... | dataset |  | HydroShare (no DOI) | eel, national |
| ERCZO -- LiDAR, Digital Elevation Model (DEM) -- Eel River and South Fork Eel River -- (2009... | dataset |  | HydroShare (no DOI) | eel, national |
| ERCZO -- Meteorology -- Weather Stations (4) -- Angelo Reserve -- (2007-2015) | dataset |  | HydroShare (no DOI) | eel, national |
| ERCZO -- Precipitation, Rainfall Chemistry, Overland Water Chemistry, Stream Water Chemistry... | dataset |  | HydroShare (no DOI) | eel, national |
| ERCZO -- Rainfall Chemistry, Stream Water Chemistry, Throughfall Chemistry, Groundwater Chem... | dataset |  | HydroShare (no DOI) | eel, national |
| ERCZO -- Rock Moisture, Soil Moisture -- Soil and Rock Moisture TDR -- Rivendell -- (2008-2015) | dataset |  | HydroShare (no DOI) | eel, national |
| ERCZO -- Soil Moisture, Rock Moisture -- Soil and rock moisture measured in well holes -- Ri... | dataset |  | HydroShare (no DOI) | eel, national |
| ERCZO -- Stable Isotopes -- Tree water, rain, stream, soil, & saprolite water -- Rivendell -... | dataset |  | HydroShare (no DOI) | eel, national |
| ERCZO -- Streamflow / Discharge -- South Fork Eel River -- Angelo Reserve -- (2008-2015) | dataset |  | HydroShare (no DOI) | eel, national |
| ERCZO -- Tree Growth & Physiology -- Tree growth measurements using piston dendrometers -- R... | dataset |  | HydroShare (no DOI) | eel, national |
| ERCZO -- Water Potential, Tree Growth & Physiology -- Stem psychrometers -- Rivendell -- (20... | dataset |  | HydroShare (no DOI) | eel, national |
| The relationship between topography, bedrock weathering, and water storage across a sequence... | dataset | 2021 | DOI | eel |

### Papers (83)

| Title | Kind | Year | Address | Sites |
|---|---|---|---|---|
| A bottom-up control on fresh-bedrock topography under landscapes | paper/book | 2014 | DOI | eel |
| Algal mats and insect emergence in rivers under Mediterranean climates: Towards photogrammet... | paper/book | 2009 | archive page | eel |
| An international initiative for science in the critical zone | paper/book | 2015 | DOI | eel, shale-hills |
| Anaerobic Oxidation of Methane in Tropical and Boreal Soils: Ecological Significance in Terr... | paper/book | 2012 | DOI | eel |
| Analytical model for flow duration curves in seasonally dry climates. | paper/book | 2014 | DOI | eel, luquillo, reynolds |
| Anomalomermis ephemerophagis n. g., n. sp. (Nematoda: Mermithidae) parasitic in the mayfly E... | paper/book | 2015 | DOI | eel |
| Arrested development: Erosional equilibrium in the southern Sierra Nevada, California, maint... | paper/book | 2019 | DOI | eel, sierra |
| Attached Algae: The Cryptic Base of Inverted Trophic Pyramids in Freshwaters | paper/book | 2017 | DOI | eel |
| Autonomous water sampling for long-term monitoring of trace metals in remote environments | paper/book | 2012 | DOI | eel |
| Bacterial Secondary Metabolite Biosynthetic Potential in Soil Varies with Phylum, Depth, and... | paper/book | 2020 | DOI | eel |
| Beyond clay: towards an improved set of variables for predicting soil organic matter content | paper/book | 2018 | DOI | catalina-jemez, christina, eel, luquillo, sierra |
| Boulder Creek Critical Zone Observatory Annual Report 2010 | report/proposal | 2010 | archive page | boulder, eel |
| California’s River Ecosystems | paper/book | 2016 | archive page | eel |
| Chapter 2 – The Role of Critical Zone Observatories in Critical Zone Science | paper/book | 2015 | DOI | boulder, calhoun, catalina-jemez, christina, eel, iml, luquillo, national, reynolds, shale-hills, sierra |
| Chemical reactions, porosity, and microfracturing in shale during weathering: the effect of ... | paper/book | 2019 | archive page | eel, shale-hills |
| Clades of huge phages from across Earth’s ecosystems | paper/book | 2020 | DOI | eel |
| Climatic, ecophysiological, and phenological controls on plant ecohydrological strategies in... | paper/book | 2015 | DOI | eel |
| Combined use of radiocarbon and stable carbon isotopes for the source mixing model in a stre... | paper/book | 2020 | DOI | eel |
| Common Critical Zone Observatory (CZO) Infrastructure and Measurements | report/proposal | 2015 | archive page | boulder, calhoun, catalina-jemez, christina, eel, iml, luquillo, national, reynolds, shale-hills, sierra |
| Common questions of the US NSF–supported Critical Zone Observatories | report/proposal | 2014 | archive page | boulder, calhoun, catalina-jemez, eel, iml, luquillo, national, reynolds, shale-hills, sierra |
| Controls on solute concentration-discharge relationships revealed by simultaneous hydrochemi... | paper/book | 2017 | DOI | eel, reynolds, shale-hills |
| Controls on the distribution and resilience of Quercus garryana: ecophysiological evidence o... | paper/book | 2018 | DOI | eel |
| Critical Zone Ecohydrology of the Northern California Coast Ranges | dissertation/thesis | 2019 | archive page | eel |
| Critical Zone Observatory for Intensively Managed Landscapes (IML­CZO) Annual Report 2016 | report/proposal | 2016 | archive page | eel, iml |
| CZO Network Attributes Table | report/proposal | 2018 | archive page | boulder, calhoun, catalina-jemez, christina, eel, iml, luquillo, national, reynolds, shale-hills, sierra |
| Designing a network of critical zone observatories to explore the living skin of the terrest... | paper/book | 2017 | DOI | boulder, calhoun, catalina-jemez, eel, iml, luquillo, national, reynolds, shale-hills, sierra |
| Digging deeper: what the critical zone perspective adds to the study of plant ecophysiology | paper/book | 2020 | DOI | eel |
| Direct observations of rock moisture, a hidden component of the hydrologic cycle | paper/book | 2018 | DOI | eel |
| Do genomics and sex predict migration in a partially migratory salmonid fish, Oncorhynchus m... | paper/book | 2019 | DOI | eel |
| Do precipitation extremes drive growth and migration timing of a Pacific salmonid fish in Me... | paper/book | 2019 | DOI | eel |
| Drainage from the Critical Zone: Lithologic Controls on the Persistence and Spatial Extent o... | paper/book | 2018 | DOI | eel |
| Drainage from the critical zone: lithologic, aspect, and vegetation controls on the persiste... | dissertation/thesis | 2016 | archive page | eel |
| Ecological and genomic attributes of novel bacterial taxa that thrive in subsurface soil hor... | paper/book | 2019 | DOI | boulder, calhoun, catalina-jemez, christina, eel, iml, luquillo, national, reynolds, shale-hills, sierra |
| Eel River Critical Zone Observatory Annual Report 2015 | report/proposal | 2015 | archive page | eel |
| Eel River Critical Zone Observatory Annual Report 2016 | report/proposal | 2016 | archive page | eel |
| Eel River Critical Zone Observatory Annual Report 2017 | report/proposal | 2017 | archive page | eel |
| Eel River Critical Zone Observatory Annual Report 2018 | report/proposal | 2018 | archive page | eel |
| Eel River Critical Zone Observatory Annual Report 2019 | report/proposal | 2019 | archive page | eel |
| Effect of rainfall-induced soil geochemistry dynamics on grassland soil microbial communities | paper/book | 2012 | DOI | eel |
| Effect of source habitat spatial heterogeneity and species diversity on the temporal stabili... | paper/book | 2020 | DOI | eel |
| Evaluating definitions of salmonid thermal refugia using in situ measurements in the Eel Riv... | paper/book | 2019 | DOI | eel |
| Event-scale power law recession analysis: quantifying methodological uncertainty | paper/book | 2017 | DOI | eel |
| Evolutionary Ecology of Partial Migration: A Case Study from a Pacific Salmonid Fish, Oncorh... | dissertation/thesis | 2018 | archive page | eel |
| Expanding the role of reactive transport models in critical zone processes | paper/book | 2017 | DOI | calhoun, catalina-jemez, eel, shale-hills |
| Food, Phenology, and Flow—How Prey Phenology and Streamflow Dynamics Affect the Behavior, Ec... | dissertation/thesis | 2020 | archive page | eel |
| Frontiers in International Critical Zone Science - Beijing, China Workshop Report | report/proposal | 2015 | archive page | boulder, calhoun, catalina-jemez, christina, eel, iml, luquillo, national, reynolds, shale-hills, sierra |
| Growing new generations of critical zone scientists | paper/book | 2017 | DOI | boulder, calhoun, catalina-jemez, eel, iml, luquillo, national, reynolds, shale-hills, sierra |
| High Time for Conservation: Adding the Environment to the Debate on Marijuana Liberalization | paper/book | 2015 | DOI | eel |
| Hillslope hydrology in global change research and Earth system modeling | paper/book | 2019 | DOI | boulder, catalina-jemez, eel, luquillo, reynolds, shale-hills, sierra |
| Impacts of microbial assemblage and environmental conditions on the distribution of anatoxin... | paper/book | 2019 | DOI | eel |
| In-situ nuclear magnetic resonance detection of fracture-held water in variably saturated be... | paper/book | 2018 | DOI | eel |
| Lifetime eurythermy by seasonally matched thermal performance of developmental stages in an ... | paper/book | 2020 | DOI | eel |
| Linkages between fluid flow paths, reactive gases, and chemical weathering across a shale be... | dissertation/thesis | 2019 | archive page | eel |
| Lithologically Controlled Subsurface Critical Zone Thickness and Water Storage Capacity Dete... | paper/book | 2019 | DOI | eel |
| Low Subsurface Water Storage Capacity Relative to Annual Rainfall Decouples Mediterranean Pl... | paper/book | 2019 | DOI | eel |
| Mediterranean grassland soil C–N compound turnover is dependent on rainfall and depth, and i... | paper/book | 2019 | DOI | eel |
| Mercury sourcing and sequestration in weathering profiles at six Critical Zone Observatories | paper/book | 2018 | DOI | boulder, calhoun, eel, luquillo, national, shale-hills, sierra |
| New Opportunities for Critical Zone Science | report/proposal | 2017 | archive page | boulder, calhoun, catalina-jemez, christina, eel, iml, luquillo, national, reynolds, shale-hills, sierra |
| Novel soil bacteria possess diverse genes for secondary metabolite biosynthesis | paper/book | 2018 | DOI | eel |
| Partial migration alters population ecology and food chain length: evidence from a salmonid ... | paper/book | 2020 | DOI | eel |
| Process dominance shift in solute chemistry as revealed by long-term high-frequency water ch... | paper/book | 2014 | archive page | eel |
| Quantification of the seasonal hillslope water storage that does not drive streamflow | paper/book | 2018 | DOI | eel |
| Rain, rock moisture dynamics, and the rapid response of perched groundwater in weathered, fr... | paper/book | 2012 | DOI | eel |
| Resolving Deep Critical Zone Architecture in Complex Volcanic Terrain | paper/book | 2020 | DOI | boulder, catalina-jemez, eel, reynolds, sierra |
| Reviews and syntheses: on the roles trees play in building and plumbing the critical zone | paper/book | 2017 | DOI | boulder, catalina-jemez, christina, eel, luquillo, national, reynolds, shale-hills, sierra |
| Rise and fall of toxic benthic freshwater cyanobacteria (Anabaena spp.) in the Eel river: Bu... | paper/book | 2017 | DOI | eel |
| Root functioning modifies seasonal climate | paper/book | 2005 | DOI | eel |
| Seasonal reassembly of a river food web: floods, droughts, and impacts of fish | paper/book | 2008 | archive page | eel |
| Spatial and temporal linkage of stream-riparian food webs by seasonal migration of mayfly Ep... | dissertation/thesis | 2016 | archive page | eel |
| Spatially variable water table recharge and the hillslope hydrologic response: Analytical so... | paper/book | 2014 | archive page | eel |
| Species differences in the seasonality of evergreen tree transpiration in a Mediterranean cl... | paper/book | 2014 | DOI | eel |
| Stochastic modeling of interannual variation of hydrologic variables | paper/book | 2017 | DOI | eel |
| Subcanopy solar radiation model: predicting solar radiation across a heavily vegetated lands... | paper/book | 2014 | archive page | eel |
| Temporal dynamics of migration‐linked genetic variation are driven by streamflows and rivers... | paper/book | 2020 | DOI | eel |
| The Ecology of Benthic Toxigenic Anabaena and Phormidium (Cyanobacteria) in the Eel River, C... | dissertation/thesis | 2017 | archive page | eel |
| The Eel River Critical Zone Observatory: exploring how the critical zone will mediate waters... | report/proposal | 2013 | archive page | eel |
| The Frontier Beneath our Feet | paper/book | 2017 | DOI | eel, national |
| The influence of mixing on stable isotope ratios in porous media: A revised Rayleigh model | paper/book | 2017 | DOI | eel, national |
| The Landscape Evolution Observatory: A large-scale controllable infrastructure to study coup... | paper/book | 2015 | DOI | catalina-jemez, eel |
| The Thirsty Eel: Summer and Winter Flow Thresholds that Tilt the Eel River of Northwestern C... | paper/book | 2015 | DOI | eel |
| Tributary confluences are dynamic thermal refuges for a juvenile salmonid in a warming river... | paper/book | 2020 | DOI | eel |
| Vegetation induced changes in the stable isotope composition of near surface humidity. | paper/book | 2014 | DOI | eel |
| Widespread anatoxin-a detection in benthic cyanobacterial mats throughout a river network | paper/book | 2018 | DOI | eel |
