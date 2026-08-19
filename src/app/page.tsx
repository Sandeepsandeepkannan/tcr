import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Solutions from "@/components/Solutions";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import WhyTCR from "@/components/WhyTCR";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundEffect from "@/components/BackgroundEffect";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#05070E] text-slate-100 selection:bg-cyan-400 selection:text-black overflow-x-hidden">
      {/* Background Ambient Glowing Effects & Grid Overlay */}
      <BackgroundEffect />

      {/* Sticky Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* About Section */}
      <About />

      {/* Solutions Section */}
      <Solutions />

      {/* Process Section */}
      <Process />

      {/* Projects Section */}
      {/* <Projects /> */}

      {/* Why TCR Section */}
      <WhyTCR />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Final Call To Action */}
      <CTA />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
