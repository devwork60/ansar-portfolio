import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Newsreader } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";
import { SmoothScroll } from "@/components/smooth-scroll";

const bebas = Bebas_Neue({ variable: "--font-bebas", subsets: ["latin"], weight: "400" });
const newsreader = Newsreader({ variable: "--font-newsreader", subsets: ["latin"], style: ["normal", "italic"] });

const title = `${profile.name} — ${profile.role}`;
const description =
  "GoHighLevel, HubSpot and workflow automation that turns leads into booked calls and closed deals. CRM setup, email and SMS automation, AI chatbots and integrations.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: title, template: `%s · ${profile.name}` },
  description,
  openGraph: { type: "website", title, description, siteName: profile.name },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#d9dbd5" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebas.variable} ${newsreader.variable}`}>
      <body className="bg-paper font-serif text-ink antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
