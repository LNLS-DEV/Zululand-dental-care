// Remembers where a visitor came from (?src=gmaps, ?src=referral, ?src=poster)
// for the whole visit, so it can be attached to booking and enquiry messages.

const KEY = 'zdc_src'
const ALLOWED = /^[a-z0-9_-]{1,30}$/i

export function captureSource(search = window.location.search) {
  try {
    const src = new URLSearchParams(search).get('src')
    if (src && ALLOWED.test(src)) sessionStorage.setItem(KEY, src.toLowerCase())
  } catch {
    /* storage unavailable - source just won't persist */
  }
}

export function getSource() {
  try {
    return sessionStorage.getItem(KEY) || 'website'
  } catch {
    return 'website'
  }
}
