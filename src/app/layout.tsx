import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";

// Load font with display swap for better performance
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Define metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://https://leon211.casino/"),
  title: {
    template: "%s | Leon - Premium Gaming Platform",
    default: "Leon - Premium Gaming Platform",
  },
  description:
    "Enjoy 1000+ premium slots, live casino games, and 24/7 support with Leon gaming platform. Get a 100% welcome bonus and 200 free spins today!",
  keywords: [
    "online casino",
    "slots",
    "gaming platform",
    "casino games",
    "live dealer",
    "welcome bonus",
    "free spins",
  ],
  authors: [{ name: "Leon Team" }],
  creator: "Leon Inc.",
  publisher: "Leon Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Gaming",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://leon211.casino/",
    title: "Leon - Premium Gaming Platform",
    description:
      "Enjoy 1000+ premium slots, live casino games, and 24/7 support with Leon gaming platform. Get a 100% welcome bonus and 200 free spins today!",
    siteName: "Leon",
    images: [
      {
        url: "../assets/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Leon Premium Gaming Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leon - Premium Gaming Platform",
    description:
      "Enjoy 1000+ premium slots, live casino games, and 24/7 support. Get a 100% welcome bonus today!",
    images: ["../assets/images/logo.png"],
    creator: "@LeonOfficial",
  },
  alternates: {
    canonical: "https://https://leon211.casino/",
    languages: {
      "en-US": "https://https://leon211.casino/",
      "es-ES": "https://https://leon211.casino//es",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

// Define viewport settings for responsive design
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1e1e2e" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className={inter.variable}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Structured data for rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Leon",
              url: "https://https://leon211.casino/",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://https://leon211.casino//search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
