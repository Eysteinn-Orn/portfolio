import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar"; // Import the Navbar"

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: "swap", // Recommended for variable fonts
});

export const metadata: Metadata = {
  title: "Eysteinn - Portfolio",
  description: "A portfolio website showcasing my skills and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${publicSans.variable} antialiased`} // Update className to use publicSans
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
