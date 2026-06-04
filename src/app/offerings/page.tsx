import FlowArt, { FlowSection } from "@/components/ui/story-scroll";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

export default function OfferingsPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* ── Header ── */}
      <section className="pt-16 md:pt-20 pb-10 md:pb-14 px-5 bg-[#F9F7F4]">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Multiple Surface Finishes
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl leading-relaxed">
            Every finish crafted to perfection — from marble and stone to wood, fabric, and metallic effects.
          </p>
        </div>
      </section>

      {/* ── Story Scroll Gallery ── */}
      <FlowArt aria-label="Surface finishes gallery">

        <FlowSection aria-label="Surface finish 1">
          {/* Full-bleed image, no text */}
          <div className="absolute inset-0 w-full h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/surfaces-1.jpg"
              alt="Surface finish 1"
              className="w-full h-full object-cover object-center"
              style={{ minHeight: "100vh" }}
            />
          </div>
        </FlowSection>

        <FlowSection aria-label="Surface finish 2">
          <div className="absolute inset-0 w-full h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/surfaces-2.jpg"
              alt="Surface finish 2"
              className="w-full h-full object-cover object-center"
              style={{ minHeight: "100vh" }}
            />
          </div>
        </FlowSection>

        <FlowSection aria-label="Surface finish 3">
          <div className="absolute inset-0 w-full h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/surfaces-3.jpg"
              alt="Surface finish 3"
              className="w-full h-full object-cover object-center"
              style={{ minHeight: "100vh" }}
            />
          </div>
        </FlowSection>

      </FlowArt>

      {/* ── CTA ── */}
      <AnimatedSection>
        <section className="bg-white py-14 md:py-20 px-5 text-center">
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
