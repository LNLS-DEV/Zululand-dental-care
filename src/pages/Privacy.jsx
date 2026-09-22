import SEO from '../components/SEO.jsx'
import { business } from '../data/site.js'

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy" description="Privacy Policy for Zululand Dental Care." />
      <section className="container-page max-w-prose py-16 sm:py-20">
        <h1 className="text-[32px] sm:text-[38px]">Privacy Policy</h1>
        <p className="mt-3 text-[13.5px] text-ink-faint">Last updated: {new Date().getFullYear()}</p>

        <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-ink-soft">
          <p>
            This Privacy Policy explains how {business.name} ("we", "us", "the practice") handles
            information you provide through this website.
          </p>

          <h2 className="text-[19px] text-duma-900">Information we collect</h2>
          <p>
            When you use the appointment request form or the on-site assistant, we ask for details
            such as your name, phone number, and the reason for your visit. This information is
            used only to respond to your enquiry and arrange your appointment.
          </p>

          <h2 className="text-[19px] text-duma-900">How your information is used</h2>
          <p>
            The appointment form on this site prepares a message that you send to the practice
            yourself via WhatsApp. We do not automatically store form submissions on a server —
            the message is sent directly from your device to the practice&rsquo;s WhatsApp number.
            Any information you send us is used solely to communicate with you about your care.
          </p>

          <h2 className="text-[19px] text-duma-900">The on-site assistant</h2>
          <p>
            The assistant available on this site answers general questions using information
            already published on the website. It does not collect, store, or transmit your
            questions anywhere — conversations exist only in your browser for the duration of your
            visit and are cleared when you leave or refresh the page.
          </p>

          <h2 className="text-[19px] text-duma-900">Third parties</h2>
          <p>
            We do not sell, rent, or share your personal information with third parties for
            marketing purposes. Messages sent via WhatsApp are subject to WhatsApp&rsquo;s own
            privacy policy.
          </p>

          <h2 className="text-[19px] text-duma-900">Contact us</h2>
          <p>
            If you have questions about this policy or how your information is handled, contact us
            at <a className="text-duma-700 underline" href={`mailto:${business.email}`}>{business.email}</a> or{' '}
            {business.phoneDisplay}.
          </p>
        </div>
      </section>
    </>
  )
}
