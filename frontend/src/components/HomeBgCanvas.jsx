import { useEffect, useRef } from "react";

export default function HomeBgCanvas() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const imgRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null, active: false });
  const readyRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const isMobile = () => window.innerWidth < 768;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      if (readyRef.current) {
        convertLogoToParticles();
      }
    };

    resize();
    window.addEventListener("resize", resize);

    /* ---------- MOUSE INTERACTION (DESKTOP ONLY) ---------- */
    const onMove = (e) => {
      if (isMobile()) return;
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const onLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("click", onMove);

    /* ---------- LOAD PNG ---------- */
    const img = new Image();
    img.src = "/logo.png";
    imgRef.current = img;

    img.onload = () => {
      readyRef.current = true;
      convertLogoToParticles();
      animate();
    };

    function convertLogoToParticles() {
      if (!imgRef.current) return;

      const img = imgRef.current;
      const offCanvas = document.createElement("canvas");
      const offCtx = offCanvas.getContext("2d");

      // ✅ Mobile-safe scaling
      const scale = isMobile() ? 1.05 : 1.75;

      offCanvas.width = img.width * scale;
      offCanvas.height = img.height * scale;

      offCtx.clearRect(0, 0, offCanvas.width, offCanvas.height);
      offCtx.drawImage(img, 0, 0, offCanvas.width, offCanvas.height);

      const data = offCtx.getImageData(
        0,
        0,
        offCanvas.width,
        offCanvas.height
      ).data;

      const particles = [];
      const step = isMobile() ? 4 : 3; // ✅ mobile density fix

      for (let y = 0; y < offCanvas.height; y += step) {
        for (let x = 0; x < offCanvas.width; x += step) {
          const i = (y * offCanvas.width + x) * 4;
          if (data[i + 3] > 150) {
            const px =
              x + canvas.width / 2 - offCanvas.width / 2;

            // ✅ mobile vertical positioning
            const py = isMobile()
              ? y + canvas.height * 0.32 - offCanvas.height / 2
              : y + canvas.height / 2 - offCanvas.height / 2 + 60;

            particles.push({
              x: px,
              y: py,
              baseX: px,
              baseY: py,
              size: Math.random() * 0.9 + 0.3,
              angle: Math.random() * Math.PI * 2
            });
          }
        }
      }

      particlesRef.current = particles;
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p) => {
        p.angle += 0.01;

        const noiseX = Math.cos(p.angle) * 0.35;
        const noiseY = Math.sin(p.angle) * 0.35;

        let forceX = 0;
        let forceY = 0;

        // ✅ Desktop-only interaction
        if (mouseRef.current.active && !isMobile()) {
          const dx = p.x - mouseRef.current.x;
          const dy = p.y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const radius = 120;

          if (dist < radius) {
            const strength = (radius - dist) / radius;
            forceX = (dx / dist) * strength * 6;
            forceY = (dy / dist) * strength * 6;
          }
        }

        p.x += (p.baseX - p.x) * 0.06 + noiseX + forceX;
        p.y += (p.baseY - p.y) * 0.06 + noiseY + forceY;

        ctx.beginPath();
        ctx.fillStyle = "rgba(120,170,255,0.85)";
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("click", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
}
