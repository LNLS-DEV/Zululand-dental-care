import { useEffect, useRef, useState } from 'react'
import { assistantTopics, assistantFallback, assistantDisclaimer, whatsappLink } from '../data/site.js'

function findAnswer(input) {
  const text = input.toLowerCase()
  for (const topic of assistantTopics) {
    if (topic.keywords.some((k) => text.includes(k))) {
      return topic.answer
    }
  }
  return assistantFallback
}

const GREETING =
  "Hi, I'm the Zululand Dental assistant. Ask me about services, appointments, location or what to expect \u2014 I'll do my best to help, or point you to the practice directly."

export default function AIAssistant() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{ role: 'assistant', text: GREETING }])
  const [input, setInput] = useState('')
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, open])

  const send = (e) => {
    e.preventDefault()
    const text = input.trim()
    if (!text) return
    const answer = findAnswer(text)
    setMessages((m) => [...m, { role: 'user', text }, { role: 'assistant', text: answer }])
    setInput('')
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'Close assistant' : 'Open dental assistant chat'}
        className="fixed bottom-5 left-5 z-40 flex h-14 items-center gap-2 rounded-full bg-duma-700 pl-4 pr-5 text-white shadow-glass transition-transform hover:scale-105 sm:bottom-7 sm:left-7"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12c0 4.14-4.03 7.5-9 7.5-.9 0-1.77-.11-2.59-.31L4 21l1.1-3.65C3.8 16.02 3 14.1 3 12 3 7.86 7.03 4.5 12 4.5S21 7.86 21 12Z"
          />
        </svg>
        <span className="text-[14px] font-medium">Ask a question</span>
      </button>

      {open && (
        <div className="fixed bottom-24 left-5 z-40 flex h-[440px] w-[min(360px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-3xl border border-ice-200 bg-white shadow-glass sm:bottom-28 sm:left-7">
          <div className="flex items-start justify-between gap-3 border-b border-ice-100 bg-ice-50 px-5 py-4">
            <div>
              <p className="text-[14.5px] font-medium text-duma-900">Practice assistant</p>
              <p className="mt-0.5 text-[12.5px] text-ink-faint">General questions only — not a substitute for a dentist</p>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close" className="text-ink-faint hover:text-ink">
              <svg viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor"><path d="M10 8.6 4.7 3.3 3.3 4.7 8.6 10l-5.3 5.3 1.4 1.4L10 11.4l5.3 5.3 1.4-1.4L11.4 10l5.3-5.3-1.4-1.4z"/></svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            <p className="rounded-xl bg-ice-50 p-3 text-[12.5px] leading-relaxed text-ink-soft">
              {assistantDisclaimer}
            </p>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[14px] leading-relaxed ${
                    m.role === 'user' ? 'bg-duma-700 text-white' : 'bg-ice-100 text-ink'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={send} className="flex items-center gap-2 border-t border-ice-100 p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about services, hours, location…"
              className="flex-1 rounded-full border border-ice-200 bg-ice-50 px-4 py-2.5 text-[14px] focus:border-duma-500 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Send"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-duma-700 text-white"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M3 20l18-8L3 4v6l12 2-12 2z"/></svg>
            </button>
          </form>

          <a
            href={whatsappLink('Hi, I have a question for the practice.')}
            target="_blank"
            rel="noreferrer"
            className="border-t border-ice-100 px-4 py-3 text-center text-[13px] font-medium text-duma-700 hover:bg-ice-50"
          >
            Prefer to ask a person? Message the practice on WhatsApp
          </a>
        </div>
      )}
    </>
  )
}
