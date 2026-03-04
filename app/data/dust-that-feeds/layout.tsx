import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Dust That Feeds — How the Sahara Keeps the Amazon Alive — Dancing with Lions",
  description: "182 million tons of Saharan dust cross the Atlantic every year. 27.7 million tons fall on the Amazon. 22,000 tons of phosphorus replace exactly what the rainforest loses to rain. The dead life of an ancient African lake feeds the largest living forest on earth.",
  openGraph: {
    title: "The Dust That Feeds — How the Sahara Keeps the Amazon Alive",
    description: "182 million tons. 5,000 km. 22,000 tons of phosphorus. The Sahara and the Amazon are connected by an invisible river of dust.",
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/dust-that-feeds' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Dust That Feeds',
    description: '182 million tons of Saharan dust cross the Atlantic every year. 27.7 million tons fall on the Amazon. 22,000 tons of phosphorus replace exactly what the rainforest loses to rain. The dead life of an ancient African lake feeds the largest living forest on earth.',
    url: 'https://dancingwiththelions.com/data/dust-that-feeds',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Geography & Environment',
    keywords: 'Sahara, Amazon, dust, phosphorus, Bodele, Chad, CALIPSO, NASA',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 114 — The Dust That Feeds',
    description: '182 million tons of Saharan dust cross the Atlantic every year. 27.7 million tons fall on the Amazon. 22,000 tons of phosphorus replace exactly what the rainforest loses to rain. The dead life of an ancient African lake feeds the largest living forest on earth.',
    url: 'https://dancingwiththelions.com/data/dust-that-feeds',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    ["Sahara", "Amazon", "dust", "phosphorus", "Bodele", "Chad", "CALIPSO", "NASA"],
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