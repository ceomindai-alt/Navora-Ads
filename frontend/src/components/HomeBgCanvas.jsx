import { useEffect, useRef } from "react";

export default function HomeBgCanvas() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const imgRef = useRef(null);
  const interactionRef = useRef({ x: 0, y: 0, active: false });
  const readyRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let rafId;

    const getDevice = () => {
      const w = window.innerWidth;
      const coarse = window.matchMedia("(pointer: coarse)").matches;

      // 🔥 KEY FIX
      if (coarse) return "touch";        // mobile + tablet + desktop-mode mobile
      if (w < 1024) return "tablet";
      return "desktop";
    };

    /* ---------- RESIZE ---------- */
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      if (readyRef.current) convertLogoToParticles();
    };

    resize();
    window.addEventListener("resize", resize);

    /* ---------- INTERACTION (ALL DEVICES) ---------- */
    const activate = (x, y) => {
      interactionRef.current = { x, y, active: true };
    };

    const deactivate = () => {
      interactionRef.current.active = false;
    };

    window.addEventListener("mousemove", (e) => {
      activate(e.clientX, e.clientY);
    });

    window.addEventListener(
      "touchstart",
      (e) => {
        const t = e.touches[0];
        if (!t) return;
        activate(t.clientX, t.clientY);
        setTimeout(deactivate, 350);
      },
      { passive: true }
    );

    window.addEventListener("mouseleave", deactivate);

    /* ---------- LOAD LOGO ---------- */
    const img = new Image();
    img.src = "/logo.png";
    imgRef.current = img;

    img.onload = () => {
      readyRef.current = true;
      convertLogoToParticles();
      animate();
    };

    function convertLogoToParticles() {
      const img = imgRef.current;
      if (!img) return;

      const offCanvas = document.createElement("canvas");
      const offCtx = offCanvas.getContext("2d");

      const device = getDevice();

      const scale =
        device === "touch" ? 0.85 :
        device === "tablet" ? 1.45 :
        1.7;

      offCanvas.width = img.width * scale;
      offCanvas.height = img.height * scale;

      offCtx.drawImage(img, 0, 0, offCanvas.width, offCanvas.height);

      const data = offCtx.getImageData(
        0,
        0,
        offCanvas.width,
        offCanvas.height
      ).data;

      const particles = [];
      const step = device === "desktop" ? 3 : 4;

      const centerX = canvas.width / 2;

      // 🔥 FINAL CENTER FIX
      const centerY =
        device === "touch"
          ? canvas.height * 0.42     // mobile + desktop-view mobile
          : device === "tablet"
          ? canvas.height * 0.45
          : canvas.height * 0.48;

      for (let y = 0; y < offCanvas.height; y += step) {
        for (let x = 0; x < offCanvas.width; x += step) {
          const i = (y * offCanvas.width + x) * 4;
          if (data[i + 3] > 150) {
            const px = x + centerX - offCanvas.width / 2;
            const py = y + centerY - offCanvas.height / 2;

            

            particles.push({
              x: px,
              y: py,
              baseX: px,
              baseY: py,
              size: Math.random() * 0.9 + 0.4,
              angle: Math.random() * Math.PI * 2,
            });
          }
        }
      }

      particlesRef.current = particles;
    }

    /* ---------- ANIMATION ---------- */
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p) => {
        p.angle += 0.008;

        const driftX = Math.cos(p.angle) * 0.45;
        const driftY = Math.sin(p.angle) * 0.45;

        let forceX = 0;
        let forceY = 0;

        if (interactionRef.current.active) {
          const dx = p.x - interactionRef.current.x;
          const dy = p.y - interactionRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const radius = 130;

          if (dist < radius) {
            const strength = (radius - dist) / radius;
            forceX = (dx / dist) * strength * 7;
            forceY = (dy / dist) * strength * 7;
          }
        }

        p.x += (p.baseX - p.x) * 0.05 + driftX + forceX;
        p.y += (p.baseY - p.y) * 0.05 + driftY + forceY;

        ctx.beginPath();
        ctx.fillStyle = "rgba(120,170,255,0.85)";
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      rafId = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
}
