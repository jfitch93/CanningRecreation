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
            <p className="text-logo-yellow font-semibold text-xs uppercase tracking-widest mb-2">Community calendar</p>
            <h1 className="font-display font-bold text-5xl md:text-7xl">Events</h1>
            <p className="mt-4 text-white/65 text-xl max-w-xl">
              From skating nights to summer festivals. See what we have on in Canning.
            </p>
          </div>
        </section>

        <section className="bg-cream py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display font-bold text-forest-700 text-3xl mb-8">Upcoming Events</h2>
            <div className="bg-white rounded-2xl p-14 text-center border border-stone-100">
              <p className="text-4xl mb-4">📅</p>
              <p className="font-display font-semibold text-forest-700 text-2xl mb-2">Nothing scheduled yet</p>
              <p className="text-stone-400 text-sm max-w-sm mx-auto">
                We are always planning something. Check back soon, or{' '}
                <a href="/about#contact" className="text-teal hover:underline">get in touch</a>{' '}
                to ask about upcoming events.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
