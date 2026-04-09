import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "Revenue than this. I will refer everyone I know I like Level more and more each",
    name: "Alex Hedge",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600"
  },
  {
    text: "This service has completely transformed our business workflow and productivity",
    name: "Sarah Jenkins",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1600"
  },
  {
    text: "Exceptional quality and support. I couldn't be happier with the final results.",
    name: "Michael Chen",
    role: "CEO at TechFlow",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1600"
  }
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-[550px] w-full items-center overflow-hidden bg-[#0a0a0c] py-24 lg:min-h-[600px]">

      {/* 1. Background Image Slider - Increased Visibility */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={`img-${currentIndex}`}
            src={testimonials[currentIndex].image}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="h-full w-full object-cover grayscale"
          />
        </AnimatePresence>

        {/* Updated Overlay - Changed opacity from /90 to /70 to make images visible */}
        <div className="absolute inset-0 bg-[#16171e]/70"></div>
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 sm:px-12 lg:px-24">
        <div className="relative mx-auto flex w-full max-w-4xl flex-col">

          {/* 2. Massive Quote Mark - Watermark style */}
          <div className="pointer-events-none absolute -left-10 -top-12 z-0 opacity-40 sm:-left-16 sm:-top-20 md:-left-24 md:-top-28">
            <svg
              className="h-40 w-40 fill-[#ff3b30] sm:h-56 sm:w-56 md:h-[320px] md:w-[320px]"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          {/* 3. Text Content Slider - Fully Readable */}
          <div className="relative z-20 flex flex-col pl-4 sm:pl-12 md:pl-[80px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentIndex}`}
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -80, opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                className="flex flex-col"
              >
                {/* Text Area */}
                <h3 className="mb-10 text-2xl font-medium leading-[1.3] text-white sm:text-4xl md:text-[45px] lg:leading-[1.4]">
                  "{testimonials[currentIndex].text}"
                </h3>

                {/* Meta Info - Perfectly Clear */}
                <div className="flex flex-col gap-1 border-l-2 border-[#ff3b30] pl-6 transition-all duration-300">
                  <h5 className="text-[20px] font-bold text-white tracking-wide">
                    {testimonials[currentIndex].name}
                  </h5>
                  <p className="text-[14px] font-medium text-gray-400">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            <div className="mt-14 flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${index === currentIndex
                    ? "w-12 bg-[#ff3b30] shadow-[0_0_20px_rgba(255,59,48,0.8)]"
                    : "w-3 bg-white/20 hover:bg-white/50"
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