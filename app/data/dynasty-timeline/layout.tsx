import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Dynasties of Morocco — History | Dancing with Lions',
  description: 'Idrisids to Alaouites. 1,200 years of Moroccan rulers, capitals, and power shifts.',
  openGraph: {
    title: 'The Dynasties of Morocco | Dancing with Lions',
    description: 'Idrisids to Alaouites. 1,200 years of Moroccan rulers, capitals, and power shifts.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/dynasty-timeline' },
}

export default function DynastyTimelineLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
