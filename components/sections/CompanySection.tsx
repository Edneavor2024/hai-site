import type { ReactNode } from "react";

type ProfileRow = {
  label: string;
  value: ReactNode;
};

const profileRows: ProfileRow[] = [
  { label: "会社名", value: "株式会社HAI（HAI AUTOMOTIVE GROUP）" },
  {
    label: "住所",
    value: (
      <>
        〒981-1105
        <br />
        宮城県仙台市太白区西中田7-30-15-502
      </>
    ),
  },
  {
    label: "電話番号",
    value: (
      <a
        href="tel:0222202264"
        className="text-caption text-obsidian-black/70 transition-colors hover:text-obsidian-black"
      >
        022-220-2264
      </a>
    ),
  },
  { label: "代表者名", value: "遠藤 弘樹" },
  { label: "設立年月日", value: "2021年4月" },
  { label: "営業時間", value: "10:00 - 19:00（水曜定休）" },
];

export function CompanySection() {
  return (
    <section id="company" className="scroll-mt-[88px] bg-platinum-gray py-section-gap">
      <div className="mx-auto max-w-content px-lg">
        <p className="font-en mb-md text-label uppercase tracking-[0.3em] text-steel-gray">
          Company Profile
        </p>
        <h2 className="text-section-title font-extralight leading-[1.38] text-obsidian-black">
          会社<strong className="font-semibold">概要</strong>
        </h2>

        <div className="mt-3xl overflow-hidden rounded-sm bg-gallery-white shadow-sm ring-1 ring-minimal-line">
          <table className="w-full border-collapse text-left">
            <tbody>
              {profileRows.map((row, idx) => (
                <tr
                  key={row.label}
                  className="border-b border-minimal-line last:border-b-0"
                >
                  <th
                    scope="row"
                    className="font-en w-[min(40%,280px)] min-w-[140px] px-lg py-lg align-top text-label uppercase tracking-[0.12em] text-steel-gray md:px-xl"
                  >
                    {row.label}：
                  </th>
                  <td className="px-lg py-lg text-body leading-[2.05] text-obsidian-black md:px-xl">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer の「アクセス」アンカー先 */}
        <p
          id="google-map"
          className="mt-lg text-caption leading-[1.85] text-steel-gray"
        >
          ※ アクセス・地図はお問い合わせにてご案内いたします。
        </p>
      </div>
    </section>
  );
}

