import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default:  "OmniQubits — Beyond the Horizon of Innovation",
    template: "%s | OmniQubits",
  },
  description:
    "A limitless, all-encompassing approach to marketing, customer support, and technology — for the businesses of tomorrow.",
  keywords: ["marketing agency", "growth marketing", "brand strategy", "technology", "AI", "digital transformation"],
  openGraph: {
    type: "website", locale: "en_US", siteName: "OmniQubits",
    title: "OmniQubits — Beyond the Horizon of Innovation",
    description: "A limitless approach to marketing, customer support, and technology for the businesses of tomorrow.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
