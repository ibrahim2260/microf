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
      className="relative overflow-hidden flex items-center justify-center"
      style={{ background: "#060C14", height: "100dvh", minHeight: 560 }}
      aria-label="Homeowners hero"
    >
      {/* ── Aurora blobs ─────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">

        {/* Blob 1 — ocean blue, top-left */}
        <div
          className="absolute rounded-full"
          style={{
            width: 380, height: 300,
            top: "0%", left: "5%",
            background: "radial-gradient(ellipse at center, rgba(26,85,114,0.65) 0%, transparent 70%)",
            filter: "blur(60px)",
            animation: "aurora1 9s ease-in-out infinite alternate",
          }}
        />

        {/* Blob 2 — ember orange, right */}
        <div
          className="absolute rounded-full"
          style={{
            width: 320, height: 250,
            top: "5%", right: "-2%",
            background: "radial-gradient(ellipse at center, rgba(232,98,26,0.55) 0%, transparent 70%)",
            filter: "blur(64px)",
            animation: "aurora2 7s ease-in-out infinite alternate-reverse",
          }}
        />

        {/* Blob 3 — warm amber, bottom-left */}
        <div
          className="absolute rounded-full"
          style={{
            width: 340, height: 260,
            bottom: "0%", left: "8%",
            background: "radial-gradient(ellipse at center, rgba(255,122,56,0.40) 0%, transparent 70%)",
            filter: "blur(70px)",
            animation: "aurora3 11s ease-in-out infinite alternate",
          }}
        />

        {/* Blob 4 — mint green, bottom-right */}
        <div
          className="absolute rounded-full"
          style={{
            width: 280, height: 190,
            bottom: "8%", right: "8%",
            background: "radial-gradient(ellipse at center, rgba(22,168,124,0.36) 0%, transparent 70%)",
            filter: "blur(60px)",
            animation: "aurora4 8s ease-in-out infinite alternate-reverse",
          }}
        />

        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 30%, rgba(6,12,20,0.55) 100%)",
          }}
        />
      </div>

      {/* ── Hero content — centered ───────────────────────────────── */}
      <div className="relative z-10 container-tight w-full text-center px-4 pt-16 md:pt-20">

        <FadeIn delay={0.05}>
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 text-xs font-semibold uppercase tracking-wider"
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
            className="text-lg leading-relaxed mb-8 max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.72)" }}
          >
            When your AC dies in the summer or your furnace quits in the
            winter, you can&apos;t afford to wait. Microf&apos;s lease-to-own
            program gets you approved fast — no credit check, no hassle —
            so your contractor can get to work today.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
    </section>
  );
}
