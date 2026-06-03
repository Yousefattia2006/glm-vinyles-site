import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

const values = [
  { emoji: "🤍", title: "Made with love", desc: "Every piece is crafted with genuine care and attention to detail." },
  { emoji: "📍", title: "Designed locally", desc: "Rooted in our community, inspired by the spaces around us." },
  { emoji: "✨", title: "Every piece is personal", desc: "No two orders are alike — your vision drives every design." },
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="pt-20 pb-12 px-6 text-center bg-[#F9F7F4]">
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-gray-900 mb-4">
          About Nova
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          The story behind the studio.
        </p>
      </section>

      {/* Two-column story */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          {/* Portrait */}
          <AnimatedSection>
            <div className="relative w-full overflow-hidden rounded-2xl shadow-lg" style={{ aspectRatio: "3/4" }}>
              <Image
                src="https://picsum.photos/seed/nova-about/600/800"
                alt="Sara, founder of Nova Studio"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>

          {/* Story */}
          <AnimatedSection delay={150}>
            <div className="flex flex-col justify-center gap-6 pt-4">
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-gray-900 leading-snug">
                Hi, I&apos;m Sara.
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                Nova was born in the corner of my apartment where I kept rearranging things that didn&apos;t quite feel right. I was convinced that the space around you shapes the way you feel — and I couldn&apos;t find stickers or decals that matched the aesthetic I had in my head. So I made my own.
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                What started as a way to decorate my own walls became something I couldn&apos;t stop sharing. Friends asked for custom pieces. Then their friends did too. Before I knew it, Nova Studio was a real thing — a small, intentional brand built on the belief that your space should feel unmistakably like <em>you</em>.
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                I handle every single order personally. From the first message to the finished product, it&apos;s just me — a designer who genuinely loves what she does and cares deeply about the person on the other end. That&apos;s not going to change.
              </p>
              <p className="font-[family-name:var(--font-playfair)] text-xl text-[#6C3FC5] italic mt-2">
                — Sara, Founder of Nova Studio
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F0EEF9] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-gray-900 text-center mb-12">
              What we stand for
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(({ emoji, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 120}>
                <div className="text-center flex flex-col items-center gap-3">
                  <span className="text-4xl">{emoji}</span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-gray-900">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
