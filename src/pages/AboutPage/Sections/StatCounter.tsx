import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import bgMain from "@/assets/over (1).png";

// ─── Types ────────────────────────────────────────────────────────────────────
interface StatItem {
  number: string;
  label: string;
}

interface CounterProps {
  value: string;
  duration?: number;
}

// ─── Static Data ──────────────────────────────────────────────────────────────
const stats: StatItem[] = [
  { number: "05+", label: "YEARS OF EXPERIENCE" },
  { number: "24+", label: "SATISFIED CLIENTS" },
  { number: "90", label: "PROJECTS COMPLETED" },
  { number: "03+", label: "WINNING AWARDS" },
];

// ─── Counter Sub-Component ────────────────────────────────────────────────────
const Counter = ({ value, duration = 2.5 }: CounterProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    const num = Math.round(latest);
    const formattedNum = num < 10 && value.startsWith("0") ? `0${num}` : num;
    return value.includes("+") ? `${formattedNum}+` : `${formattedNum}`;
  });

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const target = parseInt(value.replace(/[^\d]/g, ""), 10);
      const controls = animate(count, target, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, value, count, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

// ─── Main Component ───────────────────────────────────────────────────────────
const StatCounter = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0f] section-padding">
      
      {/* ── Background Image Layer ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={bgMain} 
          alt="Background Texture" 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay grayscale"
        />
      </div>

      {/* ── Background Decorations ── */}
      {/* Dot Pattern Overlay (Sits on top of the image for extra texture) */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px"
        }}
      />
      {/* Dark Overlay to ensure text readability */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0f]/80 pointer-events-none" />

      {/* Plus Sign Decoration */}
      <div className="absolute right-[10%] top-[30%] z-0 text-[#ffffff10] text-6xl font-thin pointer-events-none">
        +
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-300 xl:max-w-[1280px] 2xl:max-w-[1440px] px-5 md:px-8 xl:px-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center md:items-start group">
              
              {/* Animated Outline Number */}
              <h3
                className="mb-6 text-[56px] md:text-[64px] lg:text-[75px] font-black tracking-wide text-transparent leading-none"
                style={{ 
                  WebkitTextStroke: "1px #ff3b30",
                  fontFamily: 'var(--font-title, sans-serif)'
                }}
              >
                <Counter value={stat.number} />
              </h3>

              {/* Label */}
              <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-gray-300">
                {stat.label}
              </p>

              {/* Bottom Subtle Line */}
              <div className="mt-8 h-px w-full bg-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-brand -translate-x-full group-hover:translate-x-[0%] transition-transform duration-700 ease-in-out" />
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatCounter;