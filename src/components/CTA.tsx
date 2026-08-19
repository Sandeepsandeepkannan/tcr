"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageSquare, PhoneCall } from "lucide-react";

export default function CTA() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elem = document.getElementById("contact");
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
    <section className="relative py-28 border-t border-slate-800/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Box */}
        <div className="relative glass-panel rounded-3xl p-10 sm:p-16 border border-cyan-500/30 overflow-hidden shadow-2xl text-center space-y-8">
          
          {/* Ambient Glows */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 tech-grid-pattern opacity-40 pointer-events-none" />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-widest uppercase"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Initiate Transformation</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto"
          >
            Ready to Build Something{" "}
            <span className="gradient-text-accent">Exceptional?</span>
          </motion.h2>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            Let's turn your ideas into digital experiences, technology solutions and growth opportunities.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-5 pt-4"
          >
            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-black bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 rounded-full shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:shadow-[0_0_50px_rgba(56,189,248,0.6)] hover:scale-105 transition-all duration-300 group"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-200 bg-slate-900/90 border border-slate-700 rounded-full hover:bg-slate-800 hover:border-slate-500 transition-all duration-300"
            >
              <MessageSquare className="w-5 h-5 mr-2 text-cyan-400" />
              <span>Talk to Us</span>
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
