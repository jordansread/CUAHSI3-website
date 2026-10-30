# Products batch 10: Shale Hills (proposal for epic T11)

Date: 30 October 2026. Ticket: CUAHSI/CUAHSI3-website#76 (T11). Branch `task/cz-products-shale-hills-proposal`. **Proposal step of "Propose, then apply". Nothing in `content/` has been changed.** Source: `agent/reports/261029_cz-harvest-proposal.json`, every record whose `sites` includes `shale-hills`, minus what `content/critical-zone/products.json` already holds (batches 1 to 9, 1,726 records).

Rules carried over (Jordan): talks and posters held out; proposals not in the list; award numbers found only in text stay unset and flagged; addresses that do not answer are left out; items unrelated to the critical zone held back for you; `provenance` not in the file; one file for the whole list.

## Counts

| | Count |
|---|---|
| Records tagged `shale-hills` | 681 (122 datasets, 559 papers) |
| Already in the list (same DOI, HydroShare id or address) | 41 |
| Held out: talks and posters (the archive's own type) | 296 |
| Held out: addresses that did not answer | 0 |
| Held out by me: proposals (item 1) | 9 |
| Held out by me: manuscripts "submitted" or "in review" (item 2) | 5 |
| Held out by me: a meeting presentation and a poster typed as papers (item 3) | 2 |
| **Proposed for this batch** | **328** (114 datasets, 214 papers) |
| Of the papers: paper/book 138, dissertation/thesis 31, undergraduate thesis 26, report/proposal 15, journal-article 3, no archive type 1 | |
| Papers with a DOI / archive page only | 129 / 85 |
| Datasets with a DOI / HydroShare address with no DOI | 0 / 114 |
| Records with an `awards` value from the harvest's funder data | 3 |
| Records with no year | 114 (all datasets) |
| Records tagged with more than two sites | 0 |

## Link check (before proposing)

Every DOI was looked up at doi.org (handle lookup) and every HydroShare address requested once. Of 129 DOIs and 114 HydroShare addresses, **no problem was found**: none needed repair and none is left out for a dead address. The 85 archive-page addresses were not opened (they stop working in August 2027). A resolving DOI is not proof it is the right paper.

## Things I changed or left out (mine; your call on each)

1. **9 proposals, held out.** Eight "Seed Grant Proposals in Support of Critical Zone ..." (2012 to 2015: "Filling gaps in the aboveground carbon budget of the SSHO CZO", "Geophysical Prediction of Water Migration along the Soil-Bedrock Interface...", "Investigating inorganic and organic-mediated cation transport...", "Modeling fine-scale above ground carbon storage using LiDAR...", "Quantification of mass balance of colloidal material...", "Quantifying regolith formation rates with U-series isotopes...", "Reconciling physical and chemical profiles in the complex soils...", "Using carbon isotopes to determine the sources and mass balance of CO2...") and "An Accomplishment-Based Request for Renewal of the Susquehanna-Shale Hills Critical Zone Observatory" (2012, NSF award 1239285), a renewal request to NSF. The archive lists a second record with that title for 2014 whose venue text says "Project Outcomes Report"; I read it as the outcomes report and propose it (item 5).
2. **5 manuscripts not yet published, held out:** "Developing boron isotopes to elucidate shale weathering in the critical zone" (Chemical Geology, submitted), "Lithology differentially shifts root distribution of co-occurring tree species" (Ecology, submitted), "Observing and Simulating Spatial Variations of Forest Carbon Stocks in Complex Terrain" (JGR Biogeosciences, submitted), "Predominant control of soil properties in storage-discharge relationships..." (Water Resources Research, in review) and "What Controls Above- and Belowground Partitioning Patterns in Temperate Forests" (Functional Ecology, submitted), all 2019. A manuscript is not yet a product to link to. For consistency: one "submitted" manuscript loaded earlier ("Chemical reactions, porosity, and microfracturing in shale during weathering", Eel and Shale Hills, batch 1) is still in the list. Say "include" for any of these, or say whether to drop that one.
3. **2 meeting items typed as papers, held out** as talk- or poster-like: "Overarching scientific questions pertaining to the Critical Zone: Challenges to the Soil and Geoscience Communities" (SSSA Annual Meeting 2010) and "The Activity of Deep Roots in Bedrock Fractures at the Susquehanna Shale Hills Critical Zone Observatory" (AGU Fall Meeting 2015 poster H21C-1383).
4. **296 talks and posters held out**, per your rule.
5. **Reports, theses:** 31 theses, 26 undergraduate and honors theses and 15 reports are typed `paper` (no schema type for them). The reports are the Susquehanna/Shale Hills CZO annual reports to NSF (2008 to 2013), the "Using the Susquehanna - Shale Hills CZO to Project from the Geological Past to the Anthropocene Future" annual reports (years 1 to 6, 2013 to 2019), the 2014 outcomes report above, an internal benthic macroinvertebrate summary (2014), and others. None is a proposal to a funder after item 1.
6. **14 reports cite an award number only in their venue text**: the annual reports 2008 to 2012 ("NSF Award # 0725019"), the 2013 annual report and the 2014 outcomes report (1239285), and seven reports for "NSF Award # 1331726" (the base report and years 1 to 6). `awards` stays unset, as you decided; all three awards are in the registry. They join the list for you to revisit (52 in all: the 38, plus these 14).
7. **2 papers are dated 2006**, before the CZO program began ("Soil moisture patterns in a forested catchment: A hydropedological perspective" and "Temporal stability of soil moisture spatial pattern and subsurface preferential flow pathways in the Shale Hills Catchment"). As before, I propose leaving `era` unset on them.
8. **Comments, replies and news pieces kept, flagged:** "Reply to the comment on 'Particle fluxes in groundwater change subsurface shale rock chemistry...'" (EPSL 2019), "Comments on Energy-based Pedogenic Models by Field and Minasny (2010)" and "Sowing the seeds of soil conservation" (Science news piece, 2010; `10.1126/science.327.5969.1078-a`). The parent paper of the first is in the batch.
9. **Two pairs of datasets share a title and have different HydroShare resources**, both kept (as with the Luquillo Throughfall pair): "SSHCZO -- Groundwater Chemistry, Stream Water Chemistry -- Shale Hills -- (2015-2015)" and "SSHCZO -- Precipitation, Meteorology -- Shale Hills -- (2009-2016)". I did not open them to see how they differ.
10. **Items far from a critical zone:** I read all 214 paper titles and found none that is plainly unrelated. The least obvious are "Engaging over data on fracking and water quality" (Science 2018), "Scientist-Nonscientist Teams Explore Methane Sources in Streams Near..." (education), "Inaugural International Conference on Hydropedology Offers Outlook" and "ONLINE EXTRA: Bringing the Outdoors In: Application of Hydrogeological..." (a teaching piece); all are Shale Hills or CZO work.
11. 3 papers carry an `awards` value from the harvest's funder data. No record is tagged with more than two sites. The papers with no DOI (85) were merged by the harvest on title, year and section; not read against their pages. Datasets have no year when the source gave none (C3).

## Proposed items

### Datasets (114)

| Title | Kind | Year | Address | Sites |
|---|---|---|---|---|
| SSHCZO -- Digital Elevation Model (DEM), GIS/Map Data, Land Cover, LiDAR, Soil Survey -- Sha... | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Ecosystem model -- Shale Hills -- (2009-2010) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Electrical Conductivity -- Cole Farm East Mid-Slope -- (2017-2018) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Electrical Conductivity -- Cole Farm Ridge Top -- (2017-2018) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Electrical Conductivity -- Cole Farm Valley Floor -- (2017-2018) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Electrical Conductivity, Groundwater Chemistry -- Solute Tracer Tests -- Shale Hil... | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Electrical Conductivity, Soil Moisture, Soil Temperature -- Shale Hills -- (2018-2... | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Electrical Conductivity, Soil Temperature -- Garner Run -- (2018-2018) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Flux Tower -- Shale Hills -- (2009-2016) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Geology, Sediment Transport -- Sieve Data - Shale Hills & Missed Grouse -- Shale H... | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Geology, Soil Water -- Infiltrometer - Shale Hills & Missed Grouse -- Shale Hills ... | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Geophysics -- Gamma Ray Logs -- Shale Hills -- (2010-2010) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Geophysics -- Shale Hills -- (2010-2010) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Geophysics, Seismic Refraction -- Shale Hills -- (2012-2013) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Geophysics, Seismic Refraction, Geomorphology -- Garner Run (Sandstone Forested) -... | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- GIS/Map Data -- Control Points Survey -- Shale Hills -- (2010-2010) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- GIS/Map Data -- Geospatial Database -- Shale Hills -- (2013-2013) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- GIS/Map Data -- Ground Survey -- Shale Hills -- (2010-2010) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Ground Penetrating Radar (GPR) -- Shale Hills -- (2008-2009) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Ground Penetrating Radar (GPR) -- Shale Hills, Missed Grouse -- (2013-2013) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Ground Penetrating Radar (GPR), Geology, GIS/Map Data -- GPR Bedrock Elevation GIS... | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Groundwater Chemistry -- Garner Run (Sandstone Forested) -- (2014-2016) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Groundwater Chemistry -- Shale Hills -- (2008-2010) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Groundwater Chemistry, Stream Water Chemistry -- Shale Hills -- (2015-2015) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Groundwater Chemistry, Stream Water Chemistry -- Shale Hills -- (2015-2015) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Groundwater Chemistry, Surface Water Chemistry -- Shaver's Creek -- (2014-2014) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Groundwater Depth -- Shale Hills Groundwater Depth Data -- Shale Hills -- (2009-2012) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Groundwater Depth, Groundwater Temperatures -- Cole Farm (Agricultural Site) -- (2... | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Groundwater Depth, Groundwater Temperatures -- Garner Run (Sandstone Forested) -- ... | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Groundwater Depth, Groundwater Temperatures, Barometric Pressure, Groundwater Chem... | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Groundwater Depth, Streamflow / Discharge -- Watershed Reanalysis -- Shale Hills -... | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Groundwater Temperatures, Barometric Pressure, Groundwater Depth -- Garner Run (Sa... | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Groundwater Temperatures, Stream Water Temperatures -- Shale Hills -- (2015-2016) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Hydropedologic Properties -- Imaginary Dielectric Constant -- Shale Hills -- (2010... | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Hydropedologic Properties -- Real and Imaginary Dielectric Constants -- Garner Run... | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Hydropedologic Properties -- Real and Imaginary Dielectric Constants -- Shale Hill... | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Hydropedologic Properties -- Real Dielectric Constant -- Shale Hills -- (2010-2011) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Hydropedologic Properties -- Water Table -- Shale Hills -- (2007-2014) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Hydropedologic Properties, Air Temperature -- Shale Hills -- (2007-2014) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Hydropedologic Properties, Electrical Conductivity -- Shale Hills -- (2009-2013) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Hydropedologic Properties, Matric Potential -- 229 Probes -- Shale Hills -- (2007-... | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Hydropedologic Properties, Matric Potential -- 253 Probes -- Shale Hills -- (2007-... | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Hydropedologic Properties, Matric Potential -- MPS Probes -- Shale Hills -- (2007-... | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Hydropedologic Properties, Precipitation -- Shale Hills -- (2007-2014) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Hydropedologic Properties, Soil Moisture -- Shale Hills -- (2007-2014) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Hydropedologic Properties, Soil Moisture -- Shale Hills Model Input Soil Parameter... | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Hydropedologic Properties, Soil Moisture, Soil Temperature -- Garner Run (Sandston... | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Hydropedologic Properties, Soil Moisture, Soil Temperature -- Shale Hills -- (2015... | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Hydropedologic Properties, Soil Temperature -- Shale Hills -- (2007-2014) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- LiDAR -- Terrestrial Laser Mapping -- Shale Hills -- (2010-2010) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- LiDAR, Vegetation -- Shale Hills -- (2010-2010) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Meteorology -- Cole Farm (Agricultural Site) -- (2017-2018) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Meteorology -- Shale Hills -- (2009-2013) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Meteorology, Air Temperature, Precipitation, Soil Moisture, Solar Radiation -- Sha... | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Precipitation -- Daily Precipitation -- Cole Farm -- (2017-2019) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Precipitation -- Garner Run (Sandstone Forested) - Precipitation -- (2018-2019) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Precipitation -- Shale Hills -- (2006-2013) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Precipitation, Meteorology -- LPM Disdrometer -- Shale Hills -- (2009-2014) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Precipitation, Meteorology -- Shale Hills -- (2009-2016) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Precipitation, Meteorology -- Shale Hills -- (2009-2016) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Regolith Survey -- Garner Run (Sandstone Forested) -- (2015-2016) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Sap Flow -- Garner Run Sap Flow Data -- Garner Run -- (2016-2018) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Sap Flow -- Shale Hills Sap Flow Data -- Shale Hills -- (2009-2014) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Sap Flow -- Shale Hills Sap Flow Data -- Shale Hills -- (2016-2018) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Seismic Refraction, Geophysics -- Cole Farm -- (2018-2018) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Snow Depth -- Shale Hills -- (2018-2018) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Soil Gas -- Garner Run (Sandstone Forested) -- (2015-2015) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Soil Gas -- Gas Sample (O2 and CO2) -- Garner Run (Sandstone Forested) -- (2015-2018) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Soil Gas -- Soil Gas Sample (O2 and CO2) -- Shale Hills -- (2015-2018) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Soil Gas, Soil Moisture -- Garner Run and Shale Hills -- (2015-2016) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Soil Gas, Soil Porewater Chemistry -- pCO2; CO2 Flux; N2O, NO3, NH4, DOC Concentra... | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Soil Geochemistry -- Garner Run -- (2014-2016) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Soil Geochemistry -- Shale Hills -- (2015-2015) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Soil Moisture -- COSMOS Probe -- Cole Farm -- (2018-2018) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Soil Moisture -- COSMOS Probe -- Garner Run (Sandstone Forested) -- (2015-2016) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Soil Moisture -- COSMOS Probe -- Shale Hills -- (2011-2016) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Soil Moisture -- Shale Hills RTH Soil Moisture Data -- Shale Hills -- (2009-2012) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Soil Moisture, Hydropedologic Properties -- Shale Hills -- (2006-2015) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Soil Moisture, Soil Temperature -- Cole Farm (Agricultural Site) -- (2017-2019) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Soil Moisture, Soil Temperature -- Cole Farm -- (2017-2019) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Soil Porewater Chemistry -- Shale Hills -- (2006-2011) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Solar Radiation -- Cole Farm (Agricultural Site) -- (2018-2019) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Solar Radiation -- Shale Hills -- (2014-2016) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Stable Isotopes, Groundwater Chemistry -- Shale Hills -- (2008-2011) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Stable Isotopes, Precipitation -- Shale Hills -- (2008-2011) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Stable Isotopes, Soil Porewater Chemistry -- Shale Hills -- (2008-2011) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Stable Isotopes, Stream Water Chemistry -- Shale Hills -- (2008-2011) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Stream Ecology -- Benthic Macroinvertebrate Survey -- Shale Hills -- (2012-2012) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Stream Water Chemistry -- Shale Hills -- (2006-2010) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Stream Water Chemistry -- Stream Water Chemistry -- Shaver's Creek -- (2014-2014) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Stream Water Chemistry, Groundwater Chemistry -- Shale Hills -- (2015-2017) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Stream Water Temperatures -- Fiber-Optic Distributed Temperature Sensor -- Garner ... | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Streamflow / Discharge -- Discharge Reanalysis -- Shale Hills -- (2008-2015) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Streamflow / Discharge -- Shale Hills Stream Flow / Discharge Data -- Shale Hills ... | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Streamflow / Discharge, Air Temperature, Stream Water Temperatures -- Garner Run O... | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Streamflow / Discharge, Groundwater Temperatures, Electrical Conductivity -- Shale... | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Streamflow / Discharge, Stream Suspended Sediment -- Shale Hills -- (2013-2016) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Streamflow / Discharge, Stream Water Chemistry, Stream Water Temperatures -- Strea... | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Streamflow / Discharge, Stream Water Temperatures, Air Temperature, Electrical Con... | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Streamflow / Discharge, Stream Water Temperatures, Electrical Conductivity -- Shal... | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Tree Growth & Physiology -- Root Distribution Data -- Shaver's Creek Watershed -- ... | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Tree Growth & Physiology, GIS/Map Data -- Tree Falls -- Shale Hills -- (2014-2014) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Tree Growth & Physiology, Vegetation -- Above-Ground Tree Biomass Data -- Shale Hi... | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Vegetation -- Garner Run -- (2014-2014) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Vegetation -- Leaf Area Index -- Shale Hills -- (2010-2010) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Vegetation -- Leaf Litter Collection Data -- Shaver's Creek Watershed -- (2015-2015) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Vegetation -- Litter & Dendroband Data -- Shale Hills -- (2011-2013) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Vegetation -- Root Length Density -- Shale Hills -- (2013-2013) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Vegetation -- Shale Hills, Garner Run (Sandstone Forested) -- (2015-2015) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Vegetation -- Survey to Validate LiDAR -- Shale Hills -- (2010-2010) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Vegetation -- Tree Survey -- Shale Hills -- (2008-2012) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Vegetation, Stable Isotopes -- Shale Hills -- (2012-2012) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Vegetation, Stable Isotopes, Soil Water Chemistry -- Shale Hills -- (2009-2014) | dataset |  | HydroShare (no DOI) | national, shale-hills |
| SSHCZO -- Vegetation, Tree Growth & Physiology -- Shale Hills, Garner Run (Sandstone Foreste... | dataset |  | HydroShare (no DOI) | national, shale-hills |

### Papers (214)

Papers dated before 2007 are marked "(pre-2007)".

| Title | Kind | Year | Address | Sites |
|---|---|---|---|---|
| 87Sr/86Sr, Ca/Sr, and Ge/Si ratios as tracers of solute sources and biogeochemical cycling a... | paper/book | 2016 | DOI | shale-hills |
| 87Sr/86Sr, Ca/Sr, And Ge/Si Ratios As Tracers Of Solute Sources At A Temperate Forested, Sha... | dissertation/thesis | 2015 | archive page | shale-hills |
| A coupled surface-subsurface modeling framework to assess the impact of climate change on fr... | paper/book | 2015 | DOI | shale-hills |
| A Quantitative Analysis of Deep Shale Weathering at the Shale Hills Critical Zone Observatory | undergraduate thesis | 2011 | archive page | shale-hills |
| A reactive transport model for Marcellus shale weathering | paper/book | 2017 | DOI | shale-hills |
| A record of coupled hillslope and channel response to Pleistocene periglacial erosion in a s... | dissertation/thesis | 2017 | archive page | shale-hills |
| A semi-discrete finite volume formulation for multiprocess watershed simulation. | paper/book | 2007 | DOI | shale-hills |
| Above- and belowground controls on water use by trees of different wood types in an eastern ... | paper/book | 2013 | DOI | shale-hills |
| Aboverground Carbon Distribution across a temperate watershed. | dissertation/thesis | 2013 | archive page | shale-hills |
| Advancing the Emerging Field of Hydropedology, | paper/book | 2008 | DOI | shale-hills |
| An Accomplishment-Based Request for Renewal of the Susquehanna-Shale Hills Critical Zone Obs... | report/proposal | 2014 | archive page | shale-hills |
| An efficient domain decomposition framework for accurate representation of geodata in distri... | paper/book | 2008 | archive page | shale-hills |
| An object-oriented shared data model for GIS and distributed hydrologic models | paper/book | 2010 | DOI | shale-hills |
| An Ontology Driven Relational Geochemical Database for the Earth’s Critical Zone: CZchemDB | paper/book | 2014 | DOI | shale-hills |
| Analysis of the Subsurface Structure of Swales in the Shale Hills Watershed Using Electrical... | undergraduate thesis | 2018 | archive page | shale-hills |
| Approaches to Modeling Weathered Regolith in Thermodynamics and Kinetics of Water-Rock Inter... | paper/book | 2009 | archive page | shale-hills |
| Aspect-dependent variations in regolith creep revealed by meteoric 10 Be | paper/book | 2014 | DOI | shale-hills |
| Assessing the Subsurface Geology of Garner Run Through the Relationship Between Seismic Velo... | undergraduate thesis | 2015 | archive page | shale-hills |
| Atmospheric deposition of organic carbon via precipitation | paper/book | 2016 | DOI | shale-hills |
| Atmospheric inputs of organic matter to a forested watershed: Variations from storm to storm... | paper/book | 2016 | DOI | shale-hills |
| Atmospheric mercury deposition to forests in the eastern USA | paper/book | 2017 | DOI | shale-hills |
| Biogeochemistry of manganese contamination in a temperate forested watershed | dissertation/thesis | 2012 | archive page | shale-hills |
| Biotic controls on solute distribution and transport in headwater catchments | paper/book | 2015 | DOI | shale-hills |
| Boron Isotope Fractionation in Soils at Shale Hills CZO | paper/book | 2014 | DOI | shale-hills |
| C, N, and Mn in Shale Soil Profiles along a Climate Gradient | undergraduate thesis | 2013 | archive page | shale-hills |
| Catchment-Scale Soil Water Retention Characteristics and Delineation of Hydropedological Fun... | dissertation/thesis | 2011 | archive page | shale-hills |
| Changing controls of soil moisture spatial organization in the Shale Hills Catchment. | paper/book | 2012 | DOI | shale-hills |
| Chapter 2 - Addressing Two Bottlenecks to Advance the Understanding of Preferential Flow in ... | paper/book | 2018 | DOI | shale-hills |
| Characterising the Shallow Subsurface of the Critical Zone Using Seismic Refraction in the S... | undergraduate thesis | 2019 | archive page | shale-hills |
| Characterization of deep weathering and nanoporosity development in shale – A neutron study. | paper/book | 2011 | DOI | shale-hills |
| Characterizing the Lithologic Controls on Flow in the Shale Hills Critical Zone Observatory | undergraduate thesis | 2009 | archive page | shale-hills |
| Characterizing the Recent Cenozoic Erosional History of the Appalachian Mountains through Sp... | undergraduate thesis | 2013 | archive page | shale-hills |
| CHEMICAL AND PHYSICAL WEATHERING IN REGOLITH: AN INVESTIGATION OF THREE DIFFERENT FE-RICH SI... | dissertation/thesis | 2014 | archive page | shale-hills |
| Clay Mineralogy, Geochemistry and Weathering Characteristics of Clinton Group Shales in Cent... | undergraduate thesis | 2010 | archive page | shale-hills |
| Climate dependence of feldspar weathering along a latitudinal gradient | paper/book | 2013 | DOI | shale-hills |
| Climate preconditions the Critical Zone: Elucidating the role of subsurface fractures in the... | paper/book | 2019 | DOI | shale-hills |
| Combined soil-terrain stratification for characterizing catchment-scale soil moisture variation | journal-article | 2017 | DOI | shale-hills |
| Comments on Energy-based Pedogenic Models by Field and Minasny (2008) and Rasmussen (2008). | paper/book | 2010 | archive page | shale-hills |
| Comparing Ordinary Kriging and Regression Kriging for Soil Properties in Contrasting Landscapes | paper/book | 2010 | DOI | shale-hills |
| Controls and Frequency of Preferential Flow Occurrence: A 175-event Analysis. | paper/book | 2011 | DOI | shale-hills |
| Cosmogenic nuclides indicate that boulder fields are dynamic, ancient, multigenerational fea... | paper/book | 2017 | DOI | shale-hills |
| Coupling Dissolved Organic Carbon and Hydropedology in the Shale Hills Critical Zone Observa... | dissertation/thesis | 2011 | archive page | shale-hills |
| Critical Zone Research and Observatories: Current Status and Future Perspectives | paper/book | 2016 | DOI | shale-hills |
| Critical Zone Studies of Shale Weathering in Lares, Puerto Rico | undergraduate thesis | 2011 | archive page | shale-hills |
| Crossing disciplines and scales to understand the Critical Zone. | paper/book | 2007 | DOI | shale-hills |
| Cyber-Innovated Watershed Research at the Shale Hills Critical Zone Observatory | paper/book | 2016 | DOI | shale-hills |
| CZ-tope at Susquehanna Shale Hills CZO: Synthesizing multiple isotope proxies to elucidate C... | paper/book | 2016 | DOI | shale-hills |
| CZChemDB and EarthChem: Advancing management and access of critical zone geochemical data. | paper/book | 2011 | DOI | national, shale-hills |
| Designing a suite of measurements to understand the critical zone | paper/book | 2016 | DOI | shale-hills |
| Designing a Suite of Models to Explore Critical Zone Function | paper/book | 2014 | DOI | shale-hills |
| DETECTING LANDSCAPE RESPONSE TO PERTURBATIONS BY CLIMATE AND BASE LEVEL IN CENTRAL PENNSYLVA... | dissertation/thesis | 2017 | archive page | shale-hills |
| Development of a Coupled Land Surface Hydrologic Model and Evaluation at a Critical Zone Obs... | paper/book | 2013 | DOI | shale-hills |
| Development of a land surface hydrologic modeling and data assimilation system for the study... | dissertation/thesis | 2012 | archive page | shale-hills |
| Dual-phase mass balance modeling of small mineral particle losses from sedimentary rock-deri... | paper/book | 2018 | DOI | shale-hills |
| Dynamical modelling of concentration–age–discharge in watersheds | paper/book | 2010 | DOI | national, shale-hills |
| Earth Surface Processes in the Critical Zone: An Introductory Course Designed for Teachers | paper/book | 2016 | archive page | national, shale-hills |
| Earth's Critical Zone and hydropedology: Concepts, characteristics, and advances. | paper/book | 2010 | DOI | shale-hills |
| Earthcasting the future Critical Zone | paper/book | 2013 | DOI | shale-hills |
| Elucidating the Effects of Reservoir Filling on Watershed Hydrodynamics and Shallow Groundwa... | undergraduate thesis | 2015 | archive page | shale-hills |
| Engaging over data on fracking and water quality | paper/book | 2018 | DOI | shale-hills |
| Enhancing Interoperability and Capabilities of Earth Science Data using the Observations Dat... | paper/book | 2017 | DOI | national, shale-hills |
| Evaluation of the parameter sensitivity of a coupled land surface hydrologic model. | paper/book | 2014 | DOI | shale-hills |
| Evidence of Subsurface Preferential Flow Using Soil Hydrologic Monitoring in the Shale Hills... | paper/book | 2008 | DOI | shale-hills |
| Evolution of porosity and geochemistry in Marcellus Formation black shale during weathering | paper/book | 2013 | DOI | shale-hills |
| Exploring a 60-year record of manganese deposition in Marietta Ohio using soil chemistry and... | dissertation/thesis | 2013 | archive page | shale-hills |
| Exploring lag times between monthly atmospheric deposition and stream chemistry in Appalachi... | paper/book | 2016 | DOI | shale-hills |
| Exploring the effect of aspect to inform future earthcasts of climate-driven changes in weat... | paper/book | 2019 | DOI | shale-hills |
| Extent and isotopic composition of Fe and Mo release from two Pennsylvania shales in the pre... | paper/book | 2011 | DOI | shale-hills |
| Fe cycling in the Shale Hills Critical Zone Observatory, Pennsylvania: An analysis of biogeo... | paper/book | 2012 | DOI | shale-hills |
| FOREST ECOHYDROLOGY IN A CENTRAL PENNSYLVANIA CATCHMENT: A STABLE ISOTOPE APPROACH | dissertation/thesis | 2015 | archive page | shale-hills |
| Frequency and Control of Subsurface Preferential Flow: From Pedon to Catchment Scales | paper/book | 2015 | DOI | shale-hills |
| Full-3D Seismic Tomography for Structure of the Critical Zone | paper/book | 2019 | DOI | shale-hills |
| Fully coupled approach to modeling shallow water flow, sediment transport, and bed evolution... | paper/book | 2011 | DOI | shale-hills |
| Fully-Coupled Hydrologic Processes for Modeling Landscape Evolution | paper/book | 2016 | DOI | shale-hills |
| FULLY-COUPLED HYDROLOGICAL AND MORPHOLOGICAL PROCESSES FOR MODELING LANDSCAPE EVOLUTION | dissertation/thesis | 2016 | archive page | shale-hills |
| Geochemical behaviors of different element groups during shale weathering at the Susquehanna... | paper/book | 2011 | DOI | shale-hills |
| Ground-truthing Subsurface Variations in Seismic Velocities and Electrical Resistivity using... | undergraduate thesis | 2019 | archive page | shale-hills |
| High-intensity soil survey and hydropedologic functional map units. | paper/book | 2009 | archive page | shale-hills |
| Hot Spots and Hot Moments of Dissolved Organic Carbon Export and Soil Organic Carbon Storage... | paper/book | 2011 | DOI | shale-hills |
| Hydraulic patterns and safety margins, from stem to stomata, in three eastern US tree species. | paper/book | 2011 | DOI | shale-hills |
| Hydrological model uncertainty due to spatial evapotranspiration estimation methods | paper/book | 2015 | DOI | shale-hills |
| Hydropedologic investigations in the Shale Hills catchment. | paper/book | 2008 | archive page | shale-hills |
| Hydropedology and Surface/Subsurface Runoff Processes. | paper/book | 2008 | DOI | shale-hills |
| Hydropedology: Fundamental Issues and Practical Applications. | paper/book | 2008 | DOI | shale-hills |
| Hyporheic zone influences on concentration-discharge relationships in a headwater sandstone ... | paper/book | 2017 | DOI | shale-hills |
| Impact of Oil and Gas Industry Wastewater on Water and Sediment Chemistry in One Stream in W... | undergraduate thesis | 2014 | archive page | shale-hills |
| Implementing the Shale Hills Watershed Model in Application of PIHM, | dissertation/thesis | 2010 | archive page | shale-hills |
| Importance of vegetation for manganese cycling in temperate forested watersheds | paper/book | 2015 | DOI | shale-hills |
| Inaugural International Conference on Hydropedology Offers Outlooks on Synergistic Studies o... | paper/book | 2008 | archive page | shale-hills |
| Insight into the weathering of the Marcellus Shale through Sulfur and Carbon Analyses | undergraduate thesis | 2012 | archive page | shale-hills |
| Insights into the weathering of black shale: Cu isotopes and concentrations in the Marcellus... | paper/book | 2012 | DOI | shale-hills |
| Integrated Approach to Identifying Subsurface Flow in a Forest Catchment | dissertation/thesis | 2011 | archive page | shale-hills |
| Interdisciplinary Modeling for Sustainability: A Reflection on Hydrologic-Agricultural-Econo... | undergraduate thesis | 2018 | archive page | shale-hills |
| Investigating Pennsylvania Water Quality Impacts Due to Shale Gas Development | undergraduate thesis | 2014 | archive page | shale-hills |
| Isotopic data sonification: Shale Hills Critical Zone Observatory | dissertation/thesis | 2015 | archive page | shale-hills |
| Laboratory, Field, and Modeling Analysis of Solute Transport Behavior at the Shale Hills Cri... | dissertation/thesis | 2010 | archive page | shale-hills |
| Landscape heterogeneity drives contrasting concentration-discharge relationships in shale he... | paper/book | 2015 | DOI | shale-hills |
| Linking principles of soil formation and flow regimes. | paper/book | 2010 | DOI | shale-hills |
| Lithological controls on soil properties of temperate forest ecosystems in central Pennsylvania | dissertation/thesis | 2017 | archive page | shale-hills |
| Magnesium isotope fractionation during shale weathering in the Shale Hills Critical Zone Obs... | paper/book | 2015 | DOI | shale-hills |
| Mineral weathering and elemental transport during hillslope evolution at the Susquehanna/Sha... | paper/book | 2010 | DOI | shale-hills |
| Mineralogical Transformations and Soil Development in Shale across a Latitudinal Climosequence | paper/book | 2016 | DOI | shale-hills |
| MODELING, PARAMETER OPTIMIZATION, AND ECOHYDROLOGIC ASSESSMENT OF WATERSHED SYSTEMS | dissertation/thesis | 2014 | archive page | shale-hills |
| Modelling long-term water yield effects of forest management in a Norway spruce forest | paper/book | 2015 | DOI | shale-hills |
| Monitoring time‐lapse changes in soil moisture during artificial infiltration with geophysic... | undergraduate thesis | 2012 | archive page | shale-hills |
| Movement of manganese contamination through the Critical Zone. | paper/book | 2011 | DOI | shale-hills |
| MULTI-SCALE LIDAR-BASED APPROACHES TO CHARACTERIZING STREAM NETWORKS, SURFACE ROUGHNESS AND ... | dissertation/thesis | 2011 | archive page | shale-hills |
| Natural and anthropogenic processes contributing to metal enrichment in surface soils of cen... | paper/book | 2015 | DOI | shale-hills |
| Neogene rejuvenation of central Appalachian topography: Evidence for differential rock uplif... | paper/book | 2013 | DOI | shale-hills |
| Nitrogen Budget and Topographic Controls on Nitrous Oxide in a Shale-Based Watershed | paper/book | 2018 | DOI | shale-hills |
| No “Gadgil effect”: Temperate tree roots and soil lithology are effective predictors of wood... | paper/book | 2019 | DOI | shale-hills |
| Nutrient foraging by mycorrhizas: From species functional traits to ecosystem processes | paper/book | 2018 | DOI | shale-hills |
| Observations Emerging from a Network of Critical Zone Observatories: Shale Weathering at the... | paper/book | 2008 | archive page | shale-hills |
| Occurrence of subsurface lateral flow in the Shale Hills Catchment indicated by a soil water... | paper/book | 2018 | DOI | shale-hills |
| ONLINE EXTRA: Bringing the Outdoors In: Application of Hydrogeology Education Tools | paper/book | 2017 | archive page | shale-hills |
| Open science in practice: learning integrated modeling of coupled surface-subsurface flow pr... | paper/book | 2016 | DOI | shale-hills |
| Opening the "Black Box": Water Chemistry Reveals Hydrological Controls on Weathering in the ... | paper/book | 2011 | DOI | shale-hills |
| Oxidative Dissolution under the Channel Leads Geomorphological Evolution at the Shale Hills ... | paper/book | 2016 | DOI | shale-hills |
| Parameter estimation of a physically-based land surface hydrologic model using an ensemble K... | paper/book | 2015 | DOI | shale-hills |
| Parameter estimation of a physically-based land surface hydrologic model using the ensemble ... | paper/book | 2014 | DOI | shale-hills |
| Parameterization for distributed watershed modeling using national data and evolutionary alg... | paper/book | 2013 | DOI | shale-hills |
| Particle fluxes in groundwater change subsurface shale rock chemistry over geologic time | paper/book | 2018 | DOI | shale-hills |
| Perennial flow through convergent hillslopes explains chemodynamic solute behavior in a shal... | paper/book | 2018 | DOI | shale-hills |
| Poised to Hindcast and Earthcast the Effect of Climate on the Critical Zone: Shale Hills as ... | paper/book | 2019 | archive page | shale-hills |
| Probing deep weathering in the Shale Hills Critical Zone Observatory, Pennsylvania (U.S.A.):... | paper/book | 2013 | DOI | shale-hills |
| Quantifying an early signature of the industrial revolution from lead concentrations and iso... | paper/book | 2014 | DOI | shale-hills |
| Quantifying Solute Transport at the Shale Hills Critical Zone Observatory | paper/book | 2011 | DOI | shale-hills |
| Rapid tree water transport and residence times in a Pennsylvania catchment | paper/book | 2016 | DOI | shale-hills |
| Rates and Mechanisms of Shale Weathering Across a Latitudinal Climosequence | dissertation/thesis | 2014 | archive page | shale-hills |
| Rates and Mechanisms of Soil Carbon Sequestration at the Shale Hills Critical Zone Observatory, | undergraduate thesis | 2010 | archive page | shale-hills |
| Reading Atmospheric and Biotic Influences in Soils: The relationship between soil gas and we... | undergraduate thesis | 2014 | archive page | shale-hills |
| Reanalysis of water and carbon cycle models at a critical zone observatory | paper/book | 2015 | DOI | shale-hills |
| Recommendations for field-scale induced polarization (IP) data acquisition and interpretation | paper/book | 2017 | DOI | shale-hills |
| Record of coupled hillslope and channel response to Pleistocene erosion and deposition in a ... | paper/book | 2018 | DOI | shale-hills |
| REE mobility and fractionation during shale weathering along a climate gradient | paper/book | 2017 | DOI | shale-hills |
| Regolith production and transport at the Susquehanna Shale Hills Critical Zone Observatory: ... | paper/book | 2013 | DOI | shale-hills |
| Regolith production and transport in the Susquehanna Shale Hills Critical Zone Observatory, ... | paper/book | 2013 | DOI | shale-hills |
| Regolith production rates calculated with uranium-series isotopes at Susquehanna/Shale Hills... | paper/book | 2010 | DOI | shale-hills |
| Reliance on shallow soil water in a mixed-hardwood forest in central Pennsylvania | paper/book | 2016 | DOI | shale-hills |
| Repeated Electromagnetic Induction Surveys for Determining Subsurface Hydrologic Dynamics in... | paper/book | 2010 | DOI | shale-hills |
| Repeated Electromagnetic Induction Surveys for Improved Soil Mapping in an Agricultural Land... | paper/book | 2010 | archive page | shale-hills |
| Reply to the comment on “Particle ﬂuxes in groundwater change subsurface shale rock chemistr... | paper/book | 2019 | DOI | shale-hills |
| Root morphology and mycorrhizal type strongly influence root production in nutrient hot spot... | paper/book | 2018 | DOI | shale-hills |
| Rose Hill Shale Weathering Across a Climate Gradient in the Appalachian Mountains | undergraduate thesis | 2013 | archive page | shale-hills |
| Scientist–Nonscientist Teams Explore Methane Sources in Streams Near Oil/Gas Development | paper/book | 2018 | DOI | shale-hills |
| Seismic Refraction for Subsurface Analysis of Garner Run | undergraduate thesis | 2015 | archive page | shale-hills |
| Simulating high resolution soil moisture patterns in the Shale Hills watershed using a land ... | paper/book | 2015 | DOI | shale-hills |
| Soil Architecture and Preferential Flow across Scales. | paper/book | 2010 | archive page | shale-hills |
| Soil chemistry and shale weathering on a hillslope influenced by convergent hydrologic flow ... | paper/book | 2011 | DOI | shale-hills |
| Soil CO 2 and O 2 concentrations illuminate the relative importance of weathering and respir... | paper/book | 2019 | DOI | shale-hills |
| Soil Layering and Preferential Flow Impacts on Seasonal Changes of GPR Signals in Two Contra... | paper/book | 2014 | DOI | shale-hills |
| Soil moisture patterns in a forested catchment: A hydropedological perspective. | paper/book | 2006 (pre-2007) | DOI | shale-hills |
| Soils Reveal Widespread Manganese Enrichment from Industrial Inputs. | paper/book | 2011 | DOI | shale-hills |
| Sowing the seeds of soil conservation. | untyped | 2010 | DOI | shale-hills |
| SPATIAL AND TEMPORAL EVOLUTION OF THE NOCTURNAL SURFACE LAYER IN A SMALL, STEEP WATERSHED | dissertation/thesis | 2014 | archive page | shale-hills |
| Spatial and Temporal Patterns of Water Stable Isotope Compositions at the Susquehanna-Shale ... | dissertation/thesis | 2013 | archive page | shale-hills |
| Spatial distribution of tree species governs the spatio-temporal interaction of leaf area in... | paper/book | 2013 | DOI | shale-hills |
| Spatial patterns of tree and shrub biomass in a deciduous forest using leaf-off and leaf-on ... | paper/book | 2018 | DOI | shale-hills |
| Spatiotemporal patterns of soil matric potential in the Shale Hills Critical Zone Observatory | paper/book | 2015 | DOI | shale-hills |
| Spatiotemporal patterns of water stable isotope compositions at the Shale Hills Critical Zon... | paper/book | 2013 | DOI | shale-hills |
| Spectroscopic (XANES/XRF) characterization of contaminant manganese cycling in a temperate w... | paper/book | 2014 | DOI | shale-hills |
| Static and Dynamic Controls of Soil Moisture Variability in the Shale Hills Catchment | dissertation/thesis | 2009 | archive page | shale-hills |
| Subsurface Lateral Flow Network on a Hillslope Revealed by Time-lapse Ground Penetrating Radar | paper/book | 2014 | DOI | shale-hills |
| Summary Results for Shale Hills Critical Zone Unit, Spring/Summer 2012 Benthic Macroinverteb... | report/proposal | 2014 | archive page | shale-hills |
| Surface and shallow subsurface nutrient transport within an agriculturally active central Pe... | undergraduate thesis | 2018 | archive page | shale-hills |
| SURFACE WATER-SEDIMENT INTERACTIONS: EXAMPLES FROM PRISTINE AND CONTAMINATED CATCHMENTS | dissertation/thesis | 2018 | archive page | shale-hills |
| Susquehanna Shale Hills Critical Zone Observatory: Shale Hills in the Context of Shaver's Cr... | paper/book | 2018 | DOI | shale-hills |
| Susquehanna/Shale Hills Critical Zone Observatory: Annual Report to National Science Foundation | report/proposal | 2009 | archive page | shale-hills |
| Susquehanna/Shale Hills Critical Zone Observatory: Annual Report to National Science Foundation | report/proposal | 2013 | archive page | shale-hills |
| Susquehanna/Shale Hills Critical Zone Observatory: Annual Report to National Science Foundation | report/proposal | 2012 | archive page | shale-hills |
| Susquehanna/Shale Hills Critical Zone Observatory: Annual Report to National Science Foundation | report/proposal | 2011 | archive page | shale-hills |
| Susquehanna/Shale Hills Critical Zone Observatory: Annual Report to National Science Foundation | report/proposal | 2008 | archive page | shale-hills |
| Susquehanna/Shale Hills Critical Zone Observatory: Annual Report to National Science Foundat... | report/proposal | 2010 | archive page | shale-hills |
| Temporal Dynamics of Soil Moisture Spatial Variability in the Shale Hills Critical Zone Obse... | paper/book | 2011 | DOI | shale-hills |
| Temporal stability of soil moisture spatial pattern and subsurface preferential flow pathway... | paper/book | 2006 (pre-2007) | DOI | shale-hills |
| Testing the Fill-and-Spill Model of Subsurface Lateral Flow Using Ground-Penetrating Radar a... | paper/book | 2018 | DOI | shale-hills |
| The CO 2 consumption potential during gray shale weathering: Insights from the evolution of ... | journal-article | 2014 | DOI | shale-hills |
| The Critical Zone: Where Rock Meets Life | paper/book | 2007 | archive page | shale-hills |
| The effect of cultivation on soil chemistry in the Shale Hills Critical Zone Observatory | undergraduate thesis | 2018 | archive page | shale-hills |
| The Effect of Lithology and Agriculture at the Susquehanna Shale Hills Critical Zone Observa... | paper/book | 2018 | DOI | shale-hills |
| The role of macropores and multi-resolution soil survey datasets for distributed surface–sub... | paper/book | 2014 | DOI | shale-hills |
| The Use of LiDAR Terrain Data in Characterizing Surface Roughness and Microtopography | paper/book | 2013 | DOI | shale-hills |
| The Use of Water Sensors to Examine Water Chemistry Related to Marcellus Shale Natural Gas D... | undergraduate thesis | 2013 | archive page | shale-hills |
| Thick soil formation on Orthoquartzite since the Wisconsinan in Huntingdon County | undergraduate thesis | 2015 | archive page | shale-hills |
| Three Principles of Soil Change and Pedogenesis in Time and Space | paper/book | 2011 | DOI | shale-hills |
| TOPOGRAPHIC CONTROLS ON ROOT PARTITIONING PATTERNS IN A TEMPERATE FOREST | dissertation/thesis | 2016 | archive page | shale-hills |
| Topographic controls on the depth distribution of soil CO2 in a small temperate watershed | paper/book | 2015 | DOI | shale-hills |
| Topographic Fingerprints of Hillslope Erosion in the Central Appalachians Revealed by Meteor... | dissertation/thesis | 2014 | archive page | shale-hills |
| Topographic stress and rock fracture: a two dimensional numerical model for arbitrary topogr... | paper/book | 2014 | DOI | shale-hills |
| Toward a conceptual model relating chemical reaction fronts to water flow paths in hills | paper/book | 2017 | DOI | shale-hills |
| Towards holistic studies of the Earth’s Critical Zone: Hydropedology perspectives. | paper/book | 2010 | DOI | shale-hills |
| Tree species distribution in relation to stem hydraulic traits and soil moisture in a mixed ... | dissertation/thesis | 2010 | archive page | shale-hills |
| UNDERSTANDING HYDROLOGICAL AND GEOCHEMICAL CONTROLS ON SOLUTE CONCENTRATIONS AT LARGE SCALE | dissertation/thesis | 2016 | archive page | shale-hills |
| Understanding Soil Time. | paper/book | 2008 | DOI | shale-hills |
| UNDERSTANDING THE EFFECTS OF HYDROLOGIC CONNECTIVITY, LAND USE, AND LITHOLOGY ON WATER QUALI... | dissertation/thesis | 2018 | archive page | shale-hills |
| Understanding watershed hydrogeochemistry: 1. Development of RT-Flux-PIHM | paper/book | 2017 | DOI | shale-hills |
| Understanding Watershed Hydrogeochemistry: 2. Synchronized Hydrological and Geochemical Proc... | paper/book | 2017 | DOI | shale-hills |
| Using a spatially-distributed hydrologic biogeochemistry model with a nitrogen transport mod... | paper/book | 2018 | DOI | shale-hills |
| Using S-wave Models to Image the Subsurface at Shale Hills Observatory | undergraduate thesis | 2018 | archive page | shale-hills |
| Using Seismic Refraction to Examine the Formation and Weathering Processes of the Critical Zone | undergraduate thesis | 2019 | archive page | shale-hills |
| Using soil records with atmospheric dispersion modeling to investigate the effects of clean ... | journal-article | 2015 | DOI | shale-hills |
| Using the Susquehanna - Shale Hills CZO to Project from the Geological Past to the Anthropoc... | report/proposal | 2015 | archive page | shale-hills |
| Using the Susquehanna - Shale Hills CZO to Project from the Geological Past to the Anthropoc... | report/proposal | 2019 | archive page | shale-hills |
| Using the Susquehanna - Shale Hills CZO to Project from the Geological Past to the Anthropoc... | report/proposal | 2018 | archive page | shale-hills |
| Using the Susquehanna - Shale Hills CZO to Project from the Geological Past to the Anthropoc... | report/proposal | 2017 | archive page | shale-hills |
| Using the Susquehanna - Shale Hills CZO to Project from the Geological Past to the Anthropoc... | report/proposal | 2016 | archive page | shale-hills |
| Using the Susquehanna - Shale Hills CZO to Project from the Geological Past to the Anthropoc... | report/proposal | 2014 | archive page | shale-hills |
| Using the Susquehanna - Shale Hills CZO to Project from the Geological Past to the Anthropoc... | report/proposal | 2013 | archive page | shale-hills |
| Usings δ2H AND δ18O To Determine The Flowpaths and Timescales of Water at the Susquehanna Sh... | dissertation/thesis | 2011 | archive page | shale-hills |
| Variability in aboveground carbon dynamics driven by slope aspect and curvature in an easter... | paper/book | 2017 | DOI | shale-hills |
| Variability of dissolved organic carbon in precipitation during storms at the Shale Hills Cr... | paper/book | 2017 | DOI | shale-hills |
| VARIATION IN SOIL NITROGEN RETENTION ACROSS LAND USES, LANDSCAPES, AND LANDFORMS IN CENTRAL ... | dissertation/thesis | 2016 | archive page | shale-hills |
| Virtual experiments guide calibration strategies for a real-world watershed application of c... | paper/book | 2016 | DOI | shale-hills |
| Wet atmospheric deposition of organic carbon: An under-reported source of carbon to watershe... | paper/book | 2017 | DOI | shale-hills |

## Sample check (rule 12)

Read in the harvest file, each matched to its row above:

papers with a DOI: Nitrogen Budget and Topographic Controls on N (2018); Parameter estimation of a physically-based la (2014); Fully-Coupled Hydrologic Processes for Modeli (2016)

archive-page papers: Usings δ2H AND δ18O To Determine The Flowpath (2011); Hydropedologic investigations in the Shale Hi (2008); Coupling Dissolved Organic Carbon and Hydrope (2011)

datasets: SSHCZO -- Vegetation, Stable Isotopes -- Shal; SSHCZO -- Groundwater Depth, Groundwater Temp; SSHCZO -- Solar Radiation -- Shale Hills -- (

Also read: the sixteen records I hold out (their venue text is the reason given in items 1 to 3), the two same-titled dataset pairs (different HydroShare ids), and the two 2006 papers (no `era`). Not opened by hand: any page, beyond the doi.org handle and HydroShare answers of the link check.
