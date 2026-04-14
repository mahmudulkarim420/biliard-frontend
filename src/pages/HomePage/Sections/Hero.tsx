// ─── Local Assets ─────────────────────────────────────────────────────────────
import bgMain from "@/assets/bg (1).png";
import redAccents from "@/assets/bg.png";

// ─── Local Components ─────────────────────────────────────────────────────────
import DiscoverMoreBtn from "@/components/shared/DiscoverMoreBtn";

// ─── Component ────────────────────────────────────────────────────────────────
// Full-bleed hero section for the primary Home page. Uses three stacked
// absolute layers — a grayscale photo base, brand-colored red shape accents
// (mix-blend-screen), and dark gradient overlays — to build visual depth
// without any external animation library.
const Hero = () => {
  return (
    <section className="relative w-full flex flex-col justify-center items-center min-h-[45vh] md:min-h-[80vh] lg:min-h-screen overflow-hidden bg-gray-950 section-padding lg:py-0">

      {/* ── Layer 1: Grayscale base photo ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgMain}
          alt="Digital agency office"
          className="h-full w-full object-cover object-[75%_center] sm:object-top grayscale opacity-60 lg:opacity-80"
        />
        {/* Two-layer overlay: a solid dark scrim + a bottom-to-top gradient for content legibility */}
        <div className="absolute inset-0 bg-black/30 sm:bg-black/40" />
        <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-transparent to-transparent opacity-70" />
      </div>

      {/* ── Layer 2: Brand red shape accents ── */}
      {/* mix-blend-screen blends the red shapes with the grayscale photo below */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <img
          src={redAccents}
          alt="Red geometric accents"
          className="h-full w-full object-cover object-center opacity-50 lg:opacity-90 mix-blend-screen scale-110 sm:scale-100"
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-20 w-full mt-20 md:mt-20 lg:mt-24 py-12 sm:py-20 lg:py-32 px-6 sm:px-12 lg:px-24">
        <div className="mx-auto w-full max-w-300">
          <div className="max-w-162">

            {/* Eyebrow label */}
            <div className="mb-4 sm:mb-6 flex items-center gap-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-300 sm:text-xs">
                Creative Digital Agency
              </p>
            </div>

            {/* Main heading */}
            <h1 className="mb-8 sm:mb-12 text-[42px] font-semibold leading-[1.3] text-white sm:text-7xl lg:text-[85px] tracking-tight">
              Best Digital
              <br className="block sm:hidden" />
              <span className="hidden sm:inline"> </span>
              Agency for
              <br />
              <span>Design</span>
            </h1>

            {/* CTA button */}
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <DiscoverMoreBtn className="sm:px-10 sm:py-5 sm:text-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;