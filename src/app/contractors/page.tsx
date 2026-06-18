import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/FadeIn";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import PartnerForm from "./PartnerForm";
import { ContractorPixelHero } from "@/components/ui/contractor-pixel-hero";

export const metadata: Metadata = {
  title: "For Contractors — Partner With Microf | HVAC Financing",
  description:
    "Stop losing jobs to declined financing. Microf helps HVAC and plumbing contractors close more sales with higher approval rates and 24–48hr funding. Become a partner today.",
  alternates: { canonical: "https://www.microf.com/contractors" },
  openGraph: {
    title: "Contractor Partnership | Microf",
    description: "Higher approval rates. 24–48hr funding. Stop losing sales to declined financing.",
  },
};

const contractorTestimonials = [
  {
    quote: "Microf has become our go-to financing option. Their approval rates are genuinely better than anything else I've tried in 12 years of business. We close 25–30% more jobs because of it.",
    name: "Derek W.",
    company: "Delta Comfort HVAC",
    location: "Charlotte, NC",
  },
  {
    quote: "The dealer portal is clean and intuitive. I can check customer status, submit a job, and see funding confirmation all in one place. The support team actually answers when I call.",
    name: "Lisa P.",
    company: "Streamline Plumbing & Heating",
    location: "Denver, CO",
  },
  {
    quote: "I stopped losing water heater jobs to 'I can't afford it right now.' With Microf, I present the monthly payment option upfront and most customers say yes on the spot.",
    name: "Carlos M.",
    company: "ProTech Home Services",
    location: "Dallas, TX",
  },
];

const benefits = [
  {
    title: "Higher Approval Rates",
    desc: "Microf approves customers that traditional financing rejects — challenged credit, limited history, past issues. More approvals mean more closed jobs for your business.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M4 16L12 24L28 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "24–48 Hour Funding",
    desc: "Once installation is confirmed, your business is funded within 24–48 business hours. Reliable, consistent, and built for contractors who can't wait weeks for payment.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" aria-hidden="true">
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" />
        <path d="M16 10v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Real-Time Approval Alerts",
    desc: "You receive an instant notification when your customer is approved. Order equipment, schedule the job, and get to work — no waiting on callbacks.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M6 10l10-6 10 6v12l-10 6-10-6V10z" stroke="currentColor" strokeWidth="2" />
        <path d="M16 4v18M6 10l10 6M26 10l-10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Dedicated Dealer Portal",
    desc: "A clean, powerful web portal where you can manage customer applications, track job status, view funding timelines, and access your account — available 24/7.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" aria-hidden="true">
        <rect x="4" y="6" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M4 12h24M10 18h4M18 18h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Dedicated Contractor Support",
    desc: "A separate contractor support line (855-498-8200) staffed Mon–Fri 8AM–8PM and Sat 9AM–2PM EST by people who understand your business.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M8 4h4l2 6-3 2a14 14 0 006 6l2-3 6 2v4a2 2 0 01-2 2A20 20 0 016 6a2 2 0 012-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Free to Enroll",
    desc: "There's no cost to become a Microf dealer partner. Sign up, complete the brief onboarding, and start offering Microf to your customers immediately.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M16 4l3 9h9l-7 5 3 9-8-5-8 5 3-9-7-5h9l3-9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const enrollmentSteps = [
  {
    step: "01",
    title: "Submit Your Application",
    desc: "Fill out the partner interest form below with your basic business information. The entire process takes about 5 minutes.",
  },
  {
    step: "02",
    title: "Quick Onboarding",
    desc: "A Microf representative will reach out to complete your enrollment. You'll get access to the dealer portal and training resources.",
  },
  {
    step: "03",
    title: "Offer to Your Customers",
    desc: "Start presenting Microf as a payment option to homeowners who need financing. Share the application link directly or guide them through the portal.",
  },
  {
    step: "04",
    title: "Get Funded Fast",
    desc: "Customer gets approved, you complete the installation, and Microf funds your business within 24–48 business hours. Simple.",
  },
];

export default function ContractorsPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <ContractorPixelHero />

        {/* ── STATS ────────────────────────────────────────────────── */}
        <section className="bg-white border-b border-slate-100 py-12" aria-label="Partnership statistics">
          <div className="container-tight">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: 43, suffix: " states", label: "Active in" },
                { value: 48, suffix: "hr", label: "Max funding time" },
                { value: 0, suffix: "", prefix: "$", label: "Cost to enroll" },
                { value: 0, suffix: "", label: "Required from your customers", display: "No hard credit check" },
              ].map(({ value, suffix, label, prefix, display } : { value: number; suffix: string; label: string; prefix?: string; display?: string }, i) => (
                <FadeIn key={i} delay={i * 0.1} direction="up">
                  <div className="text-center">
                    <div className={`font-bold text-[var(--color-ocean)] mb-1 leading-none ${display ? "text-xl md:text-2xl" : "text-3xl md:text-4xl"}`} style={{ fontFamily: "var(--font-display)" }}>
                      {display ? (
                        <span>{display}</span>
                      ) : (
                        <>
                          {prefix && <span>{prefix} </span>}
                          <AnimatedCounter end={value} suffix={suffix} />
                        </>
                      )}
                    </div>
                    <p className="text-sm text-[var(--color-smoke)]">{label}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── BENEFITS ─────────────────────────────────────────────── */}
        <section className="section-pad bg-[var(--color-base)]" aria-labelledby="contractor-benefits-heading">
          <div className="container-tight">
            <FadeIn>
              <div className="text-center mb-12">
                <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--color-mint)" }}>Why Microf</p>
                <h2 id="contractor-benefits-heading">Built for contractors who want to grow</h2>
                <p className="mt-3 text-[var(--color-ink-70)] max-w-xl mx-auto">
                  Microf is a true partner, not just a financing middleman. Here&apos;s what you get when you sign up.
                </p>
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((benefit, i) => (
                <FadeIn key={i} delay={i * 0.08} className="h-full">
                  <div className="flex flex-col h-full bg-white rounded-xl p-6 border border-slate-100 hover:border-[var(--color-mint)]/30 hover:shadow-[var(--shadow-warm-md)] transition-all" style={{ boxShadow: "var(--shadow-warm-sm)" }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 flex-shrink-0" style={{ background: "var(--color-mint-light)", color: "var(--color-mint)" }}>
                      {benefit.icon}
                    </div>
                    <h3 className="font-semibold text-[var(--color-ocean)] mb-2">{benefit.title}</h3>
                    <p className="text-sm text-[var(--color-ink-70)] leading-relaxed">{benefit.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW ENROLLMENT WORKS ─────────────────────────────────── */}
        <section className="section-pad bg-white" aria-labelledby="enrollment-heading">
          <div className="container-tight">
            <FadeIn>
              <div className="text-center mb-14">
                <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--color-mint)" }}>Simple onboarding</p>
                <h2 id="enrollment-heading">Enrolled and offering Microf in 4 steps</h2>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {enrollmentSteps.map((item, i) => (
                <FadeIn key={i} delay={i * 0.1} direction="up">
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-4 leading-none" style={{ fontFamily: "var(--font-display)", color: "var(--color-mist)" }}>
                      {item.step}
                    </div>
                    <h3 className="font-semibold text-[var(--color-ocean)] mb-2 text-base">{item.title}</h3>
                    <p className="text-sm text-[var(--color-ink-70)] leading-relaxed">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── DEALER PORTAL PREVIEW ────────────────────────────────── */}
        <section className="section-pad bg-[var(--color-base)]" aria-label="Dealer portal preview">
          <div className="container-tight">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--color-mint)" }}>Your command center</p>
                  <h2>A portal built for how you work</h2>
                  <p className="mt-4 text-[var(--color-ink-70)] leading-relaxed mb-6">
                    The Microf dealer portal gives you everything in one place. No spreadsheets, no chasing callbacks, no confusion about where a job stands.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Submit customer applications",
                      "Track approval status in real time",
                      "View funding timelines per job",
                      "Access account history and statements",
                      "Download resources and training materials",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0" style={{ background: "var(--color-mint)" }}>✓</div>
                        <span className="text-sm text-[var(--color-ink)]">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Link
                      href="https://dealer.microf.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full transition-all text-sm"
                      style={{ background: "var(--color-mint)", color: "white" }}
                    >
                      Visit Dealer Portal
                    </Link>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                {/* Portal preview mockup */}
                <div className="rounded-2xl overflow-hidden border border-slate-200" style={{ boxShadow: "var(--shadow-warm-xl)" }}>
                  <div className="h-10 bg-slate-800 flex items-center gap-2 px-4">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 mx-4 h-5 bg-slate-700 rounded text-xs flex items-center px-2 text-slate-400">
                      dealer.microf.com
                    </div>
                  </div>
                  <div className="bg-white p-6">
                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <p className="font-bold text-[var(--color-ocean)] text-sm">Dealer Dashboard</p>
                        <p className="text-xs text-[var(--color-smoke)]">Welcome back, {"{Contractor Name}"}</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[var(--color-mint)] flex items-center justify-center text-white font-bold text-xs">DC</div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 mb-5">
                      {[
                        { label: "This Month", value: "12", unit: "approvals" },
                        { label: "Pending", value: "3", unit: "jobs" },
                        { label: "Funded", value: "$24,800", unit: "YTD" },
                      ].map(({ label, value, unit }) => (
                        <div key={label} className="bg-slate-50 rounded-lg p-3 text-center">
                          <p className="text-lg font-bold text-[var(--color-ocean)]" style={{ fontFamily: "var(--font-display)" }}>{value}</p>
                          <p className="text-xs text-[var(--color-smoke)]">{unit}</p>
                          <p className="text-[10px] text-slate-400 mt-0.5">{label}</p>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {[
                        { name: "Johnson Residence", status: "Funded", color: "var(--color-mint)" },
                        { name: "Williams Install", status: "Approved", color: "var(--color-ocean)" },
                        { name: "Martinez — Pending", status: "In Review", color: "var(--color-ember)" },
                      ].map(({ name, status, color }) => (
                        <div key={name} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                          <span className="text-xs font-medium text-[var(--color-ink)]">{name}</span>
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ color, background: `${color}15` }}>
                            {status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
        <section className="section-pad bg-white" aria-labelledby="contractor-testimonials-heading">
          <div className="container-tight">
            <FadeIn>
              <div className="text-center mb-12">
                <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--color-mint)" }}>From the field</p>
                <h2 id="contractor-testimonials-heading">What contractors say</h2>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6">
              {contractorTestimonials.map((t, i) => (
                <FadeIn key={i} delay={i * 0.1} className="h-full">
                  <div className="bg-[var(--color-base)] rounded-xl p-6 border border-slate-100 flex flex-col h-full" style={{ boxShadow: "var(--shadow-warm-sm)" }}>
                    <div className="flex gap-0.5 mb-4">
                      {[1,2,3,4,5].map((s) => (
                        <svg key={s} viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-[var(--color-ember)]" aria-hidden="true">
                          <path d="M8 1l1.854 3.754L14 5.519l-3 2.927.708 4.133L8 10.573l-3.708 1.946L5 8.446 2 5.519l4.146-.765L8 1z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="flex-1">
                      <p className="text-sm text-[var(--color-ink-70)] leading-relaxed italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                      <footer>
                        <cite className="not-italic">
                          <p className="font-semibold text-sm text-[var(--color-ocean)]">{t.name}</p>
                          <p className="text-xs text-[var(--color-smoke)]">{t.company} · {t.location}</p>
                        </cite>
                      </footer>
                    </blockquote>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── PARTNER FORM ─────────────────────────────────────────── */}
        <section
          id="partner-form"
          className="section-pad"
          style={{ background: "linear-gradient(135deg, var(--color-ink) 0%, #1e2d3d 100%)" }}
          aria-labelledby="form-heading"
        >
          <div className="container-tight">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <FadeIn>
                <div className="text-white">
                  <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--color-mint)" }}>Get started today</p>
                  <h2 className="text-white mb-5" id="form-heading">Become a Microf partner</h2>
                  <p className="text-white/90 leading-relaxed mb-8">
                    Fill out the form and a Microf representative will reach out within 1 business day to complete your enrollment. There&apos;s no cost, no obligation, and no long-term contract required.
                  </p>
                  <div className="space-y-4">
                    {[
                      { icon: "✓", text: "Free to join — no setup fees" },
                      { icon: "✓", text: "Onboarding support included" },
                      { icon: "✓", text: "Instant access to dealer portal" },
                      { icon: "✓", text: "Dedicated contractor support line" },
                    ].map(({ icon, text }) => (
                      <div key={text} className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ background: "var(--color-mint)" }}>{icon}</span>
                        <span className="text-sm text-white/90">{text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 p-5 rounded-xl" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--color-mint)" }}>Contractor Support</p>
                    <a href="tel:8554988200" className="text-xl font-bold text-white hover:text-[var(--color-mint)] transition-colors">
                      855-498-8200
                    </a>
                    <p className="text-xs text-white/65 mt-1">Mon–Fri 8AM–8PM · Sat 9AM–2PM EST</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <PartnerForm />
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
