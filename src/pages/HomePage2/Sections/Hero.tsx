import bgMain from "@/assets/bg (4).png";
import redAccents from "@/assets/bg (6).png";
import DiscoverMoreBtn from "@/components/shared/DiscoverMoreBtn";

const Hero = () => {
    return (
        <section className="relative w-full min-h-[500px] md:min-h-[650px] lg:min-h-[850px] flex items-center justify-center overflow-hidden bg-[#09090b] pt-12 md:pt-0">

            {/* 1. Base Layer: Grayscale Team Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={bgMain}
                    alt="Team collaboration"
                    className="h-full w-full object-cover grayscale contrast-125 brightness-75 opacity-30 md:opacity-40 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-transparent to-[#09090b] opacity-70" />
            </div>

            {/* 2. Red Shapes Layer */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                <img
                    src={redAccents}
                    alt="Brand accents"
                    className="h-full w-full object-cover mix-blend-screen opacity-90 scale-110 sm:scale-105"
                />
            </div>

            {/* 3. Diagonal Line Pattern */}
            <div className="absolute inset-0 z-10 pointer-events-none opacity-10 md:opacity-20 transition-opacity">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <line x1="-10" y1="20" x2="30" y2="-10" stroke="white" strokeWidth="0.05" />
                    <line x1="70" y1="110" x2="110" y2="70" stroke="white" strokeWidth="0.05" />
                    <line x1="20" y1="110" x2="60" y2="70" stroke="white" strokeWidth="0.05" />
                </svg>
            </div>

            {/* 4. Content Area */}
            <div className="relative z-20 container mx-auto px-6 text-center">
                <div className="max-w-[1000px] mx-auto">
                    {/* Subtitle */}
                    <div className="mb-2 md:mb-6 flex justify-center">
                        <span className="text-[10px] md:text-[13px] font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] text-white/60">
                            Creative Digital Agency
                        </span>
                    </div>

                    {/* Main Title */}
                    <h1 className="mb-6 md:mb-10 text-[32px] sm:text-6xl md:text-8xl lg:text-[110px] font-extrabold leading-[1.2] md:leading-[1.1] text-white tracking-tight">
                        Cost effective <br className="hidden sm:block" />
                        <span className="relative">
                            & trusted agency
                        </span>
                    </h1>

                    {/* CTA Button */}
                    <div className="flex justify-center">
                        <DiscoverMoreBtn className="px-8 py-3.5 md:px-14 md:py-6 text-[11px] md:text-[14px] rounded-sm transition-transform hover:scale-105" />
                    </div>
                </div>
            </div>

            {/* Responsive Corner Decorative Gradients */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
                <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-gradient-to-br from-brand/10 to-transparent opacity-50 md:opacity-100" />
                <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-gradient-to-tl from-brand/10 to-transparent opacity-50 md:opacity-100" />
            </div>

        </section>
    );
};

export default Hero;