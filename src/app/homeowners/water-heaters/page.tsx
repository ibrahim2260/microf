import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import FAQ from "@/components/sections/FAQ";
import PaymentEstimator from "@/components/sections/PaymentEstimator";
import FadeIn from "@/components/ui/FadeIn";
import MobileApplyCTA from "@/components/ui/MobileApplyCTA";

export const metadata: Metadata = {
  title: "Water Heater Financing — No Credit Check Lease-to-Own",
  description:
    "Finance a new tank or tankless water heater with no credit check required. Flexible lease-to-own payments through Microf. Get approved in minutes.",
  keywords: ["water heater financing bad credit", "lease to own water heater", "tankless water heater financing no credit check"],
  alternates: { canonical: "https://www.microf.com/homeowners/water-heaters" },
};

const faqs = [
  {
    question: "Does Microf finance both tank and tankless water heaters?",
    answer:
      "Yes. Microf finances traditional tank-style water heaters and tankless (on-demand) models — both gas and electric. The equipment must be new and installed by a Microf-enrolled contractor.",
  },
  {
    question: "How much does a water heater replacement typically cost?",
    answer:
      "A standard tank water heater replacement typically runs $800–$2,500 depending on the tank size, fuel type, and labor. Tankless systems generally cost more — $1,500–$4,000+ installed. All of these ranges fall within Microf's eligible financing amounts.",
  },
  {
    question: "Can I upgrade from a tank to a tankless system through Microf?",
    answer:
      "Yes. You can use Microf to upgrade to a tankless system. The lease covers the cost of the new equipment and installation. Note that switching from tank to tankless may require additional work (gas line upgrade, electrical upgrades) — your contractor can advise.",
  },
  {
    question: "What if my water heater needs to be replaced urgently?",
    answer:
      "A failed water heater is an emergency. Microf's near-instant decision process means your contractor can often complete the replacement the same day you apply. Just have your contractor submit the application and they'll receive approval status in real time.",
  },
  {
    question: "Is a plumber or HVAC contractor eligible to use Microf for water heaters?",
    answer:
      "Yes — both HVAC contractors and plumbing professionals can enroll with Microf and offer water heater financing to their customers. If your plumber isn't yet a Microf partner, encourage them to sign up at dealer.microf.com.",
  },
];

const types = [
  {
    name: "Traditional Tank Water Heaters",
    desc: "The most common type — a large insulated tank that keeps water hot and ready. When your tank fails, Microf can finance a same-day replacement, no credit check required.",
    icon: "🪣",
    features: ["30, 40, 50+ gallon options", "Gas & electric", "Quick installation", "Most affordable upfront"],
  },
  {
    name: "Tankless (On-Demand) Heaters",
    desc: "Heat water only when you need it — no tank, endless hot water, and lower energy costs long-term. Microf finances the full installation cost of tankless systems.",
    icon: "⚡",
    features: ["Continuous hot water", "Space-saving design", "Gas & electric models", "Higher efficiency"],
  },
  {
    name: "High-Efficiency Units",
    desc: "Upgrade to a high-efficiency water heater and save on monthly energy costs. Microf makes the upfront cost manageable with flexible lease payments.",
    icon: "🌱",
    features: ["Lower utility bills", "Eco-friendly options", "Heat pump water heaters", "Long lifespan"],
  },
  {
    name: "Commercial-Strength Residential",
    desc: "For larger homes or households with heavy hot water demand, Microf can finance heavy-duty residential models built for high-volume use.",
    icon: "🏠",
    features: ["Large capacity", "Built for heavy use", "Multiple bathrooms", "Family-sized homes"],
  },
];

export default function WaterHeatersPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 pt-16">

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden py-20 md:py-28"
          style={{ background: "linear-gradient(135deg, #1A3A4A 0%, #0C2D3F 100%)" }}
        >
          <div
            className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
            style={{ background: "radial-gradient(circle, var(--color-mint) 0%, transparent 70%)", transform: "translate(-30%, -30%)" }}
          />
          <div className="container-tight relative z-10">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-white/50">
                <li><Link href="/" className="hover:text-white/80 transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/homeowners" className="hover:text-white/80 transition-colors">Homeowners</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white/80 font-medium" aria-current="page">Water Heaters</li>
              </ol>
            </nav>

            <div className="max-w-2xl">
              <FadeIn>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-wider" style={{ background: "rgba(22,168,124,0.2)", color: "var(--color-mint)", border: "1px solid rgba(22,168,124,0.3)" }}>
                  Water Heater Financing
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="text-white mb-5">
                  Hot water back on.<br />
                  <span style={{ color: "var(--color-mint)" }}>No credit check</span> needed.
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-lg text-white/75 leading-relaxed mb-8">
                  A failed water heater is an emergency. Microf gets you approved in minutes so your plumber can get to work — tank or tankless, gas or electric, no credit check required.
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

        {/* ── TYPES ────────────────────────────────────────────────── */}
        <section className="section-pad bg-[var(--color-base)]" aria-labelledby="types-heading">
          <div className="container-tight">
            <FadeIn>
              <div className="text-center mb-12">
                <p className="text-sm font-semibold text-[var(--color-ember)] uppercase tracking-wider mb-3">All types covered</p>
                <h2 id="types-heading">Whatever your home runs on</h2>
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-2 gap-6">
              {types.map((type, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-7 border border-slate-100 hover:shadow-[var(--shadow-warm-md)] transition-all" style={{ boxShadow: "var(--shadow-warm-sm)" }}>
                    <div className="text-3xl mb-4">{type.icon}</div>
                    <h3 className="text-lg font-semibold text-[var(--color-ocean)] mb-2">{type.name}</h3>
                    <p className="text-sm text-[var(--color-ink-70)] leading-relaxed mb-4">{type.desc}</p>
                    <ul className="space-y-1.5">
                      {type.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-[var(--color-ink-70)]">
                          <span className="w-4 h-4 rounded-full flex items-center justify-center text-white text-[10px] flex-shrink-0" style={{ background: "var(--color-mint)" }}>✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── BENEFITS ─────────────────────────────────────────────── */}
        <section className="section-pad bg-white" aria-labelledby="wh-benefits-heading">
          <div className="container-tight">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeIn delay={0.15}>
                {/* TODO: Replace with real photo — plumber working on water heater install */}
                <div className="rounded-2xl overflow-hidden aspect-[4/3] relative" style={{ background: "var(--color-ocean-light)" }}>
                  <div className="absolute inset-0 flex items-center justify-center" style={{ color: "var(--color-ocean-mid)" }}>
                    <div className="text-center p-8">
                      <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16 mx-auto mb-4 opacity-30" aria-hidden="true">
                        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" />
                        <path d="M24 14v10l6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      <p className="text-sm opacity-40 font-medium">Client photo: plumber at work</p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-ember)] uppercase tracking-wider mb-3">Why choose Microf</p>
                  <h2 id="wh-benefits-heading">Hot water shouldn&apos;t be a luxury</h2>
                  <div className="mt-5 space-y-5">
                    {[
                      {
                        title: "Same-day installation possible",
                        desc: "Near-instant approval means your plumber can pick up equipment and complete the install the same day you apply.",
                      },
                      {
                        title: "Any credit background welcome",
                        desc: "No hard credit inquiry. Whether you have excellent credit, challenged credit, or no credit history — the application process is the same for everyone.",
                      },
                      {
                        title: "Flexible monthly payments",
                        desc: "Spread the cost over 18, 24, 36, or 48 months. Choose the payment that fits your household budget.",
                      },
                      {
                        title: "You own it at the end",
                        desc: "After all lease payments are completed, the water heater is yours. No final balloon payment, no uncertainty.",
                      },
                    ].map(({ title, desc }) => (
                      <div key={title} className="flex gap-4">
                        <div className="w-2 flex-shrink-0 pt-1">
                          <div className="w-2 h-2 rounded-full" style={{ background: "var(--color-ember)" }} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[var(--color-ocean)] mb-0.5">{title}</h4>
                          <p className="text-sm text-[var(--color-ink-70)] leading-relaxed">{desc}</p>
                        </div>
                      </div>
                    ))}
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
                <h2>Estimate your water heater payment</h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <PaymentEstimator />
            </FadeIn>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section className="section-pad bg-white" aria-labelledby="wh-faq-heading">
          <div className="container-tight max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center mb-10">
                <h2 id="wh-faq-heading">Water heater financing FAQs</h2>
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
              <h2 className="text-white mb-4">Hot water is a necessity, not a luxury</h2>
              <p className="text-white/70 text-lg mb-8 max-w-md mx-auto">
                Apply in minutes. No credit check. Get your water heater replaced today.
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
