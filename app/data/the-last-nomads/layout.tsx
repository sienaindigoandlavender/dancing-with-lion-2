import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Last Nomads — Dancing with Lions',
  description: '12 nomadic peoples across 4 continents. 30–40 million humans still move with the seasons. Amazigh, Tuareg, Bedouin, Fulani, Maasai, Sámi, Mongolian, Sahrawi, Qashqai, Dukha, Kuchi, Rabari. Morocco\'s nomads declined 97% from 1935 to 2014. Data, decline, convergent patterns.',
  openGraph: {
    title: 'The Last Nomads — Dancing with Lions',
    description: '12 peoples. 4 continents. One ancient answer to how humans relate to land. 30–40 million still move. They are disappearing — not because the lifestyle failed, but because every border was drawn for people who stay put.',
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Last Nomads — Dancing with Lions',
    description: '12 nomadic peoples across 4 continents. 30–40 million humans still move with the seasons. Amazigh, Tuareg, Bedouin, Fulani, Maasai, Sámi, Mongolian, Sahrawi, Qashqai, Dukha, Kuchi, Rabari. Morocco\\',
    url: 'https://dancingwiththelions.com/data/the-last-nomads',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}