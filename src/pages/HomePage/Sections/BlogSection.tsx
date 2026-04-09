import { User, MessageSquare } from "lucide-react";

const blogs = [
    {
        id: 1,
        date: "05",
        monthYear: "Jun 2024",
        author: "Andrew Hedge",
        comments: "0 Comments",
        title: "Small brand make a big agency in the world",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
    },
    {
        id: 2,
        date: "05",
        monthYear: "Jun 2024",
        author: "Andrew Hedge",
        comments: "0 Comments",
        title: "Small brand make a big agency in the world",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600",
    },
    {
        id: 3,
        date: "05",
        monthYear: "Jun 2024",
        author: "Andrew Hedge",
        comments: "0 Comments",
        title: "Small brand make a big agency in the world",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
    },
];

const partners = ["Endomate", "dromin", "Amtek", "SkyMan", "Assote"];

const BlogSection = () => {
    return (
        <section className="bg-white py-24 px-6 sm:px-12 lg:px-24 w-full">
            <div className="max-w-[1200px] mx-auto text-center">

                {/* Header Section */}
                <p className="text-[#ff3b30] text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
                    LATEST BLOG
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
                    Latest Blog & News
                </h2>

                {/* Blog Grid - Fixed Margins for better spacing with Partners */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 lg:mb-20">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="group cursor-pointer">
                            {/* Image Container with Floating Date */}
                            <div className="relative overflow-hidden rounded-lg h-[280px] mb-[-60px] z-0">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
                                />
                                {/* Date Badge */}
                                <div className="absolute top-6 left-6 bg-[#ff3b30] text-white p-3 px-4 rounded-sm flex items-center gap-2 shadow-lg">
                                    <span className="text-2xl font-bold leading-none">{blog.date}</span>
                                    <div className="flex flex-col text-[10px] font-bold uppercase leading-tight text-left">
                                        <span>Jun</span>
                                        <span>2024</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content Card (Floating over image) */}
                            <div className="relative z-10 mx-4 bg-white p-8 rounded-lg shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(255,59,48,0.08)]">
                                <div className="flex items-center gap-6 text-[12px] text-gray-400 font-medium mb-4">
                                    <div className="flex items-center gap-2">
                                        <User className="w-3.5 h-3.5 text-[#ff3b30]" />
                                        <span>{blog.author}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MessageSquare className="w-3.5 h-3.5 text-[#ff3b30]" />
                                        <span>{blog.comments}</span>
                                    </div>
                                </div>
                                <h3 className="text-[18px] font-bold text-gray-900 leading-snug text-left group-hover:text-[#ff3b30] transition-colors">
                                    {blog.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Partners & Clients Section - Adjusted Top Spacing */}
                <div className="pt-12 border-t border-gray-100">
                    <div className="flex items-center justify-between gap-4 mb-12 overflow-hidden">
                        <div className="h-[1px] bg-gray-200 flex-1"></div>
                        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] whitespace-nowrap px-6">
                            Some of the partners & clients worked with
                        </p>
                        <div className="h-[1px] bg-gray-200 flex-1"></div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:gap-x-24 opacity-30 grayscale transition-opacity duration-300 hover:opacity-100">
                        {partners.map((partner, idx) => (
                            <span key={idx} className="text-2xl font-black italic text-gray-700 tracking-tighter hover:text-gray-900 cursor-default transition-colors">
                                {partner}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BlogSection;