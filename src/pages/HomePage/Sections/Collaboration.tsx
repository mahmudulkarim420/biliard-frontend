// ─── External Libraries ──────────────────────────────────────────────────────
import { Award } from "lucide-react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

// ─── Local Assets ─────────────────────────────────────────────────────────────
import bg from "@/assets/img (12).png";
import bgPattern from "@/assets/over (2).png";
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
//          image panel with a floating award badge and a dashed step-by-step list.
const Collaboration = () => {
  return (
    <section className="relative w-full overflow-hidden bg-neutral-950 section-padding pb-0">

      {/* ── Background Image Pattern ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={bgPattern}
          alt="Background Texture Pattern"
          className="h-full w-full object-cover opacity-20 mix-blend-overlay grayscale"
        />
      </div>

      {/* ── Background Decorations ── */}
      {/* Dot-grid pattern and two blurred radial glows for depth */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-60"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.1) 2px, transparent 2px)`,
          backgroundSize: "30px 30px",
          backgroundPosition: "0 0",
        }}
      />
      <div className="pointer-events-none absolute -right-40 top-0 h-150 w-150 rounded-full bg-white/2 blur-[100px] z-0" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-125 w-125 rounded-full bg-white/2 blur-[100px] z-0" />

      {/* ── Part 1: Animated Stat Counters ── */}
      <div className="relative z-10 mx-auto max-w-300 xl:max-w-[1280px] 2xl:max-w-[1440px] px-5 md:px-8 xl:px-0 pb-20 md:pb-28">
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-4 md:gap-x-8 xl:gap-x-16">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center md:items-start md:text-left">
              <h3
                className="mb-3 text-[46px] md:text-[60px] lg:text-[75px] xl:text-[96px] 2xl:text-[110px] font-light tracking-wide text-transparent"
                style={{
                  WebkitTextStroke: "1px #ff3b30",
                  fontFamily: 'var(--font-title)'
                }}
              >
                <Counter value={stat.number} />
              </h3>
              <p className="text-[10px] md:text-[11px] xl:text-[14px] font-bold uppercase mt-2 md:mt-3 tracking-[0.2em] text-gray-400">
                {stat.label}
              </p>
              <div className="mt-4 md:mt-5 hidden h-px w-full bg-gray-800 md:block" />
            </div>
          ))}
        </div>
      </div>

      {/* ── Part 2: Full-Bleed White Card ── */}
      {/* Intentionally breaks out of the max-width container to extend flush left. */}
      <div className="relative z-20 flex w-full max-w-362 mr-auto flex-col overflow-visible bg-white shadow-2xl lg:flex-row">

        {/* Left panel: grayscale image + floating award badge */}
        <div className="relative w-full min-h-100 lg:w-[45%] lg:min-h-auto">
          <img
            src={bg}
            alt="Team collaborating in office"
            className="absolute inset-0 h-full w-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black/5" />

          {/* Floating brand-colored award card — protrudes to the right on desktop */}
          <div className="absolute bottom-0 right-0 z-20 flex aspect-square w-55 flex-col items-center justify-center bg-brand p-6 text-center text-white shadow-2xl lg:bottom-24 lg:-right-7.5 lg:w-65">
            <div>
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.0292 54.3418L3.125 75.0001L18.75 78.1251L25 96.8751L41.4333 70.8001" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M79.9708 54.3418L96.875 75.0001L81.25 78.1251L75 96.8751L58.5667 70.8001" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.625 37.5C15.625 46.6167 19.2466 55.3604 25.6932 61.8067C32.1397 68.2533 40.8832 71.875 50 71.875C59.1167 71.875 67.8604 68.2533 74.3067 61.8067C80.7533 55.3604 84.375 46.6167 84.375 37.5C84.375 28.3832 80.7533 19.6397 74.3067 13.1932C67.8604 6.74662 59.1167 3.125 50 3.125C40.8832 3.125 32.1397 6.74662 25.6932 13.1932C19.2466 19.6397 15.625 28.3832 15.625 37.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M52.2125 17.8828L57.4125 28.1245H66.275C66.7629 28.1126 67.2429 28.2482 67.6525 28.5135C68.0621 28.7788 68.3821 29.1615 68.5708 29.6117C68.7596 30.0618 68.8079 30.5583 68.7096 31.0364C68.6117 31.5144 68.3717 31.9517 68.0208 32.2912L59.8833 40.2829L64.3917 50.6372C64.5904 51.1113 64.6354 51.6359 64.5196 52.1367C64.4042 52.638 64.1342 53.0901 63.7479 53.4292C63.3617 53.7688 62.8783 53.978 62.3667 54.028C61.855 54.078 61.3404 53.9659 60.8958 53.708L50 47.5788L39.1042 53.708C38.6596 53.9659 38.1451 54.078 37.6333 54.028C37.1216 53.978 36.6385 53.7688 36.2522 53.4292C35.8659 53.0901 35.5959 52.638 35.4804 52.1367C35.3649 51.6359 35.4097 51.1113 35.6084 50.6372L40.1167 40.2829L31.9792 32.2745C31.6286 31.9351 31.3885 31.4977 31.2904 31.0197C31.1922 30.5416 31.2407 30.0451 31.4292 29.595C31.6178 29.1449 31.9379 28.7622 32.3474 28.4968C32.757 28.2315 33.2372 28.0959 33.725 28.1078H42.5875L47.7917 17.8828C48.0042 17.4808 48.3221 17.1442 48.7117 16.9095C49.1012 16.6748 49.5475 16.5508 50.0021 16.5508C50.4571 16.5508 50.9029 16.6748 51.2925 16.9095C51.6821 17.1442 52 17.4808 52.2125 17.8828Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

            </div>
            <h4 className="text-[18px] text-white font-semibold leading-snug lg:text-[26px]">
              2016 Best agency
              <br />
              Awards Winner
            </h4>
          </div>
        </div>

        {/* Right panel: section copy + dashed vertical stepper */}
        <div className="w-full bg-white px-6 py-12 md:px-12 md:py-16 lg:w-[55%] lg:py-24 lg:pl-32 lg:pr-24 xl:pl-40 xl:py-32 2xl:pl-48">
          <p className="mb-4 text-[11px] md:text-[13px] xl:text-[14px] font-bold uppercase tracking-[0.2em] text-brand text-center lg:text-left">
            COLLABORATION
          </p>
          <h2 className="mb-10 md:mb-14 text-[20px] md:text-[20px] lg:max-w-[300px] lg:text-[35px] xl:text-[54px] text-center lg:text-left font-bold leading-[1.1] text-title tracking-tight max-w-full md:max-w-[800px] xl:max-w-[900px] mx-auto lg:mx-0">
            Help You Grow Your
            <br className="hidden xl:block" />
            Business
          </h2>

          {/* Dashed vertical connector running behind the step number circles */}
          <div className="relative flex flex-col gap-8 md:gap-10 xl:gap-12">
            <div className="absolute bottom-5 left-5 top-5 w-px border-l-[1.5px] border-dashed border-gray-300" />

            {steps.map((step, index) => (
              <div key={index} className="group relative z-10 flex gap-5 md:gap-6 xl:gap-8">
                {/* Numbered circle — highlights to brand color on hover */}
                <div className="flex h-10 w-10 xl:h-12 xl:w-12 shrink-0 items-center justify-center rounded-full border-[1.5px] border-gray-300 bg-white text-[13px] xl:text-[15px] font-bold text-gray-500 transition-colors duration-300 group-hover:border-brand group-hover:text-brand">
                  {step.num}
                </div>
                <div>
                  <h4 className="mb-2 text-[16px] md:text-[18px] xl:text-[22px] font-bold text-title transition-colors duration-300 group-hover:text-brand">
                    {step.title}
                  </h4>
                  <p className="text-[14px] xl:text-[16px] leading-relaxed text-desc max-w-sm xl:max-w-md">
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