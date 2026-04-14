// ─── External Libraries ──────────────────────────────────────────────────────
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight, Plus, Minus } from "lucide-react";

// ─── Local Assets ─────────────────────────────────────────────────────────────
import img from "@/assets/img (13).png";

// ─── Types ────────────────────────────────────────────────────────────────────
interface ServiceItem {
  id: string;
  title: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

// ─── Static Data ──────────────────────────────────────────────────────────────
const services: ServiceItem[] = [
  { id: "01", title: "Product Design" },
  { id: "02", title: "Advertising" },
  { id: "03", title: "Website Development" },
  { id: "04", title: "Brand & Strategy" },
];

const faqs: FaqItem[] = [
  {
    question: "How much experience do you have in this field?",
    answer: "We have over a decade of experience in delivering high-quality digital solutions for global brands.",
  },
  {
    question: "What happened to my design code?",
    answer: "In a few seconds, our A.I. will generate amazing results that you can copy, paste & publish. No matter your native language or technical background.",
  },
  {
    question: "What kind of services do you offer?",
    answer: "We offer full-stack development, brand identity design, and performance-driven digital marketing.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
// Two-column section: an animated service list on the left and a FAQ
// accordion (powered by Framer Motion AnimatePresence) on the right.
// The second FAQ (index 1) is open by default to match the design reference.
const MarketingSection = () => {
  // Tracks the currently expanded FAQ item. null = all collapsed.
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section className="bg-[#F3F3F3] section-padding w-full overflow-hidden">
      <div className="max-w-300 xl:max-w-[1280px] 2xl:max-w-[1440px] px-5 md:px-8 xl:px-0 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 xl:gap-20 items-start">

        {/* ── Left: Service Offer List ── */}
        {/* Slides in from the left on first viewport entry. */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col text-center lg:text-left mx-auto lg:mx-0 max-w-full md:max-w-150 xl:max-w-[700px]"
        >
          <span className="text-brand text-[12px] md:text-[14px] xl:text-[16px] font-bold tracking-[0.2em] mb-4">
            OUR OFFER
          </span>

          <h2 className="text-[36px] md:text-5xl lg:text-6xl xl:text-[72px] 2xl:text-[80px] font-bold text-gray-900 leading-[1.1] mb-8 md:mb-10 tracking-tight">
            We perform best <br className="hidden xl:block" /> digital marketing
          </h2>

          {/* Thumbnail + description row */}
          <div className="flex flex-col md:flex-row gap-6 xl:gap-8 items-center lg:items-start mb-10 xl:mb-12">
            <div className="w-full md:w-1/3 shrink-0 overflow-hidden rounded-sm">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                src={img}
                alt="Team working"
                className="grayscale object-cover w-full h-40 md:h-32 xl:h-40"
              />
            </div>
            <p className="text-gray-500 text-[14px] md:text-sm xl:text-[16px] leading-relaxed text-center md:text-left">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at established fact that a reader will be by the readable content of a page.
            </p>
          </div>

          {/* Staggered service list — each row animates in on scroll */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 xl:gap-x-10 border-t border-gray-200">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex items-center justify-between py-5 xl:py-6 pr-6 border-b border-gray-200 group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[12px] xl:text-[14px] font-bold text-gray-400">{service.id}.</span>
                  <span className="text-[15px] xl:text-[18px] font-bold text-gray-900 group-hover:text-brand transition-colors">
                    {service.title}
                  </span>
                </div>
                <MoveRight className="w-4 h-4 xl:w-5 xl:h-5 text-gray-400 group-hover:text-brand group-hover:translate-x-1 transition-all" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Right: FAQ Accordion ── */}
        {/* Slides in from the right on first viewport entry. */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-4 lg:mt-16"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.03)] overflow-hidden border transition-colors duration-300 ${
                  isOpen ? "border-brand/20" : "border-transparent"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none"
                >
                  <span
                    className={`text-[16px] md:text-[18px] font-bold transition-colors duration-300 ${
                      isOpen ? "text-brand" : "text-gray-900"
                    }`}
                  >
                    {faq.question}
                  </span>
                  {/* Toggle icon — rotates and fills with brand color when open */}
                  <div
                    className={`rounded-full p-1.5 transition-all duration-300 ${
                      isOpen ? "bg-brand text-white rotate-180" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {/* Expandable answer panel — animated via Framer Motion height transition */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-8">
                        <p className="text-gray-500 text-sm leading-relaxed max-w-sm border-l-2 border-brand/20 pl-4">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default MarketingSection;