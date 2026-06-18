import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/FadeIn";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Microf — Support for Homeowners & Contractors",
  description:
    "Reach Microf's consumer and contractor support teams by phone or form. Mon–Fri 8AM–8PM, Sat 9AM–2PM EST. Atlanta, GA headquarters.",
  alternates: { canonical: "https://www.microf.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 pt-16">

        {/* ── HEADER ───────────────────────────────────────────────── */}
        <section className="section-pad bg-[var(--color-base)]">
          <div className="container-tight max-w-3xl">
            <FadeIn>
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center gap-2 text-sm text-[var(--color-smoke)]">
                  <li><Link href="/" className="hover:text-[var(--color-ocean)] transition-colors">Home</Link></li>
                  <li aria-hidden="true">/</li>
                  <li className="text-[var(--color-ocean)] font-medium" aria-current="page">Contact</li>
                </ol>
              </nav>
            </FadeIn>
            <FadeIn delay={0.05}>
              <p className="text-sm font-semibold text-[var(--color-ember)] uppercase tracking-wider mb-3">Get in touch</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="mb-5">We&apos;re here when you need us</h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-[var(--color-ink-70)] leading-relaxed">
                Homeowner with a question about your lease? Contractor looking to partner or get support? Our team is ready to help.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ── SUPPORT LINES ────────────────────────────────────────── */}
        <section className="section-pad bg-white pt-0" aria-label="Support phone lines">
          <div className="container-tight">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto -mt-4">
              {[
                {
                  type: "Consumer Support",
                  subhead: "For homeowners",
                  phone: "855-642-7631",
                  href: "tel:8556427631",
                  desc: "Questions about your lease, payment options, application status, or account details.",
                  color: "var(--color-ember)",
                  bg: "var(--color-ember-light)",
                },
                {
                  type: "Contractor Support",
                  subhead: "For dealer partners",
                  phone: "855-498-8200",
                  href: "tel:8554988200",
                  desc: "Enrollment questions, dealer portal support, job funding status, or general partnership inquiries.",
                  color: "var(--color-mint)",
                  bg: "var(--color-mint-light)",
                },
              ].map(({ type, subhead, phone, href, desc, color, bg }, i) => (
                <FadeIn key={type} delay={i * 0.1}>
                  <div className="rounded-2xl p-8 border border-slate-100 bg-white" style={{ boxShadow: "var(--shadow-warm-lg)" }}>
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" style={{ color }} aria-hidden="true">
                          <path d="M8 4h4l2 6-3 2a14 14 0 006 6l2-3 6 2v4a2 2 0 01-2 2A20 20 0 016 6a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-[var(--color-ocean)]">{type}</p>
                        <p className="text-xs text-[var(--color-smoke)]">{subhead}</p>
                      </div>
                    </div>
                    <a
                      href={href}
                      className="block text-3xl font-bold mb-3 hover:opacity-80 transition-opacity"
                      style={{ fontFamily: "var(--font-display)", color }}
                    >
                      {phone}
                    </a>
                    <p className="text-sm text-[var(--color-ink-70)] leading-relaxed mb-4">{desc}</p>
                    <div className="pt-4 border-t border-slate-100">
                      <p className="text-xs font-semibold text-[var(--color-smoke)] uppercase tracking-wider mb-1">Hours</p>
                      <p className="text-sm text-[var(--color-ink)]">Mon–Fri 8:00 AM – 8:00 PM EST</p>
                      <p className="text-sm text-[var(--color-ink)]">Sat 9:00 AM – 2:00 PM EST</p>
                      <p className="text-sm text-[var(--color-smoke)]">Closed Sunday</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT FORM & ADDRESS ────────────────────────────────── */}
        <section className="section-pad bg-[var(--color-base)]" aria-label="Contact form and location">
          <div className="container-tight">
            <div className="grid lg:grid-cols-2 gap-12">
              <FadeIn>
                <div>
                  <h2 className="mb-2">Send us a message</h2>
                  <p className="text-[var(--color-ink-70)] mb-8 leading-relaxed">
                    Prefer to write? Fill out the form and we&apos;ll respond within 1 business day.
                  </p>
                  <ContactForm />
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div>
                  <h2 className="mb-8">Our location</h2>

                  {/* Google Maps embed */}
                  <div className="rounded-2xl overflow-hidden mb-6 border border-slate-200" style={{ boxShadow: "var(--shadow-warm-sm)" }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.815603508618!2d-84.47320642424216!3d33.86864277322661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f27e9d2a6ced57%3A0x9b7297a8a4f8b448!2sMicrof%20LLC!5e0!3m2!1sen!2sus!4v1781756334970!5m2!1sen!2sus"
                      width="100%"
                      height="350"
                      style={{ border: 0, display: "block" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Microf LLC office location"
                    />
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-slate-100" style={{ boxShadow: "var(--shadow-warm-sm)" }}>
                    <h3 className="font-semibold text-[var(--color-ocean)] mb-3">Microf Headquarters</h3>
                    <address className="not-italic text-sm text-[var(--color-ink-70)] leading-relaxed">
                      2849 Paces Ferry Rd SE, Suite 625<br />
                      Atlanta, GA 30339
                    </address>
                    <p className="mt-4 text-xs text-[var(--color-smoke)]">NMLS ID 1817969</p>
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <p className="text-xs font-semibold text-[var(--color-smoke)] uppercase tracking-wider mb-2">Quick Links</p>
                      <div className="flex flex-col gap-1.5">
                        <Link href="https://dealer.microf.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--color-ocean)] hover:text-[var(--color-ember)] transition-colors">
                          Apply Now →
                        </Link>
                        <Link href="https://dealer.microf.com/payment" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--color-ocean)] hover:text-[var(--color-ember)] transition-colors">
                          Make a Payment →
                        </Link>
                        <Link href="https://dealer.microf.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--color-ocean)] hover:text-[var(--color-ember)] transition-colors">
                          Contractor Portal →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
