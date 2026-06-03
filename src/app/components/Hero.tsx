"use client";

import { GooeyFilter } from "@/components/ui/gooey-filter";
import { PixelTrail } from "@/components/ui/pixel-trail";
import { useScreenSize } from "@/hooks/use-screen-size";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { RippleButton } from "@/components/ui/multi-type-ripple-buttons";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function Hero() {
  const screenSize = useScreenSize();

  return (
    <section className="relative overflow-hidden">
      <GooeyFilter id="hero-gooey" strength={8} />
      <div
        className="absolute inset-0 z-0"
        style={{ filter: "url(#hero-gooey)" }}
      >
        <PixelTrail
          pixelSize={screenSize.lessThan("md") ? 12 : 16}
          fadeDuration={500}
          delay={100}
          pixelClassName="bg-primary"
        />
      </div>
      <div className="relative z-10 w-full pointer-events-none">
        <ContainerScroll
          titleComponent={
            <div className="max-w-[1280px] mx-auto px-4 pt-28 md:pt-40 text-center">
              <h1 className="font-heading text-[64px] md:text-[90px] lg:text-[100px] font-700 leading-[1.2] tracking-tight text-blue text-center">
                The browser that
                <br />
                <span className="inline-block -ml-[4ch]">
                  works the way{" "}
                  <span className="text-primary">you</span>{" "}
                  <GooeyText
                    texts={["want", "love", "like", "do"]}
                    morphTime={1}
                    cooldownTime={0.25}
                    className="ml-[0.5ch]"
                    textClassName="text-primary font-heading text-[64px] md:text-[90px] lg:text-[100px] font-700 leading-[1.2]"
                  />
                </span>
              </h1>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 mb-20 pointer-events-auto">
                <MagneticButton distance={1.0}>
                  <RippleButton
                    className="!bg-primary !rounded-[8px] font-body text-sm px-6 py-3 shadow-raised"
                    rippleColor="rgba(255,255,255,0.5)"
                  >
                    Download
                  </RippleButton>
                </MagneticButton>
                <RippleButton
                  variant="ghost"
                  className="border border-input !rounded-[8px] font-body text-sm px-6 py-3 text-foreground hover:border-primary hover:text-primary"
                  rippleColor="rgba(245,158,11,0.2)"
                >
                  Learn More
                </RippleButton>
              </div>
            </div>
          }
        >
          <img
            src="/browser-view.png"
            alt="Browser preview"
            className="w-full h-full object-cover rounded-2xl"
          />
        </ContainerScroll>
      </div>
    </section>
  );
}
