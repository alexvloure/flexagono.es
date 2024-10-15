'use client';

import styles from './fonts/fonts.module.css';

import Card from '@/components/Card/Card';

import cyn_wink from '@/assets/cyn_wink.png';
import Image from 'next/image';
// import { Parallax } from 'react-scroll-parallax';
import MathematicCircle from '@/components/MathematicCircle/MathematicCircle';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const parentRef = useRef<HTMLDivElement>(null);
  const [translateIcon, setTranslateIcon] = useState<number | null>(null);

  const updateTranslateIcon = () => {
    if (parentRef.current) {
      setTranslateIcon(parentRef.current.offsetWidth / 2);
    }
  };

  useEffect(() => {
    updateTranslateIcon();
    window.addEventListener('resize', updateTranslateIcon);
    return () => window.removeEventListener('resize', updateTranslateIcon);
  }, []);

  return (
    <div className="h-full w-[1500px] max-w-[90%] mx-auto flex flex-col justify-between">
      {/* <Parallax speed={-20}> */}
      <div className="min-h-[calc(100dvh_-_80px_-_160px)] flex flex-col justify-between items-center gap-[4.25rem]">
        <div className="mt-14 sm:mt-40 mx-auto z-[1]">
          <h1
            className={`leading-[normal] text-[5rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] 2xl:text-[12rem] 3xl:text-[13rem] font-[500] ${styles.nohemiRegular}`}>
            Sólo es ciencia.
          </h1>
          <p className={`${styles.nohemiRegular} font-[500] text-[1.25rem] sm:text-[2rem]`}>Sube de nivel tus conocimientos</p>
        </div>
        <div
          ref={parentRef}
          className="w-[250px] lg:w-[350px] xl:w-[450px] h-[250px] lg:h-[350px] xl:h-[450px] mt-8 relative">
          {translateIcon && (
            <>
              <MathematicCircle translateIcon={translateIcon} />
              <Image
                className="w-[50%] h-[50%] absolute top-[25%] left-[25%] rotate-[-15deg]"
                src={cyn_wink}
                alt="Cynthia memoji wink"
              />
            </>
          )}
        </div>
      </div>
      {/* </Parallax>
      <Parallax speed={20}> */}
      <div className="flex relative h-[100dvh]">
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
      {/* </Parallax> */}
    </div>
  );
}
