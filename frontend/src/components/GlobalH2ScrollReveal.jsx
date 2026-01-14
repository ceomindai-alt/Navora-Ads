import { useEffect } from "react";

export default function ScrollRevealText() {
  useEffect(() => {
    const headings = document.querySelectorAll(".reveal-text");

    const splitText = (el) => {
      if (el.dataset.split) return;
      el.dataset.split = "true";

      const text = el.innerText;
      el.innerHTML = "";

      text.split(" ").forEach((word) => {
        const wordSpan = document.createElement("span");
        wordSpan.className = "reveal-word";

        [...word].forEach((char) => {
          const charSpan = document.createElement("span");
          charSpan.className = "reveal-char";
          charSpan.innerText = char;
          wordSpan.appendChild(charSpan);
        });

        el.appendChild(wordSpan);
        el.append(" ");
      });
    };

    headings.forEach(splitText);

    const onScroll = () => {
      const vh = window.innerHeight;

      headings.forEach((el) => {
        const chars = el.querySelectorAll(".reveal-char");
        if (!chars.length) return;

        const rect = el.getBoundingClientRect();
        const progress = Math.min(
          Math.max(1 - rect.top / vh, 0),
          1
        );

        const visible = Math.floor(progress * chars.length);

        chars.forEach((char, i) => {
          char.style.opacity = i <= visible ? "1" : "0.25";
          char.style.transform =
            i <= visible ? "translateY(0)" : "translateY(6px)";
        });
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
