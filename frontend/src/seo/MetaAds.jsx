// Navora Ads — META ADS AGENCY IN CHENNAI (ENTERPRISE)
// Premium SEO landing page
// React 19 + Tailwind CSS + Framer Motion

import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function MetaAdsAgencyChennai() {
  return (
    <main className="bg-[#0B0D10] text-[#F5F7FA]">

      {/* ================= SEO META ================= */}
      <Helmet>
        <title>Meta Ads Agency in Chennai | Facebook & Instagram Ads Experts</title>
        <meta
          name="description"
          content="Navora Ads is a performance-driven Meta Ads agency in Chennai helping businesses scale through Facebook & Instagram ads with ROI-focused strategies."
        />
        <link rel="canonical" href="https://www.navoraads.com/meta-ads-agency-chennai" />
        <link rel="canonical" href="https://navoraads.com/meta-ads-agency-chennai" />
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
            Meta Ads Agency in Chennai
          </h1>
          <p className="mt-6 text-white/60 text-lg max-w-3xl mx-auto">
            Navora Ads helps businesses in Chennai scale revenue and lead generation through performance-driven Facebook & Instagram advertising systems.
          </p>
          <a
            href="https://wa.me/919952957187"
            className="inline-block mt-10 rounded-full bg-[#2F8CFF] px-14 py-4 text-sm font-medium"
          >
            Book a Meta Ads Strategy Call
          </a>
        </motion.div>
      </section>

      {/* ================= WHY US ================= */}
      <Section title="Why Choose Navora Ads for Meta Ads">
        <div className="grid md:grid-cols-3 gap-8 text-white/60">
          <Card text="ROI-focused campaign architecture" />
          <Card text="Advanced audience & creative testing" />
          <Card text="Full-funnel Meta Ads strategy" />
          <Card text="Conversion tracking & analytics" />
          <Card text="Budget scaling & CPL optimisation" />
          <Card text="Transparent reporting & insights" />
        </div>
      </Section>

      {/* ================= SERVICES ================= */}
      <Section title="Our Meta Ads Services in Chennai">
        <div className="grid md:grid-cols-2 gap-12 text-white/60">
          <Service title="Lead Generation Campaigns" desc="High-quality lead generation for real estate, education, healthcare, and service businesses." />
          <Service title="Ecommerce & D2C Ads" desc="Product sales, catalog ads, retargeting, and scaling strategies for ecommerce brands." />
          <Service title="Brand Awareness & Reach" desc="Top-of-funnel campaigns designed to build brand visibility and demand." />
          <Service title="Retargeting & Funnel Ads" desc="Middle & bottom funnel campaigns to convert warm audiences into customers." />
        </div>
      </Section>

      {/* ================= PROCESS ================= */}
      <Section title="Our Meta Ads Process">
        <div className="grid md:grid-cols-4 gap-8 text-white/60">
          <Step title="Research" desc="Audience analysis, competitor research, and funnel planning." />
          <Step title="Build" desc="Campaign structure, creatives, copies, and tracking setup." />
          <Step title="Launch" desc="Controlled testing, budget allocation, and optimisation." />
          <Step title="Scale" desc="Winning creative scaling, audience expansion, and CPL control." />
        </div>
      </Section>

      {/* ================= RESULTS ================= */}
      <Section title="Performance Outcomes">
        <div className="max-w-5xl mx-auto text-white/60 space-y-4">
          <p>• Improved lead quality and conversion rates</p>
          <p>• Reduced cost per lead through optimisation</p>
          <p>• Scalable campaign structures for long-term growth</p>
          <p>• Clear ROI tracking and reporting</p>
        </div>
      </Section>

      {/* ================= DIFFERENTIATION ================= */}
      <Section title="How We’re Different from Other Meta Ads Agencies">
        <div className="max-w-5xl mx-auto text-white/60 space-y-3">
          <p>• No random boosting or guesswork</p>
          <p>• Funnel-based advertising systems</p>
          <p>• Data-driven creative testing</p>
          <p>• Performance accountability, not vanity metrics</p>
        </div>
      </Section>

      {/* ================= INDUSTRIES ================= */}
      <Section title="Industries We Advertise For">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-white/60">
          {[
            "Real Estate",
            "Education",
            "Healthcare",
            "Ecommerce & D2C",
            "Local Services",
            "Travel & Tourism",
          ].map((i) => (
            <div key={i} className="border border-white/10 rounded-xl py-6 text-center">{i}</div>
          ))}
        </div>
      </Section>

      {/* ================= LOCAL TRUST ================= */}
      <Section title="Chennai-Based Meta Ads Experts">
        <div className="max-w-4xl mx-auto text-white/60 space-y-4">
          <p><b>Office:</b> Vandalur, Chennai</p>
          <p><b>Areas Served:</b> Chennai · Tambaram · Vandalur · GST Road</p>
          <p><b>Phone:</b> +91 99529 57187</p>
        </div>
      </Section>

      {/* ================= FAQ ================= */}
      <Section title="Frequently Asked Questions">
        <div className="max-w-5xl mx-auto text-white/60 space-y-4 text-left">
          <p><b>Is Meta Ads suitable for my business?</b><br/>Meta Ads works best for businesses looking for lead generation, ecommerce sales, or brand growth.</p>
          <p><b>How much budget is required?</b><br/>Ad budgets vary by industry. We help plan budgets based on goals and competition.</p>
          <p><b>Do you manage creatives and copies?</b><br/>Yes. We handle creatives, ad copy, testing, and optimisation.</p>
          <p><b>How soon can I see results?</b><br/>Initial performance data is visible within the first 7–14 days.</p>
        </div>
      </Section>

      {/* ================= FINAL CTA ================= */}
      <section className="border-t border-white/10 py-36 px-6 text-center">
        <h2 className="text-3xl font-semibold">Looking for a Trusted Meta Ads Agency in Chennai?</h2>
        <p className="mt-6 text-white/60 max-w-2xl mx-auto">
          We work with businesses serious about performance, scalability, and ROI.
        </p>
        <a
          href="https://wa.me/919952957187"
          className="inline-block mt-10 rounded-full bg-[#2F8CFF] px-14 py-4 text-sm font-medium"
        >
          Start a Meta Ads Strategy Call
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
