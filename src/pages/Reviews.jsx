import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import Testimonials from '../components/Testimonials.jsx'

export default function Reviews() {
  return (
    <>
      <SEO
        title="Reviews"
        description="Read what patients say about Dr Nonhlanhla Duma and Zululand Dental Care in Mtubatuba."
      />

      <section className="bg-ice-wash">
        <div className="container-page py-16 sm:py-20">
          <h1 className="max-w-2xl text-[34px] sm:text-[42px]">Patient reviews</h1>
          <p className="mt-5 max-w-prose text-[16px] leading-relaxed text-ink-soft">
            Reviews shared by patients of Zululand Dental Care, reproduced as written.
          </p>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <Testimonials />

        <div className="mt-14 rounded-arch-lg border border-ice-200 bg-white p-8 text-center shadow-glass-sm sm:p-10">
          <h2 className="text-[22px] text-duma-900">Had a good experience at the practice?</h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
            The team would love to hear from you — get in touch to share your feedback.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-arch bg-duma-700 px-6 py-3 text-[14.5px] font-medium text-white hover:bg-duma-600"
          >
            Contact the practice
          </Link>
        </div>
      </section>
    </>
  )
}
