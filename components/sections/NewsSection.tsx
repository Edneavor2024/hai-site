import Link from "next/link";

const rows = [
  { date: "2026.04.01", tag: "Info", title: "ゴールデンウィーク期間の営業時間のお知らせ" },
  { date: "2026.03.15", tag: "New", title: "2026年春の新入庫車両を公開しました" },
  { date: "2026.03.01", tag: "Media", title: "河北新報にて当社の取り組みが紹介されました" },
  { date: "2026.02.14", tag: "Event", title: "板金・塗装技術セミナーを開催しました" },
];

export function NewsSection() {
  return (
    <section id="news" className="bg-gallery-white py-section-gap">
      <div className="mx-auto max-w-content px-lg">
        <div className="mb-2xl flex flex-col items-start justify-between gap-lg md:flex-row md:items-end">
          <div>
            <span className="font-en mb-md block text-label uppercase tracking-[0.3em] text-steel-gray">
              Latest Updates
            </span>
            <h2 className="text-section-title font-extralight leading-[1.38] text-obsidian-black">
              <strong className="font-semibold">News</strong>
            </h2>
          </div>
          <Link
            href="#"
            className="font-en btn-premium inline-flex border border-obsidian-black px-6 py-2.5 text-label uppercase tracking-[0.12em] text-obsidian-black hover:bg-obsidian-black hover:text-white"
          >
            View All →
          </Link>
        </div>
        <div>
          {rows.map((row) => (
            <Link
              key={row.title}
              href="#"
              className="group grid grid-cols-1 items-center gap-3 border-b border-minimal-line py-lg transition-colors first:border-t hover:bg-platinum-gray md:grid-cols-[120px_80px_1fr_auto]"
            >
              <span className="font-en text-caption text-steel-gray">{row.date}</span>
              <span className="font-en text-label uppercase tracking-[0.1em] text-trust-navy">{row.tag}</span>
              <span className="text-body text-obsidian-black">{row.title}</span>
              <span className="font-en text-steel-gray transition-colors group-hover:text-obsidian-black">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
