import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About | Canning Recreation',
  description: 'About the Canning & District Recreational Commission — our mission, our team, and how to reach us.',
}

const CONTACT_EMAIL = 'info@canningrecreation.ca'

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-forest-700 pt-32 pb-16 px-4 text-white">
          <div className="max-w-7xl mx-auto">
            <p className="text-teal font-semibold text-sm uppercase tracking-widest mb-2">Who we are</p>
            <h1 className="font-display font-bold text-5xl md:text-7xl">About Us</h1>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-teal font-semibold text-sm uppercase tracking-widest mb-3">Our Mission</p>
            <h2 className="font-display font-bold text-forest-700 text-4xl md:text-5xl mb-6">
              Recreation for Every Resident
            </h2>
            <p className="text-stone-600 text-xl leading-relaxed">
              The Canning &amp; District Recreational Commission exists to provide quality recreational
              programs and facilities for every resident of Canning and the surrounding district.
              We believe that access to sport, play, and community spaces makes our community healthier,
              happier, and stronger.
            </p>
            <p className="text-stone-500 text-lg leading-relaxed mt-4">
              We are a volunteer-driven organization proudly serving the Annapolis Valley.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-cream py-20 px-4 scroll-mt-20">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-teal font-semibold text-sm uppercase tracking-widest mb-2">We&apos;d love to hear from you</p>
              <h2 className="font-display font-bold text-forest-700 text-4xl md:text-5xl">Contact Us</h2>
            </div>

            <form
              action={`mailto:${CONTACT_EMAIL}`}
              method="post"
              encType="text/plain"
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-stone-700 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent text-sm"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-stone-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent text-sm"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-stone-700 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent text-sm"
                  placeholder="Rink rental inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-stone-700 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent text-sm resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-teal hover:bg-teal-500 text-white font-semibold rounded-xl transition-colors text-lg"
              >
                Send Message
              </button>
              <p className="text-center text-xs text-stone-400">
                This will open your email client. Alternatively, find us on Facebook.
              </p>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
