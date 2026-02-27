import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Scent Atlas — Culture & Identity | Dancing with Lions',
  description: 'Morocco in scent. Rose water, orange blossom, cedar, argan, oud. Source, chemistry, and the olfactory map of the country.',
  openGraph: {
    title: 'The Scent Atlas | Dancing with Lions',
    description: 'Morocco in scent. Rose water, orange blossom, cedar, argan, oud. Source, chemistry, and the olfactory map of the country.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/scent-atlas' },
}

export default function ScentAtlasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
