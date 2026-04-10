import { motion } from "framer-motion";
import img1 from "@/assets/img (2).png";
import img2 from "@/assets/img (3).png";
import img3 from "@/assets/img (4).png";
import img4 from "@/assets/img (5).png";
import img5 from "@/assets/img (6).png";

const portfolioItems = [
  { id: 1, title: "Newcastle Brand", category: "Branding", image: img1 },
  { id: 2, title: "Banana Concept", category: "Photography", image: img2 },
  { id: 3, title: "Minimal Coffee", category: "Creative", image: img3 },
  { id: 4, title: "Modern Chair", category: "Design", image: img4 },
  { id: 5, title: "Pure Nature", category: "Styling", image: img5 },
];

const PortfolioMarquee = () => {
  // স্লাইডারকে ইনফিনিট করার জন্য লিস্টটিকে ডুপ্লিকেট করা হয়েছে
  const duplicatedItems = [...portfolioItems, ...portfolioItems];

  return (
    <section className="bg-white py-24 overflow-hidden">
      {/* --- Section Header --- */}
      <div className="mx-auto max-w-[1200px] text-center mb-16 px-6">
        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-brand">
          OUR PORTFOLIO
        </p>
        <h2 className="text-4xl font-black text-title sm:text-5xl lg:text-[54px] tracking-tight">
          Our Fascinating Work
        </h2>
      </div>

      {/* --- Marquee Container --- */}
      <div className="flex w-full overflow-hidden">
        <motion.div
          className="flex gap-8 flex-nowrap"
          animate={{
            x: ["0%", "-50%"], // অর্ধেক লুপ শেষ হলে আবার শুরু থেকে আসবে
          }}
          transition={{
            duration: 25, // স্পিড কন্ট্রোল করতে এই ভ্যালু কমাতে-বাড়াতে পারো
            ease: "linear",
            repeat: Infinity,
          }}
          // হোভার করলে স্লাইডার থেমে যাবে
          whileHover={{ animationPlayState: "paused" }}
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={index}
              className="relative w-[300px] sm:w-[350px] aspect-[4/5] rounded-3xl overflow-hidden group cursor-pointer shrink-0"
            >
              {/* Image with Grayscale Effect */}
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
              />

              {/* Hover Overlay Content */}
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 z-10">
                <div className="bg-white px-8 py-5 rounded-2xl shadow-2xl w-max text-center">
                  <h4 className="text-lg font-bold text-title whitespace-nowrap">{item.title}</h4>
                  <p className="text-xs text-brand font-bold uppercase tracking-wider mt-1">{item.category}</p>
                </div>
              </div>

              {/* Subtle dark gradient overlay on hover */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- Optional: Bottom Spacing / Pagination Dots (Static for vibe) --- */}
      <div className="flex justify-center items-center gap-2 mt-12">
        <span className="w-1.5 h-1.5 rounded-full bg-gray-200"></span>
        <span className="w-6 h-1.5 rounded-full bg-brand"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-gray-200"></span>
      </div>
    </section>
  );
};

export default PortfolioMarquee;