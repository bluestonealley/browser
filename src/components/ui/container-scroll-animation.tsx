"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, m, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
  footerComponent,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
  footerComponent?: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [1, 1] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[40rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: isMobile ? "none" : "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
        {footerComponent && (
          <div className="mt-16 flex justify-center">
            {footerComponent}
          </div>
        )}
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <m.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </m.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <m.div
      style={{
        rotateX: rotate,
        scale,
      }}
      className="max-w-5xl mx-auto w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px]"
    >
      <div className="w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl aspect-[1126/678]">
        {children}
      </div>
    </m.div>
  );
};
