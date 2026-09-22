import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import logoFull from '../assets/logo/zululand-logo-full.png'
import { IconCalendar } from './Icons.jsx'
import { navLinks } from '../data/site.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const transparent = isHome && !scrolled && !open

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkClass = ({ isActive }) =>
    `text-[15px] transition-colors ${
      isActive ? 'text-duma-700 font-medium' : `${transparent ? 'text-ink-soft' : 'text-ink-soft'} hover:text-duma-700`
    }`

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        transparent ? 'bg-transparent border-b border-transparent' : 'bg-white/90 backdrop-blur-md border-b border-ice-200 shadow-glass-sm'
      }`}
    >
      <div className="container-page flex h-[92px] items-center justify-between">
        <Link to="/" className="flex shrink-0 flex-col items-start" onClick={() => setOpen(false)}>
          <img src={logoFull} alt="Zululand Dental Care logo" className="h-12 w-auto" />
          <div className="mt-1.5 flex items-center gap-2">
            <span className="h-px w-6 bg-duma-500" />
            <span className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-ink-faint">
              Mtubatuba &middot; KwaZulu-Natal
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-duma-900 px-5 py-2.5 text-[14px] font-medium text-white shadow-glass-sm transition-transform hover:-translate-y-0.5 hover:bg-ink"
          >
            <IconCalendar className="h-4 w-4" />
            Book Appointment
          </Link>
        </div>

        <button
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-full text-duma-900"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-[2px] w-5 bg-current transition-transform duration-300 ${
                open ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-[2px] w-5 bg-current transition-opacity duration-200 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-[2px] w-5 bg-current transition-transform duration-300 ${
                open ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden bg-white transition-[max-height] duration-300 ease-out ${
          open ? 'max-h-[420px] border-b border-ice-200' : 'max-h-0'
        }`}
      >
        <nav className="container-page flex flex-col gap-1 pb-5 pt-1">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2.5 text-[15px] ${
                  isActive ? 'bg-duma-50 text-duma-700 font-medium' : 'text-ink-soft'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-duma-900 px-5 py-3 text-[15px] font-medium text-white"
          >
            <IconCalendar className="h-4 w-4" />
            Book Appointment
          </Link>
        </nav>
      </div>
    </header>
  )
}
