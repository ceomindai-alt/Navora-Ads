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
import Privacy from "./pages/Privacy";
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
import Snowfall from "react-snowfall";
import HighTicketLanding from "./seo/HighTicketLanding";
import Disclaimer from "./pages/Disclaimer";
import GlobalH2ScrollReveal from "./components/GlobalH2ScrollReveal";
import Blog from "./pages/Blog";
import GoogleAdsBlog from "./pages/blogs/GoogleAds";
import MetaAdsBlog from "./pages/blogs/MetaAds";
import SEO from "./pages/blogs/SEO";
import AIMarketing from "./pages/blogs/AIMarketing";
import WebsiteDev from "./pages/blogs/WebsiteDev";
import DigitalMarketing from "./pages/blogs/DigitalMarketing";
import Top20Chennai from "./pages/blogs/Top20Chennai";

function App() {
  return (
    <>
  <GlobalH2ScrollReveal />
    <Snowfall />
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
        <Route path="/terms" element={<Terms />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/cookie-policy" element={<Cookie />} />
        <Route path="/case-studies/healthcare-performance-marketing" element={<Healthcare />} />
        <Route path="/case-studies/real-estate-lead-generation" element={<RealEstate />} />
        <Route path="/case-studies/education-admissions-marketing" element={<Education />} />
        <Route path="/contact" element={<Contact /> }/>
        <Route path="/whatsappcta" element={<WhatsAppCTA />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/our-process" element={<OurProcess />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/web" element={<HighTicketLanding />} />
        <Route path="/blog" element={<Blog />}/>
        <Route path="/blog/digital-marketing" element={<DigitalMarketing />}/>
         <Route path="/blog/google-ads" element={<GoogleAdsBlog />} />
        <Route path="/blog/meta-ads" element={<MetaAdsBlog />} />
        <Route path="/blog/seo" element={<SEO />} />
        <Route path="/blog/ai-marketing" element={<AIMarketing />} />
        <Route
          path="/blog/website-development"
          element={<WebsiteDev />}
        />
        <Route path="/blog/top-20-digital-marketing-companies-in-chennai" element={<Top20Chennai />}/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
