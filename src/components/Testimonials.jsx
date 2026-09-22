import { reviews } from '../data/site.js'

function Star() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 fill-champagne-500" aria-hidden="true">
      <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6z" />
    </svg>
  )
}

export default function Testimonials({ limit }) {
  const list = limit ? reviews.slice(0, limit) : reviews

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((review, i) => (
        <figure
          key={i}
          className="reveal flex flex-col rounded-arch-lg border border-ice-200 bg-white p-6 shadow-glass-sm"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star key={idx} />
            ))}
          </div>
          <blockquote className="mt-4 text-[14.5px] leading-relaxed text-ink-soft">
            &ldquo;{review.text}&rdquo;
          </blockquote>
          <figcaption className="mt-5 text-[13px] text-ink-faint">Patient review</figcaption>
        </figure>
      ))}
    </div>
  )
}
