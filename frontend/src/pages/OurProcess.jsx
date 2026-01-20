// Navora Ads — Our Process
// Global | Corporate | Consulting-Grade
// React 19 + Tailwind CSS
import { motion } from "framer-motion";
import React from "react";
import { Helmet } from "react-helmet-async";
import {
  FaFacebook,
  FaGoogle,
  FaChartLine,
  FaTags,
  FaWordpress,
  FaShopify,
  FaRobot,
  FaCogs
} from "react-icons/fa";

import { SiSemrush } from "react-icons/si";
import Tilt3D from "../components/Tilt3D";
import { TiltCard } from "../components/TiltCard";
import {
  Building2,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Briefcase
} from "lucide-react"

export default function OurProcess() {
  return (
    <main className="bg-[#0B0D10] text-[#F5F7FA]">

      {/* SEO */}
      <Helmet>
        <title>Our Process | How Navora Ads Builds Scalable Growth Systems</title>
        <meta
          name="description"
          content="Discover how Navora Ads designs and executes performance-driven digital growth systems through research, strategy, execution, and optimisation."
        />
        <link rel="canonical" href="https://navoraads.com/our-process" />
      </Helmet>

      {/* 1. HERO */}
      <section className="pt-44 pb-24 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-widest text-xs text-white/50 mb-6">
            Our Process
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            A structured system for
            <br /> predictable growth.
          </h1>
          <p className="mt-8 text-white/60 text-xl max-w-4xl mx-auto">
            We don’t run random campaigns. We design, execute, and optimise
            performance-driven growth systems built for scalability.
          </p>
        </div>
      </section>

      {/* 2. PHILOSOPHY */}
      <section className=" py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">
            Our Growth Philosophy
          </h2>
          <p className="text-white/60 text-lg max-w-4xl mx-auto">
            Navora Ads operates like a digital growth consulting firm. Every
            engagement is guided by performance, data, and long-term scalability
            — not vanity metrics or short-term experiments.
          </p>
        </div>
      </section>

      {/* 3. PROCESS STEPS */}
      <section className="py-20 px-6">
  <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">

    {[
      {
        step: "01",
        title: "Research & Diagnosis",
        desc: "Market analysis, competitor benchmarking, audience intent mapping, funnel review, and data diagnostics.",
      },
      {
        step: "02",
        title: "Strategy & Architecture",
        desc: "Channel selection, funnel design, KPI definition, budget allocation, and tracking architecture.",
      },
      {
        step: "03",
        title: "Execution & Deployment",
        desc: "Campaign launch, creative testing, automation setup, CRM integration, and performance monitoring.",
      },
      {
        step: "04",
        title: "Scale & Optimisation",
        desc: "Budget scaling, CPL optimisation, conversion improvements, and system refinement.",
      },
    ].map(({ step, title, desc }) => (
      <motion.div
        key={step}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileTap={{ scale: 0.98 }}
        className="group relative h-full cursor-pointer"
      >
        <Tilt3D>
          <TiltCard
            className="
              relative h-full min-h-[260px]
              flex flex-col justify-center text-center
              p-8

              border border-white/10
              bg-[#0B0D10]
              rounded-2xl

              transition-all duration-300 ease-out
              group-hover:border-[#2F8CFF]/50
              group-hover:shadow-[0_0_45px_rgba(47,140,255,0.22)]
              active:border-[#2F8CFF]/60
              active:shadow-[0_0_45px_rgba(47,140,255,0.28)]
            "
          >
            {/* GLOW SWEEP LINE */}
            <span
              className="
                pointer-events-none absolute inset-0
                rounded-2xl
                opacity-0 group-hover:opacity-100 group-active:opacity-100
                transition-opacity duration-300
              "
              style={{
                background:
                  "linear-gradient(120deg, transparent 30%, rgba(47,140,255,0.35), transparent 70%)",
              }}
            />

            {/* STEP NUMBER */}
            <div className="relative z-10 text-[#2F8CFF]/80 text-sm font-semibold tracking-widest mb-3">
              {step}
            </div>

            {/* TITLE */}
            <h3 className="relative z-10 text-lg font-medium transition-colors duration-300 group-hover:text-white">
              {title}
            </h3>

            {/* SEPARATOR */}
            <div className="relative z-10 mx-auto my-4 h-[1px] w-12 bg-white/20 transition-all duration-300 group-hover:w-20 group-hover:bg-[#2F8CFF]/70" />

            {/* DESCRIPTION */}
            <p className="relative z-10 text-sm text-white/60 leading-relaxed transition-colors duration-300 group-hover:text-white/85">
              {desc}
            </p>
          </TiltCard>
        </Tilt3D>
      </motion.div>
    ))}

  </div>
</section>

      {/* 4. WHAT MAKES OUR PROCESS DIFFERENT */}
      <section className="py-20 px-6 relative overflow-hidden">
  {/* background signal */}
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(47,140,255,0.06),transparent_65%)]" />

  <div className="relative max-w-5xl mx-auto text-center">
    <h2 className="text-3xl font-semibold mb-12">
      What Makes Our Process Different
    </h2>

    <div className="grid md:grid-cols-3 gap-6 text-sm">
      {[
        "Systems-first approach, not isolated tactics",
        "Performance measured by lead quality and ROI",
        "Data-backed decisions, not assumptions",
        "Scalability built into every campaign",
        "Automation and CRM-driven execution",
        "Transparent reporting and accountability",
      ].map((text, i) => (
        <motion.div
          key={text}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="group relative"
        >
          <div
            className="
              relative
              h-full
              rounded-xl
              p-6
              bg-[#0B0D10]
              border border-white/10
              text-white/70
              transition-all duration-300
              hover:border-[#2F8CFF]/50
              hover:text-white
            "
          >
            {/* PULSE RING */}
            <span
              className="
                pointer-events-none
                absolute inset-0
                rounded-xl
                opacity-0
                group-hover:opacity-100
                animate-[pulse_2.5s_ease-in-out_infinite]
                bg-[radial-gradient(circle_at_center,rgba(47,140,255,0.12),transparent_65%)]
              "
            />

            {/* DIRECTIONAL HIGHLIGHT */}
            <span
              className="
                pointer-events-none
                absolute left-0 top-0 h-full w-[2px]
                bg-[#2F8CFF]/40
                opacity-0
                group-hover:opacity-100
                transition-opacity duration-300
              "
            />

            {/* CONTENT */}
            <p className="relative z-10 leading-relaxed">
              {text}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* 5. TOOLS & PLATFORMS */}
      <section className="py-20 px-6 text-center">
  <h2 className="text-3xl font-semibold mb-6">
    Platforms & Technology Ecosystem
  </h2>

  <p className="text-white/60 max-w-3xl mx-auto">
    Our process is executed across industry-standard platforms and tools,
    ensuring compliance, scalability, and performance.
  </p>

  <div className="mt-14 flex flex-wrap justify-center gap-5">
    {[
      { label: "Meta Ads", Icon: FaFacebook, color: "#1877F2" },
      { label: "Google Ads", Icon: FaGoogle, color: "#4285F4" },
      { label: "Google Analytics", Icon: FaChartLine, color: "#F9AB00" },
      { label: "Google Tag Manager", Icon: FaTags, color: "#246FDB" },
      { label: "SEMrush", Icon: SiSemrush, color: "#FF642D" },
      { label: "WordPress", Icon: FaWordpress, color: "#21759B" },
      { label: "Shopify", Icon: FaShopify, color: "#95BF47" },
      { label: "CRM & Automation", Icon: FaCogs, color: "#8B5CF6" },
      { label: "AI & Analytics Tools", Icon: FaRobot, color: "#22C55E" },
    ].map(({ label, Icon, color }) => (
      <div
        key={label}
        className="
          group
          flex items-center gap-3
          px-6 py-3
          rounded-full
          border border-white/10
          bg-[#0B0D10]
          text-sm text-white/70
          transition-all duration-300
          hover:border-white/30
          hover:-translate-y-1
          hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]
        "
      >
        {/* Color Icon */}
        <Icon
          size={18}
          style={{ color }}
          className="
            transition-transform duration-300
            group-hover:scale-110
          "
        />

        <span className="whitespace-nowrap">{label}</span>
      </div>
    ))}
  </div>
</section>

      {/* 6. WHO THIS PROCESS IS FOR */}
      <section className="py-20 px-6">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl font-semibold mb-8">
      Who This Process Is Designed For
    </h2>

    <p className="text-white/60 text-lg max-w-4xl mx-auto">
      This structured approach is ideal for businesses that value clarity,
      performance, and sustainable growth — not shortcuts.
    </p>

    {/* CARDS */}
    <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[
        {
          label: "Real Estate Developers & Builders",
          Icon: Building2,
        },
        {
          label: "Educational Institutions & Training Brands",
          Icon: GraduationCap,
        },
        {
          label: "Healthcare & Clinics",
          Icon: HeartPulse,
        },
        {
          label: "Ecommerce & D2C Brands",
          Icon: ShoppingBag,
        },
        {
          label: "Service-Based Businesses",
          Icon: Briefcase,
        },
      ].map(({ label, Icon }) => (
        <div
          key={label}
          className="
            group
            flex items-center gap-4
            rounded-xl
            border border-white/10
            bg-[#0B0D10]
            px-6 py-5
            text-left

            transition-all duration-300
            hover:border-[#2F8CFF]/40
            hover:shadow-[0_0_30px_rgba(47,140,255,0.15)]
          "
        >
          {/* ICON */}
          <div
            className="
              flex h-10 w-10 items-center justify-center
              rounded-full
              bg-[#2F8CFF]/10
            "
          >
            <Icon className="h-5 w-5 text-[#2F8CFF]" />
          </div>

          {/* TEXT */}
          <p className="text-sm text-white/80 leading-snug">
            {label}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* 7. CTA */}
      <section className=" py-20 px-6 text-center">
        <h2 className="text-4xl font-semibold">
          Ready to Build a Scalable Growth System?
        </h2>
        <p className="mt-6 text-white/60 max-w-3xl mx-auto text-lg">
          We partner with a limited number of brands to maintain execution
          quality and performance standards.
        </p>
        <a
          href="/contact"
          className="shimmer-btn inline-block mt-12 rounded-full bg-[#2F8CFF] px-16 py-4 text-sm font-medium"
        >
          Book a Strategy Call
        </a>
      </section>

      {/* 8. DISCLAIMER */}
      <section className=" py-8 px-6 text-center">
        <p className="text-sm text-white/40 max-w-3xl mx-auto">
          Results vary based on industry, market conditions, budget, competition,
          and execution scope. This process does not guarantee specific outcomes.
        </p>
      </section>

    </main>
  );
}

function Step({ step, title, desc }) {
  return (
    <div className="border border-white/10 rounded-xl p-6">
      <p className="text-xs text-white/40 mb-2">{step}</p>
      <h3 className="text-white font-medium mb-3">{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function Card({ text }) {
  return (
    <div className="border border-white/10 rounded-xl p-6">
      {text}
    </div>
  );
}
