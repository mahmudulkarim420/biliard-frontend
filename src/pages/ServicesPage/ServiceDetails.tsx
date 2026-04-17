import { useEffect, useRef } from "react";
import { useParams, Navigate } from "react-router-dom";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import SubPageLayout from "@/layouts/SubPageLayout";
import img from "@/assets/Rectangle 14.png";
import FaqContact from "../HomePage2/Sections/FaqContact";
import PricingSection from "../HomePage2/Sections/PricingSection";
import Partners from "../AboutPage/Sections/Partners";

// ─── Services Map ─────────────────────────────────────────────────────────────
// Keyed by the id used in ServiceGrid (e.g. "01", "02", …)
const servicesMap: Record<string, { label: string; title: string }> = {
  "01": { label: "Brand Strategy & Art Direction", title: "We craft powerful brands\nthat leave a lasting impression" },
  "02": { label: "UI/UX & Web Design", title: "Beautiful interfaces designed\nfor humans, not machines" },
  "03": { label: "App Development", title: "Mobile-first apps built\nfor performance & scale" },
  "04": { label: "Web & App Development", title: "Full-stack solutions that\ndrive real business results" },
  "05": { label: "Creative Design & Art Direction", title: "Visual storytelling that\ncaptivates and converts" },
  "06": { label: "SEO & Business Analysis", title: "Data-driven strategies that\ngrow your online presence" },
  "07": { label: "Brand Strategy & Art Direction", title: "We offer a wide range\nof brand identity services" },
  "08": { label: "Brand Guideline & Support", title: "Consistent brand systems\nyour team can rely on" },
};

// ─── Static Data ──────────────────────────────────────────────────────────────
const serviceList = [
  "Web Design & Development",
  "Creative Design",
  "App Design",
  "Business Analysis"
];

const stats = [
  { number: "05+", label: "YEARS OF EXPERIENCE" },
  { number: "24+", label: "SATISFIED CLIENTS" },
  { number: "90", label: "PROJECTS COMPLETED" },
  { number: "03+", label: "WINNING AWARDS" },
];

interface StatsCounterProps {
  value: string;
  duration?: number;
}

const StatsCounter = ({ value, duration = 2.5 }: StatsCounterProps) => {
  const count = useMotionValue(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const numericValue = Number.parseInt(value.replace(/[^\d]/g, ""), 10);
  const hasPlus = value.includes("+");
  const hasLeadingZero = /^0\d/.test(value);

  const displayValue = useTransform(count, (latest) => {
    const rounded = Math.round(latest);
    const formatted = hasLeadingZero && rounded < 10 ? `0${rounded}` : `${rounded}`;
    return hasPlus ? `${formatted}+` : formatted;
  });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, numericValue, { duration, ease: "easeOut" });
    return () => controls.stop();
  }, [count, duration, isInView, numericValue]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const ServiceDetails = () => {
  const { id } = useParams<{ id: string }>();

  // Guard: redirect to /services if id is unknown
  if (!id || !servicesMap[id]) {
    return <Navigate to="/services" replace />;
  }

  return (
    <SubPageLayout
      title={'Services Single'}
      breadcrumb={`Home / Services / Services Single`}
    >
      <div className="service-details-page-standardized">

        {/* Detail Content Section */}
        <section className="section-padding bg-white">
          <div className="max-w-300 mx-auto xl:max-w-[1280px] 2xl:max-w-[1440px] px-5 md:px-8 xl:px-0">

            {/* ── Header & Text Area ── */}
            <div className="mb-16 md:mb-20 xl:mb-24">
              {/* Eyebrow Label */}
              <span className="text-brand text-[12px] md:text-[14px] xl:text-[16px] font-bold tracking-[0.1em] uppercase mb-4 block text-center lg:text-left">
                Brand strategy & art direction
              </span>

              {/* Main Title — dynamic per service */}
              <h2 className="text-[38px] md:text-[30px] lg:max-w-[400px] lg:text-[40px] xl:max-w-[500px] xl:text-[54px]  font-bold text-title mb-8 md:mb-12 leading-[1.1] tracking-tight text-center lg:text-left mx-auto lg:mx-0">

                We Offer wide range
                of brand identity
              </h2>

              {/* Two Column Layout: Paragraphs & List */}
              <div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-12 xl:gap-16 items-start">

                {/* Left: Paragraphs */}
                <div className="lg:col-span-7 flex flex-col gap-6 xl:gap-8 text-center lg:text-left">
                  <p className="text-desc text-[16px] md:text-[18px] xl:text-[20px] 2xl:text-[22px] leading-[1.8]">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at
                    established fact that a reader will be by the readable content of a page when looking at the Creative Director
                    and development team to blend user needs.
                  </p>
                  <p className="text-desc text-[16px] md:text-[18px] xl:text-[20px] 2xl:text-[22px] leading-[1.8]">
                    Business goals into seamless, effective design experiences. You will need to demonstrate a fundamental
                    understanding of design principles, an openness to learn and take direction, along with a strong.
                  </p>
                </div>

                {/* Right: Feature List */}
                <div className="lg:col-span-5 lg:pl-10 grid grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6 lg:gap-4 text-left mx-auto lg:mx-0 w-full md:w-auto">
                  {serviceList.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <span className="text-title font-semibold text-[18px] xl:text-[22px] transition-colors group-hover:text-brand">+</span>
                      <span className="font-semibold text-title text-[16px] md:text-[18px] xl:text-[20px] transition-colors group-hover:text-brand">{item}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* ── Banner Image with Text Overlay ── */}
            <div className="relative rounded-xl overflow-hidden mb-16 md:mb-24 group w-full mx-auto">
              <img
                src={img}
                alt="Digital Team Collaboration"
                className="w-full h-[300px] md:h-[450px] lg:h-[500px] xl:h-[650px] 2xl:h-[750px] object-cover grayscale brightness-50 transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center p-6 md:p-10 text-center z-10 pointer-events-none">
                <h3 className="text-white text-[28px] md:text-[44px] lg:text-[54px] xl:text-[64px] 2xl:text-[72px] font-bold max-w-full md:max-w-[800px] xl:max-w-[1000px] leading-[1.4] tracking-tight">
                  You'll support the execution of <br className="hidden xl:block" /> graphic and digital design projects
                </h3>
              </div>
            </div>

            {/* ── Stats Section (Outline Style) ── */}
            <div className="grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-4 md:gap-8 xl:gap-16 w-full mx-auto">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center md:items-start group">

                  {/* Outline Number */}
                  <h3
                    className="mb-3 md:mb-5 text-[46px] md:text-[60px] lg:text-[80px] xl:text-[96px] 2xl:text-[110px] font-black tracking-wide text-transparent leading-none transition-opacity duration-300 group-hover:opacity-70"
                    style={{
                      WebkitTextStroke: "1px #ff3b30",
                      fontFamily: 'var(--font-title, sans-serif)'
                    }}
                  >
                    <StatsCounter value={stat.number} />
                  </h3>

                  {/* Label */}
                  <span className="text-[10px] md:text-[11px] xl:text-[13px] 2xl:text-[14px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-3 md:mb-5">
                    {stat.label}
                  </span>

                  {/* Bottom Divider */}
                  <div className="w-full h-px bg-gray-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-brand -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>

      </div>
      <FaqContact />
      <PricingSection />
      <Partners />
    </SubPageLayout>
  );
};

export default ServiceDetails;
