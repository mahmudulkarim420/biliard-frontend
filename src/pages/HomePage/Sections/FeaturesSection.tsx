import { useState } from "react";
import { Play, Check } from "lucide-react";
import bgVideo from "@/assets/video.png";
// ৩টি ট্যাবের জন্য আলাদা আলাদা ডাটা তৈরি করা হলো
const tabData = {
    "innovation": {
        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at established fact that a reader will be by the readable content of a page when looking at.",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=300",
        list: [
            "Europe inline concept surplus law",
            "Edition embulum dignisim",
            "If you are going to use a passage"
        ]
    },
    "creative idea": {
        text: "Creativity is intelligence having fun. We focus on delivering out-of-the-box solutions that make your brand stand out. Our creative process is deeply rooted in understanding your core values.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=300",
        list: [
            "Unique brand identity design",
            "Engaging visual storytelling",
            "User-centric creative approach"
        ]
    },
    "experience": {
        text: "With over a decade of industry experience, we bring proven methodologies and a track record of success. We have helped numerous startups and enterprises achieve their digital goals.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=300",
        list: [
            "10+ years of industry expertise",
            "Award-winning development team",
            "Proven track record of success"
        ]
    }
};

type TabKey = keyof typeof tabData;

const FeaturesSection = () => {
    // Tabs er state control korar jonno
    const [activeTab, setActiveTab] = useState<TabKey>("innovation");

    return (
        <section className="relative z-20 w-full bg-[#f8f9fc] py-24 px-6 sm:px-12 lg:px-24">
            {/* Light Hexagon/Geometric Background Pattern */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='103.92304845413264' viewBox='0 0 60 103.92304845413264' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 103.92304845413264l-30-17.32050807568877v-34.64101615137754l30-17.32050807568877 30 17.32050807568877v34.64101615137754z' fill='none' stroke='%23000000' stroke-width='2'/%3E%3C/svg%3E")`,
                    backgroundSize: '80px 138px'
                }}
            />

            <div className="relative z-10 mx-auto max-w-[1200px]">

                {/* 1. Video Banner Section */}
                <div className="group relative z-30 -mt-52 mb-20 h-[400px] w-full overflow-hidden bg-gray-900 lg:-mt-80 lg:h-[450px]">
                    <img
                        src={bgVideo}
                        alt="Agency meeting"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />


                </div>

                {/* 2. Bottom Features & Tabs Section */}
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">

                    {/* Left Column: Text & Progress Bar */}
                    <div>
                        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#ff3b30]">
                            Innovative Ideas
                        </p>
                        <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-[42px]">
                            We Offer You A <br /> Digital Platform
                        </h2>
                        <p className="mb-10 text-[15px] leading-relaxed text-gray-500">
                            It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at established fact that a
                            reader will be by the readable content of a page when looking at.
                        </p>

                        <div className="w-full">
                            <div className="mb-2 flex justify-between">
                                <span className="text-sm font-bold text-gray-900">Digital Marketing</span>
                                <span className="text-sm font-bold text-gray-900">85%</span>
                            </div>
                            <div className="h-1.5 w-full rounded-full bg-gray-200">
                                <div className="relative h-1.5 w-[85%] rounded-full bg-[#ff3b30]">
                                    <div className="absolute -top-2 right-0 h-0 w-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#ff3b30]" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Interactive Tabs */}
                    <div>
                        {/* Tab Headers */}
                        <div className="mb-8 flex flex-wrap gap-2 sm:gap-4">
                            {(Object.keys(tabData) as TabKey[]).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-3 text-[13px] font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === tab
                                        ? 'bg-[#ff3b30] text-white shadow-lg shadow-red-500/20'
                                        : 'bg-white text-gray-600 shadow-sm hover:bg-gray-50'
                                        }`}
                                >
                                    {tab.replace('-', ' ')}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content Area */}
                        {/* 'key={activeTab}' is the magic here. It forces React to re-render the div and re-trigger the fade-in animation every time the tab changes */}
                        <div key={activeTab} className="animate-in fade-in slide-in-from-bottom-2 duration-500">

                            {/* Dynamic Text */}
                            <p className="mb-8 text-[14px] leading-relaxed text-gray-500">
                                {tabData[activeTab].text}
                            </p>

                            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                                {/* Dynamic Image */}
                                <div className="h-28 w-40 shrink-0 overflow-hidden bg-gray-200">
                                    <img
                                        src={tabData[activeTab].image}
                                        alt={`${activeTab} visual`}
                                        className="h-full w-full object-cover grayscale"
                                    />
                                </div>

                                {/* Dynamic List */}
                                <ul className="flex flex-col gap-3">
                                    {tabData[activeTab].list.map((item, index) => (
                                        <li key={index} className="flex items-center gap-3 text-[14px] font-medium text-gray-700">
                                            <Check className="h-4 w-4 text-[#ff3b30] stroke-[3]" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;