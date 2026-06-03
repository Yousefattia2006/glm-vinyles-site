"use client";

import { motion, useInView, Variants } from "framer-motion";
import { ElementType, RefObject, useRef } from "react";
import { cn } from "@/lib/utils";

interface TimelineContentProps {
  as?: ElementType;
  animationNum?: number;
  timelineRef?: RefObject<HTMLElement | null>;
  customVariants?: Variants;
  className?: string;
  children?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export function TimelineContent({
  as: Tag = "div",
  animationNum = 0,
  timelineRef,
  customVariants,
  className,
  children,
  ...rest
}: TimelineContentProps) {
  const localRef = useRef<HTMLElement>(null);
  const refToUse = (timelineRef as RefObject<HTMLElement>) ?? localRef;

  const isInView = useInView(refToUse, { once: true, margin: "-80px" });

  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.5 },
    }),
  };

  const variants = customVariants ?? defaultVariants;

  const MotionTag = motion.create(Tag as ElementType);

  return (
    <MotionTag
      ref={localRef}
      custom={animationNum}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={cn(className)}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
