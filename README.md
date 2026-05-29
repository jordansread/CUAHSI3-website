# cuahsi.org

Built with [Nuxt 3](https://nuxt.com) + [@nuxt/content](https://content.nuxt.com).  
Deployed to Cloudflare Pages or Netlify on every push to `main`.

## Local dev

```bash
npm install
npm run dev        # http://localhost:3000
```

## Content editing

All site content lives in `/content` as Markdown or YAML files.  
No CMS login required — edit files directly in GitHub or via a local checkout.

| Content type | Location | Format |
|---|---|---|
| News posts | `content/news/` | `.md` with YAML frontmatter |
| Events | `content/events/` | `.yaml` |
| Newsletter issues | `content/newsletter/` | `.md` with YAML frontmatter |
| Team members | `content/team/` | `.yaml` |
| Programs | `content/programs/` | `.md` with YAML frontmatter |
| Job listings | `content/jobs/` | `.yaml` |

## Deploying

Push to `main` → Cloudflare Pages auto-builds and deploys.  
Preview deployments are created for every pull request.

## Newsletter migration

To migrate a Mailchimp issue:
1. Copy the HTML content from Mailchimp's campaign archive
2. Create `content/newsletter/YYYY-MM.md` with the frontmatter schema (see existing files)
3. Add the Mailchimp campaign ID to `server/api/newsletter-redirect.ts` so old links redirect cleanly
4. Commit and push

## SEO

- Every page uses `useCuahsiSeo()` from `composables/useSeo.ts`
- Sitemap auto-generated at `/sitemap.xml` via `@nuxtjs/sitemap`
- All pages pre-rendered to static HTML at build time — no JS required for indexing
