import React from "react";
import { Link } from "react-router-dom";

export default function SEO() {
  return (
    <div
      className="min-h-screen w-full text-white"
      style={{
        background:
          "radial-gradient(circle at top, #1a2233 0%, #0b0f17 45%, #05070c 100%)",
      }}
    >
      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <span className="text-blue-400 text-sm font-semibold">
          Blog / SEO
        </span>

        <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
          SEO Services for Sustainable Business Growth
        </h1>

        <p className="text-gray-300 max-w-3xl text-base md:text-lg">
          We help businesses rank higher on Google using proven SEO strategies
          focused on traffic quality, conversions, and long-term visibility.
          Our SEO approach is data-driven, ethical, and built for consistent growth.
        </p>
      </section>

      {/* ================= IMAGE ================= */}
      <section className="max-w-7xl mx-auto px-4">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400"
          alt="SEO Services and Search Engine Optimization"
          className="rounded-2xl w-full object-cover max-h-[420px]"
        />
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-4 py-20 grid gap-16 md:grid-cols-2">
        {/* LEFT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Why SEO Still Matters in 2026
          </h2>

          <p className="text-gray-300 mb-6">
            SEO remains the most cost-effective digital marketing channel.
            Unlike paid ads, organic traffic compounds over time and delivers
            high-intent users who are actively searching for your services.
          </p>

          <ul className="space-y-4 text-gray-300 list-disc pl-5">
            <li>Higher organic visibility & brand trust</li>
            <li>Consistent leads without daily ad spend</li>
            <li>Better website user experience</li>
            <li>Improved conversion rates</li>
            <li>Long-term ROI growth</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
          <h3 className="text-xl font-bold mb-6 text-blue-400">
            Our SEO Process
          </h3>

          <ol className="space-y-5 text-gray-300 list-decimal pl-5">
            <li>SEO audit & competitor analysis</li>
            <li>Keyword research & intent mapping</li>
            <li>On-page SEO & technical optimization</li>
            <li>Content strategy & internal linking</li>
            <li>Backlink building & authority growth</li>
          </ol>
        </div>
      </section>

      {/* ================= SEO SERVICES ================= */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
          Our SEO Services Include
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Local SEO (Google Business Profile optimization)",
            "On-page & Technical SEO",
            "Keyword research & content planning",
            "SEO for service-based businesses",
            "Website speed & Core Web Vitals optimization",
            "Monthly reporting & performance tracking",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-6"
            >
              <p className="text-gray-300">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Want to Rank Higher on Google?
          </h3>

          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let’s build an SEO strategy that drives consistent traffic,
            qualified leads, and long-term growth for your business.
          </p>

          <a
              href="https://wa.me/919952957187"
              className="shimmer-btn mt-6 inline-flex rounded-full bg-[#2F8CFF] px-10 py-3 text-white font-medium"
            >
            Get Free SEO Consultation
          </a>

          <div className="mt-8">
            <Link
              to="/blog"
              className="text-blue-400 hover:underline text-sm"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
