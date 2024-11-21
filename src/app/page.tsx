"use client";

import Card from "@/components/Card/Card";

import { TextReveal } from "@/components/TextReveal/TextReveal";
import { nohemiRegular } from "./fonts";

export default function Home() {
  return (
    <div className="h-full relative z-[1] overflow-x-hidden mx-auto flex flex-col justify-between">
      {/* <div id="custom-cursor" className="custom-cursor" /> */}
      <div className="relative min-h-[100svh] bg-[#fff3de] flex items-end">
        <div className="absolute mix-blend-multiply w-full inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/background.mp4" type="video/mp4" />
          </video>
        </div>{" "}
        <div className="w-full min-h-[100svh]">
          <div className="h-16 border-b-[1px] border-[#3c3a3437]">
            <div className="h-16 w-[95%] mx-auto border-x-[1px] border-[#3c3a3437]" />
          </div>
          <div className="w-[95%] min-h-[calc(100svh_-64px)] flex items-end mx-auto px-2 border-x-[1px] border-[#3c3a3437]">
            <div className="my-32 sm:mt-32 sm:mb-12 z-[1] w-full md:w-[65%]">
              <TextReveal
                words="Prepárate para subir de nivel tus conocimientos."
                wordsToBreak={[2, 5]}
                className={`line-height-small tracking-[-1px] text-[2.5rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] ${nohemiRegular.className} font-medium [text-shadow:0px_1px_3px_rgba(27,37,80,0.14)]`}
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
