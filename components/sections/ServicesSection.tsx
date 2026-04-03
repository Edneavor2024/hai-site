import Image from "next/image";
import { Car, Handshake, Paintbrush, Wrench } from "lucide-react";

const cards = [
  {
    image: "/images/service_sales.jpg",
    alt: "厳選された車両の展示イメージ",
    overlay: "bg-gradient-to-b from-[#0A1628]/85 via-[#1a2a3f]/50 to-[#0a1628]/95",
    accent: "bg-gradient-to-t from-[#0A2540]/45 to-transparent",
    label: "01 — Vehicle Sales",
    titleJa: "車両販売",
    titleEn: "Vehicle Sales",
    desc: "厳選された一台をご提案。",
    Icon: Car,
  },
  {
    image: "/images/service_bodywork.jpg",
    alt: "板金・塗装の職人技イメージ",
    overlay: "bg-gradient-to-b from-[#1a0f05]/80 via-[#2a1a0a]/45 to-[#0f0a03]/90",
    accent: "bg-gradient-to-br from-[#c8956c]/20 via-transparent to-black/55",
    label: "02 — Bodywork & Paint",
    titleJa: "板金・塗装",
    titleEn: "Bodywork & Paint",
    desc: "復元の美学を追求する技術。",
    Icon: Paintbrush,
  },
  {
    image: "/images/service_purchase.jpg",
    alt: "買取・査定の対話イメージ",
    overlay: "bg-gradient-to-b from-[#f5f0e8]/40 via-[#e8e2d8]/30 to-[#111111]/70",
    accent: "bg-gradient-to-t from-white/20 to-[#0A2540]/25",
    label: "03 — Purchase",
    titleJa: "車両買取",
    titleEn: "Purchase",
    desc: "価値を正しく見極め、次のオーナーへ。",
    Icon: Handshake,
  },
  {
    image: "/images/bodywork_concept.jpg",
    alt: "点検・整備のプロフェッショナルイメージ",
    overlay: "bg-gradient-to-b from-[#0A1628]/78 via-[#1a2a3f]/42 to-[#0f0a03]/88",
    accent: "bg-gradient-to-t from-[#c8956c]/18 via-transparent to-[#0A2540]/30",
    label: "04 — Maintenance",
    titleJa: "メンテナンス",
    titleEn: "Maintenance",
    desc: "安心を支える、プロの点検と整備。",
    Icon: Wrench,
  },
] as const;

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative z-10 w-full border-t border-white/10 bg-obsidian-black pt-24 pb-20 text-white md:pt-28 md:pb-24"
    >
      <div className="mx-auto mb-14 max-w-content px-lg md:mb-16">
        <span className="font-en mb-md block text-label uppercase tracking-[0.3em] text-white/40">
          SERVICES
        </span>
        <h2 className="text-section-title font-extralight leading-[1.38] text-white">
          事業<strong className="font-semibold">内容</strong>
        </h2>
      </div>

      <div className="mx-auto grid max-w-content grid-cols-1 gap-8 px-lg sm:gap-10 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((c) => {
          const Icon = c.Icon;
          return (
            <article
              key={c.label}
              className="group flex flex-col rounded-sm border border-white/10 bg-white/[0.03] p-4 shadow-lg shadow-black/30 ring-1 ring-white/5"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-[#1a1a1a]">
                <Image
                  src={c.image}
                  alt={c.alt}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover object-center transition-transform duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                />
                <div className={`pointer-events-none absolute inset-0 ${c.overlay}`} aria-hidden />
                <div className={`pointer-events-none absolute inset-0 ${c.accent}`} aria-hidden />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                  aria-hidden
                />
              </div>

              <div className="mt-5 flex flex-1 flex-col">
                <div className="flex gap-3">
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-white/15 bg-white/[0.07] text-white/85 [&_svg]:h-6 [&_svg]:w-6"
                    aria-hidden
                  >
                    <Icon strokeWidth={1.25} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-en mb-1 text-label uppercase tracking-[0.2em] text-white/45">
                      {c.label}
                    </p>
                    <h3 className="text-subsection font-light tracking-[0.04em] text-white">
                      {c.titleJa}
                      <span className="mt-1 block font-en text-caption font-light tracking-[0.1em] text-white/50">
                        {c.titleEn}
                      </span>
                    </h3>
                  </div>
                </div>
                <p className="mt-4 flex-1 text-caption leading-[1.9] text-white/60">{c.desc}</p>
                <button
                  type="button"
                  className="font-en mt-5 inline-flex items-center gap-1.5 text-left text-label uppercase tracking-[0.15em] text-white/45 transition-[color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:text-white"
                  aria-label="詳細ページは準備中です"
                >
                  Learn More →
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
