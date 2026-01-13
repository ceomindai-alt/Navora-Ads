import { Helmet, HelmetProvider } from "react-helmet-async";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <HelmetProvider>
      <>
        {/* ================= GLOBAL SEO ================= */}
        <Helmet>
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

        {/* ================= PAGE CONTENT ================= */}
        <Outlet />
      </>
    </HelmetProvider>
  );
}
