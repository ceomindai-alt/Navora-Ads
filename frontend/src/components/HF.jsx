// Navora Ads — CLEAN PREMIUM HEADER & FOOTER
// React 19 + Tailwind CSS
// Corporate, SEO-safe, production-ready

import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/navora-logo.mp4";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaPinterest,
} from "react-icons/fa";
import { SiThreads } from "react-icons/si";


/* ================= SCROLL TO TOP ================= */
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

/* ================= NAV LINK STYLES ================= */
const navBase =
  "relative transition-colors duration-300";
const navInactive =
  "text-white/70 hover:text-white";
const navActive =
  "text-white after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-[#2F8CFF]";

/* ================= HEADER / NAVBAR ================= */
export function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  /* ================= CLOSE ON OUTSIDE CLICK ================= */
  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  return (
    <header
      dir="ltr"
      className="fixed top-0 left-0 w-full z-50 bg-[#0B0D10]/85 backdrop-blur border-b border-white/10"
    >
      <div className="w-full max-w-none px-4 md:px-6 lg:px-14 py-4 flex items-center justify-between">

        {/* ================= BRAND ================= */}
        <NavLink
          to="/"
          onClick={scrollToTop}
          className="group flex items-center gap-2 overflow-hidden flex-shrink-0"
        >
          {/* LOGO WRAPPER — WIDTH LOCKED */}
          <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
            <video
              src={logo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-12 w-12 object-contain"
            />
          </div>

          {/* BRAND TEXT — WIDTH STABLE */}
          <span className="navora-brand text-2xl text-white font-semibold tracking-wide whitespace-nowrap">
            Navora <span className="text-[#2F8CFF]">Ads</span>
          </span>
        </NavLink>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden md:flex items-center gap-10 text-base">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Services", path: "/services" },
            { name: "Case Studies", path: "/case-studies" },
            { name: "Courses", path: "/courses" },
            { name: "Careers", path: "/careers" },
            { name: "Contact", path: "/contact" },
          ].map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              onClick={scrollToTop}
              className={({ isActive }) =>
                `${navBase} ${isActive ? navActive : navInactive}`
              }
            >
              {name}
            </NavLink>
          ))}
        </nav>

        {/* ================= CTA ================= */}
        <a
          href="https://wa.me/919952957187"
          className="shimmer-btn hidden md:inline-flex rounded-full bg-[#2F8CFF] px-6 py-2 text-sm font-medium text-white flex-shrink-0"
        >
          Book a Strategy Call
        </a>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          className="md:hidden text-white text-2xl leading-none transition-transform duration-200 flex-shrink-0"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div
          ref={menuRef}
          className="md:hidden bg-[#0B0D10] border-t border-white/10"
        >
          <div className="px-6 py-8 flex flex-col items-center gap-5 text-base">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Case Studies", path: "/case-studies" },
              { name: "Courses", path: "/courses" },
              { name: "Careers", path: "/careers" },
              { name: "Contact", path: "/contact" },
            ].map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                onClick={() => {
                  scrollToTop();
                  setOpen(false);
                }}
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-white/70"
                }
              >
                {name}
              </NavLink>
            ))}

            <a
              href="https://wa.me/919952957187"
              className="shimmer-btn mt-6 inline-flex rounded-full bg-[#2F8CFF] px-10 py-3 text-white font-medium"
            >
              Book a Strategy Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ================= FOOTER ================= */
// Navora Ads — Global Corporate Footer (FINAL)
// React 19 + Tailwind CSS
// No missing sections or bars

export function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  return (
    <footer className="bg-[#0B0D10] text-white/60 border-t border-white/10">

      {/* MAIN FOOTER CONTENT */}
      <div className="w-full max-w-none px-4 md:px-6 lg:px-14 py-20">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12">

          {/* 1. COMPANY IDENTITY */}
          <div className="md:col-span-2 space-y-6">
            <video src={logo} autoPlay muted loop playsInline className="h-14 w-auto" />

            <p className="text-sm leading-relaxed max-w-sm">
              Navora Ads is a performance-driven digital growth company
              building scalable marketing systems for businesses across
              India, UK, US & UAE.
            </p>

            <div className="text-base space-y-2">
              <p>
                Email:{" "}
                <a
                  href="mailto:info@navoraads.com"
                  className="hover:text-white transition"
                >
                  info@navoraads.com
                </a>
              </p>
              <p>WhatsApp: +91 99529 57187</p>
              <p>Chennai, Tamil Nadu, India</p>
            </div>
          </div>

          {/* 2. COMPANY */}
          <div>
            <h4 className="text-white font-medium mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" onClick={scrollTop}>Home</Link></li>
              <li><Link to="/about" onClick={scrollTop}>About</Link></li>
              <li><Link to="/careers" onClick={scrollTop}>Careers</Link></li>
              <li><Link to="/contact" onClick={scrollTop}>Contact</Link></li>
              <li><Link to="/blog" onClick={scrollTop}>Blog</Link></li>
            </ul>
          </div>

          {/* 3. EXPERTISE */}
          <div>
            <h4 className="text-white font-medium mb-6">Expertise</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" onClick={scrollTop}>Services</Link></li>
              <li><Link to="/case-studies" onClick={scrollTop}>Case Studies</Link></li>
              <li><Link to="/our-process" onClick={scrollTop}>Our Process</Link></li>
              <li><Link to="/insights" onClick={scrollTop}>Insights</Link></li>
            </ul>
          </div>

          {/* 4. LEGAL */}
          <div>
            <h4 className="text-white font-medium mb-6">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/privacy-policy" onClick={scrollTop}>Privacy Policy</Link></li>
              <li><Link to="/terms" onClick={scrollTop}>Terms & Conditions</Link></li>
              <li><Link to="/disclaimer" onClick={scrollTop}>Disclaimer</Link></li>
            </ul>
          </div>

          {/* 5. WE ARE */}
          <div>
            <h4 className="text-white font-medium mb-6">We are</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/digital-marketing-agency-chennai" onClick={scrollTop}>Digital Marketing Agency Chennai</Link></li>
              <li><Link to="/seo-company-chennai" onClick={scrollTop}>SEO Company Chennai</Link></li>
              <li><Link to="/meta-ads-agency-chennai" onClick={scrollTop}>Meta Ads Agency Chennai</Link></li>
              <li><Link to="/google-ads-agency-chennai" onClick={scrollTop}>Google Ads Agency Chennai</Link></li>
              <li><Link to="/web" onClick={scrollTop}>Website Agency Chennai</Link></li>
              <li><Link to="/lead-generation-agency-chennai" onClick={scrollTop}>Lead Generation Agency Chennai</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* SOCIAL ICONS */}
      <div className="flex justify-center items-center gap-5 text-2xl mb-6">
        <a href="https://www.facebook.com/profile.php?id=61573690134638" target="_blank" rel="noopener noreferrer" className="text-[#1877F2] hover:scale-110 transition"><FaFacebook /></a>
        <a href="https://x.com/navoraads" target="_blank" rel="noopener noreferrer" className="text-[#1DA1F2] hover:scale-110 transition"><FaTwitter /></a>
        <a href="https://www.youtube.com/@Officevlogs12" target="_blank" rel="noopener noreferrer" className="text-[#FF0000] hover:scale-110 transition"><FaYoutube /></a>
        <a href="https://www.instagram.com/navoraads/" target="_blank" rel="noopener noreferrer" className="text-[#E4405F] hover:scale-110 transition"><FaInstagram /></a>
        <a href="https://www.linkedin.com/company/navora-ads/" target="_blank" rel="noopener noreferrer" className="text-[#0A66C2] hover:scale-110 transition"><FaLinkedin /></a>
        <a href="https://wa.me/919952957187" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:scale-110 transition"><FaWhatsapp /></a>
        <a href="https://pinterest.com/navoraads" target="_blank" rel="noopener noreferrer" className="text-[#E60023] hover:scale-110 transition"><FaPinterest /></a>
        <a href="https://threads.net/@navoraads" target="_blank" rel="noopener noreferrer" className="text-white hover:scale-110 transition"><SiThreads /></a>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="w-full max-w-none px-4 md:px-6 lg:px-14 py-6 flex flex-col md:flex-row items-center justify-center text-xs md:text-sm text-white/40">
          <p>© {new Date().getFullYear()} Navora Ads. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Performance-driven digital growth company · Global delivery
          </p>
        </div>
      </div>

    </footer>
  );
}