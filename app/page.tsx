import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import EventsStrip from '@/components/home/EventsStrip'
import GalleryGrid from '@/app/gallery/GalleryGrid'

const QUICK_CARDS = [
  {
    href: '/programs',
    icon: '🏃',
    title: 'Programs',
    desc: 'Youth leagues, adult fitness, drop-in hockey, and more. Something for every age and skill level.',
    cta: 'See Programs',
    accent: 'bg-orange-100 text-orange-600',
  },
  {
    href: '/events',
    icon: '📅',
    title: 'Events',
    desc: 'Tournaments, family days, and community nights. See what we have coming up.',
    cta: 'View Events',
    accent: 'bg-teal/10 text-teal',
  },
  {
    href: '/facilities',
    icon: '🏒',
    title: 'Facilities',
    desc: 'Glooscap Arena for skating and hockey, plus our brand-new community Splash Pad.',
    cta: 'Explore Facilities',
    accent: 'bg-forest-100 text-forest-600',
  },
  {
    href: '/about#contact',
    icon: '📬',
    title: 'Book with Us',
    desc: 'Need ice time, a facility rental, or program info? Get in touch and we will sort it out.',
    cta: 'Contact Us',
    accent: 'bg-blue-100 text-blue-600',
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

      {/* ── Hero ── static, not a slideshow */}
      <section className="relative pt-40 pb-24 px-4 bg-forest-700 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/canning-valley.jpg"
            alt="Canning, Nova Scotia"
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-teal-200 font-sans font-medium tracking-[0.3em] uppercase text-xs md:text-sm mb-5">
            Canning &amp; District · Nova Scotia
          </p>
          <h1 className="font-display font-bold text-white text-5xl sm:text-6xl md:text-7xl leading-tight mb-6 max-w-3xl">
            Play Here.<br />
            <em className="italic text-teal-200">Belong Here.</em>
          </h1>
          <p className="text-white/75 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed font-light">
            Canning Recreation runs the rink, the programs, and the events that keep our community active all year long.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/programs"
              className="px-8 py-4 bg-teal hover:bg-teal-500 text-white font-semibold rounded-full text-base transition-all hover:scale-105 shadow-lg w-fit"
            >
              Explore Programs
            </Link>
            <Link
              href="/events"
              className="px-8 py-4 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-full text-base border border-white/30 transition-all hover:scale-105 w-fit"
            >
              What&apos;s On
            </Link>
          </div>
        </div>
      </section>

      {/* ── Quick-access cards ── */}
      <section className="bg-cream py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {QUICK_CARDS.map(({ href, icon, title, desc, cta, accent }) => (
              <Link
                key={href}
                href={href}
                className="bg-white rounded-2xl p-7 flex flex-col gap-4 group hover:shadow-xl hover:-translate-y-1.5 transition-all border border-stone-100"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 ${accent}`}>
                  {icon}
                </div>
                <div>
                  <h2 className="font-display font-bold text-forest-700 text-xl mb-1.5">{title}</h2>
                  <p className="text-stone-400 text-sm leading-relaxed">{desc}</p>
                </div>
                <span className="mt-auto text-sm font-semibold text-teal flex items-center gap-1.5 group-hover:gap-3 transition-all">
                  {cta}
                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 7.5h9M8 3l4.5 4.5L8 12"/>
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-teal font-semibold text-xs uppercase tracking-widest mb-2">Our community</p>
              <h2 className="font-display font-bold text-forest-700 text-4xl md:text-5xl">Photo Gallery</h2>
            </div>
            <Link
              href="/gallery"
              className="hidden sm:inline-flex items-center gap-1.5 text-forest-600 text-sm font-semibold hover:text-teal transition-colors"
            >
              See All Photos
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7.5h8M8 3l4.5 4.5L8 12"/>
              </svg>
            </Link>
          </div>
          <GalleryGrid photos={GALLERY_PHOTOS} />
          <div className="mt-8 sm:hidden text-center">
            <Link href="/gallery" className="inline-flex items-center gap-1.5 text-forest-600 text-sm font-semibold hover:text-teal transition-colors">
              See All Photos
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7.5h8M8 3l4.5 4.5L8 12"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Upcoming Events ── */}
      <section className="bg-linen py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
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
          </div>
          <EventsStrip events={[]} />
        </div>
      </section>

      {/* ── Facility spotlight ── */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center">
            <p className="text-teal font-semibold text-xs uppercase tracking-widest mb-2">Our facilities</p>
            <h2 className="font-display font-bold text-forest-700 text-4xl md:text-5xl">Community Spaces</h2>
            <p className="text-stone-400 mt-3 max-w-lg mx-auto text-base">
              Places to gather, play, and belong. Right here in Canning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
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
          </div>
        </div>
      </section>

      {/* ── Community callout ── */}
      <section className="bg-linen py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
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
        </div>
      </section>

      <Footer />
    </>
  )
}
