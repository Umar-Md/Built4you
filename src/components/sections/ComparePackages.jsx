"use client";

import { useState } from "react";

const PACKAGES = ["Essential", "Balanced", "Signature"];

const PRICES = { Essential: "1,850", Balanced: "2,100", Signature: "2,350" };

const PACKAGE_SUBTITLES = {
  Essential: "First-time builders",
  Balanced: "Best for families",
  Signature: "Premium & villas",
};

const SECTION_ICONS = {
  Structure: "⬡",
  Kitchen: "◈",
  Bathroom: "◎",
  "Doors & Windows": "▣",
  Painting: "◐",
  Flooring: "▨",
  Electrical: "◉",
  Miscellaneous: "◆",
};

const DATA = {
  Structure: {
    Essential: [
      "Sunvik / Prime Gold / Kamadhenu Steel",
      "Dalmia / Zuari / Bharathi Cement",
      "RCC Design Mix M20/M25",
      "Ceiling Height 10 ft (FFL to FFL)",
    ],
    Balanced: [
      "Indus / Jindal Panther / Vizag Steel",
      "Dalmia / Zuari / Bharathi Cement",
      "RCC Design Mix M20/M25",
      "Ceiling Height 10 ft (FFL to FFL)",
    ],
    Signature: [
      "Indus / Jindal Panther / Vizag Steel",
      "ACC / Ultratech / Ramco Supercrete",
      "RCC Design Mix M25+ (Structural Specs)",
      "Ceiling Height 10 ft (FFL to FFL)",
    ],
  },
  Kitchen: {
    Essential: [
      "Wall Dado Tiles up to ₹40/sqft",
      "Sink Faucet up to ₹1,300",
      "SS Single Sink up to ₹3,000",
    ],
    Balanced: [
      "Wall Dado Tiles up to ₹60/sqft",
      "Sink Faucet up to ₹2,000",
      "SS Double Sink up to ₹6,000",
    ],
    Signature: [
      "Wall Dado Tiles up to ₹80/sqft",
      "Sink Faucet up to ₹3,500 (Jaquar)",
      "Granite Finish Sink up to ₹8,000",
    ],
  },
  Bathroom: {
    Essential: [
      "Wall Dado up to 7 ft — ₹40/sqft",
      "Sanitaryware ₹30K per 1000sqft (Cera)",
      "WPC / Waterproof Flush Doors",
    ],
    Balanced: [
      "Wall Dado up to 7 ft — ₹60/sqft",
      "Sanitaryware ₹50K per 1000sqft (Hindware)",
      "WPC / Waterproof Flush Doors",
    ],
    Signature: [
      "Wall Dado up to 7 ft — ₹80/sqft",
      "Sanitaryware ₹70K per 1000sqft (Jaquar)",
      "Solar Water Heater Provision",
    ],
  },
  "Doors & Windows": {
    Essential: [
      "Aluminium Windows with glass & mesh (Jindal)",
      "Main Door — Veneer Flush ₹20,000",
      "Internal Doors — Membrane/Flush ₹11,000",
    ],
    Balanced: [
      "UPVC Windows (Luftung / Plastone)",
      "Main Door — Teak with Teak Frame ₹30,000",
      "Internal Doors — Membrane/Flush ₹11,000",
    ],
    Signature: [
      "UPVC Windows (NCL Veka / Prominance)",
      "Main Door — Teak with Teak Frame ₹40,000",
      "Internal Doors — Sal Wood Frame ₹13,000",
      "Pooja Room — Burma Teak ₹28,000",
    ],
  },
  Painting: {
    Essential: [
      "Interior — JK Putty + Tractor Emulsion",
      "Exterior — Asian Primer + Ace Exterior Emulsion",
    ],
    Balanced: [
      "Interior — JK Putty + Tractor Shyne Emulsion",
      "Exterior — Asian Primer + Apex Emulsion",
    ],
    Signature: [
      "Interior — JK Putty + Apcolite Premium Emulsion",
      "Exterior — Asian Primer + Apex Emulsion",
    ],
  },
  Flooring: {
    Essential: [
      "Living & Dining — Tiles up to ₹50/sqft",
      "Rooms — Tiles up to ₹50/sqft",
      "Staircase — Sadarahalli Granite ₹70/sqft",
    ],
    Balanced: [
      "Living & Dining — Tiles/Granite up to ₹100/sqft",
      "Rooms — Tiles up to ₹80/sqft",
      "Staircase — Sadarahalli Granite ₹80/sqft",
    ],
    Signature: [
      "Living & Dining — Tiles/Granite up to ₹140/sqft",
      "Rooms — Tiles/Granite up to ₹120/sqft",
      "Staircase — Sadarahalli Granite ₹110/sqft",
    ],
  },
  Electrical: {
    Essential: [
      "Finolex / Anchor / Havells Wires",
      "Switches — Legrand Allzy or GM(G9)",
    ],
    Balanced: [
      "Finolex / Anchor / Havells Wires",
      "Switches — Roma / Lisha / Legrand Lyncus",
      "UPS Wiring Provision",
    ],
    Signature: [
      "Finolex / Anchor / Havells Wires",
      "Switches — Legrand Mylinc / Havells Coral",
      "UPS Wiring Provision",
    ],
  },
  Miscellaneous: {
    Essential: [
      "Overhead Tank — Apollo 1000L",
      "Underground Sump — 4000L",
      "MS Staircase Railing",
    ],
    Balanced: [
      "Overhead Tank — Apollo 1500L",
      "Underground Sump — 6000L",
      "MS Staircase Railing",
    ],
    Signature: [
      "Overhead Tank — Sintex Double Layer 2000L",
      "Underground Sump — 7000L",
      "SS 304 Grade Staircase Railing",
    ],
  },
};

function CheckIcon({ isHighlighted }) {
  return (
    <svg
      className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isHighlighted ? "text-[#3F3F41]" : "text-[#DD7E1F]"}`}
      viewBox="0 0 14 14"
      fill="none"
    >
      <polyline
        points="2,7 5.5,10.5 12,3"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg
      className={`w-5 h-5 text-[#DD7E1F] transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
      viewBox="0 0 20 20"
      fill="none"
    >
      <polyline
        points="5,8 10,13 15,8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ComparePackages() {
  const [openSection, setOpenSection] = useState("Structure");

  const toggle = (section) =>
    setOpenSection((prev) => (prev === section ? null : section));

  return (
    <section className="bg-[#2B2B2D] py-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-12">
        <p className="text-[#DD7E1F] text-xs font-bold tracking-[0.3em] uppercase mb-3">
          Side by Side
        </p>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2
            className="text-5xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Compare
            <br />
            <span className="text-[#DD7E1F]">Packages</span>
          </h2>
          <p className="text-sm text-white/40 max-w-xs leading-relaxed">
            Everything included in your package — no hidden costs, no surprises.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Sticky column headers */}
        <div className="grid grid-cols-3 gap-3 mb-1 sticky top-0 z-20">
          {PACKAGES.map((pkg) => {
            const isHighlighted = pkg === "Balanced";
            return (
              <div
                key={pkg}
                className={`rounded-t-xl px-4 py-4 text-center transition-all ${
                  isHighlighted
                    ? "bg-[#DD7E1F] shadow-[0_8px_32px_rgba(221,126,31,0.4)]"
                    : "bg-[#2B2B2D] border border-white/10"
                }`}
              >
                {isHighlighted && (
                  <div className="inline-block text-[10px] font-black tracking-[0.2em] bg-green-500 rounded-lg uppercase text-x mb-1 px-2 py-[2px]">
  Recommended
</div>
                )}
                <div
                  className="text-white font-black text-lg uppercase tracking-wide"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {pkg}
                </div>
                <div
                  className={`text-sm font-bold mt-0.5 ${isHighlighted ? "text-white/80" : "text-[#DD7E1F]"}`}
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  ₹{PRICES[pkg]}/sqft
                </div>
                <div className={`text-[11px] mt-1 ${isHighlighted ? "text-white/60" : "text-white/30"}`}>
                  {PACKAGE_SUBTITLES[pkg]}
                </div>
              </div>
            );
          })}
        </div>

        {/* Accordion rows */}
        <div className="rounded-b-xl overflow-hidden border border-white/10 divide-y divide-white/[0.06]">
          {Object.keys(DATA).map((section, idx) => {
            const isOpen = openSection === section;
            const icon = SECTION_ICONS[section] ?? "◆";
            return (
              <div key={section}>
                <button
                  onClick={() => toggle(section)}
                  className={`w-full flex items-center justify-between px-5 py-4 text-left transition-colors duration-200 ${
                    isOpen
                      ? "bg-[#DD7E1F]/10"
                      : idx % 2 === 0
                      ? "bg-[#2B2B2D]"
                      : "bg-[#282829]"
                  } hover:bg-[#DD7E1F]/10`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-base transition-colors ${isOpen ? "text-[#DD7E1F]" : "text-white/25"}`}>
                      {icon}
                    </span>
                    <span
                      className={`font-black text-base uppercase tracking-wider transition-colors ${isOpen ? "text-[#DD7E1F]" : "text-white/80"}`}
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {section}
                    </span>
                  </div>
                  <ChevronIcon open={isOpen} />
                </button>

                {isOpen && (
                  <div className="grid grid-cols-3 gap-3 p-3 bg-[#1e1e20]">
                    {PACKAGES.map((pkg) => {
                      const isHighlighted = pkg === "Balanced";
                      return (
                        <div
                          key={pkg}
                          className={`rounded-lg p-4 ${
                            isHighlighted
                              ? "bg-[#DD7E1F] shadow-[0_4px_20px_rgba(221,126,31,0.25)]"
                              : "bg-[#2B2B2D] border border-white/[0.07]"
                          }`}
                        >
                          <ul className="space-y-2.5">
                            {DATA[section][pkg].map((item, j) => (
                              <li key={j} className="flex items-start gap-2.5">
                                <CheckIcon isHighlighted={isHighlighted} />
                                <span
                                  className={`text-[12.5px] leading-relaxed ${
                                    isHighlighted
                                      ? "text-[#3F3F41] font-semibold"
                                      : "text-white/60"
                                  }`}
                                >
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA row */}
        <div className="grid grid-cols-3 gap-3 mt-3">
          {PACKAGES.map((pkg) => {
            const isHighlighted = pkg === "Balanced";
            return (
              <div
                key={pkg}
                className={`rounded-xl px-4 py-5 text-center ${
                  isHighlighted
                    ? "bg-[#DD7E1F]"
                    : "bg-[#2B2B2D] border border-white/10"
                }`}
              >
                <div
                  className={`text-2xl font-black leading-none mb-1 ${isHighlighted ? "text-white" : "text-[#DD7E1F]"}`}
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  ₹{PRICES[pkg]}
                  <span className={`text-sm font-normal ml-0.5 ${isHighlighted ? "text-white/70" : "text-white/30"}`}>
                    /sqft
                  </span>
                </div>
                <p className={`text-[11px] mb-4 ${isHighlighted ? "text-white/70" : "text-white/30"}`}>
                  {pkg} Package
                </p>
                <button
                  className={`w-full py-2.5 rounded-lg text-xs font-black tracking-[0.15em] uppercase transition-opacity hover:opacity-90 ${
                    isHighlighted ? "bg-[#3F3F41] text-white" : "bg-[#DD7E1F] text-white"
                  }`}
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Get Estimate
                </button>
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <p className="text-center text-white/20 text-xs mt-6 tracking-wide">
          All packages include 1-year structural warranty · Prices are per built-up sqft
        </p>
      </div>
    </section>
  );
}
