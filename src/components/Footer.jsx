import { Link } from 'react-router-dom'
import logoFull from '../assets/logo/zululand-logo-full.png'
import { business, telLink, mailLink, whatsappLink } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-ice-200 bg-white">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={logoFull} alt="Zululand Dental Care logo" className="h-20 w-auto" />
          <p className="mt-4 max-w-[26ch] text-[14.5px] leading-relaxed text-ink-soft">
            Gentle, professional dental care in Mtubatuba, led by {business.dentist}.
          </p>
        </div>

        <div>
          <h3 className="text-[13px] font-semibold uppercase tracking-wide text-duma-500">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-[14.5px] text-ink-soft">
            <li><Link className="hover:text-duma-700" to="/about">About</Link></li>
            <li><Link className="hover:text-duma-700" to="/services">Services</Link></li>
            <li><Link className="hover:text-duma-700" to="/gallery">Gallery</Link></li>
            <li><Link className="hover:text-duma-700" to="/reviews">Reviews</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[13px] font-semibold uppercase tracking-wide text-duma-500">Contact</h3>
          <ul className="mt-4 space-y-2.5 text-[14.5px] text-ink-soft">
            <li>
              <a className="hover:text-duma-700" href={telLink}>{business.phoneDisplay}</a>
            </li>
            <li>
              <a className="hover:text-duma-700" href={whatsappLink()} target="_blank" rel="noreferrer">
                WhatsApp us
              </a>
            </li>
            <li>
              <a className="hover:text-duma-700" href={mailLink}>{business.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[13px] font-semibold uppercase tracking-wide text-duma-500">Visit</h3>
          <address className="mt-4 not-italic text-[14.5px] leading-relaxed text-ink-soft">
            {business.addressLines.map((line) => (
              <span key={line} className="block">{line}</span>
            ))}
          </address>
        </div>
      </div>

      <div className="border-t border-ice-100">
        <div className="container-page flex flex-col gap-3 py-6 text-[13px] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} {business.name}. All rights reserved.</span>
          <div className="flex gap-5">
            <Link className="hover:text-duma-600" to="/privacy-policy">Privacy Policy</Link>
            <Link className="hover:text-duma-600" to="/terms">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
