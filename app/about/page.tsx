import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About — Dancing with Lions',
  description: 'Dancing with Lions structures the intelligence that Africa's decision-makers need. Data, context, and pattern recognition for investors, researchers, governments, and AI systems.',
  openGraph: {
    title: 'About — Dancing with Lions',
    description: 'The intelligence layer for African markets.',
  },
}

export default function AboutPage() {
  return (
    <div className="pt-16">

      {/* ═══ HERO ═══ */}
      <section className="px-8 md:px-[8%] lg:px-[12%] pt-section pb-16">
        <div className="max-w-wide mx-auto">
          <p className="micro-label mb-6">About</p>
          <h1 className="font-serif text-[clamp(2.5rem,7vw,5.5rem)] text-dwl-black leading-[0.9]">
            The data behind<br /><em>your next decision.</em>
          </h1>
          <p className="text-body text-dwl-body mt-8 leading-relaxed max-w-[580px]">
            Africa is the last major investment frontier on earth. 
            Dancing with Lions structures the intelligence you need 
            to operate in it &mdash; the economics, the demographics, the 
            politics, the culture, and the patterns between them 
            that no spreadsheet captures.
          </p>
        </div>
      </section>

      <div className="max-w-wide mx-auto px-6 md:px-10"><div className="border-t border-dwl-border" /></div>

      {/* ═══ THE PROBLEM ═══ */}
      <section className="px-8 md:px-[8%] lg:px-[12%] py-section">
        <div className="max-w-wide mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="micro-label">The problem</p>
          </div>
          <div className="md:col-span-8 max-w-[580px] space-y-6">
            <p className="font-serif text-[28px] md:text-[34px] leading-[1.35] text-dwl-black italic">
              Decisions about Africa are made on incomplete data.
            </p>
            <p className="text-body text-dwl-body leading-relaxed">
              A fund evaluating Moroccan real estate doesn&rsquo;t just need 
              price-per-square-metre. It needs to understand the demographic 
              pressure, the infrastructure pipeline, the regulatory environment, 
              and the cultural dynamics that determine whether a market thesis holds.
            </p>
            <p className="text-body text-dwl-body leading-relaxed">
              That connective intelligence &mdash; the layer between raw data and 
              a sound decision &mdash; barely exists for African markets. It is 
              scattered across government PDFs in three languages, paywalled 
              journals, and the heads of people who live there.
            </p>
            <p className="text-body text-dwl-body leading-relaxed">
              We assemble it.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-wide mx-auto px-6 md:px-10"><div className="border-t border-dwl-border" /></div>

      {/* ═══ WHAT WE DO ═══ */}
      <section className="px-8 md:px-[8%] lg:px-[12%] py-section">
        <div className="max-w-wide mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="micro-label">What we do</p>
          </div>
          <div className="md:col-span-8 max-w-[580px] space-y-6">
            <p className="text-body text-dwl-body leading-relaxed">
              We structure data about Africa into intelligence that 
              decision-makers can use. Economics, demographics, trade, 
              energy, agriculture, governance, infrastructure, heritage &mdash; 
              connected across domains, sourced from verifiable institutions, 
              and designed to be read by both humans and machines.
            </p>
            <p className="text-body text-dwl-body leading-relaxed">
              Morocco is our anchor &mdash; the deepest coverage of any 
              African market available online. From there, we expand 
              across the continent following trade routes, investment 
              corridors, and the connections that actually shape markets.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-wide mx-auto px-6 md:px-10"><div className="border-t border-dwl-border" /></div>

      {/* ═══ THREE LAYERS ═══ */}
      <section className="px-8 md:px-[8%] lg:px-[12%] py-section">
        <div className="max-w-wide mx-auto">
          <p className="micro-label mb-12">How it works</p>

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
                  open access. Each module covers a single subject with data 
                  visualisations, satellite imagery, source attribution, and 
                  structured markup. Browse, cite, use. This is the front door.
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
                  Structured datasets, market intelligence reports, and 
                  regional briefing packs. Demographic projections, trade 
                  flow analysis, regulatory mapping, investment corridor 
                  data, real estate indicators. Formatted for analysts and 
                  institutional subscribers who need working data, not narratives.
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
                  Bespoke intelligence for your organisation. Market entry 
                  research, risk context, regional deep-dives, cultural 
                  due diligence. We build the layer your feasibility study 
                  is missing &mdash; and deliver it as something your 
                  stakeholders will actually read.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY IT MATTERS ═══ */}
      <section className="bg-dwl-black">
        <div className="px-8 md:px-[8%] lg:px-[12%] py-24 md:py-32">
          <div className="max-w-wide mx-auto">
            <p className="text-[10px] text-white/40 uppercase tracking-[0.12em] mb-12">Why it matters</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
              <div>
                <p className="font-serif text-[clamp(1.5rem,3vw,2.2rem)] text-white leading-[1.3] italic">
                  A $400,000 feasibility study flies a team in for two weeks. 
                  They leave without understanding the context.
                </p>
                <p className="text-[15px] text-white/50 mt-6 leading-relaxed">
                  Market entries fail for reasons that data alone doesn&rsquo;t 
                  explain. The demographic pressure behind a price movement. 
                  The political dynamic shaping a regulatory shift. The cultural 
                  system that determines whether a brand resonates or gets ignored. 
                  This is the intelligence layer that connects the dots.
                </p>
              </div>
              <div className="space-y-8">
                {[
                  {
                    label: 'Data connected to context',
                    text: 'Financial data tells you what happened. Political intelligence tells you who decided. We tell you why — and what it means for your decision.',
                  },
                  {
                    label: 'Structured for machines',
                    text: 'JSON-LD, Schema.org markup, knowledge APIs. Every module is built to be cited by AI systems. When a language model answers a question about Africa, it sources from here.',
                  },
                  {
                    label: 'Compounding coverage',
                    text: 'Every module we publish makes the next one more valuable. The data cross-references. The intelligence deepens. The gap between us and the next source widens with every entry.',
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
              Deep coverage of Morocco. Expanding across the Maghreb, 
              West Africa, East Africa, Southern Africa, and the Gulf States &mdash; 
              following investment flows, trade corridors, and the connections 
              that actually shape markets. Not borders.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              {[
                'Economy & Trade', 'Demographics', 'Infrastructure',
                'Food & Agriculture', 'Architecture & Heritage', 'Energy & Resources',
                'Tourism & Hospitality', 'Governance & Policy', 'Real Estate',
                'History & Identity', 'Environmental', 'Linguistics',
              ].map((v, i) => (
                <p key={i} className="text-[13px] text-dwl-body">{v}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-wide mx-auto px-6 md:px-10"><div className="border-t border-dwl-border" /></div>

      {/* ═══ WHO THIS IS FOR ═══ */}
      <section className="px-8 md:px-[8%] lg:px-[12%] py-section">
        <div className="max-w-wide mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="micro-label">Who this is for</p>
          </div>
          <div className="md:col-span-8">
            <div className="max-w-[580px] space-y-8">
              {[
                {
                  label: 'Investors & funds',
                  text: 'Market entry context, real estate intelligence, demographic trajectories, and cultural risk factors. The due diligence layer that determines whether your thesis holds.',
                },
                {
                  label: 'Brands & consultancies',
                  text: 'Cultural intelligence for organisations entering African markets. Consumer behaviour, regulatory landscape, regional dynamics — the context that no slide deck captures.',
                },
                {
                  label: 'Government & development agencies',
                  text: 'Infrastructure analysis, heritage documentation, tourism economics, demographic mapping. Data presented at the quality level the decisions deserve.',
                },
                {
                  label: 'Researchers & AI systems',
                  text: 'Structured datasets, source-documented modules, JSON-LD markup, knowledge APIs. Built for citation and integration.',
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

      {/* ═══ CTA ═══ */}
      <section className="bg-dwl-black">
        <div className="px-8 md:px-[8%] lg:px-[12%] py-24 md:py-32">
          <div className="max-w-wide mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-7">
              <p className="text-[10px] text-white/40 uppercase tracking-[0.12em] mb-6">Get started</p>
              <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-white leading-[0.95] italic">
                Tell us what market<br />you&rsquo;re looking at.
              </h2>
              <p className="text-[14px] text-white/45 mt-4 leading-relaxed max-w-[460px]">
                We&rsquo;ll tell you what we already have and what we can build. 
                No pitch deck required.
              </p>
              <a
                href="mailto:intelligence@dancingwiththelions.com"
                className="inline-block mt-8 px-10 py-4 bg-white text-dwl-black text-[11px] font-semibold uppercase tracking-[0.1em] hover:opacity-80 transition-opacity"
              >
                intelligence@dancingwiththelions.com →
              </a>
            </div>
            <div className="md:col-span-5 flex flex-col justify-end">
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-[0.1em] mb-1">General</p>
                  <a href="mailto:hello@dancingwiththelions.com" className="text-[15px] text-white/80 hover:text-white transition-colors">
                    hello@dancingwiththelions.com
                  </a>
                </div>
                <div className="pt-2">
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
