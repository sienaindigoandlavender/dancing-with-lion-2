import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Argan Triangle — UNESCO Biosphere, Cooperatives, Oil Economy | Dancing with Lions',
  description: '830,000 hectares. 20 million trees. The only place on earth argan grows. Cooperatives, cosmetics, cooking — the women-led economy of liquid gold.',
  openGraph: {
    title: 'The Argan Triangle | Dancing with Lions',
    description: 'UNESCO biosphere reserve. 20 million trees. 688 women\'s cooperatives. Morocco\'s liquid gold economy.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/argan-triangle' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Argan Triangle',
    description: 'UNESCO biosphere reserve. The only place on earth argan trees grow. Cooperatives, cosmetics, cooking.',
    url: 'https://dancingwiththelions.com/data/argan-triangle',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Geography & Environment',
    keywords: 'argan, oil, souss, essaouira, cooperatives, women, unesco, cosmetics',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 026 — The Argan Triangle',
    description: 'UNESCO biosphere reserve. The only place on earth argan trees grow. Cooperatives, cosmetics, cooking.',
    url: 'https://dancingwiththelions.com/data/argan-triangle',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ['argan', 'oil', 'souss', 'essaouira', 'cooperatives', 'women', 'unesco', 'cosmetics'],
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