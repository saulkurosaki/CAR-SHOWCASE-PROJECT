import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CarHub",
  description:
    "Discover the best cars in the world with our new car rental showcase website!!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">{children}</body>
    </html>
  );
}
