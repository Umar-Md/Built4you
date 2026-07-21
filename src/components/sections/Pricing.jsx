"use client";
import Link from "next/link";
import { useId } from "react";

const GradientTrendingUp = () => {
  const gradientId = useId();

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6 shrink-0 drop-shadow-[0_0_5px_rgba(34,211,238,0.4)]"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="3" y1="3" x2="21" y2="21">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#67e8f9" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <path
        d="m3 17 6-6 4 4 8-8"
        stroke={`url(#${gradientId})`}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 7h6v6"
        stroke={`url(#${gradientId})`}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default function PricingSection() {
  return (
    <div id="packages" className="relative min-h-screen flex flex-col items-center justify-center bg-[#2B2B2D] text-white overflow-hidden px-4 py-20">
      
      {/* Gold Glow Top */}
      <div
        style={{
          position: "absolute",
          top: "-220px",
          left: "-50px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "#DD7E1F",
          filter: "blur(20px)",
          opacity: 0.8,
          transform: "rotate(-10deg)",
          pointerEvents: "none",
        }}
      ></div>

      {/* Gold Glow Bottom */}
      <div
        style={{
          position: "absolute",
          bottom: "-250px",
          right: "-180px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "#DD7E1F",
          filter: "blur(20px)",
          opacity: 0.8,
          transform: "rotate(-200deg)",
          pointerEvents: "none",
        }}
      ></div>

      {/* Pricing Cards */}
      <div className="flex flex-col md:flex-row gap-8 items-center z-10">

        {/* Essential */}
        <div className="bg-[#2c2c2c] text-center rounded-2xl px-8 py-10 w-[280px] h-[460px] shadow-md flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Essential Homes
            </h3>

            <h2 className="text-4xl font-bold mb-2">
              ₹1850
              <span className="text-sm font-normal">/sqft</span>
            </h2>

            <div className="w-full h-[2px] bg-gray-500 mx-auto mb-6"></div>

            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2"><GradientTrendingUp />First Time Builders</li>
              <li className="flex items-center gap-2"><GradientTrendingUp />Small Plots</li>
              <li className="flex items-center gap-2"><GradientTrendingUp />Clean, Affordable, Reliable</li>
            </ul>
          </div>

          <Link href="/#estimator" className="border border-gray-500 px-5 py-2 rounded-lg hover:bg-gray-700 transition-all">
            Get Estimate
          </Link>
        </div>

        {/* Balanced */}
        <div className="bg-[#DD7E1F] text-black text-center rounded-2xl px-10 py-12 w-[300px] h-[500px] shadow-2xl relative flex flex-col justify-between scale-110">

          <div className="absolute top-[-15px] left-1/2 -translate-x-1/2 bg-green-600 px-4 py-1 rounded-full text-white font-semibold shadow-md">
            RECOMMENDED
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">
              Balanced Homes
            </h3>

            <h2 className="text-4xl font-bold mb-2">
              ₹2100
              <span className="text-sm font-normal">/sqft</span>
            </h2>

            <div className="w-full h-[2px] bg-black mx-auto mb-6"></div>

            <ul className="space-y-3 text-sm text-gray-800">
              <li className="flex items-center gap-2"><GradientTrendingUp />Beauty + Budget Control</li>
              <li className="flex items-center gap-2"><GradientTrendingUp />Small to Medium Plots</li>
              <li className="flex items-center gap-2"><GradientTrendingUp />Well Designed & Balanced</li>
            </ul>
          </div>

          <Link href="/#estimator" className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition-all">
            Get Estimate
          </Link>
        </div>

        {/* Signature */}
        <div className="bg-[#2c2c2c] text-center rounded-2xl px-8 py-10 w-[280px] h-[460px] shadow-md flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Signature Homes
            </h3>

            <h2 className="text-4xl font-bold mb-2">
              ₹2350
              <span className="text-sm font-normal">/sqft</span>
            </h2>

            <div className="w-full h-[2px] bg-gray-500 mx-auto mb-6"></div>

            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2"><GradientTrendingUp />Premium Villa Homes</li>
              <li className="flex items-center gap-2"><GradientTrendingUp />Medium to Large Plots</li>
              <li className="flex items-center gap-2"><GradientTrendingUp />Custom & Luxury Designs</li>
            </ul>
          </div>

          <Link href="/#estimator" className="border border-gray-500 px-5 py-2 rounded-lg hover:bg-gray-700 transition-all">
            Get Estimate
          </Link>
        </div>
      </div>

      {/* Compare Button */}
      
    </div>
  );
}
