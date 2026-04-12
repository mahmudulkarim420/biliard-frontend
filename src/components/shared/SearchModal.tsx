import { motion, AnimatePresence } from "framer-motion";
import { X, Search, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Small delay to ensure the modal is mounting/animating before focusing
      const timeout = setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md"
          />

          {/* Search Panel */}
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 left-0 w-full z-[101] bg-[#0c0c0e] border-b border-white/10 px-6 py-12 md:py-20 lg:py-24"
          >
            <div className="max-w-[1000px] mx-auto relative">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute -top-10 md:-top-16 right-0 text-white/50 hover:text-brand transition-colors p-2"
                aria-label="Close search"
              >
                <X className="h-8 w-8" />
              </button>

              {/* Search Form */}
              <div className="relative group">
                <Search className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-8 text-brand" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search for services, blogs, projects..."
                  className="w-full bg-transparent border-b-2 border-white/10 py-6 pl-12 pr-12 text-2xl md:text-5xl font-bold text-white placeholder:text-white/20 focus:outline-none focus:border-brand transition-all duration-500"
                />
                <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-brand text-white p-3 rounded-full hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="h-6 w-6" />
                </button>
              </div>

              {/* Suggestions / Meta Info */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10"
              >
                <div>
                  <h4 className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">Quick Links</h4>
                  <ul className="space-y-3">
                    {["Our Services", "Portfolio Gallery", "Latest News", "Career Opportunities"].map(link => (
                      <li key={link}>
                        <a href="#" className="text-white hover:text-brand font-bold text-lg transition-colors flex items-center gap-2 group">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand/40 group-hover:bg-brand transition-colors" />
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">Popular Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Biliard", "Training", "Championship", "Coaching", "Clubs", "Events"].map(tag => (
                      <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-brand hover:text-brand cursor-pointer transition-all">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-brand/10 rounded-2xl p-6 border border-brand/20">
                  <h4 className="text-brand text-xs font-bold uppercase tracking-[0.2em] mb-2">Need Help?</h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Can't find what you're looking for? Reach out to our support team for assistance.
                  </p>
                  <a href="/contact" className="inline-flex items-center gap-2 text-white font-bold hover:gap-4 transition-all">
                    Contact Us <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
