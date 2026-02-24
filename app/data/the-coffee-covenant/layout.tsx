import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Coffee Covenant — From Kaffa to the World | Dancing with Lions',
  description: 'Ethiopia is where coffee began — and where wild Coffea arabica still grows. $2.65 billion in exports (2024 record). 2.25 billion cups consumed daily worldwide. Every commercial plant on Earth descends from stolen seedlings. The buna ceremony is a social technology older than any café.',
  openGraph: {
    title: 'The Coffee Covenant',
    description: 'Ethiopia exported $2.65B of coffee in 2024 — a record. The plant that runs the $485B global industry still grows wild in the forests where it was born.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
