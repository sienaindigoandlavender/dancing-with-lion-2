import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Demographic Atlas — Demographics & Society | Dancing with Lions',
  description: 'Morocco demographics by region. Population growth, urbanization, illiteracy, youth bulge. The numbers behind the map.',
  openGraph: {
    title: 'The Demographic Atlas | Dancing with Lions',
    description: 'Morocco demographics by region. Population growth, urbanization, illiteracy, youth bulge. The numbers behind the map.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/demographic-atlas' },
}

export default function DemographicAtlasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
