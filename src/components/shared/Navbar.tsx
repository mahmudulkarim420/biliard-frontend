import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ShoppingCart, Search, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png"

const navLinks = [
  { name: "Home", href: "/", hasDropdown: true },
  { name: "Pages", href: "/pages", hasDropdown: true },
  { name: "Feature", href: "/feature", hasDropdown: false },
  { name: "Blog", href: "/blog", hasDropdown: false },
  { name: "Contact", href: "/contact", hasDropdown: false },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar Container - Floating Pill Shape */}
      <nav
        className={cn(
          "fixed z-50 transition-all duration-500 ease-in-out",
          scrolled
            ? "top-0 left-0 w-full rounded-none border-b border-white/10 bg-black/90 py-4 shadow-2xl backdrop-blur-xl"
            : "top-6 left-1/2 w-[95%] lg:w-[calc(100%-260px)] -translate-x-1/2 rounded-full border border-white/20 bg-white/10 py-4 backdrop-blur-md"
        )}
      >
        <div className="mx-auto max-w-[1200px] px-6 lg:px-2">
          <div className="flex items-center justify-between">
            
            {/* 1. Left - Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <img src={logo} alt="logo" className="h-10 w-10" />
              <span className="font-manrope text-2xl font-bold tracking-widest text-white">
                BILIARD
              </span>
            </Link>

            {/* 2. Center - Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={cn(
                      "flex items-center gap-1 text-[13px] font-semibold tracking-wide transition-colors hover:text-white",
                      isActive ? "text-white" : "text-gray-300"
                    )}
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="h-3.5 w-3.5 opacity-70" />}
                  </Link>
                );
              })}
            </div>

            {/* 3. Right - Actions & Contact */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                <button className="text-gray-300 hover:text-white transition-colors">
                  <ShoppingCart className="h-5 w-5" />
                </button>
                <button className="text-gray-300 hover:text-white transition-colors">
                  <Search className="h-5 w-5" />
                </button>
              </div>

              {/* Vertical Divider */}
              <div className="h-6 w-px bg-white/20" />

              {/* Contact Info */}
              <div className="flex items-center gap-3">
                <svg width="36" height="36" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.0833 12.6667H28.5V7.91666C28.5 6.65688 27.9995 5.4487 27.1087 4.5579C26.2179 3.6671 25.0097 3.16666 23.75 3.16666H7.91663C6.65685 3.16666 5.44867 3.6671 4.55787 4.5579C3.66707 5.4487 3.16663 6.65688 3.16663 7.91666V26.9167C3.16819 27.2292 3.26224 27.5344 3.43693 27.7936C3.61163 28.0528 3.85915 28.2545 4.14829 28.3733C4.3362 28.462 4.54226 28.5053 4.74996 28.5C4.95834 28.5012 5.1649 28.4613 5.35781 28.3825C5.55072 28.3037 5.72618 28.1876 5.87413 28.0408L10.3233 23.5758H12.6666V25.8558C12.6666 27.1156 13.1671 28.3238 14.0579 29.2146C14.9487 30.1054 16.1568 30.6058 17.4166 30.6058H28.3733L32.1258 34.3742C32.2737 34.5209 32.4492 34.637 32.6421 34.7158C32.835 34.7946 33.0416 34.8345 33.25 34.8333C33.4577 34.8387 33.6637 34.7953 33.8516 34.7067C34.1408 34.5879 34.3883 34.3862 34.563 34.1269C34.7377 33.8677 34.8317 33.5626 34.8333 33.25V17.4167C34.8333 16.1569 34.3328 14.9487 33.4421 14.0579C32.5513 13.1671 31.3431 12.6667 30.0833 12.6667ZM12.6666 17.4167V20.4092H9.67413C9.46575 20.408 9.25918 20.4479 9.06627 20.5267C8.87336 20.6055 8.69791 20.7216 8.54996 20.8683L6.33329 23.1008V7.91666C6.33329 7.49673 6.50011 7.094 6.79704 6.79707C7.09397 6.50014 7.4967 6.33332 7.91663 6.33332H23.75C24.1699 6.33332 24.5726 6.50014 24.8695 6.79707C25.1665 7.094 25.3333 7.49673 25.3333 7.91666V12.6667H17.4166C16.1568 12.6667 14.9487 13.1671 14.0579 14.0579C13.1671 14.9487 12.6666 16.1569 12.6666 17.4167ZM31.6666 29.4342L30.0833 27.8508C29.9367 27.7012 29.7618 27.5822 29.5688 27.5007C29.3758 27.4191 29.1686 27.3767 28.9591 27.3758H17.4166C16.9967 27.3758 16.594 27.209 16.297 26.9121C16.0001 26.6151 15.8333 26.2124 15.8333 25.7925V17.4167C15.8333 16.9967 16.0001 16.594 16.297 16.2971C16.594 16.0001 16.9967 15.8333 17.4166 15.8333H30.0833C30.5032 15.8333 30.9059 16.0001 31.2029 16.2971C31.4998 16.594 31.6666 16.9967 31.6666 17.4167V29.4342Z" fill="#FF3838"/>
</svg>

                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">
                    Call Anytime
                  </span>
                  <span className="text-sm font-bold text-white">
                    555 123 000
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="flex lg:hidden h-10 w-10 items-center justify-center rounded-full text-white border border-gray-400/30 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Floating Mobile Menu */}
      {isOpen && (
        <div className="fixed top-28 left-1/2 z-40 w-[90%] max-w-md -translate-x-1/2 rounded-2xl border border-gray-500/30 bg-black/90 p-4 backdrop-blur-xl lg:hidden shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-gray-200 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
              </Link>
            ))}
            <div className="mt-4 flex items-center justify-center gap-2 border-t border-gray-500/30 pt-4">
              <MessageSquare className="h-5 w-5 text-[#ff3b30]" />
              <span className="font-bold text-white">555 123 000</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;