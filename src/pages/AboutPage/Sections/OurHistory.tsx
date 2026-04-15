import React from 'react';

// ─── Static Data ──────────────────────────────────────────────────────────────
const historyData = [
  {
    year: "2001",
    title: "Established Company",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at established fact that a reader will be by the readable content of a page when looking at."
  },
  {
    year: "2003",
    title: "Move To New Office",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at established fact that a reader will be by the readable content of a page when looking at."
  },
  {
    year: "2007",
    title: "Awarded as best agency",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at established fact that a reader will be by the readable content of a page when looking at."
  }
];

// ─── Component ────────────────────────────────────────────────────────────────
const OurHistory = () => {
  return (
    <section className="section-padding bg-[#F3F3F3] section-gap">
      <div className="max-w-300 mx-auto xl:max-w-[1280px] 2xl:max-w-[1440px] px-5 md:px-8 xl:px-0">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* ── Left Column: Heading ── */}
          <div className="w-full lg:w-5/12">
            
            <div className="sticky top-32">
              <p className="text-brand font-bold uppercase tracking-[0.2em] text-[12px] mb-4">
                OUR HISTORY
              </p>
              <h2 className="text-[36px] md:text-[42px] font-extrabold leading-[1.2] text-title tracking-tight">
                We Empower <br className="hidden lg:block" />
                Clients to be loved
              </h2>
            </div>
          </div>

          {/* ── Right Column: Timeline ── */}
          <div className="w-full lg:w-7/12">
            {/* Vertical Line */}
            <div className="relative border-l-[1.5px] border-gray-200">
              {historyData.map((item, index) => (
                <div key={index} className="relative pl-8 md:pl-12 pb-16 last:pb-0 group">
                  
                  {/* Timeline Dot (Red) */}
                  <div className="absolute left-[-5.5px] top-4.5 h-2.5 w-2.5 rounded-full bg-brand ring-4 ring-[#f8f9fa] transition-transform duration-300 group-hover:scale-125" />
                  
                  {/* Outline Year Text */}
                  <h3 
                    className="text-5xl md:text-[64px] font-black tracking-wide text-transparent mb-5 leading-none"
                    style={{ 
                      WebkitTextStroke: "1px var(--color-brand)", 
                      fontFamily: 'var(--font-title)' 
                    }}
                  >
                    {item.year}
                  </h3>
                  
                  {/* Title */}
                  <h4 className="text-[20px] md:text-[22px] font-bold text-title mb-4 transition-colors group-hover:text-brand">
                    {item.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-desc text-[15px] leading-[1.8] max-w-138">
                    {item.description}
                  </p>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurHistory;