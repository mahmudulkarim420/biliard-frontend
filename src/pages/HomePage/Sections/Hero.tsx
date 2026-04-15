// ─── Local Assets ─────────────────────────────────────────────────────────────
import bgMain from "@/assets/bg (1).png";
import redAccents from "@/assets/bg.png";

// ─── Local Components ─────────────────────────────────────────────────────────
import DiscoverMoreBtn from "@/components/shared/DiscoverMoreBtn";

const Hero = () => {
  return (
    <section className="relative w-full flex flex-col justify-center items-center min-h-[50vh] md:min-h-[60vh] lg:min-h-[60vh] xl:min-h-screen overflow-hidden bg-[#4C5294]">

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
      <div className="relative z-20 w-full mt-20 md:mt-20 lg:mt-24 py-12 sm:py-20 lg:py-32 px-5 md:px-8 xl:px-24 2xl:px-48 text-center sm:text-left">
        <div className="mx-auto w-full max-w-300 xl:max-w-[1280px] 2xl:max-w-[1440px]">
          <div className="max-w-162 xl:max-w-[800px] 2xl:max-w-[1000px] mx-auto sm:mx-0">

            {/* Eyebrow label */}
            <div className="mb-4 sm:mb-6 flex items-center justify-center sm:justify-start gap-3">
              <p className="text-[10px] sm:text-xs xl:text-[14px] font-bold uppercase tracking-[0.3em] text-gray-300 xl:tracking-[0.4em]">
                Creative Digital Agency
              </p>
            </div>

            {/* Main heading */}
            <h1 className="mb-8 sm:mb-12 text-[42px] sm:text-7xl lg:text-[85px] xl:text-[100px] 2xl:text-[120px] font-semibold leading-[1.3] text-white tracking-tight xl:leading-[110px] 2xl:leading-[130px]">
              Best Digital
              <br className="block xl:hidden" />
              <span className="hidden sm:inline"> </span>
              Agency for
              <br />
              <span>Design</span>
            </h1>

            {/* CTA button */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-6">
              <DiscoverMoreBtn className="sm:px-10 sm:py-5 sm:text-sm xl:text-[16px] xl:px-12 xl:py-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;