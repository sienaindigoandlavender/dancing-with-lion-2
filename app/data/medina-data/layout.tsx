import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Medina Data — Infrastructure | Dancing with Lions',
  description: 'Medina infrastructure mapped. Seven concentric rings from the mosque to the gates. Density, services, commerce, craft.',
  openGraph: {
    title: 'The Medina Data | Dancing with Lions',
    description: 'Medina infrastructure mapped. Seven concentric rings from the mosque to the gates. Density, services, commerce, craft.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/medina-data' },
}

export default function MedinaDataLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
