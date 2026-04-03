import Image from "next/image";
import { ScrollZoomImage } from "@/components/ScrollZoomImage";

const steps = [
  {
    n: "01",
    title: "無料オンライン査定",
    desc: "Webフォームまたはお電話で車両情報をお伝えください。24時間以内に概算査定をご連絡します。",
  },
  {
    n: "02",
    title: "対面コンサルティング",
    desc: "専門スタッフが実車を確認し、市場データに基づいた査定レポートをご提示します。",
  },
  {
    n: "03",
    title: "即日お支払い",
    desc: "ご納得いただけた場合、その場でご契約。最短即日でお支払いいたします。",
  },
];

export function PurchaseSection() {
  return (
    <section id="purchase" className="bg-platinum-gray py-section-gap">
      <div className="mx-auto mb-2xl max-w-content px-lg text-center">
        <span className="font-en mb-md block text-label uppercase tracking-[0.3em] text-steel-gray">
          VOICE OF VALUE
        </span>
        <h2 className="mx-auto max-w-[700px] text-section-title font-extralight leading-[1.38] text-obsidian-black">
          価値を、正しく語る。
        </h2>
        <p className="mx-auto mt-md max-w-[600px] text-center text-body leading-[2.05] text-steel-gray">
          「査定額を提示して終わり」ではなく、ご要望を丁寧にヒアリングし、最適なプランをご提案するコンサルティング型買取。
          <strong className="font-medium text-obsidian-black">透明性の極致</strong>
          を、プロセスのすべてでお約束します。
        </p>
      </div>
      <div className="mx-auto mb-2xl grid max-w-content grid-cols-1 gap-lg px-lg md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.n} className="card-premium bg-white p-lg shadow-sm ring-1 ring-minimal-line/80">
            <div className="font-en mb-md text-[3rem] font-extralight leading-none text-minimal-line">{s.n}</div>
            <h3 className="mb-sm text-body font-semibold leading-[1.55] text-obsidian-black">{s.title}</h3>
            <p className="text-caption leading-[1.85] text-steel-gray">{s.desc}</p>
          </div>
        ))}
      </div>
      {/* ワイヤー: パノラマ上余白 100px 相当 — Breathing Space */}
      <div className="mx-auto max-w-content px-lg pt-2xl md:pt-3xl">
        <ScrollZoomImage
          className="relative aspect-[21/9] w-full overflow-hidden bg-white shadow-[0_28px_80px_-32px_rgba(17,17,17,0.18)] ring-1 ring-minimal-line/90"
          zoomTo={1.04}
        >
          <div className="relative h-full min-h-[120px] w-full md:min-h-[200px]">
            <Image
              src="/images/purchase_office.jpg"
              alt="ミニマルなオフィス — コンサルティングと透明性の空間イメージ"
              fill
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover object-[center_40%]"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-[#0A2540]/15"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#f5f7f8]/40 via-transparent to-transparent"
              aria-hidden
            />
          </div>
        </ScrollZoomImage>
      </div>
    </section>
  );
}
