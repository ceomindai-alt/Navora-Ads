// Navora Ads — Terms & Conditions
// Global | Corporate | Legal-Safe
// React 19 + Tailwind CSS

import React from "react";
import { Helmet } from "react-helmet-async";

export default function Terms() {
  return (
    <main className="bg-[#0B0D10] text-[#F5F7FA]">

      {/* SEO */}
      <Helmet>
        <title>Terms & Conditions | Navora Ads</title>
        <meta
          name="description"
          content="Read the terms and conditions governing the use of Navora Ads website, services, courses, and digital marketing engagements."
        />
        <link rel="canonical" href="https://navoraads.com/terms" />
      </Helmet>

      {/* HERO */}
      <section className="pt-40 pb-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase tracking-widest text-xs text-white/50 mb-6">
            Legal
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold">
            Terms & Conditions
          </h1>
          <p className="mt-6 text-white/60 text-lg">
            These terms govern the use of Navora Ads’ website, services, courses,
            and professional engagements.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-14 text-white/60 text-sm leading-relaxed">

          {/* 1 */}
          <Block title="1. Acceptance of Terms">
            By accessing or using the Navora Ads website, services, training
            programs, or digital platforms, you agree to be bound by these Terms
            & Conditions. If you do not agree, please discontinue use.
          </Block>

          {/* 2 */}
          <Block title="2. Services Overview">
            Navora Ads provides digital marketing, performance advertising, SEO,
            website development, automation, consulting, and educational
            services. Specific deliverables, timelines, and scope are defined
            through written agreements or proposals.
          </Block>

          {/* 3 */}
          <Block title="3. No Guarantee of Results">
            While we follow performance-driven frameworks, results may vary
            based on market conditions, competition, budget, platform changes,
            and client cooperation. We do not guarantee rankings, leads,
            revenue, or specific outcomes.
          </Block>

          {/* 4 */}
          <Block title="4. Client Responsibilities">
            Clients are responsible for providing accurate information,
            approvals, access credentials, content, and timely feedback. Delays
            or inaccuracies may impact performance and timelines.
          </Block>

          {/* 5 */}
          <Block title="5. Payments & Billing">
            Fees, payment schedules, and refund terms are defined in individual
            proposals, invoices, or course enrollment pages. Late payments may
            result in service suspension.
          </Block>

          {/* 6 */}
          <Block title="6. Courses, Training & Digital Products">
            Course content is for educational purposes only. Enrollment does
            not guarantee employment, certification recognition, or financial
            results. Unauthorized redistribution of course material is
            prohibited.
          </Block>

          {/* 7 */}
          <Block title="7. Intellectual Property">
            All content, strategies, designs, frameworks, and materials
            developed by Navora Ads remain our intellectual property unless
            otherwise agreed in writing. Client-owned assets remain the
            property of the client.
          </Block>

          {/* 8 */}
          <Block title="8. Confidentiality">
            Both parties agree to maintain confidentiality of proprietary,
            strategic, and business information shared during engagements,
            unless disclosure is required by law.
          </Block>

          {/* 9 */}
          <Block title="9. Third-Party Platforms">
            Navora Ads may utilize third-party platforms such as Google, Meta,
            CRM tools, analytics platforms, and hosting providers. We are not
            responsible for outages, policy changes, or limitations imposed by
            these platforms.
          </Block>

          {/* 10 */}
          <Block title="10. Limitation of Liability">
            Navora Ads shall not be liable for indirect, incidental,
            consequential, or loss-of-profit damages arising from the use of
            our services or website.
          </Block>

          {/* 11 */}
          <Block title="11. Termination">
            Either party may terminate services in accordance with the terms
            outlined in the agreed proposal or contract. Outstanding dues
            remain payable upon termination.
          </Block>

          {/* 12 */}
          <Block title="12. Governing Law">
            These Terms & Conditions are governed by the laws of India. Any
            disputes shall be subject to the jurisdiction of courts in Chennai,
            Tamil Nadu.
          </Block>

          {/* 13 */}
          <Block title="13. Updates to Terms">
            Navora Ads reserves the right to modify these Terms & Conditions at
            any time. Updated versions will be published on this page with a
            revised effective date.
          </Block>

          {/* 14 */}
          <Block title="14. Contact Information">
            For questions regarding these Terms:
            <br />
            <br />
            <strong className="text-white">Navora Ads</strong>
            <br />
            Email:{" "}
            <a
              href="mailto:info@navoraads.com"
              className="text-[#2F8CFF] hover:underline"
            >
              info@navoraads.com
            </a>
            <br />
            Location: Chennai, Tamil Nadu, India
          </Block>

        </div>
      </section>

    </main>
  );
}

function Block({ title, children }) {
  return (
    <div>
      <h2 className="text-white font-medium text-lg mb-4">{title}</h2>
      <p>{children}</p>
    </div>
  );
}
