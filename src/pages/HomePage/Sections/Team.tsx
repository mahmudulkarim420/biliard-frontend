import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Hedge",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Mark Jack",
    role: "Brand Manager",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "David Miller",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Andres Kima",
    role: "Design Lead",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=800",
  },
];

const Team = () => {
  return (
    <section className="w-full bg-white px-6 py-24 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Header Section */}
        <div className="mb-16 text-center lg:mb-20">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#ff3b30]">
            OUR TEAM
          </p>
          <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-[56px]">
            Dedicated team
            <br />
            members
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`group relative flex flex-col ${index === 0 || index === 3 ? "lg:mt-16" : ""
                }`}
            >
              {/* Image Container */}
              <div className="relative mb-6 aspect-[3/4] w-full overflow-hidden rounded-[16px] bg-gray-100 shadow-sm transition-shadow duration-300 group-hover:shadow-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover grayscale transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:grayscale-0"
                />

                {/* Vertical Social Pill Overlay */}
                <div className="absolute bottom-6 left-6 flex flex-col items-center gap-4 rounded-full bg-[#ff3b30] px-3 py-5 opacity-0 shadow-lg transition-all duration-500 ease-in-out group-hover:-translate-y-2 group-hover:opacity-100">
                  <a href="#">
                    <Linkedin className="h-4 w-4 fill-white text-white transition-transform hover:scale-125" />
                  </a>
                  <a href="#">
                    <Twitter className="h-4 w-4 fill-white text-white transition-transform hover:scale-125" />
                  </a>
                  <a href="#">
                    <Instagram className="h-4 w-4 text-white transition-transform hover:scale-125" />
                  </a>
                  <a href="#">
                    <Facebook className="h-4 w-4 fill-white text-white transition-transform hover:scale-125" />
                  </a>
                </div>
              </div>

              {/* Info Container */}
              <div className="flex items-center gap-4 px-2">
                {/* Animated Red Decorator Line -> Square */}
                <div className="h-[32px] w-[3px] shrink-0 bg-[#ff3b30] transition-all duration-500 ease-out group-hover:w-[32px]"></div>

                {/* Name & Role */}
                <div className="flex flex-col justify-center">
                  <h4 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-[#ff3b30]">
                    {member.name}
                  </h4>
                  <p className="text-[12px] font-semibold text-gray-500">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
