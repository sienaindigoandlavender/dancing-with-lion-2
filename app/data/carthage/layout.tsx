import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Carthage Must Be Destroyed — History | Dancing with Lions',
  description: 'The Carthaginian Empire. Punic Wars, trade routes, North African territories. From Hannibal to the fall. Mapped and told.',
  openGraph: {
    title: 'Carthage Must Be Destroyed | Dancing with Lions',
    description: 'The Carthaginian Empire. Punic Wars, trade routes, North African territories. From Hannibal to the fall. Mapped and told.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/carthage' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Carthage Must Be Destroyed',
    description: 'The Carthaginian Empire. Punic Wars, trade routes, North African territories. From Hannibal to the fall. Mapped and told.',
    url: 'https://dancingwiththelions.com/data/carthage',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'History',
    keywords: 'Carthage, Punic, Hannibal, Rome, Tunisia, trade, Mediterranean, war',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 075 — Carthage Must Be Destroyed',
    description: 'The Carthaginian Empire. Punic Wars, trade routes, North African territories. From Hannibal to the fall. Mapped and told.',
    url: 'https://dancingwiththelions.com/data/carthage',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ["Carthage", "Punic", "Hannibal", "Rome", "Tunisia", "trade", "Mediterranean", "war"],
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