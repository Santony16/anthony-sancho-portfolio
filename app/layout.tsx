import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anthony Sancho | Software Engineer",
  description: "Anthony Sancho, Software Engineer in Costa Rica. Frontend experience and full-stack development projects.",
  applicationName: "Anthony Sancho Portfolio",
  authors: [{ name: "Anthony Sancho", url: "https://github.com/Santony16" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F6F4EE",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
