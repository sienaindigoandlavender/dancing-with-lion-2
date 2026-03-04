import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Tagine Atlas — Regional Variations Mapped | Dancing with Lions',
  description: 'Marrakech lamb-prune, Fes chicken-olive, coastal fish chermoula, Berber mountain, kefta mkaouara. 10 regional tagine styles, 8 essential spices, the vessel, the rules.',
  openGraph: {
    title: 'The Tagine Atlas | Dancing with Lions',
    description: '10 regional tagine styles mapped across Morocco. Spice pantry, vessel science, cultural rules of the communal pot.',
    siteName: 'Dancing with Lions',
  },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Tagine Atlas',
    description: 'Regional tagine variations mapped. Marrakech lamb-prune, Fes chicken-olive, coastal fish chermoula, Berber mountain.',
    url: 'https://dancingwiththelions.com/data/tagine-atlas',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Food & Agriculture',
    keywords: 'tagine, food, cooking, lamb, chicken, fish, spice, saffron',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 043 — The Tagine Atlas',
    description: 'Regional tagine variations mapped. Marrakech lamb-prune, Fes chicken-olive, coastal fish chermoula, Berber mountain.',
    url: 'https://dancingwiththelions.com/data/tagine-atlas',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ["tagine", "food", "cooking", "lamb", "chicken", "fish", "spice", "saffron"],
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