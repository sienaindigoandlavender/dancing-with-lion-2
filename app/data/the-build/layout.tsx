import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Build — Morocco Infrastructure Timeline 2004–2030 — Dancing with Lions',
  description: 'Watch Morocco construct itself. 27 years of infrastructure: highways from 560km to 3,000km, Africa\'s first high-speed rail, airport capacity doubled, hotel rooms tripled, tourist arrivals from 5.5M to 26M. Animated timeline. Press play.',
  openGraph: {
    title: 'The Build — Watch Morocco Construct Itself',
    description: 'Highway km. Rail km. Airport capacity. Hotel rooms. Tourist arrivals. 27 years, animated. Then the World Cup ramp goes vertical.',
    siteName: 'Dancing with Lions',
  },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Build',
    description: 'Watch Morocco construct itself. 27 years of infrastructure: highways, rail, airports, hotels, tourist arrivals. Animated timeline from 2004–2030.',
    url: 'https://dancingwiththelions.com/data/the-build',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Infrastructure',
    keywords: 'infrastructure, highways, TGV, airports, hotels, construction, timeline, development',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 072 — The Build',
    description: 'Watch Morocco construct itself. 27 years of infrastructure: highways, rail, airports, hotels, tourist arrivals. Animated timeline from 2004–2030.',
    url: 'https://dancingwiththelions.com/data/the-build',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: "infrastructure, highways, TGV, airports, hotels, construction, timeline, development",
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