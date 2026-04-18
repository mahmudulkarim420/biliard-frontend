import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SubPageLayout from "@/layouts/SubPageLayout";
import { User, MessageSquare, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { initialBlogPosts } from "@/lib/blog-data";
import BlogSidebar from "./BlogSidebar";

const POSTS_PER_PAGE = 2;

/**
 * Blog Page
 * 
 * Features:
 * 1. Real-time search filtering by Title or Author.
 * 2. Dynamic pagination with auto-reset to Page 1 on search.
 * 3. Dynamic routing to individual blog details.
 */
const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    return initialBlogPosts.filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const goToPage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <SubPageLayout title="Latest Blog" breadcrumb="Home / Blog">
      <div className="blog-page-standardized bg-white">

        <section className="section-padding">
          <div className="max-w-300 mx-auto xl:max-w-[1280px] 2xl:max-w-[1280px] px-5 md:px-8 xl:px-0">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

              {/* ── Left Column: Blog Posts ── */}
              <div className="lg:col-span-8">
                <div className="flex flex-col gap-12">
                  {currentPosts.length > 0 ? (
                    currentPosts.map((post) => (
                      <Link to={`/blog/${post.id}`} key={post.id} className="group relative block">

                        <div className="relative rounded-t-lg overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-88 md:h-112 object-cover grayscale transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
                          />
                          <div className="absolute top-6 left-6 bg-brand text-white flex items-center gap-2 px-4 py-2 rounded-sm shadow-md z-10">
                            <span className="text-3xl font-black">{post.date}</span>
                            <span className="text-[10px] font-bold leading-tight uppercase whitespace-pre-line">
                              {post.monthYear}
                            </span>
                          </div>
                        </div>

                        <div className="relative bg-white border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] mx-4 md:mx-8 -mt-16 p-6 md:p-10 z-20 rounded-md transition-shadow group-hover:shadow-[0_15px_50px_rgba(0,0,0,0.08)]">

                          <div className="flex items-center gap-6 mb-4 text-[13px] md:text-[14px] font-medium text-gray-500">
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4 text-brand" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MessageSquare className="w-4 h-4 text-brand" />
                              <span>{post.comments}</span>
                            </div>
                          </div>

                          <h2 className="text-[22px] font-bold text-title leading-[1.6] group-hover:text-brand transition-colors tracking-tight">
                            {post.title}
                          </h2>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="text-center py-20 bg-gray-50 rounded-[20px] border border-dashed border-gray-200">
                      <div className="flex flex-col items-center gap-4">
                        <Search className="w-12 h-12 text-gray-300" />
                        <h3 className="text-2xl font-bold text-title">No matching results</h3>
                        <p className="text-desc">We couldn't find any posts matching "{searchQuery}"</p>
                        <button
                          onClick={() => { setSearchQuery(""); setCurrentPage(1); }}
                          className="text-brand font-bold underline mt-2 hover:text-brand/80"
                        >
                          Clear all filters
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* ── Right Column: Sidebar ── */}
              <div className="lg:col-span-4 lg:row-span-2">
                <BlogSidebar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
              </div>

              {/* ── Pagination Column: Stays at bottom on mobile/tablet ── */}
              {totalPages > 1 && (
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => { e.preventDefault(); goToPage(currentPage - 1); }}
                      disabled={currentPage === 1}
                      className={`w-10 h-10 flex items-center justify-center border rounded-sm transition-colors ${currentPage === 1
                          ? 'border-gray-100 text-gray-300 cursor-not-allowed'
                          : 'border-gray-200 text-title hover:border-brand hover:text-brand'
                        }`}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    {[...Array(totalPages)].map((_, i) => (
                      <button
                        key={i + 1}
                        onClick={(e) => { e.preventDefault(); goToPage(i + 1); }}
                        className={`w-10 h-10 flex items-center justify-center border rounded-sm font-bold transition-all ${currentPage === i + 1
                            ? 'border-brand bg-brand text-white shadow-sm'
                            : 'border-gray-200 text-title hover:border-brand hover:text-brand'
                          }`}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </button>
                    ))}

                    <button
                      onClick={(e) => { e.preventDefault(); goToPage(currentPage + 1); }}
                      disabled={currentPage === totalPages}
                      className={`w-10 h-10 flex items-center justify-center border rounded-sm transition-colors ${currentPage === totalPages
                          ? 'border-gray-100 text-gray-300 cursor-not-allowed'
                          : 'border-gray-200 text-title hover:border-brand hover:text-brand'
                        }`}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>
        </section>

      </div>
    </SubPageLayout>
  );
};

export default BlogPage;