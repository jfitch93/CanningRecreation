import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import EventsStrip from '@/components/home/EventsStrip'
import GalleryGrid from '@/components/home/GalleryGrid'
import QuickCards from '@/components/home/QuickCards'
import FadeIn from '@/components/ui/FadeIn'

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

      {/* ── Hero text ── */}
      <section className="bg-forest-700 pt-36 pb-14 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="text-teal-200 font-sans font-medium tracking-[0.3em] uppercase text-xs mb-4">
              Canning &amp; District · Nova Scotia
            </p>
            <h1 className="font-display font-bold text-white text-5xl sm:text-6xl md:text-7xl leading-tight">
              Play Here.<br />
              <em className="italic text-teal-200">Belong Here.</em>
            </h1>
          </div>
          <div className="flex flex-col sm:items-end gap-3 shrink-0">
            <p className="text-white/60 text-sm max-w-xs sm:text-right leading-relaxed">
              Canning Recreation runs the rink, the programs, and the events that keep our community active.
            </p>
            <div className="flex gap-3">
              <Link href="/programs" className="px-6 py-3 bg-teal hover:bg-teal-500 text-white font-semibold rounded-full text-sm transition-all hover:scale-105 shadow-lg">
                Explore Programs
              </Link>
              <Link href="/events" className="px-6 py-3 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-full text-sm border border-white/30 transition-all hover:scale-105">
                What&apos;s On
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery — replaces the hero photo ── */}
      <section className="bg-forest-700 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <GalleryGrid photos={GALLERY_PHOTOS} />
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
