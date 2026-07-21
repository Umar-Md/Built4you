"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../common/Logo";

const navItems = [
  ["Home", "/"],
  ["Services & Projects", "/services"],
  ["Vision", "/vision"],
  ["Estimator", "/#estimator"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes rotateBorder {
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        .quote-btn-wrapper {
          position: relative;
          display: inline-flex;
          border-radius: 9999px;
          overflow: hidden;
          padding: 2px;
        }

        .quote-btn-wrapper::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 250%;
          height: 250%;
          transform: translate(-50%, -50%);
          background: conic-gradient(
            transparent,
            #dd7e1f,
            transparent,
            #dd7e1f,
            transparent
          );
          animation: rotateBorder 4s linear infinite;
        }

        .quote-btn {
          position: relative;
          z-index: 2;
          background: #000;
          color: #fff;
          border: none;
          border-radius: 9999px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .quote-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 30px rgba(221, 126, 31, 0.45);
        }
      `}</style>

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
            <Link href="/" className="scale-125 sm:scale-100 origin-left">
              <Logo />
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-9">
              {navItems.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className={`hover:text-[#DD7E1F] transition-all duration-200 uppercase tracking-[1.5px] font-bold text-[14px] ${
                    pathname === href ? "text-[#DD7E1F]" : "text-white"
                  }`}
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                  }}
                >
                  {label}
                </Link>
              ))}

              {/* PREMIUM ANIMATED QUOTE BUTTON */}
              <div className="quote-btn-wrapper">
                <Link href="/contact" className="quote-btn px-8 py-3 text-[14px]">
                  GET QUOTE
                </Link>
              </div>
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
        <div className="h-[68px] border-b border-[#3A3A3C] px-6 flex items-center justify-between">
          <Link href="/" onClick={() => setMobileMenu(false)}>
            <Logo />
          </Link>

          <button
            onClick={() => setMobileMenu(false)}
            className="w-10 h-10 border border-[#444] text-xl text-white"
          >
            ×
          </button>
        </div>

        <div className="p-6 flex flex-col">
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileMenu(false)}
              className={`h-[65px] flex items-center border-b border-[#333] uppercase tracking-[2px] font-bold hover:text-[#DD7E1F] transition-all ${
                pathname === href ? "text-[#DD7E1F]" : "text-[#CCC]"
              }`}
            >
              {label}
            </Link>
          ))}

          <div className="mt-8">
            <div className="quote-btn-wrapper w-full">
              <Link href="/contact" onClick={() => setMobileMenu(false)} className="quote-btn w-full h-[58px] flex items-center justify-center">
                GET FREE QUOTE
              </Link>
            </div>
          </div>
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
