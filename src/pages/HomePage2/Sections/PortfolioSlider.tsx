// ─── External Libraries ──────────────────────────────────────────────────────
import { motion } from "framer-motion";

// ─── Local Assets ─────────────────────────────────────────────────────────────
import img1 from "@/assets/img (2).png";
import img2 from "@/assets/img (3).png";
import img3 from "@/assets/img (4).png";
import img4 from "@/assets/img (5).png";
import img5 from "@/assets/img (6).png";

// ─── Types ────────────────────────────────────────────────────────────────────
interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

// ─── Static Data ──────────────────────────────────────────────────────────────
const portfolioItems: PortfolioItem[] = [
  { id: 1, title: "Newcastle Brand", category: "Branding", image: img1 },
  { id: 2, title: "Banana Concept", category: "Photography", image: img2 },
  { id: 3, title: "Minimal Coffee", category: "Creative", image: img3 },
  { id: 4, title: "Modern Chair", category: "Design", image: img4 },
  { id: 5, title: "Pure Nature", category: "Styling", image: img5 },
];

// ─── Component ────────────────────────────────────────────────────────────────
// Horizontally auto-scrolling portfolio marquee. The item list is duplicated
// so the animation can loop from 0% → -50% seamlessly with no visible jump.
// Images begin in grayscale and reveal color + sharp focus on hover.
const PortfolioMarquee = () => {
  // Duplicate the list to enable a seamless infinite loop (x: 0% → -50%).
  const duplicatedItems = [...portfolioItems, ...portfolioItems];

  return (
    <section className="bg-white section-padding-h2 overflow-hidden">

      {/* ── Section Header ── */}
      <div className="mx-auto max-w-300 text-center mb-16 px-6">
        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-brand">
          OUR PORTFOLIO
        </p>
        <h2 className="text-4xl font-black text-title sm:text-5xl lg:text-[54px] tracking-tight">
          Our Fascinating Work
        </h2>
      </div>

      {/* ── Marquee Strip ── */}
      <div className="flex w-full overflow-hidden">
        <motion.div
          className="flex gap-8 flex-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={index}
              className="relative w-75 sm:w-88 aspect-4/5 rounded-3xl overflow-hidden group cursor-pointer shrink-0"
            >
              {/* Grayscale image — color reveals on hover */}
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
              />

              {/* Hover overlay: floating info card slides up from the bottom */}
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 z-10">
                <div className="bg-white px-8 py-5 rounded-2xl shadow-2xl w-max text-center">
                  <h4 className="text-lg font-bold text-title whitespace-nowrap">{item.title}</h4>
                  <p className="text-xs text-brand font-bold uppercase tracking-wider mt-1">{item.category}</p>
                </div>
              </div>

              {/* Subtle dark scrim — enhances card legibility on hover */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Pagination Dots (Static — decorative only) ── */}
      <div className="flex justify-center items-center gap-2 mt-12">
        <span className="w-1.5 h-1.5 rounded-full bg-gray-200" />
        <span className="w-6 h-1.5 rounded-full bg-brand" />
        <span className="w-1.5 h-1.5 rounded-full bg-gray-200" />
      </div>
    </section>
  );
};

export default PortfolioMarquee;