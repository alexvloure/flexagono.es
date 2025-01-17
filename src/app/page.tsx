"use client";

import Card from "@/components/Card";

import { nohemiVariable } from "./fonts";
import WhatsappIcon from "./icons/whatsapp-outlined";
import LevelUpIcon from "./icons/level-up";
import { Button } from "@/components/ui/button";
import ParallaxImages from "@/components/ParallaxImages";
import PhoneDrawer from "@/components/PhoneDrawer";
import PhoneInput from "@/components/PhoneInput";
import BeakerFlask from "./icons/beaker-flask";

export default function Home() {
  return (
    <div className="h-full overflow-x-hidden mx-auto">
      <section className="h-full md:mt-16">
        <div className="relative pt-32 min-h-[40svh] w-[90%] md:w-[85%] flex flex-col items-center justify-end mx-auto px-2">
          <p
            className={`text-center leading-tight tracking-[-1px] text-[2.25rem] md:text-[2.5rem] lg:text-[3.5rem] justify-center ${nohemiVariable.className} font-[350] [text-shadow:0px_1px_3px_rgba(27,37,80,0.14)]`}
          >
            Sube de nivel
            <LevelUpIcon className="inline-block ml-4 mr-3 mb-1 p-1 w-10 h-10 bg-black text-white rounded-md" />
            tus conocimientos
          </p>
          <p className="text-center text-pretty font-[350] mt-2 max-w-[700px]">
            Descubre la ciencia{" "}
            <BeakerFlask className="inline rotate-[5deg] text-zinc-700" /> de
            una forma sencilla. Con nuestro seguimiento personalizado{" "}
            <span className="hidden md:inline">
              y adaptado a tus necesidades,
            </span>{" "}
            conseguirás superar cualquier reto académico.
          </p>
          <div className="flex items-center justify-center gap-2 md:gap-5 mt-5">
            <PhoneDrawer
              placeholder="Introduce tu número"
              className="block md:hidden"
            />
            <PhoneInput
              placeholder="Introduce tu número"
              buttonLabel="Llámame"
              action={() => {}}
              className="hidden md:block"
            />

            <span>|</span>
            <Button
              onClick={() => window.open("https://wa.me/34626139839", "_blank")}
            >
              <WhatsappIcon />
              Contacta
            </Button>
          </div>
        </div>
        <ParallaxImages />
      </section>
      <div className="flex relative w-[90%] md:w-[85%] mt-24 md:mt-32 mx-auto px-2">
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
