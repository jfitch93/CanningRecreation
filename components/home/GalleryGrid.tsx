'use client'

import Image from 'next/image'
import { useState } from 'react'

interface Photo {
  src: string
  alt: string
}

export default function GalleryGrid({ photos }: { photos: Photo[] }) {
  const [lightbox, setLightbox] = useState<Photo | null>(null)

  if (photos.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-14 text-center border border-stone-100">
        <p className="text-4xl mb-4">📸</p>
        <p className="font-display font-semibold text-forest-700 text-2xl mb-2">Photos coming soon</p>
        <p className="text-stone-400 text-sm max-w-sm mx-auto">
          We are putting together our gallery. Check back soon.
        </p>
      </div>
    )
  }

  return (
    <>
      {/* Masonry grid via CSS columns */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {photos.map((photo, i) => (
          <div key={i} className="break-inside-avoid mb-4 group cursor-pointer" onClick={() => setLightbox(photo)}>
            <div className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={800}
                height={600}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <svg className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"/>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
            aria-label="Close"
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[90vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </>
  )
}
