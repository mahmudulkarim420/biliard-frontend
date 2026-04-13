// ─── External Libraries ──────────────────────────────────────────────────────
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { Home, ArrowRight, Compass } from "lucide-react";

// ─── Local Components ─────────────────────────────────────────────────────────
import ScrollToTop from "@/components/shared/ScrollToTop";
import CustomCursor from "@/components/shared/CustomCursor";
import Preloader from "@/components/shared/Preloader";
import ScrollRestoration from "@/components/shared/ScrollRestoration";

// ─── Local Assets ─────────────────────────────────────────────────────────────
import logo from "@/assets/logo.png";

// ─── Ease ─────────────────────────────────────────────────────────────────────
const expo = [0.16, 1, 0.3, 1] as const;

// ══════════════════════════════════════════════════════════════════════════════
// Sub-components
// ══════════════════════════════════════════════════════════════════════════════

/** Tilted ellipse that rotates around its centre — looks like a 3-D orbit ring */
const OrbitRing = ({
  size,
  tiltX = 70,
  color = "rgba(255,59,48,0.18)",
  duration = 12,
  delay = 0,
  className = "",
}: {
  size: number;
  tiltX?: number;
  color?: string;
  duration?: number;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    className={className}
    style={{
      width: size,
      height: size,
      borderRadius: "50%",
      border: `1.5px solid ${color}`,
      rotateX: tiltX,
      transformStyle: "preserve-3d",
    }}
    animate={{ rotateZ: 360 }}
    transition={{ duration, repeat: Infinity, ease: "linear", delay }}
  />
);

/** Six-face wireframe box that spins on all three axes */
const WireframeCube = ({
  size = 80,
  color = "rgba(255,59,48,0.22)",
  duration = 9,
}: {
  size?: number;
  color?: string;
  duration?: number;
}) => {
  const half = size / 2;
  const faces = [
    { rotateY: 0,    translateZ: half },
    { rotateY: 180,  translateZ: half },
    { rotateY: 90,   translateZ: half },
    { rotateY: -90,  translateZ: half },
    { rotateX: 90,   translateZ: half },
    { rotateX: -90,  translateZ: half },
  ];

  return (
    <motion.div
      style={{ width: size, height: size, transformStyle: "preserve-3d", position: "relative" }}
      animate={{ rotateX: 360, rotateY: 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      {faces.map((f, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            border: `1px solid ${color}`,
            transform: `rotateY(${f.rotateY ?? 0}deg) rotateX(${f.rotateX ?? 0}deg) translateZ(${f.translateZ}px)`,
            background: "transparent",
            backfaceVisibility: "visible",
          }}
        />
      ))}
    </motion.div>
  );
};

/** Floating particle dot */
const Dot = ({
  size,
  top,
  left,
  delay,
  dur,
}: {
  size: number;
  top: string;
  left: string;
  delay: number;
  dur: number;
}) => (
  <motion.div
    style={{
      position: "absolute",
      width: size,
      height: size,
      borderRadius: "50%",
      background: "#ff3b30",
      top,
      left,
    }}
    animate={{ y: [0, -22, 0], opacity: [0.15, 0.45, 0.15], scale: [1, 1.5, 1] }}
    transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay }}
  />
);

// ══════════════════════════════════════════════════════════════════════════════
// Main Component
// ══════════════════════════════════════════════════════════════════════════════
const NotFound = () => {
  const location = useLocation();

  /* ── Mouse tracking ── */
  const mouseX = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 0);

  const W = typeof window !== "undefined" ? window.innerWidth : 1440;
  const H = typeof window !== "undefined" ? window.innerHeight : 900;

  // Main 3-D card tilt
  const rawRotX = useTransform(mouseY, [0, H], [14, -14]);
  const rawRotY = useTransform(mouseX, [0, W], [-14, 14]);
  const rotateX = useSpring(rawRotX, { stiffness: 70, damping: 22 });
  const rotateY = useSpring(rawRotY, { stiffness: 70, damping: 22 });

  // Background parallax (opposite direction, slower)
  const bgX = useSpring(useTransform(mouseX, [0, W], [18, -18]), { stiffness: 35, damping: 18 });
  const bgY = useSpring(useTransform(mouseY, [0, H], [18, -18]), { stiffness: 35, damping: 18 });

  // Foreground floating (same dir, faster)
  const fgX = useSpring(useTransform(mouseX, [0, W], [-8, 8]), { stiffness: 50, damping: 20 });
  const fgY = useSpring(useTransform(mouseY, [0, H], [-8, 8]), { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-[#fafafa] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <ScrollRestoration />
      <CustomCursor />
      <Preloader />

      {/* ════════════════════════════════════════
          LAYER 0 — static dot grid
      ════════════════════════════════════════ */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, #0f172a 1px, transparent 0)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* ════════════════════════════════════════
          LAYER 1 — background (parallax away)
      ════════════════════════════════════════ */}
      <motion.div style={{ x: bgX, y: bgY }} className="pointer-events-none absolute inset-0">
        {/* Glow orbs */}
        <motion.div
          className="absolute -top-48 -left-48 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,59,48,0.07) 0%, transparent 65%)" }}
          animate={{ scale: [1, 1.18, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-48 -right-48 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,59,48,0.05) 0%, transparent 65%)" }}
          animate={{ scale: [1, 1.22, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        />

        {/* ── Orbit rings — top-left cluster ── */}
        <div
          className="absolute"
          style={{ perspective: "700px", top: "5%", left: "2%", width: 320, height: 320 }}
        >
          <OrbitRing size={310} tiltX={70} color="rgba(255,59,48,0.14)" duration={16} />
          <div style={{ position: "absolute", top: 60, left: 60 }}>
            <OrbitRing size={180} tiltX={55} color="rgba(255,59,48,0.10)" duration={11} delay={1} />
          </div>
        </div>

        {/* ── Orbit rings — bottom-right cluster ── */}
        <div
          className="absolute"
          style={{ perspective: "700px", bottom: "5%", right: "2%", width: 280, height: 280 }}
        >
          <OrbitRing size={260} tiltX={65} color="rgba(255,59,48,0.12)" duration={13} delay={3} />
          <div style={{ position: "absolute", top: 55, left: 55 }}>
            <OrbitRing size={150} tiltX={50} color="rgba(255,59,48,0.09)" duration={9} delay={1.5} />
          </div>
        </div>

        {/* ── Wireframe cubes ── */}
        <div style={{ perspective: "500px", position: "absolute", top: "12%", right: "10%" }}>
          <WireframeCube size={90} color="rgba(255,59,48,0.22)" duration={10} />
        </div>
        <div style={{ perspective: "500px", position: "absolute", bottom: "15%", left: "8%" }}>
          <WireframeCube size={65} color="rgba(255,59,48,0.18)" duration={14} />
        </div>
        <div style={{ perspective: "400px", position: "absolute", top: "50%", right: "6%" }}>
          <WireframeCube size={42} color="rgba(255,59,48,0.14)" duration={8} />
        </div>
        <div style={{ perspective: "400px", position: "absolute", top: "30%", left: "4%" }}>
          <WireframeCube size={30} color="rgba(255,59,48,0.12)" duration={11} />
        </div>

        {/* ── Floating particles ── */}
        <Dot size={8}  top="18%"  left="18%"  delay={0}    dur={4.5} />
        <Dot size={5}  top="62%"  left="78%"  delay={1.2}  dur={5.2} />
        <Dot size={10} top="77%"  left="32%"  delay={0.6}  dur={4.0} />
        <Dot size={6}  top="28%"  left="88%"  delay={2.0}  dur={6.0} />
        <Dot size={4}  top="85%"  left="62%"  delay={0.3}  dur={3.8} />
        <Dot size={7}  top="10%"  left="60%"  delay={1.7}  dur={5.5} />
        <Dot size={5}  top="45%"  left="94%"  delay={2.4}  dur={4.2} />
        <Dot size={9}  top="90%"  left="50%"  delay={0.9}  dur={5.8} />
      </motion.div>

      {/* ── Scan line ── */}
      <motion.div
        className="pointer-events-none absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent"
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* ════════════════════════════════════════
          LAYER 2 — 3-D scene (mouse tilt)
      ════════════════════════════════════════ */}
      <div style={{ perspective: "1100px" }} className="relative z-10 w-full max-w-[820px] px-6">
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: expo }}
          className="flex flex-col items-center text-center"
        >

          {/* ── Logo (lifted out of plane) ── */}
          <motion.div
            initial={{ opacity: 0, y: -32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: expo }}
            style={{ transform: "translateZ(50px)" }}
            className="flex items-center gap-3 mb-14"
          >
            <motion.img
              src={logo}
              alt="Biliard logo"
              className="h-10 w-10 drop-shadow-md"
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
            />
            <span
              className="text-2xl font-black tracking-widest text-title uppercase"
              style={{ fontFamily: "var(--font-title)" }}
            >
              BILIARD
            </span>
          </motion.div>

          {/* ── Giant "404" with 3-D depth shadow ── */}
          <motion.div
            style={{ transform: "translateZ(80px)", transformStyle: "preserve-3d" }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative select-none mb-3"
          >
            {/* Depth blur shadow */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                fontFamily: "var(--font-title)",
                fontSize: "clamp(100px, 18vw, 220px)",
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: "-0.04em",
                WebkitTextStroke: "1px rgba(255,59,48,0.3)",
                color: "transparent",
                transform: "translate(10px, 14px) translateZ(-40px)",
                filter: "blur(10px)",
              }}
            >
              404
            </div>

            {/* Staggered digit entry */}
            <h1
              className="text-transparent flex"
              style={{
                fontFamily: "var(--font-title)",
                fontSize: "clamp(100px, 18vw, 220px)",
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: "-0.04em",
              }}
              aria-label="404"
            >
              {["4", "0", "4"].map((digit, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, rotateX: -90, y: 80, filter: "blur(20px)" }}
                  animate={{ opacity: 1, rotateX: 0, y: 0, filter: "blur(0px)" }}
                  transition={{
                    delay: 0.35 + i * 0.18,
                    duration: 1,
                    ease: expo,
                  }}
                  whileHover={{
                    scale: 1.1,
                    WebkitTextStroke: "2.5px #ff3b30",
                    filter: "drop-shadow(0 0 20px rgba(255,59,48,0.5))",
                    transition: { type: "spring", stiffness: 350, damping: 14 },
                  } as any}
                  style={{
                    WebkitTextStroke: "1.5px #ff3b30",
                    display: "inline-block",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {digit}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          {/* ── Breathing divider ── */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 1, duration: 0.6, ease: expo }}
            style={{ transform: "translateZ(40px)" }}
            className="flex items-center gap-3 mb-8"
          >
            <motion.div
              className="h-px bg-brand/40 rounded-full"
              animate={{ width: [28, 60, 28] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              animate={{ scale: [1, 1.7, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="h-2.5 w-2.5 rounded-full bg-brand flex-shrink-0"
            />
            <motion.div
              className="h-px bg-brand/40 rounded-full"
              animate={{ width: [28, 60, 28] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            />
          </motion.div>

          {/* ── Heading — letter-by-letter ── */}
          <div style={{ transform: "translateZ(35px)" }}>
            <h2
              className="font-extrabold leading-tight tracking-tight text-title mb-4"
              style={{
                fontFamily: "var(--font-title)",
                fontSize: "clamp(22px, 4vw, 40px)",
              }}
            >
              {"Oops! Page Not Found".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + i * 0.032, duration: 0.4, ease: "easeOut" }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h2>
          </div>

          {/* ── Sub-heading ── */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.75, duration: 0.65, ease: expo }}
            style={{ transform: "translateZ(25px)" }}
            className="text-[15px] md:text-[17px] leading-[1.8] text-desc max-w-[500px] mb-10"
          >
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </motion.p>

          {/* ── CTA Buttons (highest z — pop forward most) ── */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.05, duration: 0.65, ease: expo }}
            style={{ transform: "translateZ(70px)" }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            {/* Primary */}
            <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/"
                className="group relative inline-flex items-center gap-2.5 bg-brand text-white font-bold text-[15px] px-8 py-4 rounded-full overflow-hidden shadow-[0_6px_28px_-4px_rgba(255,59,48,0.45)]"
              >
                {/* Shimmer */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12"
                  animate={{ x: ["-120%", "220%"] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.6 }}
                />
                <Home className="h-4 w-4 relative z-10" />
                <span className="relative z-10">Back to Home</span>
                <ArrowRight className="h-4 w-4 relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </motion.div>

            {/* Secondary */}
            <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2.5 border border-title/15 bg-white/80 backdrop-blur-sm text-title font-bold text-[15px] px-8 py-4 rounded-full transition-colors duration-300 hover:border-brand/40 hover:text-brand hover:shadow-lg"
              >
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                >
                  <Compass className="h-4 w-4" />
                </motion.span>
                Browse Pages
              </Link>
            </motion.div>
          </motion.div>

          {/* ── Quick nav links ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.6 }}
            style={{ transform: "translateZ(30px)" }}
            className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2"
          >
            {[
              { label: "About",     href: "/about" },
              { label: "Services",  href: "/services" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Blog",      href: "/blog" },
              { label: "Contact",   href: "/contact" },
            ].map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 + i * 0.09, duration: 0.4 }}
              >
                <Link
                  to={link.href}
                  className="text-[13px] font-semibold text-desc hover:text-brand transition-colors duration-200 underline-offset-4 hover:underline"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>

      {/* ════════════════════════════════════════
          LAYER 3 — foreground floating elements
          (move with mouse, toward viewer)
      ════════════════════════════════════════ */}
      <motion.div
        style={{ x: fgX, y: fgY }}
        className="pointer-events-none absolute inset-0"
      >
        {/* Small ring — mid-left */}
        <div style={{ perspective: "400px", position: "absolute", top: "42%", left: "1%" }}>
          <OrbitRing size={100} tiltX={60} color="rgba(255,59,48,0.2)" duration={8} />
        </div>
        {/* Tiny ring — mid-right */}
        <div style={{ perspective: "400px", position: "absolute", top: "35%", right: "1%" }}>
          <OrbitRing size={70} tiltX={65} color="rgba(255,59,48,0.18)" duration={6} delay={1} />
        </div>
      </motion.div>

      <ScrollToTop />
    </div>
  );
};

export default NotFound;
