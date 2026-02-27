import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Carthage Must Be Destroyed — History | Dancing with Lions',
  description: 'The Carthaginian Empire. Punic Wars, trade routes, North African territories. From Hannibal to the fall. Mapped and told.',
  openGraph: {
    title: 'Carthage Must Be Destroyed | Dancing with Lions',
    description: 'The Carthaginian Empire. Punic Wars, trade routes, North African territories. From Hannibal to the fall. Mapped and told.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/carthage' },
}

export default function CarthageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
