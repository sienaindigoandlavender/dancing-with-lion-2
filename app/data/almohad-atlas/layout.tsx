import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Almohad Atlas — Architecture & Design | Dancing with Lions',
  description: 'The Almohad Empire in stone. Caliphs, territories, monuments from Marrakech to Seville. The empire that built the Koutoubia, the Giralda, and the Hassan Tower.',
  openGraph: {
    title: 'The Almohad Atlas | Dancing with Lions',
    description: 'The Almohad Empire in stone. Caliphs, territories, monuments from Marrakech to Seville. The empire that built the Koutoubia, the Giralda, and the Hassan Tower.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/almohad-atlas' },
}

export default function AlmohadAtlasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
