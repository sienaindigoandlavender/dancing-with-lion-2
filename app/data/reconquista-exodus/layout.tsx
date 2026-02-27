import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Reconquista Exodus — History | Dancing with Lions',
  description: 'The Reconquista from 711 to 1614. The Christian reconquest of Iberia and the exodus of Muslims and Jews to Morocco and North Africa.',
  openGraph: {
    title: 'The Reconquista Exodus | Dancing with Lions',
    description: 'The Reconquista from 711 to 1614. The Christian reconquest of Iberia and the exodus of Muslims and Jews to Morocco and North Africa.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/reconquista-exodus' },
}

export default function ReconquistaExodusLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
