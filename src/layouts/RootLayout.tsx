// ─── External Libraries ──────────────────────────────────────────────────────
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// ─── Local Components ─────────────────────────────────────────────────────────
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PageTransition from "@/components/shared/PageTransition";

// ─── Layout ───────────────────────────────────────────────────────────────────
// Root layout for the primary Home page.
// AnimatePresence is keyed by pathname so it can detect route changes and
// trigger the exit animation before the next page mounts.
const RootLayout = () => {
  const location = useLocation();

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
