import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Carpet Code — Craft & Textiles | Dancing with Lions',
  description: 'Moroccan carpet traditions decoded. Tribal motifs, weaving techniques, regional styles. The visual language of the loom.',
  openGraph: {
    title: 'The Carpet Code | Dancing with Lions',
    description: 'Moroccan carpet traditions decoded. Tribal motifs, weaving techniques, regional styles. The visual language of the loom.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/carpet-code' },
}

export default function CarpetCodeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
