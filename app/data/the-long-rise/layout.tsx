import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Long Rise — Tourism | Dancing with Lions',
  description: 'Morocco tourism arrivals and revenue over time. The long rise from 2 million to 17 million visitors. Growth charted.',
  openGraph: {
    title: 'The Long Rise | Dancing with Lions',
    description: 'Morocco tourism arrivals and revenue over time. The long rise from 2 million to 17 million visitors. Growth charted.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/the-long-rise' },
}

export default function TheLongRiseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
