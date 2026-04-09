import { ArrowDownRight, ChevronsLeft, Zap, MonitorSmartphone, Laptop, Monitor } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Brand Strategy &\nArt Direction",
    icon: <ChevronsLeft className="w-8 h-8" strokeWidth={1.5} />,
    isActive: false,
  },
  {
    number: "02",
    title: "UX/UI\nDesign",
    icon: (
      <div className="relative w-8 h-8">
        <Monitor className="w-8 h-8" strokeWidth={1.5} />
        <Zap className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-[40%] -translate-y-[40%] fill-transparent" strokeWidth={1.5} />
      </div>
    ),
    isActive: false,
  },
  {
    number: "03",
    title: "Brand Strategy &\nArt Direction",
    icon: <MonitorSmartphone className="w-8 h-8" strokeWidth={1.5} />,
    isActive: false, // Eta default vabe active thakbe
  },
  {
    number: "04",
    title: "Website/App\nDesign",
    icon: <Laptop className="w-8 h-8" strokeWidth={1.5} />,
    isActive: false,
  },
];

const Innovations = () => {
  return (
    <section className="relative z-10 w-full overflow-x-hidden bg-[#09090b] px-6 py-24 sm:px-12 lg:px-24">
      {/* Topographic Contour Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z' fill='%23ffffff' fill-opacity='0.05' fill-rule='nonzero'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px]">

        {/* Header Section */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-[500px] text-4xl font-semibold leading-[1.1] text-white md:text-5xl lg:text-[52px]">
            Creative problem solving innovations
          </h2>
          <a
            href="#"
            className="group flex items-center pb-2 text-sm font-medium tracking-wide text-[#ff3b30] transition-colors hover:text-red-400"
          >
            Explore More
            <ArrowDownRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative flex flex-col overflow-hidden rounded-[2rem] p-8 pb-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50 bg-gradient-to-tl ${service.isActive
                ? "from-[#222430] to-[#15161c] shadow-2xl shadow-black/50"
                : "from-[#1a1b24] to-[#0c0d11] hover:from-[#222430] hover:to-[#15161c]"
                }`}
            >
              {/* Wavy Glass Overlay - Ekhon shob card e hover korle 30% opacity hobe */}
              <div
                className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${service.isActive ? "opacity-30" : "opacity-0 group-hover:opacity-30"
                  }`}
                style={{
                  backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 60%), repeating-radial-gradient(circle at 0 0, transparent 0, #13141a 4px), repeating-linear-gradient(#2a2b36, #2a2b36)`,
                  backgroundBlendMode: 'overlay',
                }}
              />

              {/* Number (Outline Text) */}
              <div
                className="mb-20 text-[120px] font-medium leading-none tracking-tight opacity-40 transition-opacity duration-300 group-hover:opacity-80"
                style={{
                  WebkitTextStroke: "1px rgba(255, 255, 255, 0.26)",
                  color: "transparent",
                }}
              >
                {service.number}
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 mt-auto">
                <div className="mb-6 origin-left text-[#ff3b30] transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,59,48,0.5)]">
                  {service.icon}
                </div>
                <h3 className="whitespace-pre-line text-[17px] font-semibold leading-snug text-gray-100">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Innovations;