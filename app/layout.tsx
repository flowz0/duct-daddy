import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";

export const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Duct Daddy Duct Cleaning",
  description: "Duct cleaning based in Kansas City, MO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${arimo.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
