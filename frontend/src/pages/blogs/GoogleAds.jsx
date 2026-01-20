import { Link } from "react-router-dom";

export default function GoogleAds() {
  return (
    <div
      className="min-h-screen w-full text-white"
      style={{
        background:
          "radial-gradient(circle at top, #1a2233 0%, #0b0f17 45%, #05070c 100%)",
      }}
    >
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <span className="text-blue-400 text-sm font-semibold">
          Blog / Google Ads
        </span>

        <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
          Google Ads Management for High-Intent Leads
        </h1>

        <p className="text-gray-300 max-w-3xl text-lg">
          We manage performance-focused Google Ads campaigns that drive qualified
          enquiries, reduce wasted spend, and scale profitably.
        </p>
      </section>

      {/* IMAGE */}
      <section className="max-w-7xl mx-auto px-4">
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1400"
          alt="Google Ads management services"
          className="rounded-2xl w-full object-cover max-h-[420px]"
        />
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-4 py-20 grid gap-16 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Why Google Ads Works So Well
          </h2>
          <p className="text-gray-300 mb-6">
            Google Ads captures customers when intent is highest. When campaigns
            are structured properly, Google Ads becomes one of the most
            predictable lead generation channels available.
          </p>

          <ul className="list-disc pl-5 space-y-3 text-gray-300">
            <li>High-intent keyword targeting</li>
            <li>Immediate traffic & results</li>
            <li>Scalable budgets</li>
            <li>Measurable ROI</li>
            <li>Strong performance for local & service businesses</li>
          </ul>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-6 text-blue-400">
            Our Google Ads Process
          </h3>

          <ol className="list-decimal pl-5 space-y-4 text-gray-300">
            <li>Account audit & competitor analysis</li>
            <li>Keyword & intent research</li>
            <li>Campaign structure & setup</li>
            <li>Landing page & conversion tracking</li>
            <li>Ongoing optimization & scaling</li>
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Want Better Leads from Google Ads?
          </h3>

          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free Google Ads audit and discover how to lower CPC while
            increasing lead quality.
          </p>

          <a
              href="https://wa.me/919952957187"
              className="shimmer-btn mt-6 inline-flex rounded-full bg-[#2F8CFF] px-10 py-3 text-white font-medium"
            >
            Get Free Audit
          </a>

          <div className="mt-8">
            <Link to="/blog" className="text-blue-400 hover:underline text-sm">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
