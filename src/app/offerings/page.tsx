import FlowArt, { FlowSection } from "@/components/ui/story-scroll";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

export default function OfferingsPage() {
  return (
    <div className="bg-black min-h-screen">

      {/* ── Story Scroll Gallery ── */}
      <FlowArt aria-label="Surface finishes gallery">

        <FlowSection aria-label="Concrete Design">
          <div className="absolute inset-0 w-full h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/try1.jpg"
              alt="Concrete Design"
              className="w-full h-full object-cover object-center"
              style={{ minHeight: "100vh" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
          </div>
          <h2 className="relative z-10 font-[family-name:var(--font-playfair)] text-white text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight drop-shadow-lg px-[4vw] pt-[clamp(1rem,4vw,3rem)]">
            Concrete Design
          </h2>
        </FlowSection>

        <FlowSection aria-label="Wood Design">
          <div className="absolute inset-0 w-full h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/try2.jpg"
              alt="Wood Design"
              className="w-full h-full object-cover object-center"
              style={{ minHeight: "100vh" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
          </div>
          <h2 className="relative z-10 font-[family-name:var(--font-playfair)] text-white text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight drop-shadow-lg px-[4vw] pt-[clamp(1rem,4vw,3rem)]">
            Wood Design
          </h2>
        </FlowSection>

        <FlowSection aria-label="Marble Design">
          <div className="absolute inset-0 w-full h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/try3.jpg"
              alt="Marble Design"
              className="w-full h-full object-cover object-center"
              style={{ minHeight: "100vh" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
          </div>
          <h2 className="relative z-10 font-[family-name:var(--font-playfair)] text-white text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight drop-shadow-lg px-[4vw] pt-[clamp(1rem,4vw,3rem)]">
            Marble Design
          </h2>
        </FlowSection>

      </FlowArt>

      {/* ── Section title ── */}
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
