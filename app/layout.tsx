import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const poppins = Poppins({ subsets: ["latin"], style: "italic", weight: "400" });

export const metadata: Metadata = {
  title: "Jack WebDev",
  description:
    "Jack WebDev is a software developer who builds accessible, inclusive products and digital experiences for the web.",
  icons: {
    icon: "/Favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
        <div
          className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
          style={{
            background:
              "radial-gradient(1000px circle at 0px 0px, rgba(29, 78, 216, 0.15), transparent 80%)",
          }}
        ></div>
        {children}
        <Analytics />

      </body>
    </html>
  );
}
