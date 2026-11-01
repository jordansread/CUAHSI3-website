# Critical Zone awards for the registry: proposal (epic T10)

Date: 29 October 2026. Branch `task/cz-awards-proposal` (a report only; the registry change itself will be a separate `content/` branch after approval). **Nothing in `content/` has been changed.** This is the proposal step of "Propose, then apply"; the registry (`content/awards/awards.json`, 13 awards today) changes only after Jordan approves a list.

## What this is, and what it is not

- Source: NSF's public award API (`api.nsf.gov/services/v1/awards.json`), queried 29 October 2026 by keyword, 18 requests, at least 3 s apart. It is the funder's own record, not a visit to each award's page on nsf.gov (C15 asks for the page; each entry below has the `show-award` link the registry uses, and I have not opened them). Titles are as the API gives them, with runs of spaces collapsed.
- **The footprint analysis's "44 CZO and 57 CZNet awards" list is not in the HTML file** (it names the NSF Award Search as the source and gives only the counts). I could not reproduce it. My selection is by title and is a different list: 25 observatory-era awards and 44 network awards. The two do not have to match, and the numbers differ (44 vs 25, 57 vs 44), so **someone who has the analysis's spreadsheet should compare**; that is a question for Jordan.
- Keyword search returns many awards that merely mention a critical zone (166 distinct awards from the first three result sets alone, more from later queries). I kept only awards that fund an observatory, the CZO national office and data system, or the CZNet clusters and hub. The rest are not proposed. Examples left out on purpose: REU sites, EAR postdoctoral fellowships, RAPID awards for single events, CSDMS and OpenTopography facility awards, and "Collaborative Research" science projects that use CZ data. Some of them may be cited by datasets; the T6 harvest will show which, and they can be added then.
- Dates are the API's start and expiration dates (months); an expiration can be extended later.
- Not checked: whether a collaborative sub-award (another university's number under the same project) is the one a dataset cites. The Discover records cite sub-award numbers (for example 2012616 and 2012409 under the Urban cluster), so I propose every institution's number, not only the lead. (I read those two numbers and the Urban cluster title in the Discover funding fields saved under `.agent/discover/`; I did not check the other records.) **The set may be incomplete:** it is what 18 keyword queries returned, not an exhaustive NSF search.

## Proposal A: observatory-era awards (25)

The seven original observatories and their renewals, the 2013 cohort, the national office, the integrated data system, and the network-building awards. Agent's choice of which awards count (C7): by title naming an observatory or the CZO network or its data system. Two rows are judgment calls outside that rule: 0632516 ("Establishing a Critical Zone Exploration Network", the 2006 start of the network) and 1445246 (SAVI, a virtual institute for CZ science). Delete them if you disagree.

| NSF number | Title | Awardee | Dates |
|---|---|---|---|
| 0632516 | Establishing a Critical Zone Exploration Network: A Proposal to Fund People and Sites | Pennsylvania State Univ University Park | July 2006 to June 2009 |
| 0724960 | CZO: Boulder Creek Critical Zone Observatory--Weathered Profile Development in a Rocky Environment and Its Influence on Watershed Hydrology and Biogeochemistry | University of Colorado at Boulder | September 2007 to August 2013 |
| 0725019 | CZO: Susquehanna/Shale Hills Critical Zone Observatory | Pennsylvania State Univ University Park | November 2007 to October 2013 |
| 0725097 | CZO: Critical Zone Observatory--Snowline Processes in the Southern Sierra Nevada | University of California - Merced | September 2007 to August 2013 |
| 0722476 | CZO: Luquillo Critical Zone Observatory | University of Pennsylvania | October 2009 to September 2013 |
| 0724958 | CZO: Transformative Behavior of Water, Energy and Carbon in the Critical Zone: An Observatory to Quantify Linkages among Ecohydrology, Biogeochemistry, and Landscape Evolution | University of Arizona | September 2009 to September 2013 |
| 0724971 | CZO: Spatial and temporal integration of carbon and mineral fluxes: a whole watershed approach to quantifying anthropogenic modification of critical zone carbon sequestration. | University of Delaware | October 2009 to September 2013 |
| 1152274 | Designing a Network of International Critical Zone Observatories (CZO) | Pennsylvania State Univ University Park | November 2011 to October 2013 |
| 1153164 | Integrated Data Management System for Critical Zone Observatories | University of Colorado at Boulder | April 2012 to April 2013 |
| 1239281 | Boulder Creek CZO Renewal: Weathered Profile Development in a Rocky Environment and Its Influence on Watershed Hydrology and Biogeochemistry | University of Colorado at Boulder | September 2012 to August 2014 |
| 1239285 | An Accomplishment-Based Request for Renewal of the Susquehanna-Shale Hills Critical Zone Observatory (SSHO) | Pennsylvania State Univ University Park | September 2012 to August 2014 |
| 1239521 | CZO: Critical Zone Observatory--Snowline Processes in the Southern Sierra Nevada | University of California - Merced | September 2012 to August 2014 |
| 1332257 | Integrated Data Management System for Critical Zone Observatories | Stroud Water Research Center | December 2012 to March 2016 |
| 1331408 | Transformative Behavior of Energy, Water and Carbon in the Critical Zone II: Interactions between Long- and Short-term Processes that Control Delivery of Critical Zone Services | University of Arizona | October 2013 to March 2022 |
| 1331726 | Using the Susquehanna - Shale Hills CZO to Project from the Geological Past to the Anthropocene Future | Pennsylvania State Univ University Park | October 2013 to November 2021 |
| 1331828 | Boulder Creek CZO II: Evolution, Form, Function, and Future of the Critical Zone | University of Colorado at Boulder | October 2013 to November 2022 |
| 1331841 | Luquillo CZO: The role of hot spots and hot moments in tropical landscape evolution and functioning of the critical zone | University of New Hampshire | December 2013 to November 2021 |
| 1331846 | Human and Natural Forcings of Critical Zone Dynamics and Evolution at the Calhoun Critical Zone Observatory | Duke University | December 2013 to November 2021 |
| 1331872 | Reynolds Creek Carbon Critical Zone Observatory | Idaho State University | December 2013 to May 2024 |
| 1331906 | Critical Zone Observatory for Intensively Managed Landscapes (IML-CZO) | University of Illinois at Urbana-Champaign | December 2013 to November 2021 |
| 1331939 | Southern Sierra Critical Zone Observatory | University of California - Merced | October 2013 to December 2022 |
| 1331940 | The Eel River Critical Zone Observatory: exploring how the critical zone will mediate watershed currencies and ecosystem response in a changing environment | University of California-Berkeley | October 2013 to November 2022 |
| 1331856 | Christina River Basin CZO: a whole watershed approach to integrating feedbacks between water, mineral and carbon fluxes in human landscapes | University of Delaware | January 2014 to December 2015 |
| 1360760 | Development of a Critical Zone Observatory National Office | Cornell University | May 2014 to November 2021 |
| 1445246 | SAVI: Crossing the Boundaries of Critical Zone Science with a Virtual Institute | Pennsylvania State Univ University Park | August 2014 to July 2021 |

## Proposal B: CZNet network awards (44)

Every 2020-or-later award my queries returned whose title says "Network Cluster" or "Network Hub": by the title's cluster name: Urban 8, Bedrock 7, dynamic storage in western watersheds 5, Dust 5, Big data 5, Coastal 5, Geomicrobiology 4 (one of them starts in 2021), Dryland 1, CINet 1, and the Hub 3. These are counts of award numbers found by title text, not of clusters' own member lists.

| NSF number | Title | Awardee | Dates |
|---|---|---|---|
| 2012073 | Collaborative Research: Network Cluster: Bedrock controls on the deep critical zone, landscapes, and ecosystems | University of California-Los Angeles | September 2020 to August 2026 |
| 2012227 | Collaborative Research: Network Cluster: Bedrock controls on the deep critical zone, landscapes, and ecosystems | Clemson University | September 2020 to August 2025 |
| 2012264 | Collaborative Research: Network Cluster: Bedrock controls on the deep critical zone, landscapes, and ecosystems | Johns Hopkins University | September 2020 to August 2026 |
| 2012316 | Collaborative Research: Network Cluster: Bedrock controls on the deep critical zone, landscapes, and ecosystems | Dickinson College | September 2020 to August 2027 |
| 2012353 | Collaborative Research: Network Cluster: Bedrock controls on the deep critical zone, landscapes, and ecosystems | Virginia Polytechnic Institute and State University | September 2020 to August 2027 |
| 2012357 | Collaborative Research: Network Cluster: Bedrock controls on the deep critical zone, landscapes, and ecosystems | University of Wyoming | September 2020 to August 2027 |
| 2012408 | Collaborative Research: Network Cluster: Bedrock controls on the deep critical zone, landscapes, and ecosystems | Colorado School of Mines | September 2020 to August 2026 |
| 2011910 | Collaborative Research: Network Cluster: Dust in the Critical Zone from the Great Basin to the Rocky Mountains | Utah State University | September 2020 to August 2026 |
| 2012067 | Collaborative Research: Network Cluster: Dust in the Critical Zone from the Great Basin to the Rocky Mountains | Salt Lake Community College | September 2020 to August 2026 |
| 2012082 | RUI: Collaborative Research: Network Cluster: Dust in the Critical Zone from the Great Basin to the Rocky Mountains | Middlebury College | September 2020 to August 2026 |
| 2012091 | RUI: Collaborative Research: Network Cluster: Dust in the Critical Zone from the Great Basin to the Rocky Mountains | University of Utah | September 2020 to August 2026 |
| 2012093 | RUI: Collaborative Research: Network Cluster: Dust in the Critical Zone from the Great Basin to the Rocky Mountains | Brigham Young University | September 2020 to August 2026 |
| 2012403 | Collaborative Research: Network Cluster: Geomicrobiology and Biogeochemistry in the Critical Zone | University of New Hampshire | September 2020 to March 2022 |
| 2012633 | Collaborative Research: Network Cluster: Geomicrobiology and Biogeochemistry in the Critical Zone | University of Kansas Center for Research Inc | September 2020 to August 2026 |
| 2012878 | Collaborative Research: Network Cluster: Geomicrobiology and Biogeochemistry in the Critical Zone | University of California-Riverside | September 2020 to August 2026 |
| 2217532 | Collaborative Research: Network Cluster: Geomicrobiology and Biogeochemistry in the Critical Zone | Florida International University | October 2021 to September 2026 |
| 2012475 | Network Cluster: Patterns and controls of ecohydrology, CO2 fluxes, and nutrient availability in pedogenic carbonate-dominated dryland critical zones | University of Texas at El Paso | September 2020 to August 2027 |
| 2012310 | Collaborative Research Network Cluster: Quantifying controls and feedbacks of dynamic storage on critical zone processes in western montane watersheds | Board of Regents, NSHE, obo University of Nevada, Reno | September 2020 to August 2026 |
| 2012669 | Collaborative Research: Network Cluster: Quantifying controls and feedbacks of dynamic storage on critical zone processes in western montane watersheds | University of Colorado at Boulder | September 2020 to August 2027 |
| 2012730 | Collaborative Research: Network Cluster: Quantifying controls and feedbacks of dynamic storage on critical zone processes in western montane watersheds | Colorado School of Mines | September 2020 to August 2026 |
| 2012796 | Collaborative Research: Network Cluster: Quantifying controls and feedbacks of dynamic storage on critical zone processes in western montane watersheds | Oregon State University | September 2020 to February 2027 |
| 2012821 | Collaborative Research: Network Cluster: Quantifying controls and feedbacks of dynamic storage on critical zone processes in western montane watersheds | University of California-Santa Barbara | September 2020 to August 2026 |
| 2011941 | Collaborative Research: Network Cluster: The Coastal Critical Zone: Processes that transform landscapes and fluxes between land and sea | University of Maryland, College Park | September 2020 to August 2026 |
| 2012319 | Collaborative Research: Network Cluster: The Coastal Critical Zone: Processes that transform landscapes and fluxes between land and sea | George Washington University | September 2020 to August 2026 |
| 2012322 | Collaborative Research: Network Cluster: The Coastal Critical Zone: Processes that transform landscapes and fluxes between land and sea | Trustees of Boston University | September 2020 to August 2025 |
| 2012484 | Collaborative Research: Network Cluster: The Coastal Critical Zone: Processes that transform landscapes and fluxes between land and sea | University of Delaware | September 2020 to August 2026 |
| 2012670 | Collaborative Research: Network Cluster: The Coastal Critical Zone: Processes that transform landscapes and fluxes between land and sea | College of William & Mary Virginia Institute of Marine Science | September 2020 to August 2026 |
| 2011617 | Collaborative Research: Network Cluster: Urban Critical Zone processes along the Piedmont-Coastal Plain transition | Temple University | September 2020 to August 2026 |
| 2012107 | Collaborative Research: Network Cluster: Urban Critical Zone processes along the Piedmont-Coastal Plain transition | Pennsylvania State Univ University Park | September 2020 to August 2027 |
| 2012313 | Collaborative Research: Network Cluster: Urban Critical Zone processes along the Piedmont-Coastal Plain transition | Towson University | September 2020 to August 2027 |
| 2012336 | Collaborative Research: Network Cluster: Urban Critical Zone processes along the Piedmont-Coastal Plain transition | Research Foundation CUNY - Advanced Science Research Center | September 2020 to August 2026 |
| 2012340 | Collaborative Research: Network Cluster: Urban Critical Zone processes along the Piedmont-Coastal Plain transition | University of Maryland Baltimore County | September 2020 to August 2027 |
| 2012344 | Collaborative Research: Network Cluster: Urban Critical Zone processes along the Piedmont-Coastal Plain transition | Cary Institute of Ecosystem Studies, Inc. | September 2020 to August 2027 |
| 2012409 | Collaborative Research: Network Cluster: Urban Critical Zone processes along the Piedmont-Coastal Plain transition | University of Pittsburgh | September 2020 to August 2026 |
| 2012616 | Collaborative Research: Network Cluster: Urban Critical Zone processes along the Piedmont-Coastal Plain transition | University of Maryland, College Park | September 2020 to May 2027 |
| 2011346 | Collaborative Research: Network Cluster: Using Big Data approaches to assess ecohydrological resilience across scales | Nevada System of Higher Education, Desert Research Institute | September 2020 to August 2025 |
| 2011439 | Collaborative Research: Network Cluster: Using Big Data approaches to assess ecohydrological resilience across scales | Brigham Young University | September 2020 to August 2025 |
| 2012080 | Collaborative Research: Network Cluster: Using Big Data approaches to assess ecohydrological resilience across scales | University of Kansas Center for Research Inc | September 2020 to August 2026 |
| 2012123 | Collaborative Research: Network Cluster: Using Big Data approaches to assess ecohydrological resilience across scales | University of Vermont & State Agricultural College | September 2020 to August 2026 |
| 2012188 | Collaborative Research: Network Cluster: Using Big Data approaches to assess ecohydrological resilience across scales | Board of Regents, NSHE, obo University of Nevada, Reno | September 2020 to August 2026 |
| 2012593 | Collaborative Research: Network Hub: Enabling, Supporting, and Communicating Critical Zone Research. | Columbia University | August 2020 to August 2026 |
| 2012748 | Collaborative Research: Network Hub: Enabling, Supporting, and Communicating Critical Zone Research. | Utah State University | September 2020 to August 2026 |
| 2012893 | Collaborative Research: Network Hub: Enabling, Supporting, and Communicating Critical Zone Research. | Consortium of Universities for the Advancement of Hydrologic Sci | September 2020 to August 2027 |
| 2012850 | Network Cluster CINet: Critical Interface Network in Intensively Managed Landscapes | University of Illinois at Urbana-Champaign | September 2020 to August 2026 |

## Already in the registry

2012893 (the CUAHSI subaward of the Hub, listed in Proposal B) is already in `awards.json`. It would be skipped, not duplicated. 1 of the 69 proposed.

## Entry format, if approved

Like the existing entries (their sentence wording varies; 2012893 says "The CZNet Hub is supported by ... awarded to CUAHSI", so the Hub awards would need that wording checked): `id` `nsf-<number>`, `funder` NSF, `number`, `url` (nsf.gov `show-award` link), `text` = "The work is supported by NSF award {number}, \"<title>\" (<start month year> to <end month year>)." For a sub-award the awardee is stated (as in `nsf-2322510`). Not applied: the CIROH-style long form and standard sentence apply only to CIROH subawards.

## To verify before applying (C3, C15)

- Open each award's nsf.gov `show-award` page and compare title, number and dates; none has been opened.
- Normalise titles to the funder's wording (the API's titles can differ in trailing punctuation from the registry's existing entries, for example `nsf-2012893`).
- Compare against the footprint analysis's 44 and 57 (not reproduced here).
- Whether the Hub awards keep the existing "CZNet Hub" sentence wording.

## Decisions for Jordan

1. Proposal A, B, or both? (69 awards, 68 new.)
2. Does the analysis's own list of 44 and 57 exist as a file? If yes, I use it instead and report the difference.
3. All institutions' numbers (my proposal), or lead awards only?
4. Add the awards named by archive and Discover records but not in A or B only when the T6 harvest finds them (my recommendation).
