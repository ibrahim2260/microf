import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import FAQ from "@/components/sections/FAQ";
import PaymentEstimator from "@/components/sections/PaymentEstimator";
import FadeIn from "@/components/ui/FadeIn";
import MobileApplyCTA from "@/components/ui/MobileApplyCTA";

export const metadata: Metadata = {
  title: "HVAC Financing — No Credit Check Lease-to-Own",
  description:
    "Finance a new air conditioner, furnace, heat pump, or ductless mini-split with no credit check required. Flexible lease-to-own payments through Microf.",
  keywords: ["HVAC financing no credit check", "lease to own air conditioner", "furnace financing bad credit", "heat pump financing"],
  alternates: { canonical: "https://www.microf.com/homeowners/hvac" },
};

const faqs = [
  {
    question: "What types of HVAC systems does Microf finance?",
    answer:
      "Microf can finance central air conditioning systems, gas and electric furnaces, heat pumps (both air-source and mini-split), ductless mini-split systems, and combination systems. The equipment must be new and installed by a Microf-enrolled contractor.",
  },
  {
    question: "Is there a minimum or maximum equipment cost?",
    answer:
      "Lease amounts vary. Your Microf-enrolled contractor can confirm the specific range available for your equipment. Most standard residential HVAC replacements fall within the eligible range.",
  },
  {
    question: "Does the system have to be a specific brand?",
    answer:
      "No specific brand is required. Microf finances the installation regardless of the equipment brand your contractor installs. Equipment selection is between you and your contractor.",
  },
  {
    question: "What if the system breaks down after installation?",
    answer:
      "Equipment warranties are handled between you, your contractor, and the manufacturer. Many new HVAC systems come with manufacturer warranties of 5–10 years on parts. Your Microf lease covers the financing — discuss warranty coverage with your contractor at time of installation.",
  },
  {
    question: "Can I finance both the unit and labor?",
    answer:
      "The Microf lease covers the total cost presented by your contractor, which typically includes equipment and installation labor. The exact scope is determined by your contractor's quote.",
  },
];

const systems = [
  {
    name: "Central Air Conditioners",
    desc: "Cool your whole home with a central AC system. Finance the full replacement — outdoor condenser, air handler, and installation — with one simple lease.",
    icon: "❄️",
    badges: ["Split & Packaged", "All major brands", "Installation included"],
  },
  {
    name: "Gas & Electric Furnaces",
    desc: "When your furnace fails in winter, there's no time to wait. Microf gets you approved fast so your contractor can install a new furnace before temperatures drop further.",
    icon: "🔥",
    badges: ["Gas & Electric", "All efficiency ratings", "Emergency-ready"],
  },
  {
    name: "Heat Pumps",
    desc: "Modern heat pumps provide both heating and cooling in one system — and Microf finances the full installation with the same no-credit-check process.",
    icon: "♻️",
    badges: ["Air-source & geothermal", "Heating + cooling", "Energy efficient"],
  },
  {
    name: "Ductless Mini-Splits",
    desc: "Perfect for additions, older homes without ductwork, or targeted room comfort. Finance ductless mini-split systems with flexible lease-to-own terms.",
    icon: "🌬️",
    badges: ["Single & multi-zone", "No ductwork needed", "Year-round comfort"],
  },
];

export default function HVACPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 pt-16">

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden py-20 md:py-28"
          style={{
            background: "linear-gradient(135deg, var(--color-ocean) 0%, var(--color-ocean-mid) 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="container-tight relative z-10">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-white/50">
                <li><Link href="/" className="hover:text-white/80 transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/homeowners" className="hover:text-white/80 transition-colors">Homeowners</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white/80 font-medium" aria-current="page">HVAC</li>
              </ol>
            </nav>

            <div className="max-w-2xl">
              <FadeIn>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-wider" style={{ background: "rgba(232,98,26,0.2)", color: "var(--color-ember)", border: "1px solid rgba(232,98,26,0.3)" }}>
                  HVAC Financing
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="text-white mb-5">
                  New AC or furnace,<br />
                  <span style={{ color: "var(--color-ember)" }}>no credit check</span> required
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-lg text-white/75 leading-relaxed mb-8">
                  When your HVAC system fails, you can&apos;t afford to wait. Microf&apos;s lease-to-own program gets you approved in minutes — regardless of your credit history — so your contractor can get to work.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <Link
                  href="https://dealer.microf.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5"
                  style={{ background: "var(--color-ember)" }}
                >
                  Apply Now — Instant Decision
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── SYSTEMS ──────────────────────────────────────────────── */}
        <section className="section-pad bg-[var(--color-base)]" aria-labelledby="systems-heading">
          <div className="container-tight">
            <FadeIn>
              <div className="text-center mb-12">
                <p className="text-sm font-semibold text-[var(--color-ember)] uppercase tracking-wider mb-3">Covered equipment</p>
                <h2 id="systems-heading">Every major HVAC system type</h2>
                <p className="mt-3 text-[var(--color-ink-70)] max-w-lg mx-auto">
                  Whatever your home needs to stay comfortable, Microf can finance it — new installation only, through a certified Microf contractor.
                </p>
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {systems.map((system, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-7 border border-slate-100 hover:border-orange-100 transition-all hover:shadow-[var(--shadow-warm-md)]" style={{ boxShadow: "var(--shadow-warm-sm)" }}>
                    <div className="text-3xl mb-4">{system.icon}</div>
                    <h3 className="text-lg font-semibold text-[var(--color-ocean)] mb-2">{system.name}</h3>
                    <p className="text-sm text-[var(--color-ink-70)] leading-relaxed mb-4">{system.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {system.badges.map((b) => (
                        <span key={b} className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ background: "var(--color-ocean-light)", color: "var(--color-ocean)" }}>
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ──────────────────────────────────────────────── */}
        <section className="section-pad bg-white" aria-labelledby="process-heading">
          <div className="container-tight">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-ember)] uppercase tracking-wider mb-3">Fast & simple</p>
                  <h2 id="process-heading">From application to cool air in one day</h2>
                  <p className="mt-4 text-[var(--color-ink-70)] leading-relaxed mb-6">
                    When your HVAC fails, same-day installation is often possible. Microf&apos;s near-instant approval means your contractor gets the green light before noon.
                  </p>
                  <div className="space-y-4">
                    {[
                      { time: "~5 min", label: "Application" },
                      { time: "Real-time", label: "Approval decision" },
                      { time: "Immediate", label: "Contractor notified" },
                      { time: "24–48hr", label: "Contractor funded" },
                    ].map(({ time, label }) => (
                      <div key={label} className="flex items-center gap-4 p-4 rounded-xl border border-slate-100">
                        <div className="w-20 flex-shrink-0 text-right">
                          <span className="text-sm font-bold" style={{ color: "var(--color-ember)" }}>{time}</span>
                        </div>
                        <div className="w-px h-5 bg-slate-200" />
                        <span className="text-sm font-medium text-[var(--color-ink)]">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                {/* TODO: Replace with real photo — technician at work on AC unit */}
                <div className="rounded-2xl overflow-hidden aspect-square relative" style={{ background: "var(--color-ocean-light)" }}>
                  <div className="absolute inset-0 flex items-center justify-center" style={{ color: "var(--color-ocean-mid)" }}>
                    <div className="text-center p-8">
                      <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16 mx-auto mb-4 opacity-30" aria-hidden="true">
                        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" />
                      </svg>
                      <p className="text-sm opacity-40 font-medium">Client photo: HVAC technician at work</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── ESTIMATOR ────────────────────────────────────────────── */}
        <section className="section-pad bg-[var(--color-base)]" aria-label="Payment estimator">
          <div className="container-tight max-w-2xl mx-auto">
            <FadeIn>
              <div className="text-center mb-8">
                <h2>Estimate your monthly payment</h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <PaymentEstimator />
            </FadeIn>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section className="section-pad bg-white" aria-labelledby="hvac-faq-heading">
          <div className="container-tight max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center mb-10">
                <h2 id="hvac-faq-heading">HVAC financing questions</h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <FAQ items={faqs} />
            </FadeIn>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section className="py-16 text-center" style={{ background: "var(--color-ocean)" }}>
          <FadeIn>
            <div className="container-tight">
              <h2 className="text-white mb-4">Don&apos;t sweat it — or freeze</h2>
              <p className="text-white/70 text-lg mb-8 max-w-md mx-auto">
                Get approved in minutes with no credit check and have your new HVAC system installed today.
              </p>
              <Link
                href="https://dealer.microf.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-semibold px-10 py-4 rounded-full transition-all hover:-translate-y-0.5 text-base"
                style={{ background: "var(--color-ember)" }}
              >
                Apply Now — No Credit Check
              </Link>
            </div>
          </FadeIn>
        </section>
      </main>

      <Footer />
      <MobileApplyCTA />
    </>
  );
}
