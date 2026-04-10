const MarqueeDivider = () => {
    const words = [
        "Software",
        "Web Design",
        "Development",
        "UI/UX Design",
        "Branding",
    ];

    return (
        <section className="relative z-10 flex w-full overflow-x-hidden bg-white pt-[50px] pb-[350px]">
            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

            {/* Marquee Wrapper */}
            <div className="flex w-max animate-marquee items-center">

                {[...Array(2)].map((_, arrayIndex) => (
                    <div key={arrayIndex} className="flex items-center">
                        {words.map((word, index) => (
                            <div key={index} className="flex items-center">

                                {/* Ekhane whitespace-nowrap add kora hoyeche jate line na bhange */}
                                <span
                                    className="mx-8 whitespace-nowrap text-5xl font-black uppercase tracking-widest sm:text-6xl md:text-7xl lg:text-[100px]"
                                    style={{
                                        WebkitTextStroke: "3px rgb(156, 163, 175)",
                                        color: "transparent",
                                    }}
                                >
                                    {word}
                                </span>

                                <span className="h-5 w-5 shrink-0 rounded-full bg-gray-800" />

                            </div>
                        ))}
                    </div>
                ))}

            </div>
        </section>
    );
};

export default MarqueeDivider;