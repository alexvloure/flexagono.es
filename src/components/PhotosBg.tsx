import Image from "next/image";
import bg from "@/assets/building.webp";
import { cn } from "@/lib/utils";

type PhotoBgProps = {
  className?: string;
};

export function PhotosBg({ className }: PhotoBgProps) {
  return (
    <div className={cn(className, "absolute")}>
      <Image
        className="absolute bottom-32 md:bottom-14 left-4 h-[150px] md:h-[250px] w-auto aspect-[12/16] rounded-3xl "
        src={bg}
        alt="fist photo"
      />
      {/* <Image
        className="absolute top-4 left-[50%] h-[300px] w-auto aspect-[9/16] rounded-3xl blend-image"
        src={bg}
        alt="second photo"
      /> */}
      <Image
        className="absolute top-32 md:top-10 right-4 h-[150px] md:h-[250px] w-auto aspect-[12/16] rounded-3xl"
        src={bg}
        alt="third photo"
      />
    </div>
  );
}
