import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Who Is the GOAT? — History | Dancing with Lions',
  description: 'Marco Polo vs Ibn Battuta. Two travellers, two centuries, two journeys. Who covered more ground? The data decides.',
  openGraph: {
    title: 'Who Is the GOAT? | Dancing with Lions',
    description: 'Marco Polo vs Ibn Battuta. Two travellers, two centuries, two journeys. Who covered more ground? The data decides.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/who-is-the-goat' },
}

export default function WhoIsTheGoatLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
