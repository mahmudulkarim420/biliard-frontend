import { Check } from "lucide-react";
import DiscoverMoreBtn from "@/components/shared/DiscoverMoreBtn";

// --- Static Assets ---
import aboutMain from "@/assets/img (14).png";
import aboutSub from "@/assets/img (15).png";
import userAvatar from "@/assets/img (16).png";

// --- Static Data ---
// Feature checklist items rendered in the brand narrative column.
const FEATURE_POINTS = [
  "Entum estib dignissim posuere",
  "Nsectetur cing elit",
  "Neque ornare aenean euismod",
];


const AboutSection = () => {
  return (
    <section className="relative w-full bg-white section-padding overflow-hidden">
      <div className="mx-auto w-full xl:max-w-[1280px] 2xl:max-w-[1280px] px-4 sm:px-6 md:px-5 lg:px-8 xl:px-0">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-14 lg:gap-24">

          {/* ── Left Column: Image Composition ── */}
          <div className="w-full lg:w-1/2 mb-12 sm:mb-16 lg:mb-0 flex justify-center lg:justify-start">
            <div className="group relative w-full max-w-[700px] lg:max-w-none">

              {/* Primary grayscale image */}
              <div className="relative z-10 w-[85%] aspect-4/5 overflow-hidden rounded-sm">
                <img
                  src={aboutMain}
                  alt="Office workspace"
                  className="h-full w-full object-cover grayscale opacity-90"
                />
              </div>

              {/* Brand accent bar — visible on sm+ */}
              <div className="absolute top-4 lg:top-0 right-4 lg:right-0 xl:right-4 h-32 sm:h-48 w-4 bg-brand z-0 hidden sm:block" />

              {/* Secondary image — overlaps the primary at bottom-right */}
              <div className="absolute -bottom-6 sm:bottom-8 lg:bottom-12 right-0 z-20 w-[60%] sm:w-[50%] lg:w-[48%] aspect-square border-8 sm:border-12 border-white shadow-2xl overflow-hidden rounded-sm transition-all duration-700 group-hover:scale-[1.03] group-hover:rotate-1">
                <img
                  src={aboutSub}
                  alt="Team collaboration"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>

            </div>
          </div>

          {/* ── Right Column: Brand Content ── */}
          <div className="w-full lg:w-1/2 max-w-[700px] lg:max-w-none mx-auto lg:mx-0">
            <div className="flex flex-col">

              {/* Section label */}
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.1em] text-brand">
                ABOUT US
              </p>

              {/* Section heading */}
              <h2 className="mb-8 max-w-[280px] text-[22px] sm:max-w-[400px] md:max-w-[500px] md:text-[32px] lg:max-w-[350px] lg:text-[40px] xl:max-w-[510px] xl:text-[54px] font-semibold leading-[1.2] text-title tracking-tight">
                We Empower <br className="hidden xl:block" /> Clients to be loved
              </h2>

              {/* Introductory body copy */}
              <p className="mb-10 text-[14px] xl:text-[16px] leading-[2] text-desc max-w-lg xl:max-w-2xl">
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at established fact
                that a reader will be by the readable content of a page when
                looking at.
              </p>

              {/* ── Features & Stats Row ── */}
              <div className="flex flex-row items-center justify-between gap-2 sm:gap-10">

                {/* Feature checklist + author signature */}
                <div className="flex flex-col gap-5">

                  {/* Checklist items */}
                  <div className="space-y-4">
                    {FEATURE_POINTS.map((point, index) => (
                      <div key={index} className="group/item flex items-center gap-3">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full border border-brand/40 transition-colors duration-300 group-hover/item:border-brand bg-transparent group-hover/item:bg-brand/5">
                          <Check className="h-3 w-3 text-brand stroke-[3px] transition-transform duration-300 group-hover/item:scale-110" />
                        </div>
                        <span className="text-[14px] font-bold text-title transition-colors duration-300 group-hover/item:text-brand">{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Author signature */}
                  <div className="mt-6 flex items-center gap-4">
                    <img
                      src={userAvatar}
                      alt="Albert Hex"
                      className="h-12 w-12 rounded-full object-cover grayscale"
                    />
                    <h5 className="text-xl font-bold font-serif italic text-title tracking-tight border-b border-gray-200 pb-1">
                      Albert Hex
                    </h5>
                  </div>
                </div>

                {/* Years of experience stat card */}
                <div className="flex flex-col items-center justify-center bg-gray-50/50 backdrop-blur-sm p-4 sm:p-9 rounded-sm text-center border-b-4 border-brand shadow-sm shrink-0 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                  <div className="mb-2 sm:mb-4 bg-white p-2 sm:p-3 rounded-lg shadow-md transition-transform duration-500 hover:rotate-6">
                    {/* Magnifier-plus icon representing growth / research */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FF3838"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 sm:w-[34px] sm:h-[34px]"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-black text-title">20+</h4>
                  <p className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-brand mt-1 opacity-80">
                    Years of Experience
                  </p>
                </div>
              </div>

              {/* CTA button */}
              <div className="mt-10 sm:mt-12 flex justify-center lg:justify-start">
                <DiscoverMoreBtn className="px-10 py-4 md:px-12 md:py-5" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;