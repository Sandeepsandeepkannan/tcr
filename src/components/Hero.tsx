"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Zap, BarChart3, Code2, LineChart, Globe } from "lucide-react";

export default function Hero() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium tracking-wide shadow-sm backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>Next-Generation Digital & Technology Agency</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
              We Build Digital Experiences That{" "}
              <span className="gradient-text-accent">Move Businesses Forward.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              TCR Technology helps businesses grow through digital marketing, social media, CRM solutions, modern websites, and custom software.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="inline-flex items-center justify-center px-7 py-4 text-base font-semibold text-black bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 rounded-full shadow-[0_0_30px_rgba(56,189,248,0.35)] hover:shadow-[0_0_45px_rgba(56,189,248,0.55)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 group"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <a
                href="#services"
                onClick={(e) => scrollToSection(e, "#services")}
                className="inline-flex items-center justify-center px-7 py-4 text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-500 rounded-full transition-all duration-300 hover:text-white backdrop-blur-md"
              >
                <span>Explore Services</span>
              </a>
            </div>

            {/* Credibility Indicator */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-4 sm:gap-8 text-xs sm:text-sm font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-slate-200 font-semibold tracking-wider uppercase">Digital Strategy</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-2">
                <span className="text-slate-200 font-semibold tracking-wider uppercase">Technology</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-2">
                <span className="text-slate-200 font-semibold tracking-wider uppercase">Growth Solutions</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Abstract Tech Interactive Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            {/* Glowing Backdrop Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-sky-500/20 to-indigo-500/20 rounded-3xl blur-2xl opacity-70 animate-pulse-slow" />

              {/* Main Visual Container */}
              <div className="relative glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800/90 shadow-2xl overflow-hidden">
                
                {/* Tech Graphic Top Bar */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="text-[11px] font-mono text-cyan-400/90 bg-cyan-950/60 border border-cyan-800/50 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    TCR_CORE_ENGINE v4.2
                  </div>
                </div>

                {/* Abstract Node Network & Tech Visual */}
                <div className="py-8 relative">
                  
                  {/* Grid Lines Pattern */}
                  <div className="absolute inset-0 tech-grid-pattern opacity-60 rounded-xl" />

                  {/* Visual Floating Cards */}
                  <div className="relative space-y-4">
                    
                    {/* Floating Card 1: Marketing Performance */}
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className="bg-slate-900/90 border border-slate-700/70 p-4 rounded-2xl shadow-xl backdrop-blur-md flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                          <LineChart className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 font-medium">Digital Lead Growth</p>
                          <p className="text-base font-bold text-white">+340% Performance</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2.5 py-1 rounded-lg">
                        ↑ Optimized
                      </span>
                    </motion.div>

                    {/* Floating Card 2: Custom Architecture */}
                    <motion.div
                      animate={{ y: [0, 6, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="bg-slate-900/90 border border-slate-700/70 p-4 rounded-2xl shadow-xl backdrop-blur-md flex items-center justify-between ml-4 sm:ml-8"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                          <Code2 className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 font-medium">Custom Software & CRM</p>
                          <p className="text-base font-bold text-white">99.9% Uptime Stack</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-800/50 px-2.5 py-1 rounded-lg">
                        Scalable
                      </span>
                    </motion.div>

                    {/* Floating Card 3: Social & Web Strategy */}
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                      className="bg-slate-900/90 border border-slate-700/70 p-4 rounded-2xl shadow-xl backdrop-blur-md flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400">
                          <Globe className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 font-medium">Web & Brand Reach</p>
                          <p className="text-base font-bold text-white">Global Presence</p>
                        </div>
                      </div>
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 rounded-full bg-cyan-500 border border-slate-900 flex items-center justify-center text-[10px] font-bold text-black">A</div>
                        <div className="w-6 h-6 rounded-full bg-indigo-500 border border-slate-900 flex items-center justify-center text-[10px] font-bold text-white">B</div>
                        <div className="w-6 h-6 rounded-full bg-sky-400 border border-slate-900 flex items-center justify-center text-[10px] font-bold text-black">C</div>
                      </div>
                    </motion.div>

                  </div>
                </div>

                {/* Bottom Status Bar */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    <span>Enterprise Security</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-cyan-400">
                    <Zap className="w-3.5 h-3.5" />
                    <span>High Conversion</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
