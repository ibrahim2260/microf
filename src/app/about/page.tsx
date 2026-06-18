import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "About Microf — Who We Are & What We Stand For",
  description:
    "Microf is an Atlanta-based lease-to-own financing company dedicated to making home comfort accessible to every homeowner, regardless of credit history.",
  alternates: { canonical: "https://www.microf.com/about" },
};

const values = [
  {
    title: "Dignity First",
    desc: "Every homeowner deserves to be treated with respect, regardless of their financial history. We built a process that feels nothing like a judgment.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402C1 3.731 3.68 2 6.5 2c1.98 0 4.04 1.14 5.5 2.87C13.46 3.14 15.52 2 17.5 2 20.32 2 23 3.73 23 7.191c0 4.105-5.37 8.863-11 14.402z" />
      </svg>
    ),
  },
  {
    title: "Speed When It Matters",
    desc: "When your HVAC fails in extreme weather, minutes matter. Our near-instant approval process was engineered for moments of real urgency.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Transparency Always",
    desc: "Lease-to-own costs more than cash. We say so clearly, upfront, every time — because informed customers make better decisions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4M12 8h.01" />
      </svg>
    ),
  },
  {
    title: "True Partnership",
    desc: "Contractors who partner with Microf aren't just using a tool — they're growing with a company that has a genuine stake in their success.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
];

const associations = [
  { name: "ACCA", full: "Air Conditioning Contractors of America" },
  { name: "HARDI", full: "Heating, Air-conditioning & Refrigeration Distributors International" },
  { name: "EGIA", full: "Electric & Gas Industries Association" },
  { name: "Women in HVACR", full: "Women in HVACR" },
  { name: "AHR", full: "AHR Expo Participant" },
  { name: "BBB", full: "Better Business Bureau Accredited" },
];

const facts = [
  { label: "Headquarters", value: "Atlanta, GA" },
  { label: "NMLS ID", value: "1817969" },
  { label: "States Served", value: "43" },
  { label: "Product Types", value: "HVAC & Water Heaters" },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 pt-16">

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="section-pad bg-[var(--color-base)] relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(circle, var(--color-ocean-light) 0%, transparent 70%)", transform: "translate(20%, -20%)" }}
          />
          <div className="container-tight max-w-3xl relative z-10">
            <FadeIn>
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center gap-2 text-sm text-[var(--color-smoke)]">
                  <li><Link href="/" className="hover:text-[var(--color-ocean)] transition-colors">Home</Link></li>
                  <li aria-hidden="true">/</li>
                  <li className="font-medium" style={{ color: "var(--color-ocean)" }} aria-current="page">About</li>
                </ol>
              </nav>
            </FadeIn>
            <FadeIn delay={0.05}>
              <p className="text-sm font-semibold text-[var(--color-ember)] uppercase tracking-wider mb-3">Who we are</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="mb-5">
                Making home comfort accessible to{" "}
                <span style={{ color: "var(--color-ember)" }}>everyone</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-[var(--color-ink-70)] leading-relaxed">
                Microf is an Atlanta-based lease-to-own financing company on a mission to ensure that no homeowner has to go without heat in January or air conditioning in August because of their credit history.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ── MISSION ──────────────────────────────────────────────── */}
        <section className="section-pad bg-white" aria-labelledby="mission-heading">
          <div className="container-tight">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <FadeIn>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-ember)] uppercase tracking-wider mb-3">Our mission</p>
                  <h2 id="mission-heading">The moment we were built for</h2>
                  <div className="mt-5 space-y-4 text-[var(--color-ink-70)] leading-relaxed">
                    <p>
                      It&apos;s midnight. A family&apos;s furnace fails. Outside, it&apos;s 18 degrees. They call their HVAC contractor who can replace the unit — but it costs $4,500 they don&apos;t have, and their credit history means banks say no.
                    </p>
                    <p>
                      Microf exists for that moment. Not to take advantage of desperation, but to provide a dignified, transparent solution for a family that needs one.
                    </p>
                    <p>
                      We offer lease-to-own agreements for HVAC systems and water heaters — no hard credit check, near-instant decisions, flexible payments — because home comfort is a basic need, not a luxury reserved for people with perfect credit.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <figure>
                  <div className="rounded-2xl overflow-hidden aspect-video relative shadow-[var(--shadow-warm-lg)]">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="none"
                      poster="/hero-poster.jpg"
                      aria-label="Animation showing a home in extreme heat — the situation Microf was built to solve"
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src="/hero.webm" type="video/webm" />
                      <source src="/hero.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <figcaption className="mt-3 flex items-center gap-2 px-1">
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--color-ember)" }} />
                    <p className="text-sm font-medium" style={{ color: "var(--color-ink-70)" }}>
                      When critical equipment fails, Microf answers.
                    </p>
                  </figcaption>
                </figure>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── VALUES ───────────────────────────────────────────────── */}
        <section className="section-pad bg-[var(--color-base)]" aria-labelledby="values-heading">
          <div className="container-tight">
            <FadeIn>
              <div className="text-center mb-12">
                <p className="text-sm font-semibold text-[var(--color-ember)] uppercase tracking-wider mb-3">What guides us</p>
                <h2 id="values-heading">Our values</h2>
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {values.map((value, i) => (
                <FadeIn key={i} delay={i * 0.1} className="h-full">
                  <div
                    className="flex flex-col h-full bg-white rounded-xl p-6 border border-slate-100 hover:border-[rgba(232,98,26,0.4)] hover:shadow-[0_0_28px_rgba(232,98,26,0.22),0_4px_16px_rgba(232,98,26,0.10)] transition-all duration-300"
                    style={{ boxShadow: "var(--shadow-warm-sm)" }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center mb-4 flex-shrink-0"
                      style={{ background: "var(--color-ember-light)", color: "var(--color-ember)" }}
                    >
                      {value.icon}
                    </div>
                    <h3 className="font-semibold mb-2" style={{ color: "var(--color-ocean)" }}>{value.title}</h3>
                    <p className="text-sm text-[var(--color-ink-70)] leading-relaxed">{value.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── LEADERSHIP PLACEHOLDER ───────────────────────────────── */}
        <section className="section-pad bg-white" aria-labelledby="leadership-heading">
          <div className="container-tight">
            <FadeIn>
              <div className="text-center mb-12">
                <p className="text-sm font-semibold text-[var(--color-ember)] uppercase tracking-wider mb-3">The team</p>
                <h2 id="leadership-heading">Leadership</h2>
                <p className="mt-3 text-[var(--color-ink-70)] max-w-xl mx-auto">
                  Microf is led by a team of fintech, HVAC industry, and consumer finance professionals based in Atlanta, GA.
                </p>
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[1, 2, 3].map((n) => (
                <FadeIn key={n} delay={n * 0.08}>
                  <div className="bg-[var(--color-base)] rounded-xl p-8 border border-slate-100 text-center h-full flex flex-col items-center" style={{ boxShadow: "var(--shadow-warm-sm)" }}>
                    <div className="w-20 h-20 rounded-full mb-5 flex items-center justify-center" style={{ background: "var(--color-ocean-light)" }}>
                      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" style={{ color: "var(--color-ocean-mid)", opacity: 0.4 }} aria-hidden="true">
                        <circle cx="24" cy="18" r="8" stroke="currentColor" strokeWidth="2" />
                        <path d="M8 42c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className="h-4 bg-slate-100 rounded-full w-32 mb-2.5" />
                    <div className="h-3 bg-slate-100 rounded-full w-24 mb-4" />
                    <p className="text-xs text-[var(--color-smoke)] mt-auto">Bio coming soon</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── ASSOCIATIONS ─────────────────────────────────────────── */}
        <section className="section-pad bg-[var(--color-base)]" aria-labelledby="associations-heading">
          <div className="container-tight">
            <FadeIn>
              <div className="text-center mb-10">
                <p className="text-sm font-semibold text-[var(--color-ember)] uppercase tracking-wider mb-3">Industry standing</p>
                <h2 id="associations-heading">Associations & memberships</h2>
                <p className="mt-3 text-[var(--color-ink-70)] max-w-lg mx-auto">
                  Microf is an active member of the organizations shaping the future of the HVAC and home comfort industry.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {associations.map(({ name, full }, i) => (
                <FadeIn key={name} delay={i * 0.07}>
                  <div
                    className="bg-white rounded-xl px-5 py-5 border border-slate-100 flex flex-col items-center gap-1.5 text-center h-full"
                    style={{ boxShadow: "var(--shadow-warm-sm)" }}
                    title={full}
                  >
                    <span className="text-lg font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--color-ocean)" }}>{name}</span>
                    <span className="text-xs text-[var(--color-smoke)] leading-tight">{full}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── FACTS ────────────────────────────────────────────────── */}
        <section className="section-pad bg-white border-t border-b border-slate-100" aria-label="Company facts">
          <div className="container-tight">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {facts.map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-1.5">
                  <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--color-smoke)" }}>{label}</p>
                  <p className="font-semibold text-lg" style={{ color: "var(--color-ocean)" }}>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section className="section-pad text-center bg-[var(--color-base)]">
          <FadeIn>
            <div className="container-tight max-w-xl mx-auto">
              <h2 className="mb-4">Ready to get comfortable?</h2>
              <p className="text-[var(--color-ink-70)] mb-8 leading-relaxed">
                Apply now for lease-to-own HVAC or water heater financing — no credit check required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://dealer.microf.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5"
                  style={{ background: "var(--color-ember)" }}
                >
                  Apply as a Homeowner
                </Link>
                <Link
                  href="/contractors"
                  className="inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5"
                  style={{ border: "2px solid var(--color-ocean)", color: "var(--color-ocean)" }}
                >
                  Become a Contractor Partner
                </Link>
              </div>
            </div>
          </FadeIn>
        </section>

      </main>
      <Footer />
    </>
  );
}
