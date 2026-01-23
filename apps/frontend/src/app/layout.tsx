import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alb Enerji CRM",
  description: "Alb Enerji CRM MVP"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
