import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import GalleryGrid from './GalleryGrid'

export const metadata = {
  title: 'Gallery | Canning Recreation',
  description: 'Photos from Canning & District Recreational Commission — the rink, the splash pad, community events, and more.',
}

// Drop real photos here as they come in — src is a local path or URL
const PHOTOS = [
  { src: '/images/canning-valley.jpg',     alt: 'Autumn view over Canning, Nova Scotia' },
  { src: '/images/canning-main-street.jpg', alt: 'Main street in Canning' },
  { src: '/images/canning-valley.jpg',     alt: 'Canning countryside in fall' },
  { src: '/images/canning-main-street.jpg', alt: 'Downtown Canning' },
]

export default function GalleryPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-forest-700 pt-32 pb-16 px-4 text-white">
          <div className="max-w-7xl mx-auto">
            <p className="text-teal font-semibold text-xs uppercase tracking-widest mb-2">Our community</p>
            <h1 className="font-display font-bold text-5xl md:text-7xl">Gallery</h1>
            <p className="mt-4 text-white/65 text-xl max-w-xl">
              Canning in action. On the ice, at the splash pad, and everywhere in between.
            </p>
          </div>
        </section>

        <section className="bg-cream py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <GalleryGrid photos={PHOTOS} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
