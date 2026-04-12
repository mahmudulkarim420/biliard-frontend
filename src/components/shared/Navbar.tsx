import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Menu, X, ChevronDown, ShoppingCart, Search, Phone, 
  ArrowRight, LayoutGrid, Info, Settings 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

// --- Static Data ---
const navLinks = [
  {
    name: "Home",
    href: "/",
    hasDropdown: true,
    subLinks: [
      { name: "Home Style 1", href: "/", icon: LayoutGrid },
      { name: "Home Style 2", href: "/home-2", icon: LayoutGrid },
    ],
  },
  {
    name: "Pages",
    href: "/pages",
    hasDropdown: true,
    subLinks: [
      { name: "About Us", href: "/about", icon: Info },
      { name: "Services", href: "/services", icon: Settings },
      { name: "Services Single", href: "/service-details", icon: Settings },
      { name: "Our Portfolio", href: "/portfolio", icon: LayoutGrid },
    ],
  },
  { name: "Career", href: "/career", hasDropdown: false },
  { name: "Blog", href: "/blog", hasDropdown: false },
  { name: "Contact", href: "/contact", hasDropdown: false },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const location = useLocation();

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: 15, 
      scale: 0.95,
      filter: "blur(4px)",
      transition: { duration: 0.2, ease: "easeInOut" }
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      filter: "blur(0px)",
      transition: { 
        duration: 0.3, 
        ease: "easeOut",
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: 10,
      scale: 0.95,
      filter: "blur(4px)",
      transition: { duration: 0.2, ease: "easeInOut" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out",
          scrolled ? "py-0" : "py-6"
        )}
      >
        <div
          className={cn(
            "mx-auto transition-all duration-500 ease-in-out",
            scrolled
              ? "w-full rounded-none border-b border-white/10 bg-black/90 py-4 shadow-2xl backdrop-blur-xl"
              : "w-[95%] lg:w-[calc(100%-260px)] rounded-full border border-white/20 bg-white/10 py-4 backdrop-blur-md"
          )}
        >
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2">
                <img src={logo} alt="logo" className="h-10 w-10" />
                <span className="text-2xl font-bold tracking-widest text-white uppercase">
                  BILIARD
                </span>
              </Link>

              {/* Desktop Nav */}
              <div className="hidden lg:flex items-center space-x-8">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <div 
                      key={link.name} 
                      className="relative group/nav-item py-2"
                      onMouseEnter={() => setActiveDropdown(link.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <Link
                        to={link.href}
                        className={cn(
                          "flex items-center gap-1 text-[16px] font-semibold tracking-wide transition-colors hover:text-white",
                          isActive ? "text-white" : "text-gray-300"
                        )}
                      >
                        {link.name}
                        {link.hasDropdown && (
                          <ChevronDown className={cn(
                            "h-3.5 w-3.5 opacity-70 transition-transform",
                            activeDropdown === link.name && "rotate-180"
                          )} />
                        )}
                      </Link>

                      <AnimatePresence>
                        {link.hasDropdown && activeDropdown === link.name && (
                          <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={dropdownVariants}
                            className="absolute top-full left-0 pt-4 w-64 z-[60]"
                          >
                            {/* Arrow Indicator */}
                            <div className="absolute top-2 left-6 w-3 h-3 rotate-45 border-t border-l bg-[#0c0c0e]/95 border-white/10" />

                            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0c0c0e]/95 p-2 backdrop-blur-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5),0_0_20px_rgba(0,0,0,0.1)]">
                              {link.subLinks?.map((sub) => (
                                <motion.div key={sub.name} variants={itemVariants}>
                                  <Link
                                    to={sub.href}
                                    className="group/item flex items-center justify-between px-4 py-3 rounded-lg text-[14px] font-bold text-gray-300 transition-all duration-300 hover:bg-brand/10 hover:text-brand"
                                  >
                                    <div className="flex items-center gap-3">
                                      {sub.icon && <sub.icon className="h-4 w-4 opacity-70 group-hover/item:text-brand transition-colors" />}
                                      <span>{sub.name}</span>
                                    </div>
                                    <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-brand" />
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Actions */}
              <div className="hidden lg:flex items-center space-x-6">
                <div className="flex items-center space-x-4">
                  <button className="text-gray-300 hover:text-white">
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                  <button className="text-gray-300 hover:text-white">
                    <Search className="h-5 w-5" />
                  </button>
                </div>
                <div className="h-6 w-px bg-white/20" />
                <div className="flex items-center gap-3">
                  <div>
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M30.0833 12.6667H28.5V7.91666C28.5 6.65688 27.9995 5.4487 27.1087 4.5579C26.2179 3.6671 25.0097 3.16666 23.75 3.16666H7.91663C6.65685 3.16666 5.44867 3.6671 4.55787 4.5579C3.66707 5.4487 3.16663 6.65688 3.16663 7.91666V26.9167C3.16819 27.2292 3.26224 27.5344 3.43693 27.7936C3.61163 28.0528 3.85915 28.2545 4.14829 28.3733C4.3362 28.462 4.54226 28.5053 4.74996 28.5C4.95834 28.5012 5.1649 28.4613 5.35781 28.3825C5.55072 28.3037 5.72618 28.1876 5.87413 28.0408L10.3233 23.5758H12.6666V25.8558C12.6666 27.1156 13.1671 28.3238 14.0579 29.2146C14.9487 30.1054 16.1568 30.6058 17.4166 30.6058H28.3733L32.1258 34.3742C32.2737 34.5209 32.4492 34.637 32.6421 34.7158C32.835 34.7946 33.0416 34.8345 33.25 34.8333C33.4577 34.8387 33.6637 34.7953 33.8516 34.7067C34.1408 34.5879 34.3883 34.3862 34.563 34.1269C34.7377 33.8677 34.8317 33.5626 34.8333 33.25V17.4167C34.8333 16.1569 34.3328 14.9487 33.4421 14.0579C32.5513 13.1671 31.3431 12.6667 30.0833 12.6667ZM12.6666 17.4167V20.4092H9.67413C9.46575 20.408 9.25918 20.4479 9.06627 20.5267C8.87336 20.6055 8.69791 20.7216 8.54996 20.8683L6.33329 23.1008V7.91666C6.33329 7.49673 6.50011 7.094 6.79704 6.79707C7.09397 6.50014 7.4967 6.33332 7.91663 6.33332H23.75C24.1699 6.33332 24.5726 6.50014 24.8695 6.79707C25.1665 7.094 25.3333 7.49673 25.3333 7.91666V12.6667H17.4166C16.1568 12.6667 14.9487 13.1671 14.0579 14.0579C13.1671 14.9487 12.6666 16.1569 12.6666 17.4167ZM31.6666 29.4342L30.0833 27.8508C29.9367 27.7012 29.7618 27.5822 29.5688 27.5007C29.3758 27.4191 29.1686 27.3767 28.9591 27.3758H17.4166C16.9967 27.3758 16.594 27.209 16.297 26.9121C16.0001 26.6151 15.8333 26.2124 15.8333 25.7925V17.4167C15.8333 16.9967 16.0001 16.594 16.297 16.2971C16.594 16.0001 16.9967 15.8333 17.4166 15.8333H30.0833C30.5032 15.8333 30.9059 16.0001 31.2029 16.2971C31.4998 16.594 31.6666 16.9967 31.6666 17.4167V29.4342Z" className="fill-brand" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 uppercase font-medium">Call Anytime</span>
                    <span className="text-sm font-bold text-white">555 123 000</span>
                  </div>
                </div>
              </div>

              {/* Mobile Toggle */}
              <button
                className="lg:hidden h-10 w-10 flex items-center justify-center rounded-full border border-white/20 text-white"
                onClick={() => setIsOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-500 lg:hidden",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={() => setIsOpen(false)}
      />

      <aside
        className={cn(
          "fixed top-0 right-0 z-[70] h-full w-[300px] bg-white p-8 transition-transform duration-500 ease-in-out lg:hidden shadow-2xl",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          className="absolute top-6 right-6 text-gray-500 bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          <X className="h-6 w-6" />
        </button>

        <div className="mb-12 mt-4">
          <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center space-x-2">
            <img src={logo} alt="logo" className="h-8 w-8" />
            <span className="text-xl font-bold tracking-widest text-primaryColor">BILIARD</span>
          </Link>
        </div>

        <div className="flex flex-col space-y-2">
          {navLinks.map((link) => (
            <div key={link.name} className="border-b border-gray-50 last:border-none pb-2">
              <div className="flex items-center justify-between">
                <Link
                  to={link.href}
                  onClick={() => !link.hasDropdown && setIsOpen(false)}
                  className={cn(
                    "text-lg font-bold py-2 transition-colors",
                    location.pathname === link.href ? "text-brand" : "text-title hover:text-brand"
                  )}
                >
                  {link.name}
                </Link>
                {link.hasDropdown && (
                  <button
                    onClick={() => setMobileDropdown(mobileDropdown === link.name ? null : link.name)}
                    className="p-2 bg-gray-50 rounded-lg"
                  >
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 transition-transform duration-300",
                        mobileDropdown === link.name && "rotate-180"
                      )}
                    />
                  </button>
                )}
              </div>

              <AnimatePresence>
                {link.hasDropdown && mobileDropdown === link.name && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden bg-gray-50/50 rounded-xl mt-1"
                  >
                    {link.subLinks?.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 text-[14px] font-bold text-title hover:text-brand transition-colors"
                      >
                        {sub.icon && <sub.icon className="h-4 w-4 text-brand/70" />}
                        {sub.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="absolute bottom-12 left-8 right-8 border-t border-gray-100 pt-8">
          <div className="flex items-center gap-3">
            <div className="bg-brand/10 p-3 rounded-xl">
              <Phone className="h-5 w-5 text-brand" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 uppercase font-medium">Contact Us</span>
              <span className="font-bold text-primaryColor">555 123 000</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;