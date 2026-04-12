import SubPageLayout from "@/layouts/SubPageLayout";
import Portfolio from "@/pages/HomePage/Sections/Portfolio";
import Testimonial from "@/pages/HomePage/Sections/Testimonial";
import Partners from "@/pages/AboutPage/Sections/Partners";
import FaqContact from "@/pages/HomePage2/Sections/FaqContact";

const PortfolioPage = () => {
  return (
    <SubPageLayout title="Our Portfolio" breadcrumb="Home / Portfolio">
      <div className="portfolio-page-standardized">
        <Portfolio />
      </div>
    </SubPageLayout>
  );
};

export default PortfolioPage;
