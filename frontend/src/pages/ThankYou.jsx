// Navora Ads — Thank You Page
// Corporate | Clean | Conversion-safe

import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <main className="bg-[#0B0D10] text-[#F5F7FA] min-h-screen flex items-center justify-center px-6">

      <Helmet>
        <title>Thank You | Navora Ads</title>
        <meta
          name="description"
          content="Thank you for contacting Navora Ads. Our team will review your request and respond shortly."
        />
      </Helmet>

      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-semibold mb-6">
          Thank you for reaching out
        </h1>

        <p className="text-white/60 text-lg">
          We’ve received your request.  
          Our team will review your details and get back to you within
          <strong> 24 business hours</strong>.
        </p>

        <p className="mt-8 text-white/50 text-sm">
          If your request is aligned, we’ll schedule a strategy conversation.
        </p>

        <Link
          to="/"
          className="shimmer-btn inline-block mt-10 rounded-full bg-[#2F8CFF] px-10 py-3 text-sm font-medium hover:scale-[1.03] transition"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
