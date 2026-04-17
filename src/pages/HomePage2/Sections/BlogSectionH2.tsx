// ─── External Libraries ──────────────────────────────────────────────────────
import { User, MessageSquare } from "lucide-react";

// ─── Local Assets ─────────────────────────────────────────────────────────────
import blog1 from "@/assets/img (12).avif";
import blog2 from "@/assets/img (13).avif";
import blog3 from "@/assets/img (14).avif";
import partnerLogo1 from "@/assets/brand-1-1.png";
import partnerLogo2 from "@/assets/brand-1-2.png";
import partnerLogo3 from "@/assets/brand-1-3.png";
import partnerLogo4 from "@/assets/brand-1-4 1.png";
import partnerLogo5 from "@/assets/brand-1-5.png";

// ─── Types ────────────────────────────────────────────────────────────────────
interface BlogPost {
  id: number;
  date: string;
  monthYear: string;
  author: string;
  comments: string;
  title: string;
  image: string;
}

// ─── Static Data ──────────────────────────────────────────────────────────────
const blogs: BlogPost[] = [
  {
    id: 1,
    date: "05",
    monthYear: "Jun 2024",
    author: "Andrew Hedge",
    comments: "0 Comments",
    title: "Small brand make a big agency in the world",
    image: blog1,
  },
  {
    id: 2,
    date: "05",
    monthYear: "Jun 2024",
    author: "Andrew Hedge",
    comments: "0 Comments",
    title: "Small brand make a big agency in the world",
    image: blog2,
  },
  {
    id: 3,
    date: "05",
    monthYear: "Jun 2024",
    author: "Andrew Hedge",
    comments: "0 Comments",
    title: "Small brand make a big agency in the world",
    image: blog3,
  },
];

const partners = [partnerLogo1, partnerLogo2, partnerLogo3, partnerLogo4, partnerLogo5];

const BlogSectionH2 = () => {
  return (
    <section className="bg-white section-padding w-full">
      <div className="max-w-300 xl:max-w-[1280px] 2xl:max-w-[1440px] mx-auto text-center px-5 md:px-8 xl:px-0">

        <p className="text-brand text-[11px] md:text-[12px] xl:text-[14px] font-bold uppercase tracking-[0.1em] mb-4">
          LATEST BLOG
        </p>
        <h2 className="text-[20px] md:text-[30] lg:text-[40px] xl:text-[54px] font-bold text-title mb-12 md:mb-16 tracking-tight max-w-full lg:max-w-[800px] xl:max-w-[1000px] mx-auto">
          Latest Blog & News
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10 xl:gap-14 2xl:gap-16 mb-16 lg:mb-20 text-left">
          {blogs.map((blog) => (
            <div key={blog.id} className="group cursor-pointer">

              <div className="relative overflow-hidden rounded-lg h-70 xl:h-80 -mb-15 z-0">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute top-6 left-6 bg-brand text-white p-3 px-4 rounded-sm flex items-center gap-2 shadow-lg">
                  <span className="text-2xl font-bold leading-none">{blog.date}</span>
                  <div className="flex flex-col text-[10px] font-bold uppercase leading-tight text-left">
                    <span>Jun</span>
                    <span>2024</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mx-4 bg-white p-6 xl:p-8 rounded-lg shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(255,59,48,0.08)]">
                <div className="flex items-center gap-4 xl:gap-6 text-[12px] xl:text-[14px] text-desc font-medium mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-brand" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-brand" />
                    <span>{blog.comments}</span>
                  </div>
                </div>
                <h3 className="text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-bold text-title leading-snug text-left group-hover:text-brand transition-colors">
                  {blog.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-gray-100">
          <div className="flex items-center justify-center lg:justify-between gap-4 mb-12 overflow-hidden">
            <div className="h-px bg-gray-700 flex-1 hidden md:block" />
            <p className="text-[10px] md:text-[11px] xl:text-[13px] font-bold text-desc uppercase tracking-[0.1em] text-center md:whitespace-nowrap px-0 md:px-6 w-full md:w-auto">
              Some of the partners & <br className="md:hidden" /> clients worked with
            </p>
            <div className="h-px bg-gray-700 flex-1 hidden md:block" />
          </div>

          <div className="grid grid-cols-2 lg:flex lg:flex-wrap items-center justify-center gap-8 md:gap-12 xl:gap-16 opacity-100 grayscale transition-all duration-300 hover:opacity-100">
            {partners.map((partner, idx) => (
              <img
                key={idx}
                src={partner}
                alt={`Partner ${idx + 1}`}
                className={`h-10 md:h-12 xl:h-15 w-auto object-contain cursor-default transition-all duration-300 hover:grayscale-0 flex justify-center ${idx === 4 ? "col-span-2 lg:col-span-1" : ""}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BlogSectionH2;
