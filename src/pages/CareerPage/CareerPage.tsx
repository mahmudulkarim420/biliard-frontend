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
          <div className="px-5 md:px-8 xl:px-0 mx-auto max-w-300 xl:max-w-[1280px] 2xl:max-w-[1280px] ">
            <div>
              <div className="mx-auto max-w-[80%] text-center lg:mx-0 lg:max-w-100 lg:text-left xl:max-w-[600px] 2xl:max-w-[700px]">
                <h2 className="text-[36px] font-bold leading-[1.1] tracking-tight text-title md:text-[40px] xl:text-[54px] ">
                  Recently we are <br className="hidden xl:block" /> looking for
                </h2>
              </div>

              <div className="mt-12 w-full border-t border-black/10 xl:mt-16 2xl:mt-20">
                {jobs.map((job, idx) => (
                  <div
                    key={idx}
                    className="group grid grid-cols-1 gap-6 border-b border-black/10 py-8 md:grid-cols-2 md:gap-10 lg:grid-cols-[1.2fr_1fr_1fr_auto] lg:items-center xl:gap-16 xl:py-10 2xl:py-12"
                  >
                    <div className="text-center md:text-left lg:max-w-[90%] xl:max-w-[85%]">
                      <h4 className="text-[20px] font-bold text-title xl:text-[20px] ">
                        {job.title}
                      </h4>
                    </div>

                    <div className="text-center md:text-left">
                      <p className="text-[14px] font-medium text-desc md:text-[18px] xl:text-[20px] ">
                        {job.salary}
                      </p>
                    </div>

                    <div className="text-center md:text-left">
                      <p className="text-[14px] font-medium text-desc md:text-[18px] xl:text-[20px] ">
                        {job.type}
                      </p>
                    </div>

                    <div className="flex justify-center md:justify-end lg:justify-self-end">
                      <button className="inline-flex items-center gap-2 border-b border-brand/30 pb-1 text-[16px] font-semibold text-brand transition-all group-hover:border-brand xl:text-[18px] ">
                        Explore More
                        <ArrowDownRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:translate-y-1 xl:h-6 xl:w-6 2xl:h-7 2xl:w-7" />
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
