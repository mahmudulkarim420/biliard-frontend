import { useParams, Link } from "react-router-dom";
import SubPageLayout from "@/layouts/SubPageLayout";
import { portfolioData } from "@/lib/portfolio-data";
import { Check } from "lucide-react";
import mainImage from "@/assets/img (18).png";
import detailImageOne from "@/assets/img (19).png";
import detailImageTwo from "@/assets/img (20).png";

const PortfolioDetails = () => {
  const { id } = useParams<{ id: string }>();

  const project = portfolioData.find((item) => item.id.toString() === id);

  if (!project) {
    return (
      <SubPageLayout title="Project Not Found" breadcrumb="Home / Portfolio / Error">
        <div className="section-padding text-center">
          <h2 className="text-3xl font-extrabold text-title mb-6">Oops! Project doesn't exist.</h2>
          <Link to="/portfolio" className="bg-brand text-white px-8 py-3 rounded-full font-bold transition-transform hover:scale-105 inline-block">
            Back to Portfolio
          </Link>
        </div>
      </SubPageLayout>
    );
  }

  return (
    <SubPageLayout title="Portfolio Details" breadcrumb={`Home / Portfolio / ${project.title}`}>
      <section className="pt-[130px] pb-[50px] bg-white">
        <div className="">

          <div className="max-w-300 mx-auto">
            
            {/* ── Top Header Section ── */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16">
              <div className="lg:col-span-6 mb-12">
                <h2 className="text-[32px] md:text-[54px] font-semibold leading-[1.3] tracking-tight text-title">
                  We drive into your business dream in order bring.
                </h2>
              </div>
              <div className="lg:col-span-6 flex flex-col gap-6">
                <p className="text-[15px] md:text-[16px] leading-[2.2] text-desc">
                  It is a long established fact that a reader will be distracted by the  readable content of a page when looking at established fact that a  reader will be by the readable content of a page when looking at the Creative Director and development team to blend user needs 
                </p>
              </div>
            </div>

            {/* ── Project Info Grid ── */}
            <div className="py-10 border-t border-b border-gray-100 mb-25">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-gray-400 mb-1">
                    
                    <span className="text-[18px] font-semibold text-title uppercase ">Clients</span>
                  </div>
                  <p className="text-[15px] font-bold ">Art Media & News</p>
                </div>
                
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-gray-400 mb-1">
                    
                    <span className="text-[18px] font-semibold text-title uppercase ">Budget</span>
                  </div>
                  <p className="text-[15px] font-bold ">$270</p>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-gray-400 mb-1">
                    
                    <span className="text-[18px] font-semibold text-title uppercase ">Category</span>
                  </div>
                  <p className="text-[15px] font-bold ">Business & Consulting</p>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-gray-400 mb-1">
                    
                    <span className="text-[18px] font-semibold text-title uppercase ">Website</span>
                  </div>
                  <a href="#" className="text-[15px] font-bold hover:text-brand text-desc underline transition-colors">www.creativemela.com</a>
                </div>
              </div>
            </div>

            {/* ── Main Project Image ── */}
            <div className="rounded-md overflow-hidden mb-20 ">
              <img
                src={mainImage}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>

            {/* ── Solution Section ── */}
            <div className="mb-20">
              <div className="max-w-238">
                <h3 className="text-[28px] md:text-[36px] font-extrabold text-title mb-6 tracking-tight">
                  Our Solution
                </h3>
                <p className="text-[15px] md:text-[16px] leading-[1.8] text-desc mb-10">
                  It is a long established fact that a reader will be distracted by the  readable content of a page when looking at established fact that a  reader will be by the readable content of a page when looking at the Creative Director and development team to blend user needs  Duis sed augue condimentum, blandit sapien in, accumsan eros. Curabitur  sodales pulvinar libero et venenatis. Nullam eleifend risus a quam  dictum auctor. Mauris .
                </p>
                
                {/* Two Supporting Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div className="rounded-lg overflow-hidden h-62">
                    <img src={detailImageOne} alt="Visual 1" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-lg overflow-hidden h-62">
                    <img src={detailImageTwo} alt="Visual 2" className="w-full h-full object-cover" />
                  </div>
                </div>

                <p className="text-[15px] md:text-[16px] leading-[1.8] text-desc mb-8">
                  That a reader will be distracted by the  readable content of a page when looking at established fact that a  reader will be by the readable content of a page when looking at the Creative Director and development team to blend user needs  Duis sed augue condimentum, blandit sapien in, accumsan eros. Curabitur  sodales pulvinar libero et venenatis. Nullam eleifend risus a quam  dictum auctor. Mauris .
                </p>

                {/* Feature List */}
                <div className="space-y-4">
                  {[
                    "We deploy world-class creative design, team on demand. that can design",
                    "measure’s of success is when a client partner with more than once",
                    "Visual hierarchy is the principle of arranging elements to show their order of importance",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 group">
                      <div className="mt-1 bg-brand/10 p-1 rounded-full group-hover:bg-brand transition-colors">
                        <Check className="h-3 w-3 text-brand group-hover:text-white transition-colors" />
                      </div>
                      <p className="text-[15px] font-medium text-desc">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </SubPageLayout>
  );
};

export default PortfolioDetails;