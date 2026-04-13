import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { portfolioData } from "@/lib/portfolio-data";

const categories = ["All", "Web Design", "Development", "App", "Brochure", "Branding"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = portfolioData.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <section className="relative w-full bg-white section-padding section-padding-x">
      <div className="mx-auto max-w-300">

        {/* ── Section Header + Category Filter ── */}
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <h2 className="text-4xl font-bold leading-none text-gray-900 md:text-5xl lg:text-[56px]">
            Our Portfolio
          </h2>

          <ul className="flex flex-wrap gap-x-8 gap-y-4">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => setActiveCategory(category)}
                  className={`relative text-[13px] font-bold tracking-wider transition-colors duration-300 ${
                    activeCategory === category ? "text-gray-900" : "text-gray-400 hover:text-gray-900"
                  }`}
                >
                  {category}
                  {activeCategory === category && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 h-0.5 w-full bg-brand"
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Portfolio Grid ── */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <Link 
                key={item.id} 
                to={`/portfolio/${item.id}`}
                className="block"
              >
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="group relative aspect-4/3 w-full overflow-hidden rounded-[20px] bg-gray-100 cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover grayscale transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:grayscale-0"
                  />

                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 rounded bg-white py-5 text-center opacity-0 shadow-2xl transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                    <h4 className="mb-1 text-lg font-bold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-[12px] font-semibold text-gray-500 uppercase tracking-wider">
                      {item.category}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;