import "./globals.css";

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-halyard antialiased">
        {children}
      </body>
    </html>
  );
}