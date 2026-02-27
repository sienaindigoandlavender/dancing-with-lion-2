import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Roma Africana — History | Dancing with Lions',
  description: 'Roman Africa — the complete imperial footprint. From Tangier to Cyrene. Cities, trade, grain, gladiators, and the provinces that fed Rome.',
  openGraph: {
    title: 'Roma Africana | Dancing with Lions',
    description: 'Roman Africa — the complete imperial footprint. From Tangier to Cyrene. Cities, trade, grain, gladiators, and the provinces that fed Rome.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/roma-africana' },
}

export default function RomaAfricanaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
