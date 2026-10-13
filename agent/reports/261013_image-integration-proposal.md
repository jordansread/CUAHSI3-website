# Bringing real images into the site: a proposal

13 October 2026. Jordan asked for a larger proposal or prototype for working real photographs, screenshots of the tech systems and schematics or concept diagrams into the site. He has a dump folder of CUAHSI pictures that can be made local. **Nothing in this document has been built, and I have not opened the dump folder.** Everything about the repository below was read or counted on 13 October (counts by script, file sizes by `du`); statements about Netlify and other tools are from general knowledge and are marked.

## Short answer

The site already has the slots and almost none of the machinery. Four pages carry designed-in placeholders (boxes labelled "PHOTO" or "SCREENSHOT", or a gradient with a label), the only real pictures in the repository are the team headshots, the pictures embedded in newsletter issues (nine issue folders) and two single images (one news, one program), and no content type except the team has an image field. So "start working images in" is three pieces of work, and only the middle one is about pictures:

1. **A pipeline**: how a picture gets from the dump folder to a page (rights, privacy, processing, naming, alt text).
2. **A foundation in code**: one image component, one place that records each image's facts, and checks that stop a bad image shipping.
3. **Filling slots, section by section**, as small reviewable PRs, with diagrams drawn by a different route than photographs.

I recommend starting with a no-visible-change foundation PR, then one prototype slot (the four screenshot placeholders on `/data-platforms`) so you can judge the approach on a deploy preview before it spreads.

## What is in the repository today

| Fact | Where |
|---|---|
| Placeholder: home hero, "PHOTO — FIELD TEAM GAUGING A RIVER", 480 px high; the live gage card sits on it | `pages/index.vue` (about line 97) |
| Placeholders: the 3 home tool cards, "SCREENSHOT — <tool>", 158 px high | `pages/index.vue` (about line 144) |
| Placeholder: the featured impact story on the home page, a 300 px gradient box labelled "PHOTO — <story title>" (with the hero and 3 tool cards, 5 "PHOTO" or "SCREENSHOT" labels on the built home page) | `pages/index.vue` (about line 173) |
| Placeholders: the four tool screenshots on `/data-platforms` (HydroShare, CUAHSI JupyterHub, Hydrologic Information System, MATLAB Online), 330 px high | `pages/data-platforms/index.vue` (about line 107) |
| Placeholder: a 180 px photo box on every impact-story card (41 files in `content/research/`, all 41 with `published: true`) | `pages/about/impact/index.vue` (about line 84) |
| Real images in use: team headshots (23 image files in `public/team/headshots`, listed in `content/team/full-team.json`), YouTube thumbnails on cyberseminar cards, and pictures inside content bodies: 84 markdown image links in 16 content files (9 newsletter issues, 4 news items, 2 research stories, 1 program) | `public/newsletter-images` (76 image files, 3.7 MB), `public/news-images` (1 file, 320 KB), `public/program-images` (1 file, 420 KB), `public/team` (1.3 MB); sizes measured with `du` on 13 October. Some newsletter pictures show people (not reviewed here); **their consent status is unknown.** |
| The only image field in any content schema is the team's `photo` | `scripts/content-schemas.mjs` |
| No image optimisation: no `@nuxt/image`, no `sharp`, plain `<img>` in three files | `package.json`, `pages/about/team/*.vue`, `components/CyberseminarCard.vue` |
| Content files with `published: true`, of `.md` files: research 41 of 41, news 23 of 23, events 45 of 45, programs 5 of 6 (the sixth is a README), newsletter 10 of 10, cyberseminars 21 of 25, team 9 of 9 (counted by script on 13 October; the 9 team files are the profile pages, the headshots are listed in `full-team.json`) | `content/` |
| Visual baseline: 26 routes at two widths, 52 images; any new image changes the baseline of its page | `scripts/visual-routes.json` |

Two rules that shape the plan: **rule 3** (a branch changes content or code, never both; `public/` files belonging to a named content item may ride on a content branch) and **rule 8** (adding a dependency, or changing `nuxt.config.ts`, `netlify.toml` or `package.json` scripts, is asked first). The repository is public, so **everything committed is public and permanent**: a picture cannot be taken back once pushed.

## The kinds of image, and where each belongs

| Kind | Typical source | Where it fits | Main risk |
|---|---|---|---|
| **Photograph** (people at events, field work, instruments, places) | the dump folder | home hero, impact-story cards, news and event cards, program and campus-visit pages, About | consent and rights; location data in the file; faces |
| **Screenshot** of a CUAHSI system | taken fresh | `/data-platforms`, home tool cards, `/learn-train` how-to pages | goes stale; can show logins, emails, member data |
| **Schematic or concept diagram** | drawn for the site | `/data-platforms` (how the tools connect), About, programs (a pathway), the membership page | being wrong; a diagram states facts |
| **Logo or banner** (partners, sponsors, event banners) | partner supplied | newsletter, news, events | permission and brand use |
| **Chart or map** (data-driven) | generated | impact stories, the gage card already does this live | not in scope here |

## Principles

1. **Only what we may show.** Every image has a recorded source, a rights status and, for photographs of identifiable people, a note that the person agreed or that it was taken at a public event with a stated policy. No record, no publish.
2. **Nothing is invented.** A caption, a name, a place or a date comes from the file's own information or from a person who knows. I can look at a picture and describe what it shows for alt text, but I will not name a person from their face; names come from Jordan or the file.
3. **The web copy is small and clean.** Originals stay out of the repository. The web copy has its location and camera data stripped, a fixed maximum size and a modern format, so a page does not get slower for being prettier.
4. **A picture always has a reason to be there, and an alternative.** Alt text for what it shows, empty alt for decoration, a caption where the picture needs context.
5. **Diagrams are drawn as text.** They live in the repository as SVG that can be read, diffed, restyled to the design tokens and corrected in a PR, not as a picture of a diagram.
6. **Small reviewable steps.** One slot or one section per PR, each with a deploy preview to look at, as with the Tailwind migration.

## The pipeline, from the dump folder to a page

**Stage 0: Inventory (no site change).** You point me at the folder (see "What I need"). I make a list: file name, size, pixel size, date, what it shows, and which of the slots above it could fit. Where the file carries an embedded date, camera, GPS position or photographer, it goes in the list. **This working list stays in the gitignored `.agent/` folder and is not committed**, because it can hold locations, photographers' names and descriptions of identifiable people, and the repository is public and permanent. I only read that folder; I do not copy, upload or commit anything at this stage. A committed report comes only after triage, and lists approved items only.

**Stage 1: Triage with you.** For each candidate: use, maybe, or leave out; whether people appear; who can confirm consent; who owns it (staff photographer, a partner, a speaker, a stock site). This is the only stage that needs your judgement about people and rights, so the list is built to be answered quickly (a yes, no or "ask X" per row). Photographs with people stay out until a name is attached to the permission.

**Stage 2: Processing.** A script in `scripts/` (needs your word to add, rule 8, if it needs a dependency) turns an original into the web copy: strips the location and camera data, rotates by the file's orientation tag, limits the long side (2,000 px for hero use, 1,200 px for cards), writes WebP (and JPEG where a tool needs it) and names it `<slot>-<subject>-<yyyy>.webp`. The original stays where it is, outside the repository.

**Stage 3: Record.** One file, `content/images/images.json` (or a front-matter `image` block on the item it belongs to; see decision 3), holds for each image: path, alt text, caption, credit, rights status, source, date taken, and the pages that use it. The validator checks it (a missing alt text or rights status fails), the way it checks other content.

**Stage 4: Render.** A single component, `components/SiteImage.vue`, takes an image id and a slot size and renders the `<img>` with width and height set (so the page does not jump while it loads), `loading="lazy"` below the fold, a `srcset` where there are several sizes, the alt text and an optional caption. Pages stop writing `<img>` by hand. The existing placeholders become the component's fallback: a slot with no image yet looks exactly as it does today, so a page can be filled one slot at a time.

**Stage 5: Check.** `verify.sh` gains checks that can be done by pattern: an image over a size limit, a new image in `public/` that the record does not mention (the roughly 100 images already in the repository, from newsletters, news and headshots, have no rights record: they are exempt from the check and listed in the record as `rights: unreviewed`, then audited with you in their own pass; their consent status is not known), an `<img>` with no `alt`, a record with no alt text. The visual baseline changes only for the pages that gain a picture, and each PR lists them.

## Screenshots of the tech systems

- **Captured by script, not by hand.** A Playwright script (Playwright is already a dependency) opens each system at a fixed width, waits for it, and saves a crop. The script is the instructions, so a screenshot can be retaken after a tool changes, and a retake is a small PR.
- **Only public pages, never a logged-in view with other people's data.** HydroShare resource pages, the JupyterHub login or landing page, the HIS site, MATLAB Online's start screen. Anything showing an email address, a member list or a private resource is cropped or replaced by a mock-up that says so.
- **Dated.** Each screenshot's record carries the capture date and the address it came from, and a review reminder (a year). A tool that has changed gets a new capture, not a patch.
- **Honest framing.** A screenshot of a system CUAHSI does not run (MATLAB Online) is labelled as that tool, not styled as CUAHSI's.

## Schematics and concept diagrams

- **Authored as SVG** in `public/diagrams/` (or inline in a component), using the site's colours and fonts, with a text alternative that says the same thing in words (a diagram that only sighted visitors can read is not finished).
- **I draft, staff confirm.** A diagram states how things connect (for example how HydroShare, JupyterHub and the data tools relate). I will draft from what the site's own pages say and what you tell me, and mark every connection that comes from me rather than from a source as "to confirm". A named person at CUAHSI who runs the system signs off in the PR before it publishes (the same discipline as C3: never invent).
- **Candidate diagrams** (each would be proposed with its source before drawing): the tool ecosystem on `/data-platforms`; the data path from a gage to a model result; the learning pathway across `/learn-train`; how membership and the governance bodies relate. None is drawn yet.

## Phasing

| Phase | What | Branch kind | Visible change |
|---|---|---|---|
| 0 | Decisions below; folder inventory; triage list | none (a report) | none |
| 1 | Foundation: `SiteImage.vue`, the record and its schema, the verify checks, the processing script. Existing placeholders become the fallback. | code | none (baselines unchanged: the check is that all 52 still pass) |
| 2 | **Prototype slot:** the four screenshots on `/data-platforms`, taken by script, their records, and the page wiring (the tools are listed in the page's code, not in `content/`) | **code**: the screenshot files are not a content item's files (rule 3 lets `public/` files ride on a content branch only when they belong to a content item the PR names), and a branch that changes only `public/` counts as code; so the record for site images lives outside `content/` (decision 3) | `/data-platforms` and the home tool cards, at 390 and 1280 |
| 3 | Home hero photograph and featured story; impact-story card photographs where a photograph exists, placeholders elsewhere | code for site images (hero, tool cards); content for a story's own photograph once stories can name one | `/`, `/about/impact` |
| 4 | News, events, programs and campus-visit imagery; add an optional `image` to the schemas that need it | schema change = code PR first, then content PRs by section (a photograph that belongs to a news item or event is that item's file, so it can ride on the content branch) | per section |
| 5 | Diagrams, one per PR, each with its confirmation | code when it is site furniture (a tools diagram on `/data-platforms`), content when it belongs to an item | where placed |

Each phase after 1 is several small PRs, not one. Every PR lists the exact baseline images that change and why.

## Decisions for Jordan (my recommendation first)

1. **Keep the site portable, or let Netlify do the resizing?** (a) I run a small script once on each picture, so every size is made ahead of time and saved with the site. It works on any host, and page weight is predictable. It adds one tool to the project (called `sharp`; adding a tool is a decision for you under rule 8). (b) Netlify resizes pictures when a visitor asks, by changing the address. Nothing to add, but the site then depends on Netlify for pictures (my memory of how it works, not tested here). **Recommend (a).**
2. **Where do the original pictures live?** Not in the website's repository (it is public, permanent and heavy). **Recommend** a shared drive that you control; my inventory points at them. Say if CUAHSI already has a media library.
3. **Where do we write down each picture's facts (what it shows, who owns it, who may be shown)?** (a) One list file for pictures that are part of the site itself (the home hero, tool screenshots, diagrams), kept outside `content/`, which makes those pictures code PRs; plus a note inside each news item, event or story for pictures that belong to it, which makes those content PRs. (b) Everything in one list inside `content/`, which would need rule 3 to allow site pictures on a content branch. **Recommend (a).** Visitors see no difference; it decides how I split the PRs.
4. **Photographs of people: what is the rule?** **Recommend** none published without a named permission note. Two possible exceptions that I am only guessing at, and want your answer on: team members' own profile photographs (they already appear), and speakers at events whose sessions CUAHSI recorded and published (a recording is not necessarily consent to a photograph). If you decline both, every person-photograph needs its own note.
5. **Who confirms each system's screenshot or diagram?** One named person per system (HydroShare, JupyterHub, HIS, MATLAB Online, the learning programs). If there is nobody for a system, that system's diagram waits.
6. **Alt text** (the description a screen reader reads). I write it and mark it for review; a person who knows the subject reads each one in the PR. **Recommend** that. Who reads them?
7. **First slot.** **Recommend** the four `/data-platforms` screenshots as the prototype: tools we can capture ourselves, no people in them, no rights questions.

## Risks and unknowns

- **Permanence.** A picture in a public repository stays in its history even after removal. That is why triage comes before any commit.
- **Rights.** I cannot judge ownership from a file. Anything of unknown origin is left out, not guessed.
- **Page weight and speed.** The dump folder's size and quality are unknown. A hero photograph on the home page is the biggest single risk; the size limits above and the visual and weight checks in Phase 1 are there for it.
- **Baseline churn.** Each filled slot changes baseline images for its page. The known flaky screenshot comparison on tall pages (`community-jobs` at 390, noted in the log) will add noise; reruns are expected.
- **Maintenance.** Screenshots and diagrams age. The record's dates and a yearly review are the answer; without them the pictures become wrong silently.
- **I cannot judge taste from a description of a file.** Photograph choice, cropping and what represents CUAHSI well are yours; I will show options on a preview rather than decide.
- **Not known from the repository:** what the dump folder contains, who took the pictures, any existing consent or media-release practice at CUAHSI, and the partners' logo permissions.

## What I need from you

1. The path to the dump folder, and which parts of it to read (I will not open anything outside the folder you name, and I will not open files that look like finance or personal records). Decision 2: where originals will live.
2. Answers to decisions 1 to 7 (or "your call, with your recommendation" for any of them). You answer 1 to 4 and 7; 5 and 6 need the named people.
3. A go-ahead, from you, for Phase 0 (the inventory, read-only, not committed) and, later, for Phase 1 (the foundation PR; it needs your word on the tool in decision 1).
