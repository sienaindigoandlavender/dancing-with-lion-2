import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Pulse of the Medina — Urban Life | Dancing with Lions',
  description: 'The medina as a living organism. Activity patterns, foot traffic, commerce rhythms. How the old city breathes through the day.',
  openGraph: {
    title: 'The Pulse of the Medina | Dancing with Lions',
    description: 'The medina as a living organism. Activity patterns, foot traffic, commerce rhythms. How the old city breathes through the day.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/pulse-medina' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Pulse of the Medina',
    description: 'The medina as a living organism. Activity patterns, foot traffic, commerce rhythms. How the old city breathes through the day.',
    url: 'https://dancingwiththelions.com/data/pulse-medina',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Urban Life',
    keywords: 'medina, pulse, activity, foot traffic, commerce, rhythm, urban, daily life',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 112 — The Pulse of the Medina',
    description: 'The medina as a living organism. Activity patterns, foot traffic, commerce rhythms. How the old city breathes through the day.',
    url: 'https://dancingwiththelions.com/data/pulse-medina',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ["medina", "pulse", "activity", "foot traffic", "commerce", "rhythm", "urban", "daily life"],
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