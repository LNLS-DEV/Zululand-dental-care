import { useState } from 'react'
import SEO from '../components/SEO.jsx'
import { whatsappLink, services } from '../data/site.js'
import { getSource } from '../lib/source.js'

const fieldClass =
  'w-full rounded-xl border border-ice-200 bg-white px-4 py-3 text-[15px] text-ink placeholder:text-ink-faint focus:border-duma-500 focus:outline-none focus:ring-2 focus:ring-duma-100 transition-colors'

const days = ['Any day', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export default function Book() {
  const [mode, setMode] = useState(null) // null | 'book'
  const [form, setForm] = useState({ name: '', phone: '', service: '', day: 'Any day' })
  const [errors, setErrors] = useState({})
  const [link, setLink] = useState(null)

  const update = (f) => (e) => setForm((s) => ({ ...s, [f]: e.target.value }))

  const questionUrl = () =>
    whatsappLink(`Hi, I have a question about...\n\n(Source: ${getSource()})`)

  const submit = (e) => {
    e.preventDefault()
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.phone.trim()) next.phone = 'Please enter a phone number.'
    setErrors(next)
    if (Object.keys(next).length) return
    const lines = [
      "Hi, I'd like to book an appointment at Zululand Dental Care.",
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Service: ${form.service || 'Not sure yet'}`,
      `Preferred day: ${form.day}`,
      '',
      `(Source: ${getSource()})`,
    ]
    const url = whatsappLink(lines.join('\n'))
    setLink(url)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const card =
    'reveal flex w-full flex-col items-start rounded-arch-lg border border-ice-200 bg-white p-7 text-left shadow-glass-sm transition-transform hover:-translate-y-0.5'

  return (
    <>
      <SEO
        title="Book or Ask"
        description="Book an appointment or ask a question at Zululand Dental Care in Mtubatuba. Quick, via WhatsApp."
      />

      <section className="bg-ice-wash">
        <div className="container-page py-14 sm:py-20">
          <h1 className="max-w-2xl text-[34px] sm:text-[42px]">What would you like to do?</h1>
          <p className="mt-4 max-w-prose text-[16px] leading-relaxed text-ink-soft">
            Choose an option below. The practice will reply on WhatsApp.
          </p>
        </div>
      </section>

      <section className="container-page py-12 sm:py-16">
        <div className="mx-auto max-w-2xl space-y-5">
          {mode !== 'book' && (
            <>
              <button type="button" onClick={() => setMode('book')} className={card}>
                <span className="font-display text-[22px] text-duma-900">Book an appointment</span>
                <span className="mt-2 text-[14.5px] text-ink-soft">
                  Tell us your name, number, service and preferred day.
                </span>
              </button>
              <a href={questionUrl()} target="_blank" rel="noreferrer" className={card}>
                <span className="font-display text-[22px] text-duma-900">Ask a question</span>
                <span className="mt-2 text-[14.5px] text-ink-soft">
                  Opens WhatsApp so you can message the practice directly.
                </span>
              </a>
            </>
          )}

          {mode === 'book' && (
            <div className="reveal rounded-arch-lg border border-ice-200 bg-white p-7 shadow-glass-sm sm:p-9">
              <button
                type="button"
                onClick={() => setMode(null)}
                className="mb-5 text-[13.5px] font-medium text-duma-700 hover:text-duma-900"
              >
                &larr; Back
              </button>
              <h2 className="text-[22px] text-duma-900">Book an appointment</h2>
              <form onSubmit={submit} noValidate className="mt-6 space-y-5">
                <div>
                  <label htmlFor="b-name" className="mb-1.5 block text-[13.5px] font-medium text-ink-soft">
                    Full name
                  </label>
                  <input id="b-name" className={fieldClass} value={form.name} onChange={update('name')} placeholder="Your name" autoComplete="name" />
                  {errors.name && <p className="mt-1 text-[13px] text-rose-600">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="b-phone" className="mb-1.5 block text-[13.5px] font-medium text-ink-soft">
                    Phone number
                  </label>
                  <input id="b-phone" type="tel" className={fieldClass} value={form.phone} onChange={update('phone')} placeholder="Your contact number" autoComplete="tel" />
                  {errors.phone && <p className="mt-1 text-[13px] text-rose-600">{errors.phone}</p>}
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="b-service" className="mb-1.5 block text-[13.5px] font-medium text-ink-soft">
                      Service
                    </label>
                    <select id="b-service" className={fieldClass} value={form.service} onChange={update('service')}>
                      <option value="">Not sure yet</option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.name}>{s.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="b-day" className="mb-1.5 block text-[13.5px] font-medium text-ink-soft">
                      Preferred day
                    </label>
                    <select id="b-day" className={fieldClass} value={form.day} onChange={update('day')}>
                      {days.map((d) => (
                        <option key={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-arch bg-duma-700 px-6 py-3.5 text-[15px] font-medium text-white shadow-glass-sm transition-transform hover:-translate-y-0.5 hover:bg-duma-600 sm:w-auto"
                >
                  Send request via WhatsApp
                </button>
                <p className="text-[13px] text-ink-faint">
                  This opens WhatsApp with your details filled in. The practice will confirm a time with you.
                </p>
                {link && (
                  <p className="text-[13.5px] text-ink-soft">
                    If WhatsApp didn&rsquo;t open,{' '}
                    <a className="font-medium text-duma-700 underline" href={link} target="_blank" rel="noreferrer">
                      tap here to send your request
                    </a>
                    .
                  </p>
                )}
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
