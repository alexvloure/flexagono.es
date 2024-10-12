'use client';

import styles from './fonts/fonts.module.css';

import Card from '@/components/Card/Card';

import cyn_wink from '@/assets/cyn_wink.png';
import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';
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
      <Parallax speed={-20}>
        <div className='h-[calc(100dvh_-_80px_-_160px)] md:pr-20 flex flex-col md:flex-row justify-between items-center gap-6'>
          <div className="flex flex-col mt-14 sm:mt-20 mx-auto md:mx-0 md:ml-10 xl:ml-20 2xl:ml-28 z-[1]">
            <h1
              className={`text-7xl md:text-8xl xl:text-9xl ml-12 sm:ml-16 font-[500] ${styles.nohemiRegular}`}>
              Ciencia
            </h1>
            <p
              className={`text-6xl md:text-7xl xl:text-8xl ${styles.fanwoodItalic}`}>
              hecha <span className="underline decoration-[#ffffffb0]">fácil!</span>
            </p>
          </div>
          <div ref={parentRef} className="w-[280px] md:w-[350px] lg:w-[500px] h-[280px] md:h-[350px] lg:h-[500px] mt-8 relative">
            {translateIcon && (
            <>
              <MathematicCircle translateIcon={translateIcon} />
              <Image className="w-[50%] h-[50%] absolute top-[25%] left-[25%] rotate-[-15deg]" src={cyn_wink} alt="Cynthia memoji wink" />
            </>
            )}
          </div>
        </div>
      </Parallax>
      <Parallax speed={20}>
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
      </Parallax>
    </div>
  );
}
