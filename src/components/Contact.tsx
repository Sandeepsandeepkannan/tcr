"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageCircle, Clock, ShieldCheck } from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Website Development",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const targetPhone = "919345053806";
    const textMessage = `*New Website Enquiry - TCR Technology*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone || "Not provided"}\n` +
      `*Company:* ${formData.company || "Not provided"}\n` +
      `*Service Required:* ${formData.service}\n\n` +
      `*Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(textMessage)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Open WhatsApp with pre-filled enquiry details
      window.open(whatsappUrl, "_blank");

      // Trigger confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#38bdf8", "#818cf8", "#c084fc", "#10b981"],
        });
      } catch (err) {
        console.log(err);
      }
    }, 600);
  };

  return (
    <section id="contact" className="relative py-28 border-t border-slate-800/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <span>Direct Engagement</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Let's Start a <span className="gradient-text-accent">Conversation.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Tell us about your goals, project scope, or business requirements. Our digital technology strategists will respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl relative">
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10 text-cyan-400" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">Enquiry Received!</h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto">
                      Thank you for contacting TCR Technology. We've routed your inquiry to our senior technology lead and will reach out shortly.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        company: "",
                        service: "Website Development",
                        message: "",
                      });
                    }}
                    className="px-6 py-2.5 text-xs font-mono font-semibold text-black bg-cyan-400 rounded-full hover:bg-cyan-300 transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase text-slate-300 font-semibold tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase text-slate-300 font-semibold tracking-wider">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase text-slate-300 font-semibold tracking-wider">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                      />
                    </div>

                    {/* Company */}
                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase text-slate-300 font-semibold tracking-wider">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Acme Inc."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase text-slate-300 font-semibold tracking-wider">
                      Primary Service Required *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                    >
                      <option value="Digital Marketing">01 — Digital Marketing & Strategy</option>
                      <option value="Social Media Marketing">02 — Social Media Marketing & Branding</option>
                      <option value="CRM Solutions">03 — CRM Solutions & Automation</option>
                      <option value="Website Development">04 — Website Development</option>
                      <option value="Custom Software Development">05 — Custom Software Development</option>
                      <option value="Full Agency Growth Partnership">06 — Full Agency Digital Growth Partnership</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase text-slate-300 font-semibold tracking-wider">
                      Project Scope / Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your target outcomes, timeline, or specific requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-full text-base font-semibold text-black bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 shadow-[0_0_25px_rgba(56,189,248,0.3)] hover:shadow-[0_0_40px_rgba(56,189,248,0.5)] transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Securely...</span>
                    ) : (
                      <>
                        <span>Send Enquiry</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-slate-500 font-mono">
                    Protected by NDA • Your information is strictly confidential
                  </p>
                </form>
              )}

            </div>
          </div>

          {/* Right Column: Contact Details & Direct Connect */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Box */}
            <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Direct Contact Points
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href="mailto:tcrtechnology@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400">Email Us</span>
                    <p className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      tcrtechnology@gmail.com
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+919345053806"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400">Call Us</span>
                    <p className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      +91 93450 53806
                    </p>
                  </div>
                </a>

                {/* Location */}
                
              </div>

              {/* WhatsApp Quick Connect */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                  Instant Support
                </span>
                <a
                  href="https://wa.me/+919345053806"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-2xl bg-emerald-950/60 border border-emerald-700/60 text-emerald-400 font-semibold text-sm hover:bg-emerald-900/60 transition-colors shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 fill-emerald-400 text-black" />
                  <span>Chat directly on WhatsApp</span>
                </a>
              </div>

            </div>

            {/* SLA Commitment */}
            

          </div>

        </div>

      </div>
    </section>
  );
}
