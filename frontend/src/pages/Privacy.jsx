// Navora Ads — CORPORATE PRIVACY POLICY
// React 19 + Tailwind CSS
// Premium • Consulting-grade • Global-ready

import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-[#0B0D10] text-[#F5F7FA] overflow-hidden">

      {/* ================= SEO ================= */}
      <Helmet>
        <title>Privacy Policy | Navora Ads</title>
        <meta
          name="description"
          content="Read the Privacy Policy of Navora Ads. Learn how we collect, use, protect, and manage personal information across our digital marketing services."
        />
        <link rel="canonical" href="https://navoraads.com/privacy-policy" />
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="pt-44 pb-24 px-6 ">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-6 text-white/60 text-sm">
            Last updated: 17 December 2025
          </p>
        </motion.div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-14 text-white/70 text-sm leading-relaxed">

          <PolicySection title="1. Overview">
            <p>
              Navora Ads ("Navora Ads", "we", "our", or "us") is committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard information when you visit
              <strong> https://www.navoraads.com</strong> or engage with our
              digital marketing, advertising, and consulting services.
            </p>
          </PolicySection>

          <PolicySection title="2. Information We Collect">
            <ul className="list-disc list-inside space-y-2">
              <li>Personal identifiers such as name, email, phone number</li>
              <li>Business information including company name and website</li>
              <li>Technical data such as IP address, browser, device</li>
              <li>Usage data including pages viewed and time spent</li>
              <li>Approximate location information</li>
            </ul>
          </PolicySection>

          <PolicySection title="3. Purpose of Data Processing">
            <ul className="list-disc list-inside space-y-2">
              <li>Responding to enquiries and consultations</li>
              <li>Delivering marketing, advertising, development, and training services</li>
              <li>Preparing proposals, contracts, and invoices</li>
              <li>Improving service quality and website performance</li>
              <li>Legal, compliance, and security obligations</li>
            </ul>
          </PolicySection>

          <PolicySection title="4. Legal Basis for Processing">
            <p>
              We process personal data based on consent, contractual necessity,
              compliance with legal obligations, and legitimate business
              interests such as service improvement and performance analysis.
            </p>
          </PolicySection>

          <PolicySection title="5. Cookies & Tracking Technologies">
            <p>
              We use cookies and similar technologies including Google Analytics
              and Meta Pixel to analyse website usage, improve marketing
              effectiveness, and enhance user experience. Cookie preferences
              may be managed through browser settings.
            </p>
          </PolicySection>

          <PolicySection title="6. Information Sharing">
            <p>We do not sell or rent personal information.</p>
            <ul className="mt-4 list-disc list-inside space-y-2">
              <li>Trusted service providers (hosting, analytics, CRM)</li>
              <li>Advertising platforms for campaign execution</li>
              <li>Regulatory or legal authorities where required</li>
            </ul>
          </PolicySection>

          <PolicySection title="7. Data Security">
            <p>
              We maintain appropriate technical and organisational safeguards to
              protect personal data. While we take security seriously, no
              internet transmission can be guaranteed as fully secure.
            </p>
          </PolicySection>

          <PolicySection title="8. Data Retention">
            <p>
              Personal information is retained only for as long as necessary to
              fulfil business, contractual, or legal requirements. Data deletion
              requests may be submitted at any time.
            </p>
          </PolicySection>

          <PolicySection title="9. International Data Transfers">
            <p>
              Your data may be processed outside India where our technology or
              service partners operate. Appropriate safeguards are applied in
              accordance with applicable laws.
            </p>
          </PolicySection>

          <PolicySection title="10. Client & Campaign Confidentiality">
            <p>
              All client data shared for campaign execution, analytics, or
              development remains confidential. Navora Ads does not claim
              ownership of client information.
            </p>
          </PolicySection>

          <PolicySection title="11. Your Rights">
            <p>
              Subject to applicable laws, you may request access, correction,
              deletion of your data, or withdraw consent for marketing
              communications.
            </p>
          </PolicySection>

          <PolicySection title="12. Children’s Privacy">
            <p>
              Our services are intended for business use. We do not knowingly
              collect information from individuals under 13 years of age.
            </p>
          </PolicySection>

          <PolicySection title="13. Policy Updates">
            <p>
              This Privacy Policy may be updated periodically. Updates will be
              posted on this page with a revised effective date.
            </p>
          </PolicySection>

          <PolicySection title="14. Contact Information">
            <p>
              <strong>Navora Ads</strong><br />
              Vandalur, Chennai, Tamil Nadu, India<br />
              Phone: +91 99529 57187<br />
              Email: info@navoraads.com
            </p>
          </PolicySection>

          <PolicySection title="15. Governing Law">
            <p>
              This Privacy Policy is governed by the laws of India. Any disputes
              shall be subject to the jurisdiction of courts in Chennai, Tamil
              Nadu.
            </p>
          </PolicySection>

        </div>
      </section>

    </main>
  );
}

function PolicySection({ title, children }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="text-white text-xl font-medium">{title}</h2>
      <div className="mt-4">{children}</div>
    </motion.div>
  );
}
