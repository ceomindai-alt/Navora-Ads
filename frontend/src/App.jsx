import { Routes, Route } from "react-router-dom";
import {Header, Footer} from "./components/HF";
import Home from "./pages/Home";
import Service from "./pages/Service";
import CaseStudies from "./pages/CaseStudies";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Seo from "./seo/Seo";
import SEOCompany from "./seo/SeoCompany";
import MetaAds from "./seo/MetaAds";
import GoogleAds from "./seo/GoogleAds";
import Lead from "./seo/Lead";
import Privacy from "./pages/privacy";
import Terms from "./pages/Term";
import Cookie from "./pages/Cookie";
import Healthcare from "./pages/Healthcare";
import RealEstate from "./pages/RealEstate";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import WhatsAppCTA from "./components/WhatsAppCTA";
import ThankYou from "./pages/ThankYou";
import Careers from "./pages/Careers";
import OurProcess from "./pages/OurProcess";
import Insights from "./pages/Insights";
import CursorGlow from "./components/CursorGlow";
import Snowfall from "react-snowfall";
import HighTicketLanding from "./seo/HighTicketLanding";
import useSmoothScroll from "./components/useSmoothScroll";

function App() {
   useSmoothScroll();
  return (
    <>
  
    <Snowfall />
    <CursorGlow />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/digital-marketing-agency-chennai" element={<Seo />} />
        <Route path="/seo-company-chennai" element={<SEOCompany />} />
        <Route path="/meta-ads-agency-chennai" element={<MetaAds />} />
        <Route path="/google-ads-agency-chennai" element={<GoogleAds />} />
        <Route path="/lead-generation-agency-chennai" element={<Lead />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-conditions" element={<Terms />} />
        <Route path="/cookie-policy" element={<Cookie />} />
        <Route path="/case-studies/healthcare-performance-marketing" element={<Healthcare />} />
        <Route path="/case-studies/real-estate-lead-generation" element={<RealEstate />} />
        <Route path="/case-studies/education-admissions-marketing" element={<Education />} />
        <Route path="/contact" element={<Contact /> }/>
        <Route path="/whatsappcta" element={<WhatsAppCTA />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/ourprocess" element={<OurProcess />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/web" element={<HighTicketLanding />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
