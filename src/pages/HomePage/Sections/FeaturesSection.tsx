// ─── External Libraries ──────────────────────────────────────────────────────
import { useState } from "react";
import { Check, Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Local Assets ─────────────────────────────────────────────────────────────
import bg from "@/assets/bg (3).png";
import img1 from "@/assets/img (15).avif";
import img2 from "@/assets/img (16).avif";
import img3 from "@/assets/img (17).avif";

// ─── Types ────────────────────────────────────────────────────────────────────
type TabKey = "innovation" | "creative idea" | "experience";

interface TabContent {
  text: string;
  image: string;
  list: string[];
}

// ─── Static Data ──────────────────────────────────────────────────────────────
const tabData: Record<TabKey, TabContent> = {
  innovation: {
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at established fact that a reader will be by the readable content of a page when looking at.",
    image: img1,
    list: ["Europe inline concept surplus law", "Edition embulum dignisim", "If you are going to use a passage"],
  },
  "creative idea": {
    text: "Creativity is intelligence having fun. We focus on delivering out-of-the-box solutions that make your brand stand out. Our creative process is deeply rooted in understanding your core values.",
    image: img2,
    list: ["Unique brand identity design", "Engaging visual storytelling", "User-centric creative approach"],
  },
  experience: {
    text: "With over a decade of industry experience, we bring proven methodologies and a track record of success. We have helped numerous startups and enterprises achieve their digital goals.",
    image: img3,
    list: ["10+ years of industry expertise", "Award-winning development team", "Proven track record of success"],
  },
};

// ─── Component ────────────────────────────────────────────────────────────────
const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("innovation");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative z-20 w-full section-padding">

      {/* Hexagonal repeating SVG pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='103.92304845413264' viewBox='0 0 60 103.92304845413264' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 103.92304845413264l-30-17.32050807568877v-34.64101615137754l30-17.32050807568877 30 17.32050807568877v34.64101615137754z' fill='none' stroke='black' strokeWidth='2'/%3E%3C/svg%3E")`,
          backgroundSize: "80px 138px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-300 xl:max-w-[1280px] 2xl:max-w-[1440px] px-5 md:px-8 xl:px-0">

        {/* ── Video Banner ── */}
        <div className="group relative z-30 -mt-24 sm:-mt-64 lg:-mt-80 mb-12 md:mb-20 xl:mb-24 h-75 sm:h-100 lg:h-138 xl:h-[600px] 2xl:h-[700px] w-full overflow-hidden bg-gray-950 shadow-2xl rounded-sm">
          <img
            src={bg}
            alt="Agency team"
            className="h-full w-full object-cover object-center sm:object-[center_20%] lg:object-top transition-transform duration-1000 group-hover:scale-105 opacity-60 lg:opacity-70"
          />

          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:flex-row sm:justify-between lg:px-24">
            <div className="hidden sm:block flex-1" />

            {/* Changed items-center/end to items-start for left alignment */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-6 sm:gap-10 sm:w-[500px] xl:w-[600px] 2xl:w-[700px]">

              {/* Heading: Left aligned, 3 lines */}
              <h2 className="text-[32px] sm:text-5xl lg:text-[64px] xl:text-[76px] 2xl:text-[84px] font-bold leading-[1.1] text-white tracking-tight">
                We creating <br className="hidden sm:block" />
                unique brand <br className="hidden xl:block" />
                agency
              </h2>

              {/* Play button */}
              <div className="relative mt-2 md:mt-4">
                <div className="absolute inset-0 animate-ping rounded-full bg-white/20" />
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand shadow-2xl transition-transform hover:scale-110 active:scale-95 sm:h-20 sm:w-20 lg:h-24 lg:w-24 xl:h-28 xl:w-28"
                >
                  <Play className="ml-1 h-6 w-6 fill-current sm:h-8 sm:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Content: Progress Bar (Left) + Tab Panel (Right) ── */}
        <div className="grid grid-cols-1 gap-12 md:gap-16 lg:grid-cols-2 xl:gap-24 w-full mt-14">
          {/* Left: Section copy + animated skill bar */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start xl:max-w-[90%] lg:mr-auto">
            <p className="mb-3 text-[11px] md:text-[13px] xl:text-[14px] font-bold uppercase tracking-[0.2em] text-brand">
              Innovative Ideas
            </p>
            <h2 className="mb-6 text-[36px] md:text-4xl lg:text-[42px] xl:text-[54px] font-bold leading-[1.1] tracking-tight text-title">
              We Offer You A <br className="hidden xl:block" /> Digital Platform
            </h2>
            <p className="mb-10 text-[14px] md:text-[15px] xl:text-[18px] leading-relaxed text-desc max-w-full lg:max-w-[90%]">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at established fact.
            </p>

            <div className="w-full max-w-full md:max-w-md xl:max-w-lg">
              <div className="mb-3 flex justify-between px-2 lg:px-0">
                <span className="text-[12px] md:text-sm xl:text-[16px] font-bold text-title uppercase tracking-wide">Digital Marketing</span>
                <span className="text-[12px] md:text-sm xl:text-[16px] font-bold text-brand">85%</span>
              </div>
              <div className="h-2 xl:h-3 w-full rounded-full bg-gray-200 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="relative h-full rounded-full bg-brand"
                />
              </div>
            </div>
          </div>

          {/* Right: Tab selector + animated tab content panel */}
          <div>
            <div className="mb-8 flex flex-wrap justify-center lg:justify-start gap-2 md:gap-3">
              {(Object.keys(tabData) as TabKey[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-5 md:px-7 py-3 text-[11px] md:text-[12px] xl:text-[14px] font-bold uppercase tracking-wider transition-all duration-500 rounded-lg lg:rounded-none overflow-hidden ${activeTab === tab ? "text-white" : "bg-white text-gray-600 hover:text-brand"
                    }`}
                >
                  <AnimatePresence>
                    {activeTab === tab && (
                      <motion.div
                        layoutId="activeTabBg"
                        className="absolute inset-0 bg-brand shadow-lg shadow-brand/30"
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      >
                        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rotate-45 bg-brand" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <span className="relative z-10">{tab}</span>
                </button>
              ))}
            </div>

            <div className="min-h-[280px] xl:min-h-[320px] bg-white p-6 md:p-8 xl:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 rounded-xl lg:rounded-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <p className="mb-8 text-[14px] md:text-[15px] xl:text-[16px] leading-relaxed text-gray-500">{tabData[activeTab].text}</p>
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                    <div className="h-28 w-full sm:w-40 xl:h-36 xl:w-48 shrink-0 overflow-hidden rounded-md grayscale transition-all duration-500">
                      <img src={tabData[activeTab].image} alt="visual" className="h-full w-full object-cover" />
                    </div>
                    <ul className="flex flex-col gap-3 xl:gap-4">
                      {tabData[activeTab].list.map((item, index) => (
                         <li key={index} className="flex items-center gap-3 text-[13px] md:text-[14px] xl:text-[16px] font-bold text-gray-800">
                          <div className="flex h-5 w-5 xl:h-6 xl:w-6 items-center justify-center rounded-full bg-brand/10 shrink-0">
                            <Check className="h-3 w-3 xl:h-4 xl:w-4 text-brand stroke-[3px]" />
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* ── Video Modal ── */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative aspect-video w-full max-w-5xl overflow-hidden rounded-xl bg-black"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-brand"
              >
                <X className="h-6 w-6" />
              </button>

              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1"
                title="Agency Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturesSection;