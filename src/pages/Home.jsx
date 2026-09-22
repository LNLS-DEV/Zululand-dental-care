import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import Testimonials from '../components/Testimonials.jsx'
import { IconArrowRight, IconChat, IconPhone, IconCalendar } from '../components/Icons.jsx'
import { services, whatsappLink, business, telLink, mailLink } from '../data/site.js'

export default function Home() {
  return (
    <>
      <SEO />

      {/* Hero */}
      <section
        className="relative -mt-[92px] overflow-hidden pt-[92px]"
        style={{
          backgroundImage: 'url(/photos/hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Legibility wash — stronger over the text column on the left, fading toward the photo on the right */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/10" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />

        <div className="container-page relative min-h-[620px] py-16 sm:min-h-[700px] sm:py-20 lg:min-h-[760px]">
          <div className="reveal max-w-xl">
            <p className="font-display text-[19px] text-duma-600">Zululand Dental Care</p>
            <h1 className="mt-3 max-w-[13ch] text-[42px] leading-[1.08] sm:text-[52px] lg:text-[60px]">
              Confident Smiles.
            </h1>
            <p className="font-display text-[42px] italic leading-[1.1] text-duma-600 sm:text-[52px] lg:text-[60px]">
              Personal Dental Care.
            </p>
            <p className="mt-6 max-w-[42ch] text-[16.5px] leading-relaxed text-ink-soft">
              Gentle, professional dental care in Mtubatuba — led by {business.dentist}.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-duma-900 px-7 py-3.5 text-[15px] font-medium text-white shadow-glass-sm transition-transform hover:-translate-y-0.5 hover:bg-ink"
              >
                Book an Appointment
                <IconArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={whatsappLink("Hi, I'd like to enquire about an appointment.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ice-300 bg-white/80 px-7 py-3.5 text-[15px] font-medium text-duma-700 backdrop-blur-sm transition-colors hover:bg-white"
              >
                <IconChat className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3 text-[14.5px] text-ink-soft">
              <a href={telLink} className="flex items-center gap-2 hover:text-duma-700">
                <IconPhone className="h-4 w-4 text-duma-500" />
                {business.phoneDisplay}
              </a>
              <a href={mailLink} className="flex items-center gap-2 hover:text-duma-700">
                <IconChat className="h-4 w-4 text-duma-500" />
                {business.email}
              </a>
            </div>
          </div>

          {/* Floating booking card */}
          <div
            className="reveal absolute bottom-10 right-0 hidden w-[280px] rounded-2xl bg-white/95 p-6 shadow-glass backdrop-blur-sm sm:block"
            style={{ animationDelay: '150ms' }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-faint">Ready to book?</p>
            <p className="mt-1.5 font-display text-[21px] text-duma-900">Request a visit</p>
            <Link
              to="/contact"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-duma-600 px-5 py-3 text-[14.5px] font-medium text-white transition-transform hover:-translate-y-0.5 hover:bg-duma-700"
            >
              <IconCalendar className="h-4 w-4" />
              Book a slot
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
            <span className="text-[10.5px] font-medium uppercase tracking-[0.2em] text-ink-faint">Scroll</span>
            <span className="h-8 w-px bg-ice-300" />
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="container-page py-20 sm:py-24">
        <div className="max-w-xl">
          <h2 className="text-[30px] sm:text-[34px]">Care for the whole family</h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-ink-soft">
            From routine check-ups to gentle care for anxious patients and little ones, every
            visit is unhurried and clearly explained.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard service={s} index={i} key={s.slug} />
          ))}
        </div>
      </section>

      {/* Why choose / about teaser */}
      <section className="bg-ice-50">
        <div className="container-page grid gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:items-center">
          <div className="reveal overflow-hidden rounded-arch-lg shadow-glass-sm">
            <img
              src="/photos/about-office.jpg"
              alt="Zululand Dental Care reception and waiting area"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-[30px] sm:text-[34px]">Care that feels personal</h2>
            <p className="mt-5 max-w-prose text-[15.5px] leading-relaxed text-ink-soft">
              {business.dentist} has built Zululand Dental Care around a simple idea: dental
              visits shouldn&rsquo;t be stressful. Patients consistently mention a gentle,
              thorough manner — especially those who come in nervous about treatment.
            </p>
            <Link
              to="/about"
              className="mt-7 inline-flex items-center text-[15px] font-medium text-duma-700 hover:text-duma-800"
            >
              More about the practice
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-page py-20 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-[30px] sm:text-[34px]">What patients say</h2>
          <Link to="/reviews" className="text-[14.5px] font-medium text-duma-700 hover:text-duma-800">
            Read all reviews
          </Link>
        </div>
        <div className="mt-10">
          <Testimonials limit={3} />
        </div>
      </section>

      {/* CTA band */}
      <section className="container-page pb-24">
        <div className="rounded-arch-lg bg-duma-700 px-8 py-14 text-center sm:px-16">
          <h2 className="text-[28px] text-white sm:text-[32px]">Ready to book your visit?</h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-duma-100">
            Send a quick message and the team will get back to you to confirm a time.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-arch bg-white px-7 py-3.5 text-[15px] font-medium text-duma-700 transition-transform hover:-translate-y-0.5"
            >
              Book Appointment
            </Link>
            <a
              href={whatsappLink("Hi, I'd like to enquire about an appointment.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-arch border border-white/40 px-7 py-3.5 text-[15px] font-medium text-white hover:bg-white/10"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
