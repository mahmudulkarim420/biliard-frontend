// ─── External Libraries ──────────────────────────────────────────────────────
import { Outlet } from "react-router-dom";

// ─── Local Components ─────────────────────────────────────────────────────────
import Navbar2 from "@/components/shared/Navbar2";
import Footer from "@/components/shared/Footer";

// ─── Layout ───────────────────────────────────────────────────────────────────
// Root layout for the Home 2 page variant.
// Wraps routed page content between the shared Navbar2 and Footer.
const Home2Layout = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar2 />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Home2Layout;
