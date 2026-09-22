import { whatsappLink } from '../data/site.js'

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Hi, I'd like to enquire about an appointment at Zululand Dental Care.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Message us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glass transition-transform hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M16.01 3C9.38 3 4 8.32 4 14.88c0 2.34.68 4.52 1.86 6.37L4 29l8-2.05a12.7 12.7 0 0 0 4.01.64c6.63 0 12.01-5.32 12.01-11.88C28.02 8.32 22.64 3 16.01 3Zm0 21.6c-1.28 0-2.53-.24-3.7-.7l-.27-.11-4.75 1.22 1.27-4.53-.17-.28a9.68 9.68 0 0 1-1.5-5.32c0-5.32 4.35-9.64 9.72-9.64s9.7 4.32 9.7 9.64-4.34 9.72-9.71 9.72Zm5.32-7.27c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.14-.66.14-.2.29-.76.94-.93 1.14-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.71-1.61-2-.17-.29-.02-.44.13-.59.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.6-.9-2.19-.24-.57-.48-.5-.66-.5-.17 0-.36-.02-.56-.02s-.51.07-.78.36c-.27.29-1.02 1-1.02 2.43s1.05 2.82 1.19 3.02c.15.19 2.07 3.17 5.02 4.44.7.3 1.25.48 1.68.62.71.23 1.35.19 1.86.12.57-.09 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34Z" />
      </svg>
    </a>
  )
}
