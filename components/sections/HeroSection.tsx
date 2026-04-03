"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [scrollScale, setScrollScale] = useState(1);

  const scrollToSelection = () => {
    const el = document.getElementById("selection");
    if (!el) return;

    // Fixed header offset (~72px) + safety margin.
    const y = el.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const openQuoteModal = () => {
    const fn = (window as any).__openReservationForm;
    if (typeof fn === "function") fn();

    const ev = new CustomEvent("open-reservation-form", { bubbles: true });
    window.dispatchEvent(ev);
    document.dispatchEvent(ev);
  };

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      const p = Math.min(Math.max(y / (vh * 0.85), 0), 1);
      setScrollScale(1 + p * 0.065);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative isolate z-0 flex min-h-[700px] items-end overflow-hidden bg-obsidian-black"
      style={{ minHeight: "100vh" }}
    >
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute inset-0 will-change-transform motion-reduce:transform-none"
          style={{
            transform: `scale(${scrollScale})`,
            transition: "transform 0.35s ease-out",
          }}
        >
          <Image
            src="/images/hero_concept.jpg"
            alt="都市と車両をイメージしたヒーロービジュアル"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_62%]"
          />
        </div>
        {/* クールトーン＋Trust Navy 系の重ね（レポート: ディープネイビー・アンバーアクセント） */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/88 via-[#0f1923]/55 to-[#1a2a3f]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_80%,rgba(200,149,108,0.12),transparent_55%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-[rgba(10,22,40,0.92)] via-[rgba(10,22,40,0.45)] to-transparent" />
        {/* 画像下端から次セクション（#111）へ自然に繋ぐソリッド寄りの締め */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-28 bg-gradient-to-t from-[#111111] via-[#111111]/65 to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-content px-lg pb-3xl">
        <p className="font-en mb-md text-label uppercase tracking-[0.3em] text-white/50">
          Sendai, Miyagi — Since 2021
        </p>
        <h1
          className="font-extralight leading-[1.08] tracking-[-0.02em] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]"
          style={{
            fontSize: "clamp(2.35rem, 4.6vw, 5.5rem)",
            maxWidth: "720px",
          }}
        >
          <span className="block whitespace-nowrap">Beyond the Drive,</span>
          <span className="block whitespace-nowrap">Into the Art.</span>
        </h1>
        <p className="mb-lg mt-md max-w-[480px] text-body leading-[2.05] text-white/65">
          人生を彩る、唯一無二の芸術品を。
        </p>
        <div className="flex flex-wrap items-center gap-sm">
          <button
            type="button"
            onClick={scrollToSelection}
            className="font-en btn-premium inline-flex items-center gap-2 bg-white px-8 py-3.5 text-caption uppercase tracking-[0.12em] text-obsidian-black hover:bg-neutral-100"
          >
            VIEW SELECTION →
          </button>
          <a
            href="#contact-form"
            className="font-en btn-premium inline-flex items-center gap-2 border border-white/20 bg-transparent px-8 py-3.5 text-caption uppercase tracking-[0.12em] text-white/75 hover:border-white/55 hover:text-white"
          >
            CONTACT US →
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="font-en text-[9px] uppercase tracking-[0.3em] text-white/35">Scroll</span>
        <div className="h-10 w-px animate-pulse bg-gradient-to-b from-white/45 to-transparent" />
      </div>
    </section>
  );
}
