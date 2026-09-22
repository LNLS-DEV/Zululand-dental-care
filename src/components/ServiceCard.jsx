import { Link } from 'react-router-dom'

export default function ServiceCard({ service, index = 0 }) {
  return (
    <div
      className="reveal group relative flex flex-col rounded-arch-lg border border-ice-200 bg-white p-7 shadow-glass-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-glass"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ice-100 text-duma-700">
        <span className="font-display text-lg">{service.name.charAt(0)}</span>
      </div>
      <h3 className="mt-5 text-[19px] font-medium text-duma-900">{service.name}</h3>
      <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-soft">{service.short}</p>
      <Link
        to="/services"
        className="mt-5 inline-flex items-center text-[14px] font-medium text-duma-600 group-hover:text-duma-700"
      >
        Learn more
      </Link>
    </div>
  )
}
