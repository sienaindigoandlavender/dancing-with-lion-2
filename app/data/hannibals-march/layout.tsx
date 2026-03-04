import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hannibal\'s March — 37 Elephants Across the Alps | Dancing with Lions',
  description: 'In 218 BC, Hannibal Barca marched an army of 90,000 soldiers, 12,000 cavalry, and 37 war elephants from Carthage to Rome — 1,600 km overland through Spain, France, and over the Alps. Only one elephant survived. A data story mapping the route.',
  openGraph: {
    title: 'Hannibal\'s March',
    description: '37 elephants. 1,600 km. One of the greatest military gambits in history.',
    type: 'article',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/hannibals-march' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Hannibal\\',
    description: 'In 218 BC, Hannibal Barca marched an army of 90,000 soldiers, 12,000 cavalry, and 37 war elephants from Carthage to Rome — 1,600 km overland through Spain, France, and over the Alps. Only one elephant survived. A data story mapping the route.',
    url: 'https://dancingwiththelions.com/data/hannibals-march',
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