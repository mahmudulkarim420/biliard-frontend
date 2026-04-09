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
          "fixed left-1/2 z-50 w-[95%] lg:w-[calc(100%-262px)] -translate-x-1/2 rounded-full border transition-all duration-300",
          scrolled
            ? "top-4 border-gray-500/40 bg-black/60 py-3 shadow-2xl backdrop-blur-lg lg:top-[16px]"
            : "top-[26px] border-gray-400/30 bg-gray-500/20 py-4 backdrop-blur-md lg:top-[26px]"
        )}
      >
        <div className="px-6 lg:px-10">
          <div className="flex items-center justify-between">
            
            {/* 1. Left - Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <img src={logo} alt="logo" className="h-10 w-10" />
              <span className="text-2xl font-bold tracking-widest text-white">
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
                <MessageSquare className="h-8 w-8 text-[#ff3b30] stroke-[1.5]" />
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