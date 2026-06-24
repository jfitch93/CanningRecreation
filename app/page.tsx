import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import EventsStrip from '@/components/home/EventsStrip'
import QuickCards from '@/components/home/QuickCards'
import FadeIn from '@/components/ui/FadeIn'

const FACEBOOK_PAGE_URL = 'https://facebook.com/canningrecreation'

const QUICK_CARDS = [
  {
    href: '/programs',
    icon: '🏃',
    title: 'Programs',
    desc: 'Youth leagues, adult fitness, drop-in hockey, and more. Something for every age and skill level.',
    cta: 'See Programs',
    accent: 'bg-logo-orange/10 text-logo-orange',
  },
  {
    href: '/events',
    icon: '📅',
    title: 'Events',
    desc: 'Tournaments, family days, and community nights. See what we have coming up.',
    cta: 'View Events',
    accent: 'bg-logo-yellow/15 text-logo-yellow',
  },
  {
    href: '/facilities',
    icon: '🏒',
    title: 'Facilities',
    desc: 'Glooscap Arena for skating and hockey, plus our brand-new community Splash Pad.',
    cta: 'Explore Facilities',
    accent: 'bg-logo-green/10 text-logo-green',
  },
  {
    href: '/about#contact',
    icon: '📬',
    title: 'Book with Us',
    desc: 'Need ice time, a facility rental, or program info? Get in touch and we will sort it out.',
    cta: 'Contact Us',
    accent: 'bg-logo-blue/10 text-logo-blue',
  },
]

// Add more photos here as they come in from Jennie
const GALLERY_PHOTOS = [
  { src: '/images/canning-valley.jpg',      alt: 'Autumn view over Canning, Nova Scotia' },
  { src: '/images/canning-main-street.jpg', alt: 'Main street in Canning' },
  { src: '/images/canning-valley.jpg',      alt: 'Canning countryside in fall' },
  { src: '/images/canning-main-street.jpg', alt: 'Downtown Canning' },
  { src: '/images/canning-valley.jpg',      alt: 'Nova Scotia landscape' },
  { src: '/images/canning-main-street.jpg', alt: 'Canning village' },
]

export default function HomePage() {
  return (
    <>
      <Nav />

      {/* ── Hero — Lookoff photo faded behind, gallery grid on the right ── */}
      <section className="relative bg-forest-700 overflow-hidden min-h-[90vh] flex items-center">
        {/* Faded background photo */}
        <div className="absolute inset-0">
          <Image
            src="/images/canning-valley.jpg"
            alt="Canning, Nova Scotia"
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
          {/* Gradient so right side is darker behind the gallery */}
          <div className="absolute inset-0 bg-gradient-to-r from-forest-700/60 via-forest-700/20 to-forest-700/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 py-36 items-center">
          {/* Left — text + CTAs */}
          <div>
            <p className="text-teal-200 font-sans font-medium tracking-[0.3em] uppercase text-xs mb-5">
              Canning &amp; District · Nova Scotia
            </p>
            <h1
              className="font-display font-bold text-white text-5xl sm:text-6xl md:text-7xl leading-tight mb-6"
              style={{ textShadow: '0 2px 24px rgba(0,0,0,0.4)' }}
            >
              Play Here.<br />
              <em className="italic text-teal-200">Belong Here.</em>
            </h1>
            <p className="text-white/70 text-lg max-w-md mb-10 leading-relaxed">
              Canning Recreation runs the rink, the programs, and the events that keep our community active all year long.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/programs" className="px-7 py-3.5 bg-teal hover:bg-teal-500 text-white font-semibold rounded-full text-sm transition-all hover:scale-105 shadow-lg">
                Explore Programs
              </Link>
              <Link href="/events" className="px-7 py-3.5 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-full text-sm border border-white/30 transition-all hover:scale-105">
                What&apos;s On
              </Link>
            </div>
          </div>

          {/* Right — gallery grid */}
          <div className="hidden lg:block">
            <div className="columns-2 gap-3">
              {GALLERY_PHOTOS.map((photo, i) => (
                <div key={i} className="break-inside-avoid mb-3">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover"
                      sizes="25vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick-access cards ── */}
      <section className="bg-cream py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <QuickCards cards={QUICK_CARDS} />
        </div>
      </section>

      {/* ── Upcoming Events ── */}
      <section className="bg-linen py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="flex items-end justify-between mb-8">
            <div>
              <p className="text-teal font-semibold text-xs uppercase tracking-widest mb-1.5">Community calendar</p>
              <h2 className="font-display font-bold text-forest-700 text-4xl md:text-5xl">Upcoming Events</h2>
            </div>
            <Link
              href="/events"
              className="hidden sm:inline-flex items-center gap-1.5 text-forest-600 text-sm font-semibold hover:text-teal transition-colors"
            >
              All Events
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7.5h8M8 3l4.5 4.5L8 12"/>
              </svg>
            </Link>
          </FadeIn>
          <EventsStrip events={[]} />
        </div>
      </section>

      {/* ── Facebook feed ── */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <FadeIn>
            <p className="text-teal font-semibold text-xs uppercase tracking-widest mb-3">Stay connected</p>
            <h2 className="font-display font-bold text-forest-700 text-4xl md:text-5xl mb-5">
              Latest from<br />
              <em className="italic font-normal text-forest-500">Facebook</em>
            </h2>
            <p className="text-stone-500 text-lg leading-relaxed mb-8">
              We post schedule updates, event announcements, ice cancellations, and community news on Facebook. Follow us to stay in the loop.
            </p>
            <a
              href={FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1877F2] hover:bg-[#166FE5] text-white font-semibold rounded-full transition-colors text-sm shadow-sm"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.532-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.887v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
              </svg>
              Follow on Facebook
            </a>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-stone-100">
              <iframe
                src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(FACEBOOK_PAGE_URL)}&tabs=timeline&width=500&height=600&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false`}
                width="100%"
                height="600"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Facility spotlight ── */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-20">
          <FadeIn className="text-center">
            <p className="text-teal font-semibold text-xs uppercase tracking-widest mb-2">Our facilities</p>
            <h2 className="font-display font-bold text-forest-700 text-4xl md:text-5xl">Community Spaces</h2>
            <p className="text-stone-400 mt-3 max-w-lg mx-auto text-base">
              Places to gather, play, and belong. Right here in Canning.
            </p>
          </FadeIn>

          <FadeIn className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&auto=format&fit=crop"
                alt="Glooscap Arena ice rink in Canning"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 text-forest-500 font-semibold text-xs uppercase tracking-widest mb-3">
                <span className="w-2 h-2 rounded-full bg-forest-400 inline-block" />
                Now Open
              </span>
              <h3 className="font-display font-bold text-forest-700 text-4xl md:text-5xl mb-4">Glooscap Arena</h3>
              <p className="text-stone-500 text-lg leading-relaxed mb-7">
                Home ice for the Canning community. Whether you&apos;re lacing up for the first time or a seasoned
                skater, Glooscap Arena offers public skating, hockey leagues, and facility rentals for the whole community.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/facilities" className="px-6 py-3 bg-forest-700 hover:bg-forest-600 text-white font-semibold rounded-full transition-colors text-sm text-center">
                  Schedule &amp; Info
                </Link>
                <Link href="/about#contact" className="px-6 py-3 border border-forest-200 text-forest-700 hover:bg-forest-50 font-semibold rounded-full transition-colors text-sm text-center">
                  Book the Rink
                </Link>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="flex flex-col justify-center md:order-first order-last">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-teal/10 text-teal text-xs font-bold rounded-full uppercase tracking-wide mb-4 w-fit border border-teal/20">
                🎉 Opening Summer 2025
              </span>
              <h3 className="font-display font-bold text-forest-700 text-4xl md:text-5xl mb-4">Community Splash Pad</h3>
              <p className="text-stone-500 text-lg leading-relaxed mb-7">
                Opening this summer. A free outdoor splash pad right in the village. The perfect spot for families
                to cool off and make summer memories in Canning.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/facilities" className="px-6 py-3 bg-teal hover:bg-teal-500 text-white font-semibold rounded-full transition-colors text-sm text-center">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl md:order-last order-first">
              <Image
                src="https://images.unsplash.com/photo-1545579133-99bb5ad189be?w=800&auto=format&fit=crop"
                alt="Children playing at a splash pad"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-4 right-4 px-3 py-1.5 bg-teal text-white text-xs font-bold rounded-full shadow-lg uppercase tracking-wide">
                Coming Soon
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Community callout ── */}
      <section className="bg-linen py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
          <div className="flex justify-center mb-8">
            <div className="w-10 h-px bg-teal" />
          </div>
          <p className="text-teal font-semibold text-xs uppercase tracking-[0.25em] mb-4">
            Volunteer-run. Community-powered.
          </p>
          <h2 className="font-display font-bold text-forest-700 text-5xl sm:text-6xl leading-tight mb-6">
            Built for Everyone<br />
            <em className="italic font-normal text-forest-500">in Canning &amp; District</em>
          </h2>
          <p className="text-stone-500 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            We are a volunteer-driven recreation commission keeping Canning active, connected, and having fun.
            On the ice, at the splash pad, or at your next community event, everyone is welcome.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about" className="px-8 py-4 bg-forest-700 hover:bg-forest-600 text-white font-semibold rounded-full text-base transition-all hover:scale-105">
              Our Story
            </Link>
            <Link href="/programs" className="px-8 py-4 bg-white hover:bg-stone-50 text-forest-700 font-semibold rounded-full text-base border border-stone-200 transition-all hover:scale-105">
              Get Involved
            </Link>
          </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  )
}
