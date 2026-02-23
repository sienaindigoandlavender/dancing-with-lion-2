import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Atlantic Spine — Nigeria-Morocco Gas Pipeline | Dancing with Lions',
  description: '5,660 km. 13 countries. $25 billion. The Nigeria-Morocco Gas Pipeline is the largest energy infrastructure project in African history — and it is racing against Algeria\'s Trans-Saharan rival for the same Nigerian gas and the same European market. Route data, country profiles, timeline, and geopolitical analysis.',
  openGraph: {
    title: 'The Atlantic Spine — Nigeria-Morocco Gas Pipeline',
    description: '5,660 km of pipeline connecting Lagos to Tangier along the Atlantic coast. 13 countries, $25 billion, and a geopolitical race that will reshape Africa\'s energy map.',
    url: 'https://dancingwiththelions.com/data/the-atlantic-spine',
    siteName: 'Dancing with Lions',
  },
  keywords: ['Nigeria Morocco gas pipeline', 'NMGP', 'African Atlantic Gas Pipeline', 'AAGP', 'NNPCL', 'ONHYM', 'ECOWAS', 'Trans-Saharan gas pipeline', 'TSGP', 'Algeria', 'pipeline', 'gas', 'energy', 'Africa', 'West Africa', 'Maghreb', 'Europe', 'Tangier', 'Lagos', 'Dakhla', 'Mauritania', 'Senegal', 'green hydrogen', 'LNG', 'geopolitics'],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
