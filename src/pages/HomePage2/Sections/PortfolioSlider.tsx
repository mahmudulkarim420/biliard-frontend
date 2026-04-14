// ─── External Libraries ──────────────────────────────────────────────────────
import { useRef, useEffect } from "react";

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
const PortfolioMarquee = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Duplicate items more times to ensure a huge scroll space for seamless infinite loop
  const duplicatedItems = [
    ...portfolioItems,
    ...portfolioItems,
    ...portfolioItems,
    ...portfolioItems,
  ];

  // Start autoplay timer
  const startAutoplay = () => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      handleScroll("right");
    }, 3000); // 3 seconds interval
  };

  // Stop autoplay timer
  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  // Main scroll logic
  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    
    const container = scrollRef.current;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    const scrollAmount = 350; // approximate width of card + gap

    if (direction === "left") {
      // If at the very beginning, jump instantly to the middle set
      if (scrollLeft <= 0) {
        container.scrollTo({ left: scrollWidth / 2, behavior: "auto" });
      }
      // Use setTimeout to allow the instant jump to apply before smooth scrolling
      setTimeout(() => {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }, 10);
    } else {
      // If reached the end, jump instantly to the start/middle set
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        container.scrollTo({ left: scrollWidth / 4, behavior: "auto" });
      }
      setTimeout(() => {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }, 10);
    }
  };

  // When user clicks a button, scroll and reset the timer
  const onButtonClick = (direction: "left" | "right") => {
    handleScroll(direction);
    startAutoplay(); // Restart autoplay so it doesn't instantly scroll again
  };

  return (
    <section className="bg-white section-padding overflow-hidden">
      {/* ── Section Header ── */}
      <div className="mx-auto max-w-300 text-center mb-16 px-6">
        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-brand">
          OUR PORTFOLIO
        </p>
        <h2 className="text-4xl font-black text-title sm:text-5xl lg:text-[54px] tracking-tight">
          Our Fascinating Work
        </h2>
      </div>

      {/* ── Scrollable Strip ── */}
      <div className="w-full relative">
        <div
          ref={scrollRef}
          // Removed 'scroll-smooth' from here so we can control instant jumps via JS
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory px-6 pb-4 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={index}
              className="relative w-75 sm:w-88 aspect-4/5 rounded-3xl overflow-hidden group cursor-pointer shrink-0 snap-start"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
              />

              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 z-10">
                <div className="bg-white px-8 py-5 rounded-2xl shadow-2xl w-max text-center">
                  <h4 className="text-lg font-bold text-title whitespace-nowrap">{item.title}</h4>
                  <p className="text-xs text-brand font-bold uppercase tracking-wider mt-1">{item.category}</p>
                </div>
              </div>

              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* ── Pagination Dots (Static) ── */}
      <div className="flex justify-center items-center gap-2 mt-8">
        <span className="w-1.5 h-1.5 rounded-full bg-gray-200" />
        <span className="w-6 h-1.5 rounded-full bg-brand" />
        <span className="w-1.5 h-1.5 rounded-full bg-gray-200" />
      </div>

      {/* ── Navigation Buttons ── */}
      <div className="flex justify-center items-center gap-4 mt-8 px-6">
        <button
          onClick={() => onButtonClick("left")}
          className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 text-title hover:bg-brand hover:text-white hover:border-brand transition-all duration-300 active:scale-95 z-20 relative"
          aria-label="Previous"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          onClick={() => onButtonClick("right")}
          className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 text-title hover:bg-brand hover:text-white hover:border-brand transition-all duration-300 active:scale-95 z-20 relative"
          aria-label="Next"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default PortfolioMarquee;