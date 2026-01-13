import {
  FaMeta,
  FaGoogle,
  FaShopify,
  FaWordpress,
} from "react-icons/fa6";
import {
  SiSemrush,
  SiZapier,
  SiAdobepremierepro,
  SiCanva,
} from "react-icons/si";
import { FaSearch, FaSpider } from "react-icons/fa";

const icons = [
  { icon: FaGoogle, color: "#4285F4" },
  { icon: FaMeta, color: "#0467FF" },
  { icon: FaSpider, color: "#22c55e" },
  { icon: FaSearch, color: "#f97316" },
  { icon: SiZapier, color: "#ff4a00" },
  { icon: SiSemrush, color: "#FF642D" },
  { icon: FaWordpress, color: "#21759B" },
  { icon: FaShopify, color: "#95BF47" },
  { icon: SiAdobepremierepro, color: "#a855f7" },
  { icon: SiCanva, color: "#06b6d4" },
];

export default function CurveLogoRun() {
  return (
    <section className="relative w-full py-20 overflow-hidden">

      {/* TITLE */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Trusted by Industry Leaders
        </h2>
        <p className="text-gray-400 mt-3 text-sm md:text-base">
          Powering Innovation for Companies Worldwide
        </p>
      </div>

      {/* ================= DESKTOP (UNCHANGED) ================= */}
      <div className="hidden md:block">
        <svg
          viewBox="0 0 1400 360"
          className="w-full h-[300px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="curveDesktop" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="1" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </linearGradient>

            <path
              id="desktopPath"
              d="M 120 210 Q 700 60 1280 210"
              fill="none"
            />
          </defs>

          <path
            d="M 120 250 Q 700 100 1280 250"
            stroke="url(#curveDesktop)"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {icons.map(({ icon: Icon, color }, i) => (
            <g key={i}>
              <animateMotion
                dur="28s"
                begin={`${-i * 2.8}s`}
                repeatCount="indefinite"
              >
                <mpath href="#desktopPath" />
              </animateMotion>

              <foreignObject x="-44" y="-44" width="88" height="88">
                <div
                  style={{ color }}
                  className="flex items-center justify-center text-[44px]"
                >
                  <Icon />
                </div>
              </foreignObject>
            </g>
          ))}
        </svg>
      </div>

      {/* ================= MOBILE (BIGGER + MORE SPACE) ================= */}
      {/* ================= MOBILE — PERFECT SPACING ================= */}
<div className="md:hidden">
  <svg
    viewBox="0 0 1400 420"
    className="w-full h-[340px]"
    preserveAspectRatio="xMidYMid meet"
  >
    <defs>
      <linearGradient id="curveMobile" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
        <stop offset="50%" stopColor="#38bdf8" stopOpacity="1" />
        <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
      </linearGradient>

      {/* EXTRA-LONG PATH (LEAD-IN + LEAD-OUT SPACE) */}
      <path
        id="mobilePath"
        d="M -300 280 Q 700 60 1700 280"
        fill="none"
      />
    </defs>

    {/* CURVE */}
    <path
      d="M 0 330 Q 700 130 1400 330"
      stroke="url(#curveMobile)"
      strokeWidth="6"
      strokeLinecap="round"
    />

    {/* ICONS — GUARANTEED GAP */}
    {icons.map(({ icon: Icon, color }, i) => (
      <g key={i}>
        <animateMotion
          dur="64s"                 // 🔥 very slow = smooth spacing
          begin={`${-i * 7.5}s`}    // 🔥 BIG GAP BETWEEN ICONS
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath href="#mobilePath" />
        </animateMotion>

        {/* BIG ICON */}
        <foreignObject x="-72" y="-72" width="144" height="144">
          <div
            style={{ color }}
            className="flex items-center justify-center text-[88px]"
          >
            <Icon />
          </div>
        </foreignObject>
      </g>
    ))}
  </svg>
</div>

    </section>
  );
}
