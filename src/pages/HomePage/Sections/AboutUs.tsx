import { Puzzle, Layers } from "lucide-react";
import img1 from "@/assets/img.png";
import img2 from "@/assets/img (1).png";
const AboutUs = () => {
    return (
        <section className="bg-white px-6 py-24 sm:px-12 lg:px-24">
            <div className="mx-auto max-w-[1200px]">
                <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">

                    {/* Left Column: Staggered Image Grid */}
                    <div className="relative flex gap-6">
                        {/* Image 1 (Left - Positioned Higher) */}
                        <div className="w-1/2">
                            <div className="relative h-[450px] w-full overflow-hidden">
                                <img
                                    src={img1} // Replace with your actual image
                                    alt="Team working"
                                    className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                                />
                            </div>
                        </div>

                        {/* Image 2 (Right - Positioned Lower) */}
                        <div className="mt-20 w-1/2">
                            <div className="relative h-[450px] w-full overflow-hidden bg-gray-100">
                                <img
                                    src={img2} // Replace with your actual image
                                    alt="Office environment"
                                    className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="flex flex-col items-start">
                        {/* Section Eyebrow */}
                        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#ff3b30]">
                            About Us
                        </p>

                        {/* Main Heading */}
                        <h2 className="mb-8 max-w-[400px] text-4xl font-bold leading-[1.1] text-gray-900 md:text-5xl">
                            We Empower Clients to be loved
                        </h2>

                        {/* Highlighted Paragraph with Red Left Border */}
                        <div className="mb-6 border-l-[3px] border-[#ff3b30] pl-5">
                            <p className="text-[15px] font-medium leading-relaxed text-gray-800">
                                It is a long established fact that a reader will be distracted by the
                                readable content of a page when looking at its layout.
                            </p>
                        </div>

                        {/* Regular Paragraph */}
                        <p className="mb-10 text-[14px] leading-relaxed text-gray-500">
                            It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at established fact that a
                            reader will be by the readable content of a page when looking at.
                        </p>

                        {/* Feature Points Grid */}
                        <div className="mb-10 grid w-full grid-cols-1 gap-6 sm:grid-cols-2">

                            {/* Feature 1 */}
                            <div className="flex items-start gap-4">
                                <div className="text-[#ff3b30]">
                                    <Puzzle className="h-8 w-8 stroke-[1.5]" />
                                </div>
                                <h4 className="text-sm font-bold leading-snug text-gray-900">
                                    Brand Strategy & Art <br /> Direction
                                </h4>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex items-start gap-4">
                                <div className="text-[#ff3b30]">
                                    <Layers className="h-8 w-8 stroke-[1.5]" />
                                </div>
                                <h4 className="text-sm font-bold leading-snug text-gray-900">
                                    UX/UI Design & <br /> Website/App Design
                                </h4>
                            </div>

                        </div>

                        {/* CTA Button */}
                        <button className="bg-[#ff3b30] px-8 py-3.5 text-[13px] font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/30">
                            Discover More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;