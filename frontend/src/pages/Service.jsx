// Navora Ads — SERVICES PAGE (React 19)
// Premium, corporate, global-ready
// React 19 + Tailwind CSS + Framer Motion

import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Tilt3D from "../components/Tilt3D";
import { TiltCard } from "../components/TiltCard";
import {Link} from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesPage() {
  const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Digital Marketing Services",
  "provider": {
    "@type": "Organization",
    "name": "Navora Ads"
  },
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Chennai"
  },
  "description":
    "Performance-driven digital marketing services including Meta Ads, Google Ads, SEO, website optimisation, automation, and scalable growth systems."
};

  return (
    <main className="bg-[#0B0D10] text-[#F5F7FA] overflow-hidden">

      {/* SEO */}
      <Helmet>
  <title>Navora Ads | Performance-Driven Digital Marketing Agency</title>



  <script type="application/ld+json">
    {JSON.stringify(serviceSchema)}
  </script>


</Helmet>
      {/* HERO */}
      <section className="pt-44 pb-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2F8CFF]/10 to-transparent" />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          className="relative max-w-5xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Digital Marketing Services in <span className="text-[#2F8CFF]">Chennai</span>
          </h1>
          <p className="mt-6 text-white/60 text-lg max-w-3xl mx-auto">
            Performance-driven growth systems designed for businesses that take scale seriously.
          </p>
        </motion.div>
      </section>

      {/* HOW WE WORK */}
      <Section title="How We Work" subtitle="Built for Results, Not Vanity Metrics">
        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {[
            { t: "Performance First", d: "Measured by ROI, lead quality, and conversion impact." },
            { t: "Data-Driven Decisions", d: "Analytics, attribution, and performance insights." },
            { t: "Systems Over Shortcuts", d: "Scalable frameworks, not temporary tactics." },
          ].map((i) => (
            <Tilt3D key={i.t}>
    <TiltCard className="p-6 h-full text-left">
      <h3 className="font-medium">{i.t}</h3>
      <p className="mt-2 text-white/60 text-sm">{i.d}</p>
    </TiltCard>
  </Tilt3D>
          ))}
        </div>
      </Section>

      {/* HOW WE ENGAGE */}
      <Section title="How We Engage" subtitle="A Structured Approach to Scalable Growth">
        <ol className="mt-8 space-y-6 text-white/60 max-w-3xl mx-auto text-left">
          <li><b>Discovery & Audit</b> — goals, market, funnels, data, gaps.</li>
          <li><b>Strategy & System Design</b> — channels, budgets, KPIs.</li>
          <li><b>Execution & Optimisation</b> — campaigns, creatives, tracking.</li>
          <li><b>Scale & Improve</b> — iterate, refine, expand responsibly.</li>
        </ol>
      </Section>

      {/* SERVICES */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center">Our Services</h2>
          <div className="mt-24 grid md:grid-cols-2 gap-14">
  {[
    {
      title: "Performance Marketing (Meta & Google Ads)",
      points: ["Lead generation & sales campaigns","Funnel-based strategy","Creative testing","CPL optimisation"]
    },
    {
      title: "SEO & Local SEO",
      points: ["Technical SEO","Content & authority","GBP optimisation","Maps ranking"]
    },
    {
      title: "Website Development & CRO",
      points: ["High-conversion UX","Funnels & landing pages","Speed & SEO","Analytics"]
    },
    {
      title: "Ecommerce Marketing",
      points: ["Shopify & D2C growth","Marketplace scaling","ROAS optimisation","Offer & funnel strategy"]
    },
    {
      title: "Mobile App Development",
      points: ["Android & iOS","APIs & payments","Admin dashboards","Scalable architecture"]
    },
    {
      title: "Automation & CRM",
      points: ["WhatsApp automation","CRM pipelines","Lead scoring","Integrations"]
    },
    {
      title: "Social Media Management",
      points: ["Content calendars","Community management","Brand consistency","Reporting"]
    },
    {
      title: "Content & Media Production",
      points: ["Ad creatives","Short-form video","Brand systems","Testing frameworks"]
    },
    {
      title: "Growth Strategy & Consulting",
      points: ["Audits","Roadmaps","Budget planning","Founder consulting"]
    },
  ].map((s) => (
    <Tilt3D key={s.title}>
      <TiltCard className="p-8 h-full text-left">
        <h3 className="text-xl font-medium">{s.title}</h3>
        <ul className="mt-4 space-y-2 text-sm text-white/60">
          {s.points.map((p) => (
            <li key={p}>• {p}</li>
          ))}
        </ul>
      </TiltCard>
    </Tilt3D>
  ))}
</div>

        </div>
      </section>

      {/* INDUSTRIES */}
<Section>
  <h2 className="reveal-text section-title">
    Industries We Serve Across Chennai & Beyond
  </h2>

  <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm text-white/60">
    {[
      { label: "Real Estate", path: "/case-studies/real-estate-lead-generation" },
      { label: "Education", path: "/case-studies/education-admissions-marketing" },
      { label: "Healthcare", path: "/case-studies/healthcare-performance-marketing" },
      { label: "Ecommerce & D2C", path: "/services" },
      { label: "Travel", path: "/services" },
      { label: "Manufacturing", path: "/services" },
    ].map(({ label, path }) => (
      <Tilt3D key={label}>
        <Link
          to={path}
          onClick={scrollToTop}
          className="block"
        >
          <TiltCard
            className="
              py-6 text-center
              cursor-pointer
              transition-transform duration-200
              hover:scale-[1.02]
              active:scale-[0.98]
            "
          >
            {label}
          </TiltCard>
        </Link>
      </Tilt3D>
    ))}
  </div>
</Section>


      {/* FAQ */}
      <Section title="Frequently Asked Questions">
        <div className="max-w-3xl mx-auto text-left space-y-6 text-white/60">
          <p><b>Do you guarantee results?</b> No guarantees — only systems, optimisation, and measurable performance.</p>
          <p><b>Do you work outside Chennai?</b> Yes, across India and select global markets.</p>
          <p><b>Do you accept low budgets?</b> We work with businesses ready to invest in growth.</p>
        </div>
      </Section>

      {/* CTA */}
      <section className=" py-20 px-6 text-center">
        <h2 className="reveal-text text-3xl font-semibold">Ready to Scale?</h2>
        <p className="mt-6 text-white/60">Apply for a strategy call with Navora Ads.</p>
        <a href="https://wa.me/919952957187" className="shimmer-btn inline-block mt-10 rounded-full bg-[#2F8CFF] px-14 py-4">Apply for a Strategy Call</a>
      </section>

    </main>
  );
}

function Section({ title, subtitle, children }) {
  return (
    <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-18 px-6 text-center">
      <h2 className="reveal-text section-title">{title}</h2>
      {subtitle && <p className="section-text">{subtitle}</p>}
      <div className="max-w-5xl mx-auto">{children}</div>
    </motion.section>
  );
}

function Card({ title, desc }) {
  return (
    <div className="border border-white/10 rounded-xl p-6">
      <h3 className="font-medium">{title}</h3>
      <p className="mt-2 text-white/60 text-sm">{desc}</p>
    </div>
  );
}

function Service({ title, points }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="border border-white/10 rounded-2xl p-8">
      <h3 className="text-xl font-medium">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-white/60">
        {points.map((p) => (<li key={p}>• {p}</li>))}
      </ul>
    </motion.div>
  );
}

// Tailwind helpers expected:
// .section-title { text-3xl md:text-4xl font-semibold }
// .section-text { margin-top: 1rem; color: rgba(255,255,255,.6) }
