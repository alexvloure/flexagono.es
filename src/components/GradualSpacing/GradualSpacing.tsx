import styles from "../../app/fonts/fonts.module.css";
import { AnimatePresence, motion } from "framer-motion";

type GradualSpacingProps = {
  text: string;
};

export function GradualSpacing({ text }: GradualSpacingProps) {
  const gradual = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="flex space-x-1 flex-wrap justify-start md:justify-center">
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.h1
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={gradual}
            transition={{ duration: 0.5, delay: i * 0.025 }}
            //     className={clsx(
            //     "text-center font-display font-bold drop-shadow-sm",
            //     "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
            //     "tracking-[-0.02em]",
            //     "md:leading-[4rem] lg:leading-[4.5rem] xl:leading-[5rem]"
            //   )}
            className={`leading-[86%] tracking-[-1px] text-[5rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] 2xl:text-[12rem] 3xl:text-[13rem] ${styles.nohemiRegular}`}
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
}
