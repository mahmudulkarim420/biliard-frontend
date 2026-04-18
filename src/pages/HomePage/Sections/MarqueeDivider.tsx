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
    <section className="relative z-40 w-full overflow-hidden bg-white">
      <Marquee
        speed={60}
        gradient={false}
        pauseOnHover={true}
        autoFill={true}
      >
        {words.map((word, index) => (
          <div key={index} className="flex items-center shrink-0 overflow-hidden">
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