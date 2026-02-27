import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Nomad Pulse — Living Data | Dancing with Lions',
  description: 'Digital nomads in Morocco. Co-living, remote work infrastructure, visa policy. The pulse of the mobile workforce 2025–2026.',
  openGraph: {
    title: 'The Nomad Pulse | Dancing with Lions',
    description: 'Digital nomads in Morocco. Co-living, remote work infrastructure, visa policy. The pulse of the mobile workforce 2025–2026.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/the-nomad-pulse' },
}

export default function TheNomadPulseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
