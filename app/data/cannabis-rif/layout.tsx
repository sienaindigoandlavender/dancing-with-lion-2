import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cannabis & the Rif — Morocco\'s Other Cash Crop | Dancing with Lions',
  description: 'The Rif Mountains produce 70% of Europe\'s hashish. 400,000+ people in the trade. Five centuries of cultivation. Law 13-21 legalization. History, economics, geography.',
  openGraph: {
    title: 'Cannabis & the Rif | Dancing with Lions',
    description: 'From Sultan Hassan I\'s 1890 tribal privileges to Law 13-21. The economics, history, and politics of Morocco\'s most controversial crop.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/cannabis-rif' },
}

export default function CannabisRifLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cannabis & the Rif — Morocco\\',
    description: 'The Rif Mountains produce 70% of Europe\\',
    url: 'https://dancingwiththelions.com/data/cannabis-rif',
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