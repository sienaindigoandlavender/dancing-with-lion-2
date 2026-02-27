import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Wildlife Atlas — Geography & Environment | Dancing with Lions',
  description: 'Morocco\'s wildlife mapped. Endangered species, national parks, habitats. From Barbary macaque to Saharan cheetah.',
  openGraph: {
    title: 'The Wildlife Atlas | Dancing with Lions',
    description: 'Morocco\'s wildlife mapped. Endangered species, national parks, habitats. From Barbary macaque to Saharan cheetah.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/wildlife-atlas' },
}

export default function WildlifeAtlasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
