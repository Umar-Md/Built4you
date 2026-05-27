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

          <h2 className="heading-xl text-[70px] md:text-[120px] mb-10">
            BUILDING DREAMS
            <br />
            ONE HOME
            <br />
            AT A TIME
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