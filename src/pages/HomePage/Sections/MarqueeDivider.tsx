import Marquee from "react-fast-marquee";

const MarqueeDivider = () => {
  const words = [
    "Software",
    "Web Design",
    "Development",
    "UI/UX Design",
    "Branding",
  ];

  return (
    <section className="relative z-10 w-full max-w-[100vw] overflow-hidden bg-white pt-10 md:pt-13 pb-40 sm:pb-52 md:pb-72 lg:pb-88 xl:pb-[400px] 2xl:pb-[500px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <style>{`
        .rfm-marquee-container {
          overflow-x: hidden !important;
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        .rfm-marquee-container::-webkit-scrollbar {
          display: none !important;
        }
      `}</style>
      <Marquee
        speed={60}
        gradient={false}
        pauseOnHover={true}
        autoFill={true}
      >
        {words.map((word, index) => (
          <div key={index} className="flex items-center shrink-0">
            <span
              className="inline-block mx-6 md:mx-8 whitespace-nowrap leading-none text-[40px] sm:text-5xl font-black uppercase tracking-widest md:text-7xl lg:text-[100px] xl:text-[130px] 2xl:text-[160px]"
              style={{
                WebkitTextStroke: "3px rgb(156, 163, 175)",
                color: "transparent",
              }}
            >
              {word}
            </span>

            <span className="h-4 w-4 md:h-5 md:w-5 shrink-0 rounded-full bg-gray-800" />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default MarqueeDivider;