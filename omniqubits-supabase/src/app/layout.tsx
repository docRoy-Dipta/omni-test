import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default:  "OmniQubits — Beyond the Horizon of Innovation",
    template: "%s | OmniQubits",
  },
  description:
    "OmniQubits harnesses a limitless, all-encompassing approach to business transformation — marketing, customer support, and technology — for the future-forward enterprise.",
  keywords: [
    "marketing agency",
    "growth marketing",
    "brand strategy",
    "technology solutions",
    "AI",
    "digital transformation",
  ],
  openGraph: {
    type:        "website",
    locale:      "en_US",
    siteName:    "OmniQubits",
    title:       "OmniQubits — Beyond the Horizon of Innovation",
    description: "A limitless approach to marketing, customer support, and technology.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/*
          Fonts loaded with <link> tags — NOT @import in CSS.

          Why this is faster:
          1. rel="preconnect" tells the browser to open a TCP connection
             to Google Fonts immediately, before it parses any CSS.
          2. rel="stylesheet" is discovered early during HTML parsing,
             not after CSS download + parse (which is what @import does).
          3. display=swap ensures text is visible immediately using the
             fallback font, then swaps to the custom font when ready.

          This saves 300–600ms on first load compared to @import.
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@200;300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
