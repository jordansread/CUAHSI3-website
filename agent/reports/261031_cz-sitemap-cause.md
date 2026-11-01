# Why `sitemap.xml` is empty, and what go-live needs

31 October 2026. Follows `261031_cz-readiness-review.md` (the empty sitemap was found there). Read-only: three throwaway builds from `main` at `6598916`; the one file I touched (`assets/robots.txt`) was restored with `git checkout` after each, and `git status` was clean.

## Result

| Build | `assets/robots.txt` | Site address | `<loc>` entries | CZ pages in sitemap | page `robots` meta |
|---|---|---|---|---|---|
| As committed | `Disallow: /` | none | 0 | 0 of 15 | `noindex, nofollow` |
| A | `Disallow:` (allow all) | `NUXT_SITE_URL` set in the environment | 469 | 15 of 15 | `index, follow, ...` |
| B | `Disallow:` (allow all) | none | 469 | not counted | not read |

So the empty sitemap, the `noindex` meta on every page and `Disallow: /` in the built `robots.txt` all follow from the one deliberate line in `assets/robots.txt`. Nothing is broken; the site is switched off for search engines, as intended today. My reading of the mechanism (the modules take their indexing state from that file) is inferred from these builds; I did not trace the module code to a line.

## What go-live needs beyond lifting that line

1. **A site address.** Build B has no address: its sitemap entries are relative (`<loc>/</loc>`, `<loc>/about</loc>`), which is not a valid sitemap, and the built `robots.txt` points to `Sitemap: http://localhost/sitemap.xml`. Build A set `NUXT_SITE_URL`; I printed only the Critical Zone count there, so I did not confirm that the entries became absolute. Setting the address is a `nuxt.config.ts` or Netlify environment change (rule 8).
2. **The Netlify header.** `netlify.toml` sends `X-Robots-Tag: noindex, nofollow, noarchive` on every path; this build test does not touch it. It must go too (rule 8).
3. **Canonical links.** None of the builds, including A and B, wrote `rel="canonical"` on the front page (0 found). If wanted they are an addition, after the address is known.
4. **The 469 entries are the whole site** (not only the Critical Zone section), so lifting the line publishes all of it to search engines at once: a site-wide decision (Jordan, 28 October).

## Not checked

That the 469 entries are the right set (for example, whether redirect stubs under `pages/highlights/` are listed). A live crawl by a search engine. Whether `NUXT_SITE_URL` alone is enough on Netlify.
