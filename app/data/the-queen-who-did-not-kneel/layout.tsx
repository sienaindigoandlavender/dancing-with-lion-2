import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Queen Who Did Not Kneel — Bilqis and the Geopolitics Behind the Visit | Dancing with Lions',
  description: 'Bilqis ruled the wealthiest trade monopoly on earth. She controlled the only product the ancient world could not live without. She did not go to Jerusalem because she was smitten. She went because Solomon was building a fleet that would destroy her economy.',
  openGraph: {
    title: 'The Queen Who Did Not Kneel',
    description: 'Bilqis, the Incense Road, and the geopolitics behind the visit to Solomon.',
    type: 'article',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/the-queen-who-did-not-kneel' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Queen Who Did Not Kneel',
    description: 'Bilqis and the geopolitics behind the visit. The Queen of Sheba in three traditions: Hebrew Bible (1 Kings 10), Quran (Surah An-Naml 27), and Ethiopian Kebra Nagast. Not a love story — a trade negotiation between two powers controlling the incense route. Sheba controlled frankinc',
    url: 'https://dancingwiththelions.com/data/the-queen-who-did-not-kneel',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Cultural Intelligence',
    keywords: 'Bilqis, Queen of Sheba, Sheba, Solomon, Ethiopia, Yemen, Saba, Marib',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 165 — The Queen Who Did Not Kneel',
    description: 'Bilqis and the geopolitics behind the visit. The Queen of Sheba in three traditions: Hebrew Bible (1 Kings 10), Quran (Surah An-Naml 27), and Ethiopian Kebra Nagast. Not a love story — a trade negotiation between two powers controlling the incense route. Sheba controlled frankinc',
    url: 'https://dancingwiththelions.com/data/the-queen-who-did-not-kneel',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ["Bilqis", "Queen of Sheba", "Sheba", "Solomon", "Ethiopia", "Yemen", "Saba", "Marib"],
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