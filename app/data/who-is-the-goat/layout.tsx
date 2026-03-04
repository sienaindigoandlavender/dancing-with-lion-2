import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Who Is the GOAT? — History | Dancing with Lions',
  description: 'Marco Polo vs Ibn Battuta. Two travellers, two centuries, two journeys. Who covered more ground? The data decides.',
  openGraph: {
    title: 'Who Is the GOAT? | Dancing with Lions',
    description: 'Marco Polo vs Ibn Battuta. Two travellers, two centuries, two journeys. Who covered more ground? The data decides.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/who-is-the-goat' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Who Is the GOAT?',
    description: 'Marco Polo vs Ibn Battuta. Two travellers, two centuries, two journeys. Who covered more ground? The data decides.',
    url: 'https://dancingwiththelions.com/data/who-is-the-goat',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'History',
    keywords: 'Ibn Battuta, Marco Polo, travel, explorer, comparison, GOAT, journey, distance',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 106 — Who Is the GOAT?',
    description: 'Marco Polo vs Ibn Battuta. Two travellers, two centuries, two journeys. Who covered more ground? The data decides.',
    url: 'https://dancingwiththelions.com/data/who-is-the-goat',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    ["Ibn Battuta", "Marco Polo", "travel", "explorer", "comparison", "GOAT", "journey", "distance"],
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