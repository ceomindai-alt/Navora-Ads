// Navora Ads — WORLD-CLASS HOMEPAGE (110% COMPLETE)
// React 19 + Tailwind CSS + Framer Motion
// Global • Consulting-grade • Premium • SEO-safe
import Tilt3D from "../components/Tilt3D";
import { TiltCard } from "../components/TiltCard";

import { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {motion,useMotionValue, useTransform, animate,} from "framer-motion";

import { Link } from "react-router-dom";
import CurveLogoRun from "./home/CurveLogoRun.jsx";
import CapabilitiesSection from "./home/CapabilitiesSection.jsx";
import FounderSection from "./home/FounderImageCard.jsx";
import ScrollRevealText from "./home/ScrollRevealText.jsx";
import HomeBgCanvas from "../components/HomeBgCanvas.jsx";


const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const schemaObject = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://navoraads.com/#organization",
      "name": "Navora Ads",
      "url": "https://navoraads.com",
      "logo": "https://navoraads.com/logo.png",
      "sameAs": [
        "https://www.instagram.com/navoraads",
        "https://www.linkedin.com/company/navoraads"
      ],
      "description":
        "Navora Ads is a performance-driven digital marketing agency building scalable growth systems using paid media, SEO, automation, and conversion strategy."
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://navoraads.com/#localbusiness",
      "name": "Navora Ads",
      "image": "https://navoraads.com/logo.png",
      "url": "https://navoraads.com",
      "telephone": "+91-9952957187",
      "priceRange": "₹₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1/354/a2, Singarathottam Main Rd",
        "addressLocality": "Vandalur",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600048",
        "addressCountry": "IN"
      },
      "areaServed": [
        "Chennai",
        "Tamil Nadu",
        "India",
        "United Kingdom",
        "United States"
      ]
    }
  ]
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does Navora Ads do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Navora Ads is a performance-driven digital marketing agency that builds scalable growth systems using paid advertising, SEO, automation, and conversion optimisation."
      }
    },
    {
      "@type": "Question",
      "name": "Is Navora Ads suitable for large businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. Navora Ads works with growth-focused brands and enterprises that require structured, measurable, and scalable digital marketing systems."
      }
    },
    {
      "@type": "Question",
      "name": "Does Navora Ads offer digital marketing services in Chennai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. Navora Ads is based in Chennai and serves businesses locally, nationally, and globally."
      }
    }
  ]
};

  /* ================= Animated Counters ================= */
  const adSpend = useMotionValue(0);
  const brands = useMotionValue(0);

  const adSpendRounded = useTransform(adSpend, Math.round);
  const brandsRounded = useTransform(brands, Math.round);

  useEffect(() => {
    animate(adSpend, 10, { duration: 4.5, ease: "easeOut" });
    animate(brands, 120, { duration: 4.5, ease: "easeOut" });
  }, [adSpend, brands]);

  /* ================= Ambient Mouse Motion ================= */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  const glowX = useTransform(mouseX, [-0.5, 0.5], [-60, 60]);
  const glowY = useTransform(mouseY, [-0.5, 0.5], [-60, 60]);

  return (
    <main className="relative bg-[#0B0D10] text-[#F5F7FA] overflow-hidden">
      <HomeBgCanvas />
      
 <HelmetProvider>
      {/* ================= SEO ================= */}
      <Helmet>
  <title>Navora Ads | Performance-Driven Digital Marketing Agency in chennai</title>

  <script type="application/ld+json">
    {JSON.stringify(schemaObject)}
  </script>
  
  <script type="application/ld+json">
    {JSON.stringify(faqSchema)}
  </script>

         {/* ================= GLOBAL SEO ================= */}
          {/* Title Template */}
          <title>
            Navora Ads | Performance-Driven Digital Marketing Agency in Chennai
          </title>

          {/* Meta Description */}
          <meta
            name="description"
            content="Navora Ads is a performance-driven digital marketing agency in Chennai building scalable growth systems using paid media, SEO, automation, and conversion strategy."
          />

          {/* Keywords (light use, still safe) */}
          <meta
            name="keywords"
            content="
              digital marketing agency in chennai,
              performance marketing agency,
              lead generation company,
              google ads agency chennai,
              seo company chennai,
              growth marketing agency,
              digital marketing services chennai
            "
          />

          {/* Robots */}
          <meta name="robots" content="index, follow" />

          {/* Canonical */}
          <link rel="canonical" href="https://navoraads.com/" />

          {/* Viewport */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/* Theme Color */}
          <meta name="theme-color" content="#0B0D10" />

          {/* ================= OPEN GRAPH ================= */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Navora Ads" />
          <meta
            property="og:title"
            content="Navora Ads | Performance-Driven Digital Marketing Agency"
          />
          <meta
            property="og:description"
            content="Performance-driven digital marketing agency in Chennai helping brands scale using paid media, SEO, automation, and conversion systems."
          />
          <meta property="og:url" content="https://navoraads.com/" />
          <meta
            property="og:image"
            content="https://navoraads.com/og-image.jpg"
          />

          {/* ================= TWITTER ================= */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@navoraads" />
          <meta
            name="twitter:title"
            content="Navora Ads | Performance Marketing Agency"
          />
          <meta
            name="twitter:description"
            content="Navora Ads builds scalable growth systems using paid ads, SEO, automation, and conversion optimisation."
          />
          <meta
            name="twitter:image"
            content="https://navoraads.com/og-image.jpg"
          />

          {/* ================= PERFORMANCE HINTS ================= */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

          {/* Optional favicon */}
          <link rel="icon" href="/favicon.ico" />
      
</Helmet>


      {/* ================= HERO ================= */}
      <section className="relative pt-36 pb-32 px-6 lg:px-0">
        <motion.div
          style={{ x: glowX, y: glowY }}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[760px] w-[760px]
                     -translate-x-1/2 -translate-y-1/2 rounded-full
                     bg-[#2F8CFF]/10 blur-[180px]"
        />
        

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          className="relative max-w-6xl mx-auto text-center"
        >
          <p className="uppercase tracking-widest text-xs text-white/50 mb-6">
            Global Growth Consulting & Performance Marketing
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Digital Marketing Agency in Chennai Driving Scalable Business Growth
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-white/65 text-lg">
            Navora Ads is a digital marketing agency in Chennai designing
            performance-driven growth systems across paid advertising, SEO,
            conversion optimisation, and automation for scalable businesses.

          </p>

          <div className="mt-20 flex justify-center items-center gap-6">
            <a
              href="https://wa.me/919952957187"
              className="shimmer-btn rounded-full bg-[#2F8CFF] px-12 py-4 text-sm font-medium"
            >
              Apply for a Strategy Call
            </a>
            <a
              href="#case-studies"
              className="text-sm text-white/60 hover:text-white"
            >
              View Results
            </a>
          </div>

          <div className="mt-12 flex justify-center gap-10 text-white/70">
            <span className="text-lg font-medium">
              ₹<motion.span>{adSpendRounded}</motion.span> Cr+ Ad Spend
            </span>
            <span className="text-lg font-medium">
              <motion.span>{brandsRounded}</motion.span>+ Brands
            </span>
            <span className="text-lg font-medium">India · UK · US</span>
          </div>

          <p className="mt-6 text-sm text-white/50">
            No long-term contracts · Clear KPIs · Performance accountability
          </p>
        </motion.div>
      </section>
      {/* ================= FOUNDER ================= */}

<FounderSection />


      {/* ================= GROWTH FRAMEWORK ================= */}
      <Section className="border-t border-white/10 py-20 px-6 lg:px-0">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollRevealText />
          <div className="mt-16 grid md:grid-cols-4 gap-10 text-left">
            {[
              ["Research", "Market, audience & demand analysis"],
              ["Build", "Funnels, systems & performance architecture"],
              ["Scale", "Channel expansion & budget optimisation"],
              ["Optimise", "Continuous performance refinement"],
            ].map(([t, d]) => (
              <Tilt3D key={t}>
      <TiltCard className="p-8 h-full">
        <h3 className="text-lg font-medium">{t}</h3>
        <p className="mt-3 text-sm text-white/60">{d}</p>
      </TiltCard>
    </Tilt3D>
            ))}
          </div>
        </div>
      </Section>

      {/* ================= CAPABILITIES ================= */}
     <CapabilitiesSection />


      {/* ================= ENGAGEMENT MODEL ================= */}
      <Section>
        <h2 className="section-title">Engagement Model</h2>
        <p className="section-text">
          A structured, transparent engagement approach designed for clarity,
          accountability, and long-term performance.
        </p>
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-left">
          {[
            ["Discovery", "Business goals, data audit, growth alignment"],
            ["System Design", "Strategy, funnels, channels & KPIs"],
            ["Execution", "Campaign rollout, optimisation & reporting"],
            ["Scale & Review", "Quarterly growth reviews & expansion"],
          ].map(([t, d]) => (
            <Tilt3D key={t}>
      <TiltCard className="p-6 h-full">
        <h3 className="font-medium">{t}</h3>
        <p className="mt-3 text-sm text-white/60">{d}</p>
      </TiltCard>
    </Tilt3D>
          ))}
        </div>
      </Section>

      {/* ================= TECHNOLOGY STACK ================= */}
     {/* ================= TECHNOLOGY STACK ================= */}
<section className="py-20  overflow-hidden">
  
  {/* Constrained heading */}
  <div className="px-6 lg:px-14 text-center max-w-6xl mx-auto">
    <h2 className="section-title">Technology & Platform Stack</h2>
    <p className="section-text">
      We work across industry-leading platforms and analytics tools to
      ensure performance visibility and scalability.
    </p>
  </div>

  {/* Full-width marquees */}
  <div className="mt-10 mb-0 space-y-8 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">

  <CurveLogoRun />

  </div>
</section>


      
      {/* ================= 5. TRUST ================= */}
      <Section >
  <h2 className="section-title">
    Industries We Serve Across Chennai & Beyond
  </h2>

  <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm text-white/60">
    {[
      { label: "Real Estate", path: "/case-studies/real-estate-lead-generation" },
      { label: "Education", path: "/case-studies/education-admissions-marketing" },
      { label: "Healthcare", path: "/case-studies/healthcare-performance-marketing" },
      { label: "Ecommerce & D2C", path: "/services" },
      { label: "Travel", path: "/services" },
      { label: "Manufacturing", path: "/services" },
    ].map(({ label, path }) => (
      <Tilt3D key={label}>
        <Link
          to={path}
          onClick={scrollToTop}
          className="block"
        >
          <TiltCard
            className="
              py-6 text-center
              cursor-pointer
              transition-transform duration-200
              hover:scale-[1.02]
              active:scale-[0.98]
            "
          >
            {label}
          </TiltCard>
        </Link>
      </Tilt3D>
    ))}
  </div>
</Section>


      {/* ================= CASE STUDIES ================= */}
      <section id="case-studies " className="py-20 px-6 lg:px-0">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="section-title">Case Study Highlights & Performance Proof</h2>
          <p className="mt-10 section-text">
            Enterprise, ecosystem-level, and high-growth performance outcomes.
          </p>
        </div>
      </section>

      {/* ================= QUALIFICATION ================= */}
      {/* ================= QUALIFICATION ================= */}
<Section>
  <h2 className="section-title">Who We Work With</h2>

  <div className="mt-16 grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

    {/* IDEAL FIT */}
    <Tilt3D>
      <TiltCard className="p-10 h-full text-left">
        <h3 className="text-lg font-medium text-white mb-6">
          Ideal Fit
        </h3>

        <ul className="space-y-4 text-sm text-white/70">
          <li className="flex gap-3">
            <span className="text-[#2F8CFF]">•</span>
            Brands serious about scalable growth
          </li>
          <li className="flex gap-3">
            <span className="text-[#2F8CFF]">•</span>
            Businesses investing in performance, not experiments
          </li>
          <li className="flex gap-3">
            <span className="text-[#2F8CFF]">•</span>
            Founders seeking long-term systems
          </li>
        </ul>
      </TiltCard>
    </Tilt3D>

    {/* NOT A FIT */}
    <Tilt3D>
      <TiltCard className="p-10 h-full text-left border border-white/5">
        <h3 className="text-lg font-medium text-white/60 mb-6">
          Not a Fit
        </h3>

        <ul className="space-y-4 text-sm text-white/45">
          <li className="flex gap-3">
            <span className="text-white/30">•</span>
            Low-budget trial marketing
          </li>
          <li className="flex gap-3">
            <span className="text-white/30">•</span>
            Short-term, non-strategic campaigns
          </li>
        </ul>
      </TiltCard>
    </Tilt3D>

  </div>
</Section>

      {/* ================= FAQ SECTION ================= */}
<Section className="border-t border-white/10 py-20 px-6 lg:px-14">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-semibold mb-6">
      Frequently Asked Questions
    </h2>
    <p className="text-white/60 mb-14">
      Clear answers to common questions about our growth consulting
      and digital marketing services.
    </p>

    <div className="space-y-6 text-left">
      
      {/* FAQ ITEM */}
      <div className="border border-white/10 rounded-xl p-6">
        <h3 className="font-medium text-lg">
          What does Navora Ads do?
        </h3>
        <p className="mt-3 text-white/60 text-sm leading-relaxed">
          Navora Ads is a performance-driven digital marketing agency that
          builds scalable growth systems using paid advertising, SEO,
          automation, and conversion optimisation.
        </p>
      </div>

      <div className="border border-white/10 rounded-xl p-6">
        <h3 className="font-medium text-lg">
          Is Navora Ads suitable for large businesses?
        </h3>
        <p className="mt-3 text-white/60 text-sm leading-relaxed">
          Yes. Navora Ads works with growth-focused brands and enterprises
          that require structured, measurable, and scalable digital
          marketing systems.
        </p>
      </div>

      <div className="border border-white/10 rounded-xl p-6">
        <h3 className="font-medium text-lg">
          Does Navora Ads offer digital marketing services in Chennai?
        </h3>
        <p className="mt-3 text-white/60 text-sm leading-relaxed">
          Yes. Navora Ads is based in Chennai and serves businesses locally,
          across India, and internationally.
        </p>
      </div>

    </div>
  </div>
</Section>


      {/* ================= FINAL CTA ================= */}
      <section className="py-20 px-6 lg:px-0 text-center">
        <h2 className="text-4xl font-semibold">Ready to Scale Your Business?</h2>
        <p className="mt-6 text-white/60">
          We partner with a limited number of brands each quarter.
        </p>
        <a
          href="https://wa.me/919952957187"
          className="shimmer-btn inline-block mt-10 rounded-full bg-[#2F8CFF] px-14 py-4 text-sm font-medium"
        >
          Apply for a Strategy Call
        </a>
      </section>
      </HelmetProvider>

    </main>
  );
}

function Section({ children }) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-20 px-6 lg:px-0"
    >
      <div className="max-w-6xl mx-auto text-center [&>h2]:mb-6">
        {children}
      </div>
    </motion.section>
  );
}

