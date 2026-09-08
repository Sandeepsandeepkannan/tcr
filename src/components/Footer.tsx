"use client";

import React from "react";
import { Cpu, ArrowUp, Globe, Mail, Phone, MapPin, Share2 } from "lucide-react";

const SocialLinkedIn = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
  </svg>
);

const SocialTwitter = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const SocialGithub = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
  </svg>
);

const SocialInstagram = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      const navbarHeight = 80;
      const targetPosition = elem.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="relative bg-[#030408] text-slate-400 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800/80">

          {/* Company Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-sky-600 to-indigo-600 p-[1px]">
                <div className="w-full h-full bg-[#070a14] rounded-[11px] flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                TCR <span className="text-cyan-400 font-medium">TECHNOLOGY</span>
              </span>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm font-normal">
              Empowering forward-thinking companies through digital marketing, creative social strategy, CRM solutions, modern websites, and custom business software.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { name: "LinkedIn", icon: SocialLinkedIn, href: "https://linkedin.com" },
                { name: "Twitter", icon: SocialTwitter, href: "https://twitter.com" },
                { name: "GitHub", icon: SocialGithub, href: "https://github.com" },
                { name: "Instagram", icon: SocialInstagram, href: "https://instagram.com" },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                    aria-label={s.name}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase text-slate-200 font-bold tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "About TCR", href: "#about" },
                { label: "Solutions", href: "#solutions" },
                { label: "Process", href: "#process" },
                { label: "Projects", href: "#projects" },
                { label: "Why TCR", href: "#whytcr" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase text-slate-200 font-bold tracking-widest">
              Services
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-cyan-400 transition-colors">Digital Marketing & SEO</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-cyan-400 transition-colors">Social Media Marketing</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-cyan-400 transition-colors">CRM & Workflow Automation</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-cyan-400 transition-colors">Modern Web Development</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-cyan-400 transition-colors">Custom Software & SaaS</a></li>
            </ul>
          </div>

          {/* Office Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase text-slate-200 font-bold tracking-widest">
              Get in Touch
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p>Email: <span className="text-slate-200">tcrtechnology@gmail.com</span></p>
              <p>Phone: <span className="text-slate-200">+91 9345053806</span></p>
              <p>Locations: <span className="text-slate-200">Chennai , Urapakkam</span></p>
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="inline-flex items-center text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Start a Conversation →
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & scroll-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} TCR Technology. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
