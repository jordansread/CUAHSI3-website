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

// The CZNet cluster (or the Hub) an NSF award belongs to, read from the cluster named in the award's registry title ("Network Cluster:
// Dust in the Critical Zone ...", "Network Hub: ..."). The records carry no cluster tag on papers, so this is how a paper is placed in a
// cluster. It is an inference from the title, not a field of the data; '' when the title names none.
const CZ_CLUSTER_TITLES: [string, string][] = [
  ['hub', 'Network Hub'], ['bedrock', 'Bedrock controls'], ['dust2', 'Dust in the Critical Zone'], ['geomicrobiology', 'Geomicrobiology'],
  ['drylands', 'pedogenic carbonate'], ['dynamic-water', 'dynamic storage'], ['coastal', 'Coastal Critical Zone'], ['urban', 'Urban Critical Zone'],
  ['bigdata', 'Big Data approaches'], ['cinet', 'CINet'],
]
export function czClusterOfAward(text?: string): string {
  return CZ_CLUSTER_TITLES.find(([, pat]) => (text ?? '').includes(pat))?.[0] ?? ''
}
