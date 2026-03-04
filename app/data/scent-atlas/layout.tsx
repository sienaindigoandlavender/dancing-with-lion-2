import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Scent Atlas — Culture & Identity | Dancing with Lions',
  description: 'Morocco in scent. Rose water, orange blossom, cedar, argan, oud. Source, chemistry, and the olfactory map of the country.',
  openGraph: {
    title: 'The Scent Atlas | Dancing with Lions',
    description: 'Morocco in scent. Rose water, orange blossom, cedar, argan, oud. Source, chemistry, and the olfactory map of the country.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/scent-atlas' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Scent Atlas',
    description: 'Morocco in scent. Rose water, orange blossom, cedar, argan, oud. Source, chemistry, and the olfactory map of the country.',
    url: 'https://dancingwiththelions.com/data/scent-atlas',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Culture & Identity',
    keywords: 'scent, perfume, rose, orange blossom, cedar, argan, oud, attar',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 095 — The Scent Atlas',
    description: 'Morocco in scent. Rose water, orange blossom, cedar, argan, oud. Source, chemistry, and the olfactory map of the country.',
    url: 'https://dancingwiththelions.com/data/scent-atlas',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ["scent", "perfume", "rose", "orange blossom", "cedar", "argan", "oud", "attar"],
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