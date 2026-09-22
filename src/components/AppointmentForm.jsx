import { useState } from 'react'
import { whatsappLink } from '../data/site.js'

const initial = { name: '', phone: '', date: '', time: '', reason: '' }

export default function AppointmentForm() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [link, setLink] = useState(null)

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.phone.trim()) next.phone = 'Please enter a phone number.'
    if (!form.reason.trim()) next.reason = 'Let us know the reason for your visit.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const buildMessage = () => {
    const parts = [
      `Hi, I'd like to request an appointment at Zululand Dental Care.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
    ]
    if (form.date) parts.push(`Preferred date: ${form.date}`)
    if (form.time) parts.push(`Preferred time: ${form.time}`)
    parts.push(`Reason for visit: ${form.reason}`)
    return parts.join('\n')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    const url = whatsappLink(buildMessage())
    setLink(url)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const fieldClass =
    'w-full rounded-xl border border-ice-200 bg-white px-4 py-3 text-[15px] text-ink placeholder:text-ink-faint focus:border-duma-500 focus:outline-none focus:ring-2 focus:ring-duma-100 transition-colors'

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-[13.5px] font-medium text-ink-soft">
            Full name
          </label>
          <input id="name" className={fieldClass} value={form.name} onChange={update('name')} placeholder="Your name" />
          {errors.name && <p className="mt-1 text-[13px] text-rose-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-[13.5px] font-medium text-ink-soft">
            Phone number
          </label>
          <input id="phone" className={fieldClass} value={form.phone} onChange={update('phone')} placeholder="Your contact number" />
          {errors.phone && <p className="mt-1 text-[13px] text-rose-600">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="date" className="mb-1.5 block text-[13.5px] font-medium text-ink-soft">
            Preferred date
          </label>
          <input id="date" type="date" className={fieldClass} value={form.date} onChange={update('date')} />
        </div>
        <div>
          <label htmlFor="time" className="mb-1.5 block text-[13.5px] font-medium text-ink-soft">
            Preferred time
          </label>
          <input id="time" type="time" className={fieldClass} value={form.time} onChange={update('time')} />
        </div>
      </div>

      <div>
        <label htmlFor="reason" className="mb-1.5 block text-[13.5px] font-medium text-ink-soft">
          Reason for visit
        </label>
        <textarea
          id="reason"
          rows={4}
          className={fieldClass}
          value={form.reason}
          onChange={update('reason')}
          placeholder="e.g. check-up, toothache, my child needs a first visit"
        />
        {errors.reason && <p className="mt-1 text-[13px] text-rose-600">{errors.reason}</p>}
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-arch bg-duma-700 px-6 py-3.5 text-[15px] font-medium text-white shadow-glass-sm transition-transform hover:-translate-y-0.5 hover:bg-duma-600 sm:w-auto"
      >
        Send request via WhatsApp
      </button>

      <p className="text-[13px] text-ink-faint">
        This opens WhatsApp with your details filled in so you can send the request directly to the practice.
      </p>

      {link && (
        <p className="text-[13.5px] text-ink-soft">
          If WhatsApp didn&rsquo;t open automatically,{' '}
          <a className="font-medium text-duma-700 underline" href={link} target="_blank" rel="noreferrer">
            tap here to send your request
          </a>
          .
        </p>
      )}
    </form>
  )
}
