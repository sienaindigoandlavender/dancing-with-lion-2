import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rome in North Africa — History | Dancing with Lions',
  description: 'The Roman Empire across North Africa. From Tangier to Cyrene. Provinces, cities, monuments, trade routes. Mapbox and timeline.',
  openGraph: {
    title: 'Rome in North Africa | Dancing with Lions',
    description: 'The Roman Empire across North Africa. From Tangier to Cyrene. Provinces, cities, monuments, trade routes. Mapbox and timeline.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/rome-north-africa' },
}

export default function RomeNorthAfricaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
