import Image from "next/image";
import { OrbitingCircles } from "../ui/OrbitingCircles";
import cyn_wink from "@/assets/cyn_wink.png";
import PiIcon from "@/app/icons/pi-stroke-rounded";
import Coordinate02Icon from "@/app/icons/coordinate-02-stroke-rounded";
import NotEqualSignIcon from "@/app/icons/not-equal-sign-stroke-rounded";
import SinIcon from "@/app/icons/sin-stroke-rounded";
import Root01Icon from "@/app/icons/root-01-stroke-rounded";
import FunctionOfXIcon from "@/app/icons/function-of-x-stroke-rounded";
import AlphaIcon from "@/app/icons/alpha-stroke-rounded";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useMemo } from "react";

export function MathematicOrbit() {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const { outerRadius, innerRadius, imgWidth } = useMemo(() => {
    return {
      outerRadius: isSmallScreen ? 170 : 220,
      innerRadius: isSmallScreen ? 100 : 130,
      imgWidth: isSmallScreen ? 150 : 200,
    };
  }, [isSmallScreen]);

  return (
    <div className="absolute top-0 right-0 flex justify-center items-center h-[500px] w-full mt-8">
      <Image
        className={`${imgWidth} absolute mb-4 mr-4 rotate-[-15deg]`}
        width={imgWidth}
        src={cyn_wink}
        alt="Cynthia memoji wink"
      />
      {/* Outer circles */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        delay={5}
        duration={20}
        radius={outerRadius}
      >
        <PiIcon />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        delay={10}
        duration={20}
        radius={outerRadius}
      >
        <Coordinate02Icon />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        delay={15}
        duration={20}
        radius={outerRadius}
      >
        <NotEqualSignIcon />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        delay={20}
        duration={20}
        radius={outerRadius}
      >
        <SinIcon />
      </OrbitingCircles>
      {/*  */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        delay={9}
        duration={9}
        radius={innerRadius}
        reverse
      >
        <Root01Icon />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        delay={6}
        duration={9}
        radius={innerRadius}
        reverse
      >
        <FunctionOfXIcon />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        delay={3}
        duration={9}
        radius={innerRadius}
        reverse
      >
        <AlphaIcon />
      </OrbitingCircles>
      {/*  */}
    </div>
  );
}
