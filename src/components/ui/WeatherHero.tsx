"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import type { Mood } from "@/lib/weather";

// ── Products (static pill links) ──────────────────────────────────────────────

const PRODUCTS = [
  { id: "furnace",      label: "Furnaces",         href: "/homeowners/hvac" },
  { id: "ac",           label: "Air Conditioners", href: "/homeowners/hvac" },
  { id: "heat-pump",    label: "Heat Pumps",        href: "/homeowners/hvac" },
  { id: "mini-split",   label: "Mini-Splits",       href: "/homeowners/hvac" },
  { id: "water-heater", label: "Water Heaters",     href: "/homeowners/water-heaters" },
];

// ── Mood palettes ─────────────────────────────────────────────────────────────

interface MoodConfig {
  bgBase: string;
  bgGradient: string;
  ambientGlow: string;
  bottomGlow: string;
  textPrimary: string;
  textMuted: string;
  accent: string;
  accentSoft: string;
  chipBg: string;
  chipBorder: string;
  statsBg: string;
  statsDivider: string;
  chipIcon: string;
  particleType: "snow" | "heat" | "motes" | "none";
}

const MOOD_CONFIG: Record<Mood, MoodConfig> = {
  cold: {
    bgBase:       "#06111E",
    bgGradient:   "radial-gradient(ellipse 130% 90% at 70% -5%, rgba(10,28,52,1) 0%, rgba(4,8,18,1) 60%)",
    ambientGlow:  "radial-gradient(ellipse 55% 45% at 72% 8%, rgba(96,184,232,0.10) 0%, transparent 65%)",
    bottomGlow:   "radial-gradient(ellipse 90% 35% at 50% 105%, rgba(24,55,100,0.18) 0%, transparent 55%)",
    textPrimary:  "#FFFFFF",
    textMuted:    "rgba(186,218,240,0.80)",
    accent:       "#7DD3FC",
    accentSoft:   "rgba(125,211,252,0.20)",
    chipBg:       "rgba(125,211,252,0.08)",
    chipBorder:   "rgba(125,211,252,0.22)",
    statsBg:      "rgba(3,8,18,0.82)",
    statsDivider: "rgba(125,211,252,0.16)",
    chipIcon:     "❄️",
    particleType: "snow",
  },
  hot: {
    bgBase:       "#180800",
    bgGradient:   "radial-gradient(ellipse 130% 90% at 30% 105%, rgba(40,12,0,1) 0%, rgba(10,4,0,1) 60%)",
    ambientGlow:  "radial-gradient(ellipse 65% 55% at 50% 100%, rgba(234,88,12,0.15) 0%, transparent 60%)",
    bottomGlow:   "radial-gradient(ellipse 50% 40% at 50% 110%, rgba(249,115,22,0.12) 0%, transparent 60%)",
    textPrimary:  "#FFFFFF",
    textMuted:    "rgba(255,198,140,0.80)",
    accent:       "#FB923C",
    accentSoft:   "rgba(251,146,60,0.22)",
    chipBg:       "rgba(251,146,60,0.10)",
    chipBorder:   "rgba(251,146,60,0.28)",
    statsBg:      "rgba(10,3,0,0.82)",
    statsDivider: "rgba(251,146,60,0.18)",
    chipIcon:     "☀️",
    particleType: "heat",
  },
  // Deep twilight-plum + warm lamplight-gold
  // #F0C070 on #130E24 → 12.2:1 contrast (WCAG AAA)
  mild: {
    bgBase:       "#130E24",
    bgGradient:   "radial-gradient(ellipse 130% 90% at 60% -5%, rgba(28,18,50,1) 0%, rgba(10,8,20,1) 60%)",
    ambientGlow:  "radial-gradient(ellipse 55% 45% at 75% 15%, rgba(240,192,112,0.09) 0%, transparent 65%)",
    bottomGlow:   "radial-gradient(ellipse 80% 40% at 50% 100%, rgba(40,28,70,0.30) 0%, transparent 55%)",
    textPrimary:  "#FFFFFF",
    textMuted:    "rgba(240,192,112,0.80)",
    accent:       "#F0C070",
    accentSoft:   "rgba(240,192,112,0.22)",
    chipBg:       "rgba(240,192,112,0.10)",
    chipBorder:   "rgba(240,192,112,0.28)",
    statsBg:      "rgba(10,8,20,0.82)",
    statsDivider: "rgba(240,192,112,0.18)",
    chipIcon:     "🌅",
    particleType: "motes",
  },
};

const STATS = [
  { value: "43",      label: "States served" },
  { value: "< 5 min", label: "Avg. application time" },
  { value: "Zero",    label: "Hard credit checks" },
];

// ── Particle system ───────────────────────────────────────────────────────────

interface Particle {
  x: number; y: number; size: number; speed: number;
  drift: number; phase: number; opacity: number; opacityDir: number;
}

const makePart = (
  type: "snow" | "heat" | "motes",
  w: number, h: number, randomY: boolean
): Particle => {
  const base = {
    x: Math.random() * w,
    phase: Math.random() * Math.PI * 2,
    opacityDir: Math.random() > 0.5 ? 1 : -1,
  };
  if (type === "snow") return {
    ...base, y: randomY ? Math.random() * h : -8,
    size: 1 + Math.random() * 2.5, speed: 0.4 + Math.random() * 0.8,
    drift: 0.4 + Math.random() * 0.6, opacity: 0.3 + Math.random() * 0.4,
  };
  if (type === "heat") return {
    ...base, y: randomY ? Math.random() * h : h + 8,
    size: 2 + Math.random() * 3, speed: 0.4 + Math.random() * 1.0,
    drift: 0.5 + Math.random() * 0.8, opacity: 0.08 + Math.random() * 0.12,
  };
  return { // motes
    ...base, y: randomY ? Math.random() * h : h + 8,
    size: 1.5 + Math.random() * 2, speed: 0.15 + Math.random() * 0.25,
    drift: 0.3 + Math.random() * 0.5, opacity: 0.15 + Math.random() * 0.25,
  };
};

const SINE_LINES = [
  { yFrac: 0.22, amp: 10, xFreq: 0.012, tSpeed: 0.00015, phase: 0.0, opacity: 0.09 },
  { yFrac: 0.40, amp:  8, xFreq: 0.009, tSpeed: 0.00012, phase: 2.1, opacity: 0.07 },
  { yFrac: 0.62, amp: 13, xFreq: 0.015, tSpeed: 0.00018, phase: 4.3, opacity: 0.10 },
  { yFrac: 0.78, amp:  7, xFreq: 0.011, tSpeed: 0.00010, phase: 1.5, opacity: 0.08 },
];

function ParticlesCanvas({ particleType }: { particleType: "snow" | "heat" | "motes" }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);
  const parts     = useRef<Particle[]>([]);
  const paused    = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;
    const MAX = particleType === "motes" ? (isMobile ? 12 : 20) : (isMobile ? 20 : 40);

    const init = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      parts.current = Array.from({ length: MAX }, () =>
        makePart(particleType, canvas.width, canvas.height, true)
      );
    };
    init();
    window.addEventListener("resize", init);

    const onVis = () => { paused.current = document.hidden; };
    document.addEventListener("visibilitychange", onVis);

    const draw = (t: number) => {
      rafRef.current = requestAnimationFrame(draw);
      if (paused.current) return;
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      if (particleType === "snow") {
        for (const p of parts.current) {
          p.y += p.speed;
          p.x += Math.sin(t * 0.001 * p.drift + p.phase) * 0.5;
          if (p.y > H + 4) { p.x = Math.random() * W; p.y = -4; }
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200,230,255,${p.opacity})`;
          ctx.fill();
        }
      } else if (particleType === "heat") {
        for (const p of parts.current) {
          p.y -= p.speed;
          p.x += Math.sin(t * 0.0008 * p.drift + p.phase) * 0.7;
          p.opacity += p.opacityDir * 0.001;
          if (p.opacity > 0.22 || p.opacity < 0.04) p.opacityDir *= -1;
          if (p.y < -10) { p.x = Math.random() * W; p.y = H + 10; }
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,175,70,${p.opacity})`;
          ctx.fill();
        }
      } else {
        // sine lines behind motes
        ctx.save();
        ctx.lineWidth = 1;
        for (const line of SINE_LINES) {
          const baseY = H * line.yFrac;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(240,192,112,${line.opacity})`;
          const step = 5;
          for (let x = 0; x <= W + step; x += step) {
            const y = baseY + line.amp * Math.sin(x * line.xFreq - t * line.tSpeed + line.phase);
            x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
        ctx.restore();
        // gold motes drifting upward
        for (const p of parts.current) {
          p.y -= p.speed;
          p.x += Math.sin(t * 0.0005 * p.drift + p.phase) * 0.3;
          p.opacity += p.opacityDir * 0.003;
          if (p.opacity > 0.45 || p.opacity < 0.12) p.opacityDir *= -1;
          if (p.y < -10) { p.x = Math.random() * W; p.y = H + 10; p.opacity = 0.15 + Math.random() * 0.20; }
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(240,192,112,${p.opacity})`;
          ctx.fill();
        }
      }
    };
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", init);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [particleType]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

// ── Main hero component ───────────────────────────────────────────────────────

interface WeatherHeroProps {
  mood: Mood;
  temp: number | null;
  city: string;
  chipText: string;
}

export function WeatherHero({ mood, chipText }: WeatherHeroProps) {
  const config = MOOD_CONFIG[mood];
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: config.bgBase }}
      aria-label="Hero — Microf home comfort financing"
    >
      {/* ── Background atmosphere ───────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/*
          To replace with photography:
            <Image src="/hero-bg.jpg" alt="" fill priority sizes="100vw"
              className="object-cover object-center" />
          Keep the overlay divs below for mood tinting.
        */}
        <div className="absolute inset-0" style={{ background: config.bgGradient }} />
        <div className="absolute inset-0" style={{ background: config.ambientGlow }} />
        <div className="absolute inset-0" style={{ background: config.bottomGlow }} />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(0,0,0,0.42) 100%)" }}
        />
      </div>

      {/* ── Particle canvas ─────────────────────────────────────────── */}
      {!reducedMotion && config.particleType !== "none" && (
        <ParticlesCanvas particleType={config.particleType} />
      )}

      {/* ── Content ─────────────────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center container-tight px-6 md:px-8 pt-28 md:pt-32 pb-32 md:pb-40">

        {/* Weather chip */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-7 md:mb-9"
        >
          <span
            className="inline-flex items-center gap-2 text-sm font-medium rounded-full px-3.5 py-1.5"
            style={{
              background:           config.chipBg,
              border:               `1px solid ${config.chipBorder}`,
              color:                config.accent,
              backdropFilter:       "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          >
            <span aria-hidden="true">{config.chipIcon}</span>
            {chipText}
          </span>
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.04 }}
          className="text-sm font-semibold uppercase tracking-wider mb-4"
          style={{ color: config.accent }}
        >
          Lease-to-own financing for HVAC &amp; water heaters
        </motion.p>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="max-w-3xl tracking-tight"
          style={{
            fontFamily: "var(--font-display)",
            fontSize:   "clamp(2.4rem, 5.5vw, 4.25rem)",
            lineHeight: 1.06,
            color:      config.textPrimary,
          }}
        >
          A new furnace, AC, or water heater — approved in minutes, with no hard credit check.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-5 max-w-xl text-base md:text-lg leading-relaxed"
          style={{ color: config.textMuted }}
        >
          When banks say no, Microf says let&apos;s get to work. Choose a monthly payment that fits your budget, your contractor installs right away, and the equipment is yours once payments are complete.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="mt-9 flex flex-wrap gap-4 items-center"
        >
          <Link
            href="https://dealer.microf.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
            style={{
              background: config.accent,
              color:      config.bgBase,
              boxShadow:  `0 0 28px ${config.accentSoft}, 0 4px 12px rgba(0,0,0,0.25)`,
            }}
          >
            Apply in Minutes — Won&apos;t Affect Your Credit
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <Link
            href="/contractors"
            className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 hover:opacity-90"
            style={{ color: config.textMuted }}
          >
            Partner With Us
            <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.34 }}
          className="mt-4 text-xs font-medium"
          style={{ color: config.textMuted, opacity: 0.70 }}
        >
          All credit backgrounds welcome · Decisions in real time · Serving 43 states
        </motion.p>

        {/* Product pills — static links */}
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.40 }}
          aria-label="Browse financing by product"
          className="mt-10 flex flex-wrap gap-2.5"
        >
          {PRODUCTS.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="inline-flex items-center text-sm font-medium rounded-full px-3.5 py-1.5 transition-all duration-200 hover:opacity-80"
              style={{
                background: "rgba(255,255,255,0.06)",
                border:     "1px solid rgba(255,255,255,0.12)",
                color:      config.textMuted,
              }}
            >
              {product.label}
            </Link>
          ))}
        </motion.nav>
      </div>

      {/* ── Stats bar ───────────────────────────────────────────────── */}
      <div
        className="relative z-10 border-t"
        style={{
          background:           config.statsBg,
          borderColor:          config.statsDivider,
          backdropFilter:       "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <div className="py-6 px-6 grid grid-cols-3 max-w-lg mx-auto">
          {STATS.map(({ value, label }, i) => (
            <div
              key={label}
              className="flex flex-col items-center text-center px-4"
              style={{
                borderRight: i < STATS.length - 1
                  ? `1px solid ${config.statsDivider}`
                  : "none",
              }}
            >
              <p
                className="text-2xl font-bold leading-none"
                style={{ fontFamily: "var(--font-display)", color: config.textPrimary }}
              >
                {value}
              </p>
              <p
                className="text-xs mt-1.5 font-medium leading-snug"
                style={{ color: config.textMuted }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
