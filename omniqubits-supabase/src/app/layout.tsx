import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OmniQubits",
  description: "Beyond the Horizon of Innovation",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}