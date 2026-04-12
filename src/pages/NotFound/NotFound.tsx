import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";


const NotFound = () => {
  return (
     <div className="min-h-[60vh] flex flex-col items-center justify-center relative overflow-hidden px-6 py-20">
        
        {/* ── Background Decoration ── */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(var(--color-brand) 2px, transparent 2px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* ── Main Content ── */}
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          
          {/* Large 404 with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative inline-block"
          >
            <h1 
              className="text-[120px] md:text-[200px] lg:text-[240px] font-black leading-none tracking-tighter text-transparent select-none"
              style={{
                WebkitTextStroke: "2px var(--color-brand)",
                fontFamily: 'var(--font-title)'
              }}
            >
              404
            </h1>
            
            {/* Floating billiard ball as the '0' or decorative */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-32 md:h-32 bg-brand rounded-full flex items-center justify-center shadow-2xl border-4 border-white"
            >
              <div className="w-12 h-12 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center">
                <span className="text-brand font-black text-xl md:text-3xl">8</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 md:mt-2"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-title mb-6">
              Oops! Page Missing.
            </h2>
            <p className="text-desc text-lg md:text-xl mb-10 max-w-md mx-auto">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/"
                className="group flex items-center gap-2 bg-brand text-white px-8 py-4 rounded-sm font-bold shadow-lg shadow-brand/20 hover:shadow-brand/40 transition-all duration-300 hover:-translate-y-1"
              >
                <Home className="w-5 h-5" />
                <span>Back to Home</span>
              </Link>
              
              <button
                onClick={() => window.history.back()}
                className="group flex items-center gap-2 bg-white text-title border border-gray-200 px-8 py-4 rounded-sm font-bold hover:bg-gray-50 transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span>Previous Page</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* ── Decorative Elements ── */}
        <motion.div 
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-10 w-24 h-24 bg-secondaryColor/20 rounded-full blur-2xl"
        />
        <motion.div 
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-10 w-40 h-40 bg-brand/10 rounded-full blur-[80px]"
        />
      </div>
  );
};

export default NotFound;
