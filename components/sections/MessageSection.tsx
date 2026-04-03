import Image from "next/image";

export function MessageSection() {
  return (
    <section
      id="message"
      className="scroll-mt-[88px] border-b border-minimal-line pb-20 md:pb-28"
    >
      <div className="mx-auto max-w-content px-lg">
        {/* 固定ヘッダー下〜タイトル：たっぷり余白 */}
        <header className="pt-[88px] pb-16 text-center md:pb-20">
          <p className="sr-only">代表挨拶</p>
          <h1 className="font-en text-[clamp(1.35rem,2.4vw,1.75rem)] font-extralight uppercase tracking-[0.42em] text-obsidian-black">
            MESSAGE
          </h1>
          <div
            className="mx-auto mt-12 h-px max-w-[200px] bg-obsidian-black/12 md:mt-16"
            aria-hidden
          />
        </header>

        {/* タイトル〜本文：区切りの下から代表ブロック */}
        <div className="pt-16 md:pt-20">
          <h2 className="text-[clamp(1.65rem,2.8vw,2.35rem)] font-extralight leading-[1.38] text-obsidian-black md:text-left">
            代表取締役 <strong className="font-semibold">遠藤 弘樹</strong>
            <span className="mt-2 block font-en text-[clamp(0.95rem,1.5vw,1.1rem)] font-light tracking-[0.12em] text-steel-gray">
              Hiroki Endo
            </span>
          </h2>

          <figure className="mt-10 w-full max-w-full overflow-hidden rounded-sm shadow-[0_24px_64px_-20px_rgba(10,37,64,0.22)] md:mt-12">
            <div className="relative aspect-[5/3] w-full min-h-[200px] sm:aspect-[2/1] lg:aspect-[21/9]">
              <Image
                src="/images/IMG_5724-e1423393402474.jpg"
                alt="代表取締役 遠藤 弘樹 — マウンテンバイクのシーン"
                fill
                sizes="(min-width: 1280px) 1200px, 100vw"
                priority
                className="object-cover"
                style={{ objectPosition: "50% 58%" }}
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.1] via-transparent to-[#0A2540]/[0.06]"
                aria-hidden
              />
            </div>
          </figure>

          <div className="mx-auto mt-12 min-w-0 max-w-[720px] md:mt-16 lg:max-w-none">
            <p className="font-en text-[clamp(1.05rem,1.8vw,1.2rem)] font-light leading-[1.55] tracking-[0.02em] text-trust-navy">
              「記憶」と「記録」に残る一台を、仙台から。
            </p>
            <div className="mt-8 space-y-6 text-body leading-[2.05] text-steel-gray md:mt-10 md:space-y-8 lg:max-w-[720px]">
              <p>
                株式会社HAIのホームページをご覧いただき、誠にありがとうございます。私たちが目指しているのは、単なる自動車の販売や修理ではありません。それは、お客様一人ひとりの人生を豊かに彩る「モビリティ体験」そのものを、プロフェッショナルの視点からプロデュースすることです。
              </p>
              <p>
                自動車は、モノであると同時に、数多くの「記憶」が刻まれる特別な資産です。私たちは、その一台が歩んできたストーリー（記録）を論理的に評価し、その輝きを完璧に復元する技術（美学）を提供します。仙台というこの地域で、世界のクオリティ基準を当たり前のように体現する。
              </p>
              <p>
                私たちが追求するのは、技術的な完璧さと、プロフェッショナルとしての誠実さの融合です。挑戦を恐れず、常に「一歩先の基準」を更新し続ける。それが、株式会社HAIのプライドです。常識を疑い、期待を超える。お客様の愛車に対する想いを、私たちが技術と誠実さで形にします。
              </p>
              <p className="font-medium text-obsidian-black">
                株式会社HAIは、これからも全力で走り続けます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
