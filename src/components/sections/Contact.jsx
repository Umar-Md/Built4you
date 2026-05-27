"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 bg-[#2B2B2D] overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#DD7E1F]/10 blur-[120px]" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <div>
            <p className="uppercase tracking-[4px] text-[#DD7E1F] mb-4 text-sm">
              Contact Us
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-[1.05] mb-8">
              Let’s Build
              <br />
              Something Great
            </h2>

            <p className="text-white/60 text-lg leading-relaxed">
              Reach out to discuss your dream home project and get a free
              consultation with our construction experts.
            </p>
          </div>

          {/* FORM */}
          <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10">
            <div className="flex flex-col gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="h-16 rounded-2xl bg-black/40 border border-white/10 px-6 outline-none focus:border-[#DD7E1F]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="h-16 rounded-2xl bg-black/40 border border-white/10 px-6 outline-none focus:border-[#DD7E1F]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="h-16 rounded-2xl bg-black/40 border border-white/10 px-6 outline-none focus:border-[#DD7E1F]"
              />

              <textarea
                placeholder="Tell us about your project"
                className="rounded-2xl bg-black/40 border border-white/10 px-6 py-5 outline-none focus:border-[#DD7E1F] min-h-[180px]"
              />

              <button className="h-16 rounded-2xl bg-[#DD7E1F] hover:bg-[#c96f18] transition-all duration-300 text-lg font-semibold">
                Send Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
