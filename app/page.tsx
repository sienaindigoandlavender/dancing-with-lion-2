'use client'

import Link from 'next/link'
import { SEARCH_INDEX } from '@/lib/search-index'

/* ═══════════════════════════════════════════════════════
   HOMEPAGE — Dancing with Lions
   Data, Business & Cultural Intelligence for Africa
   ═══════════════════════════════════════════════════════ */

const LATEST = SEARCH_INDEX.slice(-6).reverse()

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
            Data · Business · Cultural Intelligence
          </p>

          <h1 className="font-serif text-[clamp(3.5rem,11vw,9rem)] leading-[0.85] tracking-[-0.03em] text-dwl-black animate-fade-up delay-2">
            Dancing<br /><em>with Lions</em>
          </h1>

          <div className="mt-12 max-w-[580px] animate-fade-up delay-4">
            <p className="text-body text-dwl-body leading-relaxed">
              The intelligence platform for Africa. Structured datasets, 
              interactive research, and deep-context briefings on the 
              continent&rsquo;s markets, demographics, infrastructure, 
              heritage, and emerging economies.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-6 animate-fade-up delay-5">
            <Link
              href="/data"
              className="inline-block px-8 py-4 bg-dwl-black text-white text-[11px] font-semibold uppercase tracking-[0.1em] hover:opacity-100"
            >
              Explore the Data →
            </Link>
            <Link
              href="/about"
              className="meta-text hover:text-dwl-black transition-colors"
            >
              About DWL
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ METRICS BAR ═══ */}
      <section className="border-t border-b border-dwl-border">
        <div className="px-8 md:px-[8%] lg:px-[12%] py-5">
          <div className="flex flex-wrap gap-x-16 gap-y-3">
            {[
              { value: SEARCH_INDEX.length + '+', label: 'Intelligence Modules' },
              { value: '12', label: 'Countries' },
              { value: '30+', label: 'Satellite Maps' },
              { value: '8,500+', label: 'Darija Lexicon' },
              { value: '88', label: 'Textile Records' },
            ].map((m, i) => (
              <div key={i} className="flex items-baseline gap-2">
                <span className="font-serif text-[28px] italic text-dwl-black leading-none">{m.value}</span>
                <span className="text-[10px] text-dwl-muted uppercase tracking-[0.1em]">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ THREE PILLARS ═══ */}
      <section className="border-b border-dwl-border">
        <div className="px-8 md:px-[8%] lg:px-[12%] py-24 md:py-32">
          <p className="micro-label mb-16">What we cover</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-dwl-border">
            {[
              {
                num: '01',
                title: 'Data Intelligence',
                text: 'Demographics, trade flows, infrastructure mapping, economic indicators, climate data, resource inventories. Structured, sourced, machine-readable. Every dataset built for analysts, not tourists.',
              },
              {
                num: '02',
                title: 'Business Intelligence',
                text: 'Market entry context, regulatory landscapes, tourism economics, real estate signals, investment corridor mapping, supply chain analysis. The layer between the spreadsheet and the decision.',
              },
              {
                num: '03',
                title: 'Cultural Intelligence',
                text: 'Heritage systems, consumer behaviour drivers, linguistic mapping, textile trade networks, food economies, demographic sentiment. The context that explains why the numbers are what they are.',
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
          <p className="micro-label mb-8">Coverage verticals</p>
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

      {/* ═══ THESIS ═══ */}
      <section className="border-t border-dwl-border">
        <div className="px-8 md:px-[8%] lg:px-[12%] py-24 md:py-40">
          <div className="max-w-[720px]">
            <div className="border-l-[3px] border-dwl-black pl-8 md:pl-12">
              <p className="font-serif text-[clamp(1.5rem,3.5vw,2.5rem)] text-dwl-black leading-[1.35] italic">
                Africa has 54 countries, 1.4 billion people, and the 
                thinnest intelligence infrastructure of any continent on earth.
              </p>
              <p className="text-body text-dwl-body mt-8 leading-relaxed max-w-[520px]">
                The data exists. It is scattered across government PDFs, paywalled 
                journals, consultant slide decks, and the heads of people who live 
                there. We structure it, visualise it, source it, and make it 
                available — to analysts, investors, researchers, policymakers, 
                and the AI systems that increasingly answer questions about the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ POWERED BY DWL ═══ */}
      <section className="border-t border-dwl-border bg-dwl-offwhite">
        <div className="px-8 md:px-[8%] lg:px-[12%] py-24 md:py-32">
          <p className="micro-label mb-12">Powered by Dancing with Lions</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Slow Morocco', desc: 'Cultural travel intelligence & journeys', domain: 'slowmorocco.com' },
              { name: 'House of Weaves', desc: 'Ethnographic textile archive · 88 traditions', domain: 'houseofweaves.com' },
              { name: 'Tilwen', desc: 'Rugs with provenance & documentation', domain: 'tilwen.com' },
              { name: 'Darija Dictionary', desc: 'Moroccan Arabic · 8,500+ entries', domain: 'dharija.space' },
            ].map((s, i) => (
              <a
                key={i}
                href={`https://${s.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <p className="text-[15px] text-dwl-black font-semibold group-hover:opacity-60 transition-opacity">{s.name}</p>
                <p className="text-[12px] text-dwl-muted mt-1 leading-relaxed">{s.desc}</p>
                <p className="text-[11px] text-dwl-muted mt-2 group-hover:text-dwl-black transition-colors">{s.domain} ↗</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="bg-dwl-black">
        <div className="px-8 md:px-[8%] lg:px-[12%] py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <div>
              <p className="text-[10px] text-white/40 uppercase tracking-[0.12em] mb-4">Open access</p>
              <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-white leading-[0.95] italic">
                Explore the platform
              </h2>
              <p className="text-[14px] text-white/50 mt-4 max-w-[400px] leading-relaxed">
                {SEARCH_INDEX.length}+ intelligence modules. Satellite maps, economic data,
                demographic atlases, trade flow analysis. Open access.
              </p>
              <Link
                href="/data"
                className="inline-block mt-8 px-10 py-4 bg-white text-dwl-black text-[11px] font-semibold uppercase tracking-[0.1em] hover:opacity-80 transition-opacity"
              >
                Browse Modules →
              </Link>
            </div>
            <div>
              <p className="text-[10px] text-white/40 uppercase tracking-[0.12em] mb-4">Intelligence services</p>
              <h2 className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] text-white leading-[1.1] italic">
                Commission a briefing
              </h2>
              <p className="text-[14px] text-white/50 mt-4 max-w-[400px] leading-relaxed">
                Bespoke intelligence for organisations operating in African markets. 
                Contextual risk data, market entry research, regional deep-dives.
              </p>
              <a
                href="mailto:intelligence@dancingwiththelions.com"
                className="inline-block mt-8 px-10 py-4 border border-white/20 text-white text-[11px] font-semibold uppercase tracking-[0.1em] hover:bg-white hover:text-dwl-black transition-all"
              >
                Get in touch →
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
