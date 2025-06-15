"use client";
import { cn } from "@/lib/utils.ts";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | null;
    icon?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DON'T want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = isDarkMode
    ? ["#09090b", "#222831", "#121220", "#214759"]
    : ["#f0f0f0", "#fcefee", "#e0f7fa", "#e8f5e9"]; // light mode backgrounds

  const linearGradients = React.useMemo(
    () =>
      isDarkMode
        ? [
            "linear-gradient(to bottom right, #14a2ae, #6cfacd)",
            "linear-gradient(to bottom right, #dfb0b8, #948979)",
            "linear-gradient(to bottom right, #ecb7d6, #b993b2)",
            "linear-gradient(to bottom right, #579b72, #b993b2)",
          ]
        : [
            "linear-gradient(to bottom right, #90caf9, #e3f2fd)",
            "linear-gradient(to bottom right, #ffe0b2, #fff3e0)",
            "linear-gradient(to bottom right, #c5e1a5, #e8f5e9)",
            "linear-gradient(to bottom right, #f8bbd0, #fce4ec)",
          ],
    [isDarkMode]
  );

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(matchMedia.matches);
    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    matchMedia.addEventListener("change", handler);
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    return () => matchMedia.removeEventListener("change", handler);
  }, [activeCard, isDarkMode, linearGradients]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-18">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-600 flex items-center justify-between"
              >
                {item.title} {item.icon && item.icon}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg mt-10 max-w-sm text-slate-500"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden h-72 w-97 overflow-hidden rounded-md bg-white md:block",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
