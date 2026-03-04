import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'The Sahel War — JNIM, ISSP & the Collapse of the Center | Dancing with Lions',
  description: '10,400+ dead in 2024. 51% of global terrorism deaths. JNIM encircling Bamako. ISSP expanding south. Every foreign intervention collapsed. Structured intelligence by Dancing with Lions.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Sahel War',
    description: 'JNIM (al-Qaeda) and ISSP (ISIS) in the Sahel — 10,400+ dead in 2024, 51% of global terrorism deaths, tripled since 2021. Actor database for JNIM, ISSP, and Wagner/Africa Corps. Fatality escalation data, territorial control by country (60% of Burkina Faso, 50% of Mali outside stat',
    url: 'https://dancingwiththelions.com/data/the-sahel-war',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Security & Conflict Intelligence',
    keywords: 'JNIM, Jama\, , , , , , , , , , , , ',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 140 — The Sahel War',
    description: 'JNIM (al-Qaeda) and ISSP (ISIS) in the Sahel — 10,400+ dead in 2024, 51% of global terrorism deaths, tripled since 2021. Actor database for JNIM, ISSP, and Wagner/Africa Corps. Fatality escalation data, territorial control by country (60% of Burkina Faso, 50% of Mali outside stat',
    url: 'https://dancingwiththelions.com/data/the-sahel-war',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ['JNIM', 'Jama\', ', ', ', ', ', ', ', ', ', ', ', '],
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