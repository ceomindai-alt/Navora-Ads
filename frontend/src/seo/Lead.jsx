// Navora Ads — LEAD GENERATION AGENCY IN CHENNAI (110% COMPLETE)
// Enterprise-grade SEO & conversion landing page
// React 19 + Tailwind CSS + Framer Motion

import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function LeadGenerationAgencyChennai() {
  return (
    <main className="bg-[#0B0D10] text-[#F5F7FA]">

      {/* ================= SEO META ================= */}
      <Helmet>
        <title>Lead Generation Agency in Chennai | High-Quality Leads</title>
        <meta
          name="description"
          content="Navora Ads is a performance-driven lead generation agency in Chennai helping businesses generate high-quality leads through paid ads, funnels, SEO, and automation systems."
        />
        <link rel="canonical" href="https://navoraads.com/lead-generation-agency-chennai" />
         <link rel="canonical" href="https://www.navoraads.com/lead-generation-agency-chennai" />
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="pt-40 pb-32 px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.9 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Lead Generation Agency in Chennai
          </h1>
          <p className="mt-6 text-white/60 text-lg max-w-3xl mx-auto">
            Navora Ads helps businesses in Chennai generate predictable, high-quality leads through performance marketing, conversion-focused funnels, and automation systems.
          </p>
          <a
            href="https://wa.me/919952957187"
            className="inline-block mt-10 rounded-full bg-[#2F8CFF] px-14 py-4 text-sm font-medium"
          >
            Book a Lead Generation Strategy Call
          </a>
        </motion.div>
      </section>

      {/* ================= WHY US ================= */}
      <Section title="Why Businesses Choose Navora Ads for Lead Generation">
        <div className="grid md:grid-cols-3 gap-8 text-white/60">
          <Card text="Lead quality over lead quantity" />
          <Card text="End-to-end funnel ownership" />
          <Card text="Multi-channel lead systems" />
          <Card text="Advanced tracking & attribution" />
          <Card text="CRM & automation integration" />
          <Card text="ROI & CPL-focused optimisation" />
        </div>
      </Section>

      {/* ================= SERVICES ================= */}
      <Section title="Our Lead Generation Services in Chennai">
        <div className="grid md:grid-cols-2 gap-12 text-white/60">
          <Service title="Paid Lead Generation" desc="High-intent leads via Meta Ads, Google Ads, and YouTube advertising." />
          <Service title="Landing Pages & Funnels" desc="Conversion-optimised landing pages and funnel systems." />
          <Service title="SEO & Organic Leads" desc="Long-term inbound lead generation through SEO and local search." />
          <Service title="Automation & CRM" desc="WhatsApp, email follow-ups, lead scoring, and CRM workflows." />
        </div>
      </Section>

      {/* ================= PROCESS ================= */}
      <Section title="Our Lead Generation Process">
        <div className="grid md:grid-cols-4 gap-8 text-white/60">
          <Step title="Research" desc="Audience analysis, intent mapping, and competitor review." />
          <Step title="Build" desc="Funnel creation, creatives, copies, and tracking setup." />
          <Step title="Launch" desc="Campaign testing, budget control, and data validation." />
          <Step title="Scale" desc="Optimisation, automation, and predictable lead flow." />
        </div>
      </Section>

      {/* ================= RESULTS ================= */}
      <Section title="Lead Generation Outcomes">
        <div className="max-w-5xl mx-auto text-white/60 space-y-4">
          <p>• Improved lead quality and conversion rates</p>
          <p>• Reduced cost per lead through optimisation</p>
          <p>• Scalable lead pipelines for sales teams</p>
          <p>• Clear attribution and performance tracking</p>
        </div>
      </Section>

      {/* ================= DIFFERENTIATION ================= */}
      <Section title="How We’re Different from Other Lead Generation Agencies">
        <div className="max-w-5xl mx-auto text-white/60 space-y-3">
          <p>• No buying or reselling low-quality leads</p>
          <p>• Full ownership of funnels and systems</p>
          <p>• Performance aligned with sales outcomes</p>
          <p>• Automation-driven efficiency</p>
        </div>
      </Section>

      {/* ================= INDUSTRIES ================= */}
      <Section title="Industries We Generate Leads For">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-white/60">
          {[
            "Real Estate",
            "Education",
            "Healthcare",
            "Ecommerce & D2C",
            "Professional Services",
            "Local Service Businesses",
          ].map((i) => (
            <div key={i} className="border border-white/10 rounded-xl py-6 text-center">{i}</div>
          ))}
        </div>
      </Section>

      {/* ================= LOCAL TRUST ================= */}
      <Section title="Chennai-Based Lead Generation Experts">
        <div className="max-w-4xl mx-auto text-white/60 space-y-4">
          <p><b>Office:</b> Vandalur, Chennai</p>
          <p><b>Areas Served:</b> Chennai · Tambaram · Vandalur · GST Road</p>
          <p><b>Phone:</b> +91 99529 57187</p>
        </div>
      </Section>

      {/* ================= FAQ ================= */}
      <Section title="Frequently Asked Questions">
        <div className="max-w-5xl mx-auto text-white/60 space-y-4 text-left">
          <p><b>What is lead generation?</b><br/>Lead generation is the process of attracting and converting potential customers into qualified enquiries.</p>
          <p><b>Do you guarantee leads?</b><br/>We guarantee structured execution and optimisation. Lead volume depends on budget, market, and offer.</p>
          <p><b>Which channels do you use?</b><br/>We use Meta Ads, Google Ads, SEO, landing pages, and automation systems.</p>
          <p><b>Is this suitable for small businesses?</b><br/>Yes, if there is a minimum viable budget and growth intent.</p>
        </div>
      </Section>

      {/* ================= FINAL CTA ================= */}
      <section className="border-t border-white/10 py-36 px-6 text-center">
        <h2 className="text-3xl font-semibold">Need a Reliable Lead Generation Agency in Chennai?</h2>
        <p className="mt-6 text-white/60 max-w-2xl mx-auto">
          We build predictable lead systems for businesses serious about growth and conversion.
        </p>
        <a
          href="https://wa.me/919952957187"
          className="inline-block mt-10 rounded-full bg-[#2F8CFF] px-14 py-4 text-sm font-medium"
        >
          Start a Lead Generation Strategy Call
        </a>
      </section>

    </main>
  );
}

function Section({ title, children }) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-28 px-6 text-center"
    >
      <h2 className="section-title">{title}</h2>
      <div className="mt-12 max-w-6xl mx-auto">{children}</div>
    </motion.section>
  );
}

function Card({ text }) {
  return (
    <div className="border border-white/10 rounded-xl p-6 text-center">
      {text}
    </div>
  );
}

function Service({ title, desc }) {
  return (
    <div className="border border-white/10 rounded-xl p-8">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="mt-4 text-sm">{desc}</p>
    </div>
  );
}

function Step({ title, desc }) {
  return (
    <div className="border border-white/10 rounded-xl p-6 text-center">
      <h4 className="font-medium">{title}</h4>
      <p className="mt-3 text-sm text-white/50">{desc}</p>
    </div>
  );
}

// Tailwind helpers expected:
// .section-title { text-3xl md:text-4xl font-semibold }
