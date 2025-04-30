import type { Metadata } from "next";
import "./globals.css";
import Navbar from '@/app/(frontend)/components/Navbar';
import Footer from '@/app/(frontend)/components/Footer';

export const metadata: Metadata = {
  title: "Faculty of Social Sciences - UIII",
  description: "Faculty of Social Sciences at Universitas Islam International Indonesia. Explore our academic programs, research, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-halyard antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}