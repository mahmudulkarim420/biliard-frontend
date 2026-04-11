// ─── Local Page Sections ──────────────────────────────────────────────────────
import Hero from "@/pages/HomePage2/Sections/Hero";
import AboutSection from "@/pages/HomePage2/Sections/AboutSection";
import Services from "@/pages/HomePage2/Sections/Services";
import PortfolioSlider from "@/pages/HomePage2/Sections/PortfolioSlider";
import ITFeatureSection from "@/pages/HomePage2/Sections/ITFeatureSection";
import FaqContact from "@/pages/HomePage2/Sections/FaqContact";
import PricingSection from "@/pages/HomePage2/Sections/PricingSection";

// ─── Shared Sections ──────────────────────────────────────────────────────────
import MarqueeDivider from "../HomePage/Sections/MarqueeDivider";
import BlogSection from "../HomePage/Sections/BlogSection";

// ─── Page ─────────────────────────────────────────────────────────────────────
// Home 2 page composition. Assembles all sections in vertical document order.
// The Services section overlaps the bottom of the Hero via a negative top margin.
const Home2 = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <MarqueeDivider />
      <Services />
      <PortfolioSlider />
      <ITFeatureSection />
      <FaqContact />
      <PricingSection />
      <BlogSection />
    </div>
  );
};

export default Home2;
