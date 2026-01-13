// Navora Ads — SEO COMPANY CHENNAI
// React 19 + SEO-first + Enterprise tone

import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function SEOCompanyChennai() {
  return (
    <main className="bg-[#0B0D10] text-[#F5F7FA]">

      <Helmet>
        <title>SEO Company in Chennai | Navora Ads</title>
        <meta
          name="description"
          content="Navora Ads is a performance-driven SEO company in Chennai helping businesses rank on Google through technical SEO, local SEO, and authority-driven strategies."
        />
        <link
          rel="canonical"
          href="https://navoraads.com/seo-company-chennai"
        />
      </Helmet>

      {/* HERO */}
      <section className="pt-40 pb-28 px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-semibold">
            SEO Company in Chennai
          </h1>
          <p className="mt-6 text-white/60 text-lg">
            Navora Ads helps businesses in Chennai achieve long-term organic growth
            through data-driven SEO systems — not shortcuts.
          </p>
          <a
            href="https://wa.me/919952957187"
            className="inline-block mt-10 rounded-full bg-[#2F8CFF] px-14 py-4 text-sm font-medium"
          >
            Book an SEO Strategy Call
          </a>
        </motion.div>
      </section>

      {/* WHY US */}
      <Section title="Why Choose Navora Ads for SEO">
        <div className="grid md:grid-cols-3 gap-8 text-white/60">
          <Box text="Technical SEO & site architecture experts" />
          <Box text="Local SEO & Google Maps optimisation" />
          <Box text="Content & authority-driven ranking strategies" />
          <Box text="Transparent reporting & tracking" />
          <Box text="Search intent focused approach" />
          <Box text="Long-term, scalable SEO systems" />
        </div>
      </Section>

      {/* SERVICES */}
      <Section title="Our SEO Services in Chennai">
        <div className="grid md:grid-cols-2 gap-12 text-white/60">
          <Service title="Technical SEO" desc="Site audits, speed optimisation, indexing, schema & crawl fixes." />
          <Service title="On-Page SEO" desc="Keyword optimisation, content structure, internal linking." />
          <Service title="Off-Page SEO" desc="Authority building, backlinks, brand mentions." />
          <Service title="Local SEO" desc="Google Business Profile & Chennai local rankings." />
        </div>
      </Section>

      {/* LOCAL TRUST */}
      <Section title="Chennai-Based SEO Experts">
        <div className="text-white/60 space-y-3">
          <p><b>Office:</b> Vandalur, Chennai</p>
          <p><b>Markets:</b> Chennai · Tamil Nadu · India · Global</p>
          <p><b>Phone:</b> +91 99529 57187</p>
        </div>
      </Section>

      {/* CTA */}
      <section className="border-t border-white/10 py-32 text-center">
        <h2 className="text-3xl font-semibold">
          Looking for a Reliable SEO Company in Chennai?
        </h2>
        <p className="mt-6 text-white/60 max-w-2xl mx-auto">
          We work with a limited number of businesses to deliver consistent,
          measurable SEO growth.
        </p>
        <a
          href="https://wa.me/919952957187"
          className="inline-block mt-10 rounded-full bg-[#2F8CFF] px-14 py-4 text-sm font-medium"
        >
          Start SEO Strategy Call
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

function Box({ text }) {
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
