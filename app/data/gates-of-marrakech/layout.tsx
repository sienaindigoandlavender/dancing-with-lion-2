import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The 19 Gates of Marrakech — Architecture & Design | Dancing with Lions',
  description: 'The gates and walls of the Marrakech medina. Each bab mapped with its history, construction date, and role in the city defence.',
  openGraph: {
    title: 'The 19 Gates of Marrakech | Dancing with Lions',
    description: 'The gates and walls of the Marrakech medina. Each bab mapped with its history, construction date, and role in the city defence.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/gates-of-marrakech' },
}

export default function GatesOfMarrakechLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
