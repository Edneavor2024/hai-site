import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import { FooterSection, SiteHeader } from "@/components/sections";

const notoSerifJp = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-noto-serif-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "株式会社HAI | Automotive Group — 仙台",
  description:
    "車を、芸術品のように。買取・販売・板金まで、透明性と品質を追求する仙台のオートモーティブグループ。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSerifJp.variable} h-full`}>
      <body className="min-h-full font-sans">
        <SiteHeader />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
