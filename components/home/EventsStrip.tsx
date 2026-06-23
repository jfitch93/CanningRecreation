'use client'

import Image from 'next/image'
import Link from 'next/link'

export interface StaticEvent {
  id: string
  title: string
  slug: string
  date: string
  time?: string
  location?: string
  photo?: string
}

const PLACEHOLDER = 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop'

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

function formatDate(iso: string) {
  const d = new Date(iso + 'T00:00:00')
  return { day: d.getDate(), month: MONTHS[d.getMonth()], year: d.getFullYear() }
}

export default function EventsStrip({ events }: { events: StaticEvent[] }) {
  if (events.length === 0) {
    return (
      <p className="text-stone-400 italic py-8">
        No upcoming events right now — check back soon!
      </p>
    )
  }

  return (
    <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 -mx-2 px-2">
      {events.map((ev) => {
        const { day, month, year } = formatDate(ev.date)
        const imgSrc = ev.photo ?? PLACEHOLDER

        return (
          <Link
            key={ev.id}
            href={`/events#${ev.slug}`}
            className="flex-none w-64 sm:w-72 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all group border border-stone-100"
          >
            <div className="relative h-40 w-full">
              <Image
                src={imgSrc}
                alt={ev.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="288px"
              />
              <div className="absolute top-3 left-3 bg-forest-700 text-white rounded-xl px-3 py-1.5 text-center leading-none shadow-lg">
                <div className="font-display font-bold text-2xl">{day}</div>
                <div className="text-xs uppercase tracking-wide opacity-80">{month} {year}</div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-stone-800 text-sm leading-snug line-clamp-2 group-hover:text-forest-700 transition-colors">
                {ev.title}
              </h3>
              {(ev.time || ev.location) && (
                <p className="text-stone-400 text-xs mt-1.5 flex items-center gap-1">
                  {ev.time && <span>{ev.time}</span>}
                  {ev.time && ev.location && <span>·</span>}
                  {ev.location && <span>{ev.location}</span>}
                </p>
              )}
            </div>
          </Link>
        )
      })}
    </div>
  )
}
