import Link from "next/link";

const COMPLIANCE = `The advertised service is lease-to-own or a rental- or lease-purchase agreement provided by Microf, LLC, or its affiliates. Acquiring ownership by leasing costs more than the retailer's cash price. Leasing available on select items at participating locations only. Not available in AK, HI, ME, MN, NJ, VT, WI, WY.`;

type FooterLink = { href: string; label: string; external?: boolean };

const footerLinks: Record<string, FooterLink[]> = {
  Homeowners: [
    { href: "/homeowners", label: "How It Works" },
    { href: "/homeowners/hvac", label: "HVAC Financing" },
    { href: "/homeowners/water-heaters", label: "Water Heater Financing" },
    { href: "https://dealer.microf.com/", label: "Apply Now", external: true },
    { href: "https://dealer.microf.com/payment", label: "Make a Payment", external: true },
  ],
  Contractors: [
    { href: "/contractors", label: "Partner With Us" },
    { href: "https://dealer.microf.com/", label: "Dealer Portal", external: true },
    { href: "/contractors#enroll", label: "Enrollment" },
  ],
  Company: [
    { href: "/about", label: "About Microf" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Use" },
  ],
};

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/microf",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/microf",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/microf",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/microf",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@microf",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-ocean)] text-white" role="contentinfo">
      {/* Main footer grid */}
      <div className="container-tight py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-[6px] bg-[var(--color-ember)] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" aria-hidden="true">
                  <path d="M3 12L12 3L21 12V21H15V15H9V21H3V12Z" fill="currentColor" />
                </svg>
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                microf
              </span>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed mb-5 max-w-xs">
              Flexible lease-to-own financing for HVAC systems and water heaters. No credit check required. Serving homeowners and contractors across 43 states.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(({ name, href, icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-slate-300 hover:text-white"
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* Association logos */}
            <div className="mt-6">
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-3">Industry Memberships</p>
              <div className="flex flex-wrap gap-2">
                {["ACCA", "HARDI", "EGIA", "AHR", "BBB"].map((org) => (
                  <span
                    key={org}
                    className="px-2.5 py-1 rounded text-xs font-semibold bg-white/10 text-slate-300 border border-white/10"
                    title={`${org} Member`}
                  >
                    {org}
                  </span>
                ))}
                <span className="px-2.5 py-1 rounded text-xs font-semibold bg-white/10 text-slate-300 border border-white/10" title="Women in HVACR Member">
                  W-HVACR
                </span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4" style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.08em" }}>
                {group}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {links.map(({ href, label, external }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="text-sm text-slate-300 hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Support bar */}
      <div className="border-t border-white/10">
        <div className="container-tight py-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Consumer Support</p>
              <a href="tel:8556427631" className="text-white font-semibold hover:text-[var(--color-ember)] transition-colors">
                855-642-7631
              </a>
            </div>
            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Contractor Support</p>
              <a href="tel:8554988200" className="text-white font-semibold hover:text-[var(--color-mint)] transition-colors">
                855-498-8200
              </a>
            </div>
            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Hours</p>
              <p className="text-sm text-slate-300">Mon–Fri 8AM–8PM · Sat 9AM–2PM EST</p>
            </div>
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="container-tight py-6">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-start lg:justify-between">
            <div className="flex-1">
              <p className="text-xs text-slate-400 leading-relaxed max-w-3xl">
                {COMPLIANCE}
              </p>
            </div>
            <div className="flex-shrink-0 text-right">
              <p className="text-xs text-slate-400">NMLS ID 1817969</p>
              <p className="text-xs text-slate-500 mt-0.5">
                2849 Paces Ferry Rd SE, Suite 625<br />
                Atlanta, GA 30339
              </p>
              <p className="text-xs text-slate-500 mt-2">
                © {new Date().getFullYear()} Microf, LLC. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
