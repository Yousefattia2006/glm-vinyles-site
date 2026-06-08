import FlowArt, { FlowSection } from "@/components/ui/story-scroll";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

export default function OfferingsPage() {
  return (
    <div className="bg-black min-h-screen">

      {/* ── Title — appears BEFORE the images ── */}
      <section className="bg-black py-16 md:py-24 px-6 text-center">
        <AnimatedSection>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
            Multiple Surface Finishes
          </h1>
          <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Scroll to explore our surface collections.
          </p>
        </AnimatedSection>
      </section>

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
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
          </div>
          <div className="absolute top-10 md:top-14 left-0 right-0 px-[4vw] z-10">
            <h2 className="font-[family-name:var(--font-playfair)] text-white text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight drop-shadow-lg">
              Concrete Design
            </h2>
          </div>
        </FlowSection>

        <FlowSection aria-label="Marble Design">
          <div className="absolute inset-0 w-full h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/image2.jpg"
              alt="Marble Design"
              className="w-full h-full object-cover object-center"
              style={{ minHeight: "100vh" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
          </div>
          <div className="absolute top-10 md:top-14 left-0 right-0 px-[4vw] z-10">
            <h2 className="font-[family-name:var(--font-playfair)] text-white text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight drop-shadow-lg">
              Marble Design
            </h2>
          </div>
        </FlowSection>

        <FlowSection aria-label="Wood Design">
          <div className="absolute inset-0 w-full h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/image3.jpg"
              alt="Wood Design"
              className="w-full h-full object-cover object-center"
              style={{ minHeight: "100vh" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
          </div>
          <div className="absolute top-10 md:top-14 left-0 right-0 px-[4vw] z-10">
            <h2 className="font-[family-name:var(--font-playfair)] text-white text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight drop-shadow-lg">
              Wood Design
            </h2>
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
