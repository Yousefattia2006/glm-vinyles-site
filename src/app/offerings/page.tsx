import FlowArt, { FlowSection } from "@/components/ui/story-scroll";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import Image from "next/image";

export default function OfferingsPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* ── Page Hero ── */}
      <section className="bg-black pt-32 pb-16 md:pt-40 md:pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <span className="inline-block text-[#6C3FC5] font-[family-name:var(--font-inter)] text-xs md:text-sm uppercase tracking-[0.22em] font-medium mb-4">
              Our Products
            </span>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl md:text-8xl font-bold text-white leading-none mb-6" style={{ letterSpacing: "-0.03em" }}>
              Surface<br />Finishes.
            </h1>
            <p className="font-[family-name:var(--font-inter)] text-white/50 text-base md:text-lg max-w-md leading-relaxed">
              Scroll through our three signature collections — each crafted to transform any wall into a statement.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Scroll Gallery ── */}
      <FlowArt aria-label="Surface finishes gallery">

        <FlowSection aria-label="Concrete Design">
          <div className="absolute inset-0 w-full h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/try1.jpg" alt="Concrete Design" className="w-full h-full object-cover object-center" style={{ minHeight: "100vh" }} />
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
            <img src="/images/image2.jpg" alt="Marble Design" className="w-full h-full object-cover object-center" style={{ minHeight: "100vh" }} />
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
            <img src="/images/image3.jpg" alt="Wood Design" className="w-full h-full object-cover object-center" style={{ minHeight: "100vh" }} />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
          </div>
          <div className="absolute top-10 md:top-14 left-0 right-0 px-[4vw] z-10">
            <h2 className="font-[family-name:var(--font-playfair)] text-white text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight drop-shadow-lg">
              Wood Design
            </h2>
          </div>
        </FlowSection>

      </FlowArt>

      {/* ── Various Designs — full gallery ── */}
      <section className="bg-white py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">

          {/* Section header */}
          <AnimatedSection>
            <div className="mb-16 md:mb-20 max-w-2xl">
              <span className="inline-block text-[#6C3FC5] font-[family-name:var(--font-inter)] text-xs md:text-sm uppercase tracking-[0.22em] font-medium mb-4">
                Explore the collection
              </span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4" style={{ letterSpacing: "-0.02em" }}>
                Various Designs
              </h2>
              <p className="font-[family-name:var(--font-inter)] text-gray-500 text-base md:text-lg leading-relaxed">
                A closer look at each finish — real samples, real textures.
              </p>
            </div>
          </AnimatedSection>

          {/* Concrete */}
          <DesignBlock
            title="Concrete Design"
            images={["/images/concrete-1.jpg", "/images/concrete-2.jpg", "/images/concrete-3.jpg"]}
          />

          {/* Marble */}
          <DesignBlock
            title="Marble Design"
            images={["/images/marble-1.jpg", "/images/marble-2.jpg", "/images/marble-3.jpg"]}
          />

          {/* Wood */}
          <DesignBlock
            title="Wood Design"
            images={["/images/wood-1.jpg", "/images/wood-2.jpg", "/images/wood-3.jpg"]}
            last
          />

        </div>
      </section>

      {/* ── CTA ── */}
      <AnimatedSection>
        <section className="bg-[#F9F7F4] py-16 md:py-20 px-5 text-center border-t border-gray-100">
          <span className="inline-block text-[#6C3FC5] font-[family-name:var(--font-inter)] text-xs uppercase tracking-[0.22em] font-medium mb-4">
            Ready to transform?
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight" style={{ letterSpacing: "-0.02em" }}>
            Like what you see?<br />Let&apos;s talk.
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-[#6C3FC5] text-white px-9 py-4 rounded-full font-[family-name:var(--font-inter)] font-semibold text-sm md:text-base hover:bg-[#5a33a8] transition-colors duration-300 shadow-md"
          >
            Get in Touch
          </Link>
        </section>
      </AnimatedSection>

    </div>
  );
}

/* ── Reusable design block: sub-heading + 3 uncropped images ── */
function DesignBlock({
  title,
  images,
  last = false,
}: {
  title: string;
  images: string[];
  last?: boolean;
}) {
  return (
    <AnimatedSection>
      <div className={`${last ? "" : "mb-16 md:mb-20 pb-16 md:pb-20 border-b border-gray-100"}`}>
        {/* Sub-heading */}
        <div className="flex items-center gap-4 mb-6 md:mb-8">
          <div className="w-1 h-7 rounded-full bg-[#6C3FC5] flex-shrink-0" />
          <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-semibold text-gray-900">
            {title}
          </h3>
        </div>

        {/* Images — 3 col desktop, 1 col mobile, fully uncropped */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
          {images.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={title}
              width={1254}
              height={1254}
              className="w-full h-auto block rounded-xl"
              sizes="(max-width: 640px) 92vw, 30vw"
              draggable={false}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
