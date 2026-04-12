// ─── External Libraries ──────────────────────────────────────────────────────
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// ─── Local Components ─────────────────────────────────────────────────────────
import Navbar2 from "@/components/shared/Navbar2";
import Footer from "@/components/shared/Footer";
import PageTransition from "@/components/shared/PageTransition";
import ScrollToTop from "@/components/shared/ScrollToTop";
import Preloader from "@/components/shared/Preloader";
import CustomCursor from "@/components/shared/CustomCursor";

// ─── Layout ───────────────────────────────────────────────────────────────────
// Root layout for the Home 2 page variant.
// AnimatePresence is keyed by pathname so it can detect route changes and
// trigger the exit animation before the next page mounts.
const Home2Layout = () => {
  const location = useLocation();

  return (
    <div className="relative min-h-screen flex flex-col">
      <CustomCursor />
      <Preloader />
      <Navbar2 />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home2Layout;
