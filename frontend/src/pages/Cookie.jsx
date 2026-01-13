// Navora Ads — COOKIE POLICY
// React 19 + Tailwind CSS
// Corporate • Premium • CMP-ready

import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function CookiePolicy() {
  return (
    <main className="bg-[#0B0D10] text-[#F5F7FA] overflow-hidden">

      {/* ================= SEO ================= */}
      <Helmet>
        <title>Cookie Policy | Navora Ads</title>
        <meta
          name="description"
          content="Learn how Navora Ads uses cookies and tracking technologies to improve website performance, analytics, and marketing effectiveness."
        />
        <link rel="canonical" href="https://navoraads.com/cookie-policy" />
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="pt-44 pb-28 px-6 border-b border-white/10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Cookie Policy
          </h1>
          <p className="mt-6 text-white/60 text-sm">
            Last updated: 17 December 2025
          </p>
        </motion.div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-28 px-6">
        <div className="max-w-4xl mx-auto space-y-14 text-white/70 text-sm leading-relaxed">

          <PolicySection title="1. Overview">
            <p>
              This Cookie Policy explains how <strong>Navora Ads</strong> uses
              cookies and similar technologies when you visit
              <strong> https://www.navoraads.com</strong>. By continuing to use
              our website, you consent to the use of cookies as described below,
              unless disabled via your browser or consent preferences.
            </p>
          </PolicySection>

          <PolicySection title="2. What Are Cookies?">
            <p>
              Cookies are small text files stored on your device that help
              websites function efficiently, remember preferences, analyse
              traffic, and improve user experience.
            </p>
          </PolicySection>

          <PolicySection title="3. Types of Cookies We Use">
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Essential Cookies:</strong> Required for core website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand user behaviour (e.g., Google Analytics)</li>
              <li><strong>Marketing Cookies:</strong> Used for advertising and remarketing (e.g., Meta Pixel)</li>
              <li><strong>Preference Cookies:</strong> Remember user settings and choices</li>
            </ul>
          </PolicySection>

          <PolicySection title="4. Third-Party Cookies">
            <p>
              We may allow third-party service providers such as Google, Meta,
              and analytics platforms to place cookies on our website for
              measurement, performance tracking, and advertising purposes.
            </p>
          </PolicySection>

          <PolicySection title="5. Managing Cookies">
            <p>
              You may control or disable cookies through your browser settings.
              Please note that disabling certain cookies may affect website
              functionality and performance.
            </p>
          </PolicySection>

          <PolicySection title="6. Consent & Compliance">
            <p>
              Where required by law, cookie usage is based on user consent. Our
              website may display a cookie consent banner allowing you to manage
              preferences in compliance with applicable data protection laws.
            </p>
          </PolicySection>

          <PolicySection title="7. Updates to This Policy">
            <p>
              This Cookie Policy may be updated periodically. Changes will be
              posted on this page with a revised effective date.
            </p>
          </PolicySection>

          <PolicySection title="8. Contact Information">
            <p>
              <strong>Navora Ads</strong><br />
              Vandalur, Chennai, Tamil Nadu, India<br />
              Phone: +91 99529 57187<br />
              Email: info@navoraads.com
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
