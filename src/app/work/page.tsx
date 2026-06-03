"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

/* ─── Types ─────────────────────────────────────────── */
type Filter =
  | "All"
  | "Elevator"
  | "Living Room"
  | "Normal Wall"
  | "Table"
  | "Surfaces"
  | "Dining Room"
  | "Bedroom"
  | "Bathroom"
  | "Doors";

const filters: Filter[] = [
  "All",
  "Elevator",
  "Living Room",
  "Normal Wall",
  "Table",
  "Surfaces",
  "Dining Room",
  "Bedroom",
  "Bathroom",
  "Doors",
];

interface WorkItem {
  src: string;
  label: string;
  category: Exclude<Filter, "All">;
  height: number;
  position: string;
}

/* ─── Gallery items ──────────────────────────────────── */
const workItems: WorkItem[] = [
  // Elevator (4)
  { src: "/images/elevator-1.jpg", label: "Elevator Wrap",          category: "Elevator",    height: 420, position: "object-center" },
  { src: "/images/elevator-2.jpg", label: "Elevator Panel",         category: "Elevator",    height: 380, position: "object-center" },
  { src: "/images/elevator-3.jpg", label: "Elevator Interior",      category: "Elevator",    height: 400, position: "object-center" },
  { src: "/images/elevator-4.jpg", label: "Elevator Design",        category: "Elevator",    height: 360, position: "object-center" },
  // Living Room (4)
  { src: "/images/livingroom-1.jpg", label: "Living Room Wrap",     category: "Living Room", height: 400, position: "object-center" },
  { src: "/images/livingroom-2.jpg", label: "Living Room Wall",     category: "Living Room", height: 380, position: "object-center" },
  { src: "/images/livingroom-3.jpg", label: "Living Room Panel",    category: "Living Room", height: 420, position: "object-center" },
  { src: "/images/livingroom-4.jpg", label: "Living Room Design",   category: "Living Room", height: 360, position: "object-center" },
  // Normal Wall (4)
  { src: "/images/normalwall-1.jpg", label: "Wall Wrap",            category: "Normal Wall", height: 380, position: "object-center" },
  { src: "/images/normalwall-2.jpg", label: "Wall Panel",           category: "Normal Wall", height: 420, position: "object-center" },
  { src: "/images/normalwall-3.jpg", label: "Wall Texture",         category: "Normal Wall", height: 360, position: "object-center" },
  { src: "/images/normalwall-4.jpg", label: "Wall Design",          category: "Normal Wall", height: 400, position: "object-center" },
  // Table (4)
  { src: "/images/table-1.jpg",     label: "Table Wrap",            category: "Table",       height: 360, position: "object-center" },
  { src: "/images/table-2.jpg",     label: "Table Surface",         category: "Table",       height: 380, position: "object-center" },
  { src: "/images/table-3.jpg",     label: "Table Design",          category: "Table",       height: 340, position: "object-center" },
  { src: "/images/table-4.jpg",     label: "Table Vinyl",           category: "Table",       height: 400, position: "object-center" },
  // Surfaces (4)
  { src: "/images/surface-1.jpg",   label: "Surface Wrap",          category: "Surfaces",    height: 380, position: "object-center" },
  { src: "/images/surface-2.jpg",   label: "Surface Panel",         category: "Surfaces",    height: 360, position: "object-center" },
  { src: "/images/surface-3.jpg",   label: "Surface Design",        category: "Surfaces",    height: 420, position: "object-center" },
  { src: "/images/surface-4.jpg",   label: "Surface Vinyl",         category: "Surfaces",    height: 340, position: "object-center" },
  // Dining Room (4)
  { src: "/images/dining-1.jpg",    label: "Dining Room Wrap",      category: "Dining Room", height: 400, position: "object-center" },
  { src: "/images/dining-2.jpg",    label: "Dining Room Wall",      category: "Dining Room", height: 380, position: "object-center" },
  { src: "/images/dining-3.jpg",    label: "Dining Room Panel",     category: "Dining Room", height: 360, position: "object-center" },
  { src: "/images/dining-4.jpg",    label: "Dining Room Design",    category: "Dining Room", height: 420, position: "object-center" },
  // Bedroom (4)
  { src: "/images/bedroom-1.jpg",   label: "Bedroom Wrap",          category: "Bedroom",     height: 400, position: "object-center" },
  { src: "/images/bedroom-2.jpg",   label: "Bedroom Wall",          category: "Bedroom",     height: 380, position: "object-center" },
  { src: "/images/bedroom-3.jpg",   label: "Bedroom Panel",         category: "Bedroom",     height: 420, position: "object-center" },
  { src: "/images/bedroom-4.jpg",   label: "Bedroom Design",        category: "Bedroom",     height: 360, position: "object-center" },
  // Bathroom (4)
  { src: "/images/bathroom-1.jpg",  label: "Bathroom Wrap",         category: "Bathroom",    height: 420, position: "object-center" },
  { src: "/images/bathroom-2.jpg",  label: "Bathroom Wall",         category: "Bathroom",    height: 380, position: "object-center" },
  { src: "/images/bathroom-3.jpg",  label: "Bathroom Panel",        category: "Bathroom",    height: 400, position: "object-center" },
  { src: "/images/bathroom-4.jpg",  label: "Bathroom Design",       category: "Bathroom",    height: 360, position: "object-center" },
  // Doors (4)
  { src: "/images/doors-1.jpg",     label: "Door Wrap",             category: "Doors",       height: 440, position: "object-center" },
  { src: "/images/doors-2.jpg",     label: "Door Panel",            category: "Doors",       height: 400, position: "object-center" },
  { src: "/images/doors-3.jpg",     label: "Door Design",           category: "Doors",       height: 420, position: "object-center" },
  { src: "/images/doors-4.jpg",     label: "Door Vinyl",            category: "Doors",       height: 380, position: "object-center" },
];

/* ─── Hero slider images (the before/after pairs) ───── */
const sliderImages = [
  { src: "/images/living-room.jpg",  alt: "Living room transformation" },
  { src: "/images/dining-room.jpg",  alt: "Dining room transformation" },
  { src: "/images/bedroom.jpg",      alt: "Bedroom transformation"     },
  { src: "/images/wall.jpg",         alt: "Wall transformation"        },
  { src: "/images/elevator.jpg",     alt: "Elevator transformation"    },
  { src: "/images/door.jpg",         alt: "Door transformation"        },
  { src: "/images/kitchen.jpg",      alt: "Kitchen transformation"     },
  { src: "/images/table.jpg",        alt: "Table transformation"       },
];

/* ─── Page ───────────────────────────────────────────── */
export default function WorkPage() {
  const [active, setActive]     = useState<Filter>("All");
  const [current, setCurrent]   = useState(0);
  const [fading, setFading]     = useState(false);

  /* Auto-advance slider every 3.5 s */
  const advance = useCallback(() => {
    setFading(true);
    setTimeout(() => {
      setCurrent((c) => (c + 1) % sliderImages.length);
      setFading(false);
    }, 400);
  }, []);

  useEffect(() => {
    const id = setInterval(advance, 3500);
    return () => clearInterval(id);
  }, [advance]);

  const goTo = (i: number) => {
    if (i === current) return;
    setFading(true);
    setTimeout(() => { setCurrent(i); setFading(false); }, 400);
  };

  const filtered =
    active === "All" ? workItems : workItems.filter((w) => w.category === active);

  return (
    <div className="bg-[#F9F7F4] min-h-screen">

      {/* ── Page title ──────────────────────────────── */}
      <section className="pt-12 md:pt-16 pb-6 px-5 text-center">
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-gray-900">
          Our Work
        </h1>
      </section>

      {/* ── Before / After hero slider ──────────────── */}
      <section className="relative w-full overflow-hidden bg-black" style={{ height: "clamp(260px, 55vw, 620px)" }}>

        {/* Slide image */}
        <Image
          key={current}
          src={sliderImages[current].src}
          alt={sliderImages[current].alt}
          fill
          className={`object-cover transition-opacity duration-500 ${fading ? "opacity-0" : "opacity-100"}`}
          sizes="100vw"
          priority
        />

        {/* Dark gradient at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Before / After label */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
          <span className="text-white/60 text-xs tracking-widest uppercase font-medium">Before</span>
          <div className="w-8 h-px bg-white/40" />
          <span className="text-white text-xs tracking-widest uppercase font-semibold">After</span>
        </div>

        {/* Dot navigation */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {sliderImages.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-5 h-2 bg-white"
                  : "w-2 h-2 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrow buttons */}
        <button
          onClick={() => goTo((current - 1 + sliderImages.length) % sliderImages.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors"
          aria-label="Previous"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          onClick={() => goTo((current + 1) % sliderImages.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors"
          aria-label="Next"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 12L10 8L6 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </section>

      {/* ── Filter tabs ─────────────────────────────── */}
      <div className="flex gap-2 md:gap-3 px-4 pt-8 mb-8 md:mb-10 overflow-x-auto pb-1 scrollbar-hide md:justify-center md:flex-wrap">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`flex-shrink-0 px-4 md:px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              active === f
                ? "bg-[#6C3FC5] text-white shadow-md"
                : "bg-white text-gray-600 border border-gray-200 active:bg-[#F0EEF9]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* ── Masonry gallery ─────────────────────────── */}
      <div className="max-w-6xl mx-auto px-3 md:px-6 pb-16 md:pb-24">
        <div className="columns-2 md:columns-2 lg:columns-3 gap-3 md:gap-5">
          {filtered.map(({ src, label, height, position }) => (
            <div
              key={label + src}
              className="group relative overflow-hidden rounded-xl md:rounded-2xl mb-3 md:mb-5 break-inside-avoid shadow-sm"
              style={{ height: `clamp(160px, 40vw, ${height}px)` }}
            >
              <Image
                src={src}
                alt={label}
                fill
                className={`object-cover ${position}`}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-2 md:p-4">
                <span className="text-white font-medium text-xs md:text-sm tracking-wide leading-tight">
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
