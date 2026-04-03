import Image from "next/image";
import { ScrollZoomImage } from "@/components/ScrollZoomImage";

const features = [
  {
    n: "01",
    title: "精密板金修復",
    desc: "0.1mm単位の精密作業で、フレームの歪みを修正します。",
  },
  {
    n: "02",
    title: "カスタム塗装",
    desc: "純正色はもちろん、オリジナルカラーにも対応。塗膜の厚さまで管理します。",
  },
  {
    n: "03",
    title: "品質保証",
    desc: "施工後の保証を完備。万が一にも迅速に対応いたします。",
  },
];

export function BodyworkSection() {
  return (
    <section id="bodywork" className="bg-gallery-white py-section-gap">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-3xl px-lg md:grid-cols-[1.2fr_1fr]">
        <ScrollZoomImage className="relative aspect-[4/3] bg-[#0f0a03] shadow-[0_32px_80px_-24px_rgba(17,17,17,0.35)] ring-1 ring-black/10">
          <div className="relative h-full min-h-[240px] w-full">
            <Image
              src="/images/bodywork_concept.jpg"
              alt="板金・塗装の職人作業をイメージしたビジュアル"
              fill
              sizes="(min-width: 768px) 55vw, 100vw"
              className="object-cover object-center"
            />
            {/* キアロスクーロ＋ウォームアンバー vs 深い影のコントラスト */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-black/55 via-transparent to-[#2a1a0a]/50"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#0f0a03]/90 via-transparent to-[#c8956c]/15"
              aria-hidden
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10" aria-hidden />
          </div>
        </ScrollZoomImage>
        <div>
          <span className="font-en mb-md block text-label uppercase tracking-[0.3em] text-steel-gray">
            Craftsmanship
          </span>
          <h2 className="text-section-title font-extralight leading-[1.38] text-obsidian-black">
            <strong className="font-semibold">技術</strong>の結晶を、
            <br />
            あなたの愛車に。
          </h2>
          <p className="mb-lg mt-lg text-body leading-[2.1] text-steel-gray">
            板金・塗装は、単なる修理ではありません。車の美しさを蘇らせる
            <strong className="font-medium text-obsidian-black">「復元の美学」</strong>
            —— 職人は一台一台に向き合い、仕上げのすべてに責任を持ちます。
          </p>
          <ul className="mt-lg list-none">
            {features.map((f) => (
              <li
                key={f.n}
                className="flex gap-sm border-b border-minimal-line py-md first:border-t first:border-minimal-line"
              >
                <span className="font-en min-w-8 pt-0.5 text-label tracking-[0.1em] text-steel-gray">{f.n}</span>
                <div>
                  <div className="text-body font-medium leading-[1.6] text-obsidian-black">{f.title}</div>
                  <p className="mt-1.5 text-caption leading-[1.85] text-steel-gray">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
