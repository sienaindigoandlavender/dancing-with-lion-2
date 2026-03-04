import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ramadan & the Moon — Dancing with Lions',
  description: 'How the lunar calendar shapes Ramadan. 30 moon phases, the 33-year seasonal rotation, and fasting hours across decades — visualized for Marrakech.',
  openGraph: {
    title: 'Ramadan & the Moon — Dancing with Lions',
    description: 'The Islamic calendar is purely lunar. Ramadan drifts backward through the seasons, completing a full rotation every 33 years.',
    type: 'article',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/ramadan-moon' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Ramadan Moon',
    description: 'Hijri calendar, prayer times, ftour traditions, Laylat al-Qadr countdown.',
    url: 'https://dancingwiththelions.com/data/ramadan-moon',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Living Data',
    keywords: 'ramadan, islam, prayer, fasting, ftour, mosque, calendar, hijri',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 024 — Ramadan Moon',
    description: 'Hijri calendar, prayer times, ftour traditions, Laylat al-Qadr countdown.',
    url: 'https://dancingwiththelions.com/data/ramadan-moon',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    ["ramadan", "islam", "prayer", "fasting", "ftour", "mosque", "calendar", "hijri"],
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