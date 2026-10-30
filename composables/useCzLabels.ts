// Display names for the slugs used in content/critical-zone/products.json (`sites`) and helpers shared by the Critical Zone Science pages.
// The slugs are defined in scripts/content-schemas.mjs (CZ_SITES); the names here are labels for display only.
export const CZ_SITE_NAMES: Record<string, string> = {
  national: 'National (cross-CZO)',
  boulder: 'Boulder Creek',
  calhoun: 'Calhoun',
  'catalina-jemez': 'Catalina-Jemez',
  christina: 'Christina River Basin',
  eel: 'Eel River',
  iml: 'Intensively Managed Landscapes',
  luquillo: 'Luquillo',
  reynolds: 'Reynolds Creek',
  'shale-hills': 'Shale Hills',
  sierra: 'Southern Sierra',
  hub: 'CZNet Hub',
  bedrock: 'CZNet Bedrock',
  bigdata: 'CZNet Big Data',
  cinet: 'CZNet CINet',
  coastal: 'CZNet Coastal',
  drylands: 'CZNet Drylands',
  dust2: 'CZNet Dust',
  'dynamic-water': 'CZNet Dynamic Water',
  geomicrobiology: 'CZNet Geomicrobiology',
  urban: 'CZNet Urban',
}

export const CZ_ERA_NAMES: Record<string, string> = {
  czo: 'Critical Zone Observatories (2007 to 2020)',
  cznet: 'Critical Zone Collaborative Network (2020 on)',
  none: 'Era not recorded',
}

// The first site that is not the cross-CZO "national" tag, or "national" when that is all there is.
export function czPrimarySite(sites?: string[]): string {
  const s = sites ?? []
  return s.find(x => x !== 'national') ?? s[0] ?? 'none'
}
