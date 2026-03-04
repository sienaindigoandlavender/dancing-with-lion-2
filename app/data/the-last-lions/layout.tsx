import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Last Lions — The Atlas Lion, from Roman Arena to Royal Zoo | Dancing with Lions',
  description: 'The Barbary lion ruled North Africa for 100,000 years. Romans dragged thousands to the Colosseum. Moroccan kings kept them as symbols of power. By 1942, the last one was shot in the Atlas Mountains. ~90 descendants survive in zoos. This is their map.',
  openGraph: {
    title: 'The Last Lions',
    description: 'The Atlas lion. From the Colosseum to extinction to the royal zoo. A data story.',
    type: 'article',
  },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Last Lions',
    description: 'The Atlas/Barbary lion — Panthera leo leo. 100,000 years in North Africa, extinct by the 1960s. ~90 descendants survive in zoos. Historic range mapped, last sightings tracked, zoo breeding network, size comparison (Barbary vs Asiatic vs African), and global lion population collap',
    url: 'https://dancingwiththelions.com/data/the-last-lions',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Geography & Environment',
    keywords: 'Barbary lion, Atlas lion, extinction, Morocco, Rabat Zoo, royal lion, conservation, breeding',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 121 — The Last Lions',
    description: 'The Atlas/Barbary lion — Panthera leo leo. 100,000 years in North Africa, extinct by the 1960s. ~90 descendants survive in zoos. Historic range mapped, last sightings tracked, zoo breeding network, size comparison (Barbary vs Asiatic vs African), and global lion population collap',
    url: 'https://dancingwiththelions.com/data/the-last-lions',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: "Barbary lion, Atlas lion, extinction, Morocco, Rabat Zoo, royal lion, conservation, breeding",
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