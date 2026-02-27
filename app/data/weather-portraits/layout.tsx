import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Weather Portraits — Living Data | Dancing with Lions',
  description: 'Live weather for 8 Moroccan cities. Open-Meteo integration, NASA satellite imagery toggle.',
  openGraph: {
    title: 'Weather Portraits | Dancing with Lions',
    description: 'Live weather for 8 Moroccan cities. Open-Meteo integration, NASA satellite imagery toggle.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/weather-portraits' },
}

export default function WeatherPortraitsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
