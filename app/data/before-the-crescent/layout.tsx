import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Before the Crescent — Morocco Before Islam | Dancing with Lions',
  description: '315,000 years of Morocco before Islam. Homo sapiens, Amazigh, Phoenicians, Carthage, Rome, Vandals, Byzantines. Six civilizations. The Amazigh outlasted them all.',
  openGraph: {
    title: 'Before the Crescent — Morocco Before Islam',
    description: '315,000 years. Six civilizations. Each one left a layer. The Amazigh outlasted them all.',
    type: 'article',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/before-the-crescent' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Before the Crescent',
    description: '315,000 years of Morocco before Islam. Homo sapiens at Jebel Irhoud, Amazigh confederations, Phoenician traders, Carthage, Rome, Vandals, Byzantines. Six civilizations. The Amazigh outlasted them all.',
    url: 'https://dancingwiththelions.com/data/before-the-crescent',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'History',
    keywords: 'pre-Islamic, Jebel Irhoud, Homo sapiens, Amazigh, Berber, Phoenician, Carthage, Rome',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 060 — Before the Crescent',
    description: '315,000 years of Morocco before Islam. Homo sapiens at Jebel Irhoud, Amazigh confederations, Phoenician traders, Carthage, Rome, Vandals, Byzantines. Six civilizations. The Amazigh outlasted them all.',
    url: 'https://dancingwiththelions.com/data/before-the-crescent',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ['pre-Islamic', 'Jebel Irhoud', 'Homo sapiens', 'Amazigh', 'Berber', 'Phoenician', 'Carthage', 'Rome'],
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