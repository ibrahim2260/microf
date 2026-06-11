import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "outline" | "mint" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  "aria-label"?: string;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-[var(--color-ember)] hover:bg-[var(--color-ember-dark)] text-white hover:shadow-[var(--shadow-ember)] hover:-translate-y-0.5",
  secondary:
    "bg-[var(--color-ocean)] hover:bg-[var(--color-ocean-80)] text-white hover:shadow-[var(--shadow-warm-lg)] hover:-translate-y-0.5",
  outline:
    "border-2 border-[var(--color-ocean)] text-[var(--color-ocean)] hover:bg-[var(--color-ocean)] hover:text-white",
  mint:
    "bg-[var(--color-mint)] hover:bg-[var(--color-mint-dark)] text-white hover:shadow-[var(--shadow-mint)] hover:-translate-y-0.5",
  ghost:
    "text-[var(--color-ocean)] hover:bg-[var(--color-ocean-light)]",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  children,
  className = "",
  type = "button",
  disabled,
  onClick,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ember)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const classes = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
