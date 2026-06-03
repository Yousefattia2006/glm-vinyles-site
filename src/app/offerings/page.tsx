import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const products = [
  {
    number: "01",
    name: "HD Printing Wall Panel",
    material: "WPC + PETG Surface + Bamboo Charcoal Fiber Core",
    description:
      "A premium decorative wall panel designed to create seamless marble, stone, wood, fabric, or custom artistic surfaces. The PETG protective layer provides scratch and stain resistance, while the bamboo charcoal fiber core offers durability and flexibility.",
    benefits: ["Waterproof", "Fire Retardant", "Bendable", "Scratch Resistant", "Stain Resistant", "Eco-Friendly"],
  },
  {
    number: "02",
    name: "SPC Background Panel",
    material: "SPC (Stone Plastic Composite) + PETG Decorative Surface",
    description:
      "A lightweight decorative panel featuring high-definition printed surfaces with realistic stone, marble, and artistic finishes. SPC construction provides dimensional stability and water resistance.",
    benefits: ["Waterproof", "Bendable", "Fire Rated", "Durable", "Low Maintenance"],
  },
  {
    number: "03",
    name: "Anti-Collision Wall Panel",
    material: "SPC Anti-Collision Layers + Bamboo Charcoal Fiber Core",
    description:
      "Engineered for high-traffic environments where wall protection is essential. Multiple protective layers provide superior impact resistance while maintaining an elegant decorative appearance.",
    benefits: ["Impact Resistant", "Scratch Resistant", "Deformation Resistant", "Waterproof", "Bendable"],
  },
  {
    number: "04",
    name: "WPC Wall Panel",
    material: "Crystal Co-Extruded Protective Layers + Bamboo Charcoal Fiber Core",
    description:
      "A modern architectural wall cladding system combining decorative finishes with structural strength. Available in marble, stone, wood, fabric, and metallic effects.",
    benefits: ["Waterproof", "Fire Retardant", "Eco-Friendly", "Bendable", "Lightweight"],
  },
  {
    number: "05",
    name: "WPC Splicing Wall Panel",
    material: "Crystal Co-Extruded Surface + Bamboo Charcoal Fiber Core",
    description:
      "A modular wall panel system available with tight-seam, U-seam, and P-seam connections, creating unique architectural wall compositions with minimal visible joints.",
    benefits: ["Seamless Appearance", "Waterproof", "Fire Retardant", "Fast Installation"],
  },
  {
    number: "06",
    name: "Carbon Crystal Wall Panel",
    material: "Crystal Co-Extruded Surface Layers + Carbon Fiber Core",
    description:
      "A premium decorative panel utilizing carbon fiber technology to achieve enhanced strength while remaining lightweight and flexible. Suitable for luxury feature walls and custom curved installations.",
    benefits: ["Waterproof", "Bendable", "Lightweight", "Fire Retardant", "Durable"],
  },
  {
    number: "07",
    name: "Fireproof Wall Panel",
    material: "Fireproof Mineral Board with Decorative Surface Layer",
    description:
      "A high-performance wall panel for projects requiring superior fire protection. Combines A1-rated fire resistance, waterproof performance, and decorative finishes in a single solution.",
    benefits: ["A1 Fire Rating", "Waterproof", "Self-Extinguishing", "Asbestos-Free", "Durable"],
  },
  {
    number: "08",
    name: "Fluted Wall Panel",
    material: "Decorative WPC Architectural Profiles",
    description:
      "A collection of architectural fluted, ribbed, corrugated, wave, and grille profiles used to create textured feature walls with depth and visual interest.",
    benefits: ["Waterproof", "Fire Rated", "Bendable", "Modern Appearance"],
  },
  {
    number: "09",
    name: "MS Flat Door",
    material: "WPC Door Leaf + WPC Door Frame System",
    description:
      "A minimalist flush door system designed to integrate seamlessly with modern interiors. Available in multiple decorative finishes matching wall panel collections.",
    benefits: ["Waterproof", "Fire Rated", "Durable", "Low Maintenance"],
  },
  {
    number: "10",
    name: "M16 Aluminum Framed Door",
    material: "Aluminum Profiles + Aluminum Honeycomb + WPC Door Leaf",
    description:
      "A premium architectural door system featuring precision aluminum framing combined with decorative WPC surfaces for a clean contemporary appearance.",
    benefits: ["Moisture Resistant", "Lightweight", "Eco-Friendly", "Durable"],
  },
  {
    number: "11",
    name: "Cultured Stone",
    material: "Flexible Inorganic Stone Composite",
    description:
      "An innovative flexible stone surface that replicates natural stone appearance and texture while remaining lightweight and easy to install. Available in Rammed Earth, Dolomite, Moonstone, Flowing Stone, and Qian Mo Stone.",
    benefits: ["Pliable", "Waterproof", "Lightweight", "Easy to Cut", "Realistic Stone Appearance"],
  },
];

const materials = [
  { name: "PETG",                     desc: "Premium decorative protective surface — scratch resistance, stain resistance, long-lasting color stability." },
  { name: "SPC",                       desc: "Stone Plastic Composite — waterproof and dimensionally stable, ideal for decorative wall applications." },
  { name: "WPC",                       desc: "Wood Plastic Composite — lightweight, durable, and moisture-resistant, widely used for wall panels and doors." },
  { name: "Bamboo Charcoal Fiber",     desc: "Environmentally friendly structural core — enhances panel strength, stability, and performance." },
  { name: "Carbon Fiber",              desc: "High-performance reinforcement — superior strength with reduced weight." },
  { name: "PUR Coating",               desc: "Premium protective coating — improves durability, stain resistance, and surface longevity." },
  { name: "Aluminum Honeycomb",        desc: "Ultra-lightweight structural material used in premium door systems for rigidity." },
  { name: "Flexible Inorganic Stone",  desc: "Advanced stone-based material — recreates natural stone appearance while remaining flexible." },
];

export default function OfferingsPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* ── Header ── */}
      <section className="pt-16 md:pt-20 pb-10 md:pb-14 px-5 bg-[#F9F7F4]">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            What We Offer
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl leading-relaxed">
            A complete collection of premium decorative wall panels, architectural profiles, doors, and surface materials — engineered for beauty, built to last.
          </p>
        </div>
      </section>

      {/* ── Product list ── */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pt-0 pb-16 md:pb-24">
        {products.map(({ number, name, material, description, benefits }, i) => (
          <AnimatedSection key={name} delay={i * 40}>
            <div className="group grid grid-cols-[3rem_1fr] md:grid-cols-[4rem_1fr_auto] gap-x-5 md:gap-x-8 gap-y-3 py-8 md:py-10 border-b border-gray-100">

              {/* Number */}
              <span className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-gray-400 pt-1">
                {number}
              </span>

              {/* Main content */}
              <div className="flex flex-col gap-2">
                {/* Material — most prominent */}
                <p className="font-[family-name:var(--font-playfair)] text-lg md:text-2xl font-bold text-gray-900 group-hover:text-[#6C3FC5] transition-colors duration-200 leading-snug">
                  {material}
                </p>
                {/* Product name — secondary */}
                <h2 className="text-xs text-gray-400 uppercase tracking-widest font-semibold">{name}</h2>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mt-1">{description}</p>
                {/* Benefits — inline text, not pills */}
                <p className="text-xs text-[#6C3FC5] font-medium tracking-wide">
                  {benefits.join("  ·  ")}
                </p>
              </div>

            </div>
          </AnimatedSection>
        ))}
      </section>

      {/* ── Material Technologies ── */}
      <section className="bg-[#F9F7F4] py-14 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-6 mb-12">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-gray-900 whitespace-nowrap">
                Material Technologies
              </h2>
              <div className="flex-1 h-px bg-gray-300" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {materials.map(({ name, desc }, i) => (
              <AnimatedSection key={name} delay={i * 50}>
                <div className="flex gap-5 py-6 border-b border-gray-200 pr-8">
                  <div className="w-1 h-full flex-shrink-0 flex items-start pt-1">
                    <div className="w-1 h-4 bg-[#6C3FC5] rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-base font-bold text-gray-900 mb-1">
                      {name}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

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
