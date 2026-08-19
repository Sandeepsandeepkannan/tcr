"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Lightbulb, ShieldCheck, TrendingUp } from "lucide-react";

const principles = [
  {
    icon: Compass,
    title: "Strategy First",
    description: "We thoroughly understand your business model, customer journey, and revenue drivers before writing a single line of code or designing campaigns.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    description: "We deploy modern technologies, intelligent workflows, and creative thinking to build solutions that keep you steps ahead of competitors.",
  },
  {
    icon: ShieldCheck,
    title: "Relentless Execution",
    description: "We focus obsessively on build quality, sub-second performance, strict security standards, and intuitive user experiences.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Growth",
    description: "We don't build one-off visual projects. We engineer resilient digital ecosystems designed to scale predictably as your business expands.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 border-t border-slate-800/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-6">
          <span>About TCR Technology</span>
        </div>

        {/* Split Layout Header Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Left Column: Large Editorial Statement */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Technology With a{" "}
              <span className="gradient-text-accent">Business Mindset.</span>
            </h2>
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 border-l-4 border-l-cyan-400">
              <p className="text-lg text-slate-200 font-medium italic leading-relaxed">
                "Modern code and stunning creative marketing mean nothing unless they measurably increase your company's market share, operational efficiency, and revenue."
              </p>
              <p className="mt-3 text-xs font-mono text-cyan-400 uppercase tracking-widest">
                — TCR Philosophy
              </p>
            </div>
          </motion.div>

          {/* Right Column: Narrative Description */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed font-normal"
          >
            <p>
              At TCR Technology, we bridge the gap between creative digital marketing and engineering-grade custom software development. We serve ambitious startups, growth-stage businesses, and established enterprises seeking modern digital leadership.
            </p>
            <p>
              By unifying digital strategy, social media branding, custom CRM pipelines, and scalable software under one unified roadmap, we eliminate fragmented vendors and deliver cohesive business growth.
            </p>
          </motion.div>

        </div>

        {/* 4 Core Principles Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p, index) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800/80 space-y-4 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-normal">
                    {p.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-cyan-400/80">
                  <span>0{index + 1} / PRINCIPLE</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
