import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-ember)] text-white hover:bg-[var(--color-ember-dark)] hover:-translate-y-0.5 focus-visible:ring-[var(--color-ember)] shadow-[0_0_0_0_transparent] hover:shadow-[0_8px_32px_rgba(232,98,26,0.35)]",
        outline:
          "border border-white/30 bg-white/10 text-white backdrop-blur hover:border-white/60 hover:bg-white/20 focus-visible:ring-white/40",
        ghost:
          "text-[var(--color-ocean)] hover:bg-[var(--color-ocean-light)] focus-visible:ring-[var(--color-ocean)]",
        secondary:
          "bg-[var(--color-mint)] text-white hover:bg-[var(--color-mint-dark)] hover:-translate-y-0.5 focus-visible:ring-[var(--color-mint)]",
      },
      size: {
        default: "h-10 px-6 py-2 text-sm rounded-full",
        sm: "h-8 px-4 text-xs rounded-full",
        lg: "h-12 px-8 text-base rounded-full",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
