import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Calendar of Light — Living Data | Dancing with Lions',
  description: 'Daylight hours by month across Morocco. Latitude, solar angle, golden hour. The astronomical calendar that shapes daily life.',
  openGraph: {
    title: 'The Calendar of Light | Dancing with Lions',
    description: 'Daylight hours by month across Morocco. Latitude, solar angle, golden hour. The astronomical calendar that shapes daily life.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/calendar-of-light' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Calendar of Light',
    description: 'Daylight hours by month across Morocco. Latitude, solar angle, golden hour. The astronomical calendar that shapes daily life.',
    url: 'https://dancingwiththelions.com/data/calendar-of-light',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Living Data',
    keywords: 'daylight, light, solar, astronomy, latitude, golden hour, calendar, sun',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 111 — The Calendar of Light',
    description: 'Daylight hours by month across Morocco. Latitude, solar angle, golden hour. The astronomical calendar that shapes daily life.',
    url: 'https://dancingwiththelions.com/data/calendar-of-light',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ["daylight", "light", "solar", "astronomy", "latitude", "golden hour", "calendar", "sun"],
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