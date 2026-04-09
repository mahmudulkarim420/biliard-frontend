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
    <section className="w-full bg-white px-6 py-24 sm:px-12 lg:px-24 overflow-hidden">
      <div className="mx-auto max-w-[1200px]">
        {/* Header Section */}
        <div className="mb-16 text-center lg:mb-24">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#ff3b30]">
            OUR TEAM
          </p>
          <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-[56px] tracking-tight">
            Dedicated team
            <br />
            members
          </h2>
        </div>

        {/* Team Grid with Staggered Positioning */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`group relative flex flex-col transition-all duration-500 ${
                /* ১ম এবং ৩য় কার্ডটি উপরে থাকবে, ২য় এবং ৪র্থ কার্ডটি নিচে নামবে */
                index % 2 === 1 ? "lg:mt-16" : "lg:-mt-4"
              }`}
            >
              {/* Image Container */}
              <div className="relative mb-8 aspect-[3/4] w-full overflow-hidden rounded-[20px] bg-gray-100 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover grayscale transition-all duration-1000 ease-in-out group-hover:scale-110 group-hover:grayscale-0"
                />

                {/* Vertical Social Pill Overlay */}
                <div className="absolute bottom-8 left-6 flex flex-col items-center gap-5 rounded-full bg-[#ff3b30] px-3.5 py-6 opacity-0 shadow-xl translate-y-8 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                  <a href="#" className="transition-transform hover:scale-125">
                    <Linkedin className="h-4 w-4 fill-white text-white" />
                  </a>
                  <a href="#" className="transition-transform hover:scale-125">
                    <Twitter className="h-4 w-4 fill-white text-white" />
                  </a>
                  <a href="#" className="transition-transform hover:scale-125">
                    <Instagram className="h-4 w-4 text-white" />
                  </a>
                  <a href="#" className="transition-transform hover:scale-125">
                    <Facebook className="h-4 w-4 fill-white text-white" />
                  </a>
                </div>
              </div>

              {/* Info Container */}
              <div className="flex items-center gap-4 px-1">
                {/* Animated Red Decorator Line -> Transforms on Hover */}
                <div className="h-[35px] w-[2px] shrink-0 bg-[#ff3b30] transition-all duration-500 ease-in-out group-hover:h-[45px] group-hover:w-[4px]"></div>

                {/* Name & Role */}
                <div className="flex flex-col justify-center">
                  <h4 className="text-[19px] font-extrabold text-gray-900 transition-colors duration-300 group-hover:text-[#ff3b30]">
                    {member.name}
                  </h4>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
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