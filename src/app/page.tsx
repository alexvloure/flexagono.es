"use client";

import Card from "@/components/Card";

import { nohemiVariable } from "./fonts";
import { PhotosBg } from "@/components/PhotosBg";
import WhatsappIcon from "./icons/whatsapp-outlined";

export default function Home() {
  return (
    <div className="h-full z-[1] overflow-x-hidden mx-auto flex flex-col justify-between">
      <div className="min-h-[100svh] bg-[#F6F7F8] flex items-end">
        <div className="w-full min-h-[100svh]">
          <div className="relative w-[95%] min-h-[calc(100svh_-64px)] mt-10 md:mt-16 flex items-center justify-center mx-auto px-2">
            <PhotosBg className="w-full h-full mx-8" />
            <div className="z-[1] w-full pointer-events-none">
              <p
                className={`text-center line-height-small tracking-[-1px] text-[2.5rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] justify-center ${nohemiVariable.className} font-[300] [text-shadow:0px_1px_3px_rgba(27,37,80,0.14)]`}
              >
                Prepárate para
                <br />
                <span className="font-[400] italic">subir de nivel</span>
                <br /> tus conocimientos.
              </p>
              <div className="flex justify-center gap-5 mt-5">
                <button
                  className="pointer-events-auto p-3 rounded-xl flex flex-row items-center gap-2 bg-black text-white"
                  onClick={() =>
                    window.open("https://wa.me/34626139839", "_blank")
                  }
                >
                  Contactar
                  <WhatsappIcon />
                </button>
                <button className="pointer-events-auto">Más información</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex relative h-[calc(100svh_-64px)] w-[95%] mx-auto px-2">
        <div className="w-full sm:mt-28 flex flex-col">
          <div
            className={`text-[2.5rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] ${nohemiVariable.className} font-[300]`}
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
