// ─── External Libraries ──────────────────────────────────────────────────────
import { Outlet } from "react-router-dom";

// ─── Local Components ─────────────────────────────────────────────────────────
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

// ─── Layout ───────────────────────────────────────────────────────────────────
// Root layout for the primary Home page.
// Wraps routed page content between the shared glassmorphism Navbar and Footer.
const RootLayout = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
