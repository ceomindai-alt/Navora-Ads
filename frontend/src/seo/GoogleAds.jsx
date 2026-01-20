// Navora Ads — GOOGLE ADS AGENCY IN CHENNAI (110% COMPLETE)
// Enterprise-grade SEO landing page
// React 19 + Tailwind CSS + Framer Motion + Conversion-first structure

import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function GoogleAdsAgencyChennai() {
  return (
    <main className="bg-[#0B0D10] text-[#F5F7FA]">

      {/* ================= SEO META ================= */}
      <Helmet>
        <title>Google Ads Agency in Chennai | PPC & Search Ads Experts</title>
        <meta
          name="description"
          content="Navora Ads is a performance-driven Google Ads agency in Chennai helping businesses generate high-intent leads and sales through Search, Display, and YouTube ads."
        />
        <link rel="canonical" href="https://www.navoraads.com/google-ads-agency-chennai" />
        <link rel="canonical" href="https://navoraads.com/google-ads-agency-chennai" />
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
            Google Ads Agency in Chennai
          </h1>
          <p className="mt-6 text-white/60 text-lg max-w-3xl mx-auto">
            Navora Ads helps businesses in Chennai capture high-intent demand and scale revenue through performance-driven Google Ads systems.
          </p>
          <a
            href="https://wa.me/919952957187"
            className="inline-block mt-10 rounded-full bg-[#2F8CFF] px-14 py-4 text-sm font-medium"
          >
            Book a Google Ads Strategy Call
          </a>
        </motion.div>
      </section>

      {/* ================= WHY US ================= */}
      <Section title="Why Choose Navora Ads for Google Ads">
        <div className="grid md:grid-cols-3 gap-8 text-white/60">
          <Card text="High-intent keyword & search strategy" />
          <Card text="Conversion-focused landing page alignment" />
          <Card text="Advanced tracking & attribution setup" />
          <Card text="CPL & ROAS-driven optimisation" />
          <Card text="Search, Display & YouTube expertise" />
          <Card text="Transparent performance reporting" />
        </div>
      </Section>

      {/* ================= SERVICES ================= */}
      <Section title="Our Google Ads Services in Chennai">
        <div className="grid md:grid-cols-2 gap-12 text-white/60">
          <Service title="Google Search Ads" desc="Capture ready-to-buy users actively searching for your products or services." />
          <Service title="Google Display Ads" desc="Reach targeted audiences across websites, apps, and remarketing placements." />
          <Service title="YouTube Ads" desc="Video campaigns designed for awareness, consideration, and performance." />
          <Service title="Remarketing & Performance Max" desc="Re-engage warm users and maximise conversions across Google inventory." />
        </div>
      </Section>

      {/* ================= PROCESS ================= */}
      <Section title="Our Google Ads Process">
        <div className="grid md:grid-cols-4 gap-8 text-white/60">
          <Step title="Research" desc="Keyword intent analysis, competitor review, and demand mapping." />
          <Step title="Build" desc="Account structure, ad copies, extensions, and conversion setup." />
          <Step title="Launch" desc="Controlled testing with budget pacing and data validation." />
          <Step title="Optimise" desc="Bid strategies, keyword refinement, and CPL/ROAS improvement." />
        </div>
      </Section>

      {/* ================= RESULTS ================= */}
      <Section title="Performance Outcomes">
        <div className="max-w-5xl mx-auto text-white/60 space-y-4">
          <p>• Higher quality inbound leads from high-intent searches</p>
          <p>• Improved conversion rates through landing page alignment</p>
          <p>• Reduced wasted spend via keyword & bid optimisation</p>
          <p>• Scalable paid search systems with measurable ROI</p>
        </div>
      </Section>

      {/* ================= DIFFERENTIATION ================= */}
      <Section title="How We’re Different from Other Google Ads Agencies">
        <div className="max-w-5xl mx-auto text-white/60 space-y-3">
          <p>• No generic keyword dumping or broad targeting</p>
          <p>• Full-funnel intent-based campaign design</p>
          <p>• Conversion & revenue-focused optimisation</p>
          <p>• Clear reporting tied to business outcomes</p>
        </div>
      </Section>

      {/* ================= INDUSTRIES ================= */}
      <Section title="Industries We Run Google Ads For">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-white/60">
          {[
            "Real Estate",
            "Education",
            "Healthcare",
            "Ecommerce & D2C",
            "Professional Services",
            "Manufacturing & Industrial",
          ].map((i) => (
            <div key={i} className="border border-white/10 rounded-xl py-6 text-center">{i}</div>
          ))}
        </div>
      </Section>

      {/* ================= LOCAL TRUST ================= */}
      <Section title="Chennai-Based Google Ads Experts">
        <div className="max-w-4xl mx-auto text-white/60 space-y-4">
          <p><b>Office:</b> Vandalur, Chennai</p>
          <p><b>Areas Served:</b> Chennai · Tambaram · Vandalur · GST Road</p>
          <p><b>Phone:</b> +91 99529 57187</p>
        </div>
      </Section>

      {/* ================= FAQ ================= */}
      <Section title="Frequently Asked Questions">
        <div className="max-w-5xl mx-auto text-white/60 space-y-4 text-left">
          <p><b>Is Google Ads suitable for my business?</b><br/>Google Ads works best for businesses with clear demand and measurable conversion goals.</p>
          <p><b>What budget is required for Google Ads?</b><br/>Budgets vary by industry. We help plan spend based on competition and ROI targets.</p>
          <p><b>Do you manage landing pages?</b><br/>Yes. We optimise or build landing pages to maximise conversion rates.</p>
          <p><b>How soon can I see results?</b><br/>Initial data and leads are typically visible within the first 7–14 days.</p>
        </div>
      </Section>

      {/* ================= FINAL CTA ================= */}
      <section className="border-t border-white/10 py-36 px-6 text-center">
        <h2 className="text-3xl font-semibold">Looking for a Trusted Google Ads Agency in Chennai?</h2>
        <p className="mt-6 text-white/60 max-w-2xl mx-auto">
          We partner with businesses focused on performance, scale, and measurable ROI.
        </p>
        <a
          href="https://wa.me/919952957187"
          className="inline-block mt-10 rounded-full bg-[#2F8CFF] px-14 py-4 text-sm font-medium"
        >
          Start a Google Ads Strategy Call
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
