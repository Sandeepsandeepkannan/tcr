"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowUpRight, Cpu, Layers, BarChart } from "lucide-react";

export interface ProjectDetail {
  id: string;
  title: string;
  category: string;
  client: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string[];
  technologies: string[];
  accentColor: string;
}

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl glass-panel p-6 sm:p-10 rounded-3xl border border-slate-700 shadow-2xl z-10 overflow-hidden space-y-8 max-h-[90vh] overflow-y-auto no-scrollbar"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">
              {project.category} • Client Case Study
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm font-mono text-slate-400">
              Client: <span className="text-slate-200">{project.client}</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-base text-slate-300 leading-relaxed font-normal">
            {project.description}
          </p>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-rose-400 uppercase font-bold">
                <Layers className="w-4 h-4" />
                <span>The Challenge</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase font-bold">
                <Cpu className="w-4 h-4" />
                <span>The Solution</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Impact Results */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase font-bold">
              <BarChart className="w-4 h-4" />
              <span>Measurable Results</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.impact.map((res, i) => (
                <div key={i} className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/40 flex items-center gap-2 text-xs text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>{res}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span key={i} className="px-3 py-1 text-xs font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-800/50 rounded-lg">
                  {tech}
                </span>
              ))}
            </div>

            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-black bg-cyan-400 rounded-full hover:bg-cyan-300 transition-colors shadow-lg"
            >
              <span>Build Similar Solution</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
