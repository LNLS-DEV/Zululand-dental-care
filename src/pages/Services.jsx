import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import { IconArrowRight } from '../components/Icons.jsx'
import { services, whatsappLink } from '../data/site.js'

export default function Services() {
  const [openIndex, setOpenIndex] = useState(0)
  const active = services[openIndex]

  return (
    <>
      <SEO
        title="Services"
        description="General dentistry, check-ups, cleaning, fillings, extractions, root canal treatment, children's dentistry and emergency care at Zululand Dental Care, Mtubatuba."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-duma-600">Our Services</p>
            <h1 className="mt-3 max-w-lg text-[36px] leading-[1.1] sm:text-[44px]">
              Comprehensive care, designed around your smile.
            </h1>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-ink-soft sm:text-right">
            From routine check-ups to more involved treatment — explore what we offer, then book
            the service that&rsquo;s right for you.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Accordion list */}
          <div className="divide-y divide-ice-200 border-t border-ice-200">
            {services.map((s, i) => {
              const isOpen = i === openIndex
              return (
                <button
                  key={s.slug}
                  onClick={() => setOpenIndex(i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-display text-[13px] text-duma-500">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`font-display text-[22px] sm:text-[26px] ${
                        isOpen ? 'text-ink' : 'text-ink-faint'
                      }`}
                    >
                      {s.name}
                    </span>
                  </span>
                  <span className={`text-xl leading-none ${isOpen ? 'text-duma-600' : 'text-ink-faint'}`}>
                    {isOpen ? '\u00d7' : '+'}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Dynamic image panel */}
          <div className="reveal relative aspect-[4/5] overflow-hidden rounded-arch-lg shadow-glass lg:sticky lg:top-28">
            <img
              key={active.image}
              src={active.image}
              alt={active.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
              <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-white/70">
                {String(openIndex + 1).padStart(2, '0')} &middot; Service
              </p>
              <h2 className="mt-1.5 font-display text-[26px] text-white sm:text-[30px]">{active.name}</h2>
              <p className="mt-2 max-w-sm text-[14.5px] leading-relaxed text-white/85">{active.short}</p>
              <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.1em] text-white/70">
                Who it&rsquo;s for &middot; {active.whoFor}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[14px] font-medium text-ink hover:bg-ice-50"
                >
                  Book an Appointment
                  <IconArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={whatsappLink(`Hi, I'd like to enquire about ${active.name}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2.5 text-[14px] font-medium text-white hover:bg-white/10"
                >
                  Enquire about this service
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 max-w-prose text-[14.5px] leading-relaxed text-ink-soft lg:max-w-[48%]">
          {active.description}
        </p>

        <div className="mt-16 rounded-arch-lg border border-champagne-300/40 bg-champagne-100/40 p-8 text-center sm:p-10">
          <h2 className="text-[22px] text-duma-900">Wondering what a treatment costs?</h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
            Pricing depends on your specific needs and any medical aid you may have. Contact the
            practice directly and the team will talk you through it.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-arch bg-duma-700 px-6 py-3 text-[14.5px] font-medium text-white hover:bg-duma-600"
            >
              Contact the practice
            </Link>
            <a
              href={whatsappLink('Hi, I\u2019d like to ask about pricing for a treatment.')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-arch border border-duma-200 bg-white px-6 py-3 text-[14.5px] font-medium text-duma-700 hover:bg-duma-50"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
