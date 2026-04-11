// ─── External Libraries ──────────────────────────────────────────────────────
import { Award } from "lucide-react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

// ─── Local Assets ─────────────────────────────────────────────────────────────
import bg from "@/assets/img (12).png";

// ─── Types ────────────────────────────────────────────────────────────────────
interface StatItem {
  number: string;
  label: string;
}

interface StepItem {
  num: string;
  title: string;
  desc: string;
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

const steps: StepItem[] = [
  {
    num: "01",
    title: "Time for lead Research, Work",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at.",
  },
  {
    num: "02",
    title: "Guaranteed Quality Control",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at.",
  },
  {
    num: "03",
    title: "Business Opportunities",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at.",
  },
];

// ─── Counter Sub-Component ────────────────────────────────────────────────────
// Animates a numeric string from 0 to its target value using Framer Motion's
// `animate` helper. The animation only fires once the element enters the viewport.
// Supports both plain numbers and numbers with a "+" suffix (e.g. "24+").
const Counter = ({ value, duration = 2 }: CounterProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    const num = Math.round(latest);
    return value.includes("+") ? `${num}+` : `${num}`;
  });

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      const target = parseInt(value.replace(/[^\d]/g, ""), 10);
      const controls = animate(count, target, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, value, count, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

// ─── Component ────────────────────────────────────────────────────────────────
// Two-part dark section:
// Part 1 — Four animated stat counters on the dark background.
// Part 2 — A full-bleed white card flush to the left edge, containing an
//           image panel with a floating award badge and a dashed step-by-step list.
const Collaboration = () => {
  return (
    <section className="relative w-full overflow-hidden bg-neutral-950 pt-[70px]">

      {/* ── Background Decorations ── */}
      {/* Dot-grid pattern and two blurred radial glows for depth */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.1) 2px, transparent 2px)`,
          backgroundSize: "30px 30px",
          backgroundPosition: "0 0",
        }}
      />
      <div className="pointer-events-none absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-white/[0.02] blur-[100px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-white/[0.02] blur-[100px]" />

      {/* ── Part 1: Animated Stat Counters ── */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 sm:px-12 lg:px-2 pb-[110px]">
        <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4 gap-x-4 lg:gap-x-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center md:items-start md:text-left">
              <h3
                className="mb-3 text-5xl font-light tracking-wide text-transparent sm:text-6xl lg:text-[75px]"
                style={{ WebkitTextStroke: "1.5px hsl(var(--brand))" }}
              >
                <Counter value={stat.number} />
              </h3>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                {stat.label}
              </p>
              <div className="mt-5 hidden h-[1px] w-10 bg-gray-800 md:block" />
            </div>
          ))}
        </div>
      </div>

      {/* ── Part 2: Full-Bleed White Card ── */}
      {/* Intentionally breaks out of the max-width container to extend flush left. */}
      <div className="relative z-20 flex w-full max-w-[1450px] mr-auto flex-col overflow-visible bg-white shadow-2xl lg:flex-row">

        {/* Left panel: grayscale image + floating award badge */}
        <div className="relative w-full min-h-[400px] lg:w-[45%] lg:min-h-auto">
          <img
            src={bg}
            alt="Team collaborating in office"
            className="absolute inset-0 h-full w-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black/5" />

          {/* Floating brand-colored award card — protrudes to the right on desktop */}
          <div className="absolute bottom-0 right-0 z-20 flex aspect-square w-[220px] flex-col items-center justify-center bg-brand p-6 text-center text-white shadow-2xl lg:bottom-24 lg:right-[-30px] lg:w-[260px]">
            <div className="relative mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-white/30">
              <Award className="h-10 w-10 text-white" />
              {/* Dashed ring that spins continuously */}
              <div className="absolute inset-[-6px] rounded-full border border-dashed border-white/50 animate-[spin_20s_linear_infinite]" />
            </div>
            <h4 className="text-[18px] font-bold leading-snug lg:text-xl">
              2016 Best agency
              <br />
              Awards Winner
            </h4>
          </div>
        </div>

        {/* Right panel: section copy + dashed vertical stepper */}
        <div className="w-full bg-white px-8 py-16 sm:px-16 lg:w-[55%] lg:py-24 lg:pl-32 lg:pr-24">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-brand">
            COLLABORATION
          </p>
          <h2 className="mb-14 text-4xl font-bold leading-[1.1] text-gray-900 md:text-5xl lg:text-[54px] tracking-tight">
            Help You Grow Your
            <br />
            Business
          </h2>

          {/* Dashed vertical connector running behind the step number circles */}
          <div className="relative flex flex-col gap-10">
            <div className="absolute bottom-[20px] left-[19px] top-[20px] w-px border-l-[1.5px] border-dashed border-gray-300" />

            {steps.map((step, index) => (
              <div key={index} className="group relative z-10 flex gap-6 sm:gap-8">
                {/* Numbered circle — highlights to brand color on hover */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[1.5px] border-gray-300 bg-white text-[13px] font-bold text-gray-500 transition-colors duration-300 group-hover:border-brand group-hover:text-brand">
                  {step.num}
                </div>
                <div>
                  <h4 className="mb-2 text-[16px] font-bold text-gray-900 transition-colors duration-300 group-hover:text-brand">
                    {step.title}
                  </h4>
                  <p className="text-[14px] leading-relaxed text-gray-500 max-w-sm">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Collaboration;