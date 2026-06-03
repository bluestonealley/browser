"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useScroll } from "framer-motion";
import { cn } from "@/lib/utils";


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

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const rafRef = useRef<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
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

  return (
    <section id="features" ref={sectionRef} className="relative">
      <div className="relative z-10">
        <div className="max-w-[1280px] mx-auto px-4 pt-24 pb-8 text-center">
          <h2 className="font-heading text-[48px] md:text-[64px] font-700 text-blue leading-[1.2] tracking-tight">
            Built for how you work
          </h2>
          <p className="font-body text-sm text-muted-foreground max-w-[480px] mx-auto mt-4">
            Every feature is designed to reduce friction and keep you in flow.
          </p>
        </div>

        <div className="max-w-[1280px] mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="sticky top-0 h-screen w-full md:w-[25%] flex items-center">
              <div className="w-full space-y-0 py-24">
                {features.map((f, i) => (
                  <div
                    key={f.title}
                    className={cn(
                      "flex items-start gap-4 py-8 transition-all duration-700",
                      i === activeIndex
                        ? "opacity-100 scale-[1.02]"
                        : "opacity-25 scale-100"
                    )}
                  >
                    <div
                      className={cn(
                        "w-1 shrink-0 h-12 rounded-full transition-all duration-700 mt-1",
                        i === activeIndex ? "bg-primary h-16" : "bg-transparent"
                      )}
                    />
                    <div className="flex-1">
                      <h3
                        className={cn(
                          "font-heading text-2xl md:text-3xl font-700 transition-all duration-700",
                          i === activeIndex
                            ? "text-blue"
                            : "text-muted-foreground"
                        )}
                      >
                        {f.title}
                      </h3>
                      <p
                        className={cn(
                          "font-body text-sm md:text-base mt-2 leading-relaxed max-w-md transition-all duration-700",
                          i === activeIndex
                            ? "text-foreground/80"
                            : "text-muted-foreground/40"
                        )}
                      >
                        {f.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full md:w-[75%]">
              <div className="h-[50vh] md:h-[25vh]" />
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className={cn(
                    "min-h-screen w-full flex items-center justify-center transition-all duration-1000",
                    i === activeIndex
                      ? "opacity-100 scale-100"
                      : "opacity-40 scale-[0.97]"
                  )}
                >
                  <div className="w-full rounded-[12px] overflow-hidden shadow-raised">
                    <Image
                      src={f.image}
                      alt={f.title}
                      width={1264}
                      height={843}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              ))}
              <div className="h-[50vh] md:h-[25vh]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
