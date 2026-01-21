// WhatsApp Floating CTA — Navora Ads
// Corporate | Premium | Conversion-safe
// Continuous inner shimmer only (no size change)

import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function WhatsAppCTA() {
  return (
    <>
      {/* ================= SHIMMER STYLES ================= */}
      <style>
        {`
          @keyframes shimmerInside {
            0% {
              transform: translateX(-120%);
            }
            100% {
              transform: translateX(120%);
            }
          }

          .shimmer-inner::after {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: inherit;
            background: linear-gradient(
              120deg,
              transparent 30%,
              rgba(255,255,255,0.35),
              transparent 70%
            );
            transform: translateX(-120%);
            animation: shimmerInside 3s ease-in-out infinite;
            pointer-events: none;
          }
        `}
      </style>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">

        {/* ================= CALL CTA ================= */}
        <a
          href="tel:+919952957187"
          aria-label="Call Navora Ads"
          className="
            relative overflow-hidden
            flex items-center gap-3
            rounded-full
            bg-[#0B0D10]
            border border-white/15
            px-5 py-3
            text-white text-sm font-medium
            shadow-lg
            transition-all duration-300
            hover:scale-[1.03]
            hover:border-[#2F8CFF]/60
            hover:shadow-[0_0_30px_rgba(47,140,255,0.25)]
            active:scale-[0.97]
            shimmer-inner
          "
        >
          <FaPhoneAlt className="relative z-10 text-base text-[#2F8CFF]" />
          <span className="relative z-10 hidden md:inline">Call Now</span>
        </a>

        {/* ================= WHATSAPP CTA ================= */}
        <a
          href="https://wa.me/919952957187?text=Hi%20Navora%20Ads,%20I%20would%20like%20to%20discuss%20a%20growth%20strategy."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="
            relative overflow-hidden
            flex items-center gap-3
            rounded-full
            bg-[#25D366]
            px-5 py-3
            text-white text-sm font-medium
            shadow-lg
            transition-all duration-300
            hover:scale-[1.03]
            hover:shadow-[0_0_30px_rgba(37,211,102,0.35)]
            active:scale-[0.97]
            shimmer-inner
          "
        >
          <FaWhatsapp className="relative z-10 text-xl" />
          <span className="relative z-10 hidden md:inline">WhatsApp</span>
        </a>

      </div>
    </>
  );
}
