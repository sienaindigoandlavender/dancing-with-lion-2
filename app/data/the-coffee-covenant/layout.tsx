import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Coffee Covenant — From Kaffa to the World | Dancing with Lions',
  description: 'Ethiopia is where coffee began — and where wild Coffea arabica still grows. $2.65 billion in exports (2024 record). 2.25 billion cups consumed daily worldwide. Every commercial plant on Earth descends from stolen seedlings. The buna ceremony is a social technology older than any café.',
  openGraph: {
    title: 'The Coffee Covenant',
    description: 'Ethiopia exported $2.65B of coffee in 2024 — a record. The plant that runs the $485B global industry still grows wild in the forests where it was born.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Coffee Covenant — From Kaffa to the World | Dancing with Lions',
    description: 'Ethiopia is where coffee began — and where wild Coffea arabica still grows. $2.65 billion in exports (2024 record). 2.25 billion cups consumed daily worldwide. Every commercial plant on Earth descends from stolen seedlings. The buna ceremony is a soc',
    url: 'https://dancingwiththelions.com/data/the-coffee-covenant',
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