"use client";

import { useState } from "react";

const TERMS = [
  { months: 18, factor: 0.072 },
  { months: 24, factor: 0.056 },
  { months: 36, factor: 0.042 },
  { months: 48, factor: 0.036 },
];

export default function PaymentEstimator() {
  const [cost, setCost] = useState(5000);

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[var(--shadow-warm-lg)] border border-slate-100">
      <p className="text-xs font-semibold text-[var(--color-ember)] uppercase tracking-wider mb-2">Payment Estimator</p>
      <h3 className="text-xl font-bold text-[var(--color-ocean)] mb-1">See Your Monthly Range</h3>
      <p className="text-sm text-[var(--color-smoke)] mb-6">
        For illustration only — not a quote or offer. Actual payments depend on your approved terms.
      </p>

      {/* Slider */}
      <div className="mb-6">
        <div className="flex justify-between items-baseline mb-2">
          <label htmlFor="cost-slider" className="text-sm font-medium text-[var(--color-ink)]">
            Equipment Cost
          </label>
          <span className="text-2xl font-bold text-[var(--color-ocean)]" style={{ fontFamily: "var(--font-display)" }}>
            ${cost.toLocaleString()}
          </span>
        </div>
        <input
          id="cost-slider"
          type="range"
          min={1000}
          max={15000}
          step={250}
          value={cost}
          onChange={(e) => setCost(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, var(--color-ember) 0%, var(--color-ember) ${((cost - 1000) / 14000) * 100}%, #E2E8F0 ${((cost - 1000) / 14000) * 100}%, #E2E8F0 100%)`,
          }}
          aria-valuemin={1000}
          aria-valuemax={15000}
          aria-valuenow={cost}
        />
        <div className="flex justify-between text-xs text-[var(--color-smoke)] mt-1">
          <span>$1,000</span>
          <span>$15,000</span>
        </div>
      </div>

      {/* Term cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {TERMS.map(({ months, factor }) => {
          const monthly = Math.round(cost * factor);
          return (
            <div
              key={months}
              className="rounded-xl border border-slate-100 bg-[var(--color-base)] p-3 text-center hover:border-[var(--color-ember)] transition-colors"
            >
              <p className="text-xs text-[var(--color-smoke)] font-medium mb-1">{months} mo.</p>
              <p className="text-lg font-bold text-[var(--color-ocean)]" style={{ fontFamily: "var(--font-display)" }}>
                ~${monthly}<span className="text-xs font-normal text-[var(--color-smoke)]">/mo</span>
              </p>
            </div>
          );
        })}
      </div>

      <p className="text-xs text-slate-400 mt-4 leading-relaxed">
        * Example estimates only. Your actual payment will vary based on the lease term, equipment cost, and other factors determined at time of approval.
      </p>
    </div>
  );
}
