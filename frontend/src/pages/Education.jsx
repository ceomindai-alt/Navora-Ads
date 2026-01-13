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
        <p>
          Our team has delivered admissions and awareness campaigns across
          schools, colleges, and education-driven institutions.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-6 text-sm">
          <div className="border border-white/10 rounded-xl p-6">
            <h3 className="text-white font-medium mb-2">Education Brands</h3>
            <p>
              SRM School<br />
              Vels Institutions<br />
              Saveetha Group & academic institutions
            </p>
          </div>

          <div className="border border-white/10 rounded-xl p-6">
            <h3 className="text-white font-medium mb-2">Admissions Systems</h3>
            <p>
              Seasonal campaign frameworks<br />
              Parent-intent messaging<br />
              Enquiry qualification workflows
            </p>
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
