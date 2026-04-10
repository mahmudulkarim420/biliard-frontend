import bgMain from "@/assets/bg (1).png";
import redAccents from "@/assets/bg.png";

const Hero = () => {
  return (
    // h-svh এর বদলে মোবাইলে আমরা h-auto বা min-h-[550px] ব্যবহার করছি যাতে অতিরিক্ত গ্যাপ না থাকে
    <section className="relative w-full overflow-hidden bg-gray-950">

      {/* 1. Base Layer: Grayscale Image bg(1) */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgMain}
          alt="Digital agency office"
          // Increased opacity for better visibility
          className="h-full w-full object-cover object-[75%_center] sm:object-top grayscale opacity-60 lg:opacity-80"
        />
        {/* Lighter black overlay to brighten the scene */}
        <div className="absolute inset-0 bg-black/30 sm:bg-black/40" />
        {/* Refined gradient to show more of the image at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-70" />
      </div>

      {/* 2. Accent Layer: Red Shapes */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <img
          src={redAccents}
          alt="Red geometric accents"
          className="h-full w-full object-cover object-center opacity-50 lg:opacity-90 mix-blend-screen scale-110 sm:scale-100"
        />
      </div>

      {/* 3. Hero Content */}
      <div className="relative z-20 w-full pt-[160px] pb-[160px] px-6 sm:px-12 lg:px-24">
        <div className="mx-auto w-full max-w-[1200px]">
          {/* Content Container */}
          <div className="max-w-[650px]">

            {/* Subtitle */}
            <div className="mb-4 sm:mb-6 flex items-center gap-3">

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-300 sm:text-xs">
                Creative Digital Agency
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="mb-8 sm:mb-12 text-[42px] font-bold leading-[1.1] text-white sm:text-7xl lg:text-[85px] tracking-tight">
              Best Digital
              <br className="block sm:hidden" />
              <span className="hidden sm:inline"> </span>
              Agency for
              <br />
              <span>Design</span>
            </h1>

            {/* Premium CTA */}
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <button className="group relative overflow-hidden bg-btn px-8 py-4 sm:px-10 sm:py-5 text-[11px] sm:text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 active:scale-95">
                <span className="relative z-10">Discover More</span>
                <div className="absolute inset-0 z-0 translate-y-full bg-black/20 transition-transform duration-300 group-hover:translate-y-0" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;