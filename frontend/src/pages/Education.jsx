// Navora Ads — Education Case Study (Enterprise Version)
// React 19 + Tailwind CSS

import React from "react";
import { Helmet } from "react-helmet-async";

export default function EducationCaseStudy() {
  return (
    <main className="bg-[#0B0D10] text-[#F5F7FA]">

      <Helmet>
        <title>Education Admissions Growth Case Study | Navora Ads</title>
        <meta
          name="description"
          content="Enterprise education marketing case study showcasing admissions growth, enquiry quality optimisation, and seasonal performance systems."
        />
      </Helmet>

      {/* HERO */}
      <section className="pt-44 pb-32 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-widest text-xs text-white/50 mb-6">
            Education Case Study
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Admissions Growth Systems Built<br />
            for Education Institutions
          </h1>
          <p className="mt-8 text-white/60 text-xl max-w-4xl mx-auto">
            How Navora Ads helps schools and institutions scale admissions
            through intent-based digital systems aligned to parent decision
            behaviour.
          </p>
        </div>
      </section>

      <Section title="Executive Summary">
        <p>
          Education marketing requires trust, timing, and clarity.
          Navora Ads implemented a seasonal admissions framework that aligned
          messaging, performance media, and enquiry qualification into a
          unified system.
        </p>
      </Section>

      <Section title="Education & Institutional Exposure">
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
    Our team has delivered admissions and awareness campaigns across
    schools, colleges, and education-driven institutions.
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
          Education Brands
        </h3>
        <p className="text-white/70 leading-relaxed">
          SRM School<br />
          Vels Institutions<br />
          Saveetha Group & academic institutions
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
          Admissions Systems
        </h3>
        <p className="text-white/70 leading-relaxed">
          Seasonal campaign frameworks<br />
          Parent-intent messaging<br />
          Enquiry qualification workflows
        </p>
      </div>
    </div>

  </div>
</Section>


      <Section title="Challenges">
        <ul className="list-disc pl-6 space-y-2">
          <li>High enquiry volume with low admission intent</li>
          <li>Seasonal demand spikes</li>
          <li>Brand trust critical for parent decisions</li>
        </ul>
      </Section>

      <Section title="Strategy & Execution">
        <p>
          Admissions-focused funnels were deployed combining parent psychology,
          seasonal messaging, and performance optimisation to reduce cost per
          qualified enquiry while maintaining scale.
        </p>
      </Section>

      <Section title="Results Achieved">
        <ul className="list-disc pl-6 space-y-2">
          <li><b>41% reduction</b> in cost per qualified enquiry</li>
          <li>Higher parent intent & conversion readiness</li>
          <li>Improved admissions predictability</li>
        </ul>
      </Section>

      <Section title="Why Institutions Trust This Framework">
        <p>
          This system respects reputation, parent trust, and academic brand
          integrity while delivering measurable admissions outcomes.
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
    <section className="py-20 px-6 text-center">
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
