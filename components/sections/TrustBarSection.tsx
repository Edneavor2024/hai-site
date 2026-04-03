const items = [
  { value: "2,500", unit: "+", label: "累計取引台数" },
  { value: "15", unit: "年", label: "業界実績" },
  { value: "98.2", unit: "%", label: "顧客満足度" },
  { value: "4.8", unit: "/5.0", label: "Google レビュー" },
];

export function TrustBarSection() {
  return (
    <section className="border-b border-minimal-line bg-platinum-gray py-24 md:py-28">
      <div className="mx-auto grid max-w-content grid-cols-2 gap-lg px-lg text-center md:grid-cols-4">
        {items.map((item) => (
          <div key={item.label}>
            <div className="font-en text-[2.5rem] font-extralight leading-none tracking-[-0.02em] text-obsidian-black">
              {item.value}
              <span className="ml-0.5 text-base font-normal text-steel-gray">{item.unit}</span>
            </div>
            <div className="mt-xs font-en text-label tracking-[0.1em] text-steel-gray">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
