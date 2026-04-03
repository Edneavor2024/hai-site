"use client";

import Image from "next/image";
import { ScrollZoomImage } from "@/components/ScrollZoomImage";
import inventory from "@/data/inventory.json";

const GOO_NET_SHOP_URL =
  "https://www.goo-net.com/usedcar_shop/0901504/detail.html";

const vehicles = inventory;

export function InventorySection() {
  // No category filters: show all vehicles from the start.
  const list = vehicles;

  return (
    <section id="selection" className="bg-gallery-white py-section-gap">
      <div className="mx-auto mb-2xl max-w-content px-lg">
        <span className="font-en mb-md block text-label uppercase tracking-[0.3em] text-steel-gray">
          THE GALLERY
        </span>
        <h2 className="text-section-title font-extralight leading-[1.38] text-obsidian-black">
          選び抜かれた、名作たちとの出会い。
        </h2>
      </div>
      <div className="mx-auto grid max-w-content grid-cols-1 gap-md px-lg sm:grid-cols-2 lg:grid-cols-3">
        {list.length === 0 && (
          <p className="col-span-full py-8 text-center text-body text-steel-gray">該当する車両がありません。</p>
        )}
        {list.map((v) => (
          <a
            key={v.name}
            href={GOO_NET_SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="card-premium group block cursor-pointer rounded-sm"
            aria-label={`${v.name} — グーネット店舗ページへ（別ウィンドウ）`}
          >
            <ScrollZoomImage className="relative mb-sm aspect-[4/3] bg-platinum-gray" zoomTo={1.07}>
              <div className="relative h-full min-h-[180px] w-full overflow-hidden">
                <Image
                  src={v.image}
                  alt={v.alt}
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-[center_32%] transition-[filter] duration-500 group-hover:brightness-[0.97]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10"
                  aria-hidden
                />
              </div>
            </ScrollZoomImage>
            <div className="mb-1 flex items-baseline justify-between">
              <span className="text-body font-medium leading-[1.6] text-obsidian-black">{v.name}</span>
              <span className="font-en text-body font-medium text-obsidian-black">{v.price}</span>
            </div>
            <p className="text-caption leading-[1.85] text-steel-gray">{v.spec}</p>
          </a>
        ))}
      </div>
      <p className="mx-auto mt-5 max-w-content px-4 text-left text-xs leading-[1.75] text-gray-500 sm:mt-6 sm:px-lg sm:text-center sm:text-sm">
        ※掲載車両はイメージです。実際の在庫状況は変動するため、販売中および在庫切れの可能性があります。
        <br className="sm:hidden" />
        <span className="sm:ml-1">※在庫状況は変動するため、最新情報はGoo-netにてご確認ください。</span>
      </p>
      <div className="mx-auto max-w-content px-lg pt-8 sm:pt-10">
        <div className="flex flex-col items-stretch justify-center gap-sm sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-md">
          <a
            href={GOO_NET_SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-en btn-premium inline-flex min-h-[52px] items-center justify-center gap-2 bg-trust-navy px-10 py-4 text-caption uppercase tracking-[0.14em] text-white shadow-sm transition-[transform,box-shadow,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#0d3050] hover:shadow-md"
            aria-label="グーネットで株式会社HAIの中古車ラインナップを見る（別ウィンドウ）"
          >
            現在のラインナップを見る（Goo-net）→
          </a>
          <a
            href={GOO_NET_SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-en btn-premium inline-flex min-h-[52px] items-center justify-center gap-2 border border-obsidian-black bg-transparent px-10 py-4 text-caption uppercase tracking-[0.12em] text-obsidian-black hover:bg-obsidian-black hover:text-white"
          >
            View All Selection →
          </a>
        </div>
        <p className="mt-md text-center text-caption leading-[1.85] text-steel-gray">
          Goo-net の店舗ページは外部サイトへ移動します。
        </p>
      </div>
    </section>
  );
}
