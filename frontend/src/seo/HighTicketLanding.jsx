import React from "react";

export default function HighTicketLanding() {
  return (
    <main
      className="min-h-screen text-gray-100"
      style={{
        background:
          "radial-gradient(1200px 600px at 20% -10%, #1f3b8f33, transparent), linear-gradient(180deg, #06080f 0%, #0b0d10 100%)",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* ================= HERO ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
          Performance Marketing for Businesses Ready to Scale
        </h1>

        <p className="mt-3 text-sm text-white/60">
          Trusted by growth-focused businesses across India.
        </p>

        <p className="mt-6 text-lg max-w-3xl text-white/80">
          We help serious businesses generate consistent, high-quality leads
          using Google Ads and performance marketing systems.
          <strong className="text-white">
            {" "}
            Minimum engagement: ₹50,000 per month.
          </strong>
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#strategy-form"
            className="px-8 py-4 bg-[#2F8CFF] hover:bg-[#1f6fe0] text-white font-semibold rounded-lg transition"
          >
            Book a Free Strategy Call
          </a>

          <a
            href="tel:+91XXXXXXXXXX"
            className="px-8 py-4 border border-white/30 hover:border-white text-white rounded-lg font-semibold transition"
          >
            Call Now
          </a>
        </div>
      </section>

      <hr className="border-white/10" />

      {/* ================= TRUST ================= */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-lg text-white/85">
            <strong className="text-white">Navora Ads</strong> is a
            performance-driven digital marketing agency helping businesses
            across India and international markets scale profitably.
          </p>

          <p className="mt-3 text-sm text-white/60">
            Led by performance marketers focused on ROI, not vanity metrics.
          </p>
        </div>
      </section>

      <hr className="border-white/10" />

      {/* ================= FIT FILTER ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">
            We’re a Good Fit If You
          </h3>
          <ul className="space-y-3 list-disc pl-6 text-white/80">
            <li>Are a business owner or founder</li>
            <li>Want qualified leads or sales (not traffic)</li>
            <li>Can invest ₹50,000+ per month</li>
            <li>Want a long-term growth partner</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">
            We’re Not a Fit If You
          </h3>
          <ul className="space-y-3 list-disc pl-6 text-white/60">
            <li>Are looking for cheap packages</li>
            <li>Only want social media posting</li>
            <li>Are testing with very small budgets</li>
            <li>Are looking for jobs or courses</li>
          </ul>
        </div>
      </section>

      <hr className="border-white/10" />

      {/* ================= SERVICES ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-white">What We Do</h2>
          <ul className="grid md:grid-cols-2 gap-6 text-lg text-white/80">
            <li>Google Ads (Search & Performance)</li>
            <li>Lead Generation Systems</li>
            <li>Conversion-Focused Landing Pages</li>
            <li>Industry-Specific Ad Strategies</li>
            <li>ROI Tracking & Continuous Optimization</li>
          </ul>
        </div>
      </section>

      {/* ================= EXPECTATION ================= */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-lg text-white/85">
          We don’t promise overnight success.
          <br />
          We build repeatable systems that improve lead quality and ROI over
          <strong className="text-white"> 60–90 days</strong>.
        </p>
      </section>

      {/* ================= FORM ================= */}
      <section
        id="strategy-form"
        className="py-24"
        style={{
          background:
            "linear-gradient(180deg, #0b0d10 0%, #05070c 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-white">
            Book a Free Strategy Call
          </h2>

          <form
            className="grid gap-6"
            onSubmit={(e) => {
              e.preventDefault();
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: "form_submission",
                form_type: "strategy_call",
              });
              window.location.href = "/thank-you";
            }}
          >
            {[
              "Full Name",
              "Company Name",
              "Website (if any)",
              "Phone Number",
            ].map((ph, i) => (
              <input
                key={i}
                placeholder={ph}
                required={i !== 2}
                className="p-4 rounded bg-[#0f1320] text-white border border-white/10 focus:outline-none focus:border-[#2F8CFF]"
              />
            ))}

            <select
              required
              className="p-4 rounded bg-[#0f1320] text-white border border-white/10"
            >
              <option value="">Monthly Marketing Budget</option>
              <option value="below-50k">Below ₹50,000 (Not a fit)</option>
              <option value="50k-1l">₹50,000 – ₹1,00,000</option>
              <option value="1l+">₹1,00,000+</option>
            </select>

            <button
              type="submit"
              className="bg-[#2F8CFF] hover:bg-[#1f6fe0] text-white font-semibold py-4 rounded transition"
            >
              Request Strategy Call
            </button>
          </form>

          <p className="mt-6 text-sm text-white/50">
            We work only with businesses investing ₹50,000+ per month to ensure
            real ROI.
          </p>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-10 text-center text-sm text-white/40">
        © {new Date().getFullYear()} Navora Ads · Performance Marketing Agency
      </footer>
    </main>
  );
}
