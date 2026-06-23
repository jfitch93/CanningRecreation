import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Events | Canning Recreation',
  description: 'Upcoming community events hosted by Canning & District Recreational Commission.',
}

export default function EventsPage() {
  return (
    <>
      <Nav />
      <main>
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
            <h2 className="font-display font-bold text-forest-700 text-3xl mb-8">Upcoming Events</h2>
            <div className="bg-white rounded-2xl p-12 text-center text-stone-400 border border-stone-100">
              <p className="text-5xl mb-4">📅</p>
              <p className="text-xl font-semibold">No upcoming events</p>
              <p className="mt-2 text-sm">Check back soon — we&apos;re always planning something!</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
