import { useParams, Link } from "react-router-dom";
import SubPageLayout from "@/layouts/SubPageLayout";
import { initialBlogPosts } from "@/lib/blog-data";
import { 
  User, MessageSquare, ChevronLeft, ChevronRight, 
  Check, Quote, Twitter, Facebook, Globe
} from "lucide-react";
import BlogSidebar from "./BlogSidebar";
import icon1 from "@/assets/icon.png";

/**
 * Blog Details Page
 * 
 * Demonstrates dynamic routing for Blog posts:
 * 1. Uses useParams() to identify the current post.
 * 2. Reuses the BlogSidebar for consistent layout.
 * 3. Provides deep-dive content for specifically selected articles matching high-fidelity designs.
 */
const BlogDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  
  const postIndex = initialBlogPosts.findIndex((item) => item.id.toString() === id);
  const post = initialBlogPosts[postIndex];

  const prevPost = postIndex > 0 ? initialBlogPosts[postIndex - 1] : null;
  const nextPost = postIndex < initialBlogPosts.length - 1 ? initialBlogPosts[postIndex + 1] : null;

  if (!post) {
    return (
      <SubPageLayout title="Blog Post Not Found" breadcrumb="Home / Blog / Error">
        <div className="section-padding text-center">
          <h2 className="text-3xl font-extrabold text-title mb-6">Oops! This post doesn't exist.</h2>
          <Link to="/blog" className="bg-brand text-white px-8 py-3 rounded-full font-bold inline-block">
            Back to Blog
          </Link>
        </div>
      </SubPageLayout>
    );
  }

  return (
    <SubPageLayout title="Latest Blog" breadcrumb={`Home / Blog / Latest Blog`}>
      <div className="blog-details-page bg-white">
        <section className="section-padding">
          <div className="max-w-300 mx-auto">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* ── Left Column: Article Content ── */}
              <div className="lg:col-span-8">

                {/* Main Article Header with Date Badge */}
                <div className="relative rounded-[5px] overflow-hidden mb-8">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-[350px] object-cover grayscale brightness-90 transition-all duration-700 hover:grayscale-0 hover:brightness-100"
                  />
                  <div className="absolute top-5 left-5 bg-[#ff3838] text-white px-4 py-2 flex items-center gap-2 rounded-sm shadow-xl z-20">
                    <span className="text-2xl font-black">{post.date}</span>
                    <span className="text-[10px] font-bold leading-tight uppercase whitespace-pre-line">
                      {post.monthYear}
                    </span>
                  </div>
                </div>

                {/* Post Meta */}
                <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-6 text-[13px] font-medium text-gray-500">
                  <div className="flex items-center gap-2 group cursor-pointer hover:text-brand transition-colors">
                    <User className="w-4 h-4 text-[#ff3838]" />
                    <span className="text-title/70 text-[14px] font-bold">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2 group cursor-pointer hover:text-brand transition-colors">
                    <MessageSquare className="w-4 h-4 text-[#ff3838]" />
                    <span className="text-title/70 text-[14px] font-bold">{post.comments}</span>
                  </div>
                </div>

                <h2 className="text-[28px] md:text-[34px] font-semibold text-title leading-[1.3] mb-8 tracking-tight">
                  {post.title}
                </h2>

                <div className="text-desc text-[16px] leading-[1.7] flex flex-col gap-6 mb-10">
                  <p className="leading-[2]">
                    In a few seconds, our A.I. will generate amazing results that you can copy, paste & publish. No matter your native tongue, write creatively and clearly in 25+ languages. Applications are like the lifeblood of mobile phones and tablets today. The true potential of your mobile phone is harnessed.
                  </p>
                  
                  {/* Styled Blockquote Section */}
                  <div className="relative bg-[#F8F7FC] p-8 md:p-14 rounded-[5px] my-4 overflow-hidden group">
                    <div className="absolute left-6 top-6 opacity-80">
                      <img src={icon1} alt="Quote Icon" className="w-16 md:w-20 h-auto" />
                    </div>
                    <div className="relative z-10 pl-5 border-l-4 border-[#ff3838]/20">
                      <p className="text-desc font-medium text-[15px] md:text-[18px] leading-relaxed mb-4 italic">
                        technology has become super advanced. Even normal people are getting themselves enrolled in coding and programming.
                      </p>
                      <span className="text-[#ff3838] font-bold text-[14px] uppercase tracking-widest">Andrew Himmer</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-title mt-6 mb-2 tracking-tight">4 Tips To Put Your Creativity On The Development?</h3>
                  <p className="leading-[2]">In a few seconds, our A.I. will generate amazing results that you can copy, paste & publish. No matter your native tongue, write creatively and clearly in 25+ languages. Applications.</p>
                  
                  <ul className="flex flex-col gap-6 mt-2">
                    {[
                      "Normal People Are Getting Themselves Enrolled In Coding And Programming",
                      "Creating Applications On Their Own. An App Developer Earns",
                      "If Seen From A Business Point Of View, Has A Lot Of Scope"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4 group">
                        <div className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-white shadow-sm transition-colors border border-gray-100">
                           <Check className="w-3 h-3 text-[#ff3838] stroke-[4px]" />
                        </div>
                        <span className="text-title font-bold text-[15px] opacity-80 group-hover:opacity-100 transition-opacity">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags & Social row */}
                <div className="mt-12 py-8 border-t border-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                   <div className="flex flex-wrap items-center gap-3">
                      {["Software", "App", "Technology"].map((tag) => (
                        <button key={tag} className="px-5 md:px-6 py-2 bg-[#f6f6f6] text-[11px] md:text-[12px] font-bold text-title hover:bg-[#ff3838] hover:text-white transition-all rounded-sm uppercase tracking-widest">
                          {tag}
                        </button>
                      ))}
                   </div>
                   <div className="flex items-center gap-3">
                      <button className="w-10 h-10 border border-gray-100 flex items-center justify-center rounded-full bg-[#ff3838] text-white hover:bg-title transition-all shadow-md">
                        <Twitter className="w-4 h-4 fill-current" />
                      </button>
                      <button className="w-10 h-10 border border-gray-100 flex items-center justify-center rounded-full bg-[#ff3838] text-white hover:bg-title transition-all shadow-md">
                        <Facebook className="w-4 h-4 fill-current" />
                      </button>
                      <button className="w-10 h-10 border border-gray-100 flex items-center justify-center rounded-full bg-[#ff3838] text-white hover:bg-title transition-all shadow-md">
                        <Globe className="w-4 h-4" />
                      </button>
                   </div>
                </div>

                {/* Previous/Next Post Navigation */}
                <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-4">
                   {prevPost && (
                     <Link to={`/blog/${prevPost.id}`} className="group flex items-center gap-4 bg-white border border-gray-100 p-6 hover:bg-gray-50 transition-all rounded-md">
                        <ChevronLeft className="w-5 h-5 shrink-0 text-gray-400 group-hover:text-[#ff3838] transition-colors" />
                        <div className="hidden sm:block shrink-0 w-16 h-16 rounded overflow-hidden shadow-sm">
                           <img src={prevPost.image} className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0 group-hover:scale-110" />
                        </div>
                        <div className="flex flex-col gap-1">
                           <h4 className="text-[13px] md:text-[15px] font-bold text-title leading-tight line-clamp-2 transition-colors group-hover:text-[#ff3838]">
                             UX writing: Copy is an integral part
                           </h4>
                           <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                             {prevPost.date} Jan 2024
                           </span>
                        </div>
                     </Link>
                   )}
                   {nextPost && (
                     <Link to={`/blog/${nextPost.id}`} className="group flex items-center justify-between md:justify-end text-right gap-4 bg-white border border-gray-100 p-6 hover:bg-gray-50 transition-all rounded-md">
                        <div className="flex flex-col gap-1">
                           <h4 className="text-[13px] md:text-[15px] font-bold text-title leading-tight line-clamp-2 transition-colors group-hover:text-[#ff3838]">
                             UX writing: Copy is an integral part
                           </h4>
                           <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                             {nextPost.date} Jan 2024
                           </span>
                        </div>
                        <div className="hidden sm:block shrink-0 w-16 h-16 rounded overflow-hidden shadow-sm">
                           <img src={nextPost.image} className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0 group-hover:scale-110" />
                        </div>
                        <ChevronRight className="w-5 h-5 shrink-0 text-gray-400 group-hover:text-[#ff3838] transition-colors" />
                     </Link>
                   )}
                </div>

                {/* Leave a Reply Section */}
                <div className="mt-20">
                   <h3 className="text-[26px] font-black text-title mb-2 tracking-tight">Leave A Reply</h3>
                   <p className="text-[14px] text-gray-500 mb-10">Your email address will not be published. Required fields are marked <span className="text-[#ff3838] font-bold">*</span></p>

                   <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <input 
                           type="text" 
                           placeholder="Your Name *" 
                           className="bg-[#f6f6f6] border-none px-6 py-4 rounded-sm text-[14px] font-bold text-title outline-none focus:ring-1 focus:ring-[#ff3838]/30 transition-all placeholder:text-gray-400" 
                         />
                         <input 
                           type="email" 
                           placeholder="Your Mail *" 
                           className="bg-[#f6f6f6] border-none px-6 py-4 rounded-sm text-[14px] font-bold text-title outline-none focus:ring-1 focus:ring-[#ff3838]/30 transition-all placeholder:text-gray-400" 
                         />
                      </div>
                      <textarea 
                        rows={6}
                        placeholder="Your Comment *" 
                        className="bg-[#f6f6f6] border-none px-6 py-6 rounded-sm text-[14px] font-bold text-title outline-none focus:ring-1 focus:ring-[#ff3838]/30 transition-all placeholder:text-gray-400 resize-none"
                      />
                      <div className="w-full">
                        <button className="w-full sm:w-auto bg-[#ff3838] text-white px-10 py-5 rounded-sm font-black text-[12px] uppercase tracking-widest hover:bg-title transition-all shadow-xl hover:-translate-y-1 active:scale-95 active:translate-y-0">
                          Post Comment
                        </button>
                      </div>
                   </form>
                </div>

              </div>

              {/* ── Right Column: Shared Sidebar ── */}
              <div className="lg:col-span-4">
                 <BlogSidebar />
              </div>

            </div>
          </div>
        </section>
      </div>
    </SubPageLayout>
  );
};

export default BlogDetailsPage;
