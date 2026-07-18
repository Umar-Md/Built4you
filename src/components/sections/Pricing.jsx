"use client";
import { useRouter } from "next/navigation";

export default function PricingSection() {
  const router = useRouter();
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
              ₹1500
              <span className="text-sm font-normal">/sqft</span>
            </h2>

            <div className="w-full h-[2px] bg-gray-500 mx-auto mb-6"></div>

            <ul className="space-y-3 text-sm text-gray-300">
              <li>✔ First Time Builders</li>
              <li>✔ Small Plots</li>
              <li>✔ Clean, Affordable, Reliable</li>
            </ul>
          </div>

          <button className="border border-gray-500 px-5 py-2 rounded-lg hover:bg-gray-700 transition-all">
            Get Estimate
          </button>
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
              ₹1800
              <span className="text-sm font-normal">/sqft</span>
            </h2>

            <div className="w-full h-[2px] bg-black mx-auto mb-6"></div>

            <ul className="space-y-3 text-sm text-gray-800">
              <li>✔ Beauty + Budget Control</li>
              <li>✔ Small to Medium Plots</li>
              <li>✔ Well Designed & Balanced</li>
            </ul>
          </div>

          <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition-all">
            Get Estimate
          </button>
        </div>

        {/* Signature */}
        <div className="bg-[#2c2c2c] text-center rounded-2xl px-8 py-10 w-[280px] h-[460px] shadow-md flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Signature Homes
            </h3>

            <h2 className="text-4xl font-bold mb-2">
              ₹2200
              <span className="text-sm font-normal">/sqft</span>
            </h2>

            <div className="w-full h-[2px] bg-gray-500 mx-auto mb-6"></div>

            <ul className="space-y-3 text-sm text-gray-300">
              <li>✔ Premium Villa Homes</li>
              <li>✔ Medium to Large Plots</li>
              <li>✔ Custom & Luxury Designs</li>
            </ul>
          </div>

          <button className="border border-gray-500 px-5 py-2 rounded-lg hover:bg-gray-700 transition-all">
            Get Estimate
          </button>
        </div>
      </div>

      {/* Compare Button */}
      <button
        onClick={() => router.push("/compare-packages")}
        className="bg-white mt-10 text-black font-semibold text-lg px-6 py-3 rounded-full shadow hover:bg-gray-200 transition"
      >
        Compare our Packages
      </button>
    </div>
  );
}
