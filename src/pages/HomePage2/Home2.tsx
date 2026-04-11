// ─── Local Page Sections ──────────────────────────────────────────────────────
import Hero from "@/pages/HomePage2/Sections/Hero";
import AboutSection from "@/pages/HomePage2/Sections/AboutSection";
import Services from "@/pages/HomePage2/Sections/Services";
import PortfolioSlider from "@/pages/HomePage2/Sections/PortfolioSlider";
import ITFeatureSection from "@/pages/HomePage2/Sections/ITFeatureSection";
import FaqContact from "@/pages/HomePage2/Sections/FaqContact";
import PricingSection from "@/pages/HomePage2/Sections/PricingSection";

// ─── Shared Sections ──────────────────────────────────────────────────────────
import MarqueeDividerH2 from "@/pages/HomePage2/Sections/MarqueeDividerH2";
import BlogSectionH2 from "@/pages/HomePage2/Sections/BlogSectionH2";

// ─── Page ─────────────────────────────────────────────────────────────────────
// Home 2 page composition. Assembles all sections in vertical document order.
// The Services section overlaps the bottom of the Hero via a negative top margin.
const Home2 = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <MarqueeDividerH2 />
      <Services />
      <PortfolioSlider />
      <ITFeatureSection />
      <FaqContact />
      <PricingSection />
      <BlogSectionH2 />
    </div>
  );
};

export default Home2;
