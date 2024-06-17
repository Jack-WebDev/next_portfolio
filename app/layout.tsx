import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], style: "italic", weight: "400" });

export const metadata: Metadata = {
  title: "Jack WebDev",
  description:
    "Jack WebDev is a software developer who builds accessible, inclusive products and digital experiences for the web.",
    icons: {
      icon: "/Favicon.png"
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
