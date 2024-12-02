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
            <PhotoBg className="max-w-[95%] w-[calc(100%_-32px)] sm:w-[50%] h-[50%] sm:h-[calc(100svh_-64px)] mx-auto mix-blend-color-dodge" />
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
      <div className="flex relative h-[calc(100svh_-64px)] w-[95%] mx-auto px-2">
        <div className="w-full sm:mt-28 flex flex-col">
          <div
            className={`text-[2.5rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] ${nohemiRegular.className}`}
          >
            cursos
          </div>
          <div className="w-full h-full flex flex-col lg:flex-row gap-5 pb-10">
            <Card
              className="w-full"
              title="Primaria"
              description="Si estás empezando con las mates, no te quedes atrás! Avanza y consigue destacar."
            />
            <Card
              className="w-full"
              title="Secundaria"
              description="Llega a bachillerato en buena forma, forja tu camino y afianza tus conocimientos!"
            />
            <Card
              className="w-full"
              title="Bachillerato"
              description="Necesitas ese impulso extra para afrontar la selectividad? Estás en el sitio adecuado."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
