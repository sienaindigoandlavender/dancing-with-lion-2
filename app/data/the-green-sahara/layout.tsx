import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Green Sahara — When the Desert Was a Garden | Dancing with Lions',
  description: '11,000 years ago the Sahara was green. Rivers ran through it. Hippos swam in it. Lake Mega-Chad covered 400,000 km² — larger than all the Great Lakes combined. Then the earth wobbled, the monsoon shifted, and the garden became a desert. The diatoms that lived in Mega-Chad are now dust. That dust feeds the Amazon.',
  openGraph: {
    title: 'The Green Sahara',
    description: 'The world before the dust. 9 million km² of rivers, lakes, and grasslands — gone in centuries.',
    type: 'article',
  },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Green Sahara',
    description: '11,000 years ago the Sahara was green. Rivers ran through it. Hippos swam in it. Lake Mega-Chad covered 400,000 km² — larger than all the Great Lakes combined. Then the earth wobbled, the monsoon shifted, and the garden became a desert in 200 years. The diatoms that lived in Mega',
    url: 'https://dancingwiththelions.com/data/the-green-sahara',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Geography & Environment',
    keywords: 'Green Sahara, African Humid Period, Mega-Chad, Bodélé, diatoms, dust, Amazon, monsoon',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 124 — The Green Sahara',
    description: '11,000 years ago the Sahara was green. Rivers ran through it. Hippos swam in it. Lake Mega-Chad covered 400,000 km² — larger than all the Great Lakes combined. Then the earth wobbled, the monsoon shifted, and the garden became a desert in 200 years. The diatoms that lived in Mega',
    url: 'https://dancingwiththelions.com/data/the-green-sahara',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ["Green Sahara", "African Humid Period", "Mega-Chad", "Bodélé", "diatoms", "dust", "Amazon", "monsoon"],
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