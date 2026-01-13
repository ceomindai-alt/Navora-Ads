import { useRef } from "react";
import { FaLinkedinIn } from "react-icons/fa";

export default function FounderSection() {
  const cardRef = useRef(null);

  const handleMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y - rect.height / 2) / rect.height) * -6;
    const rotateY = ((x - rect.width / 2) / rect.width) * 6;

    card.style.setProperty("--rx", `${rotateX}deg`);
    card.style.setProperty("--ry", `${rotateY}deg`);
  };

  const reset = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
  };

  return (
    <section className="px-6 md:px-20 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* IMAGE CARD */}
        <div className="flex justify-center md:justify-start">
          <div
            ref={cardRef}
            onMouseMove={handleMove}
            onMouseLeave={reset}
            className="
              relative group
              w-72 aspect-[3/4]
              rounded-2xl overflow-hidden
              border border-white/10
              bg-[#0B0D10]
              transform-gpu
              transition-transform duration-500
            "
            style={{
              transform:
                "rotateX(var(--rx)) rotateY(var(--ry)) translateZ(14px)",
            }}
          >
            <img
              src="/ceo.png"
              alt="Naveen Ramamoorthy"
              className="
                absolute inset-0 w-full h-full
                object-cover
                transition-transform duration-700
                group-hover:scale-105
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

            {/* DEFAULT CONTENT */}
            <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-6">
              <h3 className="text-xl font-semibold text-white">
                Naveen Ramamoorthy
              </h3>
              <p className="text-sm text-white/60">
                Founder & Growth Consultant
              </p>
            </div>

            {/* HOVER CONTENT */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 translate-y-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
              <h3 className="text-xl font-semibold text-white">
                Naveen Ramamoorthy
              </h3>
              <p className="text-sm text-white/60 mb-3">
                Founder & Growth Consultant
              </p>

              <p className="text-sm text-white/75 leading-relaxed mb-5">
                Founder of Navora Ads. Helps businesses move from fragmented
                marketing into structured, scalable, performance-driven
                growth systems.
              </p>

              <div className="flex justify-center">
  <a
    href="https://www.linkedin.com/in/naveen-r-351985201/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      w-10 h-10 rounded-full
      border border-white/20
      flex items-center justify-center
      text-white
      hover:bg-white hover:text-black
      transition
    "
  >
    <FaLinkedinIn className="text-base" />
  </a>
</div>

            </div>

            <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 before:absolute before:inset-[-1px] before:rounded-2xl before:border before:border-white/20 transition-opacity duration-300" />
          </div>
        </div>

        {/* TEXT */}
        <div className="pt-6 md:pt-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-5">
            Founder-Led. Consulting-Driven.
          </h2>
          <p className="text-white/70 leading-relaxed max-w-md">
            Navora Ads is built on clarity, performance, and long-term growth —
            not visual noise. Every system is engineered for measurable ROI.
          </p>
        </div>

      </div>
    </section>
  );
}
