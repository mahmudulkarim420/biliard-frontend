import { Check, X } from "lucide-react";
import cardShapeImg from "@/assets/bg (7).png";

const pricingPlans = [
    {
        name: "Basic Plan",
        price: "49",
        features: [
            { text: "Website Design", active: true },
            { text: "Web Development", active: true },
            { text: "Design Consulting", active: false },
            { text: "24/7 Support", active: false },
        ],
    },
    {
        name: "Popular Plan",
        price: "69",
        features: [
            { text: "Website Design", active: true },
            { text: "Web Development", active: true },
            { text: "Design Consulting", active: false },
            { text: "24/7 Support", active: false },
        ],
    },
    {
        name: "Business Plan",
        price: "89",
        features: [
            { text: "Website Design", active: true },
            { text: "Web Development", active: true },
            { text: "Design Consulting", active: false },
            { text: "24/7 Support", active: false },
        ],
    },
];

const PricingSection = () => {
    return (
        <section className="relative w-full py-24 px-6 sm:px-12 lg:px-24 bg-[#f8f9fa] overflow-hidden">

            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='103.92304845413264' viewBox='0 0 60 103.92304845413264' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 103.92304845413264l-30-17.32050807568877v-34.64101615137754l30-17.32050807568877 30 17.32050807568877v34.64101615137754z' fill='none' stroke='black' strokeWidth='2'/%3E%3C/svg%3E")`,
                    backgroundSize: '120px 208px',
                    backgroundRepeat: 'repeat',
                    backgroundPosition: 'center'
                }}
            ></div>

            <div className="mx-auto max-w-[1200px] relative z-10">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.3em] text-brand">
                        PRICING PLANS
                    </p>
                    <h2 className="text-4xl font-extrabold text-title sm:text-5xl lg:text-[54px] tracking-tight">
                        Choose The Best Plan
                    </h2>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className="relative bg-white pt-16 pb-14 px-10 shadow-[0_15px_60px_-15px_rgba(0,0,0,0.06)] rounded-sm flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group overflow-hidden"
                        >
                            {/* Card Shape Image — top-right corner accent */}
                            <img
                                src={cardShapeImg}
                                alt=""
                                className="absolute -top-20 right-0 w-[600px] h-[600px] object-cover object-right-top pointer-events-none z-0"
                            />

                            {/* Bottom Decorative Red Bar on Hover */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-brand transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 z-10"></div>

                            {/* Plan Title */}
                            <h3 className="text-[20px] font-bold text-title mb-10 relative z-10">
                                {plan.name}
                            </h3>

                            {/* Price Display */}
                            <div className="flex items-start justify-center text-title mb-2 relative z-10">
                                <span className="text-[22px] font-bold mt-3 mr-1">$</span>
                                <span className="text-[85px] font-black leading-none tracking-tight">
                                    {plan.price}
                                </span>
                            </div>
                            <p className="text-[13px] font-bold text-desc mb-12 relative z-10">
                                Per Month
                            </p>

                            {/* Features List */}
                            <div className="w-full flex flex-col gap-5 mb-14 relative z-10">
                                {plan.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3.5">
                                        {feature.active ? (
                                            <Check className="h-4 w-4 text-[#22c55e] stroke-[4px]" />
                                        ) : (
                                            <X className="h-4 w-4 text-[#ff3b30] stroke-[4px]" />
                                        )}
                                        <span className="text-[14px] font-bold text-desc">
                                            {feature.text}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Action Button */}
                            <button className="w-full bg-brand py-4 px-6 text-[13px] font-bold text-white uppercase tracking-widest transition-all duration-300 hover:bg-black shadow-lg shadow-brand/20 hover:shadow-black/20 rounded-md relative z-10">
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default PricingSection;