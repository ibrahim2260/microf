"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-slate-200" role="list">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const id = `faq-answer-${i}`;

        return (
          <div key={i} role="listitem">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-start justify-between gap-4 py-5 text-left group"
              aria-expanded={isOpen}
              aria-controls={id}
            >
              <span className="font-semibold transition-colors text-base leading-snug pr-2" style={{ color: "#0C2D3F" }}>
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-[var(--color-ember)] mt-0.5"
                aria-hidden="true"
              >
                <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                  <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={id}
                  role="region"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                  style={{ overflow: "hidden" }}
                >
                  <p className="pb-5 text-[var(--color-ink-70)] leading-relaxed pr-10">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
