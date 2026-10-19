import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap", variable: "--font-sans" });
const serif = Playfair_Display({ subsets: ["latin"], style: ["normal", "italic"], weight: ["400", "500", "600", "700"], display: "swap", variable: "--font-serif" });

export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#faf7f3" };

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: "%s | ALAA" },
  description: SITE.description,
  keywords: ["video editor", "graphic designer", "short-form video editing", "reels editor", "brand identity", "AI creative", "motion graphics", "portfolio"],
  authors: [{ name: SITE.brand }],
  creator: SITE.brand,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "website", locale: "en_US", url: SITE.url, siteName: SITE.brand, title: SITE.title, description: SITE.description, images: [{ url: "/profile.jpg", width: 960, height: 1280, alt: "ALAA — video editor & graphic designer" }] },
  twitter: { card: "summary_large_image", title: SITE.title, description: SITE.description, images: ["/profile.jpg"] },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
