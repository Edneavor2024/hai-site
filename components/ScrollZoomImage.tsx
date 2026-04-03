"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type ScrollZoomImageProps = {
  children: ReactNode;
  className?: string;
  /** 入場後の最大スケール（じわっと拡大） */
  zoomTo?: number;
};

/**
 * スクロールでビューに入ったあと、内側がじわっと拡大する（overflow でトリミング）
 */
export function ScrollZoomImage({ children, className, zoomTo = 1.08 }: ScrollZoomImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setActive(true);
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <div
        className="h-full w-full origin-center will-change-transform motion-reduce:transform-none"
        style={{
          transform: active ? `scale(${zoomTo})` : "scale(1)",
          transition: "transform 1.4s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
