// ─── External Libraries ──────────────────────────────────────────────────────
import React from "react";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────
// Extends the native button element to support an optional visual variant.
interface DiscoverMoreBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "solid" | "outline";
}

// ─── Component ────────────────────────────────────────────────────────────────
// Reusable CTA button with a slide-up hover fill effect.
// - "solid"   → brand-red fill, semi-transparent dark overlay on hover.
// - "outline" → transparent with brand border; fills solid brand on hover.
const DiscoverMoreBtn: React.FC<DiscoverMoreBtnProps> = ({
  className,
  variant = "solid",
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        "group relative overflow-hidden px-8 py-4 text-[13px] font-bold uppercase tracking-widest transition-all duration-300 active:scale-95",
        variant === "solid"
          ? "bg-brand text-white shadow-lg shadow-brand/20 hover:shadow-brand/40"
          : "border-2 border-brand text-brand hover:text-white",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children || "Discover More"}</span>

      {/* Slide-up fill overlay — creates the premium hover reveal effect */}
      <div
        className={cn(
          "absolute inset-0 z-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0",
          variant === "solid" ? "bg-black/10" : "bg-brand"
        )}
      />
    </button>
  );
};

export default DiscoverMoreBtn;
