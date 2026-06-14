"use client";

import { useEffect, useState } from "react";
import Logo from "../common/Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", fn);

    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scroll = (id) => {
    setMobileMenu(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[300] border-b border-[#3A3A3C] transition-all duration-300 ${
          scrolled
            ? "bg-[#2B2B2D]"
            : "bg-[rgba(43,43,45,0.95)] backdrop-blur-md"
        }`}
      >
        <div className="container-custom">
          <div className="h-[70px] flex items-center justify-between">
            {/* LOGO */}
          <div
  onClick={() => scroll("home")}
  className="cursor-pointer scale-125 sm:scale-100 origin-left"
>
  <Logo />
</div>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-9">
              {[
                ["Home", "home"],
                ["Services", "services"],
                ["Vision", "vision"],
                ["Estimator", "estimator"],
                ["Packages", "packages"],
                ["Contact", "contact"],
              ].map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => scroll(id)}
                  className="text-[#ccc] hover:text-[#DD7E1F] transition-all duration-200 uppercase tracking-[1.5px] font-bold text-[14px]"
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                  }}
                >
                  {label}
                </button>
              ))}

              <button
                onClick={() => scroll("contact")}
                className="orange-btn px-7 py-[11px] rounded-[2px]"
              >
                GET QUOTE
              </button>
            </nav>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden w-11 h-11 border border-[#444] flex flex-col items-center justify-center gap-[5px]"
            >
              <div className="w-5 h-[2px] bg-white" />
              <div className="w-5 h-[2px] bg-white" />
              <div className="w-5 h-[2px] bg-white" />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 w-full max-w-[320px] h-screen bg-[#2B2B2D] z-[400] border-l border-[#3A3A3C] transition-all duration-300 ${
          mobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* HEADER */}

        <div className="h-[68px] border-b border-[#3A3A3C] px-6 flex items-center justify-between">
          <div onClick={() => scroll("home")} className="cursor-pointer">
            <Logo />
          </div>

          <button
            onClick={() => setMobileMenu(false)}
            className="w-10 h-10 border border-[#444] text-xl"
          >
            ×
          </button>
        </div>

        {/* LINKS */}
        <div className="p-6 flex flex-col">
          {[
            ["Home", "home"],
            ["Services", "services"],
            ["Vision", "vision"],
            ["Estimator", "estimator"],
            ["Packages", "packages"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scroll(id)}
              className="h-[65px] border-b border-[#333] text-left uppercase tracking-[2px] font-bold text-[#CCC] hover:text-[#DD7E1F] transition-all"
            >
              {label}
            </button>
          ))}

          <button
            onClick={() => scroll("contact")}
            className="orange-btn mt-8 h-[58px]"
          >
            GET FREE QUOTE
          </button>
        </div>
      </div>

      {/* OVERLAY */}
      {mobileMenu && (
        <div
          onClick={() => setMobileMenu(false)}
          className="fixed inset-0 bg-black/60 z-[350] lg:hidden"
        />
      )}
    </>
  );
}
