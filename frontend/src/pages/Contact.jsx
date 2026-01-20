// Navora Ads — Contact Page
// Global / Corporate / Consulting Grade
// React 19 + Tailwind CSS

import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import WhatsAppCTA from "../components/WhatsAppCTA";
import emailjs from "@emailjs/browser";
import AnimatedSubmitButton from "../components/AnimatedSubmitButton";

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export default function Contact() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    company: "",
    budget: "",
    message: "",
  });
  
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.name || !form.email || !form.number) {
    alert("Please fill in the required fields.");
    return;
  }

   // ✅ WhatsApp (OPEN FIRST – popup-safe)
    const whatsappNumber = "919876543210";
    const whatsappMessage = `
New Website Lead 🚀

Name: ${form.name}
Email: ${form.email}
Phone: ${form.number}
Company: ${form.company || "N/A"}
Budget: ${form.budget || "Not specified"}

Message:
${form.message || "No message provided"}
    `;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage.trim()
    )}`;

    window.open(whatsappURL, "_blank");

  try {
    // 1️⃣ EmailJS
    await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    name: form.name,
    email: form.email,
    number: form.number,
    company: form.company,
    budget: form.budget,
    message: form.message,
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY // 🔑 REQUIRED HERE
);


    // 2️⃣ Google Sheets
    await fetch(import.meta.env.VITE_GOOGLE_SHEETS_URL,
  {
    method: "POST",
    body: JSON.stringify(form),
  }
);


    // 3️⃣ Redirect
    navigate("/thank-you");

  } catch (err) {
    console.error("Submission error:", err);
    alert("Submission failed. Please try again.");
  }
};


  /* ✅ FIX: ADD THIS FUNCTION */
  const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

  return (
    <main className="bg-[#0B0D10] text-[#F5F7FA] min-h-screen relative">

      {/* SEO */}
      <Helmet>
        <title>Contact Navora Ads | Start a Growth Conversation</title>
        <meta
          name="description"
          content="Contact Navora Ads to discuss performance marketing, SEO, paid advertising, automation, and scalable digital growth systems."
        />
      </Helmet>

      {/* MAIN */}
      <section className="pt-44 pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">

          {/* LEFT */}
          <div>
            <p className="uppercase tracking-widest text-xs text-white/50 mb-6">
              Contact
            </p>


            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Let’s discuss your
              <br /> growth priorities.
            </h1>

            <p className="mt-8 text-white/60 text-lg max-w-lg">
              We work with performance-focused businesses looking to build
              structured, scalable growth systems — not short-term experiments.
            </p>

            <div className="mt-12 space-y-4 text-sm text-white/60">
              <p>✔ Businesses serious about growth</p>
              <p>✔ Minimum working marketing budget required</p>
              <p>✔ Long-term scalability mindset</p>
            </div>

            <div className="mt-14 space-y-4 text-base">
              <p>
                <span className="text-white/50">Phone / WhatsApp:</span>{" "}
                <a href="tel:+919952957187" className="hover:underline">
                  +91 99529 57187
                </a>
              </p>
              <p>
                <span className="text-white/50">Email:</span>{" "}
                <a href="mailto:info@navoraads.com" className="hover:underline">
                  info@navoraads.com
                </a>
              </p>
              <p className="text-white/50">
                Chennai · India · UK · US · UAE
              </p>
            </div>
          </div>

          {/* FORM */}
          <div className="border border-white/10 rounded-2xl p-10">
            <h2 className="text-2xl font-semibold">
              Start a strategy conversation
            </h2>
            <p className="mt-3 text-sm text-white/60">
              Share a few details and we’ll review your request within
              24 business hours.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name *"
                className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#2F8CFF]"
                required
              />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="Email Address *"
                className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#2F8CFF]"
                required
              />
              <input
                name="number"
                value={form.number}
                onChange={handleChange}
                type="number"
                placeholder="Number *"
                className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#2F8CFF]"
                required
              />
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Company / Brand"
                className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#2F8CFF]"
              />
              <select
  name="budget"
  value={form.budget}
  onChange={handleChange}
  className="
    w-full
    bg-transparent
    border border-white/10
    rounded-lg
    px-4 py-3
    text-sm
    text-white/70
    focus:outline-none
    focus:border-[#2F8CFF]
  "
>
  <option value="" className="text-black">
    Monthly Marketing Budget
  </option>
  <option className="text-black">₹20,000 – ₹50,000</option>
  <option className="text-black">₹50,000 – ₹1,00,000</option>
  <option className="text-black">₹1,00,000+</option>
</select>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Briefly describe your goals"
                rows="4"
                className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#2F8CFF]"
              />
              <button
                type="submit"
                className="shimmer-btn w-full rounded-full bg-[#2F8CFF] py-4 text-sm font-medium
                           transition-all duration-300
                           hover:scale-[1.02]
                           hover:shadow-[0_0_25px_rgba(47,140,255,0.25)]
                           active:scale-[0.98]"
              >
                Start a strategy conversation
              </button>
            </form>
            

            <div className="mt-8 flex justify-center">
    <AnimatedSubmitButton />
  </div>

            <p className="mt-6 text-xs text-white/40">
              Results are not guaranteed. Outcomes depend on budget, industry,
              competition, and execution scope.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="py-18 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="reveal-text text-3xl font-semibold mb-10">
            What Happens Next
          </h2>
          <div className="grid md:grid-cols-4 gap-6 text-base text-white/60">
            <div className="border border-white/10 rounded-xl p-6">
              <p className="text-white font-medium mb-2">1. Review</p>
              <p>We assess your goals, industry, and requirements.</p>
            </div>
            <div className="border border-white/10 rounded-xl p-6">
              <p className="text-white font-medium mb-2">2. Alignment</p>
              <p>If aligned, we schedule a discovery or strategy call.</p>
            </div>
            <div className="border border-white/10 rounded-xl p-6">
              <p className="text-white font-medium mb-2">3. Assessment</p>
              <p>We evaluate systems, budget, and scalability.</p>
            </div>
            <div className="border border-white/10 rounded-xl p-6">
              <p className="text-white font-medium mb-2">4. Direction</p>
              <p>You receive clarity on next steps.</p>
            </div>
          </div>
          <p className="mt-8 text-sm text-white/40">
            All information shared is treated as confidential and used solely for evaluation purposes.
          </p>
        </div>
      </section>

      {/* OFFICE */}
      <section className="py-18 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-widest text-xs text-white/50 mb-4">
              Office Location
            </p>
            <h2 className="text-3xl font-semibold mb-6">
              Chennai Office
            </h2>
            <p className="text-white/60 max-w-md">
              Navora Ads<br />
              1/354/a2, Singarathottam Main Road<br />
              Vandalur, Chennai – 600048<br />
              Tamil Nadu, India
            </p>
            <p className="mt-6 text-sm text-white/50">
              Serving clients across India, UK, US & UAE
            </p>
          </div>
          <div className="border border-white/10 rounded-2xl overflow-hidden h-[320px]">
            <iframe
  title="Navora Ads Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.937975496468!2d80.0848818!3d12.8963806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f589e9d9d949%3A0xb86ea846d59fae9e!2sNavora%20ads!5e0!3m2!1sen!2sin!4v1760000000000"
  className="w-full h-full border-0"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
          </div>
        </div>
      </section>

      {/* WHATSAPP CTA */}
      <WhatsAppCTA />
    </main>
  );
}
