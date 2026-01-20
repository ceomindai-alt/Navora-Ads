// Navora Ads — Case Studies Page (GLOBAL / ENTERPRISE STANDARD)
// React 19 + Tailwind CSS | Fully Complete – No Sections Missing
import Tilt3D from "../components/Tilt3D";
import { TiltCard } from "../components/TiltCard";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { FaMeta, FaGoogle, FaWordpress, FaShopify } from "react-icons/fa6";
import {
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiSemrush,
  SiHubspot,
} from "react-icons/si";

const CASES = [
  {
    industry: "Real Estate",
    title: "Scaling High-Intent Real Estate Leads",
    result: "3.2× Lead Quality Improvement",
    desc: "Performance funnels and paid media systems focused on buyer intent.",
    link: "/case-studies/real-estate-lead-generation",
  },
  {
    industry: "Education",
    title: "Admissions Growth Through Performance Systems",
    result: "41% Lower Cost per Qualified Enquiry",
    desc: "Seasonal admissions strategy aligned with parent intent.",
    link: "/case-studies/education-admissions-marketing",
  },
  {
    industry: "Healthcare",
    title: "Compliance-Safe Healthcare Engagement Campaigns",
    result: "2× Engagement Growth",
    desc: "Budget-efficient healthcare marketing with regulatory sensitivity.",
    link: "/case-studies/healthcare-performance-marketing",
  },
];

const FILTERS = ["All", "Real Estate", "Education", "Healthcare"];

export default function CaseStudiesPage() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? CASES : CASES.filter((c) => c.industry === filter);

  return (
    <main className="bg-[#0B0D10] text-[#F5F7FA]">

      {/* SEO */}
      <Helmet>
        <title>Case Studies | Navora Ads – Proven Growth Systems</title>
        <meta
          name="description"
          content="Explore case studies from Navora Ads showcasing performance marketing, lead generation, and scalable growth systems across industries."
        />
      </Helmet>

      {/* HERO */}
      <section className="pt-44 pb-28 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-widest text-xs text-white/50 mb-6">Case Studies</p>
          <h1 className="text-4xl md:text-6xl font-semibold">Proven Growth Systems</h1>
          <p className="mt-8 text-white/60 text-xl max-w-4xl mx-auto">
            Real-world examples of how structured performance marketing systems
            deliver measurable, scalable outcomes.
          </p>
        </div>
      </section>

      {/* AUTHORITY METRICS */}
        <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          <Metric type="currency" value={10} label="Ad Spend Managed" />
          <Metric type="number" value={120} label="Brands Supported" />
          <Metric type="range" label="Lead Growth Achieved" />
          <Metric type="text" value="India · UK · US" label="Market Experience" />
        </div>
      </section>

      {/* FILTERS */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto flex justify-center gap-4 flex-wrap">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-3 rounded-full border text-base transition ${
                filter === f
                  ? "shimmer-btn bg-[#2F8CFF] border-[#2F8CFF]"
                  : " border-white/15 text-white/60 hover:border-white/30"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* CASE GRID */}
      <section className="py-20 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

    {filtered.map((c) => (
      <Tilt3D key={c.title}>

        <Link
          to={c.link}
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="block"
        >
          <TiltCard className="p-8 h-full">

            <p className="text-xs uppercase tracking-widest text-white/40">
              {c.industry}
            </p>

            <h3 className="mt-4 text-xl font-semibold">
              {c.title}
            </h3>

            <p className="mt-4 text-white/60 text-sm">
              {c.desc}
            </p>

            <p className="mt-6 text-[#2F8CFF] font-medium text-sm">
              {c.result}
            </p>

          </TiltCard>
        </Link>

      </Tilt3D>
    ))}

  </div>
</section>


      {/* PLATFORM EXPERIENCE */}
      <section className=" py-20 px-6 text-center overflow-hidden">
  <h2 className="reveal-text text-3xl font-semibold mb-6">
    Campaign Experience Across Platforms
  </h2>

  <p className="text-white/60 max-w-3xl mx-auto">
    Our growth systems have been executed across leading advertising,
    analytics, and automation ecosystems.
  </p>

  {/* Running brand icons */}
  <div className="mt-16 relative overflow-hidden">
    <motion.div
      className="flex gap-6 w-max mx-auto"
      animate={{ x: ["-50%", "0%"] }}
      transition={{
        repeat: Infinity,
        duration: 30,
        ease: "linear",
      }}
    >
      {[
        { name: "Meta Ads", icon: FaMeta, color: "text-[#0467FF]" },
        { name: "Google Ads", icon: FaGoogle, color: "text-[#4285F4]" },
        { name: "Google Analytics", icon: SiGoogleanalytics, color: "text-[#F9AB00]" },
        { name: "Google Tag Manager", icon: SiGoogletagmanager, color: "text-[#246FDB]" },
        { name: "SEMrush", icon: SiSemrush, color: "text-[#FF642D]" },
        { name: "WordPress", icon: FaWordpress, color: "text-[#21759B]" },
        { name: "Shopify", icon: FaShopify, color: "text-[#95BF47]" },
        { name: "CRM & Automation", icon: SiHubspot, color: "text-[#FF7A59]" },
      ]
        .concat([
          { name: "Meta Ads", icon: FaMeta, color: "text-[#0467FF]" },
          { name: "Google Ads", icon: FaGoogle, color: "text-[#4285F4]" },
          { name: "Google Analytics", icon: SiGoogleanalytics, color: "text-[#F9AB00]" },
          { name: "Google Tag Manager", icon: SiGoogletagmanager, color: "text-[#246FDB]" },
          { name: "SEMrush", icon: SiSemrush, color: "text-[#FF642D]" },
          { name: "WordPress", icon: FaWordpress, color: "text-[#21759B]" },
          { name: "Shopify", icon: FaShopify, color: "text-[#95BF47]" },
          { name: "CRM & Automation", icon: SiHubspot, color: "text-[#FF7A59]" },
        ])
        .map(({ name, icon: Icon, color }, i) => (
          <span
            key={i}
            className="flex items-center gap-3 border border-white/10
                       rounded-full px-6 py-3 text-white/80
                       backdrop-blur transition
                       hover:border-white/30 hover:text-white
                       whitespace-nowrap"
          >
            <Icon className={`text-xl ${color}`} />
            {name}
          </span>
        ))}
    </motion.div>
  </div>
</section>


      {/* PROCESS */}
      <section className="py-20 px-6 text-center">
  <h2 className="reveal-text text-3xl font-semibold mb-12">
    How These Results Are Achieved
  </h2>

  <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
    {[
      {
        s: "Research",
        d: "Market, audience & competitor analysis",
      },
      {
        s: "Build",
        d: "Funnels, creatives & tracking systems",
      },
      {
        s: "Scale",
        d: "Budget optimisation & channel expansion",
      },
      {
        s: "Optimise",
        d: "Continuous performance improvement",
      },
    ].map(({ s, d }) => (
      <Tilt3D key={s}>
        <TiltCard
          className="
            relative
            p-6 h-full text-center
            border border-white/15
            bg-[#0B0D10]
            rounded-xl
            overflow-hidden
          "
        >
          {/* BORDER RUN EFFECT */}
          <span
            className="
              pointer-events-none
              absolute inset-0
              rounded-xl
            "
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, #2F8CFF 50%, transparent 100%)",
              backgroundSize: "200% 100%",
              animation: "borderRun 3s linear infinite",
              mask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "exclude",
              WebkitMaskComposite: "xor",
              padding: "1px",
            }}
          />

          <h3 className="relative z-10 text-white text-lg font-medium mb-3">
            {s}
          </h3>

          <p className="relative z-10 text-white/60">
            {d}
          </p>
        </TiltCard>
      </Tilt3D>
    ))}
  </div>

  {/* BORDER ANIMATION KEYFRAMES */}
  <style>
    {`
      @keyframes borderRun {
        0% { background-position: 0% 50%; }
        100% { background-position: 200% 50%; }
      }
    `}
  </style>
</section>


      {/* FAQs */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="reveal-text text-3xl font-semibold text-center mb-12">Common Questions</h2>
          <div className="space-y-6">
            <FAQ q="Do you guarantee results?" a="No. Performance depends on market, budget, competition, and execution." />
            <FAQ q="What budgets are these results based on?" a="Structured marketing budgets focused on scalable growth." />
            <FAQ q="How long does it take to see results?" a="Paid media shows early signals within weeks; SEO compounds over time." />
            <FAQ q="Who is this not suitable for?" a="One-time projects or extremely low-budget experiments." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className=" py-20 px-6 text-center">
        <h2 className="reveal-text text-4xl font-semibold">Ready to Build Predictable Growth?</h2>
        <p className="mt-6 text-white/60 max-w-3xl mx-auto">
          We work with a limited number of brands each quarter to maintain
          execution quality.
        </p>
        <a href="/contact" 
              className="shimmer-btn mt-6 inline-flex rounded-full bg-[#2F8CFF] px-10 py-3 text-white font-medium"
            >
          Book a Strategy Call
        </a>
      </section>

    </main>
  );
}

function Metric({ type, value = 0, label }) {
  const motionValue = useMotionValue(0);

  useEffect(() => {
    if (type === "number" || type === "currency") {
      animate(motionValue, value, {
        duration: 2.8,
        ease: "easeOut",
      });
    }
  }, [value, type, motionValue]);

  const rounded = useTransform(motionValue, Math.round);

  return (
    <div>
      <p className="text-3xl font-semibold">
        {type === "currency" && "₹"}
        {(type === "number" || type === "currency") && (
          <motion.span>{rounded}</motion.span>
        )}
        {type === "currency" && "Cr+"}
        {type === "number" && "+"}
        {type === "range" && "3–5×"}
        {type === "text" && value}
      </p>
      <p className="mt-2 text-white/50 text-sm">{label}</p>
    </div>
  );
}


function FAQ({ q, a }) {
  return (
    <div className="border border-white/10 rounded-xl p-6">
      <h3 className="text-white font-medium">{q}</h3>
      <p className="mt-2 text-sm text-white/60">{a}</p>
    </div>
  );
}
