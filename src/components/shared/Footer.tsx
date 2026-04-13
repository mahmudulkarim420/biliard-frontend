// ─── External Libraries ──────────────────────────────────────────────────────
import { Link } from "react-router-dom";
import { Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

// ─── Local Assets ─────────────────────────────────────────────────────────────
import logo from "@/assets/logo.png";

// ─── Static Data ──────────────────────────────────────────────────────────────
const usefulLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/team" },
  { name: "Career", href: "/career" },
  { name: "Community", href: "/community" },
];

// ─── Component ────────────────────────────────────────────────────────────────
// Site-wide footer. Organized into a 4-column grid: brand/tagline, contact
// details, quick links, and a newsletter form with social icons.
// A radial-gradient dot pattern on the right half adds a subtle dark texture.
const Footer = () => {
  return (
    <footer className="relative bg-neutral-950 pt-24 overflow-hidden">

      {/* Decorative dot grid — fades with a radial mask toward center */}
      <div
        className="absolute right-0 top-0 h-full w-1/2 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(white 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse at center, black, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black, transparent 80%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-300 px-6 sm:px-12 lg:px-24 lg:max-w-300 box-content">

        {/* ── Main Footer Grid ── */}
        <div className="grid grid-cols-1 gap-12 pb-20 md:grid-cols-2 lg:grid-cols-4">

          {/* Column 1: Brand */}
          <div className="flex flex-col space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="logo" className="h-10 w-10" />
              <span className="text-2xl font-bold tracking-widest text-white">
                BILIARD
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-500 pr-4">
              Providing top-notch digital solutions to help your business grow in the modern world.
            </p>
          </div>

          {/* Column 2: Contact details */}
          <div className="space-y-7">
            <h3 className="text-lg font-bold text-white relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-brand" />
            </h3>
            <div className="space-y-4 pt-2">
              <p className="text-sm leading-relaxed text-gray-400">
                5919 Trussville Crossings
                <br />
                Pkwy, Birmingham
              </p>
              <p className="text-sm font-bold text-white hover:text-brand cursor-pointer transition-colors">
                Hello@biliard.com
              </p>
              <p className="text-lg font-bold text-brand">
                +2 456 (343) 24 45
              </p>
            </div>
          </div>

          {/* Column 3: Quick links */}
          <div className="space-y-7">
            <h3 className="text-lg font-bold text-white relative inline-block">
              Useful Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-brand" />
            </h3>
            <ul className="space-y-4 pt-2">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 transition-all hover:text-brand hover:pl-2"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter + social icons */}
          <div className="space-y-7">
            <h3 className="text-lg font-bold text-white relative inline-block">
              Newsletter
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-brand" />
            </h3>
            <div className="space-y-6 pt-2">

              {/* Email subscription form */}
              <form className="flex w-full items-center" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your E-Mail"
                  className="w-full rounded-l-md border border-white/5 bg-white/5 px-4 py-3 text-sm text-gray-300 placeholder:text-gray-600 focus:border-brand/50 focus:outline-none transition-all"
                />
                <button
                  type="submit"
                  className="flex h-12 w-14 shrink-0 items-center justify-center rounded-r-md bg-brand transition-all hover:bg-brand/90 hover:shadow-lg hover:shadow-brand/20"
                >
                  <Send className="h-4 w-4 text-white" />
                </button>
              </form>

              {/* Social media icon row */}
              <div className="flex space-x-3">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-all duration-300 hover:bg-brand hover:text-white hover:-translate-y-1"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* ── Copyright Bar ── */}
        <div className="border-t border-white/5 py-8 text-center">
          <p className="text-[13px] text-gray-500 tracking-wide">
            © {new Date().getFullYear()} copyright by Biliard WordPress Theme by{" "}
            <span className="font-bold text-brand hover:underline cursor-pointer">Freaxy</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;