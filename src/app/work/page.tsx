"use client";

import Image from "next/image";
import { useState } from "react";

type Filter = "All" | "Walls" | "Objects" | "Custom";

const filters: Filter[] = ["All", "Walls", "Objects", "Custom"];

interface WorkItem {
  seed: string;
  label: string;
  category: Exclude<Filter, "All">;
  height: number;
}

const workItems: WorkItem[] = [
  { seed: "nova-w1", label: "Botanical Wall Mural", category: "Walls", height: 400 },
  { seed: "nova-w2", label: "Custom Laptop Skin", category: "Objects", height: 300 },
  { seed: "nova-w3", label: "Name Quote Decal", category: "Custom", height: 350 },
  { seed: "nova-w4", label: "Geometric Wall Art", category: "Walls", height: 450 },
  { seed: "nova-w5", label: "Water Bottle Wrap", category: "Objects", height: 280 },
  { seed: "nova-w6", label: "Full Custom Commission", category: "Custom", height: 420 },
  { seed: "nova-w7", label: "Minimalist Wall Decal", category: "Walls", height: 320 },
  { seed: "nova-w8", label: "Mirror Sticker Set", category: "Objects", height: 370 },
  { seed: "nova-w9", label: "Wedding Name Board", category: "Custom", height: 400 },
  { seed: "nova-w10", label: "Boho Wall Cluster", category: "Walls", height: 260 },
  { seed: "nova-w11", label: "Laptop Sticker Pack", category: "Objects", height: 340 },
  { seed: "nova-w12", label: "Baby Nursery Theme", category: "Custom", height: 390 },
];

export default function WorkPage() {
  const [active, setActive] = useState<Filter>("All");

  const filtered =
    active === "All" ? workItems : workItems.filter((w) => w.category === active);

  return (
    <div className="bg-[#F9F7F4] min-h-screen">
      {/* Page Hero */}
      <section className="pt-20 pb-12 px-6 text-center">
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-gray-900 mb-4">
          Our Work
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          A glimpse into the spaces we&apos;ve helped transform — one sticker at a time.
        </p>
      </section>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-3 px-6 mb-12 flex-wrap">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              active === f
                ? "bg-[#6C3FC5] text-white shadow-md"
                : "bg-white text-gray-600 hover:bg-[#F0EEF9] hover:text-[#6C3FC5] border border-gray-200"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div
          style={{ columnCount: undefined }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-5"
        >
          {filtered.map(({ seed, label, height }) => (
            <div
              key={seed}
              className="group relative overflow-hidden rounded-2xl mb-5 break-inside-avoid shadow-sm hover:shadow-lg transition-shadow duration-300"
              style={{ height: `${height}px` }}
            >
              <Image
                src={`https://picsum.photos/seed/${seed}/600/${height}`}
                alt={label}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-5">
                <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm tracking-wide">
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
