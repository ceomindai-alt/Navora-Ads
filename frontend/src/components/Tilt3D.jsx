import { useRef } from "react";

export default function Tilt3D({ children, className = "" }) {
  const ref = useRef(null);

  const onMove = (e) => {
    if (window.innerWidth < 1024) return;

    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;

    const rx = ((y - r.height / 2) / (r.height / 2)) * -8;
    const ry = ((x - r.width / 2) / (r.width / 2)) * 8;

    ref.current.style.setProperty("--rx", `${rx}deg`);
    ref.current.style.setProperty("--ry", `${ry}deg`);
  };

  const reset = () => {
    ref.current.style.setProperty("--rx", "0deg");
    ref.current.style.setProperty("--ry", "0deg");
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`relative perspective-[1200px] ${className}`}
    >
      {children}
    </div>
  );
}
