import styles from './fonts/fonts.module.css';

import Card from '@/components/Card/Card';

import blurry from '@/public/bbblurry.svg';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-[calc(100dvh_-_80px)] w-full flex flex-col justify-between">
      <Image
        className="absolute top-16 sm:top-0 mx-auto max-w-[100dvw] max-h-[100dvh] h-auto w-auto"
        src={blurry}
        alt="blurry background"
      />
      <div className="flex flex-col mt-14 sm:mt-20 mx-auto md:mx-0 md:ml-10 xl:ml-20 2xl:ml-28 z-[1]">
        <h1
          className={`text-7xl lg:text-8xl xl:text-9xl ml-12 sm:ml-16 font-[500] ${styles.nohemiRegular}`}>
          Ciencia
        </h1>
        <p
          className={`text-6xl lg:text-7xl xl:text-8xl ${styles.fanwoodItalic}`}>
          hecha <span className="underline decoration-[#FCD655]">fácil!</span>
        </p>
      </div>
      <div className=" w-full self-center flex flex-wrap sm:flex-nowrap sm:flex-row items-start sm:items-end gap-2 md:gap-5 justify-center h-2/5 sm:h-1/2 pb-5">
        <Card
          className="w-full sm:w-1/3 h-[40%] sm:h-4/5 bg-[#BDFB52]"
          title="Primaria"
          description="hey"
        />
        <Card
          className="w-[48%] sm:w-1/3 h-[60%] sm:h-full self-stretch bg-[#FCD655]"
          title="Secundaria"
          description="hey"
        />
        <Card
          className="w-[48%] sm:w-1/3 h-[60%] sm:h-2/3 self-stretch sm:self-auto bg-[#1A63F7]"
          title="Bachillerato"
          description="hey"
        />
      </div>
    </div>
  );
}
