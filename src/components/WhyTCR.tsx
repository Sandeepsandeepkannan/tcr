"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Cpu, Sparkles, Handshake, ShieldCheck, Zap, Award, Clock } from "lucide-react";

const whyUsPoints = [
  {
    icon: Target,
    title: "Business First",
    description: "We don't build software or launch marketing campaigns in a vacuum. Every decision is anchored to your revenue goals, customer retention, and business growth.",
  },
  {
    icon: Cpu,
    title: "Modern Technology",
    description: "We leverage cutting-edge frontend frameworks, cloud microservices, and modern CRM APIs to build fast, secure, and future-proof digital assets.",
  },
  {
    icon: Sparkles,
    title: "Creative Thinking",
    description: "We seamlessly merge high-end editorial aesthetics and compelling brand storytelling with data-driven performance engineering.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description: "We don't hand off code and disappear. We act as your ongoing digital technology partner, continuously optimizing and scaling your assets.",
  },
];

const qualitativeHighlights = [
  {
    icon: ShieldCheck,
    title: "Enterprise Quality",
    detail: "100% Custom Codebase & High Security Standards",
  },
  {
    icon: Zap,
    title: "Sub-Second Speeds",
    detail: "Ultra-Fast Load Times for Higher Conversion",
  },
  {
    icon: Award,
    title: "Transparent Workflow",
    detail: "Direct Access to Engineers & Strategists",
  },
  {
    icon: Clock,
    title: "Dedicated Support",
    detail: "Proactive Monitoring & System Optimization",
  },
];

export default function WhyTCR() {
  return (
    <section id="whytcr" className="relative py-28 border-t border-slate-800/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <span>The TCR Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Why Leading Businesses Choose <span className="gradient-text-accent">TCR Technology.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            We combine high-end agency creativity with engineering precision and strategic business clarity.
          </p>
        </div>

        {/* 4 Major Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {whyUsPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel glass-panel-hover p-8 rounded-3xl border border-slate-800/90 space-y-4 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300 shadow-lg shadow-cyan-500/10">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {point.title}
                </h3>

                <p className="text-base text-slate-300 leading-relaxed font-normal">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Qualitative Standards Highlights Strip */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualitativeHighlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {item.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
