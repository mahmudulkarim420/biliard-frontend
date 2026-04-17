import { Search, ChevronRight } from "lucide-react";
import { latestNews, categories, tags } from "@/lib/blog-data";

interface BlogSidebarProps {
  searchQuery?: string;
  onSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BlogSidebar = ({ searchQuery, onSearchChange }: BlogSidebarProps) => {
  return (
    <div className="  p-8 lg:p-10  sticky top-32">
      
      {/* Search Bar */}
      <div className="relative mb-12">
        <input 
          type="text" 
          placeholder="Search posts..." 
          value={searchQuery || ""}
          onChange={onSearchChange}
          className="w-full bg-[#F2F4F8] border-none outline-none py-4 pl-6 pr-12 rounded-md text-[14px] text-title font-medium focus:ring-1 focus:ring-brand/30 transition-all placeholder:text-gray-400"
        />
        <Search className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-title" />
      </div>

      {/* Sidebar Content Grid - Structured for responsiveness on tablet */}
      <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-1 gap-y-12 gap-x-10 lg:gap-y-0">

        {/* Latest News Section - Spans half width on tablet */}
        <div className="md:col-span-6 lg:col-span-full mb-0 lg:mb-12">
          <h3 className="text-[22px] font-bold text-title mb-6 tracking-tight">Latest News</h3>
          <div className="flex flex-col gap-6">
            {latestNews.map((news) => (
              <div key={news.id} className="flex gap-4 items-center group cursor-pointer pb-6 border-b border-gray-200/60 last:border-0 last:pb-0">
                <img 
                  src={news.img} 
                  alt={news.title} 
                  className="w-20 h-20 object-cover rounded-md grayscale group-hover:grayscale-0 transition-all"
                />
                <div>
                  <h4 className="text-[15px] font-bold text-title leading-[1.3] group-hover:text-brand transition-colors mb-2">
                    {news.title}
                  </h4>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                    {news.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Section - Spans quarter width on tablet */}
        <div className="md:col-span-3 lg:col-span-full mb-0 lg:mb-12">
          <h3 className="text-[22px] font-bold text-title mb-6 tracking-tight">Category</h3>
          <ul className="flex flex-col gap-3">
            {categories.map((cat, idx) => (
              <li key={idx} className="group cursor-pointer">
                <div className="flex items-center gap-3">
                  <ChevronRight className={`w-5 h-5 transition-colors text-brand`}   />
                  <span className={`text-[15px] font-medium transition-colors text-desc hover:text-brand`}>
                    {cat.name}
                  </span>
                  <span className="text-[13px] text-gray-400 ml-1">({cat.count})</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Tags Section - Spans quarter width on tablet */}
        <div className="md:col-span-3 lg:col-span-full">
          <h3 className="text-[22px] font-bold text-title mb-6 tracking-tight">Tags</h3>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag, idx) => (
              <button 
                key={idx} 
                className="px-5 py-2 border border-gray-200 rounded-full text-[13px] font-medium text-gray-500 hover:border-brand hover:text-brand hover:bg-brand/5 transition-all"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

export default BlogSidebar;
