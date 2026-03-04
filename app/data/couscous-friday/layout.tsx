import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Couscous Friday — The Sacred Meal | Dancing with Lions',
  description: 'Morocco\'s Friday ritual. Seven variations, six-step technique, the communal platter, life events, Maghreb styles. UNESCO 2020. Kseksu. Tfaya. Lben.',
  openGraph: {
    title: 'Couscous Friday | Dancing with Lions',
    description: 'The sacred Friday meal. Regional variations, three-steam technique, and the social contract around a shared dish.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/couscous-friday' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Couscous Friday',
    description: 'The sacred Friday meal. Seven regional variations, three-steam technique, communal platter. UNESCO 2020.',
    url: 'https://dancingwiththelions.com/data/couscous-friday',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Food & Agriculture',
    keywords: 'couscous, Friday, seksu, tfaya, seffa, UNESCO, Amazigh, communal',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 040 — Couscous Friday',
    description: 'The sacred Friday meal. Seven regional variations, three-steam technique, communal platter. UNESCO 2020.',
    url: 'https://dancingwiththelions.com/data/couscous-friday',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    ["couscous", "Friday", "seksu", "tfaya", "seffa", "UNESCO", "Amazigh", "communal"],
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