import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import ToothMark from '../components/ToothMark.jsx'

export default function NotFound() {
  return (
    <>
      <SEO title="Page not found" />
      <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ice-100 text-duma-600">
          <ToothMark className="h-7 w-7" />
        </span>
        <h1 className="mt-6 text-[30px]">Page not found</h1>
        <p className="mt-3 max-w-sm text-[15px] text-ink-soft">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
        </p>
        <Link
          to="/"
          className="mt-7 inline-flex items-center justify-center rounded-arch bg-duma-700 px-6 py-3 text-[14.5px] font-medium text-white hover:bg-duma-600"
        >
          Back to home
        </Link>
      </section>
    </>
  )
}
