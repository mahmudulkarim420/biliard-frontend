import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/main-logo.png";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800); // Slightly longer for maximum impact

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            filter: "blur(20px)",
            transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] } 
          }}
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#09090b]"
        >
          {/* Background Ambient Glow */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute h-125 w-125 rounded-full bg-brand/5 blur-[120px]"
          />

          <div className="relative">
            {/* Morphing Rotating Rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  rotate: i % 2 === 0 ? 360 : -360,
                  borderWidth: [ "1px", "2px", "1px"],
                  scale: [1, 1.1 + (i * 0.1), 1]
                }}
                transition={{ 
                  rotate: { duration: 10 + (i * 2), repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  borderWidth: { duration: 2, repeat: Infinity }
                }}
                className="absolute inset-0 -m-12 rounded-full border border-brand/20"
                style={{ 
                  padding: i * 20,
                  opacity: 0.3 - (i * 0.1)
                }}
              />
            ))}

            {/* Logo Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ 
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="relative flex flex-col items-center"
            >
              {/* Spinning Glow behind Logo */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-linear-to-tr from-brand/20 to-transparent blur-2xl"
              />

              <div className="relative h-44 w-44 md:h-56 md:w-56 overflow-hidden">
                <motion.img 
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  src={logo} 
                  alt="Loading Logo" 
                  className="h-full w-full object-contain drop-shadow-[0_0_30px_rgba(255,56,56,0.4)]"
                />
                
                {/* Shine Effect over logo */}
                <motion.div 
                  className="absolute inset-0 z-10 w-1/2 bg-linear-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                  animate={{ left: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                />
              </div>

              {/* Minimalist Progress Indicator */}
              <div className="mt-16 flex flex-col items-center gap-4">
                <div className="h-px w-64 md:w-80 overflow-hidden bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ 
                      duration: 2.2,
                      ease: [0.65, 0, 0.35, 1]
                    }}
                    className="h-full bg-brand shadow-[0_0_15px_rgba(255,56,56,0.8)]"
                  />
                </div>
                
                <motion.div 
                   animate={{ opacity: [0.3, 0.7, 0.3] }}
                   transition={{ duration: 1.5, repeat: Infinity }}
                   className="flex gap-2"
                >
                  <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-white/40">
                    Initializing
                  </span>
                  <motion.span
                    animate={{ content: [".", "..", "..."] }}
                    className="text-[10px] text-white/40"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
