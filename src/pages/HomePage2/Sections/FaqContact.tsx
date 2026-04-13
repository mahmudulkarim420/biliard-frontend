// ─── External Libraries ──────────────────────────────────────────────────────
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

// ─── Local Assets ─────────────────────────────────────────────────────────────
import overBg from "@/assets/over.png";

// ─── Types ────────────────────────────────────────────────────────────────────
interface FaqItem {
  question: string;
  answer: string;
}

// ─── Static Data ──────────────────────────────────────────────────────────────
const faqs: FaqItem[] = [
  {
    question: "How much experience do you have in this field?",
    answer: "In a few seconds, our A.I. will generate amazing results that you can copy, paste & publish. No matter your native language.",
  },
  {
    question: "What happend to my design code?",
    answer: "In a few seconds, our A.I. will generate amazing results that you can copy, paste & publish. No matter your native language.",
  },
  {
    question: "What kind of services do you offer?",
    answer: "In a few seconds, our A.I. will generate amazing results that you can copy, paste & publish. No matter your native language.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
// Two-column section: an FAQ accordion on the left and a contact form on the
// right. The second FAQ item (index 1) is expanded by default to match the
// design reference. The dark background uses a layered image + gradient overlay.
const FaqContact = () => {
  // Tracks which FAQ accordion item is currently expanded (null = all closed).
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  // Logic: Toggle the selected FAQ; collapse it if it's already open.
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="relative w-full bg-[#0a0a0c] section-padding-h2 px-6 sm:px-12 lg:px-24 overflow-hidden">

      {/* ── Background Layers ── */}

      {/* Textured overlay image with a horizontal gradient to keep left-side text readable */}
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
        <img
          src={overBg}
          alt="Background pattern"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0c]/80 via-[#0a0a0c]/40 to-transparent" />
      </div>

      {/* Subtle dot-grid pattern — decorative, left panel only */}
      <div className="absolute left-0 top-0 h-full w-100 z-1 pointer-events-none opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotPattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="#ffffff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </div>

      <div className="mx-auto max-w-300 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── Left: FAQ Accordion ── */}
          <div className="w-full">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-brand">
              FAQS
            </p>
            <h2 className="mb-12 text-4xl font-bold leading-[1.2] text-white sm:text-5xl lg:text-[50px] tracking-tight">
              There are many <br /> variations of
            </h2>

            {/* Accordion list — uses CSS grid-rows trick for smooth height animation */}
            <div className="flex flex-col gap-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="bg-[#161619]/90 border border-white/5 rounded-sm overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-white/5"
                    >
                      <span className="text-[15px] font-bold text-white">
                        {faq.question}
                      </span>
                      <span className="ml-4 shrink-0 text-white">
                        {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                      </span>
                    </button>

                    {/* Expandable answer panel */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 pt-2 text-[14px] leading-relaxed text-gray-400">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Right: Contact Form ── */}
          <div className="w-full relative">
            <div className="bg-white p-10 sm:p-12 shadow-2xl rounded-xl w-full max-w-lg mx-auto lg:mr-0">
              <h3 className="text-3xl font-bold text-gray-900 mb-10 tracking-tight">
                Get In Touch
              </h3>

              <form className="flex flex-col gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border-b border-gray-200 bg-transparent py-3 text-[14px] text-gray-900 placeholder:text-gray-400 focus:border-brand focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Mail"
                  className="w-full border-b border-gray-200 bg-transparent py-3 text-[14px] text-gray-900 placeholder:text-gray-400 focus:border-brand focus:outline-none transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border-b border-gray-200 bg-transparent py-3 text-[14px] text-gray-900 placeholder:text-gray-400 focus:border-brand focus:outline-none transition-colors"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border-b border-gray-200 bg-transparent py-3 text-[14px] text-gray-900 placeholder:text-gray-400 focus:border-brand focus:outline-none transition-colors"
                />
                <textarea
                  placeholder="Your Message"
                  rows={2}
                  className="w-full border-b border-gray-200 bg-transparent py-3 text-[14px] text-gray-900 placeholder:text-gray-400 focus:border-brand focus:outline-none transition-colors resize-none"
                />

                <button
                  type="button"
                  className="mt-6 w-full bg-brand py-4 text-[13px] font-bold text-white transition-all hover:bg-[#e6352b] active:scale-[0.98] shadow-lg shadow-brand/20 rounded-sm"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FaqContact;