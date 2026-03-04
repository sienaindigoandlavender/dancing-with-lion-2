import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Stone Language — When Every Culture Stacks Rocks | Dancing with Lions',
  description: 'Kerkour in the Atlas. Inuksuit in the Arctic. Ovoo in Mongolia. Apachetas in the Andes. When the landscape has no trees, no wood, no signposts — humans stack rocks. The same solution, invented independently at least nine times across five continents. Not a connection. A proof.',
    alternates: { canonical: 'https://dancingwiththelions.com/data/the-stone-language' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Stone Language',
    description: 'When every culture stacks rocks. Cairns appear independently on every inhabited continent — navigation markers, burial mounds, territorial boundaries, sacred sites, memorials. Inuksuit (Inuit), apachetas (Andes), ovoo (Mongolia), pilas (Ethiopia), tumuli (Europe). No contact betw',
    url: 'https://dancingwiththelions.com/data/the-stone-language',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Cultural Intelligence',
    keywords: 'cairn, stone, inukshuk, Inuit, apacheta, Andes, ovoo, Mongolia',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 169 — The Stone Language',
    description: 'When every culture stacks rocks. Cairns appear independently on every inhabited continent — navigation markers, burial mounds, territorial boundaries, sacred sites, memorials. Inuksuit (Inuit), apachetas (Andes), ovoo (Mongolia), pilas (Ethiopia), tumuli (Europe). No contact betw',
    url: 'https://dancingwiththelions.com/data/the-stone-language',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ["cairn", "stone", "inukshuk", "Inuit", "apacheta", "Andes", "ovoo", "Mongolia"],
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