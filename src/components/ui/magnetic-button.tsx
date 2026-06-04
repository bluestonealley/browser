'use client';

import React, { useState, useEffect, useRef } from 'react';
import { m, useMotionValue, useSpring } from 'framer-motion';

const SPRING_CONFIG = { damping: 60, stiffness: 600 };

type MagneticButtonType = {
  children: React.ReactNode;
  distance?: number;
};

function MagneticButton({ children, distance = 0.6 }: MagneticButtonType) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isTouchDevice = typeof window !== 'undefined' && 'ontouchstart' in window;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, SPRING_CONFIG);
  const springY = useSpring(y, SPRING_CONFIG);

  useEffect(() => {
    if (isTouchDevice) return;

    const calculateDistance = (e: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        if (isHovered) {
          x.set(distanceX * distance);
          y.set(distanceY * distance);
        } else {
          x.set(0);
          y.set(0);
        }
      }
    };

    document.addEventListener('mousemove', calculateDistance);

    return () => {
      document.removeEventListener('mousemove', calculateDistance);
    };
  }, [isHovered, distance, x, y]);

  return (
    <m.div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        x: springX,
        y: springY
      }}>
      {children}
    </m.div>
  );
}

export { MagneticButton };
