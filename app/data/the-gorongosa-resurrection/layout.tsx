import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'The Gorongosa Resurrection — Six Lions Became Two Hundred | Dancing with Lions',
  description: 'Civil war killed 95% of the wildlife. One man spent $100 million. Nature did the rest. 10,000 animals became 110,000. The most dramatic wildlife recovery in modern conservation. Investment-grade cultural intelligence by Dancing with Lions.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Gorongosa Resurrection',
    description: 'Civil war killed 95% of the wildlife. One man spent $100 million. Nature did the rest. 10,000 animals became 110,000 in twenty years. Six lions became 210. The most dramatic wildlife recovery in modern conservation. Four visualizations: destruction and recovery timeline (1960-202',
    url: 'https://dancingwiththelions.com/data/the-gorongosa-resurrection',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Conservation Economics',
    keywords: 'Gorongosa, Mozambique, Greg Carr, Carr Foundation, civil war, wildlife recovery, lion, elephant',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 151 — The Gorongosa Resurrection',
    description: 'Civil war killed 95% of the wildlife. One man spent $100 million. Nature did the rest. 10,000 animals became 110,000 in twenty years. Six lions became 210. The most dramatic wildlife recovery in modern conservation. Four visualizations: destruction and recovery timeline (1960-202',
    url: 'https://dancingwiththelions.com/data/the-gorongosa-resurrection',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    ["Gorongosa", "Mozambique", "Greg Carr", "Carr Foundation", "civil war", "wildlife recovery", "lion", "elephant"],
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