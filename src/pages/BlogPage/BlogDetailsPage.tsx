import { useParams, Link } from "react-router-dom";
import SubPageLayout from "@/layouts/SubPageLayout";
import { initialBlogPosts } from "@/lib/blog-data";
import { User, MessageSquare, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import BlogSidebar from "./BlogSidebar";

/**
 * Blog Details Page
 * 
 * Demonstrates dynamic routing for Blog posts:
 * 1. Uses useParams() to identify the current post.
 * 2. Reuses the BlogSidebar for consistent layout.
 * 3. Provides deep-dive content for specifically selected articles.
 */
const BlogDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the post based on the dynamic ID from the URL
  const post = initialBlogPosts.find((item) => item.id.toString() === id);

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
          <div className="max-w-[1200px] mx-auto">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* ── Left Column: Article Content ── */}
              <div className="lg:col-span-8">

                {/* Main Article Header */}
                <div className="rounded-[24px] overflow-hidden shadow-xl mb-12">
                   <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-auto object-cover"
                   />
                </div>

                <div className="flex items-center gap-6 mb-8 text-[14px] font-bold text-gray-400 uppercase tracking-widest">
                   <div className="flex items-center gap-2">
                     <User className="w-5 h-5 text-brand" />
                     <span className="text-title lowercase italic">by {post.author}</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <MessageSquare className="w-4 h-4 text-brand" />
                     <span className="text-title">{post.comments}</span>
                   </div>
                </div>

                <h2 className="text-[34px] md:text-[46px] font-extrabold text-title leading-[1.2] mb-10 tracking-tight">
                  {post.title}
                </h2>

                <div className="prose max-w-none text-desc text-lg leading-[1.8] flex flex-col gap-6">
                  <p>
                    {post.description || "The digital landscape is constantly shifting, but the fundamentals of quality and engagement remain the same. This article explores how modern agencies are adapting to these changes by focusing on user-centric design and scalable technology solutions."}
                  </p>
                  
                  <blockquote className="border-l-4 border-brand bg-gray-50 p-8 rounded-r-2xl my-8">
                    <p className="text-title font-bold italic text-2xl leading-relaxed">
                      "Design is not just what it looks like and feels like. Design is how it works. Our goal is to create products that feel as good as they look."
                    </p>
                    <cite className="block mt-4 text-brand font-bold not-italic">— Agency Design Director</cite>
                  </blockquote>

                  <p>
                    Whether you are a startup looking for your first brand identity or an established corporation seeking a digital transformation, our team is equipped to handle the complexities of modern design challenges. We believe in data-driven decisions paired with intuitive creativity.
                  </p>
                  
                  <p>
                    Successfully navigating the industry requires a relentless focus on the end-user. By understanding their pain points and aspirations, we can build tools that truly solve problems and create lasting impact.
                  </p>
                </div>

                {/* Social Share */}
                <div className="mt-16 pt-10 border-t border-gray-100 flex flex-wrap items-center justify-between gap-6">
                   <div className="flex items-center gap-4">
                      <span className="font-bold text-title">Share this post:</span>
                      <div className="flex gap-3">
                         {[Facebook, Twitter, Linkedin, Share2].map((Icon, i) => (
                           <button key={i} className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-brand hover:text-white hover:border-brand transition-all">
                              <Icon className="h-4 w-4" />
                           </button>
                         ))}
                      </div>
                   </div>
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
