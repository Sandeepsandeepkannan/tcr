"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Code, Database, Layout, Megaphone, Sparkles } from "lucide-react";
import ProjectModal, { ProjectDetail } from "./ProjectModal";

const projectsData: (ProjectDetail & { categoryFilter: string; bgGradient: string })[] = [
  {
    id: "nexus-crm",
    title: "Nexus Enterprise CRM & Automated Sales Suite",
    category: "CRM & Automation",
    categoryFilter: "crm",
    client: "Nexus Global Logistics",
    description: "A custom multi-tenant CRM system designed for high-frequency lead routing, automated WhatsApp & email outreach, and real-time deal stage forecasting.",
    challenge: "The client lost 30% of sales leads due to manual spreadsheet routing and delayed response times across global branches.",
    solution: "We engineered an automated lead distribution engine with built-in SLA timers, WhatsApp API triggers, and real-time executive dashboards.",
    impact: ["Instant < 60s Lead Contact", "+210% Pipeline Velocity", "Zero Manual Data Entry"],
    technologies: ["Node.js", "React", "PostgreSQL", "WhatsApp Cloud API", "Tailwind CSS"],
    accentColor: "from-cyan-500 to-blue-600",
    bgGradient: "from-cyan-950/60 to-slate-950",
  },
  {
    id: "aura-luxury",
    title: "Aura E-Commerce & Brand Web Platform",
    category: "Websites",
    categoryFilter: "websites",
    client: "Aura Haute Couture",
    description: "Ultra-fast luxury e-commerce experience featuring 3D product previews, editorial layout typography, and sub-600ms global page load times.",
    challenge: "High cart abandonment rates on legacy WooCommerce setup due to slow mobile loading and generic templates.",
    solution: "We re-architected the entire storefront using Next.js with headless CMS, sub-second edge routing, and interactive visual luxury aesthetic.",
    impact: ["+380% Mobile Conversion", "520ms Global Latency", "4.9/5 User Satisfaction"],
    technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "Stripe API"],
    accentColor: "from-sky-400 to-indigo-600",
    bgGradient: "from-sky-950/60 to-slate-950",
  },
  {
    id: "vanguard-analytics",
    title: "Vanguard Cloud Fintech Analytics Engine",
    category: "Custom Software",
    categoryFilter: "software",
    client: "Vanguard Financial Capital",
    description: "High-throughput cloud analytics platform processing real-time market data, risk calculation models, and automated compliance reporting.",
    challenge: "Legacy financial dashboards froze when rendering large datasets containing millions of live transactional rows.",
    solution: "We built a web-assembly accelerated charting interface connected to microservice backend streams for instant data rendering.",
    impact: ["100K Events/Sec Handled", "99.99% Guaranteed Uptime", "Full SOC2 Compliance"],
    technologies: ["TypeScript", "Python / FastAPI", "Redis", "Docker", "Tailwind CSS"],
    accentColor: "from-indigo-500 to-purple-600",
    bgGradient: "from-indigo-950/60 to-slate-950",
  },
  {
    id: "elevate-growth",
    title: "Elevate Global Performance Marketing Campaign",
    category: "Digital Marketing",
    categoryFilter: "marketing",
    client: "Elevate Enterprise SaaS",
    description: "Omni-channel performance marketing, paid search acquisition, and retargeting funnel strategy for a B2B software firm.",
    challenge: "High cost-per-lead and poor lead qualification quality from generic ad campaigns.",
    solution: "We structured targeted account-based ad funnels combined with custom interactive landing pages and automated lead vetting.",
    impact: ["3.4x Increase in MQLs", "-38% Lower Cost/Lead", "$1.8M ARR Pipeline"],
    technologies: ["Google Ads", "Meta Ads", "HubSpot Automation", "Custom Landing Pages"],
    accentColor: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-950/60 to-slate-950",
  },
];

const categories = [
  { label: "All Projects", key: "all" },
  { label: "CRM & Automation", key: "crm" },
  { label: "Websites", key: "websites" },
  { label: "Custom Software", key: "software" },
  { label: "Digital Marketing", key: "marketing" },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProjectModal, setSelectedProjectModal] = useState<ProjectDetail | null>(null);

  const filteredProjects = activeCategory === "all"
    ? projectsData
    : projectsData.filter((p) => p.categoryFilter === activeCategory);

  return (
    <section id="projects" className="relative py-28 border-t border-slate-800/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-widest uppercase">
              <span>Featured Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Work That Speaks <span className="gradient-text-accent">for Itself.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-normal">
              Explore selected digital marketing campaigns, CRM platforms, custom web applications, and software systems built for market leaders.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat.key
                    ? "bg-cyan-400 text-black font-semibold shadow-md shadow-cyan-500/20"
                    : "bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel glass-panel-hover rounded-3xl border border-slate-800/90 overflow-hidden flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedProjectModal(project)}
            >
              {/* Top Visual Preview Box */}
              <div className={`relative h-64 sm:h-72 bg-gradient-to-br ${project.bgGradient} p-6 sm:p-8 flex flex-col justify-between overflow-hidden border-b border-slate-800/80`}>
                
                {/* Tech Line Grid overlay */}
                <div className="absolute inset-0 tech-line-grid opacity-30" />
                
                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700 text-xs font-mono text-cyan-300 backdrop-blur-md">
                    {project.category}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-slate-900/80 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:bg-cyan-400 group-hover:text-black group-hover:scale-110 transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Abstract Interactive Composition Graphics inside Card */}
                <div className="relative z-10 my-auto p-4 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-md space-y-2 group-hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      {project.client}
                    </span>
                    <span className="text-emerald-400 font-bold">CASE STUDY</span>
                  </div>
                  <p className="text-lg font-bold text-white tracking-tight line-clamp-1">
                    {project.title}
                  </p>
                </div>

                {/* Impact Pill */}
                <div className="relative z-10 flex items-center gap-2">
                  {project.impact.slice(0, 2).map((imp, i) => (
                    <span key={i} className="text-[11px] font-mono text-cyan-300 bg-cyan-950/80 border border-cyan-800/60 px-2.5 py-1 rounded-md">
                      {imp}
                    </span>
                  ))}
                </div>

              </div>

              {/* Bottom Content Body */}
              <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>

                {/* Tags & Action */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((t, i) => (
                      <span key={i} className="text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-semibold text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Explore Case Study →
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Modal render */}
        <ProjectModal
          project={selectedProjectModal}
          onClose={() => setSelectedProjectModal(null)}
        />

      </div>
    </section>
  );
}
