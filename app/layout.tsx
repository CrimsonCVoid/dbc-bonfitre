import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Fraunces, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SITE } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#e07a3a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: `Beach Bonfires Near Destin & 30A | ${SITE.name}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "Destin beach bonfire",
    "30A beach bonfire",
    "beach bonfire rental",
    "bachelorette bonfire 30A",
    "Santa Rosa Beach bonfire",
    "South Walton bonfire",
    "Miramar Beach bonfire",
    "bonfire permits Walton County",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.domain,
    siteName: SITE.name,
    title: `Beach Bonfires Near Destin & 30A | ${SITE.name}`,
    description: SITE.description,
    images: [
      {
        url: "/images/IMG_0684.jpeg",
        width: 1200,
        height: 630,
        alt: "Private beach bonfire experience on Florida's Emerald Coast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Beach Bonfires Near Destin & 30A | ${SITE.name}`,
    description: SITE.description,
    images: ["/images/IMG_0684.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "6RupO49g5VNWvISKcJWY6uePfql9uumLN5zw021zPRs",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/favicon.png", type: "image/png" },
    ],
    apple: "/images/favicon.png",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE.domain}/#business`,
  name: SITE.name,
  description: SITE.description,
  url: SITE.domain,
  telephone: SITE.phone,
  email: SITE.email,
  image: [
    `${SITE.domain}/images/IMG_0674.jpeg`,
    `${SITE.domain}/images/IMG_0684.jpeg`,
    `${SITE.domain}/images/IMG_2426.jpeg`,
  ],
  logo: `${SITE.domain}/images/destin-bonfire-company-logo.png`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postal,
    addressCountry: SITE.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.address.lat,
    longitude: SITE.address.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [...SITE.hours.days],
      opens: SITE.hours.opens,
      closes: SITE.hours.closes,
    },
  ],
  sameAs: [SITE.social.facebook, SITE.social.instagram],
  areaServed: [
    "Destin, FL",
    "30A",
    "Santa Rosa Beach, FL",
    "Miramar Beach, FL",
    "Seaside, FL",
    "Rosemary Beach, FL",
    "Inlet Beach, FL",
    "Grayton Beach, FL",
    "Blue Mountain Beach, FL",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:shadow-lg"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        {/*
          FareHarbor Lightframe — intercepts anchors with data-fh-customer-id
          and data-fh-flow matching the shortname, opens them in a modal.
        */}
        <Script
          src="https://fareharbor.com/embeds/api/v1/?autolightframe"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
