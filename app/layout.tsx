import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Domain Search Protector – Search Domains Without Front-Running",
  description: "Safely search domain availability without registrars tracking and buying your ideas. Anonymous proxy searches for entrepreneurs and domain investors."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4cb532e9-621f-4b1d-ae49-f66834a3ae44"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
