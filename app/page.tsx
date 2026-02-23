'use client'

import Link from 'next/link'
import { SEARCH_INDEX } from '@/lib/search-index'

/* ═══════════════════════════════════════════════════════
   HOMEPAGE — Dancing with Lions
   Africa's intelligence source.
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

      {/* ═══ THE STATEMENT ═══ */}
      <section className="border-t border-dwl-border">
        <div className="px-8 md:px-[8%] lg:px-[12%] py-24 md:py-40">
          <div className="max-w-[780px]">
            <p className="font-serif text-[clamp(1.6rem,3.5vw,2.8rem)] text-dwl-black leading-[1.3] italic">
              54 countries. 1.4 billion people. The fastest-growing 
              economies on earth. And the thinnest intelligence 
              infrastructure of any continent.
            </p>
            <p className="text-body text-dwl-body mt-8 leading-relaxed max-w-[580px]">
              The data exists &mdash; buried in government reports, scattered across 
              institutional databases, locked in languages and formats that 
              decision-makers cannot access. We find it, structure it, verify it, 
              and publish it. Open access. Machine-readable. Beautifully designed. 
              Continuously expanding.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ THREE PILLARS ═══ */}
      <section className="border-t border-dwl-border">
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

      {/* ═══ NUMBERS ═══ */}
      <section className="bg-dwl-black">
        <div className="px-8 md:px-[8%] lg:px-[12%] py-20 md:py-28">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            {[
              { num: `${SEARCH_INDEX.length}+`, label: 'Intelligence modules' },
              { num: '8,500+', label: 'Structured lexicon entries' },
              { num: '88+', label: 'Textile records documented' },
              { num: '12', label: 'Countries in active coverage' },
            ].map((s, i) => (
              <div key={i}>
                <p className="font-serif text-[clamp(2.5rem,5vw,4rem)] italic text-white leading-none">{s.num}</p>
                <p className="text-[11px] text-white/40 uppercase tracking-[0.1em] mt-3">{s.label}</p>
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

      {/* ═══ THE NETWORK ═══ */}
      <section className="border-t border-dwl-border bg-dwl-offwhite">
        <div className="px-8 md:px-[8%] lg:px-[12%] py-24 md:py-32">
          <p className="micro-label mb-4">The Network</p>
          <p className="text-body text-dwl-body leading-relaxed mb-12 max-w-[580px]">
            Dancing with Lions operates a network of specialist platforms. 
            Each one applies structured intelligence to a specific domain &mdash; textiles, 
            food systems, language, architecture, travel. The data flows between them.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Slow Morocco', desc: 'Cultural travel intelligence', domain: 'slowmorocco.com' },
              { name: 'House of Weaves', desc: 'Ethnographic textile archive', domain: 'houseofweaves.com' },
              { name: 'Cuisines of Morocco', desc: 'Food intelligence platform', domain: 'cuisinesofmorocco.com' },
              { name: 'Darija Dictionary', desc: '8,500+ entries · Moroccan Arabic', domain: 'dharija.space' },
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
                {SEARCH_INDEX.length}+ intelligence modules. Economics, demographics, 
                trade, heritage, infrastructure, politics. Satellite maps, data 
                visualisations, source documentation. Open access.
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
                Market entry research, risk context, regional analysis, data 
                storytelling for your stakeholders.
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
