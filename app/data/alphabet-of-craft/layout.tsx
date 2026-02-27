import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Moroccan Alphabet of Craft — Craft & Textiles | Dancing with Lions',
  description: 'Morocco\'s craft traditions from A to Z. Each letter, a material. Each material, a region. The alphabet of making.',
  openGraph: {
    title: 'The Moroccan Alphabet of Craft | Dancing with Lions',
    description: 'Morocco\'s craft traditions from A to Z. Each letter, a material. Each material, a region. The alphabet of making.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/alphabet-of-craft' },
}

export default function AlphabetOfCraftLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
