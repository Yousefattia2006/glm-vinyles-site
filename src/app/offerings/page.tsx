import FlowArt, { FlowSection } from "@/components/ui/story-scroll";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import Image from "next/image";

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

      {/* ── Various Designs — Marble Gallery ── */}
      <section className="bg-white py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">

          {/* Section heading */}
          <AnimatedSection>
            <div className="mb-10 md:mb-14">
              <span className="inline-block text-[#6C3FC5] font-[family-name:var(--font-inter)] text-xs md:text-sm uppercase tracking-[0.22em] font-medium mb-3">
                Explore the collection
              </span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-3" style={{ letterSpacing: "-0.02em" }}>
                Various Designs
              </h2>
              <p className="font-[family-name:var(--font-inter)] text-gray-500 text-base md:text-lg max-w-xl">
                A closer look at our marble surface finishes — each one unique, each one premium.
              </p>
            </div>
          </AnimatedSection>

          {/* Sub-heading: Marble Design */}
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="w-1 h-8 rounded-full bg-[#6C3FC5]" />
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-semibold text-gray-900">
                Marble Design
              </h3>
            </div>
          </AnimatedSection>

          {/* 3-column image grid — no interactivity, fully uncropped */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {["/images/marble-1.jpg", "/images/marble-2.jpg", "/images/marble-3.jpg"].map((src, i) => (
              <AnimatedSection key={src} delay={i * 100}>
                <Image
                  src={src}
                  alt=""
                  width={1254}
                  height={1254}
                  className="w-full h-auto block rounded-xl"
                  sizes="(max-width: 640px) 92vw, 30vw"
                  draggable={false}
                />
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
      <AnimatedSection>
        <section className="bg-white py-14 md:py-20 px-5 text-center border-t border-gray-100">
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
