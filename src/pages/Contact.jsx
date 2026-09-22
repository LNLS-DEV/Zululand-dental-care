import SEO from '../components/SEO.jsx'
import AppointmentForm from '../components/AppointmentForm.jsx'
import { business, telLink, mailLink, whatsappLink } from '../data/site.js'

export default function Contact() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(business.mapsQuery)}&output=embed`

  return (
    <>
      <SEO
        title="Contact"
        description="Book an appointment or get in touch with Zululand Dental Care in Mtubatuba, KwaZulu-Natal."
      />

      <section className="bg-ice-wash">
        <div className="container-page py-16 sm:py-20">
          <h1 className="max-w-2xl text-[34px] sm:text-[42px]">Book an appointment</h1>
          <p className="mt-5 max-w-prose text-[16px] leading-relaxed text-ink-soft">
            Send your details and the team will confirm a time with you.
          </p>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-14">
          <div className="reveal rounded-arch-lg border border-ice-200 bg-white p-7 shadow-glass-sm sm:p-9">
            <AppointmentForm />
          </div>

          <div className="space-y-6">
            <div className="rounded-arch-lg border border-ice-200 bg-white p-7 shadow-glass-sm">
              <h2 className="text-[18px] text-duma-900">Contact details</h2>
              <ul className="mt-5 space-y-4 text-[14.5px] text-ink-soft">
                <li>
                  <span className="block text-[12.5px] uppercase tracking-wide text-ink-faint">Phone / WhatsApp</span>
                  <a className="text-duma-700 hover:text-duma-800" href={telLink}>{business.phoneDisplay}</a>
                </li>
                <li>
                  <span className="block text-[12.5px] uppercase tracking-wide text-ink-faint">Email</span>
                  <a className="text-duma-700 hover:text-duma-800" href={mailLink}>{business.email}</a>
                </li>
                <li>
                  <span className="block text-[12.5px] uppercase tracking-wide text-ink-faint">Address</span>
                  {business.addressLines.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </li>
              </ul>
              <a
                href={whatsappLink("Hi, I'd like to enquire about an appointment.")}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-arch bg-[#25D366] px-6 py-3 text-[14.5px] font-medium text-white hover:opacity-90"
              >
                Message on WhatsApp
              </a>
            </div>

            <div className="overflow-hidden rounded-arch-lg border border-ice-200 shadow-glass-sm">
              <iframe
                title="Zululand Dental Care location"
                src={mapSrc}
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
