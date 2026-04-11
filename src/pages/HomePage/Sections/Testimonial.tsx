// ─── External Libraries ──────────────────────────────────────────────────────
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Local Assets ─────────────────────────────────────────────────────────────
import img1 from "@/assets/img (18).avif";
import img2 from "@/assets/img (19).avif";
import img3 from "@/assets/img (20).avif";

// ─── Types ────────────────────────────────────────────────────────────────────
interface TestimonialItem {
  text: string;
  name: string;
  role: string;
  image: string;
}

// ─── Static Data ──────────────────────────────────────────────────────────────
const testimonials: TestimonialItem[] = [
  {
    text: "Revenue than this. I will refer everyone I know I like Level more and more each",
    name: "Alex Hedge",
    role: "UI/UX Designer",
    image: img1,
  },
  {
    text: "This service has completely transformed our business workflow and productivity",
    name: "Sarah Jenkins",
    role: "Product Manager",
    image: img2,
  },
  {
    text: "Exceptional quality and support. I couldn't be happier with the final results.",
    name: "Michael Chen",
    role: "CEO at TechFlow",
    image: img3,
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
// Auto-advancing testimonial slider with a dark full-bleed background. The
// background image cross-fades on each slide change. Text slides in horizontally
// via Framer Motion. A subtle quote SVG sits behind the content for visual
// richness. Pagination dots allow manual navigation.
const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Logic: Advances to the next testimonial every 5 seconds; resets on unmount.
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-[500px] w-full items-center overflow-hidden bg-neutral-950 section-padding lg:min-h-[600px]">

      {/* ── Background Image Layer ── */}
      {/* Cross-fades between testimonial images using AnimatePresence "wait" mode. */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={`img-${currentIndex}`}
            src={testimonials[currentIndex].image}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="h-full w-full object-cover grayscale scale-110 sm:scale-100"
          />
        </AnimatePresence>

        {/* Two-layer dark tint to ensure text remains readable over any image */}
        <div className="absolute inset-0 bg-slate-900/75 sm:bg-slate-900/70" />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 sm:px-12 lg:px-24">
        <div className="relative mx-auto flex w-full max-w-4xl flex-col">

          {/* Large decorative quote mark — positioned behind the content */}
          <div className="pointer-events-none absolute -left-4 -top-8 z-0 opacity-30 sm:-left-12 sm:-top-16 md:-left-24 md:-top-28">
            <svg
              className="h-24 w-24 fill-brand sm:h-40 sm:w-40 md:h-[320px] md:w-[320px]"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          {/* ── Testimonial Text Slider ── */}
          {/* Content slides in from the right and exits to the left on each change. */}
          <div className="relative z-20 flex flex-col pl-2 sm:pl-10 md:pl-[80px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentIndex}`}
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -40, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className="flex flex-col"
              >
                {/* Quote text */}
                <h3 className="mb-8 text-[22px] font-bold leading-[1.4] text-white sm:mb-10 sm:text-3xl md:text-[45px] lg:leading-[1.4] tracking-tight">
                  "{testimonials[currentIndex].text}"
                </h3>

                {/* Author meta — left brand-border accent */}
                <div className="flex flex-col gap-1 border-l-[3px] border-brand pl-5 transition-all duration-300">
                  <h5 className="text-[18px] font-bold text-white tracking-wide sm:text-[20px]">
                    {testimonials[currentIndex].name}
                  </h5>
                  <p className="text-[12px] font-medium text-gray-400 sm:text-[14px]">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* ── Pagination Dots ── */}
            {/* Active dot stretches wide; inactive dots contract. Clicking jumps to that slide. */}
            <div className="mt-10 flex items-center gap-2.5 sm:mt-14 sm:gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    index === currentIndex
                      ? "w-10 bg-brand shadow-[0_0_15px_rgba(255,59,48,0.6)]"
                      : "w-2.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;