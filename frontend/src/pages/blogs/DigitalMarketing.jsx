import React from "react";
import { Link } from "react-router-dom";

export default function DigitalMarketing() {
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
          Blog / Digital Marketing
        </span>

        <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
          Digital Marketing Services for Scalable Business Growth
        </h1>

        <p className="text-gray-300 max-w-3xl text-base md:text-lg">
          Navora Ads delivers performance-driven digital marketing solutions
          focused on lead generation, brand visibility, and measurable ROI.
          We combine Google Ads, SEO, Meta Ads, AI marketing, and
          conversion-focused websites into one unified growth system.
        </p>
      </section>

      {/* ================= IMAGE ================= */}
      <section className="max-w-7xl mx-auto px-4">
        <img
          src="https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1400"
          alt="Digital marketing strategy and online growth"
          className="rounded-2xl w-full object-cover max-h-[420px]"
        />
      </section>

      {/* ================= INTRO ================= */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          What Is Digital Marketing?
        </h2>

        <p className="text-gray-300 mb-6 max-w-4xl">
          Digital marketing is the strategic use of online platforms to attract,
          engage, and convert potential customers. Unlike traditional marketing,
          digital marketing allows precise targeting, real-time optimization,
          and accurate performance tracking across channels.
        </p>

        <p className="text-gray-300 max-w-4xl">
          From search engines and social media to websites and AI-powered
          creatives, digital marketing enables businesses to reach the right
          audience at the right time with the right message.
        </p>
      </section>

      {/* ================= WHY DIGITAL MARKETING ================= */}
      <section className="max-w-7xl mx-auto px-4 py-20 grid gap-16 md:grid-cols-2">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Why Digital Marketing Is Essential Today
          </h2>

          <p className="text-gray-300 mb-6">
            Today’s customers research, compare, and make decisions online.
            Businesses without a strong digital presence lose visibility,
            credibility, and revenue to competitors who understand how to
            capture online demand.
          </p>

          <ul className="list-disc pl-5 space-y-3 text-gray-300">
            <li>Reach customers where they spend time online</li>
            <li>Generate consistent inbound leads</li>
            <li>Build brand trust and authority</li>
            <li>Track every rupee spent and earned</li>
            <li>Scale marketing efforts predictably</li>
          </ul>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
          <h3 className="text-xl font-bold mb-6 text-blue-400">
            Our Digital Marketing Philosophy
          </h3>

          <p className="text-gray-300 mb-4">
            We don’t chase vanity metrics like impressions or likes. Every
            digital marketing strategy we build is aligned with business goals
            such as leads, sales, and revenue growth.
          </p>

          <p className="text-gray-300">
            Our focus is on performance, transparency, and long-term success —
            not short-term hype.
          </p>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
          Digital Marketing Services We Offer
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Google Ads & performance marketing",
            "Search Engine Optimization (SEO)",
            "Meta Ads (Facebook & Instagram)",
            "AI video & creative marketing",
            "Website design & conversion optimization",
            "Lead generation & funnel strategy",
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-6"
            >
              <p className="text-gray-300">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
          Our Digital Marketing Process
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Business & audience analysis",
            "Channel-wise strategy planning",
            "Campaign & content execution",
            "Conversion tracking & analytics",
            "Continuous optimization & scaling",
          ].map((step, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-6"
            >
              <h4 className="font-semibold mb-2">
                Step {index + 1}
              </h4>
              <p className="text-gray-300 text-sm">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
          Industries We Serve
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-gray-300">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            Healthcare & Clinics
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            Real Estate & Construction
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            Education & Training
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            Professional Services
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            Local & Service Businesses
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            High-Ticket Service Providers
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Grow with Digital Marketing?
          </h3>

          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let’s build a digital marketing strategy that delivers consistent
            leads, strong brand visibility, and measurable business growth.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-500 transition px-10 py-3 rounded-lg font-semibold"
          >
            Get Free Digital Marketing Consultation
          </Link>

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
