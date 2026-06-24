'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const links = [
  { href: '/',           label: 'Home' },
  { href: '/programs',   label: 'Programs' },
  { href: '/events',     label: 'Events' },
  { href: '/facilities', label: 'Facilities' },
  { href: '/about',      label: 'About' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  const isHome = pathname === '/'
  const transparent = isHome && !scrolled

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 ${
          transparent
            ? 'bg-transparent'
            : 'bg-white shadow-sm border-b border-stone-100'
        } ${isHome ? 'transition-all duration-300' : ''}`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/logo.png"
              alt="Canning Recreation logo"
              width={44}
              height={44}
              className="w-10 h-10 object-contain shrink-0"
              priority
            />
            <div>
              <p className={`font-display font-semibold text-sm leading-none ${
                transparent ? 'text-white' : 'text-forest-700'
              }`}>
                Canning &amp; District
              </p>
              <p className={`text-xs tracking-wide ${
                transparent ? 'text-white/65' : 'text-stone-500'
              }`}>
                Recreational Commission
              </p>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === href
                    ? !transparent
                      ? 'text-forest-700 bg-forest-50'
                      : 'text-white bg-white/15'
                    : !transparent
                      ? 'text-stone-500 hover:text-forest-700 hover:bg-stone-50'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/about#contact"
              className="ml-2 px-5 py-2.5 bg-teal hover:bg-teal-500 text-white rounded-full text-sm font-semibold transition-colors shadow-sm"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              !transparent ? 'text-charcoal hover:bg-stone-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {open ? (
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 18L18 6M6 6l12 12"/>
              </svg>
            ) : (
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18"/>
              </svg>
            )}
          </button>
        </nav>
      </header>

      {/* Mobile overlay — cream background, feels warm */}
      <div className={`fixed inset-0 z-40 bg-cream flex flex-col justify-center items-center gap-5 transition-all duration-300 md:hidden ${
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`font-display text-4xl font-semibold transition-colors ${
              pathname === href ? 'text-teal' : 'text-forest-700 hover:text-teal'
            }`}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/about#contact"
          className="mt-3 px-8 py-3.5 bg-teal text-white font-semibold text-xl rounded-full shadow"
        >
          Contact Us
        </Link>
      </div>
    </>
  )
}
