import { useEffect } from "react";

export default function FluidCursor() {
  useEffect(() => {
    const fluid = new Fluid({
      densityDissipation: 0.98,
      velocityDissipation: 0.99,
      pressureDissipation: 0.8,
      curl: 30,
      splatRadius: 0.25,
    });

    document.body.appendChild(fluid.canvas);

    Object.assign(fluid.canvas.style, {
      position: "fixed",
      inset: "0",
      width: "100vw",
      height: "100vh",
      pointerEvents: "none",
      zIndex: "3",
    });

    return () => {
      fluid.destroy();
      fluid.canvas.remove();
    };
  }, []);

  return null;
}
