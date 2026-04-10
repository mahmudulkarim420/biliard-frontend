import Hero from "@/pages/HomePage2/Sections/Hero";
import AboutSection from "@/pages/HomePage2/Sections/AboutSection";
import MarqueeDivider from "../HomePage/Sections/MarqueeDivider";
import Services from "@/pages/HomePage2/Sections/Services";
import PortfolioSlider from "@/pages/HomePage2/Sections/PortfolioSlider";
import ITFeatureSection from "@/pages/HomePage2/Sections/ITFeatureSection";
import FaqContact from "@/pages/HomePage2/Sections/FaqContact";
import PricingSection from "@/pages/HomePage2/Sections/PricingSection";
import BlogSection from "../HomePage/Sections/BlogSection";
const Home2 = () => {
  return (
    <div>
      <Hero />
      <AboutSection /> 
      <MarqueeDivider/>
      <Services/>
      <PortfolioSlider/>
      <ITFeatureSection/>
      <FaqContact/>
      <PricingSection/>
      <BlogSection/>
    </div>
  );
};

export default Home2;
