import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'The Energy Paradox — 60% of the World\'s Sunshine. 3% of the Financing. 600 Million in the Dark. | Dancing with Lions',
  description: 'Africa holds 60% of the world\'s best solar resources yet attracts less than 3% of energy financing. 600M lack electricity. Morocco Noor, Egypt Benban, Ethiopia GERD, Kenya geothermal. 71 GW installed, 300 GW target. Off-grid solar revolution. Investment-grade energy intelligence by Dancing with Lions.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Energy Paradox',
    description: 'Africa holds 60% of the world best solar resources yet attracts less than 3% of global energy financing. 600 million people lack electricity. 48 sub-Saharan countries produce same electricity as Spain. Four visualizations: paradox chart (resources vs access rates by country from ',
    url: 'https://dancingwiththelions.com/data/the-energy-paradox',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Africa Progression',
    keywords: 'energy, solar, wind, hydro, geothermal, electricity, access, paradox',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 157 — The Energy Paradox',
    description: 'Africa holds 60% of the world best solar resources yet attracts less than 3% of global energy financing. 600 million people lack electricity. 48 sub-Saharan countries produce same electricity as Spain. Four visualizations: paradox chart (resources vs access rates by country from ',
    url: 'https://dancingwiththelions.com/data/the-energy-paradox',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    ["energy", "solar", "wind", "hydro", "geothermal", "electricity", "access", "paradox"],
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