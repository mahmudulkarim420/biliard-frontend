// ─── Local Assets ─────────────────────────────────────────────────────────────
import img1 from "@/assets/img.png";
import img2 from "@/assets/img (1).png";

// ─── Local Components ─────────────────────────────────────────────────────────
import DiscoverMoreBtn from "@/components/shared/DiscoverMoreBtn";

// ─── Component ────────────────────────────────────────────────────────────────
// Two-column about section. Left: staggered offset image grid. Right: brand
// narrative with a highlighted pull-quote, body copy, feature points, and CTA.
// Images begin in grayscale and reveal color on hover.
const AboutUs = () => {
  return (
    <section className="bg-white section-padding">
      <div className="mx-auto max-w-300 xl:max-w-[1280px] 2xl:max-w-[1440px] px-5 md:px-8 xl:px-0">
        <div className="grid grid-cols-1 items-center gap-12 md:gap-16 lg:grid-cols-2 xl:gap-24 w-full mx-auto">

          {/* ── Left Column: Staggered Image Grid ── */}
          {/* Two images offset vertically — left sits higher, right sits lower — to
              create a dynamic, editorial composition. */}
          <div className="relative flex gap-4 md:gap-6 lg:justify-start justify-center">
            {/* Left image — positioned higher */}
            <div className="w-1/2 md:w-[45%] lg:w-1/2">
              <div className="relative h-80 md:h-112 xl:h-[600px] w-full overflow-hidden">
                <img
                  src={img1}
                  alt="Team working"
                  className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                />
              </div>
            </div>

            {/* Right image — offset downward via top margin */}
            <div className="mt-16 md:mt-20 xl:mt-24 w-1/2 md:w-[45%] lg:w-1/2">
              <div className="relative h-80 md:h-112 xl:h-[500px] w-full overflow-hidden bg-gray-100">
                <img
                  src={img2}
                  alt="Office environment"
                  className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                />
              </div>
            </div>
          </div>

          {/* ── Right Column: Brand Narrative ── */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-6 md:mt-0 xl:max-w-[95%] lg:pr-10">

            {/* Section eyebrow */}
            <p className="mb-3 md:mb-4 text-[11px] md:text-[12px] xl:text-[14px] font-bold uppercase tracking-[0.2em] text-brand">
              About Us
            </p>

            {/* Section heading */}
            <h2 className="mb-8 md:mb-10 max-w-[200px] text-[20px] md:max-w-[300px] md:text-[30px] lg:max-w-[450px] lg:text-[50px] xl:max-w-[510px] xl:text-[54px] text-title">
              We Empower Clients to  be loved
            </h2>

            {/* Highlighted pull-quote — brand left-border accent */}
            <div className="mb-6 md:mb-8 border-l-[3px] border-brand pl-4 md:pl-5 ml-2 md:ml-0 text-left">
              <p className="text-[14px] md:text-[15px] xl:text-[18px] font-medium leading-relaxed text-gray-800 xl:leading-[1.9]">
                It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout.
              </p>
            </div>

            {/* Supporting body copy */}
            <p className="mb-10 xl:mb-12 text-[14px] md:text-[15px] xl:text-[18px] leading-relaxed text-desc max-w-full lg:max-w-[90%] xl:leading-[1.8]">
              It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at established fact that a
              reader will be by the readable content of a page when looking at.
            </p>

            {/* ── Feature Points Grid ── */}
            <div className="mb-10 md:mb-12 xl:mb-16 grid w-full grid-cols-2 items-start justify-center gap-4 sm:gap-6 lg:justify-start lg:gap-8 xl:gap-10">

              {/* Brand Strategy feature */}
              <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-2 sm:gap-4 xl:gap-5">
                <div>
                  {/* Puzzle/strategy icon */}
                  <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[40px] h-[40px] xl:w-[49px] xl:h-[49px]">
                    <path d="M39.813 32.0003L46.7109 25.1024C47.2967 24.5163 47.6257 23.7216 47.6257 22.893C47.6257 22.0643 47.2967 21.2697 46.7109 20.6836L42.313 16.2962C41.8155 17.4764 41.0357 18.5162 40.0419 19.3241C39.0482 20.132 37.8711 20.6832 36.6142 20.9291C35.3573 21.1751 34.0592 21.1084 32.8342 20.7347C31.6092 20.3609 30.4948 19.692 29.5892 18.7864C28.6838 17.8808 28.0146 16.7665 27.6411 15.5415C27.2673 14.3165 27.2005 13.0184 27.4465 11.7616C27.6925 10.5047 28.2438 9.32761 29.0517 8.33388C29.8596 7.34013 30.8994 6.56026 32.0796 6.06288L27.6921 1.66497C27.1061 1.07911 26.3113 0.75 25.4828 0.75C24.654 0.75 23.8592 1.07911 23.2734 1.66497L16.3754 8.56288C16.3754 7.01772 15.9172 5.50724 15.0587 4.22249C14.2003 2.93772 12.9801 1.93638 11.5526 1.34507C10.125 0.753756 8.55421 0.599042 7.03873 0.90049C5.52325 1.20194 4.13119 1.94601 3.03861 3.03861C1.946 4.1312 1.20194 5.52326 0.90049 7.03874C0.599042 8.55422 0.753756 10.1251 1.34507 11.5526C1.93638 12.9801 2.93773 14.2003 4.22248 15.0587C5.50723 15.9172 7.01771 16.3754 8.56288 16.3754L1.66496 23.2732C1.07911 23.8593 0.75 24.6538 0.75 25.4826C0.75 26.3111 1.07911 27.1059 1.66496 27.692L6.06288 32.0795C6.56025 30.8993 7.34013 29.8595 8.33388 29.0516C9.32761 28.2436 10.5047 27.6924 11.7616 27.4466C13.0184 27.2005 14.3165 27.2672 15.5415 27.6409C16.7665 28.0145 17.8808 28.6836 18.7864 29.5893C19.692 30.4949 20.3611 31.6093 20.7348 32.8343C21.1084 34.0591 21.1753 35.3572 20.9292 36.6141C20.6832 37.8709 20.1319 39.048 19.3241 40.0418C18.5162 41.0355 17.4764 41.8155 16.2962 42.3128L20.6838 46.7024C21.2696 47.2882 22.0644 47.6174 22.8932 47.6174C23.7217 47.6174 24.5165 47.2882 25.1025 46.7024L32.0005 39.8128C32.0005 41.358 32.4586 42.8684 33.3169 44.1532C34.1755 45.438 35.3957 46.4393 36.8232 47.0305C38.2507 47.622 39.8215 47.7766 41.3369 47.4751C42.8525 47.1736 44.2446 46.4297 45.3371 45.337C46.4298 44.2445 47.1738 42.8524 47.4753 41.337C47.7767 39.8216 47.6219 38.2507 47.0307 36.823C46.4394 35.3955 45.438 34.1753 44.1532 33.317C42.8686 32.4584 41.358 32.0003 39.813 32.0003Z" className="stroke-brand" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h4 className="text-[12px] sm:text-sm xl:text-[18px] font-bold leading-snug text-title">
                  Brand Strategy & Art <br className="hidden lg:block" /> Direction
                </h4>
              </div>

              {/* UX/UI Design feature */}
              <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-2 sm:gap-4 xl:gap-5">
                <div>
                  {/* Database/stacked-layers icon */}
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[40px] h-[40px] xl:w-[50px] xl:h-[50px]">
                    <g clipPath="url(#clip0_151_24)">
                      <path d="M1.5625 10.9395C1.5625 13.4259 4.03179 15.8104 8.42719 17.5686C12.8226 19.3267 18.784 20.3145 25 20.3145C31.216 20.3145 37.1775 19.3267 41.5729 17.5686C45.9681 15.8104 48.4375 13.4259 48.4375 10.9395C48.4375 8.45304 45.9681 6.06848 41.5729 4.31033C37.1775 2.55217 31.216 1.56445 25 1.56445C18.784 1.56445 12.8226 2.55217 8.42719 4.31033C4.03179 6.06848 1.5625 8.45304 1.5625 10.9395Z" className="stroke-brand" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M1.5625 10.9395V24.9999C1.5625 30.177 12.0562 34.3749 25 34.3749C37.9437 34.3749 48.4375 30.1791 48.4375 24.9999V10.9395" className="stroke-brand" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M1.5625 25V39.0625C1.5625 44.2396 12.0562 48.4375 25 48.4375C37.9437 48.4375 48.4375 44.2396 48.4375 39.0625V25" className="stroke-brand" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_151_24">
                        <rect width="50" height="50" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h4 className="text-[12px] sm:text-sm xl:text-[18px] font-bold leading-snug text-title">
                  UX/UI Design & <br className="hidden lg:block" /> Website/App Design
                </h4>
              </div>
            </div>

            {/* CTA button */}
            <DiscoverMoreBtn className="py-3.5 xl:py-4 xl:px-10 xl:text-[16px]" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;