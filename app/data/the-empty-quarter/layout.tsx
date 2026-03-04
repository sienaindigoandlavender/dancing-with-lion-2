import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Empty Quarter — Saharan Ecology & Desert Geography | Dancing with Lions',
  description: 'The Sahara is not empty. Sand dunes, rock platforms, oases, and adapted life. Climate data and the geography of North Africa's desert systems from Morocco to Egypt.',
  openGraph: {
    title: 'The Empty Quarter — Saharan Ecology & Desert Geography | Dancing with Lions',
    description: 'The Sahara is not empty. Sand dunes, rock platforms, oases, and adapted life. Climate data and the geography of North Africa's desert systems from Morocco to Egypt.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/the-empty-quarter' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Empty Quarter',
    description: 'The Saharan nations compared. Morocco, Algeria, Libya, Egypt, Mauritania. How much of each country is desert. The empty quarter of North Africa.',
    url: 'https://dancingwiththelions.com/data/the-empty-quarter',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Geography & Environment',
    keywords: 'Sahara, desert, empty, Algeria, Libya, Egypt, Mauritania, comparison',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 100 — The Empty Quarter',
    description: 'The Saharan nations compared. Morocco, Algeria, Libya, Egypt, Mauritania. How much of each country is desert. The empty quarter of North Africa.',
    url: 'https://dancingwiththelions.com/data/the-empty-quarter',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ['Sahara', 'desert', 'empty', 'Algeria', 'Libya', 'Egypt', 'Mauritania', 'comparison'],
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