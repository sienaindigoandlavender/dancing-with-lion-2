import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About — Dancing with Lions',
  description: 'Dancing with Lions is a cultural intelligence studio based in Marrakech. We produce data-driven stories, interactive research, and structured datasets about Africa.',
  openGraph: {
    title: 'About — Dancing with Lions',
    description: 'Cultural intelligence studio. Data storytelling. Research. Consultancy. Based in Marrakech, covering Africa.',
  },
}

const NETWORK = [
  { title: 'Slow Morocco', domain: 'slowmorocco.com', desc: 'Cultural travel intelligence' },
  { title: 'House of Weaves', domain: 'houseofweaves.com', desc: 'Ethnographic textile archive' },
  { title: 'Cuisines of Morocco', domain: 'cuisinesofmorocco.com', desc: 'Food intelligence' },
  { title: 'Darija Dictionary', domain: 'dharija.space', desc: 'Moroccan Arabic reference' },
  { title: 'Architecture of Morocco', domain: 'architectureofmorocco.com', desc: 'Built heritage' },
  { title: 'Tilwen', domain: 'tilwen.com', desc: 'Rugs with provenance' },
  { title: 'Derb 37', domain: 'derb37.com', desc: 'Street-level Marrakech' },
  { title: 'Slow World', domain: 'slowworld.travel', desc: 'Cultural journeys — 5 countries' },
]

export default function AboutPage() {
  return (
    <div className="pt-16">

      {/* ═══ HERO ═══ */}
      <section className="px-8 md:px-[8%] lg:px-[12%] pt-section pb-16">
        <div className="max-w-wide mx-auto">
          <p className="micro-label mb-6">About</p>
          <h1 className="font-serif text-[clamp(3rem,8vw,6rem)] text-dwl-black leading-[0.9]">
            Cultural intelligence<br /><em>for Africa.</em>
          </h1>
          <p className="text-body text-dwl-body mt-10 max-w-[600px] leading-relaxed">
            Dancing with Lions is a data storytelling studio based in Marrakech. 
            We produce interactive research, structured datasets, and long-form 
            data journalism about Africa, the Maghreb, and adjacent worlds.
          </p>
        </div>
      </section>

      <div className="max-w-wide mx-auto px-6 md:px-10"><div className="border-t border-dwl-border" /></div>

      {/* ═══ THREE ARMS ═══ */}
      <section className="px-8 md:px-[8%] lg:px-[12%] py-section">
        <div className="max-w-wide mx-auto">
          <p className="micro-label mb-12">What we do</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-dwl-border">

            {/* Stories */}
            <div className="bg-white p-8 md:p-10">
              <p className="font-serif text-[40px] italic text-dwl-black leading-none mb-6">01</p>
              <h2 className="font-serif text-[24px] text-dwl-black leading-snug mb-4">
                <em>Stories</em>
              </h2>
              <p className="text-[15px] text-dwl-body leading-relaxed">
                Interactive data journalism published free on our platform. 
                Satellite imagery, animated visualisations, scrolling narratives. 
                Each story is a complete intelligence briefing designed to be 
                cited by researchers and indexed by AI systems.
              </p>
            </div>

            {/* Research */}
            <div className="bg-white p-8 md:p-10">
              <p className="font-serif text-[40px] italic text-dwl-black leading-none mb-6">02</p>
              <h2 className="font-serif text-[24px] text-dwl-black leading-snug mb-4">
                <em>Research</em>
              </h2>
              <p className="text-[15px] text-dwl-body leading-relaxed">
                Structured datasets, market intelligence, cultural context reports. 
                Consumer sentiment, demographic shifts, tourism infrastructure, 
                heritage documentation. Delivered in formats analysts can use — not 
                PDFs locked behind institutional paywalls.
              </p>
            </div>

            {/* Studio */}
            <div className="bg-white p-8 md:p-10">
              <p className="font-serif text-[40px] italic text-dwl-black leading-none mb-6">03</p>
              <h2 className="font-serif text-[24px] text-dwl-black leading-snug mb-4">
                <em>Studio</em>
              </h2>
              <p className="text-[15px] text-dwl-body leading-relaxed">
                Bespoke data storytelling for organisations with research on Africa. 
                Think tanks, NGOs, government agencies, brands entering African markets. 
                We take the data and build the story — interactive, visual, publishable.
              </p>
            </div>

          </div>
        </div>
      </section>

      <div className="max-w-wide mx-auto px-6 md:px-10"><div className="border-t border-dwl-border" /></div>

      {/* ═══ THE WORK ═══ */}
      <section className="px-8 md:px-[8%] lg:px-[12%] py-section">
        <div className="max-w-wide mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="micro-label">The work</p>
          </div>
          <div className="md:col-span-8 max-w-[580px] space-y-6">
            <p className="font-serif text-[28px] md:text-[34px] leading-[1.35] text-dwl-black italic">
              Every story begins with data nobody has structured well enough.
            </p>
            <p className="text-body text-dwl-body leading-relaxed">
              Subjects range from hydrology to horse breeds, from textile trade routes 
              to trans-Atlantic dust corridors, from Amazigh geometry to the economics 
              of saffron harvesting. The common thread: verifiable data, interactive 
              presentation, and depth that no travel guide or news outlet can match.
            </p>
            <p className="text-body text-dwl-body leading-relaxed">
              Every data point is attributed. When evidence is thin, we say so. 
              The editorial standard is that a specialist would read it and nod, 
              not wince.
            </p>
            <div className="pt-4">
              <Link
                href="/data"
                className="inline-block px-8 py-4 bg-dwl-black text-white text-[11px] font-semibold uppercase tracking-[0.1em] hover:opacity-80 transition-opacity"
              >
                Browse all stories →
              </Link>
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
              Dancing with Lions powers a network of specialist platforms. 
              Each one covers a distinct vertical with the same editorial 
              standard and design system.
            </p>
            <div className="max-w-[620px]">
              {NETWORK.map((site, i) => (
                <div key={i} className="py-4 border-b border-dwl-border flex items-baseline justify-between gap-4">
                  <div className="flex items-baseline gap-4 min-w-0">
                    <span className="text-[11px] text-dwl-muted font-medium tabular-nums shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0">
                      <p className="text-[15px] text-dwl-black font-semibold">{site.title}</p>
                      <p className="text-[12px] text-dwl-muted mt-0.5">{site.desc}</p>
                    </div>
                  </div>
                  <a
                    href={`https://${site.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-dwl-muted hover:text-dwl-black transition-colors shrink-0"
                  >
                    {site.domain} ↗
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-wide mx-auto px-6 md:px-10"><div className="border-t border-dwl-border" /></div>

      {/* ═══ CAPABILITIES ═══ */}
      <section className="px-8 md:px-[8%] lg:px-[12%] py-section">
        <div className="max-w-wide mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="micro-label">Capabilities</p>
          </div>
          <div className="md:col-span-8">
            <div className="max-w-[580px] grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { label: 'Data storytelling', detail: 'Interactive long-form, scrollytelling, animated visualisations' },
                { label: 'Satellite mapping', detail: 'Mapbox, GeoJSON overlays, terrain analysis, custom markers' },
                { label: 'Structured datasets', detail: 'Supabase, API-ready, JSON-LD, machine-readable' },
                { label: 'Cultural research', detail: 'Field-based, multilingual, source-documented' },
                { label: 'Full-stack development', detail: 'Next.js, TypeScript, Tailwind, Vercel' },
                { label: 'Editorial design', detail: 'Publication-grade typography, layout, visual identity' },
              ].map((cap, i) => (
                <div key={i}>
                  <p className="text-[14px] text-dwl-black font-semibold">{cap.label}</p>
                  <p className="text-[12px] text-dwl-muted mt-1 leading-relaxed">{cap.detail}</p>
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
            <div className="md:col-span-4">
              <p className="text-[10px] text-white/40 uppercase tracking-[0.12em]">Contact</p>
            </div>
            <div className="md:col-span-8">
              <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-white leading-[0.95] italic mb-8">
                Get in touch
              </h2>
              <div className="space-y-3">
                <p className="text-[15px] text-white/60">
                  <span className="text-[11px] text-white/30 uppercase tracking-[0.1em] inline-block w-20">Studio</span>
                  <a href="mailto:studio@dancingwithlions.com" className="text-white/80 hover:text-white transition-colors">
                    studio@dancingwithlions.com
                  </a>
                </p>
                <p className="text-[15px] text-white/60">
                  <span className="text-[11px] text-white/30 uppercase tracking-[0.1em] inline-block w-20">General</span>
                  <a href="mailto:hello@dancingwithlions.com" className="text-white/80 hover:text-white transition-colors">
                    hello@dancingwithlions.com
                  </a>
                </p>
                <p className="text-[15px] text-white/60 pt-4">
                  <span className="text-[11px] text-white/30 uppercase tracking-[0.1em] inline-block w-20">Location</span>
                  <span className="text-white/50">Marrakech · Morocco</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
