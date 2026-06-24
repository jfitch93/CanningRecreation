import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Events | Canning Recreation',
  description: 'Upcoming community events hosted by Canning & District Recreational Commission.',
}

// Paste your Facebook page URL here e.g. https://www.facebook.com/CanningRecreation
const FACEBOOK_PAGE_URL = 'https://facebook.com/canningrecreation'

export default function EventsPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-forest-700 pt-32 pb-16 px-4 text-white">
          <div className="max-w-7xl mx-auto">
            <p className="text-teal font-semibold text-xs uppercase tracking-widest mb-2">Community calendar</p>
            <h1 className="font-display font-bold text-5xl md:text-7xl">Events</h1>
            <p className="mt-4 text-white/65 text-xl max-w-xl">
              From skating nights to summer festivals. See what we have on in Canning.
            </p>
          </div>
        </section>

        <section className="bg-cream py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

              {/* Main — events list */}
              <div className="lg:col-span-2">
                <h2 className="font-display font-bold text-forest-700 text-3xl mb-6">Upcoming Events</h2>
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

              {/* Sidebar — Facebook feed */}
              <div>
                <h2 className="font-display font-bold text-forest-700 text-3xl mb-6">Latest Updates</h2>
                {FACEBOOK_PAGE_URL ? (
                  <div className="rounded-2xl overflow-hidden shadow-md border border-stone-100">
                    <iframe
                      src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(FACEBOOK_PAGE_URL)}&tabs=timeline&width=340&height=600&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false`}
                      width="100%"
                      height="600"
                      style={{ border: 'none', overflow: 'hidden' }}
                      scrolling="no"
                      frameBorder="0"
                      allowFullScreen
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    />
                  </div>
                ) : (
                  <div className="bg-white rounded-2xl p-8 border border-stone-100 text-center">
                    <p className="text-3xl mb-3">📘</p>
                    <p className="font-display font-semibold text-forest-700 text-lg mb-2">Follow us on Facebook</p>
                    <p className="text-stone-400 text-sm mb-5 leading-relaxed">
                      We post schedule updates, event announcements, and community news there regularly.
                    </p>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-5 py-2.5 bg-[#1877F2] hover:bg-[#166FE5] text-white text-sm font-semibold rounded-full transition-colors"
                    >
                      Find us on Facebook
                    </a>
                  </div>
                )}
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
