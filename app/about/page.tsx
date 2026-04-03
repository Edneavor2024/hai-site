import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "会社概要 | 株式会社HAI",
  description:
    "株式会社HAIの会社情報（住所・電話番号・設立日など）をご案内します。",
};

const profileRows: { label: string; value: string }[] = [
  { label: "会社名", value: "株式会社HAI（HAI AUTOMOTIVE GROUP）" },
  { label: "代表者", value: "遠藤 弘樹" },
  { label: "住所", value: "〒981-1105 宮城県仙台市太白区西中田7-30-15-502" },
  { label: "電話番号", value: "022-220-2264" },
  { label: "設立年月日", value: "2021年4月" },
  { label: "営業時間", value: "10:00 - 19:00（水曜定休）" },
  { label: "事業内容", value: "自動車買取・販売" },
];

export default function AboutPage() {
  return (
    <main className="bg-platinum-gray">
      <section
        id="company"
        className="scroll-mt-[88px] pb-20 md:pb-28"
      >
        <div className="mx-auto max-w-content px-lg">
          <header className="pt-[88px] pb-16 text-center md:pb-20">
            <p className="sr-only">会社概要</p>
            <h1 className="font-en text-[clamp(1.35rem,2.4vw,1.75rem)] font-extralight uppercase tracking-[0.42em] text-obsidian-black">
              COMPANY
            </h1>
            <div
              className="mx-auto mt-12 h-px max-w-[200px] bg-obsidian-black/12 md:mt-16"
              aria-hidden
            />
          </header>

          <div className="pt-16 md:pt-20">
            <div className="overflow-hidden rounded-sm bg-gallery-white shadow-sm ring-1 ring-minimal-line">
              <table className="w-full border-collapse text-left">
                <tbody>
                  {profileRows.map((row) => (
                    <tr
                      key={row.label}
                      className="border-b border-minimal-line last:border-b-0"
                    >
                      <th
                        scope="row"
                        className="font-en w-[min(40%,280px)] min-w-[140px] px-lg py-lg align-top text-label uppercase tracking-[0.12em] text-steel-gray md:px-xl"
                      >
                        {row.label}
                      </th>
                      <td className="px-lg py-lg text-body leading-[2.05] text-obsidian-black md:px-xl">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-10 text-center text-caption leading-[1.85] text-steel-gray md:mt-12">
              ※ アクセス・地図はお問い合わせにてご案内いたします。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
