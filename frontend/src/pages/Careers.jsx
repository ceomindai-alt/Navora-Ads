// Navora Ads — Careers & Internships Page
// Global | Corporate | Enterprise-Ready
// React 19 + Tailwind CSS + SEO Schema

import React from "react";
import { Helmet } from "react-helmet-async";

export default function Careers() {
  return (
    <main className="bg-[#0B0D10] text-[#F5F7FA]">

      {/* SEO + SCHEMA */}
      <Helmet>
        <title>Careers & Internships at Navora Ads | Join a Performance-Driven Team</title>
        <meta
          name="description"
          content="Careers and internship opportunities at Navora Ads. We collaborate with professionals and students building scalable digital growth systems."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Navora Ads",
            "url": "https://navoraads.com/careers",
            "sameAs": [
              "https://www.linkedin.com/company/navoraads",
              "https://www.instagram.com/navoraads"
            ],
            "employmentType": ["FULL_TIME", "CONTRACT", "INTERN"],
            "hiringOrganization": {
              "@type": "Organization",
              "name": "Navora Ads",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chennai",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
              }
            }
          })}
        </script>
      </Helmet>

      {/* 1. HERO */}
      <section className="pt-44 pb-14 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-widest text-xs text-white/50 mb-6">
            Careers at Navora Ads
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Build systems that
            <br /> scale real businesses.
          </h1>
          <p className="mt-8 text-white/60 text-xl max-w-4xl mx-auto">
            We collaborate with professionals and motivated learners who value
            performance, structure, and long-term impact.
          </p>
        </div>
      </section>

      {/* 2. WHY WORK HERE */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Why Work at Navora Ads</h2>
          <p className="text-white/60 text-lg max-w-4xl mx-auto">
            Navora Ads operates like a growth consulting firm. We prioritize
            clarity, accountability, and measurable outcomes — not volume or
            shortcuts.
          </p>
        </div>
      </section>

      {/* 3. HOW WE WORK */}
      {/* 3. HOW WE WORK */}
<section className="py-24 px-6">
  <div className="max-w-6xl mx-auto">

    {/* SECTION HEADER */}
    <div className="mb-12 max-w-3xl">
      <h2 className="text-3xl font-semibold mb-4 text-white">
        How We Work
      </h2>
      <p className="text-white/50 text-lg">
        Our operating principles are designed to reduce noise, enforce clarity,
        and compound results over time.
      </p>
    </div>

    {/* GRID */}
    <div className="relative grid md:grid-cols-3 gap-6">

      {/* DIVIDER ROW 1 */}
      <span
        className="
          hidden md:block
          absolute left-0 right-0 top-[calc(50%-1px)]
          h-px
          bg-gradient-to-r
          from-transparent via-[#2F8CFF]/30 to-transparent
          opacity-0
          transition-opacity duration-500
          group-hover:opacity-100
        "
      />

      {[
        "Performance over vanity metrics",
        "Systems over temporary tactics",
        "Ownership & accountability",
        "Clear communication & documentation",
        "Client confidentiality & ethics",
        "Continuous learning & improvement",
      ].map((item, index) => (
        <div
          key={item}
          tabIndex={0}
          role="group"
          aria-label={item}
          className="
            group relative overflow-hidden
            rounded-xl
            border border-white/10
            bg-[#0B0D10]
            p-7

            transition-all duration-300 ease-out

            hover:border-[#2F8CFF]/40
            hover:shadow-[0_0_32px_rgba(47,140,255,0.15)]
            hover:-translate-y-1

            focus-visible:outline-none
            focus-visible:border-[#2F8CFF]/60
            focus-visible:shadow-[0_0_36px_rgba(47,140,255,0.22)]
            focus-visible:-translate-y-1

            active:scale-[0.98]
          "
          style={{
            transitionDelay: `${index * 40}ms`,
          }}
        >
          {/* LEFT ACCENT */}
          <span
            className="
              absolute left-0 top-0 h-full w-[2px]
              bg-[#2F8CFF]
              opacity-0
              transition-all duration-300

              group-hover:opacity-100
              group-focus-visible:opacity-100
            "
          />

          {/* INDEX */}
          <span
            className="
              absolute top-4 right-4
              text-xs font-mono
              text-white/10
              transition-colors duration-300

              group-hover:text-white/25
              group-focus-visible:text-white/30
            "
          >
            0{index + 1}
          </span>

          {/* TEXT */}
          <p
            className="
              relative z-10
              text-base text-white/60
              leading-relaxed
              transition-colors duration-300

              group-hover:text-white
              group-focus-visible:text-white
            "
          >
            {item}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* 4. WHO WE COLLABORATE WITH */}
<section className="py-24 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-3xl font-semibold mb-6">
        Who We Collaborate With
      </h2>
      <p className="text-white/60 text-lg max-w-xl leading-relaxed">
        We collaborate with specialists who operate at a systems level —
        focused on performance, accountability, and long-term growth.
      </p>
    </div>

    {/* RIGHT — ROLES WITH ICONS */}
    <div className="grid grid-cols-2 gap-5">
      {[
        {
          label: "Performance Marketing (Meta & Google Ads)",
          icon: "📈",
        },
        {
          label: "SEO & Local SEO",
          icon: "🔍",
        },
        {
          label: "Website & Funnel Development",
          icon: "🧩",
        },
        {
          label: "Automation & CRM Systems",
          icon: "⚙️",
        },
        {
          label: "Creative & Media Production",
          icon: "🎬",
        },
        {
          label: "Growth Strategy & Analytics",
          icon: "🧠",
        },
      ].map(({ label, icon }) => (
        <div
          key={label}
          className="
            group relative flex items-start gap-4
            border border-white/10
            rounded-xl
            p-5
            text-sm
            text-white/60
            leading-relaxed

            bg-gradient-to-br
            from-[#0B0D10]
            to-[#0B0D10]

            transition-all duration-300 ease-out

            hover:text-white
            hover:border-[#2F8CFF]/50
            hover:from-[#0E1A2F]
            hover:to-[#0B0D10]
            hover:shadow-[0_0_26px_rgba(47,140,255,0.18)]

            active:scale-[0.98]
          "
        >
          {/* ICON */}
          <span
            className="
              mt-0.5 text-lg
              opacity-70
              transition-all duration-300
              group-hover:opacity-100
              group-hover:scale-110
            "
          >
            {icon}
          </span>

          {/* TEXT */}
          <span>{label}</span>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* 5. CAREERS */}
      <section className=" py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">
            Professional Careers
          </h2>
          <p className="text-white/60 text-lg max-w-4xl">
            For experienced professionals looking to work on real-world growth
            systems. Engagements may be full-time or contract-based depending on
            project needs.
          </p>

          <p className="mt-6 text-base text-white/60">
            📧 Apply:{" "}
            <a
              href="mailto:careers@navoraads.com"
              className="text-[#2F8CFF] hover:underline"
            >
              careers@navoraads.com
            </a>
          </p>
        </div>
      </section>

      {/* 6. INTERNSHIPS */}
      <section className="py-4 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">
            Internships & Learning
          </h2>
          <p className="text-white/60 text-lg max-w-4xl">
            Structured, mentorship-driven internships for students and early-
            stage professionals. Focused on performance, not certificates.
          </p>

          <p className="mt-6 text-base text-white/60">
            📧 Apply:{" "}
            <a
              href="mailto:internships@navoraads.com"
              className="text-[#2F8CFF] hover:underline"
            >
              internships@navoraads.com
            </a>
          </p>
        </div>
      </section>

      {/* 7. WHAT WE DO NOT OFFER */}
      <section className=" py-20 pb-10 px-6 text-center">
        <p className="text-base text-white/50 max-w-4xl mx-auto">
          We do not offer mass hiring, guaranteed placements, shortcut learning,
          or low-quality outsourcing. All opportunities are merit- and alignment-
          based.
        </p>
      </section>

      {/* 8. APPLICATION PROCESS */}
{/* 8. APPLICATION PROCESS */}
<section className="py-20 px-6 text-center">
  <h2 className="section-title mb-14">Application Process</h2>

  <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
    {[
      {
        step: "01",
        title: "Submit Application",
        desc: "Share your profile, experience, and area of interest.",
      },
      {
        step: "02",
        title: "Alignment Review",
        desc: "We assess skill fit, mindset, and collaboration alignment.",
      },
      {
        step: "03",
        title: "Conversation / Assessment",
        desc: "Structured discussion or task-based evaluation.",
      },
      {
        step: "04",
        title: "Collaboration Decision",
        desc: "Final decision based on mutual alignment and scope.",
      },
    ].map(({ step, title, desc }) => (
      <div
        key={step}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          e.currentTarget.style.setProperty(
            "--x",
            `${e.clientX - rect.left}px`
          );
          e.currentTarget.style.setProperty(
            "--y",
            `${e.clientY - rect.top}px`
          );
        }}
        className="
          group relative overflow-hidden
          border border-white/10
          rounded-2xl
          p-8
          text-left
          bg-[#0B0D10]

          transition-all duration-300
          hover:scale-[1.03]
          hover:border-[#2F8CFF]/50

          active:scale-[0.97]
          active:border-[#2F8CFF]/60

          hover:shadow-[0_0_40px_rgba(47,140,255,0.18)]
          active:shadow-[0_0_30px_rgba(47,140,255,0.22)]
        "
      >
        {/* CURSOR GLOW LAYER */}
        <span
          className="
            pointer-events-none absolute inset-0
            opacity-0 group-hover:opacity-100 group-active:opacity-100
            transition-opacity duration-300
          "
          style={{
            background:
              "radial-gradient(120px at var(--x) var(--y), rgba(47,140,255,0.25), transparent 60%)",
          }}
        />

        {/* STEP */}
        <p
          className="
            relative z-10
            text-xs tracking-widest text-[#2F8CFF] mb-3
            transition-all duration-300 delay-75
            group-hover:-translate-y-1
            group-hover:scale-110
            group-active:scale-105
          "
        >
          STEP {step}
        </p>

        {/* TITLE */}
        <h3
          className="
            relative z-10
            text-lg font-medium text-white
            transition-all duration-300 delay-150
            group-hover:text-xl
          "
        >
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="
            relative z-10
            mt-3 text-sm text-white/60 leading-relaxed
            transition-all duration-300 delay-200
            group-hover:text-white
          "
        >
          {desc}
        </p>
      </div>
    ))}
  </div>
</section>


      {/* 9. LOCATION */}
      <section className=" text-base py-6 px-6 text-center">
        <p className="text-white/60">
          Location: Chennai · Hybrid / Remote collaboration possible
        </p>
      </section>

      {/* 10. DISCLAIMER */}
      <section className=" py-2 pb-12 px-6 text-center">
        <p className="text-sm text-white/40 max-w-3xl mx-auto">
          Employment and internship opportunities are subject to business needs,
          role availability, and alignment with company standards.
        </p>
      </section>


    </main>
  );
}
