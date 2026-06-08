import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import StickerApplyAnimation from "@/components/StickerApplyAnimation";

const featuredImages = [
  { src: "/images/featured-1.jpg", label: "Living Room Wall Wrap", position: "object-center" },
  { src: "/images/featured-2.jpg", label: "Kitchen Cabinet Wrap", position: "object-center" },
  { src: "/images/featured-3.jpg", label: "Marble Bathroom Wrap", position: "object-center" },
];

const testimonials = [
  {
    quote:
      "What impressed me most was how premium it looks once installed. Visitors assume it's real stone, and they're always surprised when I tell them how affordable it was compared to traditional materials.",
  },
  {
    quote:
      "I was initially considering natural marble, but after comparing the costs and seeing the final result, I honestly couldn't justify spending several times more. The finish looks incredible and exceeded my expectations.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[calc(100svh-5rem)] flex flex-col overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Nova Studio — premium vinyl sample collection"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />

        {/* Spacer so full image is visible */}
        <div className="flex-1" />

        {/* "See Our Work" button pinned to the bottom */}
        <div className="relative z-10 px-5 pb-12 md:pb-16 text-center">
          <Link
            href="/work"
            className="inline-block bg-[#6C3FC5] text-white px-7 py-3.5 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base hover:scale-105 hover:bg-[#5a33a8] transition-all duration-300 shadow-lg active:scale-95"
          >
            See Our Work
          </Link>
        </div>
      </section>

      {/* ── Peel. Stick. Transform. banner ── */}
      <div className="relative w-full flex items-center justify-center overflow-hidden"
        style={{ minHeight: "clamp(480px, 80vw, 900px)" }}
      >
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/section-banner.svg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Text — left aligned, stacked */}
        <div className="relative z-10 w-full px-8 md:px-16 lg:px-24">
          <h2 className="font-[family-name:var(--font-playfair)] font-bold text-gray-900 tracking-tight leading-none text-left"
            style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}>
            <span className="block">Peel.</span>
            <span className="block">Stick.</span>
            <span className="block">Transform.</span>
          </h2>
        </div>
      </div>

      {/* Featured Work */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-[#F9F7F4]">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10 md:mb-14">
              Featured Work
            </h2>
          </AnimatedSection>
          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0 scrollbar-hide">
            {featuredImages.map(({ src, label, position }, i) => (
              <AnimatedSection key={label} delay={i * 120}>
                <div className="group relative flex-shrink-0 w-[78vw] sm:w-[60vw] md:w-auto aspect-square overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 snap-center">
                  <Image
                    src={src}
                    alt={label}
                    fill
                    className={`object-cover ${position} group-hover:scale-105 transition-transform duration-500`}
                    sizes="(max-width: 640px) 78vw, (max-width: 768px) 60vw, 33vw"
                  />
                  {/* Label always visible on mobile, hover-only on desktop */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-black/0 md:group-hover:bg-black/30 transition-colors duration-300 flex items-end p-4 md:p-5">
                    <span className="text-white font-medium text-sm tracking-wide md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                      {label}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll-driven sticker application animation */}
      <StickerApplyAnimation />

      {/* Personal Touch Banner */}
      <AnimatedSection>
        <section className="py-14 md:py-20 px-5 md:px-6 bg-[#F0EEF9]">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-[family-name:var(--font-playfair)] text-xl md:text-3xl text-[#6C3FC5] italic leading-relaxed">
              &ldquo;Every order is handled personally — no automated systems,
              just care.&rdquo;
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10 md:mb-14">
              What People Say
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
            {testimonials.map(({ quote }, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="bg-[#F9F7F4] rounded-2xl p-6 md:p-8 flex flex-col gap-4 md:gap-5">
                  <svg
                    width="36"
                    height="28"
                    viewBox="0 0 36 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 28V17.6C0 14.9333 0.466667 12.5333 1.4 10.4C2.4 8.26667 3.73333 6.46667 5.4 5C7.06667 3.46667 8.93333 2.33333 11 1.6L13 4.6C11 5.4 9.26667 6.6 7.8 8.2C6.33333 9.8 5.4 11.8 5 14.2H10V28H0ZM20 28V17.6C20 14.9333 20.4667 12.5333 21.4 10.4C22.4 8.26667 23.7333 6.46667 25.4 5C27.0667 3.46667 28.9333 2.33333 31 1.6L33 4.6C31 5.4 29.2667 6.6 27.8 8.2C26.3333 9.8 25.4 11.8 25 14.2H30V28H20Z"
                      fill="#6C3FC5"
                      opacity="0.25"
                    />
                  </svg>
                  <p className="text-gray-700 leading-relaxed text-base">{quote}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16 md:py-24 px-5 md:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-6 mb-12">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-gray-900 whitespace-nowrap">
                Main Features
              </h2>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
          </AnimatedSection>

          <div className="columns-1 sm:columns-2 gap-x-16">
            {[
              "Waterproof",
              "Flame Retardant",
              "Scratch Resistant",
              "Stain Resistant",
              "Bendable & Flexible",
              "Eco-Friendly",
              "Moisture Resistant",
              "Impact Resistant",
              "Deformation Resistant",
              "Lightweight",
              "Easy Installation",
              "Large Seamless Panels",
            ].map((feature, i) => (
              <AnimatedSection key={feature} delay={i * 40}>
                <div className="flex items-center gap-4 py-4 border-b border-gray-100 break-inside-avoid">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6C3FC5] flex-shrink-0" />
                  <span className="text-gray-800 text-base md:text-lg font-medium">
                    {feature}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <AnimatedSection>
        <section className="py-16 md:py-24 px-5 md:px-6 bg-[#F9F7F4] text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to transform your space?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-[#6C3FC5] text-white px-8 py-3.5 md:px-9 md:py-4 rounded-full font-semibold text-sm md:text-base hover:scale-105 hover:bg-[#5a33a8] transition-all duration-300 shadow-md active:scale-95"
          >
            Get in Touch
          </Link>
        </section>
      </AnimatedSection>
    </>
  );
}
