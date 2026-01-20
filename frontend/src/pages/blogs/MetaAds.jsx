import React from "react";
import { Link } from "react-router-dom";

export default function MetaAds() {
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
          Blog / Meta Ads
        </span>

        <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
          Meta Ads (Facebook & Instagram) Management
        </h1>

        <p className="text-gray-300 max-w-3xl text-base md:text-lg">
          We help businesses scale using performance-driven Facebook & Instagram
          advertising. Our Meta Ads strategies focus on lead quality, creative
          testing, and profitable scaling — not vanity metrics.
        </p>
      </section>

      {/* ================= IMAGE ================= */}
      <section className="max-w-7xl mx-auto px-4">
        <img
          src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1400"
          alt="Meta Ads Facebook Instagram Marketing"
          className="rounded-2xl w-full object-cover max-h-[420px]"
        />
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-4 py-20 grid gap-16 md:grid-cols-2">
        {/* LEFT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Why Meta Ads Matter in 2026
          </h2>

          <p className="text-gray-300 mb-6">
            Meta Ads remain one of the most powerful platforms for demand
            generation. With advanced audience targeting, creative automation,
            and AI-driven optimization, businesses can scale faster when campaigns
            are structured correctly.
          </p>

          <ul className="space-y-4 text-gray-300 list-disc pl-5">
            <li>Facebook & Instagram Ads</li>
            <li>Reels & Story-based campaigns</li>
            <li>Lead Forms & Website Conversions</li>
            <li>Remarketing & Lookalike Audiences</li>
            <li>Conversion API (CAPI) setup</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
          <h3 className="text-xl font-bold mb-6 text-blue-400">
            Our Meta Ads Process
          </h3>

          <ol className="space-y-5 text-gray-300 list-decimal pl-5">
            <li>
              Audience research & funnel mapping
            </li>
            <li>
              Creative strategy (Reels, static & carousel)
            </li>
            <li>
              Campaign setup & tracking verification
            </li>
            <li>
              Weekly optimization & creative testing
            </li>
            <li>
              Scaling with Advantage+ & CAPI
            </li>
          </ol>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
          What You Get with Navora Ads
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "High-quality leads (not junk traffic)",
            "Lower cost per lead over time",
            "Creative testing at scale",
            "Clear reporting & transparency",
            "Pixel + Conversion API setup",
            "Mobile-first ad creatives",
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
            Ready to Scale with Meta Ads?
          </h3>

          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let’s build a profitable Facebook & Instagram Ads strategy tailored
            to your business goals.
          </p>

          <a
              href="https://wa.me/919952957187"
              className="shimmer-btn mt-6 inline-flex rounded-full bg-[#2F8CFF] px-10 py-3 text-white font-medium"
            >
            Book Free Strategy Call
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
