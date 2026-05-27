"use client";

const projects = [
  {
    title: "The Urban Villa",
    location: "Hyderabad",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Luxury Duplex",
    location: "Bangalore",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Modern Residency",
    location: "Chennai",
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1974&auto=format&fit=crop",
  },
];

export default function BuildLab() {
  return (
    <section
      id="buildlab"
      className="py-32 bg-[#2B2B2D]"
    >
      <div className="container-custom">
        <div className="flex items-end justify-between mb-20 flex-wrap gap-8">
          <div>
            <p className="uppercase tracking-[4px] text-[#DD7E1F] mb-4 text-sm">
              Our Projects
            </p>

            <h2 className="text-5xl md:text-6xl font-black">
              BuildLab Showcase
            </h2>
          </div>

          <button className="px-7 py-4 rounded-full border border-white/20 hover:border-[#DD7E1F] hover:bg-[#DD7E1F]/10 transition-all duration-300">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[32px] h-[520px]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />

              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-[#DD7E1F] uppercase tracking-wide mb-3">
                  {project.location}
                </p>

                <h3 className="text-3xl font-black">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
