import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Ticker from "@/components/sections/Ticker";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import Tools from "@/components/sections/Tools";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Gallery from "@/components/sections/Gallery";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/data/content";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.brand,
    url: SITE.url,
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.brand,
    jobTitle: "Video Editor & Graphic Designer",
    url: SITE.url,
    image: `${SITE.url}/profile.jpg`,
    email: SITE.email,
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.brand,
    url: SITE.url,
    image: `${SITE.url}/profile.jpg`,
    description: SITE.description,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Creative services",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.text },
      })),
    },
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Services />
        <Work />
        <Gallery />
        <Tools />
        <Process />
        <Contact />
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
