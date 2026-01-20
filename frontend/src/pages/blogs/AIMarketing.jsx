import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // ✅ FIX: Helmet imported


export default function AIMarketing() {
  return (
    <div
      className="min-h-screen w-full text-white"
      style={{
        background:
          "radial-gradient(circle at top, #1a2233 0%, #0b0f17 45%, #05070c 100%)",
      }}
    >
        {/* ================= SEO META TAGS ================= */}
      <Helmet>
        <title>AI Marketing Services | AI Video Advertising Agency in Chennai</title>
        <meta
          name="description"
          content="Navora Ads provides AI marketing services including AI video ads, AI creatives, reels, and performance-driven advertising to scale faster with lower costs."
        />

        {/* ================= FAQ SCHEMA ================= */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is AI marketing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "AI marketing uses artificial intelligence to automate, optimize, and personalize marketing activities such as ad creatives, videos, targeting, and performance testing."
                }
              },
              {
                "@type": "Question",
                "name": "How does AI video advertising work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "AI video advertising uses AI tools to generate scripts, visuals, voiceovers, and videos quickly, allowing businesses to test and scale creatives without traditional shoots."
                }
              },
              {
                "@type": "Question",
                "name": "Is AI marketing better than traditional advertising?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "AI marketing reduces production costs, speeds up creative testing, and improves scalability compared to traditional advertising methods."
                }
              },
              {
                "@type": "Question",
                "name": "Which businesses should use AI marketing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "AI marketing is ideal for startups, service-based businesses, e-commerce brands, clinics, real estate companies, and advertisers running Meta or Google Ads."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <span className="text-blue-400 text-sm font-semibold">
          Blog / AI Marketing
        </span>

        <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
          AI Marketing & AI Video Advertising Services
        </h1>

        <p className="text-gray-300 max-w-3xl text-base md:text-lg">
          Navora Ads helps businesses scale faster using AI-powered marketing.
          We create high-converting AI videos, ad creatives, and campaigns that
          reduce production cost, increase speed, and deliver measurable results.
        </p>
      </section>

      {/* ================= IMAGE ================= */}
      <section className="max-w-7xl mx-auto px-4">
        <img
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400"
          alt="AI Marketing and AI Video Advertising"
          className="rounded-2xl w-full object-cover max-h-[420px]"
        />
      </section>

      {/* ================= INTRO ================= */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          What Is AI Marketing?
        </h2>

        <p className="text-gray-300 mb-6 max-w-4xl">
          AI marketing uses artificial intelligence to automate, personalize,
          and optimize marketing activities. From AI video creation to
          creative testing and audience personalization, AI allows brands to
          produce more content and achieve better performance in less time.
        </p>

        <p className="text-gray-300 max-w-4xl">
          Instead of relying on expensive shoots and long production cycles,
          AI marketing enables fast iteration, localized creatives, and
          scalable advertising across platforms like Meta, Google, and YouTube.
        </p>
      </section>

      {/* ================= WHY AI ================= */}
      <section className="max-w-7xl mx-auto px-4 py-20 grid gap-16 md:grid-cols-2">
        {/* LEFT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Why AI Marketing Is the Future of Advertising
          </h2>

          <p className="text-gray-300 mb-6">
            Traditional ad production is slow and expensive. AI marketing
            removes these limitations by allowing brands to create, test,
            and optimize creatives at scale. Businesses that adopt AI marketing
            gain a clear competitive advantage.
          </p>

          <ul className="space-y-4 text-gray-300 list-disc pl-5">
            <li>Rapid creative production and deployment</li>
            <li>Significantly lower production costs</li>
            <li>Scalable video and static ad creatives</li>
            <li>Faster A/B testing and optimization</li>
            <li>High engagement on Reels, Shorts & Stories</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
          <h3 className="text-xl font-bold mb-6 text-blue-400">
            Our AI Marketing Process
          </h3>

          <ol className="space-y-5 text-gray-300 list-decimal pl-5">
            <li>Business, brand & audience analysis</li>
            <li>AI script writing & creative concept planning</li>
            <li>AI video & creative production</li>
            <li>Platform-ready formatting (Reels, Shorts, Ads)</li>
            <li>Performance testing, optimization & scaling</li>
          </ol>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
          AI Marketing Services We Offer
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "AI video ads for Meta & Google Ads",
            "AI reels & short-form video content",
            "AI posters & static ad creatives",
            "Localized AI video ads (multi-language)",
            "Bulk creative production for scaling",
            "AI-powered A/B testing creatives",
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

      {/* ================= WHO IT IS FOR ================= */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
          Who Should Use AI Marketing?
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-gray-300">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            Startups & growing brands
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            E-commerce & D2C businesses
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            Clinics & service-based businesses
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            Real estate & education brands
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            Performance marketing advertisers
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            High-ticket service providers
          </div>
        </div>
      </section>
      
       {/* ================= FAQ SECTION (VISIBLE) ================= */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="font-semibold mb-2">
              Is AI video suitable for ads?
            </h3>
            <p className="text-gray-300 text-sm">
              Yes. AI videos are optimized for Meta Ads, Google Ads, Reels, and
              Shorts and perform exceptionally well when tested correctly.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="font-semibold mb-2">
              Does AI marketing reduce cost?
            </h3>
            <p className="text-gray-300 text-sm">
              AI marketing significantly reduces creative production costs and
              allows faster iteration compared to traditional methods.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="font-semibold mb-2">
              Can AI creatives be localized?
            </h3>
            <p className="text-gray-300 text-sm">
              Yes. AI allows localization of language, visuals, and messaging
              for different regions and audiences.
            </p>
          </div>
        </div>
      </section>

      
      {/* ================= CTA ================= */}
      <section>
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Scale with AI Marketing?
          </h3>

          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Launch high-performing AI video ads and creatives without expensive
            shoots, delays, or high production costs.
          </p>

          <a
            href="https://wa.me/919952957187"
            className="shimmer-btn mt-6 inline-flex rounded-full bg-[#2F8CFF] px-10 py-3 text-white font-medium"
          >
            Get AI Marketing Strategy
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
