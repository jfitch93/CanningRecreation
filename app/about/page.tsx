import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About | Canning Recreation',
  description: 'About the Canning & District Recreational Commission — our story, our mission, and how to reach us.',
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
            <p className="text-teal font-semibold text-xs uppercase tracking-widest mb-2">Community &amp; history</p>
            <h1 className="font-display font-bold text-5xl md:text-7xl">About Us</h1>
            <p className="mt-4 text-white/65 text-xl max-w-xl">
              A volunteer-run recreation commission proudly serving Canning &amp; District, Nova Scotia.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-teal font-semibold text-xs uppercase tracking-widest mb-3">Our Mission</p>
            <h2 className="font-display font-bold text-forest-700 text-4xl md:text-5xl mb-6">
              Recreation for Everyone
            </h2>
            <p className="text-stone-500 text-xl leading-relaxed">
              The Canning &amp; District Recreational Commission provides quality programs and facilities
              for every resident of Canning and the surrounding district, and for the visitors who
              make this small Nova Scotia village part of their journey.
            </p>
            <p className="text-stone-400 text-lg leading-relaxed mt-5">
              We are a volunteer-driven organization rooted in a region known for its natural beauty,
              warm communities, and rich history. Everyone is welcome here.
            </p>
          </div>
        </section>

        {/* Valley callout */}
        <section className="bg-linen py-16 px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <p className="text-4xl mb-3">🌿</p>
              <h3 className="font-display font-bold text-forest-700 text-xl mb-2">Natural Beauty</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                Set in the Village of Canning. Nova Scotia scenery, apple orchards, and wide open skies.
              </p>
            </div>
            <div className="p-6">
              <p className="text-4xl mb-3">🤝</p>
              <h3 className="font-display font-bold text-forest-700 text-xl mb-2">Volunteer-Run</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                Entirely driven by community volunteers who care deeply about Canning &amp; District.
              </p>
            </div>
            <div className="p-6">
              <p className="text-4xl mb-3">🏒</p>
              <h3 className="font-display font-bold text-forest-700 text-xl mb-2">For All Ages</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                Programs and facilities designed for kids, families, adults, and visitors of all backgrounds.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-white py-20 px-4 scroll-mt-20">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-teal font-semibold text-xs uppercase tracking-widest mb-2">We&apos;d love to hear from you</p>
              <h2 className="font-display font-bold text-forest-700 text-4xl md:text-5xl">Get in Touch</h2>
              <p className="text-stone-400 mt-3">
                Whether you&apos;re a local, planning a visit, or just curious, say hello.
              </p>
            </div>

            <form
              action={`mailto:${CONTACT_EMAIL}`}
              method="post"
              encType="text/plain"
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-stone-600 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Jane Smith"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal/50 text-sm bg-cream"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-stone-600 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal/50 text-sm bg-cream"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-stone-600 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="Rink rental inquiry"
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal/50 text-sm bg-cream"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-stone-600 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us how we can help..."
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal/50 text-sm resize-none bg-cream"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-teal hover:bg-teal-500 text-white font-semibold rounded-xl transition-colors text-base"
              >
                Send Message
              </button>
              <p className="text-center text-xs text-stone-400">
                This opens your email client. You can also find us on Facebook.
              </p>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
