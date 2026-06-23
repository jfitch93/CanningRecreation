import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Facilities | Canning Recreation',
  description: 'Glooscap Arena, Splash Pad, and outdoor spaces in Canning, Nova Scotia.',
}

const FACILITIES = [
  {
    id: 'glooscap-arena',
    name: 'Glooscap Arena',
    isComingSoon: false,
    description:
      'Home ice for the Canning community. Glooscap Arena offers public skating sessions, recreational hockey leagues, and facility rentals for the whole Annapolis Valley. Whether you\'re lacing up for the very first time or a seasoned player, there\'s ice time for you.',
    bookingInfo:
      'To book ice time, rent the arena for a private event, or inquire about league registration, please contact us by phone or email. We\'re happy to work with teams, schools, and community groups.',
    photo: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&auto=format&fit=crop',
  },
  {
    id: 'splash-pad',
    name: 'Community Splash Pad',
    isComingSoon: true,
    description:
      'Opening Summer 2025 — a brand new, free outdoor splash pad right here in Canning. Cool off, play, and make summer memories. Designed for families and kids of all ages, this is Canning\'s newest gathering spot in the warmer months.',
    bookingInfo: null,
    photo: 'https://images.unsplash.com/photo-1545579133-99bb5ad189be?w=800&auto=format&fit=crop',
  },
]

export default function FacilitiesPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-forest-700 pt-32 pb-16 px-4 text-white">
          <div className="max-w-7xl mx-auto">
            <p className="text-teal font-semibold text-sm uppercase tracking-widest mb-2">Canning Recreation</p>
            <h1 className="font-display font-bold text-5xl md:text-7xl">Facilities</h1>
            <p className="mt-4 text-white/70 text-xl max-w-xl">
              World-class community spaces right here in the Annapolis Valley.
            </p>
          </div>
        </section>

        <section className="bg-cream py-16 px-4">
          <div className="max-w-7xl mx-auto space-y-20">
            {FACILITIES.map((facility, i) => {
              const isEven = i % 2 === 0
              return (
                <div key={facility.id} id={facility.id} className="scroll-mt-24">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Photo */}
                    <div className={`${!isEven ? 'md:order-last' : ''}`}>
                      <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
                        <Image
                          src={facility.photo}
                          alt={facility.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {facility.isComingSoon && (
                          <div className="absolute top-4 right-4 px-3 py-1.5 bg-urgent text-white text-xs font-bold rounded-full shadow-lg uppercase tracking-wide">
                            Coming Soon
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Info */}
                    <div className={`${!isEven ? 'md:order-first' : ''}`}>
                      {facility.isComingSoon && (
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-urgent text-white text-xs font-bold rounded-full uppercase tracking-wide mb-4">
                          🎉 Coming Soon
                        </span>
                      )}
                      <h2 className="font-display font-bold text-forest-700 text-4xl md:text-5xl mb-4">
                        {facility.name}
                      </h2>
                      <p className="text-stone-600 leading-relaxed mb-6">{facility.description}</p>
                      {facility.bookingInfo && (
                        <div className="bg-white rounded-2xl p-6 border border-stone-100">
                          <h3 className="font-display font-semibold text-forest-700 text-lg mb-3">
                            Booking &amp; Rental Info
                          </h3>
                          <p className="text-stone-600 text-sm leading-relaxed">{facility.bookingInfo}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  {i < FACILITIES.length - 1 && <hr className="mt-20 border-stone-200" />}
                </div>
              )
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
