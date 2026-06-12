"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Adapted from 21.dev lamp component.
// Cyan replaced with Microf ember (#E8621A / #FF7A38).
// Slate-950 replaced with deep ocean-black (#060C14).

const BG = "#060C14";

export function LampHero({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden z-0",
        className
      )}
      style={{ background: BG }}
    >
      {/* ── Lamp light source ─────────────────────────────────────── */}
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">

        {/* Left conic beam */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] [--conic-position:from_70deg_at_center_top]"
          style={{
            backgroundImage:
              "conic-gradient(from 70deg at center top, #E8621A, transparent, transparent)",
          }}
        >
          {/* Mask edges to match background */}
          <div
            className="absolute w-full left-0 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"
            style={{ background: BG }}
          />
          <div
            className="absolute w-40 h-full left-0 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]"
            style={{ background: BG }}
          />
        </motion.div>

        {/* Right conic beam */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] [--conic-position:from_290deg_at_center_top]"
          style={{
            backgroundImage:
              "conic-gradient(from 290deg at center top, transparent, transparent, #E8621A)",
          }}
        >
          <div
            className="absolute w-40 h-full right-0 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]"
            style={{ background: BG }}
          />
          <div
            className="absolute w-full right-0 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"
            style={{ background: BG }}
          />
        </motion.div>

        {/* Hard background fill below beams */}
        <div
          className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 blur-2xl"
          style={{ background: BG }}
        />
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />

        {/* Central ember glow orb */}
        <div
          className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full opacity-40 blur-3xl"
          style={{ background: "#E8621A" }}
        />

        {/* Beam bloom spot */}
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-24 rounded-full blur-2xl"
          style={{ background: "#FF7A38" }}
        />

        {/* Sharp horizontal beam line */}
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-28"
          style={{ background: "#FF7A38" }}
        />

        {/* Lower background fill to cut off beam glow below content */}
        <div
          className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem]"
          style={{ background: BG }}
        />
      </div>

      {/* ── Hero content — centered, layered above lamp ─────────────── */}
      <div className="relative z-50 -translate-y-72 flex flex-col items-center text-center px-6 md:px-8 w-full max-w-3xl mx-auto">

        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-widest"
          style={{
            background: "rgba(232,98,26,0.15)",
            border: "1px solid rgba(232,98,26,0.35)",
            color: "#FF7A38",
          }}
        >
          No credit check required
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
          className="mb-6 font-semibold tracking-tight"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
            lineHeight: 1.08,
            color: "#FFFFFF",
            textShadow: "0 2px 24px rgba(0,0,0,0.6)",
          }}
        >
          Broken equipment,{" "}
          <span
            style={{
              color: "#FF7A38",
              textShadow: "0 0 40px rgba(232,98,26,0.6), 0 2px 16px rgba(0,0,0,0.5)",
            }}
          >
            tight budget.
          </span>
          <br />
          We&apos;ve got you.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
          className="mb-10 max-w-xl text-base md:text-lg leading-relaxed"
          style={{ color: "rgba(255,255,255,0.75)" }}
        >
          When your AC dies in August or your furnace quits in January, you don&apos;t have time to wait. Microf&apos;s lease-to-own program gets you approved fast, without a credit check, so your contractor can get to work today.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="https://dealer.microf.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] text-base"
            style={{
              background: "#E8621A",
              color: "#FFFFFF",
              boxShadow: "0 0 32px rgba(232,98,26,0.45), 0 4px 12px rgba(0,0,0,0.3)",
            }}
          >
            Apply Now — Free &amp; Fast
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <Link
            href="/homeowners/hvac"
            className="inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:opacity-80 text-base"
            style={{
              border: "1.5px solid rgba(255,255,255,0.25)",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            Browse HVAC Options
          </Link>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="mt-6 text-xs font-medium"
          style={{ color: "rgba(255,255,255,0.40)" }}
        >
          All credit backgrounds welcome · Near-instant decisions · 43 states
        </motion.p>
      </div>
    </div>
  );
}
