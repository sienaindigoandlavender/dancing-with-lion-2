import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Migration Routes Through Morocco — Human Mobility Intelligence | Dancing with Lions',
  description: 'Sub-Saharan migration, Spain crossings, transit cities, policy, human stories. Strait of Gibraltar. Ceuta and Melilla. SNIA regularisation. Atlantic route.',
  openGraph: {
    title: 'Migration Routes Through Morocco | Dancing with Lions',
    description: '13 kilometres between continents. 40,000 deaths since 2014. The human geography of crossing.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/migration-routes' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Migration Routes Through Morocco',
    description: 'Sub-Saharan migration corridors. Western Mediterranean and Atlantic routes. Ceuta and Melilla. Transit cities. SNIA policy. 10,457 dead or missing in 2024.',
    url: 'https://dancingwiththelions.com/data/migration-routes',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Demographics & Society',
    keywords: 'migration, migrants, refugees, asylum, sub-Saharan, Africa, Spain, Ceuta',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 058 — Migration Routes Through Morocco',
    description: 'Sub-Saharan migration corridors. Western Mediterranean and Atlantic routes. Ceuta and Melilla. Transit cities. SNIA policy. 10,457 dead or missing in 2024.',
    url: 'https://dancingwiththelions.com/data/migration-routes',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: "migration, migrants, refugees, asylum, sub-Saharan, Africa, Spain, Ceuta",
    isAccessibleForFree: true,
    inLanguage: 'en',
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />
      {children}
    </>
  )
}