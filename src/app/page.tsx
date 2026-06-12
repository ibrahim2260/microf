import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import FAQ from "@/components/sections/FAQ";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import FadeIn from "@/components/ui/FadeIn";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import MobileApplyCTA from "@/components/ui/MobileApplyCTA";
import { WeatherHero } from "@/components/ui/WeatherHero";
import { getWeatherData } from "@/lib/weather";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Microf | Lease-to-Own HVAC & Water Heater Financing",
  description:
    "No credit check required. Microf offers flexible lease-to-own financing for HVAC systems and water heaters. Get approved in minutes and restore your home's comfort today.",
  alternates: { canonical: "https://www.microf.com" },
};

const homeFAQs = [
  {
    question: "Does Microf check my credit?",
    answer:
      "No hard credit check is required for our lease-to-own agreements. We welcome customers with all credit backgrounds, including those who've been declined by traditional financing options. Your ability to get comfortable shouldn't depend on a credit score.",
  },
  {
    question: "How fast is the approval decision?",
    answer:
      "Most applications receive a real-time or near-real-time decision — often in just minutes. Your contractor is notified right away so work can begin without delay.",
  },
  {
    question: "What equipment can I lease through Microf?",
    answer:
      "Microf covers residential HVAC systems (central air conditioners, furnaces, heat pumps, ductless mini-splits) and water heaters — both traditional tank and tankless models. Financing is available through participating contractor partners.",
  },
  {
    question: "When do I actually own the equipment?",
    answer:
      "You own the equipment outright once all scheduled lease payments have been completed. It's yours — no surprises at the end.",
  },
  {
    question: "Can I pay off early and save money?",
    answer:
      "Yes. Microf offers early payoff discounts that reduce the total cost of your lease. Paying off early is a great way to lower the overall amount you spend on the agreement.",
  },
  {
    question: "Which states does Microf serve?",
    answer:
      "Microf is currently available in 43 states. We do not currently operate in Alaska, Hawaii, Maine, Minnesota, New Jersey, Vermont, Wisconsin, or Wyoming.",
  },
  {
    question: "How does lease-to-own differ from a loan?",
    answer:
      "A lease-to-own agreement is not a loan — it's a rental agreement with the option to own. There's no interest rate in the traditional sense, no hard credit inquiry, and flexible payment terms. The total cost of acquiring ownership through leasing is higher than paying cash, which is disclosed upfront.",
  },
  {
    question: "How do I find a contractor who uses Microf?",
    answer:
      "Ask your HVAC or plumbing contractor if they're a Microf partner. If they aren't yet enrolled, encourage them to visit our Contractors page — signing up is quick and free.",
  },
];

const testimonials = [
  {
    quote:
      "Our furnace died on a Tuesday night in January. Microf had us approved by Wednesday morning and heat back on by that afternoon. I honestly cried. After two bank rejections, I didn't think we had options.",
    name: "Sandra M.",
    role: "Homeowner",
    location: "Columbus, OH",
    rating: 5,
  },
  {
    quote:
      "I was embarrassed about my credit situation, but the process was completely dignified. No judgment — just a simple application and a yes. The monthly payment actually fits my budget.",
    name: "James T.",
    role: "Homeowner",
    location: "Nashville, TN",
    rating: 5,
  },
  {
    quote:
      "New AC unit in July with zero credit check and payments that actually make sense. My contractor mentioned Microf and I'm so glad I asked about it.",
    name: "Maria R.",
    role: "Homeowner",
    location: "Phoenix, AZ",
    rating: 5,
  },
  {
    quote:
      "Microf has closed at least 30% more of my installs this year. Customers who used to walk away because of financing now say yes. The portal is clean, funding hits fast, and their contractor support team actually picks up the phone.",
    name: "Derek W.",
    role: "HVAC Contractor, Owner",
    location: "Charlotte, NC",
    rating: 5,
  },
  {
    quote:
      "I was skeptical at first — tried two other financing companies with mediocre results. Microf's approval rates are genuinely better, and the 24-48 hour funding commitment is real. It's become standard in every proposal I write.",
    name: "Lisa P.",
    role: "Plumbing & HVAC Contractor",
    location: "Denver, CO",
    rating: 5,
  },
];

const steps = [
  {
    title: "Apply in Minutes",
    description:
      "Complete a simple application — no hard credit check, no lengthy paperwork. Most homeowners finish in under 5 minutes.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" aria-hidden="true">
        <rect x="4" y="4" width="24" height="28" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M10 12h12M10 17h8M10 22h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Pick Your Payment",
    description:
      "Choose the monthly payment term that fits your budget. Flexible options from 18 to 48 months.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" aria-hidden="true">
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" />
        <path d="M16 10v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Contractor Gets Notified",
    description:
      "Your approved contractor receives a real-time alert so they can order equipment and schedule installation immediately.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" aria-hidden="true">
        <path d="M27 6L15 18M27 6l-8 0M27 6l0 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 14v10a2 2 0 01-2 2H8a2 2 0 01-2-2V12a2 2 0 012-2h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Stay Comfortable",
    description:
      "Installation happens. Contractor is funded within 24–48 business hours. You start making flexible monthly payments.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" aria-hidden="true">
        <path d="M5 16C5 16 8 8 16 8C24 8 27 16 27 16C27 16 24 24 16 24C8 24 5 16 5 16Z" stroke="currentColor" strokeWidth="2" />
        <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ mood?: string; city?: string }>;
}) {
  const params = await searchParams;
  const headersList = await headers();
  const weatherData = await getWeatherData(headersList, params);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.microf.com/#organization",
        name: "Microf",
        url: "https://www.microf.com",
        logo: "https://www.microf.com/logo.png",
        telephone: ["855-642-7631", "855-498-8200"],
        address: {
          "@type": "PostalAddress",
          streetAddress: "2849 Paces Ferry Rd SE, Suite 625",
          addressLocality: "Atlanta",
          addressRegion: "GA",
          postalCode: "30339",
          addressCountry: "US",
        },
        sameAs: [
          "https://www.facebook.com/microf",
          "https://www.linkedin.com/company/microf",
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: homeFAQs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main className="flex-1">

        {/* ── HERO — Weather-aware ─────────────────────────────────── */}
        <WeatherHero {...weatherData} />

        {/* ── AUDIENCE SPLIT ───────────────────────────────────────── */}
        <section className="section-pad bg-[var(--color-base)]" aria-label="Choose your path">
          <div className="container-tight">
            <FadeIn>
              <div className="text-center mb-12">
                <p className="text-sm font-semibold text-[var(--color-ember)] uppercase tracking-wider mb-3">Who are you?</p>
                <h2>Find your path forward</h2>
                <p className="mt-3 text-lg text-[var(--color-ink-70)] max-w-xl mx-auto">
                  Whether your home needs help or your business needs to close more deals — Microf was built for you.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-6">
              <FadeIn delay={0.1}>
                <Link
                  href="/homeowners"
                  className="group relative block rounded-2xl overflow-hidden bg-[var(--color-ocean)] p-8 md:p-10 transition-all duration-300 hover:-translate-y-1"
                  style={{ boxShadow: "var(--shadow-warm-md)" }}
                >
                  <div
                    className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 pointer-events-none"
                    style={{ background: "radial-gradient(circle, var(--color-ember) 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
                  />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ background: "rgba(232,98,26,0.2)", border: "1px solid rgba(232,98,26,0.3)", color: "var(--color-ember)" }}>
                      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
                        <path d="M3 12L12 3L21 12V21H15V15H9V21H3V12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}>
                      I&apos;m a Homeowner
                    </h3>
                    <p className="mb-6 leading-relaxed" style={{ color: "rgba(255,255,255,0.88)" }}>
                      My HVAC broke and I need to finance a replacement quickly, without a credit check holding me back.
                    </p>
                    <div className="inline-flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all" style={{ color: "var(--color-ember)" }}>
                      See how it works
                      <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                        <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </FadeIn>

              <FadeIn delay={0.2}>
                <Link
                  href="/contractors"
                  className="group relative block rounded-2xl overflow-hidden bg-[var(--color-ink)] p-8 md:p-10 transition-all duration-300 hover:-translate-y-1"
                  style={{ boxShadow: "var(--shadow-warm-md)" }}
                >
                  <div
                    className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 pointer-events-none"
                    style={{ background: "radial-gradient(circle, var(--color-mint) 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
                  />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ background: "rgba(22,168,124,0.2)", border: "1px solid rgba(22,168,124,0.3)", color: "var(--color-mint)" }}>
                      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
                        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}>
                      I&apos;m a Contractor
                    </h3>
                    <p className="mb-6 leading-relaxed" style={{ color: "rgba(255,255,255,0.88)" }}>
                      I want to stop losing jobs to declined financing and get funded faster on every approved install.
                    </p>
                    <div className="inline-flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all" style={{ color: "var(--color-mint)" }}>
                      Become a partner
                      <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                        <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
        <section className="section-pad bg-white" aria-labelledby="how-it-works-heading">
          <div className="container-tight">
            <FadeIn>
              <div className="text-center mb-16">
                <p className="text-sm font-semibold text-[var(--color-ember)] uppercase tracking-wider mb-3">Simple process</p>
                <h2 id="how-it-works-heading">From broken to comfortable in four steps</h2>
              </div>
            </FadeIn>

            <div className="relative">
              <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" aria-hidden="true" />
              <div className="grid md:grid-cols-4 gap-8 md:gap-6">
                {steps.map((step, i) => (
                  <FadeIn key={i} delay={i * 0.1} direction="up">
                    <div className="flex flex-col items-start md:items-center md:text-center">
                      <div className="relative mb-5">
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-[var(--color-ocean)]" style={{ background: "var(--color-ocean-light)", border: "1px solid rgba(12,45,63,0.10)" }}>
                          {step.icon}
                        </div>
                        <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[var(--color-ember)] flex items-center justify-center text-white text-xs font-bold">
                          {i + 1}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-[var(--color-ocean)] mb-2">{step.title}</h3>
                      <p className="text-sm text-[var(--color-ink-70)] leading-relaxed">{step.description}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            <FadeIn delay={0.4}>
              <div className="text-center mt-12">
                <Link
                  href="https://dealer.microf.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 text-base"
                  style={{ background: "var(--color-ember)" }}
                >
                  Start Your Application
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── VIDEO ────────────────────────────────────────────────── */}
        <section className="section-pad bg-[var(--color-ocean)] relative overflow-hidden" aria-labelledby="video-heading">
          {/* Subtle grid texture */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          {/* Ambient glow */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(232,98,26,0.08) 0%, transparent 70%)" }} />

          <div className="container-tight relative z-10">
            <FadeIn>
              <div className="text-center mb-10">
                <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--color-ember)" }}>See it for yourself</p>
                <h2 id="video-heading" className="text-white">
                  How Microf works — in 2 minutes
                </h2>
                <p className="mt-3 text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Watch a quick overview of the lease-to-own process and why homeowners and contractors across 43 states trust Microf.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="max-w-4xl mx-auto">
                {/* Video container — 16:9 aspect ratio, glassy border */}
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    aspectRatio: "16 / 9",
                    boxShadow: "0 32px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.10)",
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/anHsrgK6hn8?si=eFJORoNQJT8vYD0X"
                    title="How Microf Works — Lease-to-Own HVAC & Water Heater Financing"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>

                {/* Below-video trust note */}
                <p className="text-center mt-5 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                  No credit check required · Near-instant approval · 43 states served
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── PRODUCTS ─────────────────────────────────────────────── */}
        <section className="section-pad bg-[var(--color-base)]" aria-labelledby="products-heading">
          <div className="container-tight">
            <FadeIn>
              <div className="text-center mb-12">
                <p className="text-sm font-semibold text-[var(--color-ember)] uppercase tracking-wider mb-3">What we finance</p>
                <h2 id="products-heading">Home comfort essentials</h2>
                <p className="mt-3 text-lg text-[var(--color-ink-70)] max-w-lg mx-auto">
                  When critical equipment fails, Microf gets your home back to normal — fast.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "HVAC Systems",
                  subtitle: "Air conditioners · Furnaces · Heat pumps · Mini-splits",
                  href: "/homeowners/hvac",
                  bgColor: "var(--color-ocean)",
                  description:
                    "From whole-home central air to efficient heat pump systems, Microf finances the HVAC replacement you need to stay comfortable year-round — even if traditional financing said no.",
                  items: ["Central Air Conditioners", "Gas & Electric Furnaces", "Heat Pumps", "Ductless Mini-Splits"],
                },
                {
                  title: "Water Heaters",
                  subtitle: "Tank · Tankless · Gas · Electric",
                  href: "/homeowners/water-heaters",
                  bgColor: "var(--color-ink)",
                  description:
                    "Cold showers shouldn't be the answer. Microf finances both traditional tank water heaters and high-efficiency tankless systems with the same fast, credit-friendly process.",
                  items: ["Traditional Tank Heaters", "Tankless / On-Demand", "Gas & Electric Models", "High-Efficiency Units"],
                },
              ].map((product, i) => (
                <FadeIn key={i} delay={i * 0.15}>
                  <div className="group relative rounded-2xl overflow-hidden p-8 md:p-10" style={{ background: product.bgColor }}>
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(232,98,26,0.15) 0%, transparent 60%)" }}
                    />
                    {/* TODO: Replace with real photography */}
                    <div className="relative z-10">
                      <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.65)" }}>{product.subtitle}</p>
                      <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}>
                        {product.title}
                      </h3>
                      <p className="mb-6 leading-relaxed" style={{ color: "rgba(255,255,255,0.88)" }}>{product.description}</p>
                      <ul className="grid grid-cols-2 gap-2 mb-8">
                        {product.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.78)" }}>
                            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--color-ember)" }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={product.href}
                        className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full text-sm transition-all"
                        style={{ border: "1px solid rgba(255,255,255,0.3)" }}
                      >
                        Learn more
                        <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
                          <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOMEOWNER BENEFITS ───────────────────────────────────── */}
        <section className="bg-white overflow-hidden" aria-labelledby="benefits-heading">
          <div className="grid lg:grid-cols-2 min-h-[600px]">

            {/* LEFT — video half */}
            <div
              className="relative flex items-center justify-center min-h-[260px] microf-video-chevron"
              style={{ background: "#E4D9CC" }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                poster="/hero-poster.jpg"
                aria-hidden="true"
                className="w-full h-full object-contain absolute inset-0"
              >
                <source src="/hero.webm" type="video/webm" />
                <source src="/hero.mp4" type="video/mp4" />
              </video>
            </div>

            {/* RIGHT — copy half */}
            <div className="flex flex-col justify-center px-8 py-14 lg:px-14 xl:px-16 bg-white">
              <FadeIn direction="left">
                <p className="text-sm font-semibold text-[var(--color-ember)] uppercase tracking-wider mb-3">For homeowners</p>
                <h2 id="benefits-heading" className="text-[var(--color-ocean)]">
                  Comfort shouldn&apos;t wait for a credit score
                </h2>
                <p className="mt-4 text-lg text-[var(--color-ink-70)] leading-relaxed max-w-prose">
                  Microf was built for the moments when life doesn&apos;t give you time to prepare. No lengthy applications, no hard credit pulls, no waiting weeks for an answer.
                </p>
              </FadeIn>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { title: "Simple Application", body: "Five minutes or less. No hard credit inquiry.", icon: "📋" },
                  { title: "Near-Instant Decisions", body: "Most applicants hear back in real time.", icon: "⚡" },
                  { title: "Flexible Terms", body: "18 to 48 months — pick what fits your budget.", icon: "📅" },
                  { title: "All Credit Backgrounds", body: "Declined elsewhere? We welcome you.", icon: "✅" },
                  { title: "Early Payoff Savings", body: "Pay ahead and unlock discounts on your total.", icon: "💰" },
                  { title: "You Own It at the End", body: "Complete your payments and the equipment is yours.", icon: "🏡" },
                ].map((benefit, i) => (
                  <FadeIn key={i} delay={i * 0.06} direction="up">
                    <div className="flex gap-3 p-4 rounded-xl bg-[var(--color-base)] border border-slate-100 transition-all duration-200 hover:border-orange-200 hover:shadow-[var(--shadow-warm-md)]">
                      <span className="text-xl mt-0.5 flex-shrink-0">{benefit.icon}</span>
                      <div>
                        <h4 className="font-semibold text-[var(--color-ocean)] text-sm mb-0.5">{benefit.title}</h4>
                        <p className="text-xs text-[var(--color-ink-70)] leading-relaxed">{benefit.body}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <FadeIn delay={0.4}>
                <div className="mt-8">
                  <Link
                    href="https://dealer.microf.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[var(--color-ember)] hover:bg-[var(--color-ember-dark)] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-ember)]"
                  >
                    Apply in Minutes
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4"/>
                    </svg>
                  </Link>
                </div>
              </FadeIn>
            </div>

          </div>
        </section>

        {/* ── CONTRACTOR BAND ──────────────────────────────────────── */}
        <section
          className="section-pad relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, var(--color-ink) 0%, #2D3748 100%)" }}
          aria-labelledby="contractor-heading"
        >
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ backgroundImage: "radial-gradient(ellipse at 80% 50%, var(--color-mint) 0%, transparent 60%)" }}
          />
          <div className="container-tight relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--color-mint)" }}>For contractors</p>
                  <h2 id="contractor-heading" style={{ color: "#FFFFFF" }}>
                    Stop losing jobs to declined financing
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                    Every declined customer is a lost sale. Microf&apos;s higher approval rates mean you close more installs — and get funded in 24–48 business hours.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/contractors"
                      className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200"
                      style={{ background: "var(--color-mint)" }}
                    >
                      Become a Partner
                    </Link>
                    <Link
                      href="https://dealer.microf.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200"
                      style={{ border: "1px solid rgba(255,255,255,0.2)" }}
                    >
                      Dealer Portal
                    </Link>
                  </div>
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { value: "Higher", label: "Approval rates vs. traditional financing" },
                  { value: "24–48hr", label: "Contractor funding after installation" },
                  { value: "Dedicated", label: "Contractor support line & dealer portal" },
                ].map(({ value, label }, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                    <div className="rounded-xl p-5 text-center" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)" }}>
                      <p className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-mint)" }}>
                        {value}
                      </p>
                      <p className="text-xs leading-tight" style={{ color: "rgba(255,255,255,0.5)" }}>{label}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
        <section className="section-pad bg-[var(--color-base)]" aria-labelledby="testimonials-heading">
          <div className="container-tight">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <FadeIn>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-ember)] uppercase tracking-wider mb-3">Real stories</p>
                  <h2 id="testimonials-heading">Families who got their comfort back</h2>
                  <p className="mt-4 text-[var(--color-ink-70)] leading-relaxed">
                    From frozen winters to sweltering summers, Microf has helped thousands of homeowners and the contractors who serve them.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.15}>
                <TestimonialCarousel testimonials={testimonials} />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section className="section-pad bg-white" aria-labelledby="faq-heading">
          <div className="container-tight">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <FadeIn>
                <div className="lg:sticky lg:top-24 self-start">
                  <p className="text-sm font-semibold text-[var(--color-ember)] uppercase tracking-wider mb-3">Common questions</p>
                  <h2 id="faq-heading">Everything you need to know</h2>
                  <p className="mt-4 text-[var(--color-ink-70)] leading-relaxed">
                    Still have questions? Call our consumer support line at{" "}
                    <a href="tel:8556427631" className="font-semibold transition-colors" style={{ color: "var(--color-ocean)" }}>
                      855-642-7631
                    </a>.
                  </p>
                  <div className="mt-8">
                    <Link
                      href="https://dealer.microf.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 text-sm"
                      style={{ background: "var(--color-ember)" }}
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <FAQ items={homeFAQs} />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────────── */}
        <section className="section-pad bg-[var(--color-base)]" aria-label="Call to action">
          <FadeIn>
            <div className="container-tight text-center">
              <div className="max-w-2xl mx-auto">
                <p className="text-sm font-semibold text-[var(--color-ember)] uppercase tracking-wider mb-4">Ready when you are</p>
                <h2 className="mb-5">Your home deserves to be comfortable</h2>
                <p className="text-lg text-[var(--color-ink-70)] leading-relaxed mb-8">
                  Don&apos;t let a credit score or an empty savings account keep you without heat in January or AC in August. Apply now — it takes five minutes and won&apos;t affect your credit.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Link
                    href="https://dealer.microf.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-white font-semibold px-10 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 text-base"
                    style={{ background: "var(--color-ember)" }}
                  >
                    Apply in Minutes — No Credit Check
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 font-semibold px-10 py-4 rounded-full transition-all duration-200 text-base"
                    style={{ border: "2px solid var(--color-ocean)", color: "var(--color-ocean)" }}
                  >
                    Talk to Support
                  </Link>
                </div>

                <div className="inline-flex flex-col sm:flex-row gap-6 sm:gap-10 bg-white rounded-2xl px-8 py-6 border border-slate-100" style={{ boxShadow: "var(--shadow-warm-md)" }}>
                  <div className="text-center">
                    <p className="text-xs font-semibold text-[var(--color-smoke)] uppercase tracking-wider mb-1">Consumer Support</p>
                    <a href="tel:8556427631" className="text-lg font-bold text-[var(--color-ocean)] hover:text-[var(--color-ember)] transition-colors">
                      855-642-7631
                    </a>
                  </div>
                  <div className="hidden sm:block w-px bg-slate-100" />
                  <div className="text-center">
                    <p className="text-xs font-semibold text-[var(--color-smoke)] uppercase tracking-wider mb-1">Contractor Support</p>
                    <a href="tel:8554988200" className="text-lg font-bold text-[var(--color-ocean)] hover:text-[var(--color-mint)] transition-colors">
                      855-498-8200
                    </a>
                  </div>
                  <div className="hidden sm:block w-px bg-slate-100" />
                  <div className="text-center">
                    <p className="text-xs font-semibold text-[var(--color-smoke)] uppercase tracking-wider mb-1">Hours</p>
                    <p className="text-sm text-[var(--color-ink)]">Mon–Fri 8AM–8PM<br />Sat 9AM–2PM EST</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>

      <Footer />
      <MobileApplyCTA />
    </>
  );
}
