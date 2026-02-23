'use client'

import { useState } from 'react'

const ENQUIRY_TYPES = [
  'Intelligence briefing',
  'Data licensing',
  'Research partnership',
  'Media enquiry',
  'General',
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', organisation: '', enquiry: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const update = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }))

  const submit = async () => {
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
      } else {
        const data = await res.json()
        setErrorMsg(data.error || 'Something went wrong.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Network error. Please email us directly.')
      setStatus('error')
    }
  }

  return (
    <div className="pt-16">

      {/* ═══ HERO ═══ */}
      <section className="px-8 md:px-[8%] lg:px-[12%] pt-section pb-16">
        <div className="max-w-wide mx-auto">
          <p className="micro-label mb-6">Contact</p>
          <h1 className="font-serif text-[clamp(2.5rem,7vw,5rem)] text-dwl-black leading-[0.9]">
            Get in <em>touch.</em>
          </h1>
          <p className="text-body text-dwl-body mt-8 max-w-[520px] leading-relaxed">
            Intelligence briefings, data licensing, research partnerships, 
            or general enquiries.
          </p>
        </div>
      </section>

      <div className="max-w-wide mx-auto px-6 md:px-10"><div className="border-t border-dwl-border" /></div>

      {/* ═══ FORM + DETAILS ═══ */}
      <section className="px-8 md:px-[8%] lg:px-[12%] py-section">
        <div className="max-w-wide mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">

          {/* Form */}
          <div className="md:col-span-7">
            {status === 'sent' ? (
              <div className="py-16">
                <p className="font-serif text-[28px] text-dwl-black italic">Message received.</p>
                <p className="text-body text-dwl-body mt-4 leading-relaxed">
                  We will respond within 48 hours.
                </p>
              </div>
            ) : (
              <div className="max-w-[520px] space-y-8">

                {/* Name */}
                <div>
                  <label className="block text-[10px] text-dwl-muted uppercase tracking-[0.12em] mb-2">
                    Name <span className="text-dwl-muted/50">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => update('name', e.target.value)}
                    className="w-full bg-transparent border-b border-dwl-border py-3 text-[15px] text-dwl-black outline-none focus:border-dwl-black transition-colors placeholder:text-dwl-muted/40"
                    placeholder="Full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[10px] text-dwl-muted uppercase tracking-[0.12em] mb-2">
                    Email <span className="text-dwl-muted/50">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => update('email', e.target.value)}
                    className="w-full bg-transparent border-b border-dwl-border py-3 text-[15px] text-dwl-black outline-none focus:border-dwl-black transition-colors placeholder:text-dwl-muted/40"
                    placeholder="you@organisation.com"
                  />
                </div>

                {/* Organisation */}
                <div>
                  <label className="block text-[10px] text-dwl-muted uppercase tracking-[0.12em] mb-2">
                    Organisation
                  </label>
                  <input
                    type="text"
                    value={form.organisation}
                    onChange={e => update('organisation', e.target.value)}
                    className="w-full bg-transparent border-b border-dwl-border py-3 text-[15px] text-dwl-black outline-none focus:border-dwl-black transition-colors placeholder:text-dwl-muted/40"
                    placeholder="Company or institution"
                  />
                </div>

                {/* Enquiry type */}
                <div>
                  <label className="block text-[10px] text-dwl-muted uppercase tracking-[0.12em] mb-3">
                    Enquiry type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {ENQUIRY_TYPES.map(type => (
                      <button
                        key={type}
                        onClick={() => update('enquiry', form.enquiry === type ? '' : type)}
                        className={`px-4 py-2 text-[12px] border transition-all ${
                          form.enquiry === type
                            ? 'border-dwl-black bg-dwl-black text-white'
                            : 'border-dwl-border text-dwl-body hover:border-dwl-black'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] text-dwl-muted uppercase tracking-[0.12em] mb-2">
                    Message <span className="text-dwl-muted/50">*</span>
                  </label>
                  <textarea
                    value={form.message}
                    onChange={e => update('message', e.target.value)}
                    rows={5}
                    className="w-full bg-transparent border-b border-dwl-border py-3 text-[15px] text-dwl-black outline-none focus:border-dwl-black transition-colors placeholder:text-dwl-muted/40 resize-none"
                    placeholder="Tell us what you need."
                  />
                </div>

                {/* Error */}
                {status === 'error' && (
                  <p className="text-[13px] text-red-600">{errorMsg}</p>
                )}

                {/* Submit */}
                <button
                  onClick={submit}
                  disabled={status === 'sending' || !form.name || !form.email || !form.message}
                  className="inline-block px-10 py-4 bg-dwl-black text-white text-[11px] font-semibold uppercase tracking-[0.1em] hover:opacity-80 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending\u2026' : 'Send enquiry \u2192'}
                </button>

              </div>
            )}
          </div>

          {/* Details sidebar */}
          <div className="md:col-span-5 md:pl-8 md:border-l md:border-dwl-border">
            <div className="space-y-10">

              <div>
                <p className="text-[10px] text-dwl-muted uppercase tracking-[0.12em] mb-2">Intelligence & Briefings</p>
                <a href="mailto:intelligence@dancingwiththelions.com" className="text-[15px] text-dwl-black hover:opacity-60 transition-opacity">
                  intelligence@dancingwiththelions.com
                </a>
              </div>

              <div>
                <p className="text-[10px] text-dwl-muted uppercase tracking-[0.12em] mb-2">General</p>
                <a href="mailto:hello@dancingwiththelions.com" className="text-[15px] text-dwl-black hover:opacity-60 transition-opacity">
                  hello@dancingwiththelions.com
                </a>
              </div>

              <div>
                <p className="text-[10px] text-dwl-muted uppercase tracking-[0.12em] mb-2">Headquarters</p>
                <p className="text-[15px] text-dwl-body">Marrakech &middot; Morocco</p>
              </div>

              <div>
                <p className="text-[10px] text-dwl-muted uppercase tracking-[0.12em] mb-2">Languages</p>
                <p className="text-[15px] text-dwl-body">English &middot; French &middot; Arabic</p>
              </div>

              <div className="pt-4 border-t border-dwl-border">
                <p className="text-[12px] text-dwl-muted leading-relaxed">
                  For data licensing and institutional subscriptions, 
                  please include your organisation name and intended use case.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
