import type { Metadata } from "next";
import ChatWidget from "@/components/ChatWidget";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Microf | Lease-to-Own HVAC & Water Heater Financing",
    template: "%s | Microf",
  },
  description:
    "No credit check required. Microf offers flexible lease-to-own financing for HVAC systems and water heaters. Get approved instantly and restore your home's comfort today.",
  keywords: [
    "HVAC financing no credit check",
    "lease to own air conditioner",
    "water heater financing bad credit",
    "HVAC lease to own",
    "furnace financing no credit",
    "lease purchase HVAC",
  ],
  authors: [{ name: "Microf, LLC" }],
  creator: "Microf, LLC",
  metadataBase: new URL("https://www.microf.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.microf.com",
    siteName: "Microf",
    title: "Microf | Lease-to-Own HVAC & Water Heater Financing",
    description:
      "No credit check required. Flexible lease-to-own financing for HVAC systems and water heaters. Get instant approval and restore your home comfort today.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Microf — Lease-to-Own Home Comfort Financing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Microf | Lease-to-Own HVAC & Water Heater Financing",
    description: "No credit check required. Flexible lease-to-own financing for HVAC and water heaters.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col grain">
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
