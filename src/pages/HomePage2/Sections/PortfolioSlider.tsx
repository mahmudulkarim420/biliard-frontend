// ─── External Libraries ──────────────────────────────────────────────────────
import { useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";

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
const PortfolioSlider = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Multiply the items to ensure Swiper has an abundance of slides.
  // This guarantees the loop NEVER disables itself on ultra-wide monitors when using `slidesPerView="auto"`.
  const extendedItems = useMemo(
    () => [
      ...portfolioItems,
      ...portfolioItems,
      ...portfolioItems,
      ...portfolioItems,
    ],
    []
  );

  // Memoize slides to prevent Swiper from interrupting its internal transition
  // animations due to React re-rendering the children when activeIndex changes.
  const mappedSlides = useMemo(
    () =>
      extendedItems.map((item, i) => (
        <SwiperSlide
          key={`${item.id}-${i}`}
          className="!w-[300px] sm:!w-[352px] xl:!w-[400px] 2xl:!w-[450px]"
        >
          <div className="relative w-full aspect-4/5 rounded-3xl overflow-hidden group cursor-pointer">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
            />

            <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 z-10">
              <div className="bg-white px-8 xl:px-10 py-5 xl:py-6 rounded-2xl shadow-2xl w-max text-center border border-gray-100">
                <h4 className="text-lg xl:text-xl 2xl:text-2xl font-bold text-title whitespace-nowrap">
                  {item.title}
                </h4>
                <p className="text-[12px] xl:text-[14px] text-brand font-bold uppercase tracking-wider mt-1">
                  {item.category}
                </p>
              </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </SwiperSlide>
      )),
    [extendedItems]
  );

  const normalizedIndex = activeIndex % portfolioItems.length;

  return (
    <section className="bg-white section-padding overflow-hidden">
      {/* ── Section Header ── */}
      <div className="mx-auto max-w-300 xl:max-w-[1280px] 2xl:max-w-[1280px] px-5 md:px-8 xl:px-0 text-center mb-16">
        <p className="mb-4 text-[11px] md:text-[12px] xl:text-[14px] font-bold uppercase tracking-[0.1em] text-brand">
          OUR PORTFOLIO
        </p>
        <h2 className="max-w-[200px] text-[20px] md:max-w-[300px] md:text-[30px] lg:max-w-[400px] lg:text-[40px] xl:max-w-[510px] mx-auto font-black text-title">
          Our Fascinating Work
        </h2>
      </div>

      {/* ── Swiper Slider ── */}
      <div className="w-full relative">
        <Swiper
          modules={[Autoplay]}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          spaceBetween={32}
          slidesPerView="auto"
          loop={true}
          centeredSlides={true}
          speed={1000}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          className="!overflow-visible"
        >
          {mappedSlides}
        </Swiper>
      </div>

      {/* ── Working Pagination Dots ── */}
      <div className="flex justify-center items-center gap-3 mt-12 relative z-10">
        {portfolioItems.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (swiperInstance) {
                const currentVirtual = swiperInstance.realIndex;
                const currentBase = currentVirtual % portfolioItems.length;

                // Find the shortest path to the clicked dot
                let diff = index - currentBase;
                if (diff > portfolioItems.length / 2) {
                  diff -= portfolioItems.length;
                } else if (diff < -portfolioItems.length / 2) {
                  diff += portfolioItems.length;
                }

                // Navigate directly to the computed differential index
                swiperInstance.slideTo(swiperInstance.activeIndex + diff, 1000);
              }
            }}
            className={`transition-all duration-500 rounded-full h-2 ${normalizedIndex === index
                ? "w-8 bg-brand"
                : "w-2 bg-gray-200 hover:bg-gray-300"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSlider;