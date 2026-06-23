'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

type Category = 'all' | 'youth' | 'adult' | 'drop-in' | 'seasonal'

export interface StaticProgram {
  id: string
  title: string
  slug: string
  category: string
  photo?: string
  ageRange?: string
  schedule?: string
  registrationUrl?: string
}

const PLACEHOLDER = 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&auto=format&fit=crop'

const FILTERS: { label: string; value: Category }[] = [
  { label: 'All Programs', value: 'all' },
  { label: 'Youth', value: 'youth' },
  { label: 'Adult', value: 'adult' },
  { label: 'Drop-In', value: 'drop-in' },
  { label: 'Seasonal', value: 'seasonal' },
]

export default function ProgramsGrid({ programs }: { programs: StaticProgram[] }) {
  const [active, setActive] = useState<Category>('all')

  const filtered = active === 'all' ? programs : programs.filter((p) => p.category === active)

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        {FILTERS.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setActive(value)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
              active === value
                ? 'bg-forest-700 text-white'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="py-20 text-center text-stone-400">
          <p className="text-5xl mb-4">🏃</p>
          <p className="text-xl font-semibold">No {active === 'all' ? '' : active + ' '}programs yet</p>
          <p className="mt-2 text-sm">Check back soon or contact us to ask about upcoming programs.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((prog) => {
            const imgSrc = prog.photo ?? PLACEHOLDER

            return (
              <div
                key={prog.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-stone-100"
              >
                <div className="relative h-48">
                  <Image
                    src={imgSrc}
                    alt={prog.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-forest-700 text-white text-xs font-semibold rounded-full capitalize">
                    {prog.category}
                  </span>
                </div>
                <div className="p-5">
                  <h2 className="font-display font-bold text-forest-700 text-xl mb-2">{prog.title}</h2>
                  <div className="space-y-1 text-sm text-stone-500 mb-4">
                    {prog.ageRange && (
                      <p className="flex items-center gap-2">
                        <span>👤</span> {prog.ageRange}
                      </p>
                    )}
                    {prog.schedule && (
                      <p className="flex items-center gap-2">
                        <span>📅</span> {prog.schedule}
                      </p>
                    )}
                  </div>
                  {prog.registrationUrl ? (
                    <a
                      href={prog.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-5 py-2.5 bg-teal hover:bg-teal-500 text-white text-sm font-semibold rounded-full transition-colors"
                    >
                      Register Now
                    </a>
                  ) : (
                    <Link
                      href="/about#contact"
                      className="inline-block px-5 py-2.5 border-2 border-forest-700 text-forest-700 hover:bg-forest-700 hover:text-white text-sm font-semibold rounded-full transition-colors"
                    >
                      Learn More
                    </Link>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
