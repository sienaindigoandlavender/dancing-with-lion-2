import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Moroccan Genome — Demographics & Society | Dancing with Lions',
  description: 'The genetic ancestry of Morocco. E-M81 haplogroup, Amazigh DNA, admixture analysis. What the genome reveals about 315,000 years of migration.',
  openGraph: {
    title: 'The Moroccan Genome | Dancing with Lions',
    description: 'The genetic ancestry of Morocco. E-M81 haplogroup, Amazigh DNA, admixture analysis. What the genome reveals about 315,000 years of migration.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/moroccan-genome' },
}

export default function MoroccanGenomeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
