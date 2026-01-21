// Navora Ads — COURSES & TRAINING PAGE
// Enterprise-grade education & authority positioning
// React 19 + Tailwind CSS + Framer Motion
import Tilt3D from "../components/Tilt3D";
import { NavLink } from "react-router-dom";
import { TiltCard } from "../components/TiltCard";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

export default function CoursesPage() {const navigate = useNavigate();
  

  return (
    <main className="bg-[#0B0D10] text-[#F5F7FA] overflow-hidden">

      {/* SEO */}
      <Helmet>
        <title>Digital Marketing Courses in Chennai | Navora Ads Academy</title>
        <meta
          name="description"
          content="Navora Ads Academy offers performance-driven digital marketing courses in Chennai. Learn Meta Ads, Google Ads, SEO, funnels, automation, and growth systems from industry practitioners."
        />
          <link rel="canonical" href="https://www.navoraads.com/courses" />

  {/* ================= OPEN GRAPH ================= */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Digital Marketing Courses & Training | Navora Ads" />
  <meta
    property="og:description"
    content="Practical, performance-driven digital marketing courses designed for students, professionals, and founders."
  />
  <meta property="og:url" content="https://www.navoraads.com/courses" />
  <meta property="og:site_name" content="Navora Ads" />
      </Helmet>

      {/* HERO */}
      <section className="pt-44 pb-14 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2F8CFF]/10 to-transparent" />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          className="relative max-w-6xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Digital Marketing Education Built for the Real World
          </h1>
          <p className="mt-8 text-white/60 text-lg max-w-3xl mx-auto">
            Navora Ads Academy trains students, founders, and teams to build performance-driven digital growth systems — not just learn tools.
          </p>
        </motion.div>
      </section>

      {/* WHY ACADEMY */}
      <Section title="Why Navora Ads Academy">
  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

    {[
      {
        t: "Practitioner-Led",
        d: "Courses designed and taught by professionals actively managing real campaigns.",
      },
      {
        t: "System-Focused",
        d: "Learn how ads, SEO, funnels, automation, and analytics work together.",
      },
      {
        t: "Outcome-Oriented",
        d: "Built for employability, freelancing, entrepreneurship, and business growth.",
      },
    ].map(({ t, d }) => (
      <Tilt3D key={t}>
        <TiltCard
          className="
            relative
            p-8 h-full text-center
            border border-white/15
            bg-[#0B0D10]
            rounded-xl
            overflow-hidden
          "
        >
          {/* BORDER RUN EFFECT */}
          <span
            className="pointer-events-none absolute inset-0 rounded-xl"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, #2F8CFF 50%, transparent 100%)",
              backgroundSize: "200% 100%",
              animation: "borderRun 3s linear infinite",
              mask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "exclude",
              WebkitMaskComposite: "xor",
              padding: "1px",
            }}
          />

          <h3 className="relative z-10 text-lg font-medium text-white">
            {t}
          </h3>

          <p className="relative z-10 mt-4 text-white/60 text-sm">
            {d}
          </p>
        </TiltCard>
      </Tilt3D>
    ))}

  </div>

  {/* KEYFRAMES — INCLUDE ONCE PER PAGE */}
  <style>
    {`
      @keyframes borderRun {
        0% { background-position: 0% 50%; }
        100% { background-position: 200% 50%; }
      }
    `}
  </style>
</Section>


      {/* WHO SHOULD LEARN */}
      <Section title="Who These Courses Are For">
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto text-white/60">
          <ul className="space-y-3">
            <li>• Students & fresh graduates</li>
            <li>• Working professionals upgrading skills</li>
            <li>• Business owners & founders</li>
            <li>• Freelancers & consultants</li>
          </ul>
          <ul className="space-y-3">
            <li>• Marketing teams & agencies</li>
            <li>• Ecommerce & D2C operators</li>
            <li>• Sales & growth professionals</li>
            <li>• Career switchers into digital marketing</li>
          </ul>
        </div>
      </Section>

      {/* COURSES OFFERED */}
      <Section title="Courses Offered">
  <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
    {[
      {
        title: "Digital Marketing Mastery Program",
        desc: "A complete end-to-end program covering paid ads, SEO, funnels, automation, analytics, and growth strategy.",
        points: [
          "Meta Ads & Google Ads",
          "SEO & Local SEO",
          "Funnels & CRO",
          "Automation & CRM",
          "Analytics & tracking",
        ],
      },
      {
        title: "Meta Ads & Google Ads Performance Program",
        desc: "Deep-dive training focused on building and scaling high-performing paid advertising systems.",
        points: [
          "Campaign architecture",
          "Creative testing",
          "Audience research",
          "Scaling & optimisation",
        ],
      },
      {
        title: "SEO & Local SEO Systems",
        desc: "Learn how to build long-term organic growth through technical SEO, content, and local dominance.",
        points: [
          "Keyword research",
          "On-page & off-page SEO",
          "GBP optimisation",
          "SEO content strategy",
        ],
      },
      {
        title: "Funnels, Automation & Lead Systems",
        desc: "Design conversion systems that turn traffic into qualified leads and customers.",
        points: [
          "Landing pages",
          "WhatsApp & email automation",
          "CRM pipelines",
          "Lead scoring",
        ],
      },
    ].map(({ title, desc, points }) => (
      <NavLink
        key={title}
        to="/contact"
        onClick={scrollToTop}
        className="block focus:outline-none"
      >
        <Tilt3D>
          <TiltCard className="p-8 h-full cursor-pointer transition-transform duration-200 hover:scale-[1.01]">
            <h3 className="text-xl font-medium">{title}</h3>
            <p className="mt-4 text-white/60 text-sm">{desc}</p>
            <ul className="mt-6 space-y-2 text-sm text-white/50">
              {points.map((p) => (
                <li key={p}>• {p}</li>
              ))}
            </ul>
          </TiltCard>
        </Tilt3D>
      </NavLink>
    ))}
  </div>
</Section>


      {/* DELIVERY MODE */}
      {/* DELIVERY MODE */}
<Section title="Learning Format">
  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {[
      {
        t: "Online Training",
        d: "Live & recorded sessions with hands-on implementation.",
      },
      {
        t: "Offline Training",
        d: "Classroom programs conducted in Chennai.",
      },
      {
        t: "Corporate Training",
        d: "Custom programs for business teams and organisations.",
      },
    ].map(({ t, d }) => (
      <NavLink
        key={t}
        to="/contact"
        onClick={scrollToTop}
        className="block focus:outline-none"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileTap={{ scale: 0.98 }}
          className="group relative h-full cursor-pointer"
        >
          <Tilt3D>
            <TiltCard
              className="
                relative h-full min-h-[220px]
                flex flex-col justify-center text-center
                p-8

                border border-white/10
                bg-[#0B0D10]
                rounded-2xl

                transition-all duration-300 ease-out
                group-hover:border-[#2F8CFF]/50
                group-hover:shadow-[0_0_45px_rgba(47,140,255,0.22)]
                active:border-[#2F8CFF]/60
                active:shadow-[0_0_45px_rgba(47,140,255,0.28)]
              "
            >
              {/* FULL CARD GLOW LINE */}
              <span
                className="
                  pointer-events-none absolute inset-0
                  rounded-2xl
                  opacity-0 group-hover:opacity-100 group-active:opacity-100
                  transition-opacity duration-300
                "
                style={{
                  background:
                    "linear-gradient(120deg, transparent 30%, rgba(47,140,255,0.35), transparent 70%)",
                }}
              />

              {/* TITLE */}
              <h3 className="relative z-10 text-lg font-medium transition-colors duration-300 group-hover:text-white">
                {t}
              </h3>

              {/* SEPARATOR */}
              <div className="relative z-10 mx-auto my-4 h-[1px] w-12 bg-white/20 transition-all duration-300 group-hover:w-20 group-hover:bg-[#2F8CFF]/70" />

              {/* DESCRIPTION */}
              <p className="relative z-10 text-sm text-white/60 leading-relaxed transition-colors duration-300 group-hover:text-white/85">
                {d}
              </p>
            </TiltCard>
          </Tilt3D>
        </motion.div>
      </NavLink>
    ))}
  </div>
</Section>



      {/* CERTIFICATION */}
      <Section title="Certification & Outcomes">
        <div className="max-w-5xl mx-auto text-white/60 space-y-4">
          <p>• Industry-recognised course completion certificate</p>
          <p>• Practical assignments & real campaign exposure</p>
          <p>• Career guidance & portfolio support</p>
          <p>• Business implementation frameworks</p>
        </div>
      </Section>

      {/* DIFFERENTIATION */}
      <Section title="How Our Courses Are Different">
        <div className="max-w-5xl mx-auto text-white/60 space-y-4">
          <p>• Taught by practitioners, not trainers</p>
          <p>• Focus on systems, not shortcuts</p>
          <p>• Real-world case studies & frameworks</p>
          <p>• Suitable for careers, freelancing, and business growth</p>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section className="border-t border-white/10 py-36 px-6 text-center">
        <h2 className="reveal-text text-3xl font-semibold">Learn Skills That Actually Scale</h2>
        <p className="mt-6 text-white/60 max-w-2xl mx-auto">
          Whether you want a career in digital marketing or to grow your business, Navora Ads Academy is built for real outcomes.
        </p>
        <a
          href="https://wa.me/919952957187"
          className="shimmer-btn inline-block mt-10 rounded-full bg-[#2F8CFF] px-14 py-4 text-sm font-medium"
        >
          Enquire About Courses
        </a>
      </Section>

    </main>
  );
}

function Section({ title, children }) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-20 px-6 text-center"
    >
      <h2 className="reveal-text section-title">{title}</h2>
      <div className="mt-6">{children}</div>
    </motion.section>
  );
}

function Card({ title, desc }) {
  return (
    <div className="border border-white/10 rounded-2xl p-8">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="mt-4 text-white/60 text-sm">{desc}</p>
    </div>
  );
}

function Course({ title, desc, points }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="border border-white/10 rounded-2xl p-8"
    >
      <h3 className="text-xl font-medium">{title}</h3>
      <p className="mt-4 text-white/60 text-sm">{desc}</p>
      <ul className="mt-6 space-y-2 text-sm text-white/50">
        {points.map((p) => (
          <li key={p}>• {p}</li>
        ))}
      </ul>
    </motion.div>
  );
}

// Tailwind helpers expected:
// .section-title { text-3xl md:text-4xl font-semibold }
