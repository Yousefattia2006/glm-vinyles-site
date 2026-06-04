import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

const surfaces = [
  { src: "/images/try1.jpg",       label: "Concrete Design", position: "object-center" },
  { src: "/images/try2.jpg",       label: "Wood Design",     position: "object-center" },
  { src: "/images/surfaces-3.jpg", label: "Marble Design",   position: "object-center" },
];

export default function OfferingsPage() {
  return (
    <div className="bg-black min-h-screen">

      {/* ── Surface panels — simple CSS snap, zero lag ── */}
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-hide">
        {surfaces.map(({ src, label, position }) => (
          <div
            key={label}
            className="relative w-full h-screen snap-start snap-always flex-shrink-0 overflow-hidden"
          >
            {/* Full-bleed image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={label}
              className={`absolute inset-0 w-full h-full object-cover ${position}`}
              loading="eager"
            />

            {/* Subtle dark overlay so text reads clearly */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/30" />

            {/* Label — top of image */}
            <div className="absolute top-0 left-0 right-0 flex items-start justify-start px-6 pt-8 md:px-12 md:pt-10 z-10">
              <h2 className="font-[family-name:var(--font-playfair)] text-white text-3xl sm:text-4xl md:text-6xl font-bold leading-tight tracking-tight drop-shadow-lg">
                {label}
              </h2>
            </div>

            {/* Scroll hint on first panel only */}
            {label === "Concrete Design" && (
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 animate-bounce">
                <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
                <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ── Section title below panels ── */}
      <section className="py-12 md:py-16 px-5 bg-white text-center">
        <AnimatedSection>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold text-gray-900 mb-3">
            Multiple Surface Finishes
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Every finish crafted to perfection — from concrete and wood to marble and beyond.
          </p>
        </AnimatedSection>
      </section>

      {/* ── CTA ── */}
      <AnimatedSection>
        <section className="bg-white py-10 md:py-16 px-5 text-center border-t border-gray-100">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Like what you see? Let&apos;s talk.
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-[#6C3FC5] text-white px-8 py-3.5 md:px-9 md:py-4 rounded-full font-semibold text-sm md:text-base hover:scale-105 hover:bg-[#5a33a8] transition-all duration-300 shadow-md active:scale-95"
          >
            Get in Touch
          </Link>
        </section>
      </AnimatedSection>

    </div>
  );
}
