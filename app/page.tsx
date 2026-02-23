'use client'

import Link from 'next/link'
import { SEARCH_INDEX } from '@/lib/search-index'

/* ═══════════════════════════════════════════════════════
   HOMEPAGE — Dancing with Lions
   Africa's intelligence source.
   ═══════════════════════════════════════════════════════ */

const LATEST = SEARCH_INDEX.slice(-4).reverse()

/* Compute category counts dynamically */
const VERTICALS = (() => {
  const counts: Record<string, number> = {}
  SEARCH_INDEX.forEach(m => { counts[m.category] = (counts[m.category] || 0) + 1 })
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([name, count]) => ({ name, count }))
})()

export default function HomePage() {
  return (
    <div className="pt-16">

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[92vh] flex flex-col justify-end px-8 md:px-[8%] lg:px-[12%] pb-16">
        <div className="relative z-10 max-w-wide">
          <p className="micro-label mb-6 animate-fade-up delay-1">
            Africa&rsquo;s Intelligence Source
          </p>

          <h1 className="font-serif text-[clamp(3.5rem,11vw,9rem)] leading-[0.85] tracking-[-0.03em] text-dwl-black animate-fade-up delay-2">
            Dancing<br /><em>with Lions</em>
          </h1>

          <div className="mt-12 max-w-[580px] animate-fade-up delay-4">
            <p className="text-body text-dwl-body leading-relaxed">
              We structure the data that explains Africa. Economics, demographics, 
              trade corridors, cultural systems, infrastructure, politics &mdash; assembled 
              into intelligence that investors, researchers, governments, and AI 
              systems use to make decisions.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-6 animate-fade-up delay-5">
            <Link
              href="/data"
              className="inline-block px-8 py-4 bg-dwl-black text-white text-[11px] font-semibold uppercase tracking-[0.1em] hover:opacity-100"
            >
              Enter the Platform →
            </Link>
            <Link
              href="/about"
              className="meta-text hover:text-dwl-black transition-colors"
            >
              How it works
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ THE HOOK — Africa reframed ═══ */}
      <section className="border-t border-dwl-border">
        <div className="px-8 md:px-[8%] lg:px-[12%] py-24 md:py-40">
          <div className="max-w-wide mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-7">
              <p className="font-serif text-[clamp(1.8rem,4vw,3.2rem)] text-dwl-black leading-[1.25] italic">
                Morocco holds 70% of the world&rsquo;s phosphate reserves. 
                Nigeria&rsquo;s film industry generates $6.4 billion annually. 
                Ethiopia built Africa&rsquo;s first waste-to-energy plant. 
                Rwanda runs the continent&rsquo;s only drone blood-delivery network.
              </p>
              <p className="text-body text-dwl-body mt-8 leading-relaxed max-w-[540px]">
                This is the Africa that doesn&rsquo;t make headlines. 
                The data is extraordinary &mdash; but scattered across government 
                reports, institutional databases, and languages that 
                decision-makers cannot access. We assemble it, structure it, 
                and make it visible.
              </p>
            </div>
            <div className="md:col-span-5 flex flex-col justify-end">
              <div className="border-l-[3px] border-dwl-black pl-6 md:pl-8">
                <p className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] text-dwl-black leading-[0.9] italic">
                  54
                </p>
                <p className="text-[11px] text-dwl-muted uppercase tracking-[0.1em] mt-2">
                  countries. 1.4 billion people.
                </p>
                <p className="text-[13px] text-dwl-body mt-4 leading-relaxed">
                  The fastest-growing economies on earth &mdash; and the 
                  thinnest intelligence infrastructure of any continent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MOROCCO — THE ANCHOR ═══ */}
      <section className="bg-dwl-black">
        <div className="px-8 md:px-[8%] lg:px-[12%] py-24 md:py-32">
          <div className="max-w-wide mx-auto">
            <p className="text-[10px] text-white/40 uppercase tracking-[0.12em] mb-8">Deep coverage</p>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
              <div className="md:col-span-7">
                <h2 className="font-serif text-[clamp(2rem,5vw,3.8rem)] text-white leading-[0.95] italic">
                  Morocco is our anchor.
                </h2>
                <p className="text-[15px] text-white/50 mt-6 leading-relaxed max-w-[500px]">
                  The most complete structured intelligence on Morocco available 
                  anywhere online. Economics, demographics, trade, agriculture, 
                  energy, heritage, linguistics, architecture, food systems, 
                  governance. Expanding across the Maghreb and the continent &mdash; 
                  following trade routes, not borders.
                </p>
              </div>
              <div className="md:col-span-5">
                <div className="space-y-6">
                  {[
                    { region: 'Morocco & the Maghreb', status: 'Deep coverage' },
                    { region: 'West Africa', status: 'Expanding' },
                    { region: 'East Africa', status: 'Expanding' },
                    { region: 'Southern Africa', status: 'Coming' },
                    { region: 'Gulf States', status: 'Coming' },
                  ].map((r, i) => (
                    <div key={i} className="flex items-baseline justify-between border-b border-white/10 pb-3">
                      <p className="text-[14px] text-white/80">{r.region}</p>
                      <p className="text-[10px] text-white/30 uppercase tracking-[0.1em]">{r.status}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ THREE PILLARS ═══ */}
      <section className="border-b border-dwl-border">
        <div className="px-8 md:px-[8%] lg:px-[12%] py-24 md:py-32">
          <p className="micro-label mb-16">Three layers of intelligence</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-dwl-border">
            {[
              {
                num: '01',
                title: 'Data',
                text: 'Demographics, trade flows, infrastructure mapping, resource inventories, climate indicators, economic time series. Structured, sourced, and formatted for machines and analysts — not locked in PDFs.',
              },
              {
                num: '02',
                title: 'Business',
                text: 'Market conditions, regulatory landscapes, real estate signals, investment corridors, tourism economics, supply chain analysis. The contextual layer between a spreadsheet and a decision.',
              },
              {
                num: '03',
                title: 'Culture',
                text: 'Heritage systems, linguistic mapping, textile economies, food networks, demographic sentiment, consumer behaviour drivers. The layer that explains why the numbers are what they are.',
              },
            ].map((p) => (
              <div key={p.num} className="bg-white p-8 md:p-10">
                <p className="font-serif text-[36px] italic text-dwl-black leading-none mb-5">{p.num}</p>
                <h2 className="text-[15px] text-dwl-black font-semibold uppercase tracking-[0.05em] mb-4">{p.title}</h2>
                <p className="text-[14px] text-dwl-body leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LATEST MODULES ═══ */}
      <section>
        <div className="px-8 md:px-[8%] lg:px-[12%] py-24 md:py-40">
          <div className="flex items-baseline justify-between mb-16">
            <div>
              <p className="micro-label mb-3">Recent</p>
              <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] text-dwl-black leading-[0.95]">
                Latest <em>Modules</em>
              </h2>
            </div>
            <Link href="/data" className="meta-text hidden md:block hover:text-dwl-black transition-colors">
              View all →
            </Link>
          </div>

          {/* Featured — first module large */}
          {LATEST[0] && (
            <Link href={LATEST[0].href} className="block group">
              <div className="pb-16 border-b border-dwl-border">
                <p className="micro-label mb-3" style={{ color: '#8B6914' }}>
                  {LATEST[0].category}
                </p>
                <h3 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-dwl-black leading-[0.95] group-hover:opacity-60 transition-opacity">
                  <em>{LATEST[0].title}</em>
                </h3>
                <p className="text-body text-dwl-body mt-6 max-w-[620px] leading-relaxed">
                  {LATEST[0].description}
                </p>
              </div>
            </Link>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-dwl-border mt-px">
            {LATEST.slice(1).map((m) => (
              <Link key={m.id} href={m.href} className="block group">
                <article className="bg-white p-8 min-h-[200px] flex flex-col justify-between hover:bg-dwl-offwhite transition-colors">
                  <div>
                    <p className="micro-label mb-3" style={{ color: '#8B6914' }}>
                      {m.category}
                    </p>
                    <h3 className="font-serif text-[clamp(1.1rem,2vw,1.5rem)] text-dwl-black leading-snug group-hover:opacity-60 transition-opacity">
                      <em>{m.title}</em>
                    </h3>
                  </div>
                  <p className="text-[12px] text-dwl-muted leading-relaxed mt-4 line-clamp-3">
                    {m.description}
                  </p>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Link href="/data" className="meta-text">View all modules →</Link>
          </div>
        </div>
      </section>

      {/* ═══ COVERAGE VERTICALS ═══ */}
      <section className="border-t border-dwl-border">
        <div className="px-8 md:px-[8%] lg:px-[12%] py-16">
          <p className="micro-label mb-8">Coverage</p>
          <div className="flex flex-wrap gap-3">
            {VERTICALS.map(v => (
              <Link
                key={v.name}
                href="/data"
                className="inline-flex items-center gap-2 px-4 py-2 border border-dwl-border hover:border-dwl-black transition-colors"
              >
                <span className="text-[13px] text-dwl-black">{v.name}</span>
                <span className="font-serif text-[15px] italic text-dwl-muted">{v.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS + CTA ═══ */}
      <section className="bg-dwl-black">
        <div className="px-8 md:px-[8%] lg:px-[12%] py-24 md:py-32">
          <div className="max-w-wide mx-auto">
            <p className="text-[10px] text-white/40 uppercase tracking-[0.12em] mb-12">How it works</p>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
              <div className="md:col-span-7">
                <div className="space-y-10">
                  {[
                    {
                      num: '01',
                      title: 'Open platform',
                      text: 'Browse our growing library of interactive intelligence modules — free, open access. Each module covers a single subject with data visualisations, satellite imagery, and source documentation.',
                    },
                    {
                      num: '02',
                      title: 'Intelligence products',
                      text: 'Structured databases, specialist archives, and regional briefing packs — formatted for analysts, researchers, and institutional subscribers.',
                    },
                    {
                      num: '03',
                      title: 'Commissioned briefings',
                      text: 'Bespoke intelligence for your organisation. Market entry research, risk context, regional analysis, cultural due diligence — delivered as interactive data stories, not slide decks.',
                    },
                  ].map((step) => (
                    <div key={step.num} className="flex gap-6">
                      <p className="font-serif text-[28px] italic text-white/20 leading-none shrink-0">{step.num}</p>
                      <div>
                        <p className="text-[13px] text-white font-semibold uppercase tracking-[0.05em]">{step.title}</p>
                        <p className="text-[14px] text-white/45 mt-2 leading-relaxed">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:col-span-5 flex flex-col justify-center">
                <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] text-white leading-[1.1] italic">
                  Need intelligence<br />on an African market?
                </h2>
                <p className="text-[14px] text-white/45 mt-4 leading-relaxed">
                  Tell us what you&rsquo;re working on. We&rsquo;ll tell you 
                  what we already have and what we can build.
                </p>
                <a
                  href="mailto:intelligence@dancingwiththelions.com"
                  className="inline-block mt-8 px-10 py-4 bg-white text-dwl-black text-[11px] font-semibold uppercase tracking-[0.1em] hover:opacity-80 transition-opacity self-start"
                >
                  Get in touch →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
