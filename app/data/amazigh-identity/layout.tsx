import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Amazigh Identity Map — Dancing with Lions',
  description: 'Berber-speaking regions, Tifinagh script distribution, tribal territories, and language survival. Three languages, three confederations, 3,000 years of script.',
    alternates: { canonical: 'https://dancingwiththelions.com/data/amazigh-identity' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
