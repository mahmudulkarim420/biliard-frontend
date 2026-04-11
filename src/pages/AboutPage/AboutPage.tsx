import SubPageLayout from "@/layouts/SubPageLayout";
import AboutExperience from "@/pages/AboutPage/Sections/AboutExperience";
import MarqueeDivider from "../HomePage/Sections/MarqueeDivider";
import OurHistory from "@/pages/AboutPage/Sections/OurHistory";
import StatCounter from "@/pages/AboutPage/Sections/StatCounter";
import Team from "../HomePage/Sections/Team";
import Testimonial from "../HomePage/Sections/Testimonial";
import Partners from "@/pages/AboutPage/Sections/Partners";
const AboutPage = () => {
  return (
    <SubPageLayout title="About Us" breadcrumb="Home / About Us">
      <div className="about-page-standardized">
        <AboutExperience />
        <MarqueeDivider/>
        <OurHistory/>
        <StatCounter/>
        <Team/>
        <Testimonial/>
        <Partners />
      </div>
    </SubPageLayout>
  );
};

export default AboutPage;