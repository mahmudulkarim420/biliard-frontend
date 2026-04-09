import { useState } from "react";
import { MoveRight, Plus, Minus } from "lucide-react";

const services = [
    { id: "01", title: "Product Design" },
    { id: "02", title: "Advertising" },
    { id: "03", title: "Website Development" },
    { id: "04", title: "Brand & Strategy" },
];

const faqs = [
    {
        question: "How much experience do you have in this field?",
        answer: "We have over a decade of experience in delivering high-quality digital solutions for global brands.",
    },
    {
        question: "What happened to my design code?",
        answer: "In a few seconds, our A.I. will generate amazing results that you can copy, paste & publish. No matter your native language or technical background.",
    },
    {
        question: "What kind of services do you offer?",
        answer: "We offer full-stack development, brand identity design, and performance-driven digital marketing.",
    },
];

const MarketingSection = () => {
    // Second item (index 1) is open by default as requested
    const [openIndex, setOpenIndex] = useState<number | null>(1);

    return (
        <section className="bg-[#f5f5f5] py-24 px-6 sm:px-12 lg:px-24 w-full">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* LEFT SIDE CONTENT */}
                <div className="flex flex-col">
                    <span className="text-[#ff3b30] text-[12px] font-bold tracking-[0.2em] mb-4">
                        OUR OFFER
                    </span>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-10">
                        We perform best <br /> digital marketing
                    </h2>

                    <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                        <div className="w-full md:w-1/3 shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400"
                                alt="Team working"
                                className="rounded-sm grayscale object-cover w-full h-32"
                            />
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at established fact that a reader will be by the readable content of a page.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 border-t border-gray-200">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="flex items-center justify-between py-6 pr-6 border-b border-gray-200 group cursor-pointer"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-[12px] font-bold text-gray-400">{service.id}.</span>
                                    <span className="text-[15px] font-bold text-gray-900 group-hover:text-[#ff3b30] transition-colors">
                                        {service.title}
                                    </span>
                                </div>
                                <MoveRight className="w-4 h-4 text-gray-400 group-hover:text-[#ff3b30] group-hover:translate-x-1 transition-all" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDE FAQ ACCORDION */}
                <div className="flex flex-col gap-4 lg:mt-16">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-300"
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                                >
                                    <span className={`text-[16px] md:text-[18px] font-bold transition-colors ${isOpen ? 'text-[#ff3b30]' : 'text-gray-900'}`}>
                                        {faq.question}
                                    </span>
                                    <div className="bg-gray-100 rounded-full p-1 transition-transform">
                                        {isOpen ? <Minus className="w-4 h-4 text-gray-600" /> : <Plus className="w-4 h-4 text-gray-600" />}
                                    </div>
                                </button>

                                {isOpen && (
                                    <div className="px-6 md:px-8 pb-8 animate-in fade-in slide-in-from-top-2 duration-300">
                                        <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default MarketingSection;