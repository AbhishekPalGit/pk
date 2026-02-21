import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PK Global Overseas Pvt. Ltd. — India's Premier Export Partner",
  description:
    "PK Global Overseas Pvt. Ltd. exports premium Indian products worldwide — Handicraft, Spices, Temple Items, Brass & Copper, Leather, Jewellery, Clothing, Fruits & Vegetables, Grocery, Glass Products, Furniture, and Ceramics.",
  keywords: "Indian exports, handicraft export, spices export, temple items, brass copper, leather goods, imitation jewellery, Indian clothing export, grocery export, glass products, furniture export, ceramic export, PK Global Overseas",
  openGraph: {
    title: "PK Global Overseas Pvt. Ltd.",
    description: "Bridging India to the World — Premium Export House",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
