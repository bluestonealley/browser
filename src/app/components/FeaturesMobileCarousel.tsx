"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { m, AnimatePresence, useScroll, useTransform } from "framer-motion";

const features = [
  {
    title: "Ambient Spaces",
    description:
      "A smart workspace system where toggling categories automatically shifts the browser's UI colors, active layout tools, and accent themes to perfectly match your current mindset or workflow.",
    image: "/scroll-1.webp",
  },
  {
    title: "Omnibar Actions",
    description:
      "A command-line utility built directly into your URL bar, allowing you to use simple keyboard shortcuts and / commands to trigger seamless, lightweight developer tools and layout inspection tools on any page.",
    image: "/scroll-2.webp",
  },
  {
    title: "Canvas Split-View",
    description:
      "A multitasking layout that lets you arrange tabs side-by-side like design layers, featuring a persistent, glassmorphic utility dock at the bottom corner for low-profile background widgets.",
    image: "/scroll-3.webp",
  },
];

export default function FeaturesMobileCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const rafRef = useRef<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    return scrollYProgress.on("change", (progress) => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        const idx = Math.min(Math.floor(progress * features.length), features.length - 1);
        setActiveIndex(idx);
        rafRef.current = null;
      });
    });
  }, [scrollYProgress]);

  const n = features.length;

  const f0ImageX = useTransform(scrollYProgress, [0, 1 / n / 2, 1 / n], ["0%", "0%", "100%"]);
  const f1ImageX = useTransform(scrollYProgress, [1 / n, 1.5 / n, 2 / n], ["0%", "0%", "100%"]);
  const f2ImageX = useTransform(scrollYProgress, [2 / n, 1], ["0%", "0%"]);

  return (
    <div ref={sectionRef} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="h-[45%] flex flex-col justify-center px-6">
          <div className="text-center space-y-2 mb-6">
            <h2 className="font-heading text-[32px] font-700 text-blue leading-[1.2] tracking-tight">
              Built for how you work
            </h2>
            <p className="font-body text-xs text-muted-foreground">
              Every feature is designed to reduce friction and keep you in flow.
            </p>
          </div>
          <div className="relative w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <m.div
                key={features[activeIndex].title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex flex-col items-center"
              >
                <h3 className="font-heading text-xl font-700 text-blue text-center">
                  {features[activeIndex].title}
                </h3>
                <p className="font-body text-xs text-foreground/80 mt-1 text-center leading-relaxed px-2">
                  {features[activeIndex].description}
                </p>
              </m.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="h-[55%] relative overflow-hidden">
          <m.div className="absolute inset-0 z-10" style={{ x: f2ImageX }}>
            <div className="w-full h-full p-4 pt-0">
              <div className="w-full h-full rounded-[12px] overflow-hidden shadow-raised">
                <Image src={features[2].image} alt={features[2].title} width={1264} height={843} className="w-full h-full object-cover" />
              </div>
            </div>
          </m.div>
          <m.div className="absolute inset-0 z-20" style={{ x: f1ImageX }}>
            <div className="w-full h-full p-4 pt-0">
              <div className="w-full h-full rounded-[12px] overflow-hidden shadow-raised">
                <Image src={features[1].image} alt={features[1].title} width={1264} height={843} className="w-full h-full object-cover" />
              </div>
            </div>
          </m.div>
          <m.div className="absolute inset-0 z-30" style={{ x: f0ImageX }}>
            <div className="w-full h-full p-4 pt-0">
              <div className="w-full h-full rounded-[12px] overflow-hidden shadow-raised">
                <Image src={features[0].image} alt={features[0].title} width={1264} height={843} className="w-full h-full object-cover" />
              </div>
            </div>
          </m.div>
        </div>
      </div>
      <div className="h-[300vh]" />
    </div>
  );
}
