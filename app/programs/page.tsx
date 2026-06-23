import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ProgramsGrid from './ProgramsGrid'
import type { StaticProgram } from './ProgramsGrid'

export const metadata = {
  title: 'Programs | Canning Recreation',
  description: 'Recreation programs for youth, adults, and visitors in the Annapolis Valley, Nova Scotia.',
}

const PROGRAMS: StaticProgram[] = []

export default function ProgramsPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-forest-700 pt-32 pb-16 px-4 text-white">
          <div className="max-w-7xl mx-auto">
            <p className="text-teal font-semibold text-xs uppercase tracking-widest mb-2">Join the community</p>
            <h1 className="font-display font-bold text-5xl md:text-7xl">Programs</h1>
            <p className="mt-4 text-white/65 text-xl max-w-xl">
              Something for everyone — from first-time skaters to competitive adults, and visitors too.
            </p>
          </div>
        </section>

        <section className="bg-cream py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <ProgramsGrid programs={PROGRAMS} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
