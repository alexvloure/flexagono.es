import Image from "next/image";
import f_outside from "@/assets/flexagono_outside.webp";
import f_map from "@/assets/flexagono_map.webp";
import { cn } from "@/lib/utils";

type PhotoBgProps = {
  className?: string;
};

export function PhotosBg({ className }: PhotoBgProps) {
  const handleMapClick = () => {
    window.open("https://maps.app.goo.gl/Jrxy2h8hhcWMA4SW8", "_blank");
  };

  return (
    <div className={cn(className, "absolute")}>
      <Image
        className="absolute cursor-pointer object-cover bottom-24 md:bottom-14 left-4 h-[150px] md:h-[250px] w-auto aspect-[12/16] rounded-xl hover:scale-[101%] hover:rotate-[-2deg] transition-all"
        src={f_map}
        alt="first photo"
        onClick={handleMapClick}
      />
      {/* <Image
        className="absolute top-4 left-[50%] h-[150px] md:h-[250px] w-auto aspect-[12/16] rounded-3xl"
        src={f_science}
        alt="second photo"
      /> */}
      <Image
        className="absolute top-24 md:top-10 right-4 h-[150px] md:h-[250px] w-auto aspect-[12/16] rounded-xl"
        src={f_outside}
        alt="second photo"
      />
    </div>
  );
}
