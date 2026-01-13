// WhatsApp Floating CTA — Navora Ads
// Corporate | Premium | Conversion-safe

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppCTA() {
  return (
    <a
      href="https://wa.me/919952957187?text=Hi%20Navora%20Ads,%20I%20would%20like%20to%20discuss%20a%20growth%20strategy."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
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
      "
    >
      <FaWhatsapp className="text-xl" />
      <span className="hidden md:inline">WhatsApp</span>
    </a>
  );
}
