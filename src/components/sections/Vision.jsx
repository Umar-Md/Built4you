"use client";

export default function Vision() {
  return (
    <section
      id="vision"
      className="relative py-32 bg-[#2B2B2D] overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container-custom relative z-10">
        <div className="max-w-[1100px]">
          <p className="section-label mb-6">
            OUR VISION
          </p>

          <h2 className="heading-xl mb-10 text-[28px] min-[375px]:text-[32px] sm:text-5xl md:text-7xl lg:text-[120px] !font-['Barlow'] lg:!font-['Barlow_Condensed'] !leading-[1.3] sm:!leading-[1.18] lg:!leading-[1.05] tracking-[1px] sm:tracking-normal lg:tracking-[-3px]">
            <span className="block whitespace-nowrap">BUILDING DREAMS</span>
            <span className="block">ONE HOME</span>
            <span className="block">AT A TIME</span>
          </h2>

          <div className="w-[120px] h-[4px] bg-[#DD7E1F] mb-10" />

          <p className="text-[22px] leading-[2] text-[#A0A0A3] max-w-[900px]">
            Built4You focuses on premium home construction with transparent
            pricing, modern architecture, industrial-grade execution standards,
            and uncompromising quality at every stage of the build process.
          </p>
        </div>
      </div>
    </section>
  );
}
