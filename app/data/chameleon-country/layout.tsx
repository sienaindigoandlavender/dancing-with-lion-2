import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Chameleon Country — Culture & Identity | Dancing with Lions',
  description: 'Morocco changes colour depending on where you stand. 12 regions, each with its own identity, economy, and personality. Cultural cartography.',
  openGraph: {
    title: 'The Chameleon Country | Dancing with Lions',
    description: 'Morocco changes colour depending on where you stand. 12 regions, each with its own identity, economy, and personality. Cultural cartography.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/chameleon-country' },
}

export default function ChameleonCountryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
