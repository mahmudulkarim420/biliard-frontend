import { ReactNode, useEffect } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PageHeader from "@/components/shared/PageHeader";
import ScrollToTop from "@/components/shared/ScrollToTop";
import Preloader from "@/components/shared/Preloader";
// If you want page transitions integrated into this wrapper
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "@/components/shared/PageTransition";

interface SubPageLayoutProps {
  title: string;
  breadcrumb: string;
  children: ReactNode;
}

const SubPageLayout = ({ title, breadcrumb, children }: SubPageLayoutProps) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex flex-col">
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
