import SubPageLayout from "@/layouts/SubPageLayout";
import Portfolio from "@/pages/HomePage/Sections/Portfolio";

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
