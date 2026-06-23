import Link from 'next/link'

interface FooterProps {
  orgName?: string
  address?: string
  phone?: string
  email?: string
  facebookUrl?: string
  foundingYear?: number
}

export default function Footer({
  orgName = 'Canning & District Recreational Commission',
  address,
  phone,
  email,
  facebookUrl,
  foundingYear,
}: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-forest-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 bg-teal rounded-full flex items-center justify-center shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M10 2L13 8H17L13.5 12L15 18L10 15L5 18L6.5 12L3 8H7L10 2Z" fill="white"/>
              </svg>
            </div>
            <span className="font-display font-semibold text-white leading-tight">
              Canning &amp; District<br />
              <span className="font-normal text-white/70 text-sm">Recreational Commission</span>
            </span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            Proudly serving the Canning &amp; District community in Nova Scotia&apos;s beautiful Annapolis Valley.
          </p>
          {foundingYear && (
            <p className="mt-3 text-white/40 text-xs">Est. {foundingYear}</p>
          )}
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-display font-semibold text-white/90 tracking-wide uppercase text-sm mb-4">
            Explore
          </h3>
          <ul className="space-y-2">
            {[
              { href: '/',           label: 'Home' },
              { href: '/programs',   label: 'Programs' },
              { href: '/events',     label: 'Events' },
              { href: '/facilities', label: 'Facilities' },
              { href: '/about',      label: 'About Us' },
              { href: '/about#contact', label: 'Contact' },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display font-semibold text-white/90 tracking-wide uppercase text-sm mb-4">
            Get in Touch
          </h3>
          <ul className="space-y-3 text-sm text-white/60">
            {address && (
              <li className="flex gap-2">
                <span className="mt-0.5 shrink-0">📍</span>
                <span>{address}</span>
              </li>
            )}
            {phone && (
              <li>
                <a href={`tel:${phone}`} className="hover:text-white transition-colors">
                  📞 {phone}
                </a>
              </li>
            )}
            {email && (
              <li>
                <a href={`mailto:${email}`} className="hover:text-white transition-colors">
                  ✉️ {email}
                </a>
              </li>
            )}
            {facebookUrl && (
              <li>
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/40">
          <span>© {year} {orgName}. All rights reserved.</span>
          <span>Built with ♥ for Canning, NS</span>
        </div>
      </div>
    </footer>
  )
}
