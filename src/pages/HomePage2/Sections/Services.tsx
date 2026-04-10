import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
        <path d="M4 12c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2" />
        <path d="M6 5v1" />
        <path d="M10 5v1" />
        <path d="M14 5v1" />
        <path d="M18 5v1" />
        <rect width="18" height="10" x="3" y="12" rx="2" />
      </svg>
    ),
    title: "Brand Strategy & Art Direction",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="12" x="3" y="4" rx="2" ry="2" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
    title: "UI/UX & Interactive Design",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h.01" />
        <rect width="16" height="20" x="4" y="2" rx="2" />
      </svg>
    ),
    title: "Technology Consultant",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Web & App Development",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
        <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
        <path d="M7 21h10" />
        <path d="M12 3v18" />
      </svg>
    ),
    title: "Software Solution",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    ),
    title: "Data Science & Learning",
  },
];

const Services = () => {
  return (
    <section className="relative z-20 -mt-[200px] w-full bg-[#f8f9fa] py-24 px-6 sm:px-12 lg:px-24 overflow-hidden rounded-t-[50px]">
      {/* Background Subtle Lines (Optional) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 20 Q 50 40 100 20 T 200 20" fill="none" stroke="black" strokeWidth="0.1" />
          <path d="M0 50 Q 50 70 100 50 T 200 50" fill="none" stroke="black" strokeWidth="0.1" />
        </svg>
      </div>

      <div className="mx-auto max-w-[1200px] relative z-10">
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-xl">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-brand">
              OUR SERVICES
            </p>
            <h2 className="text-4xl font-bold leading-[1.1] text-title sm:text-5xl lg:text-[54px] tracking-tight">
              We Offer You A Digital <br /> Platform
            </h2>
          </div>
          
          <Link to="/services" className="group flex items-center gap-2 text-brand font-bold text-sm uppercase tracking-wider border-b border-transparent hover:border-brand transition-all pb-1">
            Explore More <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* --- Services Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group flex items-center gap-6 py-10 border-b border-gray-200 hover:border-brand transition-colors duration-500 cursor-pointer"
            >
              {/* Icon */}
              <div className="text-brand shrink-0 transition-transform duration-500 group-hover:scale-110">
                {service.icon}
              </div>

              {/* Title */}
              <div className="flex-1">
                <h3 className="text-[20px] font-bold leading-tight text-title transition-colors duration-300 group-hover:text-brand">
                  {service.title}
                </h3>
              </div>

              {/* Small Arrow Icon */}
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white text-gray-400 group-hover:bg-brand group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-brand/20">
                <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:rotate-45" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;