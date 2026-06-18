import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import FAQ from "@/components/sections/FAQ";
import PaymentEstimator from "@/components/sections/PaymentEstimator";
import FadeIn from "@/components/ui/FadeIn";
import MobileApplyCTA from "@/components/ui/MobileApplyCTA";
import { AuroraHero } from "@/components/ui/AuroraHero";

export const metadata: Metadata = {
  title: "For Homeowners — HVAC & Water Heater Financing",
  description:
    "No credit check. Instant approval. Flexible lease-to-own payments for HVAC systems and water heaters. Microf gets your home comfortable again — fast.",
  alternates: { canonical: "https://www.microf.com/homeowners" },
  openGraph: {
    title: "For Homeowners | Microf Lease-to-Own Financing",
    description:
      "No credit check required. Get approved for HVAC or water heater financing in minutes.",
  },
};

const faqs = [
  {
    question: "Do I need good credit to qualify?",
    answer:
      "No. Microf does not require a hard credit check. We welcome homeowners with all credit backgrounds — including those who've been turned down by banks, credit unions, or other financing programs.",
  },
  {
    question: "What's the difference between a lease-to-own and a regular loan?",
    answer:
      "A lease-to-own (or lease-purchase) agreement is not a loan. There's no interest rate in the traditional sense and no hard credit inquiry. Instead, you make monthly rental payments over the term of the agreement. At the end of the term, after all payments are made, you own the equipment outright. It's important to know that the total cost of acquiring ownership through leasing is higher than the cash price.",
  },
  {
    question: "How long does the application take?",
    answer:
      "Most applications take 5 minutes or less. You'll submit basic information and receive a near-real-time decision. There's no waiting days for approval.",
  },
  {
    question: "What payment terms are available?",
    answer:
      "Microf offers flexible lease terms typically ranging from 18 to 48 months. Your specific options will depend on the equipment cost and your lease agreement details.",
  },
  {
    question: "Can I pay off early?",
    answer:
      "Yes, and it may save you money. Microf offers early payoff discounts that reduce the total amount you pay over the life of the lease. Contact Microf customer support for your specific early payoff options.",
  },
  {
    question: "What if I need repairs after installation?",
    answer:
      "Equipment issues are handled between you and your contractor or the equipment manufacturer. The Microf lease covers the financing of the equipment — your contractor can advise on warranties included with the installation.",
  },
];

export default function HomeownersPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">

        {/* ── HERO — Aurora background ─────────────────────────────── */}
        <AuroraHero />

        {/* ── THE EMERGENCY NARRATIVE ──────────────────────────────── */}
        <section className="section-pad bg-white" aria-labelledby="emergency-heading">
          <div className="container-tight">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-ember)] uppercase tracking-wider mb-3">We understand the moment</p>
                  <h2 id="emergency-heading">It&apos;s 6pm. The AC just went out.</h2>
                  <div className="mt-5 space-y-4 text-[var(--color-ink-70)] leading-relaxed">
                    <p>
                      You&apos;ve got kids in the house and it&apos;s 100 degrees outside. Your AC dies. You call your HVAC contractor, and they can replace the unit — but it&apos;s going to cost $4,000 to $6,000 that you don&apos;t have sitting in a checking account right now.
                    </p>
                    <p>
                      You try the bank — denied. You try the credit card — limit too low. You feel stuck. You feel embarrassed.
                    </p>
                    <p>
                      <strong className="font-semibold" style={{ color: "var(--color-ocean)" }}>You&apos;re not stuck. You&apos;re exactly who Microf was built for.</strong>
                    </p>
                    <p>
                      A five-minute application. No hard credit check. Near-instant approval. Your contractor gets the green light — and your family gets cool.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="rounded-2xl overflow-hidden aspect-video relative shadow-[var(--shadow-warm-lg)]">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    poster="/microdemo-poster.jpg"
                    aria-label="Microf lease-to-own financing demo"
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src="/microdemo.webm" type="video/webm" />
                    <source src="/microdemo.mp4" type="video/mp4" />
                  </video>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── ELIGIBILITY ──────────────────────────────────────────── */}
        <section className="section-pad bg-[var(--color-base)]" aria-labelledby="eligibility-heading">
          <div className="container-tight">
            <FadeIn>
              <div className="text-center mb-12">
                <p className="text-sm font-semibold text-[var(--color-ember)] uppercase tracking-wider mb-3">Who qualifies</p>
                <h2 id="eligibility-heading">If you live in your home, you likely qualify</h2>
                <p className="mt-3 text-[var(--color-ink-70)] max-w-2xl mx-auto leading-relaxed">
                  Microf is designed to be accessible. Most homeowners who apply get approved — including many who&apos;ve been declined elsewhere.
                </p>
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
              {[
                {
                  title: "Any credit background",
                  desc: "No minimum credit score. No hard credit check. We look at more than a number.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  ),
                },
                {
                  title: "Residential homeowners",
                  desc: "Must be for equipment installed at your primary residence. Rental properties not eligible.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
                      <path d="M9 21V12h6v9" />
                    </svg>
                  ),
                },
                {
                  title: "43 states eligible",
                  desc: "Available in most of the continental US. See excluded states below.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M3 12h18M12 3a14.5 14.5 0 010 18M12 3a14.5 14.5 0 000 18" />
                    </svg>
                  ),
                },
                {
                  title: "Working with a Microf contractor",
                  desc: "Equipment must be installed by a Microf-enrolled contractor. Ask your installer or find one near you.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M11 4H4a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                  ),
                },
                {
                  title: "New equipment installs",
                  desc: "The Microf lease covers new HVAC or water heater installations — not repairs to existing equipment.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                    </svg>
                  ),
                },
                {
                  title: "Simple verification",
                  desc: "Basic identity and address verification. No paystubs, tax returns, or bank statements required.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M9 12h6M9 16h4M5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z" />
                      <path d="M9 8h6" />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.07} className="h-full">
                  <div className="flex flex-col h-full bg-white rounded-xl p-6 border border-slate-100 hover:border-[rgba(232,98,26,0.4)] hover:shadow-[0_0_28px_rgba(232,98,26,0.22),0_4px_16px_rgba(232,98,26,0.10)] transition-all duration-300" style={{ boxShadow: "var(--shadow-warm-sm)" }}>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-4 flex-shrink-0" style={{ background: "var(--color-ember-light)", color: "var(--color-ember)" }}>
                      {item.icon}
                    </div>
                    <h4 className="font-semibold text-[var(--color-ocean)] mb-2">{item.title}</h4>
                    <p className="text-sm text-[var(--color-ink-70)] leading-relaxed">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── LEASE vs LOAN ────────────────────────────────────────── */}
        <section className="section-pad bg-white" aria-labelledby="comparison-heading">
          <div className="container-tight">
            <FadeIn>
              <div className="text-center mb-12">
                <p className="text-sm font-semibold text-[var(--color-ember)] uppercase tracking-wider mb-3">Plain English</p>
                <h2 id="comparison-heading">Lease-to-own vs. a traditional loan</h2>
                <p className="mt-3 text-[var(--color-ink-70)] max-w-xl mx-auto">
                  No gotchas. Here&apos;s an honest comparison so you can make the right decision for your family.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="overflow-x-auto rounded-2xl border border-slate-100" style={{ boxShadow: "var(--shadow-warm-md)" }}>
                <table className="w-full bg-white" aria-label="Lease-to-own vs. traditional loan comparison">
                  <thead>
                    <tr>
                      <th className="text-left p-5 border-b border-slate-100 text-sm font-semibold text-[var(--color-smoke)] uppercase tracking-wider">Feature</th>
                      <th className="text-center p-5 border-b border-slate-100">
                        <span className="inline-block bg-[var(--color-ember)] text-white text-sm font-bold px-4 py-1 rounded-full">Microf Lease</span>
                      </th>
                      <th className="text-center p-5 border-b border-slate-100 text-sm font-semibold text-[var(--color-smoke)]">Traditional Loan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Credit check required", "No hard pull", "Hard credit inquiry"],
                      ["Minimum credit score", "None", "Usually 620+"],
                      ["Application time", "~5 minutes", "Days to weeks"],
                      ["Decision speed", "Near-instant", "1–5 business days"],
                      ["Own at end", "Yes, after all payments", "Yes, if no default"],
                      ["Early payoff option", "Yes, with discounts", "Varies by lender"],
                      ["Total cost vs. cash", "Higher (disclosed upfront)", "Varies by rate"],
                    ].map(([feature, microf, loan], i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-4 text-sm font-medium text-[var(--color-ink)]">{feature}</td>
                        <td className="p-4 text-sm text-center">
                          <span className="font-semibold text-[var(--color-ocean)]">{microf}</span>
                        </td>
                        <td className="p-4 text-sm text-center text-[var(--color-smoke)]">{loan}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── APPLICATION WALKTHROUGH ──────────────────────────────── */}
        <section className="section-pad bg-[var(--color-base)]" aria-labelledby="walkthrough-heading">
          <div className="container-tight">
            <FadeIn>
              <div className="text-center mb-14">
                <p className="text-sm font-semibold text-[var(--color-ember)] uppercase tracking-wider mb-3">Step by step</p>
                <h2 id="walkthrough-heading">How the application works</h2>
              </div>
            </FadeIn>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  step: "1",
                  title: "Contact a Microf-enrolled contractor",
                  desc: "Your HVAC or plumbing contractor needs to be enrolled with Microf. If yours isn't, encourage them to sign up — it takes minutes and is free for contractors.",
                },
                {
                  step: "2",
                  title: "Get the application link from your contractor",
                  desc: "Your contractor will provide a link to start your application through the Microf portal, or you can apply directly at dealer.microf.com.",
                },
                {
                  step: "3",
                  title: "Complete the 5-minute application",
                  desc: "Enter your basic information — name, address, contact details. No bank statements, no tax returns, no proof of income required in most cases.",
                },
                {
                  step: "4",
                  title: "Receive your near-instant decision",
                  desc: "Most applicants get a decision in real time. If approved, you'll see your available lease options and can choose the monthly payment term that fits your budget.",
                },
                {
                  step: "5",
                  title: "Your contractor gets the green light",
                  desc: "Microf notifies your contractor immediately upon approval. They can order equipment, schedule the job, and get to work — no waiting.",
                },
                {
                  step: "6",
                  title: "Equipment installed, payments begin",
                  desc: "Once installation is complete and verified, your monthly lease payments begin. Contractor is funded by Microf within 24–48 business hours.",
                },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="flex gap-5 bg-white rounded-xl p-6 border border-slate-100" style={{ boxShadow: "var(--shadow-warm-sm)" }}>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ background: "var(--color-ember)" }}>
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--color-ocean)] mb-1">{item.title}</h4>
                      <p className="text-sm text-[var(--color-ink-70)] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── PAYMENT ESTIMATOR ────────────────────────────────────── */}
        <section className="section-pad bg-white" aria-labelledby="estimator-heading">
          <div className="container-tight">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-ember)] uppercase tracking-wider mb-3">Payment flexibility</p>
                  <h2 id="estimator-heading">Find a payment that fits your life</h2>
                  <p className="mt-4 text-[var(--color-ink-70)] leading-relaxed">
                    Use the estimator to get a rough sense of monthly payments across different lease terms. Remember: your actual payment depends on your approved agreement and equipment cost.
                  </p>
                  <div className="mt-6 space-y-3">
                    {["No interest rate to worry about", "Choose 18 to 48-month terms", "Early payoff discounts available", "Payment starts after installation"].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0" style={{ background: "var(--color-mint)" }}>✓</div>
                        <span className="text-sm text-[var(--color-ink-70)]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.15}>
                <PaymentEstimator />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── PRODUCTS CTA ─────────────────────────────────────────── */}
        <section className="section-pad bg-[var(--color-base)]" aria-label="Product links">
          <div className="container-tight">
            <FadeIn>
              <div className="text-center mb-10">
                <h2>What do you need to finance?</h2>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[
                { href: "/homeowners/hvac", title: "HVAC System", desc: "Air conditioners, furnaces, heat pumps, mini-splits", emoji: "❄️" },
                { href: "/homeowners/water-heaters", title: "Water Heater", desc: "Tank, tankless, gas & electric water heaters", emoji: "🌊" },
              ].map(({ href, title, desc, emoji }) => (
                <FadeIn key={href} delay={0.1} className="h-full">
                  <Link
                    href={href}
                    className="group flex flex-col h-full bg-white rounded-2xl p-8 border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-ember)]/30"
                    style={{ boxShadow: "var(--shadow-warm-sm)" }}
                  >
                    <div className="text-4xl mb-4">{emoji}</div>
                    <h3 className="text-xl font-semibold text-[var(--color-ocean)] mb-2">{title}</h3>
                    <p className="text-sm text-[var(--color-ink-70)] mb-4">{desc}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all" style={{ color: "var(--color-ember)" }}>
                      See details
                      <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
                        <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section className="section-pad bg-white" aria-labelledby="homeowner-faq-heading">
          <div className="container-tight max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center mb-10">
                <p className="text-sm font-semibold text-[var(--color-ember)] uppercase tracking-wider mb-3">Questions answered</p>
                <h2 id="homeowner-faq-heading">Homeowner FAQs</h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <FAQ items={faqs} />
            </FadeIn>
          </div>
        </section>

        {/* ── BOTTOM CTA ───────────────────────────────────────────── */}
        <section className="py-16 text-center" style={{ background: "var(--color-ocean)" }}>
          <FadeIn>
            <div className="container-tight">
              <h2 className="text-white mb-4">Ready to get comfortable?</h2>
              <p className="text-white/70 text-lg mb-8 max-w-lg mx-auto">
                Apply now — five minutes, no credit check, near-instant decision.
              </p>
              <Link
                href="https://dealer.microf.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-semibold px-10 py-4 rounded-full transition-all hover:-translate-y-0.5 text-base"
                style={{ background: "var(--color-ember)" }}
              >
                Apply in Minutes
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <p className="mt-4 text-white/40 text-sm">Consumer support: 855-642-7631 · Mon–Fri 8AM–8PM EST</p>
            </div>
          </FadeIn>
        </section>
      </main>

      <Footer />
      <MobileApplyCTA />
    </>
  );
}
