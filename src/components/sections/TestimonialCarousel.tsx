"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  location?: string;
  rating?: number;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <div className="relative" aria-live="polite" aria-label="Customer testimonials">
      <div className="overflow-hidden relative min-h-[380px] md:min-h-[340px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="absolute inset-0 flex flex-col justify-center"
          >
            {/* Stars */}
            {t.rating && (
              <div className="flex gap-0.5 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 16 16"
                    className={`w-4 h-4 ${i < t.rating! ? "text-[var(--color-ember)]" : "text-slate-200"}`}
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 1l1.854 3.754L14 5.519l-3 2.927.708 4.133L8 10.573l-3.708 1.946L5 8.446 2 5.519l4.146-.765L8 1z" />
                  </svg>
                ))}
              </div>
            )}

            {/* Quote */}
            <blockquote>
              <p className="text-xl md:text-2xl text-[var(--color-ocean)] leading-relaxed mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-ocean-mid)] to-[var(--color-ocean)] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <cite className="not-italic font-semibold text-[var(--color-ink)] text-sm">{t.name}</cite>
                  <p className="text-xs text-[var(--color-smoke)]">
                    {t.role}{t.location && ` · ${t.location}`}
                  </p>
                </div>
              </footer>
            </blockquote>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4 mt-4">
        <button
          onClick={prev}
          className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center hover:border-[var(--color-ember)] hover:text-[var(--color-ember)] transition-colors"
          aria-label="Previous testimonial"
        >
          <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="flex gap-1.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-[var(--color-ember)]" : "w-1.5 bg-slate-200"}`}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === current}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center hover:border-[var(--color-ember)] hover:text-[var(--color-ember)] transition-colors"
          aria-label="Next testimonial"
        >
          <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
