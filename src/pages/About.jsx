import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import ToothMark from '../components/ToothMark.jsx'
import { business } from '../data/site.js'

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Meet Dr Nonhlanhla Duma and learn about Zululand Dental Care in Mtubatuba, KwaZulu-Natal."
      />

      <section className="bg-ice-wash">
        <div className="container-page py-16 sm:py-20">
          <h1 className="max-w-2xl text-[34px] sm:text-[42px]">About Zululand Dental Care</h1>
          <p className="mt-5 max-w-prose text-[16px] leading-relaxed text-ink-soft">
            A local dental practice in the heart of Mtubatuba, built around gentle, unhurried care.
          </p>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="reveal mx-auto w-full max-w-sm rounded-arch-lg border border-ice-200 bg-white p-8 shadow-glass-sm">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-duma-700">
              <ToothMark className="h-7 w-7" color="#F5FAFD" />
            </span>
            <h2 className="mt-6 text-[22px] text-duma-900">{business.dentist}</h2>
            <p className="mt-1 text-[14px] text-ink-faint">Dentist &amp; Practice Owner</p>
            <div className="mt-6 space-y-2 border-t border-ice-100 pt-6 text-[14px] text-ink-soft">
              {business.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>

          <div className="space-y-6 text-[15.5px] leading-relaxed text-ink-soft">
            <p>
              {business.dentist} leads Zululand Dental Care, offering general dentistry,
              check-ups and cleaning, fillings, children&rsquo;s dentistry and emergency care to
              patients in Mtubatuba and the surrounding Zululand area.
            </p>
            <p>
              What patients mention most often is manner: a gentle, thorough approach that puts
              nervous patients at ease, careful explanations, and a professional yet warm style of
              care — the kind that keeps people coming back for years.
            </p>
            <div className="rounded-2xl border border-ice-200 bg-ice-50 p-6">
              <p className="font-display text-[18px] leading-snug text-duma-900">
                &ldquo;I will most definetly recommend Dr Duma to anyone looking for a dentist. She
                is professional and very thorough with a gentle manner about her.&rdquo;
              </p>
              <p className="mt-3 text-[13px] text-ink-faint">Patient review</p>
            </div>
            <p>
              The practice is based at Shop 40, Mtuba Mall — easy to find, centrally located, and
              part of the everyday fabric of Mtubatuba.
            </p>
            <Link
              to="/reviews"
              className="inline-flex items-center text-[15px] font-medium text-duma-700 hover:text-duma-800"
            >
              Read what other patients say
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
