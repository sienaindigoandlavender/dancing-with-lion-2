import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Moroccan Calendar — Culture & Identity | Dancing with Lions',
  description: 'Three calendars in one country. Gregorian, Hijri, Amazigh. Festivals, harvests, and sacred dates mapped through the year.',
  openGraph: {
    title: 'The Moroccan Calendar | Dancing with Lions',
    description: 'Three calendars in one country. Gregorian, Hijri, Amazigh. Festivals, harvests, and sacred dates mapped through the year.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/moroccan-calendar' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Moroccan Calendar',
    description: 'Three calendars in one country. Gregorian, Hijri, Amazigh. Festivals, harvests, and sacred dates mapped through the year.',
    url: 'https://dancingwiththelions.com/data/moroccan-calendar',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Culture & Identity',
    keywords: 'calendar, Hijri, Amazigh, Gregorian, festivals, Ramadan, Yennayer, Eid',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 091 — The Moroccan Calendar',
    description: 'Three calendars in one country. Gregorian, Hijri, Amazigh. Festivals, harvests, and sacred dates mapped through the year.',
    url: 'https://dancingwiththelions.com/data/moroccan-calendar',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: "calendar, Hijri, Amazigh, Gregorian, festivals, Ramadan, Yennayer, Eid",
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