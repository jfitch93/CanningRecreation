import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { getEvents, getSiteSettings } from '@/sanity/lib/queries'
import { urlForImage } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'

export const revalidate = 60

export const metadata = {
  title: 'Events | Canning Recreation',
  description: 'Upcoming community events hosted by Canning & District Recreational Commission.',
}

const PLACEHOLDER = 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop'

const MONTHS = ['January','February','March','April','May','June',
  'July','August','September','October','November','December']

function formatFullDate(iso: string) {
  const d = new Date(iso + 'T00:00:00')
  return `${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
}

function isPast(iso: string) {
  return new Date(iso + 'T23:59:59') < new Date()
}

export default async function EventsPage() {
  const [events, settings] = await Promise.all([
    getEvents().catch(() => []),
    getSiteSettings().catch(() => null),
  ])

  const today = new Date().toISOString().split('T')[0]
  const upcoming = events.filter((e: { date: string }) => e.date >= today)
  const past = events.filter((e: { date: string }) => e.date < today)

  return (
    <>
      <Nav />
      <main>
        {/* Page hero */}
        <section className="bg-forest-700 pt-32 pb-16 px-4 text-white">
          <div className="max-w-7xl mx-auto">
            <p className="text-teal font-semibold text-sm uppercase tracking-widest mb-2">Community Calendar</p>
            <h1 className="font-display font-bold text-5xl md:text-7xl">Events</h1>
            <p className="mt-4 text-white/70 text-xl max-w-xl">
              Tournaments, family days, opening ceremonies — see what&apos;s on in Canning.
            </p>
          </div>
        </section>

        <section className="bg-cream py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Upcoming */}
            <h2 className="font-display font-bold text-forest-700 text-3xl mb-8">Upcoming Events</h2>

            {upcoming.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center text-stone-400 border border-stone-100">
                <p className="text-5xl mb-4">📅</p>
                <p className="text-xl font-semibold">No upcoming events</p>
                <p className="mt-2 text-sm">Check back soon — we&apos;re always planning something!</p>
              </div>
            ) : (
              <div className="space-y-6">
                {upcoming.map((ev: any) => {
                  const imgSrc = ev.photo?.asset
                    ? urlForImage(ev.photo).width(600).height(400).url()
                    : PLACEHOLDER
                  return (
                    <div
                      key={ev._id}
                      id={ev.slug?.current}
                      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 flex flex-col sm:flex-row"
                    >
                      <div className="relative w-full sm:w-56 h-48 sm:h-auto shrink-0">
                        <Image
                          src={imgSrc}
                          alt={ev.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 224px"
                        />
                      </div>
                      <div className="p-6 flex flex-col justify-between flex-1">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="px-2.5 py-1 bg-forest-700 text-white text-xs font-semibold rounded-full">
                              {formatFullDate(ev.date)}
                            </span>
                            {ev.time && (
                              <span className="text-sm text-stone-500">{ev.time}</span>
                            )}
                          </div>
                          <h3 className="font-display font-bold text-forest-700 text-2xl mb-1">{ev.title}</h3>
                          {ev.location && (
                            <p className="text-stone-500 text-sm mb-3">📍 {ev.location}</p>
                          )}
                          {ev.description && (
                            <div className="text-stone-600 text-sm line-clamp-3 prose prose-sm">
                              <PortableText value={ev.description} />
                            </div>
                          )}
                        </div>
                        {ev.registrationUrl && (
                          <a
                            href={ev.registrationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-block px-5 py-2.5 bg-teal hover:bg-teal-500 text-white text-sm font-semibold rounded-full transition-colors w-fit"
                          >
                            Register
                          </a>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            {/* Past events */}
            {past.length > 0 && (
              <>
                <h2 className="font-display font-bold text-stone-400 text-2xl mt-16 mb-6">Past Events</h2>
                <div className="space-y-4 opacity-60">
                  {past.map((ev: any) => (
                    <div
                      key={ev._id}
                      className="bg-white rounded-xl p-5 border border-stone-100 flex items-center gap-4"
                    >
                      <div className="text-stone-400 shrink-0 text-right w-24 text-sm">
                        {formatFullDate(ev.date)}
                      </div>
                      <div className="w-px h-8 bg-stone-200 shrink-0" />
                      <div>
                        <p className="font-semibold text-stone-600">{ev.title}</p>
                        {ev.location && <p className="text-stone-400 text-xs">📍 {ev.location}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </>
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
