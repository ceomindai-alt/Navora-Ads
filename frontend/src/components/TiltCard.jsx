export function TiltCard({ children, className = "" }) {
  return (
    <div
      className={`
        relative rounded-2xl
        border border-white/10
        bg-gradient-to-br from-[#0B0D10] to-[#111827]
        transform-gpu transition-transform duration-300 ease-out
        shadow-[0_20px_60px_rgba(0,0,0,0.45)]
        hover:shadow-[0_40px_90px_rgba(47,140,255,0.45)]
        ${className}
      `}
      style={{
        transform:
          "rotateX(var(--rx)) rotateY(var(--ry)) translateZ(18px)",
      }}
    >
      {/* Animated border */}
      <span
        className="
          pointer-events-none absolute inset-0 rounded-2xl
          before:absolute before:inset-[-2px]
          before:rounded-2xl
          before:bg-[conic-gradient(from_0deg,#2F8CFF,transparent,transparent,#38BDF8,transparent)]
          before:animate-border-spin
          opacity-0 hover:opacity-100
          transition-opacity duration-300
        "
      />
      {children}
    </div>
  );
}
