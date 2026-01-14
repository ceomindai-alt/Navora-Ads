import { useRef, useState, useEffect } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { TbSeo } from "react-icons/tb";
import {
  FaChartLine,
  FaVideo,
  FaCogs,
  FaRobot,
} from "react-icons/fa";


/* ================= ICON → SVG ================= */
const iconToSVG = (Icon) =>
  renderToStaticMarkup(
    <Icon style={{ width: 140, height: 140, fill: "white" }} />
  );

/* ================= PARTICLE MORPH ================= */
function ParticleMorph({ text, iconSVG }) {
  const mountRef = useRef(null);
  const refs = useRef({});
  const morphingRef = useRef(false);
  const frameRef = useRef(null);

  const getCount = () => (window.innerWidth < 768 ? 2800 : 7800);

  useEffect(() => {
    if (!mountRef.current || !window.THREE || !window.gsap) return;

    const container = mountRef.current;
    const COUNT = getCount();

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 13;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(COUNT * 3);
    const base = new Float32Array(COUNT * 3);
    const radius = 5.8;

    for (let i = 0; i < COUNT; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions.set([x, y, z], i * 3);
      base.set([x, y, z], i * 3);
    }

    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const material = new THREE.PointsMaterial({
      size: window.innerWidth < 768 ? 0.065 : 0.085,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    refs.current = { scene, camera, renderer, particles, base, geometry };

    const onResize = () => {
      camera.aspect =
        container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        container.clientWidth,
        container.clientHeight
      );
    };

    window.addEventListener("resize", onResize);

    let t = 0;
    const animate = () => {
      t += 0.008;
      const pos = geometry.attributes.position.array;

      if (!morphingRef.current) {
        for (let i = 0; i < COUNT; i++) {
          pos[i * 3 + 2] =
            base[i * 3 + 2] + Math.sin(t + i * 0.05) * 0.12;
        }
        geometry.attributes.position.needsUpdate = true;
      }

      particles.rotation.y += 0.0012;
      renderer.render(scene, camera);
      frameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", onResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  useEffect(() => {
    if (!refs.current.particles) return;

    const { base, geometry } = refs.current;
    const pos = geometry.attributes.position.array;
    const COUNT = base.length / 3;

    const createTargets = async () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      const SIZE = 220;
      canvas.width = SIZE;
      canvas.height = SIZE;

      ctx.clearRect(0, 0, SIZE, SIZE);

      if (iconSVG) {
        const img = new Image();
        img.src =
          "data:image/svg+xml;charset=utf-8," +
          encodeURIComponent(iconSVG);
        await img.decode();
        ctx.drawImage(img, 50, 50, SIZE - 100, SIZE - 100);
      } else if (text) {
        ctx.font = "bold 110px Inter";
        ctx.fillStyle = "#fff";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(text[0], SIZE / 2, SIZE / 2);
      }

      const data = ctx.getImageData(0, 0, SIZE, SIZE).data;
      const points = [];

      for (let i = 0; i < data.length; i += 4) {
        if (data[i] > 180) {
          const x = (i / 4) % SIZE;
          const y = Math.floor(i / 4 / SIZE);
          points.push({
            x: (x - SIZE / 2) / 12,
            y: -(y - SIZE / 2) / 12,
            z: 0.02,
          });
        }
      }
      return points;
    };

    if (!text && !iconSVG) {
      morphingRef.current = false;
      for (let i = 0; i < COUNT; i++) {
        window.gsap.to(pos, {
          [i * 3]: base[i * 3],
          [i * 3 + 1]: base[i * 3 + 1],
          [i * 3 + 2]: base[i * 3 + 2],
          duration: 1.5,
          ease: "expo.out",
        });
      }
      return;
    }

    morphingRef.current = true;

    createTargets().then((targets) => {
      for (let i = 0; i < COUNT; i++) {
        const t = targets[i % targets.length];
        window.gsap.to(pos, {
          [i * 3]: t.x,
          [i * 3 + 1]: t.y,
          [i * 3 + 2]: t.z,
          duration: 1.9,
          ease: "expo.out",
          onUpdate: () =>
            (geometry.attributes.position.needsUpdate = true),
        });
      }
    });
  }, [text, iconSVG]);

  return <div ref={mountRef} className="w-full h-full" />;
}

/* ================= CARD ================= */
function VideoStyleCard({ title, description, onEnter, onLeave }) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onEnter}
      className="relative rounded-2xl p-8 bg-[#0b0b0f] border border-white/10 hover:border-sky-400/40 transition"
    >
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm text-white/60">{description}</p>
    </div>
  );
}

/* ================= MAIN ================= */
export default function CapabilitiesSection() {
  const [activeText, setActiveText] = useState("");
  const [activeIcon, setActiveIcon] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const data = [
    { title: "Demand Acquisition", desc: "Paid growth systems across Meta, Google & YouTube", icon: FaChartLine },
    { title: "Organic Authority", desc: "SEO frameworks that compound trust and demand", icon: TbSeo },
    { title: "Conversion Infrastructure", desc: "Funnels and UX engineered for revenue", icon: FaCogs },
    { title: "Automation & CRM", desc: "Lead handling systems that close efficiently", icon: FaRobot },
    { title: "Content & Media", desc: "Performance-led creative execution", icon: FaVideo },
    { title: "Growth Strategy", desc: "Consulting-grade scaling roadmaps", icon: null },
  ];

  return (
    <section className="relative w-full  px-6 md:px-24 py-24">
      <h2 className="reveal-text h2-unified mb-12 text-center">
  Our Core Digital Marketing Capabilities
</h2>


      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div
  className={`
    w-full md:w-1/2
    ${isMobile ? "h-0" : "h-[300px] md:h-[360px]"}
  `}
>
  {!isMobile && (
    <ParticleMorph text={activeText} iconSVG={activeIcon} />
  )}
</div>


        <div className="w-full md:w-1/2 grid gap-8">
          {data.map((item) => (
            <VideoStyleCard
              key={item.title}
              title={item.title}
              description={item.desc}
              onEnter={() => {
                setActiveText(item.title);
                setActiveIcon(item.icon ? iconToSVG(item.icon) : null);
              }}
              onLeave={() => {
                setActiveText("");
                setActiveIcon(null);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
