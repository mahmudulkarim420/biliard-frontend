// ─── Component ────────────────────────────────────────────────────────────────
// Horizontally scrolling marquee divider. The word list is rendered twice
// side-by-side so the CSS animation can loop from 0% → -50% seamlessly
// without a visible reset jump. Words are styled as large outline text.
const MarqueeDivider = () => {
  const words = ["Software", "Web Design", "Development", "UI/UX Design", "Branding"];

  return (
    <section className="relative z-10 flex w-full overflow-x-hidden bg-white">

      {/* Keyframe definition — injected inline to avoid a separate CSS file dependency */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* ── Marquee Track ── */}
      <div className="flex w-max animate-marquee items-center">
        {/* Render two copies of the word list to enable the seamless loop */}
        {[...Array(2)].map((_, arrayIndex) => (
          <div key={arrayIndex} className="flex items-center">
            {words.map((word, index) => (
              <div key={index} className="flex items-center">
                {/* Outline text word — whitespace-nowrap prevents wrapping mid-word */}
                <span
                  className="mx-6 md:mx-8 whitespace-nowrap text-[40px] sm:text-5xl font-black uppercase tracking-widest md:text-7xl lg:text-[100px] xl:text-[130px] 2xl:text-[160px]"
                  style={{
                    WebkitTextStroke: "3px rgb(156, 163, 175)",
                    color: "transparent",
                  }}
                >
                  {word}
                </span>

                {/* Bullet separator between words */}
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