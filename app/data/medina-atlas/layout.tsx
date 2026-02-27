import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Medina Atlas — Urban Life | Dancing with Lions',
  description: 'Mapbox atlas of Morocco\'s historic medinas. Gates, fondouks, mosques, hammams, souks.',
  openGraph: {
    title: 'The Medina Atlas | Dancing with Lions',
    description: 'Mapbox atlas of Morocco\'s historic medinas. Gates, fondouks, mosques, hammams, souks.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/medina-atlas' },
}

export default function MedinaAtlasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
