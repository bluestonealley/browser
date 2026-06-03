import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "browser",
  description: "browser — the browser that works the way you do",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-screen">
      <body className="min-h-screen">
        <div
          className="fixed inset-0 -z-10 bg-background"
          style={{
            backgroundImage: "url('/bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="fixed inset-0 -z-10 bg-background/25" />
        {children}
      </body>
    </html>
  );
}
