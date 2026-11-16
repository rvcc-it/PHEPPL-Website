import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "PHEPPL | Paanayil Heavy Engineering Projects Pvt. Ltd.",
  description:
    "Paanayil Heavy Engineering Projects Private Limited (PHEPPL) is a premier engineering, heavy structural steel fabrication, EPC, and infrastructure construction company established in 2018 in Coimbatore, India. Sister concern of Riyadh Villas Contracting Est., Saudi Arabia.",
  keywords: [
    "PHEPPL",
    "Paanayil Heavy Engineering",
    "Heavy Structural Steel Fabrication",
    "Industrial Plant Construction",
    "EPC Contractor India",
    "Coimbatore Heavy Engineering",
    "Riyadh Villas Contracting",
    "Saudi Aramco Contractor",
    "SECO Substation Steel",
    "ISO 9001 14001 45001 Certified Engineering",
  ],
  authors: [{ name: "PHEPPL Engineering Corporate" }],
  openGraph: {
    title: "PHEPPL | Heavy Engineering, Structural Steel & EPC Infrastructure",
    description:
      "Engineering Excellence. Building The Future. Delivering reliable engineering and construction solutions through expertise, innovation and an uncompromising commitment to quality.",
    url: "https://www.pheppl.com",
    siteName: "PHEPPL Corporate",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero/hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "PHEPPL Heavy Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PHEPPL | Heavy Engineering & Construction",
    description: "Engineering Excellence. Building The Future.",
    images: ["/images/hero/hero-bg.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t==="light"||(!t&&window.matchMedia("(prefers-color-scheme: light)").matches)){document.documentElement.classList.add("light")}}catch(e){}`,
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen flex flex-col bg-page text-body antialiased selection:bg-[#20A84A] selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

