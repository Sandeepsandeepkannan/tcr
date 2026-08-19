"use client";

import React from "react";

export default function BackgroundEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle tech grid lines overlay */}
      <div className="absolute inset-0 tech-line-grid opacity-40" />

      {/* Top Ambient Glow spot */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-sky-500/10 via-indigo-500/5 to-transparent blur-[120px] rounded-full animate-pulse-slow" />

      {/* Side Glow Orbs */}
      <div className="absolute top-[30%] -left-32 w-[500px] h-[500px] bg-cyan-500/5 blur-[140px] rounded-full" />
      <div className="absolute top-[65%] -right-32 w-[600px] h-[600px] bg-indigo-500/5 blur-[160px] rounded-full" />

      {/* Radial vignette mask */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,7,14,0.75)_80%)]" />
    </div>
  );
}
