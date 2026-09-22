import SEO from '../components/SEO.jsx'
import { business } from '../data/site.js'

export default function Terms() {
  return (
    <>
      <SEO title="Terms & Conditions" description="Terms and Conditions for using the Zululand Dental Care website." />
      <section className="container-page max-w-prose py-16 sm:py-20">
        <h1 className="text-[32px] sm:text-[38px]">Terms &amp; Conditions</h1>
        <p className="mt-3 text-[13.5px] text-ink-faint">Last updated: {new Date().getFullYear()}</p>

        <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-ink-soft">
          <p>
            These terms apply to your use of the {business.name} website. By using this site, you
            agree to the following.
          </p>

          <h2 className="text-[19px] text-duma-900">Not a substitute for medical advice</h2>
          <p>
            Content on this website, including the on-site assistant, is provided for general
            information only and does not constitute dental or medical advice, diagnosis, or
            treatment. Always contact the practice directly, or seek appropriate professional
            care, for anything related to your health.
          </p>

          <h2 className="text-[19px] text-duma-900">Appointment requests</h2>
          <p>
            Submitting the appointment form sends an enquiry to the practice via WhatsApp; it does
            not guarantee a booked time slot. The practice will confirm your appointment directly
            with you.
          </p>

          <h2 className="text-[19px] text-duma-900">Accuracy of information</h2>
          <p>
            We aim to keep the information on this site accurate and up to date, but details such
            as pricing and availability should always be confirmed directly with the practice.
          </p>

          <h2 className="text-[19px] text-duma-900">Website use</h2>
          <p>
            You agree not to misuse this website, including attempting to disrupt its operation or
            using its content for unlawful purposes.
          </p>

          <h2 className="text-[19px] text-duma-900">Changes to these terms</h2>
          <p>
            We may update these terms from time to time. Continued use of the site after changes
            are posted constitutes acceptance of the updated terms.
          </p>

          <h2 className="text-[19px] text-duma-900">Contact</h2>
          <p>
            Questions about these terms can be sent to{' '}
            <a className="text-duma-700 underline" href={`mailto:${business.email}`}>{business.email}</a>.
          </p>
        </div>
      </section>
    </>
  )
}
