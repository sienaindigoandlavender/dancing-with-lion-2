import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Reconquista Exodus — History | Dancing with Lions',
  description: 'The Reconquista from 711 to 1614. The Christian reconquest of Iberia and the exodus of Muslims and Jews to Morocco and North Africa.',
  openGraph: {
    title: 'The Reconquista Exodus | Dancing with Lions',
    description: 'The Reconquista from 711 to 1614. The Christian reconquest of Iberia and the exodus of Muslims and Jews to Morocco and North Africa.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/reconquista-exodus' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Reconquista Exodus',
    description: 'The Reconquista from 711 to 1614. The Christian reconquest of Iberia and the exodus of Muslims and Jews to Morocco and North Africa.',
    url: 'https://dancingwiththelions.com/data/reconquista-exodus',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'History',
    keywords: 'Reconquista, exodus, Spain, al-Andalus, Moriscos, Jews, Sephardic, expulsion',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 064 — The Reconquista Exodus',
    description: 'The Reconquista from 711 to 1614. The Christian reconquest of Iberia and the exodus of Muslims and Jews to Morocco and North Africa.',
    url: 'https://dancingwiththelions.com/data/reconquista-exodus',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    ["Reconquista", "exodus", "Spain", "al-Andalus", "Moriscos", "Jews", "Sephardic", "expulsion"],
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