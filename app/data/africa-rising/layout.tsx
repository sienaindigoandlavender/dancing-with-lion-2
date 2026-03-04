import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Africa Rising — Economy & Trade | Dancing with Lions',
  description: 'Morocco ranked among 54 African nations. Bump chart showing competitiveness across GDP, tourism, infrastructure, education, and investment.',
  openGraph: {
    title: 'Africa Rising | Dancing with Lions',
    description: 'Morocco ranked among 54 African nations. Bump chart showing competitiveness across GDP, tourism, infrastructure, education, and investment.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/africa-rising' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Africa Rising',
    description: 'Morocco ranked among 54 African nations. Bump chart showing competitiveness across GDP, tourism, infrastructure, education, and investment.',
    url: 'https://dancingwiththelions.com/data/africa-rising',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Economy & Trade',
    keywords: 'Africa, ranking, competitiveness, GDP, tourism, infrastructure, investment, continent',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 068 — Africa Rising',
    description: 'Morocco ranked among 54 African nations. Bump chart showing competitiveness across GDP, tourism, infrastructure, education, and investment.',
    url: 'https://dancingwiththelions.com/data/africa-rising',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ['Africa', 'ranking', 'competitiveness', 'GDP', 'tourism', 'infrastructure', 'investment', 'continent'],
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