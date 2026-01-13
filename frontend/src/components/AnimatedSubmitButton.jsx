import { useEffect, useRef, useState } from "react";

export default function AnimatedSubmitButton({ onComplete }) {
  const buttonRef = useRef(null);
  const canvasRef = useRef(null);

  const [state, setState] = useState("ready");
  const [disabled, setDisabled] = useState(false);

  const CALENDLY_URL = "https://calendly.com/ceomindai/30min";

  /* ---------------- CONFETTI CONFIG ---------------- */
  const confettiCount = 18;
  const sequinCount = 10;
  const gravityConfetti = 0.3;
  const gravitySequins = 0.55;
  const dragConfetti = 0.075;
  const dragSequins = 0.02;
  const terminalVelocity = 3;

  const confettiRef = useRef([]);
  const sequinsRef = useRef([]);

  const colors = [
    { front: "#5c86ff", back: "#345dd1" },
    { front: "#38bdf8", back: "#1d4ed8" },
  ];

  const rand = (min, max) => Math.random() * (max - min) + min;

  /* ---------------- CONFETTO ---------------- */
  class Confetto {
    constructor(x, y) {
      this.color = colors[Math.floor(rand(0, colors.length))];
      this.w = rand(5, 9);
      this.h = rand(8, 14);
      this.x = x + rand(-80, 80);
      this.y = y + rand(-10, 10);
      this.vx = rand(-9, 9);
      this.vy = -rand(6, 11);
      this.rot = rand(0, Math.PI * 2);
      this.scaleY = 1;
    }

    update() {
      this.vx -= this.vx * dragConfetti;
      this.vy = Math.min(this.vy + gravityConfetti, terminalVelocity);
      this.x += this.vx;
      this.y += this.vy;
      this.scaleY = Math.cos(this.y * 0.09);
    }
  }

  /* ---------------- SEQUIN ---------------- */
  class Sequin {
    constructor(x, y) {
      this.r = rand(1, 2);
      this.color = colors[0].back;
      this.x = x + rand(-90, 90);
      this.y = y;
      this.vx = rand(-6, 6);
      this.vy = rand(-8, -12);
    }

    update() {
      this.vx -= this.vx * dragSequins;
      this.vy += gravitySequins;
      this.x += this.vx;
      this.y += this.vy;
    }
  }

  /* ---------------- INIT BURST AT BUTTON POSITION ---------------- */
  const initBurst = () => {
    const rect = buttonRef.current.getBoundingClientRect();
    const burstX = rect.left + rect.width / 2;
    const burstY = rect.top + rect.height / 2;

    // RESET arrays EVERY click
    confettiRef.current = [];
    sequinsRef.current = [];

    for (let i = 0; i < confettiCount; i++) {
      confettiRef.current.push(new Confetto(burstX, burstY));
    }
    for (let i = 0; i < sequinCount; i++) {
      sequinsRef.current.push(new Sequin(burstX, burstY));
    }
  };

  /* ---------------- RENDER LOOP ---------------- */
  const render = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confettiRef.current.forEach((c, i) => {
      c.update();
      ctx.save();
      ctx.translate(c.x, c.y);
      ctx.rotate(c.rot);
      ctx.fillStyle = c.scaleY > 0 ? c.color.front : c.color.back;
      ctx.fillRect(-c.w / 2, -c.h / 2, c.w, c.h * c.scaleY);
      ctx.restore();

      if (c.y > canvas.height) confettiRef.current.splice(i, 1);
    });

    sequinsRef.current.forEach((s, i) => {
      s.update();
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = s.color;
      ctx.fill();

      if (s.y > canvas.height) sequinsRef.current.splice(i, 1);
    });

    requestAnimationFrame(render);
  };

  /* ---------------- INIT CANVAS ---------------- */
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render(); // ONLY once
  }, []);

  /* ---------------- CLICK HANDLER ---------------- */
  const handleClick = () => {
    if (disabled) return;
    setDisabled(true);
    setState("loading");

    setTimeout(() => {
      setState("complete");
      initBurst();
      onComplete?.();

      // OPEN CALENDLY AFTER SUCCESS
      setTimeout(() => {
        window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
        setState("ready");
        setDisabled(false);
      }, 900);

    }, 1400);
  };

  return (
    <>
      {/* CANVAS */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-10"
      />

      {/* BUTTON */}
      <button
        ref={buttonRef}
        onClick={handleClick}
        disabled={disabled}
        className={`
  shimmer-btn ${state}
  w-full
  max-w-[260px] sm:max-w-[300px]
  mx-auto
  h-[38px] sm:h-[42px]
  flex items-center justify-center
  rounded-full
  text-white
`}

      >
        {state === "ready" && <span>Or schedule directly via calendar →</span>}

        {state === "loading" && (
          <div className="flex gap-2">
            <span className="w-2 h-2 bg-white rounded-full animate-bounce" />
            <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-100" />
            <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-200" />
          </div>
        )}

        {state === "complete" && (
          <span className="font-bold">Success ✓</span>
        )}
      </button>
    </>
  );
}
