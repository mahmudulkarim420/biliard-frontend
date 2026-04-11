// ─── External Libraries ──────────────────────────────────────────────────────
import { motion } from "framer-motion";

// ─── Animation Variants ───────────────────────────────────────────────────────
// Pure easeOut/easeInOut — no spring, no bounce, no stiffness/damping.
// Enter: page fades in and slides up from 20px below its final position.
// Exit:  page fades out and drifts 10px upward — fast and clean.
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

// ─── Component ────────────────────────────────────────────────────────────────
// Wraps any page to apply the shared enter/exit animation.
// Must be a direct child of <AnimatePresence> to receive exit signals.
// `overflow: hidden` prevents a horizontal scrollbar flash during y translate.
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ overflow: "hidden" }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
