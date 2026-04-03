import type { Metadata } from "next";
import { MessageSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "代表挨拶 | 株式会社HAI",
  description:
    "株式会社HAI 代表・遠藤 弘樹のメッセージ。仙台から「復元の美学」をお届けします。",
};

export default function MessagePage() {
  return (
    <main className="bg-gallery-white">
      <MessageSection />
    </main>
  );
}
