// Navora Ads — ABOUT US PAGE (WORLD-CLASS)
// Founder-led • Consulting-grade • SEO-safe
// React 19 + Tailwind CSS + Framer Motion
import Tilt3D from "../components/Tilt3D";
import { TiltCard } from "../components/TiltCard";
import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <main className="bg-[#0B0D10] text-[#F5F7FA] overflow-hidden">
      
      {/* ================= SEO ================= */}
      <Helmet>
        <title>About Navora Ads | Digital Marketing Agency in Chennai</title>
        <meta
          name="description"
          content="About Navora Ads, a founder-led digital marketing agency in Chennai building performance-driven growth systems for scalable businesses across India and global markets."
        />
         <link rel="canonical" href="https://www.navoraads.com/about" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Navora Ads | Digital Marketing Agency in Chennai" />
        <meta
          property="og:description"
          content="Founder-led, performance-driven digital marketing agency in Chennai delivering scalable growth systems for modern businesses."
        />
        <meta property="og:url" content="https://www.navoraads.com/about" />
        <meta property="og:site_name" content="Navora Ads" />
        <meta property="og:image" content="https://www.navoraads.com/og-image.jpg" />
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="pt-44 pb-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2F8CFF]/10 to-transparent" />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          className="relative max-w-6xl mx-auto text-center"
        >
          <p className="uppercase tracking-widest text-xs text-white/50 mb-6">
            About Navora Ads
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Building Scalable Growth Systems for Modern Businesses
          </h1>
          <p className="mt-8 text-white/70 text-xl max-w-4xl mx-auto">
            Navora Ads is a performance-driven digital marketing agency in Chennai,
            focused on designing structured growth systems that deliver
            measurable business outcomes.
          </p>
        </motion.div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <Section title="Who We Are">
        <div className="max-w-4xl mx-auto text-white/70 text-lg space-y-6">
          <p>
            Navora Ads was founded on a simple belief: businesses don’t fail
            because they lack marketing activity — they fail because they lack
            structured growth systems.
          </p>
          <p>
            In an industry crowded with agencies chasing vanity metrics, we
            chose to operate as growth partners, combining strategy, execution,
            automation, and analytics into unified systems.
          </p>
          <p>
            Today, we work with brands across real estate, education,
            healthcare, ecommerce, and enterprise ecosystems, helping them
            transition from fragmented efforts to predictable, scalable growth.
          </p>
        </div>
      </Section>

      {/* ================= VISION & MISSION ================= */}
      <Section title="Vision & Mission">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto text-left">
  {[
    {
      t: "Our Vision",
      d: "To become a globally trusted growth consulting firm for performance-focused businesses.",
    },
    {
      t: "Our Mission",
      d: "To design and execute data-driven digital growth systems that deliver consistent, measurable outcomes with full transparency.",
    },
  ].map(({ t, d }) => (
    <Tilt3D key={t}>
      <TiltCard className="p-10 h-full">
        <h3 className="text-2xl font-medium">{t}</h3>
        <p className="mt-4 text-white/70 text-base">{d}</p>
      </TiltCard>
    </Tilt3D>
  ))}
</div>

      </Section>

      {/* ================= FOUNDER ================= */}
      <Section title="Founder & Leadership">
        <div className="max-w-4xl mx-auto text-white/70 text-lg space-y-6">
          <h3 className="text-2xl font-semibold text-white">Naveen Ramamoorthy</h3>
          <p className="text-white/60">Founder & Growth Strategist</p>
          <p>
            Naveen brings a performance-led mindset built on paid media,
            conversion optimisation, automation, and analytics. His focus is
            on helping businesses move from experimental marketing to
            structured, scalable growth systems.
          </p>
          <p>
            Under his leadership, Navora Ads has delivered growth systems
            across multiple industries and global markets.
          </p>
        </div>
      </Section>

      {/* ================= VALUES ================= */}
      <Section title="Our Values">
  <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

    {[
      {
        t: "Performance First",
        d: "Every strategy and decision is measured by ROI, efficiency, and business impact.",
      },
      {
        t: "Radical Transparency",
        d: "Clear reporting, honest communication, and no inflated promises.",
      },
      {
        t: "Systems Thinking",
        d: "We build scalable frameworks, not one-off tactics or shortcuts.",
      },
    ].map(({ t, d }) => (
      <motion.div
        key={t}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileTap={{ scale: 0.98 }}
        className="group relative h-full"
      >
        <Tilt3D>
          <TiltCard
            className="
              relative h-full min-h-[260px]
              flex flex-col justify-center text-center
              p-10

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

            {/* TITLE */}
            <h3 className="relative z-10 text-xl font-medium transition-colors duration-300 group-hover:text-white">
              {t}
            </h3>

            {/* SEPARATOR */}
            <div className="relative z-10 mx-auto my-5 h-[1px] w-12 bg-white/20 transition-all duration-300 group-hover:w-20 group-hover:bg-[#2F8CFF]/70" />

            {/* DESCRIPTION */}
            <p className="relative z-10 text-sm text-white/70 leading-relaxed transition-colors duration-300 group-hover:text-white/85">
              {d}
            </p>
          </TiltCard>
        </Tilt3D>
      </motion.div>
    ))}

  </div>
</Section>


      {/* ================= DIFFERENTIATION ================= */}
      {/* ================= DIFFERENTIATION ================= */}
<Section title="How We’re Different">
  <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
    {[
      {
        t: "Growth Partnership Model",
        d: "We operate as long-term growth partners, not short-term task vendors or campaign executors.",
      },
      {
        t: "Quality Over Vanity Metrics",
        d: "We prioritise lead quality, conversion efficiency, and revenue impact over surface-level metrics.",
      },
      {
        t: "Consulting-Led Execution",
        d: "Every engagement combines strategic consulting with disciplined execution across channels.",
      },
      {
        t: "Focused Client Portfolio",
        d: "We work with a limited number of brands each quarter to ensure depth, attention, and results.",
      },
    ].map(({ t, d }) => (
      <Tilt3D key={t}>
        <TiltCard className="p-10 h-full text-left">
          <h3 className="text-xl font-medium">{t}</h3>
          <p className="mt-4 text-white/70 text-base leading-relaxed">
            {d}
          </p>
        </TiltCard>
      </Tilt3D>
    ))}
  </div>
</Section>

      {/* ================= GLOBAL PRESENCE ================= */}
      <Section className="reveal-text" title="Our Presence">
        <div className="max-w-4xl mx-auto text-white/70 text-lg space-y-3">
          <p><strong>Headquarters:</strong> Chennai, India</p>
          <p><strong>Markets Served:</strong> India · United Kingdom · United States · UAE</p>
          <p><strong>Engagement Model:</strong> Performance-led, long-term partnerships</p>
        </div>
      </Section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-20 px-6 text-center">
        <h2 className="reveal-text text-4xl font-semibold">Let’s Build Something Scalable</h2>
        <p className="mt-6 text-white/70 max-w-3xl mx-auto text-lg">
          If you’re looking for a digital growth partner focused on clarity,
          systems, and long-term value creation, Navora Ads is built for you.
        </p>
        <a
          href="/contact"
          className="shimmer-btn inline-block mt-12 rounded-full bg-[#2F8CFF] px-16 py-4 text-sm font-medium"
        >
          Start a Conversation
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
      className="py-18 px-6 text-center"
    >
      <h2 className="reveal-text text-3xl md:text-4xl font-semibold">{title}</h2>
      <div className="mt-10">{children}</div>
    </motion.section>
  );
}

function Value({ title, desc }) {
  return (
    <div className="border border-white/10 rounded-2xl p-10">
      <h3 className="text-xl font-medium">{title}</h3>
      <p className="mt-4 text-white/70 text-base">{desc}</p>
    </div>
  );
}
