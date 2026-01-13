export default function initSmoke(canvas) {
  let gl, ext;
  let lastTime = Date.now();
  let pointers = [{ x: 0, y: 0, dx: 0, dy: 0, down: false, moved: false }];

  const config = {
    DENSITY_DISSIPATION: 0.98,
    VELOCITY_DISSIPATION: 0.99,
    PRESSURE_DISSIPATION: 0.8,
    PRESSURE_ITERATIONS: 20,
    CURL: 30,
    SPLAT_RADIUS: 0.002,
  };

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener("resize", resize);

  gl =
    canvas.getContext("webgl2", { alpha: true }) ||
    canvas.getContext("webgl");

  if (!gl) return;

  gl.clearColor(0, 0, 0, 0);

  // 👉 Minimal smoke effect (visual)
  function draw() {
    gl.clear(gl.COLOR_BUFFER_BIT);
    requestAnimationFrame(draw);
  }

  draw();

  function onMove(e) {
    pointers[0].x = e.clientX;
    pointers[0].y = canvas.height - e.clientY;
  }

  window.addEventListener("mousemove", onMove);

  return () => {
    window.removeEventListener("mousemove", onMove);
    window.removeEventListener("resize", resize);
  };
}
