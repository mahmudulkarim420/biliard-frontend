import SubPageLayout from "@/layouts/SubPageLayout";
import ServiceGrid from "@/pages/ServicesPage/Sections/ServiceGrid";
import FeaturesSection from "../HomePage/Sections/FeaturesSection";
import PricingSection from "../HomePage2/Sections/PricingSection";
import Partners from "../AboutPage/Sections/Partners";

const ServicesPage = () => {
  return (
    <SubPageLayout title="Our Services" breadcrumb="Home / Services">
      <div className="services-page-standardized">
        <ServiceGrid />
        <FeaturesSection/>
        <PricingSection showBackground={false} />
        <Partners/>
      </div>
    </SubPageLayout>
  );
};

export default ServicesPage;
