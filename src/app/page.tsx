"use client";

import styles from "./fonts/fonts.module.css";

import Card from "@/components/Card/Card";

import cyn_wink from "@/assets/cyn_wink.png";
import Image from "next/image";
import MathematicCircle from "@/components/MathematicCircle/MathematicCircle";
import { useEffect } from "react";
import { GradualSpacing } from "@/components/GradualSpacing/GradualSpacing";

export default function Home() {
  useEffect(() => {
    const customCursor = document.getElementById("custom-cursor");
    console.log(customCursor);
    if (!customCursor) return;

    const updateCursorPosition = (e: MouseEvent) => {
      customCursor.style.top = `${e.clientY}px`;
      customCursor.style.left = `${e.clientX}px`;
    };

    const hideCursor = () => {
      customCursor.style.opacity = "0";
    };

    const showCursor = () => {
      customCursor.style.opacity = "1";
    };

    window.addEventListener("mousemove", updateCursorPosition);
    document.addEventListener("mouseleave", hideCursor);
    document.addEventListener("mouseenter", showCursor);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      document.removeEventListener("mouseleave", hideCursor);
      document.removeEventListener("mouseenter", showCursor);
    };
  }, []);

  return (
    <div className="h-full w-[1500px] max-w-[90%] overflow-x-hidden mx-auto flex flex-col justify-between">
      <div id="custom-cursor" className="custom-cursor" />
      <div className="min-h-[calc(100dvh_-_80px_-_160px)] flex flex-col justify-between items-center gap-[4.25rem]">
        <div className="mt-14 sm:mt-40 mx-auto z-[1]">
          <GradualSpacing
            // words="Todo es ciencia."
            words="Prepárate para subir de nivel tus conocimientos"
            wordToBreak={5}
            // className={`leading-[86%] tracking-[-1px] text-[5rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] 2xl:text-[12rem] 3xl:text-[13rem] ${styles.nohemiRegular}`}
            className={`leading-[86%] tracking-[-1px] text-[2.5rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] 2xl:text-[12rem] 3xl:text-[13rem] ${styles.nohemiRegular} font-medium text-[#3c3a34] [text-shadow:0px_1px_3px_rgba(27,37,80,0.14)]`}
          />
          {/* <p
            className={`${styles.nohemiRegular} text-[1.25rem] sm:text-[2rem] mt-4`}
          >
            Prepárate para subir de nivel tus conocimientos
          </p> */}
        </div>
        <div className="relative w-[300px] lg:w-[400px] xl:w-[500px] h-[300px] lg:h-[400px] xl:h-[500px] mt-8">
          <MathematicCircle />
          <Image
            className="w-[50%] h-[50%] absolute top-[25%] left-[25%] rotate-[-15deg]"
            src={cyn_wink}
            alt="Cynthia memoji wink"
          />
        </div>
      </div>
      <div className="flex relative h-[100dvh]">
        <div className="w-full h-[80%] self-center flex flex-wrap sm:flex-nowrap sm:flex-row items-start sm:items-end gap-2 md:gap-5 justify-center pb-5">
          <Card
            className="w-full sm:w-1/3 h-[40%] sm:h-4/5 bg-white"
            title="Primaria"
            description="hey"
          />
          <Card
            className="w-[48%] sm:w-1/3 h-[60%] sm:h-full self-stretch bg-white"
            title="Secundaria"
            description="hey"
          />
          <Card
            className="w-[48%] sm:w-1/3 h-[60%] sm:h-2/3 self-stretch sm:self-auto bg-white"
            title="Bachillerato"
            description="hey"
          />
        </div>
      </div>
    </div>
  );
}
