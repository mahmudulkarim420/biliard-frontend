// ─── Local Assets ─────────────────────────────────────────────────────────────
import bgMain from "@/assets/bg (4).png";
import redAccents from "@/assets/bg (6).png";

// ─── Local Components ─────────────────────────────────────────────────────────
import DiscoverMoreBtn from "@/components/shared/DiscoverMoreBtn";

// ─── Component ────────────────────────────────────────────────────────────────
// Full-viewport hero section for the Home 2 page variant. Built with three
// stacked absolute layers: a grayscale photo base, brand-colored red shape
// accents, and subtle diagonal decorative lines — all below the centered
// text content.
const Hero = () => {
  return (
    <section className="relative w-full min-h-125 md:min-h-162 lg:min-h-212 flex items-center justify-center overflow-hidden bg-[#09090b] section-padding-h2">

      {/* ── Layer 1: Grayscale base photo ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgMain}
          alt="Team collaboration"
          className="h-full w-full object-cover grayscale contrast-125 brightness-75 opacity-30 md:opacity-80 transition-opacity duration-700"
        />

      </div>

      {/* ── Layer 2: Brand red shape accents ── */}
      {/* Uses mix-blend-screen so the shapes interact with the image below */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <img
          src={redAccents}
          alt="Brand accents"
          className="h-full w-full object-cover mix-blend-screen opacity-90 scale-110 sm:scale-105"
        />
      </div>

      {/* ── Layer 3: Diagonal line pattern ── */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-10 md:opacity-20 transition-opacity">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="-10" y1="20" x2="30" y2="-10" stroke="white" strokeWidth="0.05" />
          <line x1="70" y1="110" x2="110" y2="70" stroke="white" strokeWidth="0.05" />
          <line x1="20" y1="110" x2="60" y2="70" stroke="white" strokeWidth="0.05" />
        </svg>
      </div>

      {/* ── Content ── */}
      <div className="relative z-20 container mx-auto px-6 text-center pt-24 lg:pt-35">
        <div className="max-w-250 mx-auto">

          {/* Eyebrow label */}
          <div className="mb-2 md:mb-6 flex justify-center">
            <span className="text-[10px] md:text-[13px] font-semibold uppercase tracking-[0.4em] text-white/60">
              Creative Digital Agency
            </span>
          </div>

          {/* Main heading */}
          <h1 className="mb-6 md:mb-10 text-[32px] sm:text-5xl md:text-[60px] lg:text-[80px] xl:text-[100px] font-bold leading-[1.2] md:leading-[1.1] text-white tracking-tight">
            Cost effective <br className="hidden sm:block" />
            <span className="relative">
              & trusted agency
            </span>
          </h1>

          {/* CTA button */}
          <div className="flex justify-center">
            <DiscoverMoreBtn className="px-8 py-3.5 md:px-14 md:py-6 text-[11px] md:text-[14px] rounded-sm transition-transform hover:scale-105" />
          </div>
        </div>
      </div>



    </section>
  );
};

export default Hero;