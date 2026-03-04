import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Churches That Swallowed the Mountain — Lalibela | Dancing with Lions',
  description: 'Eleven churches carved downward into living rock by the dynasty the Solomonic myth was written to erase. 800 years later, they are still holding services.',
  openGraph: {
    title: 'The Churches That Swallowed the Mountain',
    description: 'Lalibela, the Zagwe Dynasty, and the architecture that survived its own erasure.',
    type: 'article',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Churches That Swallowed the Mountain — Lalibela | Dancing with Lions',
    description: 'Eleven churches carved downward into living rock by the dynasty the Solomonic myth was written to erase. 800 years later, they are still holding services.',
    url: 'https://dancingwiththelions.com/data/the-churches-that-swallowed-the-mountain',
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