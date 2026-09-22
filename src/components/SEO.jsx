import { useEffect } from 'react'

function setMeta(name, content, attr = 'name') {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/**
 * Updates the document title and meta description/OG tags for the current
 * route. Falls back to the defaults already set in index.html when a page
 * doesn't override them, so search engines and browser tabs always see
 * something accurate.
 */
export default function SEO({ title, description }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | Zululand Dental Care`
      : 'Zululand Dental Care | Dentist in Mtubatuba, KwaZulu-Natal'
    document.title = fullTitle

    if (description) {
      setMeta('description', description)
      setMeta('og:description', description, 'property')
    }
    if (title) {
      setMeta('og:title', fullTitle, 'property')
    }
  }, [title, description])

  return null
}
