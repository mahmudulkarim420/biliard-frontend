import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 z-9999 h-12 w-12 flex items-center justify-center rounded-xl bg-[#FF3838] text-white shadow-sm transition-all duration-300",
        isVisible ? "translate-y-0 opacity-100 visible" : "translate-y-12 opacity-0 invisible"
      )}
    >
      <ChevronUp className="h-6 w-6 stroke-3" />
    </button>
  );
};

export default ScrollToTop;
