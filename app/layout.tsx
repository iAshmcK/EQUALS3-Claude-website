import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EQUALS3 - The Growth Collective | Aesthetic Medicine Growth Consultancy",
  description: "Data-driven growth strategies for ambitious aesthetic medicine clinics and suppliers. Transform your business with proven systems from billion-pound brands.",
  keywords: "aesthetic medicine, clinic growth, medical aesthetics, business consultancy, healthcare growth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
