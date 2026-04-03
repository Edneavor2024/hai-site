import { IconCraftsmanship, IconVehicleConsult } from "@/components/icons/TestimonialIcons";

const items = [
  {
    quote:
      "「初めての車購入で不安でしたが、押し売りが一切なく、本当に自分に合った車を提案してくれました。まるでプライベートバンカーのような対応でした。」",
    name: "T.S. 様",
    detail: "30代 / 仙台市青葉区 / Mercedes-Benz C200 ご購入",
    icon: "vehicle" as const,
  },
  {
    quote:
      "「板金修理の仕上がりに驚きました。新車以上の輝きです。作業工程を写真で共有してくれる透明性にも感動しました。」",
    name: "M.K. 様",
    detail: "40代 / 仙台市太白区 / 板金・塗装ご利用",
    icon: "craft" as const,
  },
];

export function TestimonialsSection() {
  return (
    <section id="voice" className="bg-platinum-gray py-section-gap">
      <div className="mx-auto mb-xl max-w-content px-lg">
        <span className="font-en mb-md block text-label uppercase tracking-[0.3em] text-steel-gray">
          Customer Voice
        </span>
        <h2 className="text-section-title font-extralight leading-[1.38] text-obsidian-black">
          お客様の<strong className="font-semibold">声</strong>
        </h2>
      </div>
      <div className="mx-auto grid max-w-content grid-cols-1 gap-lg px-lg md:grid-cols-2 md:gap-3xl">
        {items.map((t) => (
          <article
            key={t.name}
            className="card-premium bg-white p-lg ring-1 ring-minimal-line/80 md:p-xl"
          >
            <blockquote className="mb-lg border-l-2 border-minimal-line pl-md text-body leading-[2.05] text-obsidian-black md:pl-lg">
              {t.quote}
            </blockquote>
            <div className="flex items-center gap-md">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-platinum-gray text-trust-navy ring-1 ring-minimal-line"
                aria-hidden
              >
                {t.icon === "vehicle" ? <IconVehicleConsult /> : <IconCraftsmanship />}
              </div>
              <div className="min-w-0">
                <div className="text-caption font-medium leading-[1.5] text-obsidian-black">{t.name}</div>
                <div className="font-en mt-1 text-label leading-[1.5] text-steel-gray">{t.detail}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
