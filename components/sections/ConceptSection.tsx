import Image from "next/image";
import { ScrollZoomImage } from "@/components/ScrollZoomImage";

export function ConceptSection() {
  return (
    <section id="concept" className="bg-gallery-white py-section-gap">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-3xl px-lg md:grid-cols-2">
        <div className="md:pr-md">
          <span className="font-en mb-md block text-label uppercase tracking-[0.3em] text-steel-gray">
            THE VISION
          </span>
          <h2 className="text-section-title font-extralight leading-[1.38] tracking-[-0.01em] text-obsidian-black">
            人生を彩る、唯一無二の芸術品を。
          </h2>
          <p className="mb-lg mt-lg text-body leading-[2.05] text-steel-gray">
            私たちは、単なる移動手段を売る店ではありません。一台の車が、あなたの人生という物語をどう彩るか。その「復元の美学」を、仙台からお届けします。
          </p>
          <button
            type="button"
            className="font-en btn-premium inline-flex items-center gap-2 border border-obsidian-black bg-transparent px-10 py-3.5 text-caption uppercase tracking-[0.12em] text-obsidian-black hover:bg-obsidian-black hover:text-white"
          >
            Learn More →
          </button>
        </div>
        <ScrollZoomImage
          className="relative aspect-[4/5] overflow-hidden bg-platinum-gray shadow-[0_28px_72px_-28px_rgba(17,17,17,0.22)] ring-1 ring-minimal-line"
          zoomTo={1.05}
        >
          <div className="relative h-full min-h-[280px] w-full">
            <Image
              src="/images/concept_architecture.jpg"
              alt="モダンな建築 — 洗練と信頼のビジュアルメタファー"
              fill
              sizes="(min-width: 768px) 42vw, 100vw"
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/25 via-transparent to-[#1a2a3f]/35"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#111]/20 via-transparent to-white/10"
              aria-hidden
            />
          </div>
        </ScrollZoomImage>
      </div>
    </section>
  );
}
