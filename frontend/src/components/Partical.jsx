import { useEffect, useRef } from "react";

export default function ParticleLogo() {
  const canvasRef = useRef(null);
  const pointerRef = useRef({ x: -9999, y: -9999, strength: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const isMobile = window.innerWidth < 768;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const particles = [];
    const img = new Image();
    img.src = "/logo.png";

    img.onload = () => {
      /* 🔹 Smaller logo on mobile */
      const scale = isMobile ? 0.38 : 0.6;
      const step = isMobile ? 5 : 3;

      const w = img.width * scale;
      const h = img.height * scale;

      const off = document.createElement("canvas");
      off.width = w;
      off.height = h;
      const offCtx = off.getContext("2d");
      offCtx.drawImage(img, 0, 0, w, h);

      const data = offCtx.getImageData(0, 0, w, h).data;

      for (let y = 0; y < h; y += step) {
        for (let x = 0; x < w; x += step) {
          const i = (y * w + x) * 4;
          if (data[i + 3] > 150) {
            const px = x + canvas.width / 2 - w / 2;
            const py = y + canvas.height / 2 - h / 2;

            particles.push({
              x: px,
              y: py,
              baseX: px,
              baseY: py,
              size: Math.random() * (isMobile ? 1.2 : 1.6) + 0.4,
              angle: Math.random() * Math.PI * 2,
            });
          }
        }
      }

      animate();
    };

    /* 🔹 DESKTOP MOVE */
    window.addEventListener("mousemove", (e) => {
      pointerRef.current.x = e.clientX;
      pointerRef.current.y = e.clientY;
      pointerRef.current.strength = 1;
    });

    /* 🔹 MOBILE TAP / CLICK */
    window.addEventListener("touchstart", (e) => {
      if (!e.touches[0]) return;
      pointerRef.current.x = e.touches[0].clientX;
      pointerRef.current.y = e.touches[0].clientY;
      pointerRef.current.strength = 1.8; // stronger impulse
    });

    let animationId;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.angle += 0.002;

        /* Ambient float */
        const float = Math.sin(p.angle) * (isMobile ? 0.9 : 1.4);

        /* Interaction force */
        const dx = p.baseX - pointerRef.current.x;
        const dy = p.baseY - pointerRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;

        const influenceRadius = 90;
        const force =
          Math.max(0, influenceRadius - dist) *
          0.02 *
          pointerRef.current.strength;

        const fx = (dx / dist) * force;
        const fy = (dy / dist) * force;

        const drawX = p.baseX + float + fx;
        const drawY = p.baseY + float + fy;

        ctx.beginPath();
        ctx.fillStyle = "rgba(180,210,255,0.9)";
        ctx.arc(drawX, drawY, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      /* 🔹 Decay click force naturally */
      pointerRef.current.strength *= 0.94;

      animationId = requestAnimationFrame(animate);
    }

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        width: "100vw",
        height: "100vh",
      }}
    />
  );
}
