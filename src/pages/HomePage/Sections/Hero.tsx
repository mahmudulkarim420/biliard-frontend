import bgMain from "@/assets/bg (1).png";
import redAccents from "@/assets/bg.png";

const Hero = () => {
  return (
    <section className="relative h-svh min-h-[700px] w-full overflow-hidden bg-gray-950">

      {/* 1. Base Layer: Grayscale Image bg(1) - Lightness Increased */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgMain}
          alt="Digital agency office"
          className="h-full w-full object-cover grayscale opacity-70" // Opacity barano hoyeche
        />
        {/* Subtle dark overlay for contrast without making it black */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Linear gradient to fade into dark at bottom only */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60" />
      </div>

      {/* 2. Accent Layer: bg.png with Red Shapes */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <img
          src={redAccents}
          alt="Red geometric accents"
          className="h-full w-full object-cover opacity-90 mix-blend-screen" // Opacity barano hoyeche
        />

      </div>

      {/* 3. Hero Content */}
      <div className="relative z-20 flex h-full items-center px-6 sm:px-12 lg:px-24">
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="max-w-4xl">

            {/* Subtitle */}
            <div className="mb-6 flex items-center gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-gray-200 sm:text-sm">
                Creative Digital Agency
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="mb-10 text-5xl font-bold leading-[1.1] text-white sm:text-7xl lg:text-[85px] tracking-tight">
              Best Digital
              <br />
              Agency for
              <br />
              <span className="text-[#ff3b30]">Design</span>
            </h1>

            {/* Premium CTA */}
            <button className="group relative overflow-hidden bg-[#ff3b30] px-10 py-5 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,59,48,0.4)] active:scale-95">
              <span className="relative z-10">Discover More</span>
              <div className="absolute inset-0 z-0 translate-y-full bg-black/20 transition-transform duration-300 group-hover:translate-y-0" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;