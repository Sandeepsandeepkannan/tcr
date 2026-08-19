"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, TrendingUp, Users, Cpu, Rocket, ArrowRight, CheckCircle2, ShieldAlert } from "lucide-react";

interface SolutionItem {
  id: string;
  tag: string;
  problem: string;
  solutionTitle: string;
  description: string;
  icon: React.ElementType;
  keyResults: string[];
  features: string[];
  mockUI: {
    title: string;
    metrics: { label: string; value: string; change: string }[];
    status: string;
  };
}

const solutionsData: SolutionItem[] = [
  {
    id: "digital-presence",
    tag: "BRAND & REACH",
    problem: "Outdated brand identity & low online engagement?",
    solutionTitle: "Build Your Digital Presence",
    description: "We craft modern visual identity, high-conversion responsive websites, and engaging social media strategies that command attention in crowded markets.",
    icon: Monitor,
    keyResults: ["+250% Organic Brand Impressions", "Sub-second Page Load Speeds", "Unified Multi-Channel Branding"],
    features: ["Custom Web Design", "Brand Guidelines", "Social Content Engines", "SEO Foundation"],
    mockUI: {
      title: "Digital Reach Dashboard",
      metrics: [
        { label: "Site Visitors", value: "142.8K", change: "+184%" },
        { label: "Brand Equity", value: "98/100", change: "Top Tier" },
      ],
      status: "Active Web & Brand Engine",
    },
  },
  {
    id: "lead-generation",
    tag: "REVENUE GROWTH",
    problem: "Inconsistent lead flow & high customer acquisition costs?",
    solutionTitle: "Generate More Leads",
    description: "We design multi-channel paid acquisition campaigns, high-converting landing pages, and lead capture funnels that turn visitors into sales opportunities.",
    icon: TrendingUp,
    keyResults: ["3.5x Average Conversion Lift", "-40% Lower Cost Per Acquisition", "Automated Lead Scoring"],
    features: ["Paid Search & Social Ads", "Targeted Landing Pages", "Lead Magnet Funnels", "Conversion Rate Optimization"],
    mockUI: {
      title: "Campaign Acquisition Engine",
      metrics: [
        { label: "Qualified Leads", value: "1,240/mo", change: "+310%" },
        { label: "Avg CAC Reduction", value: "$42.50", change: "-42%" },
      ],
      status: "Live Paid Funnels Active",
    },
  },
  {
    id: "manage-customers",
    tag: "CLIENT RETENTION",
    problem: "Scattered customer data & missed follow-ups?",
    solutionTitle: "Manage Customers Better",
    description: "We deploy custom CRM architecture and intelligent pipeline automation so your sales team never drops a lead and customers receive instant responses.",
    icon: Users,
    keyResults: ["100% Pipeline Visibility", "Zero Lost Follow-ups", "Seamless CRM Integrations"],
    features: ["Custom CRM Pipelines", "Lead Nurturing Automations", "Sales Activity Dashboards", "WhatsApp & Email Sync"],
    mockUI: {
      title: "CRM Sales Pipeline",
      metrics: [
        { label: "Pipeline Value", value: "$2.4M", change: "+92%" },
        { label: "Lead Response Time", value: "< 2 mins", change: "Instant" },
      ],
      status: "CRM Automation Online",
    },
  },
  {
    id: "automate-business",
    tag: "OPERATIONAL EFFICIENCY",
    problem: "Repetitive manual tasks eating up valuable team hours?",
    solutionTitle: "Automate Your Business",
    description: "We develop custom internal tools, workflow automation engines, and cloud software that eliminate manual overhead and streamline daily operations.",
    icon: Cpu,
    keyResults: ["70% Reduction in Manual Tasks", "Error-Free Operations", "Real-Time Data Sync"],
    features: ["Custom Business Dashboards", "API Integration Bridges", "Automated Reporting", "Document Workflows"],
    mockUI: {
      title: "Operational Automation Suite",
      metrics: [
        { label: "Hours Saved / Mo", value: "320 hrs", change: "Automated" },
        { label: "Process Velocity", value: "10x", change: "Max Speed" },
      ],
      status: "Automation Engine Running",
    },
  },
  {
    id: "scale-operations",
    tag: "ENTERPRISE SCALING",
    problem: "Legacy systems restricting business expansion?",
    solutionTitle: "Scale Your Operations",
    description: "We build scalable microservice architectures, enterprise SaaS applications, and modern cloud infrastructure engineered around your long-term business goals.",
    icon: Rocket,
    keyResults: ["Infinite Horizontal Scalability", "Enterprise-Grade SLA", "Future-Proof Architecture"],
    features: ["Cloud Microservices", "SaaS Product Engineering", "Database Scaling", "24/7 System Monitoring"],
    mockUI: {
      title: "Cloud Infrastructure Control",
      metrics: [
        { label: "System Uptime", value: "99.99%", change: "SLA Guaranteed" },
        { label: "API Latency", value: "24ms", change: "Ultra Fast" },
      ],
      status: "Cluster Health Optimal",
    },
  },
];

export default function Solutions() {
  const [selectedSolution, setSelectedSolution] = useState<string>(solutionsData[0].id);

  return (
    <section id="solutions" className="relative py-28 border-t border-slate-800/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <span>Problem - Solution Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            High-Impact Solutions for{" "}
            <span className="gradient-text-accent">Real Business Challenges.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Whether you need to capture more market share, automate complex operations, or build enterprise software, we engineer tailored technology solutions.
          </p>
        </div>

        {/* Tab Buttons bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar mb-8">
          {solutionsData.map((item) => {
            const isSelected = selectedSolution === item.id;
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => setSelectedSolution(item.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-medium text-xs sm:text-sm whitespace-nowrap transition-all duration-300 ${
                  isSelected
                    ? "bg-cyan-500 text-black font-semibold shadow-lg shadow-cyan-500/25"
                    : "bg-slate-900/60 border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.solutionTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Visual Solution Display Block */}
        <div className="relative">
          {solutionsData.map((item) => {
            if (item.id !== selectedSolution) return null;
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl items-center"
              >
                {/* Left Side: Detail & Value Proposition */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Problem Callout */}
                  <div className="flex items-center gap-2.5 text-xs font-mono text-amber-400 bg-amber-950/40 border border-amber-800/40 px-3.5 py-1.5 rounded-lg w-fit">
                    <ShieldAlert className="w-4 h-4" />
                    <span>CHALLENGE: {item.problem}</span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">
                      {item.tag}
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
                      <Icon className="w-8 h-8 text-cyan-400" />
                      {item.solutionTitle}
                    </h3>
                  </div>

                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {item.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action CTA */}
                  <div className="pt-4 border-t border-slate-800 flex items-center gap-4">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-black bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                    >
                      <span>Deploy This Solution</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                </div>

                {/* Right Side: Interactive Mock UI Panel */}
                <div className="lg:col-span-5">
                  <div className="bg-[#080c19] border border-slate-700/70 rounded-2xl p-6 shadow-2xl space-y-6 relative overflow-hidden">
                    
                    {/* Top bar */}
                    <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="text-xs font-mono text-slate-300 font-bold">
                          {item.mockUI.title}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
                        {item.mockUI.status}
                      </span>
                    </div>

                    {/* Metrics Cards */}
                    <div className="grid grid-cols-2 gap-4">
                      {item.mockUI.metrics.map((m, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                          <p className="text-xs text-slate-400">{m.label}</p>
                          <p className="text-xl font-extrabold text-white">{m.value}</p>
                          <p className="text-[11px] font-mono text-emerald-400">{m.change}</p>
                        </div>
                      ))}
                    </div>

                    {/* Impact Highlights list */}
                    <div className="space-y-2 pt-2 border-t border-slate-800/80">
                      <p className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                        Measured Impact:
                      </p>
                      {item.keyResults.map((kr, idx) => (
                        <div key={idx} className="flex items-center justify-between text-xs text-slate-300 bg-slate-900/40 p-2.5 rounded-lg border border-slate-800/50">
                          <span>{kr}</span>
                          <span className="text-cyan-400 font-bold">✓ Verified</span>
                        </div>
                      ))}
                    </div>

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
