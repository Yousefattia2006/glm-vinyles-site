import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const offerings = [
  {
    icon: "🖼️",
    title: "Wall Decals",
    description:
      "Transform blank walls into focal points. Whether you want a subtle botanical motif or a bold statement piece, our wall decals bring personality to any room without the commitment of paint.",
  },
  {
    icon: "✍️",
    title: "Custom Name & Quote Stickers",
    description:
      "Your words, your way. We turn your favourite quotes, names, and phrases into elegant vinyl stickers tailored to your font preference, size, and colour palette.",
  },
  {
    icon: "💻",
    title: "Object Decals",
    description:
      "Laptops, water bottles, mirrors, notebooks — claim your stuff. Our precision-cut object decals are designed to fit perfectly and last through everyday use.",
  },
  {
    icon: "🌸",
    title: "Seasonal Collections",
    description:
      "Limited drops for holidays and special moments. From cozy autumn sets to festive winter collections, each seasonal release is designed to feel timely and special.",
  },
  {
    icon: "🎨",
    title: "Fully Custom Orders",
    description:
      "Got an idea? Let's bring it to life. Whether it's a unique illustration, a family portrait silhouette, or something completely one-of-a-kind — reach out and let's create something together.",
  },
];

export default function OfferingsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="pt-20 pb-12 px-6 text-center bg-[#F9F7F4]">
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-gray-900 mb-4">
          What We Offer
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Every product is made with purpose and handled with care.
        </p>
      </section>

      {/* Cards */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {offerings.map(({ icon, title, description }, i) => (
            <AnimatedSection key={title} delay={i * 100}>
              <div className="bg-[#F9F7F4] rounded-2xl p-8 flex flex-col gap-4 hover:shadow-md transition-shadow duration-300 h-full">
                <span className="text-4xl">{icon}</span>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-gray-900">
                  {title}
                </h2>
                <p className="text-gray-600 leading-relaxed text-base">{description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <AnimatedSection>
        <section className="bg-[#F0EEF9] py-20 px-6 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-gray-900 mb-6">
            Like what you see? Let&apos;s talk.
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-[#6C3FC5] text-white px-9 py-4 rounded-full font-semibold text-base hover:scale-105 hover:bg-[#5a33a8] transition-all duration-300 shadow-md"
          >
            Get in Touch
          </Link>
        </section>
      </AnimatedSection>
    </div>
  );
}
