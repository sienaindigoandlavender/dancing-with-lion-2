import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'The Rhino Underground — 2,000 Rhinos, One Failed Auction, and an Arrest | Dancing with Lions',
  description: 'The largest wildlife translocation in history. 2,000 captive rhinos being rewilded across Africa after a failed auction. 376 moved in Year 1. 33 calves born wild. Then the breeder was arrested for trafficking the horns. Investment-grade cultural intelligence by Dancing with Lions.',
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
