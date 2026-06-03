import type { Metadata } from "next";
import Image from "next/image";
import { MotionProvider } from "@/components/ui/motion-provider";
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
        <link rel="preload" href="/fonts/Marlin-800.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <div className="fixed inset-0 -z-10">
          <Image src="/bg.webp" alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-background/25" />
        </div>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
