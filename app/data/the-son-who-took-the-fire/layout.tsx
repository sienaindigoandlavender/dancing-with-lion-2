import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Son Who Took the Fire — Menelik I and the Kebra Nagast | Dancing with Lions',
  description: 'How a boy\'s journey to Jerusalem became the constitutional basis for 700 years of Ethiopian monarchy. The Kebra Nagast, the Ark of the Covenant, and the most successful political myth in human history.',
  openGraph: {
    title: 'The Son Who Took the Fire',
    description: 'Menelik I, the Ark of the Covenant, and 704 years of Solomonic dynasty.',
    type: 'article',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/the-son-who-took-the-fire' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Son Who Took the Fire — Menelik I and the Kebra Nagast | Dancing with Lions',
    description: 'How a boy\\',
    url: 'https://dancingwiththelions.com/data/the-son-who-took-the-fire',
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