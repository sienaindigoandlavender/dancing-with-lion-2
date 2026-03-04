import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Solomon Knew — The Unified Knowledge System Before the Disciplines Fractured | Dancing with Lions',
  description: 'The Wisdom of Solomon contains a nine-domain syllabus: cosmology, chronology, astronomy, zoology, the invisible layer, psychology, botany, and pharmacology. One system. Root to star. Before the disciplines forgot they were one.',
    alternates: { canonical: 'https://dancingwiththelions.com/data/what-solomon-knew' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What Solomon Knew',
    description: 'The unified knowledge system before the disciplines fractured. Solomon as polymathic ideal — botany, zoology, architecture, metallurgy, diplomacy, jurisprudence, poetry. The Temple as engineering feat: 180,000 labourers, Phoenician architects, Lebanese cedar, copper from Timna. P',
    url: 'https://dancingwiththelions.com/data/what-solomon-knew',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Cultural Intelligence',
    keywords: 'Solomon, wisdom, knowledge, Temple, Jerusalem, Phoenicia, Hiram, cedar',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 164 — What Solomon Knew',
    description: 'The unified knowledge system before the disciplines fractured. Solomon as polymathic ideal — botany, zoology, architecture, metallurgy, diplomacy, jurisprudence, poetry. The Temple as engineering feat: 180,000 labourers, Phoenician architects, Lebanese cedar, copper from Timna. P',
    url: 'https://dancingwiththelions.com/data/what-solomon-knew',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    ["Solomon", "wisdom", "knowledge", "Temple", "Jerusalem", "Phoenicia", "Hiram", "cedar"],
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