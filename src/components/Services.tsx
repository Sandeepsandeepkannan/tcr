"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Megaphone, Share2, Database, Layout, Code2, ArrowUpRight, CheckCircle2, ChevronRight } from "lucide-react";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  icon: React.ElementType;
  accentColor: string;
  highlights: string[];
  deliverables: string[];
}

const servicesData: ServiceItem[] = [
  {
    id: "digital-marketing",
    number: "01",
    title: "Digital Marketing",
    shortDesc: "SEO, paid campaigns, lead generation, digital strategy, and performance marketing to maximize your ROI.",
    icon: Megaphone,
    accentColor: "from-cyan-500 to-blue-500",
    highlights: ["Search Engine Optimization (SEO)", "PPC & Paid Search Campaigns", "High-Converting Lead Funnels", "Data-Driven Performance Analytics"],
    deliverables: ["Strategy Blueprint", "Campaign Management", "Monthly Growth Audit"],
  },
  {
    id: "social-media",
    number: "02",
    title: "Social Media Marketing",
    shortDesc: "Social media strategy, creative content, strategic branding, audience growth, and community engagement.",
    icon: Share2,
    accentColor: "from-sky-400 to-indigo-500",
    highlights: ["Multi-Channel Content Strategy", "Brand Identity & Visual Design", "Audience Targeting & Growth", "Community Engagement & Outreach"],
    deliverables: ["Content Calendar", "Creative Assets", "Engagement Analytics"],
  },
  {
    id: "crm-solutions",
    number: "03",
    title: "CRM Solutions",
    shortDesc: "Customer management, lead tracking, workflow automation, sales pipelines, and custom CRM systems.",
    icon: Database,
    accentColor: "from-indigo-500 to-purple-500",
    highlights: ["Lead Pipeline Automation", "Sales Force Automation", "Customer Lifecycle Tracking", "Custom CRM Integration & API"],
    deliverables: ["Custom Workflow Setup", "Staff Onboarding", "System Maintenance"],
  },
  {
    id: "website-development",
    number: "04",
    title: "Website Development",
    shortDesc: "Modern, responsive, ultra-fast, and conversion-focused websites engineered for businesses and luxury brands.",
    icon: Layout,
    accentColor: "from-cyan-400 to-emerald-500",
    highlights: ["Custom UI/UX Experience", "Mobile-First Responsive Layouts", "Lightning Fast Performance", "SEO-Optimized Structure"],
    deliverables: ["Web Application", "CMS Integration", "Optimization Audit"],
  },
  {
    id: "software-development",
    number: "05",
    title: "Software Development",
    shortDesc: "Custom business software, interactive dashboards, cloud automation systems, and enterprise scalable applications.",
    icon: Code2,
    accentColor: "from-purple-500 to-sky-400",
    highlights: ["SaaS & Business Dashboards", "Cloud Native Architecture", "API & Database Systems", "Process Automation Engines"],
    deliverables: ["Custom Source Code", "Scalable Infrastructure", "Long-term Maintenance"],
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState<string>(servicesData[0].id);

  return (
    <section id="services" className="relative py-28 overflow-hidden border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Everything Your Business Needs to{" "}
            <span className="gradient-text-accent">Grow Digitally.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            We seamlessly unify strategic digital marketing, creative storytelling, intelligent CRM workflows, and custom technology solutions under one cohesive roof.
          </p>
        </div>

        {/* Interactive Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Service Selector List (Left Column) */}
          <div className="lg:col-span-5 space-y-3">
            {servicesData.map((service) => {
              const Icon = service.icon;
              const isSelected = activeService === service.id;

              return (
                <motion.button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                    isSelected
                      ? "bg-slate-900/90 border-cyan-500/50 shadow-lg shadow-cyan-500/10 text-white"
                      : "bg-slate-900/30 border-slate-800/80 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                  }`}
                >
                  <div className={`p-3 rounded-xl border ${
                    isSelected
                      ? "bg-cyan-500/15 border-cyan-500/30 text-cyan-400"
                      : "bg-slate-800/50 border-slate-700/50 text-slate-400"
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-semibold text-cyan-400/90">
                        {service.number}
                      </span>
                      <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? "translate-x-1 text-cyan-400" : "opacity-0"}`} />
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                      {service.shortDesc}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Active Service Deep Dive Panel (Right Column) */}
          <div className="lg:col-span-7">
            {servicesData.map((service) => {
              if (service.id !== activeService) return null;
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="glass-panel p-8 sm:p-10 rounded-3xl border border-cyan-500/30 shadow-2xl relative overflow-hidden space-y-8"
                >
                  {/* Subtle Background Accent Gradient */}
                  <div className={`absolute -top-24 -right-24 w-72 h-72 bg-gradient-to-br ${service.accentColor} opacity-10 blur-3xl rounded-full pointer-events-none`} />

                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                    <div className="flex items-center gap-4">
                      <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                        <Icon className="w-8 h-8" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-cyan-400 font-semibold tracking-widest">
                          SERVICE {service.number}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                    {service.shortDesc}
                  </p>

                  {/* Highlights Grid */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold">
                      Key Focus Areas & Solutions
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.highlights.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-sm text-slate-200"
                        >
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables & Action */}
                  <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-400">Deliverables:</span>
                      <div className="flex flex-wrap gap-2">
                        {service.deliverables.map((del, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 text-xs font-medium text-cyan-300 bg-cyan-950/70 border border-cyan-800/60 rounded-md"
                          >
                            {del}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-black bg-cyan-400 rounded-full hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20"
                    >
                      <span>Inquire About {service.title}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
