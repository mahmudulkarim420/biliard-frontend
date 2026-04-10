import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu, X, ChevronDown, ShoppingCart, Search,
  Mail, MapPin, Twitter, Facebook, Instagram, Linkedin, Phone
} from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navLinks = [
  {
    name: "Home",
    href: "/",
    hasDropdown: true,
    subLinks: [{ name: "Home One", href: "/" }, { name: "Home Two", href: "/home-2" }]
  },
  {
    name: "Pages",
    href: "/pages",
    hasDropdown: true,
    subLinks: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/team" },
      { name: "Pricing", href: "/pricing" }
    ]
  },
  { name: "Feature", href: "/feature", hasDropdown: false },
  { name: "Blog", href: "/blog", hasDropdown: false },
  { name: "Contact", href: "/contact", hasDropdown: false },
];

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* 1. Top Bar */}
      <div className={cn(
        "hidden lg:block bg-[#09090b] text-white py-3 transition-all duration-500 ease-in-out",
        scrolled ? "-translate-y-full opacity-0 h-0" : "translate-y-0 opacity-100 h-auto"
      )}>
        <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-8 text-[12px] text-gray-400 font-medium">
            <div className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-brand" />
              <span>biliardagency@ourmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-brand" />
              <span>88 Brooklyn Golden Street, New York</span>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Twitter className="h-3.5 w-3.5 hover:text-brand cursor-pointer transition-colors" />
            <Facebook className="h-3.5 w-3.5 hover:text-brand cursor-pointer transition-colors" />
            <Instagram className="h-3.5 w-3.5 hover:text-brand cursor-pointer transition-colors" />
            <Linkedin className="h-3.5 w-3.5 hover:text-brand cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      {/* 2. Main Navbar */}
      <nav className={cn(
        "w-full transition-all duration-500 border-b",
        scrolled
          ? "bg-[#09090b]/95 backdrop-blur-md pt-10 pb-6 shadow-xl border-white/10 -mt-[44px] lg:-mt-[44px]"
          : "bg-white py-7 border-transparent"
      )}>
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">

          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2 shrink-0">
            <img src={logo} alt="logo" className="h-10 w-10" />
            <span className={cn(
              "text-2xl font-black tracking-widest uppercase transition-colors duration-300",
              scrolled ? "text-white" : "text-title"
            )}>
              BILIARD
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-9">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.href}
                  className={cn(
                    "flex items-center gap-1 text-[14px] font-bold transition-all duration-300",
                    location.pathname === link.href
                      ? "text-brand"
                      : scrolled ? "text-gray-300 hover:text-brand" : "text-title hover:text-brand"
                  )}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className={cn(
                      "h-3 w-3 transition-transform",
                      activeDropdown === link.name && "rotate-180"
                    )} />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {link.hasDropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 pt-4 w-48 transition-all animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="bg-white shadow-2xl border border-gray-100 py-3 rounded-lg overflow-hidden">
                      {link.subLinks?.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          className="block px-6 py-2.5 text-[13px] font-bold text-title hover:bg-gray-50 hover:text-brand transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Actions & Call Info */}
          <div className="flex items-center gap-6">
            <div className={cn(
              "hidden sm:flex items-center gap-5 border-r pr-6 transition-colors duration-300",
              scrolled ? "border-white/20" : "border-gray-200"
            )}>
              <ShoppingCart className={cn("h-5 w-5 cursor-pointer hover:text-brand", scrolled ? "text-white" : "text-title")} />
              <Search className={cn("h-5 w-5 cursor-pointer hover:text-brand", scrolled ? "text-white" : "text-title")} />
            </div>

            <div className="hidden md:flex items-center gap-3">
              <div>
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30.0834 12.6667H28.5001V7.91666C28.5001 6.65688 27.9996 5.4487 27.1088 4.5579C26.218 3.6671 25.0099 3.16666 23.7501 3.16666H7.91675C6.65697 3.16666 5.44879 3.6671 4.55799 4.5579C3.66719 5.4487 3.16675 6.65688 3.16675 7.91666V26.9167C3.16831 27.2292 3.26236 27.5344 3.43706 27.7936C3.61175 28.0528 3.85927 28.2545 4.14841 28.3733C4.33632 28.462 4.54239 28.5053 4.75008 28.5C4.95846 28.5012 5.16502 28.4613 5.35793 28.3825C5.55084 28.3037 5.7263 28.1876 5.87425 28.0408L10.3234 23.5758H12.6667V25.8558C12.6667 27.1156 13.1672 28.3238 14.058 29.2146C14.9488 30.1054 16.157 30.6058 17.4167 30.6058H28.3734L32.1259 34.3742C32.2739 34.5209 32.4493 34.637 32.6422 34.7158C32.8351 34.7946 33.0417 34.8345 33.2501 34.8333C33.4578 34.8387 33.6638 34.7953 33.8517 34.7067C34.1409 34.5879 34.3884 34.3862 34.5631 34.1269C34.7378 33.8677 34.8319 33.5626 34.8334 33.25V17.4167C34.8334 16.1569 34.333 14.9487 33.4422 14.0579C32.5514 13.1671 31.3432 12.6667 30.0834 12.6667ZM12.6667 17.4167V20.4092H9.67425C9.46587 20.408 9.25931 20.4479 9.0664 20.5267C8.87349 20.6055 8.69803 20.7216 8.55008 20.8683L6.33341 23.1008V7.91666C6.33341 7.49673 6.50023 7.094 6.79716 6.79707C7.0941 6.50014 7.49682 6.33332 7.91675 6.33332H23.7501C24.17 6.33332 24.5727 6.50014 24.8697 6.79707C25.1666 7.094 25.3334 7.49673 25.3334 7.91666V12.6667H17.4167C16.157 12.6667 14.9488 13.1671 14.058 14.0579C13.1672 14.9487 12.6667 16.1569 12.6667 17.4167ZM31.6667 29.4342L30.0834 27.8508C29.9368 27.7012 29.7619 27.5822 29.5689 27.5007C29.376 27.4191 29.1687 27.3767 28.9592 27.3758H17.4167C16.9968 27.3758 16.5941 27.209 16.2972 26.9121C16.0002 26.6151 15.8334 26.2124 15.8334 25.7925V17.4167C15.8334 16.9967 16.0002 16.594 16.2972 16.2971C16.5941 16.0001 16.9968 15.8333 17.4167 15.8333H30.0834C30.5033 15.8333 30.9061 16.0001 31.203 16.2971C31.4999 16.594 31.6667 16.9967 31.6667 17.4167V29.4342Z" fill="#FF3838" />
                </svg>

              </div>
              <div className="flex flex-col">
                <span className={cn("text-[10px] font-bold uppercase tracking-wider", scrolled ? "text-gray-400" : "text-desc")}>Call Anytime</span>
                <span className={cn("text-[16px] font-extrabold leading-none tracking-tight transition-colors duration-300", scrolled ? "text-white" : "text-title")}>555 123 000</span>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button className={cn("lg:hidden p-2 transition-colors duration-300", scrolled ? "text-white" : "text-title")} onClick={() => setIsOpen(true)}>
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </div>
      </nav>

      {/* 3. Mobile Sidebar Drawer */}
      <aside className={cn(
        "fixed top-0 right-0 z-[110] h-full w-[300px] bg-white shadow-2xl transition-transform duration-500 lg:hidden",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="p-8 flex flex-col h-full">
          <div className="flex justify-between items-center mb-10">
            <img src={logo} alt="logo" className="h-10 w-10" />
            <button onClick={() => setIsOpen(false)} className="bg-gray-100 p-2 rounded-full shadow-sm active:scale-95 transition-transform"><X className="h-6 w-6 text-title" /></button>
          </div>
          <div className="flex flex-col space-y-6">
            {navLinks.map(link => (
              <div key={link.name}>
                <Link to={link.href} onClick={() => setIsOpen(false)} className="text-xl font-bold text-title hover:text-brand transition-colors">
                  {link.name}
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-auto pt-10 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <div className="bg-brand/10 p-3 rounded-full"><Phone className="h-5 w-5 text-brand" /></div>
              <div>
                <p className="text-xs text-desc font-bold">Call Us</p>
                <p className="font-bold text-title">555 123 000</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </header>
  );
};

export default Navbar2;