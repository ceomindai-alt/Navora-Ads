import React from "react";
import { Link } from "react-router-dom";

export default function WebsiteDev() {
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
          Blog / Website Development
        </span>

        <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
          Website Design & Development for High Conversions
        </h1>

        <p className="text-gray-300 max-w-3xl text-base md:text-lg">
          We build fast, conversion-focused, SEO-ready websites that turn traffic
          into leads and sales. Every website is designed to support ads, organic
          traffic, and long-term business growth.
        </p>
      </section>

      {/* ================= IMAGE ================= */}
      <section className="max-w-7xl mx-auto px-4">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400"
          alt="Website design and development services"
          className="rounded-2xl w-full object-cover max-h-[420px]"
        />
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-4 py-20 grid gap-16 md:grid-cols-2">
        {/* LEFT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Why Your Website Is the Foundation of Marketing
          </h2>

          <p className="text-gray-300 mb-6">
            Ads and SEO only work as well as the website behind them. A slow,
            confusing, or poorly structured website increases bounce rates,
            wastes ad spend, and reduces trust. We design websites that guide
            users clearly toward action.
          </p>

          <ul className="space-y-4 text-gray-300 list-disc pl-5">
            <li>Higher conversion rates from ads & SEO</li>
            <li>Better Quality Scores in Google Ads</li>
            <li>Improved user experience on mobile</li>
            <li>Stronger brand credibility & trust</li>
            <li>Faster page load speeds</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
          <h3 className="text-xl font-bold mb-6 text-blue-400">
            Our Website Development Process
          </h3>

          <ol className="space-y-5 text-gray-300 list-decimal pl-5">
            <li>Business & audience understanding</li>
            <li>UX wireframes & conversion planning</li>
            <li>Modern UI design (mobile-first)</li>
            <li>SEO-ready development</li>
            <li>Speed optimization & testing</li>
          </ol>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
          Website Services We Offer
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Business websites & landing pages",
            "Ad-optimized landing pages",
            "SEO-friendly website structure",
            "Mobile-first responsive design",
            "Speed & Core Web Vitals optimization",
            "Website redesign & conversion improvement",
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

      {/* ================= WHY NAVORA ================= */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
          Why Choose Navora Ads for Website Development
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="font-semibold mb-2">Marketing-First Approach</h4>
            <p className="text-gray-300 text-sm">
              We don’t just build websites — we build conversion systems that
              support ads, SEO, and lead generation.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="font-semibold mb-2">Speed & Performance Focused</h4>
            <p className="text-gray-300 text-sm">
              Our websites are optimized for speed, mobile performance, and
              Google Core Web Vitals.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="font-semibold mb-2">SEO-Ready Structure</h4>
            <p className="text-gray-300 text-sm">
              Clean code, proper heading structure, and SEO best practices
              built-in from day one.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="font-semibold mb-2">Long-Term Scalability</h4>
            <p className="text-gray-300 text-sm">
              Easy to update, expand, and scale as your business grows.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Need a Website That Actually Converts?
          </h3>

          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let’s build a fast, modern website that supports your ads, SEO,
            and business growth.
          </p>

          <a
              href="https://wa.me/919952957187"
              className="shimmer-btn mt-6 inline-flex rounded-full bg-[#2F8CFF] px-10 py-3 text-white font-medium"
            >
            Get Website Consultation
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
