import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Sahel War — JNIM, ISSP & the Collapse of the Center | Dancing with Lions',
  description: '10,400+ dead in 2024. 51% of global terrorism deaths. JNIM encircling Bamako. ISSP expanding south. Every foreign intervention collapsed. Structured intelligence by Dancing with Lions.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Sahel War — JNIM, ISSP and the Collapse of the Sahel',
    description: 'JNIM and ISSP in the Sahel. 10,400+ dead in 2024. 51% of global terrorism deaths. Territorial control data for Mali, Burkina Faso, and Niger.',
    url: 'https://dancingwiththelions.com/data/the-sahel-war',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Security & Conflict Intelligence',
    keywords: 'JNIM, ISSP, Sahel, Mali, Burkina Faso, Niger, terrorism, jihadist',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
