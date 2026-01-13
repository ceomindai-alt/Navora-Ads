// Navora Ads — Real Estate Case Study (Enterprise Version)
// React 19 + Tailwind CSS

import React from "react";
import { Helmet } from "react-helmet-async";

export default function RealEstateCaseStudy() {
  return (
    <main className="bg-[#0B0D10] text-[#F5F7FA]">

      <Helmet>
        <title>Real Estate Lead Generation Case Study | Navora Ads</title>
        <meta
          name="description"
          content="Enterprise real estate performance marketing case study showcasing high-intent buyer acquisition, funnel optimisation, and scalable lead systems."
        />
      </Helmet>

      {/* HERO */}
      <section className="pt-44 pb-32 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-widest text-xs text-white/50 mb-6">
            Real Estate Case Study
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            High-Intent Buyer Acquisition Systems<br />
            for Real Estate Brands
          </h1>
          <p className="mt-8 text-white/60 text-xl max-w-4xl mx-auto">
            How Navora Ads designs structured performance funnels that
            prioritise buyer intent, lead quality, and sales-team efficiency
            for real estate developers.
          </p>
        </div>
      </section>

      <Section title="Executive Summary">
        <p>
          Real estate marketing fails when lead volume is prioritised over
          buyer intent. Navora Ads implemented a funnel-driven acquisition
          framework that aligned advertising, landing experiences, and sales
          qualification into a single growth system.
        </p>
      </Section>

      <Section title="Real Estate Brands & Ecosystem Exposure">
        <p>
          Alongside direct real estate clients, our team has executed buyer-intent
          campaigns and funnel systems across residential development and
          property marketing ecosystems.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-6 text-sm">
          <div className="border border-white/10 rounded-xl p-6">
            <h3 className="text-white font-medium mb-2">Real Estate Brands</h3>
            <p>
               Casa Grande<br />
              Krish housing<br />
              Builders & Developers in Chennai
            </p>
          </div>

          <div className="border border-white/10 rounded-xl p-6">
            <h3 className="text-white font-medium mb-2">Sales & Funnel Systems</h3>
            <p>
              Meta & Google buyer-intent campaigns<br />
              Funnel & CRM alignment<br />
              Lead qualification frameworks
            </p>
          </div>
        </div>
      </Section>

      <Section title="Challenges">
        <ul className="list-disc pl-6 space-y-2">
          <li>Low lead quality despite high ad spend</li>
          <li>Sales teams overwhelmed with unqualified enquiries</li>
          <li>High CPL without buyer readiness</li>
        </ul>
      </Section>

      <Section title="Strategy & Execution">
        <p>
          A buyer-intent funnel was deployed combining behavioural targeting,
          landing-page qualification, and CRM-driven lead scoring to ensure
          only high-intent prospects reached sales teams.
        </p>
      </Section>

      <Section title="Results Achieved">
        <ul className="list-disc pl-6 space-y-2">
          <li><b>3.2× improvement</b> in lead quality</li>
          <li>Reduced sales follow-up time</li>
          <li>Improved cost efficiency at scale</li>
        </ul>
      </Section>

      <Section title="Why Developers Trust This Framework">
        <p>
          This system aligns marketing with sales outcomes — not vanity metrics —
          enabling predictable scaling without operational overload.
        </p>
      </Section>

      <CTA />
    </main>
  );
}
function Section({ title, children }) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-white/70">
        <h2 className="text-3xl font-semibold text-white mb-6">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="border-t border-white/10 py-32 px-6 text-center">
      <h2 className="text-4xl font-semibold">
        Ready to Build Predictable Growth?
      </h2>
      <p className="mt-6 text-white/60 max-w-3xl mx-auto">
        We partner with serious brands looking for structured,
        scalable digital growth systems.
      </p>
      <a
        href="/contact"
        className="inline-block mt-12 rounded-full bg-[#2F8CFF] px-16 py-4 text-sm font-medium"
      >
        Book a Strategy Call
      </a>
    </section>
  );
}
