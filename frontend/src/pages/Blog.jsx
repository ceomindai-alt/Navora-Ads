import { Link } from "react-router-dom";

const blogs = [
   {
    category: "Digital Marketing",
    title: "Digital Marketing Services",
    description:
      "End-to-end digital marketing strategies for scalable business growth.",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1200",
    link: "/blog/digital-marketing",
  },
  {
    category: "Google Ads",
    title: "Google Ads Management",
    description: "Lower CPC and high-intent leads using Google Ads.",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200",
    link: "/blog/google-ads",
  },
  {
    category: "Meta Ads",
    title: "Meta Ads (Facebook & Instagram)",
    description: "Scale leads using Meta Ads & Reels strategy.",
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1200",
    link: "/blog/meta-ads",
  },
  {
    category: "SEO",
    title: "SEO Services",
    description: "Rank higher with local and national SEO strategies.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200",
    link: "/blog/seo",
  },
  {
    category: "AI Marketing",
    title: "AI Video Marketing",
    description: "AI-powered creatives for faster scaling.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
    link: "/blog/ai-marketing",
  },
  {
    category: "Web Development",
    title: "Website Development",
    description: "High-converting websites built for ads.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
    link: "/blog/website-development",
  },
  {
  category: "Digital Marketing",
  title: "Top 20 Digital Marketing Companies in Chennai (2026)",
  description:
    "A detailed comparison of the best digital marketing agencies in Chennai.",
  image:
    "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1200",
  link: "/blog/top-20-digital-marketing-companies-in-chennai",
},

];

export default function Blog() {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        background:
          "radial-gradient(circle at top, #1a2233 0%, #0b0f17 45%, #05070c 100%)",
      }}
    >
      <main className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-14">
          Navora Ads Blog
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <span className="text-blue-400 text-sm font-semibold">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
