import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";

const RECRUIT_URL =
  "https://hai-recruit.com/recruit/1759991425524302657/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic";

const nav = [
  { href: "/#concept", label: "CONCEPT" },
  { href: "/#selection", label: "SELECTION" },
  { href: "/about", label: "ABOUT" },
  { href: "/message", label: "MESSAGE" },
  { href: RECRUIT_URL, label: "RECRUIT", external: true },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-[1000] h-[72px] border-b border-minimal-line bg-white/95 backdrop-blur-[20px]">
      <div className="mx-auto flex h-full max-w-content items-center justify-between gap-4 px-lg">
        <BrandLogo variant="header" className="min-w-0" />
        <nav aria-label="メイン">
          <ul className="flex items-center gap-lg">
            {nav.map((item) => (
              <li key={item.href}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-en text-caption uppercase tracking-[0.12em] text-steel-gray transition-[color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:text-obsidian-black"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="font-en text-caption uppercase tracking-[0.12em] text-steel-gray transition-[color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:text-obsidian-black"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link
                href="/#contact"
                className="font-en btn-premium rounded bg-trust-navy px-6 py-2.5 text-label uppercase tracking-[0.15em] text-white shadow-sm hover:bg-[#0d3050] hover:shadow-md"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
