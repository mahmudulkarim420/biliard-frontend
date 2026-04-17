// ─── External Libraries ──────────────────────────────────────────────────────
import { Check, X } from "lucide-react";

// ─── Local Assets ─────────────────────────────────────────────────────────────
import cardShapeImg from "@/assets/bg (7).png";
import bgPattern from "@/assets/over (3).png";
// ─── Types ────────────────────────────────────────────────────────────────────
interface PlanFeature {
  text: string;
  active: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  features: PlanFeature[];
}

// ─── Static Data ──────────────────────────────────────────────────────────────
const pricingPlans: PricingPlan[] = [
  {
    name: "Basic Plan",
    price: "49",
    features: [
      { text: "Website Design", active: true },
      { text: "Web Development", active: true },
      { text: "Design Consulting", active: false },
      { text: "24/7 Support", active: false },
    ],
  },
  {
    name: "Popular Plan",
    price: "69",
    features: [
      { text: "Website Design", active: true },
      { text: "Web Development", active: true },
      { text: "Design Consulting", active: false },
      { text: "24/7 Support", active: false },
    ],
  },
  {
    name: "Business Plan",
    price: "89",
    features: [
      { text: "Website Design", active: true },
      { text: "Web Development", active: true },
      { text: "Design Consulting", active: false },
      { text: "24/7 Support", active: false },
    ],
  },
];

interface PricingSectionProps {
  showBackground?: boolean;
}

// ─── Component ────────────────────────────────────────────────────────────────
// Three-column pricing cards on a light grey background. Each card lifts on
// hover and reveals a brand-colored bottom bar via a scale-x animation.
// High-quality repeating background pattern overlay.
const PricingSection = ({ showBackground = true }: PricingSectionProps) => {
  return (
    <section className="relative w-full section-padding bg-[#F3F3F3] overflow-hidden">

      {/* ── Background Pattern Overlay ── */}
      {showBackground && (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-100">
          <img
            src={bgPattern}
            alt="background pattern"
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <div className="mx-auto max-w-300 xl:max-w-[1280px] 2xl:max-w-[1440px] px-5 md:px-8 xl:px-0 relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center mb-16 xl:mb-20">
          <p className="mb-4 text-[11px] md:text-[12px] xl:text-[14px] font-bold uppercase tracking-[0.1em] text-brand">
            PRICING PLANS
          </p>
          <h2 className="text-[20px] md:text-[30] lg:text-[40px] xl:text-[54px] font-extrabold text-title tracking-tight">
            Choose The Best Plan
          </h2>
        </div>

        {/* ── Pricing Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-14 2xl:gap-16">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="relative bg-white pt-16 pb-14 px-10 shadow-[0_15px_60px_-15px_rgba(0,0,0,0.06)] rounded-sm flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group overflow-hidden"
            >
              {/* Top-right decorative shape image */}
              <img
                src={cardShapeImg}
                alt=""
                className="absolute -top-20 right-0 w-150 h-150 object-cover object-top-right pointer-events-none z-0"
              />

              {/* Brand-colored bottom bar — animates in on hover via scale-x */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-brand transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 z-10" />

              {/* Plan name */}
              <h3 className="text-[20px] xl:text-[24px] 2xl:text-[28px] font-bold text-title mb-10 xl:mb-12 relative z-10">
                {plan.name}
              </h3>

              {/* Price display */}
              <div className="flex items-start justify-center text-title mb-2 relative z-10">
                <span className="text-[22px] xl:text-[28px] font-bold mt-3 xl:mt-4 mr-1">$</span>
                <span className="text-[85px] xl:text-[100px] 2xl:text-[110px] font-black leading-none tracking-tight">
                  {plan.price}
                </span>
              </div>
              <p className="text-[13px] xl:text-[15px] font-bold text-desc mb-12 xl:mb-16 relative z-10">
                Per Month
              </p>

              {/* Feature checklist — active items show a green check, inactive show a red cross */}
              <div className="w-full flex flex-col gap-5 mb-14 relative z-10">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3.5">
                    {feature.active ? (
                      <Check className="h-4 w-4 xl:h-5 xl:w-5 text-[#22c55e] stroke-[4px]" />
                    ) : (
                      <X className="h-4 w-4 xl:h-5 xl:w-5 text-brand stroke-[4px]" />
                    )}
                    <span className="text-[14px] xl:text-[16px] font-bold text-desc">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA button */}
              <button className="w-full bg-brand py-4 xl:py-5 px-6 text-[13px] xl:text-[15px] font-bold text-white uppercase tracking-widest transition-all duration-300 hover:bg-black shadow-lg shadow-brand/20 hover:shadow-black/20 rounded-md relative z-10">
                Get Started
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PricingSection;