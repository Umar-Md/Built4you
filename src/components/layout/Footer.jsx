"use client";

export default function Footer() {
  return (
    <footer className="relative bg-[#2B2B2D] border-t border-white/10 overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#DD7E1F]/10 blur-[120px]" />

      <div className="container-custom relative z-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-14">
          {/* LOGO */}
          <div>
            <h2 className="text-4xl font-black mb-6">
              BUILT<span className="text-[#DD7E1F]">4YOU</span>
            </h2>

            <p className="text-white/60 leading-relaxed">
              Premium construction company focused on luxury homes,
              transparency, and world-class execution.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-xl font-bold mb-6">Company</h3>

            <div className="flex flex-col gap-4 text-white/60">
              <a href="#home" className="hover:text-[#DD7E1F] transition">
                Home
              </a>

              <a href="#services" className="hover:text-[#DD7E1F] transition">
                Services
              </a>

              <a href="#vision" className="hover:text-[#DD7E1F] transition">
                Vision
              </a>

              <a href="#pricing" className="hover:text-[#DD7E1F] transition">
                Pricing
              </a>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>

            <div className="flex flex-col gap-4 text-white/60">
              <p>+91 79811 22596</p>
              <p>samad.inzamad@gmail.com</p>
              <p>Hyderabad, India</p>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Start Your Dream Home
            </h3>

            <button
              onClick={() =>
                document.getElementById("estimator")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="px-8 py-4 rounded-full bg-[#DD7E1F] hover:bg-[#c86f18] transition-all duration-300 font-semibold shadow-2xl shadow-[#DD7E1F]/20"
            >
              Get Free Estimate
            </button>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-white/40 text-sm">
          <p>© 2026 Built4You. All rights reserved.</p>

          <p>Designed with premium modern architecture.</p>
        </div>
      </div>
    </footer>
  );
}
