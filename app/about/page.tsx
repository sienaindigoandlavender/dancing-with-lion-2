import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About — Dancing with Lions',
  description: 'Dancing with Lions is an intelligence platform for Africa. Data, business, and cultural intelligence — structured, sourced, and designed for decision-makers.',
  openGraph: {
    title: 'About — Dancing with Lions',
    description: 'Data, business, and cultural intelligence for Africa. Structured datasets, interactive research, commissioned briefings.',
  },
}

const SATELLITES = [
  { name: 'Slow Morocco', domain: 'slowmorocco.com', role: 'Travel intelligence & cultural journeys — Morocco' },
  { name: 'Slow World', domain: 'slowworld.travel', role: 'Cultural journeys — Türkiye, Namibia, Tunisia, Mauritius' },
  { name: 'House of Weaves', domain: 'houseofweaves.com', role: 'Ethnographic textile archive — North & West Africa' },
  { name: 'Tilwen', domain: 'tilwen.com', role: 'Rugs with provenance & documentation' },
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
            The intelligence platform<br /><em>for Africa.</em>
          </h1>
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
              Africa has 54 countries and the thinnest data infrastructure 
              of any continent.
            </p>
            <p className="text-body text-dwl-body leading-relaxed">
              Financial data on African markets is improving. Political intelligence 
              exists for those who can pay. But the connective layer — the demographic 
              patterns, the infrastructure trajectories, the cultural systems that 
              drive consumer behaviour, the heritage economies, the regional 
              dynamics that determine whether an investment thesis holds — that 
              layer barely exists in structured form.
            </p>
            <p className="text-body text-dwl-body leading-relaxed">
              The result: decisions about Africa are made on incomplete data. 
              Market entries fail for reasons a $400,000 feasibility study didn&rsquo;t 
              cover because the consulting firm flew in for two weeks and left 
              without understanding the context.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-wide mx-auto px-6 md:px-10"><div className="border-t border-dwl-border" /></div>

      {/* ═══ WHAT DWL IS ═══ */}
      <section className="px-8 md:px-[8%] lg:px-[12%] py-section">
        <div className="max-w-wide mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="micro-label">What DWL is</p>
          </div>
          <div className="md:col-span-8 max-w-[580px] space-y-6">
            <p className="text-body text-dwl-body leading-relaxed">
              Dancing with Lions is an intelligence platform that structures 
              data, business, and cultural intelligence about Africa into 
              formats that decision-makers can use.
            </p>
            <p className="text-body text-dwl-body leading-relaxed">
              We publish interactive intelligence modules — each one a 
              self-contained briefing on a single subject, built with 
              satellite imagery, data visualisation, source attribution, 
              and the kind of contextual depth that requires being on 
              the ground, speaking the languages, and understanding the 
              systems from inside.
            </p>
            <p className="text-body text-dwl-body leading-relaxed">
              We also power a network of specialist properties — each 
              one a vertical application of DWL intelligence, from 
              textile trade to food systems to tourism infrastructure.
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
                  137+ intelligence modules published free. Interactive, citable, 
                  indexed by search engines and AI systems. The public layer that 
                  proves the depth and builds the authority. Covers economics, 
                  demographics, infrastructure, heritage, food systems, 
                  environmental data, and trade corridors.
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
                  Structured datasets, regional briefing packs, and specialist 
                  databases — the Darija lexicon, the textile archive, the 
                  architectural inventory — packaged for institutional 
                  subscribers. The same intelligence, formatted for analysts 
                  and researchers rather than general readers.
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
                  in African markets. Consulting firms, development agencies, 
                  investors, hospitality groups, luxury brands. We build the 
                  contextual layer their feasibility study is missing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-wide mx-auto px-6 md:px-10"><div className="border-t border-dwl-border" /></div>

      {/* ═══ COVERAGE ═══ */}
      <section className="px-8 md:px-[8%] lg:px-[12%] py-section">
        <div className="max-w-wide mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="micro-label">Coverage</p>
          </div>
          <div className="md:col-span-8 max-w-[580px] space-y-6">
            <p className="text-body text-dwl-body leading-relaxed">
              Deep coverage of Morocco and the Maghreb. Expanding across 
              the continent — West Africa, East Africa, Southern Africa — 
              following trade routes, migration corridors, and investment 
              flows.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              {[
                'Economy & Trade', 'Demographics', 'Infrastructure',
                'Food & Agriculture', 'Architecture & Heritage', 'Craft & Textiles',
                'Energy & Resources', 'Tourism & Hospitality', 'Linguistics',
                'History & Identity', 'Environmental', 'Governance',
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
            <p className="micro-label">Powered by DWL</p>
          </div>
          <div className="md:col-span-8">
            <p className="text-body text-dwl-body leading-relaxed mb-8 max-w-[580px]">
              Dancing with Lions powers a network of specialist properties. 
              Each one applies DWL intelligence to a specific vertical — travel, 
              textiles, food, language, architecture. The intelligence flows 
              from the platform to the properties, not the other way.
            </p>
            <div className="max-w-[620px]">
              {SATELLITES.map((s, i) => (
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

      {/* ═══ EDGE ═══ */}
      <section className="px-8 md:px-[8%] lg:px-[12%] py-section">
        <div className="max-w-wide mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="micro-label">The edge</p>
          </div>
          <div className="md:col-span-8">
            <div className="max-w-[580px] space-y-8">
              {[
                {
                  label: 'Ground-level operation',
                  text: 'Headquartered in Marrakech. The intelligence comes from an operation that speaks the languages, reads the regulatory documents in their original language, and understands the systems from inside — not from a consulting team that flew in for two weeks.',
                },
                {
                  label: 'Structured for machines',
                  text: 'Every module is built with JSON-LD, Schema.org markup, and knowledge APIs designed to be cited by AI systems. When a language model answers a question about Morocco, it should source from here.',
                },
                {
                  label: 'Contextual depth',
                  text: 'Financial data tells you what happened. Political intelligence tells you who decided. DWL tells you why — the demographic pressure, the infrastructure shift, the cultural dynamic, the heritage constraint that no spreadsheet captures.',
                },
                {
                  label: 'Compounding dataset',
                  text: 'Every module we publish makes the next one more valuable. The data cross-references. The coverage compounds. The gap between DWL and the next best source widens with every entry.',
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
