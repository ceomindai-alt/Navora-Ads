// Navora Ads — Our Process
// Global | Corporate | Consulting-Grade
// React 19 + Tailwind CSS

import React from "react";
import { Helmet } from "react-helmet-async";

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
      <section className="pt-44 pb-28 px-6 text-center">
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
      <section className="border-t border-white/10 py-28 px-6">
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
      <section className="border-t border-white/10 py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-sm text-white/60">

          <Step
            step="01"
            title="Research & Diagnosis"
            desc="Market analysis, competitor benchmarking, audience intent mapping, funnel review, and data diagnostics."
          />

          <Step
            step="02"
            title="Strategy & Architecture"
            desc="Channel selection, funnel design, KPI definition, budget allocation, and tracking architecture."
          />

          <Step
            step="03"
            title="Execution & Deployment"
            desc="Campaign launch, creative testing, automation setup, CRM integration, and performance monitoring."
          />

          <Step
            step="04"
            title="Scale & Optimisation"
            desc="Budget scaling, CPL optimisation, conversion improvements, and system refinement."
          />

        </div>
      </section>

      {/* 4. WHAT MAKES OUR PROCESS DIFFERENT */}
      <section className="border-t border-white/10 py-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">
            What Makes Our Process Different
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-sm text-white/60">
            <Card text="Systems-first approach, not isolated tactics" />
            <Card text="Performance measured by lead quality and ROI" />
            <Card text="Data-backed decisions, not assumptions" />
            <Card text="Scalability built into every campaign" />
            <Card text="Automation and CRM-driven execution" />
            <Card text="Transparent reporting and accountability" />
          </div>
        </div>
      </section>

      {/* 5. TOOLS & PLATFORMS */}
      <section className="border-t border-white/10 py-28 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Platforms & Technology Ecosystem
        </h2>
        <p className="text-white/60 max-w-3xl mx-auto">
          Our process is executed across industry-standard platforms and tools,
          ensuring compliance, scalability, and performance.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm">
          {[
            "Meta Ads",
            "Google Ads",
            "Google Analytics",
            "Google Tag Manager",
            "SEMrush",
            "WordPress",
            "Shopify",
            "CRM & Automation",
            "AI & Analytics Tools",
          ].map((tool) => (
            <span
              key={tool}
              className="border border-white/10 rounded-full px-6 py-3"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* 6. WHO THIS PROCESS IS FOR */}
      <section className="border-t border-white/10 py-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">
            Who This Process Is Designed For
          </h2>

          <p className="text-white/60 text-lg max-w-4xl mx-auto">
            This structured approach is ideal for businesses that value clarity,
            performance, and sustainable growth — not shortcuts.
          </p>

          <div className="mt-10 text-sm text-white/60 space-y-2">
            <p>• Real Estate Developers & Builders</p>
            <p>• Educational Institutions & Training Brands</p>
            <p>• Healthcare & Clinics</p>
            <p>• Ecommerce & D2C Brands</p>
            <p>• Service-Based Businesses</p>
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="border-t border-white/10 py-32 px-6 text-center">
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
      <section className="border-t border-white/10 py-16 px-6 text-center">
        <p className="text-xs text-white/40 max-w-3xl mx-auto">
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
