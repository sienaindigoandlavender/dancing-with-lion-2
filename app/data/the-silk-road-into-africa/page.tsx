'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

/* ═══════════════════════════════════════════════════
   THE SILK ROAD INTO AFRICA
   China's Belt & Road Initiative — Operations Dataset
   Data Module · WHITE BG · Connected Intelligence
   ═══════════════════════════════════════════════════ */

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || ''

// ── TOP BORROWERS (loans 2000–2023, Boston U) ───

const BORROWERS = [
  { country: 'Angola', loans: '$42.6B', sector: 'Energy (oil-backed)', keyProject: 'Luanda rail, Caculo Cabaça dam, refineries', debtRisk: 'High — 57% of bilateral debt to China', status: 'Repayment deferrals ($4.9B from CDB/ICBC)' },
  { country: 'Ethiopia', loans: '$14.5B', sector: 'Transport, telecoms, energy', keyProject: 'Addis Ababa–Djibouti Railway, industrial parks, Hawassa textile zone', debtRisk: 'Defaulted 2024 — restructuring underway', status: 'Chinese-style state-led growth model' },
  { country: 'Egypt', loans: '$9.7B', sector: 'Infrastructure, energy, rail', keyProject: 'New Administrative Capital rail, electric grid, Suez Canal Zone', debtRisk: 'Moderate — strategic BRI partner', status: '$4.8B new investment H1 2025' },
  { country: 'Nigeria', loans: '$9.6B', sector: 'Transport, gas, mining', keyProject: 'Ogidigben Gas Industrial Park ($20B), Lagos–Kano rail, Lekki Deepwater Port', debtRisk: 'Moderate', status: 'BRI engagement +12,235% in 2025 (single Nigeria gas deal)' },
  { country: 'Kenya', loans: '$9.6B', sector: 'Transport', keyProject: 'Mombasa–Nairobi SGR ($5B), Nairobi Expressway, Lamu Port', debtRisk: 'High — debt = 67% GDP. Owes China $8B+', status: 'Ruto requested $1B new loan + restructuring' },
  { country: 'Zambia', loans: '$9.5B', sector: 'Energy, mining, roads', keyProject: 'Hydropower, Copperbelt roads, communications', debtRisk: 'Defaulted 2020 — first African sovereign default', status: 'Debt restructured. Mining corridor remains active.' },
  { country: 'Republic of Congo', loans: '$7.3B', sector: 'Oil, infrastructure', keyProject: '$23.1B construction engagement (2025)', debtRisk: 'High — oil-backed', status: 'Second-largest Africa BRI construction (2025)' },
  { country: 'Cameroon', loans: '$5.9B', sector: 'Energy, water, telecoms', keyProject: 'Kribi Deepwater Port, Memve\'ele Dam', debtRisk: 'Moderate — BRI engagement dropped 100% in H1 2025', status: 'Shift from infrastructure to emergency assistance' },
  { country: 'Djibouti', loans: '~$1.4B', sector: 'Port, military, rail', keyProject: 'Doraleh Multi-Purpose Port, China naval base (2016), Addis–Djibouti rail (Djibouti terminus)', debtRisk: 'Critical — 57% of external sovereign debt to China', status: 'China\'s only permanent overseas military base in Africa' },
  { country: 'South Africa', loans: '$6.9B', sector: 'Energy, digital, strategic', keyProject: 'Eskom projects, Huawei digital infrastructure, Johannesburg smart city', debtRisk: 'Low — BRICS partner, strategic not debt-driven', status: 'Joint ventures, tech transfer' },
]

// ── SECTOR BREAKDOWN (2000–2023, Boston U) ──────

const SECTORS = [
  { sector: 'Energy', value: '$62.72B', share: '34%', detail: 'Oil-backed loans (Angola, Nigeria, Sudan), hydropower (Ethiopia, Cameroon, Zambia), solar/wind (growing)', trend: 'Back after 2021–22 hiatus. Record oil+gas in 2025.' },
  { sector: 'Transportation', value: '$52.65B', share: '29%', detail: 'Railways (Kenya SGR, Addis–Djibouti, Lagos–Kano), highways (100,000km+), ports (~100), bridges (~1,000)', trend: 'Flagship sector. Railways are BRI\'s most visible legacy.' },
  { sector: 'ICT / Telecoms', value: '$15.67B', share: '9%', detail: 'Huawei networks, submarine cables, data centers, smart city infrastructure, digital surveillance', trend: 'Digital Silk Road expanding. 34 terrestrial + dozens submarine cables (2017–2022).' },
  { sector: 'Finance', value: '$11.98B', share: '7%', detail: 'Loans to African multilateral banks and national banks (esp. Egypt 2023)', trend: 'Risk mitigation strategy — lending to banks, not governments directly.' },
  { sector: 'Mining & Minerals', value: '$7.8B (2023)', share: 'Growing', detail: 'Cobalt (DRC), copper (Zambia), lithium, manganese. EV battery supply chain.', trend: 'Record $32.6B globally in metals/mining (2025). Africa = critical minerals hub.' },
  { sector: 'Manufacturing', value: 'Growing', share: '—', detail: 'EV batteries, solar panels, hydrogen (Nigeria). Tariff avoidance — manufacturing in Africa for US/EU markets.', trend: 'China moving factories to Africa to bypass US tariffs (2025 trend).' },
]

// ── LANDMARK PROJECTS ───────────────────────────

const LANDMARKS = [
  { project: 'Mombasa–Nairobi SGR', country: 'Kenya', cost: '$5B', built: '2017', detail: 'Standard Gauge Railway. 472km. Journey: 10hrs → 4hrs. Exim Bank financed. Phase 2 (to Uganda) stalled — both countries cannot repay.', status: 'Operating but revenue below projections. Kenya owes $8B+ to China.' },
  { project: 'Addis Ababa–Djibouti Railway', country: 'Ethiopia–Djibouti', cost: '$4.5B', built: '2018', detail: 'First electrified transnational railway in East Africa. 756km. Freight: 3 days → 20hrs. Cost reduced by 1/3. 9.5M tons cargo to date.', status: 'Handed to African management May 2025. Revenue growing 39%/year.' },
  { project: 'Ogidigben Gas Industrial Park', country: 'Nigeria', cost: '$20B', built: 'Under construction', detail: 'Single largest BRI construction contract in Africa. Gas processing facility. Drove Nigeria BRI engagement up 12,235% in 2025.', status: 'Construction phase. Flagship energy mega-deal.' },
  { project: 'Lekki Deepwater Port', country: 'Nigeria', cost: '$1.5B', built: '2023', detail: 'Deepest port in West Africa. 65% owned by Chinese consortium (CMA CGM/CHEC). Lagos.', status: 'Operational. Designed to handle 2.7M TEU containers.' },
  { project: 'Maputo–Katembe Bridge', country: 'Mozambique', cost: '$786M', built: '2018', detail: 'Africa\'s longest suspension bridge (3km). Connects Maputo to Katembe. 95% Chinese-financed. Replaced 160km unpaved road / ferry.', status: 'Operating. Critics: overpriced, high interest.' },
  { project: 'Doraleh Multi-Purpose Port', country: 'Djibouti', cost: '$590M', built: '2017', detail: 'Adjacent to China\'s first overseas naval base (est. 2016). Strategic chokepoint: Bab el-Mandeb strait.', status: 'Operating. Djibouti owes 57% of sovereign debt to China.' },
  { project: 'Kribi Deepwater Port', country: 'Cameroon', cost: '$1.3B', built: '2018 (Phase 1)', detail: 'First deepwater port in Cameroon. China Harbour Engineering. Aims to become Central Africa\'s gateway port.', status: 'Phase 2 underway. Strategic competitor to Douala.' },
  { project: 'Nairobi Expressway', country: 'Kenya', cost: '$668M', built: '2022', detail: '27km toll expressway. Built by China Road and Bridge Corporation. PPP model — toll revenue to Chinese operator for 27 years.', status: 'Operating. Usage below forecasts. Toll prices controversial.' },
  { project: 'Tanzania SGR (Phase 1)', country: 'Tanzania', cost: '$2.7B', built: 'Under construction', detail: 'Dar es Salaam to Morogoro (300km). First phase of planned 1,219km route to Mwanza/Lake Victoria.', status: 'BRI engagement in Tanzania +1,930% (2025).' },
  { project: 'Republic of Congo projects', country: 'Rep. of Congo', cost: '$23.1B', built: '2025', detail: 'Construction engagement. Details emerging — oil-backed infrastructure deal.', status: 'Second-largest African BRI engagement in 2025.' },
]

// ── DEBT vs INFRASTRUCTURE ──────────────────────

const DEBT_REALITY = [
  { claim: 'Total Chinese loans to Africa (2000–2023)', data: '$182.3B across 1,306 loans to 49 countries', source: 'Boston University / CARI' },
  { claim: 'China\'s share of Africa\'s external debt', data: '~12% (as of 2020)', source: 'Boston University' },
  { claim: 'African debt to private Western creditors', data: '3× more than debt to China, at double the interest rate', source: 'Debt Justice Group (2022)' },
  { claim: 'Assets seized by China due to loan defaults', data: 'Zero confirmed cases in Africa', source: 'Rhodium Group / CARI / Hairong & Sautman (2024)' },
  { claim: 'Chinese debt cancelled in Africa', data: '$3.4B cancelled + $15B refinanced (2000–2019)', source: 'CARI, Johns Hopkins University' },
  { claim: 'Developing world repayments to China (2025)', data: '$35B total, $22B from 75 poorest countries', source: 'Lowy Institute (2025)' },
  { claim: 'Countries in debt distress (2024)', data: '9 African countries in distress, 15 at high risk, 14 moderate', source: 'World Bank' },
  { claim: 'BRI loan restructurings', data: '38 renegotiations in 24 countries — most resolved in favor of borrower', source: 'Rhodium Group (2019)' },
  { claim: 'FOCAC 2024 pledge', data: '¥360B ($50.7B) over 3 years — loans, aid, corporate investment', source: 'FOCAC Beijing Summit (Sep 2024)' },
]

// ── THE SCALE ───────────────────────────────────

const SCALE = [
  { metric: 'Cumulative BRI engagement (2013–2025)', value: '$1.4 trillion', source: 'Griffith Asia Institute' },
  { metric: 'Africa BRI engagement (2025)', value: '$61.2B', source: 'Green Finance & Dev Center (+283% YoY)' },
  { metric: 'Africa BRI engagement (H1 2025)', value: '$39B', source: 'Green Finance & Dev Center' },
  { metric: 'BRI countries worldwide', value: '150', source: 'Griffith Asia Institute' },
  { metric: 'African countries with BRI MoUs', value: '52 + African Union', source: 'FOCAC / NDRC' },
  { metric: 'Railways built/upgraded in Africa', value: '10,000+ km', source: 'China NDRC' },
  { metric: 'Roads built/upgraded', value: '100,000+ km', source: 'China NDRC' },
  { metric: 'Ports built/upgraded', value: '~100', source: 'China NDRC / CCTV' },
  { metric: 'Bridges', value: '~1,000', source: 'China NDRC' },
  { metric: 'Power transmission lines', value: '66,000 km', source: 'China NDRC' },
  { metric: 'Communications network', value: '150,000 km backbone', source: 'China NDRC' },
  { metric: 'Chinese contracts in Africa (2013–2023)', value: '$700B+', source: 'China Ministry of Commerce' },
]

// ── TIMELINE ────────────────────────────────────

const TIMELINE = [
  { y: '2000', e: 'Forum on China-Africa Cooperation (FOCAC) established. Framework for bilateral engagement.', t: 'origin' },
  { y: '2000–12', e: 'China issues $182.3B in loans to 49 African countries. Energy and transport dominate. Angola alone: $42.6B.', t: 'expansion' },
  { y: '2013', e: 'Xi Jinping launches Belt and Road Initiative. Africa formally integrated as key corridor.', t: 'origin' },
  { y: '2013–18', e: 'Peak lending years. $10B+ annually. Addis–Djibouti railway, Kenya SGR, Maputo bridge, Lekki port all built.', t: 'expansion' },
  { y: '2016', e: 'China opens first permanent overseas military base — Djibouti. Adjacent to Doraleh port.', t: 'strategic' },
  { y: '2017', e: 'Kenya SGR opens. $5B. Cuts Mombasa–Nairobi from 10hrs to 4hrs. Phase 2 never materializes.', t: 'landmark' },
  { y: '2018', e: 'Addis–Djibouti railway opens. First electrified transnational rail in East Africa. Maputo bridge opens.', t: 'landmark' },
  { y: '2019–20', e: 'COVID + debt crisis. Lending drops sharply. Zambia defaults — first African sovereign default. China forgives 23 interest-free loans to 17 African nations.', t: 'crisis' },
  { y: '2021–22', e: '"Small and beautiful" pivot. Deal sizes shrink. Energy lending halts. Focus shifts to risk mitigation.', t: 'pivot' },
  { y: '2023', e: 'Lending recovers: $4.61B (largest since 2019). Lekki Deepwater Port opens. Mining surges to $7.8B.', t: 'expansion' },
  { y: '2024', e: 'FOCAC Beijing Summit: Xi pledges ¥360B ($50.7B) over 3 years. BRI engagement: $122B globally. FDI into Africa +86%.', t: 'landmark' },
  { y: '2025', e: 'Record year. $213.5B in new BRI deals globally (+75%). Africa: $61.2B (+283%). Nigeria $20B gas deal. Private sector leads. Manufacturing shift to bypass US tariffs.', t: 'expansion' },
]

// ── SOURCES ─────────────────────────────────────

const SOURCES = [
  { org: 'Green Finance & Development Center / Griffith Asia Institute', doc: 'BRI Investment Reports 2024, H1 2025, 2025' },
  { org: 'Boston University Global Development Policy Center', doc: 'Chinese Loans to Africa Database (2000–2023)' },
  { org: 'CARI (China Africa Research Initiative)', doc: 'Johns Hopkins SAIS — Debt Relief / Loan Data' },
  { org: 'Lowy Institute', doc: '2025 Report: Chinese Debt Repayments by Developing Countries' },
  { org: 'Africa Center for Strategic Studies', doc: 'Mapping China\'s Strategic Port Development in Africa (Apr 2025)' },
  { org: 'FOCAC / China NDRC', doc: 'Forum on China-Africa Cooperation — BRI Infrastructure White Paper' },
  { org: 'Debt Justice Group', doc: '2022 Analysis: Africa\'s Debt to Private vs Chinese Creditors' },
  { org: 'Rhodium Group', doc: '38 Chinese Debt Renegotiations Analysis (2019)' },
  { org: 'South China Morning Post', doc: 'Record $213.5B BRI Deals in 2025 (Jan 2026)' },
  { org: 'Dialogue Earth', doc: 'The Belt and Road Boomed in 2025 (Feb 2026)' },
  { org: 'UNCTAD', doc: 'Global Investment Trends Monitor / FDI Data 2024–2025' },
  { org: 'Hairong & Sautman', doc: '2024 Study: Debt-Trap Narrative Assessment' },
]

// ── HELPERS ──────────────────────────────────────

function Th({ children }: { children: React.ReactNode }) {
  return <th className="text-left py-2.5 pr-3 text-[9px] uppercase tracking-[0.08em] text-[#737373] font-semibold">{children}</th>
}
function Td({ children, bold }: { children: React.ReactNode; bold?: boolean }) {
  return <td className={`py-2.5 pr-3 text-[12px] leading-snug ${bold ? 'text-[#0a0a0a] font-semibold' : 'text-[#525252]'}`}>{children}</td>
}

// ── MAP ─────────────────────────────────────────

const MAP_MARKERS = [
  { name: 'Nigeria — $20B gas deal', coords: [3.4, 6.5] as [number, number], color: '#DC2626', detail: 'Ogidigben Gas Industrial Park. Single largest BRI Africa deal. +12,235% engagement.' },
  { name: 'Rep. of Congo — $23.1B', coords: [15.3, -4.3] as [number, number], color: '#DC2626', detail: 'Second-largest Africa BRI engagement (2025). Oil-backed.' },
  { name: 'Kenya — SGR + $8B debt', coords: [36.8, -1.3] as [number, number], color: '#B45309', detail: 'Mombasa–Nairobi SGR ($5B). Nairobi Expressway. Owes $8B+.' },
  { name: 'Ethiopia — $14.5B', coords: [38.7, 9.0] as [number, number], color: '#B45309', detail: 'Addis–Djibouti Railway. Industrial parks. Defaulted 2024.' },
  { name: 'Djibouti — naval base', coords: [43.1, 11.6] as [number, number], color: '#0a0a0a', detail: 'China\'s only African military base. 57% sovereign debt to China.' },
  { name: 'Angola — $42.6B', coords: [13.2, -8.8] as [number, number], color: '#DC2626', detail: 'Largest African borrower. Oil-backed. $4.9B deferrals received.' },
  { name: 'Egypt — strategic', coords: [31.2, 30.0] as [number, number], color: '#0369A1', detail: '$9.7B loans. Suez Canal Zone. New capital rail. $4.8B new (H1 2025).' },
  { name: 'Zambia — defaulted', coords: [28.3, -15.4] as [number, number], color: '#991B1B', detail: '$9.5B loans. First African sovereign default (2020). Copperbelt mining.' },
  { name: 'Tanzania — SGR rising', coords: [35.7, -6.2] as [number, number], color: '#0369A1', detail: '$2.7B SGR Phase 1. BRI engagement +1,930% (2025).' },
  { name: 'Mozambique — bridge', coords: [32.6, -25.9] as [number, number], color: '#525252', detail: 'Maputo–Katembe Bridge. Africa\'s longest suspension bridge.' },
  { name: 'Cameroon — $5.9B', coords: [9.7, 3.9] as [number, number], color: '#525252', detail: 'Kribi Deepwater Port. Engagement dropped 100% in H1 2025.' },
  { name: 'South Africa — BRICS', coords: [28.0, -26.2] as [number, number], color: '#0369A1', detail: '$6.9B. Strategic, not debt-driven. Tech transfer, Huawei.' },
  { name: 'DRC — mining', coords: [25.0, -2.5] as [number, number], color: '#B45309', detail: 'Cobalt, copper. Sicomines JV. Critical minerals for EV supply chain.' },
  { name: 'Morocco — Tanger Med', coords: [-5.8, 35.8] as [number, number], color: '#0369A1', detail: 'BRI MoU signatory. Manufacturing corridor. Automotive supply chain.' },
]

// ── PAGE ────────────────────────────────────────

export default function TheSilkRoadIntoAfrica() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapRef = useRef<any>(null)

  useEffect(() => {
    if (!mapContainer.current || mapRef.current || !MAPBOX_TOKEN) return
    const link = document.createElement('link')
    link.rel = 'stylesheet'; link.href = 'https://api.mapbox.com/mapbox-gl-js/v3.1.2/mapbox-gl.css'
    document.head.appendChild(link)
    const script = document.createElement('script')
    script.src = 'https://api.mapbox.com/mapbox-gl-js/v3.1.2/mapbox-gl.js'
    script.onload = () => {
      const mapboxgl = (window as any).mapboxgl; if (!mapboxgl) return
      mapboxgl.accessToken = MAPBOX_TOKEN
      const map = new mapboxgl.Map({ container: mapContainer.current!, style: 'mapbox://styles/mapbox/light-v11', center: [20, 5], zoom: 2.8, interactive: true, attributionControl: false })
      mapRef.current = map
      map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right')
      map.on('load', () => {
        MAP_MARKERS.forEach((m) => {
          const el = document.createElement('div')
          const sz = m.color === '#DC2626' ? 14 : m.color === '#0a0a0a' ? 10 : 11
          el.style.cssText = `width:${sz}px;height:${sz}px;border-radius:50%;background:${m.color};border:2px solid ${m.color}40;box-shadow:0 0 8px ${m.color}50;cursor:pointer;`
          new mapboxgl.Marker(el).setLngLat(m.coords).setPopup(
            new mapboxgl.Popup({ offset: 10, maxWidth: '280px', closeButton: false }).setHTML(
              `<div style="font-family:system-ui;padding:4px 0;"><p style="font-size:13px;font-weight:700;margin:0 0 4px;">${m.name}</p><p style="font-size:11px;color:#525252;margin:0;">${m.detail}</p></div>`
            )
          ).addTo(map)
        })
      })
    }
    document.head.appendChild(script)
    return () => { mapRef.current?.remove(); mapRef.current = null }
  }, [])

  return (
    <div className="bg-white text-[#262626] pt-16">

      <section className="max-w-[1000px] mx-auto px-6 md:px-10 pt-16 pb-10">
        <p className="text-[10px] uppercase tracking-[0.12em] text-[#991B1B] mb-4 font-semibold">Data Module &middot; Geopolitical &amp; Economic Intelligence</p>
        <h1 className="font-serif text-[clamp(2.5rem,7vw,5rem)] leading-[0.9] tracking-[-0.02em] text-[#0a0a0a]">The Silk Road Into Africa</h1>
        <p className="font-serif text-[clamp(1.1rem,2.5vw,1.5rem)] text-[#525252] italic mt-3">China&rsquo;s Belt &amp; Road Initiative &mdash; Operations Dataset &middot; 2000&ndash;Present</p>
        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
          {[['$182.3B', 'Loans to Africa (2000–2023)'], ['$61.2B', 'Africa BRI engagement (2025 — +283%)'], ['52', 'African countries signed BRI MoUs'], ['10,000+ km', 'Railways built or upgraded'], ['~100', 'Ports built or upgraded']].map(([v, l]) => (
            <div key={l}><p className="font-serif text-[28px] md:text-[32px] italic text-[#0a0a0a] leading-none">{v}</p><p className="text-[9px] uppercase tracking-[0.08em] text-[#737373] mt-1 max-w-[180px]">{l}</p></div>
          ))}
        </div>
      </section>

      <section className="relative"><div ref={mapContainer} style={{ width: '100%', height: '55vh', minHeight: 400 }} />
        <div className="flex gap-4 flex-wrap px-6 md:px-10 mt-3">
          {[['Mega-deal (2025)', '#DC2626'], ['High debt exposure', '#B45309'], ['Strategic partner', '#0369A1'], ['Military base', '#0a0a0a'], ['Other BRI', '#525252']].map(([l, c]) => (
            <div key={l} className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full" style={{ background: c }} /><span className="text-[9px] uppercase tracking-[0.08em] text-[#737373]">{l}</span></div>
          ))}
        </div>
      </section>

      {/* 001 — SCALE */}
      <section className="border-t border-[#e5e5e5] mt-8"><div className="max-w-[1000px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <p className="text-[10px] uppercase tracking-[0.12em] text-[#737373] mb-3">001 &middot; The Scale</p>
        <h2 className="font-serif text-[28px] md:text-[36px] italic text-[#0a0a0a] leading-[1.05] mb-10">The largest infrastructure programme in human history.</h2>
        <div className="overflow-x-auto"><table className="w-full min-w-[500px]" style={{ borderCollapse: 'collapse' }}>
          <thead><tr className="border-b-2 border-[#0a0a0a]"><Th>Metric</Th><Th>Value</Th><Th>Source</Th></tr></thead>
          <tbody>{SCALE.map((s, i) => (<tr key={i} className="border-b border-[#e5e5e5]"><Td>{s.metric}</Td><Td bold>{s.value}</Td><td className="py-2.5 text-[10px] text-[#737373]">{s.source}</td></tr>))}</tbody>
        </table></div>
      </div></section>

      {/* 002 — TOP BORROWERS */}
      <section className="border-t border-[#e5e5e5] bg-[#fafafa]"><div className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <p className="text-[10px] uppercase tracking-[0.12em] text-[#737373] mb-3">002 &middot; Top Borrowers</p>
        <h2 className="font-serif text-[28px] md:text-[36px] italic text-[#0a0a0a] leading-[1.05] mb-10">10 countries. 80% of the debt.</h2>
        <div className="overflow-x-auto"><table className="w-full min-w-[900px]" style={{ borderCollapse: 'collapse' }}>
          <thead><tr className="border-b-2 border-[#0a0a0a]"><Th>Country</Th><Th>Total loans</Th><Th>Primary sector</Th><Th>Key projects</Th><Th>Debt risk</Th><Th>Status (2025)</Th></tr></thead>
          <tbody>{BORROWERS.map((b) => (
            <tr key={b.country} className="border-b border-[#e5e5e5] align-top">
              <Td bold>{b.country}</Td>
              <td className="py-2.5 pr-3 text-[14px] font-bold" style={{ color: '#991B1B' }}>{b.loans}</td>
              <Td>{b.sector}</Td>
              <td className="py-2.5 pr-3 text-[11px] text-[#525252] leading-snug max-w-[220px]">{b.keyProject}</td>
              <td className="py-2.5 pr-3 text-[11px] text-[#525252] leading-snug max-w-[160px]">{b.debtRisk}</td>
              <td className="py-2.5 text-[11px] text-[#525252] leading-snug max-w-[180px]">{b.status}</td>
            </tr>
          ))}</tbody>
        </table></div>
      </div></section>

      {/* 003 — SECTORS */}
      <section className="border-t border-[#e5e5e5]"><div className="max-w-[1000px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <p className="text-[10px] uppercase tracking-[0.12em] text-[#737373] mb-3">003 &middot; Sector Breakdown</p>
        <h2 className="font-serif text-[28px] md:text-[36px] italic text-[#0a0a0a] leading-[1.05] mb-10">Where the money goes.</h2>
        <div className="space-y-0">{SECTORS.map((s, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-4 py-5 border-b border-[#e5e5e5]">
            <div className="md:col-span-3"><p className="text-[13px] text-[#0a0a0a] font-semibold">{s.sector}</p><p className="text-[18px] font-bold mt-1" style={{ color: '#991B1B' }}>{s.value}</p></div>
            <div className="md:col-span-5"><p className="text-[13px] text-[#525252] leading-relaxed">{s.detail}</p></div>
            <div className="md:col-span-4"><p className="text-[12px] text-[#0a0a0a] font-semibold leading-snug">{s.trend}</p></div>
          </div>
        ))}</div>
      </div></section>

      {/* 004 — LANDMARK PROJECTS */}
      <section className="border-t border-[#e5e5e5] bg-[#fafafa]"><div className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <p className="text-[10px] uppercase tracking-[0.12em] text-[#737373] mb-3">004 &middot; Landmark Projects</p>
        <h2 className="font-serif text-[28px] md:text-[36px] italic text-[#0a0a0a] leading-[1.05] mb-10">The infrastructure that changed the map.</h2>
        <div className="overflow-x-auto"><table className="w-full min-w-[900px]" style={{ borderCollapse: 'collapse' }}>
          <thead><tr className="border-b-2 border-[#0a0a0a]"><Th>Project</Th><Th>Country</Th><Th>Cost</Th><Th>Year</Th><Th>Detail</Th><Th>Status</Th></tr></thead>
          <tbody>{LANDMARKS.map((l, i) => (
            <tr key={i} className="border-b border-[#e5e5e5] align-top">
              <Td bold>{l.project}</Td><Td>{l.country}</Td>
              <td className="py-2.5 pr-3 text-[12px] font-bold" style={{ color: '#991B1B' }}>{l.cost}</td>
              <Td>{l.built}</Td>
              <td className="py-2.5 pr-3 text-[11px] text-[#525252] leading-snug max-w-[240px]">{l.detail}</td>
              <td className="py-2.5 text-[11px] text-[#525252] leading-snug max-w-[180px]">{l.status}</td>
            </tr>
          ))}</tbody>
        </table></div>
      </div></section>

      {/* 005 — DEBT vs INFRASTRUCTURE */}
      <section className="border-t border-[#e5e5e5]"><div className="max-w-[1000px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <p className="text-[10px] uppercase tracking-[0.12em] text-[#737373] mb-3">005 &middot; The Debt Question</p>
        <h2 className="font-serif text-[28px] md:text-[36px] italic text-[#0a0a0a] leading-[1.05] mb-4">Debt trap or development? The data.</h2>
        <p className="text-[14px] text-[#525252] leading-relaxed max-w-[560px] mb-10">The &ldquo;debt trap diplomacy&rdquo; narrative dominates Western media. The academic research tells a more complicated story. Africa owes three times more to private Western creditors than to China. No Chinese asset seizures have occurred in Africa. But $35 billion in repayments are due in 2025, and 9 African countries are in debt distress. Both things are true simultaneously.</p>
        <div className="overflow-x-auto"><table className="w-full min-w-[600px]" style={{ borderCollapse: 'collapse' }}>
          <thead><tr className="border-b-2 border-[#0a0a0a]"><Th>Claim / Metric</Th><Th>Data</Th><Th>Source</Th></tr></thead>
          <tbody>{DEBT_REALITY.map((d, i) => (<tr key={i} className="border-b border-[#e5e5e5] align-top"><Td>{d.claim}</Td><Td bold>{d.data}</Td><td className="py-2.5 text-[10px] text-[#737373]">{d.source}</td></tr>))}</tbody>
        </table></div>
      </div></section>

      {/* 006 — TIMELINE */}
      <section className="border-t border-[#e5e5e5] bg-[#fafafa]"><div className="max-w-[1000px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <p className="text-[10px] uppercase tracking-[0.12em] text-[#737373] mb-3">006 &middot; Timeline</p>
        <h2 className="font-serif text-[28px] md:text-[36px] italic text-[#0a0a0a] leading-[1.05] mb-12">2000 &mdash; 2025</h2>
        <div className="relative"><div className="absolute left-[7px] top-0 bottom-0 w-px bg-[#d4d4d4]" />
          {TIMELINE.map((t, i) => {
            const color = t.t === 'origin' ? '#525252' : t.t === 'expansion' ? '#047857' : t.t === 'landmark' ? '#0369A1' : t.t === 'strategic' ? '#0a0a0a' : t.t === 'crisis' ? '#991B1B' : '#B45309'
            return (<div key={i} className="flex gap-4 mb-5"><div className="shrink-0"><div className="w-[14px] h-[14px] rounded-full border-2" style={{ borderColor: color, background: t.t === 'landmark' || t.t === 'strategic' ? color : '#fff' }} /></div><div><p className="font-mono text-[11px] font-bold mb-1" style={{ color }}>{t.y}</p><p className="text-[13px] text-[#525252] leading-relaxed">{t.e}</p></div></div>)
          })}
        </div>
        <div className="flex gap-4 flex-wrap mt-6 pt-4 border-t border-[#e5e5e5]">
          {[['Origin', '#525252'], ['Expansion', '#047857'], ['Landmark', '#0369A1'], ['Strategic', '#0a0a0a'], ['Crisis', '#991B1B'], ['Pivot', '#B45309']].map(([l, c]) => (
            <div key={l} className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full" style={{ background: c }} /><span className="text-[9px] uppercase tracking-[0.08em] text-[#737373]">{l}</span></div>
          ))}
        </div>
      </div></section>

      {/* CONNECTED INTELLIGENCE */}
      <section className="border-t border-[#e5e5e5] bg-[#0a0a0a]"><div className="max-w-[1000px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <p className="text-[10px] uppercase tracking-[0.12em] text-white/30 mb-3">007 &middot; Connected Intelligence</p>
        <h2 className="font-serif text-[28px] md:text-[36px] italic text-white leading-[1.05] mb-12">The pattern.</h2>
        <div className="space-y-10">
          {[
            { to: 'The Atlantic Spine', link: '/data/the-atlantic-spine', insight: 'Nigeria\'s $20B Ogidigben Gas Industrial Park is the single largest Chinese construction contract in Africa. The Nigeria-Morocco Gas Pipeline and China\'s gas investment share the same geography. Two competing visions for Nigeria\'s gas: one flows north to Europe via Morocco, the other flows east to China\'s industrial processing. The pipeline and the Silk Road are bidding for the same molecule.' },
            { to: 'The Blood Gold', link: '/data/the-blood-gold', insight: 'China and Russia are competing for influence in the same countries. China builds infrastructure. Russia sends mercenaries. In the Sahel, AES juntas expelled Western forces and welcomed both. Mali, Burkina Faso, Niger — these countries receive Wagner fighters and Chinese loans simultaneously. Two forms of extraction, one continent.' },
            { to: 'The Sahel War', link: '/data/the-sahel-war', insight: 'Chinese infrastructure requires stability. The Sahel has none. Railway lines, ports, and power grids mean nothing if the state cannot secure the corridor. JNIM controls 50% of Mali. 60% of Burkina Faso is outside state control. China\'s infrastructure investment in unstable states is a bet that the state will survive. In the Sahel, the state is losing.' },
          ].map((c, i) => (
            <div key={i} className="border-l-[3px] pl-6 md:pl-8" style={{ borderColor: '#991B1B' }}>
              <Link href={c.link} className="text-[10px] text-[#991B1B] uppercase tracking-[0.1em] underline hover:no-underline font-semibold">{c.to}</Link>
              <p className="text-[14px] text-white/60 leading-relaxed max-w-[560px] mt-2">{c.insight}</p>
            </div>
          ))}
        </div>
      </div></section>

      {/* SOURCES */}
      <section className="border-t border-[#e5e5e5] bg-[#fafafa]"><div className="max-w-[1000px] mx-auto px-6 md:px-10 py-16">
        <p className="text-[10px] uppercase tracking-[0.12em] text-[#737373] mb-8">Sources &amp; Attribution</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {SOURCES.map((s, i) => (<div key={i} className="text-[11px]"><span className="text-[#0a0a0a] font-semibold">{s.org}</span> <span className="text-[#737373]">&mdash; {s.doc}</span></div>))}
        </div>
        <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-t border-[#e5e5e5]">
          <p className="text-[12px] text-[#737373]">Data compilation, cartography, and analysis: <strong className="text-[#0a0a0a]">Dancing with Lions</strong></p>
          <p className="text-[11px] text-[#737373]">&copy; Dancing with Lions 2026</p>
        </div>
      </div></section>
    </div>
  )
}
