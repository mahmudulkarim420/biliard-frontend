import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import SubPageLayout from "@/layouts/SubPageLayout";
import img from "@/assets/Rectangle 14.png";
import FaqContact from "../HomePage2/Sections/FaqContact";
import PricingSection from "../HomePage2/Sections/PricingSection";
import Partners from "../AboutPage/Sections/Partners";
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
    if (!isInView) {
      return;
    }

    const controls = animate(count, numericValue, {
      duration,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [count, duration, isInView, numericValue]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const ServiceDetails = () => {
  return (
    <SubPageLayout title="Service Details" breadcrumb="Home / Service Details">
      <div className="service-details-page-standardized">
        
        {/* Detail Content Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            
            {/* ── Header & Text Area ── */}
            <div className="mb-20">
              {/* Eyebrow Label */}
              <span className="text-brand text-[12px] font-bold tracking-[0.2em] uppercase mb-4 block">
                Brand Strategy & Art Direction
              </span>
              
              {/* Main Title */}
              <h2 className="text-[38px] md:text-[54px] font-extrabold text-title mb-12 max-w-[800px] leading-[1.1] tracking-tight">
                We Offer wide range <br className="hidden md:block" /> of brand identity
              </h2>
              
              {/* Two Column Layout: Paragraphs & List */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* Left: Paragraphs */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  <p className="text-desc text-[16px] leading-[1.8]">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
                    established fact that a reader will be by the readable content of a page when looking at the Creative Director 
                    and development team to blend user needs.
                  </p>
                  <p className="text-desc text-[16px] leading-[1.8]">
                    Business goals into seamless, effective design experiences. You will need to demonstrate a fundamental 
                    understanding of design principles, an openness to learn and take direction, along with a strong.
                  </p>
                </div>

                {/* Right: Feature List */}
                <div className="lg:col-span-5 lg:pl-10 flex flex-col gap-4">
                  {serviceList.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <span className="text-title font-bold text-lg transition-colors group-hover:text-brand">+</span>
                      <span className="font-bold text-title text-[16px] transition-colors group-hover:text-brand">{item}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* ── Banner Image with Text Overlay ── */}
            <div className="relative rounded-[16px] overflow-hidden mb-24 group">
              <img 
                src={img} 
                alt="Digital Team Collaboration" 
                className="w-full h-[400px] md:h-[500px] object-cover grayscale brightness-50 transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center p-6 text-center z-10 pointer-events-none">
                <h3 className="text-white text-[28px] md:text-[54px] font-bold max-w-[650px] leading-[1.4] tracking-tight">
                  You’ll support the execution of graphic and digital design projects
                </h3>
              </div>
            </div>

            {/* ── Stats Section (Outline Style) ── */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center md:items-start group">
                  
                  {/* Outline Number */}
                  <h3 
                    className="mb-5 text-[54px] md:text-[64px] font-black tracking-wide text-transparent leading-none transition-opacity duration-300 group-hover:opacity-70"
                    style={{ 
                      WebkitTextStroke: "1px #ff3b30", // ব্র্যান্ড কালার 
                      fontFamily: 'var(--font-title, sans-serif)'
                    }}
                  >
                    <StatsCounter value={stat.number} />
                  </h3>
                  
                  {/* Label */}
                  <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-5">
                    {stat.label}
                  </span>

                  {/* Bottom Divider */}
                  <div className="w-full h-[1px] bg-gray-200 relative overflow-hidden">
                     {/* Hover Animated Line */}
                     <div className="absolute inset-0 bg-[#ff3b30] -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>

      </div>
      <FaqContact/>
      <PricingSection/>
      <Partners/>
    </SubPageLayout>
  );
};

export default ServiceDetails;
