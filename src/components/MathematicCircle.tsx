import { IconEnum, IconComponent } from "@/app/icons";
import { useParallax } from "react-scroll-parallax";

export default function MathematicCircle() {
  const parallax = useParallax<HTMLDivElement>({
    rotate: [90, 300],
  });

  const icons = Object.values(IconEnum).map((icon, index) => {
    const angle = (index * 360) / Object.values(IconEnum).length;
    return (
      <IconComponent
        key={icon}
        type={icon as IconEnum}
        className="absolute w-[24px] h-[24px] lg:w-[36px] lg:h-[36px] left-[50%] origin-[0_150px] lg:origin-[0_200px] xl:origin-[0_250px]"
        style={{ transform: `rotate(${angle}deg)` }}
      />
    );
  });

  return (
    <div ref={parallax.ref} className="w-full h-full">
      <div className={`circle-container animate-spin-slow`}>{icons}</div>
    </div>
  );
}
