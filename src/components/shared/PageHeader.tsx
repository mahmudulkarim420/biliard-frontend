import { Link } from "react-router-dom";
import bgMain from "@/assets/bg (1).png";
import redAccents from "@/assets/bg.png";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  breadcrumb: string;
  className?: string;
}

const PageHeader = ({ title, breadcrumb, className }: PageHeaderProps) => {
  const parts = breadcrumb.split("/");

  return (
    <section
      className={cn(
        "relative w-full flex flex-col justify-center min-h-112 md:min-h-138 lg:min-h-162 overflow-hidden bg-gray-950 py-20",
        className
      )}
    >
      {/* ── Layer 1: Grayscale base photo ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgMain}
          alt="Digital agency office"
          className="h-full w-full object-cover object-center grayscale opacity-60 lg:opacity-80"
        />
        {/* Two-layer overlay: a solid dark scrim + a bottom-to-top gradient for content legibility */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-transparent to-transparent opacity-40" />
      </div>

      {/* ── Layer 2: Brand red shape accents ── */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <img
          src={redAccents}
          alt="Red geometric accents"
          className="h-full w-full object-cover object-center opacity-60 lg:opacity-90 mix-blend-screen scale-110 sm:scale-100"
        />
      </div>

      {/* Content Container */}
      <div className="max-w-300 mx-auto w-full px-6 relative z-20">
        <div className="flex flex-col items-start gap-3">
          {/* Title */}
          <h1 className="text-white text-[36px] md:text-[52px] lg:text-[64px] font-bold leading-tight tracking-tight animate-in slide-in-from-bottom-5 duration-700">
            {title}
          </h1>

          {/* Breadcrumb Path */}
          <nav className="flex items-center gap-2 text-[14px] md:text-[16px] font-medium animate-in fade-in slide-in-from-bottom-2 duration-1000 delay-200">
            {parts.map((part, index) => {
              const isLast = index === parts.length - 1;
              const text = part.trim();
              if (isLast) {
                return (
                  <span key={index} className="text-white font-semibold">
                    {text}
                  </span>
                );
              }
              return (
                <span key={index} className="flex items-center gap-2">
                  <Link
                    to="/"
                    className="text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {text}
                  </Link>
                  <span className="text-white/30 text-[18px]">/</span>
                </span>
              );
            })}
          </nav>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
