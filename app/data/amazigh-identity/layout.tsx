import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Amazigh Identity Map — Dancing with Lions',
  description: 'Berber-speaking regions, Tifinagh script distribution, tribal territories, and language survival. Three languages, three confederations, 3,000 years of script.',
    alternates: { canonical: 'https://dancingwiththelions.com/data/amazigh-identity' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Amazigh Identity Map',
    description: 'Berber-speaking regions, Tifinagh script distribution, tribal territories, and language survival. Three languages. Three ancient confederations. 3,000 years of script. From 45% to 24.8%.',
    url: 'https://dancingwiththelions.com/data/amazigh-identity',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Culture & Identity',
    keywords: 'Amazigh, Berber, Tifinagh, Tashelhit, Tamazight, Tarifit, Rif, Souss',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 011 — Amazigh Identity Map',
    description: 'Berber-speaking regions, Tifinagh script distribution, tribal territories, and language survival. Three languages. Three ancient confederations. 3,000 years of script. From 45% to 24.8%.',
    url: 'https://dancingwiththelions.com/data/amazigh-identity',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    ["Amazigh", "Berber", "Tifinagh", "Tashelhit", "Tamazight", "Tarifit", "Rif", "Souss"],
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