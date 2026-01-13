import { useEffect, useRef } from "react";

export default function SmokeCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    const particles = [];

    window.addEventListener("resize", () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });

    window.addEventListener("mousemove", (e) => {
      for (let i = 0; i < 5; i++) {
        particles.push({
          x: e.clientX,
          y: e.clientY,
          r: Math.random() * 10 + 5,
          a: 1,
        });
      }
    });

    function animate() {
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p, i) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100,150,255,${p.a})`;
        ctx.fill();

        p.r += 0.3;
        p.a -= 0.02;

        if (p.a <= 0) particles.splice(i, 1);
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
