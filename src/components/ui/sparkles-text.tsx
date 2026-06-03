"use client";

import { CSSProperties, ReactElement, useEffect, useReducer } from "react";
import { m } from "framer-motion";

import { cn } from "@/lib/utils";

interface Sparkle {
  id: string;
  x: string;
  y: string;
  color: string;
  delay: number;
  scale: number;
  lifespan: number;
}

interface SparklesTextProps {
  as?: ReactElement;
  className?: string;
  text: string;
  sparklesCount?: number;
  colors?: {
    first: string;
    second: string;
  };
}

type SparkleAction =
  | { type: "INITIALIZE"; count: number; colors: { first: string; second: string } }
  | { type: "TICK"; colors: { first: string; second: string } };

function generateStar(colors: { first: string; second: string }): Sparkle {
  const starX = `${Math.random() * 100}%`;
  const starY = `${Math.random() * 100}%`;
  const color = Math.random() > 0.5 ? colors.first : colors.second;
  const delay = Math.random() * 2;
  const scale = Math.random() * 1 + 0.3;
  const lifespan = Math.random() * 10 + 5;
  const id = `${starX}-${starY}-${Date.now()}`;
  return { id, x: starX, y: starY, color, delay, scale, lifespan };
}

function sparkleReducer(state: Sparkle[], action: SparkleAction): Sparkle[] {
  switch (action.type) {
    case "INITIALIZE":
      return Array.from({ length: action.count }, () => generateStar(action.colors));
    case "TICK":
      return state.map((star) => {
        if (star.lifespan <= 0) {
          return generateStar(action.colors);
        } else {
          return { ...star, lifespan: star.lifespan - 0.1 };
        }
      });
    default:
      return state;
  }
}

const SparklesText: React.FC<SparklesTextProps> = ({
  text,
  colors = { first: "#9E7AFF", second: "#FE8BBB" },
  className,
  sparklesCount = 10,
  ...props
}) => {
  const [sparkles, dispatch] = useReducer(sparkleReducer, []);

  useEffect(() => {
    dispatch({ type: "INITIALIZE", count: sparklesCount, colors });
    const interval = setInterval(() => {
      dispatch({ type: "TICK", colors });
    }, 100);

    return () => clearInterval(interval);
  }, [colors.first, colors.second, sparklesCount]);

  return (
    <span
      className={cn("inline-block", className)}
      {...props}
      style={
        {
          "--sparkles-first-color": `${colors.first}`,
          "--sparkles-second-color": `${colors.second}`,
        } as CSSProperties
      }
    >
      <span className="relative inline-block">
        {sparkles.map((sparkle) => (
          <Sparkle key={sparkle.id} {...sparkle} />
        ))}
        <strong className="font-inherit">{text}</strong>
      </span>
    </span>
  );
};

const Sparkle: React.FC<Sparkle> = ({ id, x, y, color, delay, scale }) => {
  return (
    <m.svg
      key={id}
      className="pointer-events-none absolute z-20"
      initial={{ opacity: 0, left: x, top: y }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, scale, 0],
        rotate: [75, 120, 150],
      }}
      transition={{ duration: 0.8, repeat: Infinity, delay }}
      width="21"
      height="21"
      viewBox="0 0 21 21"
    >
      <path
        d="M9.83 0.84C10.06 0.22 10.94 0.22 11.17 0.84L11.86 2.72C12.40 4.19 12.39 6.39 13.5 7.5C14.61 8.61 16.81 8.60 18.28 9.14L20.16 9.83C20.79 10.06 20.79 10.94 20.16 11.17L18.28 11.86C16.81 12.40 14.61 12.39 13.5 13.5C12.39 14.61 12.40 16.81 11.86 18.28L11.17 20.16C10.94 20.79 10.06 20.79 9.83 20.16L9.14 18.28C8.60 16.81 8.61 14.61 7.5 13.5C6.39 12.39 4.19 12.40 2.72 11.86L0.84 11.17C0.22 10.94 0.22 10.06 0.84 9.83L2.72 9.14C4.19 8.60 6.39 8.61 7.5 7.5C8.61 6.39 8.60 4.19 9.14 2.72L9.83 0.84Z"
        fill={color}
      />
    </m.svg>
  );
};

export { SparklesText };
