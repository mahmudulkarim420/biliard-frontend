import SubPageLayout from "@/layouts/SubPageLayout";
import { ArrowDownRight } from "lucide-react";

const CareerPage = () => {
  const jobs = [
    { title: "UI/UX Designer", salary: "$400/month", type: "Part Time" },
    { title: "Frontend Developer", salary: "$400/month", type: "Part Time" },
    { title: "Javascript Engineer", salary: "$400/month", type: "Part Time" },
    { title: "Software Engineer", salary: "$400/month", type: "Part Time" },
  ];

  return (
    <SubPageLayout title="Careers" breadcrumb="Home / Career">
      <div className="career-page-standardized bg-white">
        <section className="section-padding">
          <div className="container-custom">
            <div className="mx-auto max-w-[1200px]">
              <div className="max-w-[400px]">
                <h2 className="text-[36px] font-bold leading-[1.05] tracking-tight text-title md:text-[54px]">
                  Recently we are looking for
                </h2>
              </div>

              <div className="mt-12 w-full border-t border-black/10">
                {jobs.map((job, idx) => (
                  <div
                    key={idx}
                    className="group grid grid-cols-1 gap-3 border-b border-black/10 py-7 md:grid-cols-[1.2fr_1fr_1fr_auto] md:items-center md:gap-6"
                  >
                    <div>
                      <h4 className="text-[20px] font-bold text-title">
                        {job.title}
                      </h4>
                    </div>

                    <div>
                      <p className="text-[14px] font-medium text-desc md:text-[20px]">
                        {job.salary}
                      </p>
                    </div>

                    <div>
                      <p className="text-[14px] font-medium text-desc md:text-[20px]">
                        {job.type}
                      </p>
                    </div>

                    <div className="md:justify-self-end">
                      <button className="inline-flex items-center gap-1 border-b border-brand/30 pb-1 text-[16px] font-semibold text-brand transition-colors group-hover:border-brand">
                        Explore More
                        <ArrowDownRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </SubPageLayout>
  );
};

export default CareerPage;
