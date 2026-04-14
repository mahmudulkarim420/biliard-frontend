import React, { useState, useEffect, useRef } from "react";
import imgOffice1 from "@/assets/img.png";
import imgOffice2 from "@/assets/img (1).png";

// --- Progress Bar Sub-Component ---
const ProgressBar = ({ label, percentage }: { label: string; percentage: number }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(percentage);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div className="mb-10 last:mb-0" ref={ref}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-[14px] font-bold text-title uppercase tracking-wider">
          {label}
        </span>
      </div>

      {/* Progress Track */}
      <div className="relative w-full h-1.75 bg-gray-100 rounded-full">
        {/* Animated Fill Bar */}
        <div
          className="relative h-full bg-brand transition-all duration-1500 ease-out rounded-full"
          style={{ width: `${width}%` }}
        >
          {/* Tooltip: Positioned exactly at the end of the bar */}
          <div className="absolute -right-5 -top-10 flex flex-col items-center">
            <span className="bg-title text-white text-[10px] font-bold px-2 py-1 rounded-sm whitespace-nowrap">
              {percentage}%
            </span>
            {/* Tooltip Arrow */}
            <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-title"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Component ---
const AboutExperience = () => {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-300 mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* --- Images Section (Asymmetrical with Hover Effect) --- */}
          <div className="flex-1 flex gap-6 w-full lg:max-w-138">
            {/* Left Image: Pushed UP */}
            <div className="flex-1 lg:-mt-10 transition-all duration-500 hover:-translate-y-2">
              <div className="overflow-hidden rounded-sm shadow-2xl group">
                <img
                  src={imgOffice1}
                  alt="Team Collaboration"
                  className="w-full h-112 md:h-112 object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
              </div>
            </div>
            
            {/* Right Image: Pushed DOWN */}
            <div className="flex-1 lg:mt-10 transition-all duration-500 hover:translate-y-2">
              <div className="overflow-hidden rounded-sm shadow-2xl group">
                <img
                  src={imgOffice2}
                  alt="Creative Workspace"
                  className="w-full h-112 md:h-112 object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* --- Content Section --- */}
          <div className="flex-1 max-w-150">
            <p className="text-brand font-bold uppercase tracking-[0.3em] text-[12px] mb-4">
              ABOUT US
            </p>
            <h2 className="text-[36px] md:text-[46px] font-extrabold leading-[1.1] text-title mb-8 tracking-tight">
              We Empower<br />
              Clients to be loved
            </h2>
            <p className="text-desc text-[16px] leading-relaxed mb-6">
              It is a long established fact that a reader will be distracted by the readable 
              content of a page when looking at established fact that a reader will be by 
              the readable content of a page when looking at.
            </p>

            {/* Progress Bars Container */}
            <div className="max-w-125 pt-8">
              <ProgressBar label="Digital marketing" percentage={70} />
              <ProgressBar label="App Development" percentage={95} />
              <ProgressBar label="App Design" percentage={80} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutExperience;