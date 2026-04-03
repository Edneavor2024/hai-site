import { BrandLogo } from "@/components/BrandLogo";

const INSTAGRAM_URL = "https://www.instagram.com/hai.goudou/";

/** Lucide に Instagram が無いバージョン向けのモノライン SVG（currentColor） */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5"
        ry="5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 6.5h.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const RECRUIT_URL =
  "https://hai-recruit.com/recruit/1759991425524302657/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic";

const footerMenu = [
  { label: "会社概要", href: "/about", external: false },
  { label: "代表挨拶", href: "/message", external: false },
  { label: "採用情報", href: RECRUIT_URL, external: true },
  { label: "アクセス", href: "/#google-map", external: false },
  { label: "プライバシーポリシー", href: "#", external: false },
] as const;

export function FooterSection() {
  return (
    <footer className="bg-obsidian-black border-t border-white/10 py-20 text-white">
      <div className="mx-auto max-w-content px-lg">
        <div className="flex w-full flex-col items-stretch gap-10 text-left md:flex-row md:items-start md:justify-between md:gap-12 lg:gap-16">
          {/* 左：ロゴ＋会社情報 — 常にコンテナ左端から開始（中央寄せなし） */}
          <div className="min-w-0 flex-1 md:max-w-[min(100%,28rem)] lg:max-w-[32rem]">
            <div className="mb-8 md:mb-10">
              <BrandLogo variant="footer" />
            </div>
            {/* 第1列固定幅・右揃えで「：」を一直線に。第2列は pl-4 で区切り、折り返しは値列内の左端揃え */}
            <dl className="grid w-full grid-cols-[6.75rem_minmax(0,1fr)] gap-x-0 gap-y-2.5 text-caption leading-[1.9] sm:grid-cols-[7.75rem_minmax(0,1fr)] md:grid-cols-[8.25rem_minmax(0,1fr)]">
              <dt className="text-right font-normal leading-[1.9] text-white/40">
                会社名：
              </dt>
              <dd className="m-0 min-w-0 pl-4 text-caption leading-[1.9] text-white/50">
                株式会社HAI
              </dd>

              <dt className="text-right font-normal leading-[1.9] text-white/40">
                住所：
              </dt>
              <dd className="m-0 min-w-0 pl-4 text-caption leading-[1.9] text-white/50">
                〒981-1105
                <br />
                宮城県仙台市太白区西中田7-30-15-502
              </dd>

              <dt className="text-right font-normal leading-[1.9] text-white/40">
                電話番号：
              </dt>
              <dd className="m-0 min-w-0 pl-4 text-caption leading-[1.9]">
                <a
                  href="tel:0222202264"
                  className="text-white/60 transition-colors hover:text-white"
                >
                  022-220-2264
                </a>
              </dd>

              <dt className="text-right font-normal leading-[1.9] text-white/40">
                代表者名：
              </dt>
              <dd className="m-0 min-w-0 pl-4 text-caption leading-[1.9] text-white/50">
                遠藤 弘樹
              </dd>

              <dt className="text-right font-normal leading-[1.9] text-white/40">
                事業内容：
              </dt>
              <dd className="m-0 min-w-0 pl-4 text-caption leading-[1.9] text-white/50">
                自動車買取・販売
              </dd>

              <dt className="text-right font-normal leading-[1.9] text-white/40">
                設立年月日：
              </dt>
              <dd className="m-0 min-w-0 pl-4 text-caption leading-[1.9] text-white/50">
                2021年4月
              </dd>

              <dt className="text-right font-normal leading-[1.9] text-white/40">
                営業時間：
              </dt>
              <dd className="m-0 min-w-0 pl-4 text-caption leading-[1.9] text-white/50">
                10:00 - 19:00（水曜定休）
              </dd>
            </dl>
          </div>

          <nav
            aria-label="フッターメニュー"
            className="w-full shrink-0 md:w-auto md:self-start"
          >
            {/* モバイルは左揃え（ロゴ列と同じ基準）、md 以上は右端 */}
            <div className="flex flex-nowrap items-center justify-start gap-x-1.5 overflow-x-auto whitespace-nowrap text-[0.7rem] sm:text-xs md:justify-end md:gap-x-3 md:overflow-hidden md:pl-2">
              {footerMenu.map((item, idx) => (
                <span key={item.label} className="flex items-center gap-x-1 whitespace-nowrap">
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="text-gray-400 transition-colors hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]"
                  >
                    {item.label}
                  </a>
                  {idx !== footerMenu.length - 1 && (
                    <span className="text-gray-400/70" aria-hidden>
                      |
                    </span>
                  )}
                </span>
              ))}
            </div>
          </nav>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="株式会社HAI 公式Instagram（新しいタブで開きます）"
              className="inline-flex shrink-0 text-white/45 transition-[color,filter] duration-300 ease-out hover:text-[#E4405F] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]"
            >
              <InstagramIcon className="h-[22px] w-[22px]" />
            </a>
            <p className="w-full font-en text-label tracking-[0.05em] text-white/30 sm:w-auto sm:text-right">
              © 2026 HAI AUTOMOTIVE GROUP
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
