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

// Partner/client logo images rendered in a grayscale strip at the bottom.
const partners = [partnerLogo1, partnerLogo2, partnerLogo3, partnerLogo4, partnerLogo5];

// ─── Component ────────────────────────────────────────────────────────────────
// Three-column blog card grid. Each card uses a z-index overlap technique:
// the image sits behind (z-0) while the content card (z-10) floats over it.
// A partner logo strip with a decorative ruled centerline sits below the grid.
const BlogSection = () => {
  return (
    <section className="bg-white section-padding w-full">
      <div className="max-w-300 mx-auto text-center xl:max-w-[1280px] 2xl:max-w-[1440px] px-5 md:px-8 xl:px-0">

        {/* ── Section Header ── */}
        <p className="text-brand text-[11px] md:text-[12px] xl:text-[14px] font-bold uppercase tracking-[0.2em] mb-4">
          LATEST BLOG
        </p>
        <h2 className="max-w-[200px] text-[20px] md:max-w-[300px] md:text-[30px] lg:max-w-[400px] lg:text-[40px] xl:max-w-[510px] xl:text-[54px] mx-auto font-bold text-gray-900 mb-12 md:mb-16 tracking-tight">
          Latest Blog & News
        </h2>

        {/* ── Blog Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10 mb-16 lg:mb-20 text-left">
          {blogs.map((blog) => (
            <div key={blog.id} className="group cursor-pointer">

              {/* Image container — overlaps the content card below via negative bottom margin */}
              <div className="relative overflow-hidden rounded-lg h-70 xl:h-[350px] 2xl:h-[400px] -mb-15 z-0">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
                />
                {/* Date badge — brand-colored pill anchored to the top-left corner */}
                <div className="absolute top-6 left-6 bg-brand text-white p-3 px-4 rounded-sm flex items-center gap-2 shadow-lg">
                  <span className="text-2xl xl:text-3xl font-bold leading-none">{blog.date}</span>
                  <div className="flex flex-col text-[10px] xl:text-[12px] font-bold uppercase leading-tight text-left">
                    <span>Jun</span>
                    <span>2024</span>
                  </div>
                </div>
              </div>

              {/* Content card — floats over the image, lifts on hover */}
              <div className="relative z-10 mx-4 md:mx-5 xl:mx-8 bg-white p-8 xl:p-10 rounded-lg shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(255,59,48,0.08)]">
                <div className="flex items-center gap-6 text-[12px] xl:text-[14px] text-desc font-medium mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-brand" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-brand" />
                    <span>{blog.comments}</span>
                  </div>
                </div>
                <h3 className="text-[18px] sm:text-[20px] xl:text-[24px] font-bold text-title leading-snug text-left group-hover:text-brand transition-colors">
                  {blog.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* ── Partner Logos Strip ── */}
        {/* Grayscale logos fade in to full opacity on section hover as a group. */}
        <div className="pt-12 border-t border-gray-100">
          <div className="flex items-center justify-between gap-4 mb-12 overflow-hidden">
            <div className="h-px bg-gray-200 flex-1" />
            <p className="text-[10px] sm:text-[11px] xl:text-[13px] font-bold text-title uppercase tracking-[0.2em] whitespace-nowrap px-4 md:px-6">
              Some of the partners & clients worked with
            </p>
            <div className="h-px bg-gray-200 flex-1" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-16 opacity-100 grayscale transition-all duration-300 hover:opacity-100">
            {partners.map((partner, idx) => (
              <img
                key={idx}
                src={partner}
                alt={`Partner ${idx + 1}`}
                className="h-15 w-42 object-contain cursor-default transition-all duration-300 hover:grayscale-0"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;