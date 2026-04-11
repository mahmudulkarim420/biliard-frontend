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
// Each key corresponds to a tab label. The active tab's content is rendered
// inside an AnimatePresence block for smooth cross-fade transitions.
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
// Three sub-sections within one component:
// 1. A video banner that overlaps the Hero below via negative top margin.
// 2. A progress bar + animated tab panel (left/right two-column grid).
// 3. A full-screen video modal triggered by the play button in the banner.
const FeaturesSection = () => {
  // Tracks which tab is active and whether the video modal is open.
  const [activeTab, setActiveTab] = useState<TabKey>("innovation");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative z-20 w-full bg-slate-50 py-24 px-6 sm:px-12 lg:px-24">

      {/* Hexagonal repeating SVG pattern — very low opacity decorative texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='103.92304845413264' viewBox='0 0 60 103.92304845413264' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 103.92304845413264l-30-17.32050807568877v-34.64101615137754l30-17.32050807568877 30 17.32050807568877v34.64101615137754z' fill='none' stroke='black' strokeWidth='2'/%3E%3C/svg%3E")`,
          backgroundSize: "80px 138px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px]">

        {/* ── Video Banner ── */}
        {/* Pulls upward with a negative margin to overlap the bottom of the Hero section. */}
        <div className="group relative z-30 -mt-44 sm:-mt-64 lg:-mt-[320px] mb-20 h-[300px] sm:h-[400px] lg:h-[550px] w-full overflow-hidden bg-gray-950 shadow-2xl rounded-sm">
          <img
            src={bg}
            alt="Agency team"
            className="h-full w-full object-cover object-center sm:object-[center_20%] lg:object-top transition-transform duration-1000 group-hover:scale-105 opacity-60 lg:opacity-70"
          />

          {/* Content overlay — heading aligned right, play button below it */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 sm:flex-row sm:text-left sm:justify-between lg:px-24">
            <div className="hidden sm:block flex-1" />

            <div className="flex flex-col items-center sm:items-end gap-6 sm:gap-10">
              <h2 className="max-w-[300px] sm:max-w-[500px] text-2xl font-bold leading-tight text-white mb-2 sm:mb-0 sm:text-5xl lg:text-7xl text-center sm:text-right">
                We creating unique <br className="hidden lg:block" /> brand agency
              </h2>

              {/* Play button with a continuous ping ripple animation */}
              <div className="relative sm:mr-64">
                <div className="absolute inset-0 animate-ping rounded-full bg-white/20" />
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand shadow-2xl transition-transform hover:scale-110 active:scale-95 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                >
                  <Play className="ml-1 h-6 w-6 fill-current sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Content: Progress Bar (Left) + Tab Panel (Right) ── */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">

          {/* Left: Section copy + animated skill bar */}
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-brand">
              Innovative Ideas
            </p>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-title md:text-4xl lg:text-[42px]">
              We Offer You A <br /> Digital Platform
            </h2>
            <p className="mb-10 text-[15px] leading-relaxed text-desc">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at established fact.
            </p>

            {/* Animated progress bar — fills to 85% when it enters the viewport */}
            <div className="w-full max-w-md">
              <div className="mb-3 flex justify-between">
                <span className="text-sm font-bold text-title uppercase tracking-wide">Digital Marketing</span>
                <span className="text-sm font-bold text-brand">85%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
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
            {/* Tab buttons — active tab has an animated brand-red spring background */}
            <div className="mb-8 flex flex-wrap gap-3">
              {(Object.keys(tabData) as TabKey[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-7 py-3 text-[12px] font-bold uppercase tracking-wider transition-all duration-500 ${
                    activeTab === tab ? "text-white" : "bg-white text-gray-600 hover:text-brand"
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
                        {/* Downward-pointing caret below the active tab */}
                        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rotate-45 bg-brand" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <span className="relative z-10">{tab}</span>
                </button>
              ))}
            </div>

            {/* Tab content panel — cross-fades between tabs via AnimatePresence "wait" mode */}
            <div className="min-h-[250px] bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <p className="mb-8 text-[14px] leading-relaxed text-gray-500">{tabData[activeTab].text}</p>
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                    <div className="h-28 w-40 shrink-0 overflow-hidden rounded-sm grayscale transition-all duration-500">
                      <img src={tabData[activeTab].image} alt="visual" className="h-full w-full object-cover" />
                    </div>
                    <ul className="flex flex-col gap-3">
                      {tabData[activeTab].list.map((item, index) => (
                        <li key={index} className="flex items-center gap-3 text-[13px] font-bold text-gray-800">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand/10">
                            <Check className="h-3 w-3 text-brand stroke-[4]" />
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
      {/* Full-screen dark overlay with an embedded YouTube iframe.
          The modal mounts/unmounts via AnimatePresence for fade + scale animation. */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative aspect-video w-full max-w-5xl overflow-hidden rounded-xl bg-black"
            >
              {/* Close button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-brand"
              >
                <X className="h-6 w-6" />
              </button>

              {/* YouTube embed — autoplay is triggered when the modal opens */}
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