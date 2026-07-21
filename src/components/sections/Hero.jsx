"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[72vh] bg-[#2B2B2D] overflow-hidden pt-[68px]"
    >
      {/* GRID */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* LEFT ORANGE LINE */}
      <div className="absolute left-[70px] top-0 bottom-0 w-[1px] bg-[#DD7E1F]/20 hidden xl:block" />

      {/* GLOW */}
      <div className="absolute top-[-200px] right-[-150px] w-[700px] h-[700px] bg-[#DD7E1F]/10 blur-[160px]" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 xl:gap-14 items-center min-h-[calc(72vh-68px)] py-8 lg:py-0">
          {/* LEFT CONTENT */}
          <div className="pt-10 lg:pt-0">
            {/* LABEL */}
            <div className="flex items-center gap-5 mt-6">
              <div className="w-[70px] h-[2px] bg-[#DD7E1F]" />

              <p className="section-label !mb-0 ">HOME CONSTRUCTION COMPANY</p>
            </div>

            {/* HEADING */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Premium Homes
              </span>
              <br />
              <span className="text-white">Built 4 You</span>
              <span className="text-[#DD7E1F]"> in Hyderabad</span>
            </h1>

            {/* DESCRIPTION */}
            <p className=" mt-4 mb-4 text-center text-sky-400 text-sm sm:text-lg font-semibold tracking-wide">
              ✦ Planned With Clarity &nbsp;&nbsp; ✦ Built With Care &nbsp;&nbsp;
              ✦ Delivered With Responsibility
            </p>
            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5 mb-10">
              <Link
                href="/process"
                className="orange-btn px-10 py-5 rounded-[2px] text-[16px] shadow-[0_10px_40px_rgba(221,126,31,0.25)]"
              >
                See My Home
              </Link>

              <button
                onClick={() => {
                  const packagesSection = document.getElementById("packages");
                  if (packagesSection) {
                    packagesSection.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.location.assign("/packages");
                  }
                }}
                className="border border-[#555] hover:border-[#DD7E1F] hover:text-[#DD7E1F] transition-all duration-300 px-10 py-5 uppercase tracking-[2px] font-bold"
              >
                VIEW PACKAGES
              </button>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 border border-[#3A3A3C]">
              {[
                ["250+", "Projects Completed"],
                ["15+", "Years Experience"],
                ["4.9★", "Client Rating"],
                ["100%", "Transparency"],
              ].map(([number, label], index) => (
                <div
                  key={label}
                  className={`p-7 md:p-9 ${
                    index !== 3 ? "border-r border-[#3A3A3C]" : ""
                  }`}
                >
                  <h3 className="text-[38px] md:text-[48px] font-black text-[#DD7E1F] leading-none mb-3">
                    {number}
                  </h3>

                  <p className="uppercase tracking-[2px] text-[11px] md:text-[12px] text-[#8A8A8D] leading-[1.6]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            {/* OUTER FRAME */}
            <div className="absolute top-[-25px] left-[-25px] right-[25px] bottom-[25px] border border-[#DD7E1F] z-0" />

            {/* IMAGE */}
            <div className="relative z-10 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1974&auto=format&fit=crop"
                alt="Luxury Home"
                className="w-full h-[440px] md:h-[520px] object-cover"
              />
            </div>

            {/* FLOATING INFO CARD */}
            <div className="absolute bottom-8 left-8 z-20 rounded-lg bg-[#1E1E20] border border-[#444] px-8 py-7 max-w-[300px]">
              <p className="section-label mb-4">STARTING FROM</p>

              <h3 className="text-[62px] font-black leading-none text-[#DD7E1F] mb-3">
                ₹1850
              </h3>

              <p className="uppercase tracking-[2px] text-[12px] text-[#8A8A8D]">
                Per Sqft Construction
              </p>
            </div>

            {/* TOP SMALL CARD */}
            <div className="rounded-lg absolute top-8 right-[-30px] z-20 bg-[#DD7E1F] px-8 py-6 shadow-[0_10px_40px_rgba(221,126,31,0.3)]">
              <p className="uppercase tracking-[2px] text-[11px] text-white/70 mb-2">
                Trusted By
              </p>

              <h4 className="text-[34px] font-black leading-none text-white">
                250+
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
