import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import f_outside from "@/assets/flexagono_outside.webp";
import f_map from "@/assets/flexagono_map.webp";
import cyn_wink from "@/assets/cyn_wink.png";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const ParallaxImages = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const handleMapClick = () => {
    window.open("https://maps.app.goo.gl/Jrxy2h8hhcWMA4SW8", "_blank");
  };

  return (
    <div className="relative flex w-[90%] md:w-[85%] mx-auto justify-center mt-24 md:mt-40">
      <Parallax
        startScroll={100}
        endScroll={300}
        rotate={[-4, -10]}
        translateX={["0px", isSmallScreen ? "-50px" : "-125px"]}
      >
        <Image
          className="cursor-pointer object-cover rotate-[-4deg] h-[180px] md:h-[400px] w-auto aspect-[12/16] rounded-xl hover:scale-[101%] hover:rotate-[-2deg] transition-all"
          src={f_map}
          alt="first photo"
          onClick={handleMapClick}
        />
      </Parallax>
      <Parallax
        startScroll={100}
        endScroll={250}
        opacity={[0, 1]}
        scale={[0.5, 1]}
        className="absolute opacity-0"
      >
        <Image
          className="w-[120px] h-[120px] md:w-[300px] md:h-[300px]"
          src={cyn_wink}
          alt="Cyn memoji wink"
        />
      </Parallax>
      <Parallax
        startScroll={100}
        endScroll={300}
        rotate={[4, 10]}
        translateX={["0px", isSmallScreen ? "50px" : "125px"]}
      >
        <Image
          className="object-cover rotate-[4deg] h-[180px] md:h-[400px] w-auto aspect-[12/16] rounded-xl"
          src={f_outside}
          alt="second photo"
        />
      </Parallax>
    </div>
  );
};

export default ParallaxImages;
