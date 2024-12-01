import Image from "next/image";
import bg from "@/assets/building.webp";
import { cn } from "@/lib/utils";

type PhotoBgProps = {
  className?: string;
};

export function PhotoBg({ className }: PhotoBgProps) {
  return (
    <div className={cn(className, "photo-bg-container")}>
      <Image
        className="object-cover h-full rounded-3xl blend-image"
        src={bg}
        alt="bg building photo"
      />
    </div>
  );
}
