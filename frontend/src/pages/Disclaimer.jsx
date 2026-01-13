// Navora Ads — DISCLAIMER PAGE
// Corporate | Legal | Enterprise-Grade
// React + Tailwind CSS

import React from "react";
import { Helmet } from "react-helmet-async";

export default function Disclaimer() {
  return (
    <main className="bg-[#0B0D10] text-[#F5F7FA]">

      {/* SEO */}
      <Helmet>
        <title>Disclaimer | Navora Ads</title>
        <meta
          name="description"
          content="Legal disclaimer for Navora Ads. Information, limitations, liabilities, and professional boundaries explained."
        />
      </Helmet>

      {/* HERO */}
      <section className="pt-44 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="uppercase tracking-widest text-xs text-white/50 mb-6">
            Legal Information
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold">
            Disclaimer
          </h1>
          <p className="mt-6 text-white/60 text-lg">
            Please read this disclaimer carefully before using our website or
            engaging with our services.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-28 px-6">
        <div className="max-w-4xl mx-auto space-y-14">

          {/* SECTION */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              General Information
            </h2>
            <p className="text-white/60 leading-relaxed">
              The information provided on Navora Ads (https://navoraads.com) is
              for general informational and educational purposes only. All
              content is published in good faith to explain our services,
              methodologies, and perspectives related to digital marketing,
              advertising, growth systems, and consulting.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              No Guarantees or Assurances
            </h2>
            <p className="text-white/60 leading-relaxed">
              Navora Ads does not guarantee specific results, performance
              outcomes, revenue growth, lead volume, rankings, or business
              success. Digital marketing performance depends on numerous
              variables including market conditions, competition, platform
              algorithms, budget allocation, and client execution.
            </p>
            <p className="text-white/60 leading-relaxed mt-4">
              Past results, examples, or case studies displayed on this website
              are illustrative only and do not represent guaranteed outcomes.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Professional & Educational Disclaimer
            </h2>
            <p className="text-white/60 leading-relaxed">
              The content on this website does not constitute legal, financial,
              professional, or business advice. Decisions made based on the
              information provided should be done after conducting independent
              research or consulting qualified professionals.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Client & Third-Party References
            </h2>
            <p className="text-white/60 leading-relaxed">
              References to clients, brands, platforms, tools, or third-party
              services are for descriptive purposes only. Such references do not
              imply endorsement, partnership, or sponsorship unless explicitly
              stated in writing.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              External Links Disclaimer
            </h2>
            <p className="text-white/60 leading-relaxed">
              This website may contain links to external websites not maintained
              by Navora Ads. We do not control or guarantee the accuracy,
              relevance, or completeness of information on third-party websites.
              Visiting external links is done at your own discretion and risk.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Limitation of Liability
            </h2>
            <p className="text-white/60 leading-relaxed">
              Navora Ads shall not be held liable for any direct, indirect,
              incidental, consequential, or special damages arising from the
              use of this website or reliance on its content, including but not
              limited to loss of data, revenue, or business opportunities.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Changes to This Disclaimer
            </h2>
            <p className="text-white/60 leading-relaxed">
              Navora Ads reserves the right to update or modify this disclaimer
              at any time without prior notice. Changes will be effective
              immediately upon posting.
            </p>
          </div>

          {/* CONTACT */}
          <div className="border-t border-white/10 pt-10 text-white/60">
            <p>
              For any questions regarding this disclaimer, contact us at:
            </p>
            <p className="mt-2">
              📧{" "}
              <a
                href="mailto:legal@navoraads.com"
                className="text-[#2F8CFF] hover:underline"
              >
                legal@navoraads.com
              </a>
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
