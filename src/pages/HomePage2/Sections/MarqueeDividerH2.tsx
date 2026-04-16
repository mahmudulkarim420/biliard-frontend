import React from 'react';
import Marquee from "react-fast-marquee";

// ─── Component ────────────────────────────────────────────────────────────────
// Horizontally scrolling marquee divider using react-fast-marquee.
// Words are styled as large outline text with a bullet separator.
const MarqueeDividerH2 = () => {
  const words = ["Software", "Web Design", "Development", "UI/UX Design", "Branding"];

  return (
    <section className="relative z-10 w-full overflow-hidden section-padding bg-white">
      
      <Marquee 
        gradient={false} 
        speed={80} 
        pauseOnHover={true}
        direction="left"
      >
        <div className="flex items-center">
          {words.map((word, index) => (
            <div key={index} className="flex items-center">
              {/* Outline text word */}
              <span
                className="mx-8 md:mx-12 lg:mx-16 whitespace-nowrap text-[40px] sm:text-5xl font-black uppercase tracking-widest md:text-7xl lg:text-[100px] xl:text-[130px] 2xl:text-[160px]"
                style={{
                  WebkitTextStroke: "2px rgb(156, 163, 175)",
                  color: "transparent",
                }}
              >
                {word}
              </span>

              {/* Bullet separator between words */}
              <span className="h-4 w-4 md:h-6 md:w-6 shrink-0 rounded-full bg-gray-800" />
            </div>
          ))}
        </div>
      </Marquee>

    </section>
  );
};

export default MarqueeDividerH2;