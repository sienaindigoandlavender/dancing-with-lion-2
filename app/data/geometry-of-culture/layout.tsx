import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Geometry of Culture — Architecture & Design | Dancing with Lions',
  description: 'The six star families of Islamic geometric art. Mathematical construction, cultural meaning, and Moroccan applications.',
  openGraph: {
    title: 'The Geometry of Culture | Dancing with Lions',
    description: 'The six star families of Islamic geometric art. Mathematical construction, cultural meaning, and Moroccan applications.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/geometry-of-culture' },
}

export default function GeometryOfCultureLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
