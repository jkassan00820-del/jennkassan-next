import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";

const heading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
});

const body = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Figuring It Out | Jenn Kassan",
  description: "Finding Clarity in the Chaos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}