import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Al-Andalus Corridor — Dancing with Lions',
  description: 'One continuous cultural bridge from Seville to Fes. Architecture, music, food, language — four layers of shared DNA across 800 years.',
  openGraph: {
    title: 'Al-Andalus Corridor — Dancing with Lions',
    description: 'Interactive cultural DNA map: trace the horseshoe arch, the Andalusi nuba, the Arabic loanwords, and the shared cuisine from Seville to Fes.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/al-andalus' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Al-Andalus Corridor',
    description: 'One continuous cultural bridge from Seville to Fes. Architecture, music, food, language — four layers of shared DNA.',
    url: 'https://dancingwiththelions.com/data/al-andalus',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Culture & Identity',
    keywords: 'al-andalus, spain, seville, fes, architecture, music, food, language',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 003 — The Al-Andalus Corridor',
    description: 'One continuous cultural bridge from Seville to Fes. Architecture, music, food, language — four layers of shared DNA.',
    url: 'https://dancingwiththelions.com/data/al-andalus',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ['al-andalus', 'spain', 'seville', 'fes', 'architecture', 'music', 'food', 'language'],
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