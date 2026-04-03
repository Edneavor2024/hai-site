import Image from "next/image";
import Link from "next/link";

const LOGO_SRC = "/logo.png";
/** 元画像 1000×400（2.5:1）— 表示は高さ基準でアスペクト維持 */
const INTRINSIC_W = 250;
const INTRINSIC_H = 100;

type BrandLogoProps = {
  /** ヘッダー用（ダーク背景ではない） / フッター用（暗背景で白一色に近づける） */
  variant: "header" | "footer";
  className?: string;
};

export function BrandLogo({ variant, className = "" }: BrandLogoProps) {
  const isFooter = variant === "footer";

  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center transition-opacity duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust-navy/35 focus-visible:ring-offset-2 ${
        isFooter
          ? "opacity-90 hover:opacity-70 focus-visible:ring-offset-obsidian-black"
          : "hover:opacity-75 focus-visible:ring-offset-white"
      } ${className}`}
      aria-label="株式会社HAI トップへ"
    >
      <Image
        src={LOGO_SRC}
        alt="株式会社HAI"
        width={INTRINSIC_W}
        height={INTRINSIC_H}
        className={`w-auto object-contain object-left ${
          isFooter
            ? "h-8 brightness-0 invert md:h-9"
            : "h-[42px] md:h-[46px]"
        }`}
        priority={!isFooter}
        sizes={isFooter ? "200px" : "220px"}
      />
    </Link>
  );
}
