"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ── Styles ────────────────────────────────────────────────────────────────────
const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');

.cinematic-footer-wrapper {
  font-family: var(--font-inter), sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;

  --pill-bg-1: rgba(255,255,255,0.04);
  --pill-bg-2: rgba(255,255,255,0.01);
  --pill-shadow: rgba(0,0,0,0.4);
  --pill-highlight: rgba(255,255,255,0.08);
  --pill-inset-shadow: rgba(0,0,0,0.6);
  --pill-border: rgba(255,255,255,0.08);

  --pill-bg-1-hover: rgba(108,63,197,0.18);
  --pill-bg-2-hover: rgba(108,63,197,0.06);
  --pill-border-hover: rgba(108,63,197,0.4);
  --pill-shadow-hover: rgba(108,63,197,0.3);
  --pill-highlight-hover: rgba(255,255,255,0.15);
}

@keyframes footer-breathe {
  0%   { transform: translate(-50%, -50%) scale(1);    opacity: 0.5; }
  100% { transform: translate(-50%, -50%) scale(1.12); opacity: 0.9; }
}

@keyframes footer-scroll-marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

@keyframes footer-heartbeat {
  0%, 100% { transform: scale(1);    }
  15%, 45% { transform: scale(1.25); }
  30%      { transform: scale(1);    }
}

.animate-footer-breathe        { animation: footer-breathe 8s ease-in-out infinite alternate; }
.animate-footer-scroll-marquee { animation: footer-scroll-marquee 40s linear infinite; }
.animate-footer-heartbeat      { animation: footer-heartbeat 2s cubic-bezier(.25,1,.5,1) infinite; }

.footer-bg-grid {
  background-size: 60px 60px;
  background-image:
    linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
}

.footer-aurora {
  background: radial-gradient(
    circle at 50% 50%,
    rgba(108,63,197,0.22) 0%,
    rgba(90,51,168,0.10) 40%,
    transparent 70%
  );
}

.footer-glass-pill {
  background: linear-gradient(145deg, var(--pill-bg-1) 0%, var(--pill-bg-2) 100%);
  box-shadow:
    0 10px 30px -10px var(--pill-shadow),
    inset 0 1px 1px var(--pill-highlight),
    inset 0 -1px 2px var(--pill-inset-shadow);
  border: 1px solid var(--pill-border);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.footer-glass-pill:hover {
  background: linear-gradient(145deg, var(--pill-bg-1-hover) 0%, var(--pill-bg-2-hover) 100%);
  border-color: var(--pill-border-hover);
  box-shadow:
    0 20px 40px -10px var(--pill-shadow-hover),
    inset 0 1px 1px var(--pill-highlight-hover);
  color: #fff;
}

/* Giant background text — pure opacity gradient, no text-stroke (avoids pixelation) */
.footer-giant-bg-text {
  font-size: 26vw;
  line-height: 0.75;
  font-weight: 900;
  letter-spacing: -0.05em;
  font-family: 'Proxima Nova', 'Montserrat', var(--font-inter), sans-serif;
  color: rgba(255,255,255,0.30);
  /* GPU layer — keeps text crisp */
  transform: translateZ(0);
  will-change: transform, opacity;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

/* Premium headline — NO filter on clipped text (that causes pixelation) */
.footer-text-glow {
  color: #ffffff;
  /* Soft ambient shadow via text-shadow — renders on the compositor, stays crisp */
  text-shadow:
    0 0 60px rgba(108,63,197,0.45),
    0 0 120px rgba(108,63,197,0.2),
    0 2px 4px rgba(0,0,0,0.5);
  transform: translateZ(0);
  will-change: transform, opacity;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
`;

// ── Magnetic Button ───────────────────────────────────────────────────────────
export type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: React.ElementType;
  };

const MagneticButton = React.forwardRef<HTMLElement, MagneticButtonProps>(
  ({ className, children, as: Component = "button", ...props }, forwardedRef) => {
    const localRef = useRef<HTMLElement>(null);

    useEffect(() => {
      if (typeof window === "undefined") return;
      const element = localRef.current;
      if (!element) return;

      const ctx = gsap.context(() => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(element, {
            x: x * 0.35, y: y * 0.35,
            rotationX: -y * 0.12, rotationY: x * 0.12,
            scale: 1.05,
            ease: "power2.out", duration: 0.4,
          });
        };
        const handleMouseLeave = () => {
          gsap.to(element, {
            x: 0, y: 0, rotationX: 0, rotationY: 0, scale: 1,
            ease: "elastic.out(1, 0.3)", duration: 1.2,
          });
        };
        element.addEventListener("mousemove", handleMouseMove as EventListener);
        element.addEventListener("mouseleave", handleMouseLeave);
        return () => {
          element.removeEventListener("mousemove", handleMouseMove as EventListener);
          element.removeEventListener("mouseleave", handleMouseLeave);
        };
      }, element);

      return () => ctx.revert();
    }, []);

    return (
      <Component
        ref={(node: HTMLElement) => {
          (localRef as React.MutableRefObject<HTMLElement | null>).current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) (forwardedRef as React.MutableRefObject<HTMLElement | null>).current = node;
        }}
        className={cn("cursor-pointer", className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
MagneticButton.displayName = "MagneticButton";

// ── Marquee content ───────────────────────────────────────────────────────────
const MarqueeItem = () => (
  <div className="flex items-center space-x-12 px-6 text-gray-400">
    <span>Premium Wall Panels</span>           <span className="text-white/20">—</span>
    <span>HD Surface Printing</span>           <span className="text-white/20">—</span>
    <span>Waterproof &amp; Fire Rated</span>   <span className="text-white/20">—</span>
    <span>Eco-Friendly Materials</span>        <span className="text-white/20">—</span>
    <span>Transform Any Space</span>           <span className="text-white/20">—</span>
    <span>60% More Affordable</span>           <span className="text-white/20">—</span>
  </div>
);

// ── WhatsApp & Email icons ─────────────────────────────────────────────────────
function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export function CinematicFooter() {
  const wrapperRef   = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const headingRef   = useRef<HTMLHeadingElement>(null);
  const linksRef     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !wrapperRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        giantTextRef.current,
        { y: "10vh", scale: 0.85, opacity: 0 },
        {
          y: "0vh", scale: 1, opacity: 1, ease: "power1.out",
          scrollTrigger: { trigger: wrapperRef.current, start: "top 80%", end: "bottom bottom", scrub: 1 },
        }
      );
      gsap.fromTo(
        [headingRef.current, linksRef.current],
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: wrapperRef.current, start: "top 40%", end: "bottom bottom", scrub: 1 },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <div
        ref={wrapperRef}
        className="relative h-screen w-full"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <footer className="fixed bottom-0 left-0 flex h-screen w-full flex-col justify-between overflow-hidden bg-[#0e0e0e] text-white cinematic-footer-wrapper" style={{ isolation: "isolate" }}>

          {/* Aurora glow */}
          <div className="footer-aurora absolute left-1/2 top-1/2 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 animate-footer-breathe rounded-[50%] blur-[80px] pointer-events-none z-0" />

          {/* Grid background */}
          <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none" />

          {/* Giant background text — always visible, sits above grid but below content */}
          <div
            ref={giantTextRef}
            className="footer-giant-bg-text absolute -bottom-[10vh] left-1/2 -translate-x-1/2 whitespace-nowrap z-[1] pointer-events-none select-none"
          >
            GLM
          </div>

          {/* Scrolling marquee */}
          <div className="absolute top-10 md:top-12 left-0 w-full overflow-hidden border-y border-white/10 bg-white/5 backdrop-blur-md py-3 md:py-4 z-10 -rotate-2 scale-110 shadow-2xl">
            <div className="flex w-max animate-footer-scroll-marquee text-[10px] md:text-sm font-semibold tracking-[0.2em] uppercase">
              <MarqueeItem /><MarqueeItem />
            </div>
          </div>

          {/* Main centre content */}
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 md:px-6 mt-16 md:mt-20 w-full max-w-5xl mx-auto">
            <h2
              ref={headingRef}
              className="footer-text-glow font-[family-name:var(--font-playfair)] text-3xl sm:text-5xl md:text-8xl font-black tracking-tight mb-6 md:mb-12 text-center leading-none"
            >
              Transform your space.
            </h2>

            <div ref={linksRef} className="flex flex-col items-center gap-4 md:gap-6 w-full">
              {/* Primary nav links */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 w-full">
                <MagneticButton as={Link} href="/offerings" className="footer-glass-pill px-6 md:px-10 py-3.5 md:py-5 rounded-full text-white font-bold text-sm md:text-base flex items-center gap-3">
                  Our Products
                </MagneticButton>
                <MagneticButton as={Link} href="/work" className="footer-glass-pill px-6 md:px-10 py-3.5 md:py-5 rounded-full text-white font-bold text-sm md:text-base flex items-center gap-3">
                  Our Work
                </MagneticButton>
              </div>

              {/* Secondary links */}
              <div className="flex flex-wrap justify-center gap-2 md:gap-5 w-full">
                <MagneticButton as={Link} href="/about" className="footer-glass-pill px-4 md:px-6 py-2.5 md:py-3 rounded-full text-gray-400 font-medium text-xs md:text-sm hover:text-white">
                  About Us
                </MagneticButton>
                <MagneticButton as="a" href="https://wa.me/201093363030" target="_blank" rel="noopener noreferrer" className="footer-glass-pill px-4 md:px-6 py-2.5 md:py-3 rounded-full text-gray-400 font-medium text-xs md:text-sm hover:text-white flex items-center gap-2">
                  <span className="text-[#25D366]"><WhatsAppIcon /></span> WhatsApp
                </MagneticButton>
                <MagneticButton as="a" href="mailto:contact@glm-vinyles.com" className="footer-glass-pill px-4 md:px-6 py-2.5 md:py-3 rounded-full text-gray-400 font-medium text-xs md:text-sm hover:text-white flex items-center gap-2">
                  <span className="text-[#6C3FC5]"><EmailIcon /></span> Email Us
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="relative z-20 w-full pb-6 md:pb-8 px-4 md:px-12 flex flex-col items-center gap-3 md:flex-row md:justify-between md:gap-6">

            {/* Copyright */}
            <div className="text-gray-500 text-[9px] md:text-xs font-semibold tracking-widest uppercase order-3 md:order-1 text-center">
              © {new Date().getFullYear()} GLM Vinyles. All rights reserved.
            </div>

            {/* Crafted by badge */}
            <div className="footer-glass-pill px-4 md:px-6 py-2.5 md:py-3 rounded-full flex items-center gap-2 order-1 md:order-2 cursor-default">
              <span className="text-gray-400 text-[9px] md:text-xs font-bold uppercase tracking-widest">Crafted with</span>
              <span className="animate-footer-heartbeat text-sm text-red-500">❤</span>
              <span className="text-gray-400 text-[9px] md:text-xs font-bold uppercase tracking-widest">by</span>
              <span className="text-white font-black text-xs md:text-sm ml-1">MY Studios</span>
            </div>

            {/* Back to top */}
            <MagneticButton
              as="button"
              onClick={scrollToTop}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full footer-glass-pill flex items-center justify-center text-gray-400 hover:text-white group order-2 md:order-3"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 transform group-hover:-translate-y-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </MagneticButton>

          </div>
        </footer>
      </div>
    </>
  );
}
