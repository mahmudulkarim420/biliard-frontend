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
        "relative w-full flex flex-col justify-center items-center min-h-[65vh] md:min-h-[80vh] lg:min-h-screen overflow-hidden bg-gray-950 section-padding lg:py-0",
        className
      )}
    >
      {/* ── Layer 1: Grayscale base photo ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgMain}
          alt="Digital agency office"
          className="h-full w-full object-cover object-[75%_center] sm:object-top grayscale opacity-60 lg:opacity-80"
        />
        {/* Two-layer overlay: a solid dark scrim + a bottom-to-top gradient for content legibility */}
        <div className="absolute inset-0 bg-black/30 sm:bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-70" />
      </div>

      {/* ── Layer 2: Brand red shape accents ── */}
      {/* mix-blend-screen blends the red shapes with the grayscale photo below */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <img
          src={redAccents}
          alt="Red geometric accents"
          className="h-full w-full object-cover object-center opacity-50 lg:opacity-90 mix-blend-screen scale-110 sm:scale-100"
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center justify-center mt-12 md:mt-16">
        {/* Title */}
        <h1 className="text-white text-5xl md:text-6xl font-extrabold tracking-tight mb-4 animate-in slide-in-from-bottom duration-700">
          {title}
        </h1>

        {/* Breadcrumb Path */}
        <nav className="flex items-center gap-2 text-sm md:text-base font-semibold transition-all delay-300 animate-in fade-in duration-1000">
          {parts.map((part, index) => {
            const isLast = index === parts.length - 1;
            const text = part.trim();
            if (isLast) {
              return (
                <span key={index} className="text-white tracking-wide">
                  {text}
                </span>
              );
            }
            return (
              <span key={index} className="flex items-center gap-2">
                <Link
                  to="/"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  {text}
                </Link>
                <span className="text-white font-bold text-lg">/</span>
              </span>
            );
          })}
        </nav>
      </div>
    </section>
  );
};

export default PageHeader;
