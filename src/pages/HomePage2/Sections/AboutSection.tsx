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

// --- AboutSection ---
// Two-column layout: an image composition on the left and the brand
// narrative, feature checklist, author signature, and an experience
// stat card on the right.
const AboutSection = () => {
  return (
    <section className="relative w-full bg-white pt-[130px]  overflow-hidden">
      <div className="mx-auto max-w-300">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* ── Left Column: Image Composition ── */}
          <div className="relative w-full lg:w-1/2 mb-16 lg:mb-0">

            {/* Primary grayscale image */}
            <div className="relative z-10 w-[85%] mx-auto lg:mx-0 aspect-4/5 overflow-hidden rounded-sm">
              <img
                src={aboutMain}
                alt="Office workspace"
                className="h-full w-full object-cover grayscale opacity-90"
              />
            </div>

            {/* Brand accent bar — visible on sm+ */}
            <div className="absolute top-0 right-4 h-48 w-4 bg-brand z-0 hidden sm:block" />

            {/* Secondary image — overlaps the primary at bottom-right */}
            <div className="absolute bottom-4 sm:bottom-12 right-0 sm:right-4 lg:right-0 z-20 w-[48%] aspect-square border-8 sm:border-12 border-white shadow-2xl overflow-hidden rounded-sm">
              <img
                src={aboutSub}
                alt="Team collaboration"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* ── Right Column: Brand Content ── */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col">

              {/* Section label */}
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-brand">
                ABOUT US
              </p>

              {/* Section heading */}
              <h2 className="mb-8 text-4xl font-bold leading-[1.2] text-title sm:text-5xl lg:text-[54px] tracking-tight">
                We Empower <br /> Clients to be loved
              </h2>

              {/* Introductory body copy */}
              <p className="mb-10 text-[15px] leading-relaxed text-desc max-w-lg">
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at established fact
                that a reader will be by the readable content of a page when
                looking at.
              </p>

              {/* ── Features & Stats Row ── */}
              <div className="flex flex-col md:flex-row gap-10 items-start md:items-center">

                {/* Feature checklist + author signature */}
                <div className="flex flex-col gap-5">

                  {/* Checklist items */}
                  <div className="space-y-4">
                    {FEATURE_POINTS.map((point, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full border border-brand/40">
                          <Check className="h-3 w-3 text-brand stroke-[3px]" />
                        </div>
                        <span className="text-[14px] font-bold text-title">{point}</span>
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
                <div className="flex flex-col items-center justify-center bg-gray-50/80 p-9 rounded-sm text-center border-b-4 border-brand shadow-sm">
                  <div className="mb-4 bg-white p-3 rounded-lg shadow-sm">
                    {/* Magnifier-plus icon representing growth / research */}
                    <svg
                      width="34"
                      height="34"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FF3838"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </div>
                  <h4 className="text-3xl font-black text-title">20+</h4>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-desc mt-1">
                    Years of Experience
                  </p>
                </div>
              </div>

              {/* CTA button */}
              <div className="mt-12">
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