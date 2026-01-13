import { useState } from "react";

const Button = ({
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}) => {
  const base =
    "relative inline-flex items-center justify-center font-semibold uppercase tracking-wide transition-all duration-300 text-sm font-montserrat overflow-hidden";

  const variants = {
    primary: "bg-[#ED206F] text-white hover:bg-[#c21556] px-8 py-3",
    secondary:
      "border border-white text-white hover:bg-white hover:text-black px-8 py-3",
    outline:
      "border border-black text-black hover:bg-black hover:text-white px-8 py-3",
    text: "text-[#ED206F] border-b-2 border-[#ED206F] px-0 py-0",

    /* 🔥 NEW SHIMMER VARIANT */
    shimmer:
      "shimmer-btn text-white px-12 py-[14px] rounded-full bg-gradient-to-br from-[#2F8CFF] to-[#38BDF8]",
  };

  return (
    <>
      {/* SHIMMER STYLES — SCOPED */}
      <style>{`
        .shimmer-btn {
          box-shadow: 0 0 0 rgba(47, 140, 255, 0);
          transition: box-shadow 0.35s ease, transform 0.35s ease;
        }

        .shimmer-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -150%;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.65),
            transparent
          );
          transform: skewX(-20deg);
          opacity: 0;
        }

        .shimmer-btn::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,0.9),
            transparent
          );
          background-size: 300% 100%;
          mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          mask-composite: exclude;
          -webkit-mask-composite: xor;
          opacity: 0;
        }

        .shimmer-btn:hover {
          box-shadow:
            0 0 20px rgba(47, 140, 255, 0.6),
            0 0 40px rgba(56, 189, 248, 0.45);
          transform: translateY(-1px);
        }

        .shimmer-btn:hover::before {
          opacity: 1;
          animation: shimmer 1.4s ease-in-out forwards;
        }

        .shimmer-btn:hover::after {
          opacity: 1;
          animation: border-run 1.2s linear forwards;
        }

        @keyframes shimmer {
          from { left: -150%; }
          to { left: 150%; }
        }

        @keyframes border-run {
          from { background-position: 0% 50%; }
          to { background-position: 300% 50%; }
        }
      `}</style>

      <button
        type={type}
        onClick={onClick}
        className={`${base} ${variants[variant]} ${className}`}
      >
        <span className="relative z-10">{children}</span>
      </button>
    </>
  );
};

export default Button;

