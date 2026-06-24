'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface Card {
  href: string
  icon: string
  title: string
  desc: string
  cta: string
  accent: string
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function QuickCards({ cards }: { cards: Card[] }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
    >
      {cards.map(({ href, icon, title, desc, cta, accent }) => (
        <motion.div key={href} variants={item}>
          <Link
            href={href}
            className="bg-white rounded-2xl p-7 flex flex-col gap-4 group hover:shadow-xl hover:-translate-y-1.5 transition-all border border-stone-100 h-full"
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
        </motion.div>
      ))}
    </motion.div>
  )
}
