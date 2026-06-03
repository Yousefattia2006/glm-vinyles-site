"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * StickerApplyAnimation
 *
 * Scroll-driven animation: a wall decal is pressed onto a wall top → bottom
 * as the user scrolls, exactly like applying a real wall sticker.
 *
 * Uses a tall wrapper div + CSS sticky positioning to pin the visual while
 * scroll progress is tracked via a simple scroll listener — no GSAP DOM
 * manipulation, no hydration conflicts.
 */
export default function StickerApplyAnimation() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0); // 0 → 1

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const onScroll = () => {
      const rect = wrapper.getBoundingClientRect();
      const windowH = window.innerHeight;

      // Total scrollable distance inside the wrapper (wrapper height - viewport)
      const total = wrapper.offsetHeight - windowH;

      // How far we've scrolled into the wrapper from the top
      const scrolled = -rect.top;

      const p = Math.min(Math.max(scrolled / total, 0), 1);
      setProgress(p);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on mount in case already in view
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Clip sticker: reveal from top downward as progress goes 0 → 1
  const clipBottom = Math.round((1 - progress) * 100);
  const squeegeTop = Math.round(progress * 100);
  const pct = Math.round(progress * 100);

  return (
    // Tall wrapper — shorter on mobile so it doesn't feel endless
    <div ref={wrapperRef} className="h-[250vh] md:h-[350vh]">

      {/* Sticky frame that stays in view while user scrolls through wrapper */}
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#111] flex flex-col items-center justify-center">

        {/* Heading */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20 text-center w-full px-4 pointer-events-none">
          <p className="text-white/40 text-xs tracking-[0.25em] uppercase mb-2">
            Watch it come to life
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-white text-3xl md:text-4xl font-bold">
            Applied by hand. Every time.
          </h2>
        </div>

        {/* Wall frame */}
        <div className="relative w-[min(380px,82vw)] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">

          {/* Layer 1 — BEFORE: blank white wall (left half of the split image) */}
          <Image
            src="/images/wall.jpg"
            alt="Blank wall before vinyl"
            fill
            className="object-cover object-left"
            sizes="380px"
            priority
          />

          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-black/10 z-[1]" />

          {/* Layer 2 — AFTER: concrete/stone texture (right half of same image) revealed top → bottom */}
          <div
            className="absolute inset-0 z-[2]"
            style={{
              clipPath: `inset(0% 0% ${clipBottom}% 0%)`,
              transition: "clip-path 0.05s linear",
            }}
          >
            <Image
              src="/images/wall.jpg"
              alt="Wall after vinyl decal applied"
              fill
              className="object-cover object-right"
              sizes="380px"
            />
            {/* Shadow along bottom edge of applied portion */}
            <div className="absolute inset-0 shadow-[inset_0_-10px_20px_rgba(0,0,0,0.15)]" />
          </div>

          {/* Layer 3 — squeegee tool moves down in sync */}
          <div
            className="absolute left-0 right-0 z-[3] pointer-events-none"
            style={{
              top: `calc(${squeegeTop}% - 18px)`,
              transition: "top 0.05s linear",
              // hide tool before animation starts and after it ends
              opacity: progress > 0.01 && progress < 0.99 ? 1 : 0,
            }}
          >
            <div className="relative mx-3 flex flex-col items-center">
              {/* Handle */}
              <div className="w-9 h-4 rounded-t-full bg-gradient-to-b from-[#6C3FC5] to-[#4a2b8a] shadow-md" />
              {/* Blade */}
              <div className="w-full h-[5px] rounded-full bg-gradient-to-r from-[#4a2b8a] via-[#7c52d4] to-[#4a2b8a] shadow-[0_3px_10px_rgba(108,63,197,0.7)]" />
              {/* Sheen under blade */}
              <div className="w-[88%] h-[2px] rounded-full bg-white/20 mt-[2px]" />
            </div>
          </div>

          {/* Rounded border ring */}
          <div className="absolute inset-0 z-[4] rounded-2xl ring-1 ring-white/10 pointer-events-none" />
        </div>

        {/* Progress label */}
        <p
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50 text-xs tracking-widest uppercase"
          style={{ opacity: progress > 0.01 && progress < 0.99 ? 1 : 0 }}
        >
          {pct}% applied
        </p>

      </div>
    </div>
  );
}
