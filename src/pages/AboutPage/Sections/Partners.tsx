import React from 'react';
import brand1 from "@/assets/brand-1-1.png";
import brand2 from "@/assets/brand-1-2.png";
import brand3 from "@/assets/brand-1-3.png";
import brand4 from "@/assets/brand-1-4 1.png";
import brand5 from "@/assets/brand-1-5.png";

const Partners = () => {
  const partners = [brand1, brand2, brand3, brand4, brand5];

  return (
    <section className="bg-white section-padding">
      <div className="max-w-300 mx-auto xl:max-w-[1280px] 2xl:max-w-[1440px] px-5 md:px-8 xl:px-0">
        
        {/* Header with Horizontal Lines */}
        <div className="flex items-center justify-center lg:justify-between gap-4 md:gap-6 mb-10 md:mb-16">
          <div className="flex-1 h-[1.5px] bg-gray-100 hidden md:block" />
          <p className="text-[10px] md:text-[14px] xl:text-[16px] font-bold text-desc uppercase tracking-widest text-center whitespace-normal md:whitespace-nowrap px-0 md:px-2 w-full md:w-auto">
            Some of the partners & <br className="md:hidden" /> clients worked with
          </p>
          <div className="flex-1 h-[1.5px] bg-gray-100 hidden md:block" />
        </div>

        {/* Partners Logo Row */}
        <div className="grid grid-cols-2 lg:flex lg:flex-wrap justify-center lg:justify-between items-center gap-8 md:gap-12 xl:gap-16 px-4 md:px-10">
          {partners.map((brand, index) => (
            <div 
              key={index} 
              className={`group transition-all duration-300 transform hover:scale-105 flex justify-center ${index === 4 ? "col-span-2 lg:col-span-1" : ""}`}
            >
              <img
                src={brand}
                alt={`Partner Logo ${index + 1}`}
                className="h-8 md:h-12 xl:h-14 2xl:h-16 w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Partners;
