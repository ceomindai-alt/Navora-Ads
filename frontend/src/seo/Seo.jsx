// Navora Ads — DIGITAL MARKETING AGENCY IN CHENNAI
// Pillar SEO Landing Page (Enterprise)
// React 19 + Tailwind CSS + Framer Motion

import React, {useEffect} from "react";
import { Helmet } from "react-helmet-async";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function DigitalMarketingAgencyChennai() {
  
  return (
    <main className="bg-[#0B0D10] text-[#F5F7FA]">

      {/* ================= SEO META ================= */}
      <Helmet>
        <title>Digital Marketing Agency in Chennai | Navora Ads</title>
        <meta
          name="description"
          content="Navora Ads is a performance-driven digital marketing agency in Chennai helping businesses scale through Meta Ads, Google Ads, SEO, automation, and conversion-focused growth systems."
        />
        <link
          rel="canonical"
          href="https://navoraads.com/digital-marketing-agency-chennai"
        />
        <link
          rel="canonical"
          href="https://www.navoraads.com/digital-marketing-agency-chennai"
        />
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
            Digital Marketing Agency in Chennai
          </h1>
          <p className="mt-6 text-white/60 text-lg max-w-3xl mx-auto">
            We design performance-driven digital growth systems that help
            businesses generate demand, convert leads, and scale revenue
            predictably.
          </p>
          <a
            href="https://wa.me/919952957187"
            className="inline-block mt-10 rounded-full bg-[#2F8CFF] px-14 py-4 text-sm font-medium"
          >
            Book a Strategy Call
          </a>
        </motion.div>
      </section>

      {/* ================= TRUST METRICS ================= */}
      <Section title="Trusted Growth Partner">
        <div className="grid md:grid-cols-4 gap-8 text-white/60">
          <Metric label="₹10Cr+" desc="Ad Spend Managed" />
          <Metric label="120+" desc="Brands Supported" />
          <Metric label="India · UK · US" desc="Markets Served" />
          <Metric label="Performance-First" desc="Growth Systems" />
        </div>
      </Section>

      {/* ================= WHY NAVORA ADS ================= */}
      <Section title="Why Choose Navora Ads">
        <div className="grid md:grid-cols-3 gap-8 text-white/60">
          <Card text="Performance-first digital marketing systems" />
          <Card text="Meta Ads & Google Ads specialists" />
          <Card text="SEO & Local SEO expertise in Chennai" />
          <Card text="Conversion-focused websites & funnels" />
          <Card text="Automation-driven lead systems" />
          <Card text="Transparent reporting & ROI tracking" />
        </div>
      </Section>

      {/* ================= SERVICES ================= */}
      <Section title="Digital Marketing Services in Chennai">
        <div className="grid md:grid-cols-2 gap-12 text-white/60">
          <Service
            title="Performance Marketing (Meta & Google Ads)"
            desc="ROI-focused paid advertising systems engineered for consistent, high-quality lead generation."
          />
          <Service
            title="SEO & Local SEO"
            desc="Long-term organic visibility through technical SEO, content strategy, and Google Maps optimisation."
          />
          <Service
            title="Website Design & Conversion Optimisation"
            desc="High-conversion websites and landing pages built to turn traffic into revenue."
          />
          <Service
            title="Lead Generation Systems"
            desc="End-to-end funnels combining ads, landing pages, automation, and CRM workflows."
          />
          <Service
            title="Ecommerce & D2C Growth"
            desc="Scalable ecommerce marketing systems for Shopify and marketplace brands."
          />
          <Service
            title="Mobile App Development & Automation"
            desc="Business-ready apps, WhatsApp automation, CRM setup, and AI-powered workflows."
          />
        </div>
      </Section>

      {/* ================= PROCESS ================= */}
      <Section title="Our Digital Marketing Process">
        <div className="grid md:grid-cols-4 gap-8 text-white/60">
          <Step title="Research" desc="Market, audience, and competitor analysis." />
          <Step title="Build" desc="Campaigns, funnels, creatives, and tracking." />
          <Step title="Launch" desc="Controlled testing with data validation." />
          <Step title="Scale" desc="Optimisation, automation, and growth expansion." />
        </div>
      </Section>

      {/* ================= INDUSTRIES ================= */}
      <Section title="Industries We Serve">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-white/60">
          {[
            "Real Estate",
            "Education",
            "Healthcare",
            "Ecommerce & D2C",
            "Travel & Tourism",
            "Manufacturing & Industrial",
          ].map((i) => (
            <div
              key={i}
              className="border border-white/10 rounded-xl py-6 text-center"
            >
              {i}
            </div>
          ))}
        </div>
      </Section>

      {/* ================= LOCAL AUTHORITY ================= */}
      <Section title="Chennai-Based Digital Marketing Company">
        <div className="max-w-4xl mx-auto text-white/60 space-y-4">
          <p><b>Office:</b> Vandalur, Chennai, Tamil Nadu</p>
          <p><b>Service Areas:</b> Chennai · Tambaram · Vandalur · GST Road</p>
          <p><b>Phone:</b> +91 99529 57187</p>
        </div>
      </Section>

      {/* ================= FAQ ================= */}
      <Section title="Frequently Asked Questions">
        <div className="max-w-5xl mx-auto text-white/60 space-y-4 text-left">
          <p><b>Is digital marketing suitable for my business?</b><br />
            Yes. Digital marketing works best for businesses focused on lead quality,
            scalability, and long-term growth.
          </p>
          <p><b>How long does it take to see results?</b><br />
            Paid campaigns show data within weeks, while SEO delivers compounding
            results over months.
          </p>
          <p><b>Do you guarantee results?</b><br />
            We guarantee structured execution, transparency, and best practices —
            not unrealistic promises.
          </p>
          <p><b>Do you work only with Chennai clients?</b><br />
            No. We serve businesses across India and global markets.
          </p>
        </div>
      </Section>

      {/* ================= FINAL CTA ================= */}
      <Section className="border-t border-white/10 py-36 px-6 text-center">
        <h2 className="text-3xl font-semibold">
          Looking for a Digital Marketing Agency in Chennai?
        </h2>
        <p className="mt-6 text-white/60 max-w-2xl mx-auto">
          We partner with growth-focused businesses that value systems,
          transparency, and long-term scalability.
        </p>
        <a
          href="https://wa.me/919952957187"
          className="inline-block mt-10 rounded-full bg-[#2F8CFF] px-14 py-4 text-sm font-medium"
        >
          Start a Strategy Call
        </a>
      </Section>

    </main>
  );
}

/* ================= COMPONENTS ================= */

function Section({ title, children }) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-28 px-6 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-semibold">{title}</h2>
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
      <h3 className="text-lg font-medium text-white">{title}</h3>
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

function Metric({ label, desc }) {
  const numberMatch = label.match(/\d+/);
  const hasNumber = Boolean(numberMatch);
  const target = hasNumber ? Number(numberMatch[0]) : null;

  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (hasNumber) {
      animate(count, target, {
        duration: 3,
        ease: "easeOut",
      });
    }
  }, [hasNumber, target]);

  return (
    <div className="border border-white/10 rounded-xl p-6 text-center">
      <p className="text-2xl font-semibold text-white">
        {hasNumber ? (
          label.replace(numberMatch[0], "") && (
            <>
              {label.split(numberMatch[0])[0]}
              <motion.span>{rounded}</motion.span>
              {label.split(numberMatch[0])[1]}
            </>
          )
        ) : (
          label
        )}
      </p>
      <p className="mt-2 text-sm text-white/60">{desc}</p>
    </div>
  );
}
