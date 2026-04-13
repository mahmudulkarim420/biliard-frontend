import { ReactNode, useEffect } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PageHeader from "@/components/shared/PageHeader";
import ScrollToTop from "@/components/shared/ScrollToTop";
import Preloader from "@/components/shared/Preloader";
import CustomCursor from "@/components/shared/CustomCursor";
// If you want page transitions integrated into this wrapper
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "@/components/shared/PageTransition";
import ScrollRestoration from "@/components/shared/ScrollRestoration";

interface SubPageLayoutProps {
  title: string;
  breadcrumb: string;
  children: ReactNode;
}

const SubPageLayout = ({ title, breadcrumb, children }: SubPageLayoutProps) => {
  const location = useLocation();

  return (
    <div className="relative min-h-screen flex flex-col">
      <ScrollRestoration />
      <CustomCursor />
      <Preloader />
      <Navbar />

      {/* Dynamic Page Header for internal pages */}
      <PageHeader title={title} breadcrumb={breadcrumb} />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            {children}
          </PageTransition>
        </AnimatePresence>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default SubPageLayout;
