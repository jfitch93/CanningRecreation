import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Facilities | Canning Recreation',
  description: 'Glooscap Arena and the new Community Splash Pad in Canning, Nova Scotia\'s Annapolis Valley.',
}

const FACILITIES = [
  {
    id: 'glooscap-arena',
    name: 'Glooscap Arena',
    isComingSoon: false,
    description:
      "Home ice for the Canning community. Glooscap Arena offers public skating sessions, recreational hockey leagues, and facility rentals. Whether you're lacing up for the very first time or you're a seasoned player, there's always ice time for you.",
    bookingInfo:
      "To book ice time, rent the arena for a private event, or ask about league registration, reach out by phone or email. We're happy to work with teams, schools, community groups, and visitors.",
    photo: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&auto=format&fit=crop',
  },
  {
    id: 'splash-pad',
    name: 'Community Splash Pad',
    isComingSoon: true,
    description:
      "Opening Summer 2025. A brand-new, free outdoor splash pad right here in Canning. Designed for families and kids of all ages, the perfect place to cool off and make summer memories in the village. No admission, no ticket. Just come and play.",
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
            <p className="text-logo-green font-semibold text-xs uppercase tracking-widest mb-2">Village of Canning</p>
            <h1 className="font-display font-bold text-5xl md:text-7xl">Facilities</h1>
            <p className="mt-4 text-white/65 text-xl max-w-xl">
              Community spaces for everyone, from the skating rink to the brand-new splash pad.
            </p>
          </div>
        </section>

        <section className="bg-cream py-16 px-4">
          <div className="max-w-7xl mx-auto space-y-24">
            {FACILITIES.map((facility, i) => {
              const isEven = i % 2 === 0
              return (
                <div key={facility.id} id={facility.id} className="scroll-mt-24">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">

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
                          <div className="absolute top-4 right-4 px-3 py-1.5 bg-teal text-white text-xs font-bold rounded-full shadow-lg uppercase tracking-wide">
                            Coming Soon
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Info */}
                    <div className={`${!isEven ? 'md:order-first' : ''}`}>
                      {facility.isComingSoon && (
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-teal/10 text-teal text-xs font-bold rounded-full uppercase tracking-wide mb-4 border border-teal/20">
                          🎉 Coming Summer 2025
                        </span>
                      )}
                      <h2 className="font-display font-bold text-forest-700 text-4xl md:text-5xl mb-4">
                        {facility.name}
                      </h2>
                      <p className="text-stone-500 leading-relaxed mb-6 text-lg">{facility.description}</p>
                      {facility.bookingInfo && (
                        <div className="bg-white rounded-2xl p-6 border border-stone-100">
                          <h3 className="font-display font-semibold text-forest-700 text-lg mb-3">
                            Booking &amp; Rental Info
                          </h3>
                          <p className="text-stone-500 text-sm leading-relaxed">{facility.bookingInfo}</p>
                          <a
                            href="/about#contact"
                            className="inline-block mt-4 px-5 py-2.5 bg-forest-700 hover:bg-forest-600 text-white text-sm font-semibold rounded-full transition-colors"
                          >
                            Contact Us to Book
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                  {i < FACILITIES.length - 1 && <hr className="mt-24 border-stone-200" />}
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
