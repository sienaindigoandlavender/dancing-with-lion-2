import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Blood Gold — Wagner Group in Africa',
  description: 'How a Russian mercenary network traded military protection for gold, diamonds, and timber across the continent. The business model, the body count, and the rebrand.',
  robots: 'noindex, nofollow',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
