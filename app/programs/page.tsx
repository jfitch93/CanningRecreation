import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { getPrograms, getSiteSettings } from '@/sanity/lib/queries'
import { urlForImage } from '@/sanity/lib/image'
import ProgramsGrid from './ProgramsGrid'

export const revalidate = 60

export const metadata = {
  title: 'Programs | Canning Recreation',
  description: 'Youth, adult, drop-in, and seasonal recreation programs for the Canning & District community.',
}

export default async function ProgramsPage() {
  const [programs, settings] = await Promise.all([
    getPrograms().catch(() => []),
    getSiteSettings().catch(() => null),
  ])

  return (
    <>
      <Nav />
      <main>
        {/* Page hero */}
        <section className="bg-forest-700 pt-32 pb-16 px-4 text-white">
          <div className="max-w-7xl mx-auto">
            <p className="text-teal font-semibold text-sm uppercase tracking-widest mb-2">Canning Recreation</p>
            <h1 className="font-display font-bold text-5xl md:text-7xl">Programs</h1>
            <p className="mt-4 text-white/70 text-xl max-w-xl">
              Something for everyone — from first-time skaters to competitive adults.
            </p>
          </div>
        </section>

        {/* Filterable grid */}
        <section className="bg-cream py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <ProgramsGrid programs={programs} />
          </div>
        </section>
      </main>
      <Footer
        orgName={settings?.orgName}
        address={settings?.address}
        phone={settings?.phone}
        email={settings?.email}
        facebookUrl={settings?.facebookUrl}
        foundingYear={settings?.foundingYear}
      />
    </>
  )
}
