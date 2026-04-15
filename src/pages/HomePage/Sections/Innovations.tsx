// ─── External Libraries ──────────────────────────────────────────────────────
import { ArrowDownRight, Zap } from "lucide-react";

// ─── Local Assets ─────────────────────────────────────────────────────────────
import rectanglePng from "@/assets/Rectangle 11.png";

// ─── Types ────────────────────────────────────────────────────────────────────
interface ServiceCard {
  number: string;
  title: string;
  icon: React.ReactNode;
  isActive: boolean;
}

// ─── Static Data ──────────────────────────────────────────────────────────────
// Card data for the 4-column grid. `isActive` pre-highlights a card without
// requiring a hover; the Rectangle PNG overlay fades in on hover for others.
const services: ServiceCard[] = [
  {
    number: "01",
    title: "Brand Strategy &\nArt Direction",
    isActive: false,
    icon: (
      <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_151_2)">
          <path d="M17.8669 24.6375C17.5562 24.3735 17.3066 24.045 17.1355 23.6749C16.9643 23.305 16.8757 22.902 16.8757 22.4944C16.8757 22.0866 16.9643 21.6838 17.1355 21.3137C17.3066 20.9436 17.5562 20.6153 17.8669 20.3513L38.9606 2.06247C39.3697 1.71444 39.8698 1.49082 40.4019 1.41803C40.9341 1.34525 41.4759 1.42636 41.9634 1.65177C42.4509 1.87719 42.8638 2.23747 43.1529 2.69004C43.4423 3.14259 43.5958 3.66851 43.5956 4.2056V40.7682C43.5958 41.3052 43.4423 41.8311 43.1529 42.2837C42.8638 42.7362 42.4509 43.0965 41.9634 43.3219C41.4759 43.5473 40.9341 43.6285 40.4019 43.5557C39.8698 43.483 39.3697 43.2593 38.9606 42.9113L17.8669 24.6375Z" stroke="#FF3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28.125 39.375V40.7813C28.1252 41.3183 27.9716 41.8442 27.6823 42.2968C27.3932 42.7495 26.9803 43.1096 26.4928 43.335C26.0053 43.5604 25.4634 43.6416 24.9313 43.5688C24.3992 43.4961 23.8991 43.2724 23.49 42.9244L2.39813 24.6375C2.08744 24.3735 1.83788 24.045 1.66673 23.6749C1.49558 23.305 1.40694 22.902 1.40694 22.4944C1.40694 22.0866 1.49558 21.6838 1.66673 21.3137C1.83788 20.9438 2.08744 20.6153 2.39813 20.3513L23.4919 2.06248C23.9016 1.71461 24.4022 1.49137 24.9347 1.41917C25.4672 1.34698 26.0092 1.42886 26.4967 1.65512C26.9841 1.88137 27.3966 2.24253 27.6851 2.69587C27.9737 3.14921 28.1263 3.67573 28.125 4.2131V5.62498" stroke="#FF3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_151_2">
            <rect width="45" height="45" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    number: "02",
    title: "UX/UI\nDesign",
    isActive: false,
    icon: (
      <div className="relative w-8 h-8">
        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_151_5)">
            <path d="M15.4688 37.9688L16.875 29.5312" stroke="#FF3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.25 37.9688H23.9062" stroke="#FF3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1.40625 22.0312H23.9062" stroke="#FF3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19.6875 29.5312H7.03125C5.53941 29.5312 4.10867 28.9386 3.05377 27.8837C1.99888 26.8288 1.40625 25.398 1.40625 23.9062V7.03125C1.40625 5.53941 1.99888 4.10867 3.05377 3.05377C4.10867 1.99888 5.53941 1.40625 7.03125 1.40625H37.9688C39.4605 1.40625 40.8913 1.99888 41.9462 3.05377C43.0011 4.10867 43.5938 5.53941 43.5938 7.03125V23.9062" stroke="#FF3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M37.9687 18.2812L26.8875 31.1812C26.7981 31.2819 26.7397 31.4063 26.7199 31.5396C26.6998 31.6727 26.7189 31.8088 26.775 31.9313C26.8329 32.0559 26.9257 32.1613 27.0422 32.2346C27.1586 32.3077 27.2938 32.3456 27.4312 32.3438H32.3437V43.5938L43.425 30.6938C43.5146 30.5931 43.5729 30.4687 43.5928 30.3354C43.6129 30.2023 43.5937 30.0662 43.5375 29.9438C43.4811 29.8219 43.3912 29.7186 43.2784 29.6454C43.1655 29.5725 43.0344 29.5329 42.9 29.5312H37.9687V18.2812Z" stroke="#FF3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_151_5">
              <rect width="45" height="45" fill="white" />
            </clipPath>
          </defs>
        </svg>
        {/* Zap icon layered over the monitor SVG for visual flair */}
        <Zap className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-[40%] -translate-y-[40%] fill-transparent" strokeWidth={1.5} />
      </div>
    ),
  },
  {
    number: "03",
    title: "Brand Strategy &\nArt Direction",
    isActive: false,
    icon: (
      <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_151_11)">
          <path d="M30.9375 43.5938H19.6875L21.0938 35.1562H29.5312L30.9375 43.5938Z" stroke="#FF3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15.4688 43.5938H35.1562" stroke="#FF3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21.0938 9.84375H40.7812C41.5271 9.84375 42.2426 10.1401 42.7701 10.6675C43.2975 11.195 43.5938 11.9103 43.5938 12.6562V32.3438C43.5938 33.0896 43.2975 33.8051 42.7701 34.3326C42.2426 34.86 41.5271 35.1562 40.7812 35.1562H9.84375C9.09784 35.1562 8.38245 34.86 7.85501 34.3326C7.32758 33.8051 7.03125 33.0896 7.03125 32.3438V29.5312" stroke="#FF3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7.03125 29.5312H43.5938" stroke="#FF3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.21875 1.40625H12.6562C12.6562 1.40625 15.4688 1.40625 15.4688 4.21875V21.0938C15.4688 21.0938 15.4688 23.9062 12.6562 23.9062H4.21875C4.21875 23.9062 1.40625 23.9062 1.40625 21.0938V4.21875C1.40625 4.21875 1.40625 1.40625 4.21875 1.40625Z" stroke="#FF3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.40625 18.2812H15.4688" stroke="#FF3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_151_11">
            <rect width="45" height="45" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Website/App\nDesign",
    isActive: false,
    icon: (
      <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M39.375 26.7188V8.4375C39.375 7.69159 39.0787 6.9762 38.5513 6.44876C38.0239 5.92133 37.3084 5.625 36.5625 5.625H8.4375C7.69159 5.625 6.9762 5.92133 6.44876 6.44876C5.92133 6.9762 5.625 7.69159 5.625 8.4375V26.7188H39.375Z" stroke="#FF3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M43.3517 35.4206C43.542 35.8489 43.6222 36.3178 43.5851 36.7849C43.5482 37.2521 43.395 37.7025 43.1396 38.0953C42.8842 38.4883 42.5345 38.8112 42.1228 39.0345C41.7108 39.258 41.2498 39.375 40.781 39.375H4.21863C3.75003 39.375 3.28885 39.258 2.87699 39.0345C2.46513 38.8112 2.11561 38.4883 1.86022 38.0953C1.60482 37.7025 1.45164 37.2521 1.41457 36.7849C1.37751 36.3178 1.45775 35.8489 1.648 35.4206L5.62488 26.7188H39.3748L43.3517 35.4206Z" stroke="#FF3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.6875 33.75H25.3125" stroke="#FF3838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
// Dark full-width section showing four service cards in a responsive grid.
// Each card displays an outline number, a brand-colored SVG icon at the bottom,
// and a service title. A decorative cross/plus SVG pattern fills the background.
const Innovations = () => {
  return (
    <section className="relative z-10 w-full overflow-hidden bg-[#09090b] section-padding">

      {/* Repeating cross-plus SVG pattern — very low opacity decorative texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z' fill='%23ffffff' fill-opacity='0.05' fill-rule='nonzero'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "100px 100px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-300 xl:max-w-[1280px] 2xl:max-w-[1440px] px-5 md:px-8 xl:px-0">

        {/* ── Section Header ── */}
        <div className="mb-10 md:mb-16 flex flex-row text-left items-center justify-between gap-6  md:flex-row md:items-end text-center md:text-left xl:mb-20">
          <h2 className="max-w-[200px] text-[20px] md:max-w-[300px] md:text-[30px] lg:max-w-[400px] lg:text-[30px] xl:max-w-[500px] xl:text-[40px] 2xl:max-w-[630px] 2xl:text-[54px] text-white">
            Creative problem solving <br className="hidden xl:block" /> innovations
          </h2>

          <a
            href="/services"
            className="group relative flex items-center pb-2 text-[10px] md:text-[14px] lg:text-[16px] xl:text-[16px] font-semibold uppercase tracking-widest text-brand transition-colors"
          >
            Explore More
            <ArrowDownRight className="ml-2 h-4 w-4 xl:h-5 xl:w-5 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />

            {/* --- Bottom Line --- */}
            <span className="absolute bottom-0 left-0 h-[1.5px] w-full bg-brand origin-right scale-x-100 transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100 group-hover:bg-red-400"></span>
          </a>
        </div>

        {/* ── Service Cards Grid ── */}
        {/* 1 col → 2 col → 4 col responsive layout. Each card lifts on hover. */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative flex flex-col overflow-hidden rounded-4xl p-8 xl:p-10 pb-10 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/70 bg-linear-to-tl ${service.isActive
                  ? "from-[#222430] to-[#15161c] shadow-2xl shadow-black/60"
                  : "from-[#1a1b24] to-[#0c0d11] hover:from-[#1d1e29] hover:to-[#111218]"
                }`}
            >
              {/* Rectangle texture overlay — fades in on hover (or always visible when isActive) */}
              <div
                className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ease-in-out ${service.isActive ? "opacity-30" : "opacity-0 group-hover:opacity-30"
                  }`}
                style={{
                  backgroundImage: `url(${rectanglePng})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />

              {/* Large outline number — fades up in opacity on hover */}
              <div
                className="mb-12 sm:mb-16 xl:mb-24 text-[80px] sm:text-[100px] xl:text-[130px] font-medium leading-none tracking-tight opacity-50 transition-opacity duration-300 group-hover:opacity-60"
                style={{
                  WebkitTextStroke: "1px rgba(255, 255, 255, 0.29)",
                  color: "transparent",
                  fontFamily: "roboto",
                }}
              >
                {service.number}
              </div>

              {/* Icon + title — icon glows red and scales on hover */}
              <div className="relative z-10 mt-auto">
                <div className="mb-6 xl:mb-8 origin-left text-brand transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,59,48,0.5)]">
                  {service.icon}
                </div>
                <h3 className="whitespace-pre-line text-[16px] sm:text-[18px] xl:text-[22px] font-semibold leading-snug text-gray-100">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Innovations;