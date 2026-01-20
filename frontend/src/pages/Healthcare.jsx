// Navora Ads — Healthcare Case Study (FINAL ENTERPRISE VERSION)
// React 19 + Tailwind CSS | Compliance • Trust • Performance

import React from "react";
import { Helmet } from "react-helmet-async";

export default function HealthcareCaseStudy() {
  return (
    <main className="bg-[#0B0D10] text-[#F5F7FA]">

      {/* SEO */}
      <Helmet>
        <title>Healthcare Marketing Case Study | Navora Ads</title>
        <meta
          name="description"
          content="Enterprise healthcare marketing case study showcasing compliance-first growth systems, engagement optimisation, and trust-led performance marketing by Navora Ads."
        />
      </Helmet>

      {/* HERO */}
      <section className="pt-44 pb-32 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-widest text-xs text-white/50 mb-6">
            Healthcare Case Study
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Healthcare Growth Systems Built on Trust,<br />
            Compliance & Performance
          </h1>

          <p className="mt-8 text-white/60 text-xl max-w-4xl mx-auto">
            How Navora Ads designs compliance-first, enterprise-grade healthcare
            marketing systems that improve engagement quality, enquiry intent,
            and long-term brand trust.
          </p>
        </div>
      </section>

      {/* EXECUTIVE SUMMARY */}
      <Section title="Executive Summary">
        <p>
          Healthcare marketing demands a higher standard of responsibility.
          Navora Ads implemented a trust-led, compliance-first performance
          framework that balances growth objectives with credibility,
          sensitivity, and long-term brand equity.
        </p>
      </Section>

      {/* CLIENT CONTEXT */}
      <Section title="Healthcare Brands We’ve Worked With">
        <ul className="space-y-3">
          <li><b>Industry:</b> Healthcare & Aesthetic Medicine</li>
          <li>
            <b>Brands:</b> Allure Skin • Hair • Body Clinic, Bloom Aesthetics &
            Hair Transplant Clinic
          </li>
          <li><b>Market:</b> Chennai (framework scalable globally)</li>
          <li><b>Objective:</b> Engagement growth, enquiry quality, brand trust</li>
        </ul>
      </Section>

      {/* ENTERPRISE EXPOSURE */}
      <Section title="Healthcare & Enterprise Ecosystem Exposure">
  {/* INLINE CSS — SELF CONTAINED */}
  <style>
    {`
      @keyframes border-spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      .animated-border {
        animation: border-spin 8s linear infinite;
      }

      .border-wrapper:hover .animated-border {
        animation-duration: 3.5s;
        filter: brightness(1.4);
      }
    `}
  </style>

  <p>
    Alongside direct healthcare clients, our team has executed campaigns,
    strategy frameworks, and platform-level exposure across healthcare,
    aesthetic, and enterprise digital ecosystems.
  </p>

  <div className="mt-10 grid md:grid-cols-2 gap-6 text-sm">

    {/* CARD 1 */}
    <div className="border-wrapper relative rounded-2xl p-[3px] overflow-hidden transition-all duration-300">
      {/* THICK CONTINUOUS ANIMATED BORDER */}
      <span
        className="
          animated-border
          absolute inset-0
          bg-[conic-gradient(from_0deg,transparent_20%,rgba(47,140,255,0.9),transparent_80%)]
        "
      />

      {/* CARD CONTENT */}
      <div
        className="
          relative rounded-2xl bg-[#0B0D10] p-6
          border border-white/10
          transition-all duration-300
          hover:border-[#2F8CFF]/50
          hover:shadow-[0_0_45px_rgba(47,140,255,0.35)]
        "
      >
        <h3 className="text-white font-medium mb-2">
          Healthcare Brands
        </h3>
        <p className="text-white/70 leading-relaxed">
          Allure Skin • Hair • Body Clinic<br />
          Bloom Aesthetics & Hair Transplant Clinic<br />
          Dermatology & aesthetic healthcare brands
        </p>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="border-wrapper relative rounded-2xl p-[3px] overflow-hidden transition-all duration-300">
      {/* THICK CONTINUOUS ANIMATED BORDER */}
      <span
        className="
          animated-border
          absolute inset-0
          bg-[conic-gradient(from_0deg,transparent_20%,rgba(47,140,255,0.9),transparent_80%)]
        "
      />

      {/* CARD CONTENT */}
      <div
        className="
          relative rounded-2xl bg-[#0B0D10] p-6
          border border-white/10
          transition-all duration-300
          hover:border-[#2F8CFF]/50
          hover:shadow-[0_0_45px_rgba(47,140,255,0.35)]
        "
      >
        <h3 className="text-white font-medium mb-2">
          Enterprise & Platform Exposure
        </h3>
        <p className="text-white/70 leading-relaxed">
          Meta & Google healthcare campaigns<br />
          Analytics, CRM & enquiry systems<br />
          Enterprise digital compliance alignment
        </p>
      </div>
    </div>

  </div>
</Section>



      {/* CHALLENGES */}
      <Section title="The Challenges">
        <ul className="list-disc pl-6 space-y-2">
          <li>Strict healthcare advertising and claim regulations</li>
          <li>Sensitive audience decision-making behaviour</li>
          <li>Low trust in aggressive promotional campaigns</li>
          <li>Budget efficiency under compliance constraints</li>
        </ul>
      </Section>

      {/* OBJECTIVES */}
      <Section title="Objectives">
        <ul className="list-disc pl-6 space-y-2">
          <li>Increase meaningful engagement (not vanity reach)</li>
          <li>Improve enquiry intent and patient quality</li>
          <li>Maintain full compliance across all messaging</li>
          <li>Build sustainable healthcare brand trust</li>
        </ul>
      </Section>

      {/* STRATEGY */}
      <Section title="Strategy & Approach">
        <p>
          Rather than aggressive lead acquisition, Navora Ads deployed an
          education-led engagement strategy. Campaigns were designed to inform,
          reassure, and guide potential patients — positioning clinics as trusted
          healthcare authorities.
        </p>
      </Section>

      {/* EXECUTION */}
      <Section title="Execution Framework">
        <ul className="space-y-3">
          <li><b>Campaign Type:</b> Awareness & engagement-led Meta campaigns</li>
          <li><b>Creative Direction:</b> Educational, doctor-centric messaging</li>
          <li><b>Audience Targeting:</b> Contextual and behavioural relevance</li>
          <li><b>Optimisation:</b> Engagement quality & enquiry signals</li>
        </ul>
      </Section>

      {/* TRUST STATEMENT */}
      <Section title="Why Healthcare Brands Trust This Framework">
        <p>
          This system was built to withstand scrutiny from compliance teams,
          internal marketing departments, and enterprise stakeholders.
          Every decision is documented, measurable, and optimised for
          long-term credibility — not short-term volume.
        </p>
      </Section>

      {/* PLATFORMS */}
      <Section title="Platforms & Tools Used">
        <p>
          Meta Ads · Google Analytics · Google Tag Manager · CRM & enquiry
          management systems · Creative testing frameworks
        </p>
      </Section>

      {/* RESULTS */}
      <Section title="Results Achieved">
        <ul className="list-disc pl-6 space-y-2">
          <li><b>2× increase</b> in engagement rates</li>
          <li>Higher quality patient enquiries</li>
          <li>Improved cost efficiency under fixed budgets</li>
          <li>Zero compliance violations</li>
        </ul>
      </Section>

      {/* INSIGHTS */}
      <Section title="Key Insights">
        <p>
          In healthcare marketing, trust converts better than urgency.
          Performance improves when education, clarity, and sensitivity are
          embedded into the growth system from the start.
        </p>
      </Section>

      {/* GLOBAL */}
      <Section title="Global Applicability">
        <p>
          This framework adapts effectively across India, the UK, the US,
          and the Middle East with localisation aligned to regional
          medical advertising regulations.
        </p>
      </Section>

      {/* IDEAL FIT */}
      <Section title="Who This Is For">
        <ul className="list-disc pl-6 space-y-2">
          <li>Aesthetic & dermatology clinics</li>
          <li>Hospitals & speciality healthcare providers</li>
          <li>Healthcare brands seeking trust-led growth</li>
        </ul>
      </Section>

      {/* CTA */}
      <section className="py-32 px-6 text-center">
        <h2 className="text-4xl font-semibold">
          Need Compliance-Safe Healthcare Growth?
        </h2>
        <p className="mt-6 text-white/60 max-w-3xl mx-auto">
          We design healthcare marketing systems that balance performance,
          credibility, and long-term brand trust.
        </p>
        <a
          href="/contact"
          className="shimmer-btn inline-block mt-12 rounded-full bg-[#2F8CFF] px-16 py-4 text-sm font-medium"
        >
          Book a Strategy Call
        </a>

        <p className="text-xs text-white/40 mt-8">
          This framework represents how Navora Ads approaches regulated industries globally.
        </p>
      </section>

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
