import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Literary Morocco — Bowles, Burroughs, Choukri, Canetti | Dancing with Lions',
  description: '12 writers who lived, wrote, or set stories in Morocco. From Ibn Battuta to Tahar Ben Jelloun. The Interzone, the Beats, and Moroccan voices.',
  openGraph: {
    title: 'Literary Morocco | Dancing with Lions',
    description: 'Bowles, Burroughs, Choukri, Canetti, Mrabet, Genet, Eberhardt, Ben Jelloun. Morocco\'s literary geography.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/literary-morocco' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Literary Morocco',
    description: 'Writers who lived, wrote, or set stories in Morocco. Bowles, Burroughs, Choukri, Canetti, Mrabet, Genet, Eberhardt, Ben Jelloun.',
    url: 'https://dancingwiththelions.com/data/literary-morocco',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Culture & Identity',
    keywords: 'literature, writers, Bowles, Burroughs, Choukri, Canetti, Mrabet, Tangier',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 017 — Literary Morocco',
    description: 'Writers who lived, wrote, or set stories in Morocco. Bowles, Burroughs, Choukri, Canetti, Mrabet, Genet, Eberhardt, Ben Jelloun.',
    url: 'https://dancingwiththelions.com/data/literary-morocco',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: "literature, writers, Bowles, Burroughs, Choukri, Canetti, Mrabet, Tangier",
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