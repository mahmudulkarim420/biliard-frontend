// ─── External Libraries ──────────────────────────────────────────────────────
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import bgPattern from "@/assets/Mask group.png";

// ─── Types ────────────────────────────────────────────────────────────────────
interface ServiceItem {
  icon: React.ReactNode;
  title: string;
}

// ─── Static Data ──────────────────────────────────────────────────────────────
const services: ServiceItem[] = [
  {
    title: "Brand Strategy & Art Direction",
    icon: (
      <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_201_13)">
          <path d="M17.8669 24.6375C17.5562 24.3735 17.3067 24.045 17.1355 23.6749C16.9644 23.305 16.8757 22.902 16.8757 22.4944C16.8757 22.0866 16.9644 21.6838 17.1355 21.3137C17.3067 20.9436 17.5562 20.6153 17.8669 20.3513L38.9607 2.06247C39.3698 1.71444 39.8699 1.49082 40.402 1.41803C40.9341 1.34525 41.476 1.42636 41.9635 1.65177C42.451 1.87719 42.8639 2.23747 43.153 2.69004C43.4423 3.14259 43.5959 3.66851 43.5957 4.2056V40.7682C43.5959 41.3052 43.4423 41.8311 43.153 42.2837C42.8639 42.7362 42.451 43.0965 41.9635 43.3219C41.476 43.5473 40.9341 43.6285 40.402 43.5557C39.8699 43.483 39.3698 43.2593 38.9607 42.9113L17.8669 24.6375Z" stroke="#FF3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28.125 39.3749V40.7811C28.1252 41.3181 27.9717 41.8441 27.6824 42.2967C27.3932 42.7493 26.9804 43.1095 26.4929 43.3349C26.0054 43.5603 25.4635 43.6415 24.9314 43.5687C24.3992 43.496 23.8992 43.2723 23.49 42.9243L2.39817 24.6374C2.08748 24.3734 1.83793 24.0449 1.66678 23.6748C1.49563 23.3048 1.40698 22.9019 1.40698 22.4943C1.40698 22.0865 1.49563 21.6837 1.66678 21.3136C1.83793 20.9436 2.08748 20.6151 2.39817 20.3511L23.4919 2.06236C23.9016 1.71449 24.4022 1.49124 24.9347 1.41905C25.4672 1.34686 26.0093 1.42874 26.4968 1.655C26.9841 1.88125 27.3966 2.24241 27.6852 2.69575C27.9737 3.14909 28.1264 3.67561 28.125 4.21298V5.62486" stroke="#FF3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_201_13">
            <rect width="45" height="45" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    title: "UI/UX & Interactive Design",
    icon: (
      <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_314_2)">
          <path d="M15.4688 37.9688L16.875 29.5312" stroke="#FF3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11.25 37.9688H23.9062" stroke="#FF3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.40625 22.0312H23.9062" stroke="#FF3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19.6875 29.5312H7.03125C5.53941 29.5312 4.10867 28.9386 3.05377 27.8837C1.99888 26.8288 1.40625 25.398 1.40625 23.9062V7.03125C1.40625 5.53941 1.99888 4.10867 3.05377 3.05377C4.10867 1.99888 5.53941 1.40625 7.03125 1.40625H37.9688C39.4605 1.40625 40.8913 1.99888 41.9462 3.05377C43.0011 4.10867 43.5938 5.53941 43.5938 7.03125V23.9062" stroke="#FF3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M37.9688 18.2812L26.8875 31.1812C26.7981 31.2819 26.7398 31.4063 26.7199 31.5396C26.6998 31.6727 26.719 31.8088 26.775 31.9313C26.833 32.0559 26.9258 32.1613 27.0422 32.2346C27.1586 32.3077 27.2938 32.3456 27.4313 32.3438H32.3438V43.5938L43.425 30.6938C43.5146 30.5931 43.573 30.4687 43.5928 30.3354C43.6129 30.2023 43.5938 30.0662 43.5375 29.9438C43.4811 29.8219 43.3913 29.7186 43.2784 29.6454C43.1655 29.5725 43.0345 29.5329 42.9 29.5312H37.9688V18.2812Z" stroke="#FF3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_314_2">
            <rect width="45" height="45" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    title: "Technology Consultant",
    icon: (
      <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_314_8)">
          <path d="M30.9375 43.5938H19.6875L21.0938 35.1562H29.5312L30.9375 43.5938Z" stroke="#FF3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15.4688 43.5938H35.1562" stroke="#FF3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21.0938 9.84375H40.7812C41.5271 9.84375 42.2426 10.1401 42.7701 10.6675C43.2975 11.195 43.5938 11.9103 43.5938 12.6562V32.3438C43.5938 33.0896 43.2975 33.8051 42.7701 34.3326C42.2426 34.86 41.5271 35.1562 40.7812 35.1562H9.84375C9.09784 35.1562 8.38245 34.86 7.85501 34.3326C7.32758 33.8051 7.03125 33.0896 7.03125 32.3438V29.5312" stroke="#FF3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7.03125 29.5312H43.5938" stroke="#FF3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.21875 1.40625H12.6562C12.6562 1.40625 15.4688 1.40625 15.4688 4.21875V21.0938C15.4688 21.0938 15.4688 23.9062 12.6562 23.9062H4.21875C4.21875 23.9062 1.40625 23.9062 1.40625 21.0938V4.21875C1.40625 4.21875 1.40625 1.40625 4.21875 1.40625Z" stroke="#FF3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.40625 18.2812H15.4688" stroke="#FF3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_314_8">
            <rect width="45" height="45" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    title: "Web & App Development",
    icon: (
      <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M39.375 26.7188V8.4375C39.375 7.69159 39.0787 6.9762 38.5513 6.44876C38.0239 5.92133 37.3084 5.625 36.5625 5.625H8.4375C7.69159 5.625 6.9762 5.92133 6.44876 6.44876C5.92133 6.9762 5.625 7.69159 5.625 8.4375V26.7188H39.375Z" stroke="#FF3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M43.3517 35.4206C43.542 35.8489 43.6222 36.3178 43.5851 36.7849C43.5482 37.2521 43.395 37.7025 43.1396 38.0953C42.8842 38.4883 42.5345 38.8112 42.1228 39.0345C41.7108 39.258 41.2498 39.375 40.781 39.375H4.21863C3.75003 39.375 3.28885 39.258 2.87699 39.0345C2.46513 38.8112 2.11561 38.4883 1.86022 38.0953C1.60482 37.7025 1.45164 37.2521 1.41457 36.7849C1.37751 36.3178 1.45775 35.8489 1.648 35.4206L5.62488 26.7188H39.3748L43.3517 35.4206Z" stroke="#FF3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.6875 33.75H25.3125" stroke="#FF3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Software Solution",
    icon: (
      <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_205_59)">
          <path d="M17.8669 24.6375C17.5562 24.3735 17.3067 24.045 17.1355 23.6749C16.9644 23.305 16.8757 22.902 16.8757 22.4944C16.8757 22.0866 16.9644 21.6838 17.1355 21.3137C17.3067 20.9436 17.5562 20.6153 17.8669 20.3513L38.9607 2.06247C39.3698 1.71444 39.8699 1.49082 40.402 1.41803C40.9341 1.34525 41.476 1.42636 41.9635 1.65177C42.451 1.87719 42.8639 2.23747 43.153 2.69004C43.4423 3.14259 43.5959 3.66851 43.5957 4.2056V40.7682C43.5959 41.3052 43.4423 41.8311 43.153 42.2837C42.8639 42.7362 42.451 43.0965 41.9635 43.3219C41.476 43.5473 40.9341 43.6285 40.402 43.5557C39.8699 43.483 39.3698 43.2593 38.9607 42.9113L17.8669 24.6375Z" stroke="#FF3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28.125 39.3749V40.7811C28.1252 41.3181 27.9717 41.8441 27.6824 42.2967C27.3932 42.7493 26.9804 43.1095 26.4929 43.3349C26.0054 43.5603 25.4635 43.6415 24.9314 43.5687C24.3992 43.496 23.8992 43.2723 23.49 42.9243L2.39817 24.6374C2.08748 24.3734 1.83793 24.0449 1.66678 23.6748C1.49563 23.3048 1.40698 22.9019 1.40698 22.4943C1.40698 22.0865 1.49563 21.6837 1.66678 21.3136C1.83793 20.9436 2.08748 20.6151 2.39817 20.3511L23.4919 2.06236C23.9016 1.71449 24.4022 1.49124 24.9347 1.41905C25.4672 1.34686 26.0093 1.42874 26.4968 1.655C26.9841 1.88125 27.3966 2.24241 27.6852 2.69575C27.9737 3.14909 28.1264 3.67561 28.125 4.21298V5.62486" stroke="#FF3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_205_59">
            <rect width="45" height="45" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    title: "Data Science & Learning",
    icon: (
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_314_19)">
          <path d="M1.5625 10.9395C1.5625 13.4259 4.03179 15.8104 8.42719 17.5686C12.8226 19.3267 18.784 20.3145 25 20.3145C31.216 20.3145 37.1775 19.3267 41.5729 17.5686C45.9681 15.8104 48.4375 13.4259 48.4375 10.9395C48.4375 8.45304 45.9681 6.06848 41.5729 4.31033C37.1775 2.55217 31.216 1.56445 25 1.56445C18.784 1.56445 12.8226 2.55217 8.42719 4.31033C4.03179 6.06848 1.5625 8.45304 1.5625 10.9395Z" stroke="#FF3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.5625 10.9395V24.9999C1.5625 30.177 12.0562 34.3749 25 34.3749C37.9437 34.3749 48.4375 30.1791 48.4375 24.9999V10.9395" stroke="#FF3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.5625 25V39.0625C1.5625 44.2396 12.0562 48.4375 25 48.4375C37.9437 48.4375 48.4375 44.2396 48.4375 39.0625V25" stroke="#FF3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_314_19">
            <rect width="50" height="50" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
const Services = () => {
  return (
    <section className="relative z-20 w-full bg-[#F3F3F3] section-padding overflow-hidden">

      {/* ── Background Image Pattern Layer ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-100">
        <img
          src={bgPattern}
          alt="Background Texture"
          className="w-full h-full object-cover grayscale"
        />
      </div>

      {/* Decorative wavy line background layer */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 20 Q 50 40 100 20 T 200 20" fill="none" stroke="black" strokeWidth="0.1" />
          <path d="M0 50 Q 50 70 100 50 T 200 50" fill="none" stroke="black" strokeWidth="0.1" />
        </svg>
      </div>

      <div className="mx-auto max-w-300 xl:max-w-[1280px] 2xl:max-w-[1440px] px-5 md:px-8 xl:px-0 relative z-10">

        {/* ── Section Header ── */}
        <div className="flex flex-row justify-between items-center sm:items-end mb-16 gap-4 sm:gap-6">
          <div className="max-w-xl xl:max-w-2xl">
            <p className="mb-2 sm:mb-4 text-[10px] md:text-[12px] xl:text-[14px] font-bold uppercase tracking-[0.1em] text-brand">
              OUR SERVICES
            </p>
            <h2 className="max-w-[200px] text-[20px] md:max-w-[300px] md:text-[30px] lg:max-w-[400px] lg:text-[40px] xl:max-w-[600px] xl:text-[54px] font-bold leading-[1.1] text-title tracking-tight">
              We Offer You A Digital <br className="hidden xl:block" /> Platform
            </h2>
          </div>

          <Link
            to="/services"
            className="group flex items-center gap-1 sm:gap-2 text-brand font-bold text-[9px] xs:text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px] uppercase tracking-wider border-b border-transparent hover:border-brand transition-all pb-0.5 sm:pb-1 shrink-0"
          >
            Explore More
            <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* ── Services Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 xl:gap-x-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex items-center gap-6 py-10 border-b border-gray-200 hover:border-brand transition-colors duration-500 cursor-pointer"
            >
              <div className="text-brand shrink-0 transition-transform duration-500 group-hover:scale-110">
                {service.icon}
              </div>

              <div className="flex-1">
                <h3 className="text-[17px] sm:text-[18px] xl:text-[21px] font-bold leading-[1.3] text-title transition-colors duration-300 group-hover:text-brand line-clamp-2 max-w-[140px] xs:max-w-[150px] sm:max-w-[180px] md:max-w-[180px] lg:max-w-[200px] xl:max-w-[220px]">
                  {service.title}
                </h3>
              </div>

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