import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Yennayer — The Berber Pharaoh and the 3,000-Year Calendar | Dancing with Lions',
  description: 'In 943 BC, a Meshwesh Libyan named Sheshonq became Pharaoh of Egypt. He founded the 22nd Dynasty, invaded Jerusalem, and carved his victories at Karnak. The Amazigh calendar counts from his throne. Yennayer 2976 was January 13, 2026.',
  openGraph: {
    title: 'Yennayer',
    description: 'The Berber pharaoh. The 3,000-year calendar. The oldest New Year still celebrated.',
    type: 'article',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/yennayer' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Yennayer',
    description: 'In 943 BC, a Meshwesh Libyan named Sheshonq became Pharaoh of Egypt, founded the 22nd Dynasty, and invaded Jerusalem. The Amazigh calendar counts from his throne. Yennayer 2976 was January 13, 2026. The pharaoh, the 3,000-year calendar, the regional traditions, and the politics o',
    url: 'https://dancingwiththelions.com/data/yennayer',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Culture & Identity',
    keywords: 'Yennayer, Amazigh, Berber, New Year, Sheshonq, Shishak, pharaoh, 22nd Dynasty',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 123 — Yennayer',
    description: 'In 943 BC, a Meshwesh Libyan named Sheshonq became Pharaoh of Egypt, founded the 22nd Dynasty, and invaded Jerusalem. The Amazigh calendar counts from his throne. Yennayer 2976 was January 13, 2026. The pharaoh, the 3,000-year calendar, the regional traditions, and the politics o',
    url: 'https://dancingwiththelions.com/data/yennayer',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ['Yennayer', 'Amazigh', 'Berber', 'New Year', 'Sheshonq', 'Shishak', 'pharaoh', '22nd Dynasty'],
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