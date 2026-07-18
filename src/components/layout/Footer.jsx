"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Contact from "../sections/Contact";

const socialIcons = {
  facebook: <path d="M14 8.5h3V5h-3c-3.3 0-5 2-5 5v2H6v3.5h3V22h4v-6.5h3.2l.6-3.5H13v-1.7c0-1.2.4-1.8 1-1.8Z" />,
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" className="fill-current stroke-none" />
    </>
  ),
  linkedin: (
    <>
      <rect x="4" y="9" width="4" height="11" />
      <circle cx="6" cy="5.5" r="2" className="fill-current stroke-none" />
      <path d="M12 20V9h4v1.7c1-1.3 2.3-2 4-2 3 0 4 2 4 5.5V20h-4v-5.2c0-1.8-.6-2.8-2-2.8-1.4 0-2 1-2 3V20h-4Z" />
    </>
  ),
};

function SocialIcon({ name }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8">
      {socialIcons[name]}
    </svg>
  );
}

const companyLinks = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Vision", "/vision"],
  ["Packages", "/packages"],
  ["Contact", "/contact"],
];

export default function Footer() {
  return (
    <footer id="footer-contact" className="relative overflow-hidden border-t border-white/10 bg-[#232325]">
      <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#DD7E1F]/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[#DD7E1F]/10 blur-[130px]" />

      <div className="container-custom relative z-10 py-12 lg:py-16">
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#2B2B2D]/90 shadow-2xl shadow-black/20">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-between border-b border-white/10 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <div>
                <p className="mb-5 text-xs font-bold uppercase tracking-[4px] text-[#DD7E1F]">Built for you</p>
                <Link href="/" className="inline-block">
                  <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                    BUILT<span className="text-[#DD7E1F]">4YOU</span>
                  </h2>
                </Link>
                <p className="mt-5 max-w-lg text-[15px] leading-7 text-white/55">
                  Premium homes built with transparent pricing, thoughtful design, and uncompromising execution.
                </p>
              </div>

              <div className="mt-10 grid gap-9 sm:grid-cols-2">
                <div>
                  <h3 className="mb-5 text-sm font-bold uppercase tracking-[2px] text-white/90">Explore</h3>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-white/50">
                    {companyLinks.map(([label, href]) => (
                      <Link key={href} href={href} className="group flex items-center gap-1.5 transition hover:text-[#DD7E1F]">
                        {label}
                        <ArrowUpRight size={12} className="opacity-0 transition group-hover:opacity-100" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-5 text-sm font-bold uppercase tracking-[2px] text-white/90">Get in touch</h3>
                  <div className="space-y-3.5 text-sm text-white/50">
                    <a href="tel:+917981122596" className="flex items-center gap-3 transition hover:text-[#DD7E1F]"><Phone size={16} className="text-[#DD7E1F]" />+91 79811 22596</a>
                    <a href="mailto:samad.inzamad@gmail.com" className="flex items-center gap-3 break-all transition hover:text-[#DD7E1F]"><Mail size={16} className="shrink-0 text-[#DD7E1F]" />samad.inzamad@gmail.com</a>
                    <p className="flex items-center gap-3"><MapPin size={16} className="shrink-0 text-[#DD7E1F]" />Hyderabad, Telangana</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex items-center gap-3 border-t border-white/10 pt-7">
                {Object.keys(socialIcons).map((name) => (
                  <a key={name} href="#" aria-label={`Built4You ${name}`} className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/50 transition hover:-translate-y-1 hover:border-[#DD7E1F] hover:bg-[#DD7E1F] hover:text-white">
                    <SocialIcon name={name} />
                  </a>
                ))}
                <span className="ml-2 text-xs uppercase tracking-[2px] text-white/30">Follow our work</span>
              </div>
            </div>

            <div className="relative bg-white/[0.025] p-6 sm:p-8 lg:p-10">
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-[4px] text-[#DD7E1F]">Start a conversation</p>
                <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">Tell us about your dream home.</h3>
                <p className="mt-2 text-sm text-white/45">Share a few details and our team will get back to you.</p>
              </div>
              <Contact embedded formOnly />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 px-2 pt-7 text-center text-xs text-white/30 sm:flex-row sm:text-left">
          <p>© 2026 Built4You. All rights reserved.</p>
          <p>Building trust. Creating homes.</p>
        </div>
      </div>
    </footer>
  );
}
