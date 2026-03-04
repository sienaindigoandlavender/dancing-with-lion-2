import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'From the Land of the Setting Sun — The Amazigh in the Bible | Dancing with Lions',
  description: 'Before there was Africa, there was the Maghreb — the land where the sun sets. The people who lived there appear in the oldest book in the Western world. They sacked Solomon\'s temple. They carried Christ\'s cross. They built Latin Christianity. Three of them became Pope. This is what the Bible says about the Imazighen.',
  openGraph: {
    title: 'From the Land of the Setting Sun',
    description: 'The Amazigh in the Bible. Warriors, theologians, popes. The story nobody has assembled.',
    type: 'article',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/from-the-land-of-the-setting-sun' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'From the Land of the Setting Sun — The Amazigh in the Bible | Dancing with Lions',
    description: 'Before there was Africa, there was the Maghreb — the land where the sun sets. The people who lived there appear in the oldest book in the Western world. They sacked Solomon\\',
    url: 'https://dancingwiththelions.com/data/from-the-land-of-the-setting-sun',
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