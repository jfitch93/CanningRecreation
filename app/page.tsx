import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import HeroCarousel from '@/components/home/HeroCarousel'
import EventsStrip from '@/components/home/EventsStrip'
import { getAnnouncements, getUpcomingEvents, getSiteSettings } from '@/sanity/lib/queries'

export const revalidate = 60

// Placeholder Unsplash images (swap for real photos once available)
const HERO_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1600&auto=format&fit=crop',
    alt: 'Hockey rink at Glooscap Arena',
  },
  {
    src: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=1600&auto=format&fit=crop',
    alt: 'Children playing at the splash pad',
  },
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&auto=format&fit=crop',
    alt: 'Nova Scotia Annapolis Valley countryside',
  },
]

const QUICK_CARDS = [
  {
    href: '/programs',
    icon: '🏃',
    title: 'Programs',
    desc: 'Youth leagues, adult fitness, drop-in hockey, and more seasonal offerings for all ages.',
    cta: 'See Programs',
    colour: 'bg-forest-700',
  },
  {
    href: '/events',
    icon: '📅',
    title: 'Events',
    desc: 'Community tournaments, family days, and special events happening in Canning all year long.',
    cta: 'View Events',
    colour: 'bg-teal',
  },
  {
    href: '/facilities',
    icon: '🏒',
    title: 'Facilities',
    desc: 'Glooscap Arena, the new Splash Pad, outdoor fields — world-class community spaces.',
    cta: 'Explore Facilities',
    colour: 'bg-forest-600',
  },
  {
    href: '/about#contact',
    icon: '📬',
    title: 'Contact',
    desc: 'Questions? Want to book a facility or register a team? We\'re always happy to help.',
    cta: 'Get in Touch',
    colour: 'bg-stone-700',
  },
]

export default async function HomePage() {
  const [announcements, upcomingEvents, settings] = await Promise.all([
    getAnnouncements().catch(() => []),
    getUpcomingEvents().catch(() => []),
    getSiteSettings().catch(() => null),
  ])

  return (
    <>
      <AnnouncementBanner announcements={announcements} />
      <Nav />

      {/* ── Hero ── */}
      <section className="relative h-screen min-h-[600px] max-h-[900px]">
        <HeroCarousel images={HERO_IMAGES} />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-10" />

        {/* Hero content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <p className="text-teal font-display font-semibold tracking-[0.2em] uppercase text-sm md:text-base mb-3">
            Canning &amp; District
          </p>
          <h1 className="font-display font-bold text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none mb-6">
            RECREATION
          </h1>
          <p className="text-white/90 text-xl sm:text-2xl font-light max-w-xl mb-10">
            {settings?.tagline ?? 'Your community. Your recreation.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/programs"
              className="px-8 py-4 bg-teal hover:bg-teal-500 text-white font-semibold rounded-full text-lg transition-all hover:scale-105"
            >
              Explore Programs
            </Link>
            <Link
              href="/events"
              className="px-8 py-4 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white font-semibold rounded-full text-lg border border-white/30 transition-all hover:scale-105"
            >
              What&apos;s On
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" opacity="0.6">
            <path d="M7 10l5 5 5-5"/>
          </svg>
        </div>
      </section>

      {/* ── Quick-access cards ── */}
      <section className="bg-cream py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {QUICK_CARDS.map(({ href, icon, title, desc, cta, colour }) => (
              <Link
                key={href}
                href={href}
                className={`${colour} text-white rounded-2xl p-7 flex flex-col gap-4 group hover:opacity-90 transition-all hover:-translate-y-1 hover:shadow-xl`}
              >
                <span className="text-4xl">{icon}</span>
                <div>
                  <h2 className="font-display font-bold text-2xl mb-1">{title}</h2>
                  <p className="text-white/75 text-sm leading-relaxed">{desc}</p>
                </div>
                <span className="mt-auto text-sm font-semibold text-white/80 group-hover:text-white flex items-center gap-1.5 transition-colors">
                  {cta}
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 8h8M8 4l4 4-4 4"/>
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Upcoming Events strip ── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-teal font-semibold text-sm uppercase tracking-widest mb-1">What&apos;s happening</p>
              <h2 className="font-display font-bold text-forest-700 text-4xl md:text-5xl">Upcoming Events</h2>
            </div>
            <Link
              href="/events"
              className="hidden sm:inline-flex items-center gap-2 text-forest-700 font-semibold hover:text-teal transition-colors"
            >
              All Events
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 9h8M9 5l4 4-4 4"/>
              </svg>
            </Link>
          </div>
          <EventsStrip events={upcomingEvents} />
          <Link
            href="/events"
            className="mt-8 sm:hidden flex items-center justify-center gap-2 text-forest-700 font-semibold"
          >
            See all events →
          </Link>
        </div>
      </section>

      {/* ── Feature spotlight ── */}
      <section className="bg-cream py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center mb-12">
            <p className="text-teal font-semibold text-sm uppercase tracking-widest mb-1">Our facilities</p>
            <h2 className="font-display font-bold text-forest-700 text-4xl md:text-5xl">Community Spaces</h2>
          </div>

          {/* Glooscap Arena — image left, text right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&auto=format&fit=crop"
                alt="Glooscap Arena ice rink"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 text-teal font-semibold text-sm uppercase tracking-widest mb-3">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><circle cx="7" cy="7" r="7"/></svg>
                Now Open
              </span>
              <h3 className="font-display font-bold text-forest-700 text-4xl md:text-5xl mb-4">
                Glooscap Arena
              </h3>
              <p className="text-stone-600 text-lg leading-relaxed mb-6">
                Home ice for the Canning community. Whether you&apos;re lacing up for the first time or a seasoned
                skater, Glooscap Arena offers public skating, hockey leagues, and facility rentals for the whole Valley.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/facilities"
                  className="px-6 py-3 bg-forest-700 hover:bg-forest-600 text-white font-semibold rounded-full transition-colors text-center"
                >
                  View Schedule &amp; Info
                </Link>
                <Link
                  href="/about#contact"
                  className="px-6 py-3 border-2 border-forest-700 text-forest-700 hover:bg-forest-700 hover:text-white font-semibold rounded-full transition-colors text-center"
                >
                  Book the Rink
                </Link>
              </div>
            </div>
          </div>

          {/* Splash Pad — image right, text left */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="flex flex-col justify-center md:order-first order-last">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-urgent text-white text-xs font-bold rounded-full uppercase tracking-wide mb-4 w-fit">
                🎉 Opening Summer 2025
              </span>
              <h3 className="font-display font-bold text-forest-700 text-4xl md:text-5xl mb-4">
                Community Splash Pad
              </h3>
              <p className="text-stone-600 text-lg leading-relaxed mb-6">
                Brand new and coming this summer — a free outdoor splash pad right here in Canning. Cool off, play,
                and make memories. The perfect spot for families and kids all summer long.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/facilities"
                  className="px-6 py-3 bg-teal hover:bg-teal-500 text-white font-semibold rounded-full transition-colors text-center"
                >
                  Learn More
                </Link>
                <Link
                  href="/events"
                  className="px-6 py-3 border-2 border-teal text-teal hover:bg-teal hover:text-white font-semibold rounded-full transition-colors text-center"
                >
                  Opening Events
                </Link>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl md:order-last order-first">
              <Image
                src="https://images.unsplash.com/photo-1545579133-99bb5ad189be?w=800&auto=format&fit=crop"
                alt="Children playing at a splash pad"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Coming Soon badge over image */}
              <div className="absolute top-4 right-4 px-3 py-1.5 bg-urgent text-white text-xs font-bold rounded-full shadow-lg uppercase tracking-wide">
                Coming Soon
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Community callout ── */}
      <section className="relative bg-forest-700 overflow-hidden py-24 px-4">
        {/* Grain texture */}
        <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none" style={{background: 'radial-gradient(ellipse at center, rgba(14,165,233,0.15) 0%, transparent 70%)'}} />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-1 h-12 bg-teal rounded-full" />
          </div>
          <h2 className="font-display font-bold text-white text-5xl sm:text-6xl md:text-7xl leading-none mb-6">
            PROUDLY SERVING<br />
            <span className="text-teal">CANNING &amp; DISTRICT</span>
          </h2>
          {settings?.foundingYear && (
            <p className="text-white/60 text-xl font-light mt-4">
              Since {settings.foundingYear}
            </p>
          )}
          <p className="text-white/75 text-lg max-w-xl mx-auto mt-6 leading-relaxed">
            We&apos;re a community organization run by and for the people of the Annapolis Valley.
            Every program, every event, every facility — built around you.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="px-8 py-4 bg-white text-forest-700 hover:bg-cream font-semibold rounded-full text-lg transition-all hover:scale-105"
            >
              Our Story
            </Link>
            <Link
              href="/programs"
              className="px-8 py-4 bg-teal hover:bg-teal-500 text-white font-semibold rounded-full text-lg transition-all hover:scale-105"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>

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
