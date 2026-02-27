import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Four Peaks — Geography & Environment | Dancing with Lions',
  description: 'Morocco\'s highest mountains. Toubkal, M\'Goun, Ayachi, Sirwa. Elevation profiles, geography, and scale comparison.',
  openGraph: {
    title: 'Four Peaks | Dancing with Lions',
    description: 'Morocco\'s highest mountains. Toubkal, M\'Goun, Ayachi, Sirwa. Elevation profiles, geography, and scale comparison.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/four-peaks' },
}

export default function FourPeaksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
