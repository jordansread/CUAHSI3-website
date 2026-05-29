// Centralised SEO helper — call in every page's setup()
interface SeoOptions {
  title: string
  description?: string
  image?: string
  type?: 'website' | 'article'
}

export const useCuahsiSeo = ({ title, description, image, type = 'website' }: SeoOptions) => {
  const siteDescription = 'CUAHSI supports water scientists through shared data platforms, hands-on training, and a network of 130+ universities.'
  const siteUrl = 'https://www.cuahsi.org'

  useSeoMeta({
    title,
    ogTitle: `${title} · CUAHSI`,
    description: description ?? siteDescription,
    ogDescription: description ?? siteDescription,
    ogImage: image ?? `${siteUrl}/og-default.png`,
    ogType: type,
    twitterCard: 'summary_large_image',
  })
}
