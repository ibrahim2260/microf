"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/* ─── Microf brand colors for the pixel canvas ─────────────────────── */
const PIXEL_COLORS = [
  "#1A4A62", // ocean-80 — majority fill, depth
  "#1A4A62",
  "#1A4A62",
  "#0E8A63", // mint-dark — accent sparkle
  "#94A3B8", // smoke — subtle shimmer
  "#94A3B8",
  "#E8621A", // ember — premium highlight
];

/* ─── Contractor trust badges for the marquee ──────────────────────── */
const TRUST_BADGES = [
  "43 States Active",
  "24–48hr Funding",
  "Higher Approval Rates",
  "No Cost to Enroll",
  "HVAC & Plumbing",
  "Instant Alerts",
  "Dedicated Support Line",
  "No Hard Credit Check",
  "Real-Time Portal",
  "25–30% More Closed Jobs",
];

/* ─── Pixel physics engine ──────────────────────────────────────────── */

type Pixel = {
  x: number;
  y: number;
  color: string;
  ctx: CanvasRenderingContext2D;
  speed: number;
  size: number;
  sizeStep: number;
  minSize: number;
  maxSizeInt: number;
  maxSize: number;
  delay: number;
  counter: number;
  counterStep: number;
  isIdle: boolean;
  isReverse: boolean;
  isShimmer: boolean;
  draw: () => void;
  appear: () => void;
  disappear: () => void;
  shimmer: () => void;
};

function createPixel(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  x: number,
  y: number,
  color: string,
  baseSpeed: number,
  delay: number
): Pixel {
  const rand = (min: number, max: number) => Math.random() * (max - min) + min;

  const p: Pixel = {
    x, y, color, ctx,
    speed: rand(0.08, 0.4) * baseSpeed,
    size: 0,
    sizeStep: rand(0.12, 0.28),
    minSize: 0.5,
    maxSizeInt: 2,
    maxSize: rand(0.5, 2),
    delay,
    counter: 0,
    counterStep: rand(1.8, 3.2) + (canvas.width + canvas.height) * 0.008,
    isIdle: false,
    isReverse: false,
    isShimmer: false,
    draw() {
      const offset = p.maxSizeInt * 0.5 - p.size * 0.5;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x + offset, p.y + offset, p.size, p.size);
    },
    appear() {
      p.isIdle = false;
      if (p.counter <= p.delay) { p.counter += p.counterStep; return; }
      if (p.size >= p.maxSize) p.isShimmer = true;
      if (p.isShimmer) p.shimmer();
      else p.size += p.sizeStep;
      p.draw();
    },
    disappear() {
      p.isShimmer = false;
      p.counter = 0;
      if (p.size <= 0) { p.isIdle = true; return; }
      p.size -= 0.1;
      p.draw();
    },
    shimmer() {
      if (p.size >= p.maxSize) p.isReverse = true;
      else if (p.size <= p.minSize) p.isReverse = false;
      if (p.isReverse) p.size -= p.speed;
      else p.size += p.speed;
    },
  };
  return p;
}

type PixelCanvasProps = { colors: string[]; gap?: number; speed?: number };

function PixelCanvas({ colors, gap = 6, speed = 30 }: PixelCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const pixelsRef = useRef<Pixel[]>([]);
  const animationRef = useRef<number>(0);
  const lastFrameRef = useRef(performance.now());

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap || colors.length === 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = wrap.getBoundingClientRect();
    const w = Math.floor(width);
    const h = Math.floor(height);
    canvas.width = w;
    canvas.height = h;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const effectiveSpeed = reducedMotion ? 0 : Math.min(speed, 100) * 0.001;
    const pixels: Pixel[] = [];

    for (let x = 0; x < w; x += gap) {
      for (let y = 0; y < h; y += gap) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const dx = x - w / 2;
        const dy = y - h / 2;
        const delay = reducedMotion ? 0 : Math.sqrt(dx * dx + dy * dy) * 0.65;
        pixels.push(createPixel(ctx, canvas, x, y, color, effectiveSpeed, delay));
      }
    }
    pixelsRef.current = pixels;
  }, [colors, gap, speed]);

  const animate = useCallback((mode: "appear" | "disappear") => {
    cancelAnimationFrame(animationRef.current);
    const frameInterval = 1000 / 60;
    const loop = () => {
      animationRef.current = requestAnimationFrame(loop);
      const now = performance.now();
      const elapsed = now - lastFrameRef.current;
      if (elapsed < frameInterval) return;
      lastFrameRef.current = now - (elapsed % frameInterval);
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const pixels = pixelsRef.current;
      for (const pixel of pixels) pixel[mode]();
      if (pixels.every((p) => p.isIdle)) cancelAnimationFrame(animationRef.current);
    };
    animationRef.current = requestAnimationFrame(loop);
  }, []);

  useEffect(() => {
    init();
    const resizeObserver = new ResizeObserver(() => init());
    if (wrapRef.current) resizeObserver.observe(wrapRef.current);
    animate("appear");
    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationRef.current);
    };
  }, [init, animate]);

  return (
    <div ref={wrapRef} className="absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}

/* ─── Contractor Hero ───────────────────────────────────────────────── */

export function ContractorPixelHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden isolate"
      style={{ minHeight: "clamp(520px, 80vh, 900px)", backgroundColor: "var(--color-ink)" }}
      aria-label="Contractor hero"
    >
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-contractor {
          animation: marquee-scroll 28s linear infinite;
        }
        .microf-glass-text {
          color: transparent;
          background: linear-gradient(
            135deg,
            rgba(255,255,255,1) 0%,
            rgba(255,255,255,0.45) 22%,
            rgba(255,255,255,0.12) 44%,
            rgba(255,255,255,0.90) 54%,
            rgba(255,255,255,0.22) 74%,
            rgba(255,255,255,1) 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-stroke: 1.5px rgba(255,255,255,0.25);
          filter: drop-shadow(0 12px 30px rgba(0,0,0,0.45)) drop-shadow(0 4px 8px rgba(0,0,0,0.25));
          animation: glass-shimmer 9s linear infinite;
        }
        @keyframes glass-shimmer {
          0%   { background-position: 200% center; }
          100% { background-position: 0% center; }
        }
        .mint-glass-text {
          color: transparent;
          background: linear-gradient(
            135deg,
            #16A87C 0%,
            #4ed4a9 35%,
            #16A87C 55%,
            #0E8A63 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          filter: drop-shadow(0 0 24px rgba(22,168,124,0.55));
          animation: mint-shimmer 7s linear infinite;
        }
        @keyframes mint-shimmer {
          0%   { background-position: 200% center; }
          100% { background-position: 0% center; }
        }
      `}</style>

      {/* Pixel canvas */}
      <PixelCanvas colors={PIXEL_COLORS} gap={6} speed={28} />

      {/* Radial vignette — deepens center darkness so text pops */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 20%, rgba(12,45,63,0.55) 60%, rgba(12,45,63,0.92) 100%)",
        }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px z-[2]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(22,168,124,0.6) 40%, rgba(232,98,26,0.6) 60%, transparent)" }}
      />

      {/* Content */}
      <div className="relative z-[3] flex flex-col items-center justify-center text-center h-full px-4 sm:px-8 pt-16 md:pt-20"
        style={{ minHeight: "clamp(520px, 80vh, 900px)" }}
      >
        {/* Badge */}
        <div
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 text-xs font-semibold uppercase tracking-widest transition-all duration-700",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
          )}
          style={{
            background: "rgba(22,168,124,0.12)",
            color: "var(--color-mint)",
            border: "1px solid rgba(22,168,124,0.30)",
            boxShadow: "0 0 24px rgba(22,168,124,0.12)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "var(--color-mint)" }}
          />
          For HVAC &amp; Plumbing Contractors
        </div>

        {/* Headline */}
        <h1
          className={cn(
            "flex flex-wrap items-baseline justify-center gap-x-4 gap-y-1 leading-none mb-6 transition-all duration-700 delay-100",
            "text-[2.6rem] xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="microf-glass-text font-medium italic">Stop Losing</span>
          <span className="mint-glass-text font-extrabold tracking-tight" style={{ fontFamily: "var(--font-sans)" }}>
            Jobs.
          </span>
        </h1>

        {/* Sub-headline */}
        <p
          className={cn(
            "text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-xl mb-10 transition-all duration-700 delay-200",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{ color: "rgba(255,255,255,0.72)" }}
        >
          Every declined application costs you a job. Microf&apos;s higher approval rates, 24–48hr funding, and
          dedicated dealer portal help you close more installs and grow your revenue.
        </p>

        {/* CTAs */}
        <div
          className={cn(
            "flex flex-col sm:flex-row items-center gap-3 mb-14 transition-all duration-700 delay-300",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <a
            href="#partner-form"
            className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-full text-white text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(232,98,26,0.4)] active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, var(--color-ember) 0%, var(--color-ember-dark) 100%)",
              boxShadow: "inset 0 1px 1px rgba(255,255,255,0.2), 0 4px 16px rgba(232,98,26,0.3)",
            }}
          >
            Become a Partner — Free
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            href="https://dealer.microf.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-full text-white text-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.18)",
              backdropFilter: "blur(12px)",
              boxShadow: "inset 0 1px 1px rgba(255,255,255,0.08)",
            }}
          >
            Dealer Portal Login
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </Link>
        </div>

        {/* Trust badge marquee */}
        <div
          className={cn(
            "w-full transition-all duration-700 delay-[450ms]",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <p className="text-[10px] uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>
            Built for contractors who want to grow
          </p>
          <div
            className="relative w-full max-w-3xl mx-auto overflow-hidden"
            style={{ maskImage: "linear-gradient(to right, transparent, white 12%, white 88%, transparent)" }}
          >
            <div className="flex w-max gap-3 animate-marquee-contractor">
              {[...TRUST_BADGES, ...TRUST_BADGES].map((badge, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-1 text-xs font-medium"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.65)",
                  }}
                >
                  <span
                    className="w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: i % 3 === 0 ? "var(--color-mint)" : i % 3 === 1 ? "var(--color-ember)" : "var(--color-smoke)" }}
                  />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-[4]"
        style={{ background: "linear-gradient(to bottom, transparent, var(--color-ink) 100%)" }}
      />
    </section>
  );
}
