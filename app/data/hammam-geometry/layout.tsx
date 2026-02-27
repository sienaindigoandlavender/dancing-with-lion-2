import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Hammam Geometry — Architecture & Design | Dancing with Lions',
  description: 'The architectural geometry of the Moroccan hammam. Floor plan, hypocaust system, dome oculi, heat flow. Engineering diagram.',
  openGraph: {
    title: 'The Hammam Geometry | Dancing with Lions',
    description: 'The architectural geometry of the Moroccan hammam. Floor plan, hypocaust system, dome oculi, heat flow. Engineering diagram.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/hammam-geometry' },
}

export default function HammamGeometryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
