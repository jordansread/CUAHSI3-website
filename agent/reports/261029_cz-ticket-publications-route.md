# Draft ticket: add the archive's publications (and PAR exports) to the harvest

Draft for Jordan, 29 October 2026. Not created on GitHub. Proposed title: **T6b: Add the archive's publications and NSF PAR exports to the product harvest**. Epic CUAHSI/CUAHSI3-website#62; label `epic:critical-zone`. **Size:** M. **Branch kind:** code (`task/`).

## What
Jordan decided on 29 October (structure note, decision 3) that the archive's own publications are assumed CZ-affiliated and belong in the products list even where no award names them. T6's harvest finds papers only through award numbers (231 papers, no site tags). Add a fourth route to `scripts/cz-harvest.mjs` that reads the CZO archive's 3,286 publication pages (all saved by T1), and an optional fifth that reads files exported from NSF's Public Access Repository (PAR).

## Why
The archive lists up to 559 publication pages per observatory, 3,285 in all (at most 2,864 distinct names, because a publication shared by observatories is listed under each). Only 1,334 contain a DOI-like string (T2). Without this route the observatory pages in the T8 structure show datasets only, and the papers list is a small, uneven sample.

## Done when
- [ ] Parses each saved archive publication page into title, authors, year, DOI (only if the page gives one; never guessed, C3), publication type (the archive's own section: paper/book, talk/poster, dissertation/thesis, undergraduate thesis, report/proposal) and observatory (from the page address, plus any others it is listed under)
- [ ] Merges the same publication listed under several observatories: on DOI where there is one, otherwise on normalised title and year; keeps every site and every source address
- [ ] Records are `paper` (or the nearest type in the schema) with `sites` set, `source: czo-archive`, `source_url`, and a `provenance` entry per page
- [ ] Reports counts with denominators: pages parsed of 3,286, with a DOI of N, distinct publications, by observatory and by type; and the pages it could not parse
- [ ] Merges with the existing routes on DOI (an archive paper that route 3 already found becomes one record with two sources)
- [ ] PAR reader: takes a folder of PAR CSV or XML exports (one per award or per query, exported by a person in a browser; the script does not fetch PAR), maps rows to products (journal article, conference paper and dissertation to `paper`; dataset, software and model to their types), keeps the PAR address as the source, and merges on DOI
- [ ] Cluster publication pages from CZNet (free-text citation lists, fetched in T1, not parsed): either parsed best-effort with the unparsed lines listed, or left out with the reason stated
- [ ] Every record keeps where it came from; the output is still a proposal, not content; nothing is written to `content/`
- [ ] Known limits stated: publications with no DOI stay URL-less or archive-only; talks and posters may not belong in a products list (decision below)

## Decisions for Jordan
1. Which archive publication types count as products: papers and books only, or also dissertations and reports? Talks, posters and undergraduate theses are suggested out unless he says otherwise.
2. For publications with no DOI, is an archive-page link acceptable as the product's address until a DOI is found (T2 left OpenAlex title matching untested)?

## Approval
None expected beyond the two decisions above.

## Dependencies
T6 (merged). The T8 structure decision. Feeds T11 and T12.

## Notes
- PAR (par.nsf.gov) search by award works as a plain address; its CSV and XML export (limit 5,000) returned a bot-check page when fetched by script, so exports are made by a person in a browser (see the PAR section of the structure note). PAR's resource types include datasets, software and models, so the reader accepts all types, not only papers.
- Politeness: the archive pages are already saved locally, so this route makes no requests to the archive. Any OpenAlex or Crossref lookup for DOIs follows the same delays as T6.
