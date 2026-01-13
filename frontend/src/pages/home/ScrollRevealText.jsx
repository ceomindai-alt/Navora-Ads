import { useEffect, useRef, useState } from "react";

export default function ScrollRevealCharacters() {
  const ref = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const text =
    "Growth Framework That Delivers Predictable Results";

  // Split text into words, then characters
  const words = text.split(" ");
  const characters = words.join(" ").split("");

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress =
        1 - Math.min(Math.max(rect.top / windowHeight, 0), 1);

      setActiveIndex(Math.floor(progress * characters.length));
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [characters.length]);

  let charIndex = 0;

  return (
    <section>
      <div ref={ref} className="max-w-6xl px-6">
        <h2 className="m-0 p-0 text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
          {words.map((word, wIndex) => (
            <span key={wIndex} className="whitespace-nowrap mr-2">
              {word.split("").map((char, cIndex) => {
                const currentIndex = charIndex++;
                return (
                  <span
                    key={cIndex}
                    className={`inline-block transition-colors duration-300 ${
                      currentIndex <= activeIndex
                        ? "text-white"
                        : "text-white/20"
                    }`}
                  >
                    {char}
                  </span>
                );
              })}
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
}
