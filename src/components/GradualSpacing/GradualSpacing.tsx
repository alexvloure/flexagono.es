import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

type GradualSpacingProps = {
  words: string;
  duration?: number;
  filter?: boolean;
  className?: string;
  wordToBreak?: number;
};

export function GradualSpacing({
  words,
  duration,
  filter = true,
  className,
  wordToBreak,
}: GradualSpacingProps) {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  const breakOn = wordToBreak && wordToBreak - 1;

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
  }, [animate, duration, filter]);

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
            {breakOn && breakOn === idx ? <br /> : " "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div
      className={cn(
        // "flex space-x-1 flex-wrap justify-start md:justify-center",
        "flex space-x-1 flex-wrap text-center",
        className
      )}
    >
      {renderWords()}
    </div>
  );
}
