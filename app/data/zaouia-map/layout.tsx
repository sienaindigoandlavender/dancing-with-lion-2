import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Zaouia Map — Sacred & Spiritual | Dancing with Lions',
  description: 'The Sufi geography of Morocco. Zaouias, brotherhoods, spiritual centres. The invisible architecture of faith.',
  openGraph: {
    title: 'The Zaouia Map | Dancing with Lions',
    description: 'The Sufi geography of Morocco. Zaouias, brotherhoods, spiritual centres. The invisible architecture of faith.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/zaouia-map' },
}

export default function ZaouiaMapLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
