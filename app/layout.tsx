import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://www.expressmaids.co.za";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ExpressMaids | Professional Cleaning Services in South Africa",
    template: "%s | ExpressMaids",
  },
  description:
    "ExpressMaids provides professional domestic, commercial, industrial, office, upholstery, window, toilet, tile, hygiene and pest control services in South Africa.",
  keywords: [
    "ExpressMaids",
    "cleaning services South Africa",
    "cleaning company Pretoria",
    "cleaning company Johannesburg",
    "domestic cleaning",
    "commercial cleaning",
    "office cleaning",
    "industrial cleaning",
    "upholstery cleaning",
    "window cleaning",
    "hygiene services",
    "pest control services",
  ],
  authors: [{ name: "ExpressMaids" }],
  creator: "ExpressMaids",
  publisher: "ExpressMaids",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: siteUrl,
    siteName: "ExpressMaids",
    title: "ExpressMaids | Professional Cleaning Services in South Africa",
    description:
      "Professional cleaning, hygiene and pest control services for homes, offices, commercial and industrial spaces.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ExpressMaids professional cleaning services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ExpressMaids | Professional Cleaning Services in South Africa",
    description:
      "Professional domestic, commercial, office, industrial, hygiene and pest control services in South Africa.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/favicon.png",
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ExpressMaids",
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    email: "info@expressmaids.co.za",
    telephone: "+27724882037",
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    name: "ExpressMaids",
    url: siteUrl,
    image: `${siteUrl}/og-image.jpg`,
    logo: `${siteUrl}/logo.png`,
    email: "info@expressmaids.co.za",
    telephone: "+27724882037",
    address: {
      "@type": "PostalAddress",
      streetAddress: "61 Ann Road, Clayville East",
      addressLocality: "Olifantsfontein",
      addressRegion: "Gauteng",
      addressCountry: "ZA",
    },
    areaServed: [
      "Pretoria",
      "Johannesburg",
      "Midrand",
      "Centurion",
      "Sandton",
      "Kempton Park",
      "Boksburg",
      "Benoni",
      "Randburg",
      "South Africa",
    ],
    priceRange: "$$",
  };

  const cleaningServiceSchema = {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    name: "ExpressMaids Cleaning Services",
    provider: {
      "@type": "Organization",
      name: "ExpressMaids",
      url: siteUrl,
    },
    serviceType: [
      "Domestic Cleaning",
      "Commercial Cleaning",
      "Industrial Cleaning",
      "Office Cleaning",
      "Upholstery Cleaning",
      "Window Cleaning",
      "Toilet and Tile Cleaning",
      "Hygiene Services",
      "Pest Control Services",
    ],
    areaServed: {
      "@type": "Country",
      name: "South Africa",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ExpressMaids",
    url: siteUrl,
  };

  return (
    <html lang="en-ZA">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(cleaningServiceSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}