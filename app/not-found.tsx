import Link from 'next/link'
import Nav from '@/components/Nav'

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-cream flex flex-col items-center justify-center text-center px-4 pt-20">
        <p className="font-display font-bold text-teal text-8xl mb-4">404</p>
        <h1 className="font-display font-bold text-forest-700 text-4xl mb-4">Page Not Found</h1>
        <p className="text-stone-400 text-lg max-w-md mb-8">
          Looks like this page took a wrong turn somewhere in the Annapolis Valley.
        </p>
        <Link
          href="/"
          className="px-8 py-4 bg-forest-700 hover:bg-forest-600 text-white font-semibold rounded-full transition-colors"
        >
          Back to Home
        </Link>
      </main>
    </>
  )
}
