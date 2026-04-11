// ─── External Libraries ──────────────────────────────────────────────────────
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

// ─── Local Assets ─────────────────────────────────────────────────────────────
import team1 from "@/assets/img (8).png";
import team2 from "@/assets/img (9).png";
import team3 from "@/assets/img (10).png";
import team4 from "@/assets/img (11).png";

// ─── Types ────────────────────────────────────────────────────────────────────
interface TeamMember {
  name: string;
  role: string;
  image: string;
}

// ─── Static Data ──────────────────────────────────────────────────────────────
const teamMembers: TeamMember[] = [
  { name: "Alex Hedge", role: "UI/UX Designer", image: team1 },
  { name: "Mark Jack", role: "Brand Manager", image: team2 },
  { name: "David Miller", role: "UI/UX Designer", image: team3 },
  { name: "Andres Kima", role: "Design Lead", image: team4 },
];

// ─── Component ────────────────────────────────────────────────────────────────
// Four-column team card grid. Cards at even indexes sit slightly higher to
// create a staggered editorial layout. On hover, each card lifts, the image
// de-grayscales, and a vertical social pill slides up from the bottom-left corner.
const Team = () => {
  return (
    <section className="w-full bg-white px-6 pt-[100px] pb-[100px] sm:px-12 lg:px-24 overflow-hidden">
      <div className="mx-auto max-w-[1200px]">

        {/* ── Section Header ── */}
        <div className="mb-16 text-center lg:mb-24">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-brand">
            OUR TEAM
          </p>
          <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-[56px] tracking-tight">
            Dedicated team
            <br />
            members
          </h2>
        </div>

        {/* ── Team Cards Grid ── */}
        {/* Odd-indexed cards shift down via lg:mt-16 to create a staggered layout. */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`group relative flex flex-col transition-all duration-500 ${
                index % 2 === 1 ? "lg:mt-16" : "lg:-mt-4"
              }`}
            >
              {/* Image container — lifts and gains shadow on hover */}
              <div className="relative mb-8 aspect-[3/4] w-full overflow-hidden rounded-[20px] bg-gray-100 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover grayscale transition-all duration-1000 ease-in-out group-hover:scale-110 group-hover:grayscale-0"
                />

                {/* Vertical social pill — slides up from off-screen bottom on hover */}
                <div className="absolute bottom-8 left-6 flex flex-col items-center gap-5 rounded-full bg-brand px-3.5 py-6 opacity-0 shadow-xl translate-y-8 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
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

              {/* Name and role — left-border accent grows taller and wider on hover */}
              <div className="flex items-center gap-4 px-1">
                <div className="h-[35px] w-[2px] shrink-0 bg-brand transition-all duration-500 ease-in-out group-hover:h-[45px] group-hover:w-[4px]" />
                <div className="flex flex-col justify-center">
                  <h4 className="text-[19px] font-extrabold text-gray-900 transition-colors duration-300 group-hover:text-brand">
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