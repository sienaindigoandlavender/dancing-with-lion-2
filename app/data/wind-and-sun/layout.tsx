import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wind & Sun — Morocco Renewable Energy Radial Map — Dancing with Lions',
  description: 'Morocco\'s renewable energy installations mapped as radial blooms. 14 solar, wind, and hydro plants. 3.8GW installed capacity. Each bloom shows monthly output — the shape tells you when the energy flows. 52% renewable target by 2030.',
  openGraph: {
    title: 'Wind & Sun — Morocco\'s Renewable Energy',
    description: '3,000 hours of sun. 60% wind capacity factor. 14 installations mapped as radial blooms. The shape IS the energy.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/wind-and-sun' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Wind & Sun',
    description: 'Morocco renewable energy installations mapped as radial blooms. 14 solar, wind, and hydro plants. 3.8GW installed. 52% renewable target by 2030.',
    url: 'https://dancingwiththelions.com/data/wind-and-sun',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Energy',
    keywords: 'renewable, solar, wind, energy, Noor, Ouarzazate, Tarfaya, hydro',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 073 — Wind & Sun',
    description: 'Morocco renewable energy installations mapped as radial blooms. 14 solar, wind, and hydro plants. 3.8GW installed. 52% renewable target by 2030.',
    url: 'https://dancingwiththelions.com/data/wind-and-sun',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    ["renewable", "solar", "wind", "energy", "Noor", "Ouarzazate", "Tarfaya", "hydro"],
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