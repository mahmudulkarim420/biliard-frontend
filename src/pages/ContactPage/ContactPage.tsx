import SubPageLayout from "@/layouts/SubPageLayout";

const ContactPage = () => {
  return (
    <SubPageLayout title="Contact Us" breadcrumb="Home / Contact">
      <div className="bg-white">
        
        <section className="section-padding">
          <div className="max-w-300 mx-auto xl:max-w-[1280px] 2xl:max-w-[1440px] px-5 md:px-8 xl:px-0">
            
            {/* ── Top Section: Info & Form ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 xl:gap-32 items-start mb-16 md:mb-24">
              
              {/* Left Column: Contact Info */}
              <div>
                <h2 className="text-[32px] md:text-[40px] xl:text-[54px] font-semibold text-title leading-[1.1] mb-12 tracking-tight">
                  We’ve been <br /> waiting for you
                </h2>
                
                <div className="flex flex-col sm:flex-row lg:flex-col gap-8 sm:gap-14 lg:gap-8">
                  {/* Phone */}
                  <div>
                    <h4 className="text-[20px] sm:text-[16px] xl:text-[20px] font-bold text-title mb-1">Phone</h4>
                    <p className="text-[15px] sm:text-[13px] xl:text-[15px] text-gray-500">(+23) 5535 68 68</p>
                  </div>
                  
                  {/* Email */}
                  <div>
                    <h4 className="text-[20px] sm:text-[16px] xl:text-[20px] font-bold text-title mb-1">Email Address</h4>
                    <a href="mailto:hello@biliard.com" className="text-[15px] sm:text-[13px] xl:text-[14px] text-desc hover:underline transition-all">
                      hello@biliard.com
                    </a>
                  </div>
                  
                  {/* Address */}
                  <div>
                    <h4 className="text-[20px] sm:text-[16px] xl:text-[20px] font-bold text-title mb-1">Address</h4>
                    <p className="text-[15px] sm:text-[13px] xl:text-[15px] text-gray-500 leading-relaxed uppercase">
                      230 alaska street dunasia QC <br /> (USA) H8R 1A1
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Clean Form */}
              <div className="pt-2">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10" onSubmit={(e) => e.preventDefault()}>
                  
                  <div className="w-full">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full border-b border-gray-200 py-3 text-[14px] font-medium text-title outline-none focus:border-brand transition-colors bg-transparent placeholder:text-gray-400"
                    />
                  </div>
                  
                  <div className="w-full">
                    <input 
                      type="email" 
                      placeholder="Your Mail" 
                      className="w-full border-b border-gray-200 py-3 text-[14px] font-medium text-title outline-none focus:border-brand transition-colors bg-transparent placeholder:text-gray-400"
                    />
                  </div>
                  
                  <div className="w-full">
                    <input 
                      type="text" 
                      placeholder="Phone Number" 
                      className="w-full border-b border-gray-200 py-3 text-[14px] font-medium text-title outline-none focus:border-brand transition-colors bg-transparent placeholder:text-gray-400"
                    />
                  </div>
                  
                  <div className="w-full">
                    <input 
                      type="text" 
                      placeholder="Subject" 
                      className="w-full border-b border-gray-200 py-3 text-[14px] font-medium text-title outline-none focus:border-brand transition-colors bg-transparent placeholder:text-gray-400"
                    />
                  </div>
                  
                  <div className="md:col-span-2 w-full">
                    <textarea 
                      rows={3}
                      placeholder="Your Message" 
                      className="w-full border-b border-gray-200 py-3 text-[14px] font-medium text-title outline-none focus:border-brand transition-colors bg-transparent placeholder:text-gray-400 resize-none"
                    />
                  </div>
                  
                  <div className="md:col-span-2 mt-4">
                    <button className="w-full sm:w-auto bg-brand text-white px-10 py-4 rounded-md font-bold text-[14px] uppercase tracking-wider hover:bg-title transition-all shadow-md hover:-translate-y-1 active:scale-95">
                      Send Message
                    </button>
                  </div>
                  
                </form>
              </div>

            </div>

            {/* ── Bottom Section: Map ── */}
            <div className="w-full h-88 md:h-125 rounded-xl overflow-hidden mt-16 shadow-sm border border-gray-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528082188!2d-74.11976373946229!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1684315264872!5m2!1sen!2sbd" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="brightness-[1.02] contrast-[0.9] saturate-[0.8] opacity-90"
              />
            </div>

          </div>
        </section>

      </div>
    </SubPageLayout>
  );
};

export default ContactPage;