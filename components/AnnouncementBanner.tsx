'use client'

import { useState } from 'react'

interface Announcement {
  _id: string
  text: string
  colour: 'yellow' | 'red'
}

export default function AnnouncementBanner({ announcements }: { announcements: Announcement[] }) {
  const [dismissed, setDismissed] = useState<Set<string>>(new Set())

  const visible = announcements.filter((a) => !dismissed.has(a._id))
  if (visible.length === 0) return null

  // Show the most urgent one (red first, else first in list)
  const banner = visible.find((a) => a.colour === 'red') ?? visible[0]

  const isRed = banner.colour === 'red'

  return (
    <div
      className={`relative flex items-center justify-center px-4 py-2.5 text-sm font-medium ${
        isRed
          ? 'bg-urgent text-white'
          : 'bg-amber-400 text-amber-950'
      }`}
      role="alert"
    >
      <span className="mr-2">{isRed ? '🚨' : '📣'}</span>
      <span>{banner.text}</span>
      <button
        onClick={() => setDismissed((prev) => new Set([...prev, banner._id]))}
        className={`absolute right-3 p-1 rounded hover:bg-black/10 transition-colors ${
          isRed ? 'text-white/80 hover:text-white' : 'text-amber-900/60 hover:text-amber-950'
        }`}
        aria-label="Dismiss announcement"
      >
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4l8 8M12 4l-8 8"/>
        </svg>
      </button>
    </div>
  )
}
