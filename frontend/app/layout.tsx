import type { Metadata } from "next";
import { QueryProvider } from '@/lib/providers/query-provider';
import "./globals.css";


export const metadata: Metadata = {
  title: "PhoenEY Education Platform",
  description: "Powered By PhoenEY ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}