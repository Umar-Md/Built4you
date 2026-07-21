"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

/* =========================================================
   ABOUT US
   ========================================================= */

const STATS = [
  { value: 150, suffix: "+", label: "Homes Delivered" },
  { value: 12, suffix: "+", label: "Years Combined Experience" },
  { value: 98, suffix: "%", label: "On-Time Handovers" },
  { value: 0, suffix: "", label: "Hidden Costs, Ever" },
];

function StatCard({ stat, inView, delay }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    let start;
    const duration = 1400;

    const timeout = setTimeout(() => {
      const step = (ts) => {
        if (!start) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(stat.value * eased));
        if (progress < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [inView, stat.value, delay]);

  return (
    <div className="bg-[#232325] p-8 sm:p-10 flex flex-col justify-center min-h-[170px] sm:min-h-[190px]">
      <span className="text-4xl sm:text-5xl font-bold text-white !font-['Barlow_Condensed']">
        {display}
        {stat.suffix}
      </span>
      <span className="mt-3 text-xs sm:text-sm tracking-[0.15em] uppercase text-[#A0A0A3] !font-['Barlow']">
        {stat.label}
      </span>
      <div className="w-8 h-[2px] bg-[#DD7E1F] mt-4" />
    </div>
  );
}

function AboutUs() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 bg-[#232325] overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left: narrative */}
          <div>
            <p className="section-label mb-6">ABOUT US</p>

            <h2
              className="
    heading-xl mb-8 text-[26px] min-[375px]:text-[30px] sm:text-4xl md:text-6xl
    !font-['Barlow_Condensed'] !leading-[1.25] md:!leading-[1.2] tracking-[0.5px] md:tracking-[1px]
    text-orange-500
    uppercase
  "
            >
              Built On Site Visits,
              <br />
              Not Sales Pitches
            </h2>

            <div className="w-[100px] h-[4px] bg-[#DD7E1F] mb-8" />

            <p className="text-[17px] sm:text-[18px] leading-[1.9] text-[#A0A0A3] max-w-[520px]">
              Built4You started with a simple frustration: home construction in
              India runs on verbal promises and vanishing contractors. We
              replaced that with one accountable team, daily site oversight, and
              pricing you see before a single brick is laid.
            </p>

            <p className="mt-6 text-[17px] sm:text-[18px] leading-[1.9] text-[#A0A0A3] max-w-[520px]">
              From architecture to handover, every stage runs through the same
              team, so nothing gets lost in translation between designer,
              contractor, and site engineer.
            </p>

            <Link
              href="/process"
              className="inline-flex items-center gap-3 mt-10 group"
            >
              <span className="text-sm font-semibold tracking-[0.25em] uppercase text-white !font-['Barlow_Condensed'] border-b-2 border-[#DD7E1F] pb-1 transition-colors group-hover:text-[#DD7E1F]">
                Our Process
              </span>
              <ArrowUpRight
                size={18}
                className="text-[#DD7E1F] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          {/* Right: blueprint-grid stat panel, signature element */}
          <div className="grid grid-cols-2 gap-px bg-white/10 rounded-[28px] overflow-hidden border border-white/10">
            {STATS.map((stat, i) => (
              <StatCard
                key={stat.label}
                stat={stat}
                inView={inView}
                delay={i * 120}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   VISION
   ========================================================= */

function Vision() {
  return (
    <section
      id="vision"
      className="relative py-32 bg-[#2B2B2D] overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container-custom relative z-10">
        <div className="max-w-[1100px]">
          <p className="section-label mb-6">OUR VISION</p>

        <h2 className="heading-xl mb-10 text-[20px] min-[375px]:text-[28px] sm:text-4xl
  md:text-6xl lg:text-7xl xl:text-[60px] !font-['Barlow'] lg:!font-['Barlow_Condensed'] !leading-[1.3]
  sm:!leading-[1.15] lg:!leading-[1.05]
  tracking-[1px]
  sm:tracking-normal
  lg:tracking-[-2px]"
>
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

/* =========================================================
   WHY CHOOSE US — 3D coverflow carousel
   ========================================================= */

const CARDS = [
  {
    id: 1,
    num: "01",
    title: "Clear Costs. No Confusion",
    desc: "Know what's built, how it's built, and the cost. Before construction starts.",
  },
  {
    id: 2,
    num: "02",
    title: "Built For Busy Lives",
    desc: "We manage your home construction end to end. Daily site visits.",
  },
  {
    id: 3,
    num: "03",
    title: "Single Point Responsibility",
    desc: "One team. One process. One accountable partner from design to handover.",
  },
  {
    id: 4,
    num: "04",
    title: "Peaceful Construction Experience",
    desc: "No contractor stress or technical confusion. Just steady progress.",
  },
  {
    id: 5,
    num: "05",
    title: "Homes That Last",
    desc: "Built with strong structure, proper planning, and long-term comfort.",
  },
];

const AUTOPLAY_MS = 4200;
const DRAG_THRESHOLD = 60;

function WhyChooseUs() {
  const [active, setActive] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const dragStartX = useRef(0);
  const dragDeltaX = useRef(0);
  const autoplayRef = useRef(null);
  const total = CARDS.length;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const goTo = useCallback(
    (i) => {
      setActive(((i % total) + total) % total);
    },
    [total],
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (isDragging || reducedMotion) return;
    autoplayRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, AUTOPLAY_MS);
    return () => clearInterval(autoplayRef.current);
  }, [isDragging, reducedMotion, total]);

  const getOffset = (i) => {
    let diff = i - active;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  const onPointerDown = (e) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragDeltaX.current = 0;
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    dragDeltaX.current = e.clientX - dragStartX.current;
  };

  const onPointerUp = () => {
    if (!isDragging) return;
    if (dragDeltaX.current > DRAG_THRESHOLD) prev();
    else if (dragDeltaX.current < -DRAG_THRESHOLD) next();
    setIsDragging(false);
    dragDeltaX.current = 0;
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  return (
    <section
      id="why-choose-us"
      className="relative py-32 bg-[#2B2B2D] overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] transition-opacity duration-700"
        style={{ background: "#DD7E1F", opacity: 0.14 }}
      />

      <div className="container-custom relative z-10 flex flex-col items-center gap-16">
        <div className="text-center">
          <p className="section-label mb-6">WHY CHOOSE US</p>
          <h2 className="heading-xl text-[28px] min-[375px]:text-[32px] sm:text-4xl md:text-6xl !font-['Barlow_Condensed'] tracking-[-1px] text-white uppercase">
            Reasons To Build With Us
          </h2>
          <div className="w-[120px] h-[4px] bg-[#DD7E1F] mx-auto mt-8" />
        </div>

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Why choose us"
          tabIndex={0}
          onKeyDown={onKeyDown}
          className="relative w-full max-w-[1100px] h-[380px] sm:h-[420px] select-none outline-none"
          style={{ perspective: "1600px" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          <div
            className="relative w-full h-full"
            style={{ transformStyle: "preserve-3d" }}
          >
            {CARDS.map((card, i) => {
              const offset = getOffset(i);
              const abs = Math.abs(offset);
              const isActive = offset === 0;
              const hidden = abs > 2;

              const translateX = offset * 240;
              const translateZ = -abs * 240;
              const rotateY = Math.max(-40, Math.min(40, offset * -32));
              const scale = 1 - abs * 0.16;
              const opacity = hidden ? 0 : 1 - abs * 0.3;

              return (
                <div
                  key={card.id}
                  onClick={() => !isActive && goTo(i)}
                  className={`absolute left-1/2 top-1/2 w-[260px] sm:w-[300px] h-[320px] sm:h-[360px] ${
                    isActive ? "cursor-default" : "cursor-pointer"
                  } ${
                    isDragging || reducedMotion
                      ? ""
                      : "transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  }`}
                  style={{
                    transform: `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    opacity,
                    zIndex: 10 - abs,
                    pointerEvents: hidden ? "none" : "auto",
                  }}
                >
                  <div
                    className={`group relative w-full h-full rounded-[28px] border backdrop-blur-2xl transition-colors duration-500 ${
                      isActive
                        ? "bg-white/[0.06] border-[#DD7E1F]/50"
                        : "bg-white/[0.02] border-white/10"
                    }`}
                  >
                    <div className="flex flex-col h-full px-7 py-8 sm:px-8 sm:py-9">
                      <span
                        className={`text-sm font-semibold tracking-[0.25em] transition-colors duration-500 !font-['Barlow_Condensed'] ${
                          isActive ? "text-[#DD7E1F]" : "text-white/30"
                        }`}
                      >
                        {card.num}
                      </span>

                      <h3 className="mt-6 text-xl sm:text-2xl font-bold uppercase tracking-wide text-white !font-['Barlow_Condensed'] leading-tight">
                        {card.title}
                      </h3>

                      <div
                        className={`h-[2px] mt-5 bg-[#DD7E1F] transition-all duration-500 ${
                          isActive ? "w-12 opacity-100" : "w-0 opacity-0"
                        }`}
                      />

                      <p
                        className={`mt-5 text-[15px] leading-relaxed text-[#A0A0A3] transition-opacity duration-500 !font-['Barlow'] ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-10">
          <button
            aria-label="Previous"
            onClick={prev}
            className="flex items-center justify-center w-14 h-14 rounded-full border border-white/20 text-white transition-all hover:border-[#DD7E1F] hover:bg-[#DD7E1F] hover:text-black hover:scale-110"
          >
            <ChevronLeft size={26} />
          </button>

          <div className="flex items-center gap-3">
            {CARDS.map((card, i) => (
              <button
                key={card.id}
                aria-label={`Go to ${card.title}`}
                onClick={() => goTo(i)}
                className={`h-[6px] rounded-full transition-all duration-500 ${
                  i === active
                    ? "w-8 bg-[#DD7E1F]"
                    : "w-[6px] bg-white/25 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            aria-label="Next"
            onClick={next}
            className="flex items-center justify-center w-14 h-14 rounded-full border border-white/20 text-white transition-all hover:border-[#DD7E1F] hover:bg-[#DD7E1F] hover:text-black hover:scale-110"
          >
            <ChevronRight size={26} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PAGE
   ========================================================= */

export default function HomePage() {
  return (
    <main>
      <AboutUs />
      <Vision />
      <WhyChooseUs />
    </main>
  );
}
