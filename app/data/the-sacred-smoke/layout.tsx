import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Sacred Smoke — Data Module | Dancing with Lions',
  description: 'Every civilisation burned something precious and called it prayer. 12 traditions across 6 continents, at least 5 with no shared origin. Starting from Morocco\'s bkhour tradition.',
  openGraph: {
    title: 'The Sacred Smoke',
    description: '12 sacred smoke traditions. 6 continents. The same instinct, everywhere.',
    type: 'article',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/the-sacred-smoke' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
