import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const featuredImages = [
  { seed: "nova-work1", label: "Wall Mural" },
  { seed: "nova-work2", label: "Custom Decal" },
  { seed: "nova-work3", label: "Laptop Art" },
];

const testimonials = [
  {
    quote:
      "Nova completely transformed my home office. The wall decal Sara designed for me is absolutely stunning — I get compliments every single day.",
    name: "Layla M.",
  },
  {
    quote:
      "I ordered custom name stickers for my daughter's nursery and I cried when I saw them. So beautiful, so personal. This is art.",
    name: "Rania K.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://picsum.photos/seed/nova-hero/1600/900"
          alt="Nova hero background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="text-[#c4b5fd] text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Nova Studio
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Peel. Stick. Transform.
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-10 leading-relaxed">
            Handcrafted vinyl stickers designed to make your space feel like yours.
          </p>
          <Link
            href="/work"
            className="inline-block bg-[#6C3FC5] text-white px-8 py-4 rounded-full font-semibold text-base hover:scale-105 hover:bg-[#5a33a8] transition-all duration-300 shadow-lg"
          >
            See Our Work
          </Link>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 px-6 bg-[#F9F7F4]">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-gray-900 text-center mb-14">
              Featured Work
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredImages.map(({ seed, label }, i) => (
              <AnimatedSection key={seed} delay={i * 120}>
                <div className="group relative aspect-square overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={`https://picsum.photos/seed/${seed}/600/600`}
                    alt={label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end p-5">
                    <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm tracking-wide">
                      {label}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Touch Banner */}
      <AnimatedSection>
        <section className="py-20 px-6 bg-[#F0EEF9]">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[#6C3FC5] italic leading-relaxed">
              &ldquo;Every order is handled personally — no automated systems,
              just care.&rdquo;
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-gray-900 text-center mb-14">
              What People Say
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map(({ quote, name }, i) => (
              <AnimatedSection key={name} delay={i * 150}>
                <div className="bg-[#F9F7F4] rounded-2xl p-8 flex flex-col gap-5">
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
                  <p className="font-semibold text-[#6C3FC5] text-sm">— {name}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <AnimatedSection>
        <section className="py-24 px-6 bg-[#F9F7F4] text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to transform your space?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-[#6C3FC5] text-white px-9 py-4 rounded-full font-semibold text-base hover:scale-105 hover:bg-[#5a33a8] transition-all duration-300 shadow-md"
          >
            Get in Touch
          </Link>
        </section>
      </AnimatedSection>
    </>
  );
}
