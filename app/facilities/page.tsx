import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { getFacilities, getSiteSettings } from '@/sanity/lib/queries'
import { urlForImage } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'

export const revalidate = 60

export const metadata = {
  title: 'Facilities | Canning Recreation',
  description: 'Glooscap Arena, Splash Pad, and outdoor spaces in Canning, Nova Scotia.',
}

const FALLBACK_IMAGES: Record<string, string> = {
  arena: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&auto=format&fit=crop',
  'splash pad': 'https://images.unsplash.com/photo-1545579133-99bb5ad189be?w=800&auto=format&fit=crop',
  field: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=800&auto=format&fit=crop',
}

function getFallback(name: string) {
  const key = Object.keys(FALLBACK_IMAGES).find((k) => name.toLowerCase().includes(k))
  return key ? FALLBACK_IMAGES[key] : 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop'
}

export default async function FacilitiesPage() {
  const [facilities, settings] = await Promise.all([
    getFacilities().catch(() => []),
    getSiteSettings().catch(() => null),
  ])

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
            {facilities.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center text-stone-400">
                <p className="text-5xl mb-4">🏒</p>
                <p className="text-xl font-semibold">Facility info coming soon</p>
              </div>
            ) : (
              facilities.map((facility: any, i: number) => {
                const photos: string[] = facility.photos?.length
                  ? facility.photos.map((p: any) => urlForImage(p).width(800).height(560).url())
                  : [getFallback(facility.name)]

                const isEven = i % 2 === 0

                return (
                  <div key={facility._id} id={facility.slug?.current} className="scroll-mt-24">
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center`}>
                      {/* Photo gallery */}
                      <div className={`${!isEven ? 'md:order-last' : ''} space-y-3`}>
                        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
                          <Image
                            src={photos[0]}
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
                        {photos.length > 1 && (
                          <div className="grid grid-cols-3 gap-3">
                            {photos.slice(1, 4).map((src, j) => (
                              <div key={j} className="relative rounded-xl overflow-hidden aspect-square">
                                <Image
                                  src={src}
                                  alt={`${facility.name} photo ${j + 2}`}
                                  fill
                                  className="object-cover"
                                  sizes="33vw"
                                />
                              </div>
                            ))}
                          </div>
                        )}
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
                        {facility.description && (
                          <div className="prose prose-stone text-stone-600 leading-relaxed mb-6">
                            <PortableText value={facility.description} />
                          </div>
                        )}
                        {facility.bookingInfo && (
                          <div className="bg-white rounded-2xl p-6 border border-stone-100">
                            <h3 className="font-display font-semibold text-forest-700 text-lg mb-3">
                              Booking &amp; Rental Info
                            </h3>
                            <div className="prose prose-sm prose-stone">
                              <PortableText value={facility.bookingInfo} />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    {i < facilities.length - 1 && <hr className="mt-20 border-stone-200" />}
                  </div>
                )
              })
            )}
          </div>
        </section>
      </main>
      <Footer
        orgName={settings?.orgName}
        address={settings?.address}
        phone={settings?.phone}
        email={settings?.email}
        facebookUrl={settings?.facebookUrl}
        foundingYear={settings?.foundingYear}
      />
    </>
  )
}
