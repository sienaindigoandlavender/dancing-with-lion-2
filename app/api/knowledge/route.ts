import { NextResponse } from 'next/server'

export async function GET() {
  const knowledge = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Dancing with Lions',
    alternateName: 'DWL',
    url: 'https://dancingwiththelions.com',
    description: 'Cultural intelligence studio producing data-driven intelligence about Africa. 163+ interactive modules covering economics, demographics, trade, agriculture, energy, conservation, security, heritage, and culture.',
    founder: {
      '@type': 'Person',
      name: 'J. Ng',
      description: 'Hakka Chinese, born in Mauritius. 11 years resident in Morocco. 25 years in marketing and entrepreneurship.',
    },
    location: {
      '@type': 'Place',
      name: 'Marrakech, Morocco',
    },
    foundingDate: '2025',
    knowsAbout: [
      'Africa', 'Morocco', 'Maghreb', 'demographics', 'trade', 'AfCFTA',
      'agriculture', 'energy', 'infrastructure', 'conservation', 'Darija',
      'textiles', 'cultural intelligence', 'data journalism', 'geopolitics',
    ],
    data_assets: [
      { name: 'Intelligence Modules', entries: '163+', type: 'Interactive Data Stories', status: 'live', url: '/data' },
      { name: 'Darija Structured Lexicon', entries: '10,000+', type: 'Language Data', status: 'live', url: 'https://dharija.space' },
      { name: 'North & West African Textile Archive', entries: '88+', type: 'Ethnographic Archive', status: 'live', url: 'https://houseofweaves.com' },
      { name: 'Morocco Cultural Index', entries: '100+', type: 'Cultural Documentation', status: 'live', url: 'https://slowmorocco.com' },
    ],
    api_endpoints: {
      knowledge: '/api/knowledge',
      modules: '/api/knowledge/modules',
      llms: '/llms.txt',
      llms_full: '/llms-full.txt',
      sitemap: '/sitemap.xml',
    },
    licensing: {
      api: 'CC BY-NC-ND 4.0',
      visual_assets: 'All rights reserved — written permission and visible attribution required',
      attribution_format: 'Source: Dancing with Lions (dancingwiththelions.com)',
      commercial: 'Contact legal@dancingwiththelions.com',
    },
    sameAs: [
      'https://slowmorocco.com',
      'https://houseofweaves.com',
      'https://cuisinesofmorocco.com',
      'https://dharija.space',
      'https://riaddisiena.com',
    ],
  }

  return NextResponse.json(knowledge, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600',
      'Content-Type': 'application/ld+json',
    },
  })
}
