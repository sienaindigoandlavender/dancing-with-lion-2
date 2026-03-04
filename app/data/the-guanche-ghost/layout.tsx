import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Guanche Ghost — Europe\'s First Colonial Genocide | Dancing with Lions',
  description: 'The Berbers of the Atlantic. Amazigh people reached the Canary Islands before the 5th century BCE, forgot how to build boats, and lived in isolation for 2,000 years. In 1402, the Spanish came. By 1600, the Guanche were gone. Their DNA survived. Their language did not. Except for one thing: a whistle that carries 5 km across volcanic ravines.',
  openGraph: {
    title: 'The Guanche Ghost',
    description: 'Amazigh DNA in the Atlantic. Europe\'s first colonial genocide. The people who forgot the sea.',
    type: 'article',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Guanche Ghost — Europe\\',
    description: 'The Berbers of the Atlantic. Amazigh people reached the Canary Islands before the 5th century BCE, forgot how to build boats, and lived in isolation for 2,000 years. In 1402, the Spanish came. By 1600, the Guanche were gone. Their DNA survived. Their',
    url: 'https://dancingwiththelions.com/data/the-guanche-ghost',
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