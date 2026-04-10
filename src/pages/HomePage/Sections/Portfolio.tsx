import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import port1 from "@/assets/img (2).png";
import port2 from "@/assets/img (3).png";
import port3 from "@/assets/img (4).png";
import port4 from "@/assets/img (5).png";
import port5 from "@/assets/img (6).png";
import port6 from "@/assets/img (7).png";

const categories = ["All", "Web Design", "Development", "App", "Brochure", "Branding"];

const portfolioData = [
  { id: 1, title: "Newcastle Brand", category: "Branding", image: port1 },
  { id: 2, title: "Minimalist Setup", category: "Web Design", image: port2 },
  { id: 3, title: "Corporate Identity", category: "Development", image: port3 },
  { id: 4, title: "Mobile App Wireframe", category: "App", image: port4 },
  { id: 5, title: "Product Brochure", category: "Brochure", image: port5 },
  { id: 6, title: "E-Commerce Strategy", category: "Development", image: port6 },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = portfolioData.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <section className="relative w-full bg-white px-6 pt-[110px] pb-[110px] sm:px-12 lg:px-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Header Section */}
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <h2 className="text-4xl font-bold leading-none text-gray-900 md:text-5xl lg:text-[56px]">
            Our Portfolio
          </h2>

          {/* Categories Navigation */}
          <ul className="flex flex-wrap gap-x-8 gap-y-4">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => setActiveCategory(category)}
                  className={`relative text-[13px] font-bold tracking-wider transition-colors duration-300 ${activeCategory === category ? "text-gray-900" : "text-gray-400 hover:text-gray-900"
                    }`}
                >
                  {category}
                  {/* নিচের ছোট আন্ডারলাইন এনিমেশন */}
                  {activeCategory === category && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 h-[2px] w-full bg-[#ff3b30]"
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Portfolio Grid with Animation */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-gray-100"
              >
                {/* Project Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover grayscale transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:grayscale-0"
                />

                {/* Hover Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 rounded bg-white py-5 text-center opacity-0 shadow-2xl transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  <h4 className="mb-1 text-lg font-bold text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-[12px] font-semibold text-gray-500 uppercase tracking-wider">
                    {item.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;