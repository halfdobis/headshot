import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import Navbar from "@/components/landing/Navbar";
import "./globals.css";
import Footer from "@/components/landing/Footer";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Headshot",
  description: "Welcome to the world of snipping bots",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={firaCode.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
