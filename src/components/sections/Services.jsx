"use client";

const services = [
  {
    number: "01",
    title: "ARCHITECTURAL DESIGN",
    description:
      "Luxury architecture crafted for modern living with premium elevation concepts and efficient space planning.",
  },
  {
    number: "02",
    title: "TURNKEY CONSTRUCTION",
    description:
      "Complete end-to-end construction execution with transparent pricing and industrial-grade quality standards.",
  },
  {
    number: "03",
    title: "INTERIOR SOLUTIONS",
    description:
      "Modern premium interiors designed with elegant materials, smart layouts, and functional aesthetics.",
  },
  {
    number: "04",
    title: "PROJECT MANAGEMENT",
    description:
      "Dedicated site supervision, timeline tracking, quality audits, and client coordination throughout execution.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-32 bg-[#2B2B2D] overflow-hidden border-t border-[#3A3A3C]"
    >
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* ORANGE GLOW */}
      <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] bg-[#DD7E1F]/10 blur-[140px]" />

      <div className="container-custom relative z-10">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-24">
          <div className="max-w-[900px]">
            <p className="section-label mb-5">
              OUR SERVICES
            </p>

            <h2 className="heading-lg text-[60px] md:text-[110px] leading-[0.9] mb-8">
              WHAT
              <br />
              WE BUILD
            </h2>

            <div className="w-[120px] h-[4px] bg-[#DD7E1F]" />
          </div>

          <p className="max-w-[420px] text-[#9A9A9D] text-[18px] leading-[1.9]">
            Premium construction solutions designed with modern architecture,
            industrial precision, and complete project transparency.
          </p>
        </div>

        {/* SERVICES */}
        <div className="border border-[#3A3A3C]">
          {services.map((service, index) => (
            <div
              key={index}
              className="group grid lg:grid-cols-[160px_1fr_120px] items-center border-b border-[#3A3A3C] last:border-b-0 hover:bg-[#252527] transition-all duration-300"
            >
              {/* NUMBER */}
              <div className="h-full flex items-center justify-center border-r border-[#3A3A3C] p-8">
                <span className="text-[40px] md:text-[52px] font-black text-[#DD7E1F] leading-none">
                  {service.number}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-8 md:p-10">
                <h3 className="text-[32px] md:text-[42px] font-black leading-[1] mb-5 tracking-[-1px] group-hover:text-[#DD7E1F] transition-all duration-300">
                  {service.title}
                </h3>

                <p className="text-[#9A9A9D] text-[17px] leading-[1.9] max-w-[900px]">
                  {service.description}
                </p>
              </div>

              {/* ARROW */}
              <div className="hidden lg:flex items-center justify-center border-l border-[#3A3A3C] h-full">
                <div className="w-14 h-14 border border-[#DD7E1F] flex items-center justify-center text-[#DD7E1F] text-2xl group-hover:bg-[#DD7E1F] group-hover:text-white transition-all duration-300">
                  →
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM STATS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {[
            ["250+", "Projects Delivered"],
            ["15+", "Years Experience"],
            ["100%", "Transparent Pricing"],
            ["4.9★", "Client Satisfaction"],
          ].map(([num, label]) => (
            <div
              key={label}
              className="border border-[#3A3A3C] bg-[#252527] p-8"
            >
              <h3 className="text-[48px] font-black text-[#DD7E1F] leading-none mb-4">
                {num}
              </h3>

              <p className="uppercase tracking-[2px] text-[12px] text-[#9A9A9D]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
