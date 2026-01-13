// Navora Ads — Insights & Knowledge Hub
// Global | Corporate | AI-Ready
// React 19 + Tailwind CSS

import React from "react";
import { Helmet } from "react-helmet-async";

export default function Insights() {
  return (
    <main className="bg-[#0B0D10] text-[#F5F7FA]">

      {/* SEO */}
      <Helmet>
        <title>Insights & Growth Thinking | Navora Ads</title>
        <meta
          name="description"
          content="Strategic insights from Navora Ads on performance marketing, SEO, lead generation systems, and scalable digital growth."
        />
        <link rel="canonical" href="https://navoraads.com/insights" />
      </Helmet>

      {/* 1. HERO */}
      <section className="pt-44 pb-24 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-widest text-xs text-white/50 mb-6">
            Insights
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Growth thinking,
            <br /> not marketing noise.
          </h1>
          <p className="mt-8 text-white/60 text-xl max-w-4xl mx-auto">
            Strategic perspectives on performance marketing, SEO, automation,
            and scalable growth systems — written for founders, leaders, and
            serious operators.
          </p>
        </div>
      </section>

      {/* 2. WHY INSIGHTS EXIST */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">
            Why We Share Our Thinking
          </h2>
          <p className="text-white/60 text-lg max-w-4xl mx-auto">
            At Navora Ads, we believe execution without clarity leads to wasted
            budgets. These insights reflect how we think about growth systems,
            decision-making, and performance — beyond tools and tactics.
          </p>
        </div>
      </section>

      {/* 3. FEATURED INSIGHTS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          <InsightCard
            title="Why Most Lead Generation Campaigns Fail"
            desc="A systems-level breakdown of why ads don’t convert and how structured funnels change outcomes."
            link="/insights/why-lead-generation-fails"
          />

          <InsightCard
            title="SEO vs Paid Ads: When to Use Each"
            desc="Understanding intent, timelines, and compounding returns across organic and paid channels."
            link="/insights/seo-vs-paid-ads"
          />

          <InsightCard
            title="Building Scalable Marketing Systems"
            desc="How high-growth companies move from experiments to predictable revenue engines."
            link="/insights/scalable-marketing-systems"
          />

        </div>
      </section>

      {/* 4. CORE THEMES */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">
            Core Themes We Write About
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-sm text-white/60">
            {[
              "Performance Marketing Systems",
              "SEO & Search Intent",
              "Funnels & Conversion Optimization",
              "Automation & CRM",
              "Data, Analytics & Tracking",
              "Scaling Paid Media",
              "Founder & Growth Strategy",
              "Sustainable Digital Growth",
            ].map((theme) => (
              <div
                key={theme}
                className="border border-white/10 rounded-xl p-6"
              >
                {theme}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHO THIS IS FOR */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">
            Who These Insights Are For
          </h2>
          <p className="text-white/60 text-lg max-w-4xl mx-auto">
            These insights are written for people responsible for growth
            decisions — not casual readers or trend followers.
          </p>

          <div className="mt-10 text-sm text-white/60 space-y-2">
            <p>• Founders & Business Owners</p>
            <p>• Marketing Heads & CMOs</p>
            <p>• Growth & Performance Teams</p>
            <p>• Decision-makers evaluating agencies</p>
          </div>
        </div>
      </section>

      {/* 6. HOW THIS CONNECTS TO OUR WORK */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">
            How This Connects to Our Work
          </h2>
          <p className="text-white/60 text-lg max-w-4xl mx-auto">
            These ideas directly influence how we design campaigns, build
            funnels, structure SEO strategies, and scale performance systems
            for our clients.
          </p>
        </div>
      </section>

      {/* 7. CTA */}
      <section className=" py-20 px-6 text-center">
        <h2 className="text-4xl font-semibold">
          Want to Apply This Thinking to Your Business?
        </h2>
        <p className="mt-6 text-white/60 max-w-3xl mx-auto text-lg">
          We work with a limited number of brands that value structured,
          performance-driven growth.
        </p>
        <a
          href="/contact"
          className="shimmer-btn inline-block mt-12 rounded-full bg-[#2F8CFF] px-16 py-4 text-sm font-medium"
        >
          Book a Strategy Call
        </a>
      </section>

      {/* 8. DISCLAIMER */}
      <section className="py-8 px-6 text-center">
        <p className="text-sm text-white/40 max-w-3xl mx-auto">
          Insights are shared for educational and strategic purposes only and
          do not constitute guarantees or specific performance outcomes.
        </p>
      </section>

    </main>
  );
}

function InsightCard({ title, desc, link }) {
  return (
    <a
      href={link}
      className="border border-white/10 rounded-2xl p-8 hover:border-[#2F8CFF]/40 transition"
    >
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-white/60 text-sm mb-6">{desc}</p>
      <span className="text-[#2F8CFF] text-sm font-medium">
        Read insight →
      </span>
    </a>
  );
}
