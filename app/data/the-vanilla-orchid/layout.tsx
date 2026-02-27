import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Vanilla Orchid — Madagascar, Mauritius, and the Most Expensive Spice on Earth | Dancing with Lions',
  description: 'A 12-year-old enslaved boy on Réunion discovered hand-pollination in 1841. Today Madagascar produces 80% of the world\'s vanilla. Prices have swung from $20/kg to $600/kg. 600 hand-pollinated flowers make 1kg of cured beans. The second most expensive spice after saffron.',
  openGraph: {
    title: 'The Vanilla Orchid',
    description: 'Madagascar produces 80% of the world\'s vanilla. A 12-year-old boy discovered the technique that made it possible. Prices: $20 to $600/kg.',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/the-vanilla-orchid' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
