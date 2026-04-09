import Hero from "@/pages/HomePage/Sections/Hero";
import Innovations from "@/pages/HomePage/Sections/Innovations";
import AboutUs from "@/pages/HomePage/Sections/AboutUs";
import MarqueeDivider from "@/pages/HomePage/Sections/MarqueeDivider";
import FeaturesSection from "@/pages/HomePage/Sections/FeaturesSection";
import Portfolio from "@/pages/HomePage/Sections/Portfolio";
import Collaboration from "@/pages/HomePage/Sections/Collaboration";
import Team from "@/pages/HomePage/Sections/Team";
import MarketingSection from "@/pages/HomePage/Sections/MarketingSection";
import Testimonial from "@/pages/HomePage/Sections/Testimonial";
import BlogSection from "@/pages/HomePage/Sections/BlogSection";
const Home = () => {
  return (
    <div>
      <Hero />
      <Innovations />
      <AboutUs />
      <MarqueeDivider />
      <FeaturesSection />
      <Portfolio />
      <Collaboration />
      <Team />
      <MarketingSection />
      <Testimonial />
      <BlogSection />
    </div>
  );
};

export default Home;
