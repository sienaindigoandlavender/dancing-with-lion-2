// components/seo/ModuleSchema.tsx
// JSON-LD structured data for DWL data modules
// Generates Article + Dataset + FAQPage schemas for SEO + GEO (AI citation)

type ModuleSchemaProps = {
  number: string
  title: string
  description: string
  category: string
  href: string
  tags: string[]
  datePublished?: string
  dateModified?: string
}

export function ModuleSchema({
  number,
  title,
  description,
  category,
  href,
  tags,
  datePublished = '2026-02-24',
  dateModified = '2026-02-24',
}: ModuleSchemaProps) {
  const url = `https://dancingwiththelions.com${href}`

  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: title,
    description: description.slice(0, 300),
    url,
    mainEntityOfPage: url,
    author: {
      '@type': 'Organization',
      name: 'Dancing with Lions',
      url: 'https://dancingwiththelions.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Dancing with Lions',
      url: 'https://dancingwiththelions.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://dancingwiththelions.com/favicon.svg',
      },
    },
    datePublished,
    dateModified,
    articleSection: category,
    keywords: tags.join(', '),
    isPartOf: {
      '@type': 'CreativeWorkSeries',
      name: 'Dancing with Lions Intelligence Modules',
      url: 'https://dancingwiththelions.com/data',
    },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    inLanguage: 'en',
    potentialAction: {
      '@type': 'ReadAction',
      target: url,
    },
  }

  const dataset = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    '@id': `${url}#dataset`,
    name: `${title} — Data Module #${number}`,
    description,
    url,
    creator: {
      '@type': 'Organization',
      name: 'Dancing with Lions',
      url: 'https://dancingwiththelions.com',
    },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: tags,
    spatialCoverage: {
      '@type': 'Place',
      name: 'Africa',
    },
    isAccessibleForFree: true,
    inLanguage: 'en',
  }

  // Generate FAQ from description — extract key claims as Q&A
  const faqFromTags = generateFAQ(title, description, category, tags)
  const faq = faqFromTags.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: faqFromTags.map(qa => ({
      '@type': 'Question',
      name: qa.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: qa.a,
      },
    })),
  } : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dataset) }} />
      {faq && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />}
    </>
  )
}

function generateFAQ(title: string, desc: string, category: string, tags: string[]): { q: string; a: string }[] {
  const faqs: { q: string; a: string }[] = []

  // Category-specific FAQs
  if (category === 'Africa Progression') {
    faqs.push({
      q: `What is ${title}?`,
      a: desc.slice(0, 400),
    })
  }

  // Extract stat-based FAQs from known modules
  if (title.includes('Food')) {
    faqs.push(
      { q: 'How much does Africa spend on food imports?', a: 'Sub-Saharan Africa spends approximately $65 billion annually on food imports (2025 FAO projection). Cereals alone account for $21.9 billion — one-third of the total. Africa owns 60% of the world\'s uncultivated arable land yet remains dependent on imported food due to underinvestment in agriculture, irrigation, and infrastructure.' },
      { q: 'What is the agricultural yield gap in Africa?', a: 'African crop yields average less than 25% of their potential. Rice yields average 2.2 tonnes per hectare versus 4.7 in Asia and 8.5 in North America. Maize: 1.8 versus 5.2 and 10.5. The gap is driven by low irrigation (6% of cropland vs 40% in Asia), low fertiliser use (17kg/ha vs 135kg global average), and limited mechanisation.' },
    )
  }
  if (title.includes('Trade')) {
    faqs.push(
      { q: 'What is AfCFTA and how big is the market?', a: 'The African Continental Free Trade Area (AfCFTA) connects 54 countries, 1.4 billion people, and $3.4 trillion in combined GDP — making it the world\'s largest free trade area by member states. It aims to eliminate tariffs on 90% of goods and triple intra-African trade from its current 15%.' },
      { q: 'Why is intra-African trade so low?', a: 'Intra-African trade is just 15% of total African trade, compared to 60% in Europe and 50% in Asia. Key barriers include customs delays averaging 32 days (vs 7 in OECD), transport costs 2-3 times higher than comparable developing regions, non-tariff barriers, and legacy colonial trade routes that direct raw materials out rather than across the continent.' },
    )
  }
  if (title.includes('Health')) {
    faqs.push(
      { q: 'What is Africa\'s disease burden?', a: 'Africa carries 25% of the global disease burden with just 3% of the world\'s health workers. 95% of global malaria deaths (580,000/year) occur in Africa. 65% of HIV burden (25.6M living with HIV in SSA). 70% of maternal mortality. 50% of global under-5 deaths (2.7M annually). The continent has approximately 1 doctor per 5,000 people.' },
      { q: 'How are drones being used for healthcare in Africa?', a: 'Zipline has made over 70 million autonomous medical deliveries across Rwanda, Ghana, Kenya, and Nigeria. The drones deliver blood, vaccines, and medications to remote clinics in approximately 30 minutes — where road transport would take hours or days. Rwanda deployed the system in 2016, before commercial drone delivery launched anywhere else in the world.' },
    )
  }
  if (title.includes('Urbanisation')) {
    faqs.push(
      { q: 'How fast is Africa urbanising?', a: 'Africa will add 950 million urban residents by 2050 — more than Europe and North America combined. Africa urbanises at 3.5% annually, the fastest rate globally. By 2050, approximately 50 African cities will exceed 5 million people, up from 7 today. Lagos is projected to reach 88 million by 2100, potentially becoming the world\'s largest city.' },
    )
  }
  if (title.includes('Creative')) {
    faqs.push(
      { q: 'How big is Africa\'s creative economy?', a: 'Africa\'s creative economy is estimated at $4.2 billion and growing. Afrobeats is the fastest-growing music genre globally and the most-streamed non-English genre on Spotify. Nollywood produces approximately 2,500 films per year (second globally by volume). Netflix invested $175 million in African content. African contemporary art is breaking auction records globally.' },
    )
  }
  if (title.includes('Education')) {
    faqs.push(
      { q: 'How many children are out of school in Africa?', a: 'Sub-Saharan Africa has approximately 98 million children out of school — the highest rate globally, with 1 in 5 children aged 6-11 not enrolled. Additionally, 86% of 10-year-olds in SSA cannot read a simple story with comprehension (World Bank Learning Poverty Index). The region needs 15 million additional teachers by 2030 to achieve universal primary education.' },
    )
  }
  if (title.includes('Energy')) {
    faqs.push(
      { q: 'How many people in Africa lack electricity?', a: 'Approximately 600 million people in Africa lack access to electricity. 48 sub-Saharan countries combined produce the same amount of electricity as Spain (population 45 million). Africa holds 60% of the world\'s best solar resources but attracts less than 3% of global energy financing. Africa accounts for 80% of the global electricity access gap.' },
    )
  }
  if (title.includes('Demographic')) {
    faqs.push(
      { q: 'What is Africa\'s projected population by 2050?', a: 'Africa\'s population is projected to double from approximately 1.53 billion today to 2.5 billion by 2050, and could reach 3.8 billion by 2100. By 2050, one in four humans will be African. The continent has a median age of 19.3 years — the youngest of any region. By 2035, more young Africans will enter the workforce annually than the rest of the world combined.' },
    )
  }
  if (title.includes('Infrastructure')) {
    faqs.push(
      { q: 'How much is Africa investing in infrastructure?', a: 'Africa has over $2.5 trillion in planned infrastructure projects. China invested $61.2 billion in African engagement in 2025 alone — a 283% increase that made Africa the #1 BRI destination globally for the first time. Key projects include the Nigeria-Morocco Gas Pipeline ($25B, 5,600km), GERD dam (6.45GW), Lobito Corridor, and Dangote Refinery (650,000 barrels/day).' },
    )
  }
  if (title.includes('Tech')) {
    faqs.push(
      { q: 'How did Africa leapfrog traditional banking?', a: 'Africa skipped bank branches and went straight to mobile money. M-Pesa launched in Kenya in 2007 and now processes over $1.1 trillion in mobile transactions annually across the continent. Africa has 9 fintech unicorns (8 of 9 in fintech), led by Flutterwave ($3B), OPay ($2B), and Wave ($1.7B). Over 1.1 billion people use mobile phones across Africa.' },
    )
  }

  return faqs
}
