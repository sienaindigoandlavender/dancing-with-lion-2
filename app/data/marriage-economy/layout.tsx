import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Marriage Economy — Demographics & Society | Dancing with Lions',
  description: 'The economics of Moroccan marriage. Mahr, trousseau, ceremony costs, regional variations. What a wedding really costs.',
  openGraph: {
    title: 'The Marriage Economy | Dancing with Lions',
    description: 'The economics of Moroccan marriage. Mahr, trousseau, ceremony costs, regional variations. What a wedding really costs.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/marriage-economy' },
}

export default function MarriageEconomyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
