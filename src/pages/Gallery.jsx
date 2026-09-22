import SEO from '../components/SEO.jsx'

const photos = [
  { src: '/photos/gallery-gentle-care.jpg', alt: 'Gentle, unhurried care', span: 'row-span-2' },
  { src: '/photos/gallery-children.jpg', alt: 'Comfortable for children', span: '' },
  { src: '/photos/gallery-careful-treatment.jpg', alt: 'Careful, thorough treatment', span: '' },
  { src: '/photos/gallery-central-location.jpg', alt: 'Central Mtubatuba location', span: '' },
  { src: '/photos/gallery-family.jpg', alt: 'Here for the whole family', span: 'row-span-2' },
  { src: '/photos/gallery-calm-visit.jpg', alt: 'A calm, welcoming visit', span: '' },
]

export default function Gallery() {
  return (
    <>
      <SEO title="Gallery" description="A look at the feel of Zululand Dental Care in Mtubatuba." />

      <section className="bg-ice-wash">
        <div className="container-page py-16 sm:py-20">
          <h1 className="max-w-2xl text-[34px] sm:text-[42px]">Gallery</h1>
          <p className="mt-5 max-w-prose text-[16px] leading-relaxed text-ink-soft">
            A glimpse of the practice and the people behind it.
          </p>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] sm:grid-cols-4">
          {photos.map((p, i) => (
            <div
              key={p.src}
              className={`reveal overflow-hidden rounded-arch-lg shadow-glass-sm ${p.span}`}
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <img src={p.src} alt={p.alt} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
