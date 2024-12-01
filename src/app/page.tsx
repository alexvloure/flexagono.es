"use client";

import Card from "@/components/Card";

import { TextReveal } from "@/components/TextReveal";
import { nohemiRegular } from "./fonts";
import { PhotoBg } from "@/components/PhotoBg";

export default function Home() {
  return (
    <div className="h-full relative z-[1] overflow-x-hidden mx-auto flex flex-col justify-between">
      {/* <div id="custom-cursor" className="custom-cursor" /> */}
      <div className="relative min-h-[100svh] bg-[#151515] flex items-end">
        <div className="w-full min-h-[100svh]">
          <div className="w-[95%] min-h-[calc(100svh_-64px)] mt-16 flex items-center mx-auto px-2">
            <PhotoBg className="max-w-[95%] w-[calc(100%_-32px)] sm:w-[50%] h-[50%] sm:h-[calc(100svh_-64px)] mx-auto sm:mx-[none] mix-blend-color-dodge" />
            <div className="z-[1] w-full">
              <TextReveal
                words="Prepárate para subir de nivel tus conocimientos."
                wordsToBreak={[2, 5]}
                className={`line-height-small tracking-[-1px] text-[2.5rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] justify-center ${nohemiRegular.className} font-medium [text-shadow:0px_1px_3px_rgba(27,37,80,0.14)]`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex relative h-[100svh] bg-[#151515]">
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
