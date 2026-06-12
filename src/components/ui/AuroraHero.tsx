"use client";

import React from "react";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

// Aurora background adapted to Microf palette:
//   Wave 1 — ocean blue   rgba(26, 85, 114, ...)
//   Wave 2 — ember orange rgba(232, 98, 26,  ...)
//   Wave 3 — ember warm   rgba(255, 122, 56, ...)
//   Wave 4 — mint green   rgba(22, 168, 124, ...)

export function AuroraHero() {
  return (
    <section
      className="relative overflow-hidden min-h-[85vh] flex items-center"
      style={{ background: "#060C14" }}
      aria-label="Homeowners hero"
    >
      {/* ── Aurora layers ────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">

        {/* Base deep-ocean gradient */}
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background:
              "linear-gradient(135deg, rgba(12,45,63,0.55) 0%, rgba(26,31,46,0.40) 50%, rgba(12,45,63,0.55) 100%)",
          }}
        />

        {/* Wave 1 — ocean sweep, upper centre */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 800px 600px at 50% 20%, rgba(26,85,114,0.45) 0%, transparent 55%)",
            animation: "aurora1 8s ease-in-out infinite alternate",
          }}
        />

        {/* Wave 2 — ember bloom, right */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse 600px 400px at 80% 35%, rgba(232,98,26,0.38) 0%, transparent 52%)",
            animation: "aurora2 6s ease-in-out infinite alternate-reverse",
          }}
        />

        {/* Wave 3 — warm ember, left-lower */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 700px 500px at 20% 65%, rgba(255,122,56,0.28) 0%, transparent 52%)",
            animation: "aurora3 10s ease-in-out infinite alternate",
          }}
        />

        {/* Wave 4 — mint accent, lower right */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 900px 300px at 65% 82%, rgba(22,168,124,0.22) 0%, transparent 52%)",
            animation: "aurora4 7s ease-in-out infinite alternate-reverse",
          }}
        />

        {/* Depth vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(6,12,20,0.35) 0%, transparent 50%, rgba(6,12,20,0.15) 100%)",
          }}
        />
      </div>

      {/* ── Hero content ─────────────────────────────────────────── */}
      <div className="relative z-10 container-tight w-full py-24 md:py-32">
        <div className="max-w-2xl">

          <FadeIn>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="font-medium" style={{ color: "rgba(255,255,255,0.75)" }} aria-current="page">
                  Homeowners
                </li>
              </ol>
            </nav>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-wider"
              style={{
                background: "rgba(232,98,26,0.15)",
                border: "1px solid rgba(232,98,26,0.35)",
                color: "#FF7A38",
              }}
            >
              No credit check required
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1
              className="mb-5"
              style={{
                color: "#FFFFFF",
                textShadow: "0 2px 20px rgba(0,0,0,0.5)",
              }}
            >
              Broken equipment,{" "}
              <span
                style={{
                  color: "#FF7A38",
                  textShadow: "0 0 32px rgba(232,98,26,0.55)",
                }}
              >
                tight budget.
              </span>
              <br />
              We&apos;ve got you.
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.72)" }}
            >
              When your AC dies in August or your furnace quits in January,
              you don&apos;t have time to wait — and you shouldn&apos;t have
              to. Microf&apos;s lease-to-own program gets you approved fast,
              without a credit check, so your contractor can get to work.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://dealer.microf.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 active:scale-[0.98] text-base"
                style={{
                  background: "#E8621A",
                  boxShadow: "0 0 28px rgba(232,98,26,0.40), 0 4px 12px rgba(0,0,0,0.3)",
                }}
              >
                Apply Now — Free &amp; Fast
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/homeowners/hvac"
                className="inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-full transition-all hover:bg-white/10 text-base"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.25)",
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                Browse HVAC Options
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p
              className="mt-6 text-xs font-medium"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              All credit backgrounds welcome · Near-instant decisions · 43 states
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
