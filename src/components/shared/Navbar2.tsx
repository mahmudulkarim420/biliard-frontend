import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    Menu, X, ChevronDown, ShoppingCart, Search,
    Mail, MapPin, Twitter, Facebook, Instagram, Linkedin, Phone,
    ArrowRight,
    LayoutGrid
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import SearchModal from "./SearchModal";

// --- Static Data ---
// Navigation link definitions, including optional dropdown sub-links.
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
        hasDropdown: true,
        subLinks: [
            { name: "About Us", href: "/about" },
            { name: "Career", href: "/career" },
            { name: "Our Portfolio", href: "/portfolio" },
            { name: "Our Portfolio Details", href: "/portfolio/1" },
        ],
    },

    {
        name: "Services",
        hasDropdown: true,
        subLinks: [
            { name: "Services", href: "/services" },
            { name: "Services Details", href: "/services/01" },
        ],
    },
    {
        name: "Blog",
        hasDropdown: true,
        subLinks: [
            { name: "Blog", href: "/blog" },
            { name: "Blog Details", href: "/blog/1" },
        ],
    },
    { name: "Contact", href: "/contact", hasDropdown: false },
];

// --- Navbar2 ---
// Full-featured navigation with a collapsible top info bar, sticky scroll
// state, desktop dropdown menus, and a mobile slide-out drawer.
const Navbar2 = () => {
    // --- State ---
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const location = useLocation();

    // Animation Variants
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

    // --- Effects ---
    // Tracks scroll position to toggle the sticky condensed navbar style.
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">

            {/* ── Top Info Bar ── */}
            {/* Slides out of view when the page is scrolled past 50px. */}
            <div
                className={cn(
                    "hidden lg:block bg-[#09090b] text-white py-3 transition-all duration-500 ease-in-out",
                    scrolled ? "-translate-y-full opacity-0 h-0" : "translate-y-0 opacity-100 h-auto"
                )}
            >
                <div className="w-full max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-5 md:px-8 lg:px-10 flex justify-center lg:justify-between items-center">

                    {/* Contact details */}
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

                    {/* Social icons */}
                    <div className="flex items-center gap-5">
                        <Twitter className="h-3.5 w-3.5 hover:text-brand cursor-pointer transition-colors" />
                        <Facebook className="h-3.5 w-3.5 hover:text-brand cursor-pointer transition-colors" />
                        <Instagram className="h-3.5 w-3.5 hover:text-brand cursor-pointer transition-colors" />
                        <Linkedin className="h-3.5 w-3.5 hover:text-brand cursor-pointer transition-colors" />
                    </div>
                </div>
            </div>

            <nav
                className={cn(
                    "w-full transition-all duration-500 border-b",
                    scrolled
                        ? "bg-[#09090b]/95 backdrop-blur-md py-4 md:py-4 lg:py-5 shadow-xl border-white/10 lg:-mt-6"
                        : "bg-white py-4 md:py-4 lg:py-5 border-transparent"
                )}
            >
                <div className="w-full max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-5 md:px-8 lg:px-10 flex items-center justify-between">

                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 shrink-0">
                        <img src={logo} alt="logo" className="h-10 w-10" />
                        <span
                            className={cn(
                                "text-2xl font-black tracking-widest uppercase transition-colors duration-300",
                                scrolled ? "text-white" : "text-title"
                            )}
                        >
                            BILIARD
                        </span>
                    </Link>

                    {/* Desktop nav links with hover-triggered dropdowns */}
                    <div className="hidden lg:flex items-center space-x-4 lg:space-x-6 xl:space-x-9">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative group"
                                onMouseEnter={() => setActiveDropdown(link.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    to={link.href || "#"}
                                    onClick={(e) => !link.href && e.preventDefault()}
                                    className={cn(
                                        "flex items-center gap-1 text-[15px] xl:text-[16px] font-bold transition-all duration-300",
                                        location.pathname === link.href
                                            ? "text-brand"
                                            : scrolled ? "text-gray-300 hover:text-brand" : "text-title hover:text-brand"
                                    )}
                                >
                                    {link.name}
                                    {link.hasDropdown && (
                                        <ChevronDown
                                            className={cn(
                                                "h-3 w-3 transition-transform",
                                                activeDropdown === link.name && "rotate-180"
                                            )}
                                        />
                                    )}
                                </Link>

                                {/* Dropdown panel */}
                                <AnimatePresence>
                                    {link.hasDropdown && activeDropdown === link.name && (
                                        <motion.div
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            variants={dropdownVariants}
                                            className="absolute top-full left-0 pt-4 w-64 z-60"
                                        >
                                            {/* Arrow Indicator */}
                                            <div className={cn(
                                                "absolute top-2 left-6 w-3 h-3 rotate-45 border-t border-l",
                                                scrolled
                                                    ? "bg-[#09090b]/90 border-white/10"
                                                    : "bg-white border-black/5 shadow-[-1px_-1px_1px_rgba(0,0,0,0.02)]"
                                            )} />

                                            <div className={cn(
                                                "relative overflow-hidden rounded-xl border p-2",
                                                "backdrop-blur-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5),0_0_20px_rgba(0,0,0,0.1)]",
                                                scrolled
                                                    ? "bg-[#0c0c0e]/95 border-white/10"
                                                    : "bg-[#0c0c0e]/98 border-white/10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8)]"
                                            )}>
                                                {link.subLinks?.map((sub) => (
                                                    <motion.div key={sub.name} variants={itemVariants}>
                                                        <Link
                                                            to={sub.href}
                                                            className={cn(
                                                                "group/item flex items-center justify-between px-4 py-3 rounded-lg text-[14px] font-bold transition-all duration-300",
                                                                "text-gray-300 hover:bg-brand/10 hover:text-brand"
                                                            )}
                                                        >
                                                            <span>{sub.name}</span>
                                                            <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-brand" />
                                                        </Link>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* Right: icon actions + call info + mobile toggle */}
                    <div className="flex items-center gap-6">

                        {/* Icon actions — cart & search */}
                        <div
                            className={cn(
                                "hidden sm:flex items-center gap-3 lg:gap-4 xl:gap-5 border-r pr-4 lg:pr-5 xl:pr-6 transition-colors duration-300",
                                scrolled ? "border-white/20" : "border-gray-200"
                            )}
                        >
                            <ShoppingCart className={cn("h-5 w-5 cursor-pointer hover:text-brand", scrolled ? "text-white" : "text-title")} />
                            <Search
                                onClick={() => setIsSearchOpen(true)}
                                className={cn("h-5 w-5 cursor-pointer hover:text-brand", scrolled ? "text-white" : "text-title")}
                            />
                        </div>

                        {/* Call info block */}
                        <div className="hidden md:flex items-center gap-2 xl:gap-3">
                            <div className="scale-90 xl:scale-100">
                                {/* Chat/message SVG icon */}
                                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.0834 12.6667H28.5001V7.91666C28.5001 6.65688 27.9996 5.4487 27.1088 4.5579C26.218 3.6671 25.0099 3.16666 23.7501 3.16666H7.91675C6.65697 3.16666 5.44879 3.6671 4.55799 4.5579C3.66719 5.4487 3.16675 6.65688 3.16675 7.91666V26.9167C3.16831 27.2292 3.26236 27.5344 3.43706 27.7936C3.61175 28.0528 3.85927 28.2545 4.14841 28.3733C4.33632 28.462 4.54239 28.5053 4.75008 28.5C4.95846 28.5012 5.16502 28.4613 5.35793 28.3825C5.55084 28.3037 5.7263 28.1876 5.87425 28.0408L10.3234 23.5758H12.6667V25.8558C12.6667 27.1156 13.1672 28.3238 14.058 29.2146C14.9488 30.1054 16.157 30.6058 17.4167 30.6058H28.3734L32.1259 34.3742C32.2739 34.5209 32.4493 34.637 32.6422 34.7158C32.835 34.7946 33.0417 34.8345 33.2501 34.8333C33.4578 34.8387 33.6638 34.7953 33.8517 34.7067C34.1409 34.5879 34.3884 34.3862 34.5631 34.1269C34.7378 33.8677 34.8319 33.5626 34.8334 33.25V17.4167C34.8334 16.1569 34.333 14.9487 33.4422 14.0579C32.5514 13.1671 31.3432 12.6667 30.0834 12.6667ZM12.6667 17.4167V20.4092H9.67425C9.46587 20.408 9.25931 20.4479 9.0664 20.5267C8.87349 20.6055 8.69803 20.7216 8.55008 20.8683L6.33341 23.1008V7.91666C6.33341 7.49673 6.50023 7.094 6.79716 6.79707C7.0941 6.50014 7.49682 6.33332 7.91675 6.33332H23.7501C24.17 6.33332 24.5727 6.50014 24.8697 6.79707C25.1666 7.094 25.3334 7.49673 25.3334 7.91666V12.6667H17.4167C16.157 12.6667 14.9488 13.1671 14.058 14.0579C13.1672 14.9487 12.6667 16.1569 12.6667 17.4167ZM31.6667 29.4342L30.0834 27.8508C29.9368 27.7012 29.7619 27.5822 29.5689 27.5007C29.376 27.4191 29.1687 27.3767 28.9592 27.3758H17.4167C16.9968 27.3758 16.5941 27.209 16.2972 26.9121C16.0002 26.6151 15.8334 26.2124 15.8334 25.7925V17.4167C15.8334 16.9967 16.0002 16.594 16.2972 16.2971C16.5941 16.0001 16.9968 15.8333 17.4167 15.8333H30.0834C30.5033 15.8333 30.9061 16.0001 31.203 16.2971C31.4999 16.594 31.6667 16.9967 31.6667 17.4167V29.4342Z" fill="#FF3838" />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className={cn("text-[10px] font-bold uppercase tracking-wider", scrolled ? "text-gray-400" : "text-desc")}>
                                    Call Anytime
                                </span>
                                <span className={cn("text-[14px] xl:text-[16px] font-extrabold leading-none tracking-tight transition-colors duration-300", scrolled ? "text-white" : "text-title")}>
                                    555 123 000
                                </span>
                            </div>
                        </div>

                        {/* Mobile actions & menu toggle */}
                        <div className="flex lg:hidden items-center gap-2">
                            <button
                                className={cn("p-2 transition-colors duration-300", scrolled ? "text-white" : "text-title")}
                                onClick={() => setIsSearchOpen(true)}
                            >
                                <Search className="h-6 w-6" />
                            </button>
                            <button
                                className={cn("p-2 transition-colors duration-300", scrolled ? "text-white" : "text-title")}
                                onClick={() => setIsOpen(true)}
                            >
                                <Menu className="h-7 w-7" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* ── Mobile Sidebar Drawer ── */}
            {/* Slides in from the right on mobile when the hamburger is pressed. */}
            <aside
                className={cn(
                    "fixed top-0 right-0 z-110 h-full w-75 bg-white shadow-2xl transition-transform duration-500 lg:hidden",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="p-8 flex flex-col h-full">

                    {/* Drawer header */}
                    <div className="flex justify-between items-center mb-10">
                        <img src={logo} alt="logo" className="h-10 w-10" />
                        <button
                            onClick={() => setIsOpen(false)}
                            className="bg-gray-100 p-2 rounded-full shadow-sm active:scale-95 transition-transform"
                        >
                            <X className="h-6 w-6 text-title" />
                        </button>
                    </div>

                    {/* Mobile nav links */}
                    <div className="flex flex-col space-y-2">
                        {navLinks.map((link) => (
                            <div key={link.name} className="border-b border-gray-50 last:border-none pb-2">
                                <div className="flex items-center justify-between">
                                    <Link
                                        to={link.href || "#"}
                                        onClick={(e) => {
                                            if (!link.href) e.preventDefault();
                                            if (!link.hasDropdown) setIsOpen(false);
                                        }}
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
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* Bottom contact info */}
                    <div className="mt-auto pt-10 border-t border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="bg-brand/10 p-3 rounded-full">
                                <Phone className="h-5 w-5 text-brand" />
                            </div>
                            <div>
                                <p className="text-xs text-desc font-bold">Call Us</p>
                                <p className="font-bold text-title">01516370422</p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Search Modal */}
            <SearchModal
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
            />
        </header>
    );
};

export default Navbar2;