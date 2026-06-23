import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-forest-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/images/logo.png"
              alt="Canning Recreation logo"
              width={44}
              height={44}
              className="w-11 h-11 object-contain shrink-0"
            />
            <div>
              <p className="font-display font-semibold text-white leading-none">Canning &amp; District</p>
              <p className="text-white/55 text-xs tracking-wide">Recreational Commission</p>
            </div>
          </div>
          <p className="text-white/55 text-sm leading-relaxed max-w-xs">
            Serving the Village of Canning &amp; District — community recreation in the heart of Nova Scotia.
            Residents and visitors always welcome.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-display font-semibold text-white/80 tracking-wide uppercase text-xs mb-4">
            Explore
          </h3>
          <ul className="space-y-2">
            {[
              { href: '/',              label: 'Home' },
              { href: '/programs',      label: 'Programs' },
              { href: '/events',        label: 'Events' },
              { href: '/facilities',    label: 'Facilities' },
              { href: '/about',         label: 'About Us' },
              { href: '/about#contact', label: 'Contact' },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="text-white/55 hover:text-white text-sm transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Visit */}
        <div>
          <h3 className="font-display font-semibold text-white/80 tracking-wide uppercase text-xs mb-4">
            Plan Your Visit
          </h3>
          <p className="text-white/55 text-sm leading-relaxed mb-4">
            Canning, Nova Scotia is located in the heart of the Annapolis Valley —
            one of Canada&apos;s most scenic regions.
          </p>
          <Link
            href="/about#contact"
            className="inline-block px-5 py-2.5 border border-white/20 hover:border-white/50 text-white/70 hover:text-white text-sm font-medium rounded-full transition-colors"
          >
            Get in Touch →
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/35">
          <span>© {year} Canning &amp; District Recreational Commission. All rights reserved.</span>
          <span>Canning, Nova Scotia 🍁</span>
        </div>
      </div>
    </footer>
  )
}
