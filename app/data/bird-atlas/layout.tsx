import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Bird Atlas — Geography & Environment | Dancing with Lions',
  description: 'North Africa\'s bird preservation areas and migration flyways. 27 IBAs, 3 flyways, 509 species.',
  openGraph: {
    title: 'The Bird Atlas | Dancing with Lions',
    description: 'North Africa\'s bird preservation areas and migration flyways. 27 IBAs, 3 flyways, 509 species.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/bird-atlas' },
}

export default function BirdAtlasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
