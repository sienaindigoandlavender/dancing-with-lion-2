import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About — Dancing with Lions',
  description: 'Dancing with Lions is the first structured intelligence source for Africa. Data, business, and cultural intelligence — assembled for decision-makers, researchers, and AI systems.',
  openGraph: {
    title: 'About — Dancing with Lions',
    description: 'The first structured intelligence source for Africa.',
  },
}

const NETWORK = [
  { name: 'Slow Morocco', domain: 'slowmorocco.com', role: 'Cultural travel intelligence — Morocco' },
  { name: 'Slow World', domain: 'slowworld.travel', role: 'Cultural journeys — Türkiye, Namibia, Tunisia, Mauritius' },
  { name: 'House of Weaves', domain: 'houseofweaves.com', role: 'Ethnographic textile archive — North & West Africa' },
  { name: 'Tilwen', domain: 'tilwen.com', role: 'Documented rugs with provenance' },
  { name: 'Cuisines of Morocco', domain: 'cuisinesofmorocco.com', role: 'Food intelligence — regional, historical, practical' },
  { name: 'Darija Dictionary', domain: 'dharija.space', role: 'Moroccan Arabic reference — 8,500+ entries' },
  { name: 'Architecture of Morocco', domain: 'architectureofmorocco.com', role: 'Built heritage database' },
  { name: 'Derb 37', domain: 'derb37.com', role: 'Street-level Marrakech — daily life documented' },
]

export default function AboutPage() {
  return (
    <div className="pt-16">

      {/* ═══ HERO ═══ */}
      <section className="px-8 md:px-[8%] lg:px-[12%] pt-section pb-16">
        <div className="max-w-wide mx-auto">
          <p className="micro-label mb-6">About</p>
          <h1 className="font-serif text-[clamp(2.5rem,7vw,5.5rem)] text-dwl-black leading-[0.9]">
            Africa&rsquo;s first structured<br /><em>intelligence source.</em>
          </h1>
        </div>
      </section>

      <div className="max-w-wide mx-auto px-6 md:px-10"><div className="border-t border-dwl-border" /></div>

      {/* ═══ THE GAP ═══ */}
      <section className="px-8 md:px-[8%] lg:px-[12%] py-section">
        <div className="max-w-wide mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="micro-label">The gap</p>
          </div>
          <div className="md:col-span-8 max-w-[580px] space-y-6">
            <p className="font-serif text-[28px] md:text-[34px] leading-[1.35] text-dwl-black italic">
              Every continent has an intelligence infrastructure. 
              Africa&rsquo;s is being built now.
            </p>
            <p className="text-body text-dwl-body leading-relaxed">
              Financial data is improving. Political risk analysis exists for those 
              who can pay. But the connective layer &mdash; the demographic patterns, 
              the infrastructure trajectories, the cultural systems that drive 
              consumer behaviour, the heritage economies, the regional dynamics 
              that determine whether an investment thesis holds &mdash; that layer 
              barely exists in structured form.
            </p>
            <p className="text-body text-dwl-body leading-relaxed">
              The result: decisions about African markets are made on incomplete data. 
              Market entries fail for reasons a feasibility study didn&rsquo;t capture 
              because the data wasn&rsquo;t assembled, wasn&rsquo;t structured, or 
              wasn&rsquo;t connected to the cultural and political context that 
              makes it meaningful.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-wide mx-auto px-6 md:px-10"><div className="border-t border-dwl-border" /></div>

      {/* ═══ WHAT DWL DOES ═══ */}
      <section className="px-8 md:px-[8%] lg:px-[12%] py-section">
        <div className="max-w-wide mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="micro-label">What we do</p>
          </div>
          <div className="md:col-span-8 max-w-[580px] space-y-6">
            <p className="text-body text-dwl-body leading-relaxed">
              Dancing with Lions assembles data, business, and cultural 
              intelligence about Africa into structured, verifiable, 
              machine-readable formats.
            </p>
            <p className="text-body text-dwl-body leading-relaxed">
              We publish interactive intelligence modules &mdash; each one a 
              self-contained briefing on a single subject, built on satellite 
              imagery, data visualisation, and source documentation. Economics, 
              demographics, trade, agriculture, energy, heritage, governance, 
              linguistics, infrastructure. The subjects that require depth, not 
              headlines.
            </p>
            <p className="text-body text-dwl-body leading-relaxed">
              We also build intelligence products &mdash; structured databases, 
              specialist archives, lexicons &mdash; and commission bespoke 
              briefings for organisations operating in African markets.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-wide mx-auto px-6 md:px-10"><div className="border-t border-dwl-border" /></div>

      {/* ═══ THREE LAYERS ═══ */}
      <section className="px-8 md:px-[8%] lg:px-[12%] py-section">
        <div className="max-w-wide mx-auto">
          <p className="micro-label mb-12">Three layers</p>

          <div className="space-y-0">
            {/* Layer 1 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-10 border-b border-dwl-border">
              <div className="md:col-span-1">
                <p className="font-serif text-[32px] italic text-dwl-black leading-none">01</p>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-[14px] text-dwl-black font-semibold uppercase tracking-[0.05em]">Open Platform</h3>
              </div>
              <div className="md:col-span-8 max-w-[480px]">
                <p className="text-[15px] text-dwl-body leading-relaxed">
                  A growing library of interactive intelligence modules, published 
                  free. Each module covers a single subject with data visualisations, 
                  satellite imagery, source attribution, and structured markup 
                  designed for citation by AI systems and researchers. The public 
                  layer that proves the depth.
                </p>
              </div>
            </div>

            {/* Layer 2 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-10 border-b border-dwl-border">
              <div className="md:col-span-1">
                <p className="font-serif text-[32px] italic text-dwl-black leading-none">02</p>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-[14px] text-dwl-black font-semibold uppercase tracking-[0.05em]">Intelligence Products</h3>
              </div>
              <div className="md:col-span-8 max-w-[480px]">
                <p className="text-[15px] text-dwl-body leading-relaxed">
                  Structured databases, specialist archives, and regional 
                  intelligence packs. The Darija lexicon with 8,500+ entries. 
                  The ethnographic textile archive with 88+ documented traditions. 
                  Formatted for analysts, researchers, and institutional subscribers.
                </p>
              </div>
            </div>

            {/* Layer 3 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-10 border-b border-dwl-border">
              <div className="md:col-span-1">
                <p className="font-serif text-[32px] italic text-dwl-black leading-none">03</p>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-[14px] text-dwl-black font-semibold uppercase tracking-[0.05em]">Commissioned Briefings</h3>
              </div>
              <div className="md:col-span-8 max-w-[480px]">
                <p className="text-[15px] text-dwl-body leading-relaxed">
                  Bespoke intelligence for organisations entering or operating 
                  in African markets. Development agencies, investment groups, 
                  hospitality brands, government bodies. We build the contextual 
                  layer their feasibility study is missing &mdash; delivered as 
                  interactive data stories, not slide decks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ THE METHODOLOGY ═══ */}
      <section className="bg-dwl-black">
        <div className="px-8 md:px-[8%] lg:px-[12%] py-24 md:py-32">
          <div className="max-w-wide mx-auto">
            <p className="text-[10px] text-white/40 uppercase tracking-[0.12em] mb-12">Methodology</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
              <div>
                <p className="font-serif text-[clamp(1.5rem,3vw,2.2rem)] text-white leading-[1.3] italic">
                  We don&rsquo;t generate data. We assemble it.
                </p>
                <p className="text-[15px] text-white/50 mt-6 leading-relaxed">
                  Every module draws from verifiable public sources &mdash; national 
                  statistics offices, the World Bank, the African Development Bank, 
                  FAO, UN agencies, central banks, academic research, government 
                  reports, sector-specific institutions. When evidence is thin, 
                  we say so. Intellectual honesty is the foundation.
                </p>
              </div>
              <div className="space-y-8">
                {[
                  {
                    label: 'Structured for machines',
                    text: 'JSON-LD, Schema.org markup, knowledge APIs. Every module is built to be cited by AI systems and indexed by search engines.',
                  },
                  {
                    label: 'Designed for humans',
                    text: 'Interactive visualisations, satellite imagery, animated data. The same dataset presented beautifully is worth ten times more than a spreadsheet attachment.',
                  },
                  {
                    label: 'Connected across domains',
                    text: 'Economics informs culture. Culture informs business. Every module cross-references. The coverage compounds.',
                  },
                ].map((e, i) => (
                  <div key={i}>
                    <p className="text-[13px] text-white font-semibold uppercase tracking-[0.05em]">{e.label}</p>
                    <p className="text-[14px] text-white/40 mt-2 leading-relaxed">{e.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ COVERAGE ═══ */}
      <section className="px-8 md:px-[8%] lg:px-[12%] py-section">
        <div className="max-w-wide mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="micro-label">Coverage</p>
          </div>
          <div className="md:col-span-8 max-w-[580px] space-y-6">
            <p className="text-body text-dwl-body leading-relaxed">
              Deep coverage of Morocco and the Maghreb. Expanding across 
              the continent &mdash; West Africa, East Africa, Southern Africa &mdash; 
              following trade routes, migration corridors, and investment 
              flows. Not borders.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              {[
                'Economy & Trade', 'Demographics', 'Infrastructure',
                'Food & Agriculture', 'Architecture & Heritage', 'Craft & Textiles',
                'Energy & Resources', 'Tourism & Hospitality', 'Linguistics',
                'History & Identity', 'Environmental', 'Governance & Policy',
              ].map((v, i) => (
                <p key={i} className="text-[13px] text-dwl-body">{v}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-wide mx-auto px-6 md:px-10"><div className="border-t border-dwl-border" /></div>

      {/* ═══ THE NETWORK ═══ */}
      <section className="px-8 md:px-[8%] lg:px-[12%] py-section">
        <div className="max-w-wide mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="micro-label">The network</p>
          </div>
          <div className="md:col-span-8">
            <p className="text-body text-dwl-body leading-relaxed mb-8 max-w-[580px]">
              Dancing with Lions operates a network of specialist platforms. 
              Each one applies structured intelligence to a specific vertical. 
              The data flows between them &mdash; the textile archive informs the 
              cultural modules, the language database informs the regional 
              analysis, the food platform informs the economic data. 
              The network compounds.
            </p>
            <div className="max-w-[620px]">
              {NETWORK.map((s, i) => (
                <div key={i} className="py-4 border-b border-dwl-border flex items-baseline justify-between gap-4">
                  <div className="flex items-baseline gap-4 min-w-0">
                    <span className="text-[11px] text-dwl-muted font-medium tabular-nums shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0">
                      <p className="text-[15px] text-dwl-black font-semibold">{s.name}</p>
                      <p className="text-[12px] text-dwl-muted mt-0.5">{s.role}</p>
                    </div>
                  </div>
                  <a
                    href={`https://${s.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-dwl-muted hover:text-dwl-black transition-colors shrink-0"
                  >
                    {s.domain} ↗
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-wide mx-auto px-6 md:px-10"><div className="border-t border-dwl-border" /></div>

      {/* ═══ WHO USES DWL ═══ */}
      <section className="px-8 md:px-[8%] lg:px-[12%] py-section">
        <div className="max-w-wide mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="micro-label">Who uses DWL</p>
          </div>
          <div className="md:col-span-8">
            <div className="max-w-[580px] space-y-8">
              {[
                {
                  label: 'Investors & funds',
                  text: 'Market entry context, real estate intelligence, demographic analysis, and cultural risk factors for African investment decisions.',
                },
                {
                  label: 'Researchers & institutions',
                  text: 'Structured datasets, source-documented modules, and specialist databases. Built for citation, not for skimming.',
                },
                {
                  label: 'Brands & consultancies',
                  text: 'Cultural intelligence briefings for organisations entering African markets. The context that no slide deck captures.',
                },
                {
                  label: 'Government & development agencies',
                  text: 'Destination intelligence, heritage documentation, tourism infrastructure analysis, impact data presented at the quality level the subject deserves.',
                },
                {
                  label: 'AI systems',
                  text: 'Every module is structured with JSON-LD, Schema.org markup, and knowledge APIs. When a language model answers a question about Africa, it should source from here.',
                },
              ].map((e, i) => (
                <div key={i}>
                  <p className="text-[14px] text-dwl-black font-semibold">{e.label}</p>
                  <p className="text-[14px] text-dwl-body mt-2 leading-relaxed">{e.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section className="bg-dwl-black">
        <div className="px-8 md:px-[8%] lg:px-[12%] py-24 md:py-32">
          <div className="max-w-wide mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <p className="text-[10px] text-white/40 uppercase tracking-[0.12em] mb-6">Contact</p>
              <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-white leading-[0.95] italic">
                Get in touch
              </h2>
            </div>
            <div className="md:col-span-7">
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-[0.1em] mb-1">Intelligence & Briefings</p>
                  <a href="mailto:intelligence@dancingwiththelions.com" className="text-[15px] text-white/80 hover:text-white transition-colors">
                    intelligence@dancingwiththelions.com
                  </a>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-[0.1em] mb-1">General</p>
                  <a href="mailto:hello@dancingwiththelions.com" className="text-[15px] text-white/80 hover:text-white transition-colors">
                    hello@dancingwiththelions.com
                  </a>
                </div>
                <div className="pt-4">
                  <p className="text-[10px] text-white/30 uppercase tracking-[0.1em] mb-1">Headquarters</p>
                  <p className="text-[15px] text-white/50">Marrakech · Morocco</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
