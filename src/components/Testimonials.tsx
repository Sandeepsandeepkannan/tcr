"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Vance",
    role: "Chief Technology Officer",
    company: "Nexus Global Logistics",
    imageInitials: "MV",
    rating: 5,
    quote: "TCR Technology transformed our sales pipeline. Their custom CRM solution reduced lead contact times from 4 hours to under 60 seconds. The level of engineering discipline and business understanding is exceptional.",
    service: "Custom CRM & Software",
  },
  {
    name: "Elena Rostova",
    role: "Founder & Creative Director",
    company: "Aura Haute Couture",
    imageInitials: "ER",
    rating: 5,
    quote: "Finding an agency that masters both luxury design aesthetics and lightning-fast web performance is extremely rare. TCR rebuilt our e-commerce platform and our mobile conversion rates jumped by 380%.",
    service: "Website Development",
  },
  {
    name: "David Sterling",
    role: "VP of Digital Growth",
    company: "Vanguard Capital",
    imageInitials: "DS",
    rating: 5,
    quote: "Their performance marketing and digital strategy gave us complete clarity on our customer acquisition cost. They don't just run ads; they build scalable lead generation engines that deliver predictable revenue.",
    service: "Digital Marketing",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 border-t border-slate-800/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Client Trust & <span className="gradient-text-accent">Measurable Impact.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Hear from leaders who partnered with TCR Technology to modernize their digital presence, automate sales workflows, and scale revenue.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-panel glass-panel-hover p-8 rounded-3xl border border-slate-800/90 relative flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-cyan-500/30 group-hover:text-cyan-400/50 transition-colors" />
                </div>

                {/* Quote */}
                <p className="text-slate-300 text-base leading-relaxed font-normal italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Client Info */}
              <div className="pt-6 border-t border-slate-800/80 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 p-[1px] shrink-0">
                  <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center font-extrabold text-cyan-300 text-sm">
                    {t.imageInitials}
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-base font-bold text-white truncate">{t.name}</h4>
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  </div>
                  <p className="text-xs text-slate-400 truncate">{t.role}, {t.company}</p>
                  <span className="inline-block mt-1 text-[10px] font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-800/40 px-2 py-0.5 rounded">
                    {t.service}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
