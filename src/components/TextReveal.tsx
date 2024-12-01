"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

type GradualSpacingProps = {
  words: string;
  duration?: number;
  filter?: boolean;
  className?: string;
  wordsToBreak?: number[];
};

export function TextReveal({
  words,
  duration,
  filter = true,
  className,
  wordsToBreak,
}: GradualSpacingProps) {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  const breakOn = wordsToBreak && wordsToBreak?.map((word) => word - 1);

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, []);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="opacity-0"
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {word}
            {breakOn && breakOn.includes(idx) ? <br /> : " "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("flex space-x-1 flex-wrap", className)}>
      {renderWords()}
    </div>
  );
}
