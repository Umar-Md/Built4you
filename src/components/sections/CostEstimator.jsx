"use client";

import { useState } from "react";

const RATES = { Essential: 1850, Balanced: 2100, Signature: 2350 };

const PACKAGES = [
  {
    key: "Essential",
    price: "1,850",
    desc: "Small plots · First-time builders",
  },
  {
    key: "Balanced",
    price: "2,100",
    desc: "Mid-range · Best for families",
  },
  {
    key: "Signature",
    price: "2,350",
    desc: "Premium · Large plots · Villas",
  },
];

const inputCls =
  "w-full px-4 py-3 bg-[#222224] border border-white/10 rounded-lg text-white text-sm outline-none focus:border-[#DD7E1F] transition-colors placeholder:text-white/20";

const labelCls =
  "block text-[11px] font-bold tracking-[0.2em] uppercase text-white/40 mb-1.5";

function ArrowIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg className="w-10 h-10 text-[#DD7E1F]/30" viewBox="0 0 40 40" fill="none">
      <path
        d="M5 35V18L20 5l15 13v17H25V25H15v10H5z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CostEstimator() {
  const [form, setForm] = useState({
    name: "",
    number: "",
    sizeType: "Area",
    area: "",
    length: "",
    width: "",
    pkg: "Balanced",
    floors: "1",
  });
  const [result, setResult] = useState(null);

  const handle = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const setPkg = (pkg) => setForm((prev) => ({ ...prev, pkg }));

  const calculate = () => {
    const sqft =
      form.sizeType === "Sides"
        ? parseFloat(form.length) * parseFloat(form.width)
        : parseFloat(form.area);

    if (!sqft || sqft <= 0) return;

    const floors = Math.max(1, parseInt(form.floors) || 1);
    const totalSqft = sqft * floors;
    const total = totalSqft * RATES[form.pkg];

    setResult({
      sqft: totalSqft.toLocaleString("en-IN"),
      total: total.toLocaleString("en-IN"),
      pkg: form.pkg,
      floors,
    });
  };

  return (
    <section id="estimator" className="bg-[#2B2B2D] py-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-12">
        <p className="text-[#DD7E1F] text-xs font-bold tracking-[0.3em] uppercase mb-3">
          Smart Planning
        </p>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2
            className="text-5xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Cost
            <br />
            <span className="text-[#DD7E1F]">Estimator</span>
          </h2>
          <p className="text-sm text-white/40 max-w-xs leading-relaxed">
            Get an instant ballpark estimate for your dream home. No strings attached.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* ── Left: Form ── */}
        <div className="bg-[#3F3F41] rounded-2xl p-6 sm:p-8 border border-white/[0.07]">
          {/* Name + Mobile */}
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div>
              <label className={labelCls}>Your Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handle}
                placeholder="Full name"
                className={inputCls}
              />
            </div>
            <div>
              <label className={labelCls}>Mobile</label>
              <input
                name="number"
                value={form.number}
                onChange={handle}
                placeholder="+91 XXXXXXXXXX"
                className={inputCls}
              />
            </div>
          </div>

          {/* Size type toggle */}
          <div className="mb-5">
            <label className={labelCls}>Size Input</label>
            <div className="grid grid-cols-2 gap-2">
              {["Area", "Sides"].map((type) => (
                <button
                  key={type}
                  onClick={() => setForm((p) => ({ ...p, sizeType: type }))}
                  className={`py-2.5 rounded-lg text-xs font-black tracking-[0.15em] uppercase transition-all ${
                    form.sizeType === type
                      ? "bg-[#DD7E1F] text-white shadow-[0_4px_16px_rgba(221,126,31,0.3)]"
                      : "bg-[#222224] text-white/40 border border-white/10 hover:border-[#DD7E1F]/40"
                  }`}
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {type === "Area" ? "Total Area (sqft)" : "Dimensions (L × W)"}
                </button>
              ))}
            </div>
          </div>

          {/* Area or Dimensions */}
          {form.sizeType === "Area" ? (
            <div className="mb-5">
              <label className={labelCls}>Plot Area (sqft)</label>
              <input
                type="number"
                name="area"
                value={form.area}
                onChange={handle}
                placeholder="e.g. 1200"
                className={inputCls}
              />
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <label className={labelCls}>Length (ft)</label>
                <input
                  type="number"
                  name="length"
                  value={form.length}
                  onChange={handle}
                  placeholder="e.g. 36"
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>Width (ft)</label>
                <input
                  type="number"
                  name="width"
                  value={form.width}
                  onChange={handle}
                  placeholder="e.g. 54"
                  className={inputCls}
                />
              </div>
            </div>
          )}

          {/* Floors */}
          <div className="mb-6">
            <label className={labelCls}>Number of Floors</label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4].map((f) => (
                <button
                  key={f}
                  onClick={() => setForm((p) => ({ ...p, floors: String(f) }))}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-black transition-all ${
                    parseInt(form.floors) === f && ![5,6,7,8,9,10].includes(parseInt(form.floors))
                      ? "bg-[#DD7E1F] text-white shadow-[0_4px_16px_rgba(221,126,31,0.3)]"
                      : "bg-[#222224] text-white/40 border border-white/10 hover:border-[#DD7E1F]/40"
                  }`}
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {f}
                </button>
              ))}
              {/* Custom floor input */}
              <div className="flex-1 relative">
                <input
                  type="number"
                  min="1"
                  max="99"
                  name="floors"
                  value={parseInt(form.floors) > 4 ? form.floors : ""}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === "" || parseInt(val) < 1) return;
                    setForm((p) => ({ ...p, floors: val }));
                  }}
                  placeholder="5+"
                  className={`w-full py-2.5 px-3 rounded-lg text-sm font-black text-center transition-all bg-[#222224] border outline-none placeholder:text-white/20 ${
                    parseInt(form.floors) > 4
                      ? "border-[#DD7E1F] text-[#DD7E1F] shadow-[0_4px_16px_rgba(221,126,31,0.3)]"
                      : "border-white/10 text-white/40 hover:border-[#DD7E1F]/40 focus:border-[#DD7E1F]"
                  }`}
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                />
              </div>
            </div>
            <p className="text-[11px] text-white/20 mt-1.5">
              For G+{parseInt(form.floors) || 1} enter {(parseInt(form.floors) || 1) + 1} floors
            </p>
          </div>

          {/* Calculate button */}
          <button
            onClick={calculate}
            className="w-full flex items-center justify-center gap-2 py-4 bg-[#DD7E1F] text-white rounded-xl font-black text-base tracking-[0.15em] uppercase transition-opacity hover:opacity-90 shadow-[0_8px_28px_rgba(221,126,31,0.35)]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Calculate Estimate
            <ArrowIcon />
          </button>
        </div>

        {/* ── Right: Result + Package Selector ── */}
        <div className="flex flex-col gap-4">
          {/* Result card */}
          {result ? (
            <div className="bg-[#DD7E1F] rounded-2xl p-8 text-center shadow-[0_20px_60px_rgba(221,126,31,0.35)]">
              <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-white/70 mb-2">
                Estimated Cost
              </p>
              <div
                className="text-6xl font-black text-white leading-none mb-2"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                ₹{result.total}
              </div>
              <p className="text-white/75 text-sm mb-6">
                for {result.sqft} sqft · {result.pkg} Package · {result.floors}{" "}
                {result.floors === 1 ? "Floor" : "Floors"}
              </p>
              <div className="bg-black/20 rounded-xl px-5 py-4 text-white/60 text-xs leading-relaxed text-left">
                ⚠ This is a preliminary estimate. Final pricing depends on soil
                testing, architectural complexity & material upgrades.
              </div>
            </div>
          ) : (
            <div className="bg-[#3F3F41] border-2 border-dashed border-white/10 rounded-2xl p-8 text-center flex flex-col items-center justify-center min-h-[220px]">
              <HomeIcon />
              <div
                className="text-6xl font-black text-white/10 leading-none mt-3 mb-2"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                ₹?
              </div>
              <p className="text-white/25 text-xs tracking-widest uppercase font-bold">
                Fill the form to calculate
              </p>
            </div>
          )}

          {/* Package selector */}
          <div className="flex flex-col gap-2">
            {PACKAGES.map(({ key, price, desc }) => {
              const isActive = form.pkg === key;
              const isHighlighted = key === "Balanced";
              return (
                <button
                  key={key}
                  onClick={() => setPkg(key)}
                  className={`w-full flex items-center justify-between px-5 py-4 rounded-xl border text-left transition-all ${
                    isActive
                      ? "bg-[#DD7E1F]/15 border-[#DD7E1F]"
                      : "bg-[#3F3F41] border-white/[0.07] hover:border-[#DD7E1F]/30"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {/* Radio dot */}
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                        isActive ? "border-[#DD7E1F]" : "border-white/20"
                      }`}
                    >
                      {isActive && (
                        <div className="w-2 h-2 rounded-full bg-[#DD7E1F]" />
                      )}
                    </div>
                    <div>
                      <div
                        className={`font-black text-base uppercase tracking-wide ${isActive ? "text-[#DD7E1F]" : "text-white/80"}`}
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                      >
                        {key} Homes
                        {isHighlighted && (
                          <span className="ml-2 text-[10px] bg-[#DD7E1F]/20 text-[#DD7E1F] px-2 py-0.5 rounded-full tracking-widest">
                            Popular
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-white/30 mt-0.5">{desc}</div>
                    </div>
                  </div>
                  <div
                    className={`text-xl font-black shrink-0 ${isActive ? "text-[#DD7E1F]" : "text-white/25"}`}
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    ₹{price}
                    <span className="text-xs font-normal">/sqft</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Footnote */}
          <p className="text-white/20 text-xs text-center tracking-wide pt-1">
            Prices are per built-up sqft · GST & approvals extra
          </p>
        </div>
      </div>
    </section>
  );
}