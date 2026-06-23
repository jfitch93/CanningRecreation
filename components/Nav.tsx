'use client'

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
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile nav on route change
  useEffect(() => { setOpen(false) }, [pathname])

  const isHome = pathname === '/'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || !isHome
            ? 'bg-forest-700 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-teal rounded-full flex items-center justify-center shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M10 2L13 8H17L13.5 12L15 18L10 15L5 18L6.5 12L3 8H7L10 2Z" fill="white"/>
              </svg>
            </div>
            <span className="font-display font-semibold text-white text-sm leading-tight hidden sm:block">
              Canning&nbsp;&amp;&nbsp;District<br />
              <span className="font-normal text-white/80 text-xs tracking-wide">Recreational Commission</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === href
                    ? 'bg-white/15 text-white'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/about#contact"
              className="ml-3 px-5 py-2.5 bg-teal hover:bg-teal-500 text-white text-sm font-semibold rounded-full transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 18L18 6M6 6l12 12"/>
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18"/>
              </svg>
            )}
          </button>
        </nav>
      </header>

      {/* Mobile full-screen overlay */}
      <div
        className={`fixed inset-0 z-40 bg-forest-700 flex flex-col justify-center items-center gap-6 transition-all duration-300 md:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`font-display text-4xl font-semibold transition-colors ${
              pathname === href ? 'text-teal' : 'text-white hover:text-teal'
            }`}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/about#contact"
          className="mt-4 px-8 py-3 bg-teal text-white font-display font-semibold text-2xl rounded-full"
        >
          Contact Us
        </Link>
      </div>
    </>
  )
}
