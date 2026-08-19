"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Compass, Palette, Code, Rocket, TrendingUp } from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Discover",
    icon: Search,
    subtitle: "Understanding your business DNA",
    description: "We conduct deep-dive strategic workshops to analyze your target audience, revenue mechanics, competitive landscape, and key performance goals.",
    tags: ["Requirements Gathering", "Audience Analysis", "Competitive Benchmarking"],
  },
  {
    step: "02",
    title: "Strategize",
    icon: Compass,
    subtitle: "Architecting the Growth Blueprint",
    description: "We define the complete technology stack, user journeys, campaign channels, CRM pipelines, and technical milestones for rapid execution.",
    tags: ["Tech Architecture", "Campaign Funnels", "KPI Milestones"],
  },
  {
    step: "03",
    title: "Design",
    icon: Palette,
    subtitle: "Creating Premium Experiences",
    description: "Our design team crafts world-class, human-centered UI/UX design systems, brand identities, and high-converting marketing creatives.",
    tags: ["UI/UX Design", "Interactive Prototypes", "Brand Identity"],
  },
  {
    step: "04",
    title: "Develop",
    icon: Code,
    subtitle: "Building Scalable Solutions",
    description: "We engineer pixel-perfect frontend interfaces, clean backend microservices, robust CRM workflows, and performant digital campaigns.",
    tags: ["Clean Code", "API Integrations", "Security Audits"],
  },
  {
    step: "05",
    title: "Launch",
    icon: Rocket,
    subtitle: "Flawless Deployment & Testing",
    description: "We execute rigorous QA testing, load performance checks, campaign launch configurations, and smooth zero-downtime deployment.",
    tags: ["QA & Load Testing", "Live Deployment", "Conversion Tracking"],
  },
  {
    step: "06",
    title: "Grow",
    icon: TrendingUp,
    subtitle: "Continuous Optimization & Scaling",
    description: "Post-launch, we continuously monitor performance, run A/B conversion tests, expand campaign reach, and upgrade software as your business grows.",
    tags: ["Performance Audits", "Continuous A/B Testing", "Scale Management"],
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-28 border-t border-slate-800/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <span>Execution Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            From Idea to <span className="gradient-text-accent">Impact.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            A disciplined, 6-phase engineering and marketing workflow engineered to deliver predictable quality and measurable business value.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel glass-panel-hover p-8 rounded-3xl border border-slate-800/90 relative space-y-6 flex flex-col justify-between group"
              >
                {/* Step Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-extrabold font-mono text-cyan-400/90 group-hover:text-cyan-300 transition-colors">
                      {step.step}
                    </span>
                    <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-1">
                      {step.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-2">
                    {step.tags.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-[11px] font-mono text-slate-400 bg-slate-900 border border-slate-800 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
