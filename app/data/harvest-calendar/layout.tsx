import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Harvest Calendar — Living Data | Dancing with Lions',
  description: 'A living clock of Moroccan agriculture. 32 crops, auto-highlights current month, play/pause.',
  openGraph: {
    title: 'The Harvest Calendar | Dancing with Lions',
    description: 'A living clock of Moroccan agriculture. 32 crops, auto-highlights current month, play/pause.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/harvest-calendar' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Harvest Calendar',
    description: 'A living clock of Moroccan agriculture. 32 crops, auto-highlights current month, play/pause.',
    url: 'https://dancingwiththelions.com/data/harvest-calendar',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Living Data',
    keywords: 'harvest, agriculture, seasonal, crops, farming, calendar, live, monthly',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 053 — The Harvest Calendar',
    description: 'A living clock of Moroccan agriculture. 32 crops, auto-highlights current month, play/pause.',
    url: 'https://dancingwiththelions.com/data/harvest-calendar',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ["harvest", "agriculture", "seasonal", "crops", "farming", "calendar", "live", "monthly"],
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