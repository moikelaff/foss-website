import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faculty of Social Sciences - UIII",
  description: "Faculty of Social Sciences at Universitas Islam International Indonesia. Explore our academic programs, research, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Let each route group handle its own HTML structure
  return children;
}