"use client";

import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";

export default function AboutSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
    hidden: { filter: "blur(8px)", y: -16, opacity: 0 },
  };

  const scaleVariants = {
    visible: (i: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
    hidden: { filter: "blur(8px)", opacity: 0 },
  };

  return (
    <section
      className="py-10 px-4 md:px-6 bg-[#f9f9f9] font-[family-name:var(--font-inter)]"
      ref={heroRef}
    >
      <div className="max-w-6xl mx-auto">

        {/* ── WHO WE ARE label ── */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-[#6C3FC5] animate-spin inline-block">✱</span>
          <TimelineContent
            as="span"
            animationNum={0}
            timelineRef={heroRef}
            customVariants={revealVariants}
            className="font-[family-name:var(--font-inter)] text-sm font-medium text-gray-600 tracking-widest uppercase"
          >
            Who We Are
          </TimelineContent>
        </div>

        {/* ── Hero image with SVG clip shape ── */}
        <TimelineContent
          as="figure"
          animationNum={4}
          timelineRef={heroRef}
          customVariants={scaleVariants}
          className="relative group w-full mb-4"
        >
          <svg width="0" height="0" className="absolute">
            <defs>
              <clipPath id="clip-glm" clipPathUnits="objectBoundingBox">
                <path d="M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.77561 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.46603 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z" />
              </clipPath>
            </defs>
          </svg>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/about.svg"
            alt="GLM Vinyles — about"
            className="w-full object-cover object-center"
            style={{
              clipPath: "url(#clip-glm)",
              aspectRatio: "100 / 40",
              display: "block",
            }}
          />
        </TimelineContent>

        {/* ── Stats row ── */}
        <TimelineContent
          as="div"
          animationNum={5}
          timelineRef={heroRef}
          customVariants={revealVariants}
          className="flex flex-wrap items-center gap-x-6 gap-y-2 py-3 text-sm mb-2"
        >
          <div className="flex items-center gap-2">
            <span className="text-[#6C3FC5] font-bold text-base">10+</span>
            <span className="text-gray-600">years of experience</span>
          </div>
          <span className="text-gray-300 hidden sm:inline">|</span>
          <div className="flex items-center gap-2">
            <span className="text-[#6C3FC5] font-bold text-base">500+</span>
            <span className="text-gray-600">materials</span>
          </div>
          <span className="text-gray-300 hidden sm:inline">|</span>
          <div className="flex items-center gap-2">
            <span className="text-[#6C3FC5] font-bold text-2xl sm:text-3xl">60%</span>
            <span className="text-gray-600 uppercase text-xs sm:text-sm font-medium">more affordable</span>
          </div>
        </TimelineContent>

        {/* ── Main headline ── */}
        <div className="mt-6 mb-6">
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl !leading-[110%] font-bold text-gray-900">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.1}
              staggerFrom="first"
              reverse={true}
              transition={{ type: "spring", stiffness: 250, damping: 30, delay: 0.3 }}
            >
              Transforming Surfaces Into Stunning Spaces.
            </VerticalCutReveal>
          </h1>
        </div>

        {/* ── Body grid: paragraphs + CTA ── */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">

          {/* Left 2/3 — paragraphs */}
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-6 text-gray-600 text-sm sm:text-base leading-relaxed">
            <TimelineContent
              as="p"
              animationNum={9}
              timelineRef={heroRef}
              customVariants={revealVariants}
            >
              Our story started with a passion for quality surfaces and evolved into a leading vinyl and decorative materials brand. We specialize in turning raw walls into elegant, durable, and design-forward spaces.
            </TimelineContent>
            <TimelineContent
              as="p"
              animationNum={10}
              timelineRef={heroRef}
              customVariants={revealVariants}
            >
              Every surface has potential, and we help you unlock it. By combining innovative materials with expert craftsmanship, we deliver solutions that are as practical as they are beautiful.
            </TimelineContent>
          </div>

          {/* Right 1/3 — brand + CTA */}
          <div className="md:col-span-1 flex flex-col gap-3 md:items-end md:text-right">
            <TimelineContent
              as="div"
              animationNum={12}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="font-[family-name:var(--font-playfair)] text-[#6C3FC5] text-xl font-bold tracking-wide"
            >
              GLM VINYLES
            </TimelineContent>
            <TimelineContent
              as="div"
              animationNum={13}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="text-gray-500 text-sm"
            >
              Vinyl &amp; Decorative Wall Specialists
            </TimelineContent>
            <TimelineContent
              as="p"
              animationNum={14}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="text-gray-900 font-medium text-sm mt-2"
            >
              Ready to transform your space into something extraordinary?
            </TimelineContent>
            <TimelineContent
              as="div"
              animationNum={15}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="mt-1"
            >
              <Link
                href="/contact"
                className="bg-neutral-900 hover:bg-[#6C3FC5] shadow-lg border border-neutral-700 inline-flex items-center gap-2 hover:gap-4 transition-all duration-300 text-white px-5 py-3 rounded-lg font-semibold text-sm"
              >
                LET&apos;S WORK TOGETHER <ArrowRight size={18} />
              </Link>
            </TimelineContent>
          </div>

        </div>
      </div>
    </section>
  );
}
