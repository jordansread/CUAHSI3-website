# Critical Zone go-live and retirement: what needs your approval, in one place

31 October 2026. Epic CUAHSI/CUAHSI3-website#62, tickets T7b, T15, T16, T18. Everything here is a proposal; nothing in it is changed. Each item is one of the rule 8 asks ("state what you want to change and why, then wait") or a decision that is yours.

## A. Where the three legacy hosts run (answers redirect decision 5, partly)

Looked up on 31 October 2026 with `dig` and `curl -I` from this machine. These are what the public DNS and the response headers show; I have no access to any account, so who owns them is not known.

| Host | Resolves to | Response header | My reading |
|---|---|---|---|
| `criticalzone.org` | 75.2.60.5 | `server: Netlify` | served by Netlify |
| `czo-archive.criticalzone.org` | 34.120.130.134 | `server: UploadServer`, `via: 1.1 google` | behind a Google Cloud load balancer (an upload/storage-style server) |
| `discover.criticalzone.org` | CNAME `cznethub-portal.criticalzone.org` → 34.120.130.134 | `server: nginx/1.27.3`, `via: 1.1 google` | an nginx app on Google Cloud, the same address as the archive |
| `contribute.criticalzone.org` (Discover's API) | same as Discover | same | same app |

The name servers for `criticalzone.org` are `ns05`/`ns06.domaincontrol.com` (GoDaddy's DNS), so DNS records are changed in a GoDaddy account.

What follows from that (inference, not tested):
- `criticalzone.org` is already on Netlify, so its redirects can be written in whichever Netlify site holds it. Whether that is a Netlify site this team can edit, I cannot see.
- The archive and Discover are on Google Cloud. To redirect them there are two routes: change the redirect in Google Cloud (whoever runs it), or move their DNS records at GoDaddy to this Netlify site and let it do the redirecting. The second is the one `agent/reports/261031_cz-redirect-map.md` assumes.

**Your question:** who holds the GoDaddy account for `criticalzone.org`, and who administers the Google Cloud project behind the archive and Discover?

## B. Changes I would make once you say yes (each is a rule 8 item)

1. **Site address** (T7b). Set the production address for the sitemap, `robots.txt` and canonical links, in `nuxt.config.ts` (`site.url`) or as a Netlify environment variable. Needs: the final address (is it `www.cuahsi.org`?).
2. **Lift the indexing block** (T18, site-wide, yours). Three places, all of the site, not only this section: the `Disallow: /` line in `assets/robots.txt`; the `X-Robots-Tag` header in `netlify.toml`; and the page-level noindex that follows from the first. See `261031_cz-sitemap-cause.md`: with the line allowed, the sitemap lists 469 URLs.
3. **Host-based redirects** (T15). Add `criticalzone.org`, `czo-archive.criticalzone.org` and `discover.criticalzone.org` as domain aliases of this Netlify site (an account action, not a file change), and write host-based rules in `public/_redirects` from the map in `261031_cz-redirect-map.md`. The generator `scripts/parity/redirects.mjs` and the checker `scripts/check-redirects.mjs` would learn about hosts; that is a code PR of its own.
4. **Canonical links** (T7b). A `rel="canonical"` on each page, after 1. None of the three test builds wrote one.

I would not do any of 1 to 4 before the go-live review, and 3 not before the snapshot below.

## C. Decisions that are yours

| # | Decision | My suggestion |
|---|---|---|
| 1 | Archive `/national/*` (1,295 URLs) goes to | the section front page |
| 2 | CZNet `/people*` (577 URLs) goes to | the network page |
| 3 | CZNet `/news-events/*` (228) goes to | the section front page |
| 4 | Discover goes to | the datasets page |
| 5 | "August 2027" as the retirement date in public text (3 page files, 4 places) | keep it only if it is confirmed; otherwise say "being retired" |
| 6 | Claim 12 on the about page: add back "almost entirely open but unpublished"? | your call; it is a claim of yours I removed for lack of evidence |
| 7 | Which of the 20 datasets added in #187 to leave out (the supplements) | keep all 20 unless you name some |
| 8 | Observatory narratives: who supplies the text for the ten observatory pages? | a one-paragraph description per observatory from the observatory's own site, checked by you |
| 9 | The snapshot of both sites and Discover, deposited with a DOI (deferred 28 October) | do it before any redirect; Discover is a JavaScript app, the riskiest to leave late |

Decisions 1 to 4 were taken as my suggested defaults on 31 October; this table asks again only because they gate the redirect PR.

## D. Order I would work in, after your answers

1. Snapshot refresh and DOI (C9), then T16's checklist and dry run.
2. Site address and canonical links (B1, B4), before the noindex block comes off.
3. Redirect tooling PR (B3, code), then the aliases and records (an account action by whoever holds the accounts).
4. The go-live review list in `261031_cz-readiness-review.md`, then B2.

## Not checked

That the Netlify alias route works for a domain whose DNS is at GoDaddy and whose other hosts stay on Google Cloud. That the three legacy hosts answer on the paths in the map. The Netlify account that holds `criticalzone.org`.
