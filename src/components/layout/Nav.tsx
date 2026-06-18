"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/homeowners", label: "Homeowners" },
  { href: "/contractors", label: "Contractors" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const hasDarkHero = pathname === "/homeowners" || pathname === "/contractors";

  // Transparent white-text nav on pages with a dark hero; solid white after scroll
  const useDarkStyle = (!isHome && !hasDarkHero) || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    // Set initial scroll state on mount (handles page load mid-scroll)
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          useDarkStyle
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200/60 shadow-[0_2px_20px_rgba(12,45,63,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="container-tight">
          <nav className="flex items-center justify-between h-16 md:h-20" aria-label="Main navigation">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
              <div
                className="w-8 h-8 rounded-[6px] flex items-center justify-center transition-colors"
                style={{ background: useDarkStyle ? "var(--color-ocean)" : "rgba(255,255,255,0.15)", border: useDarkStyle ? "none" : "1px solid rgba(255,255,255,0.25)" }}
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" aria-hidden="true">
                  <path d="M3 12L12 3L21 12V21H15V15H9V21H3V12Z" fill="currentColor" />
                </svg>
              </div>
              <span
                className="text-xl font-bold tracking-tight transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-display)",
                  color: useDarkStyle ? "var(--color-ocean)" : "#FFFFFF",
                  textShadow: useDarkStyle ? "none" : "0 1px 8px rgba(0,0,0,0.3)",
                }}
              >
                microf
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm font-medium transition-all duration-200 relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:transition-all after:duration-200 ${
                    useDarkStyle
                      ? pathname.startsWith(href)
                        ? "text-[var(--color-ocean)] after:w-full after:bg-[var(--color-ember)]"
                        : "text-[var(--color-ink-70)] hover:text-[var(--color-ocean)] after:w-0 hover:after:w-full after:bg-[var(--color-ember)]"
                      : pathname.startsWith(href)
                        ? "text-white after:w-full after:bg-[var(--color-ember)]"
                        : "text-white/80 hover:text-white after:w-0 hover:after:w-full after:bg-[var(--color-ember)]"
                  }`}
                  style={{ textShadow: useDarkStyle ? "none" : "0 1px 6px rgba(0,0,0,0.25)" }}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Desktop Utility Actions */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="https://dealer.microf.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium transition-all duration-200 px-3 py-2"
                style={{
                  color: useDarkStyle ? "var(--color-ink-70)" : "rgba(255,255,255,0.75)",
                  textShadow: useDarkStyle ? "none" : "0 1px 6px rgba(0,0,0,0.25)",
                }}
              >
                Contractor Login
              </Link>
              <Link
                href="https://www2.invoicecloud.com/portal/(S(wcmspbjk50cjqde0hyhoigxx))/2/Site.aspx?G=b10c55d7-88b2-484c-bfc4-f48f61972472"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium transition-all duration-200 px-3 py-2"
                style={{
                  color: useDarkStyle ? "var(--color-ink-70)" : "rgba(255,255,255,0.75)",
                  textShadow: useDarkStyle ? "none" : "0 1px 6px rgba(0,0,0,0.25)",
                }}
              >
                Make a Payment
              </Link>
              <Link
                href="https://dealer.microf.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[var(--color-ember)] hover:bg-[var(--color-ember-dark)] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-[var(--shadow-ember)] hover:-translate-y-0.5"
              >
                Apply Now
                <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg transition-colors"
              style={{ background: useDarkStyle ? "transparent" : "rgba(255,255,255,0.10)" }}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} style={{ background: useDarkStyle ? "var(--color-ocean)" : "#FFFFFF" }} />
              <span className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} style={{ background: useDarkStyle ? "var(--color-ocean)" : "#FFFFFF" }} />
              <span className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} style={{ background: useDarkStyle ? "var(--color-ocean)" : "#FFFFFF" }} />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-white flex flex-col md:hidden"
          >
            <div className="h-16 flex items-center px-6 border-b border-slate-100">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-[6px] bg-[var(--color-ocean)] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" aria-hidden="true">
                    <path d="M3 12L12 3L21 12V21H15V15H9V21H3V12Z" fill="currentColor" />
                  </svg>
                </div>
                <span className="text-xl font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--color-ocean)" }}>
                  microf
                </span>
              </Link>
            </div>

            <nav className="flex-1 overflow-y-auto p-6 flex flex-col gap-2" aria-label="Mobile navigation">
              {navLinks.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={href}
                    className={`block px-4 py-3 rounded-xl text-lg font-medium transition-colors ${
                      pathname.startsWith(href)
                        ? "bg-[var(--color-ocean-light)] text-[var(--color-ocean)]"
                        : "text-[var(--color-ink)] hover:bg-slate-50"
                    }`}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}

              <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
                <Link
                  href="https://dealer.microf.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 rounded-xl text-base text-[var(--color-ink-70)] hover:bg-slate-50 transition-colors"
                >
                  Contractor Login
                </Link>
                <Link
                  href="https://www2.invoicecloud.com/portal/(S(wcmspbjk50cjqde0hyhoigxx))/2/Site.aspx?G=b10c55d7-88b2-484c-bfc4-f48f61972472"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 rounded-xl text-base text-[var(--color-ink-70)] hover:bg-slate-50 transition-colors"
                >
                  Make a Payment
                </Link>
              </div>
            </nav>

            <div className="p-6 border-t border-slate-100">
              <Link
                href="https://dealer.microf.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[var(--color-ember)] hover:bg-[var(--color-ember-dark)] text-white font-semibold py-4 rounded-full transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
