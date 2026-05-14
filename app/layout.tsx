import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Subscription Audit Tool — Find Forgotten Subscriptions",
  description: "Connect your bank accounts and credit cards to identify recurring charges and stop wasting money on forgotten subscriptions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="27304aac-0ff0-4184-bc68-2be71df0f2bb"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
