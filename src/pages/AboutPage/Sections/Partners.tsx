import React from 'react';
import brand1 from "@/assets/brand-1-1.png";
import brand2 from "@/assets/brand-1-2.png";
import brand3 from "@/assets/brand-1-3.png";
import brand4 from "@/assets/brand-1-4 1.png";
import brand5 from "@/assets/brand-1-5.png";

const Partners = () => {
  const partners = [brand1, brand2, brand3, brand4, brand5];

  return (
    <section className="bg-white section-padding-about">
      <div className="container-custom">
        
        {/* Header with Horizontal Lines */}
        <div className="flex items-center gap-6 mb-16">
          <div className="flex-1 h-[1.5px] bg-gray-100" />
          <p className="text-[12px] md:text-[16px] font-bold text-desc uppercase tracking-[0.1em] whitespace-nowrap px-2">
            Some of the partners & clients worked with
          </p>
          <div className="flex-1 h-[1.5px] bg-gray-100" />
        </div>

        {/* Partners Logo Row */}
        <div className="flex flex-wrap justify-between items-center gap-8 md:gap-12 px-4 md:px-10">
          {partners.map((brand, index) => (
            <div 
              key={index} 
              className="group transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={brand}
                alt={`Partner Logo ${index + 1}`}
                className="h-8 md:h-12 w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Partners;
