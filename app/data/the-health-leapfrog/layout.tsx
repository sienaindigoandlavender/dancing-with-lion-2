import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'The Health Leapfrog — Drones, mRNA Hubs, and Community Health Workers Rewriting African Medicine | Dancing with Lions',
  description: 'Rwanda Zipline drones deliver blood faster than ambulances. Africa building mRNA vaccine hubs. 1M+ community health workers. Disease burden meets innovation. Investment-grade health intelligence by Dancing with Lions.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Health Leapfrog',
    description: 'Africa carries 25% of global disease burden with 3% of health workers. Zipline drones made 70M+ deliveries across Rwanda, Ghana, Kenya, Nigeria. Six mRNA vaccine hubs being built. 1M+ community health workers deployed. Disease burden bars: malaria 95% of global deaths, HIV 65% bu',
    url: 'https://dancingwiththelions.com/data/the-health-leapfrog',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Africa Progression',
    keywords: 'health, healthcare, disease, malaria, HIV, AIDS, TB, tuberculosis',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 160 — The Health Leapfrog',
    description: 'Africa carries 25% of global disease burden with 3% of health workers. Zipline drones made 70M+ deliveries across Rwanda, Ghana, Kenya, Nigeria. Six mRNA vaccine hubs being built. 1M+ community health workers deployed. Disease burden bars: malaria 95% of global deaths, HIV 65% bu',
    url: 'https://dancingwiththelions.com/data/the-health-leapfrog',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ["health", "healthcare", "disease", "malaria", "HIV", "AIDS", "TB", "tuberculosis"],
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