import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Where 17.4 Million Tourists Go — Dancing with Lions',
  description: 'Morocco tourism flow visualization: source countries → airports → destinations → spending categories. 17.4 million visitors in 2024, 112 billion MAD revenue.',
  openGraph: {
    title: 'Where 17.4 Million Tourists Go — Dancing with Lions',
    description: 'Follow the flow of 17.4 million visitors through Morocco. From Paris and Madrid to Marrakech and Agadir. From landing to spending.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/tourism-flow' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Where 17.4 Million Tourists Go',
    description: 'Morocco tourism flow: source countries → airports → destinations → spending. 17.4 million visitors in 2024, 112 billion MAD revenue.',
    url: 'https://dancingwiththelions.com/data/tourism-flow',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Tourism',
    keywords: 'tourism, flow, visitors, airports, destinations, spending, revenue, Marrakech',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 071 — Where 17.4 Million Tourists Go',
    description: 'Morocco tourism flow: source countries → airports → destinations → spending. 17.4 million visitors in 2024, 112 billion MAD revenue.',
    url: 'https://dancingwiththelions.com/data/tourism-flow',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ["tourism", "flow", "visitors", "airports", "destinations", "spending", "revenue", "Marrakech"],
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