import { useState } from "react";
import { Check, Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import mainImg from "@/assets/img (17).png";

// --- Static Data ---
const featuresList = [
  {
    title: "Branding & Strategy",
    desc: "It is a long established fact that a reader",
  },
  {
    title: "No coding skills required",
    desc: "It is a long established fact that a reader",
  },
  {
    title: "Online Marketing",
    desc: "It is a long established fact that a reader",
  },
];

const ITFeatureSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative w-full bg-white pb-14 md:pb-20 lg:pb-[100px] xl:[120px] overflow-hidden">
      <div className="mx-auto max-w-300 xl:max-w-[1280px] 2xl:max-w-[1280px] px-5 md:px-8 xl:px-0">

        {/* ── Section Header (Updated for side-by-side on mobile) ── */}
        <div className="flex flex-row md:flex-row justify-between items-center md:items-center gap-4 md:gap-24 lg:gap-25 xl:gap-35 mb-20 xl:mb-15">
          <h2 className=" max-w-[190px] text-[16px] sm:max-w-[280px] sm:text-[24px] md:max-w-[500px] md:text-[30px] lg:max-w-[500px] lg:text-[40px] xl:max-w-[660px] xl:text-[54px] font-black leading-[1.3] md:leading-[1.5] text-title shrink">
            There are many <br className="hidden md:block" />
            variations of passages <br className="hidden md:block" />
            of available but majority
          </h2>

          {/* Rotating circular badge - Scaled for mobile side-by-side */}
          <div className="relative flex items-center lg:mr-60 xl:mr-80 justify-center shrink-0 w-24 h-24 sm:w-36 sm:h-36">
            <svg
              className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite]"
              viewBox="0 0 100 100"
            >
              <path
                id="textPath"
                d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                fill="transparent"
              />
              <text>
                <textPath
                  href="#textPath"
                  startOffset="0%"
                  className="text-[10px] font-bold tracking-[0.25em] uppercase fill-title"
                >
                  Agencyan Excellent Creative •
                </textPath>
              </text>
            </svg>

            <button
              onClick={() => setIsModalOpen(true)}
              className="relative z-10 flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-transparent border border-gray-200 text-title hover:bg-brand hover:text-white hover:border-brand transition-all duration-300"
            >
              <Play className="h-3 w-3 sm:h-4 sm:w-4 fill-current ml-0.5 sm:ml-1" />
            </button>
          </div>
        </div>

        {/* ── Bottom Content Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 items-center">
          <div className="relative w-full max-w-md mx-auto lg:mx-0 pl-10 pt-10">
            <div className="absolute top-0 -right-30 z-0">
              <svg width="260" height="250" viewBox="0 0 260 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_243_38)">
                  <path d="M116.202 147.015L170.302 198.852L139.786 228.194L85.847 176.148L85 175.33V176.507V250H42V176.507V175.333L41.153 176.147L-12.9751 228.194L-43.3029 198.853L10.7983 147.015L11.6969 146.154H10.4524H-66V104.846H10.4524H11.6938L10.7989 103.986L-43.3024 51.9652L-12.9762 22.8054L41.153 74.8531L42 75.6671V74.4927V1H85V74.4927V75.6699L85.847 74.8525L139.787 22.8049L170.301 51.9663L116.201 103.986L115.306 104.846H116.548H193V146.154H116.548H115.303L116.202 147.015Z" stroke="#FF3838" />
                </g>
                <defs>
                  <clipPath id="clip0_243_38">
                    <rect width="260" height="250" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="relative z-10 aspect-3/4 w-[85%] overflow-hidden rounded-sm">
              <img
                src={mainImg}
                alt="Startup Team"
                className="h-full w-full object-cover grayscale opacity-90"
              />
            </div>

            <div className="absolute top-6 left-0 z-20 w-60 bg-brand p-8 text-white shadow-2xl">
              <div className="mb-6">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="20" cy="12" r="6" />
                  <path d="M10 28C10 24 14 22 20 22C26 22 30 24 30 28V32H10V28Z" />
                  <rect x="22" y="24" width="14" height="10" rx="2" />
                  <circle cx="29" cy="29" r="2" fill="white" />
                </svg>
              </div>
              <h3 className="text-2xl text-white font-semibold leading-loose">
                High Quality <br /> IT Solutions <br /> for Startup
              </h3>
            </div>
          </div>

          <div className="w-full">
            <h4 className="text-xl sm:text-2xl  lg:max-w-[350px] lg:text-[16px] xl:max-w-[400px] xl:text-[18px] font-extrabold text-title mb-6 leading-[1.4] ">
              Creating a concise and effective design studio brief is crucial for outlining your business
            </h4>
            <p className="text-[14px] lg:max-w-[350px] lg:text-[14px] xl:max-w-[400px] xl:text-[16px] leading-relaxed text-desc mb-6 ">
              That a reader will be distracted by the readable content of a page when looking at established fact that a reader will be by the readable content.
            </p>

            <div className="flex flex-col sm:items-center md:items-center lg:items-start">
              {featuresList.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-5 py-6 ${index !== featuresList.length - 1 ? "border-b border-gray-100" : ""}`}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-white shadow-md shadow-brand/20 mt-1 transition-transform duration-300 hover:scale-110">
                    <Check className="h-5 w-5 stroke-[3px]" />
                  </div>

                  <div>
                    <h5 className="text-[17px] xl:text-[20px] font-bold text-title mb-1">
                      {feature.title}
                    </h5>
                    <p className="text-[14px] text-desc">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

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

export default ITFeatureSection;