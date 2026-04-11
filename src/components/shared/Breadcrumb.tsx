import { Link } from "react-router-dom";
import banner from "@/assets/banner.png";
import { cn } from "@/lib/utils";

interface BreadcrumbProps {
  title: string;
  className?: string;
}

const Breadcrumb = ({ title, className }: BreadcrumbProps) => {
  return (
    <section 
      className={cn(
        "relative w-full h-[350px] md:h-[450px] overflow-hidden flex items-center",
        className
      )}
    >
      {/* Background Image with Parallax-like fit */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${banner})` }}
      />

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[700px]">
          {/* Animated Header */}
          <div className="overflow-hidden">
            <h2 className="text-white text-5xl font-bold tracking-tight mb-3 animate-in slide-in-from-bottom duration-700">
              {title}
            </h2>
          </div>

          {/* Breadcrumb Path */}
          <nav className="flex items-center gap-3 text-sm md:text-base font-semibold transition-all delay-300 animate-in fade-in duration-1000">
            <Link 
              to="/" 
              className="text-white/60 hover:text-brand transition-colors duration-300 flex items-center gap-2 group"
            >
              Home
            </Link>
            
            <span className="text-white font-bold text-lg">/</span>
            
            <span className="text-white tracking-wide">
              {title}
            </span>
          </nav>
        </div>
      </div>
      
     
    </section>
  );
};

export default Breadcrumb;